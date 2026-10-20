/* ================================================================
 * 案例封面图（由 tools/build-cover-module.mjs 生成，请勿手工编辑）
 * ----------------------------------------------------------------
 * 图片来源：各案例在「i自然 / 中国自然资源报」的专属报道页实景照片，
 *           经 tools/fetch-covers.cjs 下载并裁切为统一封面尺寸。
 * 共 15 个案例有专属配图；其余案例页面使用统一深绿渐变。
 *
 * 重新生成：npm run covers:build
 * ================================================================ */

/** 案例编号 → 封面图路径（相对 src/renderer/，请经 coverOf 解析后使用） */
export const COVERS = {
 "11": "assets/covers/11.jpg",
 "12": "assets/covers/12.jpg",
 "13": "assets/covers/13.jpg",
 "14": "assets/covers/14.jpg",
 "21": "assets/covers/21.jpg",
 "30": "assets/covers/30.jpg",
 "45": "assets/covers/45.jpg",
 "01": "assets/covers/01.jpg",
 "02": "assets/covers/02.jpg",
 "03": "assets/covers/03.jpg",
 "04": "assets/covers/04.jpg",
 "05": "assets/covers/05.jpg",
 "06": "assets/covers/06.jpg",
 "07": "assets/covers/07.jpg",
 "09": "assets/covers/09.jpg"
};

/** 封面图来源（用于核验与追溯） */
export const COVER_CREDITS = {
 "11": {
  "source": "https://res.iziran.net/data3/1/images/2024/0906/17255902629171339_1080x535.jpg",
  "article": "全域土地综合整治试点典型案例丨湖北省孝感朱湖办事处：用好“12345”，打造生态"
 },
 "12": {
  "source": "https://res.iziran.net/data3/1/images/2024/0902/17252642466901746_4092x2299.jpg",
  "article": "全域土地综合整治试点典型案例丨湖南浏阳永安镇：沃土“搬家”打开发展新格局"
 },
 "13": {
  "source": "https://res.iziran.net/data3/1/images/2024/0829/17249006390061807_1113x650.png",
  "article": "全域土地综合整治试点典型案例丨广州市从化区：大湾区“百千万工程”的县域样本"
 },
 "14": {
  "source": "https://res.iziran.net/data3/1/images/2024/0902/17252428291881712_4092x2102.jpg",
  "article": "全域土地综合整治试点典型案例丨重庆九龙坡铜罐驿镇：乡村振兴的巴渝样本"
 },
 "21": {
  "source": "https://res.iziran.net/data4/1/images/2025/0115/17369209129631877_1660x904.png",
  "article": "“和合之城”的空间之道"
 },
 "30": {
  "source": "https://res.iziran.net/data3/1/images/2024/0925/17272442461301678_1271x812.jpg",
  "article": "全域土地综合整治试点典型案例丨陕西绥德：黄土地上绘“丰”景"
 },
 "45": {
  "source": "https://res.iziran.net/data6/1/images/2025/0916/17580073598361847_1080x608.jpg",
  "article": "典型案例｜贵港市覃塘区覃塘街道姚山村等2个村全域土地综合整治试点项目"
 },
 "01": {
  "source": "https://res.iziran.net/data3/1/images/2024/0903/17253440803291981_1920x1080.jpg",
  "article": "全域土地综合整治试点典型案例丨上海松江泖港镇：用地做“减法”空间做“加法”振兴做"
 },
 "02": {
  "source": "https://res.iziran.net/data3/1/images/2024/0830/17250049632121723_4092x2080.jpg",
  "article": "​全域土地综合整治试点典型案例丨上海金山廊下镇：“农业标准地”绘出大都市好“丰”"
 },
 "03": {
  "source": "https://res.iziran.net/data3/1/images/2024/0830/17249967190901090_1080x607.png",
  "article": "全域土地综合整治试点典型案例丨江苏昆山张浦镇：“三连跳”，跳出城乡融合全域焕新"
 },
 "04": {
  "source": "https://res.iziran.net/data3/1/images/2024/0903/17253492796331895_1531x979.jpg",
  "article": "全域土地综合整治试点典型案例丨江苏苏州黄桥街道：资源重组品质重塑， 节地产出“双"
 },
 "05": {
  "source": "https://res.iziran.net/data3/1/images/2024/0723/17217281219771739_4092x2301.jpg",
  "article": "全域土地综合整治试点典型案例丨浙江杭州径山镇：激活乡村振兴的“一池春水”"
 },
 "06": {
  "source": "https://res.iziran.net/data3/1/images/2024/0626/17193709062451168_4092x2301.jpg",
  "article": "全域土地综合整治试点典型案例丨浙江宁波：探索空间治理新路径"
 },
 "07": {
  "source": "https://res.iziran.net/data3/1/images/2024/0709/17205150931501044_3066x1709.jpg",
  "article": "全域土地综合整治试点典型案例丨浙江省嘉兴市秀洲区：城与乡，在共融中共荣"
 },
 "09": {
  "source": "https://res.iziran.net/data3/1/images/2024/0829/17249162742751648_1586x891.png",
  "article": "​全域土地综合整治试点典型案例丨江西余江马荃镇：“一改促六化”，改革与整治系统集"
 }
};

/**
 * 取某案例封面图的**绝对 URL**，没有则返回 null。
 *
 * 必须返回绝对地址的原因：
 *   - 该值会写进内联 style 的 --cover 变量，最终由 CSS 的 background-image 消费；
 *   - CSS 中相对 URL 相对样式表目录解析（css/），会 404；
 *   - 桌面版为 file:// 协议，前导 "/" 又会跑到盘符根目录。
 * 以 document.baseURI 为基准解析可同时兼容 http(s) 与 file://。
 */
export function coverOf(caseId) {
  const key = String(caseId).padStart(2, '0');
  const rel = COVERS[key];
  if (!rel) return null;
  try {
    const base = (typeof document !== 'undefined' && document.baseURI) || 'file:///';
    return new URL(rel, base).href;
  } catch {
    return null;
  }
}
