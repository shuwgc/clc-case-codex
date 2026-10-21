import { initNavigationHistory, isRestoringNavigation } from './core/navigation-history.js';
/* ================================================================
 * 应用入口：装配状态、视图与交互
 * ----------------------------------------------------------------
 * 数据流：用户操作 -> state 变更 -> 订阅回调 -> 各视图重渲染
 * 视图之间不互相调用，只单向响应状态，避免隐式耦合。
 * ================================================================ */

import { PROJECTS } from '../data/projects.js';
import { getState, subscribe, setState, setQuery, resetFilters, validateState, VIEW, navigate } from './core/state.js';
import { getAppInfo, isDesktop, onMenuCommand, notify } from './core/desktop.js';

import { initStats } from './components/stats.js';
import { renderBatchTabs, renderProvinceChips, renderNavMenus, initNav, closeNav } from './components/filters-view.js';
import { renderTagCloud } from './components/tag-cloud.js';
import { renderCards, initLoadMore } from './components/case-grid.js';
import { renderDistribution } from './components/distribution.js';
import { openModal, closeModal, isModalOpen, initModal } from './components/case-modal.js';
import { renderPolicyIndex, resetPolicyIndexState } from './components/policy-index.js';
import { renderCasePolicy } from './components/case-policy.js';
import { renderSourcesIndex, resetSourcesIndexState } from './components/sources-index.js';
import { renderCaseSources } from './components/case-sources.js';
import { renderResearch, focusResearchSearch } from './components/research-view.js';
import { renderExternalSearch, focusExternalSearch } from './components/external-search-view.js';
import { renderFsqca } from './components/fsqca-view.js';
import { initEvidenceLinks } from './components/fsqca-case-strip.js';
import { applyResearchTarget } from './core/research-navigation.js';
import {
  initSearch, syncSearchUI, focusSearch,
  initActions, buildFilterHint, updateExportAvailability, initToTop, initToasts, handleExport
} from './components/actions.js';
import { $, scrollToEl } from './core/dom.js';

/* ---------- 渲染调度 ---------- */

/**
 * 依据最新状态渲染全部动态区域。
 *
 * 用 rAF 合并同一帧内的多次状态变更。但 rAF 在窗口隐藏 / 最小化时
 * 会被浏览器暂停，若此时状态发生变化就会一直不渲染，等窗口重新
 * 显示时才补上——中途若有依赖 DOM 的操作就会拿到旧节点。
 * 因此这里同时挂一个短定时器兜底：谁先触发谁执行，并清掉另一个。
 */
let frameHandle = null;
let timerHandle = null;

function scheduleRender() {
  if (frameHandle !== null || timerHandle !== null) return;

  const flush = () => {
    if (frameHandle !== null) { cancelAnimationFrame(frameHandle); frameHandle = null; }
    if (timerHandle !== null) { clearTimeout(timerHandle); timerHandle = null; }
    render();
  };

  frameHandle = requestAnimationFrame(flush);
  // 兜底：即使 rAF 被暂停，也能在 16ms 内完成渲染
  timerHandle = setTimeout(flush, 16);
}

/** 立即渲染（初始化用，不走调度） */
export function renderNow() {
  if (frameHandle !== null) { cancelAnimationFrame(frameHandle); frameHandle = null; }
  if (timerHandle !== null) { clearTimeout(timerHandle); timerHandle = null; }
  return render();
}

async function render() {
  const state = getState();

  /* 页面切换：案例库首页 / 政策工具总览 / 单案例政策工具页 */
  await syncView(state);

  if (state.view !== VIEW.LIBRARY) return;

  renderBatchTabs(state);
  renderProvinceChips(state);
  renderNavMenus(state);
  renderTagCloud(state);
  syncSearchUI(state);

  renderCards(state, openModal, buildFilterHint(state));
  renderDistribution(state);
  updateExportAvailability();
}

/**
 * 根据当前视图显隐页面容器，并渲染对应页面。
 *
 * 政策与资料页内容较重，且状态订阅会在任何筛选
 * 变化时触发，因此这里记住「上次渲染的视图签名」，只有签名变化时才
 * 重写页面 HTML，避免无谓的重排与动画重放。
 */
let lastViewKey = '';

async function syncView(state) {
  const library = document.querySelector('.site-main-library');
  const pagePolicy = $('pagePolicy');
  const pageCase = $('pageCasePolicy');
  const pageSources = $('pageSources');
  const pageCaseSources = $('pageCaseSources');
  const pageResearch = $('pageResearch');
  const pageExternal = $('pageExternal');
  const pageFsqca = $('pageFsqca');

  const isPolicy = state.view === VIEW.POLICY;
  const isCase = state.view === VIEW.CASE_POLICY;
  const isSources = state.view === VIEW.SOURCES;
  const isCaseSources = state.view === VIEW.CASE_SOURCES;
  const isResearch = state.view === VIEW.RESEARCH;
  const isExternal = state.view === VIEW.EXTERNAL;
  const isFsqca = state.view === VIEW.FSQCA;
  $('researchNavBtn')?.setAttribute('aria-current', isResearch ? 'page' : 'false');
  $('externalNavBtn')?.setAttribute('aria-current', isExternal ? 'page' : 'false');
  $('fsqcaNavBtn')?.setAttribute('aria-current', isFsqca ? 'page' : 'false');

  if (library) library.style.display = state.view === VIEW.LIBRARY ? '' : 'none';

  /* 四个二级页面共用同一套显隐逻辑：命中则 .active，否则隐藏并标记 aria-hidden */
  [[pagePolicy, isPolicy], [pageCase, isCase],
   [pageSources, isSources], [pageCaseSources, isCaseSources], [pageResearch, isResearch], [pageExternal, isExternal], [pageFsqca, isFsqca]].forEach(([el, on]) => {
    if (!el) return;
    el.classList.toggle('active', on);
    el.setAttribute('aria-hidden', String(!on));
  });

  document.body.dataset.view = state.view;

  /* 政策页也维护导航下拉（高亮当前案例所在项） */
  if (state.view !== VIEW.LIBRARY) renderNavMenus(state);

  const key = `${state.view}:${JSON.stringify(state.viewParams || {})}`;
  const changed = key !== lastViewKey;

  /* 离开总览页时清掉页内状态：否则再回来会残留上次展开的透视结果 */
  if (!isRestoringNavigation() && !isPolicy && lastViewKey.startsWith(VIEW.POLICY)) resetPolicyIndexState();
  if (!isRestoringNavigation() && !isSources && lastViewKey.startsWith(VIEW.SOURCES)) resetSourcesIndexState();

  lastViewKey = key;

  if (isPolicy && changed) {
    renderPolicyIndex(state);
    playEnter(pagePolicy);
  }
  if (isCase && changed) {
    renderCasePolicy(state);
    playEnter(pageCase);
  }
  if (isSources && changed) {
    renderSourcesIndex(state);
    playEnter(pageSources);
  }
  if (isCaseSources && changed) {
    renderCaseSources(state);
    playEnter(pageCaseSources);
  }
  if (isResearch && changed) await renderResearch(state);
  if (isExternal && changed) await renderExternalSearch(state);
  if (isFsqca && changed) await renderFsqca(state);
  if (changed && !isRestoringNavigation() && state.viewParams?.returnToResearch) {
    const targetPage = isCase ? pageCase : isCaseSources ? pageCaseSources : isPolicy ? pagePolicy : null;
    if (targetPage) applyResearchTarget(targetPage, state.viewParams);
  }
}

/** 页面切换时的入场动画（只在真正换页时触发一次） */
function playEnter(page) {
  if (!page) return;
  page.classList.remove('entering');
  void page.offsetWidth; // 强制重排，让动画能重新开始
  page.classList.add('entering');
  page.addEventListener('animationend', () => page.classList.remove('entering'), { once: true });
}

/* ---------- 应用菜单命令 ---------- */

function initMenuCommands() {
  onMenuCommand(command => {
    switch (command) {
      case 'home':
        navigate(VIEW.LIBRARY, {});
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'focus-search':
        if (getState().view === VIEW.RESEARCH) {
          navigate(VIEW.RESEARCH, {});
          requestAnimationFrame(focusResearchSearch);
          break;
        }
        if (getState().view === VIEW.EXTERNAL) {
          navigate(VIEW.EXTERNAL, {});
          requestAnimationFrame(focusExternalSearch);
          break;
        }
        /* 其他页面先回到案例库再聚焦 */
        if (getState().view !== VIEW.LIBRARY) navigate(VIEW.LIBRARY, {});
        requestAnimationFrame(focusSearch);
        break;
      case 'export-csv':
        if (isModalOpen()) closeModal();
        if (getState().view !== VIEW.LIBRARY) {
          notify('导出功能仅在案例库首页可用', 'warn');
          break;
        }
        handleExport();
        break;
      case 'reset-filters':
        if (getState().view !== VIEW.LIBRARY) {
          navigate(VIEW.LIBRARY, {});
        }
        resetFilters();
        notify('已重置全部筛选条件', 'ok');
        break;
      default:
        break;
    }
  });
}

/* ---------- 启动 ---------- */

async function bootstrap() {
  /* 数据自检：发现问题时提示，但不阻断使用 */
  const problems = validateState();
  if (problems.length) {
    console.warn('案例数据存在问题：\n' + problems.join('\n'));
  }

  initNavigationHistory({ getState, restore: async state => {
    setState(state); lastViewKey = ''; await renderNow();
  } });
  initStats();
  initNav();
  initSearch();
  initModal();
  initEvidenceLinks();
  initLoadMore();
  initActions();
  initToTop();
  initToasts();
  initMenuCommands();

  subscribe(scheduleRender);
  render();

  /* 应用信息写入页脚，便于确认版本 */
  try {
    const info = await getAppInfo();
    const meta = $('footerMeta');
    const suffix = '制作维护：上海大学全域土地综合整治项目组 · 数据来源：自然资源部';
    if (meta) {
      meta.textContent = isDesktop ? `${suffix} · v${info.version}` : `${suffix} · Web v0.6.7`;
    }
    document.title = isDesktop
      ? `${info.name} v${info.version}`
      : '全域土地综合整治试点案例库 · Web v0.6.7';
  } catch {
    /* 拿不到版本信息不影响主流程 */
  }

  console.log(`全域土地综合整治试点案例库已启动，共 ${PROJECTS.length} 个案例${isDesktop ? '（桌面版）' : ''}`);
}

/* 兜底：任何未捕获错误都提示用户，而不是静默白屏 */
window.addEventListener('error', event => {
  console.error('应用运行出错：', event.error || event.message);
});
window.addEventListener('unhandledrejection', event => {
  console.error('未处理的异步错误：', event.reason);
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
