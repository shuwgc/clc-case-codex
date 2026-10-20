/* ================================================================
 * 组件：案例分布条形图（点击筛选省份）
 * ================================================================ */

import { $, esc, delegate, onActivate, scrollToEl } from '../core/dom.js';
import { provinceCounts } from '../core/domain.js';
import { toggleProvince } from '../core/state.js';

export function renderDistribution(state) {
  const container = $('distBars');
  if (!container) return;

  const list = provinceCounts();
  if (list.length === 0) {
    container.innerHTML = '';
    return;
  }

  const max = list[0][1];

  container.innerHTML = list.map(([prov, count]) => `
    <div class="dist-row ${state.province === prov ? 'active' : ''}">
      <span class="dist-name">${esc(prov)}</span>
      <div class="dist-track" role="button" tabindex="0" aria-label="筛选${esc(prov)}案例，共${count}个" data-prov="${esc(prov)}">
        <div class="dist-fill" style="width:${Math.max(4, count / max * 100)}%"><span>${count} 个</span></div>
      </div>
      <span class="dist-count">${count}</span>
    </div>`).join('');

  container.querySelectorAll('.dist-track').forEach(track => {
    onActivate(track, () => {
      toggleProvince(track.dataset.prov);
      // 选中省份后自动滚到案例区，便于看到筛选结果
      if (track.dataset.prov !== '全部') scrollToEl($('cases'));
    });
  });
}
