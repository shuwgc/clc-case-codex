/* ================================================================
 * 桌面桥接：统一封装原生能力，并提供浏览器降级方案
 * ----------------------------------------------------------------
 * 渲染层只依赖本模块，不直接触碰 window.desktop，
 * 这样同一套代码在 Electron 与普通浏览器中都能跑。
 * ================================================================ */

import { publicUrl } from './public-links.js';
const bridge = (typeof window !== 'undefined' && window.desktop) || null;

/** 是否运行在桌面应用容器中 */
export const isDesktop = Boolean(bridge && bridge.isDesktop);

/** 在系统默认浏览器打开链接 */
export async function openExternal(url) {
  if (!url) return false;
  url = publicUrl(url);
  if (isDesktop) return bridge.openExternal(url);
  window.open(url, '_blank', 'noopener');
  return true;
}

/**
 * 导出 CSV：桌面端弹系统保存对话框，浏览器端触发下载。
 * @param {string} filename 建议文件名
 * @param {string} content  CSV 正文（不含 BOM）
 * @returns {Promise<{ok:boolean, filePath?:string, reason?:string}>}
 */
export async function exportCsv(filename, content) {
  if (isDesktop) return bridge.exportCsv(filename, content);

  try {
    const blob = new Blob(['\ufeff' + content], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || '案例筛选结果.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    return { ok: true };
  } catch (err) {
    return { ok: false, reason: String(err && err.message) };
  }
}

/** 读取应用信息（浏览器中返回占位信息） */
export async function getAppInfo() {
  if (isDesktop) return bridge.getAppInfo();
  return { name: '全域土地综合整治案例库', version: 'web', platform: 'browser' };
}

/**
 * 联盟式站内检索（试运行）。
 * 只有桌面端可用——请求由主进程按域名白名单发出，浏览器降级为不可用，
 * 避免在网页环境里绕开白名单直接联网。
 * @param {string} query
 * @returns {Promise<{ok:boolean, reason?:string, sources?:Array, results?:Array, totals?:object}>}
 */
export async function searchOnline(query) {
  if (!isDesktop || typeof bridge.searchOnline !== 'function') {
    return { ok: false, reason: 'desktop-only', sources: [] };
  }
  return bridge.searchOnline(query);
}

/** 在线检索可用来源清单 */
export async function getOnlineSources() {
  if (!isDesktop || typeof bridge.getOnlineSources !== 'function') {
    const module = await import('../../data/search-sources.js');
    return module.SEARCH_SOURCES;
  }
  return bridge.getOnlineSources();
}

/** 中止本次在线检索（停止按钮） */
export async function cancelOnlineSearch() {
  if (!isDesktop || typeof bridge.cancelOnlineSearch !== 'function') return { ok: false };
  return bridge.cancelOnlineSearch();
}

/** 订阅在线检索逐来源进度；返回取消订阅函数 */
export function onSearchOnlineProgress(handler) {
  if (!isDesktop || typeof bridge.onSearchOnlineProgress !== 'function') return () => {};
  return bridge.onSearchOnlineProgress(handler);
}

/**
 * 订阅应用菜单命令。
 * @param {(command:string)=>void} handler
 * @returns {() => void} 取消订阅
 */
export function onMenuCommand(handler) {
  if (!isDesktop || typeof bridge.onCommand !== 'function') return () => {};
  return bridge.onCommand(handler);
}

/** 轻量提示：桌面端用应用内提示条，避免依赖系统通知权限 */
export function notify(message, type = 'info') {
  document.dispatchEvent(new CustomEvent('app:notify', { detail: { message, type } }));
}
