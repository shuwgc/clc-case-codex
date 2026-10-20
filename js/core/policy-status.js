// 展示依据收录记录判读，保留原始表述；只有明确的日期才判定有效期届满。
export const POLICY_REVIEW_DATE = '2026-10-20';
export function policyStatus(doc, asOf = POLICY_REVIEW_DATE) {
  const text = String(doc.status || doc.sourceNote || '').replace(/^文书形态[:：]\s*/, '').trim();
  const explicitInactive = /^(?:已废止|已失效|已过有效期|废止|失效)/.test(text);
  const end = text.match(/(?:有效期(?:延长)?(?:\s*为)?\s*至|延长至|→\s*至)\s*(20\d{2})[-年](\d{1,2})[-月](\d{1,2})/);
  const endDate = end ? `${end[1]}-${end[2].padStart(2,'0')}-${end[3].padStart(2,'0')}` : '';
  if (endDate && endDate < asOf) return { kind:'inactive', label:`有效期已届满（原文截止日期：${endDate}）`, original:text };
  if (explicitInactive) return {kind:'inactive',label:text,original:text};
  const current = !/不确定|征求意见|未见废止|待核|未核/.test(text) && (/^(?:现行有效|有效)/.test(text) || /（现行有效）/.test(text));
  return {kind:current?'current':'unknown',label:text||'未注明效力状态',original:text};
}
