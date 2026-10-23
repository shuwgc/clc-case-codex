import { coverCreditHtml } from './cover-credit.js';
import { jumpToTarget, isRestoringNavigation } from '../core/navigation-history.js';
import { registerNavigationContext, rememberNavigation, dismissNavigation } from '../core/navigation-history.js';
/* ================================================================
 * 组件：单案例「查看相关资料」页
 * ----------------------------------------------------------------
 * 呈现该案例的原始资料来源：
 *   - 按「核心权威报道 / 政府官方通报 / 其他媒体报道 / 音视频资料」分类罗列
 *   - 每条标注来源形态（网页 / 附件 / 音视频）与是否有全文摘录
 *   - 支持应用内阅读全文摘录，也支持跳转官方原文
 *
 * 关于「附件与网站的排版」：
 *   来源 URL 指向 .pdf/.doc/.docx 等直链文件时，标记为「附件」并给文件图标；
 *   其余为网页，标记「网页」。两者在同一列表里用不同的角标与按钮组区分，
 *   避免用户误以为附件也是可在线阅读的内容。
 *
 * 关于「网页存档」（v1.3.1 起移除）：
 *   1.2 曾把 546 份网页快照打包进应用，供离线阅读。但存档体积大（约 17MB）、
 *   快照本身还会过期，且用户实际更需要「回到官方原文」。1.3.1 起不再打包存档，
 *   本页只保留来源清单、全文摘录与官方链接。
 * ================================================================ */

import { $, esc, delegate } from '../core/dom.js';
import { getSources, getExcerpt } from '../../data/sources-data.js';
import { getCase as getPolicyCase } from '../../data/policy.js';
import { PROJECTS } from '../../data/projects.js';
import { coverOf } from '../../data/covers.js';
import { coverStyle } from '../core/domain.js';
import { goLibrary, goSourcesIndex, goCaseSources, navigate, VIEW } from '../core/state.js';
import { publicUrl, unavailableLink, sourceDisplayName } from '../core/public-links.js';
import { openExternal } from '../core/desktop.js';
import { safeHost } from './policy-util.js';
import { caseStripHtml, materialLinksHtml } from './fsqca-case-strip.js';

const I_SPARK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.5l2.2 6.1 6.3.3-4.9 4 1.6 6.1L12 15.6l-5.2 3.4 1.6-6.1-4.9-4 6.3-.3z" fill="currentColor" opacity=".9"/></svg>';
const I_PIN = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="11" r="2.6" stroke="currentColor" stroke-width="1.8"/></svg>';
const I_EXT = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const I_WEB = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M3 12h18M12 3c2.4 2.7 2.4 15.3 0 18M12 3c-2.4 2.7-2.4 15.3 0 18" stroke="currentColor" stroke-width="1.4"/></svg>';
const I_DOC = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
const I_READ = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5.5A1.5 1.5 0 015.5 4H10l2 2.5h6.5A1.5 1.5 0 0120 8v10.5A1.5 1.5 0 0118.5 20h-13A1.5 1.5 0 014 18.5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
const I_BACK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/** 分类的展示顺序与图标色 */
const CAT_CLASS = {
  核心权威报道: 'cat-core',
  政府官方通报: 'cat-gov',
  其他媒体报道: 'cat-media',
  音视频资料: 'cat-av',
};

/* 翻页边界：案例编号在数据里是连续两位数字（01..47） */
const TOTAL_CASES = PROJECTS.length;

/* ---------- 主入口 ---------- */

export function renderCaseSources(state) {
  const page = $('pageCaseSources');
  if (!page) return;
  if (state.view !== VIEW.CASE_SOURCES) return;

  const id = String(state.viewParams?.caseId || '').padStart(2, '0');
  const d = getSources(id);
  if (!d) {
    page.innerHTML = `<div class="pg-main"><div class="ov-empty">未找到案例 ${esc(id)} 的相关资料。</div></div>`;
    return;
  }

  const project = PROJECTS.find(p => String(p.id).padStart(2, '0') === id) || null;
  const policy = getPolicyCase(id);

  page.innerHTML = `
    ${renderHero(d, project, policy)}
    <div class="pg-main">
      ${renderStats(d)}
      ${d.sections.map((s, i) => renderSection(s, i, d)).join('')}
      ${renderWechat(d)}
      ${renderPager(d)}
    </div>`;

  bind(page, d);
  window.scrollTo({ top: 0, behavior: 'auto' });
  const targetNo = state.viewParams?.sourceNo;
  if (targetNo && !isRestoringNavigation()) jumpToTarget(page.querySelector(`[data-source-no="${CSS.escape(targetNo)}"]`), { record: false });
}

/* ---------- 页头 ---------- */

function renderHero(d, project, policy) {
  const cover = coverOf(d.id);
  const heroClass = cover ? 'pg-hero pg-hero--photo' : 'pg-hero';
  const heroStyle = cover ? ` style="--cover:url('${esc(cover)}')"` : '';
  const gradedStyle = !cover && project ? ` style="background:${coverStyle(project.province)}"` : '';
  const invest = policy && policy.investment && policy.investment !== '—' ? policy.investment : '';
  const items = d.sections.flatMap(s => s.items);
  const linked = items.filter(i => i.url).length;

  return `
  <div class="${heroClass}"${heroStyle}${gradedStyle}>
    ${cover ? '<div class="pg-hero-glow"></div>' : ''}
    <div class="pg-hero-grid"></div>
    <div class="pg-hero-inner">
      <div class="pg-breadcrumb">
        <button type="button" data-nav="library">案例库首页</button>
        <span class="sep">/</span>
        <button type="button" data-nav="sources">相关资料</button>
        <span class="sep">/</span>
        <span class="current">${esc(d.name)}</span>
      </div>
      <p class="pg-eyebrow">${I_SPARK}原始资料来源</p>
      <h1 class="pg-title">${esc(d.name)}<br />全域土地综合整治相关资料</h1>
      <p class="pg-sub">
        收录该案例相关公开资料 ${d.counts.items} 条，其中 ${d.counts.excerpts} 条附核心资料全文摘录，
        各条保留出处与原文链接。
      </p>
      <div class="pg-pills">
        ${policy && policy.batch ? `<span class="pg-pill">${esc(policy.batch)}</span>` : ''}
        ${policy && policy.province ? `<span class="pg-pill">${I_PIN}${esc(policy.province)}</span>` : ''}
        ${invest ? `<span class="pg-pill gold">总投资 ${esc(invest)}</span>` : ''}
      </div>
      <div class="pg-metrics">
        <div class="pg-metric"><b>${d.counts.items}</b><span>来源条目</span></div>
        <div class="pg-metric"><b>${linked}</b><span>原文链接</span></div>
        <div class="pg-metric"><b>${d.counts.excerpts}</b><span>全文摘录</span></div>
        <div class="pg-metric"><b>${d.sections.length}</b><span>来源分类</span></div>
      </div>
      <div class="pg-hero-strip">${caseStripHtml(d.id)}</div>${coverCreditHtml(d.id)}
    </div>
  </div>`;
}

/* ---------- 概况条 ---------- */

function renderStats(d) {
  const items = d.sections.flatMap(s => s.items);
  const linked = items.filter(i => i.url).length;
  return `
  <section class="pg-section">
    <div class="ov-stats">
      <div class="ov-stat">
        <b>${linked}</b>
        <span>原文链接</span>
        <small>在系统浏览器中打开</small>
      </div>
      <div class="ov-stat teal">
        <b>${d.counts.excerpts}</b>
        <span>核心资料全文摘录</span>
        <small>供编码分析溯源</small>
      </div>
      <div class="ov-stat gold">
        <b>${d.counts.byCategory['政府官方通报'] || 0}</b>
        <span>政府官方通报</span>
        <small>含批复 / 方案 / 解读</small>
      </div>
      <div class="ov-stat">
        <b>${items.filter(i => i.kind === 'attachment').length}</b>
        <span>附件类来源</span>
        <small>PDF / 文档直链</small>
      </div>
    </div>
  </section>`;
}

/* ---------- 来源分类区块 ---------- */

function renderSection(s, idx, d) {
  const roman = ['壹', '贰', '叁', '肆', '伍'][idx] || String(idx + 1);
  const cls = CAT_CLASS[s.name] || '';
  return `
  <section class="pg-section" id="sec-${esc(s.name)}">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">${roman}</span>${esc(s.name)}</h2>
      <span class="pg-section-note">共 ${s.items.length} 条</span>
    </div>
    ${s.desc ? `<div class="pg-note"><span class="lb">分类说明</span>${esc(s.desc)}</div>` : ''}
    <ol class="src-list ${cls}">
      ${s.items.map(it => srcItem(it, d)).join('')}
    </ol>
  </section>`;
}

function srcItem(it, d) {
  const host = safeHost(it.url);
  const isAttach = it.kind === 'attachment';
  const isVideo = it.kind === 'video';

  /* 形态角标：附件 / 网页 / 音视频 —— 用户要求「注意附件与网站的排版」，
     这里用不同图标与文案明确区分。 */
  const kindBadge = isAttach
    ? `<span class="src-kind attach" title="来源为可下载文件（PDF/文档）">${I_DOC}附件</span>`
    : (isVideo
      ? `<span class="src-kind video" title="来源为音视频">${I_DOC}音视频</span>`
      : `<span class="src-kind web" title="来源为网页">${I_WEB}网页</span>`);

  const excerptBtn = it.hasExcerpt
    ? `<button type="button" class="src-act" data-excerpt="${esc(it.no)}" data-case="${esc(d.id)}">
         ${I_READ}<span>全文摘录</span><i class="n">${it.excerptChars}</i>
       </button>`
    : '';

  /* 没有摘录可读时，「打开原文」就是这条来源的主行动，用实心按钮突出 */
  const openBtn = it.url
    ? `<button type="button" class="src-act${it.hasExcerpt ? '' : ' primary'}" data-url="${esc(it.url)}" title="${esc(publicUrl(it.url))}">
         ${I_EXT}<span>${unavailableLink(it.url) ? '原链接（巡检异常）' : '打开原文'}</span>
       </button>`
    : '';

  return `
  <li class="src-item" data-source-no="${esc(it.no)}">
    <div class="src-head">
      <span class="src-no">${esc(it.no)}</span>
      <span class="src-source">${esc(sourceDisplayName(it.source,it.url))}</span>
      ${kindBadge}
      ${it.hasExcerpt ? `<span class="src-badge read">${I_READ}有摘录</span>` : ''}
    </div>
    <h3 class="src-title">${esc(it.title)}</h3>
    <div class="src-meta">
      ${it.date ? `<span class="src-date">${esc(it.date)}</span>` : ''}
    </div>
    ${it.note ? `<p class="src-note"><span class="src-note-label">原文提要</span>${esc(it.note)}</p>` : ''}
    ${materialLinksHtml(d.id, 'source', it.no)}
    <div class="src-acts">${excerptBtn}${unavailableLink(it.url) ? `<button type="button" class="src-act" data-local-read="${esc(it.no)}">${I_READ}<span>阅读库内收录文本</span></button>` : ''}${openBtn}</div>
  </li>`;
}

/* ---------- 微信公众号线索 ---------- */

function renderWechat(d) {
  if (!d.wechat || !d.wechat.length) return '';
  const kws = d.wechat.filter(x => /^关键词/.test(x));
  const accounts = d.wechat.filter(x => !/^关键词/.test(x));
  return `
  <section class="pg-section">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">附</span>微信公众号线索</h2>
      <span class="pg-section-note">需在微信内检索</span>
    </div>
    <div class="pg-note">
      <span class="lb">公众号线索</span>
      ${accounts.length ? accounts.map(a => `<span class="wx-tag">${esc(a.replace(/（[^）]*省自然资源厅官方）/, ''))}</span>`).join('') : '—'}
    </div>
    ${kws.length ? `<div class="pg-note" style="margin-top:10px">
      <span class="lb">检索关键词</span>${kws.map(k => esc(k.replace(/^关键词[:：]\s*/, ''))).join('　')}
    </div>` : ''}
  </section>`;
}

/* ---------- 翻页 ---------- */

function renderPager(d) {
  const n = Number(d.id);
  const prev = n > 1 ? String(n - 1).padStart(2, '0') : '';
  const next = n < TOTAL_CASES ? String(n + 1).padStart(2, '0') : '';
  return `
  <nav class="pg-pager">
    ${prev ? `<button type="button" class="pg-pager-btn" data-case-src="${prev}">${I_BACK}<span>上一案例 ${prev}</span></button>` : '<span></span>'}
    <button type="button" class="pg-pager-btn mid" data-nav="sources">返回相关资料总览</button>
    ${next ? `<button type="button" class="pg-pager-btn" data-case-src="${next}"><span>下一案例 ${next}</span>${I_BACK.replace('M19 12H5M12 19l-7-7 7-7', 'M5 12h14M12 5l7 7-7 7')}</button>` : '<span></span>'}
  </nav>`;
}

/* ---------- 交互：摘录阅读器 ---------- */

function bind(page, d) {
  delegate(page, '[data-local-read]', 'click', (_e, btn) => navigate(VIEW.RESEARCH, {recordId:`source:${d.id}:${btn.dataset.localRead}`}, { index: true }));
  delegate(page, '[data-nav="library"]', 'click', () => goLibrary());
  delegate(page, '[data-nav="sources"]', 'click', () => goSourcesIndex());
  delegate(page, '[data-case-src]', 'click', (_e, btn) => {
    goCaseSources(btn.dataset.caseSrc);
  });

  /* 打开官方原文：交给主进程用系统浏览器打开（渲染层不直接开窗口） */
  delegate(page, '[data-url]', 'click', async (_e, btn) => {
    const url = btn.dataset.url;
    if (!url) return;
    try {
      const r = await openExternal(url);
      if (r && r.ok === false) window.open(url, '_blank', 'noopener');
    } catch {
      window.open(url, '_blank', 'noopener');
    }
  });

  /* 阅读全文摘录 */
  delegate(page, '[data-excerpt]', 'click', (_e, btn) => {
    openExcerpt(btn.dataset.case, btn.dataset.excerpt);
  });
}

/** 打开全文摘录阅读器 */
let activeExcerpt = null;
registerNavigationContext('excerpt', () => activeExcerpt ? { ...activeExcerpt, scroll: document.querySelector('.arc-body')?.scrollTop || 0 } : null, () => {}, value => {
  if (value) { openExcerpt(value.caseId, value.no); const body = document.querySelector('.arc-body'); if (body) body.scrollTop = value.scroll; }
});
function openExcerpt(caseId, no) {
  const e = getExcerpt(caseId, no);
  if (!e) return;
  rememberNavigation({ scope: "excerpt" });
  activeExcerpt = { caseId, no };
  const host = safeHost(e.url);

  const overlay = document.createElement('div');
  overlay.className = 'arc-overlay';
  overlay.innerHTML = `
    <div class="arc-panel" role="dialog" aria-modal="true" aria-label="全文摘录">
      <div class="arc-bar">
        <div class="arc-bar-tx">
          <strong>${esc(e.heading || no)}</strong>
          <small>${esc(sourceDisplayName(e.source,e.url))}${e.date ? ' · ' + esc(e.date) : ''}</small>
        </div>
        <div class="arc-bar-acts">
          ${e.url ? `<button type="button" class="arc-btn" data-arc-open>${I_EXT}<span>打开官方原文</span></button>` : ''}
          <button type="button" class="arc-btn ghost" data-arc-close>关闭</button>
        </div>
      </div>
      <div class="arc-body arc-body-read">
        ${materialLinksHtml(caseId, 'source', no)}
        <article class="arc-read">${excerptHtml(e.body)}</article>
      </div>
      <div class="arc-foot">
        摘录整理自官方公开来源，供编码分析溯源；如与原文有出入，以官方原文为准。
      </div>
    </div>`;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  const close = () => {
    dismissNavigation("excerpt");
    activeExcerpt = null;
    overlay.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
  };
  const onKey = (ev) => { if (ev.key === 'Escape') close(); };

  overlay.querySelector('[data-arc-close]').addEventListener('click', close);
  overlay.addEventListener('click', (ev) => { if (ev.target === overlay) close(); });
  document.addEventListener('keydown', onKey);
  const openBtn = overlay.querySelector('[data-arc-open]');
  if (openBtn) {
    openBtn.addEventListener('click', async () => {
      try {
        await openExternal(e.url);
      } catch { window.open(e.url, '_blank', 'noopener'); }
    });
  }
}

/**
 * 摘录正文转 HTML。
 * 正文是纯文本，按空行分段即可；不引入 Markdown 解析，
 * 避免把原文里的符号误当标记。
 */
function excerptHtml(body) {
  return String(body || '')
    .split(/\n{2,}/)
    .map(p => `<p>${esc(p).replace(/\n/g, '<br />')}</p>`)
    .join('');
}
