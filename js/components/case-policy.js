/* ================================================================
 * 组件：单案例「查看政策工具」页
 * ----------------------------------------------------------------
 * 把该案例政策工具箱 docx 的内容重新排版为网页：
 *   · 政策工具条目（机制 / 分类 / 牵头单位 / 举措 / 创新点 / 政策依据）
 *   · 政策文件依据清单（文号、发布机构、效力状态、核验等级、官方来源）
 * 不直接嵌入原始附件，而是解析后的结构化文本。
 * ================================================================ */

import { $, esc, delegate } from '../core/dom.js';
import { getCase, CASES } from '../../data/policy.js';
import { PROJECTS } from '../../data/projects.js';
import { coverStyle, abbrOf } from '../core/domain.js';
import { coverOf } from '../../data/covers.js';
import { openExternal } from '../core/desktop.js';
import { caseStripHtml, materialLinksHtml } from './fsqca-case-strip.js';
import { policyStatus } from '../core/policy-status.js';
import { publicUrl, unavailableLink } from '../core/public-links.js';
import { goCasePolicy, goPolicyIndex, navigate, VIEW } from '../core/state.js';

/** 政策依据带圈序号与链接主机名等共用工具 */
import { circled, clip, safeHost } from './policy-util.js';

/* ---------- 图标 ---------- */
const I_PIN = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="11" r="2.6" stroke="currentColor" stroke-width="1.8"/></svg>';
const I_MONEY = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2v20M17 5.5H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
const I_SPARK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.5l2.2 6.1 6.3.3-4.9 4 1.6 6.1L12 15.6l-5.2 3.4 1.6-6.1-4.9-4 6.3-.3z" fill="currentColor" opacity=".9"/></svg>';
const I_CARET = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const I_LINK = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 13a5 5 0 007.5.5l3-3a5 5 0 00-7-7l-1.7 1.7M14 11a5 5 0 00-7.5-.5l-3 3a5 5 0 007 7l1.7-1.7" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const I_EXT = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const I_ARROW_L = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const I_ARROW_R = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* ---------- 页内筛选状态（不进入全局状态，页面重渲染时重置） ---------- */
let ui = { mech: '', category: '', query: '' };

/* ================================================================
 * 渲染
 * ================================================================ */

export function renderCasePolicy(state) {
  const page = $('pageCasePolicy');
  if (!page) return;
  if (state.view !== VIEW.CASE_POLICY) return;

  const caseId = state.viewParams?.caseId;
  const data = getCase(caseId);
  const project = PROJECTS.find(p => String(p.id).padStart(2, '0') === String(caseId));

  if (!data) {
    page.innerHTML = `
      <div class="pg-main">
        <div class="pg-empty">
          <strong>未找到该案例的政策工具</strong>
          请从「政策工具」栏目重新选择案例。
        </div>
      </div>`;
    return;
  }

  /* 重置页内筛选 */
  ui = { mech: '', category: '', scope: '', query: '' };

  page.innerHTML = `
    ${renderHero(data, project)}
    ${renderSubnav(data)}
    <div class="pg-main">
      ${renderOverview(data, project)}
      ${renderLevelStrip(data)}
      ${renderToolbar(data)}
      <div id="toolListWrap">${renderTools(data)}</div>
      ${renderDocs(data)}
      ${renderNotes(data)}
      ${renderPager(data)}
    </div>`;

  bind(page, data);

  /* 每次进入新案例时回到顶部 */
  window.scrollTo({ top: 0, behavior: 'auto' });
  const toolNo = state.viewParams?.toolNo;
  if (toolNo) {
    const target = page.querySelector(`[data-tool-no="${CSS.escape(String(toolNo))}"]`);
    for (let el = target; el && el !== page; el = el.parentElement) if (el.tagName === 'DETAILS') el.open = true;
    target?.scrollIntoView({block:'center'});
  }
}

/**
 * 机制速览条（吸顶）。
 * 工具较多时（部分案例 19 项）提供一个快速的机制跳转与筛选入口。
 */
function renderSubnav(d) {
  return `
  <nav class="pg-subnav" aria-label="政策机制速览">
    <div class="pg-subnav-inner">
      <button type="button" class="active" data-sub-mech="">全部 ${d.stats.tools} 项</button>
      ${d.mechanisms.map(m =>
        `<button type="button" data-sub-mech="${esc(m.name)}">${esc(m.no)}·${esc(m.short)} ${m.count}</button>`).join('')}
    </div>
  </nav>`;
}

/* ---------- 页头 ---------- */

function renderHero(d, project) {
  const invest = d.investment && d.investment !== '—' ? d.investment : '';

  /* 背景策略：
     1) 该案例在本案例报道里找到了实景照片 → 用它，并压深绿蒙版（与首页同款处理）；
     2) 没有配图 → 退回按省份稳定映射的深绿渐变（coverStyle）。
     两条路径色系一致，切换案例时不会出现明显跳色。 */
  const cover = coverOf(d.id);
  const heroClass = cover ? 'pg-hero pg-hero--photo' : 'pg-hero';
  const heroStyle = cover ? ` style="--cover:url('${esc(cover)}')"` : '';
  const gradedStyle = !cover && project ? ` style="background:${coverStyle(project.province)}"` : '';

  return `
  <div class="${heroClass}"${heroStyle}${gradedStyle}>
    ${cover ? '<div class="pg-hero-glow"></div>' : ''}
    <div class="pg-hero-grid"></div>
    <div class="pg-hero-inner">
      <div class="pg-breadcrumb">
        <button type="button" data-nav="library">案例库首页</button>
        <span class="sep">/</span>
        <button type="button" data-nav="policy">政策工具</button>
        <span class="sep">/</span>
        <span class="current">${esc(d.name)}</span>
      </div>
      <p class="pg-eyebrow">${I_SPARK}政策激励工具箱</p>
      <h1 class="pg-title">${esc(d.name)}<br />全域土地综合整治政策工具</h1>
      <p class="pg-sub">${esc(d.summary)}</p>

      <div class="pg-pills">
        <span class="pg-pill">${esc(d.batch)}</span>
        <span class="pg-pill">${I_PIN}${esc(d.province)}</span>
        ${invest ? `<span class="pg-pill gold">${I_MONEY}总投资 ${esc(invest)}</span>` : ''}
      </div>

      <div class="pg-metrics">
        <div class="pg-metric"><b>${d.stats.tools}</b><span>政策工具</span></div>
        <div class="pg-metric"><b>${d.stats.docs}</b><span>政策文件</span></div>
        <div class="pg-metric"><b>${d.stats.innovations}</b><span>创新工具</span></div>
        <div class="pg-metric"><b>${d.stats.mechanisms}</b><span>政策机制</span></div>
      </div>
      <div class="pg-hero-strip">${caseStripHtml(d.id)}</div>
    </div>
  </div>`;
}

/* ---------- 案例概况 ---------- */

function renderOverview(d) {
  if (!d.positioning) return '';
  return `
  <section class="pg-section">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">壹</span>案例概况</h2>
      <span class="pg-section-note">试点定位与工具箱说明</span>
    </div>
    <div class="pg-note">
      <span class="lb">${I_PIN}试点定位</span>
      ${esc(d.positioning)}
    </div>
    ${d.note ? `<div class="pg-note" style="margin-top:12px">
      <span class="lb">阅读提示</span>
      ${esc(d.note)}
    </div>` : ''}
  </section>`;
}

/* ---------- 政策层级构成 ---------- */

/**
 * 行政层级构成条。
 *
 * 用户要求「政策工具的叙述重心放在市乡镇等地方一级的政策实践，
 * 对于国家与省级行政区以精神概述即可」。这条 strip 让读者在进入清单之前，
 * 先看清该案例的政策供给结构：地方一级有多少、上位依据有多少，
 * 也顺势说明本页为什么这样分层编排。
 */
function renderLevelStrip(d) {
  const L = d.levels || {};
  const local = L.localTools || 0;
  const prov = L.provinceTools || 0;
  const nat = L.nationalTools || 0;
  if (!d.stats.tools) return '';

  /* 地方一级内部再拆出 乡镇 / 区县 / 市：读者最关心「哪一级政府在做事」 */
  const localBreak = ['乡镇', '区县', '市']
    .map(lv => {
      const n = d.tools.filter(t => t.leadLevel === lv).length;
      return n ? `${lv} ${n}` : '';
    })
    .filter(Boolean)
    .join(' · ');

  const pct = Math.round(local / d.stats.tools * 100);

  return `
  <section class="pg-section">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">贰</span>政策层级构成</h2>
      <span class="pg-section-note">地方按执行者计 · 省/国家级按依据文件同时计入</span>
    </div>
    <div class="ov-stats${nat === 0 ? ' policy-level-stats' : ''}">
      <div class="ov-stat">
        <b>${local}</b><span>地方一级政策工具</span>
        <small>${localBreak || '—'} · 执行者口径 · 占 ${pct}%</small>
      </div>
      <div class="ov-stat gold">
        <b>${prov}</b><span>省级政策工具体现</span>
        <small>${prov > 0 ? `其中 ${L.provinceBasis || 0} 项工具依据省级文件` : '未引用省级文件'}</small>
      </div>
      ${nat > 0 ? `<div class="ov-stat teal">
        <b>${nat}</b><span>国家级政策工具体现</span>
        <small>${nat > 0 ? `其中 ${L.nationalBasis || 0} 项工具依据国家级文件` : '未直接引用国家级文件'}</small>
      </div>` : ''}
      <div class="ov-stat">
        <b>${L.localDocs || 0}</b><span>地方政策文件</span>
        <small>全部依据文件 ${d.stats.docs} 份</small>
      </div>
    </div>
    <div class="pg-note" style="margin-top:14px">
      <span class="lb">统计口径</span>
      统计按双口径：工具的<b>执行者</b>多在地方一级（乡镇 / 区县 / 市），逐项详述举措、创新点与政策依据；
      当某项工具的<b>政策依据</b>来自省级或国家级文件时，该工具同时计入相应层级（可与地方重复计入），
      并在清单中以「依据省级 / 国家级文件」角标标注。
      ${nat === 0 ? '本案例工具未直接引用国家级文件；国家级层面的通用政策工具已全库统一分离，收录于<button type="button" class="dep-ref" data-nav="policy" style="text-decoration:underline;padding:0;background:none;border:none;cursor:pointer;color:inherit">「政策工具」总览页的国家级综述</button>（15 条工具 · 6 份文件）。' : ''}
    </div>
  </section>`;
}

/* ---------- 筛选工具条 ---------- */

function renderToolbar(d) {
  const mechChips = [
    `<button type="button" class="pg-chip active" data-mech="">全部机制<span class="n">${d.tools.length}</span></button>`,
    ...d.mechanisms.map(m =>
      `<button type="button" class="pg-chip" data-mech="${esc(m.name)}">${esc(m.short)}<span class="n">${m.count}</span></button>`),
  ].join('');

  const catChips = [
    `<button type="button" class="pg-chip active" data-cat="">全部分类<span class="n">${d.tools.length}</span></button>`,
    `<button type="button" class="pg-chip" data-cat="全面实施">全面实施<span class="n">${d.stats.implementation}</span></button>`,
    d.stats.pilot
      ? `<button type="button" class="pg-chip" data-cat="试点推进">试点推进<span class="n">${d.stats.pilot}</span></button>`
      : '',
  ].join('');

  /* 层级筛选：地方（市/区县/乡镇）单列，呼应「重心下沉」的编排 */
  const L = d.levels || {};
  const lvChips = [
    `<button type="button" class="pg-chip active" data-scope="">全部层级<span class="n">${d.stats.tools}</span></button>`,
    `<button type="button" class="pg-chip" data-scope="local">地方一级<span class="n">${L.localTools || 0}</span></button>`,
    `<button type="button" class="pg-chip" data-scope="province">省级<span class="n">${L.provinceTools || 0}</span></button>`,
    L.nationalTools ? `<button type="button" class="pg-chip" data-scope="national">国家级<span class="n">${L.nationalTools}</span></button>` : '',
  ].join('');

  return `
  <section class="pg-section">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">叁</span>政策工具清单</h2>
      <span class="pg-section-note">共 ${d.stats.tools} 项工具 · 其中创新工具 ${d.stats.innovations} 项</span>
    </div>

    <div class="pg-toolbar">
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">层级</span>
        <div class="pg-chips" id="scopeChips">${lvChips}</div>
      </div>
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">机制</span>
        <div class="pg-chips" id="mechChips">${mechChips}</div>
      </div>
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">分类</span>
        <div class="pg-chips" id="catChips">${catChips}</div>
      </div>
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">检索</span>
        <label class="pg-search">
          <span class="s-icon"><svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M8.4.4c-4.408 0-8 3.591-8 8s3.592 8 8 8c1.918 0 3.678-.68 5.058-1.811l4.777 4.777a.8.8 0 1 0 1.131-1.132l-4.777-4.776A7.958 7.958 0 0 0 16.4 8.4c0-4.409-3.59-8-8-8zm0 1.6c3.544 0 6.4 2.856 6.4 6.4 0 3.544-2.856 6.4-6.4 6.4A6.388 6.388 0 0 1 2 8.4C2 4.856 4.856 2 8.4 2z" fill="currentColor"/></svg></span>
          <input type="text" id="toolSearch" placeholder="检索工具名称 / 举措关键词…" autocomplete="off" />
        </label>
      </div>
    </div>
  </section>`;
}

/* ---------- 政策工具条目 ---------- */

/**
 * 政策依据按钮组（工具卡与概述行共用）。
 * 把附表序号映射为文件名，点击可跳到下方「政策文件依据清单」对应行。
 */
function depsHtml(t, d) {
  const deps = t.deps.map(n => {
    const doc = d.docs.find(x => x.no === n);
    return doc
      ? `<button type="button" class="dep-ref" data-doc="${doc.no}" title="${esc(doc.name)}（${esc(doc.docNo || '无文号')}）">
           <span class="cir">${circled(n)}</span><span class="nm">${esc(clip(doc.name, 30))}</span>
         </button>`
      : `<span class="dep-ref"><span class="cir">${circled(n)}</span><span class="nm">附表 ${n}</span></span>`;
  }).join('');
  if (!deps) return '';
  return `<div class="tool-deps"><span class="tool-deps-label">政策依据</span>${deps}</div>`;
}

/**
 * 渲染政策工具清单，按行政层级分成两块：
 *
 *   ① 地方一级政策实践（乡镇 / 区县 / 市）—— 逐项详述，是页面的主体；
 *   ② 国家与省级政策精神 —— 折叠为一行标题，展开才看举措与依据。
 *
 * 这正是用户要求的「叙述重心放在市乡镇等地方一级的政策实践，
 * 对于国家与省级行政区以精神概述即可」。两块都保留源文档的编号顺序，
 * 不重排编号（编号是回溯原文的锚点）。
 */
function renderTools(d) {
  const list = filterTools(d);

  if (!list.length) {
    return `<div class="pg-empty"><strong>没有符合条件的政策工具</strong>试试调整层级、机制、分类或检索词。</div>`;
  }

  const local = list.filter(t => t.scope === 'local');
  const upper = list.filter(t => t.scope !== 'local');

  const localBlock = local.length ? `
    <div class="tier-block">
      <div class="tier-head">
        <span class="tier-title"><span class="dot"></span>地方一级政策实践</span>
        <span class="tier-line"></span>
        <span class="tier-count">${local.length} 项 · 详述</span>
      </div>
      ${mechGroupsHtml(local, d)}
    </div>` : '';

  const upperBlock = upper.length ? `
    <div class="tier-block">
      <div class="tier-head">
        <span class="tier-title upper"><span class="dot"></span>国家与省级政策精神</span>
        <span class="tier-line"></span>
        <span class="tier-count">${upper.length} 项 · 概述</span>
      </div>
      <div class="brief-list">${upper.map(t => toolBrief(t, d)).join('')}</div>
    </div>` : '';

  return localBlock + upperBlock;
}

function filterTools(d) {
  const q = ui.query.trim();
  return d.tools.filter(t => {
    if (ui.mech && t.mechanism !== ui.mech) return false;
    if (ui.category && t.category !== ui.category) return false;
    /* 层级筛选（v1.3.3 体现口径）：省级/国家级命中 = 执行者该级，或依据文件该级 */
    if (ui.scope === 'local' && t.scope !== 'local') return false;
    if (ui.scope === 'province' && !(t.scope === 'province' || (t.basis || []).includes('省'))) return false;
    if (ui.scope === 'national' && !(t.scope === 'national' || (t.basis || []).includes('国家'))) return false;
    if (q) {
      const hay = `${t.policyTitle} ${t.detail} ${t.innovation} ${t.lead}`;
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

/**
 * 地方一级的三级下钻（v1.3.2，用户定调）：
 *   进入案例 → 看到若干「政策机制」分组（一级）；
 *   点开机制 → 每项只给「小概述」，即源文档里带括号的那句短语（二级）；
 *   点开小概述 → 行内展开全文、创新点、牵头单位与政策依据（三级）。
 * 分组保持源文档的出现顺序（编号是回溯锚点，不重排）。
 * 任一筛选（机制/分类/层级/检索词）生效时自动展开分组，避免「筛了却看不见」。
 */
function mechGroupsHtml(local, d) {
  const groups = [];
  const byMech = new Map();
  for (const t of local) {
    if (!byMech.has(t.mechanism)) { byMech.set(t.mechanism, []); groups.push(t.mechanism); }
    byMech.get(t.mechanism).push(t);
  }
  const filterActive = !!(ui.mech || ui.category || ui.scope || ui.query.trim());
  return `
    <div class="mech-groups">${groups.map(mech => {
      const items = byMech.get(mech);
      const mechLabel = items[0].mechShort || mech;
      return `
      <details class="mech-group"${filterActive ? ' open' : ''}>
        <summary class="mech-head">
          <span class="mg-caret" aria-hidden="true">${I_CARET}</span>
          <span class="mg-name">${esc(mechLabel)}</span>
          <span class="mg-count">${items.length} 项</span>
        </summary>
        <div class="mech-items">${items.map(t => toolNode(t, d)).join('')}</div>
      </details>`;
    }).join('')}</div>`;
}

function toolNode(t, d) {
  return `
  <details class="tool-node ${t.innovation ? 'is-innovation' : ''}" data-tool-no="${t.no}">
    <summary class="tn-head">
      <span class="tn-no">${t.no}</span>
      <span class="tn-title">${esc(t.policyTitle)}</span>
      ${t.innovation ? `<span class="tn-inno" title="创新工具">${I_SPARK}</span>` : ''}
      <span class="tn-caret" aria-hidden="true">${I_CARET}</span>
    </summary>
    <div class="tn-body">
      ${materialLinksHtml(d.id, 'tool', t.no)}
      <p class="tool-body">${esc(t.detail)}</p>

      ${t.innovation ? `<div class="tool-innovation">
        <span class="ic">${I_SPARK}</span>
        <span class="tx">创新点：${esc(t.innovation)}</span>
      </div>` : ''}

      <div class="tool-meta">
        <div class="tool-lead">
          <span>牵头单位</span><b>${esc(t.lead || '—')}</b>
        </div>
        <div class="tool-badges">
          <span class="tbadge lv lv-${esc(t.scope)}">${esc(t.leadLevel)}</span>
          <span class="tbadge ${t.category === '试点推进' ? 'pilot' : 'impl'}">${esc(t.category)}</span>
          ${(t.basis || []).includes('国家') ? '<span class="tbadge lv lv-national" title="该工具的政策依据含国家级文件">依据国家级文件</span>' : ''}
          ${(t.basis || []).includes('省') ? '<span class="tbadge lv lv-province" title="该工具的政策依据含省级文件">依据省级文件</span>' : ''}
        </div>
      </div>

      ${depsHtml(t, d)}
    </div>
  </details>`;
}

/**
 * 国家 / 省级工具的「精神概述」形态。
 *
 * 用原生 <details> 折叠：默认只给「编号 + 名称 + 层级 + 机制」一行，
 * 展开后才显示举措内容与政策依据。既压住了上位政策的篇幅，
 * 又不丢失任何原文信息（需要时一键展开）。
 */
function toolBrief(t, d) {
  return `
  <details class="tool-brief ${t.innovation ? 'is-innovation' : ''}" data-tool-no="${t.no}">
    <summary>
      <span class="tb-no">${t.no}</span>
      <span class="tb-name">${esc(t.policyTitle)}</span>
      <span class="tb-lv lv-${esc(t.scope)}">${esc(t.leadLevel)}</span>
      <span class="tb-mech">${esc(t.mechShort)}</span>
      ${t.innovation ? `<span class="tb-inno" title="创新工具">${I_SPARK}</span>` : ''}
      <span class="tb-caret" aria-hidden="true">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
    </summary>
    <div class="tb-body">
      ${materialLinksHtml(d.id, 'tool', t.no)}
      <p class="tb-detail">${esc(t.detail)}</p>
      ${t.innovation ? `<div class="tool-innovation">
        <span class="ic">${I_SPARK}</span>
        <span class="tx">创新点：${esc(t.innovation)}</span>
      </div>` : ''}
      <div class="tool-lead">
        <span>牵头单位</span><b>${esc(t.lead || '—')}</b>
      </div>
      ${(t.basis || []).some(lv => lv === '国家' || lv === '省') ? `<div class="tool-badges" style="margin-bottom:8px">
        ${(t.basis || []).includes('国家') ? '<span class="tbadge lv lv-national">依据国家级文件</span>' : ''}
        ${(t.basis || []).includes('省') ? '<span class="tbadge lv lv-province">依据省级文件</span>' : ''}
      </div>` : ''}
      ${depsHtml(t, d)}
    </div>
  </details>`;
}

/* ---------- 政策文件依据清单 ---------- */

function renderDocs(d) {
  const rows = d.docs.map(doc => {
    const status = policyStatus(doc);
    const revoked = status.kind === 'inactive';
    const statusClass = revoked ? 'revoked' : status.kind === 'current' ? 'valid' : 'unknown';
    const gradeCls = doc.gradeLetter === 'B' ? 'b' : (doc.gradeLetter === 'C' ? 'c' : 'a');
    const gradeText = doc.gradeLetter ? `核验${doc.gradeLetter}级` : esc(doc.grade || '—');
  const host = safeHost(publicUrl(doc.url));

    return `
      <tr class="${revoked ? 'is-revoked' : ''}" id="doc-${doc.no}">
        <td><span class="doc-no">${doc.no}</span></td>
        <td class="doc-name">
          <span class="doc-ref-no">${circled(doc.no)}</span>
          ${esc(doc.name)}
          ${materialLinksHtml(d.id, 'doc', doc.no)}
          ${revoked ? '<span class="revoked-mark">已失效或届满</span>' : ''}
        </td>
        <td>${doc.docNo ? esc(doc.docNo) : '<span style="color:var(--ink-3)">—</span>'}</td>
        <td>${esc(doc.issuer)}</td>
        <td>
          <div>${esc(doc.date)}</div>
          <span class="doc-tag ${statusClass}" title="${esc(status.original)}">${esc(status.label)}</span>
        </td>
        <td><span class="grade-chip ${gradeCls}">${gradeText}</span></td>
        <td>
          ${doc.url
            ? `<button type="button" class="doc-link" data-url="${esc(doc.url)}" title="${esc(publicUrl(doc.url))}">
                 ${I_EXT}<span>${unavailableLink(doc.url) ? '原链接（巡检异常）' : esc(host)}</span>
               </button>`
            : '<span style="color:var(--ink-3)">—</span>'}
        </td>
      </tr>`;
  }).join('');

  const valid = d.docs.filter(x => policyStatus(x).kind === 'current').length;

  return `
  <section class="pg-section">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">肆</span>政策文件依据清单</h2>
      <span class="pg-section-note">共 ${d.docs.length} 份文件 · 原文标注有效 ${valid} 份</span>
    </div>

    <div class="doc-table-wrap">
      <div class="doc-table-scroll">
        <table class="doc-table">
          <thead>
            <tr>
              <th style="width:52px">序号</th>
              <th style="min-width:280px">文件名称</th>
              <th style="min-width:150px">文号</th>
              <th style="min-width:140px">发布机构</th>
              <th style="min-width:150px">发布日期 / 效力</th>
              <th style="width:92px">核验</th>
              <th style="min-width:150px">来源（官方渠道）</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="doc-foot">
        本表序号与本页「政策工具清单」中的带圈序号一一对应，实现「政策工具 — 政策文件」逐条可溯源。
        点击来源可在系统浏览器中打开官方原文。
      </div>
    </div>
  </section>`;
}

/* ---------- 说明与引用规范 ---------- */

function renderNotes(d) {
  if (!d.closing) return '';
  return `
  <section class="pg-section">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">伍</span>编制说明</h2>
      <span class="pg-section-note">文件核验与引用规范</span>
    </div>
    ${d.closing.split('\n').filter(Boolean).map(p =>
      `<div class="pg-note">${esc(p)}</div>`).join('')}
  </section>`;
}

/* ---------- 上一个 / 下一个案例 ---------- */

function renderPager(d) {
  const i = CASES.findIndex(c => c.id === d.id);
  const prev = CASES[i - 1];
  const next = CASES[i + 1];

  return `
  <div class="pg-pager">
    <button type="button" class="pg-pager-btn" ${prev ? `data-goto="${prev.id}"` : 'disabled'}>
      ${I_ARROW_L}
      <span style="text-align:left">
        <span class="lb">上一个案例</span>
        <span class="tx">${prev ? esc(prev.name) : '已是第一个'}</span>
      </span>
    </button>
    <button type="button" class="pg-pager-btn" ${next ? `data-goto="${next.id}"` : 'disabled'} style="justify-content:flex-end">
      <span style="text-align:right">
        <span class="lb">下一个案例</span>
        <span class="tx">${next ? esc(next.name) : '已是最后一个'}</span>
      </span>
      ${I_ARROW_R}
    </button>
  </div>`;
}

/* ================================================================
 * 交互绑定
 * ================================================================ */

function bind(page, d) {
  /* 面包屑与翻页 */
  delegate(page, '[data-nav]', 'click', (_e, el) => {
    const to = el.dataset.nav;
    if (to === 'library') navigate(VIEW.LIBRARY, {});
    else if (to === 'policy') goPolicyIndex();
  });

  delegate(page, '[data-goto]', 'click', (_e, el) => goCasePolicy(el.dataset.goto));

  /* 机制筛选（工具条胶囊） */
  delegate(page, '#mechChips [data-mech]', 'click', (_e, btn) => {
    applyMech(page, d, btn.dataset.mech);
  });

  /* 机制筛选（吸顶速览条） */
  delegate(page, '[data-sub-mech]', 'click', (_e, btn) => {
    applyMech(page, d, btn.dataset.subMech);
  });

  /* 分类筛选 */
  delegate(page, '#catChips [data-cat]', 'click', (_e, btn) => {
    ui.category = btn.dataset.cat;
    syncChips(page, '#catChips', btn);
    refreshTools(page, d);
  });

  /* 层级筛选（地方 / 省级 / 国家级） */
  delegate(page, '#scopeChips [data-scope]', 'click', (_e, btn) => {
    ui.scope = btn.dataset.scope;
    syncChips(page, '#scopeChips', btn);
    refreshTools(page, d);
  });

  /* 关键词检索 */
  const input = page.querySelector('#toolSearch');
  if (input) {
    input.addEventListener('input', () => {
      ui.query = input.value;
      refreshTools(page, d);
    });
  }

  /* 政策依据 → 滚动定位到文件清单行 */
  delegate(page, '.dep-ref[data-doc]', 'click', (_e, el) => {
    const row = page.querySelector(`#doc-${el.dataset.doc}`);
    if (!row) return;
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    row.style.transition = 'background .3s';
    row.style.background = 'var(--green-100)';
    setTimeout(() => { row.style.background = ''; }, 1400);
  });

  /* 官方来源 → 系统浏览器 */
  delegate(page, '.doc-link[data-url]', 'click', (_e, el) => openExternal(el.dataset.url));
}

function syncChips(page, sel, activeBtn) {
  page.querySelectorAll(`${sel} .pg-chip`).forEach(c => c.classList.remove('active'));
  activeBtn.classList.add('active');
}

/**
 * 应用机制筛选，并让「工具条胶囊」与「吸顶速览条」保持选中态一致。
 */
function applyMech(page, d, mech) {
  ui.mech = mech || '';

  page.querySelectorAll('#mechChips .pg-chip').forEach(c =>
    c.classList.toggle('active', c.dataset.mech === ui.mech));
  page.querySelectorAll('[data-sub-mech]').forEach(c =>
    c.classList.toggle('active', (c.dataset.subMech || '') === ui.mech));

  refreshTools(page, d);
}

function refreshTools(page, d) {
  const wrap = page.querySelector('#toolListWrap');
  if (wrap) wrap.innerHTML = renderTools(d);
}
