/* ================================================================
 * 组件：Hero 统计卡片、结果计数、关于本站数字
 * ================================================================ */

import { $ } from '../core/dom.js';
import { summaryStats } from '../core/domain.js';

/**
 * 初始化 Hero 统计与静态数字（只渲染一次）
 */
export function initStats() {
  const stats = summaryStats();

  const items = [
    { num: stats.total, label: '试点项目' },
    { num: stats.provinceCount, label: '省级行政区' },
    { num: stats.batchCount, label: '案例批次' },
    { num: stats.tagCount, label: '特征标签' }
  ];

  const heroStats = $('heroStats');
  if (heroStats) {
    heroStats.innerHTML = items
      .map(i => `<li class="hero-stat"><b>${i.num}</b><span>${i.label}</span></li>`)
      .join('');
  }

  const distTotal = $('distTotal');
  if (distTotal) distTotal.textContent = stats.total;

  const distProv = $('distProv');
  if (distProv) distProv.textContent = stats.provinceCount;

  const aboutTotal = $('aboutTotal');
  if (aboutTotal) aboutTotal.textContent = stats.total;

  const aboutProv = $('aboutProv');
  if (aboutProv) aboutProv.textContent = stats.provinceCount;

  return stats;
}

/**
 * 更新结果计数与筛选提示
 * @param {number} total 当前命中数量
 * @param {number} shown 当前展示数量
 * @param {string} hint 筛选提示文案
 */
export function updateResultMeta(total, shown, hint) {
  const resultCount = $('resultCount');
  if (resultCount) {
    resultCount.textContent = `共 ${total} 个命中项目 · 当前显示 ${shown} 个`;
  }
  const filterHint = $('filterHint');
  if (filterHint) filterHint.textContent = hint || '';
}
