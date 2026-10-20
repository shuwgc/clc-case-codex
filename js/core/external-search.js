import { createResearchIndex, parseQuery } from './research.js';

const PAGE_SIZE_DEFAULT = 20;
const valueSet = records => new Set(records.flatMap(record => record.external?.practices?.map(item => item.locality?.province).filter(Boolean) || []));
function dateInterval(value) {
  const match = String(value || '').match(/^(\d{4})(?:-(\d{1,2})(?:-(\d{1,2}))?)?/);
  if (!match) return null;
  const year = Number(match[1]); const month = Number(match[2] || 0); const day = Number(match[3] || 0);
  if (!year || (match[2] && (month < 1 || month > 12)) || (match[3] && (day < 1 || day > 31))) return null;
  const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const encode = (m, d) => year * 10000 + m * 100 + d;
  return [encode(month || 1, day || 1), encode(month || 12, day || days[(month || 12) - 1])];
}
function within(record, filters) {
  const ext = record.external || {};
  if (filters.family && !ext.topics?.includes(filters.family)) return false;
  if (filters.articleKind && ext.articleKind !== filters.articleKind) return false;
  if (filters.coverage && record.coverage !== filters.coverage) return false;
  if (filters.host && ext.host?.siteId !== filters.host && ext.host?.hostname !== filters.host) return false;
  if (filters.relation) {
    if (filters.relation === 'show-all') { /* 显式要求含与本库重合的记录 */ }
    else if (filters.relation === 'known-case') {
      if (!['known-case', 'mixed'].includes(ext.relation?.status) && !ext.practices?.some(item => ['known-case', 'mixed'].includes(item.relation?.status))) return false;
    } else if (!ext.practices?.some(item => item.relation?.status === filters.relation) && ext.relation?.status !== filters.relation) return false;
  } else if (!['known-case', 'mixed'].includes(ext.relation?.status)) { /* 默认显示非重合记录 */ }
  else return false;
  if (filters.province) {
    // Same practice must satisfy locality and relation filters; never combine different projects in one article.
    const practices = ext.practices || [];
    const localityMatches = item => item.locality?.province === filters.province;
    const relationMatches = item => !filters.relation || filters.relation === 'show-all' || item.relation?.status === filters.relation;
    if (!practices.length || !practices.some(item => localityMatches(item) && relationMatches(item))) return false;
  }
  if (filters.from || filters.to) {
    const date = dateInterval(record.date);
    if (!date) { if (!filters.includeUndated) return false; }
    else {
      const lower = filters.from ? dateInterval(filters.from)?.[0] : null;
      const upper = filters.to ? dateInterval(filters.to)?.[1] : null;
      if (lower && date[1] < lower) return false;
      if (upper && date[0] > upper) return false;
    }
  }
  return true;
}

export function createExternalSearch(records = []) {
  if (!Array.isArray(records)) throw new TypeError('External search corpus must be an array.');
  const index = createResearchIndex(records);
  const unique = new Map(index.records.map(record => [record.id, record]));
  return {
    records: index.records,
    get(id) { return unique.get(id) || null; },
    facets() {
      const topics = new Set(); const provinces = new Set(); const hosts = new Set(); const kinds = new Set();
      const coverage = new Set(); const relation = new Set();
      for (const record of index.records) {
        for (const id of record.external?.topics || []) topics.add(id);
        for (const value of record.external?.practices?.flatMap(item => [item.locality?.province].filter(Boolean)) || []) provinces.add(value);
        if (record.external?.host?.siteId) hosts.add(record.external.host.siteId);
        if (record.external?.articleKind) kinds.add(record.external.articleKind);
        if (record.coverage) coverage.add(record.coverage);
        if (record.external?.relation?.status) relation.add(record.external.relation.status);
        for (const practice of record.external?.practices || []) if (practice.relation?.status) relation.add(practice.relation.status);
      }
      return Object.fromEntries(Object.entries({ family: topics, province: provinces, host: hosts, articleKind: kinds, coverage, relation }).map(([key, values]) => [key, [...values].sort((a, b) => String(a).localeCompare(String(b), 'zh-CN', { numeric: true }))]));
    },
    search(query, filters = {}, { offset = 0, limit = PAGE_SIZE_DEFAULT } = {}) {
      const terms = parseQuery(query);
      if (!Number.isInteger(offset) || offset < 0 || !Number.isInteger(limit) || limit < 0) throw new RangeError('Pagination offset and limit must be non-negative integers.');
      const started = globalThis.performance.now();
      // External locality/unknown-date/relation filters must run after literal candidates; native scalar province/date filters would discard recoverable multi-practice articles.
      const base = index.search(query, { mode: filters.mode || 'all', ...(filters.bodyOnly ? { bodyOnly: true } : {}) }, { offset: 0, limit: index.records.length });
      const eligible = base.results.filter(hit => within(hit.record, filters));
      const groups = new Map();
      for (const hit of eligible) {
        const cluster = hit.record.external?.clusterId || hit.record.id;
        if (!groups.has(cluster)) groups.set(cluster, []);
        groups.get(cluster).push(hit);
      }
      const results = [...groups.values()].map(hits => {
        hits.sort((a, b) => b.score - a.score || Number(b.record.external?.quality?.review === 'accepted') - Number(a.record.external?.quality?.review === 'accepted'));
        return { ...hits[0], groupRecords: hits.map(hit => hit.record) };
      }).sort((a, b) => b.score - a.score || a.record.title.localeCompare(b.record.title, 'zh-CN'));
      return { results: results.slice(offset, offset + limit), total: results.length, elapsedMs: globalThis.performance.now() - started, terms };
    },
  };
}

export { valueSet };
