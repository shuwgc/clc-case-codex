/* ================================================================
 * 视图工具：DOM 引用与安全转义
 * ================================================================ */

/** 按 id 取元素 */
export const $ = id => document.getElementById(id);

/**
 * HTML 转义。
 * 数据虽为内置，但转义后能避免数据里出现引号/尖括号时破坏结构。
 */
const ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

export function esc(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ESCAPE_MAP[ch]);
}

/** 同一容器/选择器/事件只保留最新处理器，避免重渲染累积旧案例闭包。 */
const delegated = new WeakMap();
export function delegate(container, selector, eventName, handler) {
  let bindings = delegated.get(container);
  if (!bindings) { bindings = new Map(); delegated.set(container, bindings); }
  const key = `${eventName}:${selector}`;
  const previous = bindings.get(key);
  if (previous) container.removeEventListener(eventName, previous);
  const listener = event => {
    const target = event.target.closest?.(selector);
    if (target && container.contains(target)) handler(event, target);
  };
  bindings.set(key, listener);
  container.addEventListener(eventName, listener);
}

/** 键盘可激活：让 role="button" 的元素支持 Enter / Space */
export function onActivate(el, handler) {
  el.addEventListener('click', handler);
  el.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handler(event);
    }
  });
}

/** 平滑滚动到指定元素（避开固定顶栏） */
export function scrollToEl(el, offset = 64) {
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
}

/** CSV 单元格转义 */
export function csvCell(value) {
  const text = String(value == null ? '' : value);
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

/** 用行数组拼出 CSV 文本 */
export function toCsv(rows) {
  return rows.map(row => row.map(csvCell).join(',')).join('\r\n');
}
