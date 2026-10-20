/* ================================================================
 * 领域工具：标签统计、省份简称、封面配色、分布统计
 * ================================================================ */

import { PROJECTS } from '../../data/projects.js';

/* ---------- 标签 ---------- */

/** 全部去重标签（按拼音序） */
export function getAllTags(projects = PROJECTS) {
  const set = new Set();
  projects.forEach(p => p.tags.forEach(t => set.add(t)));
  return Array.from(set).sort();
}

/** 出现频次最高的 n 个标签 */
export function topTags(projects = PROJECTS, n = 24) {
  const freq = {};
  projects.forEach(p => p.tags.forEach(t => { freq[t] = (freq[t] || 0) + 1; }));
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh'))
    .slice(0, n)
    .map(([tag]) => tag);
}

/* ---------- 省份 ---------- */

const PROV_ABBR = {
  '上海': '沪', '江苏': '苏', '浙江': '浙', '江西': '赣', '河南': '豫',
  '湖北': '鄂', '湖南': '湘', '广东': '粤', '重庆': '渝', '陕西': '陕',
  '天津': '津', '吉林': '吉', '安徽': '皖', '福建': '闽', '四川': '川',
  '广西': '桂', '贵州': '黔', '宁夏': '宁'
};

/** 省份简称（用于封面字符），未收录时退回首字 */
export function abbrOf(province) {
  return PROV_ABBR[province] || String(province || '').slice(0, 1);
}

/* ---------- 封面配色 ---------- */

/* 省份兜底封面渐变。
   全部落在同一个深绿区间（与首页 Hero、政策页实景图蒙版同一色系），
   这样「有实景照片」和「无照片」两类案例并排时不会出现明显跳色。
   注意：这里刻意不放偏蓝的青色——第 3 档原为 #14707C 青色，
   与其余三档的绿色并排时明显发蓝，故统一收回绿色系。 */
const COVER_GRADIENTS = [
  'linear-gradient(135deg,#0B6B3A 0%,#0E8A49 55%,#12A355 100%)',
  'linear-gradient(135deg,#06431F 0%,#0B6B3A 60%,#0E8A49 100%)',
  'linear-gradient(135deg,#075236 0%,#0A6141 55%,#0E7A4E 100%)',
  'linear-gradient(135deg,#0E5E3A 0%,#0B6B3A 50%,#1F7A52 100%)'
];

/** 按省份名稳定映射一个封面色，同一省份始终同色 */
export function coverStyle(province) {
  const name = String(province || '');
  const idx = name.length % COVER_GRADIENTS.length;
  return COVER_GRADIENTS[idx];
}

/* ---------- 分布统计 ---------- */

/** 各省项目数，按数量降序 */
export function provinceCounts(projects = PROJECTS) {
  const counts = {};
  projects.forEach(p => { counts[p.province] = (counts[p.province] || 0) + 1; });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh'));
}

/** 各批次项目数 */
export function batchCounts(projects = PROJECTS) {
  const counts = {};
  projects.forEach(p => { counts[p.batch] = (counts[p.batch] || 0) + 1; });
  return counts;
}

/** 汇总指标：项目总数、覆盖省份数、标签总数 */
export function summaryStats(projects = PROJECTS) {
  return {
    total: projects.length,
    provinceCount: new Set(projects.map(p => p.province)).size,
    batchCount: new Set(projects.map(p => p.batch)).size,
    tagCount: getAllTags(projects).length
  };
}

/** 投资额是否已披露（'—' 视为未披露） */
export function isInvestKnown(project) {
  return Boolean(project) && project.invest !== '—';
}
