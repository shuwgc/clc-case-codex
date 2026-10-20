/* ================================================================
 * 检索：按批次 / 地区 / 关键词 / 标签过滤案例
 * ================================================================ */

import { PROJECTS, ALL } from '../../data/projects.js';
import { MODE } from './state.js';

/**
 * 按当前状态筛选案例。
 * - 搜项目模式：匹配名称、省份、标签
 * - 搜特征模式：仅匹配标签
 * - activeTag 作为精确标签约束叠加
 * @param {object} state
 * @returns {Array} 命中的案例列表
 */
export function filterProjects(state) {
  let results = PROJECTS;

  if (state.batch !== ALL) {
    results = results.filter(p => p.batch === state.batch);
  }

  if (state.province !== ALL) {
    results = results.filter(p => p.province === state.province);
  }

  const q = String(state.query || '').trim().toLowerCase();
  if (q) {
    if (state.mode === MODE.FEATURE) {
      results = results.filter(p => p.tags.some(t => t.toLowerCase().includes(q)));
    } else {
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.province.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
  }

  if (state.activeTag) {
    results = results.filter(p => p.tags.includes(state.activeTag));
  }

  return results;
}

/** 当前筛选结果分页后的展示列表 */
export function pagedResults(state) {
  const results = filterProjects(state);
  return {
    all: results,
    shown: results.slice(0, state.visibleCount),
    remaining: Math.max(0, results.length - state.visibleCount)
  };
}

/** 是否存在任何生效中的筛选条件 */
export function hasActiveFilters(state) {
  return Boolean(
    state.query ||
    state.activeTag ||
    (state.batch && state.batch !== ALL) ||
    (state.province && state.province !== ALL)
  );
}
