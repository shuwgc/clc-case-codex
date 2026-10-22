import { clearNavigationHistory } from '../core/navigation-history.js';
/* ================================================================
 * 组件：搜索交互、导出、重置、回到顶部、提示条
 * ================================================================ */

import { $, toCsv, scrollToEl } from '../core/dom.js';
import { filterProjects, hasActiveFilters } from '../core/filters.js';
import { setQuery, setMode, resetFilters, getState, VIEW } from '../core/state.js';
import { ALL } from '../../data/projects.js';
import { exportCsv, notify } from '../core/desktop.js';

/* ---------- 搜索 ---------- */

export function initSearch() {
  const searchInput = $('searchInput');
  const heroSearch = $('heroSearch');
  const heroForm = $('heroSearchForm');
  const clearBtn = $('clearBtn');
  const modeProject = $('modeProject');
  const modeFeature = $('modeFeature');

  if (searchInput) {
    searchInput.addEventListener('input', () => setQuery(searchInput.value));
  }
  if (heroSearch) {
    heroSearch.addEventListener('input', () => setQuery(heroSearch.value));
  }
  if (heroForm) {
    heroForm.addEventListener('submit', event => {
      event.preventDefault();
      setQuery(heroSearch ? heroSearch.value : '');
      scrollToEl($('cases'));
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      setQuery('');
      if (searchInput) searchInput.focus();
    });
  }
  if (modeProject) {
    modeProject.addEventListener('click', () => setMode('project'));
  }
  if (modeFeature) {
    modeFeature.addEventListener('click', () => setMode('feature'));
  }

  /* Esc 清空搜索（弹窗打开时由弹窗在捕获阶段先行拦截） */
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || getState().view !== VIEW.LIBRARY) return;
    if (!getState().query) return; // 没有搜索词就不必触发重渲染
    setQuery('');
  });
}

/** 把状态同步回输入框与按钮外观 */
export function syncSearchUI(state) {
  const searchInput = $('searchInput');
  const heroSearch = $('heroSearch');
  const clearBtn = $('clearBtn');
  const modeProject = $('modeProject');
  const modeFeature = $('modeFeature');

  if (searchInput && searchInput.value !== state.query) searchInput.value = state.query;
  if (heroSearch && heroSearch.value !== state.query) heroSearch.value = state.query;
  if (clearBtn) clearBtn.classList.toggle('visible', state.query.length > 0);
  if (modeProject) modeProject.classList.toggle('active', state.mode === 'project');
  if (modeFeature) modeFeature.classList.toggle('active', state.mode === 'feature');
  if (searchInput) {
    searchInput.placeholder = state.mode === 'project' ? '输入项目名称…' : '输入特征关键词…';
  }
}

/** 聚焦搜索框（菜单快捷键 Cmd/Ctrl+F） */
export function focusSearch() {
  const searchInput = $('searchInput');
  if (!searchInput) return;
  scrollToEl($('cases'));
  setTimeout(() => searchInput.focus(), 320);
}

/* ---------- 导出与重置 ---------- */

export function initActions() {
  const exportBtn = $('exportBtn');
  const resetBtn = $('resetFiltersBtn');

  if (exportBtn) exportBtn.addEventListener('click', handleExport);
  if (resetBtn) resetBtn.addEventListener('click', () => {
    resetFilters();
    notify('已重置全部筛选条件', 'ok');
  });
}

/** 导出当前筛选结果为 CSV */
export async function handleExport() {
  const state = getState();
  const rows = filterProjects(state);

  if (rows.length === 0) {
    notify('当前筛选结果为空，没有可导出的内容', 'warn');
    return;
  }

  const header = ['编号', '案例名称', '批次', '省级行政区', '总投资', '核心做法与成效', '特征标签'];
  const body = rows.map(p => [
    p.id,
    p.name,
    p.batch,
    p.province,
    p.invest === '—' ? '未披露' : p.invest,
    p.desc,
    p.tags.join('；')
  ]);

  const csv = toCsv([header, ...body]);
  const filename = buildFilename(state);

  const result = await exportCsv(filename, csv);
  if (result.ok) {
    notify(`已导出 ${rows.length} 条案例${result.filePath ? '：' + result.filePath : ''}`, 'ok');
  } else if (result.reason !== 'canceled') {
    notify('导出失败：' + (result.reason || '未知错误'), 'err');
  }
}

/** 依据筛选条件生成文件名，便于区分多次导出 */
function buildFilename(state) {
  const parts = ['案例筛选结果'];
  if (state.batch && state.batch !== ALL) parts.push(state.batch);
  if (state.province && state.province !== ALL) parts.push(state.province);
  if (state.query) parts.push(state.query.replace(/[\\/:*?"<>|]/g, ''));
  parts.push(stampNow());
  return parts.join('_') + '.csv';
}

function stampNow() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}`;
}

/* ---------- 筛选提示文案 ---------- */

export function buildFilterHint(state) {
  if (!hasActiveFilters(state)) return '';
  const parts = [];
  if (state.batch !== ALL) parts.push(`批次：${state.batch}`);
  if (state.province !== ALL) parts.push(`地区：${state.province}`);
  if (state.activeTag) parts.push(`特征：${state.activeTag}`);
  else if (state.query) parts.push(`关键词：${state.query}`);
  return '当前筛选 — ' + parts.join(' · ');
}

export function updateExportAvailability() {
  const exportBtn = $('exportBtn');
  if (!exportBtn) return;
  exportBtn.disabled = filterProjects(getState()).length === 0;
}

/* ---------- 回到顶部 ---------- */

export function initToTop() {
  const toTop = $('toTop');
  if (!toTop) return;

  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });

  toTop.addEventListener('click', () => {
    clearNavigationHistory();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- 应用内提示条 ---------- */

export function initToasts() {
  const stack = $('toastStack');
  if (!stack) return;

  document.addEventListener('app:notify', event => {
    const { message, type } = event.detail || {};
    showToast(stack, message, type);
  });
}

function showToast(stack, message, type = 'info') {
  const el = document.createElement('div');
  el.className = 'toast' + (type && type !== 'info' ? ' ' + type : '');
  el.textContent = message;
  stack.appendChild(el);

  setTimeout(() => {
    el.style.transition = 'opacity .25s, transform .25s';
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    setTimeout(() => el.remove(), 260);
  }, 3200);
}
