/* Location history is kept in memory; scoring and source data are never copied or changed. */
const contexts = new Map();
const entries = [];
let host;
let restoring = false;
let clickOrigin = null;
let clickRecorded = false;
let revision = 0;
export const isRestoringNavigation = () => restoring;
export function registerNavigationContext(key, capture, restore, afterRender) {
  contexts.set(key, { capture, restore, afterRender });
}
function pathOf(el) {
  if (!el || el === document.body) return null;
  const parts = [];
  for (; el && el !== document.body; el = el.parentElement) {
    if (el.id) { parts.unshift('#' + CSS.escape(el.id)); break; }
    parts.unshift(`${el.tagName.toLowerCase()}:nth-child(${[...el.parentElement.children].indexOf(el) + 1})`);
  }
  return parts.join(' > ');
}
function snapshot() {
  const page = document.querySelector('.page-view.active') || document.querySelector('[aria-hidden="false"][id^="page"]') || document.querySelector('.site-main-library');
  return {
    state: structuredClone(host.getState()), x: window.scrollX, y: window.scrollY,
    focus: pathOf(document.activeElement),
    contexts: [...contexts].map(([key, c]) => [key, structuredClone(c.capture())]),
    details: page ? [...page.querySelectorAll('details')].map(el => [pathOf(el), el.open]) : [],
    scrolls: [...document.querySelectorAll('.fsqca-heat-scroll, .arc-body, .modal-panel, .qca-table-scroll')].map(el => [pathOf(el), el.scrollLeft, el.scrollTop]),
  };
}
function updateButton() {
  const button = document.getElementById('navigationBack');
  if (button) { button.hidden = entries.length === 0; button.disabled = restoring; }
}
// Choosing a destination explicitly ends the current index-return journey.
export function clearNavigationHistory() {
  entries.length = 0;
  revision++;
  clickRecorded = Boolean(clickOrigin);
  document.querySelectorAll('.navigation-target, .research-linked-target').forEach(el => el.classList.remove('navigation-target', 'research-linked-target'));
  updateButton();
}
export function dismissNavigation(scope) {
  if (!restoring && entries.at(-1)?.scope === scope) { entries.pop(); updateButton(); }
}
export function rememberNavigation({ scope = null } = {}) {
  if (!host || restoring || clickRecorded) return;
  const origin = clickOrigin || snapshot();
  entries.push({ ...origin, scope });
  if (entries.length > 50) entries.shift();
  if (clickOrigin) clickRecorded = true;
  updateButton();
}
export async function returnToPrevious() {
  if (!host || restoring || !entries.length) return false;
  const entry = entries.pop();
  const restoringRevision = revision;
  restoring = true; updateButton();
  try {
    document.getElementById('modalClose')?.click();
    document.querySelector('.arc-overlay [data-arc-close]')?.click();
    for (const [key, value] of entry.contexts) contexts.get(key)?.restore(value);
    await host.restore(entry.state);
    if (revision !== restoringRevision) return false;
    for (const [key, value] of entry.contexts) contexts.get(key)?.afterRender?.(value);
    for (const [selector, open] of entry.details) { const el = document.querySelector(selector); if (el) el.open = open; }
    for (const [selector, left, top] of entry.scrolls) { const el = document.querySelector(selector); if (el) { el.scrollLeft = left; el.scrollTop = top; } }
    await new Promise(resolve => requestAnimationFrame(resolve));
    if (revision !== restoringRevision) return false;
    const focus = entry.focus && document.querySelector(entry.focus);
    focus?.focus({ preventScroll: true });
    window.scrollTo({ left: entry.x, top: entry.y, behavior: 'instant' });
  } finally { restoring = false; updateButton(); }
  return true;
}
export function jumpToTarget(target, { record = true, focus = true } = {}) {
  if (!target) return;
  if (record) rememberNavigation();
  for (let el = target; el; el = el.parentElement) if (el.tagName === 'DETAILS') el.open = true;
  document.querySelectorAll('.navigation-target').forEach(el => el.classList.remove('navigation-target'));
  target.classList.add('navigation-target');
  if (focus) { if (!target.matches('button,a,input,select,textarea,[tabindex]')) target.tabIndex = -1; target.focus({ preventScroll: true }); }
  target.scrollIntoView({ block: 'start', behavior: 'instant' });
}
export function initNavigationHistory(config) {
  host = config;
  const button = document.createElement('button');
  button.id = 'navigationBack'; button.type = 'button'; button.hidden = true;
  button.className = 'navigation-back'; button.setAttribute('aria-label', '返回上一位置');
  button.title = '返回上一位置'; button.innerHTML = '<span aria-hidden="true">←</span><small>返回</small>';
  button.addEventListener('click', () => void returnToPrevious());
  document.body.append(button);
  // Capture before handlers close a dialog or change a module's local selection.
  document.addEventListener('click', event => {
    if (restoring || event.target.closest('#navigationBack')) return;
    clickOrigin = snapshot();
    const trigger = event.target.closest('button, a, input, select, summary, [tabindex]');
    if (trigger) clickOrigin.focus = pathOf(trigger);
    clickRecorded = false;
    setTimeout(() => { clickOrigin = null; clickRecorded = false; }, 0);
    if (event.target.closest('.site-header a[href], .site-header [data-goto-view], .site-footer a[href]')) {
      clearNavigationHistory();
      return;
    }
    const anchor = event.target.closest('a[href^="#"]');
    if (anchor && anchor.getAttribute('href').length > 1 && !anchor.closest('.site-header, .site-footer, [data-goto-view]')) rememberNavigation();
  }, true);
}
