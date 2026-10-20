import { $, esc } from '../core/dom.js';
import { createExternalSearch } from '../core/external-search.js';
import { highlightText } from '../core/research.js';
import { getState, navigate, VIEW } from '../core/state.js';
import { openExternal, notify, searchOnline, getOnlineSources, isDesktop, cancelOnlineSearch, onSearchOnlineProgress } from '../core/desktop.js';

const PAGE_SIZE = 20;
const ONLINE_PAGE_SIZE = 20;
const ui = { query: '', draft: '', offset: 0, filters: { mode: 'all', family: '', province: '', host: '', articleKind: '', relation: '', coverage: '', from: '', to: '', includeUndated: false, bodyOnly: false }, scrollTop: 0, focus: '', terms: [] };
/* 在线检索试运行状态：与离线检索完全分开，不写入任何快照或统计 */
const online = { busy: false, query: '', result: null, showSources: false, sources: null, progress: null, offset: 0, hadPartial: false };
let index;
let loading;
let epoch = 0;
let latest = null;
const labels = { practice: '实践候选', policy: '政策/审批信息', overview: '案例汇编', other: '相关信息', uncertain: '待分类', extracted: '已提取正文', metadata: '仅有元数据', 'external-candidate': '本库外候选 · 未核', 'external-reviewed': '已审阅本库外实践', 'known-case': '与本库重合', unresolved: '关系待核', mixed: '与本库重合（含其它实践）' };
const FAMILY_LABELS = {
  F0: '全域土地综合整治', F1: '耕地保护与占补平衡', F2: '高标准农田与农用地整理', F3: '建设用地整理与节约集约',
  F4: '宅基地与集体土地改革', F5: '国土空间规划与用途管制', F6: '生态修复与矿山治理', F7: '盐碱地与其他土地治理',
  F8: '土地要素与治理机制',
};
const familyLabel = value => FAMILY_LABELS[value] || value;
const msg = error => ({
  'Query must not exceed 160 characters.':'检索词不能超过160个字符。','Normalized query must not exceed 160 characters.':'规范化检索词不能超过160个字符。','Query must not exceed 12 terms.':'检索词不能超过12项。','Unclosed query quote.':'检索词引号未闭合。','Quoted terms must not be empty.':'引号短语不能为空。','Separate quoted terms with whitespace.':'引号短语之间需要空格。','Start quoted terms at a word boundary.':'请在词边界开始引号短语。'
}[error?.message] || String(error?.message || error || '未知错误'));
const marked = (text, terms = []) => highlightText(String(text ?? ''), terms).replaceAll('<mark>', '<mark class="external-mark">');
const current = (page, token, id) => token === epoch && $('pageExternal') === page && getState().view === VIEW.EXTERNAL && String(getState().viewParams?.recordId ?? '') === id;
const safeUrl = value => { try { const url = new URL(String(value || '')); return url.protocol === 'https:' ? url.href : ''; } catch { return ''; } };

/* 结果区等待时的骨架屏（0.6.3 P2-3）：3 条灰绿 shimmer 卡片，替换干巴巴的一行文字。
   shimmer 动画在 base.css 的 prefers-reduced-motion 媒体查询里会被统一关掉。 */
const skeletonHtml = () => `<div class="external-skeleton" aria-hidden="true">${Array.from({ length: 3 }, () => `
  <article class="external-card">
    <div class="external-skel-line w40"></div>
    <div class="external-skel-line tall w90"></div>
    <div class="external-skel-line w70"></div>
    <div class="external-skel-line w40"></div>
  </article>`).join('')}</div>`;

async function load() {
  if (index) return index;
  if (!loading) loading = import('../../data/external-data.js').then(module => {
    if (!Array.isArray(module.EXTERNAL_RECORDS) || !module.EXTERNAL_META) throw new Error('域外资料包结构不完整。');
    index = { engine: createExternalSearch(module.EXTERNAL_RECORDS), meta: module.EXTERNAL_META };
    return index;
  }).catch(error => { loading = null; throw error; });
  return loading;
}

const select = (key, label, values, translate = value => value) => `<label class="external-field"><span>${esc(label)}</span><select data-filter="${esc(key)}"><option value="">全部</option>${values.map(value => `<option value="${esc(value)}"${ui.filters[key] === value ? ' selected' : ''}>${esc(translate(value))}</option>`).join('')}</select></label>`;

const relationSelect = (facets, meta) => {
  const options = [
    ['', '默认 · 不含与本库重合'],
    ['show-all', '全部（含与本库重合）'],
    ['external-candidate', '本库外候选 · 未核'],
    ['external-reviewed', '已审阅本库外实践'],
    ['known-case', '与本库重合'],
    ['unresolved', '关系待核'],
  ].filter(([value]) => !value || value === 'show-all' || facets.includes(value) || (value === 'known-case' && facets.includes('mixed')));
  return `<label class="external-field"><span>关联判定</span><select data-filter="relation">${options.map(([value, text]) => `<option value="${esc(value)}"${ui.filters.relation === value ? ' selected' : ''}>${esc(text)}</option>`).join('')}</select></label>`;
};

function shell(meta, facets) {
  return `<div class="external-shell"><header class="external-hero"><p class="external-eyebrow">维护采集 · 离线检索</p><h1>域外实践检索</h1><p class="external-intro">检索已采集的政府公开网页文本，范围覆盖<strong>新式土地管理</strong>：全域土地综合整治、耕地保护与占补平衡、高标准农田与农用地整理、建设用地整理与节约集约、宅基地与集体土地改革、国土空间规划与用途管制、生态修复与矿山治理、盐碱地治理、土地要素与治理机制。此处不是实时全网搜索；收录范围以本次资料快照和页面列明来源为准。外链需联网并由系统浏览器打开。</p>
    <div class="external-metrics"><div><strong>${esc(meta.counts.bodyArticles)}</strong><span>含提取正文</span></div><div><strong>${esc(meta.counts.scannedRegions ?? 0)}</strong><span>已扫描地区</span></div><div><strong>${esc(meta.counts.reviewedPractices)}</strong><span>已审阅本库外实践</span></div><div><strong>${esc((meta.counts.knownCaseArticles ?? 0) + (meta.counts.mixedArticles ?? 0))}</strong><span>已判定与本库重合</span></div></div>
    <p class="external-coverage-note">快照 ${esc(meta.promotedAt ? new Date(meta.promotedAt).toLocaleDateString('zh-CN') : '尚未完成发布')} · 本库之外，未核定全部官方批次名单；自动候选不等于已核实实践。当前为试点范围：${esc(meta.counts.scannedRegions ?? 0)} 个地区、${esc((meta.collectedScope?.sources || []).length)} 个公开来源，未配置地区不代表没有相关实践。查看<a href="#externalCoverage">采集覆盖与口径</a></p>
  </header><div class="external-workspace"><aside class="external-filters"><h2>筛选</h2><p class="external-help">筛选仅作用于域外资料，不会改变案例库与“搜全文”。</p>
    ${select('family','主题族',facets.family, familyLabel)}
    ${select('province','实践地区',facets.province)}
    ${select('host','发布网站',facets.host, id => meta.sourceCoverage.find(item => item.sources.includes(id))?.region ? `${meta.sourceCoverage.find(item => item.sources.includes(id)).region} · ${id}` : id)}
    ${select('articleKind','内容类型',facets.articleKind, value => labels[value] || value)}
    ${relationSelect(facets.relation, meta)}
    ${select('coverage','正文覆盖',facets.coverage, value => labels[value] || value)}
    <fieldset class="external-date"><legend>发布日期范围</legend><label class="external-field"><span>起始</span><input data-filter="from" type="date" value="${esc(ui.filters.from)}"></label><label class="external-field"><span>截止</span><input data-filter="to" type="date" value="${esc(ui.filters.to)}"></label><label class="external-check"><input data-filter="includeUndated" type="checkbox"${ui.filters.includeUndated ? ' checked' : ''}>包含日期未披露</label></fieldset>
    <label class="external-check"><input data-filter="bodyOnly" type="checkbox"${ui.filters.bodyOnly ? ' checked' : ''}>仅检索已提取正文</label>
  </aside><main class="external-main"><form class="external-search" id="externalSearchForm"><label class="external-field external-query"><span>检索词</span><input id="externalQuery" type="search" maxlength="160" autocomplete="off" value="${esc(ui.draft)}" placeholder="如：占补平衡 低效用地再开发 盐碱地" aria-describedby="externalQueryHelp externalError"></label><label class="external-field"><span>匹配方式</span><select data-filter="mode"><option value="all"${ui.filters.mode === 'all' ? ' selected' : ''}>AND · 全部词</option><option value="any"${ui.filters.mode === 'any' ? ' selected' : ''}>OR · 任一词</option></select></label><button class="external-button external-primary" type="submit">检索已采集资料</button><p id="externalQueryHelp" class="external-help">空格分词；双引号检索短语。检索对象是此页当前已收录资料，不会发起网络请求。</p></form>
    <section class="external-results" aria-labelledby="externalResultsHeading"><div class="external-results-head"><h2 id="externalResultsHeading" tabindex="-1">检索结果</h2><span>每页20条 · 按文本命中排序</span></div><p id="externalStatus" role="status" aria-live="polite"></p><p id="externalError" role="alert" hidden></p><div id="externalResultBody"></div></section>
    <section class="external-online" aria-labelledby="externalOnlineHeading"><div class="external-results-head"><h2 id="externalOnlineHeading" tabindex="-1">在线检索域（试运行）</h2><span>联网 · 结果未核验</span></div>
      <p class="external-online-note"><strong>与上方检索不同：</strong>这里会<strong>联网</strong>，由应用主进程向已批准的政府站点检索入口发起请求（域名白名单、单站限时、同义词轮询与分页抓取、不发凭据）。返回的是<strong>在线页面标题与链接，未经核验</strong>，不进入离线快照，也不计入任何统计。检索中途可停止并保留已取回部分；同一会话内重复检索命中临时缓存（存于系统临时文件夹，程序退出时自动清除）。多数站点的检索页由脚本渲染，服务端取不到条目时按指向列出跳转条目（含网址与来源概述）。</p>
      <form class="external-search" id="externalOnlineForm"><label class="external-field external-query"><span>在线检索词</span><input id="externalOnlineQuery" type="search" maxlength="60" autocomplete="off" placeholder="如：全域土地综合整治" aria-describedby="externalOnlineHelp"></label><button class="external-button external-primary" type="submit">向已批准站点检索</button><button class="external-button" type="button" data-action="bing-gov">必应限定政府网站</button><button class="external-button external-quiet" type="button" data-action="online-sources">查看来源清单</button><p id="externalOnlineHelp" class="external-help">“必应限定政府网站”会在新标签页搜索 <code>site:gov.cn + 关键词</code>；无需安装桌面应用。其它实时多站检索仍仅在桌面版可用。</p></form>
      <p id="externalOnlineStatus" role="status" aria-live="polite"></p><div id="externalOnlineBody"></div>
    </section>
    <details class="external-coverage" id="externalCoverage"><summary>采集覆盖与证据口径</summary><p>仅表示已经运行的公开来源目录和列表页；未配置或未扫描地区不代表没有相关实践。一个政府网站的承载不等于其为发文机关；“本库外候选”须核实项目地点、项目主体及本库重合情况。标注「与本库重合」的记录只做标记、不从外部库删除，其中由案名地点后缀推定的重合已注明为派生判定，需人工复核。</p><ul>${meta.sourceCoverage.map(row => `<li><strong>${esc(row.region)}</strong>：${esc(row.status === 'scanned' ? '已扫描' : row.status === 'attempted-no-body' ? '尝试但未取得正文' : '尚未配置')} · ${esc(row.sources.join('、') || '无启用来源')} · 列表页 ${esc(row.listPages)} · 正文 ${esc(row.bodyArticles)} · 元数据 ${esc(row.metadataOnly)} · 错误 ${esc(row.errors)}</li>`).join('')}</ul><p>提取正文不代表完整原文。摘录为自动选取的原文片段，未核验完整性；政策文件和实践候选分开标记。转载不作为独立佐证。采集日期不等于发布日期。</p></details>
  </main></div></div>`;
}

function resultCard(hit, number) {
  const record = hit.record; const external = record.external; const part = record.parts?.[hit.partIndex];
  const practice = (external.practices || []).map(item => [item.locality?.label, item.locality?.province, item.locality?.city, item.locality?.county, item.projectName].filter(Boolean).join(' · ')).filter(Boolean);
  const excerpt = external.essentialExcerpt?.segments?.slice(0,2).map(item => item.text).join(' … ') || hit.snippet || '尚无可显示原文摘录。';
  const sourceLine = external.declaredSource?.name ? `页面标注来源：${external.declaredSource.name}` : '页面未明确标注来源';
  const date = external.published?.value || '发布日期未披露';
  const coverage = record.coverage === 'extracted' ? '已提取 · 未核验完整' : '仅有元数据';
  const allRelated = hit.groupRecords?.length > 1 ? `<details class="external-reposts"><summary>${hit.groupRecords.length} 个相同文本发布页</summary><ul>${hit.groupRecords.map(item => `<li><a href="${esc(safeUrl(item.url))}" data-action="open" data-url="${esc(safeUrl(item.url))}">${esc(item.external.host.siteName)} · ${esc(item.title)}</a></li>`).join('')}</ul></details>` : '';
  return `<article class="external-card"><div class="external-card-head"><span class="external-rank">${number}</span><div><div class="external-badges"><span>${esc(labels[external.articleKind] || external.articleKind)}</span><span>${esc(labels[external.relation?.status] || external.relation?.status || '关系待核')}</span><span>${esc(coverage)}</span>${external.topics.map(topic => `<span>${esc(topic)}</span>`).join('')}</div><h3><button type="button" data-action="read" data-record="${esc(record.id)}">${marked(record.title, ui.terms)}</button></h3></div></div>
  <p class="external-card-meta"><strong>承载网站：</strong>${esc(external.host.siteName)} · ${esc(external.host.hostname)}<br><strong>${esc(sourceLine)}</strong> · ${esc(date)} · 采集 ${esc(external.lastContentCaptureAt || external.firstCapturedAt || '日期未记录')}<br><strong>实践地点：</strong>${esc(practice.join(' / ') || (external.practices?.length ? '地点待核' : '未识别具体实践'))}</p>
  <p class="external-excerpt-label">关键原文摘录 · 自动选段，未核验完整原文</p><p class="external-excerpt">${marked(excerpt, ui.terms)}</p>
  <div class="external-card-actions"><button class="external-button" data-action="read" data-record="${esc(record.id)}">查看收录正文与出处</button>${safeUrl(record.url) ? `<button class="external-button external-quiet" data-action="open" data-url="${esc(safeUrl(record.url))}">打开原始网页</button>` : ''}</div>${allRelated}</article>`;
}

function validateDates() {
  for (const key of ['from','to']) if (ui.filters[key]) {
    const value = ui.filters[key]; const date = new Date(`${value}T00:00:00Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(date.getTime()) || date.toISOString().slice(0,10) !== value) throw new RangeError('请输入有效日期。');
  }
  if (ui.filters.from && ui.filters.to && ui.filters.from > ui.filters.to) throw new RangeError('起始日期不能晚于截止日期。');
}
function collect(page) {
  ui.draft = page.querySelector('#externalQuery')?.value || '';
  for (const control of page.querySelectorAll('[data-filter]')) {
    const key = control.dataset.filter;
    ui.filters[key] = control.type === 'checkbox' ? control.checked : control.value;
  }
}
function update(page) {
  if (!index || !current(page, epoch, '')) return;
  const body = page.querySelector('#externalResultBody'); const status = page.querySelector('#externalStatus'); const error = page.querySelector('#externalError');
  if (!body || !status || !error) return;
  try {
    validateDates();
    const result = index.engine.search(ui.query, ui.filters, { offset: ui.offset, limit: PAGE_SIZE });
    latest = result; ui.terms = result.terms;
    const pages = Math.ceil(result.total / PAGE_SIZE); const number = pages ? Math.floor(ui.offset/PAGE_SIZE)+1 : 0;
    body.innerHTML = result.results.length ? `<div class="external-list">${result.results.map((hit, i) => resultCard(hit, ui.offset + i + 1)).join('')}</div><nav class="external-pagination" aria-label="域外检索结果分页"><button class="external-button" data-action="page" data-step="-1"${ui.offset===0?' disabled':''}>上一页</button><span>第 ${number} / ${pages} 页</span><button class="external-button" data-action="page" data-step="1"${ui.offset+PAGE_SIZE>=result.total?' disabled':''}>下一页</button></nav>` : `<div class="external-empty"><h3>${index.engine.records.length ? '没有匹配的已采集资料' : '尚无已发布的域外资料快照'}</h3><p>${index.engine.records.length ? '可减少关键词或取消筛选。此客户端不会实时抓取网页；本次快照来源和范围列于下方。' : '需先在开发维护端执行外部来源采集、审核并发布快照，再重新生成应用安装包。'}</p></div>`;
    status.textContent = `共 ${result.total} 个去重发布组 · ${result.results.length ? `显示 ${ui.offset+1}–${ui.offset+result.results.length} 条` : '无结果'} · ${result.elapsedMs.toFixed(1)} ms`;
    error.hidden = true; error.textContent = '';
  } catch (failure) {
    latest = null; body.innerHTML = `<div class="external-empty"><h3>本次检索未执行</h3><p>请修正查询或日期条件；不会继续显示旧结果。</p></div>`;
    status.textContent = '检索条件无效。'; error.hidden = false; error.textContent = msg(failure);
  }
}

function reader(record) {
  const ext = record.external;
  const excerpts = ext.essentialExcerpt?.segments || [];
  const paragraphHtml = ext.paragraphs.map(paragraph => {
    const topicTerms = ext.topicMatches.filter(item => item.field === 'body' && item.paragraphId === paragraph.id).map(item => item.term);
    const terms = ui.terms.length ? ui.terms : topicTerms;
    const selected = excerpts.filter(item=>item.paragraphId===paragraph.id).map(item=>`<span class="external-excerpt-source">关键摘录：${esc(item.text)}</span>`).join('');
    return `<section class="external-paragraph" id="${esc(record.id)}-${esc(paragraph.id)}"><span class="external-paragraph-id">${esc(paragraph.id)}</span><p>${marked(paragraph.text, terms)}</p>${selected}</section>`;
  }).join('');
  const source = ext.declaredSource?.name ? esc(ext.declaredSource.name) : '页面未明确标注';
  const warnings = [...(ext.quality?.warnings || []), ext.quality?.review === 'pending' ? '实践判定仍待人工复核' : ''].filter(Boolean);
  return `<div class="external-reader-shell"><nav class="external-reader-bar"><button class="external-button" data-action="back">返回域外检索</button>${safeUrl(record.url)?`<button class="external-button external-primary" data-action="open" data-url="${esc(safeUrl(record.url))}">打开原始网页</button>`:''}</nav><article class="external-reader"><p class="external-eyebrow">原文提取与来源记录</p><h1>${marked(record.title, ui.terms)}</h1><dl><div><dt>承载网站</dt><dd>${esc(ext.host.siteName)} · ${esc(ext.host.hostname)}</dd></div><div><dt>页面标注来源</dt><dd>${source}</dd></div><div><dt>发布机关</dt><dd>${esc(ext.issuer?.name || '未能确认')}</dd></div><div><dt>发布日期</dt><dd>${esc(ext.published?.value || '未披露')} · 精度 ${esc(ext.published?.precision || '未知')}</dd></div><div><dt>主题族</dt><dd>${ext.topics.map(esc).join('、') || '无正文命中'}</dd></div><div><dt>判定状态</dt><dd>${esc(labels[ext.relation?.status]||ext.relation?.status||'待核')} · ${esc(labels[ext.articleKind]||ext.articleKind)}</dd></div><div><dt>页面地址</dt><dd><a href="${esc(safeUrl(record.url))}" data-action="open" data-url="${esc(safeUrl(record.url))}">${esc(record.url)}</a></dd></div><div><dt>正文哈希</dt><dd>${esc(ext.textSha256 || '无')}</dd></div></dl><aside class="external-warning"><strong>覆盖说明：</strong>正文由本地规则从网页提取，未核验完整性；以下摘录是原文选段，不是摘要改写。站点、原文标注来源和发文机关彼此不同，未核实的信息已留空。${warnings.length?`<br><strong>待核事项：</strong>${esc(warnings.join('；'))}`:''}</aside><section class="external-article-text"><h2>已提取网页正文</h2>${paragraphHtml || '<p>未取得可检索正文，仅保留发现线索元数据。</p>'}</section><button class="external-button" data-action="back">返回域外检索</button></article></div>`;
}

const ONLINE_STATUS = {
  ok: '已取回条目', partial: '部分取回（超时或中断截断）', handoff: '仅跳转（检索页由脚本渲染）', 'query-not-applied': '站内检索未响应关键词',
  'no-results': '未解析到条目', 'http-error': '站点返回错误', timeout: '超时', failed: '请求失败', blocked: '域名不在白名单', cancelled: '已取消',
};

function onlineSourceRow(source) {
  const label = ONLINE_STATUS[source.status] || source.status;
  const sample = source.sampleTitles?.length ? `<p class="external-help">页面返回但与关键词无关，例如：${esc(source.sampleTitles[0])}</p>` : '';
  const items = source.results?.length
    ? `<ul class="external-online-list">${source.results.map(row => `<li><a href="${esc(safeUrl(row.url))}" data-action="online-open" data-url="${esc(safeUrl(row.url))}">${esc(row.title)}</a></li>`).join('')}</ul>`
    : '';
  const link = safeUrl(source.searchPage) ? `<a href="${esc(safeUrl(source.searchPage))}" data-action="online-open" data-url="${esc(safeUrl(source.searchPage))}">在该站检索页打开</a>` : '';
  return `<details class="external-online-source"><summary><strong>${esc(source.siteName)}</strong> · ${esc(source.region)} · <span class="external-online-state">${esc(label)}</span>${source.results?.length ? ` · ${source.results.length} 条` : ''}</summary>${items}${sample}<p class="external-help">${link}${source.reason ? ` · 说明：${esc(source.reason)}` : ''}</p></details>`;
}

function onlineBody() {
  if (!online.result) return '';
  const { result } = online;
  const cacheNote = result.cachedAt ? ` · 缓存于 ${esc(new Date(result.cachedAt).toLocaleTimeString('zh-CN'))}（临时文件夹缓存，程序退出时自动清除）` : '';
  const header = `<p class="external-help">检索词「${esc(result.query)}」${result.queries?.length ? ` · 同义扩展轮询：${esc(result.queries.join('、'))}` : ''} · 来源 ${esc(result.totals?.sources ?? 0)} 个 · 取回条目 ${esc(result.totals?.results ?? 0)} 条 · 仅跳转 ${esc(result.totals?.handoffOnly ?? 0)} 个${result.timedOut ? ' · <span class="external-online-warn">整体超时，仅含已完成来源</span>' : ''}${cacheNote}</p>`;
  /* 在线结果分页渲染（0.6.2：一次渲染全部卡片在条目增多后会卡） */
  const all = result.results || [];
  const totalPages = Math.ceil(all.length / ONLINE_PAGE_SIZE);
  const offset = Math.min(online.offset, Math.max(0, (totalPages - 1) * ONLINE_PAGE_SIZE));
  const pageRows = all.slice(offset, offset + ONLINE_PAGE_SIZE);
  const pagination = totalPages > 1
    ? `<nav class="external-pagination" aria-label="在线结果分页"><button class="external-button" data-action="online-page" data-step="-1"${offset === 0 ? ' disabled' : ''}>上一页</button><span>第 ${Math.floor(offset / ONLINE_PAGE_SIZE) + 1} / ${totalPages} 页 · 共 ${all.length} 条</span><button class="external-button" data-action="online-page" data-step="1"${offset + ONLINE_PAGE_SIZE >= all.length ? ' disabled' : ''}>下一页</button></nav>`
    : '';
  const results = pageRows.length
    ? `<div class="external-online-results"><h3>在线取回的条目（未核验）</h3>${pageRows.map(row => `<article class="external-online-card"><h4><a href="${esc(safeUrl(row.url))}" data-action="online-open" data-url="${esc(safeUrl(row.url))}">${esc(row.title)}</a></h4><p class="external-help">${esc(row.siteName)} · ${esc(row.region)}${row.alsoFrom?.length ? ` · 亦见于：${esc(row.alsoFrom.join('、'))}` : ''}${row.matchedTerms?.length ? ` · 命中：${esc(row.matchedTerms.join('、'))}` : ''}</p></article>`).join('')}${pagination}</div>`
    : '<p class="external-help">本次没有站点能在服务端返回可解析的条目。逐来源状态见下。</p>';
  /* 仅跳转来源按指向分别列条：一条一个检索入口，显示网址与来源概述，浏览器打开即可见结果 */
  const handoffs = (result.sources || []).filter(source => source.status === 'handoff' && safeUrl(source.searchPage));
  const handoffList = handoffs.length
    ? `<div class="external-online-results"><h3>仅跳转来源（浏览器打开即得结果）</h3>${handoffs.map(source => `<article class="external-online-card"><h4><a href="${esc(safeUrl(source.searchPage))}" data-action="online-open" data-url="${esc(safeUrl(source.searchPage))}">${esc(source.siteName)}</a></h4><p class="external-help">${esc(source.region)}${source.summary ? ` · ${esc(source.summary)}` : ''}<br>${esc(source.searchPage)}</p></article>`).join('')}</div>`
    : '';
  return header + results + handoffList + `<div class="external-online-sources">${result.sources.map(onlineSourceRow).join('')}</div>`;
}

function renderOnline(page) {
  const status = page.querySelector('#externalOnlineStatus');
  const body = page.querySelector('#externalOnlineBody');
  if (!status || !body) return;
  if (online.busy) {
    const progress = online.progress;
    /* P2-2：状态改为「进度条 + 计数」，并用警示色区分 partial（部分取回）与正常。 */
    const done = progress?.done ?? 0;
    const total = progress?.total ?? 0;
    const pct = total ? Math.min(100, Math.round((done / total) * 100)) : 0;
    /* 只要本轮有任一来源非 ok（超时/中断/错误），进度条就用警示色，不与顺利完事同色 */
    const partial = online.hadPartial;
    status.textContent = progress
      ? `正在检索…已完成 ${done}/${total} 个来源，已取回 ${progress.results} 条`
      : '正在向已批准站点发起检索…';
    body.innerHTML = `<div class="external-online-progress${partial ? ' is-partial' : ''}">
        <div class="external-online-progress-bar"><span class="external-online-progress-fill" style="width:${pct}%"></span></div>
        <p class="external-online-progress-label">${progress
          ? `已完成 ${done}/${total} 个来源 · 已取回 ${progress.results} 条 · 最近：${esc(progress.last.siteName)} · ${esc(ONLINE_STATUS[progress.last.status] || progress.last.status)}`
          : '正在向已批准站点发起检索…'}</p>
      </div>
      <p class="external-online-sources-toolbar"><button class="external-button external-quiet" type="button" data-action="online-cancel">停止检索（保留已取回部分）</button></p>`;
    return;
  }
  if (online.showSources) {
    const closeButton = `<p class="external-online-sources-toolbar"><button class="external-button external-quiet" type="button" data-action="online-close-sources">关闭来源清单</button></p>`;
    if (online.sources) {
      status.textContent = `已批准来源 ${online.sources.adapters.length} 个，域名白名单 ${online.sources.hosts.length} 个。`;
      body.innerHTML = `${closeButton}<div class="external-online-sources">${online.sources.adapters.map(item => `<p class="external-help"><strong>${esc(item.siteName)}</strong> · ${esc(item.region)} · 模式 ${esc(item.mode)} · 验证 ${esc(item.verified)}</p>`).join('')}<p class="external-help">允许访问的域名：${esc(online.sources.hosts.join('、'))}</p></div>`;
    } else {
      status.textContent = '正在读取来源清单…';
      body.innerHTML = `${closeButton}<p class="external-help">来源清单读取中…</p>`;
    }
    return;
  }
  if (!isDesktop) { status.textContent = '网页端可使用“必应限定政府网站”；实时多站聚合检索仅在桌面应用中可用。'; body.innerHTML = ''; return; }
  status.textContent = online.result ? '' : '尚未发起在线检索。';
  body.innerHTML = onlineBody();
}

let unsubscribeProgress = null;

async function runOnlineSearch(page) {
  if (online.busy) return;
  const input = page.querySelector('#externalOnlineQuery');
  const query = String(input?.value || '').trim();
  if (query.length < 2) { notify('请至少输入 2 个字符。', 'warn'); return; }
  /* 逐来源进度订阅：主进程每完成一个来源推送一次，渲染层只读展示 */
  if (!unsubscribeProgress) {
    unsubscribeProgress = onSearchOnlineProgress(progress => {
      online.progress = progress;
      if (progress?.last && progress.last.status !== 'ok') online.hadPartial = true;
      if (online.busy && current(page, epoch, '')) renderOnline(page);
    });
  }
  online.busy = true; online.showSources = false; online.progress = null; online.offset = 0; online.hadPartial = false; renderOnline(page);
  try {
    const result = await searchOnline(query);
    online.result = result.ok ? result : { query, sources: [], results: [], totals: { sources: 0, results: 0, handoffOnly: 0 } };
    online.query = query;
    if (!result.ok) notify(`在线检索未完成：${result.reason || '未知原因'}`, 'warn');
  } catch (error) {
    online.result = null;
    notify(msg(error), 'error');
  } finally {
    online.busy = false; online.progress = null;
    renderOnline(page);
  }
}

function bind(page) {
  page.onkeydown = event => {
    if (event.key !== 'Escape' || !current(page, epoch, '')) return;
    if (!ui.query && !ui.draft) return;
    event.preventDefault();
    const input = page.querySelector('#externalQuery');
    if (input) input.value = '';
    ui.query = ui.draft = '';
    ui.offset = 0;
    update(page);
  };
  page.oninput = event => { if (event.target.id === 'externalQuery' && getState().view === VIEW.EXTERNAL) ui.draft = event.target.value; };
  page.onsubmit = event => {
    if (event.target.id === 'externalOnlineForm') { event.preventDefault(); if (!current(page, epoch, '')) return; void runOnlineSearch(page); return; }
    if (event.target.id !== 'externalSearchForm') return;
    event.preventDefault(); if (!current(page, epoch, '')) return; collect(page); ui.query=ui.draft; ui.offset=0; update(page);
  };
  page.onchange = event => { if (!event.target.matches('[data-filter]') || !current(page, epoch, '')) return; collect(page); ui.query=ui.draft; ui.offset=0; update(page); };
  page.onclick = event => {
    const control = event.target.closest('[data-action]'); if (!control || !page.contains(control)) return;
    const state=getState(); const id=String(state.viewParams?.recordId||''); const token=epoch;
    if (!current(page,token,id)) return;
    const action=control.dataset.action;
    if(action==='back') { navigate(VIEW.EXTERNAL,{}); return; }
    if(action==='retry') { loading=null; index=null; void renderExternalSearch(getState()); return; }
    if(action==='page'&&!id&&latest) { collect(page); ui.query=ui.draft; ui.offset=Math.max(0,ui.offset+Number(control.dataset.step)*PAGE_SIZE); update(page); return; }
    if(action==='read'&&!id) { collect(page); ui.query=ui.draft; ui.scrollTop=window.scrollY; ui.focus=control.dataset.record; navigate(VIEW.EXTERNAL,{recordId:control.dataset.record}); return; }
    if(action==='open'||action==='online-open') { event.preventDefault(); const url=safeUrl(control.dataset.url); if(!url) { notify('仅允许打开安全的 HTTPS 原始网页。','warn'); return; } void openExternal(url).then(result=>{ if(result===false||result?.ok===false) throw new Error('无法打开原始网页。'); }).catch(error=>notify(msg(error),'error')); return; }
    if(action==='bing-gov') { event.preventDefault(); const query=String(page.querySelector('#externalOnlineQuery')?.value||'').trim(); if(query.length<2){notify('请至少输入 2 个字符。','warn');page.querySelector('#externalOnlineQuery')?.focus();return;} const url=`https://www.bing.com/search?q=${encodeURIComponent(`site:gov.cn ${query}`)}`; void openExternal(url); return; }
    if(action==='online-sources') { online.showSources=true; online.sources=null; renderOnline(page); void getOnlineSources().then(result=>{ if(!current(page,token,id)) return; online.sources=result; renderOnline(page); }).catch(error=>notify(msg(error),'error')); return; }
    if(action==='online-close-sources') { online.showSources=false; renderOnline(page); return; }
    if(action==='online-cancel') { void cancelOnlineSearch(); return; }
    if(action==='online-page') { online.offset=Math.max(0,online.offset+Number(control.dataset.step)*ONLINE_PAGE_SIZE); renderOnline(page); return; }
  };
}

export async function renderExternalSearch(state) {
  const page=$('pageExternal'); if(!page||state.view!==VIEW.EXTERNAL)return;
  const token=++epoch; const id=String(state.viewParams?.recordId||'');
  page.dataset.externalMode='loading'; page.setAttribute('aria-busy','true'); page.innerHTML=`<section class="external-loading"><p>正在读取随应用发布的域外资料…</p>${skeletonHtml()}</section>`; bind(page);
  try {
    const result=await load(); if(!current(page,token,id))return;
    if(id) {
      const record=result.engine.get(id); if(!record) throw new Error('该域外记录不存在于当前快照。');
      page.innerHTML=reader(record); page.dataset.externalMode='reader'; bind(page); page.removeAttribute('aria-busy'); page.scrollTop=0; window.scrollTo({top:0,behavior:'auto'}); return;
    }
    page.innerHTML=shell(result.meta,result.engine.facets()); page.dataset.externalMode='search'; bind(page); page.removeAttribute('aria-busy'); renderOnline(page);
    if(ui.restore) ui.restore=false;
    update(page);
    if(ui.scrollTop) window.scrollTo({top:ui.scrollTop,behavior:'auto'});
    const input=page.querySelector('#externalQuery'); if(ui.pendingFocus){ui.pendingFocus=false;input?.focus();}
  }catch(error){
    if(!current(page,token,id))return;
    page.dataset.externalMode='error';page.removeAttribute('aria-busy');page.innerHTML=`<section class="external-loading" role="alert"><h1>域外检索暂不可用</h1><p>${esc(msg(error))}</p><button class="external-button external-primary" data-action="retry">重试</button>${id?'<button class="external-button" data-action="back">返回检索</button>':''}</section>`;bind(page);
  }
}

export function focusExternalSearch(){ui.pendingFocus=true;if(getState().view!==VIEW.EXTERNAL)return;const input=$('pageExternal')?.querySelector('#externalQuery');if(input){ui.pendingFocus=false;input.focus();}}
