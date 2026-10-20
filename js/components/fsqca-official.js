/*
 * 「现版本分析」展示页组件（0.6.5）
 * ------------------------------------------------------------------
 * 只读呈现 10-18 收口后的官方 fsQCA 分析成果（FSQCA_OFFICIAL，构建期从权威
 * xlsx 一次性抽取，运行时绝不重算）。与「组态分析」交互页各司其职：
 * 展示页 = 官方定稿结论，分析页 = 自由探索。
 *
 * 口径声明（R-a）：本页判定口径为官方 xlsx 原样（PRI ≥0.5），与交互页默认
 * PRI ≥0.75 不同，hero 显著注记 + S3/S4 页脚复用 meta.priNote 单处维护文案。
 *
 * 模式对齐 fsqca-analysis.js：officialHtml() 拼整页字符串 + bindOfficial(page)
 * 用 core/dom.js delegate 委托事件（复制 Markdown 按钮，R10）。
 */
import { esc, delegate } from '../core/dom.js';
import { notify } from '../core/desktop.js';
import { FSQCA_OFFICIAL } from '../../data/fsqca-official-results.js';
import { FSQCA_SCORES } from '../../data/fsqca-scores.js';

const O = FSQCA_OFFICIAL;
const OUTCOME_NAMES = { AGR: '农用地整治', CON: '建设用地整治', ECO: '生态保护修复', SPE: '特色整治' };
const PUBLIC_LIMITS = [
  '47 个案例均为成功试点，条件侧普遍偏高，RES、SPA 均无案例低于 0.5；样本的有限差异限制了充分性分析的解释范围。',
  '条件普遍偏高可能产生天花板效应。RoN 在一致性恰为 1.000 时无有效值，此类必要性关系不能仅凭一致性作出判断。',
];

/* 来源标注统一格式：来源：文件名 · sheet · 行号区间（docx 用 · 段 n-m / · 表 n） */
function srcLine(src) {
  if (!src) return '';
  const parts = [src.file];
  if (src.sheet) parts.push(src.sheet);
  if (src.rows) parts.push(src.rows);
  return `<p class="qca-src">来源：${esc(parts.join(' · '))}</p>`;
}
function srcLines(sources) {
  return (sources || []).map(srcLine).join('');
}

/* 分节外壳：标题 + 复制 Markdown 按钮（R10）+ 正文 + 来源页脚 */
function sectionShell(secId, title, bodyHtml, sourceHtml) {
  return `<section class="qca-block qca-official-sec" id="qcaSec-${esc(secId)}" data-sec="${esc(secId)}">
    <div class="qca-sec-head"><h3>${esc(title)}</h3>
      <button type="button" class="qca-copy-btn" data-copy-sec="${esc(secId)}" title="复制本节内容与来源">复制本节</button>
    </div>
    ${bodyHtml}${sourceHtml}
  </section>`;
}

/* ---------- S1 总览卡 ---------- */
function overviewCards() {
  const s1Cards = O.s1_overview.cards.map(c => `
    <div class="qca-ov-card">
      <b>${esc(c.value)}</b>
      <span>${esc(c.label)}</span>
      <small>${esc(c.note.replace('全部部级试点（成功样本，注意截尾）', '47 个部级典型试点案例（成功样本）'))}</small>
    </div>`).join('');
  return `<div class="qca-ov-grid">${s1Cards}</div>`;
}

/* ---------- S2 必要条件 ---------- */
function necessityHtml() {
  const s2 = O.s2_necessity;
  const flagBadge = it => {
    if (it.flag === 'star') return '<span class="qca-badge qca-good">★ 主结论</span>';
    if (it.flag === 'edge') return '<span class="qca-badge qca-warn">贴线 · 稳健性有限</span>';
    if (it.flag === 'ron-invalid') return '<span class="qca-badge qca-warn">RoN 失效 · 须人工复核</span>';
    return '';
  };
  const rows = s2.items.map(it => `
    <tr>
      <td class="qca-term">${esc(it.expr)}</td>
      <td>${esc(it.condName)}</td>
      <td class="${it.flag === 'star' ? 'qca-good' : 'qca-warn'}">${esc(it.consistency)}</td>
      <td>${esc(it.coverage)}</td>
      <td>${esc(it.ron || '—')}</td>
      <td>${flagBadge(it)}${it.flag === 'edge' ? '<small class="qca-note">高于判定线约 0.0007</small>' : ''}</td>
    </tr>`).join('');
  /* R-c：核心限制警示条与必要性表同屏（正上方），物理上无法只看 ★ 不看警告 */
  const coreLimits = PUBLIC_LIMITS.map(t => `<li>${esc(t)}</li>`).join('');
  const warnBar = `<div class="qca-warn-bar"><strong>解释边界：</strong><ul>${coreLimits}</ul></div>`;
  const near = s2.nearNecessary.map(it => `
    <tr><td class="qca-term">${esc(it.expr)}</td><td>${esc(it.consistency)}</td><td>${esc(it.coverage)}</td><td>${esc(it.ron || '—')}</td><td>未达到必要性一致性阈值</td></tr>`).join('');
  const foot = O.s2_necessity.items.find(x => x.footnote);
  const footHtml = foot ? '<p class="qca-footnote">TEC→ECO 的一致性为 0.9007，接近 0.90 判定线，其解释需结合稳健性检验。</p>' : '';
  const nearHtml = `
    <details class="qca-details"><summary>接近必要的关系（一致性 0.80～0.90）· ${s2.nearNecessary.length} 条</summary>
      <div class="qca-table-scroll"><table class="qca-table">
        <tr><th>关系</th><th>一致性</th><th>覆盖度</th><th>RoN</th><th>解读</th></tr>${near}
      </table></div>
    </details>`;
  const body = `
    <p class="qca-stance">空间要素配置不足与 AGR、CON、ECO 三类结果的缺席存在必要性关系，其中 ~SPA→~CON 的 RoN 无有效值，解释受到限制。充分性结果反映本样本中已观察到的条件组合。</p>
    ${warnBar}
    <div class="qca-table-scroll"><table class="qca-table">
      <tr><th>关系</th><th>条件名称</th><th>一致性</th><th>覆盖度</th><th>RoN</th><th>判定</th></tr>
      ${rows}
    </table></div>
    <p class="qca-hint">判定口径：${esc(O.meta.thresholds.necessity)}；RoN 无有效值的关系单独标注。</p>
    ${footHtml}${nearHtml}`;
  return sectionShell('s2', '必要条件分析（实质锚点校准）', body, srcLine(s2.source));
}
function footnote(it) { return it.footnote || ''; }

/* ---------- S3 真值表摘要 ---------- */
function truthTableHtml() {
  const s3 = O.s3_truthTable;
  const diag = s3.coverageDiag;
  const configBlocks = s3.configs.map(cfg => {
    const caseText = cfg.caseIds.length <= 5
      ? cfg.caseIds.map(id => `案${esc(id)}`).join('、')
      : `<span title="${esc(cfg.caseIds.map(id => '案' + id).join('、'))}">${cfg.n} 例（悬停查看名单）</span>`;
    const rows = Object.keys(OUTCOME_NAMES).map(oc => {
      const r = cfg.results[oc] || {};
      const verdictClass = r.verdict === '结果发生' ? 'qca-good' : 'qca-warn';
      return `<tr><td>${esc(oc)}</td><td>${esc(r.consistency)}</td><td>${esc(r.pri)}</td><td>${esc(r.rawCov)}</td><td class="${verdictClass}">${esc(r.verdict)}</td></tr>`;
    }).join('');
    return `<h4>配置 <span class="qca-term">${esc(cfg.config)}</span>（${esc(cfg.meaning)}）· ${caseText}</h4>
      <div class="qca-table-scroll"><table class="qca-table">
        <tr><th>结果</th><th>一致性</th><th>PRI</th><th>原始覆盖度</th><th>判定</th></tr>${rows}
      </table></div>`;
  }).join('');
  const largest = [...s3.configs].sort((a,b)=>b.n-a.n)[0];
  const bullets = `<li>案例最多的配置 ${esc(largest.config)} 包含 ${largest.n} 例，占全部案例的 ${(largest.n/47*100).toFixed(1)}%。</li><li>仅包含 1 例的配置共 ${s3.configs.filter(c=>c.n===1).length} 个；其余 ${64-s3.configs.length} 个理想配置未观察到案例。</li>`;
  const body = `
    <p class="qca-hint">仅列出有案例落入的 8 个配置（共 64 个理想配置）。判定口径：频数 ≥1、一致性 ≥0.8、PRI ≥0.5——<strong class="qca-warn">PRI 阈值与「组态分析」交互页默认 0.75 不同</strong>，两页判定不可直接互比。</p>
    ${configBlocks}
    <div class="qca-diag"><strong>配置覆盖诊断：</strong>观测到 8 / 64 个理想配置，占 12.5%，样本的组态多样性有限。<ul>${bullets}</ul></div>`;
  return sectionShell('s3', '真值表摘要（8 个有案例配置 × 4 类结果）', body,
    srcLine(s3.source) + srcLine(diag.source));
}

/* ---------- S4 充分性解 ---------- */
function pathTable(paths, solution, label) {
  const rows = paths.map(p => `
    <tr><td class="qca-term">${esc(p.expr)}</td><td>${esc(p.consistency)}</td><td>${esc(p.coverage)}</td><td>${esc(p.uniqCov)}</td></tr>`).join('');
  return `<h4>${esc(label)}</h4>
    <div class="qca-table-scroll"><table class="qca-table">
      <tr><th>路径</th><th>一致性</th><th>原始覆盖度</th><th>唯一覆盖度</th></tr>${rows}
    </table></div>
    <p class="qca-sol-meta">解的总体一致性 <b>${esc(solution.consistency || '—')}</b> · 解的总体覆盖度 <b>${esc(solution.coverage || '—')}</b></p>`;
}
function sufficiencyHtml() {
  const s4 = O.s4_sufficiency;
  const blocks = Object.keys(OUTCOME_NAMES).map(oc => {
    const o = s4.outcomes[oc];
    const sameNote = o.samePathTextAs ? `<span class="qca-badge">路径文本同 ${esc(o.samePathTextAs)}</span>` : '';
    return `<div class="qca-solution"><h4>${esc(oc)} ${esc(OUTCOME_NAMES[oc])} ${sameNote}</h4>
      ${pathTable(o.complex.paths, o.complex.solution, '复杂解（不使用逻辑余项）')}
      ${pathTable(o.parsimonious.paths, o.parsimonious.solution, '简约解（允许使用逻辑余项）')}
    </div>`;
  }).join('');
  const body = `
    <p class="qca-hint">判定口径：频数 ≥1、一致性 ≥0.80、PRI ≥0.5（同上，与交互页默认 PRI ≥0.75 不同）。</p>
    ${blocks}
    <p class="qca-note"><strong>为何不报中间解：</strong>${esc(s4.noIntermediateReason)}</p>`;
  return sectionShell('s4', '充分性分析（复杂解与简约解）', body, srcLine(s4.source));
}

/* ---------- S5 否集分析 ---------- */
function negativeHtml() {
  const s5 = O.s5_negative;
  const blocks = Object.keys(s5.outcomes).map(oc => {
    const o = s5.outcomes[oc];
    const nec = o.necessity.length
      ? `<div class="qca-table-scroll"><table class="qca-table">
          <tr><th>必要性结论</th><th>一致性</th><th>覆盖度</th><th>RoN</th><th>判定</th></tr>
          ${o.necessity.map(n => `<tr><td>${esc(n.text)}</td><td class="qca-good">${esc(n.consistency)}</td><td>${esc(n.coverage)}</td><td>${esc(n.ron || '—')}</td><td>${esc(n.verdict)}</td></tr>`).join('')}
        </table></div>`
      : `<p class="qca-hint">${esc(o.necessityNote || '无必要条件')}</p>`;
    const sol = (slot, label) => `
      <h4>${esc(label)}</h4>
      <div class="qca-table-scroll"><table class="qca-table">
        <tr><th>组态</th><th>一致性</th><th>覆盖度</th><th>唯一覆盖</th></tr>
        ${slot.paths.map(p => `<tr><td class="qca-term">${esc(p.expr)}</td><td>${esc(p.consistency)}</td><td>${esc(p.coverage)}</td><td>${esc(p.uniqCov)}</td></tr>`).join('')}
      </table></div>
      <p class="qca-sol-meta">${esc(slot.solutionText)}</p>`;
    return `<div class="qca-solution"><h4>${esc(oc)}（${esc(OUTCOME_NAMES[oc.slice(1)] || '')}不出现）</h4>
      ${nec}${sol(o.complex, '复杂解')}${sol(o.parsimonious, '简约解')}
    </div>`;
  }).join('');
  const body = `<p class="qca-hint">对 ~AGR、~CON、~ECO、~SPE 分别建模，识别结果缺席时的条件组合。结果缺席不等同于项目失败。</p>${blocks}`;
  return sectionShell('s5', '结果缺席分析（实质锚点校准）', body, srcLine(s5.source));
}

/* ---------- S6 稳健性（48 行压缩视图，按校准方式分三组） ---------- */
function robustnessHtml() {
  const s6 = O.s6_robustness;
  const groups = ['实质锚点', '分位锚点', '原始合成'];
  const driftBadge = d => d === 'none'
    ? '<span class="qca-badge qca-good">零漂移</span>'
    : d === 'minor'
      ? '<span class="qca-badge">微漂移</span>'
      : '<span class="qca-badge qca-warn">漂移明显</span>';
  const tables = groups.map(g => {
    const rows = s6.rows.filter(r => r.calib === g).map(r => `
      <tr>
        <td>${esc(r.outcome)}</td><td>${esc(String(r.freq))}</td><td>${esc(r.consCut)}</td>
        <td>${esc(String(r.configs))}</td><td>${esc(String(r.remainders))}</td>
        <td>${esc(String(r.complexPaths))}</td><td>${esc(String(r.parsimPaths))}</td>
        <td>${esc(r.solConsistency)}</td><td>${esc(r.solCoverage)}</td>
        <td>${driftBadge(r.drift)}</td>
      </tr>`).join('');
    return `<h4>${esc(g)}</h4>
      <div class="qca-table-scroll"><table class="qca-table qca-rob-table">
        <tr><th>结果</th><th>频数阈值</th><th>一致性阈值</th><th>发生配置数</th><th>逻辑余项数</th><th>复杂解路径数</th><th>简约解路径数</th><th>解一致性</th><th>解覆盖度</th><th>漂移</th></tr>
        ${rows}
      </table></div>`;
  }).join('');
  const body = `
    <p class="qca-hint">三校准 × 频数 {1,2} × 一致性 {0.80,0.75} 共 48 行全量可查。</p>
    ${tables}
    <div class="qca-warn-bar"><strong>稳健性结论：</strong>实质锚点下结果波动较小；分位锚点下漂移明显，AGR 解一致性最低为 0.6986，说明结论对校准方式敏感。</div>`;
  return sectionShell('s6', '稳健性检验（三种校准 × 四组阈值）', body, srcLine(s6.source));
}

/* ---------- 整页 ---------- */
export function officialHtml() {
  const s1 = O.s1_overview;
  const hero = `
    <div class="qca-official-hero qca-block">
      <p class="fsqca-eyebrow">fsQCA · 47 个典型案例的比较结果</p>
      <h2>本版本分析</h2>
      <p class="qca-hero-sub">基于 6 个条件变量和 4 类结果，分析整治成效与资源编排的条件组合。主校准口径：${esc(O.meta.calibration)}。</p>
      <p class="qca-hero-meta">判定口径——必要性：${esc(O.meta.thresholds.necessity)}；充分性：${esc(O.meta.thresholds.sufficiency)}。</p>
      <p class="qca-warn-bar qca-hero-note"><strong>参数说明：</strong>本页充分性分析采用 PRI ≥0.5；组态分析默认采用 PRI ≥0.75。比较结果前需统一参数。本页数值以收录的分析结果表为准。</p>
    </div>`;
  const s1Limits = PUBLIC_LIMITS.map(t => `<li>${esc(t)}</li>`).join('');
  const s1Body = `${overviewCards()}
    <div class="qca-warn-bar"><strong>样本与解释边界：</strong><ul>${s1Limits}</ul></div>
    <p class="qca-note">${esc(s1.negation)}</p>`;
  const s1sec = sectionShell('s1', '分析对象与口径', s1Body, srcLine(s1.source));
  const s9sec = sectionShell('s9', '编码数据概况', overviewCardsS9(), '<p class="qca-src">来源：47 个案例编码表 · 条件侧明细、结果侧明细</p>');
  return `<div class="qca-shell qca-official">${hero}${s1sec}${s9sec}${necessityHtml()}${truthTableHtml()}${sufficiencyHtml()}${negativeHtml()}${robustnessHtml()}</div>`;
}
function overviewCardsS9() {
  const rules = FSQCA_SCORES.cases.flatMap(c => c.rules);
  const count = (status, side) => rules.filter(r => r.status === status && (!side || r.side === side)).length;
  return `<div class="qca-ov-grid">
    <div class="qca-ov-card"><b>${rules.length}</b><span>编码总格数</span><small>条件 ${rules.filter(r=>r.side==='cond').length} ＋ 结果 ${rules.filter(r=>r.side==='result').length}（47 案 × 35 细则）</small></div>
    <div class="qca-ov-card"><b>${count('有效')}</b><span>有效评分格</span><small>条件 ${count('有效','cond')}／结果 ${count('有效','result')}</small></div>
    <div class="qca-ov-card"><b>${count('情境')}</b><span>情境变量格</span><small>RES-3 单独记录，不计入变量合成值</small></div>
    <div class="qca-ov-card"><b>${count('缺失')}</b><span>缺失格</span><small>不计入变量合成值</small></div>
    <div class="qca-ov-card"><b>${count('不适用')}</b><span>不适用格</span><small>不计入变量合成值</small></div>
  </div>`;
}

/* ---------- 复制本节为 Markdown（R10）：从节内 DOM 结构还原标题/表格/来源 ---------- */
export function sectionMarkdown(sec) {
  const lines = [];
  const plain = value => value.trim().replace(/\s+/g, ' ').replace(/\|/g, '\\|');
  function walk(node) {
    if (node.nodeType !== 1 || node.matches('button,svg,[hidden]')) return;
    const tag = node.tagName;
    if (/^H[1-6]$/.test(tag)) { lines.push('#'.repeat(Number(tag[1])) + ' ' + plain(node.textContent), ''); return; }
    if (tag === 'TABLE') {
      const rows = [...node.rows].map(tr => [...tr.cells].map(cell => plain(cell.textContent)));
      if (!rows.length) return;
      lines.push('| ' + rows[0].join(' | ') + ' |', '|' + rows[0].map(()=>'---').join('|') + '|');
      for(const row of rows.slice(1)) lines.push('| ' + row.join(' | ') + ' |');
      lines.push(''); return;
    }
    if (tag === 'P' || tag === 'SUMMARY') { lines.push(plain(node.textContent),''); return; }
    if (tag === 'UL' || tag === 'OL') { for(const li of node.children) lines.push('- ' + plain(li.textContent)); lines.push(''); return; }
    if (node.classList.contains('qca-ov-card')) { lines.push(plain([...node.children].map(c=>c.textContent).join(' · ')), ''); return; }
    if (!node.children.length && node.textContent.trim()) { lines.push(plain(node.textContent), ''); return; }
    for (const child of node.childNodes) {
      if (child.nodeType === 3 && child.textContent.trim()) lines.push(plain(child.textContent),'');
      else walk(child);
    }
  }
  walk(sec);
  return lines.join('\n');
}

export function bindOfficial(page) {
  delegate(page, '[data-copy-sec]', 'click', (_e, btn) => {
    const secId = btn.dataset.copySec;
    const host = secId === 's7'
      ? page.querySelector('#qcaSec-s7')
      : page.querySelector(`#qcaSec-${CSS.escape(secId)}`);
    if (!host) return;
    const md = sectionMarkdown(host);
    const done = () => notify(`已复制本节内容`, 'info');
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(md).then(done, () => notify('复制失败：剪贴板不可用', 'warn'));
    } else {
      notify('复制失败：剪贴板不可用', 'warn');
    }
  });
}
