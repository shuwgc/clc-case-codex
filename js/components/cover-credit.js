import { COVER_CREDITS } from '../../data/covers.js';
import { sourceUrlOf } from '../../data/sources.js';
import { esc } from '../core/dom.js';
export function coverCreditHtml(caseId) {
  const id = String(caseId).padStart(2, '0');
  const credit = COVER_CREDITS[id];
  if (!credit) return '';
  const url = credit.articleUrl || sourceUrlOf(id);
  const caption = credit.caption || credit.article || '案例报道实景';
  return `<p class="cover-credit">配图：${esc(caption)}${credit.note ? ` · ${esc(credit.note)}` : ''}${/^https?:\/\//.test(url || '') ? ` · <a href="${esc(url)}" target="_blank" rel="noopener">报道出处</a>` : ''}</p>`;
}
