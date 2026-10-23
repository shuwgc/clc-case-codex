/* ================================================================
 * 组件：热门特征标签云
 * ================================================================ */

import { $, esc, onActivate } from '../core/dom.js';
import { topTags } from '../core/domain.js';
import { toggleTag } from '../core/state.js';

const TOP_N = 24;

export function renderTagCloud(state) {
  const container = $('tagCloud');
  if (!container) return;

  const tags = topTags(undefined, TOP_N);

  container.innerHTML =
    '<span class="label">热门特征</span>' +
    tags.map(t =>
      `<span class="tag ${state.activeTag === t ? 'active' : ''}" data-tag="${esc(t)}" role="button" tabindex="0">${esc(t)}</span>`
    ).join('');

  container.querySelectorAll('.tag').forEach(el => {
    onActivate(el, () => toggleTag(el.dataset.tag));
  });
}
