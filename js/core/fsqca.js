/*
 * fsQCA 评分模块 · 核心逻辑（纯函数，无 DOM 依赖）
 * ------------------------------------------------------------------
 * 数据来源：src/renderer/data/fsqca-scores.js（由编码表原样抽取）。
 * 本文件负责「评分方法」——所有关于「怎么算分」的地方都集中在这里，
 * 以后要改评分方法（五档标尺、校准算法、合成规则、状态判定）只需改本文件，
 * 不需要动抽取脚本，也不需要动界面。
 */

import { FSQCA_SCORES } from '../../data/fsqca-scores.js';

/* ============================================================
 * ① 评分配置（★ 可改点：五档标尺 / 状态语义）
 * ============================================================ */
export const SCALE = {
  /* 五档标尺：值 + 展示标签 + 色阶（供热力矩阵/徽标着色） */
  levels: [
    { value: 1, label: '1.0', color: '#1a7f4b' },
    { value: 0.75, label: '0.75', color: '#3aa76d' },
    { value: 0.5, label: '0.5', color: '#d9a441' },
    { value: 0.25, label: '0.25', color: '#c06a3a' },
    { value: 0, label: '0', color: '#8a4b4b' },
  ],
  /* 哨兵值 / 特殊值：不进入均值 */
  missing: '9',      // 缺失（查不到）
  notApplicable: 'N/A', // 不适用（类型上不存在）
  /* 状态语义（来自编码表『状态』列） */
  status: {
    '有效': { label: '有效', color: '#3aa76d', counts: true },   // 计入均值
    '缺失': { label: '缺失', color: '#8a8f98', counts: false },  // 哨兵，不计入
    '不适用': { label: '不适用', color: '#8a8f98', counts: false }, // N/A，不计入
    '情境': { label: '情境', color: '#5b8def', counts: false },   // 仅 RES-3，不计入主集
  },
};

/* ============================================================
 * ② 变量结构配置（★ 可改点：理论框架分组 / 大点归属）
 * ============================================================ */
/* 条件侧 6 变量的理论归属：资源编排三阶段（结构化→能力化→杠杆化） */
export const THEORY_GROUPS = [
  { key: 'structuring', label: '结构化', codes: ['RES', 'SPA'] },
  { key: 'capability', label: '能力化', codes: ['TEC', 'ACT'] },
  { key: 'leverage', label: '杠杆化', codes: ['CAP', 'IND'] },
];

/* 结果侧 4 大点（《全域土地综合整治实施指南（试行）》四分类） */
export const RESULT_FAMILIES = [
  { code: 'AGR', label: '农用地整治' },
  { code: 'CON', label: '建设用地整治' },
  { code: 'ECO', label: '生态保护修复' },
  { code: 'SPE', label: '特色整治' },
];

/* 细则固定顺序（供热力矩阵列排序；来自抽取脚本 ruleOrder） */
export const RULE_ORDER = FSQCA_SCORES.ruleOrder;

/* ============================================================
 * ③ 数据索引
 * ============================================================ */
let index = null;

function buildIndex() {
  if (index) return index;
  const cases = FSQCA_SCORES.cases;
  const caseById = new Map(cases.map(c => [c.id, c]));
  /* 倒排：rule → [{ caseId, rule }] */
  const byRule = new Map();
  for (const c of cases) {
    for (const r of c.rules) {
      if (!byRule.has(r.code)) byRule.set(r.code, []);
      byRule.get(r.code).push({ caseId: c.id, rule: r });
    }
  }
  index = { cases, caseById, byRule };
  return index;
}

export function getCases() { return buildIndex().cases; }
export function getCase(caseId) { return buildIndex().caseById.get(String(caseId).padStart(2, '0')) || null; }
export function getRuleHits(ruleCode) { return buildIndex().byRule.get(ruleCode) || []; }

/* 某案某细则的证据材料（E/P 码 → 证据索引条目） */
export function getEvidence(caseId, ruleCode) {
  const c = getCase(caseId);
  if (!c) return [];
  const rule = c.rules.find(r => r.code === ruleCode);
  if (!rule) return [];
  const indexMap = new Map(c.evidenceIndex.map(e => [e.code, e]));
  return rule.evidence.map(code => indexMap.get(code)).filter(Boolean);
}

/* ============================================================
 * ④ 修订叠层（override）★ 可改点：修订与权威编码的合并策略
 * ============================================================ */
/*
 * overrides 形状：{ caseId: { ruleCode: { score, status, reason } } }
 * 默认空；未来从 fsqca-overrides.json 加载。合并策略：override 优先于编码表。
 */
let overrides = {};

export function setOverrides(next) { overrides = next || {}; }
export function getOverrides() { return overrides; }

/* 取某案某细则的「合并后」得分/状态（override 优先） */
export function effectiveRule(caseId, ruleCode) {
  const c = getCase(caseId);
  if (!c) return null;
  const base = c.rules.find(r => r.code === ruleCode);
  if (!base) return null;
  const ov = overrides[caseId]?.[ruleCode];
  if (!ov) return { ...base, overridden: false };
  return { ...base, score: ov.score ?? base.score, status: ov.status ?? base.status, reason: ov.reason, overridden: true };
}

/* ============================================================
 * ⑤ 得分解析（★ 可改点：把编码表的字符串得分规范为数值/特殊值）
 * ============================================================ */
/* 返回 { kind: 'score'|'missing'|'na'|'unknown', value } */
export function parseScore(raw) {
  const s = String(raw ?? '').trim();
  if (!s) return { kind: 'unknown', value: null };
  if (s === SCALE.notApplicable || /^N\/?A$/i.test(s)) return { kind: 'na', value: null };
  if (s === SCALE.missing || /^缺失$/.test(s)) return { kind: 'missing', value: null };
  const n = Number(s);
  if (Number.isFinite(n)) return { kind: 'score', value: n };
  return { kind: 'unknown', value: null };
}

/* ============================================================
 * ⑥ 校准计算（★ 关键可改点：细类得分 → 变量校准值）
 * ============================================================ */
/*
 * 当前实现：变量校准值 = 该变量下「有效细类」的等权平均（缺失/不适用/情境不计入）。
 * 这对应编码表 sheet1 的「校准值」列（如 RES 0.875 = mean(1,0.75)，RES-3 情境不计）。
 * 未来若要换成 fsQCA 的模糊集校准（直接/间接校准锚点），只改这个函数即可。
 */
export function calibrateVariable(caseId, variableCode) {
  const c = getCase(caseId);
  if (!c) return null;
  const family = variableCode; // 变量编码即细类前缀（AGR/CON/.../RES/SPA/...）
  const rules = c.rules.filter(r => r.family === family && r.side !== 'context');
  const effective = rules.map(r => effectiveRule(caseId, r.code));
  const counted = effective.filter(r => {
    const s = r.status ?? '';
    return s === '有效' || (r.status === undefined && parseScore(r.score).kind === 'score');
  });
  const values = counted.map(r => parseScore(r.score).value).filter(v => typeof v === 'number');
  if (!values.length) return { value: null, counted: 0, total: effective.length };
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  return { value: Math.round(mean * 1000) / 1000, counted: values.length, total: effective.length };
}

/* 变量建议档位：把校准值映射回五档（就近取档）——★ 可改点 */
export function suggestedLevel(calibratedValue) {
  if (calibratedValue === null || calibratedValue === undefined) return null;
  const levels = SCALE.levels.map(l => l.value).sort((a, b) => b - a);
  let best = levels[0], bestDist = Infinity;
  for (const lv of levels) { const d = Math.abs(calibratedValue - lv); if (d < bestDist) { bestDist = d; best = lv; } }
  return best;
}

/* ============================================================
 * ⑦ 覆盖率 / 一致性（★ 可改点：供 fsQCA 必要性/充分性自查）
 * ============================================================ */
/* 覆盖率：某细则「有效」案例占全部案例的比例（缺失/不适用不算有效） */
export function coverage(ruleCode) {
  const hits = getRuleHits(ruleCode);
  if (!hits.length) return { effective: 0, missing: 0, na: 0, total: 0, rate: 0 };
  let eff = 0, mis = 0, na = 0;
  for (const { caseId } of hits) {
    const r = effectiveRule(caseId, ruleCode);
    const s = r?.status ?? '';
    if (s === '有效') eff++;
    else if (s === '缺失') mis++;
    else if (s === '不适用' || s === '情境') na++;
  }
  return { effective: eff, missing: mis, na, total: hits.length, rate: hits.length ? eff / hits.length : 0 };
}

/* ============================================================
 * ⑧ 热力矩阵（47 案 × 35 细则）
 * ============================================================ */
export function heatMatrix() {
  const { cases } = buildIndex();
  const order = [...RULE_ORDER.result, ...RULE_ORDER.cond];
  return {
    cases: cases.map(c => ({ id: c.id, name: c.name, province: c.province })),
    rules: order,
    cells: cases.map(c => {
      return order.map(code => {
        /* 走 effectiveRule：修订叠层（override）优先于编码表原值 */
        const r = effectiveRule(c.id, code);
        if (!r) return null;
        const p = parseScore(r.score);
        const s = r.status ?? '';
        return {
          code, score: r.score, status: s, overridden: Boolean(r.overridden),
          kind: s === '缺失' ? 'missing' : s === '不适用' || s === '情境' ? 'na' : p.kind === 'score' ? 'score' : 'unknown',
          value: p.kind === 'score' ? p.value : null,
        };
      });
    }),
  };
}

/* 全部变量列表（结果侧 4 + 条件侧 6 + 情境），供变量面板 */
export function allVariables() {
  const { cases } = buildIndex();
  const seen = new Map();
  for (const c of cases) for (const v of c.variables) if (!seen.has(v.code)) seen.set(v.code, v);
  return [...seen.values()];
}

/* 变量所属理论阶段（条件侧） */
export function theoryGroupOf(variableCode) {
  for (const g of THEORY_GROUPS) if (g.codes.includes(variableCode)) return g.key;
  return null;
}
