import { LINK_REPAIRS, LINK_UNAVAILABLE } from '../../data/link-status.js';
export const publicUrl = url => LINK_REPAIRS[url] || url;
export const unavailableLink = url => LINK_UNAVAILABLE[url] || 0;
export function sourceDisplayName(source, url) {
  if (String(url).includes('zjic.zj.gov.cn/')) return '浙江省经济信息中心（转载浙江日报）';
  return String(source || '').replace(/^(?:[\w.-]+\.[a-z]{2,}|thepaper|iziran)[_\s]+/i, '');
}
