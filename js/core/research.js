const normalize = value => String(value ?? '').normalize('NFKC').toLowerCase();
const isBody = part => part?.kind === 'excerpt' || part?.kind === 'archive';
const segmenter = new Intl.Segmenter('und', { granularity: 'grapheme' });
const idOrder = new Intl.Collator('en', { numeric: true, sensitivity: 'variant' });

export function parseQuery(query = '') {
  const raw = String(query ?? '');
  if (raw.length > 160) throw new RangeError('Query must not exceed 160 characters.');
  const input = normalize(raw);
  if (input.length > 160) throw new RangeError('Normalized query must not exceed 160 characters.');
  const terms = [];
  let cursor = 0;
  while (cursor < input.length) {
    if (/\s/u.test(input[cursor])) { cursor++; continue; }
    const quote = input[cursor] === '"' || input[cursor] === "'" ? input[cursor++] : '';
    const start = cursor;
    if (quote) {
      while (cursor < input.length && input[cursor] !== quote) cursor++;
      if (cursor === input.length) throw new SyntaxError('Unclosed query quote.');
      const term = input.slice(start, cursor++).trim();
      if (!term) throw new SyntaxError('Quoted terms must not be empty.');
      if (cursor < input.length && !/\s/u.test(input[cursor])) {
        throw new SyntaxError('Separate quoted terms with whitespace.');
      }
      terms.push(term);
    } else {
      while (cursor < input.length && !/\s/u.test(input[cursor])) {
        if (input[cursor] === '"') throw new SyntaxError('Start quoted terms at a word boundary.');
        cursor++;
      }
      terms.push(input.slice(start, cursor));
    }
    if (terms.length > 12) throw new RangeError('Query must not exceed 12 terms.');
  }
  return [...new Set(terms)];
}

// Grapheme offsets retain original characters when normalization expands or composes them.
function normalizedOffsets(text) {
  const normalized = normalize(text);
  const chunks = [...segmenter.segment(text)];
  const starts = [];
  const ends = [];
  let joined = '';
  for (const { segment, index } of chunks) {
    const piece = normalize(segment);
    joined += piece;
    for (let i = 0; i < piece.length; i++) {
      starts.push(index);
      ends.push(index + segment.length);
    }
  }
  if (joined.length !== normalized.length) {
    // Cross-grapheme composition, such as compatibility Hangul, changes offsets.
    // Contextual lowercasing can change letters without changing these offsets.
    starts.length = ends.length = 0;
    let previous = '';
    for (const { segment, index } of chunks) {
      const end = index + segment.length;
      const next = normalize(text.slice(0, end));
      let shared = 0;
      while (shared < previous.length && shared < next.length && previous[shared] === next[shared]) shared++;
      let start = index;
      for (let i = shared; i < starts.length; i++) start = Math.min(start, starts[i]);
      starts.length = ends.length = shared;
      for (let i = shared; i < next.length; i++) { starts.push(start); ends.push(end); }
      previous = next;
    }
  }
  return { normalized, starts, ends };
}

const escapeHtml = text => text.replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);

export function highlightText(text, terms = []) {
  const original = String(text ?? '');
  const needles = [...new Set(terms.map(normalize).filter(Boolean))];
  if (!needles.length || !original) return escapeHtml(original);
  const { normalized, starts, ends } = normalizedOffsets(original);
  const ranges = [];
  for (const term of needles) {
    let position = normalized.indexOf(term);
    while (position !== -1) {
      ranges.push([starts[position], ends[position + term.length - 1]]);
      position = normalized.indexOf(term, position + 1);
    }
  }
  ranges.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  const merged = [];
  for (const range of ranges) {
    const last = merged[merged.length - 1];
    if (last && range[0] <= last[1]) last[1] = Math.max(last[1], range[1]);
    else merged.push([...range]);
  }
  let cursor = 0;
  let html = '';
  for (const [start, end] of merged) {
    html += escapeHtml(original.slice(cursor, start)) + '<mark>' + escapeHtml(original.slice(start, end)) + '</mark>';
    cursor = end;
  }
  return html + escapeHtml(original.slice(cursor));
}

function grams(text, includeCharacters = false) {
  const result = new Set();
  if (includeCharacters || text.length === 1) {
    for (let i = 0; i < text.length; i++) result.add(text[i]);
  }
  for (let i = 0; i + 1 < text.length; i++) result.add(text.slice(i, i + 2));
  return result;
}

function intersect(sets) {
  if (!sets.length || sets.some(set => !set?.size)) return new Set();
  sets.sort((a, b) => a.size - b.size);
  return new Set([...sets[0]].filter(value => sets.every(set => set.has(value))));
}

// Only a leading date is a record date; dates mentioned in notes are not inferred.
// Partial dates represent their known year/month interval, not an invented day.
function dateInterval(value) {
  const match = normalize(value).trim().match(/^(\d{4})(?:-(\d{1,2})(?:-(\d{1,2}))?)?(?=$|[^\d-])/);
  if (!match) return null;
  const year = Number(match[1]);
  const month = match[2] ? Number(match[2]) : 0;
  const day = match[3] ? Number(match[3]) : 0;
  const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (!year || (match[2] && (month < 1 || month > 12)) || (match[3] && (day < 1 || day > days[month - 1]))) return null;
  return [year * 10000 + (month || 1) * 100 + (day || 1),
    year * 10000 + (month || 12) * 100 + (day || days[(month || 12) - 1])];
}

function snippetOf(segment, terms) {
  if (!segment) return '';
  const { text, normalized } = segment;
  if (text.length <= 180) return text;
  const hits = terms.map(term => ({ term, position: normalized.indexOf(term) })).filter(hit => hit.position >= 0);
  let anchor = hits[0];
  let strongest = -1;
  for (const hit of hits) {
    const nearby = hits.filter(other => Math.abs(other.position - hit.position) + other.term.length <= 160).length;
    const strength = nearby * 200 + hit.term.length;
    if (strength > strongest) { strongest = strength; anchor = hit; }
  }
  let start = 0;
  let end = 180;
  if (anchor) {
    const offsets = normalizedOffsets(text);
    const matchStart = offsets.starts[anchor.position];
    const matchEnd = offsets.ends[anchor.position + anchor.term.length - 1];
    const length = Math.max(180, matchEnd - matchStart);
    start = Math.max(0, Math.min(matchStart - Math.floor((length - (matchEnd - matchStart)) / 2), text.length - length));
    end = Math.min(text.length, start + length);
  }
  // Do not cut surrogate pairs at snippet boundaries.
  if (start > 0 && /[\uDC00-\uDFFF]/u.test(text[start])) start--;
  if (end < text.length && /[\uDC00-\uDFFF]/u.test(text[end])) end++;
  return (start ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
}

export function createResearchIndex(records = []) {
  const byId = new Map();
  for (const record of records) if (!byId.has(record.id)) byId.set(record.id, record);
  const uniqueRecords = [...byId.values()];
  const postings = new Map();
  const entries = uniqueRecords.map((record, recordIndex) => {
    const parts = (record.parts ?? []).map((part, partIndex) => ({
      text: String(part?.text ?? ''), normalized: normalize(part?.text), partIndex,
      body: isBody(part), weight: isBody(part) ? 10 : part?.kind === 'metadata' ? 20 : 5,
    }));
    const fields = ['title', 'caseName', 'source', 'province', 'batch', 'category'].map(field => {
      const text = String(record[field] ?? '');
      const normalized = normalize(text);
      const correspondingPart = parts.find(part => part.normalized === normalized && normalized);
      return { text: correspondingPart?.text ?? text, normalized,
        partIndex: correspondingPart?.partIndex ?? -1, body: false, weight: field === 'title' ? 1000 : 50 };
    });
    const segments = [...fields, ...parts].filter(segment => segment.normalized);
    const recordGrams = new Set();
    for (const segment of segments) for (const gram of grams(segment.normalized, true)) recordGrams.add(gram);
    for (const gram of recordGrams) {
      if (!postings.has(gram)) postings.set(gram, new Set());
      postings.get(gram).add(recordIndex);
    }
    return { record, segments, parts, hasBody: parts.some(part => part.body && part.normalized.trim()), date: dateInterval(record.date) };
  });

  return {
    records: uniqueRecords,
    get(id) { return byId.get(id); },
    search(query, filters = {}, { offset = 0, limit = 20 } = {}) {
      const started = globalThis.performance.now();
      const terms = parseQuery(query);
      const mode = filters.mode ?? 'all';
      if (mode !== 'all' && mode !== 'any') throw new RangeError('Search mode must be all or any.');
      if (!Number.isInteger(offset) || offset < 0 || !Number.isInteger(limit) || limit < 0) {
        throw new RangeError('Pagination offset and limit must be non-negative integers.');
      }
      const from = filters.from ? dateInterval(filters.from) : null;
      const to = filters.to ? dateInterval(filters.to) : null;
      if ((filters.from && !from) || (filters.to && !to)) throw new RangeError('Date bounds must start with a valid date.');
      if (from && to && from[0] > to[1]) {
        return { results: [], total: 0, elapsedMs: globalThis.performance.now() - started, terms };
      }
      let candidates;
      if (!terms.length) candidates = entries.keys();
      else {
        const termCandidates = terms.map(term => intersect([...grams(term)].map(gram => postings.get(gram))));
        candidates = mode === 'all' ? intersect(termCandidates) : new Set(termCandidates.flatMap(set => [...set]));
      }
      const matches = [];
      for (const recordIndex of candidates) {
        const entry = entries[recordIndex];
        const { record } = entry;
        if (['type', 'province', 'batch', 'caseId', 'category'].some(field => filters[field] && record[field] !== filters[field])) continue;
        if (filters.level && !(record.levels ?? []).includes(filters.level)) continue;
        if (filters.coverage && (filters.coverage === 'text'
          ? record.type !== 'source' || !entry.hasBody : record.coverage !== filters.coverage)) continue;
        if (filters.bodyOnly && !entry.hasBody) continue;
        if ((from || to) && (!entry.date || (from && entry.date[1] < from[0]) || (to && entry.date[0] > to[1]))) continue;
        const segments = filters.bodyOnly ? entry.segments.filter(segment => segment.body) : entry.segments;
        const weights = terms.map(() => 0);
        let bestSegment = entry.parts.find(part => part.normalized && (!filters.bodyOnly || part.body)) ?? segments[0];
        let bestStrength = 0;
        for (const segment of segments) {
          let strength = 0;
          terms.forEach((term, termIndex) => {
            if (segment.normalized.includes(term)) {
              weights[termIndex] = Math.max(weights[termIndex], segment.weight);
              strength += segment.weight;
            }
          });
          if (strength > bestStrength) { bestStrength = strength; bestSegment = segment; }
        }
        const matchedTerms = terms.filter((term, termIndex) => weights[termIndex] > 0);
        if (terms.length && (mode === 'all' ? matchedTerms.length !== terms.length : !matchedTerms.length)) continue;
        matches.push({ record, score: weights.reduce((sum, weight) => sum + weight, 0),
          partIndex: bestSegment?.partIndex ?? -1, matchedTerms, segment: bestSegment });
      }
      matches.sort((a, b) => b.score - a.score || idOrder.compare(String(a.record.id), String(b.record.id))
        || (String(a.record.id) < String(b.record.id) ? -1 : String(a.record.id) > String(b.record.id) ? 1 : 0));
      const results = matches.slice(offset, offset + limit).map(({ segment, ...result }) => ({
        ...result, snippet: snippetOf(segment, result.matchedTerms),
      }));
      return { results, total: matches.length, elapsedMs: globalThis.performance.now() - started, terms };
    },
  };
}
