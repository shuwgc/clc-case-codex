/* ================================================================
 * 组件：案例卡片网格、空状态、查看更多
 * ================================================================ */

import { $, esc, delegate } from '../core/dom.js';
import { coverStyle, abbrOf, isInvestKnown } from '../core/domain.js';
import { COVER_CREDITS, coverOf } from '../../data/covers.js';
import { pagedResults } from '../core/filters.js';
import { showMore, resetFilters } from '../core/state.js';
import { updateResultMeta } from './stats.js';
import { PROJECTS } from '../../data/projects.js';
import { caseStripMiniHtml } from './fsqca-case-strip.js';

/* ---------- 图标片段 ---------- */

const ICON_PIN = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="11" r="2.6" stroke="currentColor" stroke-width="1.8"/></svg>';
const ICON_MONEY = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2v20M17 5.5H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
const ICON_ARROW = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_SEARCH = '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

/* ---------- 单卡模板 ---------- */

function cardHTML(p) {
  const investKnown = isInvestKnown(p);
  /* 封面优先用该案例报道里的实景照片；没有则退回省份深绿渐变。
     两者都叠同样的深绿蒙版，"沪"字始终清晰可读。 */
  const cover = coverOf(p.id);
  const coverClass = cover ? 'card-cover card-cover--photo' : 'card-cover';
  const coverAttr = cover
    ? ` style="--cover:url('${esc(cover)}')"`
    : ` style="background:${coverStyle(p.province)}"`;

  return `
  <article class="project-card" data-id="${p.id}" tabindex="0" role="link" aria-label="查看 ${esc(p.name)} 详情">
    <div class="${coverClass}"${coverAttr}>
      <span class="cover-char">${esc(abbrOf(p.province))}</span>
      <span class="batch-badge batch-${esc(p.batch)}">${esc(p.batch)}</span>
      <span class="cover-prov">${esc(p.province)}</span>${COVER_CREDITS[String(p.id).padStart(2,'0')]?.note?.startsWith('2020') ? '<small class="cover-dated-note">2020年地域景观 · 非试点成效</small>' : ''}
    </div>
    <div class="card-body">
      <h3 class="card-name">${esc(p.name)}</h3>
      <div class="card-meta">
        <span class="meta-item">${ICON_PIN}${esc(p.province)}</span>
        <span class="meta-item">${ICON_MONEY}${investKnown
          ? `<span class="invest">${esc(p.invest)}</span>`
          : '<span class="invest na">投资额未披露</span>'}</span>
      </div>
      <p class="card-desc">${esc(p.desc)}</p>
      <div class="card-tags">${p.tags.map(t => `<span class="tag-item">${esc(t)}</span>`).join('')}${caseStripMiniHtml(p.id)}</div>
    </div>
    <div class="card-foot">
      <span>查看详情</span>
      ${ICON_ARROW}
    </div>
  </article>`;
}

/* ---------- 渲染 ---------- */

/**
 * 渲染卡片区
 * @param {object} state
 * @param {(project:object)=>void} onOpen 打开案例详情
 * @param {string} hint 筛选提示
 */
export function renderCards(state, onOpen, hint) {
  const grid = $('cardGrid');
  const loadMoreBtn = $('loadMoreBtn');
  if (!grid) return;

  const { all, shown, remaining } = pagedResults(state);
  updateResultMeta(all.length, shown.length, hint);

  /* 空状态 */
  if (all.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span class="e-icon">${ICON_SEARCH}</span>
        <h3>没有找到匹配的项目</h3>
        <p>试试其他关键词，或点击特征标签 / 省份柱条快速筛选</p>
        <button type="button" data-reset>重置全部筛选</button>
      </div>`;

    const resetBtn = grid.querySelector('[data-reset]');
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);

    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }

  grid.innerHTML = shown.map(cardHTML).join('');

  /* 卡片激活 -> 打开详情（从全量数据查，避免只展示部分时查不到） */
  delegate(grid, '.project-card', 'click', (_e, card) => {
    const id = Number(card.dataset.id);
    const project = PROJECTS.find(p => p.id === id);
    if (project) onOpen(project);
  });
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });

  /* 查看更多 */
  if (loadMoreBtn) {
    if (remaining > 0) {
      loadMoreBtn.style.display = '';
      loadMoreBtn.textContent = `查看更多案例（还有 ${remaining} 个）`;
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }
}

/** 绑定"查看更多"按钮 */
export function initLoadMore() {
  const loadMoreBtn = $('loadMoreBtn');
  if (loadMoreBtn) loadMoreBtn.addEventListener('click', showMore);
}
