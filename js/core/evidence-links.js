import { getCase } from './fsqca.js';
import { getCase as getPolicyCase } from '../../data/policy.js';
import { getSources } from '../../data/sources-data.js';

export const VARIABLE_CODES = ['RES', 'TEC', 'ACT', 'CAP', 'SPA', 'IND', 'AGR', 'CON', 'ECO', 'SPE'];
const cache = new Map();
const urlKey = value => {
  try { const u = new URL(value); return u.hostname.toLowerCase().replace(/^www\./, '') + u.pathname.replace(/\/$/, '') + u.search; }
  catch { return ''; }
};
function put(map, key, rule, evidence, via) {
  if (key == null) return;
  const links = map.get(String(key)) || [];
  if (!links.some(x => x.ruleCode === rule.code && x.evidenceCode === evidence.code && x.via === via)) {
    links.push({ ruleCode: rule.code, family: rule.family, name: rule.name, evidenceCode: evidence.code, via });
  }
  map.set(String(key), links);
}

// 只沿编码表明确引用的证据建立关系，禁止用关键词猜测评分依据。
export function caseEvidenceLinks(caseId) {
  const id = String(caseId).padStart(2, '0');
  if (cache.has(id)) return cache.get(id);
  const q = getCase(id), p = getPolicyCase(id), s = getSources(id);
  const result = { source: new Map(), tool: new Map(), doc: new Map(), case: new Map() };
  if (!q || !p || !s) return result;
  const evidence = new Map(q.evidenceIndex.map(e => [e.code, e]));
  const sources = s.sections.flatMap(section => section.items);
  for (const rule of q.rules) {
    for (const code of rule.evidence) {
      const e = evidence.get(code);
      if (!e) continue;
      put(result.case, 'all', rule, e, '证据索引');
      if (/^P\d+$/.test(code) && e.type === '政策工具箱·主表') {
        const no = Number((e.source.match(/第\s*(\d+)\s*项/) || [])[1]);
        const tool = p.tools.find(t => Number(t.no) === no);
        if (!tool) throw new Error(`案例 ${id}：${code} 政策工具编号无法解析`);
        put(result.tool, tool.no, rule, e, '编码表直接引用');
        for (const docNo of tool.deps) put(result.doc, docNo, rule, e, `政策工具第${tool.no}项的依据文件`);
      } else {
        const pointer = (e.archive.match(/01_原始资料[\\/](S\d+)/) || [])[1];
        for (const source of sources) {
          const sameUrl = e.url && urlKey(e.url) === urlKey(source.url);
          const samePointer = pointer === source.no && !/剔除|下架/.test(e.archive) && (!e.url || sameUrl);
          if (sameUrl || samePointer) put(result.source, source.no, rule, e, '编码表直接引用');
        }
        for (const doc of p.docs) {
          if (e.url && urlKey(e.url) === urlKey(doc.url)) put(result.doc, doc.no, rule, e, '编码表直接引用');
        }
      }
    }
  }
  cache.set(id, result);
  return result;
}

export function materialRuleLinks(caseId, kind, key) {
  return caseEvidenceLinks(caseId)[kind]?.get(String(key)) || [];
}

export function evidenceTargets(caseId, evidenceCode) {
  const links = caseEvidenceLinks(caseId);
  return ['source','tool'].flatMap(kind => [...links[kind]].filter(([,items]) => items.some(x => x.evidenceCode === evidenceCode))
    .map(([key]) => ({kind,key})));
}
