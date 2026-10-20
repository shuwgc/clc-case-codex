/* ================================================================
 * 组件：热门特征标签云
 * ================================================================ */

import { $, esc, onActivate } from '../core/dom.js';
import { topTags } from '../core/domain.js';
import { toggleTag } from '../core/state.js';
import { filterProjects } from '../core/filters.js';

const TOP_N = 24;

export function renderTagCloud(state) {
  const container = $('tagCloud');
  if (!container) return;

  // 热门特征必须来自当前批次、地区和关键词实际能命中的案例。
  // 计算时暂时移除 activeTag，既保留当前选中项，也不会展示点击后必为 0 的标签。
  const availableProjects = filterProjects({ ...state, activeTag: null });
  const tags = topTags(availableProjects, TOP_N);

  container.innerHTML =
    '<span class="label">热门特征</span>' +
    (tags.length ? tags.map(t =>
      `<span class="tag ${state.activeTag === t ? 'active' : ''}" data-tag="${esc(t)}" role="button" tabindex="0">${esc(t)}</span>`
    ).join('') : '<span class="tag-empty">当前筛选下暂无可用特征</span>');

  container.querySelectorAll('.tag').forEach(el => {
    onActivate(el, () => toggleTag(el.dataset.tag));
  });
}
