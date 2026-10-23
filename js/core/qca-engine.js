/*
 * QCA 组态分析引擎（纯函数，无 DOM 依赖）
 * ------------------------------------------------------------------
 * 算法架构对齐 fsQCA 4.1 官方软件（从官方 fsqca.exe 提取的原始实现）：
 *
 *   数据 → 校准 → 真值表算法 → Quine-McCluskey 最小化 → 解与参数
 *
 * 官方软件内嵌的核心公式（原样移植，见 calibrate / fuzzyand / fuzzyor / fuzzynot）：
 *   calibrate(qlo, lm, cutoff, lnm)  —— 三锚点 logit 校准
 *   fuzzyand = min，fuzzyor = max，fuzzynot(x) = 1 - x
 * 真值表行指标：number（>0.5 隶属案例数）、raw consist.、PRI consist.、SYM consist.
 * 最小化：Positive(1) / Negative(0) / Don't Care(-) / Remainders
 *   → COMPLEX（不用余数）/ PARSIMONIOUS（全部余数作 DC）/ INTERMEDIATE（选定余数作假设）
 * 输出参数：raw/unique coverage、consistency、solution coverage、solution consistency
 * 必要条件：Consistency = Σmin(X,Y)/ΣY；Coverage = Σmin(X,Y)/ΣX
 *
 * 本文件只负责「怎么算」，数据从哪来、界面怎么画都不在这里。
 * 所有函数纯函数化，方便单元测试与未来替换。
 */

/* ============================================================
 * ① 官方模糊算子与校准公式（原样移植自 fsQCA 4.1）
 * ============================================================ */

/* fuzzyand(x1, x2, ...) = min */
export function fuzzyand(...args) {
  let min = 1.0;
  for (const v of args) if (v < min) min = v;
  return min;
}

/* fuzzyor(x1, x2, ...) = max */
export function fuzzyor(...args) {
  let max = 0.0;
  for (const v of args) if (v > max) max = v;
  return max;
}

/* fuzzynot(x) = 1 - x */
export function fuzzynot(x) { return 1.0 - x; }

/*
 * 官方三锚点 logit 校准（fsQCA 4.1 内嵌 JS 原样移植）：
 *   calibrate(x, fullIn, crossover, fullOut)
 *   fullIn   —— 完全隶属阈值（lm，隶属度趋近 1 的锚点）
 *   crossover—— 交叉点（cutoff，隶属度 = 0.5）
 *   fullOut  —— 完全不隶属阈值（lnm，隶属度趋近 0 的锚点）
 * 返回值四舍五入到两位小数（官方行为）。
 * 注意：恰为 0.5 的案例在官方软件中需要手动微调（如 +0.001），
 * 这里提供 nudge 选项统一处理。
 */
export function calibrate(qlo, lm, cutoff, lnm) {
  let v = qlo;
  if (lm > lnm) {
    if (v >= cutoff) v = 3.0 / (lm - cutoff) * (v - cutoff);
    else v = 3.0 / (cutoff - lnm) * (v - cutoff);
  } else {
    if (v >= cutoff) v = 3.0 / (cutoff - lnm) * (v - cutoff);
    else v = 3.0 / (lm - cutoff) * (v - cutoff);
  }
  return Math.round(Math.exp(v) / (1.0 + Math.exp(v)) * 100.0) / 100.0;
}

/* 校准后处理：把恰好 0.5 的值微调开（避免组态隶属度恰在交叉点上） */
export function nudgeCrossover(value, epsilon = 0.001) {
  return value === 0.5 ? value + epsilon : value;
}

/* ============================================================
 * ② 数据集：案例 × 条件/结果的隶属度矩阵
 * ============================================================ */
/*
 * dataset 形状：
 * {
 *   cases: [{ id, name }],
 *   conditions: ['RES','SPA',...],   // 条件变量编码（k 个）
 *   outcome: 'AGR',                  // 结果变量编码
 *   rows: [{ caseId, x: {RES:0.87,...}, y: 0.75 }]  // 隶属度 ∈ [0,1]
 * }
 * 隶属度为 null（缺失）的行在真值表/必要条件计算中被跳过。
 */

/* 案例在某组态下的隶属度：条件出现取 x，缺席取 1-x，合取取 min（fuzzyand） */
export function configMembership(x, conditions, bits) {
  let m = 1.0;
  for (let i = 0; i < conditions.length; i++) {
    const v = x[conditions[i]];
    if (typeof v !== 'number') return null; // 有缺失则不参与
    const lit = bits[i] ? v : 1.0 - v;
    if (lit < m) m = lit;
  }
  return m;
}

/* 组态索引 ↔ 位向量（高位在前，与官方真值表习惯一致：第一个条件变化最慢） */
export function bitsOf(index, k) {
  const bits = [];
  for (let i = k - 1; i >= 0; i--) bits.push((index >> i) & 1);
  return bits;
}

/* 组态的可读标签：条件出现=编码，缺席=~编码，如 "RES*spa*TEC"（官方写法：大写出现小写缺席） */
export function configLabel(bits, conditions) {
  return conditions.map((c, i) => (bits[i] ? c : c.toLowerCase())).join('*');
}

/* 解项（质蕴涵项）标签：'-' 表示该条件被消去 */
export function termLabel(term, conditions) {
  const parts = [];
  conditions.forEach((c, i) => {
    if (term[i] === 1) parts.push(c);
    else if (term[i] === 0) parts.push(c.toLowerCase());
  });
  return parts.length ? parts.join('*') : '(常数 1)';
}

/* ============================================================
 * ③ 真值表算法（Analyze → Truth Table Algorithm）
 * ============================================================ */
/*
 * 对 2^k 个组态逐行计算：
 *   number      —— 该组态隶属度 > 0.5 的案例数
 *   raw consist —— Σmin(config, Y) / Σconfig
 *   PRI consist —— (Σmin(config,Y) − Σmin(config,1−Y)) / (Σconfig − Σmin(config,1−Y))
 *   SYM consist —— (Σmin(config,Y) − Σmin(min(config,Y), min(~config,Y))) / Σconfig
 *                  （对称一致性：扣除与反组态同时构成子集的部分）
 *   outcome     —— '1'（raw consist ≥ 截断且 PRI ≥ priCutoff）/ '0' / '-'（number 不足 → 余数 remainder）
 * priCutoff：PRI 一致性闸（官方建议 0.7；0 = 不启用，保持旧行为兼容）
 */
export function buildTruthTable(dataset, { freqCutoff = 1, consistCutoff = 0.8, membershipThreshold = 0.5, priCutoff = 0 } = {}) {
  const k = dataset.conditions.length;
  const nConfigs = 1 << k;
  const rows = [];
  for (let idx = 0; idx < nConfigs; idx++) {
    const bits = bitsOf(idx, k);
    let sumConfig = 0, sumMinY = 0, sumMinNotY = 0, sumSymOverlap = 0;
    let number = 0;
    const memberCases = [];
    for (const row of dataset.rows) {
      const m = configMembership(row.x, dataset.conditions, bits);
      if (m === null) continue;
      sumConfig += m;
      const minY = Math.min(m, row.y);
      sumMinY += minY;
      sumMinNotY += Math.min(m, 1 - row.y);
      sumSymOverlap += Math.min(minY, Math.min(1 - m, row.y));
      if (m > membershipThreshold) {
        number++;
        memberCases.push({ caseId: row.caseId, membership: Math.round(m * 1000) / 1000 });
      }
    }
    const raw = sumConfig > 0 ? sumMinY / sumConfig : null;
    const pri = (sumConfig - sumMinNotY) > 0 ? (sumMinY - sumMinNotY) / (sumConfig - sumMinNotY) : null;
    const sym = sumConfig > 0 ? (sumMinY - sumSymOverlap) / sumConfig : null;
    let outcome;
    if (number < freqCutoff) outcome = '-';               // 余数（remainder）
    else if (raw !== null && raw >= consistCutoff && (pri === null || pri >= priCutoff)) outcome = '1';
    else outcome = '0';
    rows.push({
      index: idx, bits, label: configLabel(bits, dataset.conditions),
      number, memberCases,
      rawConsist: raw, priConsist: pri, symConsist: sym,
      outcome,
    });
  }
  return {
    conditions: dataset.conditions, outcome: dataset.outcome,
    freqCutoff, consistCutoff, priCutoff, rows,
    summary: {
      total: rows.length,
      positive: rows.filter(r => r.outcome === '1').length,
      negative: rows.filter(r => r.outcome === '0').length,
      remainders: rows.filter(r => r.outcome === '-').length,
    },
  };
}

/* ============================================================
 * ④ Quine-McCluskey 最小化
 * ============================================================ */
/*
 * term 表示：数组，长度 k，元素 ∈ {0, 1, '-'}（'-' = 该位已消去）。
 * 输入：组态 index 列表（正面 1）+ DC 列表（余数/假设）。
 */

function termFromIndex(index, k) { return bitsOf(index, k); }

/* 两个 term 是否只差一位且可合并；返回合并后的 term 或 null */
function combineTerms(a, b) {
  let diff = -1;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue;
    if (a[i] === '-' || b[i] === '-') return null;
    if (diff !== -1) return null;
    diff = i;
  }
  if (diff === -1) return null;
  const merged = [...a];
  merged[diff] = '-';
  return merged;
}

function termKey(term) { return term.map(t => (t === '-' ? 2 : t)).join(''); }

/* term 是否覆盖组态 index */
export function termCovers(term, index, k) {
  const bits = bitsOf(index, k);
  for (let i = 0; i < k; i++) {
    if (term[i] === '-') continue;
    if (term[i] !== bits[i]) return false;
  }
  return true;
}

/* QMC 求全部质蕴涵项：onSet = 正面组态 index，dcSet = 无关项 index */
export function quineMcCluskey(onSet, dcSet, k) {
  if (!onSet.length) return { primeImplicants: [], error: 'The 1 Matrix is Empty.' };
  if (onSet.length + dcSet.length >= (1 << k)) return { primeImplicants: [], error: 'The 1 Matrix Contains All Configurations.' };
  let terms = [...onSet, ...dcSet].map(i => termFromIndex(i, k));
  let prime = new Map();
  while (terms.length) {
    const used = new Set();
    const nextMap = new Map();
    for (let i = 0; i < terms.length; i++) {
      for (let j = i + 1; j < terms.length; j++) {
        const merged = combineTerms(terms[i], terms[j]);
        if (merged) {
          used.add(i); used.add(j);
          nextMap.set(termKey(merged), merged);
        }
      }
    }
    terms.forEach((t, i) => { if (!used.has(i)) prime.set(termKey(t), t); });
    terms = [...nextMap.values()];
  }
  return { primeImplicants: [...prime.values()] };
}

/*
 * 质蕴涵项图表（Prime Implicant Chart）→ 最小覆盖。
 * 先用必要质蕴涵项（essential），剩余用 Petrick 穷举（规模小）求全部最小解；
 * 若组合爆炸则退化为贪心。返回数组的数组（多个并列最小解，官方弹出选择框的那些）。
 */
export function minimalCovers(primeImplicants, onSet, k, { maxSolutions = 8 } = {}) {
  if (!onSet.length) return [[]];
  const coversOf = new Map(); // configIndex -> [piIndex]
  onSet.forEach(cfg => {
    const list = [];
    primeImplicants.forEach((pi, i) => { if (termCovers(pi, cfg, k)) list.push(i); });
    coversOf.set(cfg, list);
  });
  /* 必要质蕴涵项 */
  const essential = new Set();
  const uncovered = new Set(onSet);
  for (const [cfg, list] of coversOf) {
    if (list.length === 0) return [[]]; // 不该发生（onSet ⊆ 输入）
    if (list.length === 1) essential.add(list[0]);
  }
  essential.forEach(pi => {
    for (const cfg of [...uncovered]) if (termCovers(primeImplicants[pi], cfg, k)) uncovered.delete(cfg);
  });
  if (!uncovered.size) return [[...essential]];
  /* Petrick：对未覆盖组态做析取项的穷举（限制规模） */
  const remaining = [...new Set([...uncovered].flatMap(cfg => coversOf.get(cfg)))].filter(i => !essential.has(i));
  const combos = [];
  const limit = 1 << Math.min(remaining.length, 16); // 防爆
  const target = [...uncovered];
  const search = (start, picked) => {
    if (combos.length >= 512) return;
    const coveredNow = new Set();
    for (const pi of picked) for (const cfg of target) if (termCovers(primeImplicants[pi], cfg, k)) coveredNow.add(cfg);
    if (coveredNow.size === target.length) { combos.push([...picked]); return; }
    for (let i = start; i < remaining.length && combos.length < 512; i++) {
      if (picked.length * limit > 1e6) break;
      search(i + 1, [...picked, remaining[i]]);
    }
  };
  search(0, []);
  if (!combos.length) {
    /* 贪心兜底 */
    const picked = [];
    const left = new Set(target);
    while (left.size) {
      let best = null, bestGain = -1;
      for (const pi of remaining) {
        if (picked.includes(pi)) continue;
        let gain = 0;
        for (const cfg of left) if (termCovers(primeImplicants[pi], cfg, k)) gain++;
        if (gain > bestGain) { bestGain = gain; best = pi; }
      }
      if (best === null) break;
      picked.push(best);
      for (const cfg of [...left]) if (termCovers(primeImplicants[best], cfg, k)) left.delete(cfg);
    }
    return [[...essential, ...picked]];
  }
  const minLen = Math.min(...combos.map(c => c.length));
  const minimal = combos.filter(c => c.length === minLen).slice(0, maxSolutions);
  return minimal.map(c => [...essential, ...c]);
}

/* ============================================================
 * ⑤ 解的参数（coverage / consistency）
 * ============================================================ */

/* 解项隶属度：term 中 1 取 x、0 取 1-x、'-' 跳过，合取取 min */
export function termMembership(x, conditions, term) {
  let m = 1.0;
  for (let i = 0; i < conditions.length; i++) {
    if (term[i] === '-') continue;
    const v = x[conditions[i]];
    if (typeof v !== 'number') return null;
    const lit = term[i] === 1 ? v : 1.0 - v;
    if (lit < m) m = lit;
  }
  return m;
}

/*
 * 解（一组质蕴涵项）→ 输出参数：
 * 每项：raw coverage = Σmin(term,Y)/ΣY；unique coverage = 解覆盖 − 去掉该项后的覆盖；
 *       consistency = Σmin(term,Y)/Σterm；>0.5 隶属案例名单
 * 整体：solution coverage = Σmin(sol,Y)/ΣY（sol = max 各项，fuzzyor）
 *       solution consistency = Σmin(sol,Y)/Σsol
 */
export function solutionMetrics(dataset, solutionTerms) {
  const k = dataset.conditions.length;
  let sumY = 0;
  const termStats = solutionTerms.map(() => ({ sumTerm: 0, sumMinY: 0, cases: [] }));
  const perCase = []; // { caseId, sol, minSolY }
  for (const row of dataset.rows) {
    sumY += row.y;
    let sol = 0;
    const termMembs = solutionTerms.map(term => termMembership(row.x, dataset.conditions, term));
    termMembs.forEach((m, ti) => {
      if (m === null) return;
      termStats[ti].sumTerm += m;
      termStats[ti].sumMinY += Math.min(m, row.y);
      if (m > 0.5) termStats[ti].cases.push({ caseId: row.caseId, membership: Math.round(m * 1000) / 1000 });
      if (m > sol) sol = m;
    });
    perCase.push({ caseId: row.caseId, sol, minSolY: Math.min(sol, row.y) });
  }
  const sumSol = perCase.reduce((a, c) => a + c.sol, 0);
  const sumMinSolY = perCase.reduce((a, c) => a + c.minSolY, 0);
  const solCoverage = sumY > 0 ? sumMinSolY / sumY : null;
  const solConsistency = sumSol > 0 ? sumMinSolY / sumSol : null;

  const terms = solutionTerms.map((term, ti) => {
    const st = termStats[ti];
    const rawCoverage = sumY > 0 ? st.sumMinY / sumY : null;
    /* unique coverage：解覆盖 − 去掉该项后的覆盖 */
    let unique = null;
    if (solutionTerms.length > 1) {
      let sumMinWithout = 0;
      for (const row of dataset.rows) {
        let best = 0;
        solutionTerms.forEach((t2, tj) => {
          if (tj === ti) return;
          const m = termMembership(row.x, dataset.conditions, t2);
          if (m !== null && m > best) best = m;
        });
        sumMinWithout += Math.min(best, row.y);
      }
      unique = sumY > 0 ? (sumMinSolY - sumMinWithout) / sumY : null;
    }
    return {
      term, label: termLabel(term, dataset.conditions),
      rawCoverage: rawCoverage, uniqueCoverage: unique,
      consistency: st.sumTerm > 0 ? st.sumMinY / st.sumTerm : null,
      cases: st.cases,
    };
  });
  void k;
  return { terms, solutionCoverage: solCoverage, solutionConsistency: solConsistency };
}

/* ============================================================
 * ⑥ 三种解的完整流程
 * ============================================================ */
/*
 * minimize(truthTable, dataset, kind)
 *   kind: 'complex'       —— 不用余数
 *         'parsimonious'  —— 全部余数作 Don't Care
 *         'intermediate'  —— assumptions 指定的余数作 DC（其余视为 0）
 * assumptions: 余数组态 index 数组（仅 intermediate 用）
 */
export function minimize(truthTable, dataset, kind = 'complex', { assumptions = [] } = {}) {
  const k = truthTable.conditions.length;
  const onSet = truthTable.rows.filter(r => r.outcome === '1').map(r => r.index);
  let dcSet = [];
  if (kind === 'parsimonious') dcSet = truthTable.rows.filter(r => r.outcome === '-').map(r => r.index);
  else if (kind === 'intermediate') dcSet = assumptions.filter(i => truthTable.rows[i]?.outcome === '-');
  const { primeImplicants, error } = quineMcCluskey(onSet, dcSet, k);
  if (error) return { kind, error };
  const covers = minimalCovers(primeImplicants, onSet, k);
  const solutions = covers.map(pick => {
    const terms = pick.map(i => primeImplicants[i]);
    return { terms, metrics: solutionMetrics(dataset, terms) };
  });
  return { kind, primeImplicants, solutions };
}

/* ============================================================
 * ⑦ 必要条件分析（Analysis of Necessary Conditions）
 * ============================================================ */
/* 每个条件（含其否定）：
 *   Consistency = Σmin(X,Y)/ΣY（结果集合是否包含于条件集合）
 *   Coverage    = Σmin(X,Y)/ΣX
 *   RoN         = Σ(1-X)/Σ(1-min(X,Y))
 *   Source: https://bookdown.org/dusadrian/QCAbook/analysisofnecessity.html
 */
export function necessaryConditions(dataset, { consistencyBenchmark = 0.9 } = {}) {
  const out = [];
  let sumY = 0;
  for (const row of dataset.rows) sumY += row.y;
  for (const cond of dataset.conditions) {
    for (const negated of [false, true]) {
      let sumX = 0, sumMin = 0, valid = true;
      for (const row of dataset.rows) {
        const v = row.x[cond];
        if (!Number.isFinite(v) || v < 0 || v > 1 || !Number.isFinite(row.y) || row.y < 0 || row.y > 1) { valid = false; break; }
        const x = negated ? 1 - v : v;
        sumX += x;
        sumMin += Math.min(x, row.y);
      }
      out.push({
        condition: negated ? `~${cond}` : cond,
        consistency: valid && sumY > 0 ? sumMin / sumY : null,
        coverage: valid && sumX > 0 ? sumMin / sumX : null,
        ron: valid && dataset.rows.length - sumMin > 1e-12 ? (dataset.rows.length - sumX) / (dataset.rows.length - sumMin) : null,
        necessary: valid && sumY > 0 && sumMin / sumY >= consistencyBenchmark,
        partial: !valid, // 任一隶属度缺失或无效时，整个关系不输出指标。
      });
    }
  }
  return { rows: out, benchmark: consistencyBenchmark };
}

/* ============================================================
 * ⑧ 一键分析（供界面调用）
 * ============================================================ */
export function runAnalysis(dataset, {
  freqCutoff = 1, consistCutoff = 0.8, priCutoff = 0,
  intermediateAssumptions = [],
  necessityBenchmark = 0.9,
} = {}) {
  const truthTable = buildTruthTable(dataset, { freqCutoff, consistCutoff, priCutoff });
  const necessity = necessaryConditions(dataset, { consistencyBenchmark: necessityBenchmark });
  const complex = minimize(truthTable, dataset, 'complex');
  const parsimonious = minimize(truthTable, dataset, 'parsimonious');
  const intermediate = intermediateAssumptions.length
    ? minimize(truthTable, dataset, 'intermediate', { assumptions: intermediateAssumptions })
    : null;
  return { truthTable, necessity, complex, parsimonious, intermediate };
}
