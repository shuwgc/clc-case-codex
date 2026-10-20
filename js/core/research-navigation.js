import { navigate, VIEW, getState } from './state.js';
import { parseQuery } from './research.js';

/** Cross-view navigation targets; text nodes are marked without rewriting handlers/HTML. */
export function applyResearchTarget(page, params) {
  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'research-return';
  back.textContent = '返回研究检索';
  back.onclick = () => navigate(VIEW.RESEARCH, {});
  page.prepend(back);
  let target;
  if (params.toolNo != null) target = [...page.querySelectorAll('[data-tool-no]')].find(el => el.dataset.toolNo === String(params.toolNo));
  else if (params.docNo != null) target = page.querySelector(`#${params.caseId === '00' ? 'nat-doc-' : 'doc-'}${Number(params.docNo)}`);
  else if (params.sourceNo) target = [...page.querySelectorAll('[data-source-no]')].find(el => el.dataset.sourceNo === params.sourceNo);
  else target = page.querySelector('.pg-hero, #nationalOverview') || page;
  if (!target) { back.textContent = '未找到定位条目 · 返回研究检索'; return; }
  for (let el = target; el && el !== page; el = el.parentElement) if (el.tagName === 'DETAILS') el.open = true;
  target.classList.add('research-linked-target');
  let terms = [];
  try { terms = parseQuery(params.searchQuery || ''); } catch { /* invalid input never injected */ }
  if (terms.length) {
    const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) if (!walker.currentNode.parentElement.closest('button, script, style, mark')) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const text = node.nodeValue;
      const normalized = text.toLowerCase();
      const ranges = [];
      // Plain offsets retain the actual source spelling; NFKC highlights are in the research reader.
      for (const term of terms) {
        let at = normalized.indexOf(term);
        while (at >= 0) { ranges.push([at, at + term.length]); at = normalized.indexOf(term, at + term.length); }
      }
      ranges.sort((a, b) => a[0] - b[0]);
      const merged = [];
      for (const range of ranges) {
        const previous = merged.at(-1);
        if (previous && range[0] <= previous[1]) previous[1] = Math.max(previous[1], range[1]);
        else merged.push(range);
      }
      if (!merged.length) continue;
      const fragment = document.createDocumentFragment();
      let start = 0;
      for (const [a, b] of merged) {
        fragment.append(document.createTextNode(text.slice(start, a)));
        const mark = document.createElement('mark');
        mark.className = 'research-mark'; mark.textContent = text.slice(a, b); fragment.append(mark); start = b;
      }
      fragment.append(document.createTextNode(text.slice(start))); node.replaceWith(fragment);
    }
  }
  const view = getState().view;
  requestAnimationFrame(() => {
    if (getState().view !== view || !page.classList.contains('active')) return;
    (target.querySelector('mark.research-mark') || target).scrollIntoView({ block: 'center', behavior: 'auto' });
  });
}
