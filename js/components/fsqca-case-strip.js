import { esc } from '../core/dom.js';
import { SCALE, getCase, parseScore, suggestedLevel } from '../core/fsqca.js';
import { VARIABLE_CODES, materialRuleLinks } from '../core/evidence-links.js';
import { navigate, VIEW } from '../core/state.js';

function colorOf(c, code) {
  const values = c.rules.filter(r => r.family === code && r.status === '有效')
    .map(r => parseScore(r.score)).filter(p => p.kind === 'score').map(p => p.value);
  const level = values.length ? suggestedLevel(values.reduce((a,b) => a+b,0)/values.length) : null;
  return SCALE.levels.find(l => l.value === level)?.color || SCALE.status['缺失'].color;
}

export function materialLinksHtml(caseId, kind, key, { mini = false, caseStrip = false } = {}) {
  const id = String(caseId ?? '').padStart(2, '0'), c = getCase(id);
  if (!c) return '';
  const links = materialRuleLinks(id, kind, key);
  const blocks = VARIABLE_CODES.flatMap(code => {
    const rules = links.filter(x => x.family === code);
    if (!rules.length) return [];
    const color = colorOf(c, code);
    const ruleCodes = [...new Set(rules.map(r => r.ruleCode))];
    const name = c.variables.find(v => v.code === code)?.name || code;
    const via = [...new Set(rules.map(r => `${r.evidenceCode}（${r.via}）`))].join('、');
    return [`<button type="button" class="fsqca-strip-block${mini ? ' mini' : ''}" style="background:${color}22;border-color:${color};color:${color}" data-evidence-case="${esc(id)}" data-evidence-rule="${esc(ruleCodes[0])}" title="${esc(name)}；关联细则：${esc(ruleCodes.join('、'))}；${esc(via)}"><b>${esc(code)}</b></button>`];
  });
  if (!blocks.length) return '';
  const cls = mini ? 'fsqca-strip-mini' : caseStrip ? 'fsqca-strip-wrap' : 'fsqca-material-links';
  return `<div class="${cls}" data-strip-case="${esc(id)}" aria-label="关联细则">${caseStrip ? '<p class="fsqca-strip-title">关联细则</p>' : ''}<div class="fsqca-strip">${blocks.join('')}</div></div>`;
}
export const caseStripHtml = caseId => materialLinksHtml(caseId, 'case', 'all', { caseStrip: true });
export const caseStripMiniHtml = caseId => materialLinksHtml(caseId, 'case', 'all', { mini: true });

export function initEvidenceLinks() {
  document.addEventListener('click', event => {
    const target = event.target.closest('[data-evidence-case][data-evidence-rule]');
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('modalClose')?.click();
    document.querySelector('.arc-overlay [data-arc-close]')?.click();
    navigate(VIEW.FSQCA, { caseId: target.dataset.evidenceCase, ruleCode: target.dataset.evidenceRule }, { index: true });
  }, true);
}
