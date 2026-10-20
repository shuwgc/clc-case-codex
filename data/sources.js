/* ================================================================
 * 原文报道链接（自然资源报 i自然 / 自然资源部官网）
 * ----------------------------------------------------------------
 * 有专属报道的案例链接到个案全文，其余回退到对应批次的发布页。
 * 新增案例时若已有专属报道，在这里补一条 `id: '链接'` 即可。
 * ================================================================ */

export const BATCH_URLS = {
  '第一批': 'https://www.mnr.gov.cn/dt/ywbb/202406/t20240625_2849402.html',
  '第二批': 'https://www.iziran.net/news.html?aid=5343216',
  '第三批': 'https://www.iziran.net/news.html?aid=5406482'
};

/* 个案专属报道 */
const CASE_URLS = {
  1:  'https://www.iziran.net/news.html?aid=5341581', // 上海松江泖港镇
  2:  'https://www.iziran.net/news.html?aid=5341024', // 上海金山廊下镇
  3:  'https://www.iziran.net/news.html?aid=5340939', // 江苏昆山张浦镇
  4:  'https://www.iziran.net/news.html?aid=5341648', // 江苏苏州黄桥街道
  5:  'https://www.iziran.net/news.html?aid=5333037', // 浙江杭州径山镇
  6:  'https://www.iziran.net/news.html?aid=5327414', // 浙江宁波
  7:  'https://www.iziran.net/news.html?aid=5330305', // 浙江嘉兴秀洲新塍
  9:  'https://www.iziran.net/news.html?aid=5340643', // 江西余江马荃镇
  10: 'https://www.iziran.net/news.html?aid=5340051', // 河南商丘民权县
  11: 'https://www.iziran.net/news.html?aid=5341710', // 湖北孝感朱湖
  12: 'https://www.iziran.net/news.html?aid=5341376', // 湖南浏阳永安镇
  13: 'https://www.iziran.net/news.html?aid=5340278', // 广东广州从化区
  14: 'https://www.iziran.net/news.html?aid=5341217', // 重庆九龙坡铜罐驿镇
  21: 'https://www.iziran.net/news.html?aid=5370439', // 浙江台州温岭横峰
  24: 'https://www.iziran.net/news.html?aid=5451089', // 江西宜春铜鼓大塅
  26: 'https://www.iziran.net/news.html?aid=5362837', // 湖北恩施宣恩椒园
  30: 'https://www.iziran.net/news.html?aid=5345879', // 陕西榆林绥德满堂川
  45: 'https://www.iziran.net/news.html?aid=5427398', // 广西贵港覃塘街道
  46: 'https://www.iziran.net/news.html?aid=5453114'  // 贵州雷山西江镇
};

/**
 * 取某个案例的原文报道链接。
 * 优先返回个案专属报道，没有则回退到该批次的发布页。
 * @param {{id:number, batch:string}} project
 * @returns {string|null}
 */
export function sourceUrlOf(project) {
  if (!project) return null;
  return CASE_URLS[project.id] || BATCH_URLS[project.batch] || null;
}

/** 该案例是否有专属报道（而非批次发布页） */
export function hasOwnSource(project) {
  return Boolean(project && CASE_URLS[project.id]);
}
