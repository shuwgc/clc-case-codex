import { registerNavigationContext, isRestoringNavigation, rememberNavigation, jumpToTarget } from '../core/navigation-history.js';
/* ================================================================
 * 组件：政策工具总览页（二级栏目）
 * ----------------------------------------------------------------
 * 基于「_政策工具汇总清单」的口径，汇总全部 47 个案例的政策工具，
 * 提供按批次 / 省份 / 政策机制 / 关键词的索引与筛选，
 * 每个案例可跳转到各自的「查看政策工具」页。
 * ================================================================ */

import { $, esc, delegate } from '../core/dom.js';
import { CASES, NATIONAL, POLICY_META, groupByBatch } from '../../data/policy.js';
import { goCasePolicy, goLibrary, navigate, VIEW } from '../core/state.js';
import { circled, clip, safeHost } from './policy-util.js';
import { openExternal } from '../core/desktop.js';

const I_SPARK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.5l2.2 6.1 6.3.3-4.9 4 1.6 6.1L12 15.6l-5.2 3.4 1.6-6.1-4.9-4 6.3-.3z" fill="currentColor" opacity=".9"/></svg>';
const I_ARROW_R = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const I_CARET = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const I_EXT = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* 页内筛选状态 */
const UI_BASE = { batch: '', province: '', mech: POLICY_META.mechanisms[0]?.name || '', query: '', sort: 'id', caseIndexOpen: false, innovationOpen: [] };
let ui = { ...UI_BASE };
registerNavigationContext('policy-index', () => ui, value => Object.assign(ui, value));


/**
 * 重置总览页的页内状态。
 * 离开总览页（去往案例政策工具页再返回）时调用，
 * 避免上次展开的「跨案例工具透视」残留在页面上。
 */
export function resetPolicyIndexState() {
  if (!isRestoringNavigation()) ui = { ...UI_BASE };
}

export function renderPolicyIndex(state) {
  const page = $('pagePolicy');
  if (!page) return;
  if (state.view !== VIEW.POLICY) return;

  if (!isRestoringNavigation()) ui = { ...UI_BASE };

  page.innerHTML = `
    ${renderHero()}
    <div class="pg-main">
      ${renderNationalOverview()}
      ${renderStats()}
      ${renderMechanismDist()}
      ${renderInnovationPanel()}
      <details class="ov-case-index" id="ovCaseIndex" ${ui.caseIndexOpen ? 'open' : ''}>
        <summary>按案例查看全部政策工具<span>${POLICY_META.totalCases} 个案例 · 含未标注创新的工具</span></summary>
        ${renderToolbar()}
        <div id="ovBody">${renderBody()}</div>
      </details>
    </div>`;

  bind(page);
  // History restores the model before rendering; mirror it in all controls and
  // rebuild the mechanism drill-down before restoring scroll and focus.
  for (const [selector, key, attr] of [
    ['#ovBatch .pg-chip', 'batch', 'batch'],
    ['#ovProv .pg-chip', 'province', 'prov'],
    ['#ovSort .pg-chip', 'sort', 'sort'],
    ['.mech-row[data-mech]', 'mech', 'mech'],
  ]) page.querySelectorAll(selector).forEach(button => {
    const selected = (button.dataset[attr] || '') === ui[key];
    button.classList.toggle('active', selected);
    if (button.matches('.mech-row')) button.setAttribute('aria-pressed', String(selected));
  });
  page.querySelector('#ovSearch').value = ui.query;
  renderDrill();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

/* ================================================================
 * 国家级政策工具综述（v1.3.3，置于本页最前）
 * ----------------------------------------------------------------
 * 上游 2026-09-28 起把各案例工具箱里逐字重复的 15 条国家级通用工具、
 * 连同其依据的 6 份国家级文件，统一分离归并（见源目录《国家级分离台账》）。
 * 本节在政策栏目最前面以综述形态呈现，案例页不再逐条重复。
 * 数字口径已按本库校准：应用收录 47 个案例（上游台账的 48 含已废弃的
 * 旧「01_张浦镇」重复目录），故重复条目计 43 案 × 15 = 645 行、
 * 附表 246 条；03/04/05/07 四案本就是重编版未含通用行。
 * ================================================================ */

const NAT_STAGE = [
  { t: '第一阶段 · 试点启动（2019）', d: '自然资发〔2019〕194号确立试点框架——以乡镇为单元、以国土空间规划为依据，整合农用地整理、建设用地整理和生态保护修复，是整个政策体系的起点与母文件。' },
  { t: '第二阶段 · 规范纠偏（2023）', d: '自然资办发〔2023〕15号以负面清单方式划定底线，明确禁止大拆大建、变相占用永久基本农田等事项，把「放开试点」转向「守住底线」。' },
  { t: '第三阶段 · 提质深化（2024）', d: '自然资发〔2024〕149号引入「千万工程」经验；〔2024〕57号《实施指南（试行）》首次给出技术规范；〔2024〕522号打通政策性金融渠道。' },
  { t: '第四阶段 · 法治化（2025）', d: '部令第17号《永久基本农田保护红线管理办法》以部门规章固化永久基本农田保护红线，2025-10-01 施行。' },
];

function natToolNode(t) {
  const deps = t.deps.map(n => {
    const doc = NATIONAL.docs.find(x => x.no === n);
    return doc
      ? `<button type="button" class="dep-ref" data-doc="${doc.no}" title="${esc(doc.name)}（${esc(doc.docNo || '无文号')}）">
           <span class="cir">${circled(n)}</span><span class="nm">${esc(clip(doc.name, 30))}</span>
         </button>`
      : `<span class="dep-ref"><span class="cir">${circled(n)}</span><span class="nm">附表 ${n}</span></span>`;
  }).join('');

  return `
  <details class="tool-node ${t.innovation ? 'is-innovation' : ''}" data-tool-no="${t.no}">
    <summary class="tn-head">
      <span class="tn-no">${t.no}</span>
      <span class="tn-title">${esc(t.policyTitle)}</span>
      <span class="tn-caret" aria-hidden="true">${I_CARET}</span>
    </summary>
    <div class="tn-body">
      <p class="tool-body">${esc(t.detail)}</p>
      <div class="tool-meta">
        <div class="tool-lead">
          <span>牵头单位（主管部门泛称）</span><b>${esc(t.lead || '—')}</b>
        </div>
        <div class="tool-badges">
          <span class="tbadge lv lv-national">国家级</span>
          <span class="tbadge ${t.category === '试点推进' ? 'pilot' : 'impl'}">${esc(t.category)}</span>
        </div>
      </div>
      ${deps ? `<div class="tool-deps"><span class="tool-deps-label">政策依据</span>${deps}</div>` : ''}
    </div>
  </details>`;
}

function renderNationalOverview() {
  if (!NATIONAL) return '';
  const s = NATIONAL.stats;
  const stages = NAT_STAGE.map(x => `
    <div class="nat-stage">
      <b>${x.t}</b>
      <p>${x.d}</p>
    </div>`).join('');

  return `
  <section class="pg-section" id="nationalOverview">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">壹</span>国家级政策工具综述</h2>
      <span class="pg-section-note">全库统一收录 · 15 条通用工具 · 6 份依据文件（核验 A 级）</span>
    </div>

    <div class="pg-note">
      <span class="lb">这份综述是什么</span>
      国家级通用工具在各案例工具箱中曾有重复收录，本库将其中相同的 15 项工具与 6 份依据文件归并于此，
      每项只展示一次；下文再按 ${POLICY_META.totalCases} 个案例汇总各自的政策工具。
      <b>读法</b>：先了解通用政策框架，再看案例采取的具体举措；本节是本库已整理的工具综述，不是国家政策的完整清单。
    </div>

    <div class="ov-stats" style="margin-top:14px">
      <div class="ov-stat teal"><b>${s.tools}</b><span>国家级通用工具</span><small>按 ${s.mechanisms} 类机制归类</small></div>
      <div class="ov-stat gold"><b>${s.docs}</b><span>国家级依据文件</span><small>核验 A 级 ${s.gradeA} 份</small></div>
      <div class="ov-stat"><b>${s.implementation} + ${s.pilot}</b><span>通用工具的实施分类</span><small>全面实施 ${s.implementation} 项，试点推进 ${s.pilot} 项</small></div>
      <div class="ov-stat"><b>${s.mechanisms} / ${POLICY_META.mechanisms.length}</b><span>通用工具覆盖的机制类别</span><small>本库七类机制中涉及六类</small></div>
    </div>

    <div class="pg-note policy-count-note">
      <span class="lb">这些数字怎样对应</span>
      ${s.implementation} 项「全面实施」与 ${s.pilot} 项「试点推进」合计 ${s.tools} 项通用工具；分类沿用工具箱的整理标注，
      用于区分政策适用方式，不表示 ${s.implementation} 个案例已完成实施。
      七类机制是本库整理工具时使用的分类框架；本节未列入第五类「加大区域综合整治实施力度」的通用工具，
      不代表国家层面没有相关政策。下文案例工具另行统计。
    </div>

    <div class="pg-note" style="margin-top:14px">
      <span class="lb">制度演进 · 从试点到制度化</span>
    </div>
    <div class="nat-stages">${stages}</div>

    <div class="pg-note" style="margin-top:14px">
      <span class="lb">十五项通用工具 · 按机制展开查看举措与依据</span>
    </div>
    <div class="mech-groups">${NATIONAL.mechanisms.map(m => `
      <details class="mech-group">
        <summary class="mech-head">
          <span class="mg-caret" aria-hidden="true">${I_CARET}</span>
          <span class="mg-name">${esc(m.short)}</span>
          <span class="mg-count">${m.count} 项</span>
        </summary>
        <div class="mech-items">${NATIONAL.tools.filter(t => t.mechanism === m.name).map(natToolNode).join('')}</div>
      </details>`).join('')}</div>

    <div class="pg-note" style="margin-top:16px">
      <span class="lb">六份国家级文件（依据清单）</span>
    </div>
    <div class="doc-table-wrap">
      <div class="doc-table-scroll">
        <table class="doc-table">
          <thead><tr>
            <th style="width:52px">序号</th><th style="min-width:280px">文件名称</th>
            <th style="min-width:150px">文号</th><th style="min-width:140px">发布机构</th>
            <th style="min-width:150px">发布日期 / 效力</th><th style="width:92px">核验</th>
            <th style="min-width:150px">来源（官方渠道）</th>
          </tr></thead>
          <tbody>${NATIONAL.docs.map(doc => {
            const host = safeHost(doc.url);
            return `
            <tr id="nat-doc-${doc.no}">
              <td><span class="doc-no">${doc.no}</span></td>
              <td class="doc-name"><span class="doc-ref-no">${circled(doc.no)}</span>${esc(doc.name)}</td>
              <td>${esc(doc.docNo)}</td>
              <td>${esc(doc.issuer)}</td>
              <td><div>${esc(doc.date)}</div><span class="doc-tag valid">${esc(doc.status)}</span></td>
              <td><span class="grade-chip a">核验${doc.gradeLetter}级</span></td>
              <td><button type="button" class="doc-link" data-url="${esc(doc.url)}" title="${esc(doc.url)}">${I_EXT}<span>${esc(host)}</span></button></td>
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div>
      <div class="doc-foot">上表序号与综述工具的「政策依据」带圈序号一一对应；点击来源在系统浏览器打开官方原文。</div>
    </div>

    <div class="pg-note" style="margin-top:14px">
      <span class="lb">口径说明</span>
      表中「牵头单位」为该类事项的主管部门泛称，用于说明职责归属，不代表具体案例的实施主体；
      各案例的实际实施主体见对应案例页。当前有 ${CASES.filter(c => c.tools.some(t => (t.basis || []).includes('国家'))).length} 个案例的专属工具本身引用了国家级文件，
      其附表按「只迁国家级通用行」的口径保留了相应条目，引用无悬空。
    </div>
  </section>`;
}

/* ---------- 页头 ---------- */

/* 总览页没有单一案例可对应，按用户要求沿用首页那张背景图，
   保证与首页同一视觉基调（同一张图 + 同一套深绿蒙版处理）。
   注意：用本地资源。原外链图床（aka.doubaocdn.com）已失效返回 403，
   桌面应用必须离线可用，不能依赖外链。本图即原背景图（航拍绿色梯田），
   已从 Electron 缓存恢复并固化为 assets/hero.jpg。 */
const HOME_HERO_IMG = 'assets/hero.jpg';

function renderHero() {
  const m = POLICY_META;
  return `
  <div class="pg-hero pg-hero--photo" style="--cover:url('${HOME_HERO_IMG}')">
    <div class="pg-hero-glow"></div>
    <div class="pg-hero-grid"></div>
    <div class="pg-hero-inner">
      <div class="pg-breadcrumb">
        <button type="button" data-nav="library">案例库首页</button>
        <span class="sep">/</span>
        <span class="current">政策工具</span>
      </div>
      <p class="pg-eyebrow">${I_SPARK}政策激励工具箱 · 总览</p>
      <h1 class="pg-title">全域土地综合整治试点案例<br />政策工具索引</h1>
      <p class="pg-sub">
        汇总第一、二、三批共 ${m.totalCases} 个试点案例的政策激励工具箱，梳理
        ${m.totalTools} 项案例政策工具与 ${m.totalDocs} 条政策文件引用记录（去重后 ${m.uniqueDocs} 份文件）；
        国家级层面另有 15 条通用政策工具与 6 份依据文件，统一收录于本页最前方的「国家级政策工具综述」。
      </p>
      <div class="pg-metrics">
        <div class="pg-metric"><b>${m.totalCases}</b><span>试点案例</span></div>
        <div class="pg-metric"><b>${m.totalTools}</b><span>政策工具</span></div>
        <div class="pg-metric"><b>${m.totalDocs}</b><span>文件引用记录</span></div>
        <div class="pg-metric"><b>${m.totalInnovations}</b><span>创新工具</span></div>
      </div>
    </div>
  </div>`;
}

/* ---------- 统计卡 ---------- */

function renderStats() {
  const m = POLICY_META;
  return `
  <section class="pg-section" id="statsStrip">
    <div class="ov-stats">
      <div class="ov-stat">
        <b>${m.totalTools}</b><span>案例政策工具</span>
        <small>其中 ${m.totalInnovations} 项标注了创新点</small>
      </div>
      <div class="ov-stat teal">
        <b>${m.totalDocs}</b><span>文件引用记录</span>
        <small>同一文件跨案例可重复引用 · 去重 ${m.uniqueDocs} 份</small>
      </div>
      <div class="ov-stat gold">
        <b>${m.totalGradeA}</b><span>A 级文件引用记录</span>
        <small>B 级 ${m.totalGradeB} 条 · A + B = ${m.totalDocs}</small>
      </div>
      <div class="ov-stat">
        <b>${m.totalImplementation}</b><span>标注「全面实施」的工具</span>
        <small>另有 ${m.totalPilot} 项「试点推进」· 合计 ${m.totalTools}</small>
      </div>
    </div>
    <div class="pg-note policy-count-note">
      <span class="lb">案例层的统计口径</span>
      工具是整理出的政策举措，文件是工具引用的依据，两者不是一一对应关系；一项工具可引用多份文件，同一份文件也可支持多项工具。
      ${m.totalInnovations} 项创新工具是 ${m.totalTools} 项工具的子集，按案例工具箱是否标注创新点统计，不是另加 ${m.totalInnovations} 项，也不表示全国首创。
      「全面实施／试点推进」与「有无创新点」是两套分类，可相互交叉。
      A 级表示可在官方渠道核对正文或明确公开内容，B 级表示名称与核心内容有官方引用而正文尚未公开；评级按引用记录计，不是 ${m.uniqueDocs} 份去重文件的评级汇总。
      本节均不含上方国家级综述的 ${NATIONAL.stats.tools} 项通用工具与 ${NATIONAL.stats.docs} 份文件。
    </div>
  </section>`;
}

/* ---------- 七类机制分布 ---------- */

function renderMechanismDist() {
  const m = POLICY_META;
  const max = Math.max(...m.mechanisms.map(x => x.count), 1);

  return `
  <section class="pg-section">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">贰</span>政策机制分布</h2>
      <span class="pg-section-note">${m.totalTools} 项工具归入七类机制 · 点击查看该类创新点</span>
    </div>
    <div class="mech-dist">
      ${m.mechanisms.map(x => `
        <button type="button" class="mech-row" data-mech="${esc(x.name)}" aria-controls="ovDrill" aria-pressed="${x.name === ui.mech}">
          <span class="mech-name">
            <span class="no">${esc(x.no)}</span>
            <span class="tx">${esc(x.short)}</span>
          </span>
          <span class="mech-track">
            <span class="mech-fill" style="width:${(x.count / max * 100).toFixed(1)}%"></span>
          </span>
          <span class="mech-val"><b>${x.count}</b> 项 · 创新 <strong>${x.innovations}</strong> ${I_ARROW_R}</span>
        </button>`).join('')}
    </div>
  </section>`;
}

function renderInnovationPanel() {
  return `
  <section class="pg-section ov-innovation-section" id="ovDrill" aria-labelledby="ovDrillTitle">
    <div class="pg-section-head">
      <h2 class="pg-section-title" id="ovDrillTitle" tabindex="-1"><span class="idx">叁</span>机制创新点</h2>
      <span class="pg-section-note" id="ovDrillNote" role="status"></span>
    </div>
    <p class="ov-innovation-help">以下逐项展示案例工具箱标注的创新点；展开可读主要举措与依据文件，点击案例名称可查看完整工具箱。</p>
    <div id="ovDrillBody"></div>
  </section>`;
}

/* ---------- 筛选条 ---------- */

function renderToolbar() {
  const provinces = [...new Set(CASES.map(c => c.province))].sort((a, b) => a.localeCompare(b, 'zh'));

  const batchChips = [
    `<button type="button" class="pg-chip active" data-batch="">全部批次<span class="n">${CASES.length}</span></button>`,
    ...groupByBatch().filter(g => g.cases.length).map(g =>
      `<button type="button" class="pg-chip" data-batch="${esc(g.batch)}">${esc(g.batch)}<span class="n">${g.cases.length}</span></button>`),
  ].join('');

  const provChips = [
    `<button type="button" class="pg-chip active" data-prov="">全部地区</button>`,
    ...provinces.map(p => `<button type="button" class="pg-chip" data-prov="${esc(p)}">${esc(p)}</button>`),
  ].join('');

  return `
  <section class="pg-section">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">肆</span>案例查询</h2>
      <span class="pg-section-note" id="ovCount"></span>
    </div>

    <div class="pg-toolbar">
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">批次</span>
        <div class="pg-chips" id="ovBatch">${batchChips}</div>
      </div>
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">地区</span>
        <div class="pg-chips" id="ovProv">${provChips}</div>
      </div>
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">排序</span>
        <div class="pg-chips" id="ovSort">
          <button type="button" class="pg-chip active" data-sort="id">按案例序号</button>
          <button type="button" class="pg-chip" data-sort="tools">按工具数量</button>
          <button type="button" class="pg-chip" data-sort="innovations">按创新工具</button>
        </div>
      </div>
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">检索</span>
        <label class="pg-search">
          <span class="s-icon"><svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M8.4.4c-4.408 0-8 3.591-8 8s3.592 8 8 8c1.918 0 3.678-.68 5.058-1.811l4.777 4.777a.8.8 0 1 0 1.131-1.132l-4.777-4.776A7.958 7.958 0 0 0 16.4 8.4c0-4.409-3.59-8-8-8zm0 1.6c3.544 0 6.4 2.856 6.4 6.4 0 3.544-2.856 6.4-6.4 6.4A6.388 6.388 0 0 1 2 8.4C2 4.856 4.856 2 8.4 2z" fill="currentColor"/></svg></span>
          <input type="text" id="ovSearch" placeholder="检索案例名称 / 工具关键词…" autocomplete="off" />
        </label>
      </div>
    </div>
  </section>`;
}

/* ---------- 案例索引主体 ---------- */

function renderBody() {
  const list = sortCases(filterCases());
  const countEl = $('ovCount');
  if (countEl) countEl.textContent = `共 ${list.length} 个案例`;

  if (!list.length) {
    return `<div class="pg-empty"><strong>没有符合条件的案例</strong>试试调整批次、地区或检索词。</div>`;
  }

  /* 有筛选条件时平铺展示，否则按批次分组 */
  const grouped = !ui.batch && !ui.province && ui.sort === 'id' && !ui.query.trim();
  if (grouped) {
    return groupByBatch()
      .filter(g => g.cases.length)
      .map(g => `
        <div class="ov-group">
          <div class="ov-group-head">
            <span class="ov-group-title"><span class="dot"></span>${esc(g.batch)}</span>
            <span class="ov-group-line"></span>
            <span class="ov-group-count">${g.cases.length} 个案例</span>
          </div>
          <div class="ov-grid">${g.cases.map(card).join('')}</div>
        </div>`).join('');
  }

  return `<div class="ov-grid">${list.map(card).join('')}</div>`;
}

function filterCases() {
  const q = ui.query.trim();
  return CASES.filter(c => {
    if (ui.batch && c.batch !== ui.batch) return false;
    if (ui.province && c.province !== ui.province) return false;
    if (q) {
      const hay = c.name + c.positioning + c.summary +
        c.tools.map(t => t.policyTitle + t.detail + t.innovation).join(' ');
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

/** 排序：默认按案例序号，也可按工具数量 / 创新工具数量降序 */
function sortCases(list) {
  if (ui.sort === 'tools') return [...list].sort((a, b) => b.stats.tools - a.stats.tools || a.id.localeCompare(b.id));
  if (ui.sort === 'innovations') return [...list].sort((a, b) => b.stats.innovations - a.stats.innovations || a.id.localeCompare(b.id));
  return list;
}

function card(c) {
  return `
  <button type="button" class="ov-card" data-case="${c.id}">
    <div class="ov-card-top">
      <span class="ov-card-name">${esc(c.name)}</span>
    </div>
    <div class="ov-card-meta">
      <span class="ov-mini">${esc(c.batch)}</span>
      <span class="ov-mini">${esc(c.province)}</span>
      ${c.investment && c.investment !== '—' ? `<span class="ov-mini gold">${esc(c.investment)}</span>` : ''}
    </div>
    <div class="ov-card-stats">
      <span class="ov-card-stat"><b>${c.stats.tools}</b><span>政策工具</span></span>
      <span class="ov-card-stat"><b>${c.stats.docs}</b><span>政策文件</span></span>
      <span class="ov-card-stat"><b class="gold">${c.stats.innovations}</b><span>创新工具</span></span>
    </div>
    <span class="ov-card-go">查看政策工具 ${I_ARROW_R}</span>
  </button>`;
}

/* ---------- 跨案例工具透视 ---------- */

/**
 * 点选某一政策机制后，直接展示该机制下标注的全部创新点。
 * 创新点不截断；主要举措与文件依据使用原生 details 渐进展开。
 */
function renderDrill() {
  const section = $('ovDrill');
  if (!section) return;

  if (!ui.mech) {
    section.hidden = true;
    return;
  }

  section.hidden = false;

  const rows = [];
  CASES.forEach(c => {
    c.tools.forEach(t => {
      if (t.mechanism === ui.mech && t.innovation) rows.push({ c, t });
    });
  });

  const title = $('ovDrillTitle');
  const note = $('ovDrillNote');
  const body = $('ovDrillBody');

  const short = POLICY_META.mechanisms.find(m => m.name === ui.mech)?.short || ui.mech;
  if (title) title.innerHTML = `<span class="idx">叁</span>${esc(short)} · 创新点`;
  if (note) note.textContent = `${rows.length} 项创新工具 · 涉及 ${new Set(rows.map(r => r.c.id)).size} 个案例`;

  if (!body) return;

  if (!rows.length) {
    body.innerHTML = `<div class="pg-empty"><strong>该机制下暂无已标注的创新点</strong></div>`;
    return;
  }

  body.innerHTML = `<div class="ov-innovation-list">${rows.map(({ c, t }) => {
    const key = `${c.id}-${t.no}`;
    const docs = t.deps.map(n => c.docs.find(d => d.no === n)).filter(Boolean);
    return `
    <article class="ov-innovation" data-innovation-case="${c.id}">
      <div class="ov-innovation-meta">
        <button type="button" class="ov-innovation-case" data-case="${c.id}">${esc(c.name)} ${I_ARROW_R}</button>
        <span>${esc(c.batch)} · ${esc(t.category)}</span>
      </div>
      <h3>${esc(t.policyTitle)}</h3>
      <p class="ov-innovation-point"><span>创新点</span>${esc(t.innovation)}</p>
      <details class="ov-innovation-detail" data-innovation-key="${key}" ${(ui.innovationOpen || []).includes(key) ? 'open' : ''}>
        <summary>查看主要举措与政策依据 ${I_CARET}</summary>
        <div class="ov-innovation-content">
          <h4>主要举措</h4><p>${esc(t.detail)}</p>
          <p class="ov-innovation-lead">牵头单位：${esc(t.lead || '未注明')}</p>
          ${docs.length ? `<h4>政策依据</h4><ul>${docs.map(d => `<li>${esc(d.name)}${d.docNo && d.docNo !== '—' ? `（${esc(d.docNo)}）` : ''}</li>`).join('')}</ul>` : ''}
          <button type="button" class="ov-card-go" data-case="${c.id}">前往案例工具箱核对文件与来源 ${I_ARROW_R}</button>
        </div>
      </details>
    </article>`;
  }).join('')}</div>`;
}

/* ================================================================
 * 交互绑定
 * ================================================================ */

function bind(page) {
  delegate(page, '[data-nav]', 'click', () => goLibrary());

  /* 国家级综述：政策依据 → 滚动定位到综述文件表对应行 */
  delegate(page, '.dep-ref[data-doc]', 'click', (_e, el) => {
    const row = page.querySelector(`#nat-doc-${el.dataset.doc}`);
    if (!row) return;
    jumpToTarget(row);
    row.style.transition = 'background .3s';
    row.style.background = 'var(--green-100)';
    setTimeout(() => { row.style.background = ''; }, 1400);
  });

  /* 国家级综述：官方来源 → 系统浏览器 */
  delegate(page, '.doc-link[data-url]', 'click', (_e, el) => openExternal(el.dataset.url));

  /* 案例卡片 / 透视卡里的跳转按钮 → 打开该案例政策工具页 */
  delegate(page, '[data-case]', 'click', (_e, el) => goCasePolicy(el.dataset.case, { index: true }));

  /* 机制分布条 → 展开「跨案例工具透视」 */
  delegate(page, '.mech-row[data-mech]', 'click', (_e, row) => {
    ui.mech = row.dataset.mech;
    page.querySelectorAll('.mech-row').forEach(r => {
      const selected = r.dataset.mech === ui.mech;
      r.classList.toggle('active', selected);
      r.setAttribute('aria-pressed', String(selected));
    });
    renderDrill();
    const heading = $('ovDrillTitle');
    heading?.focus({ preventScroll: true });
    heading?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });

  page.removeEventListener('toggle', recordPolicyDisclosure, true);
  page.addEventListener('toggle', recordPolicyDisclosure, true);

  /* 批次 / 地区筛选 */
  bindChips(page, '#ovBatch', 'batch', 'batch');
  bindChips(page, '#ovProv', 'province', 'prov');

  /* 排序切换 */
  delegate(page, '#ovSort .pg-chip', 'click', (_e, btn) => {
    ui.sort = btn.dataset.sort;
    page.querySelectorAll('#ovSort .pg-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    refresh(page);
  });

  const input = page.querySelector('#ovSearch');
  if (input) {
    input.addEventListener('input', () => {
      ui.query = input.value;
      refresh(page);
    });
  }
}

function recordPolicyDisclosure(event) {
  const detail = event.target;
  if (detail.id === 'ovCaseIndex') ui.caseIndexOpen = detail.open;
  const key = detail.dataset?.innovationKey;
  if (!key) return;
  const expanded = new Set(ui.innovationOpen || []);
  if (detail.open) expanded.add(key); else expanded.delete(key);
  ui.innovationOpen = [...expanded];
}

/**
 * 绑定一组筛选胶囊。
 * @param {string} key    ui 中对应的字段名（batch / province）
 * @param {string} attr   data-* 属性名（batch / prov）
 */
function bindChips(page, sel, key, attr) {
  delegate(page, `${sel} .pg-chip`, 'click', (_e, btn) => {
    ui[key] = btn.dataset[attr] || '';
    page.querySelectorAll(`${sel} .pg-chip`).forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    refresh(page);
  });
}

function refresh(page) {
  const body = page.querySelector('#ovBody');
  if (body) body.innerHTML = renderBody();
}
