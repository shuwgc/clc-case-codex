/* ================================================================
 * 组件：批次分段选择、地区标签、顶部下拉菜单
 * ================================================================ */

import { $, esc, delegate, scrollToEl } from '../core/dom.js';
import { BATCHES, ALL, PROJECTS } from '../../data/projects.js';
import { CASES, groupByBatch, POLICY_META } from '../../data/policy.js';
import { SOURCES_META, CASES as SOURCES_CASES } from '../../data/sources-data.js';
import { provinceCounts, batchCounts } from '../core/domain.js';
import {
  setBatch, toggleProvince, goPolicyIndex, goCasePolicy, goLibrary, VIEW,
  goSourcesIndex, goCaseSources, navigate, getState, goFsqca
} from '../core/state.js';

/* ---------- 批次分段按钮 ---------- */

export function renderBatchTabs(state) {
  const container = $('batchTabs');
  if (!container) return;
  const counts = batchCounts();

  container.innerHTML = BATCHES.map(b =>
    `<button type="button" class="seg-btn ${state.batch === b ? 'active' : ''}" role="tab" aria-selected="${state.batch === b}" data-batch="${esc(b)}">${esc(b)}${b === ALL ? '' : `（${counts[b] || 0}）`}</button>`
  ).join('');

  delegate(container, '[data-batch]', 'click', (_e, btn) => setBatch(btn.dataset.batch));
}

/* ---------- 地区标签 ---------- */

export function renderProvinceChips(state) {
  const container = $('provinceChips');
  if (!container) return;

  const chips = [`<button type="button" class="chip ${state.province === ALL ? 'active' : ''}" data-prov="${esc(ALL)}">${esc(ALL)}</button>`];
  provinceCounts().forEach(([prov]) => {
    chips.push(`<button type="button" class="chip ${state.province === prov ? 'active' : ''}" data-prov="${esc(prov)}">${esc(prov)}</button>`);
  });

  container.innerHTML = chips.join('');
  delegate(container, '[data-prov]', 'click', (_e, chip) => toggleProvince(chip.dataset.prov));
}

/* ---------- 顶部下拉：分批次 / 分地区 ---------- */

export function renderNavMenus(state) {
  const counts = batchCounts();

  renderPolicyMenu(state);
  renderSourcesMenu(state);

  const batchMenu = $('batchMenu');
  if (batchMenu) {
    batchMenu.innerHTML = BATCHES.map(b =>
      `<button type="button" role="menuitem" class="${state.batch === b ? 'active' : ''}" data-batch="${esc(b)}"><span>${esc(b)}</span><small>${b === ALL ? PROJECTS.length : counts[b] || 0} 个</small></button>`
    ).join('');

    delegate(batchMenu, '[data-batch]', 'click', (_e, btn) => {
      setBatch(btn.dataset.batch);
      closeNav();
      scrollToEl($('cases'));
    });
  }

  const provinceMenu = $('provinceMenu');
  if (provinceMenu) {
    provinceMenu.innerHTML = provinceCounts().map(([prov, count]) =>
      `<button type="button" role="menuitem" class="${state.province === prov ? 'active' : ''}" data-prov="${esc(prov)}"><span>${esc(prov)}</span><small>${count} 个</small></button>`
    ).join('');

    delegate(provinceMenu, '[data-prov]', 'click', (_e, btn) => {
      // 下拉里点省份是"选中"语义，若已是当前省份则取消
      toggleProvince(btn.dataset.prov);
      closeNav();
      scrollToEl($('cases'));
    });
  }
}

/* ---------- 顶部下拉：政策工具（二级栏目） ---------- */

/**
 * 政策工具二级栏目：上为总入口，下按批次罗列全部案例，
 * 直接索引到各案例的「查看政策工具」页。
 */
export function renderPolicyMenu(state) {
  const menu = $('policyMenu');
  if (!menu) return;

  const groups = groupByBatch().filter(g => g.cases.length);

  menu.innerHTML = `
    <button type="button" class="pm-entry" data-policy-index>
      <span class="pm-entry-ic">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>
      </span>
      <span class="pm-entry-tx">
        <strong>政策工具总览</strong>
        <small>${POLICY_META.totalTools} 项工具 · ${POLICY_META.totalCases} 个案例</small>
      </span>
    </button>
    <div class="pm-divider"></div>
    ${groups.map(g => `
      <div class="pm-group">
        <span class="pm-group-title">${esc(g.batch)}</span>
        <div class="pm-items">
          ${g.cases.map(c => {
            const active = state.view === VIEW.CASE_POLICY && state.viewParams?.caseId === c.id;
            return `<button type="button" role="menuitem" class="pm-item ${active ? 'active' : ''}" data-case-policy="${c.id}" title="${esc(c.name)}">
              <span class="pm-idx">${c.id}</span>
              <span class="pm-name">${esc(c.name)}</span>
              <small>${c.stats.tools}</small>
            </button>`;
          }).join('')}
        </div>
      </div>`).join('')}`;

  delegate(menu, '[data-policy-index]', 'click', () => {
    goPolicyIndex();
    closeNav();
  });

  delegate(menu, '[data-case-policy]', 'click', (_e, btn) => {
    goCasePolicy(btn.dataset.casePolicy);
    closeNav();
  });
}

/* ---------- 顶部下拉：相关资料（二级栏目） ---------- */

/**
 * 相关资料二级栏目：上为总入口，下按批次罗列全部案例，
 * 直接索引到各案例的「查看相关资料」页。
 * 结构与政策工具栏目一致，保证两个二级栏目的操作手感统一。
 */
export function renderSourcesMenu(state) {
  const menu = $('sourcesMenu');
  if (!menu) return;

  const groups = groupByBatch().filter(g => g.cases.length);
  /* 每个案例的来源条数，显示在菜单项右侧（与政策工具菜单的「工具数」同位） */
  const srcCount = new Map(SOURCES_CASES.map(c => [c.id, c.counts.items]));

  menu.innerHTML = `
    <button type="button" class="pm-entry" data-sources-index>
      <span class="pm-entry-ic">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5.5A1.5 1.5 0 015.5 4H10l2 2.5h6.5A1.5 1.5 0 0120 8v10.5A1.5 1.5 0 0118.5 20h-13A1.5 1.5 0 014 18.5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
      </span>
      <span class="pm-entry-tx">
        <strong>相关资料总览</strong>
        <small>${SOURCES_META.totalItems} 条来源 · ${SOURCES_META.totalExcerpts} 篇摘录 · ${SOURCES_META.totalCases} 个案例</small>
      </span>
    </button>
    <div class="pm-divider"></div>
    ${groups.map(g => `
      <div class="pm-group">
        <span class="pm-group-title">${esc(g.batch)}</span>
        <div class="pm-items">
          ${g.cases.map(c => {
            const active = state.view === VIEW.CASE_SOURCES && state.viewParams?.caseId === c.id;
            const n = srcCount.get(c.id) || 0;
            return `<button type="button" role="menuitem" class="pm-item ${active ? 'active' : ''}" data-case-sources="${c.id}" title="${esc(c.name)}">
              <span class="pm-idx">${c.id}</span>
              <span class="pm-name">${esc(c.name)}</span>
              <small>${n}</small>
            </button>`;
          }).join('')}
        </div>
      </div>`).join('')}`;

  delegate(menu, '[data-sources-index]', 'click', () => {
    goSourcesIndex();
    closeNav();
  });

  delegate(menu, '[data-case-sources]', 'click', (_e, btn) => {
    goCaseSources(btn.dataset.caseSources);
    closeNav();
  });
}

/* ---------- 导航开关 ---------- */

export function initNav() {
  $('researchNavBtn')?.addEventListener('click', () => {
    closeNav();
    const input = $('searchInput');
    navigate(VIEW.RESEARCH, { query: input?.value || '', province: getState().province === ALL ? '' : getState().province, batch: getState().batch === ALL ? '' : getState().batch });
    window.scrollTo({ top: 0, behavior: 'auto' });
  });
  $('externalNavBtn')?.addEventListener('click', event => {
    event.preventDefault();
    closeNav();
    navigate(VIEW.EXTERNAL, {});
    window.scrollTo({ top: 0, behavior: 'auto' });
  });
  $('fsqcaNavBtn')?.addEventListener('click', event => {
    event.preventDefault();
    closeNav();
    goFsqca();
    window.scrollTo({ top: 0, behavior: 'auto' });
  });
  const navToggle = $('navToggle');
  const siteNav = $('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const open = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* 「典型案例 / 案例分布 / 关于本站」：先回到案例库首页，再滚动到对应区块 */
  document.querySelectorAll('[data-goto-view="library"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const hash = (link.getAttribute('href') || '').replace('#', '');
      closeNav();
      goLibrary();
      if (hash && hash !== 'top') {
        requestAnimationFrame(() => scrollToEl($(hash)));
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  /* 锚点 scroll-spy（0.6.3 P1-0）：首页滚动时高亮「案例浏览」下拉里对应的锚点项，
     让「我在哪一段」有反馈（原先锚点类导航点击后没有任何激活态）。
     只在锚点落在视口中带时才点亮，避免首尾互相抢。 */
  if (typeof IntersectionObserver !== 'undefined') {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const link = document.querySelector(`#browseMenu [data-anchor="${entry.target.id}"]`);
        if (link) link.classList.toggle('active', entry.isIntersecting);
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['cases', 'distribution', 'about'].forEach(id => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  document.querySelectorAll('[data-drop]').forEach(btn => {
    btn.addEventListener('click', event => {
      event.stopPropagation();
      const menu = $(btn.dataset.drop);
      if (!menu) return;
      const isOpen = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      document.querySelectorAll('.drop-menu').forEach(m => {
        if (m !== menu) m.classList.remove('open');
      });
      document.querySelectorAll('[data-drop]').forEach(b => {
        if (b !== btn) b.setAttribute('aria-expanded', 'false');
      });
    });
  });

  // 点击空白处收起下拉
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav-drop')) {
      document.querySelectorAll('.drop-menu').forEach(m => m.classList.remove('open'));
      document.querySelectorAll('[data-drop]').forEach(b => b.setAttribute('aria-expanded', 'false'));
    }
  });
}

/** 收起移动端导航与下拉 */
export function closeNav() {
  const siteNav = $('siteNav');
  const navToggle = $('navToggle');
  if (siteNav) siteNav.classList.remove('open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  document.querySelectorAll('.drop-menu').forEach(m => m.classList.remove('open'));
  document.querySelectorAll('[data-drop]').forEach(b => b.setAttribute('aria-expanded', 'false'));
}
