import { RULE_DEFINITIONS } from '../../data/fsqca-rule-definitions.js';
import { registerNavigationContext, isRestoringNavigation, rememberNavigation, clearNavigationHistory, jumpToTarget } from '../core/navigation-history.js';
import { $, esc, delegate } from '../core/dom.js';
import { openExternal, notify } from '../core/desktop.js';
import { getState, navigate, VIEW } from '../core/state.js';
import {
  SCALE, THEORY_GROUPS, RESULT_FAMILIES, RULE_ORDER,
  getCases, getCase, getEvidence, effectiveRule, setOverrides, getOverrides,
  parseScore, calibrateVariable, suggestedLevel, heatMatrix, coverage,
} from '../core/fsqca.js';
import { analysisHtml, bindAnalysis } from './fsqca-analysis.js';
import { officialHtml, bindOfficial } from './fsqca-official.js';
import { evidenceTargets } from '../core/evidence-links.js';

/* 修订叠层：存 localStorage，评分方法改动不影响这里（override 只存结果） */
const OVERRIDE_KEY = 'fsqca-overrides';

const ui = { caseId: '01', selectedRule: null, tab: 'coding' };
registerNavigationContext('fsqca-view', () => ui, value => Object.assign(ui, value));


function loadOverrides() {
  try { return JSON.parse(localStorage.getItem(OVERRIDE_KEY) || '{}'); }
  catch { return {}; }
}
function saveOverrides(ov) { try { localStorage.setItem(OVERRIDE_KEY, JSON.stringify(ov)); } catch {} }

/* 得分徽标：按 SCALE 配置着色；缺失/不适用/情境按状态着色 */
function scoreBadge(rule) {
  const status = SCALE.status[rule.status];
  if (status && !status.counts) {
    return `<span class="fsqca-score fsqca-score-na" style="background:${status.color}22;color:${status.color}">${esc(status.label)}</span>`;
  }
  const p = parseScore(rule.score);
  if (p.kind === 'score') {
    const level = SCALE.levels.find(l => l.value === p.value);
    const color = level?.color || '#888';
    return `<span class="fsqca-score" style="background:${color}22;color:${color};border-color:${color}">${esc(rule.score)}${rule.overridden ? ' <em class="fsqca-ov">修订</em>' : ''}</span>`;
  }
  return `<span class="fsqca-score fsqca-score-na">${esc(rule.score || '—')}</span>`;
}

function variablePanel(caseData) {
  const cond = caseData.variables.filter(v => v.side === 'cond');
  const result = caseData.variables.filter(v => v.side === 'result');
  const row = v => {
    const cal = calibrateVariable(caseData.id, v.code);
    const sug = suggestedLevel(cal?.value);
    return `<div class="fsqca-var" data-var="${esc(v.code)}">
      <div class="fsqca-var-head"><strong>${esc(v.code)}</strong><span>${esc(v.name)}</span></div>
      <div class="fsqca-var-meta">原始合成值 ${cal?.value != null ? `<b>${esc(String(cal.value))}</b>` : '—'} · ${esc(String(cal?.counted ?? 0))}/${esc(String(cal?.total ?? 0))} 细则计入</div>
    </div>`;
  };
  const condHtml = THEORY_GROUPS.map(g => {
    const vars = cond.filter(v => g.codes.includes(v.code));
    if (!vars.length) return '';
    return `<div class="fsqca-group"><h4>${esc(g.label)}</h4>${vars.map(row).join('')}</div>`;
  }).join('');
  const resultHtml = `<div class="fsqca-group"><h4>结果变量</h4>${RESULT_FAMILIES.map(f => {
    const v = result.find(x => x.code === f.code);
    return v ? row(v) : '';
  }).join('')}</div>`;
  return `<aside class="fsqca-vars"><h3>变量与校准</h3>${condHtml}${resultHtml}</aside>`;
}

function ruleList(caseData) {
  const order = RULE_ORDER.result;
  const condOrder = RULE_ORDER.cond;
  const m = new Map(caseData.rules.map(r => [r.code, r]));
  const row = code => {
    const r = effectiveRule(caseData.id, code);
    if (!r) return '';
    const active = ui.selectedRule === code ? ' active' : '';
    return `<button type="button" class="fsqca-rule${active}" data-rule="${esc(code)}" aria-pressed="${ui.selectedRule === code}" aria-controls="fsqcaRuleDetail">
      <span class="fsqca-rule-code">${esc(code)}</span>
      <span class="fsqca-rule-name">${esc(r.name)}</span>
      ${scoreBadge(r)}
    </button>`;
  };
  const resultHtml = RESULT_FAMILIES.map(f => {
    const codes = order.filter(c => c.startsWith(f.code + '-'));
    return `<div class="fsqca-group"><h4>${esc(f.label)}（${f.code}）</h4>${codes.map(row).join('')}</div>`;
  }).join('');
  const condHtml = THEORY_GROUPS.map(g => {
    const codes = condOrder.filter(c => { const fam = c.split('-')[0]; return g.codes.includes(fam); });
    return `<div class="fsqca-group"><h4>${esc(g.label)}</h4>${codes.map(row).join('')}</div>`;
  }).join('');
  return `<section class="fsqca-rules"><h3>细则（点选查看证据与修订）</h3>${resultHtml}<div class="fsqca-divider"></div>${condHtml}</section>`;
}

function ruleDetail(caseData) {
  if (!ui.selectedRule) return `<section class="fsqca-detail"><p class="fsqca-hint">点击左侧某条细则，查看其观测要点、证据链并支持修订得分。</p></section>`;
  const rule = effectiveRule(caseData.id, ui.selectedRule);
  if (!rule) return '';
  const evidence = getEvidence(caseData.id, ui.selectedRule);
  const levels = SCALE.levels.slice().reverse(); // 从低到高排按钮
  const evidenceHtml = evidence.length
    ? `<ul class="fsqca-evidence">${evidence.map(e => `<li>
        <span class="fsqca-ev-code">${esc(e.code)}</span>
        <span class="fsqca-ev-meta">${esc(e.type.replace(/结果侧补强（[^）]*）/, '补充来源'))} · ${esc(e.source)}</span>
        <p class="fsqca-ev-title">${esc(e.title)}</p>
        ${e.review ? `<p class="fsqca-hint" data-evidence-review="${esc(e.review.status)}">来源复查（${esc(e.review.reviewedAt)}）：${esc(e.review.reason)}</p>` : ''}
        ${e.url ? `<a class="fsqca-ev-url" href="${esc(e.url)}" data-action="open" data-url="${esc(e.url)}">打开来源网址 ↗</a>` : ''}
        ${evidenceTargets(caseData.id, e.code).map(t => `<button type="button" class="fsqca-ev-url" data-local-kind="${t.kind}" data-local-key="${esc(t.key)}">查看${t.kind === 'tool' ? '政策工具 ' : '相关资料 '}${esc(t.key)}</button>`).join('')}
      </li>`).join('')}</ul>`
    : '<p class="fsqca-hint">该细则当前无证据编号（可能缺失或不适用）。</p>';
  const statusButtons = Object.entries(SCALE.status).map(([key, s]) =>
    `<button type="button" class="fsqca-status-btn${rule.status === key ? ' active' : ''}" data-status="${esc(key)}" title="标记为${esc(key)}">${esc(s.label)}</button>`).join('');
  const level = SCALE.levels.find(l => l.value === parseScore(rule.score).value);
  const color = SCALE.status[rule.status]?.counts ? level?.color : SCALE.status[rule.status]?.color;
  return `<section class="fsqca-detail fsqca-selected-detail" data-detail-rule="${esc(rule.code)}" style="--rule-color:${color || '#8a8f98'}" tabindex="-1">
    <p class="fsqca-location-label">已定位 · ${esc(caseData.id)} 案 · ${esc(rule.code)}</p>
    <div class="fsqca-detail-head"><h3>${esc(rule.code)} · ${esc(rule.name)}</h3>${scoreBadge(rule)}</div>
    <div class="fsqca-rule-definition"><h4>这条细则是什么意思</h4><p>${esc(RULE_DEFINITIONS[rule.code] || '暂无通用释义')}</p><small>通用释义用于理解细则；本案例的评分理由与证据见下方。</small></div>
    <p class="fsqca-detail-basis"><strong>评分依据（观测要点）：</strong>${esc(rule.basis || '（未填写）')}</p>
    <p class="fsqca-detail-quote"><strong>证据摘录：</strong>${esc(rule.quote || '（无）')}</p>
    <h4>证据链（反检索）</h4>${evidenceHtml}
    <h4>调整本地评分</h4>
    <p class="fsqca-hint">调整仅保存在本机，影响编码评分和组态分析；本版本分析沿用已收录的研究结果。</p>
    <div class="fsqca-scale">${levels.map(l => `<button type="button" class="fsqca-level-btn" data-score="${l.value}" style="--lv:${l.color}">${esc(l.label)}</button>`).join('')}</div>
    <div class="fsqca-statuses">${statusButtons}</div>
    ${rule.overridden ? '<p class="fsqca-hint">当前显示本地调整后的评分，可撤销以恢复原始编码。</p>' : ''}
    <button type="button" class="fsqca-reset-btn" data-action="reset-rule" ${rule.overridden ? '' : 'disabled'}>撤销本细则修订</button>
  </section>`;
}

/* 热力矩阵哨兵色（缺失 / 不适用），与单元格着色同源，图例复用同一常量 */
const HEAT_MISSING_COLOR = '#3a3f47';
const HEAT_NA_COLOR = '#5a4a2a';

function heatSection() {
  const m = heatMatrix();
  const colorFor = cell => {
    if (!cell) return 'transparent';
    if (cell.kind === 'missing') return HEAT_MISSING_COLOR;
    if (cell.kind === 'na') return HEAT_NA_COLOR;
    const level = SCALE.levels.find(l => l.value === cell.value);
    return (level?.color || '#888') + 'cc';
  };
  /* data-c 记录列号，供「悬停高亮同列」用（同行由 CSS tr:hover 负责）；
     修订叠层（override）格带 qca-heat-ov 类，2px 虚线描边区分（B1-1） */
  const rows = m.cases.map((c, ri) => {
    const cells = m.cells[ri] || [];
    return `<tr><th title="${esc(c.name)}">${esc(c.id)}</th>${cells.map((cell, ci) => {
      const ovSuffix = cell?.overridden ? '（已修订）' : '';
      return `<td data-c="${ci}" data-heat-case="${esc(c.id)}" data-heat-rule="${esc(m.rules[ci])}" class="${cell?.overridden ? 'qca-heat-ov ' : ''}${c.id === ui.caseId && m.rules[ci] === ui.selectedRule ? 'cell-active' : ''}" style="background:${colorFor(cell)}" title="${esc(cell?.code || '')} ${esc(String(cell?.score ?? ''))} ${esc(cell?.status ?? '')}${ovSuffix}"></td>`;
    }).join('')}</tr>`;
  }).join('');
  const head = `<tr><th>案例</th>${m.rules.map((r, ci) => `<th data-c="${ci}" data-code="${esc(r)}" title="${esc(r)}">${esc(r)}</th>`).join('')}</tr>`;
  /* 图例色阶条（0.6.3 P1-2）：色值直接取渲染单元格时用的同一套色标，
     保证图例与格色永远同源，不会各改各的。 */
  const legend = `<div class="fsqca-heat-legend">
    <span class="fsqca-lg-title">色阶</span>
    ${SCALE.levels.slice().reverse().map(l => `<span class="fsqca-lg"><i style="background:${l.color}cc"></i>${esc(l.label)}</span>`).join('')}
    <span class="fsqca-lg"><i style="background:${HEAT_MISSING_COLOR}"></i>缺失</span>
    <span class="fsqca-lg"><i style="background:${HEAT_NA_COLOR}"></i>不适用/情境</span>
  </div>`;
  return `<section class="fsqca-heat"><h3>全库热力矩阵（47 案 × 35 细则）</h3><p class="fsqca-hint">色阶表示五档得分，深灰表示缺失，暗黄表示不适用或情境变量，绿色虚线框表示本地已调整。点击表头查看该细则的全库覆盖情况，点击单元格可钉选。</p>${legend}<div class="fsqca-heat-scroll"><table class="fsqca-heat-table">${head}${rows}</table></div></section>`;
}

function shell() {
  const cases = getCases();
  const options = cases.map(c => `<option value="${esc(c.id)}"${ui.caseId === c.id ? ' selected' : ''}>${esc(c.id)} · ${esc(c.name)}</option>`).join('');
  return `<div class="fsqca-shell">
    <header class="fsqca-hero">
      <p class="fsqca-eyebrow">fsQCA · 全域土地综合整治案例比较</p>
      <h1>fsQCA 评分</h1>
      <dl class="fsqca-variable-intro">
        <dt>条件变量 · 结构化</dt><dd>RES 资源结构化：识别、整合与配置整治资源；SPA 空间要素配置：统筹各类用地与空间布局。</dd>
        <dt>条件变量 · 能力化</dt><dd>TEC 资源能力化：技术、信息与专业服务支撑；ACT 组织协同：主体协作、利益协调与公众参与。</dd>
        <dt>条件变量 · 杠杆化</dt><dd>CAP 资本运作：融资渠道、资金统筹与运营保障；IND 产业跃迁：产业融合、价值链延伸与发展转型。</dd>
        <dt>结果变量</dt><dd>AGR 农用地整治；CON 建设用地整治；ECO 生态保护修复；SPE 特色整治。四类结果分别反映不同整治领域的实施表现。</dd>
      </dl>
      <label class="fsqca-case-select">案例
        <select id="fsqcaCaseSelect">${options}</select>
      </label>
      <nav class="fsqca-tabs">
        <button type="button" class="fsqca-tab${ui.tab === 'coding' ? ' active' : ''}" data-tab="coding">编码评分</button>
        <button type="button" class="fsqca-tab${ui.tab === 'analysis' ? ' active' : ''}" data-tab="analysis">组态分析</button>
        <button type="button" class="fsqca-tab${ui.tab === 'official' ? ' active' : ''}" data-tab="official">本版本分析</button>
      </nav>
    </header>
    <div id="fsqcaCodingPane"${ui.tab === 'coding' ? '' : ' hidden'}>
      <div class="fsqca-workspace">
        <div id="fsqcaVarPanel" class="fsqca-vars-slot"></div>
        <div id="fsqcaRuleList" class="fsqca-rules-slot"></div>
        <div id="fsqcaRuleDetail" class="fsqca-detail-slot"></div>
      </div>
      <div id="fsqcaHeat" class="fsqca-heat-slot"></div>
    </div>
    <div id="fsqcaAnalysisPane"${ui.tab === 'analysis' ? '' : ' hidden'}></div>
    <div id="fsqcaOfficialPane"${ui.tab === 'official' ? '' : ' hidden'}></div>
  </div>`;
}

function renderBody(page) {
  if (ui.tab !== 'coding') return;
  const caseData = getCase(ui.caseId) || getCases()[0];
  if (!caseData) return;
  ui.caseId = caseData.id;
  const varPanel = page.querySelector('#fsqcaVarPanel');
  const ruleListEl = page.querySelector('#fsqcaRuleList');
  const detail = page.querySelector('#fsqcaRuleDetail');
  const heat = page.querySelector('#fsqcaHeat');
  if (varPanel) varPanel.innerHTML = variablePanel(caseData);
  if (ruleListEl) ruleListEl.innerHTML = ruleList(caseData);
  if (detail) detail.innerHTML = ruleDetail(caseData);
  if (heat) heat.innerHTML = heatSection();
}

function renderAnalysis(page) {
  const pane = page.querySelector('#fsqcaAnalysisPane');
  if (!pane) return;
  if (!pane.dataset.ready) { pane.innerHTML = analysisHtml(); pane.dataset.ready = '1'; bindAnalysis(page); }
}

/* 「现版本分析」第三标签（0.6.5）：懒渲染一次性绑定，官方数据无交互状态 */
function renderOfficial(page) {
  const pane = page.querySelector('#fsqcaOfficialPane');
  if (!pane) return;
  if (!pane.dataset.ready) { pane.innerHTML = officialHtml(); pane.dataset.ready = '1'; bindOfficial(page); }
}

function switchTab(page, tab) {
  ui.tab = tab;
  page.querySelectorAll('.fsqca-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  page.querySelector('#fsqcaCodingPane')?.toggleAttribute('hidden', tab !== 'coding');
  page.querySelector('#fsqcaAnalysisPane')?.toggleAttribute('hidden', tab !== 'analysis');
  page.querySelector('#fsqcaOfficialPane')?.toggleAttribute('hidden', tab !== 'official');
  const sel = page.querySelector('.fsqca-case-select');
  if (sel) sel.style.display = tab === 'coding' ? '' : 'none';
  if (tab === 'analysis') renderAnalysis(page);
  if (tab === 'official') renderOfficial(page);
}

function locateSelectedRule(page) {
  if (!ui.selectedRule || isRestoringNavigation()) return;
  const cell = page.querySelector(`[data-heat-case="${CSS.escape(ui.caseId)}"][data-heat-rule="${CSS.escape(ui.selectedRule)}"]`);
  cell?.classList.add('cell-active');
  jumpToTarget(page.querySelector('[data-detail-rule]'), { record: false });
}

function bind(page) {
  delegate(page, '.fsqca-tab', 'click', (e, el) => { clearNavigationHistory(); switchTab(page, el.dataset.tab); });
  delegate(page, '#fsqcaCaseSelect', 'change', (e, el) => { clearNavigationHistory(); ui.caseId = el.value; ui.selectedRule = null; renderBody(page); });
  delegate(page, '[data-rule]', 'click', (e, el) => { rememberNavigation(); ui.selectedRule = el.dataset.rule; renderBody(page); locateSelectedRule(page); });
  delegate(page, '[data-action="open"]', 'click', (e, el) => { e.preventDefault(); const u = el.dataset.url; if (u) void openExternal(u); });
  delegate(page, '[data-local-kind]', 'click', (_e, el) => {
    navigate(el.dataset.localKind === 'tool' ? VIEW.CASE_POLICY : VIEW.CASE_SOURCES,
      { caseId: ui.caseId, [el.dataset.localKind === 'tool' ? 'toolNo' : 'sourceNo']: el.dataset.localKey }, { index: true });
  });
  delegate(page, '[data-score]', 'click', (_e, el) => {
    if (!ui.selectedRule) return;
    const ov = loadOverrides();
    ov[ui.caseId] = ov[ui.caseId] || {};
    ov[ui.caseId][ui.selectedRule] = { ...(ov[ui.caseId][ui.selectedRule] || {}), score: el.dataset.score };
    setOverrides(ov); saveOverrides(ov); renderBody(page);
  });
  delegate(page, '[data-status]', 'click', (_e, el) => {
    if (!ui.selectedRule) return;
    const ov = loadOverrides();
    ov[ui.caseId] = ov[ui.caseId] || {};
    ov[ui.caseId][ui.selectedRule] = { ...(ov[ui.caseId][ui.selectedRule] || {}), status: el.dataset.status };
    setOverrides(ov); saveOverrides(ov); renderBody(page);
  });
  delegate(page, '[data-action="reset-rule"]', 'click', () => {
    if (!ui.selectedRule) return;
    const ov = loadOverrides();
    if (ov[ui.caseId]) { delete ov[ui.caseId][ui.selectedRule]; if (!Object.keys(ov[ui.caseId]).length) delete ov[ui.caseId]; }
    setOverrides(ov); saveOverrides(ov); renderBody(page);
  });

  /* 热力矩阵可读性（0.6.3 P1-2）：悬停高亮同列（同行由 CSS tr:hover 负责），
     点击钉选一个格，便于对照「某案例 × 某细则」。47×35 共 1645 格，用委托避免逐格绑事件。 */
  const clearColHighlight = table => {
    if (table) table.querySelectorAll('.hl-col').forEach(el => el.classList.remove('hl-col'));
  };
  delegate(page, '.fsqca-heat-table td', 'mouseover', (_e, td) => {
    const table = td.closest('table');
    if (!table) return;
    clearColHighlight(table);
    const c = td.dataset.c;
    if (c == null) return;
    table.querySelectorAll(`[data-c="${c}"]`).forEach(el => el.classList.add('hl-col'));
  });
  delegate(page, '.fsqca-heat-table', 'mouseleave', (_e, table) => clearColHighlight(table));
  delegate(page, '.fsqca-heat-table td', 'click', (_e, td) => {
    const table = td.closest('table');
    if (!table) return;
    const wasActive = td.classList.contains('cell-active');
    table.querySelectorAll('.cell-active').forEach(el => el.classList.remove('cell-active'));
    if (!wasActive) td.classList.add('cell-active');
  });

  /* B1-2：点击表头细则 → toast 显示该细则全库覆盖（有效/缺失/不适用）。
     th 上的细则编码在 data-code（title 同源），用委托避免重渲染重复绑事件。
     注意：表格无显式 <thead>，浏览器会把首行 tr 放进隐式 tbody，故选择器不能带 thead。 */
  delegate(page, '.fsqca-heat-table th[data-c]', 'click', (_e, el) => {
    const code = el.dataset.code || el.title;
    if (!code) return;
    const cov = coverage(code);
    notify(`${code} 全库覆盖：有效 ${cov.effective}/${cov.total}（${(cov.rate * 100).toFixed(1)}%），缺失 ${cov.missing}，不适用 ${cov.na}`, 'info');
  });

  /* B3-2：组态分析页的案例跳转走 CustomEvent 解耦（fsqca-analysis 只派发，本页监听）。
     renderFsqca 每次渲染都会走 bind()，用全局旗标防止重复挂 window 监听。 */
  if (!window.__fsqcaGotoBound) {
    window.__fsqcaGotoBound = true;
    window.addEventListener('fsqca-goto-case', e => {
      const id = String(e.detail || '');
      if (!getCase(id)) return;
      rememberNavigation();
      ui.caseId = id;
      ui.selectedRule = null;
      switchTab(page, 'coding');
      renderBody(page);
      const sel = page.querySelector('#fsqcaCaseSelect');
      if (sel) sel.value = ui.caseId;
    });
  }
}

export async function renderFsqca(state) {
  const page = $('pageFsqca');
  if (!page || state.view !== VIEW.FSQCA) return;
  setOverrides(loadOverrides());
  const target = state.viewParams;
  if (!isRestoringNavigation() && target?.caseId && getCase(target.caseId)) {
    ui.caseId = String(target.caseId).padStart(2, '0');
    ui.selectedRule = getCase(ui.caseId).rules.some(r => r.code === target.ruleCode) ? target.ruleCode : null;
    ui.tab = 'coding';
  }
  if (!page.dataset.fsqcaReady) { page.innerHTML = shell(); page.dataset.fsqcaReady = '1'; }
  page.querySelector('#fsqcaCaseSelect').value = ui.caseId;
  switchTab(page, ui.tab);
  renderBody(page);
  bind(page);
  if (target?.ruleCode) locateSelectedRule(page);
}

export function focusFsqca() {
  const sel = $('pageFsqca')?.querySelector('#fsqcaCaseSelect');
  if (getState().view === VIEW.FSQCA && sel) sel.focus();
}
