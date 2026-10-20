/* ================================================================
 * 组件：相关资料总览页（二级栏目）
 * ----------------------------------------------------------------
 * 汇总全部 47 个案例的原始资料来源，提供按批次 / 省份 / 来源分类 /
 * 关键词的索引与筛选，每个案例可跳转到各自的「查看相关资料」页。
 *
 * 结构与政策工具总览页刻意保持一致（同一套 .pg-* / .ov-* / .mech-* 类），
 * 两个二级栏目相邻浏览时观感与手感统一，不再另造一套样式。
 * ================================================================ */

import { $, esc, delegate } from '../core/dom.js';
import { CASES as SRC_CASES, SOURCES_META } from '../../data/sources-data.js';
import { groupByBatch } from '../../data/policy.js';
import { goCaseSources, goLibrary, VIEW } from '../core/state.js';

const I_SPARK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.5l2.2 6.1 6.3.3-4.9 4 1.6 6.1L12 15.6l-5.2 3.4 1.6-6.1-4.9-4 6.3-.3z" fill="currentColor" opacity=".9"/></svg>';
const I_ARROW_R = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const I_SEARCH = '<svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M8.4.4c-4.408 0-8 3.591-8 8s3.592 8 8 8c1.918 0 3.678-.68 5.058-1.811l4.777 4.777a.8.8 0 1 0 1.131-1.132l-4.777-4.776A7.958 7.958 0 0 0 16.4 8.4c0-4.409-3.59-8-8-8zm0 1.6c3.544 0 6.4 2.856 6.4 6.4 0 3.544-2.856 6.4-6.4 6.4A6.388 6.388 0 0 1 2 8.4C2 4.856 4.856 2 8.4 2z" fill="currentColor"/></svg>';

/* 总览页没有单一案例可对应，沿用首页那张背景图，保持同一视觉基调。
   用本地资源：原外链图床已失效（403），本图即原背景图（航拍绿色梯田），
   已从 Electron 缓存恢复并固化为 assets/hero.jpg。 */
const HOME_HERO_IMG = 'assets/hero.jpg';

/* 页内筛选状态 */
const UI_BASE = { batch: '', province: '', category: '', query: '', sort: 'id' };
let ui = { ...UI_BASE };

/** 离开总览页时清空页内筛选，避免返回时残留 */
export function resetSourcesIndexState() {
  ui = { ...UI_BASE };
}

/* 案例 → 来源条目（合并批次/省份，来源统计取自 sources-data） */
const SRC_BY_ID = new Map(SRC_CASES.map(c => [c.id, c]));

function entries() {
  return SRC_CASES.map(s => ({
    id: s.id,
    name: s.name,
    items: s.counts.items,
    excerpts: s.counts.excerpts,
    sections: s.sections.length,
    byCategory: s.counts.byCategory || {},
  }));
}
const ENTRY_BY_ID = new Map(entries().map(e => [e.id, e]));

/** 按批次分组（沿用政策数据的批次划分，保证两个栏目分组一致） */
function groups() {
  return groupByBatch()
    .filter(g => g.cases.length)
    .map(g => ({
      batch: g.batch,
      cases: g.cases.map(c => {
        const e = ENTRY_BY_ID.get(c.id);
        return e ? { ...e, batch: c.batch, province: c.province } : null;
      }).filter(Boolean),
    }))
    .filter(g => g.cases.length);
}

export function renderSourcesIndex(state) {
  const page = $('pageSources');
  if (!page) return;
  if (state.view !== VIEW.SOURCES) return;

  ui = { ...UI_BASE };

  page.innerHTML = `
    ${renderHero()}
    <div class="pg-main">
      ${renderStats()}
      ${renderCategoryDist()}
      ${renderToolbar()}
      <div id="srcBody">${renderBody()}</div>
    </div>`;

  bind(page);
  window.scrollTo({ top: 0, behavior: 'auto' });
}

/* ---------- 页头 ---------- */

function renderHero() {
  const m = SOURCES_META;
  return `
  <div class="pg-hero pg-hero--photo" style="--cover:url('${HOME_HERO_IMG}')">
    <div class="pg-hero-glow"></div>
    <div class="pg-hero-grid"></div>
    <div class="pg-hero-inner">
      <div class="pg-breadcrumb">
        <button type="button" data-nav="library">案例库首页</button>
        <span class="sep">/</span>
        <span class="current">相关资料</span>
      </div>
      <p class="pg-eyebrow">${I_SPARK}原始资料来源 · 总览</p>
      <h1 class="pg-title">全域土地综合整治试点案例<br />原始资料来源索引</h1>
      <p class="pg-sub">
        逐案收录 ${m.totalCases} 个试点案例的权威公开来源共 ${m.totalItems} 条，
        涵盖部级典型案例报道、各级政府官方通报与媒体报道；其中 ${m.totalExcerpts} 条附核心资料全文摘录，
        并可逐条回溯官方原文。
      </p>
      <div class="pg-metrics">
        <div class="pg-metric"><b>${m.totalCases}</b><span>试点案例</span></div>
        <div class="pg-metric"><b>${m.totalItems}</b><span>来源条目</span></div>
        <div class="pg-metric"><b>${m.byCategory['政府官方通报'] || 0}</b><span>政府官方通报</span></div>
        <div class="pg-metric"><b>${m.totalExcerpts}</b><span>全文摘录</span></div>
      </div>
    </div>
  </div>`;
}

/* ---------- 统计卡 ---------- */

function renderStats() {
  const m = SOURCES_META;
  const attach = (m.byKind && m.byKind.attachment) || 0;
  const video = (m.byKind && m.byKind.video) || 0;
  return `
  <section class="pg-section">
    <div class="ov-stats">
      <div class="ov-stat">
        <b>${m.totalItems}</b><span>来源条目合计</span>
        <small>覆盖 ${m.totalCases} 个试点案例</small>
      </div>
      <div class="ov-stat teal">
        <b>${m.totalExcerpts}</b><span>核心资料全文摘录</span>
        <small>供编码分析与溯源</small>
      </div>
      <div class="ov-stat gold">
        <b>${m.byCategory['政府官方通报'] || 0}</b><span>政府官方通报</span>
        <small>国家 / 省 / 市 / 县各级</small>
      </div>
      <div class="ov-stat">
        <b>${attach + video}</b><span>附件与音视频</span>
        <small>文件直链 ${attach} · 音视频 ${video}</small>
      </div>
    </div>
    <div class="doc-foot" style="margin-top:14px;border-radius:var(--radius-sm);border:1px solid var(--line-soft)">
      <b>关于来源的可追溯性</b>：${m.totalItems} 条来源均给出官方原文链接，点击即在系统浏览器中打开；
      其中 ${m.totalExcerpts} 条另附核心资料全文摘录，可在应用内直接阅读。
      本应用不再内置网页快照，以免快照过期造成误读，一切以官方原文为准。
    </div>
  </section>`;
}

/* ---------- 来源分类构成 ---------- */

function renderCategoryDist() {
  const cats = SOURCES_META.categories;
  const max = Math.max(...cats.map(c => c.count), 1);

  return `
  <section class="pg-section">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">壹</span>来源分类构成</h2>
      <span class="pg-section-note">全部 ${SOURCES_META.totalItems} 条来源按类别归类 · 点击可筛选案例</span>
    </div>
    <div class="mech-dist">
      ${cats.map(c => `
        <button type="button" class="mech-row" data-cat="${esc(c.name)}" style="border:none;background:none;padding:0;text-align:left;width:100%">
          <span class="mech-name">
            <span class="no">${c.count}</span>
            <span class="tx">${esc(c.name)}</span>
          </span>
          <span class="mech-track">
            <span class="mech-fill" style="width:${(c.count / max * 100).toFixed(1)}%"></span>
          </span>
          <span class="mech-val"><b>${c.count}</b> 条 · ${Math.round(c.count / SOURCES_META.totalItems * 100)}%</span>
        </button>`).join('')}
    </div>
    <div class="doc-foot" style="margin-top:14px;border-radius:var(--radius-sm);border:1px solid var(--line-soft)">
      分类说明：${cats.map(c => `<b>${esc(c.name)}</b>（${esc(c.desc)}）`).join('　')}
    </div>
  </section>`;
}

/* ---------- 筛选条 ---------- */

function renderToolbar() {
  const provinces = [...new Set(entries().map(e => (ENTRY_BY_ID.get(e.id) || {}).province).filter(Boolean))];
  /* 省份从批次分组里取，避免与政策栏目顺序不一致 */
  const provList = [];
  groups().forEach(g => g.cases.forEach(c => {
    if (c.province && !provList.includes(c.province)) provList.push(c.province);
  }));

  const batchChips = [
    `<button type="button" class="pg-chip active" data-batch="">全部批次<span class="n">${SRC_CASES.length}</span></button>`,
    ...groups().map(g =>
      `<button type="button" class="pg-chip" data-batch="${esc(g.batch)}">${esc(g.batch)}<span class="n">${g.cases.length}</span></button>`),
  ].join('');

  const provChips = [
    `<button type="button" class="pg-chip active" data-prov="">全部地区</button>`,
    ...provList.map(p => `<button type="button" class="pg-chip" data-prov="${esc(p)}">${esc(p)}</button>`),
  ].join('');

  return `
  <section class="pg-section">
    <div class="pg-section-head">
      <h2 class="pg-section-title"><span class="idx">贰</span>案例索引</h2>
      <span class="pg-section-note" id="srcCount"></span>
    </div>

    <div class="pg-toolbar">
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">批次</span>
        <div class="pg-chips" id="srcBatch">${batchChips}</div>
      </div>
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">地区</span>
        <div class="pg-chips" id="srcProv">${provChips}</div>
      </div>
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">排序</span>
        <div class="pg-chips" id="srcSort">
          <button type="button" class="pg-chip active" data-sort="id">按案例序号</button>
          <button type="button" class="pg-chip" data-sort="items">按来源条数</button>
          <button type="button" class="pg-chip" data-sort="excerpts">按摘录篇数</button>
        </div>
      </div>
      <div class="pg-toolbar-row">
        <span class="pg-toolbar-label">检索</span>
        <label class="pg-search">
          <span class="s-icon">${I_SEARCH}</span>
          <input type="text" id="srcQuery" placeholder="检索案例名称 / 省份…" autocomplete="off" />
        </label>
      </div>
    </div>
  </section>`;
}

/* ---------- 案例索引主体 ---------- */

function filterCases() {
  const q = ui.query.trim();
  const all = [];
  groups().forEach(g => g.cases.forEach(c => all.push(c)));

  return all.filter(e => {
    if (ui.batch && e.batch !== ui.batch) return false;
    if (ui.province && e.province !== ui.province) return false;
    if (ui.category && !(e.byCategory[ui.category] > 0)) return false;
    if (q && !(e.name.includes(q) || e.province.includes(q) || e.id.includes(q))) return false;
    return true;
  });
}

/** 排序：默认按案例序号，也可按来源条数 / 摘录篇数降序 */
function sortCases(list) {
  if (ui.sort === 'items') return [...list].sort((a, b) => b.items - a.items || a.id.localeCompare(b.id));
  if (ui.sort === 'excerpts') return [...list].sort((a, b) => b.excerpts - a.excerpts || a.id.localeCompare(b.id));
  return list;
}

function renderBody() {
  const list = sortCases(filterCases());
  const countEl = $('srcCount');
  if (countEl) countEl.textContent = `共 ${list.length} 个案例`;
  if (!list.length) {
    return `<div class="pg-empty"><strong>没有符合条件的案例</strong>试试调整批次、地区或检索词。</div>`;
  }

  /* 无筛选条件时按批次分组展示，否则平铺 */
  const grouped = !ui.batch && !ui.province && !ui.category && ui.sort === 'id' && !ui.query.trim();
  if (grouped) {
    const byId = new Map(list.map(e => [e.id, e]));
    return groups().map(g => {
      const cs = g.cases.map(c => byId.get(c.id)).filter(Boolean);
      if (!cs.length) return '';
      return `
        <div class="ov-group">
          <div class="ov-group-head">
            <span class="ov-group-title"><span class="dot"></span>${esc(g.batch)}</span>
            <span class="ov-group-line"></span>
            <span class="ov-group-count">${cs.length} 个案例</span>
          </div>
          <div class="ov-grid">${cs.map(card).join('')}</div>
        </div>`;
    }).join('');
  }

  return `<div class="ov-grid">${list.map(card).join('')}</div>`;
}

function card(e) {
  const cats = SOURCES_META.categories
    .filter(c => e.byCategory[c.name] > 0)
    .map(c => `<span class="ov-mini">${esc(c.name)} ${e.byCategory[c.name]}</span>`)
    .join('');

  return `
  <button type="button" class="ov-card" data-case="${e.id}">
    <div class="ov-card-top">
      <span class="ov-idx">${e.id}</span>
      <span class="ov-card-name">${esc(e.name)}</span>
    </div>
    <div class="ov-card-meta">
      <span class="ov-mini">${esc(e.batch)}</span>
      <span class="ov-mini">${esc(e.province)}</span>
      ${cats}
    </div>
    <div class="ov-card-stats">
      <span class="ov-card-stat"><b>${e.items}</b><span>来源条目</span></span>
      <span class="ov-card-stat"><b>${e.byCategory['政府官方通报'] || 0}</b><span>政府通报</span></span>
      <span class="ov-card-stat"><b class="gold">${e.excerpts}</b><span>全文摘录</span></span>
    </div>
    <span class="ov-card-go">查看相关资料 ${I_ARROW_R}</span>
  </button>`;
}

/* ---------- 交互 ---------- */

function bind(page) {
  delegate(page, '[data-nav]', 'click', () => goLibrary());
  delegate(page, '[data-case]', 'click', (_e, el) => goCaseSources(el.dataset.case));

  /* 分类分布条 → 筛选案例（再次点击取消） */
  delegate(page, '.mech-row[data-cat]', 'click', (_e, row) => {
    const val = row.dataset.cat;
    ui.category = ui.category === val ? '' : val;
    page.querySelectorAll('.mech-row').forEach(r =>
      r.classList.toggle('active', r.dataset.cat === ui.category));
    refresh(page);
  });

  bindChips(page, '#srcBatch', 'batch', 'batch');
  bindChips(page, '#srcProv', 'province', 'prov');

  delegate(page, '#srcSort .pg-chip', 'click', (_e, btn) => {
    ui.sort = btn.dataset.sort;
    page.querySelectorAll('#srcSort .pg-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    refresh(page);
  });

  const input = page.querySelector('#srcQuery');
  if (input) {
    input.addEventListener('input', () => {
      ui.query = input.value;
      refresh(page);
    });
  }
}

/** 绑定一组筛选胶囊 */
function bindChips(page, sel, key, attr) {
  delegate(page, `${sel} .pg-chip`, 'click', (_e, btn) => {
    ui[key] = btn.dataset[attr] || '';
    page.querySelectorAll(`${sel} .pg-chip`).forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    refresh(page);
  });
}

function refresh(page) {
  /* renderBody 内部会同步更新 #srcCount，这里只换主体 */
  const body = page.querySelector('#srcBody');
  if (body) body.innerHTML = renderBody();
}
