/*
 * fsQCA 组态分析面板（架构对齐 fsQCA 4.1 官方软件）
 * 流程：必要条件分析 → 真值表算法 → QMC 最小化 → 复杂/简约/中间解
 * 计算全部在 core/qca-engine.js（纯函数），本文件只做数据装配与渲染。
 *
 * 0.6.3 三批次优化：
 *   B1-3 PRI 一致性闸（priCutoff，官方建议 0.7；0=不启用）
 *   B2-1 中间解假设区（基于余数组态的 directional expectations 复选）
 *   B2-2 结果缺席分析（勾选后并排渲染 ~结果 一侧）
 *   B2-3 必要条件 consistency 基准可调
 *   B3-1 参数持久化（localStorage['fsqca-analysis-params']）
 *   B3-2 案例跳转（解项案例 → CustomEvent 'fsqca-goto-case'，由 fsqca-view 监听）
 *   B3-3 结果 CSV 导出（复用 core/desktop.js exportCsv，UTF-8 BOM）
 *   B3-4 logit 二次校准方法学提示
 */
import { $, esc, delegate, toCsv } from '../core/dom.js';
import { exportCsv, notify } from '../core/desktop.js';
import {
  RESULT_FAMILIES, THEORY_GROUPS, getCases, calibrateVariable,
} from '../core/fsqca.js';
import {
  calibrate, nudgeCrossover, buildTruthTable, minimize, necessaryConditions,
} from '../core/qca-engine.js';

const COND_CODES = THEORY_GROUPS.flatMap(g => g.codes); // RES SPA TEC ACT CAP IND

/* 面板状态（会话内保留，便于调参复跑） */
const ui = {
  outcome: 'AGR',
  conditions: [...COND_CODES],
  freqCutoff: 1,
  consistCutoff: 0.8,
  priCutoff: 0.75,     // 编码手册 6.3：PRI 一致性 ≥ 0.75（避免矛盾覆盖；0 = 不启用）
  necBench: 0.9,       // B2-3：必要条件 consistency 判定基准
  neg: false,          // B2-2：同时分析 ~结果（结果缺席）
  method: 'mean', // mean=编码表等权平均校准（现状）；logit=官方三锚点 logit 校准
  anchors: { fullIn: 0.95, crossover: 0.5, fullOut: 0.05 },
  assumptionDetail: {}, // B2-1：{ 余数 index: [勾选的条件的编码] }（中间解假设）
  result: null,
  error: null,
};

/* ---------- B3-1 参数持久化（套路同 fsqca-view 的 loadOverrides） ---------- */
const PARAMS_KEY = 'fsqca-analysis-params-064';

const clampNum = (v, lo, hi, dflt) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : dflt;
};

function saveParams() {
  try {
    localStorage.setItem(PARAMS_KEY, JSON.stringify({
      outcome: ui.outcome,
      conditions: ui.conditions,
      freqCutoff: ui.freqCutoff,
      consistCutoff: ui.consistCutoff,
      priCutoff: ui.priCutoff,
      necBench: ui.necBench,
      neg: ui.neg,
      method: ui.method,
      anchors: ui.anchors,
      assumptionDetail: ui.assumptionDetail,
    }));
  } catch { /* 存储不可用时静默降级为会话内状态 */ }
}

function loadParams() {
  let p = null;
  try { p = JSON.parse(localStorage.getItem(PARAMS_KEY) || 'null'); } catch { p = null; }
  if (!p || typeof p !== 'object') return;
  if (RESULT_FAMILIES.some(f => f.code === p.outcome)) ui.outcome = p.outcome;
  if (Array.isArray(p.conditions)) {
    const conds = p.conditions.filter(c => COND_CODES.includes(c));
    if (conds.length) ui.conditions = conds;
  }
  ui.freqCutoff = clampNum(p.freqCutoff, 1, 10, ui.freqCutoff);
  ui.consistCutoff = clampNum(p.consistCutoff, 0.5, 1, ui.consistCutoff);
  ui.priCutoff = clampNum(p.priCutoff, 0, 1, ui.priCutoff);
  ui.necBench = clampNum(p.necBench, 0.7, 1, ui.necBench);
  if (p.method === 'mean' || p.method === 'logit') ui.method = p.method;
  if (p.anchors && typeof p.anchors === 'object') {
    for (const key of ['fullIn', 'crossover', 'fullOut']) {
      const n = Number(p.anchors[key]);
      if (Number.isFinite(n)) ui.anchors[key] = n;
    }
  }
  ui.neg = Boolean(p.neg);
  if (p.assumptionDetail && typeof p.assumptionDetail === 'object') {
    ui.assumptionDetail = {};
    for (const [idx, conds] of Object.entries(p.assumptionDetail)) {
      if (!Number.isInteger(Number(idx)) || !Array.isArray(conds)) continue;
      ui.assumptionDetail[idx] = conds.filter(c => COND_CODES.includes(c));
    }
  }
}
loadParams();

/* 中间解假设：余数组态 index 列表（由 assumptionDetail 派生，升序） */
const assumptionIndices = () => Object.keys(ui.assumptionDetail).map(Number).sort((a, b) => a - b);

/* ---------- 数据装配 ---------- */
/* 把 47 案按所选变量装配成 qca-engine 的 dataset；缺失行保留（引擎会跳过）。
   negate（B2-2）：结果取反 y = 1 − y，用于结果缺席分析。 */
function buildDataset({ negate = false } = {}) {
  const cases = getCases();
  const valueOf = (caseId, code) => {
    const cal = calibrateVariable(caseId, code);
    if (cal?.value == null) return null;
    if (ui.method === 'logit') {
      const { fullIn, crossover, fullOut } = ui.anchors;
      return nudgeCrossover(calibrate(cal.value, fullIn, crossover, fullOut));
    }
    return cal.value;
  };
  const rows = cases.map(c => {
    const x = {};
    for (const cond of ui.conditions) x[cond] = valueOf(c.id, cond);
    const y0 = valueOf(c.id, ui.outcome);
    const y = y0 === null ? null : (negate ? 1 - y0 : y0);
    return { caseId: c.id, name: c.name, x, y };
  }).filter(r => r.y !== null && ui.conditions.every(cd => r.x[cd] !== null));
  return {
    cases: cases.map(c => ({ id: c.id, name: c.name })),
    conditions: [...ui.conditions],
    outcome: negate ? `~${ui.outcome}` : ui.outcome,
    rows,
  };
}

/* ---------- 渲染 ---------- */
const fmt = v => (v === null || v === undefined || Number.isNaN(v)) ? '—' : (Math.round(v * 1000) / 1000).toFixed(3);
const fmtP = v => (v === null || v === undefined) ? '—' : `${(v * 100).toFixed(1)}%`;
const csvNum = v => (v === null || v === undefined || Number.isNaN(v)) ? '' : (Math.round(v * 1000) / 1000).toFixed(3);

/* 一致性 / 覆盖度按阈值着色（0.6.3 P1-3）：≥0.8 达标 / 0.7–0.8 临界 / <0.7 偏低。
   阈值与论文口径一致（充分性一致性常用 0.8 门槛）。返回可直接插进 <td> 的属性串。 */
const qcaClass = v => {
  if (v === null || v === undefined || Number.isNaN(v)) return '';
  if (v >= 0.8) return ' class="qca-good"';
  if (v >= 0.7) return ' class="qca-mid"';
  return ' class="qca-low"';
};

function controlsHtml() {
  const condBoxes = COND_CODES.map(c =>
    `<label class="qca-check"><input type="checkbox" data-cond="${c}"${ui.conditions.includes(c) ? ' checked' : ''}> ${c}</label>`).join('');
  const outcomeOpts = RESULT_FAMILIES.map(f =>
    `<option value="${f.code}"${ui.outcome === f.code ? ' selected' : ''}>${f.code} ${esc(f.label)}</option>`).join('');
  return `<div class="qca-controls">
    <div class="qca-ctl-row">
      <label>结果变量 <select id="qcaOutcome">${outcomeOpts}</select></label>
      <span class="qca-ctl-group">条件变量 ${condBoxes}</span>
    </div>
    <div class="qca-ctl-row">
      <label>频数截断 <input id="qcaFreq" type="number" min="1" max="10" step="1" value="${ui.freqCutoff}"></label>
      <label>一致性截断 <input id="qcaConsist" type="number" min="0.5" max="1" step="0.05" value="${ui.consistCutoff}"></label>
      <label>PRI 截断 <input id="qcaPri" type="number" min="0" max="1" step="0.05" value="${ui.priCutoff}" title="PRI 一致性闸；编码手册 6.3 要求 ≥0.75，0 = 不启用"></label>
      <span class="qca-ctl-hint">PRI 用于识别同时指向结果及其缺席的矛盾组态；设为 0 时不按 PRI 筛选。</span>
      <label>必要性基准 <input id="qcaNecBench" type="number" min="0.7" max="1" step="0.05" value="${ui.necBench}" title="必要条件 consistency 判定基准"></label>
      <label class="qca-check"><input type="checkbox" id="qcaNeg"${ui.neg ? ' checked' : ''}> 同时分析 ~结果（结果缺席）</label>
    </div>
    <div class="qca-ctl-row">
      <label>校准方法 <select id="qcaMethod">
        <option value="mean"${ui.method === 'mean' ? ' selected' : ''}>等权平均（编码表）</option>
        <option value="logit"${ui.method === 'logit' ? ' selected' : ''}>官方三锚点 logit</option>
      </select></label>
      <span class="qca-ctl-hint">等权平均使用细则原始合成值；logit 在合成值上进行三锚点直接校准。本版本分析采用 0.75 / 0.5 / 0.25 锚点，复现时需同时统一校准方式与截断值。</span>
      <span class="qca-anchors"${ui.method === 'logit' ? '' : ' hidden'}>
        锚点 <input id="qcaAIn" type="number" step="0.05" value="${ui.anchors.fullIn}" title="完全隶属阈值">
        / <input id="qcaAX" type="number" step="0.05" value="${ui.anchors.crossover}" title="交叉点">
        / <input id="qcaAOut" type="number" step="0.05" value="${ui.anchors.fullOut}" title="完全不隶属阈值">
      </span>
      <button type="button" class="qca-run" data-qca="run">运行分析</button>
    </div>
  </div>`;
}

function necessityHtml(nec) {
  const rows = nec.rows.map(r => `<tr${r.necessary ? ' class="qca-necessary"' : ''}>
    <td>${esc(r.condition)}</td><td${qcaClass(r.consistency)}>${fmt(r.consistency)}</td><td${qcaClass(r.coverage)}>${fmt(r.coverage)}</td>
    <td>${fmt(r.ron)}</td><td>${r.partial ? '有缺失' : r.necessary ? `达到一致性基准；需结合 RoN 判断` : '未达到一致性基准'}</td></tr>`).join('');
  return `<section class="qca-block"><h3>必要条件分析（Analysis of Necessary Conditions，consistency 基准 ≥${nec.benchmark}）</h3>
    <p class="qca-note">必要性一致性＝Σmin(X,Y)/ΣY；覆盖度＝Σmin(X,Y)/ΣX；RoN＝Σ(1−X)/Σ(1−min(X,Y))。分母为零时不计算；高一致性仍需结合相关性和案例证据判断。</p>
    <table class="qca-table"><thead><tr><th>条件</th><th>必要性一致性</th><th>必要性覆盖度</th><th>RoN</th><th>筛查</th></tr></thead><tbody>${rows}</tbody></table></section>`;
}

function truthTableHtml(tt) {
  const cutoffText = `一致性≥${tt.consistCutoff}${tt.priCutoff ? `，PRI≥${tt.priCutoff}` : ''}`;
  const rows = tt.rows.map(r => {
    const cls = r.outcome === '1' ? 'qca-pos' : r.outcome === '0' ? 'qca-neg' : 'qca-rem';
    const casesTitle = r.memberCases.map(m => `${m.caseId}(${m.membership})`).join(' ');
    return `<tr class="${cls}" title="${esc(casesTitle)}">
      <td>${esc(r.label)}</td><td>${r.number}</td>
      <td${qcaClass(r.rawConsist)}>${fmt(r.rawConsist)}</td><td${qcaClass(r.priConsist)}>${fmt(r.priConsist)}</td><td${qcaClass(r.symConsist)}>${fmt(r.symConsist)}</td>
      <td>${r.outcome}</td></tr>`;
  }).join('');
  return `<section class="qca-block"><h3>真值表（${tt.summary.positive} 正 / ${tt.summary.negative} 负 / ${tt.summary.remainders} 余数；频数≥${tt.freqCutoff}，${cutoffText}）</h3>
    <p class="fsqca-hint">悬停行可查看 &gt;0.5 隶属的案例及隶属度。余数行（number 不足）不参与复杂解，可在下方「中间解假设」区勾选采纳。</p>
    <div class="qca-table-scroll"><table class="qca-table"><thead><tr><th>组态</th><th>number</th><th>raw consist.</th><th>PRI consist.</th><th>SYM consist.</th><th>结果</th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
}

/* B2-1：中间解假设区——把余数组态按条件拆复选框（对齐官方 directional expectations：
   「条件出现有助于结果」）。同一余数至少勾选一项即纳入假设（Don't Care 集）。 */
function assumptionsHtml(tt) {
  const rems = tt.rows.filter(r => r.outcome === '-');
  if (!rems.length) return '';
  const list = rems.map(r => {
    const picked = ui.assumptionDetail[r.index] || [];
    const boxes = tt.conditions.map(c =>
      `<label class="qca-check" title="假设 ${esc(r.label)} 中 ${esc(c)} 出现有助于结果"><input type="checkbox" data-assump="${r.index}" data-cond="${esc(c)}"${picked.includes(c) ? ' checked' : ''}> ${esc(c)}</label>`).join('');
    return `<div class="qca-assump"><span class="qca-assump-label" title="组态 ${esc(r.label)}（number=${r.number}）">${esc(r.label)}</span><span class="qca-assump-boxes">${boxes}</span></div>`;
  }).join('');
  return `<section class="qca-block"><h3>中间解假设</h3>
    <p class="fsqca-hint">勾选「条件出现有助于结果」＝采纳该余数组态作为中间解假设（视为 Don't Care）。同一余数至少勾选一项即纳入；全部不勾选的余数不参与中间解。${ui.neg ? '勾选「同时分析 ~结果」时，假设对两侧分析同时生效。' : ''}</p>
    <div class="qca-assump-list">${list}</div></section>`;
}

/* B2-1：未选假设时给引导提示（resultsHtml 追加中间解节的要求） */
function intermediateHtml(sol) {
  if (!sol) {
    return `<section class="qca-block"><h3>中间解（INTERMEDIATE，选定余数作 Don't Care）</h3>
      <p class="fsqca-hint">尚未选择假设：在上方「中间解假设」区勾选余数组态后重新运行分析，即可生成中间解（介于复杂解与简约解之间，通常作为论文报告方案）。</p></section>`;
  }
  return solutionHtml('中间解（INTERMEDIATE，选定余数作 Don\'t Care）', sol);
}

function solutionHtml(title, sol) {
  if (!sol) return '';
  if (sol.error) return `<section class="qca-block"><h3>${esc(title)}</h3><p class="qca-error">${esc(sol.error)}</p></section>`;
  if (!sol.solutions?.length || !sol.solutions[0].terms.length) {
    return `<section class="qca-block"><h3>${esc(title)}</h3><p class="fsqca-hint">无正面组态可最小化（真值表中没有结果为 1 的行）。</p></section>`;
  }
  const body = sol.solutions.map((s, si) => {
    const m = s.metrics;
    const terms = m.terms.map(t => `<tr>
      <td class="qca-term">${esc(t.label)}</td>
      <td${qcaClass(t.rawCoverage)}>${fmt(t.rawCoverage)}</td><td${qcaClass(t.uniqueCoverage)}>${t.uniqueCoverage === null ? '—' : fmt(t.uniqueCoverage)}</td>
      <td${qcaClass(t.consistency)}>${fmt(t.consistency)}</td>
      <td class="qca-cases">${t.cases.map(c => `<button type="button" class="qca-case-link" data-case="${esc(c.caseId)}" title="隶属度 ${c.membership}，点击跳转到该案例编码评分页">${esc(c.caseId)}</button>`).join(' ') || '(no cases)'}</td></tr>`).join('');
    return `<div class="qca-solution">
      ${sol.solutions.length > 1 ? `<h4>解 ${si + 1}（共 ${sol.solutions.length} 个并列最小解）</h4>` : ''}
      <table class="qca-table"><thead><tr><th>组态路径</th><th>raw coverage</th><th>unique coverage</th><th>consistency</th><th>&gt;0.5 隶属案例</th></tr></thead><tbody>${terms}</tbody></table>
      <p class="qca-sol-meta">solution coverage: <b>${fmt(m.solutionCoverage)}</b> · solution consistency: <b>${fmt(m.solutionConsistency)}</b></p>
    </div>`;
  }).join('');
  return `<section class="qca-block"><h3>${esc(title)}</h3>${body}</section>`;
}

/* 单侧分析（main 或 ~结果）的完整结果区 */
function sideHtml(side, title, isMain) {
  return `<div class="qca-side">
    ${title ? `<h2 class="qca-side-title">${esc(title)}</h2>` : ''}
    ${necessityHtml(side.necessity)}
    ${truthTableHtml(side.truthTable)}
    ${isMain ? assumptionsHtml(side.truthTable) : ''}
    ${solutionHtml('复杂解（COMPLEX，不用余数）', side.complex)}
    ${solutionHtml('简约解（PARSIMONIOUS，全部余数作 Don\'t Care）', side.parsimonious)}
    ${intermediateHtml(side.intermediate)}
  </div>`;
}

function resultsHtml() {
  if (ui.error) return `<p class="qca-error">${esc(ui.error)}</p>`;
  if (!ui.result) return `<p class="fsqca-hint">选择变量、校准方式与截断值后运行分析，可查看必要条件、真值表及组态解；勾选「同时分析 ~结果」可比较结果出现与缺席的条件组合。</p>`;
  const r = ui.result;
  return `
    <div class="qca-result-bar">
      <p class="fsqca-hint">有效案例 ${r.nCases}/${r.totalCases}（剔除条件或结果缺失的案例）。</p>
      <button type="button" class="qca-export-btn" data-qca="export">导出结果 CSV</button>
    </div>
    ${r.neg
      ? `<div class="qca-sides">${sideHtml(r.main, `${ui.outcome} → 1（结果出现）`, true)}${sideHtml(r.neg, `~${ui.outcome} → 1（结果缺席）`, false)}</div>`
      : sideHtml(r.main, '', true)}`;
}

export function analysisHtml() {
  return `<div class="qca-shell">
    ${controlsHtml()}
    <div id="qcaResults">${resultsHtml()}</div>
  </div>`;
}

/* ---------- B3-3 CSV 导出（复用 core/desktop.js exportCsv：桌面端存盘 / 浏览器下载，UTF-8 BOM） ---------- */
function stampNow() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}`;
}

function buildExportCsv() {
  const r = ui.result;
  if (!r) return '';
  const lines = [];
  const pushSide = (label, s) => {
    lines.push([label]);
    lines.push(['必要条件分析', `consistency 基准 ≥${s.necessity.benchmark}`]);
    lines.push(['条件', '必要性一致性 inclN', '必要性覆盖度 covN', 'RoN', '筛查']);
    for (const n of s.necessity.rows) {
      lines.push([n.condition, csvNum(n.consistency), csvNum(n.coverage), csvNum(n.ron), n.partial ? '有缺失' : n.necessary ? '达到一致性基准；需结合RoN判断' : '未达到一致性基准']);
    }
    lines.push([]);
    lines.push(['真值表', `频数≥${s.truthTable.freqCutoff}`, `一致性≥${s.truthTable.consistCutoff}${s.truthTable.priCutoff ? `，PRI≥${s.truthTable.priCutoff}` : ''}`]);
    lines.push(['组态', 'number', 'raw consist.', 'PRI consist.', 'SYM consist.', '结果', '>0.5 隶属案例']);
    for (const t of s.truthTable.rows) {
      lines.push([t.label, t.number, csvNum(t.rawConsist), csvNum(t.priConsist), csvNum(t.symConsist), t.outcome, t.memberCases.map(m => `${m.caseId}(${m.membership})`).join(' ')]);
    }
    lines.push([]);
    const kinds = [
      ['复杂解 COMPLEX', s.complex],
      ['简约解 PARSIMONIOUS', s.parsimonious],
      ['中间解 INTERMEDIATE', s.intermediate],
    ];
    for (const [name, sol] of kinds) {
      lines.push([name]);
      lines.push(['组态路径', 'raw coverage', 'unique coverage', 'consistency', 'solution coverage', 'solution consistency', '>0.5 隶属案例']);
      if (!sol) lines.push(['（未生成）']);
      else if (sol.error) lines.push([sol.error]);
      else {
        for (const sl of sol.solutions) {
          for (const t of sl.metrics.terms) {
            lines.push([t.label, csvNum(t.rawCoverage), t.uniqueCoverage === null ? '' : csvNum(t.uniqueCoverage), csvNum(t.consistency), csvNum(sl.metrics.solutionCoverage), csvNum(sl.metrics.solutionConsistency), t.cases.map(c => c.caseId).join(' ')]);
          }
        }
      }
      lines.push([]);
    }
  };
  pushSide(`结果 = ${ui.outcome}（结果出现）`, r.main);
  if (r.neg) pushSide(`结果 = ~${ui.outcome}（结果缺席分析）`, r.neg);
  return toCsv(lines);
}

/* ---------- 交互 ---------- */
export function bindAnalysis(page) {
  page.querySelector('#qcaOutcome')?.addEventListener('change', e => { ui.outcome = e.target.value; ui.result = null; saveParams(); refresh(); });
  page.querySelectorAll('[data-cond]').forEach(cb => cb.addEventListener('change', () => {
    /* 限定在控件区内取：中间解假设区的复选框也带 data-cond，不能混入条件列表 */
    ui.conditions = [...page.querySelectorAll('.qca-controls [data-cond]:checked')].map(el => el.dataset.cond);
    ui.result = null; saveParams(); refresh();
  }));
  page.querySelector('#qcaFreq')?.addEventListener('change', e => { ui.freqCutoff = Math.max(1, parseInt(e.target.value, 10) || 1); saveParams(); });
  page.querySelector('#qcaConsist')?.addEventListener('change', e => { ui.consistCutoff = Math.min(1, Math.max(0.5, Number(e.target.value) || 0.8)); ui.result = null; saveParams(); refresh(); });
  page.querySelector('#qcaPri')?.addEventListener('change', e => { ui.priCutoff = clampNum(e.target.value, 0, 1, 0); ui.result = null; saveParams(); refresh(); });
  page.querySelector('#qcaNecBench')?.addEventListener('change', e => { ui.necBench = clampNum(e.target.value, 0.7, 1, 0.9); ui.result = null; saveParams(); refresh(); });
  page.querySelector('#qcaNeg')?.addEventListener('change', e => { ui.neg = e.target.checked; ui.result = null; saveParams(); refresh(); });
  page.querySelector('#qcaMethod')?.addEventListener('change', e => {
    ui.method = e.target.value; ui.result = null; saveParams();
    page.querySelector('.qca-anchors')?.classList.toggle('hidden', ui.method !== 'logit');
  });
  const readAnchors = () => {
    ui.anchors = {
      fullIn: Number(page.querySelector('#qcaAIn')?.value) || 0.95,
      crossover: Number(page.querySelector('#qcaAX')?.value) || 0.5,
      fullOut: Number(page.querySelector('#qcaAOut')?.value) || 0.05,
    };
  };
  page.querySelector('[data-qca="run"]')?.addEventListener('click', () => {
    readAnchors();
    try {
      ui.error = null;
      if (ui.conditions.length < 2) throw new Error('至少选择 2 个条件变量。');
      if (ui.conditions.length > 10) throw new Error('条件变量过多（>10），组态数量爆炸。');
      const dataset = buildDataset();
      if (dataset.rows.length < 3) throw new Error(`有效案例过少（${dataset.rows.length}），无法分析。`);
      const negDataset = ui.neg ? buildDataset({ negate: true }) : null;
      /* 单一侧流程：真值表 → 必要条件 → 三种解（B2-1 中间解仅在选了假设时生成） */
      const runSide = ds => {
        const truthTable = buildTruthTable(ds, { freqCutoff: ui.freqCutoff, consistCutoff: ui.consistCutoff, priCutoff: ui.priCutoff });
        const assumptions = assumptionIndices();
        return {
          truthTable,
          necessity: necessaryConditions(ds, { consistencyBenchmark: ui.necBench }),
          complex: minimize(truthTable, ds, 'complex'),
          parsimonious: minimize(truthTable, ds, 'parsimonious'),
          intermediate: assumptions.length ? minimize(truthTable, ds, 'intermediate', { assumptions }) : null,
        };
      };
      ui.result = {
        nCases: dataset.rows.length, totalCases: getCases().length,
        main: runSide(dataset),
        neg: negDataset ? runSide(negDataset) : null,
      };
    } catch (err) {
      ui.result = null;
      ui.error = `分析失败：${err.message}`;
    }
    saveParams();
    refresh();
  });

  /* B2-1：假设复选框（结果区每次重渲染，用委托；勾选状态汇总进 ui.assumptionDetail） */
  delegate(page, '[data-assump]', 'change', () => {
    const detail = {};
    page.querySelectorAll('[data-assump]:checked').forEach(cb => {
      (detail[cb.dataset.assump] = detail[cb.dataset.assump] || []).push(cb.dataset.cond);
    });
    ui.assumptionDetail = detail;
    ui.result = null;
    saveParams();
  });

  /* B3-2：案例跳转——只派发 CustomEvent，由 fsqca-view 监听并切到编码评分页（解耦） */
  delegate(page, '.qca-case-link', 'click', (e, el) => {
    e.preventDefault();
    const id = el.dataset.case;
    if (id) window.dispatchEvent(new CustomEvent('fsqca-goto-case', { detail: id }));
  });

  /* B3-3：导出结果 CSV */
  delegate(page, '[data-qca="export"]', 'click', async () => {
    if (!ui.result) return;
    const filename = `fsqca分析_${ui.outcome}${ui.neg ? '_含缺席' : ''}_${stampNow()}.csv`;
    const result = await exportCsv(filename, buildExportCsv());
    if (result.ok) notify(`已导出分析结果${result.filePath ? '：' + result.filePath : ''}`, 'ok');
    else if (result.reason !== 'canceled') notify('导出失败：' + (result.reason || '未知错误'), 'err');
  });

  function refresh() {
    const box = page.querySelector('#qcaResults');
    if (box) box.innerHTML = resultsHtml();
  }
  void $;
}
