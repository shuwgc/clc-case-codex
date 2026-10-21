import { registerNavigationContext, isRestoringNavigation, rememberNavigation, jumpToTarget } from '../core/navigation-history.js';
import { $, esc } from '../core/dom.js';
import { createResearchIndex, highlightText } from '../core/research.js';
import { getState, navigate, VIEW } from '../core/state.js';
import { openExternal, notify } from '../core/desktop.js';

const PAGE_SIZE = 20;
const FILTER_KEYS = ['mode', 'type', 'province', 'batch', 'coverage', 'level', 'category', 'from', 'to'];
const ui = {
  query: '', draft: '', offset: 0,
  filters: { mode: 'all', type: '', province: '', batch: '', coverage: '', level: '', category: '', from: '', to: '', bodyOnly: false },
  invalidDate: false, returnFocus: '', scrollTop: 0, restoreList: false, readerHit: null,
};
registerNavigationContext('research-view', () => ({ ui, terms: latest?.terms || [] }), value => { Object.assign(ui, value.ui); if (latest) latest = { ...latest, terms: value.terms }; });

let corpus;
let loading;
let epoch = 0;
let pendingSearchFocus = false;
let latest = null;

const TYPES = { case: '案例概述', tool: '政策工具', document: '文件元数据', source: '来源条目' };
const CATEGORIES = { project: '案例项目', 'national overview': '通用工具概述', 'policy document': '政策文件' };
const COVERAGE = {
  metadata: { label: '仅元数据', note: '仅有标题、来源、日期等元数据；未收录原文正文，不能视为全文证据。' },
  excerpt: { label: '已有摘录', note: '收录既有资料摘录；摘录不等于完整原文，请结合原始链接核验。' },
  extracted: { label: '提取文本 · 未核验', note: '文本由存档提取，可能含导航、重复内容或缺漏；未核验为完整原文。' },
  curated: { label: '整理概述 · 非原始证据', note: '内容为案例或工具的整理概述，不是来源原文，不应替代原始证据。' },
};
const LABELS = {
  id: '案例序号', name: '案例名称', batch: '批次', province: '省份', invest: '投资信息', desc: '案例概述',
  tags: '主题标签', title: '标题', summary: '摘要', note: '备注', closing: '结语', policyTitle: '工具名称',
  mechanism: '机制分类', category: '类别', detail: '工具内容', lead: '牵头单位', leadLevel: '牵头层级',
  scope: '适用范围', basis: '依据说明', innovation: '创新说明', no: '条目编号', source: '来源', date: '记录日期', kind: '资料形态',
  'Document metadata only; no full text': '文件元数据（未收录全文）',
};
const QUERY_ERRORS = {
  'Query must not exceed 160 characters.': '检索词不能超过 160 个字符。',
  'Normalized query must not exceed 160 characters.': '规范化后的检索词不能超过 160 个字符。',
  'Query must not exceed 12 terms.': '检索词不能超过 12 项。',
  'Unclosed query quote.': '检索词的引号未闭合。',
  'Quoted terms must not be empty.': '引号内的短语不能为空。',
  'Separate quoted terms with whitespace.': '引号短语之间需要用空格分隔。',
  'Start quoted terms at a word boundary.': '请在检索词起始位置使用引号。',
  'Date bounds must start with a valid date.': '请输入有效的日期范围。',
};

const marked = (text, terms = []) => highlightText(text, terms).replaceAll('<mark>', '<mark class="research-mark">');
const errorText = error => QUERY_ERRORS[error?.message] || String(error?.message || error || '未知错误');
const categoryText = category => CATEGORIES[category] || category || '未分类';
const sourceText = source => String(source ?? '').replace('(curated; not original evidence)', '（整理概述，非原始证据）');

function labelText(label) {
  const text = String(label ?? '');
  if (Object.hasOwn(LABELS, text)) return LABELS[text];
  const linked = text.match(/^Linked policy document (\d+) \(name and issuer metadata only\)$/);
  if (linked) return `关联文件 ${linked[1]}（仅名称及发布机构元数据）`;
  return text.replace(/^Existing excerpt:\s*/, '已有摘录：')
    .replace(/^Archive extraction:\s*/, '存档文本提取：')
    .replaceAll('not verified full text', '未核验为完整原文')
    .replaceAll('content-selector:', '内容选择器：')
    .replaceAll('body-fallback', '页面正文回退提取') || '未命名文本部分';
}

function partCoverage(part) {
  return part.kind === 'archive' ? 'extracted' : part.kind === 'excerpt' ? 'excerpt'
    : part.kind === 'metadata' ? 'metadata' : 'curated';
}

function badge(coverage) {
  const value = Object.hasOwn(COVERAGE, coverage) ? coverage : 'metadata';
  return `<span class="research-badge research-badge--${esc(value)}" title="${esc(COVERAGE[value].note)}">${esc(COVERAGE[value].label)}</span>`;
}

function recordBadges(record) {
  const kinds = new Set([record.coverage]);
  for (const part of record.parts ?? []) {
    if (part.kind === 'archive' || part.kind === 'excerpt') kinds.add(partCoverage(part));
  }
  return `<span class="research-badge">${esc(TYPES[record.type] || record.type)}</span>${[...kinds].map(badge).join('')}`;
}

function originalUrl(value) {
  try {
    const url = new URL(String(value ?? '').trim());
    return url.protocol === 'http:' || url.protocol === 'https:' ? url.href : '';
  } catch {
    return '';
  }
}

function current(page, token, recordId) {
  const state = getState();
  return token === epoch && $('pageResearch') === page && state.view === VIEW.RESEARCH
    && String(state.viewParams?.recordId ?? '') === recordId;
}

async function loadCorpus() {
  if (corpus) return corpus;
  if (!loading) {
    loading = import('../../data/research-data.js').then(({ RECORDS, RESEARCH_META }) => {
      if (!Array.isArray(RECORDS) || !RESEARCH_META) throw new Error('检索数据结构不完整。');
      const index = createResearchIndex(RECORDS);
      const facets = {};
      for (const key of ['type', 'province', 'batch', 'category', 'coverage', 'level']) {
        const values = index.records.flatMap(record => key === 'level' ? record.levels ?? [] : [record[key]]);
        facets[key] = [...new Set(values.filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), 'zh-CN', { numeric: true }));
      }
      corpus = { index, meta: RESEARCH_META, facets };
      return corpus;
    }).catch(error => {
      loading = null;
      throw error;
    });
  }
  return loading;
}

function hero() {
  const meta = corpus.meta;
  return `<header class="research-hero">
    <p class="research-eyebrow">研究检索 · 1.4 Tier 1</p>
    <h1>跨案例资料检索</h1>
    <p class="research-intro">检索整理概述、工具、文件元数据与已收录的来源文本。支持空检索浏览；按相关性排序，逐条查看出处与覆盖口径。</p>
    <div class="research-metrics" aria-label="全库收录口径">
      <div><strong>${esc(meta.totalRecords)}</strong><span>可检索条目</span></div>
      <div><strong>${esc(meta.sourceWithText)} / ${esc(meta.sourceRecords)}</strong><span>来源条目含文本</span></div>
      <div><strong>${esc(meta.sourceMetadataOnly)}</strong><span>来源仅有元数据</span></div>
    </div>
    <p class="research-scope">1.4 仅覆盖 Tier 1 本地收录与检索；Tier 2 维护暂缓，不自动抓取、补全文或核验。条目数量不等于原文数量，提取文本不代表完整原文。</p>
  </header>`;
}

function selectField(key, label, values, translate = value => value) {
  return `<label class="research-field" for="research-${esc(key)}"><span>${esc(label)}</span>
    <select id="research-${esc(key)}" name="${esc(key)}" data-filter="${esc(key)}" form="researchSearchForm" data-focus="filter:${esc(key)}">
      <option value="">全部${esc(label)}</option>${values.map(value => `<option value="${esc(value)}"${ui.filters[key] === value ? ' selected' : ''}>${esc(translate(value))}</option>`).join('')}
    </select></label>`;
}

function searchLayout() {
  const facets = corpus.facets;
  return `<div class="research-workspace">
    <aside class="research-filters" aria-labelledby="researchFilterHeading">
      <h2 id="researchFilterHeading">筛选范围</h2><p class="research-hint">仅影响本页，不改变案例库筛选。</p>
      ${selectField('type', '条目类型', facets.type, value => TYPES[value] || value)}
      ${selectField('province', '省份', facets.province)}
      ${selectField('batch', '批次', facets.batch)}
      ${selectField('coverage', '文本覆盖', ['text', ...facets.coverage], value => value === 'text' ? '来源含文本（摘录或提取）' : COVERAGE[value]?.label || value)}
      ${selectField('level', '层级', facets.level)}
      ${selectField('category', '类别', facets.category, categoryText)}
      <fieldset class="research-date-range"><legend>记录日期范围</legend>
        <label class="research-field" for="research-from"><span>起始日期</span><input id="research-from" name="from" type="date" data-filter="from" data-focus="filter:from" form="researchSearchForm" value="${esc(ui.filters.from)}" aria-describedby="researchDateHelp"></label>
        <label class="research-field" for="research-to"><span>截止日期</span><input id="research-to" name="to" type="date" data-filter="to" data-focus="filter:to" form="researchSearchForm" value="${esc(ui.filters.to)}" aria-describedby="researchDateHelp"></label>
        <p class="research-hint" id="researchDateHelp">仅用条目明确记录的日期；缺失或无法识别日期的条目不参与日期筛选。年／月日期按已知区间重叠匹配，不推断正文中提到的日期。</p>
      </fieldset>
      <label class="research-checkbox"><input type="checkbox" name="bodyOnly" data-filter="bodyOnly" data-focus="filter:bodyOnly" form="researchSearchForm"${ui.filters.bodyOnly ? ' checked' : ''}><span>仅来源正文（排除概述与文件元数据）</span></label>
      <section class="research-legend" aria-label="文本覆盖说明"><h3>证据口径</h3>
        ${Object.entries(COVERAGE).map(([key, value]) => `<div>${badge(key)}<p>${esc(value.note)}</p></div>`).join('')}
      </section>
    </aside>
    <div class="research-main">
      <form id="researchSearchForm" class="research-search" novalidate aria-label="研究检索">
        <label class="research-field research-query" for="researchQuery"><span>检索词</span><input id="researchQuery" name="query" type="search" value="${esc(ui.draft)}" placeholder="输入关键词，或留空浏览全部条目" autocomplete="off" maxlength="160" data-focus="query" aria-describedby="researchQueryHelp researchSearchError" aria-controls="researchResultBody"></label>
        <label class="research-field research-mode" for="research-mode"><span>匹配方式</span><select id="research-mode" name="mode" data-filter="mode" data-focus="filter:mode"><option value="all"${ui.filters.mode === 'all' ? ' selected' : ''}>AND · 全部词</option><option value="any"${ui.filters.mode === 'any' ? ' selected' : ''}>OR · 任一词</option></select></label>
        <button type="submit" class="research-button research-button--primary" data-focus="submit">检索</button>
        <p class="research-hint research-query-help" id="researchQueryHelp">空格分隔关键词；双引号可检索短语。最多 160 个字符、12 个词；更改筛选时使用当前输入。</p>
      </form>
      <section class="research-results" aria-labelledby="researchResultsHeading">
        <div class="research-results-head"><h2 id="researchResultsHeading" tabindex="-1" data-focus="results">检索结果</h2><span class="research-hint">相关性排序 · 每页 20 条</span></div>
        <p class="research-result-status" id="researchResultStatus" role="status" aria-live="polite" aria-atomic="true"></p>
        <p id="researchSearchError" class="research-error" role="alert" hidden></p>
        <div id="researchResultBody" aria-busy="false"></div>
      </section>
    </div>
  </div>`;
}

function locateLabel(record) {
  return record.type === 'case' ? '定位案例' : record.type === 'source' ? '定位来源' : '定位政策';
}

function resultCard(hit, terms, number) {
  const { record, partIndex, snippet, score } = hit;
  const part = record.parts?.[partIndex];
  return `<article class="research-card">
    <div class="research-card-top"><span class="research-rank">${esc(number)}</span><div class="research-badges">${recordBadges(record)}</div></div>
    <h3><button type="button" class="research-result-title" data-action="read" data-record="${esc(record.id)}" data-record-id="${esc(record.id)}" data-focus="record:${esc(record.id)}">${marked(record.title || '未命名条目', terms)}</button></h3>
    <p class="research-card-meta">${[record.caseId && record.caseId !== '00' ? `案例 ${record.caseId} · ${record.caseName}` : '跨案例通用条目', record.province, record.batch, categoryText(record.category), record.date || '日期未记录'].filter(Boolean).map(value => marked(value, terms)).join('<span aria-hidden="true"> / </span>')}</p>
    <p class="research-snippet-label">命中片段 · ${esc(part ? labelText(part.label) : '标题／条目字段')}${part ? ` · ${badge(partCoverage(part))}` : ''}</p>
    <p class="research-snippet">${marked(snippet || '暂无可显示的文本片段；可查看元数据与出处。', terms)}</p>
    <div class="research-card-foot"><span class="research-provenance">来源：${marked(sourceText(record.source) || '未记录', terms)}</span><span class="research-score">相关度 ${esc(score)}</span></div>
    <div class="research-actions"><button type="button" class="research-button" data-action="read" data-record="${esc(record.id)}" data-record-id="${esc(record.id)}" data-focus="read:${esc(record.id)}">查看收录文本</button>
      ${record.target?.view ? `<button type="button" class="research-button research-button--quiet" data-action="locate" data-record="${esc(record.id)}" data-focus="locate:${esc(record.id)}">${esc(locateLabel(record))}</button>` : ''}</div>
  </article>`;
}

function validateDates() {
  for (const value of [ui.filters.from, ui.filters.to]) {
    if (!value) continue;
    const date = new Date(`${value}T00:00:00Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== value || value.startsWith('0000')) {
      throw new RangeError('请输入有效的起始和截止日期。');
    }
  }
  if (ui.invalidDate) throw new RangeError('请完整填写有效日期，或清空该日期。');
  if (ui.filters.from && ui.filters.to && ui.filters.from > ui.filters.to) throw new RangeError('起始日期不能晚于截止日期。');
}

function rememberFocus(page) {
  const active = document.activeElement;
  if (!active || !page.contains(active) || !active.dataset?.focus) return null;
  return { key: active.dataset.focus, start: active.selectionStart, end: active.selectionEnd };
}

function restoreFocus(page, focus, fallback = '') {
  const elements = [...page.querySelectorAll('[data-focus]')];
  const element = elements.find(node => node.dataset.focus === focus?.key && !node.disabled)
    || elements.find(node => node.dataset.focus === fallback && !node.disabled);
  if (!element) return;
  element.focus({ preventScroll: true });
  if (element.type === 'search' && Number.isInteger(focus?.start)) element.setSelectionRange(focus.start, focus.end);
}

function captureSearch(page) {
  const input = page.querySelector('#researchQuery');
  if (!input) return;
  ui.query = ui.draft = input.value;
  ui.invalidDate = false;
  for (const field of page.querySelectorAll('[data-filter]')) {
    const key = field.dataset.filter;
    if (key === 'bodyOnly') ui.filters.bodyOnly = field.checked;
    else if (FILTER_KEYS.includes(key)) ui.filters[key] = field.value;
    if ((key === 'from' || key === 'to') && field.validity?.badInput) ui.invalidDate = true;
  }
}

function updateResults(page) {
  if (!corpus || !current(page, epoch, '') || page.dataset.researchMode !== 'search') return;
  const body = page.querySelector('#researchResultBody');
  const status = page.querySelector('#researchResultStatus');
  const error = page.querySelector('#researchSearchError');
  if (!body || !status || !error) return;
  const focus = rememberFocus(page);
  body.setAttribute('aria-busy', 'true');
  latest = null;
  try {
    validateDates();
    let result = corpus.index.search(ui.query, ui.filters, { offset: ui.offset, limit: PAGE_SIZE });
    if (ui.offset && ui.offset >= result.total) {
      ui.offset = Math.max(0, Math.ceil(result.total / PAGE_SIZE) - 1) * PAGE_SIZE;
      result = corpus.index.search(ui.query, ui.filters, { offset: ui.offset, limit: PAGE_SIZE });
    }
    const pages = Math.ceil(result.total / PAGE_SIZE);
    const pageNumber = pages ? ui.offset / PAGE_SIZE + 1 : 0;
    const cases = new Set(result.results.map(hit => hit.record.caseId).filter(id => id && id !== '00'));
    const range = result.total ? `显示 ${ui.offset + 1}–${ui.offset + result.results.length} 条` : '未找到匹配条目';
    body.innerHTML = result.results.length
      ? `<div class="research-result-list">${result.results.map((hit, i) => resultCard(hit, result.terms, ui.offset + i + 1)).join('')}</div>
        <nav class="research-pagination" aria-label="检索结果分页"><button type="button" class="research-button" data-action="previous" data-focus="previous"${ui.offset === 0 ? ' disabled' : ''}>上一页</button><span>第 ${esc(pageNumber)} / ${esc(pages)} 页</span><button type="button" class="research-button" data-action="next" data-focus="next"${ui.offset + PAGE_SIZE >= result.total ? ' disabled' : ''}>下一页</button></nav>`
      : '<div class="research-empty"><h3>没有符合条件的条目</h3><p>试试减少关键词、扩大日期范围，或取消部分筛选。留空检索词可浏览当前筛选范围。</p></div>';
    status.textContent = `共 ${result.total} 条 · ${range} · 共 ${pages} 页 · 本页关联 ${cases.size} 个案例（去重，不含通用条目）`;
    error.hidden = true;
    error.textContent = '';
    page.querySelector('#researchQuery')?.removeAttribute('aria-invalid');
    latest = result;
  } catch (failure) {
    body.innerHTML = '<div class="research-empty"><h3>检索未执行</h3><p>请修正检索词或日期范围后重新检索；不会显示上一次的结果。</p><button type="submit" form="researchSearchForm" class="research-button">重新检索</button></div>';
    status.textContent = '检索条件有误，结果已清空。';
    error.textContent = errorText(failure);
    error.hidden = false;
    page.querySelector('#researchQuery')?.setAttribute('aria-invalid', 'true');
  } finally {
    body.setAttribute('aria-busy', 'false');
    restoreFocus(page, focus, focus && ['next', 'previous'].includes(focus.key) ? 'results' : '');
  }
}

function reader(record, terms) {
  const facts = [
    ['条目编号', record.id], ['出处', sourceText(record.source)], ['关联案例编号', record.caseId === '00' ? '00（通用条目，非单一案例）' : record.caseId],
    ['关联案例名称', record.caseName], ['条目类型', TYPES[record.type] || record.type], ['类别', categoryText(record.category)],
    ['省份／批次', [record.province, record.batch].filter(Boolean).join(' / ')], ['层级', (record.levels ?? []).join(' / ')],
    ['记录日期', record.date], ['原始网址', record.url], ['存档采集时间', record.capturedAt],
  ];
  return `<div class="research-reader-shell">
    <nav class="research-reader-bar" aria-label="收录文本导航"><button type="button" class="research-button" data-action="back" data-focus="back">返回检索</button>
      <div class="research-actions">${record.target?.view ? `<button type="button" class="research-button research-button--primary" data-action="locate" data-record="${esc(record.id)}" data-focus="locate:${esc(record.id)}">${esc(locateLabel(record))}</button>` : ''}
      ${originalUrl(record.url) ? `<button type="button" class="research-button" data-action="external" data-record="${esc(record.id)}" data-focus="external">打开原始链接</button>` : ''}</div></nav>
    <article class="research-reader" aria-labelledby="researchReaderTitle">
      <p class="research-eyebrow">收录文本与出处</p><h1 id="researchReaderTitle" tabindex="-1" data-focus="reader">${marked(record.title || '未命名条目', terms)}</h1>
      <div class="research-badges">${recordBadges(record)}</div>
      <dl class="research-record-meta">${facts.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${marked(value || '未记录', terms)}</dd></div>`).join('')}</dl>
      <section class="research-evidence-note" aria-label="文本覆盖免责声明"><h2>覆盖口径与核验提醒</h2><p>${esc(COVERAGE[record.coverage]?.note || COVERAGE.metadata.note)}</p>
        ${record.parts?.some(part => part.kind === 'archive') && record.coverage !== 'extracted' ? `<p>${esc(COVERAGE.extracted.note)}</p>` : ''}
        <p>以下各部分保留各自来源标签，概述、文件元数据、已有摘录与存档提取文本分别标明。此页只展示安全的纯文本，不加载原始存档网页；核验以原始来源为准。</p>
        ${record.url && !originalUrl(record.url) ? '<p>该原始地址不能直接打开；链接操作仅允许完整的 HTTP(S) 网址。</p>' : ''}
      </section>
      <p id="researchActionStatus" class="research-error" role="alert" hidden></p>
      <div class="research-reader-parts">${(record.parts ?? []).map((part, index) => `<section class="research-part" data-part-index="${esc(index)}" aria-labelledby="researchPart-${esc(index)}">
        <div class="research-part-head"><h2 id="researchPart-${esc(index)}">${marked(labelText(part.label), terms)}</h2>${badge(partCoverage(part))}</div>
        <p class="research-part-source">来源标签：${marked(labelText(part.label), terms)}<br>条目出处：${marked(sourceText(record.source) || '未记录', terms)}</p>
        <div class="research-part-text">${marked(part.text, terms) || '<span class="research-hint">该部分未收录文本。</span>'}</div>
      </section>`).join('') || '<p class="research-empty">该条目未收录文本部分，请参考上述元数据。</p>'}</div>
    </article><button type="button" class="research-button research-reader-back" data-action="back" data-focus="back-bottom">返回检索</button>
  </div>`;
}

function showFailure(page, error, recordId, token) {
  if (!current(page, token, recordId)) return;
  latest = null;
  page.removeAttribute('aria-busy');
  page.dataset.researchMode = 'error';
  page.innerHTML = `<section class="research-loading" role="alert"><h1>研究检索暂不可用</h1><p>${esc(errorText(error))}</p><p>可以重试，已输入的检索词与筛选条件会保留。</p><div class="research-actions"><button type="button" class="research-button research-button--primary" data-action="retry" data-focus="retry">重试加载</button>${recordId ? '<button type="button" class="research-button" data-action="back" data-focus="back">返回检索</button>' : ''}</div></section>`;
  bind(page);
}

function surfaceActionError(page, error, token, recordId) {
  const message = `操作未完成：${errorText(error)}`;
  if (current(page, token, recordId)) {
    const status = page.querySelector('#researchActionStatus') || page.querySelector('#researchSearchError');
    if (status) { status.hidden = false; status.textContent = message; }
  }
  notify(message, 'error');
}

async function openOriginal(page, record, token, recordId) {
  const url = originalUrl(record.url);
  if (!url) throw new Error('仅允许打开有效的 HTTP(S) 原始链接。');
  const result = await openExternal(url);
  if (result === false || result?.ok === false) throw new Error(result?.reason || '无法打开原始链接。');
  if (current(page, token, recordId)) {
    const status = page.querySelector('#researchActionStatus');
    if (status) { status.hidden = true; status.textContent = ''; }
  }
}

function bind(page) {
  page.oninput = event => {
    if (getState().view === VIEW.RESEARCH && event.target.id === 'researchQuery') ui.draft = event.target.value;
  };
  page.onsubmit = event => {
    if (event.target.id !== 'researchSearchForm' || !current(page, epoch, '')) return;
    event.preventDefault();
    try { captureSearch(page); ui.offset = 0; updateResults(page); }
    catch (error) { surfaceActionError(page, error, epoch, ''); }
  };
  page.onchange = event => {
    if (!event.target.matches('[data-filter]') || !current(page, epoch, '')) return;
    try { captureSearch(page); ui.offset = 0; updateResults(page); }
    catch (error) { surfaceActionError(page, error, epoch, ''); }
  };
  page.onclick = event => {
    const button = event.target.closest('button[data-action]');
    const token = epoch;
    const recordId = String(getState().viewParams?.recordId ?? '');
    if (!button || !page.contains(button) || button.disabled || !current(page, token, recordId)) return;
    try {
      const action = button.dataset.action;
      if (action === 'retry') {
        void renderResearch(getState()).catch(error => surfaceActionError(page, error, epoch, recordId));
      } else if (action === 'back') {
        ui.restoreList = true;
        navigate(VIEW.RESEARCH, {});
      } else if ((action === 'previous' || action === 'next') && !recordId && latest) {
        const previousQuery = ui.query;
        captureSearch(page);
        ui.offset = previousQuery === ui.query ? Math.max(0, ui.offset + (action === 'next' ? PAGE_SIZE : -PAGE_SIZE)) : 0;
        updateResults(page);
      } else if (['read', 'locate', 'external'].includes(action)) {
        const record = corpus?.index.get(button.dataset.record);
        if (!record) throw new Error('该检索条目不存在，请返回检索并重试。');
        if (action === 'external') {
          void openOriginal(page, record, token, recordId).catch(error => surfaceActionError(page, error, token, recordId));
        } else {
          if (!recordId) {
            ui.returnFocus = button.dataset.focus || `record:${record.id}`;
            ui.scrollTop = window.scrollY;
            ui.restoreList = true;
            ui.readerHit = { recordId: record.id, partIndex: latest?.results.find(hit => hit.record.id === record.id)?.partIndex ?? -1 };
          }
          if (action === 'read') navigate(VIEW.RESEARCH, { recordId: record.id });
          else {
            const target = record.target;
            if (!target?.view) throw new Error('该条目没有可定位的关联页面。');
            navigate(target.view, { ...target, searchQuery: ui.query, returnToResearch: true });
          }
        }
      }
    } catch (error) { surfaceActionError(page, error, token, recordId); }
  };
}

export async function renderResearch(state) {
  const token = ++epoch;
  const page = $('pageResearch');
  const recordId = String(state.viewParams?.recordId ?? '');
  if (!page || state.view !== VIEW.RESEARCH || !current(page, token, recordId)) return;
  const focus = rememberFocus(page);
  if (!isRestoringNavigation() && Object.hasOwn(state.viewParams || {}, 'query') && !recordId) {
    ui.query = ui.draft = String(state.viewParams.query || '');
    ui.filters.province = state.viewParams.province || '';
    ui.filters.batch = state.viewParams.batch || '';
    ui.offset = 0;
    ui.restoreList = false;
  }
  try {
    if (!corpus) {
      page.dataset.researchMode = 'loading';
      page.setAttribute('aria-busy', 'true');
      page.innerHTML = '<section class="research-loading" role="status" aria-live="polite"><h1>正在准备研究检索</h1><p>首次进入时加载本地数据并建立文本索引，请稍候。</p></section>';
      bind(page);
      await loadCorpus();
      if (!current(page, token, recordId)) return;
    }
    page.removeAttribute('aria-busy');
    if (recordId) {
      const record = corpus.index.get(recordId);
      if (!record) {
        page.dataset.researchMode = 'reader';
        page.innerHTML = '<section class="research-loading" role="alert"><h1>未找到该检索条目</h1><p>条目编号可能已变更；返回检索后重新查找。检索条件与页码仍会保留。</p><button type="button" class="research-button" data-action="back" data-focus="back">返回检索</button></section>';
        bind(page);
        restoreFocus(page, null, 'back');
        return;
      }
      const terms = latest?.terms ?? [];
      page.dataset.researchMode = 'reader';
      page.innerHTML = reader(record, terms);
      bind(page);
      restoreFocus(page, null, 'reader');
      const preferred = ui.readerHit?.recordId === recordId ? ui.readerHit.partIndex : -1;
      const part = [...page.querySelectorAll('[data-part-index]')].find(node => Number(node.dataset.partIndex) === preferred);
      const mark = part?.querySelector('.research-part-text mark.research-mark') || page.querySelector('.research-part-text mark.research-mark');
      if (mark) {
        mark.closest('.research-part')?.classList.add('research-target');
        mark.scrollIntoView({ block: 'center', behavior: 'auto' });
      } else page.querySelector('#researchReaderTitle')?.scrollIntoView({ block: 'start', behavior: 'auto' });
    } else {
      page.dataset.researchMode = 'search';
      page.innerHTML = `<div class="research-shell">${hero()}${searchLayout()}</div>`;
      bind(page);
      updateResults(page);
      restoreFocus(page, focus, ui.restoreList ? ui.returnFocus || 'query' : '');
      if (ui.restoreList) {
        window.scrollTo({ top: ui.scrollTop, behavior: 'auto' });
        ui.restoreList = false;
      }
      if (pendingSearchFocus) focusResearchSearch();
    }
  } catch (error) {
    try { showFailure(page, error, recordId, token); }
    catch (failure) { notify(`研究检索未完成：${errorText(failure)}`, 'error'); }
  }
}

export function focusResearchSearch() {
  pendingSearchFocus = true;
  if (getState().view !== VIEW.RESEARCH) return;
  const input = $('pageResearch')?.querySelector('#researchQuery');
  if (!input) return;
  input.focus({ preventScroll: true });
  input.scrollIntoView({ block: 'center', behavior: 'auto' });
  pendingSearchFocus = false;
}
