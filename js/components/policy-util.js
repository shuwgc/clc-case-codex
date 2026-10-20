/* ================================================================
 * 政策工具模块：共用工具函数
 * ================================================================ */

/**
 * 带圈序号字符集。
 * 分两段：①–⑳（U+2460 起）与 ㉑–㉟（U+3251 起）。
 * 附表在 2026-09 的市级补充检索后扩到 20 条以上，源文档改用第二段字符，
 * 这里必须与 extract-policy.mjs 的 CIRCLED 映射保持一致，否则页面上会出现
 * 「正文写 ㉑、引用角标显示 (21)」的不一致。
 */
const CIRCLED_CHARS = [
  ...Array.from({ length: 20 }, (_, i) => String.fromCodePoint(0x2460 + i)),
  ...Array.from({ length: 15 }, (_, i) => String.fromCodePoint(0x3251 + i)),
];

/** 数字转带圈序号（1 → ①，21 → ㉑）。超出范围回退为 (n)。 */
export function circled(n) {
  return n >= 1 && n <= CIRCLED_CHARS.length ? CIRCLED_CHARS[n - 1] : `(${n})`;
}

/** 文本裁剪，超出加省略号 */
export function clip(s, n) {
  if (!s) return '';
  return s.length > n ? s.slice(0, n) + '…' : s;
}

/** 取出 URL 的简短主机名，用于链接展示 */
export function safeHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return String(url || '').slice(0, 30);
  }
}
