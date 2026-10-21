/* ================================================================
 * 应用状态：集中管理筛选条件与展示状态
 * ----------------------------------------------------------------
 * 单一状态源 + 订阅通知，所有视图通过 subscribe 响应变化，
 * 避免原实现中各组件互相调用 render 造成的隐式耦合。
 * ================================================================ */

import { rememberNavigation } from './navigation-history.js';

import { PROJECTS, ALL } from '../../data/projects.js';

/** 搜索模式 */
export const MODE = {
  PROJECT: 'project', // 搜项目
  FEATURE: 'feature'  // 搜特征
};

/**
 * 页面路由。
 * 采用「视图 + 参数」两段式：view 决定渲染哪个页面，
 * params 携带该页面所需的上下文（如某个案例的政策工具页）。
 */
export const VIEW = {
  LIBRARY: 'library',   // 案例库首页
  POLICY: 'policy',     // 政策工具总览（二级栏目）
  CASE_POLICY: 'casePolicy', // 单个案例的政策工具页
  SOURCES: 'sources',        // 相关资料总览（二级栏目）
  CASE_SOURCES: 'caseSources', // 单个案例的相关资料页
  RESEARCH: 'research', // 跨案例离线研究检索与文本阅读
  EXTERNAL: 'external', // 独立的已采集域外公开网页检索
  FSQCA: 'fsqca'        // fsQCA 编码评分与证据反查（读取编码表）
};

const DEFAULT_STATE = {
  view: VIEW.LIBRARY,
  viewParams: {},
  mode: MODE.PROJECT,
  query: '',
  activeTag: null,
  batch: ALL,
  province: ALL,
  visibleCount: 8
};

export const PAGE_SIZE = 8;

let state = { ...DEFAULT_STATE };
const listeners = new Set();

/** 读取当前状态（只读快照） */
export function getState() {
  return state;
}

/** 结构性覆盖状态，并通知订阅者 */
export function setState(patch) {
  const next = { ...state, ...patch };
  const changed = Object.keys(patch).some(k => state[k] !== next[k]);
  if (!changed) return;
  state = next;
  notify();
}

/**
 * 更新筛选条件。
 * 筛选条件变化时自动把展示数量重置回首页条数。
 */
export function setFilters(patch) {
  const filterKeys = ['mode', 'query', 'activeTag', 'batch', 'province'];
  const touchedFilter = filterKeys.some(k => k in patch && patch[k] !== state[k]);
  const next = { ...state, ...patch };
  if (touchedFilter) next.visibleCount = PAGE_SIZE;
  const changed = Object.keys(next).some(k => state[k] !== next[k]);
  if (!changed) return;
  state = next;
  notify();
}

/** 展示更多案例 */
export function showMore() {
  setState({ visibleCount: state.visibleCount + PAGE_SIZE });
}

/** 重置全部筛选条件，保留当前模式 */
export function resetFilters() {
  setState({
    ...DEFAULT_STATE,
    mode: state.mode
  });
}

/** 设置搜索模式 */
export function setMode(mode) {
  setFilters({ mode });
}

/** 切换特征标签：再次点击同一标签则取消 */
export function toggleTag(tag) {
  if (state.activeTag === tag) {
    setFilters({ activeTag: null, query: '' });
  } else {
    setFilters({ activeTag: tag, query: tag, mode: MODE.FEATURE });
  }
}

/** 切换省份筛选：再次点击同一省份则取消 */
export function toggleProvince(province) {
  setFilters({ province: state.province === province ? ALL : province });
}

/** 设置批次筛选 */
export function setBatch(batch) {
  setFilters({ batch });
}

/** 设置搜索词（同步清空不匹配的标签） */
export function setQuery(query) {
  const patch = { query };
  if (state.activeTag && query !== state.activeTag) patch.activeTag = null;
  if (!query) patch.activeTag = null;
  setFilters(patch);
}

/** 订阅状态变化，返回取消订阅函数 */
export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/* ---------- 路由 ---------- */

/** 切换页面。params 用于携带页面上下文（如案例编号） */
export function navigate(view, params = {}) {
  if (state.view === view && JSON.stringify(state.viewParams) === JSON.stringify(params)) return;
  rememberNavigation();
  state = { ...state, view, viewParams: params };
  notify();
}

/** 返回案例库首页 */
export function goLibrary() {
  navigate(VIEW.LIBRARY, {});
}

/** 打开政策工具总览页 */
export function goPolicyIndex() {
  navigate(VIEW.POLICY, {});
}

/** 打开某案例的政策工具页 */
export function goCasePolicy(caseId) {
  navigate(VIEW.CASE_POLICY, { caseId: String(caseId).padStart(2, '0') });
}

/** 打开相关资料总览页 */
export function goSourcesIndex() {
  navigate(VIEW.SOURCES, {});
}

/** 打开某案例的相关资料页 */
export function goCaseSources(caseId) {
  navigate(VIEW.CASE_SOURCES, { caseId: String(caseId).padStart(2, '0') });
}

/** 打开 fsQCA 评分页（可带初始案例） */
export function goFsqca(caseId) {
  navigate(VIEW.FSQCA, caseId ? { caseId: String(caseId).padStart(2, '0') } : {});
}

/** 当前是否停留在案例库首页 */
export function isLibrary() {
  return state.view === VIEW.LIBRARY;
}

function notify() {
  listeners.forEach(fn => fn(state));
}

/** 应用启动时的数据自检，方便发现数据录入错误 */
export function validateState() {
  const problems = [];
  const ids = new Set();
  PROJECTS.forEach(p => {
    if (ids.has(p.id)) problems.push(`案例 id 重复：${p.id}`);
    ids.add(p.id);
    if (!p.name || !p.batch || !p.province) problems.push(`案例 ${p.id} 缺少必填字段`);
    if (!Array.isArray(p.tags) || p.tags.length === 0) problems.push(`案例 ${p.id} 缺少特征标签`);
  });
  return problems;
}
