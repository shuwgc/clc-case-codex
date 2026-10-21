import { registerNavigationContext, rememberNavigation } from '../core/navigation-history.js';
/* ================================================================
 * 组件：案例详情弹窗
 * ================================================================ */

import { $, esc } from '../core/dom.js';
import { coverStyle, abbrOf, isInvestKnown } from '../core/domain.js';
import { coverOf } from '../../data/covers.js';
import { sourceUrlOf, hasOwnSource } from '../../data/sources.js';
import { openExternal } from '../core/desktop.js';
import { getCase } from '../../data/policy.js';
import { getSources } from '../../data/sources-data.js';
import { goCasePolicy, goCaseSources } from '../core/state.js';
import { caseStripHtml } from './fsqca-case-strip.js';

const ICON_PIN = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="11" r="2.6" stroke="currentColor" stroke-width="1.8"/></svg>';
const ICON_MONEY = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2v20M17 5.5H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

let lastFocused = null;
let openedProject = null;
registerNavigationContext('case-modal', () => ({ project: isModalOpen() ? openedProject : null, scroll: document.querySelector('#caseModal .modal-panel')?.scrollTop || 0 }), () => {}, value => {
  if (value.project) { openModal(value.project); const box = document.querySelector('#caseModal .modal-panel'); if (box) box.scrollTop = value.scroll; }
});

/** 打开案例详情弹窗 */
export function openModal(project) {
  if (!project) return;

  rememberNavigation();
  openedProject = project;
  lastFocused = document.activeElement;

  /* 封面（0.6.3 P2-4）：有该案例报道实景照片时用「照片 + 深绿蒙版」，
     手法与案例卡片、政策页头完全一致；无图案例退回省份深绿渐变 + 单字兜底。 */
  const cover = $('modalCover');
  if (cover) {
    const photo = coverOf(project.id);
    cover.classList.toggle('modal-cover--photo', Boolean(photo));
    if (photo) {
      cover.style.background = '';
      cover.style.setProperty('--cover', `url("${photo}")`);
    } else {
      cover.style.removeProperty('--cover');
      cover.style.background = coverStyle(project.province);
    }
  }

  setText('modalChar', abbrOf(project.province));
  setText('modalProv', project.province);
  setText('modalName', project.name);
  setText('modalDesc', project.desc);

  const batchEl = $('modalBatch');
  if (batchEl) {
    batchEl.textContent = project.batch;
    batchEl.className = 'batch-badge batch-' + project.batch;
  }

  const investKnown = isInvestKnown(project);
  const meta = $('modalMeta');
  if (meta) {
    meta.innerHTML = `
      <span class="meta-pill">${ICON_PIN}${esc(project.province)}</span>
      <span class="meta-pill">${esc(project.batch)}</span>
      <span class="meta-pill ${investKnown ? 'gold' : ''}">${ICON_MONEY}${investKnown ? esc(project.invest) : '投资额未披露'}</span>`;
  }

  const tags = $('modalTags');
  if (tags) {
    tags.innerHTML = project.tags.map(t => `<span class="tag-item">${esc(t)}</span>`).join('');
  }

  /* fsQCA 评分画像色块条（0.6.5）：modalTags 之后挂载；无评分数据的案例返回空串 */
  const strip = $('modalFsqcaStrip');
  if (strip) strip.innerHTML = caseStripHtml(project.id);

  /* 政策工具入口：仅在该案例有政策工具箱数据时展示 */
  const policyBtn = $('modalPolicyBtn');
  const policyData = getCase(String(project.id).padStart(2, '0'));
  if (policyBtn) {
    if (policyData) {
      policyBtn.style.display = 'flex';
      policyBtn.dataset.caseId = policyData.id;
      const hint = $('modalPolicyHint');
      if (hint) {
        hint.textContent =
          `${policyData.stats.tools} 项政策工具 · ${policyData.stats.docs} 份政策文件` +
          (policyData.stats.innovations ? ` · 创新 ${policyData.stats.innovations} 项` : '');
      }
    } else {
      policyBtn.style.display = 'none';
      delete policyBtn.dataset.caseId;
    }
  }

  /* 相关资料入口：来源数据随案例齐备，通常都会展示 */
  const sourcesBtn = $('modalSourcesBtn');
  const srcData = getSources(String(project.id).padStart(2, '0'));
  if (sourcesBtn) {
    if (srcData) {
      sourcesBtn.style.display = 'flex';
      sourcesBtn.dataset.caseId = srcData.id;
      const shint = $('modalSourcesHint');
      if (shint) {
        shint.textContent =
          `${srcData.counts.items} 条来源` +
          (srcData.counts.excerpts ? ` · ${srcData.counts.excerpts} 篇摘录` : '');
      }
    } else {
      sourcesBtn.style.display = 'none';
      delete sourcesBtn.dataset.caseId;
    }
  }

  /* 原文报道链接 */
  const src = $('modalSource');
  const url = sourceUrlOf(project);
  if (src) {
    if (url) {
      src.href = url;
      src.dataset.url = url;
      src.textContent = '';
      src.insertAdjacentHTML('beforeend',
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      );
      src.append(hasOwnSource(project) ? '查看原文报道' : '查看该批次发布页');
      src.style.display = 'inline-flex';
    } else {
      src.style.display = 'none';
      delete src.dataset.url;
    }
  }

  const modal = $('caseModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
  document.body.style.overflow = 'hidden';

  const closeBtn = $('modalClose');
  if (closeBtn) closeBtn.focus();
}

/** 关闭弹窗 */
export function closeModal() {
  const modal = $('caseModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  lastFocused = null;
}

/** 弹窗是否打开 */
export function isModalOpen() {
  const modal = $('caseModal');
  return Boolean(modal && modal.classList.contains('open'));
}

/** 绑定弹窗关闭交互与 ESC */
export function initModal() {
  const modal = $('caseModal');
  if (!modal) return;

  modal.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  /* 原文链接交给系统浏览器，避免在应用窗口内跳走 */
  const src = $('modalSource');
  if (src) {
    src.addEventListener('click', event => {
      const url = src.dataset.url;
      if (!url) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      openExternal(url);
    });
  }

  /* 跳转到该案例的「查看政策工具」页 */
  const policyBtn = $('modalPolicyBtn');
  if (policyBtn) {
    policyBtn.addEventListener('click', () => {
      const id = policyBtn.dataset.caseId;
      if (!id) return;
      closeModal();
      goCasePolicy(id);
    });
  }

  /* 跳转到该案例的「查看相关资料」页 */
  const sourcesBtn = $('modalSourcesBtn');
  if (sourcesBtn) {
    sourcesBtn.addEventListener('click', () => {
      const id = sourcesBtn.dataset.caseId;
      if (!id) return;
      closeModal();
      goCaseSources(id);
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && isModalOpen()) {
      event.stopPropagation();
      closeModal();
    }
  }, true);
}

function setText(id, text) {
  const el = $(id);
  if (el) el.textContent = text == null ? '' : text;
}
