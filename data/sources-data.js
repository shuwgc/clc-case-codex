/* ================================================================
 * 原始资料数据：47 个案例的资料来源与核心资料摘录
 * ----------------------------------------------------------------
 * ⚠️ 本文件由脚本生成，请勿手工编辑。
 *
 * 数据来源：各案例目录下「01_原始资料/」的
 *          资料来源清单.md、核心资料全文摘录.md。
 *
 * 更新流程：
 *   1. 更新各案例「01_原始资料/」；
 *   2. node tools/extract-sources.mjs        （抽取为 JSON）
 *   3. node tools/sync-archives.mjs          （同步网页存档 HTML，仅供核查脚本使用，不进安装包）
 *   4. node tools/build-sources-module.mjs   （生成本文件）
 *
 * 导出：
 *   CASES         各案例的来源分类与条目（含网页/附件/音视频形态）
 *   EXCERPTS      核心资料全文摘录（按 案例编号 → S编号 索引）
 *   SOURCES_META  全局汇总
 *   getSources(id)      按案例取来源
 *   getExcerpt(cid, no) 按案例与编号取摘录
 *
 * 注：v1.3.1 起不再导出网页存档路径与 archiveOf()。安装包不再内置
 *     网页快照，来源一律通过官方原文链接回溯。
 * ================================================================ */

export const CASES = [
 {
  "id": "01",
  "dir": "01_上海市松江区泖港镇",
  "name": "上海市松江区泖港镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨上海松江泖港镇：用地做“减法” 发展做“加法”",
      "date": "2024-09-04",
      "url": "https://www.iziran.net/news.html?aid=5341581",
      "note": "松江区泖港镇以全域土地综合整治试点为契机，通过全域产业振兴、全域村居改善、全域景观提升，打造黄浦江滨的水乡田园小镇、全球城市的科技农业和全域旅游示范镇，建设黄浦江上游生态保护和高质量发展的乡村振兴示范区。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 5305
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "ghzyj.sh.gov.cn_上海市规划和自然资源局",
      "title": "探索土地集约节约与群众增收致富双赢——上海市松江区泖港镇全域土地综合整治试点",
      "date": "2024-08-08",
      "url": "https://ghzyj.sh.gov.cn/sj/20240808/9b3003478eda44cca6a59d88b7c5e84c.html",
      "note": "《上海市松江区泖港镇全域土地综合整治试点实施方案》入选自然资源部全域土地综合整治试点首批案例，该项目也获得了2023年度上海市优秀国土空间规划设计二等奖。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 3734
     },
     {
      "no": "S04",
      "source": "ghzyj.sh.gov.cn_上海市规划和自然资源局",
      "title": "泖港镇全域土地综合整治试点概览",
      "date": "2023-06-30",
      "url": "https://ghzyj.sh.gov.cn/tpxw/20230630/08a1871892ea4af9a5a09ab1a9958fa8.html",
      "note": "同时，泖港镇面临着耕地和永久基本农田破碎化、农民居住环境亟待改善、建设用地粗放低效、生态保护任务艰巨等多重问题。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1990
     },
     {
      "no": "S05",
      "source": "songjiang.gov.cn_松江区政府",
      "title": "【泖港镇】泖港镇全域土地综合整治实施方案",
      "date": "2024-01-10",
      "url": "https://www.songjiang.gov.cn/govxxgk/SHSJ65/2024-01-10/2a291f2c-537c-4df5-8b7c-68d91ffb9106.html",
      "note": "松江区人民政府通过调研遴选，将泖港镇产业发展有特点、村庄建设条件好、农民意愿强烈的黄桥村、腰泾村、胡光村、范家村、泖港村等五个行政村庄作为试点，申报全域土地综合整治，统筹试点区域各项整治工程实施，助推乡村振兴发展建设。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 43288
     },
     {
      "no": "S14",
      "source": "ghzyj.sh.gov.cn_上海市规划和自然资源",
      "title": "创新推进全域土地综合整治 积极助力上海城市乡村振兴",
      "date": "2023-06-25",
      "url": "https://ghzyj.sh.gov.cn/nw2460/20230630/a90f0aabf4524073bb12ae8acc11b2c0.html",
      "note": "目前，泖港镇郊野单元村庄规划和全域土地综合整治实施方案已经区政府批复同意，目前正在积极开展各类单体项目实施工作。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.songjiang.gov.cn",
      "title": "政府工作报告（2025年）",
      "date": "2025-02-06",
      "url": "https://www.songjiang.gov.cn/govxxgk/SHSJ0/2025-02-06/26000c9b-1c95-47ed-b12d-ff4d698aa531.html",
      "note": "完成建设用地减量化170公顷，违法用地综合整治147公顷，泖港全域土地综合整治试点经验获评全国首批推广案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S08",
      "source": "thepaper_澎湃新闻",
      "title": "一块田，改革直抵心坎！泖港镇全域土地综合整治试点入选自然资源部首批典型案例",
      "date": "2024-07-16",
      "url": "https://www.thepaper.cn/newsDetail_forward_28091340",
      "note": "这几年，泖港镇通过“唤醒”低效的土地资源，不断提高生产空间，提升生活质量，改善生态环境，打造出“三生融合”的新农村，既为松江自然资源找到高质量发展之路，也为超大城市探索全域土地综合整治挖掘出了可复制的样本。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "thepaper_澎湃新闻（松江发布）",
      "title": "件件与你有关！泖港镇2024年度实事项目出炉",
      "date": "2024-01-11",
      "url": "https://www.thepaper.cn/newsDetail_forward_25982731",
      "note": "加强水环境治理，启动泖港先行镇生态清洁小流域建设，开工建设泖港镇中小河道整治工程，着力打造集中连片生态清洁小流域示范单元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「上海自然资源」（上海省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：上海市松江区泖港镇 全域土地综合整治"
  ],
  "counts": {
   "items": 8,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 5,
    "其他媒体报道": 2
   }
  }
 },
 {
  "id": "02",
  "dir": "02_上海市金山区廊下镇",
  "name": "上海市金山区廊下镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨上海金山廊下镇：“农业标准地”整出发展新图景",
      "date": "2024-09-02",
      "url": "https://www.iziran.net/news.html?aid=5341024",
      "note": "引导农民、市民、艺术、体育、金融、科研机构等多元主体共同参与，推动政策、资金、人才等资源向乡村集聚，走出具有廊下特色的全域规划引领、全方位综合整治、全产业融合发展和全域生态保护提升“四位一体”的新路径，建设符合社会主义现代化国际大都市郊区乡村特点的美丽乡村，形成了典型的“廊下模式”。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 5148
     },
     {
      "no": "S13",
      "source": "sh.xinhuanet.com_新华网上海",
      "title": "上海土地综合整治9年新增耕地超6万亩",
      "date": "2023-06-26",
      "url": "http://sh.xinhuanet.com/20230626/5c8e967fbe5f47f3a3066fe82c21dd79/c.html",
      "note": "截至目前，廊下镇一期、二期土地综合整治项目已完成，三期全域土地综合整治项目正在推进。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "ghzyj.sh.gov.cn_上海市规划和自然资源局",
      "title": "“标准地”绘就发展新图景：金山廊下以自然资源部全域土地综合整治试点为抓手",
      "date": "2025-03-03",
      "url": "https://ghzyj.sh.gov.cn/hyxw/20250303/c755a9b1d8104d8295e55f1668e9c051.html",
      "note": "通过市、区、镇上下沟通和跨部门横向协调，全面梳理全镇建设项目，归集为农民集中居住、人居环境整治、美丽乡村建设、土地整治四大专项88个任务清单，将廊下镇全域土地综合整治纳入区“十四五”重点项目，协调各部门争取条线资金，依据规划蓝图招商引资吸引社会资本，其中涉农资金由区级统筹集中投放、整体立项，实现项目集聚、资金汇集、资源共享、行动统一。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 3326
     },
     {
      "no": "S05",
      "source": "ghzyj.sh.gov.cn_上海市规划和自然资源局",
      "title": "绿水青山筑底 金山银山提质——上海远郊两镇以土地整治赋能乡村振兴",
      "date": "2026-08-12",
      "url": "https://ghzyj.sh.gov.cn/tpxw/20260812/5d78142300d64b269b2bd6224abc74e7.html",
      "note": "上海市金山区漕泾镇、廊下镇立足郊区乡村资源禀赋，以全域土地综合整治为总体平台，以市级土地整治项目为重要载体，通过系统性空间重构、用地整合与要素重组，持续盘活沉睡的山水田林生态资源，有效推动生态优势向经济优势、发展优势转化，探索形成了超大城市乡村高质量发展的创新路径。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 3348
     },
     {
      "no": "S07",
      "source": "shio.gov.cn_上海市政府新闻办",
      "title": "上海为乡村振兴“变”出更多土地 通过全域土地综合整治累计新增耕地……",
      "date": "2023-06",
      "url": "https://www.shio.gov.cn/TrueCMS/shxwbgs/ywts/content/50a5c288-9f99-4a2c-bce0-9ee4ba95eb98.htm",
      "note": "以松林楼房养猪场为代表，廊下镇正在搭建全域土地综合整治平台，规划为先优化格局，让各方力量有序参与、各类资源有效整合。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "ghzyj.sh.gov.cn_上海市规划和自然资源",
      "title": "上海市全域土地综合整治政策文件汇编",
      "date": "2026-06-30",
      "url": "https://ghzyj.sh.gov.cn/hyxw/20260702/882575cd3a3d4e08872468ad4273ee82.html",
      "note": "2019年起，根据自然资源部要求，按照市委、市政府工作部署，为全面推进国土空间规划实施和乡村振兴，上海市在市级土地整治项目的基础上，探索开展全域土地综合整治工作。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "ghzyj.sh.gov.cn_上海市规划和自然资源",
      "title": "创新推进全域土地综合整治 积极助力上海城市乡村振兴",
      "date": "2023-06-25",
      "url": "https://ghzyj.sh.gov.cn/nw2460/20230630/a90f0aabf4524073bb12ae8acc11b2c0.html",
      "note": "金山区廊下镇全域土地综合整治试点，在前两期市级土地整治项目和郊野公园的基础上，紧密围绕大都市人群需求，通过项目策划与空间规划设计，促进多门类的特色农业产业向上、下游延伸，发挥廊下镇生态农业独特优势，使得有限土地发挥出最大效益与溢出功能，实现乡村一二三产有机融合和生态可持续的发展目标。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "jinshan.gov.cn_金山区政府",
      "title": "廊下镇土地综合整治成效显著 乡村振兴的蝶变正悄然发生",
      "date": "2023-06-27",
      "url": "https://www.jinshan.gov.cn/ywdt-zhxx/20230627/847225.html",
      "note": "现在，廊下镇三期全域土地综合整治项目正在推进，该项目将促进田、水、路、林、村进一步集中连片。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.jinshan.gov.cn",
      "title": "2025年金山区人民政府工作报告",
      "date": "2025-01-08",
      "url": "https://www.jinshan.gov.cn/zhengwu/zwgk-zfgzbg/2025/39/428.html",
      "note": "完成廊下镇全国农村综合性改革试点试验项目和全域土地综合整治项目建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.jinshan.gov.cn",
      "title": "廊下镇2025年上半年政府工作报告",
      "date": "2025-07-22",
      "url": "https://www.jinshan.gov.cn/zhengwu/lxz-ghjh/2025/297/5727.html",
      "note": "全域土地综合整治项目按计划推进，8个子项目已完成，7个子项目建设中，其中农民相对集中居住147户全部完成签约。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "www.jinshan.gov.cn",
      "title": "廊下镇入选2025年\"绿水青山就是金山银山\"实践创新基地",
      "date": "2025-12-26",
      "url": "https://www.jinshan.gov.cn/ywdt-zhxx/20251226/874864.html",
      "note": "近年来，廊下镇始终坚持以“绿水青山就是金山银山”理念为指导，依托得天独厚的生态优势，持续探索生态价值转化路径，全面提升生态文明建设水平，逐步形成具有廊下特色的绿色发展模式，各项工作取得显著成效。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S11",
      "source": "thepaper_澎湃新闻",
      "title": "上海推进全域土地综合整治，逐步建立实施机制和政策框架",
      "date": "2023-06-25",
      "url": "https://m.thepaper.cn/newsDetail_forward_23606848",
      "note": "值得一提的是，基于泖港镇和廊下镇两个试点探索，2022年，上海市政府办公厅印发《关于实施全域土地综合整治的意见》，逐步建立全域土地综合整治实施机制和政策框架，形成一批可复制可推广的成功模式，由点及面、由表及里，基本建成具有江南田园风貌特征和超大城市特点的乡村国土空间新格局。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「上海自然资源」（上海省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：上海市金山区廊下镇 全域土地综合整治"
  ],
  "counts": {
   "items": 12,
   "excerpts": 3,
   "byCategory": {
    "核心权威报道": 2,
    "政府官方通报": 9,
    "其他媒体报道": 1
   }
  }
 },
 {
  "id": "03",
  "dir": "03_江苏省苏州市昆山市张浦镇",
  "name": "江苏省苏州市昆山市张浦镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨江苏昆山张浦镇：“三连跳”腾挪发展新空间",
      "date": "2024-09-01",
      "url": "https://www.iziran.net/news.html?aid=5340939",
      "note": "张浦镇全域土地综合整治试点，聚焦新型城镇化和乡村全面振兴，实施农用地整理、建设用地整理、生态保护修复、公共空间治理、乡村历史文化保护五大类项目，通过高起点、高标准、高质量的综合治理和系统修复，整治出城乡根本变化的全新面貌和经济社会生态的多重效益，推动张浦成为展示昆山率先基本实现农业农村现代化建设成效的“重要窗口”。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4850
     },
     {
      "no": "S08",
      "source": "iziran_中国自然资源报",
      "title": "江苏：全域土地综合整治20个国家试点和16个省级示范项目总体进展超70%",
      "date": "2024",
      "url": "https://www.iziran.net/news.html?aid=5346043",
      "note": "以昆山张浦镇为代表的特色文化保护模式，在推进农业园区、工业集中区优化整治和村庄环境提升的同时，实施赵陵山新石器时代遗址保护，重塑了历史文化景观；活化利用尚明甸传统村落，入选第六批江苏省传统村落，再现了传统江南圩田景观风貌。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1584
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
      "title": "江苏省苏州市昆山市张浦镇全域土地综合整治试点",
      "date": "2025-04-17",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d57dqr/jsxcg/2025/04/23343113152712119653.html",
      "note": "张浦镇全域土地综合整治试点，涉及除中心镇区外的全镇行政区范围，总面积15万亩，项目包含撤并乡镇、村庄、农用地、池塘等乡村和农业空间，还有2个面积较大的废弃工矿，资源集中；整治类型涵盖建设用地拆旧复垦、农用地整理、高标准农田建设、公共空间治理、乡村生态保护修复等内容，意义典型。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1969
     },
     {
      "no": "S05",
      "source": "suzhou.gov.cn_苏州市政府",
      "title": "“张浦经验”成功入选首批全域土地综合整治试点典型案例",
      "date": "2024-06-28",
      "url": "https://www.suzhou.gov.cn/szsrmzf/qxkx/202406/e2ab57ae80184480ae5dd74fe49285f9.shtml",
      "note": "试点站在人与自然和谐共生的高度，瞄准“城乡融合、全域焕新”目标，统筹谋划农用地整理、建设用地整理、生态保护修复、公共空间治理、乡村历史文化保护等项目实施，旨在通过高起点、高标准、高质量的综合治理和系统修复，整治出城乡根本变化的全新面貌和经济社会生态的多重效益，推动张浦成为全面展示昆山率先基本实现农业农村现代化建设成效的“重要窗口”。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1230
     },
     {
      "no": "S07",
      "source": "ks.gov.cn_昆山市政府",
      "title": "《苏州日报》聚焦张浦：全域土地“治”出全国经验",
      "date": "2024-12-24",
      "url": "https://www.ks.gov.cn/kss/qzkx/202412/838e3cbc9fe8462b952f7bcdd572132d.shtml",
      "note": "2021年，张浦镇自全域土地综合整治项目被列入国家全域土地综合整治试点名单以来，统筹谋划农用地整理、建设用地整理、生态保护修复、公共空间治理、乡村历史文化保护等，“治”出城乡融合的全新面貌和经济社会生态的多重效益，为全国提供“张浦经验”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "zrzy.jiangsu.gov.cn_昆山市自然资",
      "title": "昆山市张浦镇全域土地综合整治试点入选国家典型案例",
      "date": "2024-07-02",
      "url": "https://zrzy.jiangsu.gov.cn/szks/gtzx/gzdt/202407/t20240702_1609333.htm",
      "note": "试点瞄准“城乡融合、全域焕新”目标，实施农用地整理、建设用地整理、生态保护修复、公共空间治理、乡村历史文化保护五类项目，旨在通过综合治理和系统修复，整治出城乡根本变化的全新面貌和经济社会生态的多重效益，推动张浦成为全面展示昆山率先基本实现农业农村现代化建设成效的“重要窗口”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "zrzy.jiangsu.gov.cn_昆山市自然资",
      "title": "张浦分局获评昆山市2025年度“抓项目、强治理、提质效、优作风”先进集体",
      "date": "2026-08-24",
      "url": "https://zrzy.jiangsu.gov.cn/szks/gtzx/gzdt/202608/t20260824_2082154.htm",
      "note": "近五年来，张浦镇通过全域土地综合整治及“三优三保”项目实施，累计腾挪建设用地指标2000余亩，建成高标准农田2.55万亩，新增耕地6000余亩；振苏社区2000亩废弃砖厂取土坑实现“绿色逆袭”、尚明甸村“古村+科创”模式引进企业近20家，三年带动村集体增收300万元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S23",
      "source": "www.ks.gov.cn",
      "title": "昆山市2025年政府工作报告",
      "date": "2025-01-06",
      "url": "https://www.ks.gov.cn/kss/zfgzbg/202501/9b73860714564d6bb1e3593bb7e8a344.shtml",
      "note": "推进土地要素市场化改革，完成“数据得地”供地7宗、存量产业用地更新5597亩，获评全省自然资源节约集约利用模范县，张浦镇全域土地综合整治试点入选全国首批典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S09",
      "source": "thepaper_澎湃新闻",
      "title": "全国典范！昆山+1！",
      "date": "2024-06-27",
      "url": "https://m.thepaper.cn/newsDetail_forward_27876908",
      "note": "2021年1月，张浦镇全域土地综合整治项目被列入国家试点名单。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "sohu_搜狐",
      "title": "江苏苏州昆山市张浦镇——全域土地整治促经济生态协调发展",
      "date": "2024-11-03",
      "url": "https://m.sohu.com/a/823161050_118392",
      "note": "田园景观风貌焕然一新，2023年全镇粮食种植面积、粮食总产量创近5年新高；低效建设用地得到腾挪置换，3年间耕地净增加5140亩；开展“强村公司+产业园+村集体”合作，乡村富民增收渠道持续拓宽……近年来，江苏苏州昆山市张浦镇依托全域土地综合整治对乡村资源资产开展整合提升，推动经济与生态双提升。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "glgd.ccnu.edu.cn_华中师范大学案例库",
      "title": "昆山市张浦镇入选全国首批全域土地综合整治试点典型案例",
      "date": "2024-07-02",
      "url": "https://glgd.ccnu.edu.cn/web/case/detail?id=1345",
      "note": "依托全域土地综合整治对乡村资源资产的整合提升，将“三农”工作与文化、康养、旅游等深度融合，在实现特色康居（宜居）乡村镇域全覆盖的同时，壮大了一批“乡村+旅游”“文化+旅游”等农文旅融合产业，农创金华、科创尚明甸、水乡姜里等特色村庄竞相“出圈”，全面打响了张浦农文旅融合发展的特色品牌。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江苏自然资源」（江苏省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江苏省苏州市昆山市张浦镇 全域土地综合整治"
  ],
  "counts": {
   "items": 11,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 2,
    "政府官方通报": 6,
    "其他媒体报道": 3
   }
  }
 },
 {
  "id": "04",
  "dir": "04_江苏省苏州市相城区黄桥街道",
  "name": "江苏省苏州市相城区黄桥街道",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨江苏苏州黄桥街道：资源重组品质重塑，节地产出“双提升”",
      "date": "2024-09",
      "url": "https://www.iziran.net/news.html?aid=5341648",
      "note": "为保障全域土地综合整治工作顺利推进，黄桥街道委托第三方编制了苏州市相城区黄桥街道全域土地综合整治项目可行性研究报告，对全域整治工作开展中的投资估算及融资方案进行了研究，对财务效益、盈利能力、财务生存能力、借款偿还能力等进行了详细分析。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 5099
     },
     {
      "no": "S02",
      "source": "iziran_中国自然资源报",
      "title": "江苏：全域土地综合整治20个国家试点和16个省级示范项目总体进展超70%",
      "date": "2024",
      "url": "https://www.iziran.net/news.html?aid=5346043",
      "note": "完成建设用地整理7．51万亩，建设用地面积减少0．76万亩，腾退低效工业企业590家，其中苏州市黄桥街道工业用地面积由0．63万亩减少至0．36万亩，总部经济科创园税收总额连续两年超6000万元。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1584
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
      "title": "苏州市黄桥街道全域土地综合整治国家试点通过综合验收",
      "date": "2024-10",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/xwbb/2024/10/15141242565782.html",
      "note": "近日，苏州市相城区黄桥街道全域土地综合整治国家试点圆满完成各项建设任务，顺利通过了综合验收，打造了城乡融合发展 “ 黄桥样板 ” 。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 934
     },
     {
      "no": "S04",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
      "title": "江苏省苏州市相城区黄桥街道全域土地综合整治试点",
      "date": "2025-04-17",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d56gsjdqr/stzlxf/2025/04/17114515103695.html",
      "note": "江苏省苏州市相城区黄桥街道全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1842
     },
     {
      "no": "S05",
      "source": "szxc.gov.cn_苏州市相城区政府",
      "title": "相城资规分局 ｜ 黄桥街道全域土地综合整治国家试点项目通过综合验收",
      "date": "2024-09-26",
      "url": "http://www.szxc.gov.cn/szxcrmzf/bmdt/202409/c4d055b92b2f4af6bf9af5e1247d698c.shtml",
      "note": "本轮试点覆盖黄桥街道全域 2308.2583 公顷，统筹实施了包括农用地整治、建设用地整治、乡村生态保护修复、乡村历史文化保护共四类工程 21 个子项目。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1235
     },
     {
      "no": "S21",
      "source": "zrzy.jiangsu.gov.cn",
      "title": "黄桥街道全域土地综合整治国家试点项目通过综合验收",
      "date": "2024-09-24",
      "url": "https://zrzy.jiangsu.gov.cn/szxc/gtzx/gzdt/202409/t20240924_1651375.htm",
      "note": "本轮试点覆盖黄桥街道全域2308.2583公顷，统筹实施了包括农用地整治、建设用地整治、乡村生态保护修复、乡村历史文化保护共四类工程21个子项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "szb.xdplus.cn",
      "title": "黄桥街道全域土地综治国家试点项目验收",
      "date": "2024-10-10",
      "url": "https://szb.xdplus.cn/xdkb/pc/content/202410/10/content_49053.html",
      "note": "验收会议上，来自河海大学、南京林业大学、南京师范大学、苏州大学和苏州市水务局的专家组成的专家组经过现场踏勘、听取汇报、质询讨论，认为该项目极具典型意义，落地成效显著，通过空间重构、资源重组、品质重塑，构建了“环境宜居宜业、农田集中连片、产业融合发展”的新格局，打造了全域土地综合整治的“黄桥样板”，一致同意通过综合验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S09",
      "source": "sohu_搜狐",
      "title": "黄桥街道全域土地综合整治国家试点项目通过综合验收",
      "date": "2024-09-23",
      "url": "https://www.sohu.com/a/811089310_121106832",
      "note": "近日，苏州市相城区黄桥街道全域土地综合整治国家试点项目顺利通过综合验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "sohu_搜狐",
      "title": "全市首个！苏州市黄桥街道全域土地综合整治国家试点项目通过验收",
      "date": "2024-09-30",
      "url": "https://www.sohu.com/a/812994960_121448078",
      "note": "近日，苏州市相城区黄桥街道全域土地综合整治国家试点项目顺利通过综合验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.sohu.com",
      "title": "江苏全域土地综合整治多重效益显现",
      "date": "2025-10-19",
      "url": "https://www.sohu.com/a/945341229_362042",
      "note": "2021年，作为全域整治全国第一个报部备案的试点项目，黄桥街道开始转型。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江苏自然资源」（江苏省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江苏省苏州市相城区黄桥街道 全域土地综合整治"
  ],
  "counts": {
   "items": 10,
   "excerpts": 5,
   "byCategory": {
    "核心权威报道": 2,
    "政府官方通报": 5,
    "其他媒体报道": 3
   }
  }
 },
 {
  "id": "05",
  "dir": "05_浙江省杭州市余杭区径山镇",
  "name": "浙江省杭州市余杭区径山镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨浙江杭州径山镇：激活乡村资源 重塑禅茶意境",
      "date": "2024-07-23",
      "url": "https://www.iziran.net/news.html?aid=5333037",
      "note": "试点中，小古城村用“一棵樟树”激活村民共建共治共享的热情，描绘了以“土地综合整治+基层整治”为核心的高水平乡村治理新图景；径山村用“一片叶子”提升农文旅融合禅茶大产业，打通了生态修复后绿水青山与金山银山的转换通道；漕桥村用“一方良田”实现了耕地保护整、种、管，牢牢端紧中国饭碗……整体展现了以全域土地综合整治为引擎，打造乡村共富基本单元的地方实践样本。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 3523
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "zrzyt.zj.gov.cn_浙江省自然资源厅",
      "title": "共“富”自然资源之约丨杭州市余杭区径山镇以土地综合整治赋能共同富裕",
      "date": "2024-04-15",
      "url": "https://zrzyt.zj.gov.cn/art/2024/4/15/art_1229619365_59027487.html",
      "note": "在这片美丽绽放的土地背后，是径山镇以土地综合整治为空间载体和行动抓手，将“古朴”与“现代”紧紧相融，构筑了一个“农村生产集约高效、农居生活特色传承、生态空间自然宜人”的共同富裕现代化基本单元新样本。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1354
     },
     {
      "no": "S04",
      "source": "hangzhou.gov.cn_杭州市政府",
      "title": "杭州这两个项目获全国推荐",
      "date": "2024-07-01",
      "url": "https://www.hangzhou.gov.cn/art/2024/7/1/art_812262_59099407.html",
      "note": "本次是自然资源部首次公布全域土地综合整治试点典型案例，含径山镇土地综合整治项目在内共收录15个案例，均结合本地实际需求、资源禀赋，在组织模式、规划衔接、实施管理、验收与后期管护、资金保障等方面形成了一系列可推广、可复制的宝贵经验。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 957
     },
     {
      "no": "S05",
      "source": "yuhang.gov.cn_杭州市余杭区政府",
      "title": "杭州市规划和自然资源局余杭分局2024年法治政府建设年度报告",
      "date": "2025-03-26",
      "url": "https://www.yuhang.gov.cn/art/2025/3/26/art_1229178802_4341095.html",
      "note": "积极推进土地综合整治以及“百千万”永久基本农田集中连片整治项目，2024年完成4个土地综合整治项目，径山镇土地综合整治项目入选全国首批15个全域土地综合整治试点典型案例，完成“百千万”永久基本农田集中连片整治2.1万亩。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 3235
     },
     {
      "no": "S06",
      "source": "yuhang.gov.cn_杭州市余杭区政府",
      "title": "余杭四捧“神农鼎”",
      "date": "2026",
      "url": "https://www.yuhang.gov.cn/col/col1532128/art/2026/art_31ad1daea35b420dbdb91d322f08de8e.html",
      "note": "公共服务方面，14项民生实事项目完成进度达136%，成功争创省级银发经济产业园改革试点，“优托360°”养老模式入选全省重大改革典型案例；在全省率先实现“多田套合”率100%，径山镇入选全国全域土地综合整治试点典型案例。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1535
     },
     {
      "no": "S13",
      "source": "ghzy.hangzhou.gov.cn_杭州市规划",
      "title": "杭州4项目获评土地综合整治省级精品工程",
      "date": "2024-10-24",
      "url": "https://ghzy.hangzhou.gov.cn/art/2024/10/24/art_1228962609_58951957.html",
      "note": "余杭区径山镇小古城村等6村全域土地综合整治项目，将土地综合整治融入地区发展规划战略，实现了项目区内各村庄一起规划，避免了村庄同质化、千村一面等问题。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "ghzy.hangzhou.gov.cn",
      "title": "余杭强化土地要素保障赋能美丽乡村建设提质增效",
      "date": "2023-07-14",
      "url": "https://ghzy.hangzhou.gov.cn/art/2023/7/14/art_1228962611_58940076.html",
      "note": "其中径山镇“万亩方”永久基本农田集中连片整治项目等6个子项目已完成区级立项并报备，预计可实现耕地集中连片1.1万亩。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S07",
      "source": "zj.people.com.cn_人民网浙江频道",
      "title": "杭州这两个项目获全国推荐",
      "date": "2024-06-30",
      "url": "https://zj.people.com.cn/n2/2024/0630/c186327-40896114.html",
      "note": "本次是自然资源部首次公布全域土地综合整治试点典型案例，含径山镇土地综合整治项目在内共收录15个案例，均结合本地实际需求、资源禀赋，在组织模式、规划衔接、实施管理、验收与后期管护、资金保障等方面形成了一系列可推广、可复制的宝贵经验。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "zjrb.zjol.com.cn_浙江日报",
      "title": "金角银边，拼出发展新空间 浙江“土地整治+”改革助力高质量发展",
      "date": "2024-08-29",
      "url": "https://zjrb.zjol.com.cn/html/2024-08/29/content_3765731.htm",
      "note": "2021年，径山镇以小古城村、径山村、漕桥村等村庄为核心片区，试点全域土地综合整治，合理调整空间布局，确保可稳定利用耕地只增不减、建设用地“减量提值”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "sohu_搜狐",
      "title": "全国首批15个，余杭入选！",
      "date": "2024-07-14",
      "url": "https://www.sohu.com/a/793199962_121117478",
      "note": "径山镇以村、山、路、河生态修复提升为重点，让废弃矿山还绿为宝，让苕溪水系重归清澈。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "www.iziran.net",
      "title": "活力中国调研行 ／\"零碳乡村\"的径山实践：土地整治筑基，生态颜值变共富价值",
      "date": "2025-08-06",
      "url": "https://www.iziran.net/news.html?aid=5417474",
      "note": "2021年起，径山镇以径山村等6村为试点，实施全域土地综合整治工程。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "news.qq.com",
      "title": "蹚出新路子 建设新农田 打好新地基 创建新机制 ／ 余杭：全域土地整治看\"四新\"",
      "date": "2023-08-25",
      "url": "https://news.qq.com/rain/a/20230825A02LE000",
      "note": "近年来，余杭区实施了5个全域土地综合整治与生态修复工程项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「浙江自然资源」（浙江省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：浙江省杭州市余杭区径山镇 全域土地综合整治"
  ],
  "counts": {
   "items": 12,
   "excerpts": 5,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 6,
    "其他媒体报道": 5
   }
  }
 },
 {
  "id": "06",
  "dir": "06_浙江省宁波市全域国土空间综合整治",
  "name": "浙江省宁波市全域国土空间综合整治",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨浙江宁波：探索空间治理新路径",
      "date": "2024-06-26",
      "url": "https://www.iziran.net/news.html?aid=5327414",
      "note": "为确保整治目标不走样、过程可溯源、成效可评价，宁波搭建“全域国土空间综合整治数字化场景”应用体系，实现全过程数字化孪生。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 3034
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S05",
      "source": "nbrd.gov.cn_宁波市人大常委会",
      "title": "关于我市全域国土空间综合整治工作情况的报告",
      "date": "2024-02-27",
      "url": "https://www.nbrd.gov.cn/art/2024/2/27/art_1229578103_39885.html",
      "note": "自2022年1月我市全域国土空间综合整治试点获批以来，在市委的坚强领导下，在市人大的关心支持和有力监督下，全市上下统一思想认识、凝聚多方合力，系统推进农用地整治、村庄整治、生态保护修复、工业用地整治、城镇低效用地再开发“五位一体”的国土空间综合整治任务，取得阶段性成效。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4920
     },
     {
      "no": "S06",
      "source": "zgj.ningbo.gov.cn_宁波市自然资源和规划局",
      "title": "孙义为通报全域国土空间综合整治试点工作进展情况",
      "date": "2023-02-01",
      "url": "https://zgj.ningbo.gov.cn/art/2023/2/1/art_1229036864_58962646.html",
      "note": "全域整治是一项空间治理的系统工程，既不同于新城建设，也有别于单纯的土地整治或产业园区开发，是基于存量的资源整合和改造提升，涉及多个利益主体、多个条线工作。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "zgj.ningbo.gov.cn_宁波市自然资源和规划局",
      "title": "我市海曙区横街-古林片区入选自然资源部第三批全域土地综合整治典型案例",
      "date": "2025-06-26",
      "url": "https://zgj.ningbo.gov.cn/art/2025/6/26/art_1229036864_58998777.html",
      "note": "农田治理方面，推进连片整治与布局优化，统一流转标准，实践“全域整治+数字赋能”，推动零散耕地向数智良田转型。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "nbjb.gov.cn_宁波市江北区政府",
      "title": "我们这一年 宁波全域国土空间的“55”解法",
      "date": "2025-01-28",
      "url": "https://www.nbjb.gov.cn/art/2025/1/28/art_1229114281_58963168.html",
      "note": "回顾2024年，全域整治的步伐坚定有力，自2022年宁波成为全国唯一获批在全市域范围开展全域国土空间综合整治试点的城市以来，这片9000多平方公里的土地上，开启了一场为全国推进国土空间治理体系和治理能力现代化的探路之旅。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2866
     },
     {
      "no": "S14",
      "source": "zgj.ningbo.gov.cn_宁波市自然资源和",
      "title": "奖励2200万！宁波全域国土空间综合整治优秀生态修复项目名单公布",
      "date": "2024-12-31",
      "url": "https://zgj.ningbo.gov.cn/art/2024/12/31/art_1229713376_58979709.html",
      "note": "镇海蛟川片区通过全域谋划田水路林村综合整治，既着眼于建设用地提质增效，又聚焦于生态空间格局优化，实现了生产空间集约、生活空间宜居、生态空间秀美的可持续发展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "zgj.ningbo.gov.cn_宁波市自然资源和",
      "title": "我市建立全域国土空间综合整治生态修复领域财政奖补机制",
      "date": "2024-09-05",
      "url": "https://zgj.ningbo.gov.cn/art/2024/9/5/art_1229713376_58976815.html",
      "note": "2024年8月20日，市自然资源规划局、市财政局联合印发《宁波市全域国土空间综合整治生态修复考核奖补资金管理实施细则》（以下称《实施细则》）。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "www.nbrd.gov.cn",
      "title": "关于全域国土空间综合整治工作情况的调研报告",
      "date": "2024-02-27",
      "url": "https://www.nbrd.gov.cn/art/2024/2/27/art_1229578103_39886.html",
      "note": "市发改委创新项目审批方式，优化项目审批流程，印发《全域国土空间综合整治项目审批工作指引》；市财政局探索建立“市区联动、部门协同、银企合作”的全域整治投融资工作机制和收支统筹管理机制，争取专项债券50亿元用于六区整治项目建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S10",
      "source": "zj.people.com.cn_人民网浙江频道",
      "title": "宁波探寻国土空间治理“最优解”",
      "date": "2023-02-01",
      "url": "https://zj.people.com.cn/n2/2023/0201/c186327-40284364.html",
      "note": "据悉，2023年宁波11个示范片区的整治将再提速，新开工整治项目147个，推进城镇低效用地再开发8200亩，推动全域国土空间综合智治集成应用数字赋能，形成10项以上可复制、可推广的改革经验。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "nb.ifeng.com_凤凰网宁波",
      "title": "宁波全域国土空间综合整治：一幅“空间治理”的现代画卷",
      "date": "2025-12-01",
      "url": "https://nb.ifeng.com/c/8oj5Ix0GZM5",
      "note": "全市以11个全域整治示范片区为引擎，带动了26个省级项目同步实施。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "sohu_搜狐",
      "title": "中国自然资源报头版头条 ｜ 存量时代的宁波逻辑",
      "date": "2026-02-06",
      "url": "https://www.sohu.com/a/984379019_121106994",
      "note": "2022年2月，浙江省宁波市第十四次党代会提出，全域国土空间综合整治是宁波推进功能布局变革的牵引性工程，要以全域国土空间综合整治推动资源重组、功能重塑、空间重构、产业重整、环境重生，全面撬动产业革新、城市更新、乡村振兴。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "epaper.cnnb.com.cn",
      "title": "宁波全域国土空间综合整治\"多点开花\"",
      "date": "2026-01-10",
      "url": "https://epaper.cnnb.com.cn/nbrb/pc/content/202601/10/content_256688.html",
      "note": "眼下，全市全域国土空间综合整治项目多点开花、全速推进，涵盖农用地整治、村庄整治、生态保护修复、工业用地整治、城镇低效用地再开发五大方面。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S23",
      "source": "cn.chinadaily.com.cn",
      "title": "为山河\"梳妆\" 为发展\"赋能\"——横街-古林片区全域整治绘新景",
      "date": "2025-12-17",
      "url": "https://cn.chinadaily.com.cn/a/202512/17/WS69426144a310942cc4997242.html",
      "note": "在宁波海曙区横街这片39.73平方公里的先行片区内，16个行政村曾面临着生态受损、耕地碎片化、产业分散等发展困境，如今通过全域整治焕发出勃勃生机，一幅“山水林田焕新、农文产旅融合”的美丽画卷正在这里徐徐铺展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「浙江自然资源」（浙江省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：浙江省宁波市全域国土空间综合整治 全域土地综合整治"
  ],
  "counts": {
   "items": 13,
   "excerpts": 3,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 7,
    "其他媒体报道": 5
   }
  }
 },
 {
  "id": "07",
  "dir": "07_浙江省嘉兴市秀洲区新塍镇",
  "name": "浙江省嘉兴市秀洲区新塍镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S13",
      "source": "zj.xinhuanet.com_新华网浙江",
      "title": "嘉兴秀洲开展全域土地综合整治，助推现代农业发展",
      "date": "2023-07-05",
      "url": "http://www.zj.xinhuanet.com/20230705/d280e59c9e2542b586372ff5c7921070/c.html",
      "note": "近日，嘉兴市跨乡镇土地综合整治工程调度会暨高标准农田建设提升现场推进会在浙江省嘉兴市秀洲区召开，会上对新塍镇天福村高标准农田、火炬村高标准农田等项目进行了考察。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨浙江省嘉兴市秀洲区：城与乡，在共融中共荣",
      "date": "2024-07-09",
      "url": "https://www.iziran.net/news.html?aid=5330305",
      "note": "从1998年“箱子田”土地整理扎实起步，到 2018 年以新塍镇火炬村为试点，秀洲区在浙江省率先启动全域土地综合整治，编制完成区全域土地综合整治专项规划，并指导后续项目实施开展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "zrzyhghj.jiaxing.gov.cn_嘉兴市自然资源和规划局",
      "title": "激活“三生”空间化学反应，看秀洲区土地综合整治点“土”成金",
      "date": "2024-08-28",
      "url": "https://zrzyhghj.jiaxing.gov.cn/art/2024/8/28/art_1229235671_58933830.html",
      "note": "推荐的秀洲区新塍镇等2镇（街道）全域土地综合整治试点成功入选自然资源部发布首批15个全域土地综合整治试点典型案例。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1040
     },
     {
      "no": "S16",
      "source": "xiuzhou.gov.cn_嘉兴市秀洲区政府",
      "title": "“咱们村就这一块田！”",
      "date": "2023-12-28",
      "url": "https://www.xiuzhou.gov.cn/art/2023/12/28/art_1684823_59221219.html",
      "note": "2021年，新塍镇全域土地综合整治与生态修复工程获批国家级试点，一场涉及15个村共计8.56万亩土地的系统化改革全面铺开。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "xiuzhou.gov.cn_嘉兴市秀洲区政府",
      "title": "秀洲区力争以跨乡镇全域土地综合整治工程强力助推建设共同富裕示范区",
      "date": "2023-05-15",
      "url": "https://www.xiuzhou.gov.cn/art/2023/5/15/art_1229410917_5111884.html",
      "note": "优化提升空间资源，通过新塍镇、高照街道跨乡镇试点项目的实施，盘活存量和流量，推进土地要素向嘉兴高新区、运河湾新城、临空经济示范区三大主力平台集聚，促进产城融合，预计可产生节余增减挂钩指标1000余亩、低效工业用地再开发1200余亩。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "xiuzhou.gov.cn_嘉兴市秀洲区政府",
      "title": "以土地综合整治为牵引建设和美共富现代化新秀洲",
      "date": "2023-09-18",
      "url": "https://www.xiuzhou.gov.cn/art/2023/9/18/art_1229410917_5175925.html",
      "note": "大力开展农村人居环境整治，全面实施全域秀美整治工程，推动村庄变景区，省级美丽乡村示范镇实现全覆盖，建成省级共同富裕新时代美丽乡村示范带1条、美丽乡村风景线7条、未来乡村3个、3A级景区村庄13个、特色精品村23个，成功创建省级全域旅游示范区。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "jxszwsjb.jiaxing.gov.cn",
      "title": "秀洲区新塍镇观音桥等12村全域土地综合整治与生态修复工程（大通村捻店港）中标结果公告",
      "date": "2025-10-17",
      "url": "https://jxszwsjb.jiaxing.gov.cn/art/2025/10/17/art_1229743513_869654.html",
      "note": "主要涉及土地平整1196040㎡，清障739052㎡，宅基地清理52000m³；建设泵站8座；建设高效节水灌区4个；灌排渠系工程19214米，渠系建筑物317座。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S06",
      "source": "zj.news.cn_新华网浙江",
      "title": "嘉兴秀洲新塍镇“天福万亩方”入选全国典型案例",
      "date": "2024-06-27",
      "url": "http://www.zj.xinhuanet.com/20240627/e1a5286538bd4dc58f490c505edaec6c/c.html",
      "note": "新塍镇围绕全域空间优化、全域农房集聚、全域要素整治、全域产业整合及全域土地流转展开土地整治工作。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 843
     },
     {
      "no": "S07",
      "source": "zj.people.com.cn_人民网浙江频道",
      "title": "嘉兴秀洲：全域土地综合整治绘就幸福新图景",
      "date": "2023-10-12",
      "url": "https://zj.people.com.cn/n2/2023/1012/c186327-40601141.html",
      "note": "天福村的土地综合整治，是秀洲区全域土地综合整治的一个缩影。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2688
     },
     {
      "no": "S08",
      "source": "zj.cnr.cn_央广网浙江",
      "title": "从土地“破局”看秀洲发展巨变",
      "date": "2025-06-25",
      "url": "https://zj.cnr.cn/qxkx/20250625/t20250625_527229000.shtml",
      "note": "从1998年全区“箱子田”土地整理，到2018年以新塍镇火炬村为试点，在浙江省率先启动全域土地综合整治，再到如今在先行试点新塍镇等2个镇（街道）全域整治项目的基础上，加快推进王江泾—油车港、王店—洪合等项目实行统一规划、连片开发，打造稻米（粽子）、青鱼、莲藕3条超亿元全产业链，总产值突破50亿元……这些鲜活的探索，无一不是秀洲通过机制创新破题所获。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "jxxznews.com.cn_嘉兴日报秀洲新闻",
      "title": "新塍镇全域土地综合整治项目成功入选国家级试点",
      "date": "2021-01-19",
      "url": "https://www.jxxznews.com.cn/xwzx/jjxz/202411/t20241115_1073903.shtml",
      "note": "秀洲区新塍镇全域土地综合整治项目成功入选，成为国家级全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "cs.zjol.com.cn_浙江在线",
      "title": "秀洲：新塍全域土地综合整治项目入选国家级试点",
      "date": "2021-01-19",
      "url": "https://cs.zjol.com.cn/kzl/202101/t20210119_21991456.shtml",
      "note": "秀洲区新塍镇全域土地综合整治项目成功入选，成为国家级全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "sohu_搜狐",
      "title": "浙江嘉兴新塍镇：“小田变大田” 全域土地综合整治实现增产增收",
      "date": "2024-01-05",
      "url": "https://www.sohu.com/a/749713714_121797801",
      "note": "2021年，新塍镇全域土地综合整治与生态修复工程获批国家级试点，一场涉及15个村共计8.56万亩土地的系统化改革全面铺开。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.jxxznews.com.cn",
      "title": "新塍镇高标准农田建设提速",
      "date": "2025-12-02",
      "url": "https://www.jxxznews.com.cn/jzfc/202512/t20251202_6511588.shtml",
      "note": "一直以来，新塍镇将高标准农田建设与全域土地综合整治项目紧密结合，形成了协同发展的良好局面。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "zj.people.com.cn",
      "title": "\"万亩方\"喜迎丰收",
      "date": "2025-11-04",
      "url": "https://zj.people.com.cn/n2/2025/1104/c186327-41400602.html",
      "note": "据悉，天福村通过化零为整，建成高标准农田6000多亩，推动了“小田”变“大田”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.jxxznews.com.cn",
      "title": "火炬村靠土地\"活\"了",
      "date": "2024-11-15",
      "url": "https://www.jxxznews.com.cn/xwzx/jjxz/202411/t20241115_1093596.shtml",
      "note": "通过全域土地综合整治，率先建设以搬迁农民为主体、城镇居民和新居民共同参与的城乡融合社区。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「浙江自然资源」（浙江省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：浙江省嘉兴市秀洲区新塍镇 全域土地综合整治"
  ],
  "counts": {
   "items": 16,
   "excerpts": 3,
   "byCategory": {
    "核心权威报道": 2,
    "政府官方通报": 5,
    "其他媒体报道": 9
   }
  }
 },
 {
  "id": "08",
  "dir": "08_江西省九江市瑞昌市桂林街道",
  "name": "江西省九江市瑞昌市桂林街道",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨江西瑞昌桂林街道：统筹全域整治 绘就秀美蓝图",
      "date": "2024-08-27",
      "url": "https://www.iziran.net/news.html?aid=5340043",
      "note": "试点工作启动以来，瑞昌市同步开展市国土空间总体规划、桂林街道国土空间总体规划以及整治区域内12个行政村村庄规划的编制，做好全域土地综合整治实施方案与相应的国土空间规划衔接，全面明确目标定位，落实发展方向。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2902
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S04",
      "source": "bnr.jiujiang.gov.cn_九江市自然资源局",
      "title": "整装再出发 治出新未来——瑞昌市成功入选全国首批全域土地综合整治试点典型案例",
      "date": "2024-06-27",
      "url": "https://bnr.jiujiang.gov.cn/zwzx_255/xqdt/202406/t20240627_6593973.html",
      "note": "6月25日，自然资源部发布首批全域土地综合整治试点典型案例，瑞昌市桂林街道全域土地综合整治试点项目以统筹生态保护修复改善农村人居环境为亮点和特色，成功入选全国15个典型案例之一。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 743
     },
     {
      "no": "S13",
      "source": "ruichang.gov.cn_瑞昌市人民政府",
      "title": "瑞昌市2026年政府工作报告",
      "date": "2026-01-19",
      "url": "http://ruichang.gov.cn/fdzdxxgk/01/qtzggkxx/gzbgrcszf/202601/t20260119_7151169.html",
      "note": "强化对标创新，重点打造30项可复制、可推广的特色亮点工作，全域土地综合整治、“无证明城市”建设、江州联合造船厂低效用地盘活、自然灾害风险普查成果应用、优化国有（集体）企业改革稳评、电动自行车充电价格规范等工作入选全国典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "www.ruichang.gov.cn",
      "title": "瑞昌市2025年政府工作报告",
      "date": "2025-01-24",
      "url": "https://www.ruichang.gov.cn/fdzdxxgk/01/qtzggkxx/gzbgrcszf/202501/t20250124_6839181.html",
      "note": "桂林街道全域土地综合整治试点入选全国首批典型案例,紧密型县域医共体改革、应急广播建设、矿石运输廊道节地技术、农业“两提一调”综合治酸等入选全国优秀案例,“田长制”改革案例被省委改革办刊文推广,不动产登记全链条集成服务入选全省典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S08",
      "source": "jjcbw.com_九江日报掌中九江",
      "title": "央媒看九江｜《人民日报》点赞九江瑞昌这项工作",
      "date": "2024-10-23",
      "url": "https://www.jjcbw.com/v2/news/article/322633.html",
      "note": "10月23日，人民日报2版稿件《全域土地综合整治 助力和美乡村建设（政策解读）》，其中报道了作为江西唯一街道类型试点项目，九江市瑞昌桂林街道已全面启动土地开发、城乡建设用地增减挂钩、矿山生态修复、高标准农田建设等全域土地综合整治项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "news.qq.com_腾讯新闻",
      "title": "瑞昌：推进全域整治 绘制秀美蓝图",
      "date": "2023-05-15",
      "url": "https://news.qq.com/rain/a/20230515A09ERR00",
      "note": "瑞昌市桂林街道全域土地综合整治试点方案自2022年9月获批以来，瑞昌市自然资源事务中心兼顾土地资源保护、村庄规划提升、特色产业发展等多重目标，依照方案稳步实施，取得初步成效。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "sohu_搜狐",
      "title": "瑞昌市入选首批全域土地综合整治试点典型案例",
      "date": "2024-06-25",
      "url": "https://www.sohu.com/a/788401306_121106994",
      "note": "6月25日，自然资源部发布首批全域土地综合整治试点典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.jx.chinanews.com.cn",
      "title": "江西瑞昌：强化耕地保护 推进土地整治",
      "date": "2023-06-14",
      "url": "https://www.jx.chinanews.com.cn/news/2023/0614/80364.html",
      "note": "制定《瑞昌市桂林街道全域土地综合整治试点项目实施方案》，努力构建农田集中连片、建设用地集中集聚、空间形态高效集约的国土空间新格局。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江西自然资源」（江西省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江西省九江市瑞昌市桂林街道 全域土地综合整治"
  ],
  "counts": {
   "items": 8,
   "excerpts": 2,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 3,
    "其他媒体报道": 4
   }
  }
 },
 {
  "id": "09",
  "dir": "09_江西省鹰潭市余江区马荃镇",
  "name": "江西省鹰潭市余江区马荃镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨江西余江马荃镇：“一改促六化” 绘就乡村振兴新画卷",
      "date": "2024-08-31",
      "url": "https://www.iziran.net/news.html?aid=5340643",
      "note": "同时，马荃镇还参照宅基地制度改革工作构架，压实村党支部责任，让试点村党支部成为推进全域整治的“主心骨”“领头雁”。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4445
     },
     {
      "no": "S03",
      "source": "iziran_中国自然资源报",
      "title": "江西鹰潭余江分局推进全域土地综合整治试点",
      "date": "2024-05-22",
      "url": "https://www.iziran.net/news.html?aid=5320161",
      "note": "在此基础上，余江分局一方面将涉及高标准农田建设、土地整理、人居环境整治、废弃矿山生态修复等方面的项目资金予以整合，系统推进整治项目建设，实施相关项目46个；另一方面积极进行制度整合，形成了《余江区马荃镇全域土地综合整治试点工作方案》《余江区开展农村闲置宅基地和闲置农房盘活利用工作实施方案》等制度成果。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 854
     },
     {
      "no": "S20",
      "source": "chinanews.com.cn_中国新闻网（中新社",
      "title": "（活力中国调研行）农地入市，江西余江算了“三笔账”",
      "date": "2025-07-11",
      "url": "https://www.chinanews.com.cn/cj/2025/07-11/10446170.shtml",
      "note": "记者日前走访余江区锦江镇城乡融合发展示范园，这个一期占地114.5亩的示范园就坐落于入市的集体经营性建设用地上。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "xinhuanet.com_新华网",
      "title": "江西余江：让“闲置房”“闲置地”生金",
      "date": "2024-01-21",
      "url": "https://www.xinhuanet.com/local/20240121/1b84a6a5fff84f8f9349fc2726845288/c.html",
      "note": "中国农业银行鹰潭余江支行等金融机构也及时为当地农户办理各类小额贷款，支持村民开办农家乐。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S04",
      "source": "bnr.jiangxi.gov.cn_江西省自然资源厅",
      "title": "余江大力推进马荃镇全域土地综合整治试点工作",
      "date": "2024-05",
      "url": "https://bnr.jiangxi.gov.cn/jxszrzyt/sxdt/content/content_1887091926254264320.html",
      "note": "马荃镇参照宅改工作构架，压实村党支部责任，让试点村党支部成为推进全域整治的 “主心骨”“领头雁”。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1830
     },
     {
      "no": "S14",
      "source": "yingtan.gov.cn_鹰潭市人民政府",
      "title": "生态为基 服务赋能——我市自然资源工作书写高质量发展“硬核答卷”",
      "date": "2026-01-09",
      "url": "http://www.yingtan.gov.cn/art/2026/1/9/art_47_1574178.html",
      "note": "余江区马荃镇全域土地综合整治试点成效明显，入选自然资源部全域土地综合整治典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "yingtan.gov.cn_鹰潭市人民政府",
      "title": "鹰潭市自然资源局开展“青春筑绿·矿山重生”主题实践活动",
      "date": "2026-04-17",
      "url": "http://www.yingtan.gov.cn/art/2026/4/17/art_12445_1586734.html",
      "note": "志愿服务结束后，青年干部先后前往杨柳村土地开发项目现场和马荃镇雕刻扶贫车间，实地学习考察全域土地综合整治与乡村振兴融合发展成果。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S28",
      "source": "www.zgcounty.com",
      "title": "鹰潭市余江区2025年政府工作报告",
      "date": "2025-01-09",
      "url": "https://www.zgcounty.com/news/66800.html",
      "note": "扎实做好中央、省环保督察问题整改，空气质量优良天数率创有监测记录以来历史最优，主要河流断面和5个集中式饮用水水源地水质达标率保持100%，重点建设用地安全利用率保持100%。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S08",
      "source": "ytpaper.ytnews.cn_鹰潭日报",
      "title": "高质量推进土地综合整治 建设宜居宜业和美乡村",
      "date": "2024-10-08",
      "url": "http://ytpaper.ytnews.cn/html/2024-10/08/content_136551_17866690.htm",
      "note": "全域土地综合整治试点工作开展以来，马荃镇坚持系统谋划、高位推动，按照国土空间规划和“三区三线”最新成果要求，编制完成了马荃村、杨柳村、洪岩村、霞山村“多规合一”的村庄规划。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "ytnews.cn_鹰潭日报",
      "title": "马荃镇：高质量推进土地综合整治 建设宜居宜业和美乡村",
      "date": "2024-10-10",
      "url": "https://www.ytnews.cn/news/2024/1010/20241010123243.html",
      "note": "全域土地综合整治试点工作开展以来，马荃镇坚持系统谋划、高位推动，按照国土空间规划和“三区三线”最新成果要求，编制完成了马荃村、杨柳村、洪岩村、霞山村“多规合一”的村庄规划。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "ytpaper.ytnews.cn_鹰潭日报",
      "title": "生态为基 服务赋能",
      "date": "2026-01-08",
      "url": "http://ytpaper.ytnews.cn/html/2026-01/08/content_136551_19202028.htm",
      "note": "余江区马荃镇全域土地综合整治试点成效明显，入选自然资源部全域土地综合整治典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "stzg.china.com.cn_中国网生态中国",
      "title": "用好鹰潭余江“宅改经验”，打好整治“组合拳”推进乡村振兴",
      "date": "2023-12-22",
      "url": "http://stzg.china.com.cn/2023-12/22/content_42646585.htm",
      "note": "将2020年，在鹰潭市自然资源局余江分局根据《江西省自然资源厅关于开展全域土地综合整治试点工作的实施意见》，将余江区马荃镇申报国家全域土地综合整治试点项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "jx.ifeng.com_凤凰网江西",
      "title": "江西两地试点入选全国首批全域土地综合整治试点典型案例",
      "date": "2024-07-19",
      "url": "https://jx.ifeng.com/c/8bJyzouvlV7",
      "note": "江西新闻客户端讯 （江西日报全媒体记者杨碧玉 实习生李懿、阮瑶佳）近日，记者从省自然资源厅获悉：自然资源部发布全国首批15个全域土地综合整治试点典型案例，我省瑞昌市桂林街道全域土地综合整治试点、鹰潭市余江区马荃镇全域土地综合整治试点入选。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S23",
      "source": "ytnews.cn_鹰潭日报（鹰潭新闻网）",
      "title": "余江区：从重建设到重长效 细化新增耕地全周期监管",
      "date": "2026-08-29",
      "url": "https://www.ytnews.cn/news/2026/0829/20260829133107.html",
      "note": "联动水利、农业农村部门修缮沟渠、机耕道路共362米，方便290亩耕地开展农机作业;疏通全域农田输水管道，惠及耕地630亩，减轻农户灌溉开销。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S24",
      "source": "ytnews.cn_鹰潭日报（鹰潭新闻网）",
      "title": "荒地蜕良田 整治结硕果——余江区土地提质绘就惠民丰收答卷",
      "date": "2026-09-18",
      "url": "https://www.ytnews.cn/news/2026/0918/20260918133572.html",
      "note": "各职能部门靠前服务、联动发力：自然资源部门常态化督查工程质量、进度和安全生产;农粮部门深入田间地头，指导施肥、灌溉、病虫害防治，优先调配沼液肥资源保障新开发耕地;水利部门统筹全域灌溉水源，实现新增耕地灌溉全覆盖。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江西自然资源」（江西省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江西省鹰潭市余江区马荃镇 全域土地综合整治"
  ],
  "counts": {
   "items": 15,
   "excerpts": 3,
   "byCategory": {
    "核心权威报道": 4,
    "政府官方通报": 4,
    "其他媒体报道": 7
   }
  }
 },
 {
  "id": "10",
  "dir": "10_河南省商丘市民权县绿洲街道吴庄等12村",
  "name": "河南省商丘市民权县绿洲街道吴庄等12村",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨河南商丘民权县：打造“粮丰民安”的整治样板",
      "date": "2024-08-28",
      "url": "https://www.iziran.net/news.html?aid=5340051",
      "note": "试点区域存在雨污处理设施匮乏、环卫设施不足、道路等级普遍较低、缺少公厕等基础设施薄弱问题，亟待通过全域整治提高基础设施覆盖率，改善人居环境。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4260
     },
     {
      "no": "S14",
      "source": "iziran_中国自然资源报",
      "title": "河南民权：田畴连百顷 翠浪舞晴空",
      "date": "2024-07-24",
      "url": "https://www.iziran.net/news.html?aid=5333155",
      "note": "整体推进农用地、建设用地整理，是全域土地综合整治的主要任务。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S05",
      "source": "minquan.gov.cn_民权县人民政府",
      "title": "民权县自然资源局2023年乡村振兴工作总结",
      "date": "2023-12-25",
      "url": "http://minquan.gov.cn/bmxxgk/zrzyj/fdzdgknr37/xczx18/gzls18/content_8892",
      "note": "民权县绿洲街道吴庄等12个村全域土地综合整治试点项目位于民权县绿洲街道办事处，涉及吴庄等12个行政村，项目区总规模3659.81公顷，该项目于2021年1月4日被自然资源部备案纳入国家试点，项目主要涉及农用地整理、建设用地复垦、人居环境提升、生态保护修复等工程类型，方案优化后项目预算总投资9.8亿元，目前已累计投入资金近4亿元。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4688
     },
     {
      "no": "S06",
      "source": "minquan.gov.cn_民权县人民政府",
      "title": "民权县自然资源局对县十六届人大六次会议第19号建议的答复",
      "date": "2025-07-20",
      "url": "https://www.minquan.gov.cn/bmxxgk/zrzyj/fdzdgknr37/jytabl37/rddbjybl37/content_30173",
      "note": "根据上级精神,2020年,我县申报了民权县绿洲街道吴庄等12个村全域土地综合整治试点项目,项目主要涉及农用地整理、建设用地复垦、人居环境提升、生态保护修复、产业导入等工程类型,该项目于2021年1月4日经自然资源部备案纳入国家试点。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1920
     },
     {
      "no": "S13",
      "source": "minquan.gov.cn_民权县人民政府",
      "title": "民权县自然资源局2024年工作计划",
      "date": "2023-12-23",
      "url": "http://minquan.gov.cn/bmxxgk/zrzyj/fdzdgknr37/ghjh37/gzgh17/content_7902",
      "note": "按照省厅指导意见，对全域土地综合整治试点项目进行局部调整，实施方案和永久基本农田调整补划方案待省厅批复后，加快推进项目实施，促进耕地保护和土地集约节约利用，改善农村人居环境，打造生产、生活、生态空间布局更加优化的乡村振兴样板。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "shangqiu.gov.cn_商丘市人民政府",
      "title": "商丘市自然资源和规划局对市六届人大三次会议第279号建议的答复",
      "date": "2025-07-24",
      "url": "https://www.shangqiu.gov.cn/zwgk/fdzdgknr/jytabl47szfbgs/rddbjybl147szfbgs__zwgk/fdzdgknr/jytabl28sqszrzyhghj/rddbjybl28sqszrzyhghj/content_216582",
      "note": "建议中“将分布零散、不利于耕作的25度以上坡耕地实施退耕还林，将无法耕作的耕地全部调整为非基本农田，因地制宜适度使用，作为建设用地”，建议通过申报全域土地综合整治试点项目予以解决。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "zrzyghj.shangqiu.gov.cn_商丘",
      "title": "商丘市自然资源和规划局2023年工作总结",
      "date": "2024-03-25",
      "url": "https://zrzyghj.shangqiu.gov.cn/zwgk/fdzdgknr/ghjh28sqszrzyhghj/ndjhzj28sqszrzyhghj/content_138624",
      "note": "全域土地综合整治有序实施，全省全域土地综合整治试点观摩活动在民权县举行。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S08",
      "source": "newpaper.dahe.cn_河南日报",
      "title": "我省19个国家级全域土地综合整治试点开工",
      "date": "2023-02-19",
      "url": "https://newpaper.dahe.cn/hnrb/html/2023-02/19/content_11_102680.htm",
      "note": "本报讯（记者 李运海 通讯员 郑天）记者从2月17日召开的河南省国家级全域土地综合整治试点民权现场会上获悉，全省19个国家级全域土地综合整治试点已全部开工建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "epaper.sqrb.com.cn_商丘日报",
      "title": "投资12亿元 民权对12个村进行全域土地整治",
      "date": "2023-02-21",
      "url": "https://epaper.sqrb.com.cn/sqrb/pc/con/202302/21/content_49487.html",
      "note": "记者从2月17日召开的河南省国家级全域土地综合整治试点民权现场会上获悉，全省19个国家级全域土地综合整治试点已全部开工建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "gov.cn_中国政府网",
      "title": "河南19个国家级全域土地综合整治试点开工",
      "date": "2023-02-19",
      "url": "https://www.gov.cn/xinwen/2023-02/19/content_5742127.htm",
      "note": "记者从2月17日召开的河南省国家级全域土地综合整治试点民权现场会上获悉，全省19个国家级全域土地综合整治试点已全部开工建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "sohu.com_搜狐",
      "title": "总投资12亿元！商丘一地对12个村庄进行全域土地综合整治",
      "date": "2023-02-19",
      "url": "https://www.sohu.com/a/642980305_121123875",
      "note": "记者从2月17日召开的河南省国家级全域土地综合整治试点民权现场会上获悉， 全省19个国家级全域土地综合整治试点已全部开工建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "qikan.com.cn",
      "title": "民权县：全域整治点\"土\"成金",
      "date": "2024-07-21",
      "url": "https://qikan.com.cn/article/ziyd20240721.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「河南自然资源」（河南省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：河南省商丘市民权县绿洲街道吴庄等12村 全域土地综合整治"
  ],
  "counts": {
   "items": 12,
   "excerpts": 3,
   "byCategory": {
    "核心权威报道": 2,
    "政府官方通报": 5,
    "其他媒体报道": 5
   }
  }
 },
 {
  "id": "11",
  "dir": "11_湖北省孝感市孝南区朱湖办事处",
  "name": "湖北省孝感市孝南区朱湖办事处",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨湖北省孝感朱湖办事处：用全域整治绘就“朱湖样板”",
      "date": "2024-09-06",
      "url": "https://www.iziran.net/news.html?aid=5341710",
      "note": "通过全域土地综合整治“1+N”模式，放大“朱湖糯米”国家地理标志保护农产品优势，做精做优朱湖糯稻特色农业，发展4万多亩糯稻种植基地，带动周边形成8万亩糯米种植产业，为麻糖米酒、休闲糕点、功能饮品等50余家糯稻深加工企业供应优质糯稻，带动上下游配套企业120多家，初步形成“育繁推一体化、产供销一条龙”糯稻全产业链，目前年产值突破40亿元。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 5279
     },
     {
      "no": "S19",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "全省唯一！孝南区朱湖全域土地综合整治试点入选全国首批典型案例",
      "date": "2024-06-26",
      "url": "https://news.hubeidaily.net/mobile/c_2802366.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "朱湖全域国土综合整治火热推进",
      "date": "2022-02-17",
      "url": "https://news.hubeidaily.net/pc/269795.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "“颜值”“内涵”并重，朱湖全域国土综合整治见成效",
      "date": "2022-11-01",
      "url": "https://news.hubeidaily.net/pc/937815.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "朱湖全域国土综合整治项目终期绩效评价获“优秀”",
      "date": "2026-01-27",
      "url": "https://news.hubeidaily.net/pc/c_5074404.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "zhengxie.xiaonan.gov.cn_孝感市孝南区政协",
      "title": "全域国土空间综合整治的孝南实践",
      "date": "2022-03-21",
      "url": "http://zhengxie.xiaonan.gov.cn/?Article126/1603.html",
      "note": "为了加快对接武汉，融入武汉，结合实际情况，孝南加大朱湖全国全域国土综合整治项目试点建设力度，先期摸索经验，再逐步向全区推开。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2998
     },
     {
      "no": "S16",
      "source": "xiaonan.gov.cn_孝感市孝南区政府",
      "title": "孝南区朱湖办事处全域土地综合整治试点入选全国首批全域土地综合整治试点典型案例",
      "date": "2024-06-26",
      "url": "http://xiaonan.gov.cn/bmdt/1885815.jhtml",
      "note": "6月25日，自然资源部发布首批全域土地综合整治试点典型案例，全国共有15个试点入选，孝南区朱湖办事处全域土地综合整治试点名列其中，全省唯一。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "zrzy.xiaogan.gov.cn_孝感市自然资",
      "title": "我市孝南朱湖项目入选自然资源部首批全域国土综合整治试点典型示范案例",
      "date": "2024-06-26",
      "url": "http://zrzy.xiaogan.gov.cn/gzdt2/1885724.jhtml",
      "note": "朱湖项目坚持规划引领，统筹做好全域国土综合整治+文章，开展田水路林村和人居环境系统治理，实现空间格局优化、耕地保护水平提升、生态环境改善、产业聚集发展的整治目标，建成以国家湿地公园为核心的生态友好型高质量现代农业发展区。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S23",
      "source": "www.sohu.com",
      "title": "省里一锤定音：朱湖，优秀！",
      "date": "2026-01-28",
      "url": "https://www.sohu.com/a/980803141_121123745",
      "note": "2026年1月22日至23日，湖北省全域土地综合整治领导小组办公室组织专家团队，通过“实地踏勘+资料审阅”相结合的方式，对“2020年度孝感市孝南区朱湖办事处全域土地综合整治项目”开展省级绩效评价。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S24",
      "source": "www.sohu.com",
      "title": "自然资源部：湖北孝感朱湖国家湿地公园成为\"土地综合整治+乡村振兴\"的典范",
      "date": "2025-09-11",
      "url": "https://www.sohu.com/a/933757587_121123745",
      "note": "比如，湖北省孝感市结合全域土地综合整治，开展朱湖国家湿地公园保护修复，每年创造旅游产值超过2000万元，成为“土地综合整治+乡村振兴”的典范。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S04",
      "source": "epaper.hubeidaily.net_湖北日报",
      "title": "3万亩生态稻撑起孝感米酒产业 朱湖湿地成为土地综合整治典范",
      "date": "2025-09-15",
      "url": "https://epaper.hubeidaily.net/pc/content/202509/15/content_326236.html",
      "note": "9月10日，国务院新闻办公室举行新闻发布会，介绍孝感市结合全域土地综合整治，开展朱湖国家湿地公园保护修复的典型案例。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1651
     },
     {
      "no": "S05",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "全国典型案例，朱湖入选了！",
      "date": "2024-06-26",
      "url": "https://news.hubeidaily.net/mobile/c_2797965.html",
      "note": "朱湖全域国土综合整治项目建设周期3年，涵盖朱湖全域7.53万亩土地。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 809
     },
     {
      "no": "S06",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "孝南朱湖：试试国土综合整治，撂荒地变成高产田",
      "date": "2025-09-24",
      "url": "https://news.hubeidaily.net/pc/c_4574626.html",
      "note": "改变始于一场“壮士断腕”的整治：关停搬迁8家企业、50家养殖场，拆除违建和拦水坝，整治河渠236公里，新建污水处理厂，改造厕所2400座……通过清淤疏浚、治理黑臭水体、土壤修复等措施，朱湖水质明显改善，272种水鸟重返栖息。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 741
     },
     {
      "no": "S08",
      "source": "m.cnhubei.com_荆楚网（湖北日报网）",
      "title": "全国典型案例，孝南朱湖入选！",
      "date": "2024-06-27",
      "url": "http://m.cnhubei.com/content/2024-06/27/content_18097520.html",
      "note": "荆楚网（湖北日报网）讯（通讯员 张宏彬、左军）6月25日，自然资源部发布首批全域土地综合整治试点典型案例，全国共有15个试点入选，孝南区朱湖办事处全域土地综合整治试点名列其中，全省唯一。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "news.cnhubei.com_荆楚网（湖北日报网）",
      "title": "孝南朱湖全域国土综合整治获全省“优秀”等次",
      "date": "2026-01-28",
      "url": "http://news.cnhubei.com/content/2026-01/28/content_19798352.html",
      "note": "下一步，孝南区将巩固拓展整治成果，深化“整治+产业+治理”融合机制，统筹“山水林田湖草”系统治理，推进“产村人文景生”深度融合，奋力打造可复制、可推广的全域国土综合整治升级版，走出一条生态保护与乡村振兴相得益彰的“朱湖路径”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "m.xgnews.cn_孝感日报",
      "title": "优化再造，重塑发展空间——朱湖全域国土综合整治项目探访",
      "date": "2022",
      "url": "https://m.xgnews.cn/p/195257.html",
      "note": "深秋时节，走进孝南区朱湖办事处全域国土综合整治项目一期菱角湖片区现场，近500亩的土地已经完成复垦。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "sohu.com_搜狐",
      "title": "全国典型，全省唯一，就是朱湖！",
      "date": "2024-09-06",
      "url": "https://www.sohu.com/a/806715036_121123745",
      "note": "朱湖全域国土综合整治项目建设周期3年，涵盖孝南区朱湖农场（办事处）全域7.53万亩土地。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "sohu.com_搜狐",
      "title": "孝感朱湖入选全国首批全域土地综合整治试点典型案例",
      "date": "2024-06-29",
      "url": "https://www.sohu.com/a/789399754_121284943",
      "note": "朱湖全域国土综合整治项目建设周期3年，涵盖朱湖全域7.53万亩土地。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "sohu.com_搜狐",
      "title": "朱湖全域国土综合整治项目顺利通过省级终期绩效复核获评“优秀”",
      "date": "2026-01-26",
      "url": "https://www.sohu.com/a/980016908_121106908",
      "note": "1月22日至23日，省全域国土综合整治领导小组办公室组织专家组，对“2020年度孝南区朱湖办事处全域国土综合整治项目”开展终期绩效复核。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「湖北自然资源」（湖北省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：湖北省孝感市孝南区朱湖办事处 全域土地综合整治"
  ],
  "counts": {
   "items": 19,
   "excerpts": 5,
   "byCategory": {
    "核心权威报道": 5,
    "政府官方通报": 5,
    "其他媒体报道": 9
   }
  }
 },
 {
  "id": "12",
  "dir": "12_湖南省长沙市浏阳市永安镇",
  "name": "湖南省长沙市浏阳市永安镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨湖南浏阳永安镇：沃土“搬家”造良田",
      "date": "2024-09-03",
      "url": "https://www.iziran.net/news.html?aid=5341376",
      "note": "浏阳市永安镇全域土地综合整治大力推动区域内山水林田湖草整体保护、系统修复和综合治理，促进生态效益、经济效益、社会效益相统一，实现从一时一处好到永安全域美的华丽蜕变。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 6150
     },
     {
      "no": "S17",
      "source": "hunan.voc.com.cn_华声在线（湖南日报",
      "title": "守护大地肌理 擦亮生态底色 长沙市自然资源和规划局以实干实绩守护资源",
      "date": "2026-04-22",
      "url": "https://hunan.voc.com.cn/news/202604/32490115.html",
      "note": "同步统筹全域底数摸排工作，全面启动全市采矿损毁土地全域外业专项调查，逐图斑实地核验确权，精准摸清3600个图斑、合计2584.14公顷损毁土地实况，为后续分级分类、精准施策开展生态修复筑牢翔实数据底座。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "m.voc.com.cn_新湖南（湖南日报）",
      "title": "全省首个！浏阳这个乡镇探索打造“未来乡村”！",
      "date": "2022-11-15",
      "url": "https://m.voc.com.cn/rmt/article/5179050.html",
      "note": "近日，自然资源部国土空间生态修复司向省自然资源厅下发《自然资源部国土空间生态修复司关于同意湖南省浏阳市永安镇全域土地综合整治试点相关材料备案的函》，浏阳市永安镇全域土地综合整治试点成为全国第四个、湖南省第一个通过自然资源部备案的试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S07",
      "source": "liuyang.gov.cn_浏阳市人民政府",
      "title": "浏阳市永安镇全域土地综合整治试点入选自然资源部首批全域土地综合整治试点典型案例",
      "date": "2024-07-01",
      "url": "http://liuyang.gov.cn/zwgk/zfxxgk/bmxzjdgk/szfgzbm/sgdzyj/gzdt/202407/t20240701_11483776.html",
      "note": "6月25日，自然资源部发布首批全域土地综合整治试点典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "gov.cn_中国政府网",
      "title": "湖南深入推进全域土地综合整治",
      "date": "2025-06-11",
      "url": "https://www.gov.cn/lianbo/difang/202506/content_7027290.htm",
      "note": "日前，省自然资源厅印发《关于深入推进全域土地综合整治工作的通知》（以下简称《通知》），在前期浏阳市客土改造1700亩非粮化耕地等试点成功经验基础上，明确全域土地综合整治的主要目标、职责分工、工作程序、实施内容和工作要求。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "liuyang.gov.cn_浏阳市人民政府",
      "title": "奋进2025丨市自然资源局：守好沃土，筑牢美丽浏阳“生态基底”",
      "date": "2025-01-02",
      "url": "http://liuyang.gov.cn/zwgk/zfxxgk/bmxzjdgk/szfgzbm/sgdzyj/gzdt/202501/t20250102_11705214.html",
      "note": "提速乡村建设改造、完善乡村基础设施、健全基层公共服务、连片发展特色产业……通过全域土地综合整治，永安镇大力推动区域内山水林田湖草整体保护、系统修复和综合治理，促进生态效益、经济效益、社会效益相统一，实现了从一时一处好到永安全域美的华丽蜕变。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "liuyang.gov.cn_浏阳市人民政府",
      "title": "浏阳市自然资源局2025年工作总结和2026年工作计划",
      "date": "2026-08-13",
      "url": "http://liuyang.gov.cn/zwgk/zfxxgk/bmxzjdgk/szfgzbm/sgdzyj/ghjh/jhzj/202608/t20260813_12524270.html",
      "note": "大力推进永安、洞阳、沙市镇全域土地综合整治试点项目建设，不断优化空间布局、深挖资源潜力、推进生态修复。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "liuyang.gov.cn_浏阳市人民政府",
      "title": "永安镇五年政府工作报告",
      "date": "2026-09-07",
      "url": "http://liuyang.gov.cn/zwgk/zfxxgk/fdzdgknr/ghxx/ndgzjhjzj/202609/t20260907_12545025.html",
      "note": "耕地保护立标打样，丰裕耕作层剥离再利用项目让1690亩低效耕地重获新生，获省政府通报表扬并入选自然资源部全域土地综合整治试点首批典型案例，为全国耕地保护提供了“永安样本”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "zrzyt.hunan.gov.cn_湖南省自然资源",
      "title": "长沙：市局专题调度全域土地综合整治试点工作",
      "date": "2021-04-13",
      "url": "https://zrzyt.hunan.gov.cn/zrzyt/xxgk/gzdt/sxxx/202104/t20210413_16467206.html",
      "note": "三是镇村规划、全域土地整治规划、实施方案要相互配合，要将整治任务、指标和布局要求在规划中落实到具体地块，并明确实施时序、项目安排、资金估算和投资来源等，确保实施方案的可操作性。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S09",
      "source": "lyrb.com.cn_浏阳日报",
      "title": "永安镇入选，为湖南唯一",
      "date": "2024-06-27",
      "url": "https://lyrb.com.cn/content/646840/61/14039074.html",
      "note": "其中，浏阳市永安镇全域土地综合整治试点入选，为湖南唯一。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "lyrb.com.cn_浏阳日报",
      "title": "永安镇成全国第四个试点 探索打造“未来乡村”",
      "date": "2022-11-16",
      "url": "https://lyrb.com.cn/content/646655/50/12052025.html",
      "note": "浏阳日报讯（记者许雅兰）近日，自然资源部国土空间生态修复司向湖南省自然资源厅下发《自然资源部国土空间生态修复司关于同意湖南省浏阳市永安镇全域土地综合整治试点相关材料备案的函》，标志着永安镇全域土地综合整治试点成为全国第四个、湖南省第一个通过自然资源部备案的试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "hn.chinanews.com.cn_中国新闻网湖南",
      "title": "优质耕作层“搬家” 浏阳1700亩薄地变良田",
      "date": "2024-06-26",
      "url": "https://www.hn.chinanews.com.cn/news/zfqy/2024/0626/493917.html",
      "note": "6月25日，自然资源部发布首批15个全域土地综合整治试点典型案例，湖南省长沙市浏阳市永安镇全域土地综合整治试点获选。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "news.cnr.cn",
      "title": "四中全会精神在基层丨湖南浏阳：一亩耕地的\"生长\"",
      "date": "2025-12-21",
      "url": "https://news.cnr.cn/native/gd/20251221/t20251221_527467796.shtml",
      "note": "永安镇农业农村综合服务中心副主任曹威说，通过推广低镉水稻种植，实现育秧、生长、丰收全过程监管，改良后的田地不仅实现了“能种粮”，而且成为“丰收稳产区”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "gxlg.icswb.com",
      "title": "启动实施150个项目！湖南高位推进全域土地综合整治",
      "date": "2025-09-29",
      "url": "https://gxlg.icswb.com/h/161/20250929/947821.html",
      "note": "长沙市浏阳市永安镇全域土地综合整治试点是自然资源部部署的全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「湖南自然资源」（湖南省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：湖南省长沙市浏阳市永安镇 全域土地综合整治"
  ],
  "counts": {
   "items": 14,
   "excerpts": 1,
   "byCategory": {
    "核心权威报道": 3,
    "政府官方通报": 6,
    "其他媒体报道": 5
   }
  }
 },
 {
  "id": "13",
  "dir": "13_广东省广州市从化区",
  "name": "广东省广州市从化区",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨广州市从化区：大湾区“百千万工程”的整治实践",
      "date": "2024-08-29",
      "url": "https://www.iziran.net/news.html?aid=5340278",
      "note": "2023年8月，从化区全域土地综合整治试点实施方案获得自然资源部批复同意。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 5339
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "gd.gov.cn_广东省人民政府",
      "title": "广东持续探索全域土地综合整治机制 已批复216个实施方案",
      "date": "2026-06",
      "url": "https://www.gd.gov.cn/gdywdt/zwzt/bxqzwc/gzbs/tjtzjzgg/content/post_4916355.html",
      "note": "2019年12月，自然资源部部署开展全域土地综合整治试点，以乡镇或村庄为单元推进农用地整治、建设用地整理和生态修复。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2125
     },
     {
      "no": "S04",
      "source": "nr.gd.gov.cn_广东省自然资源厅",
      "title": "新开端 再动员——广东省召开全域土地综合整治推进会暨培训会",
      "date": "2023-12",
      "url": "https://nr.gd.gov.cn/xwdtnew/zwdt/content/post_4323154.html",
      "note": "12月25日至26日，省自然资源厅在广州市从化区召开广东省全域土地综合整治推进会暨培训会，对全省全域土地综合整治试点工作进行再动员、再部署。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1056
     },
     {
      "no": "S05",
      "source": "nr.gd.gov.cn_广东省自然资源厅",
      "title": "图文实录 广东首届全域土地综合整治项目推介活动",
      "date": "2023-12",
      "url": "https://nr.gd.gov.cn/ztzlnew/bxqzwcgzlfz/content/post_4301031.html",
      "note": " 通过全省金融机构组织架构改革和流程再造，为全域土地综合整治提供制度保障。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 6842
     },
     {
      "no": "S06",
      "source": "nr.gd.gov.cn_广东省自然资源厅",
      "title": "就在佛山南海！广东省首届全域土地综合整治推介活动即将启动",
      "date": "2023-12",
      "url": "https://nr.gd.gov.cn/xwdtnew/zwdt/content/post_4299191.html",
      "note": "通过推进全域土地综合整治，促进资源要素精准配置，释放乡村土地发展潜能，建造生态设计小镇，打造城市近郊万亩良田，让村民“住在景区内”，既能看得见青山、望得见绿水、留得住乡愁，实现产业兴旺和生活富裕。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 256
     },
     {
      "no": "S07",
      "source": "conghua.gov.cn_广州市从化区人民政府",
      "title": "探索“全域+”整治模式 打造全域土地综合整治“从化样板”",
      "date": "2024-07-05",
      "url": "https://www.conghua.gov.cn/zwgk/tpxw/content/mpost_9743306.html",
      "note": "试点开展以来，从化区立足区域发展实际，积极在体制机制、制度建设、资金筹措等方面探索创新，将推进全域土地综合整治作为面向区域高质量发展的示范工程、绿色工程、惠民工程，形成粤港澳大湾区“百县千镇万村高质量发展工程”实施路径，全力打造国际大都市近郊区全域土地综合整治的“广州样板”“湾区经验”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "conghua.gov.cn_广州市从化区人民政府",
      "title": "从化区全域土地综合整治成效明显",
      "date": "2025-03-06",
      "url": "https://www.conghua.gov.cn/zwgk/chyw/content/mpost_10144572.html",
      "note": "近日，省委、省政府办公厅印发《关于深入推进全域土地综合整治助力“百县千镇万村高质量发展工程”的意见》，为全省土地综合整治工作指明方向。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "ghzyj.gz.gov.cn_广州市规划和自然资源局",
      "title": "从化区全域土地综合整治：擘画生态宜居新图景，赋能“百千万工程”",
      "date": "2025-03-21",
      "url": "https://ghzyj.gz.gov.cn/xwzx/gzdt/content/post_10170891.html",
      "note": "近日，省委、省政府办公厅印发《关于深入推进全域土地综合整治助力“百县千镇万村高质量发展工程”的意见》，为全省土地综合整治工作指明方向。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "gz.gov.cn_广州市人民政府",
      "title": "从化区以全域土地综合整治促进乡村振兴实现高质量发展",
      "date": "2023-02-15",
      "url": "https://www.gz.gov.cn/zt/gzlfzgzld/gzgzlfz/content/post_8803033.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "ghzyj.gz.gov.cn_广州市规划和自然资源局从化区分局",
      "title": "全域整治显成效 耕地保护再添新篇——从化区鳌头万亩良田示范项目",
      "date": "2024-09-25",
      "url": "https://ghzyj.gz.gov.cn/xwzx/gzdt/content/post_9885563.html",
      "note": "在国家耕地保护与粮食安全战略的指引下，广州市规划和自然资源局从化区分局积极响应号召，通过全域土地综合整治科学规划、深入实施，先行先试打造鳌头万亩良田示范项目农田整治样板工程。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "conghua.gov.cn_广州市从化区人民政府",
      "title": "从化区以五个聚焦全力推进全域土地综合整治试点",
      "date": "2022-12-07",
      "url": "https://www.conghua.gov.cn/zfjg/gzsghhzrzyjchqfj/zwgk/zfxxgkml/gzdt/content/mpost_8698834.html",
      "note": "自2021年9月从化区成功获批全国县域全域土地综合整治试点以来，从化区将全域土地综合整治试点工作作为推进国土空间功能布局优化、实现资源要素高质量发展的重大工程，全面助推乡村振兴，奋力建设更高水平幸福美丽生态之城，助力广州“四个出新出彩”实现老城市新活力，推进广东省自然资源高水平保护高效率利用。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "ghzyj.gz.gov.cn_广州市规划和自然资源",
      "title": "狮象村增减挂钩实践：向土地要效益 为乡村谋未来",
      "date": "2025-03-20",
      "url": "https://ghzyj.gz.gov.cn/xwzx/gzdt/content/post_10169350.html",
      "note": "为激发改革动力，从化区分局充分发挥政策红利，用好用足生态保护修复产权激励、资源利用、特许经营等支持政策，积极争取中央和省级有关专项资金或专项债券资金支持，鼓励和支持更多社会资本参与全域土地综合整治。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "sthjj.gz.gov.cn_广州市生态环境局",
      "title": "从化增城获国家级称号 “两山”实践再添“广州样板”",
      "date": "2025-12-31",
      "url": "https://sthjj.gz.gov.cn/hbyd/zjhjb/content/post_10617972.html",
      "note": "从化严守耕地保护底线，作为全国唯一国家级县域全域土地综合整治试点入选自然资源部首批典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "conghua.gov.cn_广州市从化区人民政府",
      "title": "【区农业农村局】广州从化：以“双农三引”为引擎，引入21个优质项目助力高质量发展",
      "date": "2025-12-19",
      "url": "https://www.conghua.gov.cn/gzchnync/gkmlpt/content/10/10601/mpost_10601684.html",
      "note": "从化区近年不断优化营商环境，打造广州都市现代农业招商引资目的地，充分发挥国家级全域（县域）土地综合整治试点优势，出台暖企“农八条”、“强村十条”等政策，让更多企业在从化安心舒心投资兴业。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "gz.gov.cn_广州市人民政府",
      "title": "全省全域土地综合整治培训会（第一期）在从化区召开",
      "date": "2024-04-12",
      "url": "https://www.gz.gov.cn/qx/chqrmzf/zwlb/content/mpost_9583694.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "www.conghua.gov.cn",
      "title": "以全域土地综合整治激活土地生态价值，探索区域合作新路径",
      "date": "2025-07-07",
      "url": "https://www.conghua.gov.cn/gzchgh/gkmlpt/content/10/10343/post_10343668.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S24",
      "source": "www.conghua.gov.cn",
      "title": "全域整治显成效 耕地保护再添新篇——从化区鳌头万亩良田示范项目垦造水田指标正式通过自然资源部系统备案",
      "date": "2024-09-23",
      "url": "https://www.conghua.gov.cn/gzchgh/gkmlpt/content/9/9880/post_9880537.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S25",
      "source": "www.gz.gov.cn",
      "title": "2025年从化区政府工作报告",
      "date": "2025-03-13",
      "url": "https://www.gz.gov.cn/zwgk/zjgb/gqgzbg/chq/content/post_10155018.html",
      "note": "4种“全域+”土地整治模式获评自然资源部首批典型案例，鳌头万亩良田项目新增水田指标1451亩，吕田狮象村城乡建设用地增减挂钩项目创全市先例，大野牧乡国际牧场、湾区农芯汇投入运营。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S26",
      "source": "www.gz.gov.cn",
      "title": "2026年从化区政府工作报告",
      "date": "2026-02-25",
      "url": "https://www.gz.gov.cn/zwgk/zjgb/gqgzbg/content/post_10692340.html",
      "note": "立足湾区所向、港澳所需、从化所能，推动全域土地综合整治扩面提质，深化营商环境改革，高标准建设穗港马产业深度合作区，持续推进高水平对内对外开放，在培育新动能、更新旧动能上寻求加快突破，为现代化建设注入强劲动力。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S11",
      "source": "nfnews.com_南方日报（南方+）",
      "title": "广州最大的一块田：从化全域土地综合整治的振兴答卷",
      "date": "2025-12-22",
      "url": "https://www.nfnews.com/content/n614dzY13P.html",
      "note": "在从化区的整体部署下，鳌头镇迅速锚定了万亩良田这一核心工程，计划通过“土地整治+河道治理+村庄整治+三产融合”的模式，打造“耕地质量高、产业模式新、文化融合深、风貌有特色”的大湾区生态田园高质量发展区，为全省乃至全国全域土地综合整治提供可复制的“镇域样板”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "static.nfapp.southcn.com_南方日报（南方+）",
      "title": "全国唯一县域全域土地综合整治试点，广州从化如何聚力突围",
      "date": "2023-12-21",
      "url": "https://static.nfapp.southcn.com/content/202312/21/c8428889.html",
      "note": "今年8月，《广东省广州市从化区全域土地综合整治试点实施方案》（以下简称《试点实施方案》）获自然资源部批复同意，为从化全面铺开整治工作，探索超大城市全域土地综合整治之路提供有力支撑。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S23",
      "source": "www.sohu.com",
      "title": "广州从化：用全域土地综合整治的金钥匙激活土地潜能",
      "date": "2025-05-23",
      "url": "https://www.sohu.com/a/898164578_119778",
      "note": "为深入贯彻党中央关于耕地保护和粮食安全工作的决策部署，从化以全域土地综合整治统筹推进区域土地资源优化配置，深入践行“藏粮于地、藏粮于技”的耕地保护战略，为农业农村现代化生产提供了广阔发展空间。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「广东自然资源」（广东省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：广东省广州市从化区 全域土地综合整治"
  ],
  "counts": {
   "items": 22,
   "excerpts": 5,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 18,
    "其他媒体报道": 3
   }
  }
 },
 {
  "id": "14",
  "dir": "14_重庆市九龙坡区铜罐驿镇",
  "name": "重庆市九龙坡区铜罐驿镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S13",
      "source": "cq.people.com.cn_人民网重庆频道",
      "title": "农发行重庆市分行：赋能全域土地综合整治 激活乡村振兴新动能",
      "date": "2025-05-30",
      "url": "http://cq.people.com.cn/n2/2025/0530/c367643-41245270.html",
      "note": "农发行重庆市分行累放7.34亿元贷款支持的九龙坡区铜罐驿镇全域土地综合整治项目，将九龙坡区铜罐驿镇的农耕活动与休闲农业、传统农业文明与现代乡土文化有机结合，以农业为依托，培育乡村产业服务休闲、观光研学等新业态，推动实现乡村生产、生活、生态三位一体发展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "cq.xinhuanet.com_新华网重庆频道",
      "title": "九龙坡铜罐驿镇乡村振兴新气象——土地整合了 产业升级了 村民增收了",
      "date": "2025-05-20",
      "url": "http://www.cq.xinhuanet.com/20250520/08770a222b814366adeb6b2ceba30ad5/c.html",
      "note": "在统筹开展片区村庄规划的同时，铜罐驿镇利用全域土地综合整治契机，将4个村整理的8.46平方公里土地分解成12个子项目，整合2.19亿元资金实施农用地整理、建设用地整理、乡村生态保护修复、历史文化保护、产业布局五大工程。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "cqjlp.gov.cn_重庆市九龙坡区人民政府",
      "title": "全域土地综合整治试点典型案例丨重庆九龙坡铜罐驿镇：乡村振兴的巴渝样本",
      "date": "2024-09-10",
      "url": "https://cqjlp.gov.cn/zwxx/qxdt/202409/t20240910_13613963_wap.html",
      "note": "2021年，铜罐驿镇全域土地综合整治项目成为自然资源部部署的乡镇全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4194
     },
     {
      "no": "S04",
      "source": "cq.gov.cn_重庆市人民政府",
      "title": "全国生态日丨用好“千万工程”经验 重庆做活全域土地综合整治文章",
      "date": "2024-08-15",
      "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/zdlyxxgk/stbh/hjbh/202408/t20240815_13507056.html",
      "note": "推进全域土地综合整治后，铜罐驿镇新合村的田块集中连片。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4332
     },
     {
      "no": "S05",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "重庆九龙坡：用好“千万工程”经验 谱写铜罐驿全域土地综合整治新篇章",
      "date": "2024-09-25",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/spdb/202409/t20240925_13659239.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 811
     },
     {
      "no": "S17",
      "source": "gzw.cq.gov.cn_重庆市国有资产监督管理委",
      "title": "手握“马良神笔” “生态修复+”绘出美丽乡村",
      "date": "2024-09-11",
      "url": "https://gzw.cq.gov.cn/gqdj/202409/t20240911_13618782.html",
      "note": "调研后，我们科学制定项目方案，协助当地政府打好了高位统筹、规划引领、全域整治、产业落地和乡村改革等一系列组合拳，使铜罐驿镇成为环境美、农民富、产业兴的现代和美乡村。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "重庆2个全域土地综合整治试点入选全国典型案例",
      "date": "2024-09-18",
      "url": "https://nyncw.cq.gov.cn/ztzl_161/rdzt/xczx/gzdt_249775/stzx/202409/t20240918_13638703.html",
      "note": "九龙坡区铜罐驿镇全域土地综合整治试点激发了乡村改革活力，试点整治区内建设了乡村振兴学院，培养新农人。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "土地整合了 产业升级了 村民增收了（九龙坡铜罐驿镇4村统一规划、连片发展）",
      "date": "2025-05-20",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202505/t20250520_14641922_wap.html",
      "note": "在统筹开展片区村庄规划的同时，铜罐驿镇利用全域土地综合整治契机，将4个村整理的8.46平方公里土地分解成12个子项目，整合2.19亿元资金实施农用地整理、建设用地整理、乡村生态保护修复、历史文化保护、产业布局五大工程。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "贫瘠荒坡变千亩“粮”田 全域土地综合整治绘出巴渝乡村新画卷",
      "date": "2025-06-27",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202506/t20250627_14751872.html",
      "note": "在九龙坡区铜罐驿镇新合村，当地规划和自然资源部门利用全域整治政策红利，调整商业用地和工业用地倾斜至英雄湾村、新合村，助力农文旅融合发展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "cq.gov.cn_重庆市人民政府",
      "title": "全域土地综合整治项目改变乡村面貌 看重庆24地“点土成金”",
      "date": "2024-09-11",
      "url": "https://www.cq.gov.cn/ywdt/jrcq/202409/t20240911_13614574.html",
      "note": "李忠“神仙日子”的来源，便是重庆市规划和自然资源局在铜罐驿镇开展的全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S23",
      "source": "cq.gov.cn_重庆市人民政府",
      "title": "重庆：全域土地综合整治典型经验在全国交流",
      "date": "2024-12-27",
      "url": "https://www.cq.gov.cn/zjcq/lszq/ltbsjtbwz/202412/t20241227_14028521.html",
      "note": "九龙坡铜罐驿项目、涪陵大顺项目分别入选自然资源部全域土地综合整治试点第一批、第二批典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S24",
      "source": "nyncw.cq.gov.cn",
      "title": "土地整合了 产业升级了 村民增收了",
      "date": "2025-05-20",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202505/t20250520_14641922.html",
      "note": "在统筹开展片区村庄规划的同时，铜罐驿镇利用全域土地综合整治契机，将4个村整理的8.46平方公里土地分解成12个子项目，整合2.19亿元资金实施农用地整理、建设用地整理、乡村生态保护修复、历史文化保护、产业布局五大工程。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S26",
      "source": "cqjlp.gov.cn",
      "title": "重庆市九龙坡区人民政府工作报告（2025年）",
      "date": "2025-01-26",
      "url": "https://cqjlp.gov.cn/zwgk_251/zfgzbg/gzbg/202501/t20250126_14225497.html",
      "note": "到2029年，实现1500亿元规模以上工业产值、1500亿元规模以上（限额以上）服务业营收、130亿元农业产值，重庆枢纽港产业园九龙新城基本实现全域现代化。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S27",
      "source": "www.cqrd.gov.cn",
      "title": "九龙坡区铜罐驿镇：监督生态修复项目实施",
      "date": "2024-01-05",
      "url": "https://www.cqrd.gov.cn/web/article/1493293301521678336/web/content_1493293301521678336.html",
      "note": "日前，九龙坡区铜罐驿镇人大组织部分区、镇人大代表对金竹沟生态修复项目双骑龙村、建设村段推进情况开展专项监督检查。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S28",
      "source": "cqjlp.gov.cn",
      "title": "全域土地综合整治试点典型案例丨重庆九龙坡铜罐驿镇：乡村振兴的巴渝样本",
      "date": "2024-09-10",
      "url": "https://cqjlp.gov.cn/zwxx/qxdt/202409/t20240910_13613963.html",
      "note": "2021年，铜罐驿镇全域土地综合整治项目成为自然资源部部署的乡镇全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S07",
      "source": "cq.news.cn_新华网重庆频道",
      "title": "重庆积极推动全域土地综合整治 重塑乡村发展新格局",
      "date": "2024-09-11",
      "url": "https://cq.news.cn/20240911/ac0ca28d426e4cd88c2d77ce660c9572/c.html",
      "note": "试点开展以来，铜罐驿镇通过高质量编制“生态修复、乡村振兴、城乡融合”三位一体实用性村庄规划，统筹实施全域土地综合整治，系统保护修复乡村生态与人文环境。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1428
     },
     {
      "no": "S08",
      "source": "cq.people.com.cn_人民网重庆频道",
      "title": "看重庆24地“点土成金”",
      "date": "2024-09-11",
      "url": "https://cq.people.com.cn/n2/2024/0911/c367668-40973030.html",
      "note": "李忠“神仙日子”的来源，便是重庆市规划和自然资源局在铜罐驿镇开展的全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "cqrb.cn_重庆日报",
      "title": "“整”出新天地，“治”出和美村——九龙坡区铜罐驿镇以全域土地综合整治赋能乡村振兴",
      "date": "2025-09-08",
      "url": "https://cqrb.cn/contry/dy26/2025-09-08/2406276_pc.html",
      "note": "铜罐驿镇以全域土地综合整治为抓手，实施“果园上山、良田下山”“小块并大块”等举措，整合零散、破碎地块，建设集中连片的高标准农田、完善灌排体系，农业效率显著提升。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "cqrb.cn_重庆日报",
      "title": "观察丨全域土地综合整治 激活重庆乡村振兴澎湃动能",
      "date": "2024-09-11",
      "url": "https://cqrb.cn/zhongbaoyouxuan/2024-09-11/2021104_pc.html",
      "note": "▲实施全域土地综合整治后，铜罐驿镇蝶变为美丽乡村。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "cnr.cn_央广网",
      "title": "九龙坡：推进城乡融合乡村振兴示范建设",
      "date": "2024-08-21",
      "url": "https://www.cnr.cn/chongqing/cq/20240821/t20240821_526863049.shtml",
      "note": "通过统筹规划、全域整治等措施，系统性探索土地综合整治，合理划分全域土地综合整治功能片区，优化布局生产、生活、生态空间，开创以规划塑乡村格局、精准施策建乡村基地、共建共享促乡村蜕变的乡村振兴新模式。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "cq.people.com.cn_人民网重庆频道",
      "title": "九龙坡铜罐驿镇：深耕农文旅融合 赋能乡村振兴",
      "date": "2026-09-30",
      "url": "http://cq.people.com.cn/n2/2026/0930/c367650-41712573.html",
      "note": "英雄湾村股份经济合作联合社与重庆渝风面宝餐饮管理有限公司达成意向，落地椒麻特色餐饮消费新场景；重庆铜罐橘乡农业有限公司与九龙意库签约，打通乡野物产走进城市的展销渠道；多位创客、手艺人意向入驻青创中心及手艺人村落，开展文创、电商、非遗工坊、研学体验等业务。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "cqrb.cn_重庆日报",
      "title": "中国农业发展银行重庆市分行：力行农业政策性金融“巴渝实践”",
      "date": "2025-04-22",
      "url": "https://cqrb.cn/topics/laojizhutuo%20ganenfenjin/2025-04-22/2250112_pc.html",
      "note": "在推动巴渝和美乡村建设和统筹城乡融合发展上，重庆分行支持的九龙坡区铜罐驿镇全域土地综合整治项目，被评为全国首批15个全域土地综合整治试点典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "kxzc.cn_开州之窗（转载九龙坡区规划自然资源局",
      "title": "规划赋能 改革破局 生态铸魂 区规划自然资源局多元赋能城市高质量发展",
      "date": "2025-12-31",
      "url": "https://kxzc.cn/news-center/detail/5000752360",
      "note": "此前，铜罐驿镇打破英雄湾村、新合村、大碑村、观音桥村等村的行政壁垒，统筹土地、产业、文旅等核心资源，通过统一规划构建“资源共享、优势互补、错位发展”的协同格局。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S25",
      "source": "finance.sina.com.cn",
      "title": "农发行重庆分行：赋能全域土地综合整治 激活乡村振兴新动能",
      "date": "2025-05-30",
      "url": "https://finance.sina.com.cn/jjxw/2025-05-30/doc-ineyixvc7702660.shtml",
      "note": "农发行重庆市分行累计投放7.34亿元贷款支持的九龙坡区铜罐驿镇全域土地综合整治项目，将九龙坡区铜罐驿镇的农耕活动与休闲农业、传统农业文明与现代乡土文化有机结合，以农业为依托，培育服务休闲、观光研学等乡村产业新业态，推动实现乡村生产、生活、生态三位一体发展，于2024年成功入选全国首批15个全域土地综合整治试点典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「重庆自然资源」（重庆省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：重庆市九龙坡区铜罐驿镇 全域土地综合整治"
  ],
  "counts": {
   "items": 24,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 2,
    "政府官方通报": 13,
    "其他媒体报道": 9
   }
  }
 },
 {
  "id": "15",
  "dir": "15_陕西省安康市白河县仓上镇",
  "name": "陕西省安康市白河县仓上镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨陕西白河仓上镇：村庄规划引领山村整治与振兴",
      "date": "2024-08-29",
      "url": "https://www.iziran.net/news.html?aid=5340602",
      "note": "农村废旧宅基地的减少，与城镇建设用地的增加相挂钩，既能解决试点区域内天宝村4A旅游景区民宿、配套设施及公共服务设施等用地指标需求，也能为仓上镇天宝村等3个村全域土地整治项目的实施提供资金支持。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 5049
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S14",
      "source": "ankang.gov.cn_安康市人民政府",
      "title": "白河县2025年政府工作报告",
      "date": "2025-03-31",
      "url": "https://www.ankang.gov.cn/Content-2806918.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "ankang.gov.cn_安康市人民政府",
      "title": "白河县2026年政府工作报告",
      "date": "2026-03-21",
      "url": "https://www.ankang.gov.cn/Content-2940334.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "baihe.gov.cn_白河县人民政府",
      "title": "2024年白河县人民政府工作报告",
      "date": "2024-04-20",
      "url": "https://www.baihe.gov.cn/Content-2698361.html",
      "note": "坚持产镇融合发展，稳步推进中厂县城副中心、茅坪县域副中心示范建设，加快建成仓上镇产业园（一期）、凉水工业园、卡子安康富硒食药品产业园等镇域特色产业园，完成县域副中心“三场”、中厂集镇外环路等项目，培育一批农业强镇、工贸重镇、旅游名镇和特色小镇，打造多层级城乡融合发展示范样板。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "baihe.gov.cn_白河县人民政府",
      "title": "2025年白河县人民政府工作报告",
      "date": "2025-03-06",
      "url": "https://www.baihe.gov.cn/Content-2799718.html",
      "note": "深化落实河长制林长制田长制，河长制工作被中省媒体宣传报道，红石河入选安康市幸福河湖，森林联防联控工作获川陕鄂渝四省六市联防会议表彰，仓上镇全域土地综合整治工作入选自然资源部典型案例，全省长江流域禁捕水域专项联合执法现场会在我县召开，获得省级水利发展资金绩效综合评价激励奖励。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.baihe.gov.cn",
      "title": "仓上镇：“沉睡”的土地“醒”来了",
      "date": "2023-07-04",
      "url": "https://www.baihe.gov.cn/Content-2587084.html",
      "note": "2022年，仓上镇紧扣粮食安全和不发生规模性返贫两条底线，狠抓撂荒地治理和耕地“粮食化”两个关键，大力推进粮油种植规模化、集约化生产，全年复垦撂荒农田300余亩，非粮化整治150余亩，粮食产量较过去有了大幅提高。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S10",
      "source": "stzg.china.com.cn_中国网生态中国",
      "title": "陕西安康：白河县全域土地综合整治 实现生态产业化",
      "date": "2025-11-10",
      "url": "http://stzg.china.com.cn/2025-11/10/content_43271227.htm",
      "note": "陕西省安康市白河县地处陕西省南部，南依巴山，北临汉江，为了彻底解决生态质量退化、乡村耕地碎片化、土地资源利用低效化等问题，白河县委、县政府深入践行“两山”理念，科学统筹划定“三区三线”，以全省推进全域土地综合整治项目试点为契机，将仓上镇的天宝村、槐坪村、仓坪村等3个行政村确定为综合整治基本实施单元，整体推进全域土地整治项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "esb.xbfzb.com_西部法制报",
      "title": "综合整治铺新路 规划引领谋新篇",
      "date": "2022-06-18",
      "url": "https://esb.xbfzb.com/html/2022-06/18/content_18425_6331563.htm",
      "note": "根据《仓上镇全域土地综合整治试点项目实施方案》要求，白河县累计完成投资4733.29万元，在仓上镇天宝村、槐坪村、仓坪村组织实施了85.87公顷的农用地整理和17公顷的建设用地整理及乡村生态保护修复项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.sohu.com",
      "title": "全域土地综合整治 让生态资源变身“致富密码”",
      "date": "2025-11-16",
      "url": "https://www.sohu.com/a/954971353_121443915",
      "note": "今年以来，白河县委、县政府以全省全域土地综合整治项目试点为契机，在仓上镇天宝村、槐坪村、仓坪村等3个行政村，走出一条“产业生态化、生态产业化”的乡村振兴之路，其也成为陕西省首批自然资源领域生态产品价值实现典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「陕西自然资源」（陕西省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：陕西省安康市白河县仓上镇 全域土地综合整治"
  ],
  "counts": {
   "items": 9,
   "excerpts": 1,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 5,
    "其他媒体报道": 3
   }
  }
 },
 {
  "id": "16",
  "dir": "16_天津市宝坻区牛家牌镇",
  "name": "天津市宝坻区牛家牌镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S13",
      "source": "news.cn_新华网",
      "title": "高校学子深入乡村、走向乡野 以实际行动践行五大振兴",
      "date": "2022-08-31",
      "url": "http://xczx.news.cn/2022-08/31/c_1211681012.htm",
      "note": "天津宝坻支队关注文创设计，意图能让更多人了解牛家牌镇赵家湾村的手工艺产业和文化，帮助村庄完成农业到旅游业的产业升级转型，让村民们富起来。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S02",
      "source": "tjbd.gov.cn_宝坻区人民政府",
      "title": "牛家牌镇2025年全年重点项目进展情况",
      "date": "2026-01-05",
      "url": "https://www.tjbd.gov.cn/zwgk/zfxxgkjz/njpz/fdzdgknr56/zdxm56/202601/t20260105_7214542.html",
      "note": "1 、牛家牌镇全域土地综合整治试点项目子项目牛家牌镇赵家湾村、西老鸦口村2022年土地开发整理项目主要包括土地平整、灌溉工程、排水工程、交叉建筑物、电力工程及田间道路工程，项目已全部竣工。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 385
     },
     {
      "no": "S04",
      "source": "tjbd.gov.cn_宝坻区人民政府",
      "title": "宝坻区：稻海渔歌乡村新境",
      "date": "2022-08-08",
      "url": "https://www.tjbd.gov.cn/bdxw/jrbd/202208/t20220812_5957347.html",
      "note": "以实施土地全域综合整治试点项目为切入点，借助清华大学“产学研用”人才智力优势，在村内新建纤维艺术工作室、书院；引入社会资本6048万元新建特色湿地民宿，持续推进立体生态农业区、艺术农田观光区、农事体验功能区、乡村休闲度假区建设，努力打造北方特色水乡景观和“北方乡村民居3.0”升级版。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2103
     },
     {
      "no": "S06",
      "source": "tjbd.gov.cn_宝坻区人民政府",
      "title": "天津市宝坻区牛家牌镇西老鸦口村村民委员会新建项目规划公示",
      "date": "2025-01-13",
      "url": "https://www.tjbd.gov.cn/zwgk/zfxxgkqjjg/sghzyjbcfj/fdzdgknr33/ghxx33/202501/t20250113_6831420.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "nync.tj.gov.cn_天津市农业农村委员会",
      "title": "市农业农村委关于宝坻区2024年度高标准农田建设项目实施计划的批复",
      "date": "2024-07-30",
      "url": "https://nync.tj.gov.cn/ZWGK0/GHJH152022/202407/t20240730_6687225.html",
      "note": "你委《关于上报2024年度高标准农田项目实施计划的请示》（宝农报〔2024〕119号）收悉。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "tjbd.gov.cn_宝坻区人民政府",
      "title": "宝坻区高标准打造牛家牌“水木三乡”生态小镇",
      "date": "2023-10-10",
      "url": "https://www.tjbd.gov.cn/sy/bcxw/jzdt/202310/t20231010_6425864.html",
      "note": "对标“水木三乡”实践理念，按照“人才下乡、绿能先行、产业跟进、金融配套、增收增税、共同富裕”方针，深入挖掘“田、水、林、地热”等生态资源禀赋，将牛家牌镇域产业规划为“一轴”、“两区”（以青龙湾河为轴心，在南北两侧打造户外文体教育区、文旅会展度假区），借助清华大学人才智力优势，与清控文创全方位合作，探索中特大城市周边乡村振兴新模式。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "tjbd.gov.cn_宝坻区人民政府",
      "title": "宝坻区牛家牌镇2025年法治政府建设情况报告",
      "date": "2026-03-10",
      "url": "https://www.tjbd.gov.cn/zwgk/fzzfjs/jz_fzzfjs/njpz_jz/202603/t20260310_7258707.html",
      "note": "二是围绕重点领域建立联动执法机制，实行城市管理与公共卫生、安全生产、食品药品、交通运输、生态环境等多部门跨领域联合执法的模式，合理高效地完成多项执法工作。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "tjbd.gov.cn_天津市宝坻区人民政府",
      "title": "天津市宝坻区人民政府2024年政府工作报告",
      "date": "2025-01-22",
      "url": "https://www.tjbd.gov.cn/zwgk/zfgzbg/202501/t20250122_6841912.html",
      "note": "创新土地开发利用模式，牛家牌镇入选全市唯一一个全国全域土地综合整治试点案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S24",
      "source": "www.tjbd.gov.cn",
      "title": "美丽幸福赵家湾 乡村振兴正当时",
      "date": "2023-12-11",
      "url": "https://www.tjbd.gov.cn/sy/bcxw/jzdt/202312/t20231211_6477856.html",
      "note": "当前，赵家湾村以富民、党建引领、产业融合结合赵家湾村丰富的水资源优势及稻田农业优势，统筹推进乡村振兴。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S26",
      "source": "www.tjbd.gov.cn",
      "title": "天津市宝坻区人民政府2025年政府工作报告",
      "date": "2026-02-05",
      "url": "https://www.tjbd.gov.cn/zwgk/zfgzbg/202602/t20260205_7239615.html",
      "note": "人居环境更加舒适，推动9000座农村户厕改造，农村厕所革命服务站服务范围实现全覆盖，建成17个农村人居环境整治示范村；黄庄镇和牛家牌镇赵家湾村等4个村入选全国乡村治理示范镇村，农村人居环境改善等乡村振兴重点工作获得国务院激励表彰。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S11",
      "source": "agri.cn_中国农业农村信息网",
      "title": "天津市规划资源局开展2025年全国土地日暨“耕地保护进万村”专题宣传活动",
      "date": "2025-07-04",
      "url": "https://www.agri.cn/zx/xxlb/tj/202507/t20250704_8746432.htm",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S25",
      "source": "www.sohu.com",
      "title": "牛家牌镇：锚定目标 靶向发力 全力擎画乡村振兴新图景",
      "date": "2023-08-22",
      "url": "https://www.sohu.com/a/713811261_121443915",
      "note": "落实全市“十项行动”和我区“十项工程”部署要求，牛家牌镇紧紧锚定加快建设“乡村振兴示范镇”这一目标，以加快打造赵家湾村乡村振兴示范村为重点，充分发挥该村独特的区位、交通、生态、文化等优势，积极推动纤维艺术产业和乡村旅游发展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「天津自然资源」（天津省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：天津市宝坻区牛家牌镇 全域土地综合整治"
  ],
  "counts": {
   "items": 12,
   "excerpts": 2,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 9,
    "其他媒体报道": 2
   }
  }
 },
 {
  "id": "17",
  "dir": "17_吉林省白城市大安市新平安镇",
  "name": "吉林省白城市大安市新平安镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S17",
      "source": "moa.gov.cn_中华人民共和国农业农村部",
      "title": "碱地变良田 农民住楼房——大安市全域土地综合整治试点项目走笔",
      "date": "2022-08-26",
      "url": "https://www.moa.gov.cn/xw/qg/202208/t20220826_6407857.htm",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S02",
      "source": "jl.gov.cn_吉林省人民政府",
      "title": "大安：聚力打造后备耕地资源 综合开发示范区 全力保障粮食安全",
      "date": "2025-02-12",
      "url": "https://www.jl.gov.cn/szfzt/jlssxsxnyxdh/gddt/202502/t20250212_3362602.html",
      "note": "2024年，新平安镇全域土地综合整治试点项目，被列为全国第二批全域土地综合整治试点典型案例。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1089
     },
     {
      "no": "S04",
      "source": "jl.gov.cn_吉林省人民政府",
      "title": "大安市全域土地综合整治试点项目见闻",
      "date": "2022-08-14",
      "url": "https://www.jl.gov.cn/szfzt/jlssxsxnyxdh/gddt/202208/t20220814_8540990.html",
      "note": "今年，新平安镇将对长明村、长和村6个自然屯及部分平安村村民共455户房屋进行拆除，为加快推进易地搬迁土地综合利用，老旧房屋拆除后将新增耕地61公顷，为解决拆迁后的牲畜养殖问题，在长和村规划建设育肥羊和育肥牛两个牧业小区，可养殖育肥羊4.8万只、育肥牛4020头。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1915
     },
     {
      "no": "S05",
      "source": "jl.gov.cn_吉林省人民政府",
      "title": "大安市：守护耕地生命线 织密粮食安全网",
      "date": "2025-06-25",
      "url": "https://www.jl.gov.cn/szfzt/gzlfz/gzdt/202506/t20250625_3473013.html",
      "note": "实施新平安镇全域土地综合整治试点项目，改造耕地2.04万亩，腾退建设用地0.09万亩，新造水田2.25万亩，治理退化草原0.90万亩，栽种和改造林地0.12万亩，实现了耕地增加、粮食增产、农民增收、生态增效，社会效益、生态效益、经济效益多赢的效果。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 731
     },
     {
      "no": "S07",
      "source": "daan.gov.cn_大安市人民政府",
      "title": "大安市人民政府办公室关于印发《大安市全域土地综合整治试点工作方案》的通知",
      "date": "2020-10-22",
      "url": "http://www.daan.gov.cn/root267_45/dasrmzf/dasrm/xxgkml/202010/t20201022_874031.html",
      "note": "12、新平安镇政府：负责项目推进过程中的组织协调工作；负责项目区内承包合同清理工作；负责拆旧区搬迁和新建安置区组织建设工作；负责新增耕地发包及项目移交后的管护工作。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "daan.gov.cn_大安市人民政府",
      "title": "新平安镇全域土地综合整治显成效",
      "date": "2022-08-15",
      "url": "http://www.daan.gov.cn/daxw/jcdt/202208/t20220815_942796.html",
      "note": "某公司的甲方总代表吉树双正在向市自然资源局土地整理中心负责人介绍着水稻的长势，他的公司承担着新平安镇全域土地综合整治项目一标段的改良任务，从今年3月入场施工，6月插秧完成，到如今水稻作物迈入成熟，真正实现了当年施工，当年种植，当年丰产。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "daan.gov.cn_大安市人民政府",
      "title": "大安市行政审批局关于大安市新平安镇全域土地综合整治项目平安村等3个村（四期）可行性研究报告的批复",
      "date": "2021-11-19",
      "url": "http://www.daan.gov.cn/root267_45/zfbm6/zwfw/xxgkml/202111/t20211119_916707.html",
      "note": "你单位报送的《关于大安市新平安镇全域土地综合整治项目平安村等3个村（四期）可行性研究报告的请示》及有关材料收悉。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "daan.gov.cn_大安市人民政府",
      "title": "大安市行政审批局关于大安市新平安镇全域土地综合整治项目长明村、长和村（二期）可行性研究报告的批复",
      "date": "2021-11-18",
      "url": "http://www.daan.gov.cn/root267_45/zfbm6/zwfw/xxgkml/202111/t20211122_916889.html",
      "note": "你单位报送的《关于大安市新平安镇全域土地综合整治项目长明村、长和村（二期）可行性研究报告的请示》及有关材料收悉。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "jl.gov.cn_吉林省人民政府（公共资源交易平台",
      "title": "大安市新平安镇全域土地综合整治易地搬迁安置项目二标段招标公告",
      "date": "2022-10-11",
      "url": "https://www.jl.gov.cn/ggzy/gcjs/zbgg/202210/t20221011_8595620.html",
      "note": "本招标项目大安市新平安镇全域土地综合整治易地搬迁安置项目已由大安市行政审批局以大行审投字[2021]119号文件、[2022]90号文件批准建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.jl.gov.cn",
      "title": "大安：昔日“不毛地” 今朝“潜力田”",
      "date": "2025-11-03",
      "url": "https://www.jl.gov.cn/szfzt/jlssxsxnyxdh/gddt/202511/t20251103_3509111.html",
      "note": "作为国家盐碱地等耕地后备资源综合利用试点，近年来，大安市探索治理新路径，截至目前，累计新增耕地19.57万亩、年增粮食产能2.35亿斤，“大安模式”从单标段突破走向全域推广。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S12",
      "source": "agri.cn_中国农业农村信息网",
      "title": "大安：聚力打造后备耕地资源 综合开发示范区 全力保障粮食安全",
      "date": "2025-02-12",
      "url": "https://www.agri.cn/zx/xxlb/jl/202502/t20250212_8711409.htm",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "www.sohu.com",
      "title": "大安市：全域土地综合整治项目建设按下“加速键”",
      "date": "2022-05-28",
      "url": "https://www.sohu.com/a/551949537_265827",
      "note": "新平安镇全域土地综合整治（三期）二标段由吉林省水利水电工程局全资子公司吉林省昊天水利水电工程有限公司中标投建，自复工以来，该施工单位一手抓疫情防控，一手抓项目建设，采取挂图作战、倒排工期，加速推进项目建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "news.cnjiwang.com",
      "title": "从“白色沙漠”到“新粮仓”：大安盐碱地治理的“金色洪流”",
      "date": "2020-06-16",
      "url": "https://news.cnjiwang.com/jwyc/202509/3982220.html",
      "note": "如今，通过“以水定地、集中连片、生态改良、良种自育、现代化生产经营”的“五位一体”大安模式，大安市累计新增耕地19.57万亩，年增粮食产能2.35亿斤，为全国盐碱地治理提供了“吉林方案”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「吉林自然资源」（吉林省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：吉林省白城市大安市新平安镇 全域土地综合整治"
  ],
  "counts": {
   "items": 13,
   "excerpts": 3,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 9,
    "其他媒体报道": 3
   }
  }
 },
 {
  "id": "18",
  "dir": "18_江苏省盐城市建湖县高作镇",
  "name": "江苏省盐城市建湖县高作镇",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
      "title": "江苏省盐城市建湖县高作镇全域土地综合整治试点",
      "date": "2025-04-17",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d56gsjdqr/stzlxf/2025/04/17142955818980.html",
      "note": "高作镇在实施全域整治时，保留项目区内部分零星的其他园地作为生物栖息地。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1794
     },
     {
      "no": "S04",
      "source": "jianhu.gov.cn_建湖县人民政府",
      "title": "建湖高作全域土地综合整治入选国家级典型案例",
      "date": "2024-09-13",
      "url": "https://www.jianhu.gov.cn/art/2024/9/13/art_12508_4234659.html",
      "note": "9月10日，自然资源部发布第二批全域土地综合整治试点典型案例，建湖县高作镇全域土地综合整治试点入选。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1792
     },
     {
      "no": "S06",
      "source": "jianhu.gov.cn_建湖县人民政府",
      "title": "全域土地综合整治擘画乡村振兴新图景",
      "date": "2025-10-10",
      "url": "https://www.jianhu.gov.cn/art/2025/10/10/art_44949_4371193.html",
      "note": "高作镇通过沟塘复垦、公共空间治理、农田连片整合等系统工程，累计新增耕地9373亩，建成西南、中部、东部3个万亩稻麦标准化种植区，粮食年产量一举突破1.1亿斤。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "yancheng.gov.cn_盐城市人民政府",
      "title": "我市高质量推进国土空间全域综合整治",
      "date": "2024-06-23",
      "url": "https://www.yancheng.gov.cn/art/2024/6/23/art_33925_4203556.html",
      "note": "目前，全市范围正在实施的全域整治项目有8个，其中，国家试点项目2个，省级示范项目6个；已实施完成新增耕地438.65公顷，安置搬迁户3501户，项目全部建成后，将新增耕地984.81公顷，实现总经济效益约40.45亿元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "yancheng.gov.cn_盐城市人民政府",
      "title": "建湖县全域土地综合整治整出富民新路径",
      "date": "2023-09-13",
      "url": "https://www.yancheng.gov.cn/art/2023/9/13/art_33890_4056614.html",
      "note": "实施全域土地综合整治让建湖县，尤其是高作镇的镇村面貌得到根本改变。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "zgjssw.gov.cn_中共江苏省委新闻网",
      "title": "江苏全域土地综合整治多重效益显现——“一子落”带动“满盘活”",
      "date": "2025-10-19",
      "url": "https://www.zgjssw.gov.cn/yaowen/202510/t20251019_8530203.shtml",
      "note": "全域土地综合整治是实施乡村振兴战略的重要平台，是深入推进“千万工程”的重要抓手，通过集成运用耕地占补平衡、增减挂钩等政策工具，可以优化国土空间布局，有效促进城乡要素平等交换、双向流动，助力建设宜居宜业和美乡村。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "jianhu.gov.cn_建湖县人民政府",
      "title": "高作镇因地制宜走出乡村振兴新路径",
      "date": "2024-09-05",
      "url": "https://www.jianhu.gov.cn/art/2024/9/5/art_12509_4231914.html",
      "note": "今年以来，高作镇深入贯彻落实省、市、县委全会精神，紧扣“加强系统谋划、加快全域整治，走出乡村振兴新路径”目标定位，深入实施全域整治项目，一体推进实体经济增长、镇村面貌提升、民生福祉增进等工作，扎实开展招商引资项目推进、全域土地综合整治、社会治理“百日攻坚”三大行动，为建设江淮绿心、打造千亿之城，奋力谱写中国式现代化建湖新篇章贡献高作力量。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "jianhu.gov.cn_建湖县人民政府",
      "title": "高作镇组织在外人士参观家乡建设",
      "date": "2025-05-07",
      "url": "https://www.jianhu.gov.cn/art/2025/5/7/art_12509_4319879.html",
      "note": "该馆通过图文、数字影像、实物模型，生动展示中国稻麦起源、“三农”变迁、农村住宅演变，以及高作镇全域土地综合整治试点项目与智慧数字农业发展成果，让参观者仿若置身“诗画田园综合体”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "jianhu.gov.cn_建湖县人民政府",
      "title": "高作镇春节联谊共绘发展新蓝图",
      "date": "2026-02-24",
      "url": "https://www.jianhu.gov.cn/art/2026/2/24/art_12509_4405608.html",
      "note": "大家表示，从规划有序的新型民居到生态秀美的绿色廊道，从广袤丰产的田园沃野到赋能发展的智慧农业平台，真切感受到了高作镇在乡村振兴战略实施过程中，既注重“面子”靓化，更抓实“里子”提升的责任担当，亲眼见证了群众幸福感、获得感、安全感的持续增强。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "snw.yancheng.gov.cn",
      "title": "建湖：推进全域土地整治 打造大粮仓示范区",
      "date": "2023-01-18",
      "url": "https://snw.yancheng.gov.cn/art/2023/1/18/art_24595_3955200.html",
      "note": "近年来，江苏省盐城市建湖县高作镇紧紧围绕“加强系统谋划、加快全域整治、走出乡村振兴新路径”目标定位，统筹抓好农房改善、土地整理、高标准农田建设、集体项目领办、产业结构优化等各项工作，倾情打造大粮仓示范区，奋力谱写高作农业现代化新篇章。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S09",
      "source": "ycnews.cn_盐阜大众报",
      "title": "江苏建湖：全域土地综合整治，擘画乡村振兴新图景",
      "date": "2025-10-11",
      "url": "https://www.ycnews.cn/ycwx/2025/10-11/vrdm8EQD.html",
      "note": "高作镇通过沟塘复垦、公共空间治理、农田连片整合等系统工程，累计新增耕地9373亩，建成西南、中部、东部3个万亩稻麦标准化种植区，粮食年产量一举突破1.1亿斤。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "jsnews.jschina.com.cn_中国江苏网",
      "title": "江苏省全域土地综合整治国家试点项目进度超70%",
      "date": "2024-10-29",
      "url": "https://jsnews.jschina.com.cn/jsyw/202410/t20241029_3517538.shtml",
      "note": "近日，我省首个镇级全域土地综合整治国家试点项目——无锡市惠山区洛社镇土地综合整治项目通过综合验收，紧随其后，全国首个获批全域土地综合整治国家试点项目——苏州市相城区黄桥街道项目也通过验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "sohu.com_搜狐（转载盐城新闻网）",
      "title": "盐城市建湖县高作镇全域土地综合整治：擘画乡村振兴新图景",
      "date": "2025-09-29",
      "url": "https://www.sohu.com/a/939925278_121835335",
      "note": "高作镇通过沟塘复垦、公共空间治理、农田连片整合等系统工程，累计新增耕地9373亩，建成西南、中部、东部3个万亩稻麦标准化种植区，粮食年产量一举突破1.1亿斤。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.xinhuanet.com",
      "title": "推进全域土地综合整治 江苏建湖全力守好“金饭碗”",
      "date": "2025-06-25",
      "url": "https://www.xinhuanet.com/local/20250625/59aedb36e0af4fb2a414d47a560f4429/c.html",
      "note": "过去当地因村庄布局分散，地块零碎，土地利用率较低，2020年以来，建湖县高作镇按照“全域规划、全域设计、全域整治”的要求，持续推进全域土地综合整治，昔日“零散小地”今成“连片大田”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江苏自然资源」（江苏省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江苏省盐城市建湖县高作镇 全域土地综合整治"
  ],
  "counts": {
   "items": 14,
   "excerpts": 2,
   "byCategory": {
    "政府官方通报": 10,
    "其他媒体报道": 4
   }
  }
 },
 {
  "id": "19",
  "dir": "19_江苏省宿迁市宿豫区新庄镇",
  "name": "江苏省宿迁市宿豫区新庄镇",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
      "title": "江苏省宿迁市宿豫区新庄镇全域土地综合整治试点",
      "date": "2025-04-17",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d57dqr/jsxcg/2025/04/23343413152717212747.html",
      "note": "宿迁市宿豫区新庄镇全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1443
     },
     {
      "no": "S04",
      "source": "zrzy.jiangsu.gov.cn_宿迁市自然资源和规划局",
      "title": "宿豫区新庄镇入选全域土地综合整治试点典型案例",
      "date": "2024-09-11",
      "url": "https://zrzy.jiangsu.gov.cn/sq/gtzx/gzdt/202409/t20240911_1648163.htm",
      "note": "下一步，市资规局将认真落实自然资源部关于学习运用“千万工程”经验深入推进全域土地综合整治工作政策要求，加强宣传引导，进一步总结并推广“新庄全域经验”，持续带动全市促进城乡融合和区域一体化高质量发展。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 649
     },
     {
      "no": "S06",
      "source": "suqian.gov.cn_宿迁市人民政府",
      "title": "我市一全域土地综合整治试点入选国家级典型案例",
      "date": "2024-09-24",
      "url": "https://www.suqian.gov.cn/cnsq/sqyw/202409/df7dee72aa294b959296d9da47abfd13.shtml",
      "note": "宿迁市宿豫区新庄镇全域土地综合整治于2021年被自然资源部确定为国家级试点，主要建设内容为农用地整理、建设用地整理、乡村生态保护修复、乡村历史文化保护、产业布局和引入，总投资约81680万元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "zgjssw.gov.cn_中共江苏省委新闻网",
      "title": "宿迁一全域土地综合整治试点入选国家级典型案例",
      "date": "2024-09-24",
      "url": "https://www.zgjssw.gov.cn/shixianchuanzhen/suqian/202409/t20240924_8398790.shtml",
      "note": "宿迁市宿豫区新庄镇全域土地综合整治于2021年被自然资源部确定为国家级试点，主要建设内容为农用地整理、建设用地整理、乡村生态保护修复、乡村历史文化保护、产业布局和引入，总投资约81680万元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "zgjssw.gov.cn_中共江苏省委新闻网",
      "title": "江苏全域土地综合整治多重效益显现——“一子落”带动“满盘活”",
      "date": "2025-10-19",
      "url": "https://www.zgjssw.gov.cn/yaowen/202510/t20251019_8530203.shtml",
      "note": "全域土地综合整治是实施乡村振兴战略的重要平台，是深入推进“千万工程”的重要抓手，通过集成运用耕地占补平衡、增减挂钩等政策工具，可以优化国土空间布局，有效促进城乡要素平等交换、双向流动，助力建设宜居宜业和美乡村。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "suqian.gov.cn_宿迁市人民政府",
      "title": "市资规局学习运用“千万工程”经验 推动全域土地综合整治试点",
      "date": "2025-07-02",
      "url": "https://www.suqian.gov.cn/cnsq/bmdt/202507/ae472d74f82547dab102efd56a1303c6.shtml",
      "note": "近年来，市资规局以泗阳穿城、宿豫新庄两个国家级全域土地综合整治试点为契机，学习运用“千万工程”经验，创新“全域土地整治+”，取得了显著成效。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资",
      "title": "稳步开展全域土地综合整治 为江苏重大战略实施聚力赋能",
      "date": "2025-12-25",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/xwbb/2025/12/25090829475698.html",
      "note": "今年7月，省自然资源厅经省政府同意出台了《关于学习运用“千万工程”经验深入推进全域土地综合整治的实施意见》，并发布了项目验收规范地方标准。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资",
      "title": "江苏省宿迁市宿豫区新庄镇全域土地综合整治试点（生态治理修复专题）",
      "date": "2025-04-17",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d56gsjdqr/stzlxf/2025/04/17151126671834.html",
      "note": "宿迁市宿豫区新庄镇全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S10",
      "source": "jsnews.jschina.com.cn_中国江苏网",
      "title": "江苏省全域土地综合整治国家试点项目进度超70%",
      "date": "2024-10-29",
      "url": "https://jsnews.jschina.com.cn/jsyw/202410/t20241029_3517538.shtml",
      "note": "近日，我省首个镇级全域土地综合整治国家试点项目——无锡市惠山区洛社镇土地综合整治项目通过综合验收，紧随其后，全国首个获批全域土地综合整治国家试点项目——苏州市相城区黄桥街道项目也通过验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "sohu.com_搜狐（宿豫发布）",
      "title": "守土护良田 笃行启新程丨协同护耕守红线 宿豫全域整治拓新局",
      "date": "2026-06-26",
      "url": "https://www.sohu.com/a/1042068799_412025",
      "note": "立足乡村全面振兴与城乡融合发展需求，宿豫区以全域土地综合整治为抓手，以生产、生态、生活“三生空间”统筹优化为目标，坚持政府主导、部门联动、规范运行，围绕“腾空间、增耕地、优生态”核心目标，统筹推进新庄、大兴、来龙三镇全域土地整治项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.sohu.com",
      "title": "我眼中的“两为” ／ 宿迁市局以全域整治成效讲好“自然资源故事”",
      "date": "2026-01-05",
      "url": "https://www.sohu.com/a/972782778_121106832",
      "note": "在自然资源部启动全域整治试点时，宿迁市自然资源系统三级联动，立刻组织骨干，集中力量：白天扎进乡镇摸实情，把新庄镇的交通优势、农业基础、群众意愿摸得一清二楚；晚上对照文件改方案，反复打磨，形成申报材料，并成功入选国家级试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "news.qq.com",
      "title": "奋勇争先，决战决胜\"十四五\" 宿豫区新庄镇：\"内外兼修\"，绘就\"民富村美\"新画卷",
      "date": "2025-08-04",
      "url": "https://news.qq.com/rain/a/20250804A07N7300",
      "note": "去年以来，新庄镇扛稳粮食安全重任，全力守好群众的“米袋子”“菜篮子”，先后完成“承包地细碎化整治”2.78万亩，建成2个稻麦万亩示范片、2个稻麦千亩示范田，全镇粮食总产量达4.87万吨，粮食单产显著提升。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江苏自然资源」（江苏省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江苏省宿迁市宿豫区新庄镇 全域土地综合整治"
  ],
  "counts": {
   "items": 12,
   "excerpts": 2,
   "byCategory": {
    "政府官方通报": 8,
    "其他媒体报道": 4
   }
  }
 },
 {
  "id": "20",
  "dir": "20_江苏省无锡市惠山区洛社镇",
  "name": "江苏省无锡市惠山区洛社镇",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "zrzy.wuxi.gov.cn_无锡市自然资源和规划局",
      "title": "惠山区洛社镇全域土地综合整治项目全省首个通过验收",
      "date": "2024-07-25",
      "url": "https://zrzy.wuxi.gov.cn/doc/2024/07/25/4360077.shtml",
      "note": "7月23日，无锡市惠山区洛社镇全域土地综合整治试点项目顺利通过综合验收，历时三年的项目建设圆满收官，成为全省20个全域土地综合整治国家试点中首个通过验收的项目。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1264
     },
     {
      "no": "S02",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
      "title": "无锡市洛社镇全域土地综合整治国家试点全省首个通过综合验收",
      "date": "2024-07-29",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/xwbb/2024/07/2911201577611.html",
      "note": "近日，无锡市惠山区洛社镇全域土地综合整治国家试点顺利通过了无锡市局组织的综合验收，成为我省首个通过综合验收的试点，为全域综合整治城乡融合发展模式提供了“洛社样板”。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 634
     },
     {
      "no": "S04",
      "source": "zrzy.wuxi.gov.cn_无锡市自然资源和规划局",
      "title": "惠山区洛社镇全域土地综合整治试点入选自然资源部全域土地综合整治试点典型案例",
      "date": "2024-09-12",
      "url": "https://zrzy.wuxi.gov.cn/doc/2024/09/12/4391401.shtml",
      "note": "近日，自然资源部发布第二批15个全域土地综合整治试点典型案例，无锡市惠山区洛社镇全域土地综合整治试点入选。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 397
     },
     {
      "no": "S05",
      "source": "huishan.gov.cn_无锡市惠山区人民政府",
      "title": "全省首个 惠山区洛社镇全域土地综合整治试点项目通过验收",
      "date": "2024-07-29",
      "url": "https://www.huishan.gov.cn/doc/2024/07/29/4361800.shtml",
      "note": "7月23日，江苏省首个镇级全域土地综合整治国家试点项目——无锡市惠山区洛社镇全域土地综合整治试点项目通过验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "zgjssw.gov.cn_中共江苏省委新闻网",
      "title": "江苏全域土地综合整治多重效益显现——“一子落”带动“满盘活”",
      "date": "2025-10-19",
      "url": "https://www.zgjssw.gov.cn/yaowen/202510/t20251019_8530203.shtml",
      "note": "全域土地综合整治是实施乡村振兴战略的重要平台，是深入推进“千万工程”的重要抓手，通过集成运用耕地占补平衡、增减挂钩等政策工具，可以优化国土空间布局，有效促进城乡要素平等交换、双向流动，助力建设宜居宜业和美乡村。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "huishan.gov.cn_无锡市惠山区人民政府",
      "title": "洛社镇召开美丽洛社建设推进会暨新一轮太湖综合治理大会",
      "date": "2026-03-27",
      "url": "https://www.huishan.gov.cn/doc/2026/03/27/4751385.shtml",
      "note": "“十四五”以来，全镇上下坚持以习近平生态文明思想为指导，坚决扛起生态环境保护的政治责任，克难攻坚、真抓实干，美丽洛社建设取得了显著成效。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "wuxi.gov.cn_无锡市人民政府办公室",
      "title": "市政府办公室关于推进国土空间全域综合整治的实施意见（锡政办发〔2022〕66号）",
      "date": "2022-09-28",
      "url": "https://www.wuxi.gov.cn/doc/2022/09/28/3761650.shtml",
      "note": "以习近平新时代中国特色社会主义思想为指导，坚持“山水林田湖草”系统治理和最严格耕地保护制度，遵循生态优先、整体保护、系统治理原则，通过试点先行、示范引领、全面实施，在全市深入开展国土空间全域综合整治。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "wuxi.gov.cn_无锡市人民政府",
      "title": "经过三年建设，全省首个全域土地综合整治国家试点项目在锡通过验收",
      "date": "2024-07-26",
      "url": "https://www.wuxi.gov.cn/doc/2024/07/26/4361061.shtml",
      "note": "全域综合整治期间，当地统筹大运河、湿地、耕地、村庄等整体保护和系统治理，实施了农用地整治、建设用地整治、生态保护修复、公共空间治理和乡村历史文化保护五类工程16个子项目，有力助推乡村振兴。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.huishan.gov.cn",
      "title": "洛社镇入选省级耕地保护激励单位",
      "date": "2024-10-11",
      "url": "https://www.huishan.gov.cn/doc/2024/10/11/4408116.shtml",
      "note": "洛社镇大力推进全域高标准农田建设，提高农业生产效率，保障农产品质量与安全，增加农田产值，促进农民增收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.huishan.gov.cn",
      "title": "麦浪滚滚，洛社“三夏”农事忙！",
      "date": "2026-06-04",
      "url": "https://www.huishan.gov.cn/doc/2026/06/04/4786250.shtml",
      "note": "作为全省首个全域土地综合整治国家试点镇，洛社镇连片整治区内高标准农田比例已达100%，平整连片的耕地为大型农机作业创造了绝佳条件。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.sohu.com",
      "title": "省级荣誉+1！这项工作获评全省创新创优成果",
      "date": "2025-01-18",
      "url": "https://www.sohu.com/a/850477265_121117482",
      "note": "会上通报了2024年度全省自然资源系统创新创优成果，我局《惠山区洛社镇“全域整治+集土入市”双重改革激活城乡要素活力》成功获评全省创新创优成果。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S07",
      "source": "js.xinhuanet.com_新华网江苏频道",
      "title": "江苏首个全域土地综合整治国家试点项目通过验收",
      "date": "2024-07-24",
      "url": "http://www.js.xinhuanet.com/20240724/1c6cde7d71af4d42b69165a6bf8b12ce/c.html",
      "note": "7月24日，我省首个镇级全域土地综合整治国家试点项目——无锡市惠山区洛社镇土地综合整治项目通过验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "js.xinhuanet.com_新华网江苏频道",
      "title": "全省首个全域土地综合整治国家试点项目在锡通过验收",
      "date": "2024-07-26",
      "url": "http://www.js.xinhuanet.com/20240726/ea11d69891d74d949bd127c76448aec4/c.html",
      "note": "全域综合整治期间，当地统筹大运河、湿地、耕地、村庄等整体保护和系统治理，实施了农用地整治、建设用地整治、生态保护修复、公共空间治理和乡村历史文化保护五类工程16个子项目，有力助推乡村振兴。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "sohu.com_搜狐（转载无锡日报）",
      "title": "全省首个！惠山区洛社镇全域土地综合整治试点项目通过验收",
      "date": "2024-07-24",
      "url": "https://www.sohu.com/a/795821887_121117482",
      "note": "7月23日，江苏省首个镇级全域土地综合整治国家试点项目——无锡市惠山区洛社镇全域土地综合整治试点项目通过验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "jsnews.jschina.com.cn_中国江苏网",
      "title": "江苏省全域土地综合整治国家试点项目进度超70%",
      "date": "2024-10-29",
      "url": "https://jsnews.jschina.com.cn/jsyw/202410/t20241029_3517538.shtml",
      "note": "近日，我省首个镇级全域土地综合整治国家试点项目——无锡市惠山区洛社镇土地综合整治项目通过综合验收，紧随其后，全国首个获批全域土地综合整治国家试点项目——苏州市相城区黄桥街道项目也通过验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江苏自然资源」（江苏省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江苏省无锡市惠山区洛社镇 全域土地综合整治"
  ],
  "counts": {
   "items": 15,
   "excerpts": 3,
   "byCategory": {
    "政府官方通报": 11,
    "其他媒体报道": 4
   }
  }
 },
 {
  "id": "21",
  "dir": "21_浙江省台州市温岭市横峰街道",
  "name": "浙江省台州市温岭市横峰街道",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S02",
      "source": "ndrc.gov.cn_国家发展和改革委员会",
      "title": "【全域土地综合整治改革的温岭实践】",
      "date": "2022-05-05",
      "url": "https://www.ndrc.gov.cn/fggz/tzgg/dfggjx/202205/t20220505_1324232.html",
      "note": "规划中华北路、川安路、田园路、环湖路和横峰大道“四纵一横”的城市路网，突破城市建设瓶颈，推动中心城区北延提质，实现主城区向铁路新区拓展发展空间，打造围绕横峰大道和九龙湖生态绿廊为中心的城市次中心。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 3548
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "zrzyt.zj.gov.cn_浙江省自然资源厅",
      "title": "浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡一体融合高质量发展的实施意见",
      "date": "2025-11-14",
      "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229101716_2579171.html",
      "note": "为深入运用自然资源部《关于学习运用“千万工程”经验 深入推进全域土地综合整治工作的意见》（自然资办发〔2024〕149号），将土地综合整治作为落实城乡规划布局一体融合的有效载体，推动土地综合整治向国土空间治理转型，全面夯实共同富裕、城乡融合的空间基础，助推高质量发展。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1184
     },
     {
      "no": "S04",
      "source": "zjic.zj.gov.cn_浙江省经济和信息化厅",
      "title": "温岭以土地综合整治赋能高质量发展",
      "date": "2025-03-18",
      "url": "https://zjic.zj.gov.cn/ywdh/qyfz/202503/t20250318_23320209.shtml",
      "note": "近年来，台州温岭市全力以赴拼经济、谋发展，以鞋业企业高度集聚、“低散乱”较为突出的横峰大道沿线区域作为突破口，选取13个村启动全域改造产业升级实验区建设，统筹实施城中村改造、产业园区建设、土地综合整治、全域水系调整、基础设施建设等工程，从源头上有效破解“低散乱”的传统产业发展模式和“脏乱差”的城中村环境痼疾，涉及土地总面积11.9平方公里，群众1.6万人。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1598
     },
     {
      "no": "S14",
      "source": "wl.gov.cn_温岭市人民政府办公室",
      "title": "温岭市人民政府办公室关于新一轮全域土地综合整治与生态修复工程奖励政策的意见（温政办发〔2022〕14号）",
      "date": "2022-05-05",
      "url": "https://www.wl.gov.cn/art/2022/5/5/art_1229299718_1674483.html",
      "note": "通过项目奖补资金收益、生态保护补偿和配套产业用地等方式，鼓励国有公司参与全域土地综合整治与生态修复工程项目，由国有公司出资与项目属地政府共同实施。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "wl.gov.cn_温岭市（局办公室）",
      "title": "温岭市深耕土地综合整治 绘就民生幸福画卷",
      "date": "2023-10-25",
      "url": "https://www.wl.gov.cn/art/2023/10/25/art_1402266_59039298.html",
      "note": "近年来，温岭市以“新一轮全域土地综合整治与生态修复三年行动”为主线，往“扩面、跨区、连片”纵深开展百村全域土地综合整治，为优化乡村空间布局，实现乡村振兴注入了新动能。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "wl.gov.cn_温岭市人民政府办公室",
      "title": "温岭市人民政府办公室关于进一步推进土地整治工作的若干政策意见（温政办发〔2025〕7号）",
      "date": "2025-06-23",
      "url": "https://www.wl.gov.cn/art/2025/6/23/art_1229299718_1719069.html",
      "note": "《温岭市人民政府办公室关于进一步加强土地整治工作的通知》（温政办发〔2021〕7号）和《温岭市人民政府办公室关于新一轮全域土地综合整治与生态修复工程奖励政策的意见》（温政办发〔2022〕14号）、《温岭市人民政府办公室关于温岭市百村全域整治“抱团飞地”的实施意见》（温政办发〔2022〕33号）同时废止。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "zjtz.gov.cn_台州市自然资源和规划局",
      "title": "台州市自然资源和规划局关于市六届人大三次会议温第25号建议答复的函",
      "date": "2023-07-28",
      "url": "https://www.zjtz.gov.cn/art/2023/7/28/art_1229502656_3883231.html",
      "note": "在深入实践的过程中，很多地方品尝到了全域土地综合整治的甜蜜“果实”，如温岭横峰街道以国家全域土地综合整治试点的使命担当和探索智慧，在空间拓展、产业振兴、功能提升等方面收获了空前的综合成效，有力推动了“共富”先行，形成了具有鲜明辨识度的城乡协调发展共富样板。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.wl.gov.cn",
      "title": "横峰鞋业的转型之路",
      "date": "2026-09-07",
      "url": "https://www.wl.gov.cn/col/col1544470/art/2026/art_ec7a16b5cd2a40b4bc521dd75d4e9370.html",
      "note": "2017年11月，温岭以鞋业企业高度集聚、“低散乱”较为突出的横峰大道沿线区域作为突破口，选取22个村启动全域改造产业升级实验区建设，统筹实施城中村改造、产业园区建设、全域土地综合整治、全域水系调整、基础设施建设等工程。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "www.wlxww.com",
      "title": "以稳进聚干劲 筑势攀高 “项”新而行",
      "date": "2026-03-20",
      "url": "https://www.wlxww.com/wlsz/202603/t20260320_7137952.html",
      "note": "在横峰全域改造工业安置项目（M23-2地块）现场，多台打桩机正加紧作业，打造一个功能布局合理、交通流线畅通、生态环境优良的现代产业园区；在后洋吴苑北侧市政道路建设现场，挖掘机精准修整场地，工程车穿梭运送石块，目前主要进行道路路基填筑施工；洋河村公寓式住宅项目启动，桩基先行，提速攻坚，按下建设“快进键”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S23",
      "source": "www.wl.gov.cn",
      "title": "2025年温岭市政府工作报告",
      "date": "2025-02-28",
      "url": "https://www.wl.gov.cn/art/2025/2/28/art_1229307610_4026596.html",
      "note": "强化重大项目用地保障，接续实施“百村全域”整治项目51个，谋划启动低效工业用地整治项目80个，盘活存量建设用地2257亩，向上争取土地指标6195亩、较上年翻番。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S05",
      "source": "zjrb.zjol.com.cn_浙江日报",
      "title": "温岭横峰街道：拥湖向未来，全域改造谱新篇",
      "date": "2024-09-04",
      "url": "https://zjrb.zjol.com.cn/html/2024-09/04/content_3766896.htm",
      "note": "从改善人居环境、推动鞋业转型，到解决城市内涝、集约土地资源、提升社会治理，横峰街道抓住这次重大机遇，高起点谋划，全领域布局，全力度推进。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2033
     },
     {
      "no": "S06",
      "source": "zjrb.zjol.com.cn_浙江日报",
      "title": "浙江日报报道：温岭横峰统筹整合19个村推进土地综合整治",
      "date": "2023-12-07",
      "url": "https://zjrb.zjol.com.cn/html/2023-12/07/content_3704768.htm",
      "note": "在台州温岭横峰街道，通过重新统筹整合区域内的19个村，融合土地利用、水利、公共服务设施等多个专项规划，打破村界限制，统一安置公寓式住宅小区，全面推动工业用地入产业平台，建成工业产业园5个，吸引回力自动化制鞋等优质项目落户横峰。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "gmw.cn_光明网",
      "title": "全省唯一！温岭横峰全域土地综合整治入选国家级典型案例",
      "date": "2024-09-12",
      "url": "https://difang.gmw.cn/zj/2024-09/12/content_37558176.htm",
      "note": "通过土地综合整治，横峰以现代化城市社区的标准建设全域住宅安置用房，累计建成全域住宅安置小区9个，总用地面积约949亩，建筑面积约164.7万平方米。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "sxcntv.com_视点陕西网",
      "title": "温岭横峰全域整治与生态修复工程出实效",
      "date": "2020-08-15",
      "url": "https://m.sxcntv.com/guancha/2020/0819/40009814.html",
      "note": "在全域土地综合整治与生态修复工程中，横峰街道将碎片化的建设用地与零星耕地进行置换，推动农业区集中连片，大力实施高标准农田和农业两区建设，形成七片耕地和永久基本农田集中片区，项目区耕地集中连片程度达到56亩，水田占比增加到近90%，较现状增加5个百分点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "difang.gmw.cn_光明网",
      "title": "浙江省唯一！横峰全域土地综合整治入选国家级典型案例",
      "date": "2024-09-12",
      "url": "https://difang.gmw.cn/zj/2024-09/12/content_37558176.htm",
      "note": "通过土地综合整治，横峰以现代化城市社区的标准建设全域住宅安置用房，累计建成全域住宅安置小区9个，总用地面积约949亩，建筑面积约164.7万平方米。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "tidenews.com.cn_潮新闻",
      "title": "全域土地综合整治“三字诀” 激活横峰街道振兴澎湃动能",
      "date": "2024-09-24",
      "url": "https://tidenews.com.cn/news.html?id=2908845",
      "note": "横峰街道的美丽蝶变，正是浙江推进全域土地综合整治、激活乡村振兴澎湃动能的生动实践。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "sohu.com_搜狐（温岭发布）",
      "title": "温岭市横峰街道以土地综合整治先行，打造城乡协调发展共富样板",
      "date": "2024-09-11",
      "url": "https://www.sohu.com/a/808106465_121123751",
      "note": "近年来，温岭市横峰街道全域土地综合整治试点成就了横峰生产、生活、生态上的“脱胎换骨”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "m.163.com_网易新闻",
      "title": "全省唯一！国家级典型案例，台州+1",
      "date": "2024-09-24",
      "url": "https://m.163.com/dy/article/JCRVDPBQ0514FDFN.html",
      "note": "温岭市横峰街道全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「浙江自然资源」（浙江省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：浙江省台州市温岭市横峰街道 全域土地综合整治"
  ],
  "counts": {
   "items": 18,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 9,
    "其他媒体报道": 8
   }
  }
 },
 {
  "id": "22",
  "dir": "22_安徽省芜湖市无为市开城镇",
  "name": "安徽省芜湖市无为市开城镇",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "zrzyt.ah.gov.cn_安徽省自然资源厅",
      "title": "《安徽日报》丨无为市探索全域土地综合整治，盘活零散、闲置、低效建设用地",
      "date": "2026-08-17",
      "url": "https://zrzyt.ah.gov.cn/xwdt/mtbd/150645701.html",
      "note": "无为市以自然资源部全域土地综合整治试点为契机，聚焦土地空间重构，充分发挥土地整治“资源激活、产业导入、乡村振兴”的关键作用，在开城镇都督村和红庙镇海云村形成了两个独具特色的实践案例，走出了“以整治优空间、以空间引产业、以产业促共富”的乡村振兴新路径。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2396
     },
     {
      "no": "S09",
      "source": "wuhu.gov.cn_芜湖市人民政府",
      "title": "无为市开城镇：闲置变增值 资源变资产",
      "date": "2026",
      "url": "https://www.wuhu.gov.cn/xwzx/xqkx/41172445.html",
      "note": "通过全域土地综合整治，集中流转农户零散地块，这里小田变大田、多块变一块，为庄园落地奠定基础。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "ww.gov.cn_无为市人民政府",
      "title": "全域土地综合整治 争创“无为样板”",
      "date": "2020-07-08",
      "url": "https://www.ww.gov.cn/zwzx/mtjj/11989189.html",
      "note": "面对发展瓶颈，2019年6月中旬至7月初，无为市先后对20个镇选取的全域土地综合整治项目进行现场踏勘核查，经反复筛选，最终将开城、石涧、泥汊、洪巷作为试点镇，逐步推进全域土地综合整治，开城镇都督村就是试点村之一。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "ww.gov.cn_无为市人民政府",
      "title": "无为市住建局党组成员、副局长王军伟解读《无为市全域土地综合整治实施方案》",
      "date": "2025-09-01",
      "url": "https://www.ww.gov.cn/openness/public/6603381/40289335.html",
      "note": "答：为深入贯彻党的二十大和二十届二中、三中全会精神，贯彻习近平总书记考察安徽重要讲话及关于乡村振兴、生态文明建设等重要论述，以县域为切入点破除城乡二元结构，健全城乡融合发展体制机制，推进全域土地综合整治和生态修复工作，无为市住建局在召开专题会议、征求相关单位意见基础上制定《意见》。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "ww.gov.cn_无为市自然资源和规划局",
      "title": "【工作推进】资规局2025年《政府工作报告》上半年重点工作完成情况",
      "date": "2025-04-27",
      "url": "https://www.ww.gov.cn/openness/public/6603541/40597894.html",
      "note": "后续将进一步优化完善福渡、赫店两镇全域土地综合整治工程实施方案，待方案获省自然资源厅批准后，开始着手谋划无城、十里墩、泥汊、开城四镇全域土地整治工作。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "ww.gov.cn_无为市自然资源和规划局",
      "title": "2026年无为市耕地保护新闻发布会",
      "date": "2026-06-29",
      "url": "https://www.ww.gov.cn/openness/public/6603541/41220391.html",
      "note": "我市开城镇都督村、石涧镇黄埠村纳入部级全域土地综合整治试点，其中开城镇全域土地综合整治试点于2024年9月入选自然资源部第二批全域土地综合整治试点典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "ww.gov.cn_无为市农业农村局",
      "title": "无为市农业农村局2025年新闻发布会——无为市“千万工程”建设新闻发布会",
      "date": "2025-11-20",
      "url": "https://www.ww.gov.cn/zwgk/xwfbh/12245205.html",
      "note": "开城镇都督村通过全域土地整治盘活闲置资源，发展茶叶、草莓等五大特色产业，盘活增减挂钩土地指标160亩，引进经营主体10余家，形成年产值超2亿元的产业集群，2024年村集体经济收入达430万元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.ww.gov.cn",
      "title": "开城镇2026年政府工作报告",
      "date": "2026-03-27",
      "url": "https://www.ww.gov.cn/openness/public/6603881/40845448.html",
      "note": "“十五五”时期是我国基本实现社会主义现代化夯实基础的关键时期，也是开城镇抢抓长三角一体化发展、合肥都市圈和南京都市圈建设战略机遇，加快打造无为市西部特色农业强镇、文旅融合示范镇的重要窗口期。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.ww.gov.cn",
      "title": "开城镇2025年政府工作报告",
      "date": "2025-03-24",
      "url": "https://www.ww.gov.cn/openness/public/6603881/40734000.html",
      "note": "加快推进全域土地综合整治三期项目，实现土地资源优化配置，为重大项目落地和乡村振兴战略实施提供空间保障。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "音视频资料",
    "desc": "电视台、广播与「视频号」等渠道的影像报道；部分条目挂在政府网站或门户网站的转载页上，URL 无视频扩展名，故按源清单的分类名归入本类。",
    "items": [
     {
      "no": "S04",
      "source": "zrzyt.ah.gov.cn_安徽省自然资源厅",
      "title": "安徽日报视频号丨土地“变形记”系列视频④丨无为市开城镇都督村",
      "date": "2026-06-18",
      "url": "https://zrzyt.ah.gov.cn/xwdt/mtbd/150578711.html",
      "note": "2024年开城镇都督村全域土地综合整治入选全国典型案例。",
      "kind": "video",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「安徽自然资源」（安徽省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：安徽省芜湖市无为市开城镇 全域土地综合整治"
  ],
  "counts": {
   "items": 10,
   "excerpts": 1,
   "byCategory": {
    "政府官方通报": 9,
    "音视频资料": 1
   }
  }
 },
 {
  "id": "23",
  "dir": "23_福建省莆田市荔城区木兰溪南岸",
  "name": "福建省莆田市荔城区木兰溪南岸",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S02",
      "source": "zrzyt.fujian.gov.cn_福建省自然资源厅",
      "title": "中国自然资源报专题刊发！聚焦福建省学习运用“千万工程”经验",
      "date": "2025-06-23",
      "url": "https://zrzyt.fujian.gov.cn/ztzl/sxzygwzxsqzx/zyzxzx/202506/t20250623_6934263.htm",
      "note": "这些经过全域土地综合整治的地区，通过农用地、建设用地整理和生态保护修复，生产生活生态空间格局得到进一步优化，展现乡村新面貌。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4469
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "zrzyt.fujian.gov.cn_福建省自然资源厅",
      "title": "福建莆田木兰溪入选！第二批全域土地综合整治试点典型案例发布",
      "date": "2024-09-11",
      "url": "https://zrzyt.fujian.gov.cn/ztzl/sxzygwzxsqzx/zyzxzx/202409/t20240911_6516822.htm",
      "note": "试点遵循自然生态系统演替规律和内在机理，对山水林田河村等进行综合统筹和全域整治，加大“三生”空间格局优化调整力度，加强生态化、集约化、品质化改造。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 611
     },
     {
      "no": "S04",
      "source": "zrzyt.fj.gov.cn_福建省自然资源厅",
      "title": "环境美了 纠纷少了 耕地增了——莆田市木兰溪南岸全域土地综合整治试点见闻",
      "date": "2026-03-20",
      "url": "https://zrzyt.fj.gov.cn/zwgk/xwdt/zrzyyw/202603/t20260320_7113751.htm",
      "note": "港利村全域土地综合整治于2020年下半年开始，共涉及1000多户，村民了解政策后，大力支持项目实施。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 874
     },
     {
      "no": "S05",
      "source": "fujian.gov.cn_福建省人民政府",
      "title": "木兰溪南岸全域土地综合整治试点入选",
      "date": "2024-09-13",
      "url": "https://www.fujian.gov.cn/xwdt/fjyw/202409/t20240913_6517496.htm",
      "note": "该试点采取“木兰溪流域综合治理+全域土地综合整治”模式，部署农用地整理、建设用地整理、乡村生态治理修复、乡村历史文化保护、产业融合发展等五大工程。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 438
     },
     {
      "no": "S06",
      "source": "zrzyj.putian.gov.cn_莆田市自然资源局",
      "title": "莆田木兰溪南岸入选自然资源部第二批全域土地综合整治试点典型案例",
      "date": "2024-09-12",
      "url": "https://zrzyj.putian.gov.cn/xxgk/xwzx/bjdt/202409/t20240912_1941852.htm",
      "note": "试点遵循自然生态系统演替规律和内在机理，对山水林田河村等进行综合统筹和全域整治，加大“三生”空间格局优化调整力度，加强生态化、集约化、品质化改造。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "putian.gov.cn_莆田市人民政府",
      "title": "木兰溪南岸全域土地综合整治项目有序推进",
      "date": "2026-04-05",
      "url": "https://www.putian.gov.cn/zwgk/ptdt/ptyw/202604/t20260406_2210873.htm",
      "note": "连日来，荔城区新度镇木兰溪南岸全域土地综合连片整治项目一期有序推进。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "ptlc.gov.cn_莆田市荔城区人民政府",
      "title": "【深入开展“三争”行动】荔城区新度镇木兰溪南岸全域土地综合整治项目有序推进",
      "date": "2026-03-26",
      "url": "https://www.ptlc.gov.cn/zwgk/gzdt/lcyw/202603/t20260328_2209629.htm",
      "note": "眼下，在荔城区新度镇木兰溪南岸全域土地综合连片整治项目一期施工现场，一派热火朝天的施工景象。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "putian.gov.cn_莆田市人民政府",
      "title": "美丽蝶变展新颜——看木兰溪南岸全域土地综合整治和生态修复“莆田样板”",
      "date": "2022-03-22",
      "url": "https://www.putian.gov.cn/zwgk/ptdt/ptyw/202203/t20220322_1712925.htm",
      "note": "市自然资源局耕保和用途管制科科长杨荔阳表示，截至目前，试点项目村庄规划、全域土地综合整治工程实施方案以及永久基本农田调整方案已完成初步编制成果，并完成市内相关部门意见征求。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "zrzyj.putian.gov.cn_莆田市自然资",
      "title": "环境美了 纠纷少了 耕地增了——莆田市木兰溪南岸全域土地整治港利村安置小区见闻",
      "date": "2026-03-31",
      "url": "https://zrzyj.putian.gov.cn/xxgk/xwzx/bjdt/202603/t20260331_2209865.htm",
      "note": "港利村全域土地综合整治于2020年下半年开始，共涉及1000多户，村民了解政策后，大力支持项目实施。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "fjnews.fjsen.com",
      "title": "闽山闽水间的土地守护：向「寸土」要效益 为「粮仓」筑防线",
      "date": "2025-08-19",
      "url": "https://fjnews.fjsen.com/wap/2025-08/19/content_32021304.htm",
      "note": "晋江市九十九溪流域的全域土地综合整治试点通过实施农用地整理、耕地资源保护、低效建设用地整理、生态环境修复、人居环境整治等工程，提升区域内土地综合利用效率，在为城市居民提供旅游、娱乐和农耕体验的同时，充分释放城中村连片耕地作为城市绿心、绿肺的生态调节效能。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.ptlc.gov.cn",
      "title": "2025年荔城区政府工作报告",
      "date": "2026-01-09",
      "url": "https://www.ptlc.gov.cn/zwgk/gzbg/zfgzbg/202601/t20260109_2041910.htm",
      "note": "多项改革经验获国家层面认可推广，成功入选全国农村集体产权制度改革试点、经营性建设用地入市试点、全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S09",
      "source": "fj.people.cn_人民网福建频道",
      "title": "莆田木兰溪南岸入选自然资源部第二批全域土地综合整治试点典型案例",
      "date": "2024-09-12",
      "url": "http://fj.people.cn/n2/2024/0912/c181466-40975395.html",
      "note": "同时，试点遵循自然生态系统演替规律和内在机理，对山水林田河村等进行综合统筹和全域整治，加大“三生”空间格局优化调整力度，加强生态化、集约化、品质化改造。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「福建自然资源」（福建省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：福建省莆田市荔城区木兰溪南岸 全域土地综合整治"
  ],
  "counts": {
   "items": 12,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 10,
    "其他媒体报道": 1
   }
  }
 },
 {
  "id": "24",
  "dir": "24_江西省宜春市铜鼓县大塅镇",
  "name": "江西省宜春市铜鼓县大塅镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S02",
      "source": "iziran_中国自然资源报",
      "title": "释放潜力添动能｜强保障 促发展",
      "date": "2026-01-13",
      "url": "https://www.iziran.net/news.html?aid=5451089",
      "note": "铜鼓县大塅镇是宜春市首个全域土地综合整治试点，其生动实践表明，全域土地综合整治绝非简单的土地整理，而是通过系统性空间重组，破解乡村发展瓶颈、重塑乡村形态、培育乡村动能的钥匙，是一场以空间重构带动乡村全面振兴的行动。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2419
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S04",
      "source": "tonggu.gov.cn_铜鼓县自然资源局",
      "title": "铜鼓县自然资源局2024年上半年工作总结和下半年工作打算",
      "date": "2024",
      "url": "http://www.tonggu.gov.cn/tgxrmzf/ghjh54/pc/content/2028878255931367424/content_2028878255931367424.html",
      "note": " 现《永久基本农田调整方案》《大塅镇全域土地综合整治项目试点实施方案》两个方案已完成省厅审查批复；23年通过全域综合整治试点项目平台争取到重大区域发展战略（长江经济带绿色发展方向）项目中央资金共计7971万元，5月河流综合治理、地灾点整治、污水处理提升改造项目工程已完成招投标工作，项目建设正有力有序开展。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 6747
     },
     {
      "no": "S05",
      "source": "tonggu.gov.cn_铜鼓县人民政府",
      "title": "2025年重大项目进展情况（自然资源部分）",
      "date": "2025",
      "url": "http://www.tonggu.gov.cn/tgxrmzf/yjzjjfk5fvb/pc/content/2028899818860814336/content_2028899818860814336.html",
      "note": "分别为：高标准农田建设项目、大塅镇第一批土地开发项目、乡村振兴产业更新项目、河流综合治理工程项目、山体滑坡及地灾隐患整治项目、大塅镇滨河路改造工程 、污水处理厂建设项目、企业生活污水接管工程、村容村貌治理工程、饮用水更新改造工程、历史文化保护工程。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1072
     },
     {
      "no": "S18",
      "source": "tonggu.gov.cn_铜鼓县人民政府",
      "title": "大塅镇村基本情况简介",
      "date": "2026-06-04",
      "url": "http://www.tonggu.gov.cn/tgxrmzf/xzjj/pc/content/2028901477351530496/content_2028901477351530496.html",
      "note": "大塅镇是全国重点镇、江西百强中心镇、江西省全域土地综合整治项目试点乡镇、宜春市示范镇（重点镇），集镇规划面积达2.79平方公里，辐射带动周边带溪、龙门等乡镇、林场，为铜鼓县东河片中心镇。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "tonggu.gov.cn_铜鼓县人民政府",
      "title": "大塅镇2023年4月份重点工作和项目建设",
      "date": "2023-05-15",
      "url": "http://www.tonggu.gov.cn/tgxrmzf/zdgzfjjjz3057/202306/a93a5d6b12104620b2ce2be09dd6a915.shtml",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S26",
      "source": "zgcounty.com",
      "title": "铜鼓县2025年政府工作报告",
      "date": "2025-03-30",
      "url": "https://zgcounty.com/news/66900.html",
      "note": "大塅镇全域土地综合整治试点项目入选国家自然资源部第二批全域土地综合整治试点典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S28",
      "source": "www.gongchengzhaobiao.cn",
      "title": "2022年铜鼓县大塅镇全域土地综合整治浒口村等6个村土地开发项目结算初审",
      "date": "2026-04-03",
      "url": "https://www.gongchengzhaobiao.cn/news-57bc0cc734dc3f77f9a3db5fe0e20c44/",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S21",
      "source": "jx.ifeng.com_凤凰网江西",
      "title": "江西一全域土地综合整治试点案例入选全国典型案例",
      "date": "2024-09-13",
      "url": "https://jx.ifeng.com/c/8cpLZCfF3YZ",
      "note": "江西新闻客户端讯（江西日报全媒体记者杨碧玉）9月12日，记者从省自然资源厅获悉，9月10日自然资源部发布了第二批全域土地综合整治试点典型案例，共计15个，我省宜春市铜鼓县大塅镇全域土地综合整治试点案例入选。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江西自然资源」（江西省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江西省宜春市铜鼓县大塅镇 全域土地综合整治"
  ],
  "counts": {
   "items": 8,
   "excerpts": 3,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 6,
    "其他媒体报道": 1
   }
  }
 },
 {
  "id": "25",
  "dir": "25_湖北省孝感市应城市杨河镇",
  "name": "湖北省孝感市应城市杨河镇",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "xiaogan.gov.cn_孝感市人民政府",
      "title": "应城市入选第二批全国全域土地综合整治试点典型案例",
      "date": "2024-09-14",
      "url": "https://www.xiaogan.gov.cn/hd/rdwt/202409/t20240914_90906.shtml",
      "note": "9月10日，自然资源部在重庆市召开全域土地综合整治经验交流会，会议公布了全国第二批（15个）全域土地综合整治试点典型案例，应城市杨河镇全域国土综合整治项目榜上有名。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 529
     },
     {
      "no": "S02",
      "source": "xiaogan.gov.cn_孝感市人民政府",
      "title": "应城全域国土综合整治项目顺利通过“省考”",
      "date": "2024-05-13",
      "url": "https://www.xiaogan.gov.cn/zx/xsqzw/yc/202405/t20240513_22353.shtml",
      "note": "5月7日，记者从应城市获悉，该市杨河镇全域国土综合整治项目已顺利通过省级绩效复核，成为全省首个完成省级绩效评价复核的全域国土综合整治试点项目。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 641
     },
     {
      "no": "S03",
      "source": "xiaogan.gov.cn_孝感市人民政府",
      "title": "我市3单位获评全省全域国土综合整治工作先进单位",
      "date": "2025-02-15",
      "url": "https://xiaogan.gov.cn/zx/xgyw/202502/t20250215_127580.shtml",
      "note": "孝南朱湖、应城杨河2个全域国土综合整治项目获评全国典型案例，孝南朱湖、应城杨河、安陆木梓3个项目获评全省优秀范例，应城杨河项目在全省首个通过省级绩效考核。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 596
     },
     {
      "no": "S04",
      "source": "xiaogan.gov.cn_孝感市人民政府",
      "title": "应城杨河镇举行春日赏花季暨文明实践流动集市活动",
      "date": "2025-03-25",
      "url": "https://xiaogan.gov.cn/zx/xsqzw/202503/t20250325_204741.shtml",
      "note": "2020年至2022年，杨河镇实施全域国土综合整治项目，累计投资4.85亿元，整治土地3.27万亩，新增耕地1832亩，涉及8个村、2294户、10110人。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 795
     },
     {
      "no": "S16",
      "source": "nyt.hubei.gov.cn_湖北省农业农村厅",
      "title": "[孝感]应城入选第二批全国全域土地综合整治试点典型案例",
      "date": "2024-09-19",
      "url": "https://nyt.hubei.gov.cn/bmdt/yw/szdt/202409/t20240919_5341745_slh.shtml",
      "note": "应城市杨河镇全域国土综合整治项目总投资4.85亿元，总面积3.27万亩，新增耕地1832亩，涉及应城市杨河镇上杨、川江、马堰、聂程等8个村，共2294户、10110人，2021年3月纳入部级试点，于2021年9月开工建设，2023年10月竣工，同年12月完成项目整体验收，是我省首个完成整体验收和省级复核的部级试点项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "zrzy.xiaogan.gov.cn_孝感市自然资",
      "title": "我市孝南朱湖项目入选自然资源部首批全域国土综合整治试点典型示范案例",
      "date": "2024-06-26",
      "url": "https://zrzy.xiaogan.gov.cn/gzdt2/1885724.jhtml",
      "note": "同日，省自然资源厅也公示了全省首批10个全域国土综合整治试点优秀范例名单，我市孝南朱湖、应城杨河、安陆木梓3个全域国土综合整治项目入选，入选项目数量全省最多。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S23",
      "source": "zrzyt.hubei.gov.cn_湖北省自然资源",
      "title": "把学问写在荆楚大地上——湖北促进国土整治科研成果转化的实践",
      "date": "2024-12-19",
      "url": "https://zrzyt.hubei.gov.cn/bmdt/mtzs/202412/t20241219_5467779.shtml",
      "note": "与华中农业大学、航天宏图信息技术公司共同启动教育部“基于PIE的智慧国土课程群建设”项目，培养国土空间生态修复和全域国土综合整治人才。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S24",
      "source": "zrzyt.hubei.gov.cn_湖北省自然资源",
      "title": "湖北104个国土整治项目激发乡村活力",
      "date": "2024-12-27",
      "url": "https://zrzyt.hubei.gov.cn/bmdt/mtzs/202412/t20241227_5477788.shtml",
      "note": "目前全省已探索形成“政银企”合作、流域型整治、共同缔造、产业联盟等特色模式，孝南区朱湖项目、宣恩县椒园项目、应城市杨河项目入选全国全域土地综合整治典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S25",
      "source": "zrzyt.hubei.gov.cn_湖北省自然资源",
      "title": "我省首个全域国土综合整治项目通过省级绩效考核",
      "date": "2024-05-10",
      "url": "https://zrzyt.hubei.gov.cn/bmdt/zrzyyw/202405/t20240510_5185936.shtml",
      "note": "近日，应城市杨河镇全域国土综合整治项目通过省级绩效评价考核，成为全省首个完成省级绩效评价的全域整治项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S26",
      "source": "zrzyt.hubei.gov.cn_湖北省自然资源",
      "title": "荆楚大地的绿色嬗变 湖北全域国土综合整治纪实",
      "date": "2025-11-03",
      "url": "https://zrzyt.hubei.gov.cn/bmdt/zrzyyw/202511/t20251103_5803872.shtml",
      "note": "自2019年成为继浙江之后全国第二个以湖北省政府名义发文推进全域整治的省份以来，累计安排项目125个。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S28",
      "source": "news.hubeidaily.net",
      "title": "应城市杨河镇全域国土综合整治项目完成市级验收复核",
      "date": "2023-11-16",
      "url": "https://news.hubeidaily.net/pc/c_1989434.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S29",
      "source": "www.sohu.com",
      "title": "⊙【全省首个】永业行全程服务的应城杨河镇全域整治项目完成省级绩效评价",
      "date": "2024-05-07",
      "url": "https://www.sohu.com/a/776992629_121123789",
      "note": "近日，永业行承担的《2020年度应城市杨河镇全域国土综合整治项目》（以下简称项目）完成省级绩效评价。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S06",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "应城杨河：优化国土空间，新增耕地1832亩",
      "date": "2025-09-24",
      "url": "https://news.hubeidaily.net/pc/c_4574625.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "全省首个！应城市杨河镇全域国土综合整治项目通过省级绩效考核",
      "date": "2024-05-07",
      "url": "https://news.hubeidaily.net/pc/c_2587724.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "全国典型案例，孝感市应城市杨河镇入选！",
      "date": "2024-09-13",
      "url": "https://news.hubeidaily.net/pc/c_3120021.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "应城市入选第二批全国全域土地综合整治试点典型案例",
      "date": "2024-12-18",
      "url": "https://news.hubeidaily.net/pc/c_3108504.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "应城：杨河镇全域国土综合整治项目助推“万亩方”农田建设",
      "date": "2023-05-18",
      "url": "https://news.hubeidaily.net/mobile/1352623.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "news.hbtv.com.cn_湖北广播电视台",
      "title": "应城杨河全域国土综合整治改革项目——实施全域试点 推动全域振兴",
      "date": "2023-06-13",
      "url": "https://news.hbtv.com.cn/p/3712449.html",
      "note": "湖北省应城市杨河镇全域国土综合整治项目，在实施中结合本地自然条件差异、土地利用现状、经济社会发展和产业特色，让粮田变良田。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "news.cnhubei.com_荆楚网（湖北日报网）",
      "title": "湖北省首个全域国土综合整治项目通过省级绩效考核",
      "date": "2024-05-07",
      "url": "http://news.cnhubei.com/content/2024-05/07/content_17851583.html",
      "note": "湖北日报讯（记者刘胜、通讯员叶峻岭）近日，应城市杨河镇全域国土综合整治项目通过省级绩效评价考核，成为全省首个完成省级绩效评价复核的整治项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "ycrmtzx.cn_应城市融媒体中心",
      "title": "湖北应城入选第二批全国全域土地综合整治试点典型案例",
      "date": "2024-09",
      "url": "https://m.ycrmtzx.cn/p/98879.html",
      "note": "应城市杨河镇全域国土综合整治项目总投资4.85亿元，总面积3.27万亩，新增耕地1832亩，涉及应城市杨河镇上杨、川江、马堰、聂程等8个村，共2294户、10110人，2021年3月纳入部级试点，于2021年9月开工建设，2023年10月竣工，同年12月完成项目整体验收，是湖北省首个完成整体验收和省级复核的部级试点项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "ycrmtzx.cn_应城市融媒体中心",
      "title": "《全面推进乡村振兴》栏目：应城：开展全域国土综合整治",
      "date": "2021-11-03",
      "url": "https://m.ycrmtzx.cn/p/69369.html",
      "note": "我市认真贯彻落实第九次党代会精神，全力提速杨河镇全域国土综合整治项目，助推乡村振兴战略实施。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S30",
      "source": "www.sohu.com",
      "title": "一曲《田耕牛》，万亩沃野兴",
      "date": "2026-08-26",
      "url": "https://www.sohu.com/a/1067881050_121106908",
      "note": "2021年，应城市启动杨河镇全域国土综合整治项目，实际总投资3.81亿元，整治面积达3.27万亩。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「湖北自然资源」（湖北省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：湖北省孝感市应城市杨河镇 全域土地综合整治"
  ],
  "counts": {
   "items": 22,
   "excerpts": 4,
   "byCategory": {
    "政府官方通报": 12,
    "其他媒体报道": 10
   }
  }
 },
 {
  "id": "26",
  "dir": "26_湖北省恩施州宣恩县椒园镇",
  "name": "湖北省恩施州宣恩县椒园镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran.net_中国自然资源报",
      "title": "湖北宣恩实行土地综合整治多元投融资模式",
      "date": "2024-12-03",
      "url": "https://www.iziran.net/news.html?aid=5362837",
      "note": "该县椒园镇全域土地综合整治试点入选自然资源部发布的第二批全域土地综合整治试点典型案例。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 668
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S02",
      "source": "ghj.enshi.gov.cn_恩施州自然资源和规划局",
      "title": "宣恩县椒园镇全域国土综合整治增减挂钩指标成功入库",
      "date": "2025-03-11",
      "url": "http://ghj.enshi.gov.cn/xwzx/xsdt/202503/t20250311_1676993.shtml",
      "note": " 椒园镇稳步推进项目区农村废弃宅基地拆旧复垦工作，高效利用土地资源，不断释放存量用地潜力，出台《宣恩县椒园镇全域国土综合整治项目工作实施方案》，建立以拆除房屋建筑结构标准给予补助的奖励机制，明确奖励补助的标准和范围。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 721
     },
     {
      "no": "S13",
      "source": "ghj.enshi.gov.cn_恩施州自然资源和城",
      "title": "宣恩县局：立足全域整治共同缔造美好家园",
      "date": "2024-04-30",
      "url": "http://ghj.enshi.gov.cn/xwzx/xsdt/202405/t20240511_1576281.shtml",
      "note": "自项目建设以来，宣恩县局紧紧围绕椒园镇全域国土综合整治部级试点建设示范效应，着力推动实现美好环境与幸福生活共同缔造，不断提升人民群众获得感、幸福感、安全感。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "ghj.enshi.gov.cn_恩施州自然资源和城",
      "title": "宣恩县局：对标“五高” 实现“五新” 奋力推动自然资源和规划事业高质量发展",
      "date": "2025-03-05",
      "url": "http://ghj.enshi.gov.cn/xwzx/xsdt/202503/t20250311_1676997.shtml",
      "note": "在全省率先印发《关于全面加强耕地保护提升耕地质量工作措施》，统筹推进椒园、沙道、珠山等3个全域国土综合整治项目，积极开发非耕地资源，新增耕地指标700余亩。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "ghj.enshi.gov.cn_恩施州自然资源和城",
      "title": "宣恩县“找地行动”赋能乡村振兴",
      "date": "2025-07-09",
      "url": "http://ghj.enshi.gov.cn/xwzx/xsdt/202507/t20250709_1717247.shtml",
      "note": "在椒园镇白泥坝村，零散耕地整合成片，引入市场主体规模化种植。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "ghj.enshi.gov.cn_恩施州自然资源和城",
      "title": "恩施州自然资源和城乡建设局关于建议办理情况的答复（涉宣恩县全域项目）",
      "date": "2025-06-05",
      "url": "http://ghj.enshi.gov.cn/zwgk/zdgk/qtzdgk/jytablj/202506/t20250605_1706521.shtml",
      "note": "其中2020年度宣恩县椒园镇全域国土综合整治项目（部级试点），计划总投资7.05亿元，子项目25个，投资主体为宣恩仙山贡水生态农业开发有限公司，已融资2.8亿元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "zrzyt.hubei.gov.cn_湖北省自然资源",
      "title": "求本治田让荆楚粮仓更丰实",
      "date": "2025-11-11",
      "url": "https://zrzyt.hubei.gov.cn/bmdt/mtzs/202511/t20251111_5809950.shtml",
      "note": "此外，湖北累计实施全域国土综合整治项目125个，总建设规模达1301万亩。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "zrzyt.hubei.gov.cn_湖北省自然资源",
      "title": "荒地变宝地 “钱”景日日新——湖北宣恩千亩低效耕地重焕新生小记",
      "date": "2025-10-16",
      "url": "https://zrzyt.hubei.gov.cn/bmdt/sxdt/202510/t20251021_5794799.shtml",
      "note": "从农田整治到多元共赢，宣恩县有序推进全域国土综合整治试点，先后实施椒园、沙道沟、珠山三个乡镇试点项目，切实引进社会资本、经营主体参与项目建设管护，创新“全域﹢农旅﹢文旅”建设模式，将单一主体的行政驱动，转为全社会多元主体共同参与的内生性驱动模式。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "zrzyt.hubei.gov.cn_湖北省自然资源",
      "title": "湖北：以“整治之力”助推中部地区崛起",
      "date": "2026-06-24",
      "url": "https://zrzyt.hubei.gov.cn/bmdt/zrzyyw/202606/t20260624_5964345.shtml",
      "note": "自2019年自然资源部启动全域土地综合整治试点工作以来，湖北抢抓政策机遇，累计实施全域整治项目125个，规划总面积1301万亩，整治总规模485万亩，预算总投资680亿元，项目数量、投资额度均居全国前列。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S03",
      "source": "cnhubei.com_荆楚网（湖北日报网）",
      "title": "宣恩椒园镇全域国土综合整治项目入选省级优秀范例",
      "date": "2024-07-03",
      "url": "http://www.cnhubei.com/content/2024-07/03/content_18124964.html",
      "note": "宣恩县椒园镇全域国土综合整治项目作为湖北省20个部级试点建设项目之一，始终坚持“生态优先、绿色发展”的原则，着力推动土地综合整治、生态修复治理、产业融合发展，项目建设成效显著，成为恩施州唯一入选省级优秀范例的项目。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 674
     },
     {
      "no": "S04",
      "source": "cnhubei.com_荆楚网（湖北日报网）",
      "title": "宣恩县椒园镇全域国土综合整治增减挂钩指标成功入库",
      "date": "2025-02-28",
      "url": "http://m.cnhubei.com/content/2025-02/27/content_18983591.html",
      "note": "自椒园镇全域国土综合整治项目建设以来，宣恩县稳步推进项目区农村废弃宅基地拆旧复垦工作，高效利用土地资源，不断释放存量用地潜力。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S05",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "宣恩县椒园镇首次成功备案增减挂钩指标109亩，拆除636户",
      "date": "2025-03-14",
      "url": "https://news.hubeidaily.net/pc/c_3755709.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "sohu.com_宣恩县融媒体中心",
      "title": "宣恩椒园：全域国土综合整治绘就乡村振兴新画卷",
      "date": "2025-05-14",
      "url": "https://www.sohu.com/a/895069890_121610648",
      "note": "下一步，椒园镇将继续推广这一模式，推动全域国土综合整治与特色农业、生态旅游深度融合，助力农业农村现代化。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "hb.ifeng.com_凤凰网湖北",
      "title": "湖北宣恩：“三大模式”助推全域国土综合整治项目建设",
      "date": "2023-11-15",
      "url": "https://hb.ifeng.com/c/8UjFmbu3o5H",
      "note": "连日来，天气晴好，椒园镇全域国土综合整治项目建设正酣，宣恩县自然资源和规划局以主题党日活动为载体，在项目新增耕地上开展了“整治出实效、服务新农村”特色实践活动，帮助村民播种油菜，田间地头一派繁忙景象。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "hubeidaily.net_湖北日报视界网",
      "title": "宣恩椒园：实施国土综合整治 助力乡村振兴",
      "date": "2024-01-15",
      "url": "https://pic.hubeidaily.net/post.jsp?id=2759103",
      "note": "宣恩县椒园镇对辖区14个行政村实施全域国土综合整治项目,总面积16703公顷,总投资7.05亿元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "finance.sina.com.cn_新浪财经",
      "title": "宣恩县局实行土地综合整治多元投融资模式",
      "date": "2024-12-06",
      "url": "https://finance.sina.com.cn/jjxw/2024-12-06/doc-incypaas8892255.shtml",
      "note": "宣恩县椒园镇全域土地综合整治试点入选自然资源部发布的第二批全域土地综合整治试点典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「湖北自然资源」（湖北省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：湖北省恩施州宣恩县椒园镇 全域土地综合整治"
  ],
  "counts": {
   "items": 16,
   "excerpts": 3,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 8,
    "其他媒体报道": 7
   }
  }
 },
 {
  "id": "27",
  "dir": "27_广东省梅州市蕉岭县新铺镇",
  "name": "广东省梅州市蕉岭县新铺镇",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "jiaoling.gov.cn_蕉岭县人民政府",
      "title": "全省唯一！蕉岭县新铺镇入选全国典型案例",
      "date": "2024-09-14",
      "url": "https://www.jiaoling.gov.cn/zzzs/zcdt/content/mpost_2675322.html",
      "note": "近年来，蕉岭县新铺镇全域土地综合整治试点通过因地制宜推进水系修复、城乡人居环境整治等，持续探索“两山”转化路径，培育生态产业，既统筹生态保护修复，又促进绿色低碳发展。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 457
     },
     {
      "no": "S02",
      "source": "jiaoling.gov.cn_蕉岭县人民政府",
      "title": "“百千万工程”的蕉岭新铺实践：看全域土地综合整治如何“点土成金”",
      "date": "2023-12-09",
      "url": "https://www.jiaoling.gov.cn/mzqlxpz/gkmlpt/content/2/2573/post_2573688.html",
      "note": "这片1000亩的土地，是新铺镇推进全域土地综合整治的成果。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 5334
     },
     {
      "no": "S03",
      "source": "jiaoling.gov.cn_蕉岭县自然资源局",
      "title": "从全域找地到全域整治，梅州2024年全域土地综合整治大事记",
      "date": "2025-01-17",
      "url": "https://www.jiaoling.gov.cn/mzqlzrj/gkmlpt/content/2/2722/post_2722120.html",
      "note": "广东省自然资源厅建斌厅长多次来梅调研指导，深入援建小镇、四望嶂国防教育基地、新铺镇全域土地综合整治试点、安流镇全域土地综合整治试点等对工作进行了调研，鼓励梅州要认真落实省委“1310”具体部署，深入实施“百千万工程”，坚持规划为引领，锚定目标一张蓝图绘到底，全面助推乡村全面振兴，奋力推动县域经济高质量发展。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2969
     },
     {
      "no": "S04",
      "source": "jiaoling.gov.cn_蕉岭县人民政府",
      "title": "新铺镇：“四田+四地+四治”深化全域土地综合整治",
      "date": "2024-11-27",
      "url": "https://www.jiaoling.gov.cn/mzqlxpz/gkmlpt/content/2/2703/post_2703030.html",
      "note": "自2021年入选全域土地综合整治国家级试点以来，新铺镇探索以调田、汇田、增田、聚田的“四田”模式，增耕地、促流转，实现耕地由小农经营向规模经营转变，通过整合零散土地集约流转耕地7310亩，完成高标准农田建设5900亩。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2322
     },
     {
      "no": "S06",
      "source": "nr.gd.gov.cn_广东省自然资源厅",
      "title": "梅州蕉岭：耕地集中整治布局优化 推进良田连片新格局",
      "date": "2025",
      "url": "https://nr.gd.gov.cn/xwdtnew/sxdt/content/post_4701115.html",
      "note": "2025年，蕉岭县自然资源局以新铺镇全域土地综合整治国家级试点为基础，抢抓省级第二批耕地集中连片整治试点工作机遇，全力指导各镇开展耕地集中连片整治，多点开花，因地制宜打造“百亩方”“千亩方”，让荒地变良田、小田变大田。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "jiaoling.gov.cn_蕉岭县人民政府",
      "title": "全域土地综合整治典型示范 ｜ 梅州蕉岭全域土地综合整治绘就山区空间治理新样板",
      "date": "2025",
      "url": "https://www.jiaoling.gov.cn/mzqlzrj/gkmlpt/content/2/2929/post_2929595.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "nr.gd.gov.cn_广东省自然资源厅",
      "title": "图文实录 ／ 广东首届全域土地综合整治项目推介活动",
      "date": "2023-12-14",
      "url": "https://nr.gd.gov.cn/gkmlpt/content/4/4301/post_4301023.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "nr.gd.gov.cn_广东省自然资源厅",
      "title": "探索农村土地综合改革 广东推出十大典型案例",
      "date": "2024-11-15",
      "url": "https://nr.gd.gov.cn/gkmlpt/content/4/4525/post_4525336.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "jiaoling.gov.cn_蕉岭县人民政府",
      "title": "产业添动能，“百千万工程”焕活商贸古镇新铺！",
      "date": "2025-06-09",
      "url": "https://www.jiaoling.gov.cn/mzqlxpz/gkmlpt/content/2/2780/post_2780575.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "jiaoling.gov.cn_蕉岭县人民政府",
      "title": "2026年政府工作报告（新铺镇）",
      "date": "2026-06-01",
      "url": "https://www.jiaoling.gov.cn/mzqlxpz/gkmlpt/content/2/2909/post_2909507.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "jiaoling.gov.cn_蕉岭县人民政府",
      "title": "最高奖励1000万元！新铺镇全域土地综合整治试点项目拟获省奖补",
      "date": "2024-12-06",
      "url": "https://www.jiaoling.gov.cn/zwgk/gzdt/bmdt/content/post_2706788.html",
      "note": "其中，新铺镇全域土地综合整治试点入选第一档奖补标准。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "jiaoling.gov.cn_蕉岭县人民政府",
      "title": "新铺：向存量要增量、向集约要空间，全力打造全域土地综合整治典型样板",
      "date": "2024-02-08",
      "url": "https://www.jiaoling.gov.cn/zwgk/gzdt/zcdt/content/post_2597302.html",
      "note": "作为全市唯一一个入选全域土地综合整治国家级试点，新铺镇以“百千万工程”为统领，以腾挪农村建设用地资源和农用地规模化流转经营为重点，提升完善“四田”“四地”等工作法，深化农村“三块地”集成改革，推动向存量要增量、向集约要空间，形成良田连片、村庄集中、产业集聚、生态优美、城乡融合、区域平衡的高质量发展新格局，全力打造全域土地综合整治典型样板。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S23",
      "source": "jiaoling.gov.cn_蕉岭县人民政府",
      "title": "新铺镇：促进制造业与服务业协同发展，推动产业更旺、乡村更美、成效更显",
      "date": "2026-03-03",
      "url": "https://www.jiaoling.gov.cn/zwgk/gzdt/zcdt/content/post_2875392.html",
      "note": "拓宽2个大湾区“菜篮子”生产基地销售渠道，打造“黄坑茶”“丝苗米”“新铺蔬菜”“新铺玉米”等特色品牌，培育茶饮、果蔬饮品等产业，实施“以工代赈”强化农业生产支撑。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S25",
      "source": "www.jiaoling.gov.cn",
      "title": "盘活土地资源 激活乡村共富发展新动能",
      "date": "2026-08-04",
      "url": "https://www.jiaoling.gov.cn/zwgk/gzdt/zcdt/content/post_2929354.html",
      "note": "自深入实施“百县千镇万村高质量发展工程”以来，蕉岭县新铺镇锚定农业农村现代化这一目标，扎实推进乡村全面振兴，以全域土地整治撬动产业变革，大力推进耕地集约连片发展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S08",
      "source": "nfnews.com_南方日报",
      "title": "南方日报：梅州新铺镇国家试点，整治土地思路活",
      "date": "2023-12-22",
      "url": "https://www.nfnews.com/content/lyKYMwEP65.html",
      "note": "国地科技为梅州蕉岭县新铺镇全域土地综合整治国家试点提供方案编制、项目实施等全流程综合服务，助推广东省“百县千镇万村高质量发展工程”实施，推进县域高质量发展和乡村振兴。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "nfnews.com_南方日报",
      "title": "点“土”成金！梅州2024年全域土地综合整治大事记",
      "date": "2025-01-20",
      "url": "https://static.nfnews.com/content/202501/20/c10452915.html",
      "note": "2024年9月10日，自然资源部发布第二批全域土地综合整治试点典型案例，蕉岭县新铺镇全域土地综合整治国家试点被自然资源部列为第二批典型案例；2024年11月，蕉岭县新铺镇“集成式全域土地综合整治”模式被省委改革办列为“百千万工程”第三批发布的“农村土地综合改革”主题中10个典型案例之一。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "mzrb.meizhou.cn_梅州日报",
      "title": "蕉岭县新铺镇案例再次入选",
      "date": "2024-09-19",
      "url": "https://mzrb.meizhou.cn/html/2024-09/19/content_365525.htm",
      "note": "近年来，蕉岭县新铺镇全域土地综合整治试点通过因地制宜推进水系修复、城乡人居环境整治等，持续探索“两山”转化路径，培育生态产业，既统筹生态保护修复，又促进绿色低碳发展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "mzrb.meizhou.cn_梅州日报",
      "title": "古镇开新篇",
      "date": "2025-06-25",
      "url": "https://mzrbh5.meizhou.cn/html5/2025-06/25/content_146667_2331916.htm",
      "note": "在县自然资源局的支持和具体指导下，他们积极参与国家级全域土地综合整治试点申报，通过多年的探索，2021年新铺镇被列为全域土地综合整治国家试点，2023年入选广东省首批“百千万工程”典型镇，2024年新铺镇和同福村的“全域土地综合整治试点”同时入选全国典型案例、全省基层推进“百千万工程”集成式改革典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "finance.sina.com.cn_新浪财经",
      "title": "案例分享：蕉岭县新铺镇全域土地综合整治试点",
      "date": "2023-03-15",
      "url": "https://finance.sina.com.cn/esg/2023-03-15/doc-imykxazc8049063.shtml",
      "note": "2021年1月新铺镇入选全域土地综合整治国家级试点，同年5月，梅州市成功申报广东南岭山区韩江中上游山水林田湖草沙一体化保护和修复工程项目，新铺镇成为“全域土地整治+山水保护修复”实施的重点区域。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S26",
      "source": "y.meizhou.cn",
      "title": "「巴掌田」变身「高产田」！蕉岭高标准农田建设提速增效",
      "date": "2026-01-25",
      "url": "https://y.meizhou.cn/jiaoling/p/225320.html",
      "note": "走进新铺镇尖坑村高标准农田改造提升项目建设现场，一派热火朝天的施工景象映入眼帘。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S27",
      "source": "www.sohu.com",
      "title": "广东省全域土地综合整治典型案例⑥ ／ 梅州市蕉岭县：聚土为沃、擎动兴产，打造山区空间治理样板",
      "date": "2026-01-02",
      "url": "https://www.sohu.com/a/971751429_121106875",
      "note": "蕉岭县蓝坊镇按照“山区兴田”的方向建设“千亩方”集中整治区，带动烟农每年每亩增收2000元；新铺镇同福村联合周边村引入农业龙头企业打造高品质粤港澳大湾区“菜篮子”基地，土地租金收益由每亩400元提升至600元，创造了120多个“家门口”就业机会，为村集体和农户增收近500万元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「广东自然资源」（广东省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：广东省梅州市蕉岭县新铺镇 全域土地综合整治"
  ],
  "counts": {
   "items": 21,
   "excerpts": 4,
   "byCategory": {
    "政府官方通报": 14,
    "其他媒体报道": 7
   }
  }
 },
 {
  "id": "28",
  "dir": "28_重庆市涪陵区大顺乡",
  "name": "重庆市涪陵区大顺乡",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "fl.gov.cn_重庆市涪陵区人民政府",
      "title": "一张蓝图绘到底 美了乡村富了村民——涪陵入选全国全域土地综合整治试点典型案例",
      "date": "2024-09-18",
      "url": "http://www.fl.gov.cn/zwxx_206/ywdt/202409/t20240918_13637039.html",
      "note": "“大顺乡全域土地综合整治项目”共计投入财政资金8500万元，吸引社会资本投入9700余万元，2022年4月完成工程建设并通过重庆市规划自然资源局组织的验收。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1725
     },
     {
      "no": "S04",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "涪陵：深入推进全域土地综合整治 建设宜居宜业和美乡村",
      "date": "2025-06-25",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/qxlb/202506/t20250625_14745818.html",
      "note": "从大顺全域土地综合整治项目入选自然资源部第二批试点典型案例到江北街道邓家、大渡两村全域土地综合整治项目正式完工，涪陵区规划和自然资源局坚持学习运用“千万工程”经验，高质量推进全域土地综合整治，高效配置乡村各类要素资源，进一步优化了生产、生活、生态空间格局，助力涪陵区广袤山乡面貌发生蝶变，逐步实现乡村美、经济旺的“双丰收”。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2665
     },
     {
      "no": "S13",
      "source": "fl.gov.cn_重庆市涪陵区人民政府",
      "title": "重庆市涪陵区2021年国民经济和社会发展计划执行情况与2022年计划草案报告",
      "date": "2022-08-05",
      "url": "http://www.fl.gov.cn/zfxxgk_206/fdzdgknr/ghxx/gmjjhshfzgh/202208/t20220805_10981704.html",
      "note": "大顺乡全域土地综合整治项目获评重庆首届生态保护修复十大案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "fl.gov.cn_重庆市涪陵区人民政府",
      "title": "奋斗华章 实干写就——涪陵“十四五”经济社会高质量发展综述",
      "date": "2025-12-02",
      "url": "http://www.fl.gov.cn/zwxx_206/ywdt/202512/t20251202_15202992_zbb.html",
      "note": "“十四五”以来，涪陵“大综合一体化”行政执法、乡镇（街道）综合行政执法等改革全面推开，大顺镇全域土地综合整治、党建链联动产业链、法治助力榨菜产业发展等做法获评全国典型案例，2024年改革工作总体排名区县第三。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "ghzrzyj.cq.gov.cn_重庆市规划和自然",
      "title": "重庆市规划和自然资源局关于2024年度生态环境保护职责履行情况的报告",
      "date": "2025-03-20",
      "url": "https://ghzrzyj.cq.gov.cn/zwxx_186/tzgg/202503/t20250320_14424298.html",
      "note": "12个国家试点项目和3个市级项目完工，九龙坡铜罐驿、涪陵大顺项目分别入选自然资源部第一、二批典型案例，全国首次全域土地综合整治经验交流会在我市召开，我局在会上作交流发言。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "nyncw.cq.gov.cn",
      "title": "涪陵：农田「四改」带动「共建统种齐富」 改造提升丘陵山区高标准农田显成效",
      "date": "2026-04-27",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/qxlb/202604/t20260427_15637675.html",
      "note": "大顺镇林和村为了解决劳动力不足问题，采取村集体经济组织集中农户承包地，再引入重庆晟泰香溢农业科技有限公司共同参与建设的方式，改造提升高标准农田3000亩。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "nyncw.cq.gov.cn",
      "title": "涪陵：高标准农田建设助力农业「耕」新篇",
      "date": "2025-12-15",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/qxlb/202512/t20251215_15245343.html",
      "note": "2023年起，德胜村启动高标准农田建设，至2024年共完成改造1800亩。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "admin.cq.gov.cn",
      "title": "激活乡村资源要素 重塑乡村发展格局 涪陵 深入推进全域土地综合整治 建设宜居宜业和美乡村",
      "date": "2025-06-25",
      "url": "https://admin.cq.gov.cn/ywdt/zwhd/qxdt/202506/t20250625_14742534.html",
      "note": "从大顺全域土地综合整治项目入选自然资源部第二批试点典型案例到江北街道邓家、大渡两村全域土地综合整治项目正式完工，涪陵区规划和自然资源局坚持学习运用“千万工程”经验，高质量推进全域土地综合整治，高效配置乡村各类要素资源，进一步优化了生产、生活、生态空间格局，助力涪陵区广袤山乡面貌发生蝶变，逐步实现乡村美、经济旺的“双丰收”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S05",
      "source": "cqrb.cn_重庆日报",
      "title": "美了乡村富了民！涪陵入选全国全域土地综合整治试点典型案例",
      "date": "2024-09-15",
      "url": "https://cqrb.cn/contry/dy22/2024-09-15/2025810_pc.html",
      "note": "涪陵区大顺乡全域土地综合整治试点以“多规合一”为切入点，通过整合项目、聚集资金、协调用地布局，形成了管到底的“一张蓝图”，促进部门间协同配合和土地资源高效利用。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1516
     },
     {
      "no": "S06",
      "source": "difang.gmw.cn_光明网",
      "title": "重庆涪陵区大顺乡全域土地综合整治试点入选全国典型案例",
      "date": "2024-09-12",
      "url": "https://difang.gmw.cn/cq/2024-09/12/content_37558281.htm",
      "note": "涪陵区大顺乡全域土地综合整治试点以“多规合一”为切入点，通过整合项目、聚集资金、协调用地布局，形成建设规划“一张蓝图”，促进了部门间协同配合和土地资源高效利用。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "cqnews.net_华龙网",
      "title": "全域土地综合整治试点案例（第二批）发布 重庆涪陵大顺乡入选",
      "date": "2024-09-10",
      "url": "https://www.cqnews.net/1/detail/1283083939944697856/web/content_1283083939944697856.html",
      "note": "重庆市规划和自然资源局相关负责人介绍，涪陵区大顺乡全域土地综合整治试点以“多规合一”为切入点，通过整合项目、聚集资金、协调用地布局，形成建设规划“一张蓝图”，促进了部门间协同配合和土地资源高效利用。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "cqnews.net_华龙网",
      "title": "观察丨全域土地综合整治 激活重庆乡村振兴澎湃动能",
      "date": "2024-09-11",
      "url": "https://www.cqnews.net/1/detail/1283209492434079744/web/content_1283209492434079744.html",
      "note": "涪陵大顺乡全域土地综合整治项目实施后，村民种植灵芝致富。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "mp.zg.cnfin.com_新华政务",
      "title": "重庆涪陵：工业大区何以练就“农业真功”",
      "date": "2026-04-08",
      "url": "https://mp.zg.cnfin.com/c/2026-04-08/579136398.shtml",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "sohu.com_涪陵发布",
      "title": "一张蓝图绘到底 美了乡村富了村民——涪陵入选全国全域土地综合整治试点典型案例",
      "date": "2024-09-16",
      "url": "https://www.sohu.com/a/809423077_121106884",
      "note": "“大顺乡全域土地综合整治项目”共计投入财政资金8500万元，吸引社会资本投入9700余万元，2022年4月完成工程建设并通过重庆市规划自然资源局组织的验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.sohu.com",
      "title": "地名里的重庆 ／ 大顺镇，一座藏在梯田与碉楼间的田园秘境",
      "date": "2026-02-02",
      "url": "https://www.sohu.com/a/982637824_121106884",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「重庆自然资源」（重庆省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：重庆市涪陵区大顺乡 全域土地综合整治"
  ],
  "counts": {
   "items": 15,
   "excerpts": 3,
   "byCategory": {
    "政府官方通报": 8,
    "其他媒体报道": 7
   }
  }
 },
 {
  "id": "29",
  "dir": "29_四川省自贡市大安区牛佛镇",
  "name": "四川省自贡市大安区牛佛镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran.net_中国自然资源报",
      "title": "稻花香里品乡愁——四川自贡大安区牛佛镇全域土地综合整治见闻",
      "date": "2024-06-12",
      "url": "https://www.iziran.net/news.html?aid=5324478",
      "note": "近年来，牛佛镇以全域土地综合整治试点为抓手，通过加强耕地保护、发展富农产业、改善人居环境，让群众望得见山、看得见水、记得住乡愁，呈现出一派欣欣向荣的美丽田园景象。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1748
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S02",
      "source": "dnr.sc.gov.cn_四川省自然资源厅",
      "title": "自贡市大安区牛佛镇全域土地综合整治试点取得突出成效",
      "date": "2025-06-10",
      "url": "https://dnr.sc.gov.cn/scdnr/scszdt/2025/6/10/c5000fd8ee00468ca3ddd56a177fd4d5.shtml",
      "note": "目前，大安区牛佛镇全域土地综合整治试点已完成高标准农田建设17000亩、农用地整理7000亩、撂荒地整治1200亩、低效园林地整治500亩、建设用地整理500亩，形成稻鱼、机耕、研学等“一园六区”示范园区；建成金银花、无花果、蔬菜、生态农业四大特色产业园，红旗村、农科村等核心村集体经济收入实现逐年增长。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 457
     },
     {
      "no": "S03",
      "source": "zgdarm.cn_自贡市大安区融媒体中心",
      "title": "大安区牛佛镇全域土地综合整治试点典型案例",
      "date": "2024-10-12",
      "url": "https://www.zgdarm.cn/htmls/5O216O2312O5044O1.html",
      "note": " 2021 年，自然资源部批准大安区牛佛镇为国家级全域土地综合整治试点镇。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4952
     },
     {
      "no": "S08",
      "source": "zgzx.gov.cn_自贡市政协",
      "title": "大安区政协视察牛佛镇全域土地综合整治试点项目实施情况",
      "date": "2022-09-28",
      "url": "https://zgzx.gov.cn/details/xxzx/12843.html",
      "note": "为充分发挥政协政治协商、民主监督、参政议政的职能， 促进耕地保护和土地集约节约利用，改善农村人居环境， 助推乡村 全面振兴 ， 9月27日 区政协副主席陈涛带领区政协农业农村和人资环委及相关政协委员到大安区 牛佛镇 视察 全域土地综合整治试点项目实施 情况，区 自然资源 局和 牛佛 镇 等单位 相关领导陪同视察。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1352
     },
     {
      "no": "S21",
      "source": "zgsdaq.sczwfw.gov.cn",
      "title": "自贡市大安区牛佛镇持续推进全域土地综合整治 建设宜居宜业美丽乡村",
      "date": "2023-10-12",
      "url": "https://zgsdaq.sczwfw.gov.cn/art/2023/10/12/art_24774_234901.html",
      "note": "自2021年自然资源部批准自贡市大安区牛佛镇为全域土地综合整治国家试点镇以来，大安区高度重视，借鉴运用浙江“千万工程”好做法好经验，探索创新推进机制和实施模式，目前工作成效初显。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "ggzyjy.sc.gov.cn",
      "title": "大安区牛佛镇全域土地综合整治试点项目（第一期）施工招标公告",
      "date": "2023-08-16",
      "url": "https://ggzyjy.sc.gov.cn/jyxx/002001/002001001/20230816/46cb488a-7608-4968-8f37-f976417df4af.html",
      "note": "项目已具备招标条件，现对该项目的 高标准农田建设[自贡市大安区牛佛镇红旗村、大义村（金星村)、金山村（群力村）土地整治项目]（第二次） 施工进行公开招标。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S04",
      "source": "sc.people.com.cn_人民网四川频道",
      "title": "自贡市大安区牛佛镇入选全国土地整治典型案例，乡村振兴添动力",
      "date": "2024-09-12",
      "url": "https://sc.people.com.cn/n2/2024/0912/c345458-40975806.html",
      "note": "牛佛镇自2021年被自然资源部批准为国家级全域土地综合整治试点镇以来，秉承山水林田湖草沙系统治理理念，采取“农用地整理+建设用地整理+生态保护修复+千年古镇文化保护开发”的模式，投资约8.5亿元，分三期实施22个子项目，有效解决了村庄“空心化”、土地利用率低、耕地碎片化等问题。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S05",
      "source": "epaper.scdaily.cn_四川日报",
      "title": "自贡大安区牛佛镇入选",
      "date": "2024-09-17",
      "url": "https://epaper.scdaily.cn/shtml/scrb/20240918/316269.shtml",
      "note": "牛佛镇试点案例适用于推动具有一定产业、文化基础，存在土地破碎化且利用效率低、资源丰富挖潜不足、空间布局无序等问题的丘区特色乡镇，可为西南内陆省份丘区特色乡镇下一步深入推进全域土地综合整治，提供可参考可借鉴的经验模式。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S06",
      "source": "zgm.cn_自贡网",
      "title": "全川首个！牛佛镇全域土地综合整治试点入选全国案例",
      "date": "2024-09-11",
      "url": "https://www.zgm.cn/content/66e1738f6285a",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "sohu.com_自贡网",
      "title": "千年古镇“焕新出彩”！自贡全域土地综合整治试点出成果",
      "date": "2024-07-17",
      "url": "https://www.sohu.com/a/793973763_121106884",
      "note": "近年来，牛佛镇以全域土地综合整治试点为抓手，通过加强耕地保护、发展富农产业、改善人居环境，让群众望得见山、看得见水、记得住乡愁，呈现出一派欣欣向荣的美丽田园景象。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "sohu.com_自贡网",
      "title": "自贡大安区牛佛镇全域土地综合整治入选全国案例",
      "date": "2024-09-11",
      "url": "https://www.sohu.com/a/808016513_121106884",
      "note": "同时，结合建设用地整理，新建集地域文化、建筑风格、田园风光于一体的18个集中居住区，打造“红旗飘飘·津津乐稻”“拾光漫步·醉美农科”等示范村庄，宜居、宜业、宜游的“大美”牛佛画卷逐渐呈现。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.zgm.cn",
      "title": "完成高标准农田建设2.6万亩！大安区牛佛镇全力抓好全域土地综合整治",
      "date": "2024-12-17",
      "url": "https://www.zgm.cn/content/676134d2a7c43",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.zgm.cn",
      "title": "“碎片地”变“高产地”——看大安区牛佛镇全域土地综合整治如何“点土成金”",
      "date": "2023-05-04",
      "url": "https://www.zgm.cn/content/64537525d4e6e",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「四川自然资源」（四川省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：四川省自贡市大安区牛佛镇 全域土地综合整治"
  ],
  "counts": {
   "items": 13,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 5,
    "其他媒体报道": 7
   }
  }
 },
 {
  "id": "30",
  "dir": "30_陕西省榆林市绥德县满堂川镇",
  "name": "陕西省榆林市绥德县满堂川镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran.net_中国自然资源报",
      "title": "全域土地综合整治试点典型案例丨陕西绥德：黄土地上绘“丰”景",
      "date": "2024-09-25",
      "url": "https://www.iziran.net/news.html?aid=5345879",
      "note": "陕西省榆林市绥德县满堂川镇全域土地综合整治试点位于黄土高原地区，是自然资源部2021年部署的乡镇全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2825
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "sxsd.gov.cn_绥德县人民政府",
      "title": "绥德县满堂川镇全域土地综合整治试点入选自然资源部第二批典型案例",
      "date": "2024-09-12",
      "url": "https://www.sxsd.gov.cn/xwzx/zwyw/202409/t20240912_1877319.html",
      "note": "近年来，绥德县深入践行习近平生态文明思想，在满堂川镇实施了全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1365
     },
     {
      "no": "S12",
      "source": "sxsd.gov.cn_绥德县人民政府",
      "title": "锚定“三个绥德”建设 绘就幸福民生底色",
      "date": "2026-09-30",
      "url": "https://www.sxsd.gov.cn/xwzx/xzbm/202609/t20260930_2131562.html",
      "note": "统筹山水林田湖草沙一体化保护和系统治理，满堂川镇全域土地综合整治成果入选全国典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "sxsd.gov.cn_绥德县人民政府",
      "title": "满堂川镇举行“平凡的世界”写生基地启动暨西安美院2025年秋季学期外出写生开班仪式",
      "date": "2025-10-20",
      "url": "https://www.sxsd.gov.cn/xwzx/zwyw/202510/t20251020_2044439.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "zyghj.yl.gov.cn_榆林市自然资源和规划",
      "title": "喜报！绥德县满堂川镇全域土地综合整治试点入选自然资源部典型案例",
      "date": "2024-09-12",
      "url": "https://zyghj.yl.gov.cn/xwzx/zyxw/202409/t20240912_1886856.html",
      "note": "陕西省榆林市绥德县满堂川镇全域土地综合整治试点入选该批次典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "sxbb.gov.cn",
      "title": "绥德县自然资源开发服务中心（事业单位年度报告）",
      "date": "2024-04-01",
      "url": "https://sxbb.gov.cn/site-sxdjgl/yearlyReport_view/256893",
      "note": "2023年已经完成了满堂川全域土地综合整治和常家沟山水林田湖草试点项目的竣工验收工作。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S09",
      "source": "sohu.com_榆林市自然资源和规划局",
      "title": "【县区动态】全域土地综合整治绥德实践",
      "date": "2023-08-23",
      "url": "https://www.sohu.com/a/714252669_121106869",
      "note": "2020年5月，自然资源部将绥德县满堂川镇确定为全域土地综合整治试点项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "shaanxi.china.com",
      "title": "锚定“三个绥德”建设 绘就幸福民生底色",
      "date": "2026-09-30",
      "url": "https://shaanxi.china.com/shehui/20000873/20260930/26017769.html",
      "note": "统筹山水林田湖草沙一体化保护和系统治理，满堂川镇全域土地综合整治成果入选全国典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「陕西自然资源」（陕西省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：陕西省榆林市绥德县满堂川镇 全域土地综合整治"
  ],
  "counts": {
   "items": 8,
   "excerpts": 2,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 5,
    "其他媒体报道": 2
   }
  }
 },
 {
  "id": "31",
  "dir": "31_江苏省南通市如东县新店镇",
  "name": "江苏省南通市如东县新店镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S12",
      "source": "zgnt.net_南通日报数字报",
      "title": "如东县：（全域土地综合整治专版）",
      "date": "2024-06-25",
      "url": "http://www.zgnt.net/ntrbszb/pc/c/202406/25/content_176802.html",
      "note": "2021年以来，如东抢抓机遇、因地制宜，先后申报实施新店镇全域土地综合整治国家级改革试点和洋口镇国土空间全域综合整治省级示范，其中新店镇试点项目经验做法被省自然资源厅作为典型案例上报自然资源部，洋口镇示范项目推进速度全省领先，实现“当年申报、当年批复、当年建设”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "zgjssw.gov.cn_中共江苏省委新闻网",
      "title": "如东新店全域土地综合整治国家级试点项目立体推进",
      "date": "2023-05-16",
      "url": "https://www.zgjssw.gov.cn/shixianchuanzhen/nantong/202305/t20230516_7939585.shtml",
      "note": "推土机、运土机、挖渠机来回奔跑，装载混凝土的泵车、暗渠浇注机马达轰鸣……15日，在如东县新店镇全域土地综合整治项目施工现场，12支施工队伍正在忙碌。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
      "title": "江苏省南通市如东县新店镇全域土地综合整治典型案例——织密耕地保护网，绘就乡村振兴新图景",
      "date": "2026-04-16",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d57dqr/jsxcg/2026/04/16175955103873.html",
      "note": "摘要 江苏省南通市如东县新店镇全域土地综合整治立足生态本底丰厚、耕地后备资源丰富的天然禀赋，依托稻作文化孕育的产业发展沃土，深度挖掘特色农业发展潜力，构建了“国土空间系统治理－新质生产力加速发展－产业融合产业振兴”的可持续发展路径。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4491
     },
     {
      "no": "S02",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
      "title": "江苏省南通市如东县新店镇全域土地综合整治试点",
      "date": "2025-04-17",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d56gsjdqr/stzlxf/2025/04/17145328482266.html",
      "note": "江苏省南通市如东县新店镇全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1779
     },
     {
      "no": "S03",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅南通分局",
      "title": "如东新店镇全域土地综合整治国家级试点项目顺利通过省市联合验收",
      "date": "2025-10-20",
      "url": "https://zrzy.jiangsu.gov.cn/ntrd/gtzx/gzdt/202510/t20251020_1867010.htm",
      "note": "近日，如东县新店镇全域土地综合整治项目顺利通过省市联合验收，总规模达 6.75万亩，投入资金3.26亿元，在优化土地利用结构、激活乡村产业动能、提升群众生活品质上取得切实成效。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 515
     },
     {
      "no": "S05",
      "source": "nantong.gov.cn_南通市人民政府",
      "title": "“综治”到“增值”，绘就乡村振兴新“丰”景",
      "date": "2025-12-09",
      "url": "https://www.nantong.gov.cn/ntsrmzf/sxcz/content/96ed1b0a-4d97-45a0-a3c4-8f20b6e25015.html",
      "note": "市自然资源和规划局耕地保护监督处处长周航表示，与其他通过验收的全域土地综合整治试点项目不同，如东县新店镇试点项目重点聚焦农村综合环境提升，新建节水沟渠172.4公里、田间道路47.4公里、泵站5座、桥梁11座；整治修复河道18.5公里，新建生态护坡19.6公里；完成2145亩区域人居环境整治，以系统推进生态保护和修复，激活乡村振兴内生动力。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2217
     },
     {
      "no": "S13",
      "source": "nantong.gov.cn_南通市人民政府",
      "title": "治一方良田 拓一域新局——如东新店镇土地综合整治促乡村振兴调查",
      "date": "2026-04-14",
      "url": "https://www.nantong.gov.cn/ntsrmzf/ntxw/content/d8c70e05-d60f-4cc8-92e1-02720b2709cb.html",
      "note": "在如东县新店镇，这一“根基”正通过全域土地综合整治被重新夯实：零散耕地加快整合、基础设施同步完善，连片成方的高标准农田成为春耕主阵地，也为规模化、机械化种植打开空间。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "zrzy.jiangsu.gov.cnnt_南通市自",
      "title": "新店所全力推进2025年度耕地占补平衡项目工作",
      "date": "2026-07-15",
      "url": "https://zrzy.jiangsu.gov.cn/nt/gtzx/gzdt/202607/t20260715_2050837.htm",
      "note": "近日，新店镇2025年度耕地占补平衡整治项目顺利通过市级验收，涉及221个地块，复垦面积760亩，进一步夯实全镇耕地保护和储备指标基础。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "zrzy.jiangsu.gov.cnnt_南通市自",
      "title": "新店镇全域整治提质效专家复盘树样板",
      "date": "2026-07-07",
      "url": "https://zrzy.jiangsu.gov.cn/nt/gtzx/jcdt/202607/t20260707_2043955.htm",
      "note": "近日，南京农业大学专家团队赴新店镇实地调研国家级全域土地综合整治试点成效，全面梳理全链工作体系，开展专题复盘研讨，系统提炼整治亮点，为学术研究提供扎实基层实践样本。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "www.jiangsudonghe.com",
      "title": "新店镇国家级土地整治试点项目（一期）通过验收 “东和模式”助力乡村振兴开新局",
      "date": "2025-10-28",
      "url": "https://www.jiangsudonghe.com/development_and_construction_dynamics/contents/14846",
      "note": "近日，由东和集团所属东和康居建设公司承建的如东县新店镇全域土地综合整治国家试点项目一期工程顺利通过验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S09",
      "source": "zgjssw.gov.cn_中共江苏省委新闻网",
      "title": "如东全域土地综合整治“点土成金”",
      "date": "2024-09-19",
      "url": "https://www.zgjssw.gov.cn/shixianchuanzhen/nantong//202409/t20240919_8396169.shtml",
      "note": "将全域土地综合整治与民生实事有机结合，新店镇依托乡村生态修复，建设乡村公共绿地、小微湿地和微景观，加强水环境治理。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "sohu.com_南通市自然资源和规划局",
      "title": "耕生地固 ｜ 全市首个！南通市如东县新店镇全域土地综合整治国家试点项目顺利通过整体验收",
      "date": "2025-10-22",
      "url": "https://www.sohu.com/a/946496069_121106832",
      "note": "10月16日，如东县新店镇全域土地综合整治国家试点项目顺利通过整体验收，历经近三年集中攻坚，项目建设圆满收官，成为南通市首个通过验收的全域土地综合整治项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.sohu.com",
      "title": "改革自然行｜勇于探索 敢于创新 如东以“全域土地综合整治”助力乡村蝶变展新颜",
      "date": "2025-07-31",
      "url": "https://www.sohu.com/a/919539318_121106832",
      "note": "2021年以来，如东县抢抓机遇、主动作为，因地制宜、分类施策，先后申报实施新店镇全域土地综合整治国家试点和洋口镇国土空间全域综合整治省级示范项目，有力推动城乡融合发展和农村一二三产业融合发展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江苏自然资源」（江苏省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江苏省南通市如东县新店镇 全域土地综合整治"
  ],
  "counts": {
   "items": 13,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 2,
    "政府官方通报": 8,
    "其他媒体报道": 3
   }
  }
 },
 {
  "id": "32",
  "dir": "32_浙江省嘉兴市桐乡市濮院镇",
  "name": "浙江省嘉兴市桐乡市濮院镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S02",
      "source": "iziran.net_中国自然资源报",
      "title": "浙江省2024年度土地综合整治优秀案例（第一、二、三批）",
      "date": "2026-01-14",
      "url": "https://www.iziran.net/news.html?aid=5451491",
      "note": "从高效生态的农田，到产村融合的景观，再到宜居宜业的社区，濮院镇运河全域土地综合整治工程，通过空间的重塑，实现发展逻辑的升级——让农业成为有奔头的产业，让乡村成为宜居宜业的和美家园，让农民享有现代化的发展成果。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 999
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "zrzyt.zj.gov.cn_浙江省自然资源厅",
      "title": "央视财经频道《经济信息联播》关注浙江“土地综合整治+”",
      "date": "2026-07-27",
      "url": "https://zrzyt.zj.gov.cn/col/col1070722/art/2026/art_04ed699baa724aff9d192af0dbb720fe.html",
      "note": "在‘十五五’期间，要通过全域土地综合整治，能够真正打通城乡资源之间的流动。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 692
     },
     {
      "no": "S11",
      "source": "zrzyhghj.jiaxing.gov.cn_嘉兴市自然资源和规划局",
      "title": "数量最多，质量第一！我市4个全域土地综合整治与生态修复工程入选省级优秀案例",
      "date": "2021-11-15",
      "url": "https://zrzyhghj.jiaxing.gov.cn/art/2021/11/15/art_1229235671_58927180.html",
      "note": "项目运用“三治融合”模式，坚持“党建引领、支部带领”，广泛听取村民组长和群众意见，按照“田水路林村”系统治理开展全域全要素整治，依托濮院毛衫市场，通过盘活存量建设用地和低效利用再开发落实民生工程，壮大村级集体经济和促进农民增收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "jiaxing.gov.cn_嘉兴市人民政府",
      "title": "重塑“浙北粮仓”：一块田的几何变奏",
      "date": "2026-03-09",
      "url": "https://www.jiaxing.gov.cn/col/col1578777/art/2026/art_595846781c0844a48ffb398faed8c44d.html",
      "note": "桐乡市濮院镇红旗漾等4村的“万亩方”，通过新建高标准农田611亩、实施垦造和功能恢复耕地1656亩、建设用地复垦155亩，建成集中连片耕地7180亩，区域内“多田套合”率从76.6%提升至100%。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "jiaxing.gov.cn_嘉兴市人民政府",
      "title": "我市获1.5亿元省级造地改田资金",
      "date": "2025-12-10",
      "url": "https://www.jiaxing.gov.cn/col/col1578787/art/2025/art_9d05568842152bee2baad134c5797bac.html",
      "note": "濮院镇运河全域整治项目在今年入选自然资源部全域土地综合整治典型案例，并同时获评浙江省土地综合整治精品工程一等奖，获得资金1000万元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "zjic.zj.gov.cn",
      "title": "嘉兴桐乡濮院高标准绿色农田赋能乡村振兴",
      "date": "2026-05-27",
      "url": "https://zjic.zj.gov.cn/ywdh/qyfz/202605/t20260527_24094010.shtml",
      "note": "近年来，濮院镇以全域土地综合整治与生态修复为抓手，坚持“大农田”系统建设理念，统筹规划布局、数字赋能、生态治理、产业融合，全力打造高标准绿色农田，在土地综合整治中“整”出要素配置新空间、“融”出三产发展新动能，勾勒出一幅城乡融合共富的美丽画卷。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.sohu.com",
      "title": "【基层人大】桐乡濮院：人大监督赋能，从“巴掌田”到“万亩方”",
      "date": "2026-06-02",
      "url": "https://www.sohu.com/a/1031215298_121106994",
      "note": "近年来，濮院镇人大紧扣乡村振兴战略，将全域土地综合整治、粮食安全保障、农文旅融合等重点工作纳入监督靶心，以“问题清单+闭环督办”全链条监督模式，推动纸上规划精准落到田间地头，让这片土地在人大监督护航下完成了从发展洼地到共富高地的精彩蝶变。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S07",
      "source": "app.jiaxingren.com_嘉兴日报（读嘉）",
      "title": "喜讯！桐乡濮院全域土地整治入选省优秀案例",
      "date": "2026-01-05",
      "url": "https://app.jiaxingren.com/news?id=512501",
      "note": "近日，《浙江省2024年度土地综合整治优秀案例》（第一批）公布，桐乡市濮院镇运河全域土地综合整治与生态修复工程成功入选。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "sohu.com_嘉兴市自然资源和规划局",
      "title": "嘉兴土地综合整治省级优秀案例再斩4席！连续5年保持领先",
      "date": "2026-01-05",
      "url": "https://www.sohu.com/a/972748272_121106994",
      "note": "根据浙江省自然资源厅三批次《浙江省2024年度土地综合整治优秀案例》，嘉兴市入选4个优秀案例（桐乡市濮院镇运河乡村全域土地综合整治与生态修复工程；秀洲区油车港镇钱家桥村等9村乡村全域土地综合整治与生态修复工程；嘉善县西塘镇红菱村等6村全域土地综合整治与生态修复工程；海盐县通元镇丰义村等2村全域土地综合整治与生态修复工程），项目数和奖励资金均为全省最多。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "sohu.com_浙江自然资源",
      "title": "浙江省2024年度土地综合整治优秀案例",
      "date": "2026-01-04",
      "url": "https://www.sohu.com/a/972339321_121106994",
      "note": "共享餐厅等节点串联形成了18公里美丽乡村精品线，吸引了10余个新型农业经营主体，实现了农业增值与乡村活力双提升；濮院临空科技园参与村年均分红近100万元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.sohu.com",
      "title": "1.5亿元，嘉兴第一！",
      "date": "2025-12-10",
      "url": "https://www.sohu.com/a/963508479_121123868",
      "note": "就在今年，“濮院镇运河全域整治项目”入选自然资源部全域土地综合整治典型案例，同时，获评浙江省土地综合整治精品工程一等奖，获得资金1000万元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.sohu.com",
      "title": "共“富”自然资源之约丨桐乡市濮院镇以土地综合整治打造时尚新濮院",
      "date": "2024-09-26",
      "url": "https://www.sohu.com/a/811875530_121123751",
      "note": "近年来，桐乡市濮院镇基于区位优越、产业雄厚、文化丰富、时尚特色等本底优势，通过实施新河等村土地综合整治项目，进一步促进了时尚产业蓬勃发展、百姓生活安居乐业、生态环境稳中向优，为探索共同富裕现代化基本单元提供了新样板。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「浙江自然资源」（浙江省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：浙江省嘉兴市桐乡市濮院镇 全域土地综合整治"
  ],
  "counts": {
   "items": 12,
   "excerpts": 2,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 6,
    "其他媒体报道": 5
   }
  }
 },
 {
  "id": "33",
  "dir": "33_浙江省宁波市海曙区横街-古林片区",
  "name": "浙江省宁波市海曙区横街-古林片区",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "zgj.ningbo.gov.cn_宁波市自然资源和规划局",
      "title": "我市海曙区横街-古林片区入选自然资源部第三批全域土地综合整治典型案例",
      "date": "2025-06-26",
      "url": "https://zgj.ningbo.gov.cn/art/2025/6/26/art_1229036864_58998777.html",
      "note": "农田治理方面，推进连片整治与布局优化，统一流转标准，实践“全域整治+数字赋能”，推动零散耕地向数智良田转型。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S06",
      "source": "nbjb.gov.cn_宁波市江北区人民政府",
      "title": "我们这一年 宁波全域国土空间的“55”解法",
      "date": "2025-01-28",
      "url": "https://www.nbjb.gov.cn/art/2025/1/28/art_1229114281_58963168.html",
      "note": "回顾2024年，全域整治的步伐坚定有力，自2022年宁波成为全国唯一获批在全市域范围开展全域国土空间综合整治试点的城市以来，这片9000多平方公里的土地上，开启了一场为全国推进国土空间治理体系和治理能力现代化的探路之旅。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2866
     },
     {
      "no": "S07",
      "source": "zrzyt.zj.gov.cn_浙江省自然资源厅",
      "title": "浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展的实施意见",
      "date": "2025-11-14",
      "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229101716_2579171.html",
      "note": "为深入运用自然资源部《关于学习运用“千万工程”经验 深入推进全域土地综合整治工作的意见》（自然资办发〔2024〕149号），将土地综合整治作为落实城乡规划布局一体融合的有效载体，推动土地综合整治向国土空间治理转型，全面夯实共同富裕、城乡融合的空间基础，助推高质量发展。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1184
     },
     {
      "no": "S18",
      "source": "zgj.ningbo.gov.cn_宁波市自然资源和",
      "title": "海曙区古林镇蜃蛟村等7村全域土地综合整治与生态修复工程入选省级精品工程",
      "date": "2024-10-30",
      "url": "https://zgj.ningbo.gov.cn/art/2024/10/30/art_1229713376_58979012.html",
      "note": "坚持以全域土地综合整治为主线，统筹推进乡村风貌综合整治与高标准农田建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.haishu.gov.cn",
      "title": "海曙自然资源规划分局实践“全域土地综合整治+”助推区域治理提升和用地保障",
      "date": "2020-08-03",
      "url": "https://www.haishu.gov.cn/art/2020/8/3/art_1229101072_53891158.html",
      "note": "近日，我区古林镇蜃蛟村等7村全域土地综合整治与生态修复工程项目涉及永久基本农田布局调整方案获省自然资源厅批复通过，涉及项目区总面积1544.81公顷、调整永久基本农田面积37.03公顷。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "zgj.ningbo.gov.cn",
      "title": "我们这一年 宁波全域国土空间的“55”解法",
      "date": "2025-01-06",
      "url": "https://zgj.ningbo.gov.cn/art/2025/1/6/art_1229713376_58979944.html",
      "note": "回顾2024年，全域整治的步伐坚定有力，自2022年宁波成为全国唯一获批在全市域范围开展全域国土空间综合整治试点的城市以来，这片9000多平方公里的土地上，开启了一场为全国推进国土空间治理体系和治理能力现代化的探路之旅。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S08",
      "source": "cn.chinadaily.com.cn_中国日报",
      "title": "为山河“梳妆” 为发展“赋能” —— 横街-古林片区全域整治绘新景",
      "date": "2025-12-17",
      "url": "https://cn.chinadaily.com.cn/a/202512/17/WS69426144a310942cc4997242.html",
      "note": "在宁波海曙区横街这片39.73平方公里的先行片区内，16个行政村曾面临着生态受损、耕地碎片化、产业分散等发展困境，如今通过全域整治焕发出勃勃生机，一幅“山水林田焕新、农文产旅融合”的美丽画卷正在这里徐徐铺展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.sohu.com",
      "title": "总投资12.38亿元！1276套安置房全面结顶",
      "date": "2025-05-08",
      "url": "https://www.sohu.com/a/893334564_121106832",
      "note": "近日，由宁波城投集团下属宁波城投置业建设的海曙区横街镇全域国土综合整治集中居住区地块项目实现全面结顶，标志着这项总投资12.38亿元的重点民生工程取得阶段性成果。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「浙江自然资源」（浙江省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：浙江省宁波市海曙区横街-古林片区 全域土地综合整治"
  ],
  "counts": {
   "items": 8,
   "excerpts": 2,
   "byCategory": {
    "政府官方通报": 6,
    "其他媒体报道": 2
   }
  }
 },
 {
  "id": "34",
  "dir": "34_湖南省益阳市赫山区兰溪镇",
  "name": "湖南省益阳市赫山区兰溪镇",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S02",
      "source": "zrzyt.hunan.gov.cn_湖南省自然资源厅",
      "title": "人民日报：湖南益阳市赫山区兰溪镇开展全域土地综合整治 水乡小镇展新颜",
      "date": "2024-09-20",
      "url": "https://zrzyt.hunan.gov.cn/zrzyt/xxgk/gzdt/zhxw_1/202409/t20240920_33459133.html",
      "note": "通过全域土地综合整治，把零散地块重新规划，不仅实现数量上的‘扩容’，也迎来质量上的提升，为兰溪镇发展生态旅游奠定了基础。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1912
     },
     {
      "no": "S04",
      "source": "yiyang.gov.cn_益阳市人民政府",
      "title": "山水共治焕新颜",
      "date": "2025-08-03",
      "url": "https://www.yiyang.gov.cn/yiyang//2/3/74/content_2086729.html",
      "note": "盛夏7月，早稻已经颗粒归仓，俯瞰视角之下，横平竖直的田垄，修缮一新的机耕道、引水渠、生态渠清晰可见；兰溪河“十里画廊”风光旖旎，夜幕降临，灯光璀璨；古街老巷里烟火气升腾，处处焕发新颜……这幅美丽的乡村画卷，是赫山区兰溪镇推进全域土地综合整治的生动写照。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1356
     },
     {
      "no": "S05",
      "source": "yiyang.gov.cn_益阳市人民政府",
      "title": "兰溪镇 全域土地综合整治显成效",
      "date": "2022-09-01",
      "url": "https://www.yiyang.gov.cn/yiyang/2/3/74/content_1643511.html",
      "note": "今年4月，兰溪镇先期启动了沙岭村和北岸新村两个试点村的土地开发项目，该镇全力配合施工单位，积极协调解决项目建设过程中出现的问题，使全域土地综合整治项目建设顺利推进。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 499
     },
     {
      "no": "S14",
      "source": "yiyang.gov.cn_益阳市人民政府",
      "title": "筑牢“耕”基，绘就“丰”景！益阳市大力推动汛旱并防与耕地置换重大改革",
      "date": "2025-08-15",
      "url": "http://yiyang.gov.cn/yiyang/2/134/14114/43371/43386/content_2095058.html",
      "note": "赫山区兰溪镇全域土地综合整治试点项目，涉及兰溪镇1个乡镇，总建设规模894.78亩。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "yiyang.gov.cn_益阳市人民政府",
      "title": "守好耕地“责任田” 绘就沃野“振兴图”",
      "date": "2026-04-08",
      "url": "https://www.yiyang.gov.cn/yiyang/2/3/74/content_2164137.html",
      "note": "继兰溪镇之后，全市又有5个县市区的全域土地综合整治实施方案通过省级评审，总投资约32.46亿元，整治面积约115.8万亩，惠及群众约31.78万人。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.hunan.gov.cn",
      "title": "【益阳市】兰溪镇全域土地综合整治项目入选全国第三批典型案例",
      "date": "2025-07-01",
      "url": "https://www.hunan.gov.cn/topic/qdgj/gzkfzd/gzjxs/szx/202507/t20250701_33726969.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "yiyang.rednet.cn",
      "title": "赫山区兰溪镇：下沉一线监督 助推全域土地综合整治",
      "date": "2024-02-22",
      "url": "https://yiyang.rednet.cn/content/646846/66/13552591.html",
      "note": "为确保有序推进全域土地综合整治工作，兰溪镇纪委下沉一线对正在建设的8个村进行了实地督查，向项目负责人详细了解项目总体规划，对土地整治项目进行了跟进督促，同时深入各村户家中，就相关政策是否宣传到位、相关程序是否严格执行、资料审查是否严肃严谨、村干部工作责任是否落实到位等问题进行监督检查，确保全域土地综合整治高质量、高效率完成。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S06",
      "source": "yiyang.rednet.cn_红网益阳",
      "title": "赫山区兰溪镇全域土地综合整治试点项目实施方案通过省级评审",
      "date": "2023-12-07",
      "url": "https://yiyang.rednet.cn/content/646756/53/13368537.html",
      "note": "近日，省自然资源厅召开全域土地综合整治试点项目实施方案专家评审会，《湖南省益阳市赫山区兰溪镇全域土地综合整治试点项目实施方案》顺利通过省级评审。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "hunantoday.cn_湖南日报",
      "title": "水韵古镇绽新颜——赫山区兰溪镇全域土地综合整治工作纪实",
      "date": "2024-06-15",
      "url": "https://www.hunantoday.cn/news/xhn/202406/20112027.html",
      "note": "6月15日，益阳市自然资源和规划局相关人士透露，自2020年1月益阳市赫山区兰溪镇被自然资源部选为国家第一批全域土地综合整治项目试点地以来，益阳市坚持“生态优先、保护优先、集约优先”原则，对涉及北岸新村、沙岭村等14个行政村、3个渔场和1所中学的3765.67公顷土地，围绕“田水路林村居业”进行全要素、多手段、高效益的综合整治。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.sohu.com",
      "title": "经济微观察丨土地“破局” 书写兰溪“山乡新巨变”",
      "date": "2024-12-31",
      "url": "https://www.sohu.com/a/843956658_121620820",
      "note": "2022年1月，赫山区政府与湖南农业发展投资集团联合投资启动实施了兰溪镇全域土地综合整治项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「湖南自然资源」（湖南省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：湖南省益阳市赫山区兰溪镇 全域土地综合整治"
  ],
  "counts": {
   "items": 10,
   "excerpts": 3,
   "byCategory": {
    "政府官方通报": 7,
    "其他媒体报道": 3
   }
  }
 },
 {
  "id": "35",
  "dir": "35_江西省赣州市宁都县青塘镇",
  "name": "江西省赣州市宁都县青塘镇",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "dz.jiangxi.gov.cn_江西省地质局",
      "title": "我局助力宁都县全域土地综合整治项目入选自然资源部第三批典型案例",
      "date": "2025-07-07",
      "url": "https://dz.jiangxi.gov.cn/jxsdzj/ttxw904/content/content_1942116650596376576.html",
      "note": "近日，自然资源部发布第三批全域土地综合整治典型案例，我局有关单位参与项目实施方案编制并全力协助案例申报的《江西省赣州市宁都县青塘镇全域土地综合整治典型案例》榜上有名，这是 “十四五”期间继“寻乌模式”入选《中国生态修复典型案例集》以来，我局入选的又一国土空间生态修复典型案例。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 601
     },
     {
      "no": "S02",
      "source": "dz.jiangxi.gov.cn_江西省地质局",
      "title": "赣南日报：江西宁都：“地质+”模式助力乡村全面振兴",
      "date": "2025-07-23",
      "url": "https://dz.jiangxi.gov.cn/jxsdzj/mtgz/content/content_1948645004192595968.html",
      "note": "日前，自然资源部公布第三批全域土地综合整治典型案例，由江西省地质局有色地质大队实施的宁都县青塘镇全域土地综合整治项目成功入选。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1349
     },
     {
      "no": "S03",
      "source": "dz.jiangxi.gov.cn_江西省地质局",
      "title": "大江网：赣州工勘集团：“地质+”模式 打造乡村振兴新典范",
      "date": "2025-07-25",
      "url": "https://dz.jiangxi.gov.cn/jxsdzj/mtgz/content/content_1948653615010627584.html",
      "note": "大江网 /大江新闻客户端讯 陈柳、记者廖云萍报道：近期，自然资源部公布第三批全域土地综合整治典型案例，由核工业赣州工程勘察设计集团有限公司实施的宁都县青塘镇全域土地综合整治项目成功入选。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1364
     },
     {
      "no": "S04",
      "source": "ganzhou.gov.cn_赣州市人民政府",
      "title": "宁都：生态修复 变废为宝",
      "date": "2026-05-27",
      "url": "https://www.ganzhou.gov.cn/gzszf/c100022/202605/fba4310d68fb433ab0f2dce6d0d1f293.shtml",
      "note": "2025年，青塘镇将矿山修复与全域土地综合整治深度融合，探索“土地整治—生态修复—产业升级—文化振兴”路径，成功入选自然资源部典型案例。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 968
     },
     {
      "no": "S17",
      "source": "ganzhou.gov.cn_赣州市人民政府",
      "title": "赣州市加强耕地保护工作纪事",
      "date": "2025-06-25",
      "url": "https://www.ganzhou.gov.cn/gzszf/c100022/202506/437486f4034746649a860073d11eda87.shtml",
      "note": "借助国家全域土地综合整治试点东风，宁都县青塘镇深入开展农用地整理，将废弃坑塘、废弃设施农用地、生产力低下的内陆滩涂进行平整改造，新增净耕地1013.63亩，为全力打造赣东南蔬菜集散地和赣南蔬菜产业主产区提供优质耕地保障。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "ganzhou.gov.cn_赣州市人民政府",
      "title": "倾情帮扶三十载 苏区振兴展新颜——自然资源部定点帮扶宁都县纪实",
      "date": "2025-12-03",
      "url": "https://www.ganzhou.gov.cn/gzszf/c100022/202512/3980c337ad4040bc9575efbf13a60101.shtml",
      "note": "其中，青塘镇入选全域土地综合整治试点，探索出“矿山修复+土地整理+绿色发展”模式，修复废弃矿山1742.67亩，带动富硒产业发展与乡村旅游兴起，相关经验更入选自然资源部典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "ganzhou.gov.cn_赣州市人民政府",
      "title": "绿水青山织锦绣 宁都推动绿色生态美县建设",
      "date": "2024-09-27",
      "url": "https://www.ganzhou.gov.cn/gzszf/c100167/202409/e1d1ef26007b4efca632f985bf488c76.shtml",
      "note": "青塘镇社岗村一个曾经山石裸露的机砖厂，经生态修复后，建成现代农业园区，发展乡村旅游。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S25",
      "source": "ningdu.gov.cn_宁都县人民政府",
      "title": "2026年政府工作报告",
      "date": "2026-02-25",
      "url": "https://www.ningdu.gov.cn/ndxxxgk/zfgzbg/202602/51b3ee1d0e85460da3c30ba213f3bead.shtml",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S05",
      "source": "szb.newskj.com_赣南日报",
      "title": "赣南日报数字报：宁都青塘镇全域土地综合整治典型案例报道",
      "date": "2025-07-27",
      "url": "http://szb.newskj.com/resfile/2025-07-27/03/gnrb-20250727-003.pdf",
      "note": "标杆示范效应 ：绘就全域整治新图景青塘项目创造出“五个一 ”工程标准 ：一套全域整治技术规范 、一张土地利用现状图、一个智慧管理平台 、一组产业导入模板、一套文化保护方案 。",
      "kind": "attachment",
      "hasExcerpt": true,
      "excerptChars": 7247
     },
     {
      "no": "S09",
      "source": "peoplefin.cn_人民财经",
      "title": "农发行赣州市宁都县支行投放全省系统内首笔全域土地综合整治项目贷款",
      "date": "2025-06-26",
      "url": "https://www.peoplefin.cn/bankfm/zcxyh/2025-06-26/9031.html",
      "note": "近日，农发行江西省赣州市宁都县支行成功获批全省首笔全域土地综合整治项目贷款3.4亿元，并实现首笔4340.82万元信贷资金投放，用于统筹推进青塘镇废弃采矿用地治理利用，挖掘红色文旅资源，联动绿色富硒产业发展，守住耕地保护红线，以政策性金融推动城乡产业生态文明建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "zhgnj.com_中国农金网",
      "title": "农发行江西宁都县支行投放全省首笔全域土地综合整治项目贷款",
      "date": "2025-07-03",
      "url": "https://www.zhgnj.com/yh/2025-07-03/A1740044964875.html",
      "note": "近日，农发行江西宁都县支行成功获批全省首笔全域土地综合整治项目贷款3.4亿元，并实现首笔4340.82万元信贷资金投放，用于统筹推进青塘镇废弃采矿用地治理利用，挖掘红色文旅资源，联动绿色富硒产业发展，守住耕地保护红线，以政策性金融推动城乡产业生态文明建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "mtdzfh.com_煤炭地质分会",
      "title": "江西省地质局助力宁都县全域土地综合整治项目入选自然资源部第三批典型案例",
      "date": "2025-07-09",
      "url": "http://mtdzfh.com/Home/Index/show_news/nid/3141/cid/16.html",
      "note": "近日，自然资源部发布第三批全域土地综合整治典型案例，我局有关单位参与项目实施方案编制并全力协助案例申报的《江西省赣州市宁都县青塘镇全域土地综合整治典型案例》榜上有名，这是“十四五”期间继“寻乌模式”入选《中国生态修复典型案例集》以来，我局入选的又一国土空间生态修复典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "jxbwnews.com_江西商报网",
      "title": "农发行赣州市分行落地新产品体系后省内首笔全域土地综合整治贷款",
      "date": "2025-04-09",
      "url": "http://www.jxbwnews.com/system/2025/04/09/020836899.shtml",
      "note": "近日，辖内农发行宁都县支行成功获批新产品体系后省内首笔全域土地综合整治贷款3.4亿元，用于支持赣州市宁都县青塘镇全域土地综合整治项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "jxklw.cn_江西省矿业联合会",
      "title": "江西省地质局助力宁都县全域土地综合整治项目入选自然资源部第三批典型案例",
      "date": "2025-07-24",
      "url": "https://www.jxklw.cn/hangyeyaowen/733.html",
      "note": "近日，自然资源部公布第三批全域土地综合整治典型案例，由江西省地质局有色地质大队实施的宁都县青塘镇全域土地综合整治项目成功入选。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S26",
      "source": "peoplefin.cn_人民金融网",
      "title": "农发行赣州市分行落地新产品体系后省内首笔全域土地综合整治贷款",
      "date": "2025-04-10",
      "url": "https://www.peoplefin.cn/bankfm/zcxyh/2025-04-10/4332.html",
      "note": "近日，农发行江西省赣州市分行辖内宁都县支行成功获批新产品体系后省内首笔全域土地综合整治贷款3.4亿元，用于支持赣州市宁都县青塘镇全域土地综合整治项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S29",
      "source": "zhgnj.com_农村金融时报网",
      "title": "农发行江西赣州市分行落地新产品体系后首笔全域土地综合整治贷款",
      "date": "2025-04-15",
      "url": "https://www.zhgnj.com/yh/2025-04-15/A1740044962901.html",
      "note": "农村金融时报网-江西讯（记者 郑长灵 通讯员 郑炜藤）近日，农发行江西赣州市分行成功获批新产品体系后省内首笔全域土地综合整治贷款3.4亿元，用于支持赣州市宁都县青塘镇全域土地综合整治项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江西自然资源」（江西省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江西省赣州市宁都县青塘镇 全域土地综合整治"
  ],
  "counts": {
   "items": 16,
   "excerpts": 5,
   "byCategory": {
    "政府官方通报": 8,
    "其他媒体报道": 8
   }
  }
 },
 {
  "id": "36",
  "dir": "36_安徽省淮北市杜集区朔里镇",
  "name": "安徽省淮北市杜集区朔里镇",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "hbdj.gov.cn_杜集区人民政府",
      "title": "关于《安徽省淮北市杜集区朔里镇全域土地综合整治工程实施方案》的公示",
      "date": "2026-02-14",
      "url": "https://www.hbdj.gov.cn/zwgk/grassroots/188/64938024.html",
      "note": "为深入推进乡村振兴战略，优化我镇国土空间格局，提升土地资源利用效率，改善人居环境与产业发展条件，根据《自然资源部关于学习运用“千万工程”经验深入推进全域土地综合整治工作的意见》(自然资发〔2024〕149号)文件要求，我镇编制了《安徽省淮北市杜集区朔里镇全域土地综合整治工程实施方案》（以下简称《方案》）。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1625
     },
     {
      "no": "S03",
      "source": "sthjt.ah.gov.cn_安徽省生态环境厅",
      "title": "淮北市杜集区推进全域土地综合整治绘就和美乡村新画卷",
      "date": "2025-07-31",
      "url": "https://sthjt.ah.gov.cn/hbzx/gzdt/sxdt/122999711.html",
      "note": "以杜集区朔里镇葛塘村入选国家全域土地综合整治试点为契机，聚焦耕地碎片化、生态退化等历史顽疾，开启全域土地综合整治攻坚战，仅葛塘村就累计投入8774万元专项资金，实施土地整治、生态修复等四大类8个子项目。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 890
     },
     {
      "no": "S17",
      "source": "huaibei.gov.cn_淮北市人民政府",
      "title": "【执行情况】做活土地文章激活土地潜力——杜集区书写乡村振兴新篇章",
      "date": "2024-08-15",
      "url": "https://www.huaibei.gov.cn/zwgk/public/15/64529205.html",
      "note": "2023年，杜集区朔里镇全域土地综合整治试点项目获得自然资源部的批准同意，标志着杜集区在推动乡村振兴与可持续发展道路上迈出坚实的一步。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.huaibei.gov.cn",
      "title": "【执行情况】统筹融合生产、生活、生态\"三生空间\" 杜集区做活土地文章让\"寸土\"生\"寸金\"",
      "date": "2024-07-23",
      "url": "https://www.huaibei.gov.cn/zwgk/public/15/64515723.html",
      "note": "杜集区朔里镇全域土地综合整治试点2023年获自然资源部批准同意。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.hbdj.gov.cn",
      "title": "朔里镇2025年政府工作报告",
      "date": "2025-03-20",
      "url": "https://www.hbdj.gov.cn/zwgk/public/188/64690932.html",
      "note": "全域土地治理项目获批国家级试点，统筹融合生产、生活、生态“三生空间”，在耕地质量提升、生态环境修复、产业融合发展等方面取得阶段性成效，努力做活“土地文章”， 让“寸土”生“寸金”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S06",
      "source": "ah.people.com.cn_人民网安徽",
      "title": "淮北杜集区：一片采煤沉陷区的“逆袭”",
      "date": "2025-06-24",
      "url": "https://ah.people.com.cn/BIG5/n2/2025/0624/c227131-41269750.html",
      "note": "車輛緩緩駛入葛塘村，全域土地綜合整治試點項目現場映入眼帘。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "ah.xinhuanet.com_新华网安徽",
      "title": "淮北市杜集区：推进全域土地综合整治 绘就和美乡村新画卷",
      "date": "2025-06-26",
      "url": "http://www.ah.xinhuanet.com/20250626/e8ff860d913e4ade97faac85f8b2225d/c.html",
      "note": "2021年，杜集区朔里镇葛塘村入选国家全域土地综合整治试点，为破解发展难题带来重大机遇。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "ahhb.wenming.cn_淮北文明网",
      "title": "杜集区朔里镇全域土地综合整治试点工作卓有成效",
      "date": "2025-03-04",
      "url": "http://ahhb.wenming.cn/xqdt/202503/t20250304_8838262.html",
      "note": "目前，朔里镇试点片区实现新增耕地219.93亩，新增建设高标准农田1万亩，亩均粮食产量预计提升5%以上。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "ahhb.wenming.cn_淮北文明网",
      "title": "杜集区朔里镇全域推进和美乡村建设 跨村联建共绘“一幅画”",
      "date": "2026-08-25",
      "url": "http://ahhb.wenming.cn/wmcj/202608/t20260825_9337273.html",
      "note": "市农业农村局相关负责人表示，下一步将在全市总结推广朔里镇片区协同发展、群众主体参与的好经验好做法，以点带面推进2026年度和美乡村建设，让更多村庄在“抱团发展”中各美其美、美美与共，结出共同富裕的累累硕果。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "音视频资料",
    "desc": "电视台、广播与「视频号」等渠道的影像报道；部分条目挂在政府网站或门户网站的转载页上，URL 无视频扩展名，故按源清单的分类名归入本类。",
    "items": [
     {
      "no": "S04",
      "source": "zrzyt.ah.gov.cn_安徽省自然资源厅",
      "title": "安徽日报视频号丨土地“变形记”系列视频③丨淮北市杜集区朔里镇",
      "date": "2026-05-27",
      "url": "https://zrzyt.ah.gov.cn/xwdt/mtbd/150552691.html",
      "note": "为改变这种面貌，2021年，淮北市创新探索“以用定治”模式对朔里镇葛塘村开展全域土地治理：即不搞简单复垦，而是分区嵌入、精准供地。",
      "kind": "video",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「安徽自然资源」（安徽省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：安徽省淮北市杜集区朔里镇 全域土地综合整治"
  ],
  "counts": {
   "items": 10,
   "excerpts": 2,
   "byCategory": {
    "政府官方通报": 5,
    "其他媒体报道": 4,
    "音视频资料": 1
   }
  }
 },
 {
  "id": "37",
  "dir": "37_安徽省六安市霍山县但家庙镇",
  "name": "安徽省六安市霍山县但家庙镇",
  "sections": [
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "ahhuoshan.gov.cn_霍山县人民政府",
      "title": "推进土地综合整治 助力乡村全面振兴",
      "date": "2025-05-14",
      "url": "https://www.ahhuoshan.gov.cn/zwzx/jrhs/37889563.html",
      "note": "作为国家级全域土地综合整治试点项目之一，自2023年10月获省厅备案批复后，但家庙镇全域土地综合整治试点项目便稳步推进。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 799
     },
     {
      "no": "S02",
      "source": "ahhuoshan.gov.cn_霍山县人民政府",
      "title": "霍山县人民政府办公室关于印发但家庙镇全域土地综合整治试点项目工作方案的通知",
      "date": "2023-12-29",
      "url": "https://www.ahhuoshan.gov.cn/xxgk/zfgb/37214518.html",
      "note": "为 进一步细化但家庙镇全域土地综合整治试点项目工作任务，压紧压实 工作 责任， 坚持系统思维， 确保 实现布局优化、 宜居宜业 、绿色发展 整体目标，特制定项目协调联动机制。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1641
     },
     {
      "no": "S05",
      "source": "zrzy.luan.gov.cn_六安市自然资源和规划局",
      "title": "霍山县自然资源局：多点发力赋能乡村振兴 绘就和美乡村新画卷",
      "date": "2025-11-20",
      "url": "https://zrzy.luan.gov.cn/zwzx/gzdt/xqdt/5456580.html",
      "note": "统筹推进但家庙镇全域土地综合整治试点项目实施，35个子项目已全部完成建设，并完成县级初验，在全省试点项目中期评估中位列第2位，2025年6月成功入选自然资源部全域土地综合整治典型案例，塑造了霍山乡村振兴先行先试样板；制定《霍山县农村集体建设用地使用权入股（联营）实施办法》，有力破解乡村振兴、文旅融合等重点项目用地落地瓶颈。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 972
     },
     {
      "no": "S13",
      "source": "zrzy.luan.gov.cn_六安市自然资源和规",
      "title": "霍山：全域建设“加速跑” 奋力冲刺“收官战”",
      "date": "2025-04-21",
      "url": "https://zrzy.luan.gov.cn/zwzx/gzdt/xqdt/5420317.html",
      "note": "暮春时节，万物生机勃发，霍山县但家庙镇全域土地综合整治试点项目建设经过一年多的不懈努力，目前已进入冲刺收官阶段，其中位于但家庙人行桥子项目建设现场，已进入最后的桥面附属工程施工阶段。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "zrzyt.ah.gov.cn_安徽省自然资源厅",
      "title": "六安市2个全域土地综合整治试点项目获国家批准",
      "date": "2021-02-19",
      "url": "https://zrzyt.ah.gov.cn/ztlm/ahtdw/ywpd/tdzz/145637011.html",
      "note": "近日，自然资源部办公厅印发全域土地综合整治试点名单的通知，安徽省共有20个项目经批准同意实施，六安市申报的霍山县但家庙镇、霍邱县冯井镇全域土地综合整治试点2个项目位列其中。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "www.ahhuoshan.gov.cn",
      "title": "县自然资源局2025年度重点工作落实情况报告",
      "date": "2026-01-06",
      "url": "https://www.ahhuoshan.gov.cn/public/6597871/38831666.html",
      "note": "有序落实土地节约集约综合改革2.0版政策措施，20项试点任务全面完成，盘活利用“三线”企业遗留资产案例入选全国示范县创建成果，加大闲置低效土地处置力度，成功入选全国低效用地再开发试点城市；但家庙镇全域土地综合整治试点项目已完成县级初验，入选自然资源部全域土地综合整治典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "www.ahhuoshan.gov.cn",
      "title": "县自然资源局积极推进自然资源领域生态文明建设",
      "date": "2025-12-03",
      "url": "https://www.ahhuoshan.gov.cn/zwzx/jrhs/38134155.html",
      "note": "精心实施的但家庙镇全域土地综合整治试点项目，包含的35个子项目已全部完工；2025年6月，该试点成功入选自然资源部全域土地综合整治典型案例，为全域治理提供了可复制推广的“霍山经验”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.ahhuoshan.gov.cn",
      "title": "霍山县但家庙镇2025年政府工作报告",
      "date": "2025-01-06",
      "url": "https://www.ahhuoshan.gov.cn/public/6598271/38713678.html",
      "note": "全域土地综合整治试点项目已基本完成农用地整理项目11个，累计施工162个地块523.4亩，其他生态环境修复、人居环境整治等项目陆续开建。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.ahhuoshan.gov.cn",
      "title": "【落实情况】霍山县但家庙镇2025年度重点工作完成情况",
      "date": "2025-12-05",
      "url": "https://www.ahhuoshan.gov.cn/public/6598271/38715141.html",
      "note": "全域土地综合整治试点项目已基本完成农用地整理项目11个，完工471亩，完成建设用地整理75亩，合计546亩。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.ahhuoshan.gov.cn",
      "title": "霍山县但家庙镇2024年政府工作报告",
      "date": "2024-01-09",
      "url": "https://www.ahhuoshan.gov.cn/public/6598271/38713681.html",
      "note": "2024年，我们将持续学习贯彻落实习近平新时代中国特色社会主义思想和党的二十大精神，切实将学习成果转化成推动但家庙镇高质量发展的实际成效，坚持在全县工作大局中找准位置、谋划思路，在服务重点项目工作中主动担当，立足镇情实际，认真分析优势和短板，以乡村振兴战略为总牵引，统筹人才发展、党建支撑、生态宜居等重点，针对制约乡村产业振兴的不利因素，靶向施策，寻求突破。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S09",
      "source": "ah.anhuinews.com_中安在线",
      "title": "但家庙镇综合整治“唤醒”土地新活力",
      "date": "2025-05-12",
      "url": "http://ah.anhuinews.com/la/fp/fpyw/202505/t20250512_8463572.html",
      "note": "据了解，作为国家级全域土地综合整治试点项目之一，自2023年10月获省自然资源厅备案批复后，但家庙镇全域土地综合整治试点项目稳步推进。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「安徽自然资源」（安徽省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：安徽省六安市霍山县但家庙镇 全域土地综合整治"
  ],
  "counts": {
   "items": 11,
   "excerpts": 3,
   "byCategory": {
    "政府官方通报": 10,
    "其他媒体报道": 1
   }
  }
 },
 {
  "id": "38",
  "dir": "38_重庆市大足区拾万镇",
  "name": "重庆市大足区拾万镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S13",
      "source": "xinhuanet.com_新华网",
      "title": "“整”好一块田、“理”清一方土：重庆推进全域土地综合整治赋能城乡融合发展",
      "date": "2026-05-01",
      "url": "http://www.cq.xinhuanet.com/20260501/26e59486fe774262845ca641ea94e152/c.html",
      "note": "数十公里外的棠香街道惜字阁村，稻虾田里睡莲簇簇盛放，一栋栋融合传统韵味与当代设计的乡野民宿悄然隐于林木葱茏中……这样一片焕发活力的乡村面貌，正是当地规划与自然资源部门持续多年、系统推进全域土地综合整治的生动成果。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "大足“五合一”改革让试点村消灭了撂荒地",
      "date": "2023-07-24",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202307/t20230724_12175934.html",
      "note": "大足区规划和自然资源局副局长罗晓宏告诉记者，“五合一”改革，就是在大足区原有农村集体经营性建设用地入市试点基础上，叠加了全域土地综合整治、高标准农田改造提升、农村宅基地腾退、农村土地承包精准确权等4项改革，这也是大足区改革工作的“一号工程”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "zfcxjw.cq.gov.cn_重庆市住房和城乡建",
      "title": "大足区：拾万镇 稻香深处有人家 五彩田园好“丰”景",
      "date": "2024-03-06",
      "url": "https://zfcxjw.cq.gov.cn/zwxx_166/bmdt/qxdt/202403/t20240306_13009263.html",
      "note": "在人居环境提升的同时，拾万镇长虹村以此为契机，深入实施“产业富村、人才兴村、文化润村、生态靓村、组织强村”五大行动，以发展稻渔产业、乡村旅游、研学产业为抓手，创新乡村治理，统筹推进乡村全面振兴。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "5个项目入选全国典型案例 重庆全域土地综合整治激活乡村发展动能",
      "date": "2026-05-13",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202605/t20260513_15674921.html",
      "note": "为改变这一现状，2022年，当地启动实施全域土地综合整治。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1107
     },
     {
      "no": "S02",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "碎地并大田 闲房变民宿 重庆全域土地整治激活乡村发展动能",
      "date": "2026-05-11",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202605/t20260511_15664767.html",
      "note": "随着全域土地综合整治项目落地，这里彻底变了样：碎地拼成连片大田，产业引进村，村民在家门口就能实现致富增收。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1278
     },
     {
      "no": "S15",
      "source": "cq.gov.cn_重庆市人民政府",
      "title": "重庆：全域土地综合整治典型经验在全国交流",
      "date": "2024-12-27",
      "url": "https://www.cq.gov.cn/zjcq/lszq/ltbsjtbwz/202412/t20241227_14028521.html",
      "note": "近年来，重庆市坚持党建统领、规划引领，以国土整治为抓手，按照全域规划、全域设计、全域整治的理念，组织实施全域土地综合整治部级试点12个、市级项目24个，策划实施土地整治市级项目30个、区县级项目120个，有效促进了空间布局优化、乡村环境美化和产业发展，打造了适合中西部丘陵山区全域土地综合整治的特色样本。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "dazu.gov.cn_重庆市大足区人民政府",
      "title": "工作动态：开展农村集体“三资”专项整治助推集体经济焕发“新活力”",
      "date": "2025-02-20",
      "url": "https://www.dazu.gov.cn/qzfbm/qjw/zwxx_53317/gzdt_53319/202502/t20250220_14323818.html",
      "note": "2024年以来，大足区纪委监委结合群众身边不正之风和腐败问题集中整治，督促区农业农村委开展农村集体“三资”监管突出问题集中专项整治。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "dazu.gov.cn_重庆市大足区人民政府",
      "title": "重庆市大足区发展和改革委员会关于大足区棠香街道、宝顶镇、拾万镇等（6）个农村建设用地复垦项目（全域土地综合整治区域）可行性研究报告的批复",
      "date": "2024-12-11",
      "url": "https://www.dazu.gov.cn/zwgk_175/fdzdgknr/xzxk/xzxkbljg/fzggw_68866/202412/t20241211_13880598.html",
      "note": "所报《关于申请大足区棠香街道、宝顶镇、拾万镇等（6）个农村建设用地复垦项目（全域土地综合整治区域）可行性研究报告审批的请示》（大足鑫发集团文〔2024〕142号）及重庆市国土整治中心、重庆市地矿测绘院有限公司、重庆佳坤土地规划有限公司编制的《可行性研究报告》等相关附件收悉。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.dazu.gov.cn",
      "title": "重庆市大足区人民政府2025年政府工作报告",
      "date": "2025-01-17",
      "url": "https://www.dazu.gov.cn/zwgk_175/zfxxgkml01/zfgzbg/gzbg/202501/t20250117_14177163.html",
      "note": "大力推动“三攻坚一盘活”改革突破，园区开发区由8个压减至2个，国企压减法人19户、减亏16户、扭亏14户、实质性退出融资平台11户，开创集团、卓捷公司获评AA+信用评级，提前三个季度完成政企分离任务，处置闲置土地1606.2亩，盘活国有资产61亿元、回收资金41.8亿元，规上制造业亩均税收、亩均产值分别增长4.1%、4.2%。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S05",
      "source": "cqrb.cn_重庆日报",
      "title": "全域土地综合整治 让耕地更沃乡村更美",
      "date": "2026-04-29",
      "url": "https://cqrb.cn/jingji/zixun/2026-04-29/2652981_pc.html",
      "note": "大足区规划自然资源局局长张燕岭介绍，大足区以拾万镇长虹村、协丰社区为示范，以全域土地综合整治为平台，统筹高标准农田改造提升、农村宅基地腾退、农村土地承包经营权确权确股、农村集体经营性建设用地入市等，开展“五合一”综合改革。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2265
     },
     {
      "no": "S06",
      "source": "cqrb.cn_重庆日报",
      "title": "图片新闻｜全域土地综合整治 绘就巴渝乡村新画卷",
      "date": "2026-04-30",
      "url": "https://cqrb.cn/yingxiang/tuji/2026-04-30/2654524_pc.html",
      "note": "2024年，大足区拾万镇启动全域土地综合整治项目，以长虹村、协丰社区为示范，统筹高标准农田改造、宅基地腾退、土地确权确股、集体经营性建设用地入市等，开展“五合一”综合改革，于2025年获得全国第三批全域土地综合整治典型案例。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1240
     },
     {
      "no": "S07",
      "source": "difang.gmw.cn_光明网地方频道",
      "title": "重庆全域土地综合整治 “小田并大田”走出乡村振兴新路径",
      "date": "2026-05-06",
      "url": "https://difang.gmw.cn/cq/2026-05/06/content_38749210.htm",
      "note": "大足区拾万镇等5个项目入选自然资源部全域土地综合整治典型案例，数量位居全国第三。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "sohu.com_搜狐",
      "title": "重庆全域土地综合整治从“试点探索”走向“扩面提质”",
      "date": "2026-04-30",
      "url": "https://www.sohu.com/a/1016509040_120388781",
      "note": "大足区拾万镇以全域土地综合整治为平台，统筹高标准农田改造提升、农村宅基地腾退、土地承包经营权确权确股、集体经营性建设用地入市等“五合一”改革。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "sohu.com_搜狐",
      "title": "全域土地综合整治 让丘陵坡地“变身”宜居宜业和美乡村",
      "date": "2026-04-30",
      "url": "https://www.sohu.com/a/1016763947_120578424",
      "note": "在大足区拾万镇，重庆市规划和自然资源局指导、大足区规划和自然资源局牵头、各部门通力配合、镇村具体落实，全程对接方案审查、审批、调整各环节，严格落实方案刚性约束、负面清单管控，以全域土地综合整治为总平台，一体推进“五合一”改革，12个子项目有序实施。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.txdzw.com",
      "title": "农村\"五合一\"综合改革创造大足经验",
      "date": "2024-02-05",
      "url": "https://www.txdzw.com/xw/dzxw/content_67808",
      "note": "”周建森表示，“2024年，拾万镇将落实市规划和自然资源局‘打造大足区拾万镇长虹村全域土地综合整治渝西样板间’的部署，强化数字赋能，打造首批‘五合一’改革生态农旅数智化平台，建成地块级耕地底图、农旅产业数据库，打通人—地—物数据链，实现农旅产业数据交互、农地资源进链交易，全力打造乡村振兴的‘样板间’、科技兴农的示范区、国家级研学基地、国家5A级景区。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.txdzw.com",
      "title": "\"五合一\"改革推动乡村高质量发展",
      "date": "2023-08-02",
      "url": "https://www.txdzw.com/ny/xwsd/content_58838",
      "note": "“五合一”改革是2023年大足区改革工作“一号工程”，将全域土地综合整治、农村集体经营性建设用地入市、高标准农田改造提升、农村宅基地腾退、农村土地承包精准确权5项改革措施叠加，推动乡村高质量发展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「重庆自然资源」（重庆省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：重庆市大足区拾万镇 全域土地综合整治"
  ],
  "counts": {
   "items": 16,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 3,
    "政府官方通报": 6,
    "其他媒体报道": 7
   }
  }
 },
 {
  "id": "39",
  "dir": "39_湖北省荆州市公安县麻豪口镇",
  "name": "湖北省荆州市公安县麻豪口镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S13",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "公安县自然资源和规划局：实施全域整治 践行千万工程",
      "date": "2024-04-11",
      "url": "https://news.hubeidaily.net/mobile/c_2482924.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "增耕地 优生态 强活力——公安县麻豪口镇全域国土综合整治踏访",
      "date": "2023-07-16",
      "url": "https://news.hubeidaily.net/pc/c_1633566.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "“流域+全域”整治让麻豪口镇容光焕发",
      "date": "2025-07-15",
      "url": "https://news.hubeidaily.net/pc/c_4278447.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "公安县麻豪口镇：锚定高质量发展新坐标 打造绿色农业发展区",
      "date": "2026-03-23",
      "url": "https://news.hubeidaily.net/pc/c_5263003.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "agri.cn_中国农业农村信息网（农业农村部）",
      "title": "全域土地综合整治进入全面深入推进阶段",
      "date": "2025-07-03",
      "url": "https://www.agri.cn/zx/nyyw/202507/t20250703_8746036.htm",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "iziran.net_中国自然资源报",
      "title": "湖北探索“全域+流域”的国土综合整治新模式——水清岸绿产业优",
      "date": "2024-10-16",
      "url": "https://www.iziran.net/news.html?aid=5348830",
      "note": "宜昌市玛瑙河流域型全域国土综合整治项目建设规模9.94万亩，预算投资6.0亿元，成立了市级指挥部和办公室，市领导多次组织专题会、调度会、座谈会督导项目建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "zrzyj.jingzhou.gov.cn_荆州市自然资源和规划局",
      "title": "县市动态：公安县麻豪口镇全域国土综合整治项目",
      "date": "2023-07-18",
      "url": "http://zrzyj.jingzhou.gov.cn/xwdt/xqdt/202307/t20230718_848565.shtml",
      "note": "麻豪口镇党委书记胡学超称，以全域国土综合整治为抓手，通过产业导入、新增耕地租赁流转等举措，推动农村资源变资产、资产变资金，而村集体增收的 60% 用于统筹全村发展，所得收益进行第二次分红，为村民集体共享。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2262
     },
     {
      "no": "S04",
      "source": "gongan.gov.cn_公安县人民政府",
      "title": "全域土地综合整治激发乡村活力",
      "date": "2022-12-19",
      "url": "http://www.gongan.gov.cn/xwzx/xzdt/202212/t20221219_803182.shtml",
      "note": "麻豪口镇通过土地平整、灌溉与排水工程等全域国土综合整治，使碎片化土地变成集中连片的良田，有效盘活土地资源，激发乡村发展新活力。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 953
     },
     {
      "no": "S12",
      "source": "zrzyj.jingzhou.gov.cn_荆州市自",
      "title": "荆州市公安县麻豪口镇全域国土综合整治项目入选自然资源部第三批全域土地综合整治典型案例",
      "date": "2025-06-27",
      "url": "http://zrzyj.jingzhou.gov.cn/xwdt/gzdt/202506/t20250627_1019994.shtml",
      "note": "据悉，为贯彻落实习近平总书记关于“千万工程”重要指示批示精神，2019年自然资源部正式启动全域土地综合整治试点工作，并于2024年将此项工作从试点转为全面铺开。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "www.sohu.com",
      "title": "800 万元！公安获省级奖励！",
      "date": "2024-07-03",
      "url": "https://www.sohu.com/a/790476191_121123750",
      "note": "经湖北省全域国土综合整治领导小组办公室组织专家实地考察和综合考评，评选出湖北省全域国土综合整治十大优秀范例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S01",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "公安县麻豪口镇入选自然资源部全域土地综合整治典型案例",
      "date": "2025-06-26",
      "url": "https://news.hubeidaily.net/pc/c_4192534.html",
      "note": "该项目以治水为抓手、治田为支撑，统筹“三生”空间治理，通过实施生态修复、农用地整治、人居环境提升及产业融合等举措，探索出一条“小田并大田、湿地焕新颜、农文旅促增收”的可持续发展路径。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 710
     },
     {
      "no": "S02",
      "source": "news.hubeidaily.net_湖北日报",
      "title": "“五治”妙笔绘新景 公安县麻豪口镇全域国土综合整治入选全国典型案例",
      "date": "2025-06-26",
      "url": "https://news.hubeidaily.net/pc/c_4201948.html",
      "note": "通过“五治”并举，这里初步实现了污水变清流、小田变大田、湖区变景区、资源变资产、农民变股民、传统农业变高效农业的转变，为区域发展提供了可借鉴的示范样本。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 713
     },
     {
      "no": "S05",
      "source": "m.cnhubei.com_荆楚网",
      "title": "全域国土综合整治助力湖北乡村美丽蝶变",
      "date": "2023-08-14",
      "url": "http://m.cnhubei.com/content/2023-08/14/content_16412342.html",
      "note": "麻豪口镇党委书记胡学超介绍，此次全域国土综合整治，通过调整田块空间关系、经营权属关系和集体收益使用关系，实现了集体增收、农民增幅、农业增效的良好局面。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2307
     },
     {
      "no": "S09",
      "source": "sohu.com_搜狐",
      "title": "全国典型案例！公安入选",
      "date": "2025-06-29",
      "url": "https://www.sohu.com/a/908948064_121123785",
      "note": "麻豪口镇全域国土综合整治项目区包含黄岭村、鹅港村、麻口村3个行政村及崇湖国家湿地公园，总面积6.2万亩，整治规模2.28万亩，总投资1.95亿元。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "news.jznews.com.cn_荆州新闻网（荆",
      "title": "公安县麻豪口镇：“四手联弹”奏响水乡共富新乐曲",
      "date": "2026-04-21",
      "url": "http://news.jznews.com.cn/system/2026/04/21/030129634.shtml",
      "note": "全域国土综合整治中，该镇将2103块零散小田整合为562块连片大田。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "news.hubeidaily.net",
      "title": "公安县麻豪口镇全域国土整治项目火力全开",
      "date": "2023-07-07",
      "url": "https://news.hubeidaily.net/mobile/c_1610281.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「湖北自然资源」（湖北省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：湖北省荆州市公安县麻豪口镇 全域土地综合整治"
  ],
  "counts": {
   "items": 16,
   "excerpts": 5,
   "byCategory": {
    "核心权威报道": 6,
    "政府官方通报": 4,
    "其他媒体报道": 6
   }
  }
 },
 {
  "id": "40",
  "dir": "40_江苏省盐城市盐都区秦南镇",
  "name": "江苏省盐城市盐都区秦南镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
      "title": "江苏省盐城市盐都区秦南镇全域土地综合整治典型案例——以“三产融合”打造生态农旅宜居示范区",
      "date": "2026-04-17",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d57dqr/jsxcg/2026/04/17110336697718.html",
      "note": "（三）目标任务 项目选取秦南镇域北部，蟒蛇河风光带南岸的区域开展全域整治，整治区覆盖东方红村、灯塔村、秦兴村3个行政村，总面积1807.93公顷，实施周期3年，总投资8.7亿元，包含57个子项目，建设高标准农田1052.64公顷，实施生态河道整治24.6公里，完成老村庄提升改造项目6个，道路改造提升项目1个，文旅特色项目3个。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4416
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S06",
      "source": "yandu.gov.cn_盐城市盐都区人民政府",
      "title": "秦南全域土地综合整治项目初步验收",
      "date": "2025-12-11",
      "url": "https://www.yandu.gov.cn/art/2025/12/11/art_3553_4387440.html",
      "note": "秦南镇国土空间全域综合整治项目，是我区学习运用“千万工程”经验，深入推进全域土地综合整治的重要实践。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "yancheng.gov.cn_盐城市人民政府",
      "title": "盐都一项目成功入选国家级典型案例",
      "date": "2025-06-30",
      "url": "https://www.yancheng.gov.cn/art/2025/6/30/art_45136_4334832.html",
      "note": "该项目是江苏省自然资源厅2023年批准实施的全域土地综合整治省级示范项目，项目区位于秦南镇域北部、蟒蛇河风光带南岸，覆盖东方红村、灯塔村、秦兴村3个行政村。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "yancheng.gov.cn_盐城市人民政府",
      "title": "我市高质量推进国土空间全域综合整治",
      "date": "2024-06-23",
      "url": "https://www.yancheng.gov.cn/art/2024/6/23/art_33925_4203556.html",
      "note": "一台台挖掘机挥舞钢臂，一辆辆运土车来回穿梭……“三夏”时节，走进盐都区秦南镇国土空间全域综合整治项目现场，田间地头机声隆隆，一派热火朝天的繁忙景象。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "jsggzy.jszwfw.gov.cn_江苏省公共资源交易网",
      "title": "盐都区秦南镇国土空间全域综合整治项目生态修复工程招标公告",
      "date": "2024-05-22",
      "url": "http://jsggzy.jszwfw.gov.cn/jyxx/003003/003003001/20240522/GG_ea089347-00e2-4012-ab8a-c0fe90b8263a.html",
      "note": "项目已具备招标条件，现对盐都区秦南镇国土空间全域综合整治项目生态修复工程施工进行国内公开招标。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "yancheng.gov.cn_盐城市人民政府",
      "title": "盐都区全域整治赋能美丽乡村建设",
      "date": "2025-11-07",
      "url": "https://wap.yancheng.gov.cn/art/2025/11/7/art_45136_4378812.html",
      "note": "近年来，盐都区坚持以生态文明理念引领乡村振兴，在成功创成国家生态文明建设示范区和“两山”实践创新基地基础上，主动扛起“走在前、做示范”的使命担当，以秦南镇为试点，创新开展全域土地综合整治，探索出一条平原水网地区空间治理新路径，为美丽中国先行示范区建设提供区域实践。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "zrzy.jiangsu.gov.cn_盐城市自然资",
      "title": "秦南全域土地综合整治项目通过区级初验",
      "date": "2025-12-08",
      "url": "https://zrzy.jiangsu.gov.cn/ycyd/gtzx/gzdt/202512/t20251208_1899185.htm",
      "note": "秦南镇国土空间全域综合整治项目，是我区学习运用“千万工程”经验深入推进全域土地综合整治的重要实践。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "zrzy.jiangsu.gov.cn_盐城市自然资",
      "title": "盐城市盐都区2024年度秦南镇全域综合整治统筹规划高标准农田示范区项目涉及永久基本农田调整方案公示",
      "date": "2024-09-16",
      "url": "https://zrzy.jiangsu.gov.cn/ycyd/gtzx/tzgg/202503/t20250324_1744520.htm",
      "note": "为切实做好《盐城市盐都区2024年度秦南镇全域综合整治统筹规划高标准农田示范区项目涉及永久基本农田调整方案》成果编制工作，诚邀项目区内土地相关权利人参与其方案可行性的讨论，并对方案提出建设性的意见。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "www.yandu.gov.cn",
      "title": "区资规局一典型案例获评全省系统创新创优成果",
      "date": "2026-01-21",
      "url": "https://www.yandu.gov.cn/art/2026/1/21/art_33418_4397442.html",
      "note": "盐城市盐都区秦南镇国土空间全域综合整治项目项目区总面积1807公顷，总投入5.48亿元，2023年12月获省厅批复，2025年12月通过区级验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S09",
      "source": "ycnews.cn_盐阜大众报",
      "title": "土地整治助力乡村振兴！盐都秦南镇入选全国典型案例",
      "date": "2025-06-27",
      "url": "https://www.ycnews.cn/ycyw/2025/06-27/jk3Oxl6k.html",
      "note": "6月25日，自然资源部发布第三批17个全域土地综合整治典型案例，盐都区秦南镇全域土地综合整治项目名列其中，且是全市唯一入选的案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "ycnews.cn_盐阜大众报",
      "title": "土地整治+文旅+农业，盐都秦南这个项目被国家“点名”",
      "date": "2025-07-15",
      "url": "https://www.ycnews.cn/ycyw/2025/07-15/GDBl8R51.html",
      "note": "我市盐都区秦南镇全域土地综合整治典型案例成功入选。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江苏自然资源」（江苏省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江苏省盐城市盐都区秦南镇 全域土地综合整治"
  ],
  "counts": {
   "items": 11,
   "excerpts": 1,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 8,
    "其他媒体报道": 2
   }
  }
 },
 {
  "id": "41",
  "dir": "41_湖南省怀化市沅陵县官庄镇",
  "name": "湖南省怀化市沅陵县官庄镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S02",
      "source": "zrzyt.hunan.gov.cn_湖南自然资源厅",
      "title": "点赞！湖南2个案例入选全国第三批全域土地综合整治典型案例",
      "date": "2025-06-27",
      "url": "https://zrzyt.hunan.gov.cn/zrzyt/xxgk/gzdt/zhxw_1/202506/t20250627_33723653.html",
      "note": "6月25日，自然资源部发布第三批17个全域土地综合整治典型案例，益阳市赫山区兰溪镇全域土地综合整治项目、怀化市沅陵县官庄镇全域土地综合整治典型案例成功入选。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 243
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "huaihua.gov.cn_怀化市人民政府",
      "title": "辰龙关下听潮声 ——沅陵县官庄镇全域土地综合整治纪实",
      "date": "2025-10-01",
      "url": "https://www.huaihua.gov.cn/huaihua/c101116/202510/b3ee7c20c46746889dcd8fa27239087b.shtml",
      "note": "县委、县政府迅速将申报、实施官庄镇全域土地综合整治国家级试点工作列为“头号工程”，成立由县长挂帅的领导小组，从自然资源、农业农村等12个部门抽调32名骨干组建工作专班，在官庄镇设立项目工程实施办公室，构建起“县里统筹、部门协同、镇村落实”的三级作战体系。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4311
     },
     {
      "no": "S04",
      "source": "yuanling.gov.cn_沅陵县人民政府",
      "title": "易中华到官庄镇调度全域土地综合整治工作",
      "date": "2024-12-03",
      "url": "https://www.yuanling.gov.cn/yuanling/c108845/202412/73754be41a394146a1616c70dd71eb5a.shtml",
      "note": "12月2日，县委副书记、县长易中华到官庄镇调度全域土地综合整治工作，对全域土地综合整治工作相关项目进行再调度、再梳理、再推进。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1077
     },
     {
      "no": "S05",
      "source": "yuanling.gov.cn_沅陵县人民政府",
      "title": "沅陵：久久为功 一以贯之 打好全域土地综合整治“收官战”",
      "date": "2025-05-26",
      "url": "https://www.yuanling.gov.cn/yuanling/c108845/202505/11a024a6623f4276a1abbc4472c7f6fa.shtml",
      "note": "易中华在听取全域土地综合整治项目工作专班、官庄镇全域土地综合整治项目实施及二酉太常片区全域土地综合整治项目融资、试点项目申报等情况汇报后强调，要强化党建引领，充分发挥镇村两级党组织作用，将党建贯穿工作全程；坚持问题与结果导向，靶向攻坚、专人专责，让群众切实感受整治成效。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1100
     },
     {
      "no": "S06",
      "source": "yuanling.gov.cn_沅陵县人民政府",
      "title": "易中华：全力以赴将官庄镇全域土地综合整治试点项目建设成精品工程",
      "date": "2023-10-12",
      "url": "https://www.yuanling.gov.cn/yuanling/c108845/202310/509509480ce84a5f9f6d1d80ab75ea87.shtml",
      "note": "10月11日，县委副书记、县长易中华主持召开官庄镇全域土地综合整治项目建设工作调度会，他强调，要深刻认识土地综合整治的重要意义，要以实干担当的精神和攻坚克难的勇气，高效率、高质量、高标准地推进官庄镇全域土地综合整治试点项目建设，确保尽快完成目标任务。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S07",
      "source": "hunan.gov.cn_湖南省人民政府",
      "title": "投入1200亿元！湖南全域土地综合整治进入发展新阶段",
      "date": "2025-09-30",
      "url": "https://www.hunan.gov.cn/hnszf/hnyw/zwdt/202509/t20250930_33819336.html",
      "note": "9月29日，省自然资源厅与农行湖南省分行联合通报全省深入推进全域土地综合整治成效。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "huaihua.gov.cn_怀化市人民政府",
      "title": "沅陵:官庄镇夯实治理实效 绘和美乡村新卷",
      "date": "2024-12-18",
      "url": "https://www.huaihua.gov.cn/huaihua/c101116/202412/9033f5c664d340e2aab5747b06502021.shtml",
      "note": "近年来，为切实提升全镇人居环境整治成效，开展乡村治理试点探索，沅陵官庄镇坚持以科学规划为引领，以产业发展为支撑，以机制创新为动力，围绕“试点变示范”的总目标，将镇内各村按照界亭驿乡村振兴产业融合发展示范片、镇海沙坪村至太平铺村全域土地综合整治示范片、沃溪生态修复治理配套完善示范片、舒家溪美丽乡村人居环境治理示范区等“四个重点示范片”进行分类分片打造。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S10",
      "source": "hunantoday.cn_湖南日报",
      "title": "沅陵官庄镇推动“全域+”，实现“土变金”",
      "date": "2024-03-06",
      "url": "https://www.hunantoday.cn/news/xhn/202403/19546502.html",
      "note": "目前，官庄镇全域土地试点项目完成各类项目投资8000多万元，在双泉、鱼儿山、太平铺等村开发了200多公顷黄柏，实施生态修复生态13处，带动新发展茶叶、大棚蔬菜、棚中药材种植大户130多户，实现高质量新增耕地50.26公顷，增加粮食产能25.5万公斤，建设乡村道路提质改造40余公里。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "xiangbo.voc.com.cn_华声在线",
      "title": "沅陵官庄镇：荒地变良田，试点变示范",
      "date": "2023-04-20",
      "url": "https://xiangbo.voc.com.cn/article/17/9482.html",
      "note": "据了解，这些村实施的是官庄镇全域土地整治项目试点项目，是沅陵县委县政府荣获的2021年湖南省20个全国全域土地综合整治试点项目，是怀化市唯一一个试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "sohu.com_搜狐网",
      "title": "洞庭波涌 山水“塑”颜（7）｜ 全域统筹 “整”出乡村振兴新画卷",
      "date": "2025-04-30",
      "url": "https://www.sohu.com/a/890941909_121106908",
      "note": "成立沅陵县官庄镇全域土地综合整治领导小组和试点工作指挥部，下设办公室及项目实施工作专班，全力保障项目的组织协调和统筹推进。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「湖南自然资源」（湖南省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：湖南省怀化市沅陵县官庄镇 全域土地综合整治"
  ],
  "counts": {
   "items": 10,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 6,
    "其他媒体报道": 3
   }
  }
 },
 {
  "id": "42",
  "dir": "42_重庆铁门乡",
  "name": "重庆铁门乡",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S02",
      "source": "iziran_中国自然资源报",
      "title": "重庆市地理信息和遥感应用中心以数字化赋能全域土地综合整治",
      "date": "2025-07-18",
      "url": "https://www.iziran.net/news.html?aid=5412179",
      "note": "在构建铁门乡全域土地综合整治数字化场景时，重庆市地理信息和遥感应用中心运用实景三维、空间数据治理、可视化等数字化手段，搭建“一张图”，实现对生命周期数据要素的全面感知；建立“一本账”，全景呈现多维目标的实施成效；形成“一画像”，有效助推乡村土地价值的实现。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 435
     },
     {
      "no": "S07",
      "source": "cq.news.cn_新华网重庆频道",
      "title": "看梁平铁门乡如何从撂荒地蝶变美丽宜居乡村",
      "date": "2025-05-27",
      "url": "http://cq.news.cn/20250527/aca1bee236f34ff7b7b15a6c558b85d2/c.html",
      "note": "去年，铁门乡通过村庄规划融合全域土地综合整治，全面梳理出可用的村庄建设用地指标，为项目布局提供了指标来源。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2199
     },
     {
      "no": "S10",
      "source": "cq.xinhuanet.com_新华网重庆频道",
      "title": "巧治土地“零碎账” 乡村振兴奏“丰”谣——重庆梁平全域土地综合整治",
      "date": "2025-04-22",
      "url": "http://www.cq.xinhuanet.com/20250422/4da767da72bb4b94999e4f6b838969a4/c.html",
      "note": "近年来，梁平区科学制定全域土地综合整治实施方案，对整治区内的农田、水系、道路、林地和村落进行系统规划，实现生态空间、生产空间和生活空间的整体优化布局。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1121
     },
     {
      "no": "S22",
      "source": "cq.gov.cn_重庆市人民政府",
      "title": "农房品质提升 院落颜值提升 村落价值提升 梁平 打造各美其美、美美与共的巴渝和美乡村新图景",
      "date": "2025-12-15",
      "url": "https://www.cq.gov.cn/ywdt/zwhd/qxdt/202512/t20251215_15244637.html",
      "note": "2024年，随着全域土地综合整治项目落户铁门乡，规划的力量得到集中体现。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S27",
      "source": "news.cn_新华网",
      "title": "巧治土地“零碎账” 乡村振兴奏“丰”谣——重庆梁平全域土地综合整治一线见闻",
      "date": "2025-04-21",
      "url": "https://www.news.cn/local/20250421/96521663ec244c97b52f3225dcf0ef46/c.html",
      "note": "近年来，梁平区科学制定全域土地综合整治实施方案，对整治区内的农田、水系、道路、林地和村落进行系统规划，实现生态空间、生产空间和生活空间的整体优化布局。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S03",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "全域土地综合整治持续推进 激活乡村振兴新动能",
      "date": "2025-05-08",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202505/t20250508_14592006.html",
      "note": "近年来，重庆以全域土地综合整治为抓手，精准实施镇村国土空间规划，促进耕地保护和土地集约节约利用，为乡村产业发展、农民持续增收提供了有力支撑。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 988
     },
     {
      "no": "S04",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "乡村更美 经济更旺 重庆全域土地综合整治迎双丰收",
      "date": "2025-04-23",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202504/t20250423_14547666.html",
      "note": "何显华说，2023年起，梁平区铁门乡实施了全域土地综合整治，水稻田从“小散乱”变成了连片大田，地形更平整，也更适合机械化耕种，且水稻亩产还提升了300多斤。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S05",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "巧治土地“零碎账” 乡村振兴奏“丰”谣——重庆梁平全域土地综合整治纪实",
      "date": "2025-04-22",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202504/t20250422_14544318.html",
      "note": "近年来，梁平区科学制定全域土地综合整治实施方案，对整治区内的农田、水系、道路、林地和村落进行系统规划，实现生态空间、生产空间和生活空间的整体优化布局。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "cqlp.gov.cn_重庆市梁平区人民政府",
      "title": "铁门乡 土地为墨绘新景 产业生金促共富",
      "date": "2025-09-23",
      "url": "http://www.cqlp.gov.cn/zwxx_178/bmjz/202509/t20250923_15031938.html",
      "note": "其华丽蜕变的秘诀，在于铁门乡以全域土地综合整治为突破口，统筹推进产业发展、人居环境整治、乡村治理等工作，奏响了“风貌美、产业兴、人民富”的三重奏鸣曲。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "ghzrzyj.cq.gov.cn_重庆市规划和自然",
      "title": "重庆市规划和自然资源局关于市六届人大三次会议第0594号代表建议办理情况的答复函",
      "date": "2025-04-25",
      "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/jytablqk/202508/t20250805_14877169.html",
      "note": "您提出的《关于全面推进重庆市全域土地综合整治建设工作的建议》（第0594号）收悉。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
      "title": "巧做“土地文章” 小乡村闯出振兴新路径",
      "date": "2025-04-21",
      "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202504/t20250421_14539461_wap.html",
      "note": "全域土地综合整治实施后，铁门乡变散田为整田，变薄田为良田，生产空间集约高效、生活空间安闲舒适、生态空间山青水秀。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "cq.gov.cn_重庆市人民政府网",
      "title": "梁平 先行先试 加快建设巴渝和美乡村示范区",
      "date": "2024-10-11",
      "url": "https://www.cq.gov.cn/gzh/xczx/202410/t20241011_13696529.html",
      "note": "以铁门乡为示范，打破行政边界，以全域土地综合整治为抓手，加强村庄规划，与集体经营性建设用地入市相融合，多村联合编制村庄规划，整体优化生态、生产、",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S08",
      "source": "cqrb.cn_重庆日报",
      "title": "蓝图绘乡野｜规划+整治激活乡村三重奏 梁平铁门乡撂荒地蝶变",
      "date": "2025-05-26",
      "url": "https://cqrb.cn/xiangcun/fabu/2025-05-26/2289237_pc.html",
      "note": "去年，铁门乡通过村庄规划融合全域土地综合整治，全面梳理出可用的村庄建设用地指标，为项目布局提供了指标来源。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "stdaily.com_科技日报",
      "title": "重庆数字技术赋能全域土地综合整治",
      "date": "2025-04-21",
      "url": "https://www.stdaily.com/web/gdxw/2025-04/21/content_328555.html",
      "note": "重庆市规划和自然资源局生态修复处副处长蔡建军表示，将持续发挥全域土地综合整治助力乡村振兴、助推城乡融合发展的重要抓手作用，从强化规划协同引领、强化涉农资金项目整合、建立多元化投融资机制、完善数字应用场景建设，强化数字化赋能等方面发力，着力打造一批示范引领项目，助推美丽重庆城乡风貌整体大美。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "12371.gov.cn_共产党员网",
      "title": "新华网看重庆｜粮田变“良田” 重庆实施全域土地综合整治激发乡村振兴内生动力",
      "date": "2025-04-21",
      "url": "https://www.12371.gov.cn/web/article/1438695420439191552/web/content_1438695420439191552.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S13",
      "source": "sohu.com_搜狐网",
      "title": "重庆梁平：以空间治理赋能和美乡村建设",
      "date": "2025-08-05",
      "url": "https://www.sohu.com/a/920698178_121684501",
      "note": "区规划自然资源局以全域土地综合整治为抓手，统筹农田、水系、道路、林地和村落，破解农村耕地破碎化、空间无序化、土地利用低效化等问题。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S26",
      "source": "cqnews.net_华龙网（第1眼TV）",
      "title": "观察丨巧做“土地文章” 小乡村闯出振兴新路径",
      "date": "2025-04-21",
      "url": "https://www.cqnews.net/1/detail/1363617226438164480/web/content_1363617226438164480.html",
      "note": "全域土地综合整治实施后，铁门乡变散田为整田，变薄田为良田，生产空间集约高效、生活空间安闲舒适、生态空间山青水秀。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S28",
      "source": "news.qq.com",
      "title": "【新和富美·都梁行】铁门乡：土地为墨绘新景 产业生金促共富",
      "date": "2025-10-10",
      "url": "https://news.qq.com/rain/a/20251010A065DE00",
      "note": "其华丽蜕变的秘诀，在于铁门乡以全域土地综合整治为突破口，统筹推进产业发展、人居环境整治、乡村治理等工作，奏响了“风貌美、产业兴、人民富”的三重奏鸣曲。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「重庆自然资源」（重庆省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：重庆铁门乡 全域土地综合整治"
  ],
  "counts": {
   "items": 18,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 5,
    "政府官方通报": 7,
    "其他媒体报道": 6
   }
  }
 },
 {
  "id": "43",
  "dir": "43_江苏省常州市钟楼区邹区镇",
  "name": "江苏省常州市钟楼区邹区镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "zrzy.jiangsu.gov.cn_江苏自然资源厅",
      "title": "产教融合绘就乡村新图景——江苏常州邹区镇全域土地综合整治典型案例获自然资源部推广",
      "date": "2025-06-26",
      "url": "https://zrzy.jiangsu.gov.cn/cz/gtzx/gzdt/202506/t20250626_1798691.htm",
      "note": "这一创新实践通过 “ 全域整治 + 城乡融合 + 职教赋能 ” 的复合治理模式，为破解城乡二元结构、推动乡村振兴提供了可复制可推广的“常州方案”。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1741
     },
     {
      "no": "S03",
      "source": "zrzy.jiangsu.gov.cn_江苏自然资源厅",
      "title": "江苏省常州市钟楼区邹区镇全域土地综合整治典型案例——产教融合绘就乡村振兴新图景",
      "date": "2026-04-17",
      "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d57dqr/jsxcg/2026/04/17150032255860.html",
      "note": "摘要： 常州市钟楼区邹区镇全域土地综合整治项目以“殷杏泰”产教融合试验区为核心载体，通过系统性重构“生产-生活-生态”空间格局，创新形成“全域整治+城乡融合+职教赋能”的复合治理模式。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4172
     },
     {
      "no": "S14",
      "source": "zgjssw.gov.cn_中共江苏省委新闻网",
      "title": "江苏全域土地综合整治多重效益显现——“一子落”带动“满盘活”",
      "date": "2025-10-19",
      "url": "https://www.zgjssw.gov.cn/yaowen/202510/t20251019_8530203.shtml",
      "note": "全域土地综合整治是实施乡村振兴战略的重要平台，是深入推进“千万工程”的重要抓手，通过集成运用耕地占补平衡、增减挂钩等政策工具，可以优化国土空间布局，有效促进城乡要素平等交换、双向流动，助力建设宜居宜业和美乡村。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S04",
      "source": "zrzy.jiangsu.gov.cn_江苏自然资源厅常州分局",
      "title": "全省首个“双第一”！钟楼区邹区镇国土空间全域综合整治项目顺利通过市级综合验收",
      "date": "2026-04-17",
      "url": "https://zrzy.jiangsu.gov.cn/cz/zlfj/gzdt/202604/t20260417_1982939.htm",
      "note": "近日，常州市钟楼区邹区镇国土空间全域综合整治项目顺利通过市级综合验收。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 680
     },
     {
      "no": "S05",
      "source": "zrzy.jiangsu.gov.cn_江苏自然资源厅常州分局",
      "title": "喜讯！全市唯一！钟楼区案例入选自然资源节约集约示范县（市）第二批创新典型案例",
      "date": "2025-03-11",
      "url": "https://zrzy.jiangsu.gov.cn/cz/zlfj/gzdt/202503/t20250311_1736747.htm",
      "note": "近年来，钟楼区用好全域土地综合整治关键一招，高效整合优化资源配置，量质并重加强耕地保护，精细管理赋能乡村振兴。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1046
     },
     {
      "no": "S07",
      "source": "changzhou.gov.cn_常州市人民政府",
      "title": "钟楼区：全省首个！邹区镇国土空间全域综合整治项目顺利通过市级综合验收",
      "date": "2026-04-20",
      "url": "https://www.changzhou.gov.cn/ns_news/401177666735806",
      "note": "近日，常州市钟楼区邹区镇国土空间全域综合整治项目顺利通过市级综合验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S15",
      "source": "zhonglou.gov.cn_常州市钟楼区人民政府",
      "title": "殷杏泰产教融合试验区项目简介",
      "date": "2023-03-01",
      "url": "https://www.zhonglou.gov.cn/html/czzl/2023/NPQLPQCK_1117/343365.html",
      "note": "一路串五片：以现状道路为基础进行拓宽升级的杏塘和泰村中心道路，串联泰村的高效农业项目区、预留高校项目区、如意湾产业项目区，杏塘的高效农业项目区、农旅产业项目区。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "zhonglou.gov.cn_常州市钟楼区人民政府",
      "title": "钟楼区专项行动方案（含“深入推进邹区镇全域土地综合整治”）",
      "date": "2026-05-25",
      "url": "https://www.zhonglou.gov.cn/html/czzl/2026/NBBEPMJO_0525/394518.html",
      "note": "聚焦村庄规划提质增效，统筹全域土地综合整治、人居环境整治、住房更新等重点任务，动态优化重点村庄空间布局与功能配置，为打造风貌协调、功能完善、宜居宜业和美乡村筑牢规划根基。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "zrzy.jiangsu.gov.cn_常州市自然资",
      "title": "喜报！全省首个国土空间全域整治项目圆满通过整体验收",
      "date": "2026-04-16",
      "url": "https://zrzy.jiangsu.gov.cn/cz/gtzx/gzdt/202604/t20260416_1981516.htm",
      "note": "4月14日，由常州市自然资源和规划局国土空间生态修复处牵头组织验收的江苏省首个获批国土空间全域综合整治省级示范项目——常州市钟楼区邹区镇国土空间全域综合整治项目，顺利通过市级终验。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.zhonglou.gov.cn",
      "title": "常州市钟楼区人民政府工作报告（2026年1月）",
      "date": "2026-02-05",
      "url": "https://www.zhonglou.gov.cn/html/czzl/2026/FPJCLMLQ_0205/24217.html",
      "note": "乡村振兴迈入新阶段，新屋集建区开工建设，新建高标准农田534亩，“殷杏泰产教融合试验区”全域土地综合整治入选2个国家级典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.zhonglou.gov.cn",
      "title": "关于常州市钟楼区2025年国民经济和社会发展计划执行情况与2026年计划草案的报告",
      "date": "2026-03-06",
      "url": "https://www.zhonglou.gov.cn/html/czzl/2026/FPJELMLD_0306/24328.html",
      "note": "出台《钟楼区产业科创生态建设行动方案》，构建“五位一体”产业科创生态体系，长三角OPE数智产业创新社区、智能制造龙城实验室人工智能创新中心等平台揭牌运营，2家企业获评省潜在独角兽，8家企业获评省瞪羚企业。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S22",
      "source": "www.zhonglou.gov.cn",
      "title": "幸福，在有光的地方更加明亮",
      "date": "2026-07-22",
      "url": "https://www.zhonglou.gov.cn/index.php?c=phone&a=show&id=393693&catid=35738",
      "note": "作为全省首个“全域土地综合整治试点”，邹区镇以殷村、安基、杏塘泰村、新屋刘巷四个版本自主更新样板为引领，累计建成现代化宜居农房1293套，探索出“政府引导+村民自筹”的农房改善“邹区经验”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S10",
      "source": "jssb.njdaily.cn_江苏商报",
      "title": "钟楼分局 党建红引领乡村兴",
      "date": "2025-07-02",
      "url": "http://jssb.njdaily.cn/html/2025-07/02/content_670_217877.htm",
      "note": "钟楼分局坚持把党旗插在乡村振兴最前沿，以党支部结对共建为关键纽带，推动组织优势向发展动能高效转化，在邹区镇“殷杏泰”片区创新实施全域土地综合整治省级示范项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "news.qq.com_腾讯新闻",
      "title": "全国推广！常州一地入选",
      "date": "2025-07-01",
      "url": "https://news.qq.com/rain/a/20250701A04SV600",
      "note": "钟楼区作为全市唯一的全国自然资源节约集约利用示范区，聚焦“做精老城区、做强经开区、做大高新区”发展方向，聚力“产、城、乡”发展上下功夫，通过全域土地综合整治与城市更新双轮驱动，为乡村振兴与城市发展探索出可复制的“常州方案”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「江苏自然资源」（江苏省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：江苏省常州市钟楼区邹区镇 全域土地综合整治"
  ],
  "counts": {
   "items": 14,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 3,
    "政府官方通报": 9,
    "其他媒体报道": 2
   }
  }
 },
 {
  "id": "44",
  "dir": "44_浙江省湖州市长兴县吕山乡",
  "name": "浙江省湖州市长兴县吕山乡",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "iziran_中国自然资源报",
      "title": "浙江长兴：绘就美丽宜居乡村新画卷",
      "date": "2023-08-22",
      "url": "https://www.iziran.net/news.html?aid=3823156",
      "note": "如：吕山乡结合全域土地综合整治，建成湖羊智慧循环产业园，项目占地700亩，全面投产后可实现湖羊年存栏6万头，出栏超8万头，加速全县湖羊产业发展。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2552
     },
     {
      "no": "S14",
      "source": "cs.zjol.com.cn_浙江在线（长兴新闻网）",
      "title": "长兴扎实推进全域土地综合整治 赋予乡村新面貌",
      "date": "2021-03-19",
      "url": "https://cs.zjol.com.cn/jms/202103/t20210319_22269650.shtml",
      "note": "截至目前，长兴已完成房屋拆迁5281户、安置2519户、土地整治6890亩，完成项目整体验收3个，吕山乡与虹星桥镇全域土地综合整治工作还成功申报国家级试点。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "zjic.zj.gov.cn_浙江省经济信息中心",
      "title": "浙江长兴：“全域整治+产业发展”助力乡村振兴",
      "date": "2026-01-12",
      "url": "https://zjic.zj.gov.cn/ywdh/qyfz/202601/t20260109_23895564.shtml",
      "note": "近年来，浙江省湖州市长兴县吕山乡以打造“农业产业新高地、乡村振兴先行区”为目标，全力做好“全域整治+产业发展”文章，包括建设农事服务中心，推进农田集中连片、建设用地集中集聚，开展农村人居环境整治、创建美丽宜居家园等，深化乡村全域治理、实现乡村全域美丽，助力乡村振兴。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "zjnews.zjol.com.cn_浙江在线（来源",
      "title": "破解耕地肌理碎片化 湖州全域土地综合整治“点土成金”",
      "date": "2022-09-06",
      "url": "https://zjnews.zjol.com.cn/zjnews/huzhounews/202209/t20220906_24760421.shtml",
      "note": "今年以来，通过全域土地综合整治，全市累计减少5亩以下零星耕地300多片，新增集中连片耕地3000余亩，持续推动形成千亩、万亩集中连片耕地，破解耕地肌理碎片化，为现代农业规模经营创造有利条件。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "zjrb.zjol.com.cn_浙江日报",
      "title": "“湖羊之乡”逐梦田园绘新景——长兴吕山乡全力打造农业产业新高地、乡村振兴先行区",
      "date": "2020-06-18",
      "url": "https://zjrb.zjol.com.cn/html/2020-06/18/content_3339815.htm",
      "note": "乘势而起，2020年，吕山乡开展全乡全域土地综合整治，助推全域与产业发展、深化全域治理、实现全域美丽，拉开了农田集中连片、建设用地集中集聚、空间形态集约高效的全新蓝图。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S02",
      "source": "huzhou.gov.cn_湖州市人民政府",
      "title": "长兴吕山全域土地综合整治案例入选全国典型",
      "date": "2025-06-27",
      "url": "https://www.huzhou.gov.cn/col/col1229213488/art/2025/art_396543324.html",
      "note": "完成空间腾挪、保障产业链用地需求后，吕山乡加快推进湖羊产业振兴计划，搭建湖羊产业农合联，构建“龙头企业+养殖企业+合作社+低收入农户”经营模式，打响区域公共品牌“鲜乡吕山”，并以生态修复推动环境持续改善，将土地综合整治与美丽乡村、全域旅游等工作有机结合。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 515
     },
     {
      "no": "S03",
      "source": "huzhou.gov.cn_湖州市人民政府",
      "title": "土地综合整治打开发展新空间",
      "date": "2023-09-18",
      "url": "https://www.huzhou.gov.cn/art/2023/9/18/art_1229213488_59063787.html",
      "note": "连日来，在长兴县吕山乡胥仓绿色农田建设项目基地里，粮农忙着喷施农药，开展晚稻重大病虫害应急防治作业。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 923
     },
     {
      "no": "S04",
      "source": "huzhou.gov.cn_湖州市人民政府",
      "title": "四土地综合整治项目获评省级优秀",
      "date": "2026-01-12",
      "url": "https://www.huzhou.gov.cn/col/col1229213482/art/2026/art_37c5f26b1f894599892ff5e439710dbc.html",
      "note": "相关实践获推广肯定，长兴县吕山乡全域整治案例入选自然资源部典型案例，安吉县相关做法纳入浙江省首批生态产品价值实现案例。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 883
     },
     {
      "no": "S08",
      "source": "zrzyt.zj.gov.cn_浙江自然资源厅",
      "title": "《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展的实施意见》",
      "date": "2025-11-14",
      "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229101716_2579171.html",
      "note": "为深入运用自然资源部《关于学习运用“千万工程”经验 深入推进全域土地综合整治工作的意见》（自然资办发〔2024〕149号），将土地综合整治作为落实城乡规划布局一体融合的有效载体，推动土地综合整治向国土空间治理转型，全面夯实共同富裕、城乡融合的空间基础，助推高质量发展。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "zjcx.gov.cn_长兴县自然资源和规划局",
      "title": "长兴县自然资源和规划局2025年第四季度重点工作任务执行和落实情况",
      "date": "2026",
      "url": "https://www.zjcx.gov.cn/xxgk/zfbmxxgk/zxxzrzyhghj/fdzdgknr/xzfgzbgzxqk/art/2026/art_223b0946faaf4592914742ade71e6316.html",
      "note": "二是抓好土地整治，稳步推进15个全域土地综合整治项目，整治率达68%；3个土地综合整治项目通过县级整体验收工作，吕山乡、虹星桥镇相关做法先后入选自然资源部和浙江省土地综合整治优秀典型案例。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S09",
      "source": "zjcx.wenming.cn_长兴文明网",
      "title": "长兴：“共富吕山”绘就美好图景",
      "date": "2023-01-13",
      "url": "http://zjcx.wenming.cn/wmcj/wmcz/202301/t20230113_3398147.shtml",
      "note": "这背后，是吕山乡坚持“一盘棋”加速推进全域土地综合整治，探索念活“土地经”。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "sohu.com_搜狐网",
      "title": "湖州7个乡镇入选“国家试点”",
      "date": "2021-01-10",
      "url": "https://www.sohu.com/a/443636105_434584",
      "note": "吕山乡全域土地综合整治试点项目涉及吕山村、吕虹村、胥仓村、南杨村、杨吴村、龙溪村和雁陶村等7个行政村，行政区域面积31.85平方公里，总户数5295户，户籍人口17512人。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S12",
      "source": "163.com_网易",
      "title": "土地综合整治打开发展新空间",
      "date": "2023-09-26",
      "url": "https://www.163.com/dy/article/IFJF2M5U0552ADWT.html",
      "note": "连日来，在长兴县吕山乡胥仓绿色农田建设项目基地里，粮农忙着喷施农药，开展晚稻重大病虫害应急防治作业。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S21",
      "source": "www.news.cn",
      "title": "浙江长兴：\"全域整治+产业发展\"助力乡村振兴",
      "date": "2026-01-06",
      "url": "https://www.news.cn/photo/20260106/1de4a115501e4d998e92a2cef947f826/c.html",
      "note": "近年来，浙江省湖州市长兴县吕山乡以打造“农业产业新高地、乡村振兴先行区”为目标，全力做好“全域整治+产业发展”文章，包括建设农事服务中心，推进农田集中连片、建设用地集中集聚，开展农村人居环境整治、创建美丽宜居家园等，深化乡村全域治理、实现乡村全域美丽，助力乡村振兴。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「浙江自然资源」（浙江省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：浙江省湖州市长兴县吕山乡 全域土地综合整治"
  ],
  "counts": {
   "items": 14,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 5,
    "政府官方通报": 5,
    "其他媒体报道": 4
   }
  }
 },
 {
  "id": "45",
  "dir": "45_广西壮族自治区贵港市覃塘区覃塘街道",
  "name": "广西壮族自治区贵港市覃塘区覃塘街道",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "dnr.gxzf.gov.cn_广西自然资源厅",
      "title": "典型案例｜贵港市覃塘区覃塘街道姚山村等2个村全域土地综合整治",
      "date": "2025-09-16",
      "url": "https://dnr.gxzf.gov.cn/xwzx/zrzx/t25972572.shtml",
      "note": "项目针对姚山村、龙凤村试点区域内耕地局部碎片化、产业基础薄弱、局部生态环境质量退化等问题，谋划实施全域土地综合整治，构建了“空间重构-多元筹资-三产融合”的可持续发展路径，形成了具有示范效益的“土地整治＋农文旅产业融合”双轮驱动的全域土地综合整治“覃塘经验”。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 2873
     },
     {
      "no": "S05",
      "source": "gx.people.com.cn_人民网广西频道",
      "title": "全域整治谋发展 乡村振兴绘新篇",
      "date": "2024-10-23",
      "url": "https://gx.people.com.cn/n2/2024/1023/c390645-41017751.html",
      "note": "近年来，广西贵港市运用“千万工程”经验，聚焦农用地、建设用地整理，乡村历史文化与生态保护，在覃塘区推进全域土地综合整治。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1931
     },
     {
      "no": "S07",
      "source": "iziran_中国自然资源报",
      "title": "贵港市覃塘区：推进全域土地整治 赋能乡村高质量发展",
      "date": "2024-11-17",
      "url": "https://www.iziran.net/news.html?aid=5359592",
      "note": "近年来，贵港市借鉴运用“千万工程”经验，聚焦农用地、建设用地整理和乡村历史文化与生态保护，在覃塘区推进实施全域土地综合整治。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 664
     },
     {
      "no": "S18",
      "source": "ggnews.com.cn_贵港新闻网（覃塘融媒）",
      "title": "覃塘区启动全域土地综合整治项目",
      "date": "2025-03-12",
      "url": "https://www.ggnews.com.cn/news/xianshiqu/qintangqu/2025-03-12/99814.html",
      "note": "覃塘区各级各部门要持续学习运用“千万工程”经验，深刻领会全域土地综合整治的必要性和重要性，以高度的责任感和使命感，依托全域土地综合整治，优化空间布局，整合产业发展空间，破解农村空间布局无序化、耕地碎片化、土地资源利用低效化、生态系统质量退化等“四化”问题，切实提升乡村建设水平，推进城乡融合发展，改善农村人居环境。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S02",
      "source": "dnr.gxzf.gov.cn_广西自然资源厅",
      "title": "贵港市覃塘区：推进全域土地整治 赋能乡村高质量发展",
      "date": "2024-11-17",
      "url": "https://dnr.gxzf.gov.cn/xwzx/sxdt/t19310147.shtml",
      "note": "近年来，贵港市借鉴运用“千万工程”经验，聚焦农用地、建设用地整理和乡村历史文化与生态保护，在覃塘区推进实施全域土地综合整治。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 779
     },
     {
      "no": "S03",
      "source": "ggqt.gov.cn_贵港市覃塘区人民政府",
      "title": "喜讯！覃塘区2个全域土地综合整治项目通过市级整体验收",
      "date": "2025-04-27",
      "url": "http://www.ggqt.gov.cn/ttxw/t20160672.shtml",
      "note": "4月22日至23日，贵港市推进全域土地综合整治工作局际联席会经过现场踏勘并召开会议讨论，同意覃塘区覃塘街道姚山村等2个村全域土地综合整治项目和覃塘区樟木镇凌动村等3个村全域土地综合整治项目通过验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S11",
      "source": "ggqt.gov.cn_贵港市覃塘区人民政府",
      "title": "广西首个！贵港市覃塘区项目入选全国第三批全域土地综合整治典型案例",
      "date": "2025-06-26",
      "url": "http://www.ggqt.gov.cn/xxgk/gzdt/zfxxgkgzdtzwxx/t21246818.shtml",
      "note": "广西贵港市覃塘区覃塘街道姚山村等2个村全域土地综合整治试点项目，因发挥“东部毛尖、中部荷塘、西部水稻”三大农业优势，“整治+产业”成效明显，成为广西首个入选全国典型案例的项目。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S14",
      "source": "gg.dnr.gxzf.gov.cn_贵港市自然资源",
      "title": "贵港市覃塘区2个全域土地综合整治项目顺利通过市级整体验收",
      "date": "2025-04-25",
      "url": "http://gg.dnr.gxzf.gov.cn/xw/gzdt/t21142384.shtml",
      "note": "4月22-23日，贵港市推进全域土地综合整治工作局际联席会组织开展了贵港市覃塘区覃塘街道姚山村等2个村全域土地综合整治项目和覃塘区樟木镇凌动村等3个村全域土地综合整治项目的市级整体验收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S16",
      "source": "gxgg.gov.cn_贵港市人民政府",
      "title": "覃塘区自然资源局荣获“2025年度覃塘区重点工作先进集体”称号",
      "date": "2026-05-14",
      "url": "http://www.gxgg.gov.cn/xwdt/bmdt2/t27758378.shtml",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S17",
      "source": "gxzf.gov.cn_广西壮族自治区人民政府门户网",
      "title": "广西“十四五”自然资源事业成果（含覃塘区姚山村、龙凤村项目）",
      "date": "2026-01-07",
      "url": "http://www.gxzf.gov.cn/zzqzyxx/t27089016.shtml",
      "note": "利用全域土地综合整治专项资金等多元筹资模式，贵港市覃塘区覃塘街道姚山村和龙凤村实施田块合并、权属流转。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.gxgg.gov.cn",
      "title": "以\"千万工程\"经验为引领——贵港市农投集团高质量推进全域土地综合整治工作",
      "date": "2024-10-25",
      "url": "http://www.gxgg.gov.cn/xwdt/bmdt2/t19172946.shtml",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S08",
      "source": "ggnews.com.cn_贵港新闻网",
      "title": "土地“重生”赋新能 覃塘全域整治入选国家典型案例",
      "date": "2025-08-02",
      "url": "https://www.ggnews.com.cn/news/xianshiqu/qintangqu/2025-08-02/108298.html",
      "note": "他说，这些变化源于覃塘区全域土地综合整治项目的实施。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S20",
      "source": "www.gx.xinhuanet.com",
      "title": "广西5年建设62个全域土地综合整治试点项目",
      "date": "2024-10-16",
      "url": "http://www.gx.xinhuanet.com/20241016/c81956cdb74345a28838f140625f7cf4/c.html",
      "note": "仅覃塘区覃塘街道姚山村等两个村全域土地综合整治试点项目就投入10亿元，统筹实施农用地整理、生态修复、文化保护、产业布局和导入等4类12个子项目，走出了“农业持续增效、农民持续增收、农村持续增绿”的乡村振兴新路子。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「广西自然资源」（广西省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：广西壮族自治区贵港市覃塘区覃塘街道 全域土地综合整治"
  ],
  "counts": {
   "items": 13,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 4,
    "政府官方通报": 7,
    "其他媒体报道": 2
   }
  }
 },
 {
  "id": "46",
  "dir": "46_贵州省黔东南州雷山县西江镇",
  "name": "贵州省黔东南州雷山县西江镇",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S01",
      "source": "zrzy.guizhou.gov.cn_贵州自然资源厅",
      "title": "天眼新闻 ｜ 西江镇书写全域土地整治与文化传承融合新篇",
      "date": "2025-09-01",
      "url": "https://zrzy.guizhou.gov.cn/wzgb/xwzx/xtyw1/202509/t20250901_88547291.html",
      "note": "随着全域土地综合整治深入推进，西江镇正迎来一场深刻的变革。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 3421
     },
     {
      "no": "S02",
      "source": "zrzy.guizhou.gov.cn_贵州自然资源厅",
      "title": "贵州日报专版丨全域土地整治助力乡村全面振兴",
      "date": "2025-09-29",
      "url": "https://zrzy.guizhou.gov.cn/wzgb/xwzx/xtyw1/202509/t20250929_88666723.html",
      "note": "随着全域土地综合整治深入推进，西江镇正迎来一场深刻的变革。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1616
     },
     {
      "no": "S04",
      "source": "zrzy.guizhou.gov.cn_贵州自然资源厅",
      "title": "当代贵州｜贵州一体化修复绘就黔山青绿新画卷",
      "date": "2026-09-13",
      "url": "https://zrzy.guizhou.gov.cn/wzgb/xwzx/xtyw1/202609/t20260913_90866060.html",
      "note": "2025年，西江镇成功入选自然资源部第三批全域土地综合整治典型案例。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 3848
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S17",
      "source": "gznw.guizhou.gov.cn_贵州农经网",
      "title": "我省有序推动国家级全域土地综合整治试点工作",
      "date": "2021",
      "url": "https://gznw.guizhou.gov.cn/gznjw/kzx/tpgj/tpgz/849529/index.html",
      "note": "日前，记者从省自然资源厅获悉，自国家级全域土地综合整治试点名单批复以来，我省有序推动该项工作，组织召开视频培训会，制定并印发《贵州省全域土地综合整治工作指南（试行）》，指导试点调整和优化实施方案，做好规划衔接工作，保障试点项目顺利实施。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S07",
      "source": "gznw.com_贵州农网",
      "title": "雷山县入选全域土地综合整治典型案例",
      "date": "2025-06-30",
      "url": "https://www.gznw.com/gznjw/kzx/xwrd/snxw/947918/index.html",
      "note": "雷山县西江镇拥有丰富的苗族文化遗产资源，贵州省自然资源厅以全域土地综合整治为抓手，推动乡村振兴与多规融合，通过创新实施路径，将自然景观与苗族特色文化融合，强化耕地保护与土地集约利用，改善人居环境，实现群众增收。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S10",
      "source": "sohu.com_搜狐网",
      "title": "贵州日报专版丨全域土地整治助力乡村全面振兴",
      "date": "2025-09-28",
      "url": "https://www.sohu.com/a/939414838_121106902",
      "note": "随着全域土地综合整治深入推进，西江镇正迎来一场深刻的变革。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S18",
      "source": "www.iziran.net",
      "title": "贵州雷山西江镇：一座苗寨的土地\"加减法\"",
      "date": "2026-01-21",
      "url": "https://www.iziran.net/news.html?aid=5453114",
      "note": "近年来，随着全域土地综合整治深入推进，西江镇致力优化生产、生活、生态空间布局，让零散的耕地连成片、闲置的土地被盘活，努力探索出一条以土地整治赋能民族文化传承、生态产品价值转化与乡村全面振兴的发展之路。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S19",
      "source": "www.cet.com.cn",
      "title": "农发行雷山县支行：投放5000万元贷款支持西江镇全域土地综合整治项目建设",
      "date": "2025-04-17",
      "url": "https://www.cet.com.cn/zhpd/ncjr/10194294.shtml",
      "note": "为深入贯彻落实2025年中央一号文件有关全域土地综合整治安排部署，近日，农发行雷山县支行立足于耕地和民族特色传统村落保护与利用，成功投放5000万元用于支持雷山县西江镇全域土地综合整治试点（一期）项目建设。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "音视频资料",
    "desc": "电视台、广播与「视频号」等渠道的影像报道；部分条目挂在政府网站或门户网站的转载页上，URL 无视频扩展名，故按源清单的分类名归入本类。",
    "items": [
     {
      "no": "S09",
      "source": "sohu.com_搜狐网",
      "title": "贵州新闻联播 ｜ “种”风景 也“种”收成，一块田在贵州的加法",
      "date": "2026-06-26",
      "url": "https://www.sohu.com/a/1041778908_121106902",
      "note": "2021年，当地推进全域土地综合整治，在“坡改梯”、小块并大块、完善灌溉设施、土壤改良等系列措施实施下，村里新增耕地面积30多亩，耕地连成了片，土地也亩产值完成了“第一跳”。",
      "kind": "video",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「贵州自然资源」（贵州省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：贵州省黔东南州雷山县西江镇 全域土地综合整治"
  ],
  "counts": {
   "items": 9,
   "excerpts": 3,
   "byCategory": {
    "核心权威报道": 3,
    "政府官方通报": 1,
    "其他媒体报道": 4,
    "音视频资料": 1
   }
  }
 },
 {
  "id": "47",
  "dir": "47_宁夏回族自治区石嘴山市惠农区燕子墩乡",
  "name": "宁夏回族自治区石嘴山市惠农区燕子墩乡",
  "sections": [
   {
    "name": "核心权威报道",
    "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
    "items": [
     {
      "no": "S15",
      "source": "nx.people.com.cn_人民网宁夏频道",
      "title": "宁夏自然资源厅推进全域土地综合整治工作",
      "date": "2024-11-22",
      "url": "http://nx.people.com.cn/n2/2024/1122/c410805-41051549.html",
      "note": "近年来，宁夏自然资源厅积极指导各市、县（区）结合生态文明建设、脱贫攻坚、农村土地制度改革试点及村庄规划编制等工作，稳妥推进全域土地综合整治，推动宁夏石嘴山市大武口区星海镇、惠农区燕子墩乡、宁夏固原市原州区开城镇、隆德县城关镇等乡镇开展实践探索，取得阶段性成效，积累了符合宁夏实际的经验成果。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "政府官方通报",
    "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
    "items": [
     {
      "no": "S01",
      "source": "huinong.gov.cn_石嘴山市惠农区人民政府",
      "title": "燕子墩乡全域土地综合整治案例成功入选",
      "date": "2025-06-27",
      "url": "http://www.huinong.gov.cn/zxdt/jzdt/202506/t20250627_4945662.html",
      "note": "6月25日，自然资源部公布了第三批17个全域土地综合整治典型案例，宁夏石嘴山市惠农区燕子墩乡全域土地综合整治案例成功入选，充分展现了我市在全域土地综合整治工作中的创新实践与显著成效。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 955
     },
     {
      "no": "S02",
      "source": "zrzyt.nx.gov.cn_宁夏自然资源厅",
      "title": "关于自治区十三届人大三次会议第348号建议答复的函",
      "date": "2025-12-01",
      "url": "https://zrzyt.nx.gov.cn/gk/fdzdgknr/ytadf/rdjy/202512/t20251201_5096267.html",
      "note": "2020 年以来，先后支持惠农区实施历史遗留废弃矿山生态修复项目 6 个，总投资约 1.16 亿元，矿山修复面积793 公顷；下达惠农区土地指标跨省域调剂收入资金 1.29 亿元，支持实施乡村土地整理和生态修复类项目 10 个，惠农区生态修复工作取得了显著成效，其中燕子墩乡全域土地综合整治入选全国第三批典型案例，为西北地区唯一入选案例。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 1308
     },
     {
      "no": "S11",
      "source": "huinong.gov.cn_石嘴山市惠农区人民政府",
      "title": "海燕村：盐碱地变身“聚宝盆”",
      "date": "2023-11-29",
      "url": "http://www.huinong.gov.cn/zzb/jzdt/202311/t20231129_4366836.html",
      "note": "11月27日，在燕子墩乡海燕村千亩现代设施农业园区日光温室项目建设现场，挖掘机、推土机等大型机械车辆来回穿梭，一排排墙体高大厚实的温室初现“真容”。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 816
     },
     {
      "no": "S23",
      "source": "ggzyjy.fzggw.nx.gov.cn",
      "title": "惠农区燕子墩乡黄渠拐子村生态修复项目施工一标段、二标段、三标段招标公告",
      "date": "2026-08-27",
      "url": "https://ggzyjy.fzggw.nx.gov.cn/dzjy/001001/001001001/001001001001/20260827/7240c1eb-daa1-45e2-b888-a207161ca10a.html",
      "note": "招标范围及内容：惠农区燕子墩乡黄渠拐子村生态修复项目，包括土地平整工程、灌溉与排水工程、排水工程、田间道路工程、农田防护与生态环境保持工程等内容。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S25",
      "source": "zgcounty.com",
      "title": "石嘴山市惠农区 2024 年政府工作报告",
      "date": "2024-03-25",
      "url": "https://zgcounty.com/wap/news/50067.html",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   },
   {
    "name": "其他媒体报道",
    "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
    "items": [
     {
      "no": "S04",
      "source": "sohu.com_宁夏日报",
      "title": "【宁夏日报·专版】塞上江南写江南——“两山论”的宁夏实践",
      "date": "2025-08-25",
      "url": "https://www.sohu.com/a/927770256_121106869",
      "note": "这片曾经遍布盐碱的土地，在全域土地综合整治的推进下，不仅土地盐碱度得以改善，当地生态环境随之逐年向好，燕子墩乡4个村集体合作社还和入驻企业展开合作，实现了生态保护和产业发展的双赢。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S05",
      "source": "sina.com.cn_新浪财经",
      "title": "石嘴山市燕子墩乡一案例入选国家第三批全域土地综合整治典型案例",
      "date": "2025-06-26",
      "url": "https://cj.sina.com.cn/articles/view/3948683941/eb5c22a500101rj1g",
      "note": "6月25日，国家自然资源部公布了第三批17个全域土地综合整治典型案例，宁夏石嘴山市惠农区燕子墩乡全域土地综合整治案例成功入选。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S06",
      "source": "thepaper.cn_澎湃新闻",
      "title": "护耕地、住新房、强产业、促增收……自然资源部“发红包”了！",
      "date": "2026-02-19",
      "url": "https://m.thepaper.cn/newsDetail_forward_32634088",
      "note": "在宁夏石嘴山市燕子墩乡，全域土地综合整治的成果也在春节期间显现，通过重新激活盐碱地生产功能，当地出产的螺丝椒、串番茄、鲈鱼、白对虾，市场销售火爆；江苏省如东县新店镇净增加2600多亩耕地的流转收益，也在这个春节为每户村民添了一枚红包。",
      "kind": "web",
      "hasExcerpt": true,
      "excerptChars": 4115
     },
     {
      "no": "S07",
      "source": "sohu.com_搜狐网",
      "title": "宁夏惠农区燕子墩乡全域土地综合整治的成功案例",
      "date": "2025-01-21",
      "url": "https://www.sohu.com/a/851498295_121956424",
      "note": "为实现目标，燕子墩乡采取了一系列务实的措施，形成了“田地人”联动的全域整治模式。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S08",
      "source": "sohu.com_搜狐网",
      "title": "宁夏养出大对虾，南美白对虾年产值126万元！",
      "date": "2022-12-14",
      "url": "https://www.sohu.com/a/617108206_121124601",
      "note": "",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     },
     {
      "no": "S09",
      "source": "sohu.com_搜狐网",
      "title": "石嘴山市：昔日盐碱地 今朝“南虾北养”“聚宝盆”",
      "date": "2024-03-19",
      "url": "https://www.sohu.com/a/765171895_121503524",
      "note": "宁夏众淼渔农生物科技有限公司是一家从事南美白对虾、鲤鱼、草鱼等繁育、养殖及销售的设施渔业养殖企业，公司与黄海水产研究所、自治区水产研究所合作，引进高纯度亲本南美白对虾苗，进行亲本品质提纯和改良，实现了西北盐碱地南美白对虾生态工程化养殖新突破。",
      "kind": "web",
      "hasExcerpt": false,
      "excerptChars": 0
     }
    ]
   }
  ],
  "wechat": [
   "「宁夏自然资源」（宁夏省自然资源厅官方）",
   "「i自然」（中国自然资源报社）",
   "关键词：宁夏回族自治区石嘴山市惠农区燕子墩乡 全域土地综合整治"
  ],
  "counts": {
   "items": 12,
   "excerpts": 4,
   "byCategory": {
    "核心权威报道": 1,
    "政府官方通报": 5,
    "其他媒体报道": 6
   }
  }
 }
];

export const EXCERPTS = {
 "10": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨河南商丘民权县：打造“粮丰民安”的整治样板",
   "date": "2024-08-28",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5340051",
   "body": "河南省商丘市民权县绿洲街道吴庄等12个村全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。试点坚持以助力乡村振兴、促进区域城乡协调发展为总目标，以用地布局优化、生态修复、农村人居环境改善、产业导入为主要任务，统筹解决试点区域内耕地碎片化、空间布局无序化、土地资源利用低效化、生态质量退化等问题。按照政府主导、市场化运作和“投融建运管”一体化推进的方式，以自然资源资产和产业的经营收益，实现整治范围的资金平衡。着力构建工作联动机制、建设管理机制、运营管理机制和利益分配机制，确保试点工作规范有序开展。试点实施以来在用地布局优化、生态保护修复、人居环境改善和特色产业发展等诸多方面取得了显著成效，逐步构建了“农田集中连片、农业规模经营、村庄集聚美丽、生态环境宜居宜业、产业融合发展”的新格局。\n\n整治后的任庄\n\n一、案例背景\n\n（一）基本情况\n\n民权县试点位于河南省商丘市民权县绿洲街道，涉及12个行政村，均位于民权县城周边。试点区域总面积36.6平方公里，总人口20584人。试点区域属于豫东平原，地形平坦，试点区域水系较为丰富，主要河流有黄河故道、老城干渠、大沙河、古宋河、民宁干渠、龙桑河、吴堂河等。试点区域具有一定的产业基础，其中任庄村依托两园一廊（国家级森林公园、国家级湿地公园、生态廊道），积极发展乡村旅游业，被评为“河南省旅游特色村”；史村铺村是“省级乡村旅游扶贫开发重点村”，年均观光旅游人次有3万余人，具有一定的游客基础；吴庄村以蔬菜种植和果树种植为产业特色，并配套有食品加工厂等农产品加工服务。\n\n（二）空间问题\n\n1.土地利用低效、空间布局及结构有待优化\n\n目前试点区域处于快速发展阶段，耕地保护压力大，土地后备资源严重不足，土地供需矛盾突出，主要体现在：一是建设用地布局较为杂乱，零星、破碎建设用地较多，与农用地相互交织现象较突出，分割了农业空间格局，不利于土地节约集约利用，空间布局有待优化；二是建设用地利用效率不高，空心村现象较为突出，同时又面临建设用地指标短缺，无法满足各项建设需求的局面，建设用地亟待盘活。\n\n2.生态空间有待整治\n\n受气候变化和不合理开发利用等因素的影响，绿洲街道境内黄河故道、大沙河、龙桑河和吴堂河部分河段出现黑臭水体，河岸体系缺少维护，河道中存在淤塞情况，不利于雨季行洪排涝，生态功能降低，亟待进行系统治理，恢复河道生态功能，增强河道抵御自然灾害能力。\n\n3.农村人居环境有待提升\n\n试点区域存在雨污处理设施匮乏、环卫设施不足、道路等级普遍较低、缺少公厕等基础设施薄弱问题，亟待通过全域整治提高基础设施覆盖率，改善人居环境。\n\n（三）试点目标任务和总体安排\n\n民权县试点融合特色农业资源、“两园一廊”自然资源本底和历史文化资源，统筹安排用地布局优化和整治、生态保护修复、农村人居环境改善和产业导入四大任务，构建生产生活生态融合、人与自然和谐共生、自然人文相得益彰的美丽宜居乡村建设新格局。\n\n试点对900亩零散、闲置、低效建设用地实施土地置换、拆旧建新和空间腾挪，打造3个千亩方集中大田，实现建设用地与农业空间集中连片。实施15公里河道治理和4公里生态廊道修复，加强区域内生态建设和环境保护。以史村铺村为重点人居环境整治村庄开展人居环境全面提升，其他村庄因地制宜实施必要的民生工程，建设试点区域宜居宜业和美乡村。打造任庄生态旅游基地、吴庄休闲旅游样板和多个特色种养殖基地，建立吴庄、任庄、史村铺、亓堂观光旅游带，发展乡村生态旅游业和特色产业。\n\n二、主要做法\n\n（一）促进制度创新，构建四项机制\n\n为保证试点的顺利实施，民权县成立以县长为组长，主管副县长为副组长，以自然资源、水利、农业农村、财政等部门为成员的全域土地综合整治项目领导小组，对项目实施统一管理。相继构建了工作联动机制、建设管理机制、运营管理机制和利益分配机制。工作联动机制明确了县委县政府、自然资源、水利、农业农村、财政等部门、绿洲街道办、村集体等各级各部门的职责分工，强化了县、街道、村三级之间的沟通。建设管理机制明确了具体部门和单位负责项目建设进度、安全、质量的监管，确保各项目保质保量完工，强化了日常管控。运营管理机制明确了产业项目及其他需要运营项目的运营主体和运营方式，保障后期项目收益长期稳定。利益分配机制明确了乡镇、村集体、平台公司、企业等各类主体对项目收益分配的比例，确保了后期收益分配结果的公正性和合理性。\n\n（二）用足支持政策，优化空间布局\n\n高质量的地区发展离不开高质量的空间布局，民权县委、县政府通过全域土地综合整治，对不合理的空间布局和土地开发利用方式进行统筹优化，针对试点区域内零散、闲置、低效的建设用地，破碎、散乱、不便耕种的耕地、林地、园地进行了逐村摸排，全面掌握需优化地块，在此基础上通过拆旧建新、空间腾挪和整合利用等手段推动建设用地进行有序盘活，推动农用地连片整治。试点在实施过程中摒弃了向拆村并点要空间的老路子，走出了向用地布局优化和低效用地整治要空间的新路径。\n\n（三）产业发展赋能，形成长效动力\n\n绿洲街道办事处借助优越的地理优势，大力发展特色产业。吴庄村借助地处黄河故道生态廊道的优势，大力发展水果蔬菜种植产业。史村铺村紧紧依托丰富的水资源优势，大力发展水产养殖。任庄村依托良好的水乡乡村旅游基础，提升改建87家农家乐，建筑风格一家一品，因地制宜，依势而建，高低相间，错落有致。项目区内其他村也纷纷通过招商引资、政府投资、社会参与和群众自筹等方式大力发展特色产业，一大批光伏发电、食品加工、果蔬采摘、童装生产、生态旅游等项目纷纷落地，以产业健康发展打造试点区域长期稳定的造血功能，切实保障村民增收。\n\n（四）赢得群众支持，做好工作保障\n\n民权县试点各项工作落实的前提和关键在于村民的支持与配合。为切实做好试点区域涉及的土地整治、土地流转、村民搬迁、人居环境提升改善等工作，绿洲街道办在群众工作上做足了功夫。在拆迁前期，政府就已选定最适宜人居的地块征求村民意愿，同时采取先建后拆的方式进行和谐拆迁，政府坚持把压力留给自己，把利益让给群众；在村民安置方面，坚持高标准设计、高标准承建农民住宅，多方争取群众意见建议，并邀请村民代表现场实地监工；在人居环境方面，在充分征求各村村民的意见基础之上，对各村亟须配套的民生工程进行优先安排，从而全程确保了试点区域群众的积极性。\n\n三、取得成效\n\n（一）空间布局显著优化\n\n试点项目实施后，形成了3个千亩方集中大田，总面积1.1万亩。试点区域耕地图斑数量由整治前的605块减少至586块，耕地更加集中连片且质量有提升；对试点区域内61.5亩零星破碎、不便耕种的永久基本农田进行连片整治，永久基本农田更加集中连片且质量有提升；试点区域盘活零散、闲置、低效建设用地900亩，保障了民生工程和产业发展用地需求。\n\n（二）生态环境得到改善\n\n试点项目实施后，共道路绿化30余公里，建成了湿地监测中心、观鸟台、木栈道、科普宣传文化长廊等基础设施。栽植了芦苇、香蒲、荷花等水生植物，水生植物面积增加了2000亩。先后实施退耕还湿200余亩，退塘还湿18600余亩，生态搬迁居民30余户，通过湿地保护与恢复工程的实施，湿地生物多样性 得到了有效保护。\n\n（三）人居环境逐步改善\n\n试点以留住乡愁、乡韵，保护原有景观风貌为主题，不搞房屋拆迁，而是进行提升改造，对史村铺村进行了人居环境重点提升。根据群众需求，按照一户一宅的原则，进行了统一规划、统一标准、统一外观设计，建成独有的中原民居风格。邻路的建房往内收缩3米~5米，拓展了公共用地。实施了污水管网改造、垃圾分类处理、道路绿化、道路硬化和道路亮化工作，全面提升了史村铺村人居环境，为今后该村发展旅游经济打下了良好基础，也以点带面为其他村庄提升人居环境打造了样板。\n\n整治后的史村辅村\n\n（四）产业持续健康发展\n\n试点项目实施后，建成了任庄水乡风景区，在任庄村新发展农家乐87家，全年到任庄、吴庄、史村铺村等乡村及湿地公园旅游的游客达到20余万人，旅游经济收入3500余万元。吴庄村借助地处黄河故道生态廊道的优势，大力发展水果蔬菜种植产业。现已建成日光温室大棚1700座，主要种植反季节蔬菜，单棚产量达2万多斤，棚均产值4万余元，亩均净收益突破3万元。吊瓜、草莓、桑葚等果蔬采摘，单棚效益达5万元以上，产品供应民权县东方超市17家联络店，成为民权人民的“菜篮子”。史村铺村紧紧依托丰富的水资源优势，大力发展水产养殖。该村采取“公司+农户”的模式成立了专业养殖合作社，带领村民发展稀有水产养殖，利用背河洼地发展了规范化鱼塘150个，养殖甲鱼、黑鱼、河蟹、青虾、台鳅等水产品。现全村拥有水产养殖面积2300亩，水产养殖户87户，稀有水产养殖9家，农家乐、渔家乐经营户50户。同时，该村还打造了葡萄、火龙果近郊果蔬采摘基地。水果成熟时，前来体验自由采摘的游客络绎不绝，农户收入不断增加。任庄、吴庄、史村铺村先后建设了广场、停车场、木栈道等旅游服务设施，优化了游客旅游体验。\n\n四、适用条件和推广前景\n\n通过产业导入大力发展绿色农业、观光农业等现代农业，获得的收益反哺于前期项目投资，缓解了试点融资难的问题，同时增强了乡村造血功能，保障了村民增收。试点形成了以”政府主导+市场化运作”和“投融建运管”一体化推进的方式，开创了高起点谋划、高规格组织、高标准建设、多渠道投资、多效果产出、多成果共享良好局面。构建了工作联动机制到村、建设管理机制到人、运营管理机制到底和利益分配机制到齐等四项机制，在项目谋划前期就明确了每个项目的资金来源、贷款主体、承贷主体和运营主体等各类参与主体，同时明确了项目建设期和运营期的管理办法和责任单位，依法保护各级政府、乡村、群众及投资、运营主体利益，保障了项目全周期长效稳定推进。\n\n按照优布局、保耕地、提生态、兴产业、促发展思路，差异化安排整治内容，根据各村的切实需要安排民生类项目，率先打造了任庄、亓堂两个乡村振兴战略示范村以及史村铺“国家级旅游发展扶贫示范村”，创建了“河南省旅游特色村““水美乡村”“中国旅游网摄影基地”等品牌，走出了一条依托生态优势发展乡村旅游、“以城带乡、城乡互动”助推乡村振兴的新路子。试点经验适用于广大农业型乡镇，对于解决地区耕地不连片、建设用地分散低效、发展空间受限等问题具有借鉴意义。\n\n（河南省自然资源厅推荐）"
  },
  "S05": {
   "heading": "minquan.gov.cn_民权县人民政府：民权县自然资源局2023年乡村振兴工作总结",
   "date": "2023-12-25",
   "source": "minquan.gov.cn_民权县人民政府",
   "url": "http://minquan.gov.cn/bmxxgk/zrzyj/fdzdgknr37/xczx18/gzls18/content_8892",
   "body": "您的位置： 首页 > 部门信息公开 > 自然资源局 > 法定主动公开内容 > 乡村振兴 > 工作落实 > 详细内容\n\n搜索过于频繁，请输入验证码\n\n政府信息公开指南\n\n政府信息公开制度\n\n法定主动公开内容\n\n年度计划总结\n\n决策部署落实情况\n\n建议提案办理\n\n人大代表建议办理\n\n政协委员提案办理\n\n财政专项资金\n\n权责清单及动态调整\n\n公共服务和中介服务清单\n\n行政权力运行\n\n行政权力运行目录\n\n行政权力运行流程图\n\n行政权力运行结果\n\n双随机、一公开\n\n随机抽查清单\n\n网上政务服务\n\n脱贫攻坚成果\n\n基层政务公开\n\n自然资源领域\n\n国土调查基本信息\n\n国土调查地类信息\n\n地理国情监测成果\n\n自然资源登簿前公告\n\n自然资源确权登记结果公开\n\n国有土地使用权出让和划拨\n\n土地供应计划\n\n土地出让公告\n\n土地出让结果\n\n划拨用地批前公示\n\n划拨用地结果公示\n\n住宅用地信息公开\n\n国土空间规划编制\n\n县级国土空间总体规划\n\n详细规划(城镇开发边界内)\n\n国土空间专项规划\n\n乡(镇)国土空间总体规划\n\n建设项目用地预审与选址意见书\n\n建设用地规划许可\n\n建设工程规划许可\n\n乡村建设规划许可\n\n矿山地质环境保护与土地复垦方案审查\n\n农村集体经济组织兴办企业用地审核\n\n乡(镇)村公共设公益事业建设用地审核\n\n临时用地审批\n\n农用地转用审批\n\n农村集体土地征收\n\n征地管理政策\n\n征地法定公告\n\n征地工作程序\n\n征地申报批准相关材料\n\n补充耕地项目\n\n设施农业用地监管\n\n开采矿产资源审批\n\n矿业权出让信息\n\n地质灾害预防和治理\n\n年度地质灾害防治方案\n\n生态修复重大项目工程\n\n批准服务信息\n\n招标投标信息\n\n重大设计变更信息\n\n施工有关信息\n\n质量安全监督信息\n\n工程竣工信息\n\n重大建设项目\n\n办理过程信息\n\n批准结果信息\n\n建设用地(含临时用地)规划许可证核发\n\n建设工程规划许可证核发\n\n乡村建设规划许可证核发\n\n征收土地信息\n\n征收土地预公告\n\n征地补偿安置方案\n\n征地批准文件\n\n农用地转用方案\n\n征收土地方案公告\n\n政府信息公开年报\n\n来源： 发布时间：2023-12-25 浏览次数： 次 【字体： 小 大 】\n\n按照县委、县政府工作部署， 为做好巩固拓展脱贫攻坚成果与乡村振兴有效衔接工作，民权县自然资源局提前谋划，精心部署，对脱贫攻坚成果与乡村振兴工作进行人、财、物进行全方位支持，保质保量完成了脱贫攻坚成果与乡村振兴工作各项任务 , 我局共派出 4个帮扶工作队，选派了4名优秀党员干部担任第一书记 ， 6名业务骨干担任工作队员，全部脱岗驻村开展工作 。 派驻 伯党乡闫庄村 第一书记付保瑞，局投资管理中心主任； 花园乡陈庄村 第一书记胡中振，花园所副所长； 王桥镇杨官庄村 第一书记魏绪国，王桥所所长；花园乡牛刘村第一书记时广华，整理中心工作人员 。 在 按相关规定要求， 我局为第一书记和工作队员 每月发放 500元生活补贴 。 全局共有 81名党员干部入村开展结对帮扶任务 ， 2023年我局累计投入40余万元用于帮扶村基础设施改善和帮扶干部生活补贴等 。 每年定期听取第一书记驻村 工作汇报，专题研究驻村工作。\n\n在局党组和帮扶村当地党委政府的领导下，坚持以党的建设为龙头，统筹推进农村经济建设、社会建设、文化建设和生态文明建设及脱贫攻坚成果与乡村振兴工作为抓手，认真履行驻村工作职责，确保了驻村工作健康有序开展，工作也取得了初步成效，得到了乡党委、政府和群众的一致好评。现将有关情况汇报如下：\n\n一、帮扶村基本情况\n\n（ 1）伯党乡闫庄村位于民权县城南8公里，全村耕地面积3911亩，主导产业是 特色山药种植、 苗木种植、 小麦、花生、大蒜等农作物种植等 ，农户 1080户，总人口3791人；全村有 安庄、午庄、张连池、候庄、孙庄和闫庄 6个自然村、10个居民小组，贫监测脱贫户3 2 户防返 63 人， 监测户 8 户 2 9 人 。\n\n（ 2）花园乡陈庄村，距离乡政府所在地3公里，辖郭庄村、陈庄村、吴庄村、罗庄村4个自然村、8个村民组，全村共有560户2526人，3290亩耕地，村两委班子5人，村党员46人。 防返贫监测脱贫户 13 7 户 441人 ， 监测户 1 4 户 2 9 人 。\n\n（ 3）王桥镇杨官庄行政村下辖1个自然村，6个村民组，位于民权县王桥镇南部，距镇政府约2.5公里，南接黄河故道，北依焦庄村，东靠林七镇伏庄村，西邻郝庄村，距民权县城区仅5公里。我村现有人口2113人，全村可耕地总数1785亩，2021， 防返贫监测脱贫户 44户14 0 人 ，监测 4 户 14 人。\n\n（ 4） 花园乡牛刘村 ， 位于民权县 花园乡西 北部，距镇政府约 3 公里 ， 牛刘 村现有住户 231 户 ， 人口 1105 人， 防返贫监测脱贫户 33 户 95 人， 监测 5 户 1 8 人。\n\n二、工作开展情况\n\n（一）加强组织领导。民权县自然资源局 完善领导小组，建立工作专班，局党组多次召开班子会、分管领导多次召开有关业务部门负责人加压工作会。研究巩固拓展脱贫攻坚成果与乡村振兴工作会议， 全县脱贫攻坚成果与乡村振兴有效衔接工作时间紧、任务重、要求高，我局高度重视，召开动员会进行传达学习，压实工作责任，驻村工作队具体负责本村的防返贫监测贫困户和三类户的排查工作，全局 8 1 名帮扶干部全部深入到户，高标准完成了工作， 以基层党建为统领，强化责任意识，抓做风建设。充分调动党员干部积极性，深入开展 巩固脱贫攻坚成果与乡村振兴有效衔接 工作。\n\n（二）认定程序严谨。严格按照 “五步工作法”和省、市、县文件要求。根据乡政府指导，通过三类户农户申请，责任组认定，经村民代表大会评议，做到过程严谨，结果透明，积极开展大走访大排查活动。按照县、乡 村 振兴局的统一部署，通过 “三清零”等活动入户走访排查，对长期无人居住房屋悬挂无人居住牌，积极排查破旧房屋，对无人居住集中拆旧，建立三类户台账等工作。\n\n（三）村庄规划编制情况\n\n我局根据上级下达的一系列文件和政策措施严格贯彻落实。村庄分类及布局规划已形成初步成果， 组织编制 29个实用性村庄规划，目前已有通过专家评审。\n\n2021年6月民权县村庄分类布局规划正式启动，并开展调研、座谈和基础资料收集工作等；2021年11月成果形成后与各乡镇进一步对接确认；2022年2月19号通过专家评审；2023年6月15日通过中共民权县委城乡规划委员会2023年第二次会议审议。\n\n该规划涉及 2个街道办事处、11个镇、6个乡共计526个行政村，其中集聚提升类村庄64个行政村，特色保护类村庄29个行政村，城郊融合类村庄89个行政村，整治改善类村庄213个行政村，搬迁撤并类村庄131个行政村。 在规划编制中，预留了 5%新增计划 用于保障新增农村村民住 宅用地需求和保障乡村重点产业和项目用地需求， 2023年度至今我县共获得批复15个批次，其中省批转用并征收9个批次，市批农用地转用6个批次，总面积184.3665公顷。今年我县已上报13个批次，待批复6个批次，其中省批转用并征收3个批次，省批征收1个批次，市批农转用2个批次，总面积78.7584公顷。 202 3 年，为巩固脱贫攻坚成果 与乡村振兴有效衔接 ，自然资源部门今年先后出台了《河南省自然资源厅关于用好用活自然资源实现巩固拓展脱贫攻坚同乡村振兴有效衔接的通知》（豫自然资办发〔 2021〕20号）、《河南省自然资源厅关于进一步改进土地利用计划和报批管理切实保障重点项目用地需求有关问题的通知》（豫自然资办发〔2021〕42号）文件。自然资源部门出台以上文件目的，对符合“一户一宅”要求的农村村民住宅建设用地可由县乡人民政府批准农转用，所需计划指标单列，单独组卷报批，年度内实报实销，根据《河南省自然资源厅关于 民权县第三批城乡建设用地增减挂钩项目区实施规划及建设拆旧的批复 》（豫自然资 函 〔 202 3 〕 242 号） 文件批准拆旧区面积 2.1913公顷、新增耕地面积2.1493公顷，《河南省人民政府 关于 民权县 2021年度第三批乡镇建设征收土地的批复 》（ 豫政土 〔 202 1 〕 279 号） 3.8468公顷建设征收土地，《商丘市人民政府 关于 民权县第一批乡镇农用地转用的批复 》（ 商政土 〔 202 3 〕 69 号） 5.3515公顷转为建设用地，保障 用地项目。 供应土地 2530.11 亩、收缴出让金 3.6 亿，保障农村一二三产业融合发展项目 。\n\n（四） 用地保障情况情况\n\n一是 “争”指标。 争取将我县重点项目纳入 “省重点保障项目用地清单”，使用国家配置的年度计划指标。 二是 “挖”潜力 。 加大各乡镇拆旧复垦力度，开展旧村改造，拓宽城乡建设用地增减挂钩指标渠道。 三是 “提”效率 。 对纳入 “省重点保障项目用地清单”的项目用地，单独组卷，建立绿色通道，缩短用地报批时间， 专人负责，全程跟踪服务，切实做到应保尽保。\n\n工作亮点：一是 通 过不懈努力， 2023年我县交易节余指标73亩，交易金额1460万元。 二是全力推进 全域土地综合整治 。 民权县绿洲街道吴庄等 12个村全域土地综合整治试点项目 位于民权县绿洲街道办事处，涉及 吴庄等 12个行政村 ， 项目区 总 规模 3659.81公顷， 该项目于 2021年1月4日被自然资源部备案纳入国家试点， 项目主要涉及农用地整理、建设用地复垦、人居环境提升、生态保护修复等工程类型 ， 方案优化后项目预算总投资 9.8亿元， 目前已累计投入资金近 4亿元。今 年 2 月 份 ，全省国家级全域土地综合整治试点现场会在我县成功召开。 同时， 20 2 3年我县荣获“全国首批自然资源节约集约示范县”称号。\n\n（五） 帮扶成效\n\n① 通过结对帮扶，进一步密切了干群关系， 脱贫户和监测户都能充分享受国家帮扶政策， 人居环境得到极大改善。 ②引导王桥镇杨官庄村流传土地 1100亩进行特色种植，拓宽了群众增收渠道，确保了脱贫户、监测户收入稳定增长；③指导花园乡陈庄村实施了整村推进项目，新增增减挂钩拆旧指标50余亩，为乡镇 一二三产业融合发展 提供 了用地保障； ④帮助伯党乡闫庄村打机井 12眼，新修农村道路4.3公里，提高了粮食产能，方便了群众出行；⑤出资20万元资金，帮助花园乡牛刘村实施了村室提质改造工程、村内下水道新修工程和村内道路修缮工程等。\n\n三、局领导下乡督导结对帮扶工作\n\n党组书记、局长朱昆郎多次深入伯党乡闫庄、花园乡陈庄村、王桥镇杨官庄村督导下乡、检查脱贫攻坚成果与乡村振兴有效衔接工作，并委托分管脱贫攻坚成果与乡村振兴有效衔接工作的杨连山，分两次听取驻村工作队及驻村第一书记关于驻村的工作汇报。局班子成员也经常下乡督导脱贫攻坚成果与乡村振兴有效衔接工作，并深入所帮扶的脱贫户、监测户家中开展帮扶工作。\n\n四、下步打算\n\n一是 持续 做好驻村各项日常帮扶工作。 二是 按照时间任务节点扎实推进村庄规划编制及报批工作；持续做好乡村振兴和示范带美丽乡村技术指导工作。 三 是 围绕县域经济发展大局，积极争取项目用地指标，加快土地报批进度，缩短用地报批时间，专人负责，全程跟踪服务，切实做到好重点项目、民生工程 、农村一二三产融合发展 用地应保尽保 。\n\n202 3 年 12 月 8 日"
  },
  "S06": {
   "heading": "minquan.gov.cn_民权县人民政府：民权县自然资源局对县十六届人大六次会议第19号建议的答复",
   "date": "2025-07-20",
   "source": "minquan.gov.cn_民权县人民政府",
   "url": "https://www.minquan.gov.cn/bmxxgk/zrzyj/fdzdgknr37/jytabl37/rddbjybl37/content_30173",
   "body": "您的位置： 首页 > 部门信息公开 > 自然资源局 > 法定主动公开内容 > 建议提案办理 > 人大代表建议办理 > 详细内容\n\n搜索过于频繁，请输入验证码\n\n政府信息公开指南\n\n政府信息公开制度\n\n法定主动公开内容\n\n年度计划总结\n\n决策部署落实情况\n\n建议提案办理\n\n人大代表建议办理\n\n政协委员提案办理\n\n财政专项资金\n\n权责清单及动态调整\n\n公共服务和中介服务清单\n\n行政权力运行\n\n行政权力运行目录\n\n行政权力运行流程图\n\n行政权力运行结果\n\n双随机、一公开\n\n随机抽查清单\n\n网上政务服务\n\n脱贫攻坚成果\n\n基层政务公开\n\n自然资源领域\n\n国土调查基本信息\n\n国土调查地类信息\n\n地理国情监测成果\n\n自然资源登簿前公告\n\n自然资源确权登记结果公开\n\n国有土地使用权出让和划拨\n\n土地供应计划\n\n土地出让公告\n\n土地出让结果\n\n划拨用地批前公示\n\n划拨用地结果公示\n\n住宅用地信息公开\n\n国土空间规划编制\n\n县级国土空间总体规划\n\n详细规划(城镇开发边界内)\n\n国土空间专项规划\n\n乡(镇)国土空间总体规划\n\n建设项目用地预审与选址意见书\n\n建设用地规划许可\n\n建设工程规划许可\n\n乡村建设规划许可\n\n矿山地质环境保护与土地复垦方案审查\n\n农村集体经济组织兴办企业用地审核\n\n乡(镇)村公共设公益事业建设用地审核\n\n临时用地审批\n\n农用地转用审批\n\n农村集体土地征收\n\n征地管理政策\n\n征地法定公告\n\n征地工作程序\n\n征地申报批准相关材料\n\n补充耕地项目\n\n设施农业用地监管\n\n开采矿产资源审批\n\n矿业权出让信息\n\n地质灾害预防和治理\n\n年度地质灾害防治方案\n\n生态修复重大项目工程\n\n批准服务信息\n\n招标投标信息\n\n重大设计变更信息\n\n施工有关信息\n\n质量安全监督信息\n\n工程竣工信息\n\n重大建设项目\n\n办理过程信息\n\n批准结果信息\n\n建设用地(含临时用地)规划许可证核发\n\n建设工程规划许可证核发\n\n乡村建设规划许可证核发\n\n征收土地信息\n\n征收土地预公告\n\n征地补偿安置方案\n\n征地批准文件\n\n农用地转用方案\n\n征收土地方案公告\n\n政府信息公开年报\n\n30702110200041142100013000000/2025072000000595\n\n来源： 发布时间：2025-07-20 浏览次数： 次 【字体： 小 大 】\n\n民自然资〔2025〕76号                 签发人:朱昆郎\n\n办理结果:B\n\n对县十六届人大六次会议\n\n第19号建议的答复\n\n程中华、于保民、张胜利、张海刚、王保平、郭锐、李付安、董亚威、高强、康亚代表:\n\n您提出的关于“绿洲街道办事处全域国土综合整治给予扶持”的建议收悉,现答复如下:\n\n一、试点项目前期申报情况\n\n根据上级精神,2020年,我县申报了民权县绿洲街道吴庄等12个村全域土地综合整治试点项目,项目主要涉及农用地整理、建设用地复垦、人居环境提升、生态保护修复、产业导入等工程类型,该项目于2021年1月4日经自然资源部备案纳入国家试点。\n\n二、当前项目推进情况\n\n该项目纳入国家试点后,上级一直没有批复基本农田调整以及项目实施等具体方案,后来,国家将全域土地综合整治项目的实施方案批复权下放到省厅,经省厅多次研究修改,于2024年下发了《全域土地综合整治实施方案编制大纲》,我县按照省厅最新的申报和编制要求,对绿洲全域土地综合整治项目进行了重新规划修改,修改后的民权县绿洲街道全域土地综合整治项目,整治区域由原来的12个行政村增加到15个行政村。\n\n根据省自然资源厅关于全域土地综合整治最新政策,我局会同农发行、绿洲街道办事处等部门对项目区内耕地、永久基本农田、建设用地优化布局、产业导入子项目实施方案等重新进行优化完善,目前,该项目最新规划布局和实施方案已完成,已通过市局评审并上报到省厅待批复。\n\n三、项目批复后享受的优惠政策\n\n民权县绿洲街道全域土地综合整治项目,根据项目区土地\n\n利用、产业发展、人居环境整治等需求,共规划布局19个子项目,项目预算总投资61672.73万元,资金来源主要包括银行贷款38115.00万元,非贷款金额23557.73万元(其中平台公司配套资本金10587.74万元,企业投资12969.99万元)。以上资金落实后,项目区内用地布局优化、生态保护修复、农村人居环境改善类、产业项目导入等子项目将全面实施,有效助力乡村振兴。\n\n2025年7月19日\n\n联系单位及电话:民权县自然资源局    8556625\n\n联系人:陈玉东\n\n抄送:县政府分管领导(1份),县人大选工委(1份),县委 县政府督查局(1份),绿洲街道办事处(1份)"
  }
 },
 "11": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨湖北省孝感朱湖办事处：用全域整治绘就“朱湖样板”",
   "date": "2024-09-06",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5341710",
   "body": "湖北省孝感市孝南区朱湖办事处全域土地综合整治于2020年9月获批省级试点，2021年1月纳入自然资源部部署的乡镇试点。试点积极践行习近平生态文明思想，聚焦山水林田湖草等全要素资源，统筹运用农用地整治、建设用地整治、生态保护修复和环境整治等手段，建设规模7.53万亩，投入资金11.72亿元，以达成保护耕地、节约集约用地、改善生态环境的核心目标。三年来，在区委区政府的高度重视和统筹下，试点坚持“12345”工作理念，围绕乡村振兴战略，通过“1+N”综合整治模式，构建“农田集中连片、建设用地规模集聚、空间形态高效集约、生态环境天蓝地绿、景观风貌健康美丽”的国土空间新格局，推动朱湖人口集中、产业集聚、资源集约，迈实乡村全面振兴新步伐，推进农业农村现代化。作为“土地综合整治+乡村振兴”典型案例，试点在吸引社会资本参与生态修复、涉农资金整合打包、鼓励群众参与共同缔造、生态产品价值实现等方面形成了可供推广的经验。\n\n和美乡村三合新村\n\n一、案例背景\n\n（一）本地区基本情况\n\n试点位于湖北省孝感市孝南区朱湖办事处。孝南区是孝感市唯一市辖区，国土面积1018平方公里，总人口96.9万人。该区位于武汉都市圈核心圈层，融入武汉发展指数居全省35个县市区第一，2022年地区生产总值突破530亿元、地方一般公共预算收入突破23亿元，在全省县域经济考核和营商环境评价中均位居第十，先后获评国家现代农业示范区、国家农村一二三产业融合发展试点区、全国科技进步先进区、全国知识产权试点城市、全国农村集体产权制度改革整县推进试点、全国营商环境百佳试点县市。该区还是全国唯一授牌的“中国生活用纸生产基地”，2022年被中国轻工联合会授予“中国生活卫生用纸（品）产业之都”。项目实施区域朱湖办事处处于江汉平原下游、府河和沦河交汇口，拥有长江中游地区典型的河流湿地风貌，区域内有“东方净土、湿地奇景”之美誉的朱湖湿地公园。该地还是中华老字号“孝感米酒”工业化生产发源地，是国家地理标志保护产品朱湖糯米原产地。因此，该区域在保护耕地资源、促进生态提升方面具有一定的典型性和代表性。\n\n（二）存在的空间问题\n\n试点区域具有典型的河流湿地风貌，在保护河流湿地与周边农田建设、农旅康养设施建设过程中存在明显的土地资源利用冲突，生态保护与经济发展的矛盾是试点亟待解决的重要问题。此外，该区域还存在农田分布零散、田间沟渠淤积、基础设施不完善，自然村湾规模小、布局零散、空心率高，湿地水质欠佳、配套设施陈旧，生态旅游优势未充分发掘等问题。\n\n（三）试点目标任务及总体安排\n\n为进一步将湿地优势、生态优势转化为发展优势，孝南区全方位整合涉农资金，分三年周期，一体推进耕地保护、高标准农田、乡村旅游、生态修复等工程，构建“土地综合整治+乡村振兴”建设模式，打造现代农业发展型、乡村旅游发展型及生态环境保护修复型土地综合整治典范。\n\n二、主要做法\n\n（一）高位统筹明制度\n\n孝感市、孝南区两级党委政府将全域土地综合整治工作纳入“一把手”工程，主要领导直接研究、直接部署、直接过问、直接推动。成立全域土地综合整治领导小组，建立“政府主导、部门协同、上下联动、社会参与”的工作机制，建章立制推动工作规范化，责任分工促进工作具体化，高位统筹推动工作长效化。先后研究制定《关于加快推进全域国土综合整治及耕地占补平衡项目建设的通知》《关于做实做优全域土地综合整治试点放大综合效应的通知》等文件，切实做到严控工程建设质量、强化施工监管，加快项目建设、规范项目管理。\n\n（二）规划引领重谋划\n\n坚持规划统筹，优化空间、功能、产业三大布局，放大经济、社会、生态三大效益，强化人力、物力、财力三大保障，统筹交通同网，新建“五大畅通工程”，促进孝汉同城化；统筹耕地保护，实施闲地变耕地、小田变大田、低效田变高产田“三大整治工程”，促进农业高效化；统筹生态修复，实施府沦两河综合治理、主干渠系整治、湿地保护修复“三大活水工程”，促进流域生态化；统筹产业发展，实施特色种植养殖、糯稻精深加工、文旅康养“三大兴业工程”，促进一二三产业融合；统筹镇村建设，实施镇区改造、村湾集并、功能配套“三大安居工程”，促进就地城镇化；统筹基层治理，实施党建引领、共同缔造、农场改革“三大赋能工程”，促进治理精细化，推动形成“空间高效集约、产业特色鲜明、环境天蓝地绿、群众安居乐业”发展新格局。\n\n湿地水体环境整治前（上）后（下）\n\n（三）资金多元促效应\n\n项目充分利用现有政策，通过公开招标方式引入孝感东宇建设投资有限公司作为投资运营主体，整合交通、水利、农业等各部门涉农资金，把全域土地综合整治与乡村振兴、美好环境和幸福生活共同缔造、现代农业示范区建设、“农旅养”融合结合起来，做足“整治+”文章。围绕湿地公园开展湿地保护与修复，既全面刷新乡村“颜值”，又放大全域土地综合整治平台效应，大力推动了当地农村经济发展，促进乡村振兴。\n\n（四）融合发展赋动能\n\n结合朱湖全域土地综合整治成果，探索将湿地公园、朱湖糯米、孝感米酒、花卉苗木、水产品等农林牧渔系列产品打包融合。在农业产业链方面，大力促进国家地理标志保护产品“朱湖糯米”产业发展，从种肥到产供销全程加强社会化服务，建立健全农产品质量追溯体系，引领群众追求高质量发展，打造全节点、全生命周期服务的农业产业链。在农旅产业基底方面，围绕湿地，打造四汊、五台区域水上观光游，塘口、洋湖区域稻田观光游，金卉、金茂区域林地观光游和347国道沿线莲蓬、菱角采摘观光游等5处主要的农旅融合生态旅游观光区。村集体与村民成立生产合作社或公司，对整合后的资源进行开发运营，按一定比例分配股权，引进农旅产业并培育休闲体验、户外拓展、农业科技体验、餐饮、购物、住宿于一体的高成熟度的三产产业群。通过产业化经营吸引游客“沉浸式消费”“体验式消费”，促进了生态产品、农业产品的价值提升，推动一二三产业融合发展，共建生态、生产、生活相互共融的田园活力村镇，增添乡村振兴高质量发展的“绿色动能”。\n\n（五）创新模式求实效\n\n以试点为契机，成立湖北省首家县级全要素自然资源投资公司，多渠道引入社会资本，构建孝南区自然资源开发建设投融资体系，按照“行政+技术+市场”的模式，探索“四资转化”投融资模式（即资源变资产、资产变资本、资本变资金），撬动更多社会资本或金融资金投向乡村振兴、生态环保领域，实现“政府有作为、部门有业绩、国企有效益、合作有分成”的目标。\n\n（六）全面总结推经验\n\n通过试点实践，适时总结出“12345”工作理念，并运用于项目实施。“1”是抢抓“一个机遇”，即抢抓全域土地综合整治是优化国土空间格局和土地要素保障的机遇；“2”做到“两全”，即精心做优全域规划、聚力做成全域整治；“3”是走出“三个误区”，即走出“全域土地综合整治是一个工程工具、是一个简单的项目、是政府的命令和决定”这三个误区；“4”是解决“四个问题”，即解决工作一盘棋的大局意识不到位、工作目标认领不到位、工作责任锁定不到位、工作时序启动不到位四个问题；“5”是锁定五个目标，即实现耕地保护目标、生态修复目标、产业导入目标、和美乡村目标、基层治理目标。同时，在试点实施过程中，坚持以人民为中心的发展思想，坚决做到谋划项目前、先宣传发动群众，征地拆迁前、先启动还建房，土地整治前、先引进农业种植主体，全面保障群众利益不受损，并通过细致的工作和美好的前景，吸引群众共同参与，让群众共同享受乡村振兴的发展红利。\n\n三、取得成效\n\n（一）基层治理水平全面增强\n\n通过整合村湾进一步建强建优基层党建平台，打造1个有特色的高标准党群服务中心，提档升级3个社区服务中心，建立了“党组织+党员+群众”共谋共建机制，成立红白大事、矛盾调解、民主管理等自治协会，动员新乡贤、群团组织、基干民兵、志愿服务队伍共同参与基层治理，引领乡村治理走上规范化、制度化、和谐化之路，促进项目顺利实施。同时，按照兴产业、倡文明、树新风理念，依托基层党建平台建立朱湖农场场史馆、农耕文化园等设施，激发当地群众的归属感、荣誉感和自豪感，基层治理人人参与、幸福生活人人享有的生动局面全面形成。\n\n（二）生产生活条件大幅提升\n\n通过坑塘水面整治、土地平整、沟渠道路提升改造等，着力解决耕地碎片化、生产低效化等问题，推动闲地变耕地、小田变大田、低效田变高产田，全部形成“田成方、林成网、路相通、渠相连、旱能灌、涝能排”的高标准农田。实施村庄拆迁集并，优化农村建设用地布局。合理采取拆迁撤并的方式，将零散的农村居民点进行集并，解决村庄空心化问题，实现了“一主一副多点”的规划格局，建成还建小区4个，打造和美乡村10个。在节约农村建设用地的同时，集中资金实现保留村庄的上下水系统、村庄道路、电力设施等公共服务设施的集中提升配套。\n\n整治后的田块及基础设施\n\n（三）共同缔造成果充分享有\n\n坚持决策共谋，以“群众满不满意”为标准，先后于2021年12月和2022年3月、4月、5月、7月，5次就全域整治设计征求群众意愿。从初步征求、反馈意见，到再次征求、反馈意见，直至最终征求、反馈意见，将群众需求融入整治项目中，确保群众满意。坚持发展共建，充分调动群众的积极性、主动性、创造性，引导群众主动投身到全域建设、产业发展等工作中来，有效促进群众增收。坚持建设共管，开辟专门的村民议事活动场所，聘任湾长、路长、河长、田长等“小六长”，推出由回乡创业人士、老党员、老教师组成的新乡贤，制定了《村民公约》《文明守则》，共管合力推动全域项目管理。坚持效果共评，每月评选“门前零堆放、环境零污染、安全零事故、邻里零纠纷、群众零非访”的“五零”模范户等荣誉称号，在潜移默化中弘扬文明乡风，形成良好风尚，助力全域美丽乡村建设。坚持成果共享，围绕“1+N”做足全域整治文章。以“朱湖糯米”农业产业链为抓手，以湿地公园为核心，形成“以农促旅、以旅兴农、农旅融合”的乡村振兴格局，实现整治成果全民共享，人民群众大幅增收。\n\n村民共管、共评议事栏\n\n（四）绿色生态发展实现共赢\n\n通过规划统筹的手段，以大都市圈中的全域土地综合整治调和多元化的土地利用需求，实现土地资源的合理配置和利用。试点围绕加强朱湖国家湿地公园全过程保护修复和适宜利用，打造了2000亩湿地大湖、1200亩多功能圩田、2800亩生态旅游观光基地的“生态旅游”景区。围绕朱湖富硒土壤、地热、湿地、碳汇等自然资源，引进战略开发商，植入“中国零碳小镇”概念，结合湿地公园打造朱湖地热温泉旅游项目。朱湖湿地流域水质从劣Ⅴ类提升至Ⅲ类，防洪标准由20年一遇提高到30年一遇，湿地核心区增加到5000亩，碳汇量达6685.5吨、新增碳汇量1348吨，碳汇能力提升25.3%。预计就近新增就业岗位1000余个，接待游客每年10.65万人次，创造旅游产值每年2130万元，实现利税120万元以上，带动相关产业收入约每年600万元。\n\n湿地大湖生态旅游观光基地\n\n（五）农业融合发展带动增收\n\n通过全域土地综合整治“1+N”模式，放大“朱湖糯米”国家地理标志保护农产品优势，做精做优朱湖糯稻特色农业，发展4万多亩糯稻种植基地，带动周边形成8万亩糯米种植产业，为麻糖米酒、休闲糕点、功能饮品等50余家糯稻深加工企业供应优质糯稻，带动上下游配套企业120多家，初步形成“育繁推一体化、产供销一条龙”糯稻全产业链，目前年产值突破40亿元。加强朱湖富硒品牌建设，激活富硒产业，开发更多富硒农产品，提升土地自有价值和生态价值，支持糯米下游企业做大做强，加粗拉长“一袋米”全产业链，为乡村“五个振兴”提供坚实物质基础。建立土地流转指导价制度，扶持原丰粮油等合作社，带动土地流转14315亩，农户每亩流转保底收入在800元以上，实现农民年增收589万元。\n\n（六）粮食安全底线不断夯实\n\n在消除耕地碎片化、落实耕地保护，改善农村基础设施条件和农村人居环境、建设美丽宜居乡村的同时，通过盘活农村“沉睡资源”，促进土地要素高效合理配置，保障粮食生产安全。项目实施后，整治出集中连片耕地380块，耕地碎片化率降低27.9%，新增耕地5090亩、提质改造4000亩，粮食年产能增加560万公斤。\n\n四、适用条件和推广前景\n\n试点秉持“绿水青山就是金山银山”理念，利用政策机遇，立足大都市圈区位优势、河流湿地资源禀赋，引入社会资本，突出耕地“三位一体”保护，增加耕地数量，提高耕地质量，改善农田生态，适应发展现代农业和适度规模经营需要，打造以湿地公园为核心的生态友好型高质量现代农业发展区。整治后，可有效改善平原湖区耕地碎片化问题，进一步盘活土地存量，挖掘土地增量，同时也能有效改善湖区生态，进一步完善生态功能、提升生态质量，推动实现人与自然和谐共生，走出一条乡村振兴的生态致富康庄大道，对于在河流湿地、平原湖区大力推进耕地保护和生态建设具有一定的推广意义。\n\n（湖北省自然资源厅推荐）"
  },
  "S03": {
   "heading": "zhengxie.xiaonan.gov.cn_孝感市孝南区政协：全域国土空间综合整治的孝南实践",
   "date": "2022-03-21",
   "source": "zhengxie.xiaonan.gov.cn_孝感市孝南区政协",
   "url": "http://zhengxie.xiaonan.gov.cn/?Article126/1603.html",
   "body": "全域国土空间综合整治的孝南实践\n\n供稿单位：陆新刚 万清平　责任编辑：陆新刚　发布时间：2022-3-21　点击次数： 次\n\n3月上旬，从湖北省自然资源厅传来消息，由于孝南区全域国土空间综合整治试点工作速度快，效果好，质量高，被确定为全省现场会举办点。\n\n孝南区全域国土空间综合整治，何以得到省委、省政府的认可？在这个春暖花开，阳光明媚的季节，笔者行走澴川大地，访干部，问群众，看实景，寻找给人启迪的点点滴滴。\n\n精打细磨，孝南全域乡村规划入选国家典型案例\n\n孝南是孝感唯一的市辖区，最大的长处是交通便捷，区位优越；最大的短板是用地指标不足，发展空间受限。\n\n经济发展重点靠项目，项目建设要用地，孝南提出了加快推进县域经济 “挺进前十冲百强”、建设百万人口综合型区域中心城市，挺进全省一类县市区前列目标。如何实现这个目标？\n\n区委、区政府在用地上做发展文章，借国家和湖北省全域国土空间综合整治工作东风，以全域乡村规划和国土空间规划为引领，实施规划先行、全域治理方略，既解决农村土地碎片化、空间布局无序化、人居环境杂乱化的问题，助力乡村振兴，增加耕地面积和粮食产量，又腾笼换鸟，挪出建设用地指标，推动经济高质量发展。\n\n孝南区遴选资质高、实力强、经验丰富的规划设计单位，通过走访座谈、现场踏勘、多方对比等方式，精打细磨，群策群力，数易其稿，最后完成制定了《孝感市孝南区全域村庄布局规划》。这个规划重点解决了村庄分类和存量建设用地两大问题，避免村庄建设无分类、无重点、无方向展开，被入选为国家典型案例。\n\n为了加快对接武汉，融入武汉，结合实际情况，孝南加大朱湖全国全域国土综合整治项目试点建设力度，先期摸索经验，再逐步向全区推开。朱湖项目区涉及土地平整面积 7.2万亩，计划搬迁19个生产队2691户，拆除老旧企业18家，拆迁总面积61.1万平方米，配套改造完善“一主一副”2个集镇，建成4个还建小区，打造10个和美村庄。\n\n孝南将全域国土综合整治试点工作，提高到与疫情防控、优化营商环境等一样重要的地位，成立了由区委书记、区长亲任双组长的工作专班， 2名区级领导在朱湖现场统筹指挥，采取项目包保、责任到人、进度到天、专班督战的方式，推进各项工作落实落细。\n\n和谐征迁，全域国土空间综合整治赢得群众支持\n\n美好的蓝图已经绘就，落实的前提和关键，就取决于村民的支持与配合 ——需要他们征迁房子，拆除附属物，流转土地。\n\n“政府将最好的地段拿出来，还建给老百姓。”朱湖党工委书记陈辉说 ： “我们把压力留给自己，把利益让给群众，还建区由一流公司高标准设计，高标准承建，并邀请村民现场实地监工。\n\n征迁工作开展之前，专班就将全域国土综合整治带来的发展机遇，原汁原味地宣讲给群众。参考孝感城区老澴河改造及朱湖周边乡镇拆迁还建办法，制定了符合客观实际的补偿标准。对迁移后的农户，充分考虑他们今后的生活出路：耕地集中整理后将流转给大型国企、农业公司，支付农户相应的流转费；村民想就业的，优先在辖区企业打工；想种田的，可以以合作社的形式，在愿意的地方反向流转土地自己耕种。\n\n“我家的还建区在四汊集镇沦河堤下，那里水清、树多、风景好，将来搬迁后，早晚到堤上散步，很快活的！”展望未来的日子，叶台生产队村民王付明说，从农村到集镇，购物、看病、小孩上学都方便，所以，他很快就签订了征迁协议。“以后可以在集上吃早点，不用每天做三餐饭了。”开着玩笑调侃起来的老王，脸上荡漾着满意和幸福。\n\n在朱湖农场，有王付明一样想法的人很多，但还有一类人也不少，让指挥部很头疼：一些老人，故土难离。\n\n为了解开他们的思想疙瘩，包保干部可没少下功夫。他们放弃周未和节假日休息时间，经常晚上到村民家中做工作。\n\n有一户位于汉川渠整治核心区附近的村民，尽管包保的农场党工委副书记彭莉萍去做过多次工作，但她始终 “油盐不进”。临近春节，如果工作再做不通，可能会影响年后的施工，这可把彭莉萍急坏了。\n\n年前的一个周末，彭莉萍正在这位村民家做工作，母亲打来电话，说跟媒人约定好了时间，催她赶快回家相亲。 “现在手头工作实在很急，这事等闲点再说！”说完，她仓促挂断了电话。\n\n“孩子，房子我同意拆了，我家的事就不要你再操心。天这么冷，以后出门要穿暖和点！”听到彭莉萍母女的对话，户主拿了件自家的衣服，边给她披上边说：“我也是当妈的人，我家丫头也不小了，一直在广东打工，几年来总是说工厂忙，没时间回来相亲。那个臭女子，我骂也不是，不骂也不是！”\n\n截至 2月底，朱湖共签定拆迁协议985户20万平方米，超510户的原定日历目标进度475户，其中已拆除650户，第一期菱角湖、三合片区2.5万亩土地平整基本完成，没有出现大的矛盾纠纷，实现了和谐征迁。\n\n激情干事， “孝南工作十则”催生“孝南速度”\n\n彩旗招展，机械轰鸣，人声鼎沸 ……春节以来，在朱湖全域国土综合整治项目建设现场，1100多名施工队伍、400多台套铲车、运输车、挖掘机等组成的庞大队伍，打响项目建设的大会战。\n\n去年换届后，孝南区委适时提出了 “孝南工作十则”，想干事，能干事，干成事，激情创业成为党员干部的共同意念，全区上下形成了奋发向上、你追我赶的热潮。\n\n朱湖项目整治区成为锻造孝南铁军队伍的演兵场，会战启动后，工作专班各成员单位迅速投入战斗。从正月初三开始，区生态环境保护分局施工队伍就进场复工，加紧开展汉川渠生态修复、主干渠清理，有序推进 G347公路沿线综合治理。\n\n“我们要抢在降雨量较为集中的时间到来前，完成这项重要任务，为综合整治当好水畅其流、生态保护的先锋。”区生态环境保护分局局长周洁说，“尽管这段时间乍暖还寒，但大家依然热情似火。”\n\n春节还没过完，区交通运输局就调集 100多台机械、300多名工程技术人员、施工人员，经常三班倒，通宵达旦24小时施工，开展主干渠绿道路基清理，加快湿地公园2条循环旅游公路、朱辛北路（S112公路延伸线）等道路建设施工。\n\n“材料要按时上报，数据要及时更新！”在指挥部办公室，区自然资源和规划局整理中心干部洪亮，正用嘶哑的声音跟同事交流。近段时间，他几乎每天吃住在项目现场，白天查进度，办手续，晚上整理资料，名字虽然叫洪亮，因为高强度的工作和高密度的讲话，声音变得一点也不“洪亮”。\n\n由于人员多，车辆多，进入施工现场的道路狭窄，时常出现交通阻塞的现象。为了保障材料能及时运进来，不影响施工进度，朱湖湿地办公室主任池清华尽管已经 57 岁了，但他依然白天、黑夜 现场协调车辆交通，全身都是灰，尽管戴着口罩，口中、鼻中也沾着泥。王小毛、王向阳，象这样 50 多岁，每天加班加点的干部，成为朱湖的常态。\n\n区审计局、区长兴投资公司、东宇建设公司 ……一位领导就是一个标杆，一个党员就是一面旗帜，各单位领导走在前面，其余专班干部丝毫也不甘落后，他们都放弃节假日休息时间，一门心思扎在工地，推进着项目平稳、顺利开展。\n\n“一天一个样，几天大变样，简直就是神速！”望着眼前不断变化的场面，四汊社区居民王大军竖起了大姆指：“干部们和施工队都了不起，要不了多久，我们这里就会成为世外桃源了！”\n\n草长莺飞，桃李芬芳，在这个激情燃烧的岁月，孝南正迈出矫健的步伐，迎接着更加充满希望的明天！\n\n【 打印页面 】　【 关闭页面 】　【 返回顶部 】"
  },
  "S04": {
   "heading": "epaper.hubeidaily.net_湖北日报：3万亩生态稻撑起孝感米酒产业 朱湖湿地成为土地综合整治典范",
   "date": "2025-09-15",
   "source": "epaper.hubeidaily.net_湖北日报",
   "url": "https://epaper.hubeidaily.net/pc/content/202509/15/content_326236.html",
   "body": "朱湖湿地成为土地综合整治典范\n\n湖北日报全媒记者 刘胜 通讯员 李广\n\n9月10日，国务院新闻办公室举行新闻发布会，介绍孝感市结合全域土地综合整治，开展朱湖国家湿地公园保护修复的典型案例。\n\n朱湖湿地公园位于孝感市孝南区，历经10余年生态修复，如今每年旅游产值超过2000万元，3万多亩生态优质糯稻支撑起60亿元的孝感米酒产业，成为“土地综合整治+乡村振兴”的典范。\n\n壮士断腕：270种水鸟回来了\n\n“记忆中的朱湖，曾是另一番景象。”9月12日，站在绿意盎然的朱湖湿地菱角湖绿道上，70多岁的原居民周自桥感慨地说。以前为追求经济效益，朱湖及周边聚集着10多家小型电子厂、养猪场和奶牛场。工厂污水未经处理直排入河，清澈河水变得混浊不堪，养殖场粪便与废弃物随意堆放，空气中常年弥漫着刺鼻腥臭味。\n\n面对生态危机，朱湖办事处展现出“壮士断腕”的决心：关停搬迁8家企业、50家养殖场；拆除违建和拦水坝，整治河渠236公里；新建污水处理厂，改造厕所2400座；建设生态绿道36公里，修复湿地5000亩。生活垃圾全部集中进行无害化处理。通过清淤疏浚河道、治理黑臭水体、建设污水处理设施、实施土壤修复等一系列措施，空气中的腥臭味消失了，河水清澈了，鱼虾也重回游弋。\n\n3248公顷湿地保育区、627公顷恢复重建区、734公顷合理利用区，织牢野生动植物保护网。周边5000公顷农田取缔高残留农药，重建候鸟食物链；退田还湖，种植芦苇、荷花净化水质，为鸟类提供隐蔽巢址。天空重归湛蓝，272种水鸟在湖面嬉戏，一幅“水清岸绿、鱼翔浅底、天高云淡”的美丽画卷徐徐展开。\n\n点绿成金：好生态带来好产业\n\n环境好了，如何让百姓富起来？\n\n过去，朱湖农业以传统粗放型种植养殖为主，大量依赖化肥、农药，农产品品质不高、经济效益低下，对土壤和水源造成二次污染。\n\n为彻底改变这一局面，朱湖办事处借助湿地资源发展生态农业：朱湖糯米、富硒莲藕、清水养殖的鱼虾……成市场抢手货。其中，朱湖糯米更是支撑起孝感米酒产业60亿元产值，带动40万人就业。\n\n种田大户饶章伟说，以前土地零散，最大的一块田才几十亩。经过整治，他一口气流转1000多亩，机械化种田非常方便！农户饶红安说，以前种田不赚钱，现在价值提升了，去年200多亩糯米稻纯收入20多万元。\n\n朱湖办事处将生态农业与乡村旅游结合发展观光农业。夏天，万亩荷塘碧连天，吸引游客前来赏荷采莲；秋日，金色稻浪翻滚，3万亩糯稻飘香，游客可以体验农耕乐趣，品尝农家美食。这种“农业+旅游”模式，不仅拓宽农民增收渠道，提升农产品附加值，更让游客在亲近自然的同时增强生态保护意识。\n\n朱湖国土综合整治项目指挥部负责人洪亮透露，如今湿地公园每年旅游收入超过2000万元。\n\n全域整治：让叶子变票子\n\n秋初的朱湖，河清渠畅，稻谷飘香，3万多亩糯稻田即将开镰。\n\n这里地处云梦泽，历史上是洪泛区。上世纪50年代末搞湖区开发，“你垦一块他掘一块，谁挖出来是谁的。”到了80年代，家家挖鱼塘，后来鱼塘废弃，耕地变得千疮百孔。一次次无序开发，造成耕地碎片化。随着乡村人口减少，抛荒弃耕越来越多。\n\n朱湖国土综合整治项目总面积7.53万亩，被规划为特色糯稻种植区、精品水产养殖区、湿地康养体验区、花卉苗圃示范区、城镇融合发展区。项目区内，生产、生活、生态空间统筹安排，连片一体整治，不留死角。农户全部搬进带电梯的楼房小区。\n\n“我们正在实现生态价值转换，树、花、草等都将变成票子。”朱湖办事处宣传委员刘畅介绍，朱湖将湿地公园整体打包，申报生态环保专项债项目，让资源变资产、资产变资本。\n\n3万多亩朱湖糯稻整体打包，成了银行争相贷款的香饽饽；生态品牌提升农产品价值，糯米、水产等溢价明显；引入社会资本，发展生态旅游、康养项目；通过碳汇、环保债等绿色金融方式反哺生态建设。\n\n孝南区国土整治中心主任张宏斌说，项目总投资11.9亿元，新增耕地9000多亩，这些耕地指标带来的实际收益超9亿元，有力保障孝感一批重大项目落地。"
  },
  "S05": {
   "heading": "news.hubeidaily.net_湖北日报：全国典型案例，朱湖入选了！",
   "date": "2024-06-26",
   "source": "news.hubeidaily.net_湖北日报",
   "url": "https://news.hubeidaily.net/mobile/c_2797965.html",
   "body": "全国典型案例，朱湖入选了！\n\n湖北日报客户端 2024-06-26 08:45:45\n\n湖北日报客户端讯（通讯员万清平）6月25日，国家自然资源部发布首批全域土地综合整治试点典型案例，孝感市孝南区朱湖办事处全域土地综合整治试点位居第11位。\n\n本次公布的典型案例共15个，湖北仅1个。均结合本地实际需求、资源禀赋，探索了一系列可供借鉴的做法，取得显著的综合效益。朱湖案例旨在建成以国家湿地公园为核心的生态友好型高质量现代农业发展区。\n\n朱湖全域国土综合整治项目建设周期3年，涵盖朱湖全域7.53万亩土地。在项目建设中，他们统筹推进朱湖国家湿地公园生态建设与水田路林村和人居环境系统治理，有效解决耕地碎片化、经营分散化、生产低效化、农村空心化等问题。\n\n在整治过程中，统筹优化生态、生产、生活环境，修复生态，增加耕地，促进增产增收。为此，我们加固了12公里的堤防，贯通了88公里的主干渠系，建设了130公里的生态河渠，治理了236公里的支渠，并完成了5000余亩的生态修复。通过零散村庄拆迁集并、坑塘水面整治、土地综合平整等措施，小田改大田、闲地变耕地，产生土地增减挂钩指标1820亩、占补平衡指标3270亩、“旱改水”指标3690亩，全域耕地面积由3.6万亩增至4.1万亩，其中粮食种植面积由2.5万亩增至4万亩。\n\n朱湖全域土地综合整治试点取得良好成效。朱湖国家湿地公园成为湖北省近零碳排放商业试点，武汉都市圈“后花园”，高标准农田成为孝南区国家糯米现代农业示范区主体，辐射周边形成30万亩“朱湖糯米”金色产业，1万亩花卉苗木、1万亩集优质水产和水生植物赏观采研于一体的休闲产业。与此同时，一座新增居民5000余人的功能城镇和8个省市区级和美示范乡村脱颖而出，舒展出一幅乡村振兴的新画卷。\n\n已输入 0 个字\n\n查看更多回复>\n\n查看更多评论 没有更多评论了\n\n湖北日报客户端\n\n湖北日报官方微信\n\n湖北日报官方微博"
  },
  "S06": {
   "heading": "news.hubeidaily.net_湖北日报：孝南朱湖：试试国土综合整治，撂荒地变成高产田",
   "date": "2025-09-24",
   "source": "news.hubeidaily.net_湖北日报",
   "url": "https://news.hubeidaily.net/pc/c_4574626.html",
   "body": "孝南朱湖：试试国土综合整治，撂荒地变成高产田\n\n湖北日报客户端 2025-09-24 09:39:31\n\n曾经杂草丛生的抛荒地，如今变成连片稻浪翻滚的“黄金田”；曾经空心寂寥的村庄，如今迎来机械化种植的“新农人”。9月10日，国务院新闻办公室发布会上，湖北孝感朱湖湿地生态修复案例成为焦点。经过十余年整治，这片湿地不仅年接待游客创收超2000万元，更以3万亩生态糯稻支撑起孝感米酒60亿元产值。\n\n朱湖糯稻熟了。\n\n“以前湖边小工厂、养殖场扎堆，河水发黑发臭，路过都要捂鼻子。”9月12日，70岁的朱湖老居民周自桥站在菱角湖绿道上感慨。如今，这里绿意盎然，水鸟嬉戏。\n\n改变始于一场“壮士断腕”的整治：关停搬迁8家企业、50家养殖场，拆除违建和拦水坝，整治河渠236公里，新建污水处理厂，改造厕所2400座……通过清淤疏浚、治理黑臭水体、土壤修复等措施，朱湖水质明显改善，272种水鸟重返栖息。\n\n环境变好了，百姓如何致富？朱湖办事处瞄准生态农业：推广糯稻规模化种植，发展富硒莲藕、清水鱼虾等特色农产品。其中，3万多亩生态糯稻成为“黄金名片”。\n\n朱湖还将农业与旅游结合，发展观光农业。夏季万亩荷塘吸引游客赏荷采莲，秋季金色稻浪迎来农耕体验热潮。“农业+旅游”模式拓宽了农民增收渠道，提升了农产品附加值。\n\n“我们入选自然资源部第二批全域土地综合整治试点典型案例”。朱湖国土综合整治项目指挥部负责人洪亮介绍，通过整体规划，生产、生活、生态空间统筹安排，农户搬进电梯楼房，土地集中连片整治。项目新增耕地9000多亩，耕地指标收益超9亿元。\n\n来源：湖北日报\n\n已输入 0 个字\n\n查看更多回复>\n\n查看更多评论 没有更多评论了\n\n湖北日报客户端\n\n湖北日报官方微信\n\n湖北日报官方微博"
  }
 },
 "12": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨湖南浏阳永安镇：沃土“搬家”造良田",
   "date": "2024-09-03",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5341376",
   "body": "湖南省长沙市浏阳市永安镇全域土地综合整治试点是2021年自然资源部部署的乡镇全域土地综合整治试点。永安镇按照“产业兴旺、生态宜居、乡风文明、治理有效、生活富裕”总要求，坚持以科学规划为龙头、产业发展为支撑、体制机制创新为动力、农村土地综合整治为抓手，建立“市委统筹+镇村联动+群众参与”的统筹推进体系，创新实施“四来五自”村民自治、“1+N”乡村振兴示范区建设、工程EPC（设计+施工总承包）实施模式，积极发挥长沙机场改扩建工程占用耕地耕作层剥离再利用试点和中华老种子博物馆、美栗谷田园文旅综合体等优势，针对区域空间布局不合理、土地资源低效利用、基础设施相对落后、配套空间布局亟待优化等问题，加快村民集聚集中，提速乡村建设改造，完善乡村基础设施，健全基层公共服务，连片发展特色产业，逐步构建了农田连片、村庄集聚、生态宜居、集约高效的国土空间新格局，初步建成了一批乡村振兴示范片，探索形成了可复制、可推广的全域土地综合整治浏阳经验。\n\n田园乐活宜居村——坪头村\n\n一、案例背景\n\n（一）基本情况\n\n永安镇位于浏阳市西北部，镇域面积112.2平方公里，辖12个行政村，总人口10.12万，是原浏阳高新区所在地和现金阳新城核心区。该镇区位条件优越，距黄花机场约15分钟车程，长浏高速、平汝高速等6条高速、国省干道纵横贯通。综合实力强劲，综合竞争力位居全国百强镇第72位（是湖南省首个上榜全国百强镇的乡镇），先后获评全国文明村镇、湖南省经济发达镇行政管理体制改革试点镇、湖南省抓党建促乡村振兴示范镇、湖南省乡村治理示范乡镇、湖南省法治政府建设示范镇，入选湖南省、长沙市乡村振兴示范创建镇名单。永安镇试点项目涉及城镇开发边界范围外6个城郊融合类村庄、2个集聚提升类村庄和1个城镇开发边界范围内村庄，并通过衔接周边其他村庄辐射永安镇全境，总投资约3.01亿元，其中试点核心区域项目总投资1.18亿元。\n\n（二）存在问题\n\n永安镇作为百强镇，经济建设发展较为迅速，但也存在着空间布局零散等问题。\n\n耕地局部碎片化。试点区域属丘陵地貌，地形单元较零碎，除捞刀河两岸耕地较为集中连片外，耕地整体分布零散，部分耕地“非农化”“非粮化”情况加剧了耕地碎片化。\n\n建设用地节约集约利用水平有待提高。试点区村庄分布较为破碎散乱，影响整体乡村风貌，如集中连片农田图斑内的零星房屋“零星地”、户均占地面积过大的“超占地”、房屋放弃建设搁置的“弃建地”等，造成建设用地资源浪费。\n\n局部区域生态环境质量退化。试点区地形坡度大，切坡修路或建房造成坡面裸露，存在滑坡、泥石流等隐患；坑塘、沟渠等水利设施维护不到位，部分淤塞及水体富营养化严重。\n\n空间布局有待优化。随着城镇化推进以及城郊融合步伐加快，试点区空间布局矛盾进一步凸显，比如宅基地与农田交错，产业项目落地及基础设施配套等受到空间制约。\n\n传统文化保护有待加强。因场地限制和农耕文化元素缺失，试点区农耕文明展示和文化传承效果欠佳。\n\n（三）试点目标任务及总体安排\n\n1.目标任务\n\n试点立足打造湖南省城乡融合发展样板，通过优化生产、生活、生态空间布局，统筹农用地、低效建设用地和生态保护修复，促进耕地保护和土地节约集约利用，解决一二三产业融合发展用地，改善农村人居环境，助推乡村全面振兴。\n\n2.总体安排\n\n推进农用地整理，完成农用地开发364.5亩，未利用地开发48亩，旱改水60亩，高标准农田建设1591.5亩。推进建设用地整理，完成农村宅基地、工矿用地拆旧复垦142.5亩，盘活低效建设用地147亩。推进乡村生态保护修复，完成矿山修复2处，地质灾害治理5处，水系治理2.5公里，道路提质改造1.6公里。推进乡村历史文化保护，完成特色农耕文化保护1处，建设乡村振兴示范点2处。\n\n二、主要做法\n\n（一）坚持高位统筹，强化工作保障\n\n浏阳市委、市政府多次召开市委常委会和政府常务会专题研究部署，成立以市委书记任顾问、市长任组长的浏阳市全域土地综合整治工作领导小组，制定《浏阳市全域土地综合整治工作方案》《浏阳市全域土地综合整治工作资金整合方案》《浏阳市全域土地综合整治项目农房搬迁和集中安置实施办法》等制度方案。建立“市委统筹+镇村联动+群众参与”的统筹推进体系，将试点工作纳入市委全面深化改革工作要点，实行周调度、月通报、季考核、年评估，有效保障试点工作有力有序推进。建立部门资金整合投入机制，明确在试点期间将发改、财政、农业农村、水利、交通运输等部门的四水治理、长江防护林、森林提质改造、乡村振兴、高标准农田、美丽乡村建设、灌区节水配套改造、农村公路新建及提质改造等涉农项目资金，全额纳入试点项目配套。突出市场运作，将政府平台公司作为资金保障单位，明确将试点项目产生的增减挂钩、新增耕地、耕地产能等指标进行市场化运作，持续保障项目建设资金。\n\n（二）坚持规划引领，推动节约集约\n\n在全省率先按照“市镇同步、镇村一体”编制模式，同步开展市、镇、村三级国土空间规划编制，并将全域整治建设内容纳入相关镇、村国土空间规划中，合理划定农业生产、村庄建设、产业发展和生态保护等功能区，对各类用地的规模数量、空间布局进行统筹安排，并做好工程区域整体风貌和景观设计。充分发挥规划引领作用，补齐区域内基础设施短板，促进当地生产生活水平整体提质升级，推动土地节约集约利用，规划形成“一轴、一廊、四区”（一轴：永丰公路空间联动发展轴；一廊：捞刀河生态廊道；四区：千鹭湖生态旅游区、现代休闲农业区、田园乐活宜居区、高新智造发展区）的空间布局。\n\n捞刀河生态廊道\n\n（三）坚持生态优先，推进绿色发展\n\n贯彻绿水青山就是金山银山理念，按照“产业兴旺、生态宜居、乡风文明、治理有效、生活富裕”总要求，统筹推进山水林田湖草整体保护、系统修复、综合治理。统筹推进农村人居环境综合治理，开展农村垃圾治理、生活污水治理。加强生物多样性保护，保护和恢复乡村生态功能，整合“中华老种子博物馆”优质资源，探索生物多样性保护新路子，形成农业生态新格局。加强乡村文化景观保护，全面提升自然和人文景观功能，打造千鹭湖生态旅游区、尚东小镇等文旅综合体，促进美丽乡村建设。积极布局绿色产业，充分利用试点整治区内新增耕地、旱改水及高标准农田建设，在充分尊重群众意愿的基础上，鼓励土地流转和规模化经营，流转土地1266余亩，村民以土地入股村集体占股10%的形式参与经营，发展种养农业大户和龙头企业，推动现代化生态农业发展。整合周边美栗谷田园文旅综合体等优势资源，发展新型文旅和生态农耕产业，推动当地可持续发展。\n\n沟渠整修完成前（上）后（下）\n\n（四）坚持以民为本，加强基层治理\n\n坚持以人民为中心，编制实施方案时广泛征求相关土地权益人意见，按照依法依规、确权在先、公开公正、自愿协商、维护稳定原则，编制初步的权属调整方案，确保土地权属清晰无争议，充分保障土地权益人的利益。项目实施中充分发挥农村集体组织及农民作用，积极推广“乡贤留下来、能人请进来、村民动起来、村庄活起来”和“自发组织、自主设计、自我筹资、自行建设、自觉管理”的“四来五自”村民自治模式，解决谁来建、谁来管的问题，助力乡村治理能力提升，实现乡村共建共治共享。\n\n“四来五自”村民自治模式\n\n（五）坚持因地制宜，积极开拓创新\n\n按照山水林田湖草系统治理的理念，基于区域内资源禀赋和发展实际，合理确定目标任务，科学制定实施计划。通过全域规划、整体设计、综合治理，统筹开展农用地整治、建设用地整治和生态保护修复，积极探索全域土地综合整治新思路、新模式。\n\n一是创新采用“客土法”，利用黄花机场扩建占用耕地进行表土剥离，改造1700亩非粮化耕地。\n\n二是创新采取工程EPC（设计+施工总承包）和“1+N”实施模式，由项目投资主体公开招标确定项目设计、施工总承包单位，并通过公开程序确定三方造价咨询机构和监理单位；通过1个全域土地综合整治项目带动N个乡村振兴亮点项目，在大安、西湖潭、丰裕、坪头、礼耕、水山等6个村打造千鹭湖生态旅游区、尚东小镇等15个基础项目和8个亮点项目，开展美丽屋场建设，打造乡村振兴示范区。\n\n三是创新搬迁模式，原则上集中安置、统规统建，以房换房。投入乡村振兴示范建设资金4600万元，改善人居环境，真正实现让群众“拎包入住”。\n\n四是创新经营模式，利用试点整治区内新增耕地及高标准农田，在充分尊重群众意愿的基础上，鼓励土地流转和规模化经营，发展种养农业大户和龙头企业，推动现代化生态农业发展。\n\n美丽屋场文化建设前（上）后（下）\n\n三、取得成效\n\n浏阳市永安镇全域土地综合整治大力推动区域内山水林田湖草整体保护、系统修复和综合治理，促进生态效益、经济效益、社会效益相统一，实现从一时一处好到永安全域美的华丽蜕变。\n\n（一）实行综合整治，区域国土空间格局明显优化\n\n以国土空间规划、生态修复规划为引导，实行全域整体推进、全要素综合整治。全面优化耕地布局，永安镇核心整治区现有耕地7793.18亩，通过整治可净新增耕地420.29亩，新增比例为5.39%；调出原基本农田71.84亩，调入永久基本农田80.65亩，新增永久基本农田面积8.82亩，新增比例为12.27%。耕地小改大面积约832亩，耕地连片度由原来的79个图斑降低到55个。推进建设用地治理，整理闲置低效地块约89个，拆旧地块55个，腾退建设用地129.83亩，完成建设用地整治305亩，增加有效耕地面积380亩。扣除搬迁集中安置居民占用的建设用地19.99亩，可结余建设用地指标109.84亩。实现节约集约利用和空间布局优化，推动形成农田连片、村庄聚集、集约高效、生态宜居的农村新风貌，以永丰公路为空间联动发展轴，以捞刀河为生态廊道，千鹭湖生态旅游区、现代休闲农业区、田园乐活宜居区、高新智造发展区四区联动的“一轴一廊四区”国土空间新格局基本形成。\n\n废弃宅基地复垦前（上）后（下）\n\n（二）提升耕地质量，粮食安全保障能力显著增强\n\n推进农用地整理，以丰裕村低洼田改造项目为重点，对1200多个无序化田块进行田坎统一整治、零散田块合并平整，整治集中连片耕地（100亩以上）数量12片，开发新增耕地461亩，建设高标准农田1591亩，零星非耕地面积下降率达8.59%。同时整修柳家沟1743米、新修排水沟10654米、新修斗渠和农渠16158米、新修机耕路6977米、新修生产路7630米、硬化机耕路998米，耕地灌溉保证率、排渍排涝能力、机械化生产水平和农田生态景观大幅提升。结合长沙黄花机场占用耕地耕作层剥离再利用试点项目，改造1700亩非粮化耕地。通过挖高填低平整田块、2次深翻耕、撒石灰、覆土优质耕作层土壤30厘米以上、完善灌溉排水、修整田间道路等措施，将贫瘠耕地治理成优质良田，零星破碎、利用率低的地块得到合理利用，完成农用地整理（高标准农田建设）2080亩，新增耕地169.85亩，实现耕地质量等别提升一等。推行稻油轮作模式，整治区粮食产能和品质大大提升，新增产能指标超340万公斤，为当地群众带来每年约400万元的收入，实现耕地高效利用，有效促进农民增收，有力保障粮食安全。\n\n（三）推进系统治理，乡村生态环境持续改善\n\n持续推动乡村一体化保护修复和系统治理，集中整治农村人居环境，实施污水和垃圾治理工程和道路提质改造工程，从源头上解决农村“脏乱差”现象。积极推广湾里屋场污水垃圾治理模式，采用纯生态方式治理污水和有机垃圾的专利技术，采用将黑水、灰水、雨水分开收集的方式，将黑水通过微生物处理转化为有机液态肥及生物天然气等可利用资源、灰水通过微生物处理后浇灌绿植、雨水通过集中收集流向池塘，颠覆了传统的三格化粪池、一体化处理设备达标排放的模式，达到生态循环、零排放的目的，成功创建长沙市小微水体示范片区。疏浚、治理渠道水系4处，有效保障农田灌溉，构建成良性循环的生态系统。实施矿山生态修复工程2处，完成乡村生态保护修复9处，生态用地比例提高3.18%。开展美丽屋场建设，完成乡村振兴项目中祖家屋场、光明屋场等8个美丽屋场建设。\n\n（四）引导融合发展，产业动能有效激活\n\n永安镇通过全域土地综合整治，促进土地节约集约利用，解决产业发展用地。同时积极整合当地自然风光、农耕文化资源，因地制宜引入优势产业，带动一二三产业融合发展，有效激活了当地产业发展动能。在引入相关产业时，采取土地入股、全民参股分红等形式，每年按照村民入股金8%保底分红，土地每亩240元分红，促进当地农民增加收入。比如芦塘村利用板栗连片种植的资源优势，集中流转林地2000余亩，其中村民以土地资源占股25%，另外75%股份由本村村民自愿入股，打造湖南省最大的集原生板栗生产、观光、采摘于一体的生态旅游基地，成功申报国家第一批田园综合体项目，每年为村集体经济增收10万元，为村民增收45万余元。同时以市场化运营模式，流转土地1256亩，打造“老种子”农耕文化实践基地，成功获批长沙市研学基地，接待各类研学学生超3万人，2023年实现营业收入约650万元。\n\n（五）提升乡村治理能力，社会风貌持续向好\n\n在试点中建立健全村民议事会、民情恳谈会等议事协商机制， 制定村规民约“三字经”，以“小村规”撬动乡村“大治理”。 引导党员、群众成立党员先锋岗、义务巡防队、义务清扫队等志愿者组织，让村民们积极参与乡村建设和管理。通过读书屋、文化墙、标语路牌、家训门联等载体，全面倡导社会主义新风尚，树立健康文明的乡风民俗，传承和弘扬优秀历史文化。积极推广“四来五自”模式，增强乡村治理能力。试点区社会风貌焕然一新，人民获得感、幸福感、安全感持续提升。\n\n四、适用条件和推广前景\n\n浏阳市永安镇全域土地综合整治试点对于破解近郊乡村土地碎片化、无序化、低效化瓶颈制约，解决城乡结合部区域内空间布局散乱、土地利用低效、生态环境质量退化、耕地局部碎片化等问题，优化生产、生活、生态空间布局，促进耕地保护和土地节约集约利用，解决一二三产融合发展用地，改善农村人居环境，提升乡村治理能力，助推乡村振兴具有重要的借鉴意义。该做法适宜在距离大城市较近、区位条件优越、经济基础雄厚、发展潜力较大、全域土地综合整治内生动力充足的区域实施推广。\n\n一是耕作层剥离再利用的典型经验。 创新采用“客土法”，利用黄花机场改扩建剥离的优质表土，将1700亩非粮化贫瘠耕地有效治理成优质良田，有效提升耕地质量，这种做法值得大力推广。\n\n二是一二三产业深度融合的发展模式。 试点区充分运用土地整理、美丽屋场、高标准农田建设成果，将农业、文化和旅游等产业有机结合，通过集中流转，充分发挥种粮大户龙头带动作用，大力推进农业生产规模化、机械化、产业化，将“稻田”变“风景区”“实验田”，促进农旅深度融合，推广农耕文化，实现了经济效益、社会效益、生态效益的统一，这种发展模式具有较强的借鉴意义。\n\n三是乡村共建共治的基层治理模式。 试点区探索形成的“四来五自”治理模式，能有效激发基层治理内生动力，提升乡村治理能力，具有很好的推广前景。\n\n（湖南省自然资源厅推荐）"
  }
 },
 "13": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨广州市从化区：大湾区“百千万工程”的整治实践",
   "date": "2024-08-29",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5340278",
   "body": "2021年9月，自然资源部批准广东省广州市从化区开展以县域为单元的全域土地综合整治试点。2023年8月，从化区全域土地综合整治试点实施方案获得自然资源部批复同意。试点开展以来，从化区立足区域发展的基本情况和制约发展的四大问题，积极在体制机制、制度建设、资金筹措等方面探索创新，将推进全域土地综合整治作为面向区域高质量发展的示范工程、绿色工程、惠民工程，形成了粤港澳大湾区“百县千镇万村高质量发展工程”实施路径，全力打造了国际大都市近郊区全域土地综合整治的“广州样板”“湾区经验”。试点划定10个示范片区，拟实施97个整治项目，项目总投资预计约399.6亿元，实施期限为2021年~2025年。目前已完成试点实施方案审核备案工作，正按计划、分片区推进各项整治工作。\n\n治理后的鸭洞河\n\n一、案例背景\n\n（一）基本情况\n\n从化区位于粤港澳大湾区北部生态核心区与广东北部生态屏障的交汇地，是湾区的“米袋子、菜篮子、果盘子、奶瓶子”。作为广州市所辖最大行政区，从化区下辖三街五镇221条行政村，面积约为1984.1平方公里，2021年常住人口72.7万人，2021年实现地区生产总值413.4亿元。\n\n依托流溪河形成“两脉夹一谷”的地理格局和“七山一水一田一城”的空间格局，从化区汇聚了丰富的自然资源，包括广州市最高的山、最佳的水、最多的林、最优的泉等，森林覆盖率达69.1%，在广州市各区中排名第一。同时拥有温泉、国家版本馆广州分馆、香港赛马会从化马场等多项高端生态与文化名片。作为粤港澳大湾区的生态高地，2018 年以来，从化区相继入选国家城乡融合发展试验区、全国水系连通及农村水系综合整治试点、国家田园综合体建设试点、全国乡村治理体系建设试点、全国文化生态旅游示范区、国家乡村振兴示范县创建名单等国家级试点，走在了提升生态价值、探索乡村振兴的前沿。\n\n（二）主要问题\n\n从化区发展主要面临四大痛点问题，包括以下方面：\n\n区域发展不平衡。从化区流域上游地区生态保护任务重，北部三镇生态资源丰富却难以发挥其生态价值；下游地区经济发展任务重，肩负联动周边区域、带动从化高质量发展的重要任务。\n\n耕地布局碎片化。从化区农业用地面积位居广州第二，但平均耕地图斑大小仅为12亩，15亩以下占比近60%，耕地碎片化特征明显，亟待改善区域农业耕作条件，实现现代农业发展。\n\n建设用地待盘活。从化区历史留用地布局较为分散，不利于土地成片开发利用；建设用地使用低效，城中村和低效产业用地使用效率有待提升，为三大产业平台发展预留空间。\n\n生态价值未彰显。从化区是流溪河源头所在地，拥有多元化珍稀自然资源，但2021年从化生态系统生产总值（GEP）在全国县域中仅排名42，在珠三角地区仅排名第6，生态价值转化路径亟待探索。\n\n（三）目标任务\n\n面向四大整治痛点，从化区结合区域发展实际，以“增耕地、腾空间、优生态、强活力”为目标导向，带动城乡要素在县域范围内合理配置，探索粤港澳大湾区县域尺度的绿色发展和城乡融合路径。\n\n增耕地，高标准整理农业空间。推动耕地连片提质，破解耕地碎片化问题，促进耕地实现高质量建设；优化永久基本农田，助力形成2片市级永久基本农田集中区；同步导入富民绿色产业，打造“111012”工程，以产业引领高标准整理农业空间。\n\n腾空间，高质量盘活城镇空间。引导留用地集中落地，促进存量工业用地扩容提质，整治后工业用地平均容积率上限可提升至3.5~4.0，助力广东从化经济开发区、高埔创智谷、温泉总部集聚区三大平台工程建设。结合地灾防治、空心村搬迁促进乡村振兴，实现城乡融合发展。\n\n优生态，高水平保育生态空间。实施流溪河源头修复，助力绿美从化建设，开展河道整治、碧道建设、森林抚育、动植物栖息地保育等工作，推进华南国家植物园迁地保护从化示范区建设，加强生物多样性保护。\n\n强活力，高效能提升城乡活力。推动县城扩容提质，惠及周边地区农民致富增收，实现强县、兴镇、富村。强化制度供给侧改革，探索实施主体组织方式、耕地整理、建设用地高效利用以及两山转化路径，形成可复制、可推广的经验模式。\n\n（四）总体安排\n\n试点期限为2021年~2025年，试点期内按照“一年打基础、两年上台阶、三年显成效”的建设目标进行安排。第一阶段为前期准备阶段（2021年~2022 年），主要工作包括成立组织领导机构、印发总体工作方案、编制试点实施方案。第二阶段为方案编制阶段（2022年~2023年），有序开展区级国土空间总体规划、详细规划及实用性村庄规划编制，按需编制专项工作方案、示范项目编制实施建设方案等。第三阶段为项目组织实施（2023年~2025年），加快推进各整治项目实施、加强政策创新。第四阶段为总结阶段（2025年）。\n\n二、主要做法\n\n（一）体制机制建设探索\n\n1.建立纵向贯通、横向联动的组织领导体系\n\n从化区建立省市统筹、区负主责、镇村抓落实的工作机制。 一是依托“百千万高质量发展工程”打通省、市沟通联系机制，从省、市层面统筹协调、督促指导全域土地综合整治实施。二是成立由区委主要领导担任组长的全域土地综合整治试点工作领导小组，构建“1+1+8+X”的组织体系，形成“横向到边、纵向到底”的工作格局。\n\n2.探索建立一体化实施机制\n\n从化区统筹整治区域范围内农、林、水、田、路、村等各类子项目，探索由区规资部门作为行业主管部门、镇街作为项目业主单位、区住建统一招标监管、区财政统一评审的工作机制。整治项目采用“整体立项—分项审核—统一实施”机制，强化从规划设计到项目实施的连贯性、衔接性。\n\n3.建立滚动实施、动态监管的机制\n\n试点构建了重点项目库和储备项目库，将已具备群众基础、易于形成示范效应的整治区域作为重点项目库，成熟一批、推进一批、滚动实施，强化整治路径与政策探索。\n\n（二）制度建设探索\n\n围绕“增田”“添绿”“节地”“兴村”“共富”五大整治成效，从化区通过制度建设和创新形成一批政策体系。目前已出台《广州市从化区关于以全域土地综合整治促进乡村振兴实现高质量发展的十条措施》（从府规〔2023〕3号）《广州市从化区关于助力产业高质量发展的十条规划用地措施》（从府办规〔2023〕1号）等项目政策指引，初步形成了可复制、可推广的制度和模式，激发全域土地综合整治内生动力。\n\n（三）实施模式探索\n\n根据从化“一带四区”资源本底和优势特征，因地制宜制定“1+4”差异化的整治模式。\n\n“1”是流域治理的国土空间规划实施模式。 以流溪河流域协同治理为主，探索北、中、南差异化的生态价值实现路径，推动指标交易、收益共享，平衡跨镇街发展权益，沿河串联美丽乡村建设、历史保护活化利用，实现全流域产业共荣、乡村振兴。\n\n“4”是因地制宜探索形成四种整治模式。 其中， 源头修复与生态价值实现模式， 以源头治理和生境修复引领山水林田湖草一体化修复，打通生态价值转化完整链条； 城乡融合发展模式， 以三产融合引领城乡高质量一体化发展，打造岭南特色乡村田野风光； 老城市新活力模式 通过推进低效用地再开发、促进建设用地节约集约利用、强化县城综合服务和带动能力，发挥强县域带动作用，打造绿色发展示范区； 区域协同与产城融合模式， 以建设用地整理、园区提质增效和布局优化为主，通过区域产业空间辐射带动产业升级提质，推动城镇与产业融合发展。\n\n（四）资金筹措探索\n\n从化区探索建立多渠道参与的资金保障机制，整合相关财政资金形成“组合资金包”，形成以财政资金为启动资金，联动专项债、政策性金融工具及社会资本参与的资金保障机制。在引导社会资本参与过程中，充分发挥国企引领支撑作用，通过国企“栽苗”，搭建创新创业平台，吸引民营企业投资“育苗”，建立“国企+村公司+合作社+农户+手艺人+社会投资者”模式，打造国企和民企优势互补、资源共享、融合发展的格局。\n\n鳌头万亩良田示范片区，由区属城投集团、越秀集团牵头共同进行建设打造，已与怡境文旅、广大乡创、中大智境、哈维农业等农文旅学各行业和近20所广东高校签订协议，初步形成“食、住、行、学、游、购、娱”多元业态。同时由龙潭、横江、乌石3个村成立强村公司，探索以“前店后厂”模式运营特色店铺，首期开设粉面、奶、豆、油制品厂4家，村民和村集体占股80%以上，越秀集团和社会投资各占股10%，生产产品由越秀食品公司授权“越秀生鲜”或“风行生鲜”品牌。其中，奶制品厂利用华美牧场的奶牛资源，采购新鲜牛奶，加工成双皮奶、姜撞奶、乳酸奶等产品，计划将货品供应到周边企业，预计产值可达650万。\n\n“前店后厂”特色店铺\n\n（五）全过程监管探索\n\n从化区在整治工作过程中落实全过程监管工作。一是严守底线要求，依托广东省自然资源监管平台“空天地一体化监测”实现动态监测耕地等。二是加强年度目标的检查监督，定时组织对整治任务完成进度、质量和重点指标完成情况、存在问题等进行总体评估。三是尊重村民意愿，运用好村民议事决策机制，强化社会监督机制，进行全过程监督。\n\n三、取得成效\n\n（一）生态效益\n\n从化区积极践行“两山”理念，积极探索生态产品价值实现机制。流溪河流域上游30条一级支流全部达到Ⅱ类以上水质，建成碧道111.8公里，助力从化入选国家水系连通及水美乡村建设试点区，让一度被宣告灭绝的唐鱼数量恢复到了8万多尾。积极推进鸭洞河治理工程，其中一期整治约0.9公里，二期整治9.7公里，打造河畅、水清、堤固、岸绿、景美的小镇“迎客厅”，项目荣获“广东省生态修复设计单项奖”。推进顺兴石场生态修复项目，综合运用边坡生态修复、土壤修复、植物修复、生态景观塑造等生态修复技术，完成约1200亩整治修复工作，项目入选广东省国土空间生态修复十大范例。\n\n从化区潖江河治理前（上）后（下）\n\n（二）社会效益\n\n从化区将土地综合整治与乡村振兴发展相结合，提升区域内群众“获得感”与“幸福感”。如，在老城市新活力模式中谋划10个老旧小区微改造项目，目前已竣工8个、在建2个。项目通过完善公共服务设施达到中心城区居住环境整体改善，让整治成效“看得见”“摸得着”，激发老旧小区新活力。\n\n同时，试点在鳌头镇万亩良田示范片区建立“国企+村公司+合作社+手艺人+社会投资者”的合作模式，通过完成约7000亩土地流转与约6600亩农田主要整治工序，盘活利用龙潭旧镇墟沿街百余栋旧厂旧屋的闲置低效建设用地资源，结合整治区域内3片村落人居环境提升，引入越秀集团风行田园综合体产业项目。让村集体和农户通过家门口就业、流转土地经营权或林地经营权、租赁闲置房屋使用权等多种形式，参与或参股引入产业项目，分享可持续收益。\n\n鳌头镇产业项目实施前（上）后（下）\n\n从化区在全域土地综合整治过程中，同步开展村庄集中整治，推进人居环境改善和公共服务配套设施的完善。如，通过修缮徐家大院、财神庙、刘氏宗祠等历史遗迹，完善村庄公共文化空间；通过弘扬醒狮、上灯等传统习俗，打造木棉广场、榕树下、乡村集市等民俗集聚地，推动民俗文化薪火传承。同时从岭南传统建筑中汲取灵感，采用夯土、坡檐、花纹、山石等本地元素，以“绣花功夫”推进乡村建筑风貌提升，彰显岭南文化魅力，打造文化厚重、特色鲜明的美丽村庄。\n\n鳌头镇人居环境整治前（上）后（下）\n\n（三）经济效益\n\n从化区整合“农、林、水、路、村”相关财政资金形成“组合资金池”，争取政策性银行贷款、社会资本、村集体和农民自筹资金等非财政资金支持，以小财政撬动大社会资本。以万亩良田示范片区为例，依托政府财政资金3000万元，申请6.7亿元专项债用于工程费用，已吸引越秀集团投资约8亿元、区属国企投资约3800万元，预计可实现村民租金收入约1000万元/年，带动项目区域村集体年平均增收15万元以上；目前已至少带动就业人数共256人，其中当地就业人数78人。\n\n围绕制造业立市的工作要求，通过低效建设用地再开发利用等建设用地整理模式，充分释放试点产业潜力。以南部产业转型提质示范片区和南部产业合作示范片区为抓手，启动高埔创智谷首期780亩开发建设，对园区范围内低效工业用地进行提质增效。目前已批复22个工业项目增资扩产，预计可释放174宗共计约1.3万亩存量工业用地，激发县域经济发展新活力。\n\n四、适用条件和推广前景\n\n从化区县域范围大，整治示范片区类型情况不一，整治模式多样，对于全国各省各类型的全域土地综合整治项目具有参考意义。如源头修复与生态价值实现模式适用于大都市近郊区的整治项目，充分发挥生态资源及农业资源价值，提供生态价值转化路径；城乡融合发展模式适用于城乡发展不平衡的县（市、区），提供指标交易、收益共享路径，促进全域产业共荣、乡村振兴。\n\n广州市在总结从化区全域土地综合整治试点经验基础上，开展超大城市全域土地综合整治工作，将“1+4”差异化整治模式推广至广州市其余10个行政区，助力“百千万高质量发展工程”实施。未来，从化将结合试点实施情况及时进行经验总结与推广，总结一套适合县域开展全域土地综合整治的技术规范、程序标准和工作体系，形成一套可复制可推广的广州经验与标准。"
  },
  "S03": {
   "heading": "gd.gov.cn_广东省人民政府：广东持续探索全域土地综合整治机制 已批复216个实施方案",
   "date": "2026-06",
   "source": "gd.gov.cn_广东省人民政府",
   "url": "https://www.gd.gov.cn/gdywdt/zwzt/bxqzwc/gzbs/tjtzjzgg/content/post_4916355.html",
   "body": "广东持续探索全域土地综合整治机制 已批复216个实施方案\n\n我的收藏 收藏\n\n佛山市三水区南山镇的“蓝眼泪”矿山湖。图片来源：南方日报\n\n今年6月25日是第36个全国土地日，活动主题为“珍惜每一寸土地 促进高质量发展”。\n\n广东是全国人地矛盾最突出的地区之一：珠三角开发强度高、产业用地碎片化；粤东粤西面临耕地保护、海岸带生态与临港产业多重任务，耕地集中连片度不足；粤北以山地丘陵为主，农村空心化明显。\n\n发展空间向何处寻？近年来，广东持续探索全域土地综合整治机制，推动“良田集中、村庄优化、产业集聚、生态优美”的新格局从蓝图走向现实。截至今年5月，全省累计批复实施方案216个，拉动投资超7400亿元。\n\n全省累计批复实施方案216个\n\n2019年12月，自然资源部部署开展全域土地综合整治试点，以乡镇或村庄为单元推进农用地整治、建设用地整理和生态修复。\n\n2020年，广东获批20个乡镇试点，广州市从化区成为全国首个县域试点；2021年全省新增2个县级、19个乡镇试点。\n\n2024年3月，省自然资源厅印发扩面提质通知，整治从试点转向全面推进。同年，在42个试点基础上，新批64个实施方案，覆盖19个典型县、52个典型镇，新增农用地整治23万亩、建设用地整理5万亩、生态修复42万亩，全年完成投资1096亿元。\n\n2024年11月，《关于深入推进全域土地综合整治助力“百县千镇万村高质量发展工程”的意见》印发，标志着工作进入深入推进阶段。\n\n2025年，广东新增批复84个实施方案，新增拉动投资4908亿元，新增农用地整治104.68万亩、建设用地整理31.05万亩、生态修复174.92万亩。\n\n截至2026年5月底，全省累计批复实施方案216个，总拉动投资7420.09亿元，实施农用地整治150.02万亩、建设用地整理43.22万亩、生态修复279.94万亩。\n\n加速激活“沉睡”土地资源\n\n农用地整治是推动乡村产业兴旺的关键。面对耕地碎片化、撂荒地增多，广东通过整治推动耕地集中连片、设施提升。韶关市曲江区组建三级专班，计划整治2.48万亩，预计新增耕地9307亩，连片度提升约15%，已签约5个现代农业项目、总投资9.2亿元。\n\n建设用地整理是盘活空间资源、保障产业落地的重要支撑。面对用地需求大、发展空间紧、低效用地多等现实情况，广东以存量盘活倒逼空间优化，促进产业升级。\n\n佛山市南海区创新“四券”政策，累计改造村级工业园超2.5万亩，整备连片产业用地2.48万亩，每年七成连片用地用于工业；中山市黄圃镇“工改”与整治结合，首创“连片+单体”路径，近三年整备土地超3000亩，为新业态腾挪空间。\n\n广东统筹推进山水林田湖草沙一体化保护和系统治理，推动绿色成为土地整治最鲜明的底色。\n\n惠州龙门县龙江镇将历史遗留矿山建成生态公园和鹿鹰园旅游综合体；佛山三水区南山镇将废弃矿山变为“蓝眼泪”“日照金山”等景观，年引流消费超3000万元。\n\n通过一系列改革实践，全省土地利用格局持续优化，耕地保护根基不断夯实，产业发展用地保障更加有力，人居环境与生态面貌显著改善。\n\n省财政已统筹超10亿元专项资金\n\n全域土地综合整治，归根到底要回答——地从哪里来、钱从哪里筹、整治之后如何持续？\n\n广东出台综合性政策文件，配套推出项目管理、指标池管理、资金池管理、年度奖补等13项具体措施，明确“县域统筹、乡镇实施、镇村联动”实施路径，逐步构建起空间规划、农用地整治、产业用地保障、生态修复与资金保障五大创新机制。\n\n广东依据国土空间总体规划谋划实施方案，建立与详细规划衔接规则，优化“三条控制线”，并将整治成效纳入“百千万工程”和耕地保护考核，推行月度通报、季度推进、年度评估。\n\n在农用地综合整治机制上，广东探索集中连片整治与集约经营。通过配套完善灌排设施、田间道路、农田防护等基础设施，提升耕地规模化、集约化水平，已实现28.18万亩耕地集中连片，新增耕地13.91万亩。\n\n推动产业落地是全域土地综合整治的重要任务。广东全面推行建设用地“增存挂钩”，推广“混合用地”“弹性年期出让”“点状供地”等灵活供地模式。同时，统筹推进低效工业用地、闲置宅基地、废弃工矿用地等存量建设用地整理，大力破解土地碎片化困局。\n\n2023年9月以来，已供地或已动工开发的低效工业用地项目422个，改造面积2.88万亩。\n\n生态保护修复方面，广东以全域土地综合整治统筹矿山、流域、城乡等保护修复，创新生态产品价值转化机制，注重生态产业持续运营。\n\n资金是全域土地综合整治推进的“放大器”。广东构建起财政引导、金融支持、市场参与的多元投入体系。2023—2026年省财政统筹安排超10亿元专项资金，通过考核激励、“补改投”等方式分档奖补。持续完善“指标池”“资金池”管理制度，探索设立省级专项投资基金。国开行、农发行广东省分行推出超3000亿元授信额度、最长30年贷款期限等支持政策及专项贷款产品，已达成贷款意向3387亿元、发放贷款700亿元。\n\n省自然资源厅负责人表示，广东将持续深入推进全域土地综合整治，让资源要素在更大范围流动、更高层次配置、更成熟体系中运行。"
  },
  "S04": {
   "heading": "nr.gd.gov.cn_广东省自然资源厅：新开端 再动员——广东省召开全域土地综合整治推进会暨培训会",
   "date": "2023-12",
   "source": "nr.gd.gov.cn_广东省自然资源厅",
   "url": "https://nr.gd.gov.cn/xwdtnew/zwdt/content/post_4323154.html",
   "body": "新开端 再动员——广东省召开全域土地综合整治推进会暨培训会\n\n12月25日至26日，省自然资源厅在广州市从化区召开广东省全域土地综合整治推进会暨培训会，对全省全域土地综合整治试点工作进行再动员、再部署。厅党组书记、厅长胡建斌出席会议并讲话，厅党组成员、副厅长，省海洋局局长屈家树主持会议。\n\n会议通报了全省全域土地综合整治工作情况。自全域土地综合整治在广东试点工作实施三年以来，全省共开展农用地整理6.1万亩，建设用地整理6.4万亩，生态保护修复面积13.1万亩。全省42个试点地区结合当地实际情况，探索实践符合自身发展特点的整治模式和路径，为全域土地综合整治在我省全面铺开，提供了一系列可借鉴、可推广的经验和做法。\n\n会议强调 ，促进城乡区域协调发展、再造一个新广东，实施“百千万工程”是核心，全域土地综合整治是关键，其意义之重、涉及之广、影响之远非比寻常。今年是广东省全域土地综合整治夯基垒台、立柱架梁的开局之年，明年将是各地市大展拳脚、各显风采的奋进之年。试点地区一定要提高政治站位，深化对全域土地综合整治工作重要性的认识，切实增强工作责任感、紧迫感，在已经取得的工作成效上，坚定信心、保持定力、久久为功。要坚持“抓两头、带中间”“一年抓试点、三年大推广、五年见实效”，坚持“走出去、请进来”，继续学习先进经验，并广纳群贤，邀请有实力、有经验的技术团队和专家队伍，为全域土地综合整治项目提供专业指导，全力推动建成良田连片、村庄集中、产业集聚、生态优美的土地保护利用新格局，将高质量发展蓝图逐步变成“富县强镇兴村”实景图。\n\n在从化区鳌头镇万亩良田示范项目现场，整治后稻田连成片，一派金黄好“丰”景\n\n会前，与会人员实地考察了从化区吕田镇狮象村新农村建设项目、鳌头镇万亩良田示范项目及越秀风行国家级田园综合体项目。两个试点项目在系统谋划、全面实施、全员参与下，整治后的村庄田成片、渠相通、路成网，新建房屋干净整齐，农旅产业欣欣向荣，展现出焕然一新的村容村貌和秀美的田园风光，生动诠释了全域土地综合整治对助推乡村振兴、促进城乡协调发展的重要意义。\n\n会上，省自然资源厅组织编制的 《全域土地综合整治培训教材（试行）》 首次发布 ，编制组对教材进行了深入解读，并向各整治地区发放教材。\n\n省自然资源厅相关处室及所属单位主要负责同志，全省全域土地综合整治试点工作涉及的18个地级以上市自然资源主管部门主要领导、生态修复业务科室负责同志，33个县（市、区）人民政府主要领导、各镇级试点所在乡镇镇委书记或镇长参加会议。"
  },
  "S05": {
   "heading": "nr.gd.gov.cn_广东省自然资源厅：图文实录 广东首届全域土地综合整治项目推介活动",
   "date": "2023-12",
   "source": "nr.gd.gov.cn_广东省自然资源厅",
   "url": "https://nr.gd.gov.cn/ztzlnew/bxqzwcgzlfz/content/post_4301031.html",
   "body": "图文实录 | 广东首届全域土地综合整治项目推介活动\n\n12月13日上午，广东省首届全域土地综合整治项目推介活动在佛山举行。本次推介活动由广东省自然资源厅、省地方金融监督管理局、佛山市人民政府主办，活动主题是 “多方参与 全域整治 助力百千万工程” 。 南方+客户端对本次活动进行全程图文直播（点击查看）。\n\n截至目前，全省122个县（市、区）贷款余额10.78万亿元；全省普惠小微贷款余额4.2万亿元，同比增长24%；涉农贷款余额2.5万亿元，同比增长22%；政策性农房保险在全国率先实现100%覆盖。\n\n今天，国开行、农发行、工农中建交邮、省农信联社等十多家机构来到了现场，重点推介项目包含55个国家试点和省级试点项目，涉及金额超800亿元。童士清表示，金融机构可以通过支持土地综合整治项目，为农业现代化提供资金保障，推动农业现代化的发展。\n\n未来广东将从三方面发力，为全域土地综合整治提供筹资方案和资金保障。 一是聚焦产业发展、聚焦城乡建设。 鼓励政策性银行、商业银行等金融机构围绕产业发展和城乡建设相关项目，为土地综合整治项目提供信贷支持。 二是聚焦底线民生。 鼓励金融机构针对农村危旧房改造和美丽乡村建设等项目提供融资支持，改善农民的居住条件和生活环境。同时，探索创新金融产品和服务模式，如发行美丽乡村建设债券等，为项目提供多元化的融资渠道。 三是推动金融力量下沉、金融产品下沉、金融服务下沉。 通过全省金融机构组织架构改革和流程再造，为全域土地综合整治提供制度保障。鼓励金融机构深入基层，完善土地综合整治专项贷款、农村土地承包经营权抵押贷款等制度，为农民和土地综合整治提供更多选择。\n\n作为城乡土地统筹配置与优化利用的政策工具，推进全域土地综合整治是助力实施“百千万工程”的重要抓手，将进一步释放政策活力、土地潜力、发展动力，通过一个个具体的整治项目，为政府、企业和金融机构三方合作提供良好平台，在支撑全省高质量发展的同时，也给各类企业带来巨大的新产业机遇和新市场空间。\n\n陈德忠表示， 将把推进各类企业和金融机构参与“百千万工程”尤其是参与全域土地综合整治工作，列为长期坚持的战略举措，加大统筹协调力度，将举全省之力把头号工程一抓到底、抓出实效。同时，希望各地区、各部门特别是自然资源部门、地方金融监管部门积极引导、大力支持各类企业和金融机构投身“百千万工程”，完善全域土地综合整治项目投资收益分配机制，不断优化营商环境、加大政策供给，积极搭建平台、创造条件、打通渠道，充分激发金融活水作用，让各类企业敢于投资、乐于投资，把广东的“百千万工程”打造成为企业投资兴业的新宝地、各方共享发展成果的新平台。也希望各参会企业和金融机构抓住这次推介活动契机，深化交流合作、加大投资力度，在服务广东经济社会发展中实现自身更大发展，携手共创广东现代化建设的美好未来。\n\n举行广东省首届全域土地综合整治项目推介活动，旨在携手共谋合作共赢的发展蓝图，共筑互惠互利的投资平台，共同助力“百千万工程”实施。当前，我省全域土地综合整治正加快扩面提质，各种有利条件正加速集聚，投资其中正当其时、恰逢其势。\n\n胡建斌表示，我省推进全域土地综合整治， 一是规划有空间 ，全省市县级国土空间总体规划已基本完成编制审批，“百千万工程”首批110个典型镇规划也将于明年春节前完成，各级规划都积极响应全域土地综合整治项目需求，用地指标应保尽保。 二是试点有经验 ，2019年以来我省共开展42个国家级和省级整治试点，已实施478个项目、完成投资481亿元，在项目策划实施方面积累了丰富经验，摸索形成了地券、房券、绿券等创新做法，有效打通了从项目策划到竣工验收的全流程实施路径。 三是收益有保障 ，项目实施主体不仅可以从整治项目各类指标交易中取得合理回报，对整治形成的连片耕地、建设用地等，也可在同等条件下优先取得使用权，用于发展生态产业以获得长期收益； 四是资金有扶持 ，省财政已下达2.55亿元引导资金，未来还将安排奖补资金；农发行广东分行将提供不少于3000亿元的授信额度，国开行广东分行等多家金融机构也将给予融资支持； 五是投资有前景 ，全域土地综合整治是以土地要素优化配置来激活县镇村产业转型、城市更新、生态治理、民生保障等各方面动能，必将带来更加广阔的投资机遇和发展空间。\n\n现在进入项目推介环节。\n\n董可介绍，从化区位于粤港澳大湾区北部，区位条件优越，生态资源丰富，高端要素集聚。2021年9月，经自然资源部批准，从化区成为全国唯一以县域为单元开展全域土地综合整治的国家级试点；今年8月14日，试点方案正式通过自然资源部备案。试点实施以来，广州从化重点结合“一带四区”空间规划格局，谋划了十个要素齐全的整治示范片区，共97个整治项目，预计总投资约400亿元。\n\n董可在现场重点推介了广州从化的三个示范片区项目：\n\n一是鳌头万亩良田示范片区。 该片区项目规模约867公顷，总投资约6.7亿元，主要安排农田整治、河道治理、村庄提升共三大类14项子工程，并同步引入现代农业企业、农业科创与研学等产业，预计可实现约7000亩农田连片规模化利用，盘活至少22亩闲置建设用地。\n\n二 是中部都市综合提升整治示范片区—风云岭片区。 该片区项目规模约1500公顷，总投资约5.67亿元，主要通过基础设施提升、低效建设用地盘活、生态环境优化等，推动“山上—山下—山边”联动，打造十大生态产品、七大环山产业组团，预计盘活建设用地及低效用地约51公顷。\n\n三是吕田镇源头生态保护与修复示范片区。 该片区项目规模约9562公顷，总投资约4.28亿元，主要开展流溪河源头整治、水土保持、生境修复与生物多样性保护，推动生态价值转化，打造流域源头治理先行示范区，预计可新增耕地约1000亩，腾退及盘活低效建设用地约160亩。\n\n南海是全省第一个以县域为实施单元的全域土地综合整治省级试点。 今天推介的3个重点项目——南海家具智造园、樵山康谷大健康产业基地和狮山新材料产业园，就是南海全域土整的标杆项目、示范项目，集中体现了南海土地供应成片、产业协同成链、转型升级成势、科创蔚然成风的突出优势和优越条件。\n\n王勇表示，家具制造、大健康、新材料都是南海超200亿产业集群。今年南海为18个重点产业链提供常态化服务，开展供需对接活动60多场。落户这3个产业园区，企业将享受“一个园就是一条链，上下楼就是上下游”的便利，实现就近采购、协同研发、抱团出海和投融对接。\n\n龙江镇位于龙门县的东南面，处于粤港澳大湾区90分钟通勤圈内，经济结构以水泥建材工业为主。龙江镇以矿山生态修复为重点，对“田水路林村”等进行全要素综合整治，引导产业转型升级，释放乡村振兴潜能，实现“矿地融合、绿色发展”的总体目标。龙江镇实施全域土地综合整治，主要从四方面入手。\n\n一是优生态，实施“一矿一策”分类修复。 上窝石场全面打造成为绿色矿山建设示范区，公塘石场依托资源和景观优势建设矿山公园，文塘石场深度挖掘文化故事打造文旅融合产业，茶排铅锌矿经过无害化处理后转型工业用地，大围石场利用区位交通优势发展物流产业。\n\n二是腾空间，规促进建设用地集聚集约利用。 结合全省整村集成规划试点工作，通过5个村小组整体搬迁、拆旧复垦、矿山修复转型利用，明确优化提升“六区多点”的空间布局，可为“百千万工程”腾出建设用地2000亩。\n\n三是增耕地，补改结合整体推进，探索耕地建设性保护。 划定集中连片区域，开展1200亩高标准农田建设项目，结合土地承包经营权调整，进一步推动小田并大田。开展420亩集中连片的垦造水田整治工作，统筹“耕地占补平衡”和“耕地进出平衡”。\n\n四是强活力，促进三产融合，绿色田野绽新彩。 借助全域土地综合整治实现全产业链发展，主要通过矿山生态修复、农田整治、建设用地盘活等实施12个整治项目。\n\n水头镇位于佛冈县东部，全镇总面积146.21平方公里，下辖十村一居，今年11月，该镇入选省“百千万工程”首批典型镇名单。水头镇以4大模式推动土地节约集约高效利用。\n\n模式一：把“用地”谋“精准”，从守牢耕地“红线”走向镇村集成规划。 严格落实耕地占补平衡、进出平衡，全镇1-10月，耕地流出94.04亩、耕地流入862亩。完成撂荒耕地复耕复种1470.59亩。编制集成规划，做实用地潜力、建设需求、可用空间“三张图”，统筹优化资源配置和空间布局。\n\n模式二：将“零散”拼“整体”，从农户耕地细碎化走向乡村产业规模化。 引进中核汇能农光互补光伏电站项目。整合流转1625亩承包地，项目每年营业收入可达3292万元，年均税收720万元。培育水头镇魔芋特色农业产业园项目。整合撂荒林地、园地，建成9660亩魔芋高标准化种植基地，不到两年时间魔芋产值超1.15亿元。\n\n模式三：把“生态”变“立体”，从单一的生态要素走向多元的功能复合。 建设水头潖江生态绿道，创新建设循环立体农业示范田、共享农场等功能复合型农业产业项目，不断提高农业生产附加值。\n\n模式四：向“存量”要“空间”，从低效荒废闲置走向综合集约利用。 盘活一批低效荒废闲置土地，建设水头国际医养中心、魔芋产学研中心、镇多功能农贸市场、乡村联创公社，重塑产业空间布局。充分利用村庄“边角料”区域，见缝插针式建设“四小园”200多个，篮球场、文体设施场地近100个，见缝植“树”4000多棵。\n\n接下来，两位金融机构代表将上台进行产品推介。\n\n国开行将以总分行联动方式，全力支持广东省全域土地整治制度创新先行先试，推动耕地高质量保护利用，推动土地要素向重点领域、重点项目、重点企业集约。\n\n邓勇表示，将通过 “三个配合” ，支持广东省全域土地综合整治工作的推进。 一是 配合省自然资源厅提供高水平的制度创新，合力探索将土地增值收益、指标交易收益生态产品价值实现等作为项目收益来源的合规路径。 二是 配合县市实施高质量的项目谋划。今天将与茂名高州、江门鹤山分别签订200亿元合作协议，为全省立标杆、作示范。 三是 配合企业提供高效率的资金供给，加快实现示范地区重点项目资金落地。\n\n前期，国家开发银行广东省分行率先与茂名高州、江门鹤山、梅州五华和梅县老区苏区开展合作，今天大会上，还将与鹤山市正式签订鹤城镇一期项目8.1亿元借款合同，这是全省从实施方案到项目融资落实最快、金额最大的全域土整项目。省自然资源厅驻镇帮扶的梅州五华安流镇、著名侨乡梅州梅县松口镇按照“镇域单元”方式推进全域土整。今天也与两位企业伙伴签订“小而美”的项目协议，项目融资即将落地。\n\n今年以来，全国农发行农地业务净增3000亿，贷款余额近万亿，并且发行了国内首单支持国土综合整治主题债券。广东农发行将打造“农地银行”品牌作为服务广东乡村振兴的重要抓手，累计向江门、肇庆等地发放贷款38.8亿支持耕地保护与复垦项目，累计审批34.9亿贷款支持佛山、中山等地“三旧”改造项目，累计投放土地流转和规模经营贷款86亿积极培育支持乡村产业集聚区。今年，在佛山落地了全省首笔政策性金融支持的全域土地综合整治项目，与云浮共同打造的“政银企村共建”模式被农业农村部在全国推广。\n\n广东农发行将坚持以本次推荐会成果为重要抓手，紧密联系各级党政实际诉求，全力抓好三项重点工作。 一是 发挥好机构优势，农发行在各地市均设有机构，将即刻建立省市县三级行联动的“7X24小时”的农地专班，提供贴心、贴身服务。 二是 发挥好办贷优势，全面启动快速办贷机制，打造快速营销、优先审批、迅速投放的绿色通道。 三是 发挥好融智优势，围绕项目设计和主体培育，即要解决“怎么干、谁来借”，又要解决“有效益、还得起”，还要解决“可持续、高质量”。\n\n接下来由企业代表上台推介。\n\n彭广通介绍，中建八局投资发展公司是中建八局的主要投资平台，全力投入广东省全域土地综合整治业务。\n\n在专业能力方面，该企业拥有 “中国建筑生态环境工程研究中心”“土壤养分管理与污染修复国家工程研究中心” 等多个高水平科研中心及院士工作站，是中建集团布局生态修复、环境保护业务的重要载体。在实践经验方面，该企业在浙江主导了金华全域土地综合整治项目，拥有模式构建、政策设计、资金配套、产业导入等多方面丰富经验。该企业学习积累丰富的“广东特色”案例经验，打造了一支熟悉政策逻辑、了解乡村产业的专业队伍，并与意向镇、区广泛开展对接工作，深入了解区域情况，共同谋划项目方案。在佛山三水区南山镇项目推进中，该企业联合规划咨询单位与政府保持密切对接，共同盘点和探讨镇内“耕地整备与产业基础”“矿坑修复与文旅资源”等现状，目前这一项目已初具雏形。\n\n彭广通表示，钧明集团积极落实“百千万工程”部署，先后落地茂名好心湖畔国家田园综合体、中国李乡·山水双合以及马安竹海等标志性项目。在项目的规划建设过程中，逐步探索出一条企业通过乡村振兴参与全域土地整治的发展之路。\n\n一是严守“一要求” ，从生态景观着手，在保持完整的乡村风貌和农林环境基础上，按照“百千万工程”“人水和谐共生”的要求，进一步开发村域空间资源。 二是坚持“一原则” ，在工作中，坚持标准化和个性化相结合的原则。 三是以文化为抓手 ，赋能全域土地整治，在全域土地整治中，盘活乡村闲置的生态和土地资源，通过调整、归宗闲置生态和土地资源，把村田院落变成消费产品，实现村民增收，激发内生驱动力。四是巧用已有资源，“化险为夷”“变废为宝”“点石成金”，根据实地情况，对水土流失严重的地质灾害点进行重新赋能。五是在遵守用地规范的前提下，用好政策，灵活建设，促进产业融合，为项目赋能。\n\n接下来，进入项目签约环节。广东省全域土地综合整治试点成效明显，获得了金融机构和企业的投资青睐。本次这次推介活动，共签约项目52个，金额约1400亿元。\n\n进入县镇政府与投资企业项目签约环节。第一批签约代表分别是：广州市太平镇政府与昊源集团，珠海市平沙镇政府与鹰杰农业科技有限公司，汕头市井都镇政府与中交广州航道局有限公司，佛山市南山镇政府与中建八局投资发展公司，乳源瑶族自治县人民政府与中国城乡控股浙江两山集团联合体，河源市佗城镇政府与广东枫电新能源有限公司。\n\n第二批签约代表分别是：惠州市龙江镇政府与惠州市光大水泥企业有限公司，梅州市新铺镇政府与广东嘉华建设工程有限公司，汕尾市华侨管理区管委会与汕尾市投资控股有限公司，东莞市东城街道周屋股份经济联合社与广东云盛文化旅游有限公司，中山市黄圃镇政府与中山市连翔万创电器科技有限公司，江门市崖门镇人民政府与源林温泉酒店（江门）有限公司。\n\n第三批签约代表分别是：湛江市遂溪县杨柑镇人民政府与中国建筑第七工程局有限公司，高州市政府与中建三局集团有限公司、中铁建发展集团有限公司，肇庆市冷坑镇人民政府与怀集县锦昌农业发展有限公司，揭阳市上砂镇政府与贵州宝洞酱藏酒业有限公司，云浮市云安区东塘自然村家庭农场专业合作社与新兴县新大地有限公司。\n\n因时间限制，活动现场还有26个项目未上台签约。\n\n接下来进入县镇政府与金融机构授信项目签约环节，合计项目6个，签约金额1014.1亿元。黄埔区政府与中国农业发展银行广东省分行营业部，南海区政府与中国农业发展银行佛山市分行，梅州市安流镇人民政府与国家开发银行广东省分行，江门市三江镇人民政府与中国农业发展银行江门市新会支行，江门市鹤山市人民政府与国家开发银行广东省分行，茂名市高州市人民政府与国家开发银行广东省分行上台签约。\n\n金融机构与企业现场签订融资授信协议，合计项目6个、签约金额50.95亿元，签约代表包括：中国建设银行股份有限公司广州从化支行与广州从化城市建设投资集团有限公司，国家开发银行广东省分行与鹤山市公营资产经营有限公司，国家开发银行广东省分行与广东省三宜集团有限公司，中国农业发展银行佛山市南海支行与佛山市狮山镇惠农科技有限公司，中国农业发展银行茂名市分行与中铁建发展集团有限公司，中国农业发展银行中山分行与中山铁工生态环境发展有限公司。\n\n省自然资源厅与金融机构签订框架合作协议。省自然资源厅厅长胡建斌、国家开发银行广东省分行行长邓勇、中国农业发展银行广东省分行行长吴飚上台签约。\n\n在今天的活动中，我们见证了政府、金融机构与企业签订合作协议，未来我们还将见证全域土地综合整治工作加快落地见效，助推广东高质量发展取得扎实成效。\n\n接下来，省自然资源厅还将从机制搭建、政策保障、资金引入、项目储备等方面入手，在2024年推进约100个全域土地综合整治项目，计划到2025年，累计投资2000亿元以上，涉及乡镇约300个；到2027年，累计投资5000亿元以上，涉及乡镇约1000个，有力推动土地要素高效配置、激发县镇村发展活力，广东省全域土地综合整治商机无限、前景广阔。"
  },
  "S06": {
   "heading": "nr.gd.gov.cn_广东省自然资源厅：就在佛山南海！广东省首届全域土地综合整治推介活动即将启动",
   "date": "2023-12",
   "source": "nr.gd.gov.cn_广东省自然资源厅",
   "url": "https://nr.gd.gov.cn/xwdtnew/zwdt/content/post_4299191.html",
   "body": "就在佛山南海！广东省首届全域土地综合整治推介活动即将启动\n\n广州从化区：推进村庄集聚和万亩良田整治\n\n从化区隶属于广东省广州市，是全国唯一国家级县域试点。全区构建“整治格局—整治单元—整治区域—整治项目”四级整治体系，聚焦组织保障、聚焦统筹推进、聚焦亮点打造、聚焦政策创新、聚焦底线思维，因地制宜探索差异化整治模式。通过推进全域土地综合整治，促进资源要素精准配置，释放乡村土地发展潜能，建造生态设计小镇，打造城市近郊万亩良田，让村民“住在景区内”，既能看得见青山、望得见绿水、留得住乡愁，实现产业兴旺和生活富裕。"
  }
 },
 "14": {
  "S03": {
   "heading": "cqjlp.gov.cn_重庆市九龙坡区人民政府：全域土地综合整治试点典型案例丨重庆九龙坡铜罐驿镇：乡村振兴的巴渝样本",
   "date": "2024-09-10",
   "source": "cqjlp.gov.cn_重庆市九龙坡区人民政府",
   "url": "https://cqjlp.gov.cn/zwxx/qxdt/202409/t20240910_13613963_wap.html",
   "body": "全域土地综合整治试点典型案例丨重庆九龙坡铜罐驿镇：乡村振兴的巴渝样本\n\n日期： 2024-09-10\n\n【 字体： 大 中 小 】\n\n铜罐驿镇，地处重庆市九龙坡区西南部，紧靠长江黄金水道，是一座历史底蕴深厚的千年古镇。镇域内分布有中共川渝地区早期领导人周贡植烈士故居，战国巴人船棺葬遗址等历史文物遗迹，柑橘产业延续千年，因品种优良被康熙赐名“大红袍”，历史文化厚重、农业特色鲜明。\n\n2021年，铜罐驿镇全域土地综合整治项目成为自然资源部部署的乡镇全域土地综合整治试点。试点坚持人与自然和谐共生理念，以“强村富农”为目标，突出“规划引领”“系统整治”“乡村制度改革”“共建共享”4大重点工作，统筹全域资源、资金实施5大类12个子项目，有效改善了乡村环境、保护了历史文化风貌、发展了特色产业、提升了乡村治理水平。铜罐驿镇先后获评重庆市历史文化名镇、生态文明示范镇，该镇英雄湾村也先后获评全国乡村旅游重点村、乡村治理示范村、文明示范村。\n\n一张蓝图，优化和美乡村格局\n\n近年来，在大力推进乡村振兴、生态文明建设和城乡融合进程中，铜罐驿镇面临乡村生态环境差、产业发展滞后等问题。乡村空间格局无序，山水林田湖草自然要素相互穿插破碎，人居散乱、环境差，生产生活基础设施配套不足，历史文物和传统院落败落，亟须规划引领绘制和美乡村蓝图。\n\n为此，试点高质量编制“生态修复、乡村振兴、城乡融合”三位一体实用性村庄规划，统筹实施全域土地综合整治，系统保护修复乡村生态与人文环境，实现了生产空间集聚高效、生活空间宜居适度、生态空间山清水秀、文化空间独具魅力。\n\n在绘制村庄规划蓝图的过程中，试点基于“城郊野、山水田、古村落”本底特色，针对产业基础薄弱、发展动能不足、资源闲置率高、设施短板明显等问题，统筹乡村田水林村及产业发展要素，打破村域限制，联合编制英雄湾等4个村村庄规划，盘活3处闲置资产、7个大院落整治提升区域及保障产业发展用地区域，优化商业用地、工业用地、农村社区服务设施用地等空间布局，新增布局产业用地13.52公顷。科学谋划“重庆城乡融合典范、带有浓厚文化底蕴的城市后花园”总体定位；依据国土空间规划划定的耕地、永久基本农田和生态保护“红线”、建设用地上限、河湖水系“蓝线”、历史文物“紫线”，优化“三生”空间布局。利用全域整治政策红利，调整商业用地和工业用地倾斜至英雄湾村、新合村133 亩，后期产业运营收益由 4 个村共享，促进项目落地全面开花、乡村风貌全面提升、产业基础全面加强、城乡要素双向流动。该村庄规划作为全市20个实用性村庄规划示范村之一，获评2021年度重庆市村庄规划编制二等奖。\n\n小微湿地整治后\n\n同时，试点狠抓方案落实。按照3大功能区定位，统筹谋划实施农用地整理、建设用地整理、乡村生态保护修复、历史文化保护、产业布局，编制实施方案落实全域整治，建成智慧高效的产业新村、配套完善的和美乡村、宜居宜业的文化名村。农文旅核心区聚焦传统村落环境差、农房闲置、历史文化“沉睡”、产业落后等突出问题，重点开展人居环境改造提升、农村建设用地拆旧建新、历史文化建筑风貌保护修缮，并适度配置产业用地，让乡村适度集聚、配套更加完善、产业集中孵化，促进建设用地和历史文化价值创新；农文旅拓展区聚焦山水林田与村落系统性、协调性差的问题，按照“山林育水、水润农田、田养聚落”的系统思路，重点开展山林、水系保护修复工程和美丽庭院建设，促进生态资源价值创新；农业生产区聚焦农用地布局散乱、集中度低等问题，实施农用地整理、低效园林地整治，让耕地集中连片、果园集中管理，促进农产品价值提升。\n\n通过试点，铜罐驿镇“三生”空间得到了明显改善提升。试点打造山下连片高产稻田110亩、山上果园经济景观带30亩，新增耕地102亩，区域耕地数量有增加、质量有提升、布局更加优化，农用地资源利用更加高效，实现了农用地由散到聚，生产空间“集聚高效”；美丽乡村民居入住率100%，美丽庭院干净整洁，周边环境大幅度提升，吸引大量游客打卡，群众满意度高，实现了建设用地由乱到治，生活空间“宜居适度”；白鹭、萤火虫、“青波”鱼等环境指示生物显示区域生态多样性得到显著提升，黑臭水体全面消除，实现了生态环境由病到净，生态空间“山清水秀”。\n\n如今，铜罐驿镇正在积极申报中国历史文化名镇，人与自然更加和谐统一，人与文化更加共情共鸣，实现了历史文化资源“由睡到醒”，文化空间“独具魅力”。\n\n三条路径，实现自然资源资产增值\n\n试点区域土地资源利用低效，农用地闲置撂荒，乡村学校资产荒废未利用，闲置宅基地未处置，亟须系统治理盘活土地资源资产。\n\n为实现 耕地提质增效 ，试点在农业生产区按照“果园上山、良田下山”“小块并大块”思路，统筹实施农用地整理和乡村生态保护修复工程，耕地破碎度从62%降低至38%，土壤质量获得有机认证；配套农村道路、灌溉、水肥一体化等基础设施，灌溉保证率从20%提高至85%、路网密度从每公顷35米提高至每公顷65米、道路通达度从50%提高至93%；村集体成立专业合作社，引进“种管销”社会化服务，解决耕地“谁来种、种什么、如何提高效益”等后期管护利用突出问题。\n\n为实现 产业扩容提升 ，试点在农文旅核心区对无保留价值的破旧房屋拆旧复垦25.6亩，新增建设用地指标用于建设美丽乡村民居；对风貌较好的农房由村集体收储36栋，用于与招商企业联营开展文旅产业；盘活国有闲置资产15亩，变为乡村振兴学院培训基地；打造美丽庭院7个、改造提升民居195户；保护修缮周贡植故居、百年天主教堂、明诚中学等历史文物，发展红色文化教育、农文旅研学产业，传承历史文脉；延续壮大柑橘产业，建设智慧果园1200亩。\n\n为实现 乡村生态宜居 ，试点在农文旅拓展区按照“山林育水、水润农田、田养聚落”系统修复思路，实施大溪河干流、支流及水库周边林地修复、苗木补植补造、河道修复，构建2.1公里植被缓冲带，水体富营养化全面消除，水质由劣Ⅴ类提升为Ⅳ类，乡村整体环境全面改善。\n\n英雄湾乡村研学营地改造前(上）后（下）\n\n三篇文章，共建共享推进城乡融合发展\n\n面对乡村产业落后，单一柑橘产业无法支撑可持续发展的问题，试点积极转变传统乡村发展格局，大力发挥千年古镇优势，强村富农做好乡村振兴文章。\n\n做强“金色”文章，激发乡村改革活力。 探索集成农村“三变”改革、“三社”融合发展等改革政策，盘活农村闲地、闲房、闲钱等闲置资源，镇政府在英雄湾村组建“一心四部联合社”，成立由镇农业服务中心、村“两委”班子参加的乡村振兴服务中心，孵化组建村集体股份经济合作联合社，下设房宅合作部、土地合作部、信用合作部、消费合作部四个部门，分别探索闲置农房利用改革、农村土地制度改革、村域内置金融改革、农村供销改革。运营以来，土地合作部流转运营闲置土地1200余亩，房宅合作部收储运营农房36栋，信用合作部入社社员46人、募集股金100万元、累计内置金融互助243万元、分红10万余元，消费合作部与村集体合办消费超市，统购统销农副产品、农技服务、消费产品，减少农民生产生活刚性支出。\n\n做好“红色”文章，擦亮历史文化名镇名片。 深度挖掘铜罐驿镇抗战文化、名人文化、古镇文化、农耕文化、宗教文化等历史文物和文化资源，保留周贡植烈士故居和周贡植墓等重庆市级文保单位、历史文物建筑，建设乡村振兴学院、英雄湾村史馆、综合文化活动中心、“甜甜虎”成长实践基地等4个文化阵地，启动文化惠民10项工程，吸引大量游客和团队开展教育研学。近年来，周贡植故居累计接待游客24万余人次，并被中央电视台《新闻联播》《东方时空》等栏目宣传报道，已成为川渝两地党史联系阵地和共同精神堡垒。\n\n做实“绿色”文章，焕发乡村持续发展生命力。 持续注入资金、人才、技术等要素，促进城乡要素双向流动，乡村发展持续向好，村规民约形成共识，乡村生命力蓬勃向上。资金方面，由政府主导人居环境整治、社会资本运作和美田园和文旅产业、村集体和村民共投共建民宿，发挥资金带动效益优势；人才方面，重视“引育用留”专业人才，吸引人才组建专家库，培育村民作为历史文化讲师，为留用人才颁发新村民证，确保人才“留得住、用得好”；技术方面，搭建“141”基层智治平台，数字化治理乡村，推动智慧果园、果树认领、有机认证，提升乡村治理科技水平。\n\n通过试点，铜罐驿镇农文旅融合开启了新篇新局。发展特色柑橘产业300亩，年产值300万元。开通“绿皮火车”旅游线路，接待游客24万余人次。引进中汉教育集团等社会资源，打造“城市近郊一站式研学旅居”实践基地，“甜甜虎”成长基地已承接2万余名青少年研学活动。2023年，英雄湾村集体收入141万元，每户村民增收约2000元，中央电视台纪录片《英雄湾：英雄精神代代传》，累计观看量超过900万次。\n\n产业发展引来了返乡创业潮。英雄湾乡村振兴学院建立本土人才库，弹性引进高科技专家20人，自2021年建成以来开班40余期，培训全市农业农村干部8000余人左右，吸引年轻劳动力返乡创业约120人。\n\n铜罐驿镇全域土地综合整治试点坚持“村民参与、共建共享”，盘活利用自然资源资产，引入社会企业共谋乡村发展，“以产引才、以才促产”，不断激发本土年轻人返乡创业激情，为乡村振兴注入了强大动力。该试点是传统乡村向共建共享、宜居宜业和美乡村转变的典型代表，可在有以下条件的区域进行推广应用：\n\n一是有明确的战略定位，铜罐驿镇作为全区乡村振兴示范镇、全市历史文化名镇，具有强有力的组织、资金、项目保障，能够确保试点落地成效；二是乡村发展有优势，在镇域或更大的区域内具有明显的区位、产业、交通、历史文化等优势，能够作为核心区先行先试并有带动作用，促进周边村集体和村民传统思想转变；三是村集体和村民改革意愿强烈，能够促进闲置资产盘活，主动谋划与参与乡村建设发展，促进共建共享和乡村全面振兴；四是闲置资源资产亟须盘活利用，可以与区属平台公司合作，搭建乡村振兴知识技能、人才培训平台，促进乡村可持续发展和“自我造血”。\n\n重庆市九龙坡区人民政府版权所有 重庆市九龙坡区人民政府办公室主办\n\n网站标识码：5001070001 ICP备案： 渝ICP备14002057号\n\n渝公网安备 50010702501964号"
  },
  "S04": {
   "heading": "cq.gov.cn_重庆市人民政府：全国生态日丨用好“千万工程”经验 重庆做活全域土地综合整治文章",
   "date": "2024-08-15",
   "source": "cq.gov.cn_重庆市人民政府",
   "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/zdlyxxgk/stbh/hjbh/202408/t20240815_13507056.html",
   "body": "（欢迎您） 注销\n\n繁體版 EN 智能机器人 无障碍 关怀版 手机版 网站支持IPv6\n\n市政府领导 机构职能 政府信息公开 政策文件库 政策解读 公开专题 惠民利企政策专区\n\n高效办成一件事 个人服务 法人服务 特色专栏 服务清单 好差评\n\n我要留言 征集调查 政策问答 新闻发布会 发言人来了 在线访谈 政务微博微信\n\n重庆概况 美丽重庆 巴渝文化 畅游重庆 运动赛事 特产美食\n\n全国生态日丨用好“千万工程”经验 重庆做活全域土地综合整治大文章\n\n发布时间：2024-08-15 17:11\n\n立秋过后，行走在九龙坡区铜罐驿镇，干净清爽的人行步道上，各种水生植被绿意盎然；荷塘中，蛙声此起彼伏。放眼望去，田园风光阡陌纵横，郁郁葱葱，农家院落干净漂亮。\n\n而在一年前，这里很难看到“成片”的农田，是全域土地综合整治的“春风”，让这里搭上了发展的快车，迈实乡村全面振兴的新步伐。\n\n今年6月25日，自然资源部发布全国首批全域土地综合整治试点典型案例，“九龙坡区铜罐驿镇全域土地综合整治项目”成为全国首批15个试点典型案例之一。\n\n蝶变的不只是铜罐驿镇。近年来，重庆积极探索土地管理制度改革试点，学好用好“千万工程”经验，大力推进全域土地综合整治试点，优化生产、生活、生态空间布局，健全推动乡村振兴长效机制，高效配置农村各类要素资源，助力乡村振兴和美丽重庆建设取得实实在在的效果。\n\n实施全域土地综合整治后，铜罐驿镇蝶变为美丽乡村。重庆市规划和自然资源局供图\n\n重塑乡村生产生活生态空间\n\n走进中国名柚——梁平柚的发源地梁平合兴镇，层林叠翠、花香四溢的柚海风光令人赏心悦目。几年前，合兴镇龙滩村和银恒村却是另外一番景象。由于产业道路缺失、生态环境退化、产业势能不足和土地撂荒严重，这里面临着产业欠缺、发展滞后的现实瓶颈。\n\n改变，源自全域土地综合整治项目的实施。2017年，在重庆公布的首批山水林田湖草综合整治项目中，梁平合兴镇榜上有名，这片沉寂的土地从此开启蜕变之旅。整治中，梁平区用全域规划、全域设计、全域整治，全面挖掘试点项目区的生产、生活和生态价值。\n\n为一体推进全域整治与乡村振兴，梁平成立了全域土地综合整治项目领导小组，成员单位涵盖发改、水利、规划自然资源等10多个部门。区规划自然资源局、相关镇（乡）村分别成立项目组，落实专人专班打表推进，形成了统筹兼顾、协调各方的组织保障和强大合力。\n\n梁平区规划自然资源局相关负责人介绍，合兴全域土地综合整治项目总投资4664万元，建设规模为3467亩，实施土地平整1087亩。梁平还配套投入建设资金，用于基础设施建设、产业发展和人居环境整治等。整合整治后，这个传统村落已成为“春赏花、秋赏稻、夏避暑、冬康养”的美丽宜居乡村，生产、生活、生态空间得以重塑。\n\n得以重塑的乡村还有九龙坡区铜罐驿镇新合村。整治前，这里是烂田坎、巴掌地；整治后，田块集中连片，小田变大田，连接山村的山路变身水泥路，昔日破败的村舍焕然一新。\n\n变散田为整田，变薄田为良田，推动和美乡村的美丽变迁和传统乡村的诗意重生。随着全域土地综合整治的推进，如今，越来越多的乡村正在成为望得见山、看得见水、留得住乡愁的魅力乡村。\n\n推进全域土地综合整治后，铜罐驿镇新合村的田块集中连片。重庆市规划和自然资源局供图\n\n探索产业新村持续发展“新模式”\n\n如何将全域土地综合整治项目内各类资源要素进行统筹结合，书写出农业丰产丰收、农民增收致富的大文章？重庆的探索是：规划先行，打造和美乡村产业基地，将传统农村培育为产业新村的持续发展“新模式”。\n\n在九龙坡区，推进全域土地综合整治工作后，当地政府联合编制铜罐驿镇英雄湾村、新合村、大碑村和观音桥村4个村“多规合一”实用性村庄规划，以“以产定居”的规划思路，在镇域范围内统筹建设用地规模，合理划分全域土地综合整治功能片区，为实施整治、后续产业和项目进驻提供依据和目标。\n\n地处武陵山区腹地的黔江区，地形由东北向西南倾斜，呈“六岭五槽”地貌，山地占幅员面积的90%，集中连片的优质耕地资源非常少。在全域土地综合整治中，黔江区将生态保护红线、质量较低、难长期稳定利用等16项指标作为负面清单，逐步实现细碎化耕地集中归并、连片耕种。\n\n恢复耕地后，黔江区采取规划先行的方式，划定粮油生产功能区、重要农产品保供区、特色农产品优势区。按“粮油产业为主、蔬菜食用菌为辅”的思路，大力推广订单农业、种养循环及轮作，实现农业产值收益3000余万元，有效提升耕地利用效益。当地还出台了粮油、蔬菜、食用菌等产业扶持政策，对农业生产经营主体给予补贴，充分调动农民和流转大户的种粮积极性。\n\n一体推进全域土地综合整治，重庆让农业成为有奔头的产业，农村成为最美丽的家园。\n\n石柱县洗新乡土地整治项目现场。重庆市规划和自然资源局供图\n\n激活乡村振兴新动能\n\n近年来，重庆以全域土地综合整治为抓手，创新自然资源制度供给和机制保障，发挥资源整合优势，精准实施镇村国土空间规划，激活配优农村各类资源要素，促进耕地保护和土地集约节约利用，改善农村生产、生活、生态环境，为全市乡村振兴和山清水秀美丽之地建设提供有力支撑。\n\n重庆市规划和自然资源局党组书记、局长扈万泰表示，接下来，全市规划和自然资源系统将深入贯彻落实党的二十届三中全会精神，紧扣改革总目标，立足发挥重庆的比较优势、后发优势，探索区域主体功能差异化用地政策、用地审批与规划许可深度融合，在耕地占补平衡、土地管理灵活性等领域先行探索土地管理制度改革试点。\n\n此外，重庆还将有序推进农村集体经营性建设用地入市改革，健全土地增值收益分配机制。守牢耕地保护红线，全面落实耕地占补平衡重大改革，合理划定耕地后备资源空间和林地管理边界。\n\n记者获悉，重庆将力争每年启动一批市级全域土地综合整治示范项目建设，不断健全工作推动机制和政策技术体系，以解决农村耕地破碎、空间布局优化、要素资源利用和生态功能服务等问题为出发点，以科学规划为前提，系统集成各类涉农项目、资金和政策，对农村全域全要素进行综合治理。\n\n到2024年，全域土地综合整治国家试点将取得明显进展，渝西地区全域土地综合整治试启动。到2025年，我市全域土地综合整治全面推进，工作推动机制和政策技术体系完备。到2027年，建成一批生产空间集约高效、生活空间宜居适度、生态空间山清水秀、资源价值充分彰显、农业农民增效增收的乡村振兴新样板。\n\n外交部 国防部 国家发展和改革委员会 教育部 科学技术部 工业和信息化部 国家民族事务委员会 公安部 民政部 司法部 财政部 人力资源和社会保障部 自然资源部 生态环境部 住房和城乡建设部 交通运输部 水利部 农业农村部 商务部 文化和旅游部 国家卫生健康委员会 退役军人事务部 应急管理部 人民银行 审计署 国家语言文字工作委员会 国家航天局 国家原子能机构 国家核安全局 国务院国有资产监督管理委员会 海关总署 国家税务总局 国家市场监督管理总局 国家广播电视总局 国家体育总局 国家统计局 国家国际发展合作署 国家医疗保障局 国务院参事室 国家机关事务管理局 国家认证认可监督管理委员会 国家标准化管理委员会 国家新闻出版署（国家版权局）\n\n北京 天津 河北 山西 内蒙古 辽宁 吉林 黑龙江 上海 江苏 浙江 安徽 福建 江西 山东 河南 湖北 湖南 广东 广西 海南 重庆 四川 贵州 云南 西藏 陕西 甘肃 青海 宁夏 新疆 香港 澳门 台湾 新疆生产建设兵团\n\n市发展改革委 市教委 市科技局 市经济信息委 市民族宗教委 市公安局 市民政局 市司法局 市财政局 市人力社保局 市规划自然资源局 市生态环境局 市住房城乡建委 市城市管理局 市交通运输委 市水利局 市农业农村委 市商务委 市文化旅游委 市卫生健康委 市退役军人事务局 市应急管理局 市审计局 市政府外办 市国资委 市市场监管局 市体育局 市统计局 市医保局 市机关事务局 市信访办 市大数据发展局 市政府口岸物流办 市国防动员办 市广电局 市林业局 市药监局 市知识产权局 西部科学城重庆高新区管委会 万盛经开区管委会 重庆经开区管委会 市供销合作社\n\n两江新区 万州区 黔江区 涪陵区 渝中区 大渡口区 沙坪坝区 九龙坡区 南岸区 北碚区 巴南区 长寿区 江津区 合川区 永川区 南川区 綦江区 大足区 璧山区 铜梁区 潼南区 荣昌区 开州区 梁平区 武隆区 城口县 丰都县 垫江县 忠县 云阳县 奉节县 巫山县 巫溪县 石柱县 秀山县 酉阳县 彭水县\n\n市纪委监委机关 市委组织部 市委宣传部 市委统战部 市委政法委 市委金融办 市委直属机关工委 市国家保密局 市人大常委会 市政协 市高法院 市检察院 民盟市委会 民建市委会 民进市委会 农工党市委会 致公党市委会 九三学社市委会 台盟市委会 市工商联 市总工会 市妇联 市科协 市社科联 市文联 市作协 市残联 市贸促会 市红十字会 市委党校 市委党史研究室 重庆社科院 三峡博物馆 红岩文化中心 重庆社会主义学院 市科技研究院 市农科院 重庆仲裁办 人行重庆市分行 重庆海关 重庆市税务局 重庆证监局 重庆气象局 市烟草局 重庆邮政管理局 重庆通信管理局 重庆地震局 市教育考试院 市公租房管理局 重庆农村土地交易所 市住房公积金中心\n\n重庆轨道交通 重庆能源集团 重庆水务集团 重庆燃气集团 重庆出版集团 重庆新华书店集团 中国邮政重庆市分公司 市住房公积金管理中心 中国移动重庆公司 中国联通重庆市分公司 重庆市公交集团\n\n人民日报重庆分社 新华社重庆分社 中青报 重庆日报 重庆晨报 重庆商报 重庆青年报 华龙网 视界网\n\n重庆市政府网 微信公众号\n\n重庆市政府网 新浪微博\n\n“渝快办” 移动客户端\n\n版权所有：重庆市人民政府网站 主办：重庆市人民政府办公厅 网站标识：5000000095 ICP备案： 渝ICP备05003300号 国际联网备案： 渝公网安备 50010302000814号\n\n当前浏览器版本过低，建议升级到Internet Explorer\n 9及以上版本或者安装Chrome内核浏览器获得最佳浏览体验。 查看详情\n\n更换或升级浏览器以获得最佳体验。\n\n当前浏览器版本过低，可能会有安全风险且无法正常显示。建议您升级或使用其他浏览器。\n\nQQ浏览器 Google Chrome IE浏览器\n\n若您当前使用的浏览器为QQ浏览器或者360浏览器仍出现该提示，请切换至极速模式。\n\n您即将离开“重庆市人民政府网站”\n\n重庆规划自然资源"
  },
  "S05": {
   "heading": "nyncw.cq.gov.cn_重庆市农业农村委员会：重庆九龙坡：用好“千万工程”经验 谱写铜罐驿全域土地综合整治新篇章",
   "date": "2024-09-25",
   "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
   "url": "https://nyncw.cq.gov.cn/zwxx_161/spdb/202409/t20240925_13659239.html",
   "body": "重庆市农业科学院\n\n重庆市农业广播电视学校\n\n重庆市畜牧科学院\n\n重庆市农业技术推广总站\n\n重庆市畜牧技术推广总站\n\n重庆市水产技术推广总站\n\n重庆市种子站\n\n重庆市动物疫病预防控制中心\n\n重庆市农业综合行政执法总队\n\n重庆市农产品质量安全中心\n\n重庆市农业生态与资源保护站\n\n重庆市农业机械化学校\n\n重庆市农村土地整治中心\n\n重庆市农业机械化技术推广总站\n\n服务事项 办件公示\n\n重庆九龙坡：用好“千万工程”经验 谱写铜罐驿全域土地综合整治新篇\n\n语音合成中，请耐心等待...\n\n进入播报模式\n\n退出播报模式\n\n国务院部门网站\n\n国家发展和改革委员会\n\n工业和信息化部\n\n人力资源和社会保障部\n\n住房和城乡建设部\n\n文化和旅游部\n\n国家卫生健康委员会\n\n退役军人事务部\n\n国家语言文字工作委员会\n\n国家原子能机构\n\n国家核安全局\n\n国务院国有资产监督管理委员会\n\n国家税务总局\n\n国家市场监督管理总局\n\n国家广播电视总局\n\n国家体育总局\n\n地方政府网站\n\n新疆生产建设兵团\n\n市政府部门网站\n\n市发展改革委\n\n市经济信息委\n\n市民族宗教委\n\n市人力社保局\n\n市规划自然资源局\n\n市生态环境局\n\n市住房城乡建委\n\n市城市管理局\n\n市农业农村委\n\n市文化旅游委\n\n市卫生健康委\n\n市市场监管局\n\n市机关事务局\n\n市金融监管局\n\n市人民防空办\n\n市公共资源交易监管局\n\n市知识产权局\n\n万盛经开区管委会\n\n高新区管委会\n\n重庆经开区管委会\n\n市供销合作社\n\n区（县）政府网站\n\n市纪委监委机关\n\n市委直属机关工委\n\n致公党市委会\n\n市委党史研究室\n\n重庆社会主义学院\n\n重庆市税务局\n\n人行重庆营管部\n\n市通信管理局\n\n市邮政管理局\n\n市烟草专卖局\n\n市教科研究院\n\n市教育考试院\n\n市公租房管理局\n\n重庆农村土地交易所\n\n市住房公积金中心\n\n版权所有：重庆市农业农村委员会 主办：重庆市农业农村委员会\n\n学习强国重庆学习平台"
  },
  "S07": {
   "heading": "cq.news.cn_新华网重庆频道：重庆积极推动全域土地综合整治 重塑乡村发展新格局",
   "date": "2024-09-11",
   "source": "cq.news.cn_新华网重庆频道",
   "url": "https://cq.news.cn/20240911/ac0ca28d426e4cd88c2d77ce660c9572/c.html",
   "body": "重庆市九龙坡区铜罐驿镇英雄湾村的景色。新华网 韩梦霖 摄\n\n新华网重庆9月11日电（韩梦霖）走进秋日里的重庆市九龙坡区铜罐驿镇，排排小院古朴整洁错落有致，平整的村道旁农田成片，小微湿地里荷叶摇曳，用村民闲置空房建起的乡村美学生活馆洋溢着文艺的气息，周贡植故居、明诚中学等历史文物建筑历久弥新，一幅美丽宜居村庄的画卷在这里徐徐铺开。\n\n这样一幅乡村美景的背后，是重庆近年来积极推进全域土地综合整治的生动实践。\n\n“曾经的铜罐驿镇，乡村空间格局无序、各类资源利用低效，建设用地闲置废弃，生态质量下降、资源价值未有效转化，乡村生态与人居环境差，亟需系统治理盘活各类资源资产。”九龙坡区规划和自然资源局相关负责人介绍。\n\n2021年，铜罐驿镇全域土地综合整治项目成为自然资源部部署的乡镇全域土地综合整治试点。试点开展以来，铜罐驿镇通过高质量编制“生态修复、乡村振兴、城乡融合”三位一体实用性村庄规划，统筹实施全域土地综合整治，系统保护修复乡村生态与人文环境。\n\n针对产业基础薄弱、发展动能不足、资源闲置率高、设施短板明显等问题，该镇统筹乡村田水林村及产业发展要素，打破村域限制，联合编制英雄湾等4个村村庄规划，盘活3处闲置资产、7个大院落整治提升区域及保障产业发展用地区域，优化商业用地、工业用地、农村社区服务设施用地等空间布局，新增布局产业用地13.52公顷。利用全域整治政策红利，调整商业用地和工业用地倾斜至英雄湾村、新合村133亩，后期产业运营收益由4个村共享，促进项目落地全面开花、乡村风貌全面提升、产业基础全面加强、城乡要素双向流动。\n\n通过试点，铜罐驿镇“三生”空间得到了明显改善提升。试点打造山下连片高产稻田110亩、山上果园经济景观带30亩，新增耕地102亩，区域耕地数量有增加、质量有提升、布局更加优化，农用地资源利用更加高效，实现了农用地由散到聚，生产空间“集聚高效”；美丽乡村民居入住率100%，美丽庭院干净整洁，周边环境大幅度提升，吸引大量游客打卡，群众满意度高，实现了建设用地由乱到治，生活空间“宜居适度”；区域生态多样性得到显著提升，黑臭水体全面消除，实现了生态环境“由病到净”，生态空间“山清水秀”。\n\n治理后的跳磴河流域水清岸绿。新华网 韩梦霖 摄\n\n作为“千万工程”迭代升级的重要平台和抓手，土地整治系统解决“钱从哪里来、人往哪里去、地从哪里出”的问题，在“保护农耕肌理，留住乡韵乡愁；释放发展空间，助力乡村振兴；修复生态基底，提升人居环境；深化制度改革，共享土地红利”等方面发挥了重要作用，已经成为优化空间布局、推进乡村建设、服务乡村全面振兴的重要平台，在助推农村一二三产业融合发展和城乡融合发展、改善农村生态环境和农民生产生活条件方面发挥了重要作用。\n\n“自2018年以来，重庆积极开展国土空间生态保护修复，加强山水林田湖草沙一体化保护修复、矿山生态修复、全域土地综合整治等工作。依托全域土地综合整治国家试点，积极推进农村“三生”空格布局优化，整治修复2720公顷，核实新增耕地122公顷。”重庆市规划和自然资源局党组书记、局长扈万泰表示。\n\n目前，铜罐驿镇全域土地综合整治试点和涪陵区大顺乡（现为大顺镇）全域土地综合整治试点两个项目已入选自然资源部全域土地综合整治试点典型案例。下一步，重庆将充分发挥全域土地整治平台在优化用地空间布局、促进乡村振兴方面的作用，加快形成改革升级版标志性成果。\n\n【纠错】 【责任编辑:李海岚】"
  }
 },
 "15": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨陕西白河仓上镇：村庄规划引领山村整治与振兴",
   "date": "2024-08-29",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5340602",
   "body": "陕西省安康市白河县仓上镇全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。试点坚持规划引领，将天宝等3个村作为首批“多规合一”实用性村庄规划编制试点村，根据规划准确定位村庄未来发展方向；统筹推进试点项目区域低效林草地和园地整理、废旧农村宅基地腾退复垦，进行全域土地资源整合，实现土地提质增效；发挥全域土地整治试点省级奖补资金杠杆作用，撬动各涉农项目资金整合。通过“山上建园区、山下建社区、农民变工人”的全域土地综合整治模式，有效改善了陕南土石山区农业生产条件，提高了耕地质量；改变了农村居住面貌，提高了生活质量；拓宽了农民增收渠道，增加了群众收入。\n\n一、案例背景\n\n（一）基本情况\n\n试点项目位于陕西省安康市白河县仓上镇。白河县地处安康东部，南依巴山、北临汉江，东、南、北三面与湖北省十堰市接壤，总面积1453平方公里，辖11镇113个行政村（社区），总人口21万。全县现有耕地19.1万亩，永久基本农田11.7万亩，是国家重点生态功能区县、南水北调中线工程水源涵养区、国家乡村振兴重点帮扶县。从20世纪70年代开始，县委、县政府带领全县人民坚持修田造地20多年，在陕南率先实现人均一亩基本农田。1991年，全国贫困山区扶贫开发经验交流会议在白河召开。\n\n白河在长期治山创业实践中，形成了领导苦抓、干部苦帮、群众苦干的“三苦”精神。近年来，该县坚持以习近平新时代中国特色社会主义思想为指导，紧扣高质量发展这一主题，坚持规划引领，科学统筹划定“三区三线”，编制镇级国土空间规划和实用性“多规合一”村庄规划。为有效破解在同一空间上，乡村耕地碎片化、空间布局无序化、土地资源利用低效化、生态质量退化等多维度问题，白河县结合县域经济社会发展状况和自然资源禀赋特点，以科学合理规划为前提，将白河县仓上镇天宝村、槐坪村和仓坪村3个行政村确定为基本实施单元，整体推进农用地整理、建设用地整理和乡村生态保护修复。\n\n（二）存在的空间问题\n\n仓上镇地处白河县中后山，境内山势险峻挺拔，溪流纵横交错，自然资源丰富，生态环境优美。天宝村是集农牧业产业园区、旅游观光、农旅融合为一体的综合型旅游景区，是县首例国家4A级旅游景区。\n\n但受规划区地理条件限制，天宝村旅游景区景点小而分散，未形成规模，且规划区内园区和园区内旅游项目主要集中在天宝村三组核心区，不能形成整体形象和品牌，新民宿、配套设施及公共服务设施等建设用地指标紧张；仓上镇槐坪村九组的秦氏生态农业产业园，主要以养殖业、苗木花卉种植、园林绿化及农产品加工为主，受当地地形地貌影响，木瓜苗木种植区地表杂草丛生，田块较为细碎、未成规模，灌溉设施不够完善；仓坪村是仓上镇中草药艾草种植加工核心区，种植田块分布零散、配套设施欠缺、产量低下。裴家河两侧中小企业沿道路零散分布，用地较为粗放，且企业发展建设用地指标紧张。为此，实施天宝村、槐坪村、仓坪村3个行政村全空间、全域、全要素、全类型的土地综合整治项目迫在眉睫。\n\n（三）试点目标任务及总体安排\n\n通过建设用地整理项目的实施，有效解决仓上镇天宝村等3个村467户268.9亩旧宅基地闲置废弃造成的“一户多宅、土地闲置浪费”现象。原有居民搬迁至集中安置点，农村居民住房条件、生产、生活条件和生态环境质量显著提高，人居环境得到极大改善。农村废旧宅基地的减少，与城镇建设用地的增加相挂钩，既能解决试点区域内天宝村4A旅游景区民宿、配套设施及公共服务设施等用地指标需求，也能为仓上镇天宝村等3个村全域土地整治项目的实施提供资金支持。\n\n通过农用地整理项目的实施，实现试点区域内农作物种植面积规模化，完善试点区域农田水利及田间道路等基础设施，提质改造耕地面积1288亩，将整治后的连片、集中耕地划入永久基本农田保护区，增加天宝村、槐坪村、仓坪村耕地面积，促进槐坪村木瓜、仓坪村艾草种植面积规模化，完善种植区域内灌排基础设施及田间道路建设，提升种植质量与产量，增加农民收入，为农村剩余劳动力提供就业机会，助力脱贫攻坚，推进乡村振兴。通过全域土地综合整治试点，解决农村住宅与畜禽圈舍混杂、垃圾散放、生活污水等问题，完善村庄基础设施建设，改 善村民人居环境。同时，恢 复废旧宅基地复垦土地的功能， 有效遏止植被退化，防止水土流失和环境污染，改善区域环境。\n\n二、主要做法\n\n（一）坚持规划引领，精准发展定位\n\n在试点工作中，白河县始终坚持规划引领，将天宝等3个村作为首批“多规合一”实用性村庄规划编制试点村，根据规划准确定位发展方向。规划编制中，在天宝村原有规划布局的基础上，确定了试点区域耕地和永久基本农田保护、基础设施和基本公共服务布局、村庄发展及农村住房布局、产业发展空间布局、历史文化传承与保护、生态保护修复等6大规划目标，将项目区土地利用功能总体划分为高效农业种植区、梯彩田园文化体验区、人居环境聚集提升区、生态景观区及特色村庄发展保护区5类功能分区。同时，以“减量、集聚、整合、提升”的理念，按照“精准定位、突出特色”的要求，将天宝村定位为特色保护类村庄，将其打造为全国青少年教育研学基地、陕西“醉美”4A级旅游胜地、陕西康养度假旅居目的地；将槐坪村定位为集现代农业种植、特色产业发展、农业休闲旅游为一体的聚集提升类村庄，着力打造“乡村生态休闲、民俗文化体验、家庭休闲度假、康体娱乐运动”的一站式乡村生活体验地；将仓坪村定位为文明工业生态宜居村庄，着力打造新型生态循环工业园区、镇域综合服务基地、“互联网+”全域电商平台。\n\n（二）整合全域资源，实现提质增效\n\n一是紧紧围绕村庄规划实施农用地整理项目，统筹推进试点项目区域低效林草地和园地整理、现有耕地提质改造等，总规模约1288亩，新增耕地65.6亩，既提高了整治区域内耕地质量等级、增加了耕地面积，又有效改善了试点区域农业生产条件，为村庄规划落实奠定了坚实基础。二是实施建设用地整理项目，由县政府投资2969万元，对3个试点村因陕南避灾搬迁和易地扶贫搬迁后形成的237户163个废弃旧宅基地斑块进行拆除复垦，实现城乡建设用地增减挂钩节余指标268.9亩，优化了用地结构布局，大大提升了节约集约用地水平，为试点区域天宝村梯彩现代农园、槐坪村木瓜产业园及仓坪村中草药艾草加工产业园等一批乡村振兴产业发展项目建设提供了用地保障。\n\n（三）发挥杠杆作用，撬动资金整合\n\n为统筹实现试点项目区生态保护修复、村庄发展和住房布局、历史文化传承与保护、基础设施和基本公共服务布局等规划目标，白河县以仓上镇全域土地综合整治试点为契机，有效整合自然资源、水利、交通、住建、文广、农业农村、乡村振兴、人社等各部门资金资源力量，多渠道筹集资金超1.3亿元实施天宝水库、产业道路、观光步道、停车场、公厕改造、排水排污管网、“三苦精神”纪念馆、“无土栽培”标准化厂房、农村职业教育实训基地、沼气工程、梯彩农田、4A景区游客中心、民宿群、养殖项目等一大批重点建设项目。\n\n同时，积极引导民营工商资本投资参与高标准农田、耕地提质改造、撂荒地整治等项目建设，实现了项目建设和区域村庄有序发展的高度融合，“多规合一”实用性村庄规划设定的近期发展目标正在逐步实现。\n\n（四）创新发展路径，打造“天宝模式”\n\n近年来，白河县将天宝村等3个村作为改革试点，把山上群众整体搬迁到山下建立社区集中居住，把山上土地流转入股给企业建立产业园区，坚持山上山下同篇谋划，社区园区同步推进，实现了产业发展加速、搬迁推进加快、移民稳定增收、社区管理有序的良好局面，形成了山上建园区、山下建社区、社区办工厂、农民变工人的“天宝模式”。该模式有效破解了“产业如何发展、土地要素怎么保障、项目资金从哪里来”三大难题，实现了“农民家庭发展”“农村面貌变化”与“农业产业升级”的“三跨越”，为持续深入推进新时代乡村振兴探索出了新路径。\n\n三、取得成效\n\n（一）改善农业生产条件，提高耕地质量\n\n通过农用地整理，统筹推进试点项目区域低效林草地和园地整理、现有耕地提质改造，完成农用地整理1288亩，实现新增耕地65.6亩，新增耕地率5.08%；通过建设用地整理，对3个试点村476户旧宅基地进行拆除复垦，完成仓上镇天宝村等3个村城乡建设用地增减挂钩项目420.4亩，实现新增耕地320.7亩。\n\n项目实施后，区域内部形成田成片、路相通、林成行、渠成网的生产布局模式。通过项目的实施，将项目区打造成为白河县一、 二、三产业融合发展的田园综合体。目前，园区以养殖和苗木为主，包括年出栏5000头的养猪场、养殖3万只乌鸡的林下养殖基地、种植20万株木瓜的千亩小杂粮基地、10万株美国三红紫薇、200亩采摘果园、300亩牡丹，同时种植了茶叶、油葵等经济作物。景区依据特色保护类村庄定位，围绕特色农业发展乡村旅游业，形成了集旅游观光、乡村民宿、农家餐饮、休闲娱乐为一体的特色旅游产业链，推动旅游产业收入连年增加。\n\n近年来，天宝园区先后被认定省级现代农业园区、省级休闲农业示范点、省级水利风景区园区，国家级水土保持科技示范园区、中国美丽休闲乡村、国家AAAA级旅游景区。\n\n仓上镇天宝村整治前（上）后（下）\n\n（二）改变农村居住面貌，提高生活质量\n\n为转移安置项目园区群众，仓上镇政府引导镇域内社会资本白河县兴达公司利用易地扶贫搬迁政策契机，在裴家村二组建设一个“功能齐全、环境优美、生态宜居、管理有序”的农村社区，对搬迁群众进行集中安置。集中安置社区由政府负责总体规划，配套建设社区综合服务中心、学校、幼儿园、路桥、水电、排污、硬化、亮化、通讯等功能齐全的现代化社区，有效解决了搬迁群众的居住和生活休闲问题。同时，对搬迁后的旧房，一部分通过旧宅基地腾退为耕地，增加耕地面积，并利用城乡建设用地增减挂钩政策，将结余指标进行流转，流转收益用于乡村振兴；另一部分通过重新修整，作为民宿住房对外营业增加收入。\n\n社区建立了“社区管理房和人，原籍管理地和林”的机制，落实管理义务，以“人”为主的服务事项归社区管理，以“地”为主的服务事项归天宝村管理。将新建的社区隶属镇党委、政府直接管理。社区成立党支部、居委会、监委会三套领导班子和社区物业公司，坚持以社区服务中心为阵地，以满足群众生产生活需求为导向，以解决社区群众的现实问题为目的，为其提供教育培训、信息咨询、生产生活、医疗健康、证件代办、文体休闲、矛盾调处等各项管理服务，提升了居民的生活水平和生活质量。\n\n山上分散居民点\n\n山下安置社区\n\n（三）拓宽农民增收渠道，增加群众收入\n\n白河县在天宝村，通过土地入股分红、社区工厂和园区务工等方式，解决了土地流转后搬迁群众的就业和增收问题。在槐坪村建设工业集中区，通过发展社区工厂，新建1万平方米标准化厂房，与8家工业企业签订入住协议，有效解决了搬迁户家庭中未就业剩余劳动力问题。\n\n目前，天宝等3个村700余人在园区务工就业，农民入股土地近300亩，务工人员月均工资2500元，最高的达6000元，人均纯收入由原来的3268元，增长到2023年的17069元，老百姓的“钱袋子”真正地鼓起来。老百姓形象地说：“我们白天是农民，晚上是居民”，土地集约发展真正改变了群众的生产生活状况。\n\n搬迁群众在上山园区务工\n\n搬迁群众在社区工厂上班\n\n四、适用条件和推广前景\n\n（一）适用条件\n\n通过实施土地流转，将土地集中流转到企业或能人大户手中，便于集中统一经营，有利于形成农业产业市场化、专业化、规模化，从而助推农业发展的现代化，适用于解决传统农业的发展问题。土石山区群众基础差，产业投入不足，缺乏产业发展后劲。通过工商资本与农业资源的融合，解决了农业产业发展的资本投入问题，适用于解决产业发展资金短缺的问题。\n\n（二）推广前景\n\n白河县仓上镇全域土地综合整治试点按照“全域规划、全域设计、全域整治”的要求，整合力量、集中资金，对农村生产、生活、生态空间进行全域优化布局，实施全要素综合整治，其“山上建园区、山下建社区、农民变工人”的现代化农业发展新模式给当前土石山区的发展带来了思考和借鉴，这种模式实现了群众进村入镇与产业配套，工商资本与农业资源融合，项目建设与企业经营对接，有效地解决了民生民计问题，破解了“钱从哪里来、人往哪里去、土地怎么办”三大难题，这种模式对于山区推进现代农业发展具有一定的参考意义。\n\n（陕西省自然资源厅推荐）"
  }
 },
 "16": {
  "S02": {
   "heading": "tjbd.gov.cn_宝坻区人民政府：牛家牌镇2025年全年重点项目进展情况",
   "date": "2026-01-05",
   "source": "tjbd.gov.cn_宝坻区人民政府",
   "url": "https://www.tjbd.gov.cn/zwgk/zfxxgkjz/njpz/fdzdgknr56/zdxm56/202601/t20260105_7214542.html",
   "body": "无障碍 | 关怀版 关怀版 | 简体 | 繁体\n\n牛家牌镇2025年全年重点项目进展情况\n\n1 、牛家牌镇全域土地综合整治试点项目子项目牛家牌镇赵家湾村、西老鸦口村2022年土地开发整理项目主要包括土地平整、灌溉工程、排水工程、交叉建筑物、电力工程及田间道路工程，项目已全部竣工。\n\n2、赵家湾村村台环境提升改造项目已经完成施工招投标工作，实施了污水、自来水、强弱电管网的铺设及变压器安装、场地平整等，目前已基本完成。\n\n关于我们 | 网站地图 | 法律声明 | 使用帮助\n\n主办：天津市宝坻区人民政府 版权所有©\n\n服务信箱：bdqzfb02@tj.gov.cn\n\n网站标识码：1201150008 津ICP备05002250号-2 津公网安备 12011502000093号\n\n系统检测到您正在使用ie11以下内核的浏览器，不能实现完美体验，请更换或升级浏览器访问！"
  },
  "S04": {
   "heading": "tjbd.gov.cn_宝坻区人民政府：宝坻区：稻海渔歌乡村新境",
   "date": "2022-08-08",
   "source": "tjbd.gov.cn_宝坻区人民政府",
   "url": "https://www.tjbd.gov.cn/bdxw/jrbd/202208/t20220812_5957347.html",
   "body": "宝坻区：稻海渔歌乡村新境\n\n稻海渔歌中的湿地村落，人声不再是独奏，而是与自然的协奏。走在天津市宝坻区牛家牌镇赵家湾村，清风吹打稻谷、湖波推出涟漪、果园飘来欢笑、院前翻修嘈杂，一个生态秀美、环境宜居宜业的北方小村样貌逐渐清晰。\n\n图为无人机拍摄下，天津市宝坻区牛家牌镇赵家湾村的人居环境新貌。\n\n无人机升空，这是一个镶嵌在稻田、鱼塘、绿海里的生态村庄。无人机降下，鹭鸟仍在田间悠然信步、亲水而居，而村民们则忙于种植、养殖和搞手工业制作。2021年9月，中国农民丰收节天津会场的分会场就设在这里。\n\n近年来，宝坻区每年投入资金2亿元以上，用于整治农村人居环境。“赵家湾村就是宝坻农村人居环境改善提升的典型村落，这个村有环境打底，先后荣获全国乡村治理示范村、全国生态文化村、全国文明村等20余项荣誉称号，又成为天津市首批乡村振兴示范创建村。”宝坻区农业农村委副主任、农村中心主任张宇介绍，目前全区累计已建成51个农村人居环境整治示范村、403个美丽村庄，累计建设“四好农村路”200公里，被中央农办、农业农村部命名为“全国村庄清洁行动先进县”。\n\n图为天津市宝坻区牛家牌镇赵家湾村村民们在村内新装点的围墙前，感受乡风文明在身边的宣教。\n\n人居环境焕新颜，产业发展添活力。让宜居的环境和富民的产业“美美与共”，是天津市美丽乡村建设的出发点和落脚点。宝坻区以梳理乡村自有特色为基础，在改善农村人居环境的同时，盘清家底、盘活资源，因地制宜发展乡村产业，推动形成“村美民富、向上向善”的村庄新境。\n\n曾经的赵家湾村被周边村戏称为“赵湾儿”，这里人穷蛤蟆多，远近村庄的闺女都不愿嫁来。2000年初，刚刚当选村党支部书记的董永忠就从解决水患入手改善人居。修建水闸治水后，他又带领村民铺上了红砖村路。路修好的那一年，村里第一次在棉花丰收季迎来了十几个经纪人上门收购，村民挣到第一桶金。“要致富，农村人要挺直腰杆，靠的是什么？经济是基础，可人居环境、法治建设、精神文明建设同样重要，全面发展才是新时代新农村该有的样子！”董永忠带着两委班子，在随后的十几年中对人居环境进行了大小上百次提升。像赵家湾村一样，宝坻全区700多个村都一门心思抓人居环境整治提升，紧扣群众急难愁盼问题，注重从根本上解决村民的后顾之忧。\n\n心中有“数”，人居环境改得“有理”。2012年，宝坻区生态村升级改造拉开了帷幕，董永忠第一个向镇党委递交了一笔笔拿脚步丈量出来的详尽数据，给赵家湾村争取到了机会，水域情况、道路条件笔笔清楚，村委会前建文化广场、湖心岛上修凉亭理由充足，装多少盏路灯、栽多少棵树有零有整。董永忠把村“搬”进材料里，摹画未来生态村如何跟特色产业发展和谐共生。\n\n干出样子，人居环境改得“有面”。2020年10月，宝坻区各村实施厕所改造工程。上级部门要来检查，电话打到董永忠的手机上，得到的是干脆利落的回答：“欢迎领导检查，放心，我们接得住！”速度意味着让群众满意，愿意和支持改造；速度意味着质量过硬，没有返工；速度意味着改造顺应村里产业发展，不拖村里发展的大速度。董永忠说：“硬化村内路面，种植景观树，修建湿地公园，只要有工程，村两委班子成员都会守在工地。”正是凭借以赵家湾村为代表的“宝坻速度”，宝坻区干成了一批群众受益又满意的农村人居环境整治工程：累计改造农村户厕15.8万座、建设公厕236座，基本实现卫生厕所全覆盖；铺设污水管网3285公里，建设污水处理站851座，在全市率先实现厕所、洗衣、洗浴、厨房“四水合一”收集处理；采取垃圾治理市场化措施，“村收集、镇运输、区处理”模式在五年前就得以实现。\n\n图为村民在天津市宝坻区牛家牌镇赵家湾村新建成的广场上跳舞休闲。\n\n白天的小村静悄悄。村民们不是去稻田劳作，就是去外面经商、到工厂上班，“要找人，稻花深处；一步步，踏停蛙鼓”，好一幅村级版的“富春山居图”！赵家湾村美了，赵家湾人富了，村民仅分红一项每年就有4500元以上的收入。村里还正在开展乡村振兴示范村创建工作，全力打造稻田里的水村——纤维村。以实施土地全域综合整治试点项目为切入点，借助清华大学“产学研用”人才智力优势，在村内新建纤维艺术工作室、书院；引入社会资本6048万元新建特色湿地民宿，持续推进立体生态农业区、艺术农田观光区、农事体验功能区、乡村休闲度假区建设，努力打造北方特色水乡景观和“北方乡村民居3.0”升级版。\n\n宝坻区充分挖掘村庄个性化特点，不搞千篇一律、千村一面，鼓励各村因地制宜建设有得看、有得玩、有得吃的小花园、小菜园、小果园、小游园。“地气加人气，显得村庄格外有灵气，和城里比不土气，和过去比更福气。”张宇介绍，像这样更像现代化新农村的村落在林亭口、黄庄等大镇古镇随处可见。\n\n乡村振兴离不开乡村善治。近年来，宝坻区围绕做“人”的工作抓农村人居环境整治，通过建强基层党组织、发动党员干部群众广泛参与，进一步夯实了乡村治理的根基，使各个村庄都变得干净整洁、宜居宜业，成为兼具现代与泥土交融的气息、诗与远方相伴的乡愁记忆，更让乡村与返乡新农人在全面振兴中实现“双向奔赴”。\n\n【打印页面】 【关闭页面】"
  }
 },
 "17": {
  "S02": {
   "heading": "jl.gov.cn_吉林省人民政府：大安：聚力打造后备耕地资源 综合开发示范区 全力保障粮食安全",
   "date": "2025-02-12",
   "source": "jl.gov.cn_吉林省人民政府",
   "url": "https://www.jl.gov.cn/szfzt/jlssxsxnyxdh/gddt/202502/t20250212_3362602.html",
   "body": "大安：聚力打造后备耕地资源 综合开发示范区 全力保障粮食安全\n\n时间：2025-02-12 09:22 来源： 字体显示： 大 中 小\n\n近年来，大安市坚决扛起保障粮食安全重任，全力推进盐碱地等耕地后备资源开发，共改造盐碱地26.09万亩，探索形成了“五位一体”的大安模式。2024年，新平安镇全域土地综合整治试点项目，被列为全国第二批全域土地综合整治试点典型案例。新建高标准农田33.5万亩，推广水肥一体化46万亩，粮食产量实现历史性大丰收，乡村全面振兴稳步推进。\n\n新平安镇长富村、长胜村、长建村和平安村的中化环境盐碱地综合利用项目，作为大安盐碱地等耕地后备资源综合利用国家试点和重要组成部分，施工进程有序推进，展现出该市在耕地后备资源开发方面的坚定决心和强大执行力。\n\n中化环境修复（吉林）有限公司大安分公司总经理马亮表示，项目采用“1+3”模式，分4年完成。目前项目正在进行基础设施建设部分，预计在4月完成基础设施建设，6月完成一期土壤培肥及改良，并组织全面种植。12月完成项目建设期竣工验收，后续3年进行土壤培肥及改良工作，整个项目预计在2027年完成。\n\n大安盐碱地等耕地后备资源综合利用国家试点中化环境盐碱地综合利用项目是白城地区2024年重点项目，以实现2024年发展改善8.6万亩生态环保、地力肥沃、设施配套、稳定持续的水田，并实现全面有效种植为目标。通过完善水利等基础设施建设，推行以水治碱，以稻治碱的科学模式，实施以工程建设加培肥地力为核心的综合土壤改良技术，实现全面种植，达到稳产、高产的高标准农田建设标准，促进地方经济可持续发展。\n\n马亮说：“项目完成后，从经济效益来看，预计新增优质耕地约9315亩，粮食年产量约1300万斤，为农业增收提供有力保障。从社会效益来看，项目的实施将有效缓解大安市的耕地压力，提高农业投入产出率，增加农民就业机会，促进农民增收，为乡村振兴注入新的活力，为全省千亿斤粮食产能建设工程作出大安贡献。”\n\n下一步，大安市将坚定不移抓好粮食生产，不断夯实高质量发展根基。聚焦粮食安全“首要担当”，全力实施后备耕地资源综合开发率先突破行动，以更大力度抓试点、育良田、保粮安，全方位提升粮食综合生产能力，打造后备耕地资源综合开发示范区。提高粮食生产能力，守牢保障粮食安全底线。坚决完成盐碱地等耕地后备资源综合利用国家试点项目任务，同步开展旱田盐碱地改良技术试验，探索苏打盐碱地绿色治理新路径。建立耕地后备资源“投融建运管”一体化推进机制，健全完善盐碱地治理“大安模式”。聚力改地增粮、以水保粮、科技兴粮，丰富拓展“大安模式”内涵外延。"
  },
  "S04": {
   "heading": "jl.gov.cn_吉林省人民政府：大安市全域土地综合整治试点项目见闻",
   "date": "2022-08-14",
   "source": "jl.gov.cn_吉林省人民政府",
   "url": "https://www.jl.gov.cn/szfzt/jlssxsxnyxdh/gddt/202208/t20220814_8540990.html",
   "body": "大安市全域土地综合整治试点项目见闻\n\n时间：2022-08-14 13:14 来源： 字体显示： 大 中 小\n\n7月的一天，记者来到了大安市全域土地综合整治试点项目区，这里曾是荒废的“疙瘩地”，如今不但变成了规整的水稻田，项目区农民还分到了水田，村集体将剩余水田通过政府平台对外进行出租，碱地变良田让全村受了益。同时，依托配套实施易地搬迁安置项目和牧业小区建设项目，部分农民住上楼房。\n\n经济效益、社会效益“双赢”\n\n6年前，大安市叉干镇民乐村农民曲卫杰家承包9公顷地有一半因属严重盐碱地不能耕种，收入才6万元。如今经改造的盐碱地变成了良田，仅去年这些地的收入就有25万元。“原先脆弱的生态环境变成了人工湿地小环境，贫困户不仅一次性脱了贫，而且直接走上了奔小康的快速路。”叉干镇民乐村党支部书记介绍说，村集体将剩余的480公顷水田通过政府平台对外进行出租，租期10年，一次性支付村集体1700万元。\n\n华清农业采用清华大学自主知识产权技术对位于大安示范基地1100公顷盐碱地进行改良，改良后有机模式下种植的水稻已经顺利通过了有机认证，“华清绿谷”有机和绿色系列大米2017年开始进入高端超市进行销售。\n\n唤醒盐碱地这一“沉睡”资源\n\n小账折射出全省的大账。我省力争到2030年粮食产量达到1000亿斤，需要改良盐碱地增加粮食产量。\n\n自2016年省自然资源厅在我省西部开展全域土地综合整治试点以来，大安市利用政府财政资金实施占补平衡项目5个，总计新增耕地4.09万亩，总投资达4.62亿元，每年可增产粮食0.49亿斤。同时，配套实施易地搬迁安置项目和牧业小区建设项目，计划总投资4.9亿元，拆迁房屋465户，安置村民1042人，规划建设住宅12栋、商业用房6栋、牛舍94栋、羊舍159栋、看护房253间、水井以及相关附属配套设施。\n\n很多企业和社会资本青睐盐碱地这一“沉睡”的资源，为此，政府积极引导，让盐碱地改良步入良性循环轨道，最终面向保障粮食安全国家重大需求，服务我省千亿斤粮食目标，围绕“两增两提”目标（增加耕地数量，增加粮食产量，提高粮食品质，提高农民收入），开展吉林省盐碱地生态修复与品质农业示范区建设，实现藏粮于地、藏粮于技。\n\n海坨乡互助村盐碱地改良项目区，于2月5日进场施工，工程于5月15日竣工交付。河北硅谷肥业公司东北地区经理董要东告诉记者，他们与另外10家公司都开辟试验田，进行擂台比武，就看谁的水稻产量高，硅谷公司在海坨乡的承包试验田面积50余公顷。他们因为等地，水稻推迟到6月10日插秧，比照老稻田晚了两周，不过后期通过加强田间管护，有望每公顷超过1.5万斤。\n\n“今年，全域土地综合整治试点项目施工没停工一天。现在是田间管护的关键期，造地增收占一半功劳，管护好肥、水，监测PH值和含盐量，才能保证作物有个好产出。”大安市自然资源局整理中心主任对记者说。盐碱地改良，以稻治碱，以水稀释。一公顷地种植成本1万元，改良成本多达几万元。自2016年起，大安市占补平衡盐碱地改良地块已达11个，面积12.73万亩，财政投入及社会资本投资已达36亿元，粮食增产1.55亿斤。\n\n推进易地搬迁土地综合利用\n\n为做好疫情防控与项目建设两手抓、两不误，大安市成立5个专班，针对施工单位实行“点对点”服务，切实帮助施工单位解决材料及域外机械人员进场难题。\n\n大安市自然资源局副局长唐海峰介绍说，如今，这项工程已进入高速推动期。为早日完成房屋拆迁工作，保证生产不误农时、不误农事，项目一线工作人员，克服恶劣天气，放弃假日休息，加班加点奋战在拆迁一线。\n\n李长江说，过去听说要在盐碱地上种水稻，他都反对过，现在村子整理完，人均1公顷水田，全村300多人口，耕地1100多公顷，除村民承包外，剩余水田通过政府平台对外出租获得收益。村集体实力壮大了，服务村民的能力也更强了。列入整理区的村民拆了分散各处的老房，领取了安置费，今年就可以住上崭新的楼房。\n\n今年，新平安镇将对长明村、长和村6个自然屯及部分平安村村民共455户房屋进行拆除，为加快推进易地搬迁土地综合利用，老旧房屋拆除后将新增耕地61公顷，为解决拆迁后的牲畜养殖问题，在长和村规划建设育肥羊和育肥牛两个牧业小区，可养殖育肥羊4.8万只、育肥牛4020头。笔直的田埂，纵横的机耕路，守护着正在分蘖的水稻田。为打造出优质的水稻田，土地整治项目当年施工、当年新植的水田区4万余亩。\n\n好政策、好技术是大安市盐碱地改良的“底气”。经过10多年的研究，中科院大安碱地生态站一直致力于吉林西部土地整理重大工程，在水利工程和田间工程建设上进行实践探索，对环境与生态的影响把脉定向。"
  },
  "S05": {
   "heading": "jl.gov.cn_吉林省人民政府：大安市：守护耕地生命线 织密粮食安全网",
   "date": "2025-06-25",
   "source": "jl.gov.cn_吉林省人民政府",
   "url": "https://www.jl.gov.cn/szfzt/gzlfz/gzdt/202506/t20250625_3473013.html",
   "body": "新平安镇全域土地综合整治试点项目整治前后对比图。\n\n作为全省“千亿斤粮食”产能建设工程主战场之一，近年来，大安市按照“在保护中开发、在开发中保护”原则，围绕“保障粮食大安全，新增产能十亿斤”的工作目标，探索形成了盐碱地开发治理“大安模式”，为国家提供了苏打盐碱地综合治理“大安方案”，向全省“千亿斤粮食”产能建设工程交出了“大安答卷”。\n\n大安市现有未利用地面积185.04万亩，占总幅员面积的25.41％，多为苏打盐碱土，在全市18个乡镇境内均有不同分布。大安市始终坚守耕地保护红线不动摇，坚定落实上级下达的耕地保有量和永久基本农田保护面积等指令性任务，耕地数量稳中有增。2024年度，上级下达的耕地保有量任务327.40万亩，实际保护面积356.89万亩，多保护29.49万亩；上级下达的永久基本农田保护任务249.12万亩，实际保护面积249.70万亩，多保护0.58万亩。通过实施盐碱地土地整治项目规模持续扩大，大安市耕地质量逐年提高。实施“以水定地、集中连片、生态改良、良种自育、现代化生产经营”五位一体的改良方式，探索形成了盐碱地治理“大安模式”，充分发挥耕地后备资源优势，加大了盐碱地开发整治力度。实施新平安镇全域土地综合整治试点项目，改造耕地2.04万亩，腾退建设用地0.09万亩，新造水田2.25万亩，治理退化草原0.90万亩，栽种和改造林地0.12万亩，实现了耕地增加、粮食增产、农民增收、生态增效，社会效益、生态效益、经济效益多赢的效果。\n\n大安市作为盐碱地等耕地后备资源综合利用国家试点，坚决把抓好粮食增产作为头等大事，总结推广“大安模式”，全面提升“四良一智”综合效能，顶格推进“国家试点项目”，建好“一院一基地”，办好“一馆一论坛”。"
  }
 },
 "18": {
  "S01": {
   "heading": "zrzy.jiangsu.gov.cn_江苏省自然资源厅：江苏省盐城市建湖县高作镇全域土地综合整治试点",
   "date": "2025-04-17",
   "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
   "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d56gsjdqr/stzlxf/2025/04/17142955818980.html",
   "body": "江苏省盐城市建湖县高作镇全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。地处苏北里下河腹部的建湖县高作镇，以辖内大尖、双界等14个行政村全域范围内全要素为整治对象，以耕地碎片化、空间无序化、生态质量不高、历史文化特色彰显不足等问题为导向，对项目区资源环境本底条件和国土空间发展现状进行分析，识别出国土空间开发、保护、利用等方面存在的主要问题，依据高作镇实用性村庄规划对项目区进行全域规划、整体设计、综合治理。通过对项目区农用地整理、建设用地复垦、乡村生态保护修复和乡村历史文化保护四大类工程实施，“小田变大田、大田变良田”改革试点初见成效；率先整镇推进万亩高标准农田建设，建成稳定高产吨粮田；一二三产融合发展推动强村富民目标逐步实现，较好解决了农村土地“不能用、用不好”困局，取得了生态、经济、社会等综合效益，有效推动了乡村生产、生活、生态融合发展，着力提高了土地利用率、产出率，为实现乡村振兴提供了有力支撑。项目取得以下成效： （一）社会效益。沉睡土地资源得以盘活。 根据项目编制的《实施方案》，深入实施“藏粮于地”战略，结合实施农房改善工作，按照“增加耕地面积、提升耕地质量、提高耕地产出”的工作思路，积极开展建设用地和农用地整治，破除田埂、平整田地，解决土地细碎化问题。目前已形成增减挂钩指标1998亩、补充耕地指标600亩。正在推进增减挂钩项目，已完成签约农户708户，搬迁631户，计划新增面积372亩；实施完成占补平衡补充耕地516亩。现有耕地效益有效提高。按照“先流转、再建设，先平整、再配套”模式，建立高标准农田种（养）单元格，统筹“水、田、路、林”等设施建设改造，逐步建成“田成方、渠成型、林成网、路相通、沟相连、土壤肥、旱能灌、涝能排、无污染、产量高”的土地连片化、条田化、单元格化稳定高产吨粮田。“小田变大田、大田变良田”取得阶段成效，初步形成西南片区万亩高产稳产田和中、东部片区2个万亩优质稻麦种植基地，把永久基本农田全面建成高标准农田，建设智慧农场，实行农药、化肥“减量使用”，有效降低农业面源污染，进一步提升耕地质量和种植水平，亩均增产100多斤、增收达200元。\n\n项目区土地平整整治前后\n\n项目区挖掘土地资源建设前后\n\n（二）生态效益。 实施过程中始终坚持数量、质量、生态“三位一体”保护。生态修复成效明显。高作镇在实施全域整治时，保留项目区内部分零星的其他园地作为生物栖息地。对于灌排沟渠和田间道路，只将主要田间道和灌水渠道进行硬化，次要的灌水渠道和田间道将采用土渠和土路，减少水泥对生态环境的破坏。项目区还改造现有的农田林网，丰富项目区的生态景观，提升其乡村景观的生态服务功能，实施河道生态链修复行动，建设生态河道护坡1公里，河道疏浚12公里，整修生态渠0.78公里；在圩口、渠边、河岸开展绿化栽植，重塑自然和谐的水土生态系统。基础设施日趋完善。建设光明、大尖等新型农村社区、康养社区6个1154套；8.4公里建县路建成通车，20公里乡村道路黑色化工程全部完成提升，“四横三纵”道路体系进一步完善。\n\n项目区河道生态修复前后对比\n\n项目区建县路建设前后对比\n\n项目区新型农村社区建设前后对比\n\n（三）经济效益。 促进城乡一体化是高作镇全域整治项目核心目标，全域综合整治项目的实施，明确土地权属，依法给予农民征地补偿，妥善安置，并给与政策保障，维护农民合法权益，农民返乡积极性增高，为未来产业发展穷实劳动力基础。推动产业融合发展。依托县新农投公司平台，借助“遇建湖鲜”县级农产品品牌优势，推介销售高作特色农产品；编制完成以建阳县抗日民主政府旧址、长北村特色保留村庄为主题的体现农耕文化的红色文化旅游规划方案；成功举办“苏韵乡情”省级活动，龙虾学堂、春源果蔬、军曼火鸡总动员等“红色、绿色、金色”乡村旅游资源，串点成线打造乡村游精品线路，提升一二三产融合发展水平。强村富民提速增效。通过全域综合整治项目的实施，增加就业岗位，部分解决目前农村人均耕地少的问题，相关配套服务项目也会增加非农就业岗位；带动乡村休闲旅游产业发展，可为试点区及周边区域带来可持续性的经济收益。据测算，“十四五”期间，高作镇将实现“村级积累突破1000万元、村集体经营性年收入突破100万元、户均集体分配累计突破1万元”目标任务。\n\n项目区高标准农田建设前后"
  },
  "S04": {
   "heading": "jianhu.gov.cn_建湖县人民政府：建湖高作全域土地综合整治入选国家级典型案例",
   "date": "2024-09-13",
   "source": "jianhu.gov.cn_建湖县人民政府",
   "url": "https://www.jianhu.gov.cn/art/2024/9/13/art_12508_4234659.html",
   "body": "建湖高作全域土地综合整治入选国家级典型案例\n\n9月10日，自然资源部发布第二批全域土地综合整治试点典型案例，建湖县高作镇全域土地综合整治试点入选。\n\n2021年，高作镇全域土地综合整治项目是自然资源部部署的乡镇全域土地综合整治试点之一，依据实用性村庄规划对项目区进行全域规划、整体设计、综合治理，系统实施“农用地整理、建设用地复垦、生态保护修复和乡村历史文化保护”四大类工程，整镇推进万亩高标准农田建设，“小田变大田、大田变良田”改革试点取得明显成效，基本建成稳定高产吨粮田，一二三产业融合发展稳步实施，有效解决农村土地“不能用、用不好”困局，取得生态、经济、社会等综合效益，推动乡村生产、生活、生态融合发展，实现“耕地数量有增加、质量有提升、效益有提高”，为全面乡村振兴提供了有力支撑。工作经验做法于2022年6月27日被央视《焦点访谈》专门进行报道、2023年7月在全省全域土地综合整治项目推进会上作经验交流、入选“中国改革2022年度地方全面深化改革典型案例”。\n\n“一张总图”优化乡村格局。坚持把科学系统整治规划方案作为推动乡村生产、生活、生态融合发展的“牛鼻子”，以国土空间规划为统领，以“稻香高田、红色耘作”为核心，立足新型农村社区建设、农业产业提质增效、田园风貌塑造等乡村发展需求，促进整治方案与农业、交通、水利、供电等部门各类专项规划有机衔接，按照“宜农则农、宜建则建、宜留则留、宜整则整”原则，确定组织管理、实施时序、项目安排等内容，确保全域整治四大任务准确客观实施。突出耕地数量、质量、生态“三位一体”保护，科学制定土地综合整治工程建设标准，重点增加农田水利设施投入，实施灌排分开，疏通河道，畅通排水，增加蓄水容量；增加有机肥投入，注重培肥土壤；发展生态农业，改造农田生态系统，建设一定比例生态化渠道，做到“一张总图”指挥土地系统综合整治。\n\n“两条路径”提高耕地效益。实现耕地提质增效，按照“增加耕地面积、提升耕地质量、提高耕地产出”工作思路，积极开展农用地整治和建设用地复垦，破除田埂、平整田地，解决土地细碎化问题。目前已形成补充耕地指标733亩、增减挂钩指标1998亩。正在推进实施增减挂钩项目，完成农户搬迁655户，预计新增耕地317亩；实施完成占补平衡补充耕地510亩。提高耕地经济效益，按照“先流转、再建设，先平整、再配套”模式，统筹“水、田、路、林”等设施建设改造，逐步建成“田成方、渠成型、林成网、路相通、沟相连、土壤肥、旱能灌、涝能排、无污染、产量高”的土地连片化、条田化、单元格化高标准吨粮田。“小田变大田、大田变良田”取得阶段性成效，初步形成西南、中部、东部3个万亩连片优质稻麦种植基地，建设智慧农场，实行农药、化肥“减量使用”，有效降低农业面源污染，进一步提升耕地质量和种植水平，亩均增产100多斤、增收达200元。\n\n“多种手段”推进城乡融合发展。依托县新农投公司平台，借助“遇建湖鲜”县级农产品品牌优势，推介销售高作镇特色农产品；编制完成以建阳县抗日民主政府旧址、长北村特色保留村庄为主题的体现农耕文化的红色文化旅游规划方案；成功举办“苏韵乡情”省级活动，整合龙虾学堂、春源果蔬、军曼火鸡总动员等“红色、绿色、金色”乡村旅游资源，串点成线打造乡村游精品线路，提升一二三产业融合发展水平。通过全域综合整治项目的实施，增加就业岗位，解决目前农村人均耕地少的问题，相关配套服务项目也会增加非农就业岗位；带动乡村休闲旅游产业发展，可为试点区及周边区域带来可持续性的经济收益。据测算，“十四五”期间，高作镇将实现“村级积累突破1000万元、村集体每年经营性收入平均突破100万元、户均集体分配累计突破1万元”目标任务。\n\n下一步，我县将坚持系统思维，严守试点底线，以高效开展全域土地综合整治试点工作为抓手，放大全域土地综合整治工作成效，围绕“农用地整理、建设用地复垦、生态保护修复和乡村历史文化保护”四大任务，结合“小田变大田、大田变良田”试点改革，深入实施“藏粮于地、藏粮于技、藏富于民”战略，按照“宜农则农、宜建则建、宜留则留、宜整则整”的原则，推进“农地重整、村镇重建、要素重组”，全力打造全域土地综合整治特色品牌，实现耕地保护与人居环境改善、产业发展与乡村风貌重塑协同发展，建设良田增产、产业增收、生态增绿、农民增富的“强富美高”新农村。"
  }
 },
 "19": {
  "S01": {
   "heading": "zrzy.jiangsu.gov.cn_江苏省自然资源厅：江苏省宿迁市宿豫区新庄镇全域土地综合整治试点",
   "date": "2025-04-17",
   "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
   "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d57dqr/jsxcg/2025/04/23343413152717212747.html",
   "body": "宿迁市宿豫区新庄镇全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。试点聚焦新庄镇“局部耕地细碎化、建设用地空间布局无序化、乡村生态环境质量不高”等问题，以推动城乡区域协调发展为目标，坚持“政府主导、部门联动、规范运作”的原则，准确把握试点政策，稳步推进“腾空间、增耕地、优生态”等试点工程，促进农业生产方式同步转变、农民生活方式同步转变、农村社会管理方式同步转变，为打造宜居宜业和美乡村、助力乡村振兴战略实施提供示范经验。试点取得以下成效： （一）增加了耕地产能 以解决耕地碎片化问题为重点，推进耕地集中连片整治，逐步将零散、细碎的耕地整治形成集中连片优质耕地，实现“小田并大田”，耕地质量有提升。试点实施后，新增耕地1560亩，年增加粮食产能1740吨，亩均增加粮食产能1吨，年增加收入352万元，人均增加收入220元。建成优质籼米示范基地约1.2万亩。\n\n新庄镇万亩籼米基地现状图\n\n（二）腾退了用地空间 坚持一张蓝图干到底，不断优化国土空间格局。分类推进空心村整治，推动人口、产业和资源要素适度集中，释放乡村低效闲置建设用地和空闲地空间。试点通过实施城乡建设用地增减挂钩搬迁复垦，优化了布局，腾退建设用地指标920亩，有效保障粮食产业园、袁家村、新庄工业园等项目用地需求。 （三）优化了生态环境 结合绿美村庄建设，统筹推进生态保护和修复，聚力打造江苏省杉荷园湿地公园，全面提升生物多样性保护水平。治理生态河道9km，新建生态沟20km。深入开展公共空间治理，加强新型农村社区建设，让群众身边绿起来、美起来。试点以来，共建设新型社区4个，入住农户1465户6256人。先后建成绿美村庄3个，林木覆盖率由22.6%提升至23.01%。\n\n整治后杉荷园\n\n整治前排水沟                   整治后排水沟\n\n（四）保护了历史文化 新庄镇历史悠久，公元642年，唐朝名将薛仁贵征东，曾长期在新庄境内屯兵，专门下令打井20多口，经过1300多年岁月洗礼，现仍有保存完好的古井11口，其中3口古井千年不息，源远流长。为保护历史文化，对特色保护类村庄进行翻建，按照文物保护的要求，在流传下来的古井旁设立保护碑，明确保护责任人。利用镇区原有的上世纪粮站改造为农耕文明展览馆，将原有的农具、交通工具、民间游戏、房屋模型、寺庙模型、生活用品、传统饮食、旧画报等等收集、展示在展览馆内，使得传统的农耕文明得以传承。禁止在古墩遗址取土、建设占用等。\n\n整治前的陈墩古井              整治后的陈墩古井\n\n（五）优化了产业布局 以现代农业为基础，工业与服务业并重的发展思路，以全域土地综合整治为载体，合理优化各类产业发展布局。淘汰污染大、产能落后的产业，发展高效益、高产出产业，引导高附加值的、科技含量高的、环保的企业向试点区东部的工业园区集中，提高单位土地产出效益。充分利用做大做强的荷藕、草莓产业积极发展农村体验式乡村旅游，以陕西袁家村（2019年陕西袁家村企业与宿豫区签订了战略协议，计划在新庄镇杉荷园景区内建设用地约450亩袁家村宿迁印象项目，该项目立足“朱瓦集”原址，传承朱三太爷“兴商为民”的实践精神，按照宿迁传统建筑风貌建设集市，开设客栈、农家院、小吃、作坊等各类店铺，带动当地老百姓参与经营、共同致富）入住新庄镇为契机，将袁家村和杉荷园联合打造，积极发展第三产业。\n\n袁家村街景                        新庄镇草莓园"
  },
  "S04": {
   "heading": "zrzy.jiangsu.gov.cn_宿迁市自然资源和规划局：宿豫区新庄镇入选全域土地综合整治试点典型案例",
   "date": "2024-09-11",
   "source": "zrzy.jiangsu.gov.cn_宿迁市自然资源和规划局",
   "url": "https://zrzy.jiangsu.gov.cn/sq/gtzx/gzdt/202409/t20240911_1648163.htm",
   "body": "近日，自然资源部公布第二批全域土地综合整治试点典型案例名单，宿豫区新庄镇全域土地综合整治试点入列。近年来，我市以全域土地综合整治为抓手，依托本地农业农村特色资源，一体化统筹推进生态保护和修复工程，取得了明显成效。\n\n一是探索建立“三调”地类和生态产品类型的对应关系模型，科学开展生态产品价值核算，厚植生态优势促进生态产品提升。新庄镇完成土地整治3.5万亩，林木覆盖率由22.6%提升至23.01%，区域内生态产品总值由25.07亿元提升至29.37亿元。\n\n二是推进农田布局优化、耕地集中整理，全面提高耕地质量，实现零散耕地“小田并大田”“荒地变良田”。新庄镇建成优质籼米示范基地约800公顷，耕地地块数量从2052个减至1985个，新增耕地面积104公顷，粮食产能提升10.2%。\n\n三是推动一二三产业发展，延长产业链、提升价值链，增强市场竞争力和可持续发展能力，切实保障农民持续增收致富。新庄镇建成集粮食仓储物流、产后服务、籼米精深加工、电子交易、粮油检测和科普教育于一体的现代粮食物流园。\n\n四是分类推进空心村整治，推动人口、产业和资源要素适度集中，改善农民住房条件，建设宜居的生活空间，释放乡村低效闲置建设用地和空闲地空间。新庄镇新建新型社区4个，建成省级绿化示范村庄2个、绿美村庄3个。\n\n下一步，市资规局将认真落实自然资源部关于学习运用“千万工程”经验深入推进全域土地综合整治工作政策要求，加强宣传引导，进一步总结并推广“新庄全域经验”，持续带动全市促进城乡融合和区域一体化高质量发展。"
  }
 },
 "20": {
  "S01": {
   "heading": "zrzy.wuxi.gov.cn_无锡市自然资源和规划局：惠山区洛社镇全域土地综合整治项目全省首个通过验收",
   "date": "2024-07-25",
   "source": "zrzy.wuxi.gov.cn_无锡市自然资源和规划局",
   "url": "https://zrzy.wuxi.gov.cn/doc/2024/07/25/4360077.shtml",
   "body": "惠山区洛社镇全域土地综合整治项目全省首个通过验收\n\n发布时间：2024-07-25 14:41 浏览次数： 【字号： 默认 大 特大 】\n\n7月23日，无锡市惠山区洛社镇全域土地综合整治试点项目顺利通过综合验收，历时三年的项目建设圆满收官，成为全省20个全域土地综合整治国家试点中首个通过验收的项目。\n\n近年来，无锡市牢牢把握高质量发展这个首要任务，深入贯彻落实习近平总书记关于“千村示范、万村整治”工程的重要指示批示精神，响应部、省关于开展全域土地综合整治试点的工作要求，积极组织各地申报全域土地综合整治试点。\n\n惠山区洛社镇作为江南历史文化名镇，自然资源丰富，一二三产业融合发展，但也面临着土地资源碎片化、城乡发展不完全均衡、三生空间有待进一步提升等问题。为破解难题，市自然资源规划部门积极组织洛社镇申报并于2021年成功入选首批国家试点名单，全面启动全域土地综合整治。试点实施期间，省自然资源厅、无锡市委、无锡市人大常委会等领导先后实地调研指导，对试点开展情况给予了充分肯定。\n\n试点位于京杭大运河和261省道交叉处，涵盖万马村、花苑村全域，总面积约794.7119公顷。试点统筹大运河、湿地、耕地、村庄等整体保护和系统治理，实施了包括农用地整治、建设用地整治、生态保护修复、公共空间治理和乡村历史文化保护共五类工程16个子项目，从耕地提质、生态修复、风貌提升、产业升级等多维度助推乡村振兴。\n\n通过试点实施，试点区域内的生产、生活、生态空间布局及资源要素得到全方位优化：整治区域新增耕地约9.07公顷，耕地集中连片程度提高；建成连片高标准农田52.68公顷，农业现代化水平得到有力提升；合理配置土地资源，整理建设用地9.45公顷，盘活低效零散土地资源；完善农村基础设施和配套设施，提升村民的生活幸福体验感，为一二三产业融合发展打好基础；实施白荡湿地、大运河两岸生态修复30.14公顷，修复乡村生态环境；挖掘历史文化资源，建设村庄文化展览馆和乡村振兴馆，充分展示了运河文化、工商文化和乡土文化。\n\n试点强化顶层设计和“多规合一”，有效整合各类资源要素，打通发展策划、法定规划、土地供给等全链条，并构建了属地政府主导、国资平台投资、品质民企运营和农村集体参与的新机制，进一步丰富产业形态，极大地释放了乡村价值，为全域乡村振兴落地建设提供了契机。\n\n验收会议上，来自南京大学、南京师范大学、河海大学、南京农业大学和江苏省规划设计集团的专家组成的专家组认为，该项目定位明确、目标合理、成效显著，有效促进试点区域“资源重组、功能重塑、空间重构、产业重整、环境重生”，打造出了具有无锡特色的全域土地综合整治新模式，一致同意通过项目综合验收。\n\n未来，我市将持续推进全域土地综合整治工作，充分总结提炼洛社镇试点经验，发挥试点成果的综合优势，进一步优化国土空间格局，提升土地资源利用效率和价值；持续改善农村人居环境，增强农民群众的幸福感和获得感；积极探索产业融合发展新路径，激活更多的城乡资源为民服务，为乡村振兴注入强劲动力。（耕保处）"
  },
  "S02": {
   "heading": "zrzy.jiangsu.gov.cn_江苏省自然资源厅：无锡市洛社镇全域土地综合整治国家试点全省首个通过综合验收",
   "date": "2024-07-29",
   "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
   "url": "https://zrzy.jiangsu.gov.cn/xwzx/xwbb/2024/07/2911201577611.html",
   "body": "近日，无锡市惠山区洛社镇全域土地综合整治国家试点顺利通过了无锡市局组织的综合验收，成为我省首个通过综合验收的试点，为全域综合整治城乡融合发展模式提供了“洛社样板”。\n\n试点区域位于京杭大运河两侧，包括万马村和花苑村 2 个行政村，其中花苑村位于城镇开发边界以内，为一般村庄，万马村位于城镇开发边界以外，为规划发展村庄，在推进乡村振兴过程中，面临着土地资源碎片化、部分建设用地闲置低效、城乡融合发展不充分、生态环境有待提升等问题。为破解这些矛盾，惠山区积极申报全域综合整治国家试点，精心编制实施方案并于 2023 年 9 月获得省厅批复。试点总面积约 1.2 万亩，实施期限一年半，总投资约 2.7 亿元，建设内容包括农用地整治、建设用地整治、生态保护修复和乡村历史文化保护。\n\n自 2019 年底自然资源部部署开展全域土地综合整治试点工作以来，我省按照“试点先行、示范引领、逐步推广”的思路，规范有序推进 20 个国家试点和先行启动的 16 个省级示范项目建设，总体进展过半，取得阶段性成效，探索出了城乡融合、现代高效农业、农村一二三产融合发展、特色文化保护等模式，形成了“试点示范同步、治理模式多样、政策集聚有力、投资主体多元”的实践经验，走在了全国前列。目前，已有一批试点示范项目即将收尾，具备验收条件。下一步，将认真总结洛社镇试点综合验收经验，推动更多项目及时验收，打造一批精品工程，加强总结宣传，继续为全国贡献“江苏经验”。（厅生态修复处 无锡市局 惠山分局）"
  },
  "S04": {
   "heading": "zrzy.wuxi.gov.cn_无锡市自然资源和规划局：惠山区洛社镇全域土地综合整治试点入选自然资源部全域土地综合整治试点典型案例",
   "date": "2024-09-12",
   "source": "zrzy.wuxi.gov.cn_无锡市自然资源和规划局",
   "url": "https://zrzy.wuxi.gov.cn/doc/2024/09/12/4391401.shtml",
   "body": "惠山区洛社镇全域土地综合整治试点入选自然资源部全域土地综合整治典型案例\n\n发布时间：2024-09-12 09:42 浏览次数： 【字号： 默认 大 特大 】\n\n近日，自然资源部发布第二批15个全域土地综合整治试点典型案例，无锡市惠山区洛社镇全域土地综合整治试点入选。\n\n洛社镇全域土地综合整治试点以“深度城乡融合，共谋乡村振兴”为定位，以区域“资源重组、功能重塑、空间重构、产业重整、环境重生、文脉重振”为目标，打通发展策划、法定规划、土地供给等全链条，构建了属地政府主导、国资平台投资、品质民企运营和农村集体参与的新机制，从耕地提质、生态修复、风貌提升、产业升级等多维度助推乡村振兴，有效释放乡村价值，打造出具有无锡特色的全域土地综合整治新模式。该模式通过因地制宜推进水系修复、城乡人居环境整治等，持续探索转化路径，培育生态产业，既统筹生态保护修复，又促进绿色低碳发展。（耕保处、惠山分局）"
  }
 },
 "21": {
  "S02": {
   "heading": "ndrc.gov.cn_国家发展和改革委员会：【全域土地综合整治改革的温岭实践】",
   "date": "2022-05-05",
   "source": "ndrc.gov.cn_国家发展和改革委员会",
   "url": "https://www.ndrc.gov.cn/fggz/tzgg/dfggjx/202205/t20220505_1324232.html",
   "body": "全域土地综合整治改革的温岭实践\n\n发布时间：2022/05/05\n\n来源： 体改司\n\n[ 打印 ]\n\n浙江省温岭市紧紧抓住全域土地综合整治列入自然资源部国家级改革试点契机，以鞋业企业高度集聚、“低散乱”较为突出的横峰大道沿线区域作为突破口，选取22个村启动全域改造产业升级实验区建设，统筹实施城中村改造、产业园区建设、全域土地综合整治、全域水系调整、基础设施建设等工程，从源头上精准破解“低散乱”的传统产业发展模式和“脏乱差”的城中村环境痼疾，涉及土地总面积13.8平方公里，群众2.6万人。通过全域整治、全域改造、全域提升，大破大立、重建重构，实现人居环境优化、产业结构迭代、城市能级提质。2022年，深入实施百村全域综合整治改革，预计盘活土地6000亩以上。\n\n一、全域整治工作的主要做法\n\n（一）打破村界限制，推进资源重配。牢固树立全域一盘棋的系统思维，打破村界，以优化空间布局、盘活土地资源，构建空间形态高效节约的土地利用新格局为目标，统一规划住宅安置区、产业升级区、生态修复区，推进城市有机更新。一是存量用地整合成块。采取土地性质碎片化整理形式，并实施土地流转，产生1320余亩的流量用地指标，在保障村民安置用地和产业安置平台所需用地的同时，产生300亩结余指标支撑城镇和区域基础设施建设。通过土地全域整治，人均村庄建设用地由原先的86平方米下降到51平方米，村庄用地平均容积率由原先的0.72提高到2.65。\n\n二是住宅跨村集中安置。重新统筹整合横峰区域内的19个村，以九龙湖为界，划分东、西区块，统一安置公寓式住宅小区，规划建设安置公寓占地面积1100亩，建筑面积约200万平方米。目前一期13个村完成集中签约，一期小区顺利分配安置，涉及方家洋、莞渭陈和马鞍桥（东区）三个村954户，房源2928套。其中超500户安置村民已入住新家。2022年，横峰计划安置7个村2360户约8000套。\n\n三是产业集聚“腾笼换鸟”。将节约的村庄规划用地，用于建设产业园区，全面推动企业入园区、生产进厂房、职工住宿舍，规划鞋业园区面积超1000亩，目前已建成投用380亩约75万平方米。横峰鞋业一手抓整治，一手抓提升，利用新建园区投运的契机，引导优质鞋企梯度转移、入园集聚，以规模集聚、专业管理提升产业效益。目前凤凰山产业园已引进规上企业9家，园区规上产值占全街道的30%，已形成发展态势良好的优质鞋企群。洋江产业园78亩工业厂房已交付，面向打造精品童鞋产业园区开展针对性招商，目前已有40余家童鞋企业入驻。\n\n四是水网路网布局优化。调整全域200条河流水系，通过拓展骨干河道、增设连接河道、集中布设调蓄水域、加强水污染治理等方式，优化布局河网水域，保障整体区域的水域占补平衡，整体提升水环境质量。通过改造河道364亩，释放建设区域水利规划许可建设用地1197亩。规划中华北路、川安路、田园路、环湖路和横峰大道“四纵一横”的城市路网，突破城市建设瓶颈，推动中心城区北延提质，实现主城区向铁路新区拓展发展空间，打造围绕横峰大道和九龙湖生态绿廊为中心的城市次中心。\n\n（二）强化利益保障，共享改造成果。改变安置房政府主导建设的模式，采用“土地出让、市场开发、政府回购”的方式建设安置住宅和安置厂房，完善要素配套保障。\n\n一是创新安置模式。因地制宜出台《中心城区城中村改造公寓式安置方案》，在取消立地安置、全面推行公寓式安置的基础上，创新推出公寓式住宅和工业厂房相结合的安置方式，居住安置和工业厂房安置实行3:2的分配比例，即安置居民在获得套房安置基础上，还能享受相当于安置住宅面积2/3的工业厂房安置，村民按厂房安置面积比例入股成立企业，以幢以单位登记产权，按比例享有企业股权和企业分红。如区域内的四口之家，被拆迁后可安置330平方米建筑面积的住宅，配套安置三分之二（即220平方米）的工业厂房，则该家庭将享受相当于220平方米工业厂房所有权益和分红权益的股权，资产升值达数百万元，并可长期受益。同时，坚持“居者有其屋”的改造理念，保障村民基本居住权，因家庭条件等特殊原因，原有房产已经转让、名下没有房屋且不符合农民建房条件新建房屋的村民，也可以接近成本价购买安置商品房。\n\n二是完善要素保障。为了缓解区域内人口进一步集聚带来的教育资源供需矛盾，加快推进中小学校建设。截至目前，已建设幼儿园一所，于今年春季开园；规划新建中小学校各一所，均可吸收学生1600余人，预计总投资达29877万元，建成后将新增小学和初中各36个班，并引入市内城区优质学校资源进驻，实现对群众在家门口上好学的承诺。同时，在安置小区配置大量的商业用房，吸引百货、餐饮、超市、美发等商家入驻，方便居民的日常生活。村集体通过出租商铺，也能得到一笔可观的收益。\n\n（三）完善基层治理，引导村转社区。\n\n一是构建村社民情畅达机制，推进精准服务。推动村社小助手数字应用在全域改造安置小区的全面应用，实现村民对“疫情防控、社区规定、便民提醒”等生活所需的重要信息的实时掌握，也让村民的意见建议、困难群众诉求等通过云端直达村社联络员，加快志愿服务精准触达。如，安置小区联络员发现部分群众对环境卫生和文明装修关注度较高，逐级上报后，通过举行民主恳谈，推动小区环境卫生问题的解决。同时，推行派出所民警兼任村党组织副书记机制，尤其是由副所长等下沉到复杂村、工作推进难度大的村，切实维护社会良好秩序。\n\n二是探索村改社区转化机制，推进素质提升。深入实施全域文明创建工程，以全域改造安置小区为阵地，探索社区化管理新模式。目前，全域改造一期安置的3个村已在安置小区共同成立业主委员会，协同推进示范型居家养老服务中心、党群服务中心、社区文化家园建设，通过组织同建、机制同创、党员同管、活动同办、服务同抓，促进生活习惯变革，实现村民变市民。目前，社区每月开展活动10余场次，由3个村共同成立的服务志愿队每月服务群众超400余人次。\n\n二、全域整治工作的启示\n\n全域改造是集改善人居环境、推动产业转型、提升城市韧性、集约土地资源、提升基层治理等为一体的综合工程，实施全域改造必须要具备以下几个条件：\n\n一是要有一定的现实基础，实施区域应有足够的存量建设用地，这是实施全域改造的前提。全域改造的本质是对碎片化土地的整理，通过全面盘活存量土地，提高土地利用效率，实现建设用地指标平衡。以正在实施的全域改造一期、二期、三期15个村为例，创新推出公寓式住宅和工业厂房相结合的安置方式，打破村界，统一规划安置住宅和厂房用地，以规模集聚提升规划效益。规划建设安置公寓占地1302亩、建筑面积约200万平方米，规划建设工业园区占地996亩、建筑面积约120万平方米。建成后，人均建设用地大幅下降，村庄用地平均容积率大幅提高，不仅能够实现指标总体平衡，还可为产业发展腾出宝贵的用地空间。\n\n二是要有一定的区位条件，实施区域自身存在改造需求，这是实施全域改造的核心。全域改造的模式特点是大拆大建、推倒重来，因此这并不是普遍适用的改造方式，必须要结合实际、因地制宜。如横峰，南靠中心城区，北接铁路新区、泽国，西联大溪，是中心城区北扩提质、联结两大小城市的重要区域。同时，其以鞋业为主的产业，低散乱危现象突出，企业品牌创新意识不强，产品质量不高，同质化竞争现象普遍存在，亟需转型升级。总之，横峰既是城市化进程的重要节点，也是产业转型升级的重点区域。但多年来的发展实践证明，无论是产业整治提升、“三改一拆”、环境综合整治，仅仅通过传统的专项工作来推进这一区域的整治，都只能治标不治本。因此，必须要通过全域改造，实施“大拆大整”，彻底打破发展惯性和固有模式，改变不合时宜的生产生活习惯，同时实现城市基础设施的延伸覆盖、人居环境以及社会治理的改善提升。\n\n三是要有一定的力量保障，必须建立市级协调机构统筹安排，这是实施全域改造的基石。全域改造是一项系统工程，涉及征地拆迁、房屋复建、土地整治、水域占补、配套建设等各项工作，项目时间跨度长、工程投资大、工作任务重，仅仅依靠镇村两级，无论是工作分配、资金安排、力量配备上都难以保障。为此，必须要在市级层面系统谋划、统一部署。如一区、二区改造，建立由市委书记、市长任组长的领导小组，4位分管镇（街道）的市领导分别担任前线指挥部正副指挥，指挥部直接设在基层、进驻现场。建设、国土、水利、经信、环保等部门均成立专项工作小组，无缝衔接政策处理和拆后规划复建。并专门抽调了建设、国土等部门“一把手”和业务骨干，与镇、村干部一道组成工作专班，进村入户开展拆迁签约。在完成签约，集中建设期间，调整设置指挥部到城市新区，依托新区力量统筹推进复建安置和开发建设。"
  },
  "S03": {
   "heading": "zrzyt.zj.gov.cn_浙江省自然资源厅：浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡一体融合高质量发展的实施意见",
   "date": "2025-11-14",
   "source": "zrzyt.zj.gov.cn_浙江省自然资源厅",
   "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229101716_2579171.html",
   "body": "索引号: 002482437/2025-01227\n\n公开方式: 主动公开\n\n公开日期: 2025-11-14\n\n发布单位: 浙江省自然资源厅\n\n有效性: 有效\n\n《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡一体融合高质量发展的实施意见》政策解读\n\n信息来源：\n 浙江省自然资源厅\n\n发布日期:\n 2025-11-14 15:46\n\n一、制定背景和依据\n\n为深入运用自然资源部《关于学习运用“千万工程”经验 深入推进全域土地综合整治工作的意见》（自然资办发〔2024〕149号），将土地综合整治作为落实城乡规划布局一体融合的有效载体，推动土地综合整治向国土空间治理转型，全面夯实共同富裕、城乡融合的空间基础，助推高质量发展。省自然资源厅制定了《关于深入开展土地综合整治工作 助推城乡一体融合高质量发展的实施意见》（以下简称《实施意见》）。\n\n二、适用对象\n\n各市、县（市、区）自然资源主管部门。\n\n三、主要内容\n\n《实施意见》分5个章节15条内容。围绕1个目标（夯实共同富裕、城乡融合空间基础）、抓好3大关键业务环节（规划传导、实施协同和空间设计），开展3项创新性试点（实施方案与详细规划协同编制、资源导向型可持续发展模式、政策性银行深度合作）、打造5大“土地综合整治+”模式（“土地综合整治+”城乡融合、现代农业、产业升级、乡村记忆和绿色发展），主要内容包括：\n\n（一）明确总体目标。充分发挥土地综合整治平台作用，全面赋能“强城”“兴村”“融合”三篇文章，全面支撑“县城—中心镇—重点村”发展轴建设。在目标任务方面，从2027年、2030年两个重要时间节点分别提出具体目标。\n\n（二）加强规划传导。将实施方案按照实施单元详细规划进行管理，加强与耕地保护、用地报批、规划管理、调查登记等业务衔接，结合“土地综合整治+”，探索开展土地综合整治单元空间设计。\n\n（三）明确实施内容。聚焦不同区域的区位特点、自然肌理和功能定位，提出现代农业、城乡融合、产业升级、乡村记忆和绿色发展等5大“土地综合整治+”模式以及重点实施内容，推动整治从重数量到提品质转变、从项目管理向空间治理跃升，全面提升我省土地综合整治综合成效。\n\n（四）严格项目管理。强化“前期谋划、方案审批、项目实施、竣工验收、后期管护”全过程管理要求，鼓励实施方案与详细规划协同编制，探索一体化推进模式和资源导向型可持续性模式，深化与政策性银行合作。\n\n（五）强化实施保障。加强省市县三级工作合力、构建多元资金筹措模式、充分尊重群众意见、加强成效评估和宣传引导。\n\n四、实施日期\n\n《实施意见》自2025年12月15日起施行。\n\n五、解读机关\n\n解读机关：浙江省自然资源厅\n\n解读人：褚立波\n\n电话：0571-88877820\n\n浙江省自然资源厅\n\n2025年11月14日\n\n【打印本页】 【关闭本页】"
  },
  "S04": {
   "heading": "zjic.zj.gov.cn_浙江省经济和信息化厅：温岭以土地综合整治赋能高质量发展",
   "date": "2025-03-18",
   "source": "zjic.zj.gov.cn_浙江省经济和信息化厅",
   "url": "https://zjic.zj.gov.cn/ywdh/qyfz/202503/t20250318_23320209.shtml",
   "body": "温岭以土地综合整治赋能高质量发展\n\n日期: 来源：浙江日报\n\n全域整 全域富 全域新\n\n国土空间是支撑经济社会高质量发展的重要保障。\n\n近年来，台州温岭市全力以赴拼经济、谋发展，以鞋业企业高度集聚、“低散乱”较为突出的横峰大道沿线区域作为突破口，选取13个村启动全域改造产业升级实验区建设，统筹实施城中村改造、产业园区建设、土地综合整治、全域水系调整、基础设施建设等工程，从源头上有效破解“低散乱”的传统产业发展模式和“脏乱差”的城中村环境痼疾，涉及土地总面积11.9平方公里，群众1.6万人。2022年以来，该市在此基础上，深入实施百村全域综合整治改革，盘活土地6000亩。\n\n2024年9月10日，自然资源部发布第二批土地综合整治试点15个典型案例，温岭市横峰街道土地综合整治试点案例成功入选，系浙江省唯一。\n\n通过全域整治、全域改造、全域提升，大破大立、重建重构，温岭正逐步实现人居环境优化、产业结构迭代、城市能级提质。\n\n打破村界限制　重构发展空间\n\n温岭市地处浙江东南沿海，民营经济较为发达，土地资源紧张，要持续发展，就得解决“地从哪里来”的问题。当地以土地综合整治为抓手，打破传统村界限制，重构土地资源利用格局。\n\n在推进过程中，温岭横峰街道土地综合整治试点以国土空间规划为引领，秉持“全域整、全域富、全域新”的先进理念，构建起独具特色的城郊融合型土地整治模式。\n\n“全域整”，是打破村界限制的关键一步。以往，各村各自为政，土地资源分散，难以形成规模效应。如今，温岭以土地综合整治为抓手，通过盘活农村老旧宅基地等闲置建设用地、合理安排新增建设用地等方式，进一步提高资源配置效率，补齐乡村基础设施短板，促进城乡融合发展，推动工业向园区集聚，农业向连片集中，村庄向城区集合，统一规划住宅安置区、产业升级区、生态修复区，实现资源优化配置。强化“多规合一”和规划引导，推动农村用地规模由78平方公里缩减至60平方公里，腾出产业空间1.1万亩，为经济发展腾出了宝贵的土地资源。\n\n创新安置模式　共享发展红利\n\n在土地综合整治过程中，当地还创新推出“公寓式住宅+工业厂房”相结合的安置模式。\n\n横峰街道村民身兼“房东＋股东”双重身份，厂房入股有分红，住宅出租有租金。安置居民按3∶2的比例分配住宅和厂房，例如，一个四口之家可获得330平方米住宅和220平方米厂房，既改善了居住条件，又实现了资产增值，共富步伐正在加速。\n\n2021年至今，该街道13个参与全域改造的村，村集体平均增收300多万元，1.6万多名村民人均收入得到大幅提升。\n\n此外，温岭市还通过完善教育、商业等配套设施，提升居民生活质量。这种“居者有其屋、业者有其产”的模式，不仅保障了村民的基本权益，还激发了群众参与经济建设的积极性，形成了共享发展红利的良好局面。\n\n推动产业升级　赋能高质量发展\n\n土地综合整治为温岭市产业转型升级提供了强大动力。\n\n如今的横峰街道,产业集聚升级已见成果。通过“腾笼换鸟”，横峰鞋业从“低散乱”向集约化、高端化迈进。共规划工业产业园8个，吸引了“回力”自动化制鞋等优质项目落户，形成5家年产值5000万元以上、发展态势良好的鞋企。\n\n同时，温岭市还通过优化水系和路网布局，打造以横峰大道和九龙湖生态绿廊为中心的城市次中心，进一步提升了区域竞争力。\n\n空间格局在更大范围的优化,资源在更大范围内的重配,带来脱胎换骨的变化。温岭“百村全域整治”的蓝图显示：东部地区以箬横松门跨乡镇整治项目为纽带、联合滨海镇全域整治和石塘全域旅游等项目,助力东部一体化发展;中部地区依托横峰街道整治项目，推动中心城区和北部泽国、大溪两镇融合,加快构建“大三角”格局;南部地区依托城南等4镇(街道)跨乡镇整治项目,助力引导石桥头镇、坞根镇特色化发展,建设美丽生态城镇。土地综合整治，正在成为温岭城乡融合高质量发展的新引擎。"
  },
  "S05": {
   "heading": "zjrb.zjol.com.cn_浙江日报：温岭横峰街道：拥湖向未来，全域改造谱新篇",
   "date": "2024-09-04",
   "source": "zjrb.zjol.com.cn_浙江日报",
   "url": "https://zjrb.zjol.com.cn/html/2024-09/04/content_3766896.htm",
   "body": "浙江日报\n 数字报纸\n\n下载PDF文件\n\n下载jpg图像\n\n温岭太平街道：做好“城村两改”后半篇文章\n\n温岭城西街道：顺应民意惠民生，品质新城款款来\n\n温岭横峰街道：拥湖向未来，全域改造谱新篇\n\n温岭横峰街道：拥湖向未来，全域改造谱新篇 赵 静 沈益峰\n\n赵 静 沈益峰\n\n阔别家乡多年，再次踏上这片土地，李程最为真切直观的感受就是，温岭横峰街道“脱胎换骨”了。\n\n横峰块状经济曾遭遇“成长烦恼”，温岭以土地综合整治为突破口，打破思维定式，将横峰等区块作为一个整体进行系统重塑，加速工业向园区集聚、农业向连片集中、村庄向集镇集合、居住向社区集成。\n\n如今，安置小区高楼林立，产业园区车来人往，崭新道路纵横交错……横峰已进入了全新的发展阶段。上半年，横峰锚定“拥湖发展、产城融合、全域蝶变”目标，在经济运行、城市建设、民生福祉、安全发展等方面，抢得先机、赢得主动，交出了一份经济社会平稳健康发展的高分答卷。\n\n沿着城西大道走来，占地470余亩的产业优化升级园区内一派热闹景象，川安路东侧的新厂房则机器轰鸣。近日，位于马鞍桥村的全域改造产业园二期项目顺利通过竣工验收。\n\n工业园区发展势头强劲，不远处，崭新的住宅鳞次栉比，河流环绕，稻田连绵成片。蝶变，得益于温岭在“两城两湖”建设中“人产城”融合方面的大手笔投入。\n\n作为“中国鞋材之乡”，横峰街道15.9平方公里的土地上，曾聚集着7000多家制鞋及鞋业相关企业。繁荣背后暗藏隐患，“低散乱”的传统产业发展模式已不适应当前高质量发展的要求。随即，涉及22个村的全域改造启动，从源头上精准破难。\n\n这是一次生产、生活、生态上的大变革。从改善人居环境、推动鞋业转型，到解决城市内涝、集约土地资源、提升社会治理，横峰街道抓住这次重大机遇，高起点谋划，全领域布局，全力度推进。\n\n近年来，横峰持续深耕全域改造，不断完善城市面貌，全力拥湖发展。截至目前，已建成工业产业园6个，总面积达543亩，吸引回力自动化制鞋等优质项目落户；1.6万多名村民人均增收超2万元，13个村村集体平均增收300多万元。相关做法获评“2023年土地综合整治促进共同富裕基本单元建设”浙江省十大优秀案例。\n\n踏入全域改造产业园二期，一幢幢标准现代化厂房排列有序，道路平整畅通，风景怡人。\n\n该项目总投资3亿元，总用地面积75亩，是横峰推动鞋业转型升级的关键落子。未来，这里将打造集产品研发、生产、展示及配套生活于一体的综合性园区。\n\n梧桐叶茂，凤自来栖。“1.2万平方米的鞋业创新展示中心项目正稳步推进中，包含鞋业产业大脑、智慧数字展厅、当季新品展厅、产业沙龙等综合板块，建成后将成为鞋业升级蝶变的重要抓手。”横峰街道党工委书记朱文兵介绍，“厂房预计于今年三季度交付使用。我们坚持高标准管理新园区，尝试入园企业‘预申报+综合审核’，打造规上优质产业园。”\n\n产业兴旺，是区域高质量发展的动力源。温岭市横峰沧龙鞋业有限公司两年前搬入凤凰山园区后，投资4000多万元更新设备、扩大产能，第一年就产值翻番，顺利升规。\n\n坚持外引内培双驱动。横峰瞄准产业链上下游精准招引，赴广州、温州、晋江等鞋业产业基地考察，签约“温岭新濠畔鞋业供应链交易中心”项目，新签约亿元以上产业项目1个，开工建设项目3个。\n\n“搬新家住新居，日子惬意舒服。”马鞍桥村村民王伟说，这份舒心，不仅在于自家这一亩三分地“焕新”了，更在于横峰整体的生活配套设施“迭代升级”，居民衣食住行的方方面面也大不同了。\n\n每天中午，川安华庭居家养老服务中心饭香四溢，老人们三五成群，边吃边聊，喜笑颜开。“只要8元钱，就可以享用到一荤一素一汤的午餐。”居民叶阿婆乐呵呵地说。另一边，爱心志愿者将热腾腾的饭菜打包，送到小区独居老人、孤寡老人家中。\n\n老有颐养、少有善育。九月，张琴将孩子送进了新开园的公办幼儿园。“离家近，方便极了。”周末，新建成的川安华庭绿道成了她的“遛娃”好去处。\n\n横峰的配套设施在加快建设，川安华庭绿道、江厦大港绿道北延、西洋口袋公园等建成投用；“教育崛起”在全速推进，宗文中学完成主体结顶，上半年，温岭宗文小学正式开建，预计2025年9月全面完工……\n\n民生事业大力发展，治理水平也全力突破。川安华庭安置小区是温岭首个万人安置小区，涉及莞渭陈、马鞍桥、方家洋3个村共960户安置户，也是横峰试点探索精细化管理新模式的最佳场所。横峰创新推进“大综合一体化”发展，建立联勤工作站，下沉街道综治、劳动、纪检、司法、派出所等部门力量，将治理的触角延伸到社区的每个角落，高质量打造共同富裕现代化基本单元。\n\n针对当地产业特色，横峰打造连接鞋业和珍珠产业的“共富工坊”，构筑“老年友好、抱团共富”服务阵地。市民焦大爷说：“一天能赚八九十元呢，高楼一个人住着也没事情，在这里赚点钱很好。”\n\n傍晚，各个村居、社区文化礼堂便热闹起来，载歌载舞、吹拉弹唱，好不欢快。在这一方天地，黄发垂髫，怡然自乐。"
  }
 },
 "22": {
  "S03": {
   "heading": "zrzyt.ah.gov.cn_安徽省自然资源厅：《安徽日报》丨无为市探索全域土地综合整治，盘活零散、闲置、低效建设用地",
   "date": "2026-08-17",
   "source": "zrzyt.ah.gov.cn_安徽省自然资源厅",
   "url": "https://zrzyt.ah.gov.cn/xwdt/mtbd/150645701.html",
   "body": "您的位置： 首页 > 新闻动态 > 媒体报道\n\n《安徽日报》丨无为市探索全域土地综合整治，盘活零散、闲置、低效建设用地——让“存量”土地长出“增量\"效益\n\n来源： 安徽日报 发布日期： 2026-08-17 17:16 浏览次数： 字号：【 大 中 小 】\n\n土地碎片化，乡村“空心化”，土地低效利用，制约着乡村长远发展。\n\n无为市以自然资源部全域土地综合整治试点为契机，聚焦土地空间重构，充分发挥土地整治“资源激活、产业导入、乡村振兴”的关键作用，在开城镇都督村和红庙镇海云村形成了两个独具特色的实践案例，走出了“以整治优空间、以空间引产业、以产业促共富”的乡村振兴新路径。\n\n优化乡村空间布局\n\n近日，记者走进无为市开城镇都督村的集中安置点，一排排两层小楼错落有致，农家庭院内干净整洁、菜园青青。村部前的村民活动广场、农家书屋一应俱全，整体面貌与城市社区相差无几。\n\n然而几年前，这里却是另一番光景——田地碎片化，山野间散落着点点民居，很多农户家大门紧闭。\n\n“我们村庄很小，平均一个自然村二三十户，最大的自然村有98户，最小的只有十几户。村民大多外出务工就业，很多人在县城买了房子。”都督村党总支书记孙晓山告诉记者。\n\n“村子越小，基础设施越跟不上，越是没人住。”分管自然资源和规划工作的开城镇人大主席陈晓群一语道破乡村规划的困境——原有的村庄布局“散乱小”，规划难，建设投入大，土地利用率不高，更别说发展项目了。\n\n转机发生在2021年，都督村被自然资源部批准列入全域土地综合整治试点，开始了盘活土地资源的探索。\n\n都督村，因传东汉末年东吴大都督周瑜在此练兵而得名。针对村里宅基地分散、土地利用低效、基础设施薄弱等问题，都督村开展全域土地综合整治，撤并了12个自然村，搬迁312户，拆除房屋38890平方米。同时，在尊重群众意愿的前提下，科学规划集中安置点，搬迁农户全部完成安置搬进新居。\n\n都督村后刘村民组村民伍伟的新房就在村口第一家。他告诉记者，以前村庄没有几户人家，老房子一直闲置，只有春节才回去住几天。现在拆旧换新搬进了楼房，水电气网全都开通了，马路通到家门口，门口就是公交站，方便多了。\n\n“全域土地综合整治，盘活了农村零散、闲置、低效建设用地，提升了土地资源配置效率和节约集约利用水平，为保障农民合理居住需求、乡村基础设施建设和产业发展提供用地支撑。”无为市自然资源和规划局副局长朱宝林说。\n\n释放土地生产效能\n\n无为市红庙镇海云村是2021年摘帽的脱贫村，村域总面积9．6平方公里，下辖28个自然村，总人口5542人。海云村第一书记葛军是芜湖市自然资源和规划局驻村帮扶干部，在他看来，土地是农村重要的资源，乡村要发展，就要搞活土地。\n\n驻村伊始，葛军同村“两委”干部访遍了村内每个犄角旮旯，摸清这个村子的家底——村内共有耕地面积8166亩（含永久基本农田7620亩），千亩以上圩口一个，山岗约1300亩，水域面积约450亩……\n\n海云村属于沿江低山丘陵地貌，土地散碎、高低不平，不易耕种，过去不少土地抛荒。村里结合高标准农田建设，将零散的土地整合起来，实现“田成方、路相通、渠相连”。土地整治后，原来1500余亩零散分布的“边角地”整合成连片优质耕地，有效突破了土地规模化经营的瓶颈。\n\n目前海云村高标准农田超8000亩，其中6000多亩已流转。整合后的连片土地吸引了丹洋现代农业、海舜农业等多家龙头企业落户，耕地利用率从整治前的不足70％提升至100％，彻底消灭了撂荒现象。\n\n土地条件好，项目找上门。海舜生态农业有限公司是一家花卉种植企业，企业负责人徐修发选择落户海云村，在这里流转了1000多亩土地种植牡丹、菊花、芍药等特色花卉。“这里土地条件好，水系发达，适合种植花卉。”徐修发说，基地花卉长势良好，产销两旺，带动周边150名劳动力就业。\n\n在都督村，土地整治让小田聚大田、荒山变沃土，不仅承包经营户受益，更带动了村民在家门口就业务工。“过去土地零散，企业考察后都摇头，说不好种管运、成本高、抗风险弱，200元一亩都租不掉，土地整治后连片土地成了香饽饽，租金涨到了550元一亩。”孙晓山说。\n\n土地连片引来了特色产业扎堆发展。“都督翠芽”茶叶叫响市场，优质红薯带动群众增收，“小莓好”草莓专供山姆、盒马等商超。2024年开城镇都督村全域土地综合整治入选全国典型案例，2025年村集体收入突破700万元。\n\n盘活低效建设用地\n\n通过全域土地综合整治，都督村撤并12个自然村，实施建设用地复垦项目327．47亩、补充耕地项目143．08亩、旱改水项目40亩，产生增减挂钩指标308亩、占补平衡新增耕地指标139亩。\n\n“新增建设用地指标既可用于村民住宅建设、项目建设，也可以投入市场交易。”朱宝林认为，综合整治进一步提升土地配置效率，为乡村基础设施建设和产业发展预留了空间。\n\n在乡村一线的葛军也深有感受：“每年都有企业过来考察投资，但是村里实在没有多余的建设用地。”他认为，建设用地指标受限，影响乡村项目招引。\n\n海云村红色资源丰富，新四军第七师师部旧址、皖江烈士陵园、无为市首个4A级“红色山水涧”景区坐落于村内，发展红色旅游成了村“两委”的不二选择。\n\n“为解决项目用地问题，我们想方设法腾笼换鸟，盘活村内闲置厂房，建设红色主题书屋和红色大讲堂；把废弃小学改造成抗大分校，发展红色研学；利用闲置厂房建设创富中心，发展茶叶、山芋粉加工……”葛军说。\n\n依托土地整治腾退的建设用地和整治后的生态景观，海云村将红色文旅资源串珠成链，新四军第七师师部旧址及纪念馆、皖江革命烈士陵园等6处场所串联成“红色教育路线”。同时，该村以新四军第七师师部旧址及纪念馆为核心，打造抗大十分校、七师剧院等红色旅游景点。近两年来，全村累计接待游客70万人次，文旅综合收入突破500万元。"
  }
 },
 "23": {
  "S02": {
   "heading": "zrzyt.fujian.gov.cn_福建省自然资源厅：中国自然资源报专题刊发！聚焦福建省学习运用“千万工程”经验",
   "date": "2025-06-23",
   "source": "zrzyt.fujian.gov.cn_福建省自然资源厅",
   "url": "https://zrzyt.fujian.gov.cn/ztzl/sxzygwzxsqzx/zyzxzx/202506/t20250623_6934263.htm",
   "body": "《中国自然资源报》专题刊发\n\n《积极推进全域土地综合整治 夯实乡村振兴“空间”基础——聚焦福建省学习运用“千万工程”经验推进全域土地综合整治工作》\n\n全文如下↓↓↓\n\n灼灼夏风吹遍八闽，蓝天白云下，从福建省晋江市九十九溪流域到莆田市木兰溪南岸，从德化县曾坂村到南平市麻沙镇，成片的早稻即将成熟，人们沉浸在丰收的喜悦中。这些经过全域土地综合整治的地区，通过农用地、建设用地整理和生态保护修复，生产生活生态空间格局得到进一步优化，展现乡村新面貌。\n\n2021年开始，自然资源部在全国开展全域土地综合整治试点工作，福建省共有18个乡镇和泉州市全域列入试点。其中，莆田市木兰溪南岸试点项目被自然资源部列入第二批发布的典型案例。\n\n强化高位推动\n\n统筹谋划规划先行\n\n“要坚持实事求是、加强统筹谋划，以国土空间规划为依据，以耕地数量不减少、质量有提升为底线，以农用地整理、建设用地整理、乡村生态保护修复为抓手，以处理好农业空间和生态空间、生产空间和生活空间的关系为目标，抓好全域土地综合整治，提高土地节约集约利用水平。”6月12日，福建省政府常务会议审议通过《关于学习运用“千万工程”经验深入推进全域土地综合整治工作的实施意见》，标志着福建省深入推进全域土地综合整治工作全面展开。\n\n2023年7月，福建省委副书记、省长赵龙在泉州调研时指出，土地综合整治要紧紧抓住空间规划布局这一中心，把握增加耕地面积提升耕地质量、促进产业集约集聚、改善人居环境“三要素”，打造生产生活生态“三空间”，建设宜居宜业家园，同时要保障好群众合法权益。\n\n“一直以来，省委、省政府高度重视全域土地综合整治工作，省自然资源厅认真贯彻落实自然资源部部署，印发试点实施方案，明确工作程序，制定配套激励政策。”福建省自然资源厅相关负责人介绍，福建省将试点工作纳入全省系统“耕地保护责任落实年”行动范围，加大统筹推进力度。\n\n为有效守住耕地面积不减少、农民利益不受损的改革底线，防范实施风险，福建厅通过建立处室并联审查机制、开发成果质量检查软件等方式，把好实施方案质量，坚决维护“三区三线”划定成果的严肃性。同时，规范审查标准，探索形成成果汇交要求、实施方案技术审查要点、永久基本农田调整方案审查要点等规范性技术文件，以及成效评估、生态规划设计两项标准草案。\n\n各试点地区将农用地整理、人居环境整治、产业发展、历史文化保护等整治任务、指标和布局要求纳入村庄规划，落实到具体地块，合理安排“三生”空间格局。\n\n泉州市制定了“市级全域土地综合整治专项规划—市级总体实施方案—县级全域土地综合整治专项规划—单元实施方案”四级整治规划体系，统筹安排市域整治的规模、结构和时序，明确实施路径。\n\n此外，福建厅举办多期耕地保护和土地整治专题培训会，邀请省内外专家、教授传授省外经验和实践，并就试点政策与工作要求加以解读。“在试点过程中，厅耕保处、省耕地保护中心还组成调研组，不定期到实地调研、指导工作。”福建厅耕地保护监督处负责人介绍。\n\n优化农业空间\n\n开创耕地保护新局面\n\n初夏时节，走进莆田市黄石镇，田野里是一眼望不到头的稻谷，微风拂过，稻浪翻滚，同远处整齐划一的居民区构成一幅和谐的乡村美景。\n\n木兰溪南岸全域土地综合整治试点涉及荔城区新度镇和黄石镇，按照“集中连片、规模建设、整体推进”的方式，将木兰溪南岸无序的村庄建设用地、零散废弃工业厂房用地进行集中复垦，打造“1个万亩方、2个千亩方”的高标准生态良田，并拟全部划入永久基本农田，做到永久基本农田“管得住、建得好、守得牢”，使农业空间布局更加符合自然地理格局和农业生产规律，进一步加强耕地保护。\n\n连片农田的形成，吸引了种植大户和农业企业纷纷前来投资兴业。目前，莆田市荔城区华龙农机专业合作社通过流转承租，在黄石镇沙坂社区和港利村开展水稻种植。合作社理事长陈凤萍说：“成规模田地是农业机械化生产的前提，可以确保新机具的利用率和产出效益。”\n\n泉州市注重优化耕地、林地和园地等农用地空间布局，推动“小田”变“大田”，启动建设了2个万亩方、18个千亩方、42个百亩方。探索“林耕置换”，科学划分林地耕地管理边界，划定后备资源补充空间，梳理出可释放耕地潜力资源8万亩。截至目前，泉州通过全域土地综合整治完成农用地整理21.7万亩，恢复耕地5.8万亩，垦造补充耕地5700亩，实施增减挂钩280亩。\n\n晋江市九十九溪流域全域土地综合整治推动耕地连片，实现布局优化。通过实施拆旧复垦和土地流转，划定成片耕地保护集聚区，引导耕地与永久基本农田集中布局，整理耕地碎片化图斑350个，新增耕地218亩。\n\n惠安县打破乡镇界限，梳理耕地、永久基本农田、高标准农田和粮食生产功能区的图、数、库，厘清各类型耕地之间的关系，以“多田套合”推动耕地保护“一盘棋”，逐步形成永久基本农田全部落在耕地上、高标准农田全部建在永久基本农田内、粮食生产功能区全部落在高标准农田中的“金字塔形”耕地保护格局。\n\n南平市建阳区麻沙镇优化农田基础设施，推动零散“巴掌田”变身连片“高产田”，围绕麻沙镇高标准农田油稻轮作、烟后稻、水稻育种等特色产业模式，建设空天地一体化的立体农情监测体系、绿色植保预警系统、无人机巡视飞防等，接入中国电信AI产业大脑和南平市大数据平台。因地制宜实施地力培肥、生态化农田渠系建设、生态化生产道路建设等工程。截至目前，完成高标准农田建设近万亩，新增耕地275.81亩，形成“田成块、路相通、渠相连、涝能排、旱能灌”的高标准农田体系。\n\n“小田变大田”“集中连片”“薄田变良田”，借助全域土地综合整治试点工作，福建省积极探索破解“八山一水一分田”特殊地貌的耕地保护难题，开创耕地保护新局面。\n\n活化产业空间\n\n因地制宜赋能发展\n\n建设用地整理也是全域土地综合整治的重要内容之一，即对农村零散、闲置、低效建设用地进行整理盘活，统筹推进建设用地布局优化、村庄建设用地整理、废弃采矿用地复垦利用、城镇低效用地再开发等，以进一步提升土地资源配置效率和节约集约利用水平。\n\n对于建设用地整理，福建省明确从开展旧宅基地整理、工矿用地整理和低效用地再开发等方面着手。“部分试点地区积极开展建设用地整理，为乡村振兴提供了新动能，也为全面推行全域土地综合整治提供了宝贵经验。”福建厅耕地保护监督处相关负责人表示。\n\n泉州市将治理触角延伸至村庄肌理，以“空心村”“安控区”“散居点”为整治重点，推进解决村庄空间布局无序、耕地碎片、土地利用低效等问题。例如，泉港区以石化基地安控区为重点整治单元，通过将已搬迁的旧村旧厂房复垦为耕地，实现从“农宅成片”“厂村混杂”到“耕地成片”“林地成带”转变。\n\n晋江市九十九溪流域综合整治严格落实“少量拆除、重点改造、部分新建”的设计理念，在保留村落肌理、传统风貌的同时，严控建设用地规模，因地制宜，拆除部分零散破旧、低效利用民房用于基础设施、集合式住宅建设。结合农田机耕路、简易步道建设，完善区域内外交通路网，配套相关休憩设施，改善村庄人居环境，发挥成片规模化农田的景观价值，打造“城市中央稻田公园”，推动村居更加宜居宜业宜旅。\n\n德化县上涌镇通过“腾笼换鸟”挖潜增效，拆除旧水泥厂，平整土地80多亩，进行稻田鱼和稻田小龙虾的特色养殖，同时盘活旧水泥厂、旧粮仓等闲置资源，整合米院子、窑口、仙苑等10多处资产。\n\n莆田市探索新型农村集合居住模式，持续做优方案设计、做强建筑质量、做美居住环境，着力打造“居住舒适、配套完善、生活便利、环境优美、管理有序”的新型社区，确保新建住宅品质不低于周边普通商品房，已建设集合住宅19栋，总建筑面积达32万平方米，实现农村闲置低效用地节约集约利用。\n\n南平市建阳区麻沙镇推动全域土地综合整治与武夷山国家公园环带建设相结合，盘活乡村闲置资产，推动11处闲置资源利用。其中，杜潭村探索推行“振兴公司﹢国企﹢镇﹢村”联建机制，盘活闲置房屋720平方米、荒地200余亩，将杜潭老村改造为特色民宿和展馆，将废旧电站改造成杜潭会客厅等，打造成集露营烧烤、农耕体验、文化体验等多种业态于一体的农文旅示范基地。\n\n福建厅耕地保护监督处相关负责人表示，试点地区探索“全域、全要素、全周期、全链条”整治，有些试点地区结合本地特色，或发展特色农业，或发展农业旅游，并积极探索历史文化保护与城市发展的和谐共生关系，为实现社会高质量发展、人民高品质生活、资源高效率利用、环境高质量保护提供了有益尝试。\n\n深化保障措施\n\n助力整治行稳致远\n\n“建立全域土地综合整治项目库，鼓励金融机构对入库项目进行评估，开辟绿色通道，在贷款期限、额度、利率等方面予以优惠。目前，已指导各地初步谋划了67个全域土地综合整治项目。”近日，福建省政府联合中国农业发展银行举办金融服务福建乡村全面振兴政企银合作对接会，福建厅相关负责人围绕行业发展、投资规划、支农政策等方面作了宣介。\n\n全域土地综合整治是一项系统工程，资金保障是关键。在实施全域土地综合整治试点过程中，福建厅积极鼓励多元参与，助力整治行稳致远。\n\n试点期间，福建厅会同国家开发银行福建省分行、中国农业发展银行福建省分行，出台用好政策性金融资金加快推进土地综合整治的意见，明确申报程序和监管要求，积极完善政策性金融资金使用，促进全域土地综合整治项目落地实施。同时，探索多元参与利益平衡机制，以全民“共治共享”为理念，发挥政府主导行政管理优势，强化国企担当建设运营优势，突出银行助力投融资优势。\n\n泉州深化“政银企”多元合作，创新合作机制，有效破解耕地用途管制过程中面临的资金、空间、动力难题。一是政府搭台。市、县政府完善整治收益分配机制，属地乡镇及村居负责规划选址、旧房拆迁以及配合土地流转补偿等工作，调动各方形成合力。如，安溪县对实施耕地恢复的主体给予每亩4000元补助，引导低效茶园退茶还耕，整治耕地“非粮化”1万余亩，新增耕地428亩。二是国企实施。市、县政府优选有实力的国有企业，负责投融资、企业引入、产业导入等全流程工作。如，惠安县文旅集团作为走马埭全域土地综合整治项目实施主体，采用线上招商、公开竞价方式引入种植公司合作运营。三是银行支撑。泉州市政府与中国农业发展银行福建省分行签订合作协议，创新整治类金融产品和融资模式，为试点项目提供资金保障。\n\n莆田市采取“财政﹢国企﹢金融”运作模式，指定市属国有企业作为实施主体，负责实施、建设、融资等工作，采用“自有资金筹、专项债券补、多种产品融”方式，扩展融资渠道、加快融资速度，做好资金保障。\n\n在试点实施过程中，工作人员充分尊重群众意愿，让群众全程参与方案编制、项目实施、监督管理等环节，调动群众积极性和主动性，保障了群众合法权益。“下一步，将继续坚持人民至上、共建共享，坚持规划先行、统筹谋划，坚持实事求是、量力而行，坚持立足当下、谋划长远，推进全域土地综合整治工作稳步开展。”福建厅相关负责人表示。【中国自然资源报】"
  },
  "S01": {
   "heading": "zrzyt.fujian.gov.cn_福建省自然资源厅：福建莆田木兰溪入选！第二批全域土地综合整治试点典型案例发布",
   "date": "2024-09-11",
   "source": "zrzyt.fujian.gov.cn_福建省自然资源厅",
   "url": "https://zrzyt.fujian.gov.cn/ztzl/sxzygwzxsqzx/zyzxzx/202409/t20240911_6516822.htm",
   "body": "9月10日，自然资源部发布第二批全域土地综合整治试点典型案例，15个典型案例入选，福建省莆田市木兰溪南岸全域土地综合整治试点在列。\n\n莆田市木兰溪南岸全域土地综合整治试点包含自然资源部2021年部署的荔城区新度镇、黄石镇2个试点。\n\n木兰溪南岸全域土地综合整治后鸟瞰\n\n试点传承弘扬习近平总书记治理木兰溪的重要理念，充分发挥木兰溪山水林田湖草沙要素齐全的优势，坚守耕地红线，落实节约集约、生态优先战略，探索莆田经济社会高质量发展、人民高品质生活、资源高效率利用、环境高质量保护的新模式，将木兰溪南岸全域土地综合整治试点打造成习近平生态文明思想的实践基地。\n\n试点遵循自然生态系统演替规律和内在机理，对山水林田河村等进行综合统筹和全域整治，加大“三生”空间格局优化调整力度，加强生态化、集约化、品质化改造。为此，试点部署了农用地整理、建设用地整理、乡村生态治理修复、乡村历史文化保护、产业融合发展五大工程。整治后，两个镇耕地质量等别分别提升0.1等、0.3等，农业种植效益提高三成以上，耕地布局由分散走向高度集中。整治后在建设用地承载能力和利用效率较大幅度提升的同时，将彻底改变当前建设无序、布局散乱、低效低品的村居环境，大幅减少生态、生活、生产空间相互干扰，降低水患、水污染等环境风险，提升木兰溪南岸生态韧性。【厅耕保处 魏延明 省耕保中心 董占杰 海峡资源报 郑与国】\n\n附：自然资源部第二批全域土地综合整治试点典型案例"
  },
  "S04": {
   "heading": "zrzyt.fj.gov.cn_福建省自然资源厅：环境美了 纠纷少了 耕地增了——莆田市木兰溪南岸全域土地综合整治试点见闻",
   "date": "2026-03-20",
   "source": "zrzyt.fj.gov.cn_福建省自然资源厅",
   "url": "https://zrzyt.fj.gov.cn/zwgk/xwdt/zrzyyw/202603/t20260320_7113751.htm",
   "body": "“住在这个小区，环境真不错！”3月9日，春寒料峭，笔者在莆田市荔城区新度镇港利村锦绣雅郡小区采访，70多岁的村民彭开明谈起入住体会，脸上洋溢着笑容。锦绣雅郡小区是木兰溪南岸全域土地整治试点港利村的安置房，小区共建有12幢20多层高的楼房。\n\n2024年9月，自然资源部发布第二批15个全域土地综合整治试点典型案例，其中，莆田市荔城区木兰溪南岸全域土地综合整治试点上榜，系全省唯一。该试点充分发挥木兰溪山水林田湖草沙要素齐全的优势，坚守耕地红线，落实节约集约、生态优先战略，探索莆田经济社会高质量发展、人民高品质生活、资源高效率利用、环境高质量保护的新模式，将木兰溪南岸全域土地综合整治试点打造成习近平生态文明思想的实践基地。木兰溪南岸全域土地综合整治试点被评为典型案例后，整治成效如何？笔者专程到港利村感悟变化。\n\n港利村村委会副主任郭海告诉笔者，实施土地综合整治前，村中道路狭窄、车辆通行不便，房屋犬牙交错，只见新房不见新貌，村内的零星耕地和房前屋后耕地经常被侵占，用于建房或者堆场，乱搭盖现象时有发生。\n\n港利村全域土地综合整治于2020年下半年开始，共涉及1000多户，村民了解政策后，大力支持项目实施。在荔城区政府、市自然资源局指导下，该区积极探索新型农村集聚居住模式，打造优质新型社区。锦绣雅郡小区2021年8月开工建设，共建设1192套安置房，配套建设1400多个地下车位，2024年12月实现交房回迁，入住率60%以上。\n\n一直负责纠纷调解工作的村干部彭剑威说，以前村民之间常因为采光、房屋滴水、道路界线等问题发生纠纷，还时常出现“两违”问题。入住小区以来，村民之间纠纷明显少了。刚搬进小区的村民陈德洪也表示，安置房楼距宽、视野好、环境美，品质不亚于城区的商品房。\n\n据介绍，港利村旧村复垦分两期进行，经过渣土清运、土壤改良、机耕路建设等措施，2025年底全部通过市级验收和省级审核，新增耕地指标335.92亩。复垦后的耕地与原有零散耕地形成约3000亩集中连片耕地，由国企集团承包种植水稻，亩产约1000斤左右。【莆田市自然资源局】"
  },
  "S05": {
   "heading": "fujian.gov.cn_福建省人民政府：木兰溪南岸全域土地综合整治试点入选",
   "date": "2024-09-13",
   "source": "fujian.gov.cn_福建省人民政府",
   "url": "https://www.fujian.gov.cn/xwdt/fjyw/202409/t20240913_6517496.htm",
   "body": " 当前位置： 首页 > 新闻动态 > 福建要闻\n\n自然资源部发布第二批全域土地综合整治试点典型案例\n\n木兰溪南岸全域土地综合整治试点入选\n\n废止，失效（ 宣布失效）\n\n QQ空间\n\n近日，自然资源部发布第二批15个全域土地综合整治试点典型案例。其中，莆田市荔城区木兰溪南岸全域土地综合整治试点榜上有名，为全省唯一。\n\n据了解，莆田市荔城区木兰溪南岸全域土地综合整治试点涉及新度镇和黄石镇。该试点采取“木兰溪流域综合治理+全域土地综合整治”模式，部署农用地整理、建设用地整理、乡村生态治理修复、乡村历史文化保护、产业融合发展等五大工程。整治后，两个镇的耕地质量等别将分别平均提升0.1等、0.3等，农业种植效益提高三成以上，耕地布局由分散零碎走向集中连片。\n\n试点典型案例显示，全域土地综合整治在保护农耕肌理、释放发展空间、修复生态基底等方面具有重要意义，已成为自然资源领域助力乡村全面振兴和城乡融合发展的重要平台。（记者 林剑波）\n\n来源：福建日报\n\n扫码关注中国福建微信"
  }
 },
 "24": {
  "S02": {
   "heading": "iziran_中国自然资源报：释放潜力添动能｜强保障 促发展",
   "date": "2026-01-13",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5451089",
   "body": "土地是乡村振兴的核心要素与空间载体。长期以来，江西省宜春市城乡发展面临山多地少、用地布局分散、空间供给紧张等现实挑战。如何在严守耕地红线的前提下，有效保障产业发展、城乡建设和乡村振兴的合理用地需求，成为一道亟待破解的难题。\n\n近年来，宜春市自然资源局通过推行工业项目“标准地”出让、强化重大项目全周期服务、深化全域土地综合整治等一系列举措，着力破解用地瓶颈，优化资源配置，提升服务效能，为全市高质量发展提供了坚实的空间保障和要素支撑。2025年，全市共保障各类建设项目用地1.4万亩，其中保障国有建设用地约1.08万亩，农村集体建设用地3189.52亩，有效实现了土地要素精准高效配置，推动了城乡经济社会健康发展。\n\n供地改革提速度\n\n打造从拿地到开工高速通道\n\n为破解项目落地难、落地慢的顽疾，宜春市自2020年起推行“标准地”改革，以“事先评价、事前定标、事中承诺、事后监管”为主线，为企业打造了一条从拿地到开工的高速通道。\n\n改革的核心，在于“先做减法、再做加法”。政府先行投入，统一开展区域能评、环评、地质灾害等多项评估，变单个项目评为区域整体评，为企业省时省力。同时，制定并公开每块“标准地”的出让标准，涵盖固定资产投资强度、亩均税收、容积率、能耗及排放等多项指标，让企业在拿地前就清晰知晓“要做什么、做到什么标准”。探索过程中，各县（市、区）多次对指标体系进行修订升级，更精准匹配高质量发展要求。\n\n江西北方中意新材料有限公司的快速落地，正是这项改革成效的生动注脚。2025年，面对该企业迫切的生产空间需求，宜春市经开区创新采用“先租后让+标准地”组合供应模式，为其精准匹配了34.74亩工业用地。出让方案中明确，地块固定资产投资强度不低于每亩220万元，达产后亩均税收不低于10万元。在签订投资建设协议与承诺书后，相关项目迅速进入“绿色通道”。宜春局提供“帮代办”服务，项目专员全程协办各类手续，项目从对接到达成供地意向的时间大大缩短，有效降低了企业初始投入成本，实现了轻装上阵、快速投产。\n\n改革推行以来，全市工业用地已实现100%按“标准地”出让，累计供应超800宗、近5万亩。项目全流程审批时限大幅缩短，“拿地即开工”从理想变为常态。通过明确预期、强化服务、信用监管，“标准地”改革不仅显著提升了审批效率，更从源头引导土地节约集约利用，倒逼企业转型升级，为宜春市工业经济高质量发展注入了强劲动能。\n\n要素保障增效率\n\n推动重大项目早落地快建设\n\n对重大项目的全方位要素保障，是检验自然资源部门服务发展能力的试金石。\n\n袁河航道提升工程是交通运输部《水运“十四五”发展规划》和《江西省“十四五”综合交通运输体系发展规划》中明确的重点建设项目。该项目起点位于新余市，在樟树市荷湖馆村汇入赣江，全长约103.5公里，总投资概算约137.6亿元。其目标是打造一条高等级航道，补齐赣西地区水运短板，优化区域运输结构，服务腹地经济高质量发展。项目在樟树市境内用地面积约3225.94亩，该工程落地实施，离不开坚实的土地要素保障。\n\n针对这一重大项目，樟树市自然资源局提供全周期跟进、全流程服务。在项目启动初期，樟树局便积极与省港口集团对接，协助完成用地范围初步划定以及压覆矿产资源、地质灾害危险性评估等一系列前期专题材料的准备。为推进项目早日开工，樟树局高效办理先行用地报批手续。随着项目主体工程于2025年3月底正式开工，该局严格依法依规开展征地工作，牵头协调财政、人社、农业农村等部门，同步落实补偿安置资金和社会保障费用，在短时间内完成了项目用地的组卷报批材料准备工作，为该工程樟树段建设铺平了道路。2025年9月26日，袁河航道提升工程龙尾洲枢纽一期围堰顺利实现合龙，目前与围堰工程同步推进的右侧导流明渠也已准备就绪，为施工期间河道水流的顺利宣泄提供了可靠路径，构筑起工程安全度汛的防线。\n\n此外，为保障工程临时施工需求，樟树局于2025年年底及时审批了袁河航道提升工程项目2宗临时用地，涉及面积18.62亩。\n\n综合整治促振兴\n\n激活乡村经济“一池春水”\n\n全域土地整治以生产、生活、生态空间用地的合理布局为目标，涉及村庄规划、耕地保护、节约集约用地、权属调整、生态保护、文化传承等多方面工作，通过增耕地、腾空间、促整改等举措，解决土地利益中的综合性问题，进而促进产业兴旺、生态宜居、乡风文明。\n\n铜鼓县大塅镇是宜春市首个全域土地综合整治试点，其生动实践表明，全域土地综合整治绝非简单的土地整理，而是通过系统性空间重组，破解乡村发展瓶颈、重塑乡村形态、培育乡村动能的钥匙，是一场以空间重构带动乡村全面振兴的行动。\n\n试点将耕地保护置于首位，实施耕地数量、质量、生态“三位一体”保护提升工程。通过统筹推进永久基本农田连片建设、高标准农田改造与粮食产区打造，完成高标准农田建设与提升近6500亩，通过改造河堤保护耕地约1600亩，全镇耕地平均等级有效提升，粮食亩产同比增长超过10%，真正实现了粮田变良田。\n\n立足于优化空间布局、推动产业振兴，大塅镇推动闲置宅基地和低效建设用地盘活，累计腾退、盘活土地560余亩，为镇村发展留足了空间。腾出的空间优先用于乡村振兴产业，立足资源禀赋，精准导入特色产业：规模化种植有机白茶近万亩、林下黄精6000余亩，打造茶旅研学基地；高标准改造毛竹林2000余亩，延伸竹笋加工产业链；引导古桥村成立村级公司，发展艾草种植加工；建设农家乐49家，民宿27家。\n\n试点还重点推进浒口村废弃矿山等生态修复治理，使230余亩“疮痍山地”重现绿草青山，矿坑变为良田；系统治理武宁河流域，修建堤防、治理河道，实现“水清、岸绿、景美”。同时，统一规划G220沿线建筑风貌，串联“花浒林泉”“田园浒村”等特色景观节点，培育丰富旅游业态，全镇生态系统价值总量提升至近60亿元，生态高颜值源源不断转化为经济高价值。"
  },
  "S04": {
   "heading": "tonggu.gov.cn_铜鼓县自然资源局：铜鼓县自然资源局2024年上半年工作总结和下半年工作打算",
   "date": "2024",
   "source": "tonggu.gov.cn_铜鼓县自然资源局",
   "url": "http://www.tonggu.gov.cn/tgxrmzf/ghjh54/pc/content/2028878255931367424/content_2028878255931367424.html",
   "body": "铜鼓县人民政府\n\n014754452E/2024-0070506\n\n铜鼓县自然资源局\n\n铜鼓县自然资源局2024年上半年工作总结和下半年工作打算\n\n信息来源： 浏览量：\n\n2024年是新中国成立75周年，是实现“十四五”规划目标任务的关键一年，也是全市自然资源事业发展的重要一年。今年以来，在县委、县政府和市局党组的坚强领导下，我局坚持以习近平新时代中国特色社会主义思想为指引，全面贯彻落实党的二十大精神，坚决贯彻“大抓落实年”部署要求，统筹推进自然资源管理各项工作。现将2024年上半年工作情况总结如下。\n\n一、工作开展情况\n\n（一）抓实规划编制，优化空间布局。 一是完成县级总规报批。 《铜鼓县国土空间总体规划（2021-2035年）》于2月7日通过省国土空间规划委员会审议，并于2月获得省人民政府批复。 二是健全空间规划体系。 积极推进乡镇总规、控规及村庄规划编制工作，温泉镇正在开展乡镇总规编制，其它8个乡镇总规已形成初步成果，中心城区控规已形成初步成果并开始征求县直部门意见，其余乡镇控规已形成初步成果，在编村庄规划共35个均已形成初步成果；同时开展城镇开发边界局部优化调整工作，已形成城镇开发边界优化后成果。 三是加强规划审批服务。 组织召开3次规委会，审议建设项目方案4个、出具规划条件14宗；同时严格项目规划审批管控，核发用地规划许可7份、工程规划许可7份等，有效保障项目用地和规划建设。\n\n（二）强化要素保障，服务发展大局。 一是加速推进用地报批工作。 已下达村庄集体、集镇、西湖路项目、三都高速公路综合养护中心项目、农民建房的用地批复，共计145.341亩。 二是加快存量土地消化处置。 2024年度省厅下发我县批而未用基数为1951.35亩，批而未供基数为124.83亩，无闲置土地。目前，我县批而未用土地消化24.06亩，批而未供处置面积111.24亩，无闲置土地，年内无新增闲置土地。 三是土地供应保障高效有力。 网上公开出让4宗地，出让面积92.57亩，实现土地收入641万元；国有划拨土地使用权供应4宗，面积45.54亩，探索集体土地供应1宗，面积2.793亩。 四是全力保障重点项目发展。 深入一线主动靠前服务，扎实做好用地前期工作，推动城东产业园、高桥加油站项目等项目落地，共计24.07亩。\n\n（三）聚焦资源保护，守好自然生态。 一是加强生态保护红线管理工作。 严格按照《江西省自然资源厅江西省生态环境厅江西省林业局关于加强生态保护红线管理工作的通知》文件要求，加强生态保护红线内建设项目管控，同时加强生态保护红线内巡查管理工作，坚守生态底线。 二是稳步推进承诺新增耕地种植。 在2023年度国土变更调查中，我县承诺耕种地块203.98亩，目前196.13亩已通过国家核查，通过率为96.2%。 三是有序推进耕地储备区划定。 按照省、市工作部署成立县级耕地储备区划定工作专班并组织召开划定工作推进会，同时会同农业农村、林业部门采取“两下、两上”的方式，内外业相结合方式开展调查核实工作。现通过分析得出可纳入补充耕地储备区总面积5777.15亩，划入永久农田储备区的面积为2042.64亩，造林种树、种果种茶资源潜力图斑面积为9983.79亩，目前已上报县级耕地储备区划定成果初稿，待省市审查。 四是强力推进耕地“占补平衡”。 县委、县政府高度重视、高位推进，耕地占补平衡工作推进成效明显，耕地占补平衡压力得到缓解。2024年1月至6月国家耕地占补平衡监管系统平台已入库项目6个，共计367亩，其中：水田指标188亩，旱地指标178亩。归还借用市本级指标并核减“耕地造耕地”问题指标后，我县库存结余耕地指标175亩、水田规模462 亩。 五是推动矿山生态修复。 按照省、市相关要求，督促三个持证矿山制定了《年度修复计划》，通过场地平整、表土回填、种植树木、种植草坪、播撒草籽等对废弃矿山进行整治，目前工程已全部完工，修复治理39.432亩。\n\n（四）加强地灾防治，筑牢安全防线。 一是全面开展隐患排查。 积极开展地质灾害隐患点大排查大核查以及常态化汛期巡排查，共排查我县现有存在威胁住户人员的地质灾害隐患点291处，913户5463人直接受到地质灾害的威胁，受威胁房屋3553间、林地近1000亩、农田近500亩，威胁财产约28071万元，实现地灾隐患排查全覆盖、无死角；同时进一步充实了县、乡（镇）、村、组四级防灾责任体系和群测群防体系，全县共落实地质灾害隐患点监测员224名，监测责任人85名。 二是加强防灾能力建设。 开展地质灾害培训，举办了全县地质灾害培训班，对乡镇干部、各村书记及防范地质灾害委员会成员等149人进行了授课，讲解了我县地质灾害的特征及预警监测、应急处置等相关内容，提升了防灾减灾救灾能力；整合应急救援力量，联合应急管理局组建地质灾害应急救援队，联合开展应急演练，在应急救援、应急调查中深度合作，协同做好地质灾害防治和救援，形成工作闭环和合力；强化技术支撑，积极邀请江西有色地质矿产勘查开发院和江西省地质局第六地质大队派驻专业技术人员，落实驻县包乡技术支撑，指导开展汛期地质灾害汛前排查、汛中巡查、汛后复查以及应急调查、监测预警、技术培训、防灾减灾科普宣传等工作，对进入汛期以来全县发生的6起地质灾害事件配合我局进行现场应急调查，开展应急处置，有效保护了人民群众的生命财产安全。 三是抓好项目实施申报。 今年我县共有5个地质灾害治理项目，6月底前完成招投标工作，积极推动6月底前5个项目全部开工建设，积极谋划明年项目申报，目前已向省厅申报3个地灾治理项目。\n\n（五）严格执法监管，规范资源管理。 一是抓好问题整改。 扎实推进自然资源督察问题整改，历年土地例行督察图斑19个，已整改到位10个，整改到位率56.64%；2024年自然资源督察问题图斑8个，面积29.03亩（其中占耕地面积15.64亩），均已下达责停、责改通知书；一季度土地卫片图斑下发40个，自认违法图斑2宗，面积6.57亩（其中占耕地面积2.19亩），现已下达了责停、责改通知书；年度采矿用地核查图斑下发18个，目前正积极核查举证，进行系统填报。 二是加强案件查处。 上半年结合卫片图斑和日常巡查发现情况积极开展违法案件查处工作，立案查处土地违法案件8宗，有效打击我县自然资源土地违法违规行为。 三是实时智能监管。 深入推进自然资源视频监控系统建设，目前已完成软件平台和指挥调度中心建设，97个点位已完成设备安装工作，待接通网络连接市级平台。 四是妥善处理信访。 持续化解自然资源领域矛盾纠纷，2024年我局共受理群众信访件8件（其中群众来信来访2件，来电6件），信访按时报结率100%。\n\n（六）抓实便民举措，优化营商环境。 一是 优化 提升 不动产登记 便利度。 通过深入推进税收征缴和不动产登记信息共享，强化不动产登记和办税业务协同等，不断精简材料、优化环节，促进营商环境优化，增强企业群众的办事体验感和幸福感。截至目前，共办理各类不动产登记业务6601件，其中颁发不动产权证书4897本、不动产登记证明768本。 二是做好 不动产拆迁安置发证工作。 建立“联办”工作运行和全流程监督管控机制，安排专人专岗提供“一站式服务”，有效解决群众多头跑问题，截至目前已发证915本。 三是推动 农村土地承包经营权确权登记成果清理规范和整合建库。 主动对接县农业农村局、县档案局，下沉到乡镇调研农村土地承包经营权办理情况，做好了调查摸底、成果分析等农村土地承包经营权数据建库项目前期准备工作，同时已进行项目采购意向公开。 四是全面提升服务群众保障能力。 通过不动产登记领域“依法登记 保护产权”学习讨论积极营造氛围不断增强制度创新意识，开展不动产违规登记问题专项整治切实提高不动产登记的规范化水平，健全完善“交地（房）即交证”“带押过户”等机制打造更具有竞争力的营商环境，方便企业群众办事，持续助力营商环境再上新台阶。\n\n（七）夯实数据基础，加强信息建设。 一是完成县城区标定地价制定。 该成果已完成市级验收并经县常务会讨论通过，后依据流程对成果进行公布使用。 二是做好测量标志点巡查。 根据市局下发计划组织人员进行巡查，本季度22个重点测量标志点的使用登记情况、委托保管、巡查维护等信息已经完成录入。 三是继续做好23年度国土变更调查。 2023年度国土变更调查成果于2024年5月31日通过市级检查、省级核查，现已提交自然资源部等核查通过后启用成果。\n\n（八）全面深化改革，确保落地落实。 一是全力推动耕地“山上”换“山下”试点工作 。 我县为6个县（市）试点之一，在省厅的支持下由国土空间调查规划研究院的专家作为我县的技术支撑，4月起专家组深入基层开展铜鼓县山上农用地资源和山下林地资源情况现场调研摸底工作，经初步统计“山上”可用于植树的农用地资源共计1225亩（其中耕地面积为199亩，园地面积为300亩，其他草地面积为726亩），“山下”可进行开发的林地资源共计2158亩。 二是稳步推进大塅镇全域土地综合整治试点项目。 现《永久基本农田调整方案》《大塅镇全域土地综合整治项目试点实施方案》两个方案已完成省厅审查批复；23年通过全域综合整治试点项目平台争取到重大区域发展战略（长江经济带绿色发展方向）项目中央资金共计7971万元，5月河流综合治理、地灾点整治、污水处理提升改造项目工程已完成招投标工作，项目建设正有力有序开展。\n\n（九）强化党建引领，全面从严治党。 一是深化理论武装。 注重把学习习近平总书记系列重要讲话精神作为第一议题，深入开展党纪学习教育，坚持读原著、学原文、悟原理，今年以来共组织召开8次理论学习中心组学习，10余次干部职工集体学习，领导干部带头讲党课3堂，引导干部职工切实增强“四个意识”、坚定“四个自信”、捍卫“两个确立”。严格落实党组意识形态工作主体责任，及时研判属地自然资源领域意识形态工作形势，加强监管，牢牢守住意识形态主动权。 二是实现融合共振。 坚持围绕中心抓党建，紧扣深化“‘四强四好’模范机关”创建和“党旗护绿、自然添彩”党建品牌建设，吸引青年干部向党组织靠拢，已落实入党发展对象2名，确保组织体系建设坚强有力。通过深入开展“大抓落实、狠抓项目、优化环境、提升作风”活动、自然资源每月大讲堂等一系列活动，在耕地保护、要素保障、地质灾害防治等重点工作上，积极引导党员干部充分发挥党员先锋模范作用，促进自然资源业务水平提升。 三是做好以案促改。 按照省厅、市局工作部署，持续巩固“清风正纪”专项行动成果，有序推进自然资源部部署专项治理工作、陶志等案以案促改专项行动及自然资源系统群众身边不正之风和腐败问题集中整治工作，结合身边人身边事，以李定华案件为反面教材，扎实开展整改，营造风清气正的自然资源环境。\n\n二、存在问题\n\n一是村庄规划编制技术审查待加强。 我县村庄规划编制数量较多，审查力量薄弱，数据库审查较为困难。\n\n二是耕地“量 ” “质”并重存在困难。 我县耕地恢复任务重，耕地后备资源匮乏，同时耕地流出现象屡禁不止，保护耕地与保障用地需求矛盾突出，导致弃耕撂荒等“非粮化”“非农化”现象发生。\n\n三是督察 发现 问题整改工作进展较缓慢。 我县督察发现问题涉及村庄规划批复、项目报批和项目拆除复耕等类型，导致问题整改难度较大，整改进度缓慢。\n\n四是试点工作政策指导待进一步明确。 耕地“山上”换“山下”试点工作涉及的林地开发及永久基本农田调整下山缺乏政策依据，且经济激励不明确，后期管护较为困难。\n\n三、下半年工作打算\n\n（一）强化规划引领管控。 加快推进国土空间规划编制工作。指导乡镇级总规、控规、村庄规划等规划编制报批工作。根据各类规划编制技术规程，严格审查规划约束性指标及上级规划传导落实情况。按照法律法规规定的规划编制程序，推进各项规划在年底按要求完成报批。\n\n（二）严格落实耕地保护。 牢记“国之大者”，落实党政同责。严格落实“长牙齿”硬措施，耕地保护工作常抓常管，抓好耕地流出问题整改工作，结合上级下发的监测图斑，加强调度，督导各乡镇采取常态化整改工作，确保现有耕地总量不减少。\n\n（三）做好土地要素保障。 一是做好天然气门站及配套管网工程、S221铜鼓金鸡桥至大塅段二级公路改建工程等的用地报批工作；二是盘活存量严控增量，引导国债及政府投资项目选址使用存量土地或批而未用土地，引导工业项目入园使用存量土地建设或入驻标准化厂房投产，降低项目使用新增建设用地的比例；三是根据市场需求推出区域优越，配套设施完善、面积适中、形状规整的熟地，提升城市品位。\n\n（四）加强资源保护管理。 一是切实维护矿业秩序。加强矿产资源勘查、开发利用监管，严厉打击非法勘查开采，保持良好的矿业秩序；二是推行绿色矿山建设。全面推行绿色矿山建设，促进矿产开发与环境保护的协调统一。\n\n（五） 做好土地开发整理 。 一是做好剩余历史项目的上图入库工作，完成8个项目400亩左右新增耕地入库工作；二是耕地占补平衡工作“大占补”政策落地后及时立项一批补充耕地开发项目；三是做好2024年耕地“山上”换“山下”试点工作的第一批实施地块的前期工作，待政策落地后及时立项实施。\n\n（六）提升执法监管水平。 一是持续推进历年督察发现问题整改、卫片执法、土地例行督察、行政执法突出问题专项整治等工作，力争按照上级时间节点完成整改任务；二是加大执法监察力度。加大动态巡查频次，将重点工程、临时用地、设施农用地等纳入重点巡查范围，严肃查处违法占用耕地特别是永久基本农田、侵占生态保护红线、违法开采矿产资源等行为；三是不断提升矛盾纠纷化解工作水平。优化信访事项交办和回复流程，严格落实矛盾纠纷问题排查制度，抓早抓小，切实将问题解决在萌芽状态。\n\n（七）全力办实事惠民生。 一是持续提升登记服务效能，优化提升营商环境，以便民利民为着力点，打通政务服务“赣通码”平台接口，优化不动产登记“一码通办”服务；二是推动农村土地承包经营权确权登记、林权登记、拆迁安置房办证等工作有序开展；三是持续抓好地质灾害防治工作，努力实现“零伤亡”目标。\n\n（八）做好各项基础业务。 一是严格按照上级工作要求、国土变更调查技术规程、方案等按时按质完成2024年度国土变更调查工作；二是做好园林草地，集体建设用地、集体农用地的基准地价工作；三是做好权属争议调处、测量标志点、测绘资质单位项目监管等日常工作。\n\n（九）坚持全面从严治党。 深入学习贯彻党的二十大精神和习近平总书记考察江西重要讲话精神，落实党组书记“第一责任人”责任、班子成员“一岗双责”，抓好班子带好队伍，引导全体领导干部同向发力、同频共振，持之以恒正风反腐。扎实做好以案促改工作，深入开展自然资源系统群众身边不正之风和腐败问题集中整治，形成求真务实、真抓实干、廉洁奉公的清风正气，同时经常性开展全面从严治党宣传教育，特别是党章党规和党性党风党纪教育，注重发挥正反典型的警示教育作用，营造全面从严治党良好氛围。\n\n【关闭窗口】\n\n中央政府部门\n\n市级人民政府\n\n其他重要机构网站\n\n国家发展和改革委员会\n\n工业和信息化部\n\n国家民族事务委员会\n\n人力资源和社会保障部\n\n住房和城乡建设部\n\n文化和旅游部\n\n国家卫生健康委员会\n\n退役军人事务部\n\n国家语言文字工作委员会\n\n国家原子能机构\n\n国家核安全局\n\n国务院国有资产监督管理委员会\n\n国家税务总局\n\n国家市场监督管理总局\n\n国家广播电视总局\n\n国家体育总局\n\n国家国际发展合作署\n\n国家医疗保障局\n\n国务院参事室\n\n国家机关事务管理局\n\n国家认证认可监督管理委员会\n\n国家标准化管理委员会\n\n国家新闻出版署（国家版权局）\n\n国家宗教事务局\n\n国务院港澳事务办公室\n\n国务院研究室\n\n国务院侨务办公室\n\n国务院台湾事务办公室\n\n国家互联网信息办公室\n\n国务院新闻办公室\n\n中国社会科学院\n\n国务院发展研究中心\n\n中国银行保险监督管理委员会\n\n中国证券监督管理委员会\n\n国家行政学院\n\n国家粮食和物资储备局\n\n国家国防科技工业局\n\n国家烟草专卖局\n\n国家移民管理局\n\n国家林业和草原局\n\n中国民用航空局\n\n国家中医药管理局\n\n国家矿山安全监察局\n\n国家外汇管理局\n\n国家药品监督管理局\n\n国家知识产权局\n\n国家公园管理局\n\n国家公务员局\n\n国家密码管理局\n\n政府网站标识码：3609260014 赣ICP备11002304号-1 赣公网安备：36092602000001号"
  },
  "S05": {
   "heading": "tonggu.gov.cn_铜鼓县人民政府：2025年重大项目进展情况（自然资源部分）",
   "date": "2025",
   "source": "tonggu.gov.cn_铜鼓县人民政府",
   "url": "http://www.tonggu.gov.cn/tgxrmzf/yjzjjfk5fvb/pc/content/2028899818860814336/content_2028899818860814336.html",
   "body": "铜鼓县人民政府\n\n014754452E/2025-0171899\n\n铜鼓县自然资源局\n\n2025年重大项目进展情况（自然资源部分)\n\n信息来源： 浏览量：\n\n铜鼓县大 塅 镇生态环境系统整治及生态产品价值实现项目\n\n三都镇项目施工基本完成，目前对集镇基础设施及长林地块设施进行扫尾工程，预计春节前竣工验收。\n\n2025年补充耕地恢复（开发）项目（含山上换山下）\n\n基于 2023年度国土变更调查成果分析耕地“山上换山下”数据成果已完成，《铜鼓县“山上换山下”试点实施方案》已编制完成。通过了专家论证，目前市自然资源局通过OA系统已送省自然资源厅待审核。\n\n大 塅 镇全域土地综合整治试点项目\n\n大 塅 全域整治项目子项目 11已基本完工。 分别为：高标准农田建设项目、大 塅 镇第一批土地开发项目 、 乡村振兴产业更新项目、河流综合治理工程项目、山体滑坡及地灾隐患整治项目、大 塅 镇滨河路改造工程 、污水处理厂建设项目、企业生活污水接管工程、村容村貌治理工程、饮用水更新改造工程、历史文化保护工程目前正在最后收尾资料收集整理工作。\n\n【关闭窗口】\n\n中央政府部门\n\n市级人民政府\n\n其他重要机构网站\n\n国家发展和改革委员会\n\n工业和信息化部\n\n国家民族事务委员会\n\n人力资源和社会保障部\n\n住房和城乡建设部\n\n文化和旅游部\n\n国家卫生健康委员会\n\n退役军人事务部\n\n国家语言文字工作委员会\n\n国家原子能机构\n\n国家核安全局\n\n国务院国有资产监督管理委员会\n\n国家税务总局\n\n国家市场监督管理总局\n\n国家广播电视总局\n\n国家体育总局\n\n国家国际发展合作署\n\n国家医疗保障局\n\n国务院参事室\n\n国家机关事务管理局\n\n国家认证认可监督管理委员会\n\n国家标准化管理委员会\n\n国家新闻出版署（国家版权局）\n\n国家宗教事务局\n\n国务院港澳事务办公室\n\n国务院研究室\n\n国务院侨务办公室\n\n国务院台湾事务办公室\n\n国家互联网信息办公室\n\n国务院新闻办公室\n\n中国社会科学院\n\n国务院发展研究中心\n\n中国银行保险监督管理委员会\n\n中国证券监督管理委员会\n\n国家行政学院\n\n国家粮食和物资储备局\n\n国家国防科技工业局\n\n国家烟草专卖局\n\n国家移民管理局\n\n国家林业和草原局\n\n中国民用航空局\n\n国家中医药管理局\n\n国家矿山安全监察局\n\n国家外汇管理局\n\n国家药品监督管理局\n\n国家知识产权局\n\n国家公园管理局\n\n国家公务员局\n\n国家密码管理局\n\n政府网站标识码：3609260014 赣ICP备11002304号-1 赣公网安备：36092602000001号"
  }
 },
 "25": {
  "S01": {
   "heading": "xiaogan.gov.cn_孝感市人民政府：应城市入选第二批全国全域土地综合整治试点典型案例",
   "date": "2024-09-14",
   "source": "xiaogan.gov.cn_孝感市人民政府",
   "url": "https://www.xiaogan.gov.cn/hd/rdwt/202409/t20240914_90906.shtml",
   "body": "应城市入选第二批全国全域土地综合整治试点典型案例\n\n发布时间：2024-09-14 08:28 来源：孝感日报 作者：王德强 特约记者乔卫华 通讯员韩坦\n\n全国第二批全域土地综合整治试点典型案例公布\n\n应城市杨河镇全域国土综合整治项目入选\n\n9月10日，自然资源部在重庆市召开全域土地综合整治经验交流会，会议公布了全国第二批（15个）全域土地综合整治试点典型案例，应城市杨河镇全域国土综合整治项目榜上有名。\n\n据了解，该项目建设规模3.27万亩，总投资3.83亿元，2021年3月纳入部级试点，于2021年9月开工建设，2023年10月竣工，同年12月完成项目整体验收，是我省首个完成整体验收和省级复核的部级试点项目。\n\n该项目通过探索林耕空间置换，促进耕地林地集中连片，提升林耕质量，助力优化国土空间格局，提升国土空间治理效能，实现了全域土地综合整治项目助推乡村振兴的初衷，对于探索农业产业规模化发展具有良好的推广意义。2024年6月，该项目荣获湖北省全域国土综合整治优秀示范案例称号。\n\n此前，孝南区朱湖办事处全域国土综合整治项目入选自然资源部公布的全国第一批（15个）全域土地综合整治典型案例。至此，我市已连续两次获得全国全域土地综合整治典型案例荣誉。"
  },
  "S02": {
   "heading": "xiaogan.gov.cn_孝感市人民政府：应城全域国土综合整治项目顺利通过“省考”",
   "date": "2024-05-13",
   "source": "xiaogan.gov.cn_孝感市人民政府",
   "url": "https://www.xiaogan.gov.cn/zx/xsqzw/yc/202405/t20240513_22353.shtml",
   "body": "繁体版 | English | 站群导航\n\n无障碍浏览 | 长者模式 | 登录 | 注册\n\n长者模式 | 繁体版 | English\n\n政府信息公开\n\n孝感市人民政府\n\n应城全域国土综合整治项目顺利通过“省考”\n\n发布时间：2024-05-13 09:11 来源：孝感日报\n\n5月7日，记者从应城市获悉，该市杨河镇全域国土综合整治项目已顺利通过省级绩效复核，成为全省首个完成省级绩效评价复核的全域国土综合整治试点项目。\n\n应城市杨河镇全域国土综合整治项目于2020年进入省级第一批试点项目，2021年3月被自然资源部纳入国家试点，项目计划建设工期为三年，总投资约4.85亿元，总面积3.27万亩，涉及杨河镇上杨、川江、马堰、聂程等8个村，共2294户、10110人。经过三年的精心实施，项目已全面竣工。去年11月，项目通过孝感市全域国土综合整治领导小组办公室的终期绩效复核。\n\n经过实地检查、群众走访及资料核查，复核专家组认为，项目认真践行“美好环境与幸福生活共同缔造”的发展理念，在农业生产空间、农民生活空间、农村生态空间、农村产业发展的优化方面做出了突出成绩。项目通过合理规划和布局，显著提高了农业生产效率和产出；通过改善农村基础设施和公共服务设施，大幅优化了农村生活空间，提高了群众的生活水平；在保护生态环境、提升景观质量方面也取得了积极成效；此外，通过引入适合当地的产业，不仅为农民提供了更多的就业机会，也推动了当地经济的持续发展，为当地乃至全省的国土整治工作树立了新标杆。"
  },
  "S03": {
   "heading": "xiaogan.gov.cn_孝感市人民政府：我市3单位获评全省全域国土综合整治工作先进单位",
   "date": "2025-02-15",
   "source": "xiaogan.gov.cn_孝感市人民政府",
   "url": "https://xiaogan.gov.cn/zx/xgyw/202502/t20250215_127580.shtml",
   "body": "繁体版 | English | 站群导航\n\n无障碍浏览 | 长者模式 | 登录 | 注册\n\n长者模式 | 繁体版 | English\n\n政府信息公开\n\n孝感市人民政府\n\n我市3单位获评全省全域国土综合整治工作先进单位\n\n发布时间：2025-02-15 09:08 来源：孝感日报 作者：王德强 特约记者乔卫华 通讯员韩坦\n\n2月11日，省自然资源厅通报2024年度全域国土综合整治工作先进单位，市自然资源和城乡建设局获评全域国土综合整治工作先进单位，孝南区资规局获评流域治理全域国土综合整治先进单位，安陆市资规局获评政银企合作全域国土综合整治先进单位。\n\n2024年，市自然资源和城乡建设局以全域国土综合整治项目建设为抓手，持续深化自然资源“九大战役”，统筹推动全市系统竞相绽放全域国土综合整治“孝感品牌”。\n\n同时，该局加大资金保障，去年全市获批农发行授信贷款30亿元，投入13.42亿元，整合资金6.69亿元。实施各类子项目92个，完成综合整治15.84万亩，新增耕地1.77万亩，减少建设用地0.79万亩，建成百亩方1万亩、千亩方2万亩、万亩方2.6万亩，促进土地流转8.5万亩，取得良好示范效应。\n\n孝南朱湖、应城杨河2个全域国土综合整治项目获评全国典型案例，孝南朱湖、应城杨河、安陆木梓3个项目获评全省优秀范例，应城杨河项目在全省首个通过省级绩效考核。在建项目进度全部达到省定标准。"
  },
  "S04": {
   "heading": "xiaogan.gov.cn_孝感市人民政府：应城杨河镇举行春日赏花季暨文明实践流动集市活动",
   "date": "2025-03-25",
   "source": "xiaogan.gov.cn_孝感市人民政府",
   "url": "https://xiaogan.gov.cn/zx/xsqzw/202503/t20250325_204741.shtml",
   "body": "繁体版 | English | 站群导航\n\n无障碍浏览 | 长者模式 | 登录 | 注册\n\n长者模式 | 繁体版 | English\n\n政府信息公开\n\n孝感市人民政府\n\n应城杨河镇举行春日赏花季暨文明实践流动集市活动\n\n发布时间：2025-03-25 09:04 来源：孝感日报\n\n3月21日，应城市杨河镇举行2025年春日赏花季暨文明实践流动集市活动。千亩连片油菜花迎春盛放，游客与市民纷至沓来，感受现代农业与生态文旅融合的乡村魅力。\n\n上午9时，主会场杨河镇便民服务大厅前的广场上，人潮涌动，鼓乐齐鸣。一旁的文明实践体验区里，该市人社局等部门搭建政策咨询矩阵，为游客和村民提供服务。应城市专家大院农业科技“三下乡”服务队现场讲解“一促四防”技术；医院义诊台前，村民排队测血压、查耳疾；科普大篷车旁，春晚同款机器狗握手作揖、翻滚比心，逗得孩子们争相上前互动。\n\n移步分会场，春日图景更显鲜活。草莓采摘区里，游客们提着篮子，在草莓园里仔细挑选。植树活动区，人们三五成群，扶苗填土，在沃土中种下新绿。\n\n站在田边远眺，金色的油菜花海绵延不绝，远处的风车缓缓转动，嗡嗡作响的蜜蜂穿梭花间，震得花瓣簌簌抖动。\n\n这片金色花海背后，是杨河镇历时三年的全域国土综合整治成果。2020年至2022年，杨河镇实施全域国土综合整治项目，累计投资4.85亿元，整治土地3.27万亩，新增耕地1832亩，涉及8个村、2294户、10110人。去年9月10日，该项目入选全国第二批全域国土综合整治试点典型案例，项目完成后，整治区耕地实施小田变大田工程，建成“万亩方”1.5万亩、“千亩方”5000亩，为整治区农业产业化创造了有利条件。\n\n杨河镇党委宣传统战委员高丽介绍：“去年10月，镇内集中开展油菜种肥同播，近5000亩土地实现机械化、规模化种植。目前油菜长势良好，现已进入盛花期，欢迎广大游客共享花开盛景。”"
  }
 },
 "26": {
  "S01": {
   "heading": "iziran.net_中国自然资源报：湖北宣恩实行土地综合整治多元投融资模式",
   "date": "2024-12-03",
   "source": "iziran.net_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5362837",
   "body": "近年来，为化解全域土地综合整治资金难题，湖北省宣恩县积极探索“财政投入引领、项目资金整合、社会资本参与、支持政策激励”的机制，实行多元投融资模式。该县椒园镇全域土地综合整治试点入选自然资源部发布的第二批全域土地综合整治试点典型案例。\n\n在试点工作中，宣恩县以多元投融资模式破解资金瓶颈，统筹全要素资源，开创政银企创新合作机制。该县围绕山、水、林、田、路、草等要素，统筹财政资金8703.6万元，用于农村基础设施提升、乡村振兴产业发展等民生工程；引入社会资本，在中国农业发展银行宣恩县支行融资2.8亿元，保障项目落地实施。\n\n宣恩县开展农用地整治，改造低效用地500余亩，腾退建设用地200余亩；实施高标准农田建设，耕地平均等级提高0.5级，永久基本农田保护区内零星非耕地面积下降约5%；释放耕地指标，发展集中连片特色产业基地近1.4万亩；盘活建设用地指标，拆旧复垦农村废弃宅基地600余户。\n\n同时，宣恩县打造“山区特色农业+乡村旅游+文化保护”特色产业链条，农业产业人均可支配收入增长10%；打造富硒米、富硒油新型IP，建成硒食品精深加工产业链，建设产业园产业工人配套综合体，增加就业岗位2000余个；围绕少数民族特色整合旅游资源，整治服务产业，带动发展民宿48家、农家乐32家。\n\n此外，宣恩县发动群众参与美好环境与幸福生活共同缔造活动，实施人居环境整治、国土空间绿化美化等行动，更新改造试点区内基础设施，推广农业绿色生产方式，改造民房院落200余户，建设“五小园”8000余平方米，污水处理率达85%，垃圾分类处理覆盖率达90%。"
  },
  "S02": {
   "heading": "ghj.enshi.gov.cn_恩施州自然资源和规划局：宣恩县椒园镇全域国土综合整治增减挂钩指标成功入库",
   "date": "2025-03-11",
   "source": "ghj.enshi.gov.cn_恩施州自然资源和规划局",
   "url": "http://ghj.enshi.gov.cn/xwzx/xsdt/202503/t20250311_1676993.shtml",
   "body": "宣恩县椒园镇全域国土综合整治增减挂钩指标成功入库\n\n发布时间： 2025-03-11 09:21 来源： 恩施州自然资源和城乡建设局办公室 作者： 编辑：\n\n近日，宣恩县椒园镇全域国土综合整治增减挂钩指标在城乡建设用地增减挂钩在线监管系统备案成功，是宣恩县首次以全域国土综合整治为平台入库的增减挂钩指标。椒园镇全域国土综合整治项目中累计拆旧复垦636户，形成 增减挂钩指标 109.10亩。\n\n一是明确奖补措施。 椒园镇稳步推进项目区农村废弃宅基地拆旧复垦工作，高效利用土地资源，不断释放存量用地潜力，出台《宣恩县椒园镇全域国土综合整治项目工作实施方案》，建立以拆除房屋建筑结构标准给予补助的奖励机制，明确奖励补助的标准和范围。椒园镇政府具体承担拆旧复垦工作，以奖促干，激发基层干部群众参与热情。\n\n二是厘清主体权责。 组建工作专班，合力攻坚，按照应拆尽拆的原则稳步推进拆旧复垦工作，采取最严厉的措施全面清理“一户多宅”和历史“两违”问题，腾退农村居民点用地。全面梳理乡镇人民政府和职能部门权责分工，建立以县全域国土综合整治办公室、椒园镇人民政府、基层组织三方共建的“1+1+N”的工作模式，强化“全周期+闭环式”监督，有力推动项目落地生效。\n\n三是强化长效管护。 针对增减挂钩新增耕地地块，坚持“守土有责、守土负责、守土尽责”，由椒园镇人民政府落实管护主体责任，推进后续管护工作，按照“谁管护、谁受益”的原则，以三年为周期落实管护资金，激发群众参与耕种的热情。联合农业、自然资源等部门，加强农村地区 建设用地审批 和乡村建设规划许可管理，严查非农化建设违法占用耕地问题，强化长效管护。\n\n6 / 3 属性设置背景原图像\n\n属性设置背景原图像"
  },
  "S03": {
   "heading": "cnhubei.com_荆楚网（湖北日报网）：宣恩椒园镇全域国土综合整治项目入选省级优秀范例",
   "date": "2024-07-03",
   "source": "cnhubei.com_荆楚网（湖北日报网）",
   "url": "http://www.cnhubei.com/content/2024-07/03/content_18124964.html",
   "body": "荆楚网（湖北日报网）讯（通讯员 郑晓恒）近日，湖北省全域国土综合整治领导小组办公室印发《关于2024年湖北省全域国土综合整治优秀范例评选活动结果的通报》，全省共有10个项目入选，宣恩县椒园镇全域国土综合整治项目位列其中。\n\n宣恩县椒园镇全域国土综合整治项目作为湖北省20个部级试点建设项目之一，始终坚持“生态优先、绿色发展”的原则，着力推动土地综合整治、生态修复治理、产业融合发展，项目建设成效显著，成为恩施州唯一入选省级优秀范例的项目。\n\n自项目实施以来，宣恩按照“各出一盘菜，共办一桌席”的整体规划整治理念，引进县级平台公司开创“投融建管”一体化建设模式，实现政银企三方合作共赢，集中力量打造“山区特色农业+乡村旅游+文化保护”的特色产业链条，产业发展实现突破。\n\n近年来，宣恩按照山水林田湖草系统治理的理念，通过全域规划、整体设计、综合治理，以全域国土综合整治为抓手集聚发展动能、厚植发展优势。宣恩县自然资源和规划局党组书记、局长杨少雄表示，下一步，该局将总结好“椒园经验”，持续推进沙道沟镇、珠山镇全域国土综合整治项目建设，全力以赴抓项目，统揽全局抓协调，不断加强农业基础设施建设、优化农用地空间布局，实现土地资源集约、高效、可持续利用。\n\n【责任编辑:曹霓】\n\n俄罗斯代表团到武汉瞻仰苏联空军志愿队烈士墓\n\n“不怕任何艰难险阻”激励略阳根治水患\n\n6位荆楚教师讲述扎根讲台陪伴学生成长的故事\n\n网安，不止一个周\n\n创新蓝图里，写着一个“人”字\n\n楼宇的底气，来自楼里长出的产业\n\n越往上走，越得往下扎根\n\n“下去过”不该是一张撕不掉的标签"
  }
 },
 "27": {
  "S01": {
   "heading": "jiaoling.gov.cn_蕉岭县人民政府：全省唯一！蕉岭县新铺镇入选全国典型案例",
   "date": "2024-09-14",
   "source": "jiaoling.gov.cn_蕉岭县人民政府",
   "url": "https://www.jiaoling.gov.cn/zzzs/zcdt/content/mpost_2675322.html",
   "body": "长者助手 无障碍 网站支持IPv6\n\n蕉岭县人民政府\n\n全省唯一！蕉岭县新铺镇入选全国典型案例\n\n时间：2024-09-14 09:48:32 来源：本网 浏览次数： -\n\n9月10日，自然资源部发布第二批全域土地综合整治试点典型案例，共15个入选，我市蕉岭县新铺镇全域土地综合整治试点入选该批次典型案例，是广东省唯一入选试点。此前，这一试点入选了全国首批典型案例。\n\n近年来，蕉岭县新铺镇全域土地综合整治试点通过因地制宜推进水系修复、城乡人居环境整治等，持续探索“两山”转化路径，培育生态产业，既统筹生态保护修复，又促进绿色低碳发展。\n\n2019年自然资源部正式启动全域土地综合整治试点工作。为总结推广试点经验，发挥示范带动作用，自然资源部2023年底组织开展了全域土地综合整治典型案例遴选工作，在今年全国土地日发布了首批15个典型案例。试点典型案例显示，全域土地综合整治在保护农耕肌理、释放发展空间、修复生态基底、共享土地红利等方面发挥了重要作用，已经成为自然资源领域助力乡村全面振兴和城乡融合发展的重要平台。"
  },
  "S02": {
   "heading": "jiaoling.gov.cn_蕉岭县人民政府：“百千万工程”的蕉岭新铺实践：看全域土地综合整治如何“点土成金”",
   "date": "2023-12-09",
   "source": "jiaoling.gov.cn_蕉岭县人民政府",
   "url": "https://www.jiaoling.gov.cn/mzqlxpz/gkmlpt/content/2/2573/post_2573688.html",
   "body": "搜索位置 标题 全文 排序方式 按时间 按相关度\n\n搜索位置 标题 全文 文件状态 不限 现行有效 已失效\n\n高级搜索 收起\n\n搜索以下关键词\n\n搜索位置 标题 全文\n\n排序方式 按时间 按相关度\n\n文件状态 不限 现行有效 已失效\n\n梅州市蕉岭县新铺镇人民政府信息公开\n\n11441427707519738G/2023-00055\n\n梅州市蕉岭县新铺镇\n\n“百千万工程”的蕉岭新铺实践：看全域土地综合整治如何“点土成金”\n\n【打印】 【字体： 大 中 小 】\n\n发布日期：2023-12-09  浏览次数： -\n\n冬日，蕉岭县新铺镇广袤的土地上，各式各样的蔬菜正在肆意生长，农机在忙碌耕地，农民在弯腰收割，沃野间一派生机；目光沿着山脚到山腰，一块块折射着阳光的光伏发电板整齐排列，闪烁的光芒透出活力。\n\n集约土地后建起蔬菜种植基地让村民富起来\n\n活跃的景色，是产业兴旺的映射。紧抓实施“百千万工程”的契机，新铺镇扣住“镇域经济”与“乡村振兴”两大主题，主动对接抓招商，联村富村行动快，优化环境促提升，通过一系列行之有效的方法，逐渐探索出实施“百千万工程”的新铺路径。\n\n成绩是对方法最好的检验。11月6日，新铺镇、同福村分别入选省“百千万工程”首批典型镇和典型村名单，不仅为蕉岭县实施“百千万工程”提供了经验，也为新铺镇继续探索路径提供了信心。\n\n“我们将认真按照省市县部署要求，深入实施‘百千万工程’，以融湾入海为路径，以实体经济为核心，力争在推动‘百千万工程’实践中，走出新铺路径。”新铺镇党委书记罗伟春表示。\n\n思路活： 推进全域土地综合整治\n\n踏入同福村，绿油油的蔬菜便迫不及待地进入记者视线，满眼都是成片的绿意。绿意间，几位身着红色工作服、头戴草帽的村民正在劳作，只见他们将成熟的蔬菜割下，整齐地码放在一边。\n\n一颗颗新鲜饱满的蔬菜长势喜人\n\n这片1000亩的土地，是新铺镇推进全域土地综合整治的成果。“看到你脸上惊讶的表情，我知道这一次整治的阶段性成果，是令人满意的。”同福村党委书记、村委会主任曾艳忠站在记者身旁，轻松地说道。\n\n曾艳忠告诉记者，由于村内人少，蔬菜基地曾一度遭到撂荒。“过去，村里每户拥有的土地大大小小非常零散，收益不多，村民不愿耕种，不成规模，企业也不愿意承包。加上村里的年轻人这些年大部分去了珠三角打工，土地撂荒现象越来越严重，镇、村想过各种办法治理，但效果都不理想。”\n\n2021年1月，梅州市蕉岭县新铺镇入选全域土地综合整治国家级试点。以开展全域土地综合整治为契机，同福村也迎来了发展的新机遇。推进土地连块成片，成了村“两委”干部的共识。“只有当土地连成片，机械化设备才能进入，提高效率，降低成本。”曾艳忠说。\n\n可是，村民的土地应该如何集约？如何说服村民，参与到全域土地综合整治中来？只要思想不滑坡，办法总比困难多。\n\n“我们坚持土地公有制性质不变，落实集体所有权，稳定农户承包权，放活土地经营权。”曾艳忠说，村党委作为“中间人”“担保人”，向17个村民小组492户发起动员，鼓励农户将土地“交”给村集体，预集约土地1000亩，引进蕉岭县勤佳农业种植有限公司，将“预集约”变为“真流转”。\n\n曾艳忠介绍，通过将土地经营权流转给企业，发展“粮菜轮作”种植模式，成功盘活土地，同福村土地租金收益达到600元/亩，还为村民创造了120余个就业机会，实现务工人均月增收3000元以上。此外，村集体牵头成立同福村耕耘农业合作社，通过提供农业技术服务、日常管理等方式，实现村集体经济增收近5万元，集体经济收入突破20万元。\n\n“接下来，我村将联合矮车村、狮山村等村，聚集超2000亩土地，与省级龙头公司、湖南农大联动，打造粤港澳大湾区‘菜篮子’生产基地和创建国家级辣椒种植示范基地，集种植、分拣、仓储、加工为一体，促进一二三产业融合发展。”曾艳忠说。\n\n用活土地要素，实现满盘皆赢。从1400多块碎片土地到8块连片良田，新铺镇的实践证明，实施“百千万工程”，思路要活泛。\n\n“全域土地综合整治，是一项系统工程，牵一发而动全身。”新铺镇党委、政府相关负责人说，“要做，就要将所有的困难都解决好，还要发挥出‘接二连三’的效果。”\n\n资金不足？那就在渠道上想办法。新铺镇多措并举，多元统筹资金，推动做好农用地整理、建设用地整理、生态修复与历史文化保护、资金保障和改革创新，率先实行“双田长”制度等工作。\n\n试点的成效是明显的。截至目前，新铺镇累计完成高标准农田建设5895亩、修复山水生态472公顷、腾退建设用地158亩、完善辖区灌排系统20余公里，加固改造山塘15座，修复红色革命遗址11处。\n\n成效给予了新铺镇推进全域土地综合整治工作的信心。罗伟春说，该镇正全力借助试点的政策红利，探索“四田、四治、四地”工作模式，集聚耕地、修复生态、扩园提质，真正把全域土地综合整治变成“百千万工程”的法宝，“点土成金”大力推动县域、镇域经济发展。\n\n方法多： 借光发力 板下也能生金\n\n驱车来到福岭村，在蕉岭县众创投资开发有限公司负责人张永兴的带领下，记者一行来到了一所废弃的小学。\n\n步入小学内，一片片的光伏板整齐地陈列在小学的空地上，光伏板下层层稻秆藏有玄机。张永兴将稻草剥开，一批白色菌丝正要萌发出来。“这是赤松茸，11月初刚刚种下，再过几个月就可以收获了。”\n\n新铺北方村的田地成了农民们致富的“聚宝盆”\n\n板上发电，板下种菌，闲置校舍用于家禽养殖。利用食用菌喜阴的特性，高效利用土地，发展立体农业。这是福岭村探索乡村产业的新方法。\n\n这一方法，来源于新铺镇“光伏小镇”的建设。\n\n今年7月，由广州发展集团和新铺镇联合实施打造的绿色低碳“光伏小镇”乡村振兴示范项目第一批顺利并网发电，首次并网接入容量达5MW，预计每年可为电网输送清洁电能约645万千瓦时，节约标准煤约0.17万吨，减少二氧化碳排放约0.42万吨。\n\n该项目以光伏发电为轴心，以光伏农业、光伏服务、光伏旅游为延伸，围绕“光伏概念”主题，融合“光储充”一体化科技创新技术，大力发展“板上发电、板下经济”模式，推动农业生产与光伏发电相结合，聚力打造“光伏+”生态经济发展新标杆，在促进能源绿色低碳转型的同时，为镇域产业经济发展注入更多活力、带来更多效益。\n\n“新铺镇地处粤北生态区，发展经济既要兼顾生态，又要兼顾效益。”新铺镇驻镇帮镇扶村工作队队长丘旭宁说，为了将步子走深走实，工作队推动成立了镇管国企蕉岭县众创投资开发有限公司，以镇管国企为平台，带动光伏、食用菌、蔬菜、丝苗米、矿泉水、南药六大产业的发展。\n\n根据广东省农科院编制的《蕉岭县新铺镇循环生态型“农光互补”全产业链高质量发展实施方案》，工作队引导镇村大力发展板下经济，高效利用光伏板下土地，推广节水、节肥、节能生产模式，应用数字化生产技术，探索建设特禽智慧养殖基地、食用菌示范棚，南药种植示范基地，预计可实现年营业收入700多万元。\n\n借光发力，让光成为经济发展的重要力量。以国家能源政策为导向，立足光伏资源优势，新铺镇按照“示范带动、面上推广”思路大力推进太阳能光伏发电应用，为实现绿色低碳发展开辟新路径。\n\n目前，福岭村1.5MW、矮岭村3MW、狮山村2.8MW均已并网发电；大力推动总面积达4.5万平方米的屋顶户用光伏建设，目前已动工建设北方村文化活动中心屋顶户用光伏项目，容量共46.75KW；在矮岭、狮山等村成功签约一批屋顶光伏，容量共445.81KW。\n\n信心足： 改造人居环境提升幸福指数\n\n漫步新铺圩镇，古色古香的气息扑面而来。\n\n道路两旁的房屋换了新装，黄色的漆搭配棕色的特色装饰，引人驻足；河边新修建了亲水栈道，栈道上，不少居民沐浴着温暖的阳光，与同伴谈笑风生；河水如一面镜子，将岸边的房屋倒映在内，湛蓝的天空与房屋在河水的映照下融为一体。\n\n千年古镇“穿新衣”，城乡颜值再升级\n\n“圩镇环境变化越来越大，更干净、更整洁、更美丽了，我们常说，生活的幸福感就来源于这些细小的变化。”居民邓银秀是土生土长的新铺人，她见证着新铺圩镇的美丽蝶变。\n\n建设美丽圩镇，新铺镇有着考量：一方面是为了提升居民生活幸福感，另一方面则是为了传承传统文化。\n\n新铺镇拥有近千年的历史，历史上的新铺镇曾是蕉岭商贸重地。据《镇平县志》盐法篇载：邑埠设于城内，距潮州五百里设埠，新铺、罗冈、梅县城东西南三门各有商贾设店销卖。新铺特殊的地理位置决定了它在历史上的角色。新铺地处闽粤赣三省交界处，因此，旧时这里是闽西、赣南、粤东北粤盐赣米水道运输中转的主要商贸地。\n\n千年的文化，也留给了新铺镇独特的民俗文化。“‘七月半’是我们的传统佳节，每当节日来临，许多在外工作的人都会赶回新铺，参与这一节日盛宴。”新铺镇社区党总支书记陈山月说。\n\n“新铺七月半”民俗文化节的起源与农耕生活息息相关。农历七月正值农村夏收夏种结束，家家有余粮，因此新铺人像过节般举办仙人出巡、演戏等活动以示庆祝，长期延续，“新铺七月半”逐渐成形。\n\n民俗文化是独有的资源，既要保护，也要传承。“塑形”便是保护的一种方式。“为重现古镇往日繁华景象，我们对古街外立面进行全面升级，按照‘修旧如旧’的原则，对房屋的门窗、广告牌等进行更换，并在街面铺设仿古砖，力争重现当年的繁华景象。”陈山月说。\n\n为了保持圩镇的干净整洁，新铺镇还充分发挥党支部战斗堡垒作用，定时定期组织清洁行动，维持圩镇环境。古色古香的圩镇焕发新光彩。\n\n走在新铺社区，无论是商铺林立的街道，还是群众聚居的小巷，干净整洁是笔者的第一印象，道路两旁无杂草，并按照相关规定设置了垃圾桶。“除了保洁员日常保洁之外，我们还会组织社区干部、志愿者在辖区内开展大扫除，并要求商户做好‘门前三包’，保证环境的清爽。”陈山月说。\n\n环境更美丽，群众更满意，发展信心足。今年以来，新铺镇积极推进美丽圩镇“七个一”建设，已建成美丽乡镇入口通道，完成1.2公里美丽示范主街和干净整洁农贸市场改造，连续6年投入7400万元实施“古镇古街”工程打造房屋外立面提升样板，借力石窟河水生态修复工程投入500万元建成1.2公里石窟河沿河美丽河道，投入510万元建成滨水公园绿美生态小公园。\n\n美丽圩镇的故事，还在继续书写。“接下来，我们将加快‘寿乡画廊’乡村振兴示范带一期10个项目建设，全面推进石窟河、石扇河两岸农房风貌提升。”新铺镇相关负责人表示。\n\n相关： 老铺圩见证商贸重镇历史\n\n走在新铺镇的沿河步道，一边是缓缓流淌的石窟河，一边是鳞次栉比的商铺，泛黄的墙壁散发出悠悠的古韵，令人恍惚间穿越了时空，回到了那个商贾如云、船舶似鲫的年代。\n\n新铺特殊的地理位置决定了它在历史上的角色。新铺地处石窟河南边沿河两岸小盆地，在闽粤赣三省的交界处，因此，旧时这里是闽西、赣南、粤东北粤盐赣米水道运输中转的主要商贸地。据《镇平县志》盐法篇载：邑埠设于城内，距潮州五百里设埠，新铺、罗冈、梅县城东西南三门各有商贾设店销卖。\n\n新铺，是相对于老铺而言的。今新铺圩南一公里左右石窟河边的湖丘墩就是老铺圩。\n\n老铺圩的商贸最先从散居在各个山头的畲民和早先定居的各部落先民在石窟河边换取生活（食盐）和生产的各种用品兴起，继而随货币产生后有了商品交易、占地摆摊，再而产生搭棚建铺、贾商长途贩运。闽粤赣商人在该圩场上交易，起落、堆存、水陆中转货物，然后走水路、陆路将粤盐等运往江西、福建，将赣米等运往潮州、汕头。\n\n虽然因年代久远，老铺圩的文字记载并不多，但至今老铺圩仍存遗址，有墙头、示牌、系船趸。\n\n由于老铺圩地势较低，虽然前来交易的人多，但常被水淹，适应不了物资逐渐丰富、商贾逐渐增多的需要，乃迁移至马鞍山下的坡地上，并逐渐建成新店铺，故称新铺圩。\n\n新铺圩的店铺沿河南北走向而建，多经营布匹、百货、油盐、水货，每逢圩日热闹非常。每隔几十米留下缺口筑码头，水深可泊重吨大船。\n\n圩镇上的河唇街尤为著名，与其垂直东西走向的有鸡行街、柴行街，靠西与河唇街平行的为米行街，这三条街是粮食、三鸟、柴炭竹木等山货的交易场所。街上的店铺全部为“楼下经营，楼上寝室”格局，夯墙灰瓦，古朴深邃。\n\n为防范洪灾，古镇街区的建筑采用红糖、糯米饭搅拌三合灰等客家独特材料工艺建筑而成，或采用洋灰混结构，使墙体坚固，不怕洪水浸泡。在洪水来袭时，又可作安全防线，人们可安然退至楼顶等待救援，体现了客家人的建筑艺术和生存智慧。\n\n据史料记载，1949年以前，米商林荣茂曾运米1000石（相当于90吨），经石窟河水运销往潮汕，盐沿蕉平、蕉武公路运往江西福建，年中转运盐约达9000吨。特别是1944年，韶关沦陷，东南运输车队驻扎新铺，商业进入鼎盛时期，有谢庆记、林荣茂、杨海丰、肖闰泰、池钦记等经营的大小私商159家。新铺商号的资金与营业占全县1/3。\n\n1950年以后，国营的百货、五金交化、供销社都在此设点开店，银行营业所、邮电所、医院等俱全。农历每旬的二、五、八为圩期。每逢圩日，做买卖的、办事的、探亲会友的、逛街的，来自三乡、平远、白渡、蕉城的人，多时达万人以上。"
  },
  "S03": {
   "heading": "jiaoling.gov.cn_蕉岭县自然资源局：从全域找地到全域整治，梅州2024年全域土地综合整治大事记",
   "date": "2025-01-17",
   "source": "jiaoling.gov.cn_蕉岭县自然资源局",
   "url": "https://www.jiaoling.gov.cn/mzqlzrj/gkmlpt/content/2/2722/post_2722120.html",
   "body": "搜索位置 标题 全文 排序方式 按时间 按相关度\n\n搜索位置 标题 全文 文件状态 不限 现行有效 已失效\n\n高级搜索 收起\n\n搜索以下关键词\n\n搜索位置 标题 全文\n\n排序方式 按时间 按相关度\n\n文件状态 不限 现行有效 已失效\n\n梅州市蕉岭县自然资源局政府信息公开\n\n114414270072351791/2025-00026\n\n梅州市蕉岭县自然资源局\n\n从全域找地到全域整治，梅州2024年全域土地综合整治大事记\n\n【打印】 【字体： 大 中 小 】\n\n发布日期：2025-01-17  浏览次数： -\n\n岁月不居，时节如流，2024年轻轻别过。\n\n弦歌不辍，砥砺前行，2025年悄然而至。\n\n回首过去一年，梅州市始终以习近平新时代中国特色社会主义思想为指导，深入学习贯彻落实党的二十大和二十届二中、三中全会精神，学习运用“千万工程”经验，以全域土地综合整治为抓手，助力“百县千镇万村高质量发展工程”（以下简称“百千万工程”），不断将省委部署的“百千万工程”施工图变为实景图，绘就老区苏区县镇村高质量发展新蓝图！\n\n上级领导悉心关怀指导\n\n2024年，梅州市全域土地综合整治工作得到了省委坤明书记、省政府伟中省长、少康副省长的多次关心指导，对梅州深入实施“百千万工程”提出了明确要求。特别是坤明书记在梅州调研期间，深入田间地头、街头巷尾深入指导，对加快推进以县城为重要载体的新型城镇化、大力推动农文旅融合发展、推进美丽圩镇建设、推进乡村风貌管控提升等工作都做了指示，对全域土地综合整治工作更是从规划管控等细处入手，对如何实现“耕地比较集中、村庄布局优化、产业集聚发展、生态健康优美”的高质量发展目标，逐一为梅州市指明了努力的方向。\n\n广东省自然资源厅建斌厅长多次来梅调研指导，深入援建小镇、四望嶂国防教育基地、新铺镇全域土地综合整治试点、安流镇全域土地综合整治试点等对工作进行了调研，鼓励梅州要认真落实省委“1310”具体部署，深入实施“百千万工程”，坚持规划为引领，锚定目标一张蓝图绘到底，全面助推乡村全面振兴，奋力推动县域经济高质量发展。家树副厅长及相关厅领导和业务处室也多次来梅指导。\n\n同时，梅州市全域土地综合整治工作还得到了国家自然资源督察广州局的充分肯定。\n\n梅州市委、市政府高度重视\n\n2024年伊始，梅州市委、市政府主要领导专题听取全域土地综合整治工作汇报，并部署全年工作。3月21日，市委正勇书记专题召开会议，研究全域土地综合整治工作。一年来，正勇书记多次专题批示、专题调度全域土地综合整治工作，并多次在市委常委会会议上强调工作重要性；亲自率队深入镇、村一线推动全域土地综合整治工作加快落地。2月6日，市政府王晖市长赶在春节前对全年全域土地综合整治工作提前部署。一年来，王晖市长多次主持会议部署，并亲自率队深入8个县（市、区）推动全域土地综合整治重点工作落地。市全域土地综合整治专班总召集人陈亮副市长定期调度，深入现场督导，推动项目落地。\n\n一年来，市委、市政府各级领导笔耕不辍，为全域土地综合整治起步成势奠定了良好的基础。\n\n试点工作成效明显\n\n2024年9月10日，自然资源部发布第二批全域土地综合整治试点典型案例，蕉岭县新铺镇全域土地综合整治国家试点被自然资源部列为第二批典型案例；2024年11月，蕉岭县新铺镇“集成式全域土地综合整治”模式被省委改革办列为“百千万工程”第三批发布的“农村土地综合改革”主题中10个典型案例之一。2024年12月，新铺镇和安流镇试点分别获得省级2024年全域土地综合整治财政激励奖补资金第一档1000万元和第三档300万元。\n\n全市域铺开全域土地综合整治格局逐步形成\n\n截至2024年12月底，梅州市共申报21个全域土地综合整治实施方案，基本实现8个县（市、区）全域土地综合整治项目全覆盖。预计全市全域土地综合整治实施方案投资总规模达432.13亿元，拟实施农用地整理超24.8万亩、建设用地整理超6.09万亩、生态修复治理超21.4万亩，其中，2025年可开工子项目398个，计划投资超211亿元。\n\n“全域知识大课堂”越办越精彩\n\n2024年1月17日，梅州市“全域知识大课堂”开讲，第一讲邀请了广东工业大学李志教授授课。2024年“全域知识大课堂”先后举办了9期，得到了各级领导、专家学者的大力支持，为梅州全域土地综合整治“怎么干”提供了有力帮助。2024年10月16日，广东省自然资源厅国土空间生态修复处柯小兵处长来梅作主题为《深入推进全域土地综合整治，助力“百千万工程”高质量发展》培训，更是为梅州市全域土地综合整治提质扩面提供了强有力的推动。\n\n通过创办“全域知识大课堂”，组建宣讲团，到8个县（市、区）对全部镇（街）主要领导和村干部开展了40多场次“送训下乡”培训活动，切实提升基层广大干部职工开展全域工作能力水平。\n\n引入金融“活水”助推改革\n\n2024年12月6日下午，“金融支持全域土地综合整治，助力‘百千万工程’”签约活动在梅城举行，梅州市政府与农业发展银行广东省分行签订全域土地综合整治全面合作框架协议，省农发行提供300亿元融资授信支持梅州深入推进全域土地综合整治，政银合作赋能\"百千万工程\"加力提速。同日，农发行梅州市分行获批的6亿元梅州市梅江区城北镇全域土地综合整治项目（一期）实现首笔投放，标志着梅州市全域土地综合整治项目实施进入全面推进的崭新阶段。\n\n2024年以来，梅州市加强与农业发展银行广东省分行、国家开发银行广东省分行等金融机构沟通联系，构建金融支持全域土地综合整治的战略合作关系，两家政策性银行均有合作项目落地。同时，落实土地出让收益支持农业农村事业发展要求，统筹涉农资金、专项债券支持全域土地综合整治，2021—2023年全市累计安排政府专项债券3亿元用于全域土地综合整治项目。2024年平远县又成功申报专项债券12亿元用于项目建设。\n\n全域土地综合整治重点工作成效初显\n\n2024年12月6日，《广东省自然资源厅关于下达梅江区城乡建设用地增减挂钩城北镇扎上村一期项目区（全域整治）周转指标的函》下达我市，城北镇复垦并已验收形成建设用地指标33.25亩，现已用于文旅产业项目落地。\n\n2024年以来，全市共有72个镇完成建设用地腾挪方案编制，75个镇完成农用地整理方案编制，部分县（市、区）编制“优迁快聚共富安居”方案，启动5万亩建设用地整理工作，组织盘活存量拆旧复垦6763亩，编制在审增减挂钩（拆旧复垦）13个方案2050亩，批复实施大埔县三河镇、梅江区城北镇扎上村、玉西村3个方案198.45亩，落实规划腾挪6267亩；全市新增耕地1.87万亩，百亩以上耕地集中连片流转经营面积超37万亩，打造了一批耕地集中连片种植示范项目，如兴宁叶塘镇1.3万亩良田示范区、蕉岭新铺镇1.2万亩耕地保护集聚区、大埔茶阳镇千亩烟稻轮作示范基地、平远石正镇“社村”合作粮食种植基地、兴宁新圩镇2000亩湖洋田改造为湘莲种植基地等。有力探索实施农村“三块地”改革，推动蕉岭县新铺镇同福村首宗农村集体经营性建设用地入市地块成功交易；梅州农村产权流转交易平台成功运行，实现城乡要素互联互通、双向流动。\n\n（ 稿件来源： 梅州自然资源微信公众号）"
  },
  "S04": {
   "heading": "jiaoling.gov.cn_蕉岭县人民政府：新铺镇：“四田+四地+四治”深化全域土地综合整治",
   "date": "2024-11-27",
   "source": "jiaoling.gov.cn_蕉岭县人民政府",
   "url": "https://www.jiaoling.gov.cn/mzqlxpz/gkmlpt/content/2/2703/post_2703030.html",
   "body": "搜索位置 标题 全文 排序方式 按时间 按相关度\n\n搜索位置 标题 全文 文件状态 不限 现行有效 已失效\n\n高级搜索 收起\n\n搜索以下关键词\n\n搜索位置 标题 全文\n\n排序方式 按时间 按相关度\n\n文件状态 不限 现行有效 已失效\n\n梅州市蕉岭县新铺镇人民政府信息公开\n\n11441427707519738G/2024-00117\n\n梅州市蕉岭县新铺镇人民政府\n\n新铺镇：“四田+四地+四治”深化全域土地综合整治\n\n【打印】 【字体： 大 中 小 】\n\n发布日期：2024-11-27  浏览次数： -\n\n全域土地综合整治是实施“百千万工程”的关键抓手，是优化空间布局、改善人居环境、服务乡村振兴的有力举措。作为全域土地综合整治国家级试点，新铺镇以改革破题探索发展新路径，以“四田+四地+四治”集成式整治为重点，进一步释放农村土地要素发展活力，努力打造“良田连片、村庄集中、产业集聚、生态优美”的土地保护利用新格局。\n\n这里是新铺同福村千亩标准蔬菜种植基地，只见田间绿意盎然，各类蔬菜长势喜人。工人们在各区间忙碌着，或耕地、播种，或除虫、施肥，或采收蔬菜。这里曾存在耕地零散、土地撂荒等现象，通过“小田”变“大田”后，原来的1400多块碎片土地，被整合成了8块连片良田，有效解决了耕地碎片化的问题。\n\n新铺镇同福村党委书记、村委会主任，曾艳忠：我们村党组织牵头，把群众的田集约起来，进行全域整治。通过全域土地整治后，把小田变成了大田，也成功引进了蔬菜种植公司在我们这里投入。\n\n全域土地综合整治促进耕地连片规模经营，同福村充满了生机活力。村里引进农业种植有限公司，鼓励农户流转耕地，推动特色农业规模化、产业化发展，同时为周边村民创造就业机会，增加收入。\n\n务工村民，杨婉秀：在这里种菜、收菜，每个月算上加班的话有5000多元收入，不算加班就3600元。\n\n务工村民，曾伟清：我在这运输青菜，一天工作八小时有150元，加班之后每天就有两百多元。我还有三亩多田地出租，一年能拿到两千多元。有工作做、有田租，我感到很满足。\n\n新铺镇同福村党委书记、村委会主任，曾艳忠：我们将集约的土地承包给企业进行经营管理，群众有田租，也可以在这里务工，每年村民的整个收入全年大概是500万至600万，包括劳务工资和田地租金，村集体收入全年能增加8万元。\n\n走进象岭新村，一栋栋布局整齐、规划合理、具有客家元素的新时代农村别墅、电梯公寓映入眼帘，周边环境更是绿意盎然，新村新貌令人眼前一亮。\n\n新铺镇象岭村党总支书记、村委会主任，刘友宏：统一把老旧房屋拆除，按照政府的规划，一户一户去做村民的工作。把老旧房统一集约起来改造。乡村别墅、电梯房建成以后，展现了我们新村风貌，周边的环境也得到大的提升。\n\n村民，钟世先：以前旧房子比较分散。改善后变好了，环境也更好了。现在大家基本上在新房里住。幸福感在不断提升，大家都很高兴。\n\n新铺镇通过村庄改造、存量建设用地规模腾挪、增减挂钩、宅基地有偿退出等探索建立腾挪存量地、盘活闲置地、集聚宅基地、入市集建地“四地”模式，切实提高农村建设用地集约节约高效利用水平。\n\n新铺镇党委副书记、镇长，涂伟文：以规划引领，完成镇级和村庄规划全覆盖，全镇完成建设用地整理约268亩，完成梅州首宗农村集体经营性建设用地入市，以“规模腾挪+招商引资”引进11家优质企业，总投资28.19亿元，推动土地价值显化。\n\n优生态、续文脉。近年来，新铺镇还通过治山、治水、治林、治田的山水生态修复“四治”模式，推动土地整治与生态修复融合，大力开展以石窟河、石扇河流域为主线的水生态修复工程，统筹推进森林抚育、林分改造、森林公园建设、耕地安全利用与土壤污染修复等的系统治理。\n\n新铺镇党委副书记、镇长，涂伟文：通过山水林田综合治理，完成石窟河、石扇河流域15公里碧带建设和全流域山水生态保护修复7754亩，绿美种植树木24540株，增加绿化面积92亩，新铺镇山水生态全面提档升级。村民 李静书通过这几次的改造、改建、重修，这里有翻天覆地的变化。\n\n自2021年入选全域土地综合整治国家级试点以来，新铺镇探索以调田、汇田、增田、聚田的“四田”模式，增耕地、促流转，实现耕地由小农经营向规模经营转变，通过整合零散土地集约流转耕地7310亩，完成高标准农田建设5900亩。同时，以建立腾挪存量地、盘活闲置地、集聚宅基地、入市集建地的“四地”模式，推动农村建设用地高效利用，成功谋划打造了“象岭新村”与“同福新村”两个示范性产业新村。以及建立“治山、治水、治林、治田”山水生态修复“四治”模式，综合性地解决了整治区域内流域的生态环境问题，完成了新铺镇圩镇1.2公里滨水廊道建设。\n\n新铺镇党委副书记、镇长，涂伟文：因地制宜推动“四田+四地+四治”整治模式，抓好落规划、腾空间、增耕地、优生态、强活力、兴产业六大措施，“三位一体”推进全镇耕地保护、农村集体建设用地盘活利用、生态修复项目落地和乡村一二三产业融合发展，全力打造“千年古镇·秀美新铺·稻香画廊”。全域试点实施以来，已启动子项目30个，完成资金投入5.75亿元。\n\n接下来，新铺镇将深入实施“百千万工程”，围绕全域土地综合整治主线，按照“全域规划、整体设计、综合治理”的思路，以镇域为单元，以点带面，打造全域土地综合整治蕉岭样板以及“融湾入海”的乡村示范窗口。\n\n新铺镇党委副书记、镇长，涂伟文：继续以“三块地”集成改革为重点，推动耕地连片整理、村庄优化提升和生态保护修复，抓好建设用地增减挂钩，实施“优迁快聚共富安居”工程，全力打造全域土地综合整治的“新铺样板”，助推“百千万工程”加力提速、全面突破。"
  }
 },
 "28": {
  "S01": {
   "heading": "fl.gov.cn_重庆市涪陵区人民政府：一张蓝图绘到底 美了乡村富了村民——涪陵入选全国全域土地综合整治试点典型案例",
   "date": "2024-09-18",
   "source": "fl.gov.cn_重庆市涪陵区人民政府",
   "url": "http://www.fl.gov.cn/zwxx_206/ywdt/202409/t20240918_13637039.html",
   "body": "一张蓝图绘到底 美了乡村富了村民——涪陵入选全国全域土地综合整治试点典型案例\n\n字 号： 大 中 小\n\n整治后的千丘塝梯田丰收景色\n\n9月10日，在渝举行的全国全域土地综合整治经验交流会上，自然资源部发布第二批全域土地综合整治试点典型案例，“重庆市涪陵区大顺乡全域土地综合整治试点”等15个典型案例入选。\n\n“涪陵区大顺乡全域土地综合整治项目”是自然资源部首批全域土地综合整治试点。该试点以“多规合一”为切入点，通过整合项目、聚集资金、协调用地布局，形成建设规划“一张蓝图”，促进部门间协同配合和土地资源高效利用，盘活了试点区土地、林地、废弃宅基地、文化旅游等资源，为乡村振兴注入新的活力和动力。该项目让美丽乡村更宜居宜业，农民的钱包也鼓了起来，幸福感、获得感显著增强。\n\n统筹涉农资金 规划“一张蓝图”\n\n大顺镇（2021年11月1日，市政府批准大顺乡改为大顺镇）在国家生态安全总体格局中位于武陵山区生物多样性与水土保持国家重点生态功能区，森林覆盖率在72%以上，水资源丰富、历史遗迹众多、文化资源丰富，但过去农田水利基础设施薄弱、道路和污水处理设施配套不足、耕地碎片化较为严重、大量青壮劳动力外出务工，导致大量宅基地闲置、大片耕地撂荒，一些村几乎成了“空心村”。\n\n2019年，“大顺乡全域土地综合整治项目”入选自然资源部首批试点。大田、新兴、天宝寺3个村纳入实施范围。项目坚持规划引领，“多规合一”协调空间布局和工程布局，采用生态化规划设计手法引领整治工程。\n\n“大顺乡全域土地综合整治项目”共计投入财政资金8500万元，吸引社会资本投入9700余万元，2022年4月完成工程建设并通过重庆市规划自然资源局组织的验收。\n\n建管用相结合 保障耕地利用\n\n金秋九月，大顺镇大田村千丘塝梯田层层叠叠，犹如铺上了一张金色地毯，微风吹过，稻香扑面而来。梯田里，当地群众挥镰割稻，享受着丰收的喜悦。\n\n“大顺乡全域土地综合整治项目”共修复千丘塝、新湾等区域梯田14.95公顷，该区域现已整体流转用于水稻制种，去年收获水稻种2.3万公斤；新兴村片区则是发展有机水稻种植，年产量近5万公斤。\n\n整治后，实现新增耕地29.2788公顷。试点区农田耕作条件得到有效改善，耕作劳动强度和生产成本明显降低，耕地利用率达到100%，新增土地流转2750亩，促进了耕地保护和高效利用。\n\n通过村四旁地整治、庭院美化、景观改造等“微田园”整治，村民房前屋后变成了“小菜园”“小果园”“小花园”，村庄环境得到明显改善，构建起了美丽宜居乡村新画卷。\n\n盘活乡村资源 助力乡村振兴\n\n项目实施后，撂荒土地得到开垦，灌溉、道路等基础设施的加持，直接促进了项目区土地的流转。大顺镇先后引进太极集团有限公司、重庆天同生态农业有限公司等龙头企业，在不影响林地生态功能的前提下，大力发展林下仿野生生态种植灵芝、黄精、石斛、仙茅等中药材，复合利用林下空间，提高综合经济效益。2023年，大顺镇中药材产值达2亿元。\n\n村民在当地林下灵芝种植基地务工\n\n试点区村集体引入社会资本，开创“农户+集体+企业”托管式联合运营模式，共同盘活闲置宅基地18宗6080平方米。通过闲置宅基地和土地的收储和招租，吸引种植大户和3家农业企业投资近3300万元，推动一二三产业快速发展，带动了外出务工人员返乡和180余户农民就近就业务工，每年户均增收约1.8万元。\n\n试点区以川东农民革命领袖李蔚如故里红色文化为底色，通过修复碉楼民居建筑群、陈氏庄园等历史文化遗产，充分挖掘唢呐石、千丘塝梯田等特色自然景观，联袂天宝大寨、佛教文化天宝寺等景点，实现区域内旅游资源有机串联。同时，通过打造共享农庄和农家乐，提升乡村配套服务设施和运营接待能力，打造了农耕体验、休闲观光、健康养生、红色研学4类特色品牌产业，成为“红色涪陵”不忘初心之旅、“田园涪陵”乡村休闲之旅等精品旅游线路上的重要节点。试点区年接待游客由整治前100人次跃升至30000余人次，年均旅游收入300余万元，农户也跟着吃上“旅游饭”，年人均旅游收入增加8034元，充分彰显“绿色”生态产品和“红色”文化资源价值。（ 文图 /记者 何乾健）\n\n分享文章到："
  },
  "S04": {
   "heading": "nyncw.cq.gov.cn_重庆市农业农村委员会：涪陵：深入推进全域土地综合整治 建设宜居宜业和美乡村",
   "date": "2025-06-25",
   "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
   "url": "https://nyncw.cq.gov.cn/zwxx_161/qxlb/202506/t20250625_14745818.html",
   "body": "涪陵： 深入推进全域土地综合整治 建设宜居宜业和美乡村\n\n语音合成中，请耐心等待...\n\n进入播报模式\n\n退出播报模式\n\n原标题：激活乡村资源要素 重塑乡村发展格局\n\n涪陵 深入推进全域土地综合整治 建设宜居宜业和美乡村\n\n盛夏时节，涪陵区江北街道地形平整的连片农田郁郁葱葱，水稻、玉米、蔬菜等作物正在拔节生长，一条条环湖步道、田间道路如同彩带般点缀其间，往日杂乱的堡坎变身观景台，成为村民休闲观光的好去处……一幅田园美、产业兴、百姓富的画卷正徐徐展开。\n\n从大顺全域土地综合整治项目入选自然资源部第二批试点典型案例到江北街道邓家、大渡两村全域土地综合整治项目正式完工，涪陵区规划和自然资源局坚持学习运用“千万工程”经验，高质量推进全域土地综合整治，高效配置乡村各类要素资源，进一步优化了生产、生活、生态空间格局，助力涪陵区广袤山乡面貌发生蝶变，逐步实现乡村美、经济旺的“双丰收”。\n\n优化国土空间格局\n\n构建宜居适度生活空间\n\n夜幕降临，“一棵树”观景平台渐渐热闹起来。“自从观景平台建成后，我们的生活变化可大了！”邓家村二社社长赵世伦指着新建的观景平台高兴地说，“以前上山干活要绕远路，现在有了这个平台，不仅走路方便了，还能欣赏江景、锻炼身体。傍晚大家都爱来这里散步聊天，村里的文化生活都丰富起来了。”\n\n依托于江北街道全域土地综合整治工作，“一棵树”观景平台将邓家坝登山步道与农耕小径巧妙连通了起来，方便村民日常耕作与学生日常上下学。观景台的周边果园还补植了不少蜂糖李，既美化了家园，又鼓了腰包，为村民增加经济收益。若是登临此处，还可以饱览长江壮美风光与涪陵国家农业科技园的田园风光，是市民打卡拍照、感受生态人文的新地标。\n\n依托大渡村、邓家村的产业基础与历史文化特色，结合临江崖线，江北街道全域土地综合整治项目重点打造了一棵树、石桥沟、黄桷堡等有特色、可感知的景观节点，同时，通过串联亲子乐园和民宿，增设全域土地综合整治相关宣传内容与地方历史文化展板，一批集休闲娱乐、文化展示与科普教育于一体的多功能景观相继落成，这些景观空间将实用性和文化内涵完美融合，成为家门口的“诗与远方”。\n\n乡村生活空间是农业经济发展的重要基础和有力支撑，涪陵区规划和自然资源局以“土地整治+”方式，开展灌溉与排水、田间道路建设、农田防护与生态维护等工程，为村民生活生产筑牢基石。同时，不断完善交通导视、文化宣传以及科普展示等配套标识设施，通过功能完善和文化浸润，让乡村面子更靓、里子更美，实现乡村生活空间从“能用”到“好用”、从“安居”到“乐居”的超越，为建设宜居宜业和美乡村注入新活力。\n\n整合自然资源要素\n\n构建集约高效生产空间\n\n每到青菜头砍收旺季，江北街道漫山遍野的翠绿青菜头和收砍的农户共同绘就出一幅丰收胜景。农户们娴熟地为青菜头剥皮，将处理好的青菜头串成一串，整整齐齐地挂在公路沿线的晾晒架上，既展现着丰收的喜悦，也奏响了乡村产业振兴的动人旋律。\n\n土地是人们赖以生存的基础，江北街道全域土地综合整治项目因地制宜，充分发挥区域优势——位于山上的邓家村海拔较高，适合晾晒，位于山下的大渡村气候温润，土壤肥沃，适宜种植。涪陵区规划和自然资源局精准布局，在邓家村打造榨菜晾晒场，在大渡村建设榨菜种植基地，并创新“榨菜主题+”发展模式，通过规模化、标准化建设，吸引众多农业经营主体入驻，逐步构建起“种植—加工—销售”全产业链条，为榨菜产业注入强劲动力。\n\n土地整治不仅是空间的重塑，更是价值的唤醒。垦造耕地、低效园林开发、旱地改水田……一系列组合拳让9461.4亩细碎田块重获新生，曾经破碎的田块如今连点成片，不仅让耕地恢复“健康体魄”，更激活了农村土地的沉睡价值，为农业产业向规模化、集约化发展奠定了基础。\n\n如今，邓家、大渡两村榨菜种植面积达7000亩，年产值突破1400万元，村民人均收入逐年增长，一批如榨菜晾晒场、榨菜种植示范基地等核心产业设施已建成并投入使用，以榨菜为主导，配套经果与时令蔬菜的“生产+加工+科技”一体化“1+3”现代农业产业园体系渐成规模。\n\n夯实绿色生态本底\n\n构建山清水秀生态空间\n\n清晨，陈家庙水库笼罩在清脆的鸟鸣声中。红嘴相思鸟婉转的啼鸣、四声杜鹃悠远的呼唤、凤头鹰划破长空的清啸交织成自然交响乐，构成一幅灵动的生态景观，让人忍不住放缓脚步，沉醉于这场人与自然的美妙邂逅。\n\n江北街道全域土地综合整治项目通过补植乡土彩叶树种（如无患子等），搭配多花果期植物等举措，对小微湿地进行生态修复，为鸟类营造出理想的栖息地。如今的陈家庙水库，成为了鸣禽、攀禽、猛禽等60余种鸟类的生态乐园。为满足市民游玩赏景需求，项目打通了水库片区环塘田间道路，还打造了观景平台等观水休憩空间，既保留了自然野趣，又为游客提供了绝佳视角。\n\n水，是乡村灵动的血脉，亦是生态振兴的灵魂。涪陵区规划和自然资源局以“水”破题，匠心独运地贯通水域湿地与广袤农田，通过优化灌排系统，溪沟生态修复，整治库塘，构建“农田防护林固土—生态沟渠截污—湿地塘库净化”三级生态屏障，有效改善了土壤质量与水体环境。当生态沟渠过滤着田垄的余韵，净水湿地净化着潺潺溪流，曾经困扰乡村的黑臭水体彻底清零，生活污水也实现100%无害化处理，让沃土重焕生机，碧水重现清粼。\n\n生态绿廊的建设，则为这幅画卷添上灵动笔触。17.5公里的道路在提质改造中焕发新生，并错落有致地栽种观花乔木、经济果树与蜜源植被。这些兼具生态隔离与景观美学的绿色长廊，不仅成为指引乡村发展的生态脉络，更串联起青山、秀水、茂林、良田，勾勒出一幅“村在景中、人在画中”的诗意图景。\n\n以全域土地综合整治为抓手，整出一片新乡村，带来发展新机遇。未来，涪陵区规划和自然资源局将以镇街为主阵地，积极探索全域土地综合整治新模式新路径，在守护绿水青山的征程中，奋力书写人与自然和谐共生的乡村振兴新篇章，让广袤乡土成为承载希望与幸福的诗意栖居地。\n\n实施整理规模9461.4亩，新增耕地517.65亩、水田313.95亩，为农业生产提供了优质资源\n\n新建排水沟5437米，整修山坪塘5口，新修蓄水池1口，有效解决了农田灌溉和排涝问题\n\n新修田间道路1011米、生产路26488米，极大改善了农民的耕作条件\n\n生态修复乡村溪沟723米，营建水库小微湿地182亩，提供多样化鸟类栖息生境\n\n新修居民点花池绿篱557米，新增房前屋后庭院绿地3678平方米，提升人居环境品质\n\n(重庆日报 刘玉珮 陈钰桦 马菱涔 ）"
  },
  "S05": {
   "heading": "cqrb.cn_重庆日报：美了乡村富了民！涪陵入选全国全域土地综合整治试点典型案例",
   "date": "2024-09-15",
   "source": "cqrb.cn_重庆日报",
   "url": "https://cqrb.cn/contry/dy22/2024-09-15/2025810_pc.html",
   "body": "重庆日报网 > 正文\n\n美了乡村富了民！涪陵入选全国全域土地综合整治试点典型案例\n\n近日，全国全域土地综合整治经验交流会在重庆举行，自然资源部发布第二批全域土地综合整治试点典型案例，涪陵区大顺乡全域土地综合整治等15个典型案例入选。\n\n涪陵区大顺乡全域土地综合整治试点以“多规合一”为切入点，通过整合项目、聚集资金、协调用地布局，形成了管到底的“一张蓝图”，促进部门间协同配合和土地资源高效利用。同时结合农文旅和红色教育，打造“绿色+红色”经济，助推乡村振兴驶入“快车道”。\n\n建管用相结合\n\n提高土地资源 利用 率\n\n金秋九月，涪陵区大顺大田村千丘塝梯田层层叠叠、金浪翻滚，村民们挥镰割稻，一派繁忙秋收景象。\n\n▲大顺乡全域土地综合整治鸟瞰图。\n\n大田村的丰收美景得益于涪陵区推行的大顺乡全域土地综合整治项目。据介绍，该试点整治区通过实施台面重构、田块归并等土地平整工程，实现小田并大田，促进了耕地集中连片，实现小微型农机化率由53%提升到78%；推进重点山坪塘整治，配套蓄水池、排水沟渠、提灌站等农田水利设施，农田灌溉保证率全面提高；修建田间道、生产路、农产品堆放平台和农资集散地等基础设施，农户公路通达率和田间生产道路通达率均达到100%。\n\n整治后，试点区农田耕作条件得到有效改善，耕作劳动强度和生产成本明显降低，耕地利用率达到100%；新增土地流转2750亩，农田耕作条件得到明显改善。\n\n林下经济绘就乡村发展美景\n\n近日，走进涪陵区新兴村，只见一朵朵灵芝宛如一把把撑开的小伞立在地上，色泽鲜亮、肉质匀厚，长势喜人。\n\n▲林下灵芝喜获丰收\n\n“自从开展全域土地综合整治以来，新兴村完善灌溉、道路等基础设施，助推农业基础设施的全面升级。”涪陵区规划和自然资源局相关负责人介绍，该镇依托土地整治优势，先后引进太极集团有限公司、重庆天同生态农业有限公司等龙头企业，大力发展林下仿野生生态种植灵芝、黄精等中药材，复合利用林下空间，提高综合经济效益。\n\n数据显示，该镇种植的前胡、金荞麦、灵芝等中药材面积常年保持在6.5万余亩，占全区80%以上。其中，林下多花黄精种植面积突破5000亩，林下多花黄精籽育苗基地超过200亩，林下还原野生种植灵芝突破200亩；投资5000余万元的太极、天同两个中药材加工厂建成后，将形成1.5万吨中药材加工能力和10亿元左右的产值，助推涪陵成为西部地区黄精、灵芝等名特中药材集散地。\n\n挖掘“红色”资源\n\n点燃乡村振兴“强引擎”\n\n大顺红色文化资源丰富。借助全域土地综合整治的“东风”，大顺盘活当地“红色”资源，为乡村振兴注入新的活力和动力。\n\n据介绍，试点区以红色文化为底色，通过修复历史文化遗产，充分挖掘唢呐石、千秋榜梯田等特色自然景观，联袂天宝大寨、佛教文化天宝寺等景点，实现区域内旅游资源有机串联。同时，通过打造共享农庄和农家乐，提升乡村配套服务设施和运营接待能力，让村民也吃上“旅游饭”。数据显示，试点区年接待游客由整治前100人次跃升至30000余人次，年均旅游收入300余万元，年人均旅游收入增加8034元，群众幸福感、获得感显著增强。\n\n（刘玉珮 陈湘壹）\n\n编辑： 彭光瑞 主编：胡东强 审核： 王成\n\n凡注明来源重庆日报的作品，版权均属重庆日报所有，未经授权不得转载、摘编或利用其它方式使用上述作品。已经本网授权使用作品的，应在授权范围内使用，并注明“来源：重庆日报网”。违反上述声明者，本网将追究其相关法律责任。\n\n除来源署名为重庆日报稿件外，其他所转载内容之原创性、真实性、完整性、及时性本站不作任何保证或承诺，请读者仅作参考并自行核实。\n\n铜梁 綦江 大足 璧山 南川 北碚"
  }
 },
 "29": {
  "S01": {
   "heading": "iziran.net_中国自然资源报：稻花香里品乡愁——四川自贡大安区牛佛镇全域土地综合整治见闻",
   "date": "2024-06-12",
   "source": "iziran.net_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5324478",
   "body": "“土地平旷，屋舍俨然，有良田、美池、桑竹之属……”《桃花源记》描述的田园景象正在四川省自贡市大安区牛佛镇变为现实。\n\n近年来，牛佛镇以全域土地综合整治试点为抓手，通过加强耕地保护、发展富农产业、改善人居环境，让群众望得见山、看得见水、记得住乡愁，呈现出一派欣欣向荣的美丽田园景象。\n\n牛佛镇位于沱江之滨，起于宋朝，素有“千年盐都水陆第一镇”之称。此前，因为行政区划调整、城乡发展不均衡等原因，牛佛镇的农用地空间集中程度不高、村民种粮积极性不高、水土流失逐年加剧。\n\n“因为地块散、面积小、产出有限，部分村民不愿意种粮，而是到城里打工。”牛佛镇红旗村党总支书记陈立平介绍说，2021年，牛佛镇被自然资源部批准纳入国家级全域土地综合整治试点镇，这让当地群众看到了古镇振兴的新希望。\n\n试点过程中，牛佛镇坚持“多规合一”，以大安区国土空间总体规划为引领，以第三次全国国土调查为基础，依据“三区三线”划定成果，结合《牛佛镇旅游发展总体规划》《牛佛古镇保护性规划》等，科学编制《牛佛沿江生态融合发展片区国土空间总体规划（2022-2035）》及红旗、农科等4个村的国土空间规划，按照《牛佛镇全域土地综合整治试点实施方案》《牛佛镇永久基本农田调整方案》等，将22个试点项目细化落实到图斑地块，确保整治任务可实施、可量化、可考核。\n\n农用地整治是牛佛镇开展全域土地综合整治试点的重要组成部分。试点项目按照适度规划经营和现代化农业生产需要，在充分尊重当地群众意愿的前提下，在红旗村等11个村开展了8000余亩高标准农田建设，新增有效耕地面积达535.8亩，进一步提高耕地连片度；对2000亩耕地进行提质改造，通过改善农业生产条件，提高耕地质量和等级；对1000余亩撂荒地实施整治，引导种植大户、合作社、家庭农场“代耕代种、联耕联种”。\n\n“过去我家承包的2亩多耕地被分成了五六个小块田，坡度高矮不一，别说机械化耕种，就是肩挑背驮浇水施肥都很困难。”红旗村村民陈燕辉介绍说，“如今村里耕地集中连片，我承包的土地从2亩多增加至700多亩，种田依靠机械化，日子过得很安逸。”\n\n2023年年底，旧貌换新颜的红旗村，吸引了众多养殖企业前来洽谈合作。在当地政府引导下，红旗村确定了“水稻+”的养殖业发展思路，推行“稻在水中长、蛙在稻间跑、虾在稻下游”的绿色养殖模式。\n\n陈立平介绍说，按照“水稻+”的养殖业发展思路，红旗村在水稻田养殖青蛙和小龙虾，利用其排泄物为稻田施肥；水稻田里的微生物又能为青蛙和小龙虾提供丰盛的“自助餐”，节省饲养成本，净化水质。此举不仅有效盘活稻田资源、实现“一田两收”，还帮助村民在家门口就业，开拓出富民增收新“稻”路。\n\n目前，红旗村已在670亩水稻田里养殖小龙虾，亩产稻谷近500公斤，亩产小龙虾近150公斤；在300亩水稻田里养殖青蛙，亩产青蛙1250公斤。\n\n“在家门口为养殖企业打工，不仅工资收入不低，还能就近照看家人，幸福感比在外打工高多了。”外出务工返乡的红旗村村民黄美玉说。\n\n家住牛佛镇农科村的姚定慧，每天都会很早起床，把屋里屋外打扫一遍。\n\n“以前村里基本都是泥土路，车子过时尘土飞扬，现在硬化路通到家门口，灰尘少多了，家里也要勤打扫，这样才看着舒心、住得舒服。”姚定慧说。\n\n试点过程中，大佛镇将人居环境整治与绿色生态家园建设紧密结合，投资740万元打造“拾光烟火醉美农科”和美乡村，通过风貌提升、道路硬化、环境整治等，对80余户群众房前屋后实施整理，拓宽、硬化村道2.1公里，修建村级污水处理站、配建污水管网等。\n\n同时，牛佛镇特别注意加强文化遗产保护，对镇里的10余处省级文物保护建筑等进行保护性修缮，建成古镇旅游景区。绘于民居墙上的“滚铁环”“老鹰抓小鸡”“跳马马儿”等一幅幅农民画，让游客深刻感受到当地浓厚的乡土气息。\n\n“除了环境变好了，村里的文化气息也更浓了。”姚定慧介绍说，“今年春节，村委会组织大家一起观看由村民自编自演的‘村晚’，一场这样的晚会，丰富了大家的文化生活，让过年更有年味儿了。”\n\n千年古镇蝶变美丽田园。下一步，牛佛镇将坚持规划引领，以全域土地综合整治为抓手，着力打造万亩水稻示范园，深入推进农文旅产业融合发展，让千年古镇的稻花更香、乡愁更浓。"
  },
  "S02": {
   "heading": "dnr.sc.gov.cn_四川省自然资源厅：自贡市大安区牛佛镇全域土地综合整治试点取得突出成效",
   "date": "2025-06-10",
   "source": "dnr.sc.gov.cn_四川省自然资源厅",
   "url": "https://dnr.sc.gov.cn/scdnr/scszdt/2025/6/10/c5000fd8ee00468ca3ddd56a177fd4d5.shtml",
   "body": "自贡市大安区牛佛镇全域土地综合整治试点取得突出成效\n\n近日，自贡市大安区牛佛镇全域土地综合整治试点经验做法在2025年四川省基层工作者赋能培训（第十期）做交流发言，相关视频在“学习强国”平台广泛传播。\n\n据悉，自贡市大安区牛佛镇全域土地综合整治试点深入学习贯彻习近平总书记关于全面深化改革的重要论述和对“千万工程”的重要指示批示精神，对标学习浙江 “千万工程”经验 好做法，坚持一张蓝图绘到底，统筹中央和省级资金、专项债券、银行贷款等各类资金8.5亿元，重点实施农用地整理、建设用地整理、生态保护修复等子项目22个，着力推动生产空间重构、生活空间重建、生态空间重塑。\n\n目前，大安区牛佛镇全域土地综合整治试点已完成高标准农田建设17000亩、农用地整理7000亩、撂荒地整治1200亩、低效园林地整治500亩、建设用地整理500亩，形成稻鱼、机耕、研学等“一园六区”示范园区；建成金银花、无花果、蔬菜、生态农业四大特色产业园，红旗村、农科村等核心村集体经济收入实现逐年增长。\n\n相关链接 >>\n\n[打印] [关闭]"
  },
  "S03": {
   "heading": "zgdarm.cn_自贡市大安区融媒体中心：大安区牛佛镇全域土地综合整治试点典型案例",
   "date": "2024-10-12",
   "source": "zgdarm.cn_自贡市大安区融媒体中心",
   "url": "https://www.zgdarm.cn/htmls/5O216O2312O5044O1.html",
   "body": "大安·2026年\n\n大安·2025年\n\n大安·2024年\n\n大安·2023年\n\n大安·2022年\n\n大安·2021年\n\n大安·2020年\n\n大安·2019年\n\n大安·2018年\n\n大安·2017年\n\n大安·2016年\n\n大安·2015年\n\n大安·2014年\n\n大安·2013年\n\n大安·2012年\n\n·五年征程皆为序章，再燃灯火向新昂\n\n·执生态法典之笔，绘绿色发展画卷\n\n·凝心铸魂强党性　砥砺奋进增本领\n\n·区第十二次党代会以来的高质量发展\n\n·大美优教　笃行育人\n\n·严抓防汛抗旱 深耕抢险救援\n\n·大安区未来五年残疾人“老龄化”趋\n\n·厚植环卫人文温度　守好城市洁净底\n\n·锚定“十五五”开局　交出“双过半\n\n·马冲口街道推进民族团结进步创建工\n\n·稳住就业“基本盘” 绘就大安“\n\n·以匠心守护城市底色　用温情致敬最\n\n·编辑部短评：政绩就是能抚平群众烦\n\n·以正确政绩观为引领　绘就老街民生\n\n·古寨梨韵承百年　贡梨产业启新程\n\n大安区牛佛镇全域土地综合整治试点典型案例\n\n发布时间：2024/10/12 8:53:32       作者：王贵勇       来源：区自然资源局\n\n大安区自然资源局党组书记、局长　王贵勇\n\n大安区隶属于四川省自贡市， 2021 年获评天府旅游名县，以农业生产为主。 2021 年，自然资源部批准大安区牛佛镇为国家级全域土地综合整治试点镇。试点按照山水林田湖草系统治理理念，以“三生并举、三态并重、三资统筹”为基本原则，采用“农用地整理 + 建设用地整理 + 生态保护修复 + 千年古镇文化保护开发”模式，借鉴打造国家级现代农业产业园的相关经验，以建立专班统筹整合农业农村、水利、交通、住建等部门协同开展项目的体系，发挥牛佛千年古镇历史文化和临江地理位置优势，针对村庄空心化明显、土地利用率不高、耕地碎片化、农用地撂荒现象较为突出、乡村基础设施严重不足、千年古镇文化保护和开发不足等问题，投资约 8.5 亿元分三期重点实施 22 个子项目。通过“五个一”工作措施（建立一个专班、规划一张蓝图、探索一套融资模式、推进一批项目、引进一批产业），动态优化农用地、建设用地和未利用地三大类用地，把耕地集中连片，发展高质量生态农业，整合农村居民集中居住，实现耕地数量有增加、质量有提升和村集体、农民有增收。有效发挥沱江流域生态功能，全面融合发展牛佛古镇农文旅，逐渐形成宜居宜业和美乡村，全力打造“千万工程”丘区样板。\n\n一、案例背景\n\n（一）基本情况\n\n牛佛镇是国家级历史文化名镇，有着深厚的历史文化底蕴和人文气息，拥有“千年盐都水陆第一镇”的美称。镇域面积 73.89 平方公里，坐落于沱江河畔，两侧共分布 18 村 2 社区，人口 6.9 万人。以传统农业生产为主，现状产业基础较好，发展潜力较大，农业发展主要以水稻、高粱、中药材、生态养殖为主。\n\n（二）空间现状\n\n1. 土地利用效率不高\n\n一是耕地集中连片程度较低。耕地单个地块图斑平均面积仅为 0.6 亩，碎片化明显，耕地集中连片程度较低。二是耕地撂荒现象较为突出。在城镇化快速发展和劳动力转移的大背景下，农村人口老龄化显现，耕地撂荒越来越多。据统计项目实施前的 2020 年牛佛镇未耕种的耕地总面积已超 1000 亩。\n\n2. 农村居民居住分散\n\n一是居民点分布零散。牛佛镇现有农村居民点斑块 2774 个，散落分布在 18 个行政村中，平均每个行政村的农村居民点的斑块数量为 154 个，农村居民点分布零散。二是基础设施利用率低。农村居民点的零散化导致基础设施利用率低，尤其是农村道路杂乱，不但维养成本高且浪费土地资源。三是部分农村房屋闲置。随着城镇化发展，农村常住人口减少，村庄存在一部分常年闲置房屋，浪费土地资源。四是居民点村容村貌风格各异。居民点房屋和基础配套没有统一规划，人居环境较差，缺乏对地域特点和文化的体现。\n\n3. 乡村生态环境较差\n\n一是农业面源污染。牛佛镇农业生产为传统种植农业，农业科技水平有限，农药、化肥的大量使用，对农田土壤、农田生物多样性及地下水造成一定污染。二是低效林、园地较多。根据调查与分析，牛佛镇低效林、园地面积较多，植被覆盖度不高，水源涵养能力差，加剧了水土流失。三是沱江岸线生态保护不足。沱江及其支流部分地区存在岸线过度开发现象，造成河道行洪断面减小或河势局部失稳，对防洪安全及河势稳定造成不利影响。\n\n（三）目标任务\n\n牛佛镇借助国家级全域土地综合整治试点项目，计划在 3 年内，通过对 3 万余亩的土地实施综合整治，促进耕地数量有增加、质量有提升、空间布局更加集中连片，适应现代化农业发展需求；通过 1500 多亩的建设用地整理，优化城乡建设空间布局，促进土地节约集约利用和城乡一、二、三产业融合发展；通过生态保护修复，打造宜居、宜业、宜游的高品质生态环境；通过对古镇进行保护性修缮和开发，进一步挖掘传统历史文化资源，全面发展古镇农文旅。实现生产空间重构、生活空间重建、生态空间重塑。\n\n二、主要做法\n\n（一）优化体制机制，组建一班人马\n\n试点项目启动后，迅速成立由大安区政府主要领导为组长，自规、农业农村、水务、交通等各有关部门为成员的工作领导小组，从全区抽调精干力量组建工作专班，确保项目工作专人负责。建立“区级统筹、部门联动、镇村落实”的责任体系和“每周一调度、定期专题协商、季度分析会商”的制度。\n\n（二）坚持规划引领，绘就一张蓝图\n\n坚持“多规合一”，以大安区国土空间总体规划为引领，以第三次全国国土调查为基础，依据“三区三线”划定成果，科学编制牛佛镇、村级片区国土空间规划和试点实施方案、永久基本农田调整方案，将 22 个子项目细化落实到图斑地块，确保整治任务可实施、可量化、可考核，为指导项目建设奠定坚实基础。\n\n（三）整合多种资金，探索一套模式\n\n探索采用“财政资金 + 融资贷款 + 专项债券”的投入模式，为项目建设提供有力的资金保障。充分整合农业农村、水利、交通等多部门资金 2000 万元作为试点项目撬动资金。分三期向银行申请中长期融资贷款 7.3 亿。发行乡村振兴生态农旅融合产业区基础设施建设项目专项债券资金用于弥补试点项目资金缺口。\n\n（四）创新实施思路，推进一批项目\n\n1. 规整农业用地，打造集中连片优质耕地。\n\n按照适度规模经营和现代农业生产需要，结合土地“三权分置”和农民意愿，对各类农用地实施综合整治。一是通过实施 2000 亩和 7000 亩的土地整治项目，在实现新增耕地占补平衡指标的同时实现了新增有效耕地数量，提高耕地连片度和耕地利用率。二是通过实施 15000 余亩高标准农田建设，改善了土壤、排灌等农业生产条件，提高了耕地质量和等级，促进土地资源的可持续利用。三是通过实施 1000 多亩撂荒地整治，引导种植大户、合作社、家庭农场开展代耕代种、联耕联种，改善土地撂荒现象。\n\n2. 腾挪建设用地，保障产业发展土地要素。\n\n把产业发展和农民集中安置结合起来。一是以村为单位规划农民集中安置区，二是按照“先建新、后拆旧，先复垦、后挂钩”的原则，在全镇规划实施拆旧总规模约 1350 亩的增减挂钩项目，结余挂钩指标用于保障农村一、二、三产业融合发展。三是对 130 余亩工矿废弃地以及其他建设用地有序开展复垦工作，优化建设用地布局。\n\n3. 提升基础建设，改善修复村庄生态环境。\n\n按照山水林田湖草系统治理的要求，在不减少林地面积和　不破坏生态环境的基础上，优化调整林地、水域等生态用地布局。一是对 500 余亩低效园地进行综合治理，宜耕则耕，宜林则林，因地制宜调整利用土地资源。二是实施沱江、三江河等河流岸线整治和构建生态隔离带、实施双龙桥水库库底清淤和生态修复水质，提升河流灌溉功能，提高水质，保障饮用水源安全。三是新建张家坝、月亮湾等近 4 公里防洪堤，提高河段行洪和防洪能力，有效解决洪水困扰问题，保护沿河人民群众生命财产安全。\n\n4. 激活历史记忆，保护挖掘古镇历史文化。\n\n一是依托牛佛千年古镇的美誉，对古镇中心贺乐堂等 10 余处省级文物进行保护性修缮和挖掘开发。二是以传统文化为基调，文化休闲旅游为方向，打造“穿越百年、老街新生”的古镇风情。三是打造以牛文化为核心的文化创意街区、集历史展示和研学于一体的传统文化体验街区、商贸大道体验街区、滨水休闲娱街区，打造商路天街“网红桥”，点燃牛佛夜生活。\n\n（五）发挥多种优势，引进一批产业\n\n有效发挥自贡市大安区天府旅游名县和牛佛镇为四川省百强中心镇的品牌，通过多种渠道引进一批以水稻为主的产业，以农村合作社的模式推行“水稻 + ”绿色养殖模式，在水田养殖稻蛙、稻虾、稻鱼，形成生态循环种养结构，有效盘活耕地资源，实现“一田两收”，帮助村民“家门口”就业。\n\n三、取得成效\n\n（一）万亩良田成片，产业发展“欣欣向荣”\n\n牛佛镇是大安区第一大镇，同时也是国家级现代农业产业园示范区域，为衔接现代农业产业园，充分发挥“土地综合整治 + ”效益，试点探索“水稻 + ”产业模式，培育发展新型经营主体，现已形成 1000 亩水稻核心区、 1000 亩稻渔示范区、 1000 亩机耕示范区、 600 亩农耕研学区、 300 亩稻蛙孵化区、 2000 亩稻虾孵化区的“一园六区”示范园区；充分利用现有土地地形条件，已建成 300 亩大冲头金银花产业园、 500 亩龙爪寺无花果产业园、 300 亩农科村蔬菜产业园、 600 亩龙骨山生态农业产业园等四大特色产业园；\n\n牛佛镇结合产业入驻 + 土地流转需求，通过农用地整理和建设用地整理，充分发挥土地综合整治优势，实现了万亩良田集中连片，盘活了村里的土地，活跃了地方经济，同时让村内富余劳动力实现就地就业，在“家门口”就能挣钱，实现了土地流转收入 6-800 元 / 亩 / 年，村民就近打工，每天收入有 80-120 元，通过联合村集体开办育秧中心、农机中心、酿酒厂等村办企业增加村集体收入 10 万元 / 年以上，使土地实现了最大产值化、效益化，带动了乡村产业蓬勃发展。\n\n（二）宜居宜业宜游，和美乡村“美景如画”\n\n通过对 100 余户农户房前屋后实施整理，拓宽、黑化村道 20 余公里等，形成房前有院落，院中有美景的川南特色民居风貌。整合自然资源、农业农村、水利、交通、住建等部门涉农项目，将村庄整治与绿色生态家园建设紧密结合，形成稻香红旗、醉美农科、花开龙骨等和美村庄，同时，在全镇新建 18 个集中居住区，完善公共服务设施和基础设施，宜居、宜业、宜游的“大美”牛佛画卷逐渐呈现。\n\n（三）文旅特色逐显，古镇老街“古韵悠长”\n\n通过充分挖掘牛佛千年古镇历史文化特色，形成了“牛佛五味、自在牛佛”的中国沉浸式体验（慢生活）的古镇旅游景区和“穿越百年、老街新生”的风情古镇。按照“春赏花、夏戏水、秋收稻、冬听戏”的旅游发展思路和已经形成的 10 公里沱江生态廊道，“一镇、一园、一山、一廊”的牛佛镇农文旅融合发展格局逐步形成，绘就了牛佛版和美乡村“富春山居图”。\n\n牛佛以古镇历史文化为基础，以农耕丰收文化、桃花节等为点缀，开展丰富多彩的文旅活动，吸引了大量游客到牛佛参观旅游，据统计 2023 年最多一天接待了 20 多万人游客，充分发挥了文旅经济特色，带动了牛佛镇地方经济发展。\n\n四、适用条件和推广前景\n\n基于牛佛镇浅丘地貌特点、产业发展实际以及靠江地理位置优势，围绕农业高质高效、乡村宜居宜业、农民富裕富足进行科学统筹规划，将全镇未来发展规划与当前发展实际作为一个有机统一的整体，聚焦推进乡村振兴、实现共同富裕、增进民生福祉等问题，结合实际因地制宜谋划实施项目，最终实现预期目标。\n\n项目实施有效破解了耕地碎片化、空间无序化、生态质量不高、历史文化特色彰显不足等问题；优化了“三态”布局，巩固提升耕地面积和耕地土壤质量，提高农业机械化率，改善乡村风貌和人居环境，集约节约农村集体建设用地，保护沿江生态，形成蓝绿交织的城乡生态网络系统，为发展农旅经济奠定了基础，形成了四川丘区的整治样板。\n\n（责任编辑：曹小满）"
  },
  "S08": {
   "heading": "zgzx.gov.cn_自贡市政协：大安区政协视察牛佛镇全域土地综合整治试点项目实施情况",
   "date": "2022-09-28",
   "source": "zgzx.gov.cn_自贡市政协",
   "url": "https://zgzx.gov.cn/details/xxzx/12843.html",
   "body": "大安区政协视察牛佛镇全域土地综合整治试点项目实施情况\n\n为充分发挥政协政治协商、民主监督、参政议政的职能， 促进耕地保护和土地集约节约利用，改善农村人居环境， 助推乡村 全面振兴 ， 9月27日 区政协副主席陈涛带领区政协农业农村和人资环委及相关政协委员到大安区 牛佛镇 视察 全域土地综合整治试点项目实施 情况，区 自然资源 局和 牛佛 镇 等单位 相关领导陪同视察。\n\n委员们实地查看牛佛镇红旗村 2000亩土地整理现场，并前往 牛佛镇 金山村观景平台 视察 全域试点综合整治区域全貌、观看展板，听取区自然资源局关于全域试点工作的情况介绍。\n\n该试点项目实施期为三年 （2022-2024年）， 拟分成两期实施各类项目 22个，其中：农用地整理项目5个，建设用地整治项目4个，乡村生态保护修复项目10个，乡村历史文化保护项目3 个。项目总投资约84973万元 。 以牛佛镇全域为基础实施单元，按照山水林田湖草系统治理理念 ，通过 “ 3+N ”模式 （ 3 : “ 土地整治 +增减挂钩+生态修复 ” + N ： “ 后半篇文章 +乡村振兴+文旅融合+土地制度改革+农村产业化+其他农村政策 ” ）开展试点工作。试点项目拟整治牛佛镇范围内 13322 亩耕地，对约 1350亩农村宅基地实施城乡建设用地增减挂钩复垦，生态修复约137亩废弃工矿用地，修复约265亩低效林、园地。\n\n现正在实施一期工程 ——高标准农田建设，项目面积建设规模2154亩，位于牛佛镇沱江现代农业园区核心区，建设内容主要包括格田整理、灌溉与排水工程、田间道路工程、其他工程（项目公示牌）四大类。项目建成后将极大地改善田间基础设施，提高耕地质量，改善农业生产生活条件。\n\n委员们现场交流发言一致认为，项目推进有条不紊，形成了政府主导、部门协同、上下联动、公众参与的工作机制，为强力推进试点工作提供组织保障；科学编制试点实施方案，连片编制镇村规划，择优确定技术服务单位，为系统推进试点工作提供技术支撑；综合产业发展情况、基础设施条件等择优选取最适合的区域作为试点项目起步区，为有序推进试点工作提供基础保障；归集发改、农口部门专项资金作为试点项目撬动资金，成功申请贷款，并同时申请专项债券资金，为顺利推进试点工作提供资金保障。项目实施将促进牛佛镇生态绿色发展，形成集聚高效、绿色低碳的产业发展新格局，农业生产提质增效，空间布局持续优化，有效提升土地节约集约利用水平。\n\n陈涛副主席充分肯定项目推进进度并强调：一是要主动与涉及项目实施范围内的行业部门对接，加快项目建设；二是要积极争取省、市政策资金支持，及时了解关于土地整治的最新政策，保质保量按期完成项目建设；三是要 加强试点项目立项、实施和验收等全过程指导和监管，进一步建立健全项目管理制度，对项目实施情况进行全程动态监管 ； 四是要强化项目实施过程中的要素保障工作 。\n\n• 上一条: 自流井区政协召开党组会议暨主席会议\n\n• 下一条: 大安区政协召开第十届委员会常务委员会第四次会议\n\n市政协视察“1号提案”办理情况\n\n贡井区政协开展全区运动场地设施建设利用情况专题视察\n\n自流井区政协召开十届第74次党组会议暨第75次主席会议\n\n富顺县政协召开党组理论学习中心组（扩大）会议"
  }
 },
 "30": {
  "S01": {
   "heading": "iziran.net_中国自然资源报：全域土地综合整治试点典型案例丨陕西绥德：黄土地上绘“丰”景",
   "date": "2024-09-25",
   "source": "iziran.net_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5345879",
   "body": "陕西省榆林市绥德县满堂川镇全域土地综合整治试点位于黄土高原地区，是自然资源部2021年部署的乡镇全域土地综合整治试点。试点秉承“山水林田湖草是生命共同体”理念，按照“尊重自然、顺应自然、保护自然”的总要求，学习运用“千万工程”经验，以全要素整合为平台，以特色保护为核心，实施了全域土地综合整治和生态保护修复试点项目。试点有效提升了土地综合利用效率、生态环境质量、产业集聚融合程度，优化了生产、生活、生态空间格局，促进了一二三产业融合发展，全力助推了乡村振兴，为黄河流域高质量发展和助推黄土高原生态文明示范区建设提供了绥德经验。\n\n美化后的庭院空间\n\n坚持规划为引领，擘画乡村振兴蓝图\n\n绥德县位于陕北腹地、榆林市东南部，历史悠久、文化灿烂，素有“上郡古邑”“秦汉名邦”“天下名州”等美誉，同时也是陕北革命老区，被称为“革命英才的摇篮”。该县是“十三五”期间国家扶贫开发重点县、吕梁山特困片区县，2020年全面打赢脱贫攻坚战。\n\n绥德县为典型的黄土峁梁丘陵沟壑区，地形地貌在黄土高原地区具有典型性。水土流失严重、地下水资源匮乏、生态环境脆弱，年平均降雨量450毫米左右，人均水资源305立方米，森林覆盖率36%。新中国成立以来，国家非常重视黄河流域和黄土高原水土保持及综合治理工作，1952年在绥德县成立了陕北水土保持工作推广站。该站在绥德辛店沟和韭园沟开展水土保持试验示范工作，70年来先后开展600多项专题研究，取得130多项科研成果，为黄土高原小流域水土保持综合治理以及黄河流域生态保护和高质量发展起到了示范带动作用。\n\n试点区涉及满红河流域上游的常家沟村、郭家沟村、满堂川村3个行政村，总面积16平方公里。其中，郭家沟村是陕北著名的影视拍摄基地和美术创作基地，是AAA级乡村文化旅游名地，也是被住建部等部门命名的中国传统村落。2021年9月，习近平总书记在绥德考察时强调，要深入贯彻绿水青山就是金山银山的理念，把生态治理和发展特色产业有机结合起来，走出一条生态和经济协调发展、人与自然和谐共生之路。因此，试点以特色保护和生态修复为基础，围绕“山水林田湖草沙”全域全要素一体化治理思路，以优化乡村生产、生活、生态空间为目标，按照“保持水土资源，恢复自然生态”的理念，突出水资源涵养和合理利用措施，重点布设农用地整理、建设用地整理、农村人居环境改善工程以及生态修复四大工程内容。\n\n绥德县围绕全国文化强县、榆林副中心城市、黄土高原生态文明示范县、全国红色教育基地、西北现代物流新高地“五大发展”定位，编制了国土空间总体规划，形成了总体规划、详细规划、专项规划组成的空间规划体系。2021年10月，《黄河流域生态保护和高质量发展规划纲要》印发后，绥德县以全面落实黄河流域高质量发展战略为契机，提出了打造黄河流域和黄土高原全域土地综合整治绥德样板的目标。其中，郭家沟村作为陕西省村庄规划试点，在试点项目启动之前，以特色保护为核心，高度融合乡村发展规划、产业规划、生态旅游规划等，编制了实用性村庄规划，为乡村振兴奠定基础。郭家沟村庄规划被自然资源部评为第一批村庄规划优秀案例。\n\n建设用地复垦后形成的农田\n\n结合黄土高原特点，统筹布局整治任务\n\n试点以黄河流域和黄土高原为基底，围绕“山水林田湖草沙”一体化治理思路，统筹生产、生活和生态因素，实施农业用地整治，提升质量、优化布局；开展生态保护修复，包括水土保持、生态修复；加强建设用地整治，盘活存量、集约高效；抓好公共空间治理，人居环境提升、村容村貌整治；促进生态、经济、社会效益合一，撬动产业融合、助力乡村振兴。此外，试点还同步实施灾害防治、水土治理等，具体工作包括淤堤坝促进耕地形成、盐碱地治理提升耕地质量、河道治理优化人居环境、边坡治理降低安全风险等。\n\n试点将项目区划分为一带、两岸、三坡3个保护修复单元，采取以保护保育、自然恢复为主，辅助再生、生态重构为辅的修复模式，主要生态工程措施有河道疏浚，新修浆砌石护岸挡墙691米，修建土质排水渠1136米、生产桥5座、浆砌石水陂1座，修筑生态护坡1000米。通过土壤改良，357亩耕地实现了保土、保水、保肥、防碱保苗、机械化耕作。发挥植被保持水土、涵养水源、改善区域气候和美化生态环境的作用，种植适宜陕北地区生长的12类乡土植物，覆盖32个种植区块；栽植各类乔灌木60628棵，播撒紫花苜蓿及格桑花草籽88公顷。\n\n试点区域内，农用地生产条件得以改善、建设用地利用效率得以提升，生态环境得以美化。通过农用地整理，试点规整田块421亩，121块小块农用地归并为63块。修建土坎水平梯田543亩，新增耕地235亩，新增耕地率6%，配套田间生产道路和排灌沟渠、布设生态袋田坎1559.6米，解决了耕地碎片化、土地利用率低、种植结构单一的问题，实现了“田成方、树成行、路相通、渠相连”的生产新格局。通过建设用地整理，试点复垦整理工矿废弃地、旧宅基地198亩，流转收益5500万元，有效增加了耕地面积，解决了空间布局无序化、土地资源利用低效化、生态系统质量退化等突出问题，实现“生态、经济、社会”效益，绘就绿水青山就是金山银山的新时代新农村最美画卷。\n\n整理后的农用地\n\n保护传统古村落，引入农旅文化产业\n\n试点探索“全域土地综合整治+”模式，充分整合“政策+制度+资源配给”，叠加“空间优化、环境提升、乡村旅游、古村保护、庭院经济、生态农业”模块，形成一二三产业的发展融合体系。例如，郭家沟村作为传统古村落、陕北著名的影视拍摄基地和美术创作基地，在试点过程中注重保持极具特色的乡村风貌，整理存量建设用地、完善民居民房，设置提升了一批旅游服务设施。\n\n试点以“奖补+县配套+土地指标+乡村振兴经费”等多渠道资金，开展河道内淤积的生活垃圾和弃渣弃土清除、农村生活污水治理、村落空间整体美化，加强村内道路、公共空间、庭院空间的景观提升和绿化改造，全面提升乡村生态生活环境。同时，建成现代绿色采摘大棚25座，发展特色种植业1200亩，完善了一批旅游服务设施，每年接待游客8万余人次、接待写生人员近5000人次，庭院经济接待2000人次，实现了一二三产业融合发展，增加村民年经济收入200万元。\n\n试点实践表明，全域土地综合整治是提升“三生”空间品质的重要举措。全域土地综合整治实施过程中，人地和谐是根本宗旨，空间治理是有效手段，产业撬动是核心要义，乡村振兴是最终目标。“全域土地综合整治+”模式，为农村流转土地、发展集体经济、规划产业布局、增加村民收入奠定了基础，是实现乡村振兴的重要途径。\n\n本试点适用于我国黄土高原等自然环境较为恶劣、生态环境亟须改善的地区，在通过全域土地综合整治提高土地利用效率、改善生态环境质量的同时，充分挖掘地区历史文化、乡村民居等特色，改善乡村人居环境，促进农村一二三产业融合发展，促进乡村振兴和城乡融合发展。\n\n（陕西省自然资源厅推荐）"
  },
  "S03": {
   "heading": "sxsd.gov.cn_绥德县人民政府：绥德县满堂川镇全域土地综合整治试点入选自然资源部第二批典型案例",
   "date": "2024-09-12",
   "source": "sxsd.gov.cn_绥德县人民政府",
   "url": "https://www.sxsd.gov.cn/xwzx/zwyw/202409/t20240912_1877319.html",
   "body": "绥德在全国全域土地综合整治经验交流会上作交流发言\n\n发布日期： 2024-09-12 17:05:22\n\n来源： 绥德自然资源\n\n【 字体： 大 中 小 】\n\n9月10日，自然资源部在重庆市召开全域土地综合整治经验交流会。会上发布了第二批全域土地综合整治典型案例，绥德作为唯一一个县级政府在会上作交流发言。\n\n会上，县委副书记、县长王诚以“自觉践行习近平生态文明思想 为打造黄土高原生态文明示范区提供陕北经验”为题，从“秉持‘三个楷模’，陕北郝家桥从黄土高原山沟沟里走出致富路；持续巩固拓展土地综合整治成效，构建‘绿水青山’通向‘金山银山’的桥梁；深入学习运用‘千万工程’经验，探索新时期陕北地区全域土地综合整治经验”三个方面介绍了绥德县全域土地综合整治试点工作。\n\n近年来，绥德县深入践行习近平生态文明思想，在满堂川镇实施了全域土地综合整治试点。综合整治项目在更好统筹保护资源、修复生态与保障发展的关系上，按照“全域规划、整体设计、综合治理、多措并举”的思路，一体推进空间优化、产业布局、生态环境、乡村治理，达到生态效益和经济效益“双丰收”，巩固脱贫攻坚成果，助推乡村振兴，实践探索出一条黄土高原土地保护利用永续之路。\n\n绥德县满堂川镇全域土地综合整治试点入选自然资源部典型案例\n\n2024年9月10日，自然资源部发布了第二批全域土地综合整治试点典型案例，绥德县满堂川镇全域土地综合整治试点入选。\n\n绥德县满堂川镇全域土地综合整治试点项目开展以来，县资源规划局深入学习贯彻习近平生态文明思想，秉承“山水林田湖草”是一个生命共同体，以“千万工程”为牵引，在总结郝家桥土地整治经验和米脂县高西沟治理经验的基础上，采取“规划引领+全域整治+政策叠加”的方式，统筹推进农用地整理、低效建设用地提升、生态保护修复和历史文化保护，实现农业提质高效、乡村宜居宜业、农民富裕增收，为乡村全面振兴奠定坚实基础。\n\n一是土地综合利用有效提升。依据乡镇国土空间规划和实用性村庄规划，试点项目整治区域内3个村共整理耕地28.1公顷，复垦腾退废旧建设用地13.2公顷，建设高标准农田36.2公顷，新增耕地15.73公顷，新增耕地率6%，优化了村庄用地布局，土地利用率提升了32%，实现了“田成方、树成行、路相通、渠相连”的国土空间新格局。\n\n二是产业集聚融合有序提升。充分发挥全域土地综合整治的平台作用，助力农业产业植入，建成现代绿色采摘大棚25座，发展特色种植业1200亩，完善一批文旅服务设施，每年接待游客8万余人次、接待写生人员近5000人次，增加经济收入近200万元，打造了一条满堂川镇“全域”融合发展产业链。\n\n三是生态环境质量有质提升。推进实施生态保护修复工程，生态系统物种多样性从实施前的38个提升至51个，重点领域林草覆盖度由实施前的13%提升至30%以上，生物群落的构成增加13个子目。实施灾毁地治理，使地面坡度下降至6°以下，耕地质量提升率达到90%以上，景观的协调性从实施前的单调单色提升至全色域。\n\n下一步，我们将继续深入贯彻落实习近平生态文明思想，走生态和经济协调发展、人与自然和谐共生之路，统筹抓好新型城镇化和乡村全面振兴，发挥“全域土地综合整治+”综合效益，为黄土高原丘陵沟壑区实施全域土地综合整治有益探索作出新的更大贡献。"
  }
 },
 "31": {
  "S01": {
   "heading": "zrzy.jiangsu.gov.cn_江苏省自然资源厅：江苏省南通市如东县新店镇全域土地综合整治典型案例——织密耕地保护网，绘就乡村振兴新图景",
   "date": "2026-04-16",
   "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
   "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d57dqr/jsxcg/2026/04/16175955103873.html",
   "body": "摘要 江苏省南通市如东县新店镇全域土地综合整治立足生态本底丰厚、耕地后备资源丰富的天然禀赋，依托稻作文化孕育的产业发展沃土，深度挖掘特色农业发展潜力，构建了“国土空间系统治理－新质生产力加速发展－产业融合产业振兴”的可持续发展路径。通过实施农用地集中连片整治、质量提升和生态化改造，显著提高耕地生产能力，有效拓展农业生产空间；通过深挖“土特产”资源优势，培育三产融合特色产业，实现耕地资源提质增效与产业经济协同发展的良性循环；通过搭建产村共生平台，系统布局高附加值农品智造、农光互补、生物基材料产业链等融合载体，激活三产乘数效应。 一、项目概况 （一）基本情况 新店镇坐落于江苏省如东县西南，地处滨海平原，地势平坦开阔，作为历史悠久的传统农业镇，自清代便以盛产“贡米”闻名遐迩，2020年荣获江苏省“味稻小镇”的称号。近年来，新店镇依托深厚的农业底蕴与“味稻小镇”金字品牌，全力推进一二三产业融合发展，焕发蓬勃生机与强劲活力。 项目区为典型的苏中平原水网地区，“居依水，水傍田”特色鲜明，农村聚落空间特征显著，主体呈现线性分布，沿河网和道路形成“非”字形格局。项目整治总面积21.95平方公里，涵盖祝套村、胡港村、孙桥村三个行政村，共有村民小组47个，总户数3407户，总人口9522人。 （二）主要问题 一是耕地资源碎片化。新店镇土壤粘性好，适合烧砖，历史上因城市建设取土形成了大量沟塘。经统计，整治区沟塘面积多达5435亩，占比16.5%。废弃沟塘与分散农宅相互嵌合，形成“田－塘－道－宅”犬牙交错的空间格局，致使耕地资源碎片化特征显著，亟需通过综合整治优化农业生产空间布局。 二是产业发展低效化。长期以来，整治区产业结构高度依赖传统农业，永久基本农田保护率高达94.85%，与建设用地空间配置失衡，加之农业产业链短、附加值低、业态单一等问题突出，亟待通过空间系统治理，做好“土特产”文章，拓展多元化新产业新业态。 三是集体经济薄弱化。整治区内三个行政村以传统农业生产和简单资源出租为主，加之耕地、林地、鱼塘等资源分散于农户个体经营，难以实现规模化整合开发。此外，村域间缺乏有效的协同发展机制，产业同质化竞争激烈，难以形成集聚效应。集体经济如何实现从“输血式”帮扶向“造血式”发展转变，已成为推动乡村振兴的关键突破口。 （三）目标任务与总体安排 立足“千年稻韵”文化传承，秉持“生产、生活、生态”三生空间重构逻辑，规划以镇区为核心枢纽，通过“功能错位、三产互哺”策略，统筹推进空间重组、农地整治、业态升级与生态修复。项目于2022年启动，计划2025年竣工验收，总投资37325.98万元。实施期内修复生态河道19.5公里、建设生态碳汇林42.04公顷、整治人居环境143.04公顷，同步优化永久基本农田布局27.97公顷，实现新增耕地188.6公顷，减少建设用地3公顷。\n\n图1试点工程布局图\n\n二、主要做法 （一）高起点规划、高质量实施 项目紧扣乡村振兴战略核心，深度挖掘新店镇“依水傍田、小桥人家”的苏中水乡特色，立足鱼米之乡文化底蕴，匠心打造“生态胡港、农旅祝套、水韵孙桥”三大特色乡村发展格局。胡港村依托苗木资源优势，融入碳汇经济理念，打造生态碳汇林试验区；祝套村整合水系资源与蔬菜种植优势，构建集农事体验、生态观光、休闲研学于一体的农旅综合体；孙桥村聚焦特色水产养殖，通过智慧渔业技术赋能，建设现代生态渔业产业基地。三大片区错位发展、协同互补，以“一村一策”的差异化精准路径激活乡村振兴内生动力。 针对项目工期紧、任务重的挑战，项目创新引入EPC工程总承包模式，通过“设计－采购－施工”一体化管理打破传统分段发包壁垒，实现跨专业协同作业。通过建立“全链条管控、全周期优化”的集约化管理体系，推动项目提速增效。 （二）规范化管理、‌协同化运作 项目严格遵循全域土地综合整治工作要求，构建“制度+机制+执行”三位一体管理体系。一是严守耕地保护底线。将永久基本农田保护作为核心，科学编制调整补划方案；将取得用地审批手续作为动土建设的前提，切实保障项目用地全程合法合规。二是创新协同推进机制。组建项目现场指挥部并派驻专业人员驻场办公，依托“沃土善水·兴农利民”党建联盟，构建市县镇村四级联动格局。三是健全全流程管理制度。通过制定指挥部例会、议事决策、审计验收等制度，实现项目建设规范化运作。 （三）多机制驱动、政民企共赢 一是构建“国资引领、资本协同、村资参与”的多元投入机制。依托试点政策优势，县镇统筹2.9亿元财政资金为项目建设注入强劲动能。撬动4400万元社会资本参与重点项目建设：在新型社区共建中，引导1300万元搬迁农户资金自主建房，有效改善居住条件；田园综合体联建方面，引入项目方2700万元资金，联动祝套村以土地使用权作价入股，通过“资金+资源”模式合作开发，建立按股分红的长效收益机制；米粉加工厂合营项目吸引企业出资400万元建设厂房，与胡港村开展联合运营，有效促进农民增收和村集体经济发展。 二是创新“留村产业”全链条运营机制。以稻米产业为核心，纵向延伸上下游配套项目，横向拓展农文旅融合业态，先后导入祝套村粮食烘干仓储中心、孙桥村特色水产养殖基地、胡港村米粉加工厂等产业项目，并将产业项目资产登记在村集体名下，通过公开招拍、租赁、承包经营、股份合作等方式，吸引企业入驻经营，形成农户节本增收、农民就近务工和村集体经济发展壮大的多赢局面。 三是建立“跨村联营”资源整合机制。突破行政壁垒，探索成立跨行政村的集体经济联合体，创办南通新聚生态农业发展有限公司，培育各类新型农业经营主体45家，落地农产品加工、冷链仓储、生物基秸秆托盘等十余个现代农业项目。项目全部达产后，预计年营收可达5000万元，村集体增收800万元，提供就业岗位超200个，辐射带动农户超5000户，实现了村庄、企业、群众多方共赢。 四是探索“权属明晰化”协调机制。运用数字化测绘技术精准固化土地平整后的承包权边界，确保承包经营权证面积与登记权益稳定。通过明确集体所有权、农户承包权、土地经营权的权责关系，以法定面积为收益分配基准，从源头上化解权属纠纷，为乡村资源高效流转筑牢制度保障。 三、取得成效 （一）小田并大田，织就水乡万亩良田 项目通过回填废弃沟塘、拆除零散农房，将高低起伏的“巴掌田”变成“田成方、渠相连、路相通”的高标准农田，为智慧农业机械化作业夯实基础。如今整治区水稻种植已实现播种、施肥、收割全程机械化，有效促进降本增产。项目累计新增耕地188.6公顷，形成集中连片耕地1212.39公顷，建成百亩以上高标准农田示范方30个，其中：千亩以上4个、五百亩以上9个、百亩以上17个，土地集约度提升42%，流转率超90％。在绿色科技的加持下，“宁香粳”水稻平均亩产达650公斤，刷新本地高产新纪录；“扬麦33、34”新品小麦亩产550公斤喜获丰收，一幅多彩的丰收画卷正徐徐铺开。\n\n图2农田整治前（上）后（下）\n\n图3整治后千亩方\n\n（二）复绿还清水，筑就宜居和美家园 通过系统推进生态保护和修复，全力打造宜居宜业和美乡村。一是生态修复筑基底。提升19.5公里生态水网，建成42.04公顷生态湿地公园，流域水质从Ⅴ类提升至Ⅲ类，碳汇能力增强30%。二是设施升级促生产。新建144.5公里节水沟渠、48.9公里机耕路和6公里林荫道，农田机械化作业效率提升40%，灌溉成本下降25%。三是人居整治焕新颜。完成143.04公顷人居环境整治，配套11.7公里智慧路灯，垃圾无害化处理率达100%、污水集中处理率95%，村民满意度达98.6%；通过拆旧建新、盘活空关房等方式，户均宅基地面积缩减57%。四是生态转化强经济。依托生态治理成果，培育生态旅游产业，将生态湿地、河道风光转化为绿色经济，绘就“环境改善—产业增值”的绿色发展同心圆。\n\n图4生态湿地公园\n\n图5河道整治前（左）后（右）\n\n图6零散居民点拆旧前（上）后（下）\n\n图7农民集中安置区\n\n图8生态净化池塘\n\n（三）三产深融合，绘就产村共生图景 项目以三产融合为核心，构建“三链协同”产业升级体系。纵向深耕稻米全产业链。依托“味稻小镇”品牌势能，联合南通绿之蓝米业等龙头企业组建产业化联合体，打造“良种繁育—智慧种植—加工营销”闭环价值链，亩均效益提升40%以上。横向激活农文旅融合矩阵。立足各村资源打造差异化IP，胡港村结合生态碳汇林打造“生态+运动+休闲”三维新场景，祝套村依托田园综合体探索“农业+康养+研学”复合新模式，孙桥村凭借休闲渔业示范基地构建“养殖+垂钓+观光”新业态，形成乡村美学经济实践样板。立体构建智慧农业创新极。通过农业示范区推动良种繁育、秸秆循环等技术应用，延伸渔业养殖新路径，催生\"科技+产业+服务\"新质生产力。 项目实施两年多来，整治区三村村营收入从293万元增加到634万元，增长116.4%，孙桥村更是从69万元增至277万元，增长301.4%，从原先的经济薄弱村一跃成为全镇强村榜“首富”，显著增强集体经济“造血”功能。孙桥村还利用增加的村营收入为全村70岁以上老人全额缴纳农村合作医疗保险，切实将增收成果转化为民生福祉。\n\n图9米粉加工厂\n\n图10智能温室大棚\n\n图11田园综合体\n\n图12粮食烘干仓储中心\n\n图13特色水产养殖基地\n\n图14生物基秸秆托盘和冷链仓储中心\n\n四、适用条件和推广前景 新店镇“耕地保护+产业融合”双轮驱动全域土地综合整治模式，为以农业为主导的地区提供了可复制的发展路径。该模式适用于具备以下特征的区域：一是耕地后备资源丰富，具备土地整治潜力；二是拥有特色农业产业基础，或具备培育农业产业链的区位、资源条件；三是生态环境良好，具备农文旅融合发展的自然禀赋。通过土地整治与产业导入相结合，有效激活乡村资源价值，推动三产融合发展。从实践成果看，新店镇依托“味稻小镇”品牌，发展“稻+”全产业链，在耕地保护、生态修复、产业升级等方面取得诸多成效。 本案例凭借创新性技术体系和现代化管理机制，先后获评江苏省土地学会科学技术奖一等奖、江苏省耕地保护激励单位等荣誉，其“全域统筹、系统治理、产业反哺”的实践经验被列为南通市深化改革创新典型案例，形成了具有示范价值的全域土地综合整治“如东范式”。其一，创新规划建设模式。通过差异化定位精准塑造乡村特色，避免同质化竞争；引入EPC总承包模式提升项目质效，为项目建设标准化、高效化提供实践参考。其二，完善管理协同机制。建立规范化管理流程，组建专班统筹推进，以及通过党建联盟强化跨区域、跨部门协作，有效破解政策壁垒，确保项目规划科学、实施有力。其三，探索多元发展路径。以多元化投入、留村产业运营、跨村联营等机制，化解资金与资源瓶颈，实现政府、企业、村集体、村民多方共赢。其四，强化示范引领效应。在土地集约利用、生态修复及三产融合等领域形成标杆成果，为乡村绿色发展、村集体和农民增收提供普适性样板，适配不同资源条件的乡村建设需求。"
  },
  "S02": {
   "heading": "zrzy.jiangsu.gov.cn_江苏省自然资源厅：江苏省南通市如东县新店镇全域土地综合整治试点",
   "date": "2025-04-17",
   "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
   "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d56gsjdqr/stzlxf/2025/04/17145328482266.html",
   "body": "江苏省南通市如东县新店镇全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。试点坚持以习近平总书记建设“强富美高”、“争当表率、争做示范、走在前列”新江苏指导思想为核心，与南通市、如东县“十四五”规划充分衔接，是为实现南通市“长三角一体化沪苏通核心三角强支点城市”、“全省争当表率、争做示范、走在前列排头兵”以及如东县“勇当长三角沿海高质量发展排头兵”目标而实施的国家级试点项目。项目通过探索实践，形成了以系统思维为统领，以产业振兴助力农民添富增收的丰富经验，因地制宜地总结形成了一套“3+6+4”的全域土地综合整治工作模式，充分发挥“全域整治+”作用，有效激发三产融合新动能，为赋能区域国土空间高质量发展提供了可借鉴、可推广的江苏经验探索。项目规划以新店镇镇区为核心，大白线为交通发展主轴线，带动周边村庄共同发展，通过探索“土地整治+产业导入”模式，在做好自身“土地文章”的同时，按需引入田园综合体、农业示范区、稻米精深加工等新业态，延伸拓展产业链，推动农村三产融合发展，助推乡村振兴。 与传统整治相比，项目是由如东县人民政府负责申报，政府是项目责任主体，有助于建立政府主导、部门协作、上下联动的项目推进机制；项目拓展了资金渠道，利用社会资本参与项目的建设；项目在传统土地整治的基础上增加了乡村生态保护修复、乡村历史文化保护、产业布局与引入等建设内容，优化生产、生活、生态空间格局，改善农村人居环境，助推乡村全面振兴。项目取得以下成效： （一）通过永农调整，优化空间布局 开展全域土地综合整治，通过调整永久基本农田和优化用地布局，从根本上解决农田“碎片化”、沟渠路“老旧化”、农村居民点“分散化”、土地利用“低效化”等问题。通过“小田并大田”，耕地更加集中连片和高效利用，建成连片高标田30块、1.02万亩。利用增减挂钩政策，推动零散农房拆迁和集中安置，共拆除88户，户均宅基地面积减少57%左右，结余增减挂钩指标用于农村一二三产融合发展，优化生产、生活、生态空间。\n\n典型平整区整治前后现状对比图\n\n（二）通过整治提升，建设和美乡村 将全域土地综合整治与民生实事有机结合，建成沟渠144.5公里，机耕路48.9公里，修复生态河道17.5公里，主干道绿化6公里，配套路灯11.7公里，通过对农业生产、农民生活、农村环境全方位的整治提升，改善了村容村貌，优化了农村人居环境，提高了农民的幸福感、获得感，全面促进和谐美丽乡村建设。\n\n大白线及飞跃河路整治前后对比图\n\n河道整治前后对比图\n\n（三）通过资源整合，壮大集体经济 统筹项目区各类土地资源，为整治区三个村带来长期稳定的村营收入。通过对1600个废弃沟塘的填埋，结合土地平整与周边田块进行合并，净增耕地2830亩（按1000元/每亩发包），每年共增加村营收入约283万元；整治形成集中连片耕地16200亩（村统一对外发包可获得土地流转差价200元/亩），每年共增加村营收入约324万元。通过整合以上两项土地资源收入，项目村可实现净增村营收入超600万元，有效增强了集体经济组织“造血”功能，真正应答了将土地文章写在大地上的时代命题。项目区还预留300亩一般农用地指标（祝套村50亩、胡港50亩、孙桥200亩）来保障村级农业招商的用地需求，用于招引特色农业产业项目，预计增加村集体经济收入100万元左右，为实现乡村产业振兴赋能增效。 （四）通过产业导入，实现三产融合 新店镇依托“味稻小镇”金字招牌，以绿色稻米产业为主导，发挥优质稻米产区优势，发展多类型的“稻+”模式，引入涉农产业共同发展。以“粮头食尾、农头工尾”为抓手，与省市级农业龙头企业进行合作，引进优质粮食种植项目，成立稻米产业化联合体，建立“订单农业”，实行“线下+线上”销售模式，打造集粮食种植、加工、销售一条龙产业链，延伸稻米全产业链，提升稻米附加值。\n\n建设中的稻米产业先行区及农副产品展销中心\n\n打造祝套粮食全产业链优质种植基地、孙桥村产销一体化淡水鱼养殖基地、胡港村米粉加工等一二三融合产业，为农村一二三产业融合发展提供强劲动能。项目达产后预计年营收可达1亿元，利税2000多万元，可为周边村居提供就业岗位超200个，辐射带动农户超5000户，持续创新农民增收、共同致富联结机制，实现了村庄、企业、群众多方共赢。"
  },
  "S03": {
   "heading": "zrzy.jiangsu.gov.cn_江苏省自然资源厅南通分局：如东新店镇全域土地综合整治国家级试点项目顺利通过省市联合验收",
   "date": "2025-10-20",
   "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅南通分局",
   "url": "https://zrzy.jiangsu.gov.cn/ntrd/gtzx/gzdt/202510/t20251020_1867010.htm",
   "body": "近日，如东县新店镇全域土地综合整治项目顺利通过省市联合验收，总规模达 6.75万亩，投入资金3.26亿元，在优化土地利用结构、激活乡村产业动能、提升群众生活品质上取得切实成效。一是整合零散地块，建成丰产良田。通过回填废弃沟塘、拆除零散农房、平整高低地块，整合高标准农田，形成集中连片耕地1.75万亩，建成百亩以上高标准农田示范方30个，农业生产效率与产出效益显著提升。二是紧抓整治修复，焕发乡村新颜。完成2150亩人居环境整治，系统推进乡村生态修复，提升19.5公里生态水网，建成630亩生态湿地公园，碳汇能力增强30%。三是延链补链强链，实现“三有”循环。围绕“农业全产业链”布局，补全“生产—加工—销售”产业链短板，构建闭环式农业经济生态，实现“村庄有产业、企业有市场、群众有收入”良性循环。四是产业多元运营，激发经济活力。通过耕地流转发包、产业项目分红等多元化运营，推动整治区3个村村营收入从2022年293万元增至2024年634万元，为开展民生服务、基础设施升级奠定坚实基础。下一步，如东局将持续巩固整治成果，深化“产业+生态+文化”融合发展，推动农业产业提质升级，为全省乃至全国全域土地综合整治提供“如东实践”新样本。"
  },
  "S05": {
   "heading": "nantong.gov.cn_南通市人民政府：“综治”到“增值”，绘就乡村振兴新“丰”景",
   "date": "2025-12-09",
   "source": "nantong.gov.cn_南通市人民政府",
   "url": "https://www.nantong.gov.cn/ntsrmzf/sxcz/content/96ed1b0a-4d97-45a0-a3c4-8f20b6e25015.html",
   "body": "如东县新店镇全域土地综合整治国家试点项目通过整体验收——\n\n“综治”到“增值”，绘就乡村振兴新“丰”景\n\n来源：南通日报 发布时间：2025-12-09 字体：[ 大 中 小 ]\n\n近日天气晴好，如东县新店镇田间地头一派忙碌景象：耕整土地、种麦施肥、粮食烘干、仓储运货，“味稻小镇”生机勃勃。历史悠久的农业小镇如何保持朝气、焕发新意？答案就在这份历时近3年书写的“试点”文章中——自2021年作为南通唯一入选全域土地综合整治国家试点项目（以下简称“试点项目”），新店镇“织”良田、美生态、引产业、创增收，逐笔绘制宜居和美、村强民富新画卷。今年10月底，该项目在全省同批次中第四个通过整体验收。\n\n良田万亩，释放土地要素新效能\n\n在如东德玲家庭农场仓库前，68岁的农场主宋小玲雷厉风行，一边指挥三轮摩托车卸下稻米，一边组织工人烘干收储。2015年至今，她承包的土地从200亩增加到1700亩，尤其是土地平整后小田变大田，耕种成本降低、效益更高，年收益最高达40万元左右。\n\n用稻麦鼓起钱袋，新店镇的万亩良田成了农场主的底气。但数年前，这一地处滨海平原的小镇，还面临着耕地资源碎片化的困扰。作为试点项目村之一的孙桥村，20年前不少农户为烧砖养鱼挖沟塘，生态、交通都受影响。2022年底，村内回填800多条沟塘，新增耕地超1100亩，建成约8000亩连片生态良田。\n\n不只孙桥村，整个试点项目区通过回填废弃沟塘、拆除零散农房、平整高低地块，将过去的“巴掌田”“碎片化耕地”整合为“田成方、渠相连、路相通”的高标准农田，累计形成集中连片耕地1.75万亩，建成百亩以上高标准农田示范方30个，土地集约度提升42%，耕地流转率超九成。\n\n“小田并大田”，土地流转带来实实在在的收益，村民们反响积极。如今，新店镇面貌焕新，村民生活也有了新气象。“原来家里12亩地，化肥农药要用百斤，年纪大了根本背不动。现在土地全部流转出去，加上退休工资，我和老伴每年收入上万元。”退休村干部缪志良欣慰地说，“年底我们就要建新房，日子越来越好了！”\n\n绿盈村落，擦亮和美乡村生态底色\n\n车行至胡港村，阡陌纵横、道路开阔、绿植繁茂，黑瓦白墙的民居一字排开，别有一番水乡韵味。新建的党群服务中心于今年8月正式启用，小游园、停车场、会议室、医务室等公共服务配套也已建成开放。“原来的村委会载体‘老破小’，位置偏僻不说，办事功能也受限。”新店镇农村工作和建设管理办公室副主任曹丹丹介绍，“现在不仅村部环境改善，公共服务硬件水平有所提高，村民办事也更方便了。”\n\n这些变化，得益于新店镇以试点项目为抓手，对核心整治区实施“一村一策”差异化改造路径，以筑就宜居和美家园为目标，打造“生态胡港、农旅祝套、水韵孙桥”三大特色乡村发展格局。眼下，胡港村近630亩的生态园内，树木林立、多样性生物物种共生；祝套村借势绿色稻米产业链，加速文旅融合发展；孙桥村依托水系资源，发展特色水产养殖及“渔家乐”……\n\n市自然资源和规划局耕地保护监督处处长周航表示，与其他通过验收的全域土地综合整治试点项目不同，如东县新店镇试点项目重点聚焦农村综合环境提升，新建节水沟渠172.4公里、田间道路47.4公里、泵站5座、桥梁11座；整治修复河道18.5公里，新建生态护坡19.6公里；完成2145亩区域人居环境整治，以系统推进生态保护和修复，激活乡村振兴内生动力。\n\n新店镇水系发达，试点项目推进过程中，等级河道整治成为生态修复的重点之一。“通过清淤疏浚、木桩护坡、沿岸美化等举措，原本杂乱的河道变得水清岸绿，岸边还规划了人行步道。”曹丹丹一路走一路介绍，如今的新店镇，恰如一幅“小桥流水人家”的生态画卷，展现出蓬勃生机和无限可能。\n\n三产融合，写好稻米生金大文章\n\n走进江苏云盘达新材料科技有限公司生产车间，锻压机不时发出热浪与嗡鸣，“吐”出一块块模压托盘。公司负责人李铁军介绍：“我们正在进行样品生产、原材料和设备优化等工作，最快明年3月量产出口欧洲市场。”\n\n试点项目通过投资兴建高标准厂房，成功招引江苏云盘达新材料科技有限公司入驻。2024年11月，企业带着技术和设备入场，利用秸秆、稻壳等农业废弃物生产可降解托盘。目前，企业正与意向客户洽谈，为产品出口认证做准备。\n\n产业振兴是乡村振兴的重中之重。试点项目二期工程聚焦产业布局与引入，以三产融合为核心，重点布局“从田间到餐桌”的农业全产业链项目，涵盖粮食产后处理、特色水产培育、农产品冷链保鲜及精深加工等关键环节，十余个项目落地不仅补齐了产业短板，更构建起闭环式农业经济生态。\n\n实施全域土地综合整治试点项目后，如今的新店镇有江苏省农业产业化省级重点龙头企业——南通绿之蓝米业有限公司，在当地构建起集粮食种植、收购、烘干、加工、销售于一体的产业链，带动村营年收入超百万元；祝套村种瓜卖瓜的“新农人”王春晨，运用独家防病虫害技术，让一年三茬、近百亩的西瓜更具竞争力；让本土粮食作物集中亮相的“稻香e站”直播载体，让大米、米酒、糯米粉、年糕、炒米等稻米土特产搭上网络销售“直通车”……\n\n试点项目实施以来，通过耕地流转发包和多元化产业运营，整治区三村村营收入从2022年的293万元增加到2024年的634万元，孙桥村更是从原先的经济薄弱村一跃成为全镇强村榜“首富”，村营收入增长超300%。一串数字，代表了村民沉甸甸的钱袋子和落到实处的幸福感。"
  }
 },
 "32": {
  "S02": {
   "heading": "iziran.net_中国自然资源报：浙江省2024年度土地综合整治优秀案例（第一、二、三批）",
   "date": "2026-01-14",
   "source": "iziran.net_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5451491",
   "body": "近日，浙江省土地综合整治和耕地保护工作领导小组办公室印发《浙江省2024年度土地综合整治优秀案例》（第一批），桐乡市濮院镇运河全域土地综合整治与生态修复工程成功入选。这项历时数年、总投资5.8亿元的宏大工程，并非简单的土地整理，而是一场以“农、地、人”为核心的深度变革，将3.12万亩土地转化为城乡融合、产业升级与民生改善的活力平台。\n\n赋能现代农业\n\n“生态+”产出“黄金效益”\n\n在濮院北部，连片的田野勾勒出现代农业的壮美图景。项目以产业集群思维，打造了万亩粮油、千亩葡萄、千亩水产三大特色示范区。这里推广的不仅是规模种植，更是绿色生产力：通过“生态绿岛—节水沟渠—清洁田园”系统修复，示范区面源污染削减35%，农药减量30%，节水节能超20%。科技与生态的融合结出硕果，“喜濮”大米等地理标志产品声名鹊起，水稻亩产高达1730斤，亩均效益逼近万元。\n\n激活土地价值\n\n“沉睡资源”变身“活力引擎”\n\n土地是发展的基底。濮院创新盘活低效建设用地，打造网红打卡地杉林饗食共享餐厅和充满设计感的星旗理想村。它们串联起18公里美丽乡村精品线，吸引了十余家新型农业主体入驻。\n\n更宏大的手笔在于产业协同。濮院巧妙将土地整治复垦产生的流量指标，反哺其雄厚的毛衫时尚产业，成功落地浙江省首个跨区域百村共富项目——濮院临空科技园。这一举措不仅拓展了产业空间，更实现了强村富民，参与村年均获得近百万元分红，实现了土地增值与乡村经济的良性循环。\n\n聚焦宜居家园\n\n“15分钟圈”绘就“全龄友好”新生活\n\n一切发展的最终目的是人。濮院通过土地整治，系统重构了居住与服务空间。新联景苑等美丽宜居社区拔地而起，506户家庭喜迁新居，新村集聚率超过90%。\n\n围绕新社区，一个覆盖全龄段的“15分钟高品质公共服务圈”已然形成：扩建一新的桐星学校、设施完善的镇级养老服务中心、浸润书香的8个伯鸿书房、12处精巧的口袋公园，以及便民菜场、医院、幼儿园等一应俱全。这里不再是单纯的居住点，而是功能复合、服务便捷、充满温情的现代生活共同体。\n\n从高效生态的农田，到产村融合的景观，再到宜居宜业的社区，濮院镇运河全域土地综合整治工程，通过空间的重塑，实现发展逻辑的升级——让农业成为有奔头的产业，让乡村成为宜居宜业的和美家园，让农民享有现代化的发展成果。这片被精心重塑的土地，正持续释放着推动城乡深度融合、实现共同富裕的强劲动能。"
  },
  "S01": {
   "heading": "zrzyt.zj.gov.cn_浙江省自然资源厅：央视财经频道《经济信息联播》关注浙江“土地综合整治+”",
   "date": "2026-07-27",
   "source": "zrzyt.zj.gov.cn_浙江省自然资源厅",
   "url": "https://zrzyt.zj.gov.cn/col/col1070722/art/2026/art_04ed699baa724aff9d192af0dbb720fe.html",
   "body": "央视财经频道《经济信息联播》关注浙江“土地综合整治+”\n\n信息来源：\n 央视财经频道《经济信息联播》\n\n发布日期:\n 2026-07-27 11:07\n\n浙江桐乡：小田变大田  “飞地抱团”激活乡村共富动能\n\n破局之后，如何让改出来的空间持续“生长”？浙江桐乡濮院镇把土地治理变成带动村民增收的抓手。\n\n浙江省自然资源厅副厅长李家银表示：“我们通过全域土地综合整治，小田变大田，山上换山下，把耕地的数量、质量、生态三位一体来进行推进。我们有（全域土地综合整治）+现代农业、+绿色发展、+城乡融合，还有+古村落保护，不同模式。在‘十五五’期间，要通过全域土地综合整治，能够真正打通城乡资源之间的流动。”\n\n浙江嘉善：寻求最优解  “一块地”集成改革重塑空间布局\n\n土地是城乡发展的根基，和城市的集中高效相比，县域的土地普遍存在分散的难题。自2021年起，嘉善县西塘镇的6个行政村作为试点之一，率先进行“一块地”推进集成改革。\n\n2023年，嘉兴市全域推行“一块地”集成改革，将原来永农地块平均面积从12.9亩提升到了14.5亩，整合形成连片耕地38.6万亩，同时建成百亩以上连片优质耕地达4197片。\n\n浙江“土地综合整治+”：让土地长出系统价值\n\n如今，浙江正以\"土地综合整治+\"作为核心引擎来推动深层次的变革，从2023年到2025年，这三年间，新增耕地超过了60万亩，全省500亩以上的集中连片耕地达到了965万亩。\n\n那么这些变化带来哪些可以推广的经验？来看浙江大学土地与发展研究院副院长岳文泽、浙江省发展规划研究院城镇化研究室副主任程振波的解读。\n\n【打印本页】 【关闭本页】"
  }
 },
 "33": {
  "S06": {
   "heading": "nbjb.gov.cn_宁波市江北区人民政府：我们这一年 宁波全域国土空间的“55”解法",
   "date": "2025-01-28",
   "source": "nbjb.gov.cn_宁波市江北区人民政府",
   "url": "https://www.nbjb.gov.cn/art/2025/1/28/art_1229114281_58963168.html",
   "body": "人才是第一资源。古往今来，人才都是富国之本、兴邦大计。习近平总书记指出，要把我们的事业发展好，就要聚天下英才而用之。\n\n习近平总书记关于人才、人力资源、干部队伍建设重要论述精神和考察浙江重要讲话精神为宁波自然资源规划系统队伍建设工作指明了方向、提供了遵循，省委“新春第一会”精神则吹响了宁波自然资源规划队伍建设的号角。\n\n时间的渡船，驶入了新的征程。回顾2024年，全域整治的步伐坚定有力，自2022年宁波成为全国唯一获批在全市域范围开展全域国土空间综合整治试点的城市以来，这片9000多平方公里的土地上，开启了一场为全国推进国土空间治理体系和治理能力现代化的探路之旅。\n\n全域土地综合整治工作是利民利国、利乡利城的大好事。如何将好事真正办好，宁波市自然资源和规划局紧紧围绕农用地整治、村庄整治、生态保护修复、工业用地整治、城镇低效用地再开发“五大任务”和资源重组、功能重塑、空间重构、产业重整、环境重生“五重目标”，交出了一份优秀的答卷。\n\n2024这一年，宁波全域整治工作试点成效获得国家部委和社会各界的高度认可，被选为典型代表参加第34个土地日主场活动、全域整治经验交流会等全国性会议并发言，工作纪录片《蝶变》被自然资源部确定为全域整治工作的主题视频在全国经验交流会上播放。\n\n2024这一年，全域整治改革获得2023年度浙江省改革突破奖金奖，并受到自然资源部主要领导圈阅肯定；试点成果被纳入自然资源部首批全域整治试点典型案例；宁波试点相关做法及成效在《人民日报》、《中国自然资源报》头版、自然资源部公众号等多个渠道获得宣传推广，生动展示了国土空间治理现代化的“宁波经验”。\n\n做大做靓做强“宁波全域国土空间综合整治”品牌，形成一批卓有成效的全域整治典型案例。\n\n——在海曙，古林镇蜃蛟村等7村通过统筹村庄整治，农田整治、生态修复以及特色产业项目，实现“土地整治+产业升级”；在宁海，胡陈乡梅山村等6村通过全域整治大力发展抹茶产业，坚持“一村一品”，实现了“村即是景、景即是村”；在象山，石浦镇五新村等7村将海洋元素和“山水林田村”相融合，形成山水相融的全域整治格局，打通“人、地、钱、产”关键节点，促进城乡要素双向流动。以上三个项目获评2023年度土地综合整治省级精品工程。\n\n海曙区横街-古林片区“万亩方”项目\n\n——看镇海蛟川片区，绿色先导、产城融合，以全域国土空间综合整治为支点，全面撬动产业革新、城市更新、乡村振兴，27.22平方公里的土地正焕发新的活力，该项目入选全省首批土地综合整治助推共富单元建设十大优秀案例。\n\n镇海区蛟川片区 - 海天林带\n\n——观奉化西坞等2街道，通过跨乡镇土地综合整治工程创新打造的“万亩方”田园驿站，屡屡出圈，成为网红打卡地，运营大半年以来吸引游客超过20万人，新增旅游综合收入1800万元以上，走出了一条农旅融合新路径，整治“附加值”不断提升。\n\n奉化区西坞街道“万亩方”\n\n一年来，宁波市自然资源和规划局做深做透整治“文章”，聚焦“统”“优”“保”“提”四个关键字，从国土空间治理平台建设、国土空间布局优化、资源保护与要素保障、重点领域实效提升四个方面,探寻国土空间综合整治“最优解”，让人民共享整治成效。\n\n第一个关键词：“统”\n\n这一年，全域整治领导小组办公室发挥牵引作用，形成纵横联动多跨协同的国土空间治理平台。建立完善“管理规范+支持政策”的制度体系，各部门群策群力，形成包含工作管理规则、技术规则、条线支持政策三个方面，涵盖工业用地整治、城中村改造、低效用地再开发等20余项制度政策成果，推进8项行业标准制订。\n\n建立完善“部门协同+市区合作”的实施机制，以整治方案为载体，实现“区县多条线集成项目、市级多部门指导审查”的方案生成模式和“市区两级公司合作、统一主体对片区实施综合开发”的集成式工作模式，实现了“空间集聚、要素集成、力量集中、计划协同”的试点之初设定目标。\n\n第二个关键词：“优”\n\n这一年，宁波市自然资源和规划局以全域整治为抓手，优化国土空间格局，提升国土空间治理效能。\n\n今年，全市以11个全域整治示范片区带动28个省级土地综合整治项目实施。2024年新开工子项目205个，完成投资213.3亿元，实现永久基本农田集中连片整治3.5万亩，高标准农田建设和改造3.45万亩，盘活低效建设用地297公顷。全市11个示范片区方案全部完成报部备案，有效推进5亩以下零星永农集中和开发边界内“天窗”填补，耕地和建设用地布局双向优化，资源要素向优势地区集中，“宜农则农、宜建则建”。\n\n第三个关键词：“保”\n\n这一年，宁波市自然资源和规划局充分彰显全域整治在资源保护和要素保障方面的重要作用，综合集成土地、项目、资金等资源要素，为推动各类空间治理项目实施提供支撑保障。\n\n在生态保护修复方面，深入践行“两山”理念，协同推进幸福河湖建设、海岸线修复、流域湖泊整治、历史遗留矿山修复、水土保持等项目。2024年，市自然资源和规划局、市财政局联合印发《宁波市全域国土空间综合整治生态修复考核奖补资金管理实施细则》，对镇海、海曙、奉化、宁海、余姚、慈溪6个地方全域整治中取得显著成效的生态保护修复项目进行资金奖补，切实发挥财政资金的激励导向作用。\n\n在空间要素保障方面，以整治保民生，优先保障涉及公共利益的整治项目实施落地，促进城乡基本公共服务均等化，全市已通过整治腾挪空间保障新增民生项目落地27项、用地500余亩；以整治保产业，通过空间腾挪破解产业发展用地难题，如北仑区实施滨海片区综合整治，集中打造舟山港后智能配套中心，建设综合物流基地；镇海通过统筹实施绕城高速东工业整治等项目，为甬江科创区青创港建设腾挪发展空间。\n\n第四个关键词：“提”\n\n这一年，全域整治持续转动空间的“魔方”，协同联动低效用地再开发、城市更新、城中村改造、和美乡村建设等多试点任务，促进政策叠加效益的最大化，着重在“多田套合”、工业整治等重难点领域推动实效提升。\n\n在“多田套合”方面，市资规局会同市农业农村部门协力攻坚，围绕“多田套合”工作目标打出一套“组合拳”，进一步统一标准口径、统一底图底数，做优布局方案，我市全域整治“多田套合”率从一季度全省排名第八，提升至三季度排名第四，增速连续两季度保持全省第一。\n\n在工业整治方面，片区内共实施工业用地提质增效3000余亩，联动“2070”新增项目招引和低效工业腾退实现产业空间腾换。整治片区内工业用地入园率、亩均税收、吸引就业人数、研发投入等指标增长率均高于全市平均，初步实现全域整治对工业布局优化和产业提质增效的牵引性作用。\n\n从点土成金、点绿成金，到打开共富新空间，宁波市自然资源和规划局从一而终践行“五重”，初心不改，奋斗不止。\n\n新的一年，我们将继续坚持示范先行、锐意改革，将全域整治建设成为一项引领性、集成型改革，奋力实现“以空间治理撬动经济和社会治理”的任务目标，为助力我市建设现代化滨海大都市贡献硬核力量！\n\n来源：江北政府网"
  },
  "S07": {
   "heading": "zrzyt.zj.gov.cn_浙江省自然资源厅：浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展的实施意见",
   "date": "2025-11-14",
   "source": "zrzyt.zj.gov.cn_浙江省自然资源厅",
   "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229101716_2579171.html",
   "body": "索引号: 002482437/2025-01227\n\n公开方式: 主动公开\n\n公开日期: 2025-11-14\n\n发布单位: 浙江省自然资源厅\n\n有效性: 有效\n\n《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡一体融合高质量发展的实施意见》政策解读\n\n信息来源：\n 浙江省自然资源厅\n\n发布日期:\n 2025-11-14 15:46\n\n一、制定背景和依据\n\n为深入运用自然资源部《关于学习运用“千万工程”经验 深入推进全域土地综合整治工作的意见》（自然资办发〔2024〕149号），将土地综合整治作为落实城乡规划布局一体融合的有效载体，推动土地综合整治向国土空间治理转型，全面夯实共同富裕、城乡融合的空间基础，助推高质量发展。省自然资源厅制定了《关于深入开展土地综合整治工作 助推城乡一体融合高质量发展的实施意见》（以下简称《实施意见》）。\n\n二、适用对象\n\n各市、县（市、区）自然资源主管部门。\n\n三、主要内容\n\n《实施意见》分5个章节15条内容。围绕1个目标（夯实共同富裕、城乡融合空间基础）、抓好3大关键业务环节（规划传导、实施协同和空间设计），开展3项创新性试点（实施方案与详细规划协同编制、资源导向型可持续发展模式、政策性银行深度合作）、打造5大“土地综合整治+”模式（“土地综合整治+”城乡融合、现代农业、产业升级、乡村记忆和绿色发展），主要内容包括：\n\n（一）明确总体目标。充分发挥土地综合整治平台作用，全面赋能“强城”“兴村”“融合”三篇文章，全面支撑“县城—中心镇—重点村”发展轴建设。在目标任务方面，从2027年、2030年两个重要时间节点分别提出具体目标。\n\n（二）加强规划传导。将实施方案按照实施单元详细规划进行管理，加强与耕地保护、用地报批、规划管理、调查登记等业务衔接，结合“土地综合整治+”，探索开展土地综合整治单元空间设计。\n\n（三）明确实施内容。聚焦不同区域的区位特点、自然肌理和功能定位，提出现代农业、城乡融合、产业升级、乡村记忆和绿色发展等5大“土地综合整治+”模式以及重点实施内容，推动整治从重数量到提品质转变、从项目管理向空间治理跃升，全面提升我省土地综合整治综合成效。\n\n（四）严格项目管理。强化“前期谋划、方案审批、项目实施、竣工验收、后期管护”全过程管理要求，鼓励实施方案与详细规划协同编制，探索一体化推进模式和资源导向型可持续性模式，深化与政策性银行合作。\n\n（五）强化实施保障。加强省市县三级工作合力、构建多元资金筹措模式、充分尊重群众意见、加强成效评估和宣传引导。\n\n四、实施日期\n\n《实施意见》自2025年12月15日起施行。\n\n五、解读机关\n\n解读机关：浙江省自然资源厅\n\n解读人：褚立波\n\n电话：0571-88877820\n\n浙江省自然资源厅\n\n2025年11月14日\n\n【打印本页】 【关闭本页】"
  }
 },
 "34": {
  "S02": {
   "heading": "zrzyt.hunan.gov.cn_湖南省自然资源厅：人民日报：湖南益阳市赫山区兰溪镇开展全域土地综合整治 水乡小镇展新颜",
   "date": "2024-09-20",
   "source": "zrzyt.hunan.gov.cn_湖南省自然资源厅",
   "url": "https://zrzyt.hunan.gov.cn/zrzyt/xxgk/gzdt/zhxw_1/202409/t20240920_33459133.html",
   "body": "人民日报：湖南益阳市赫山区兰溪镇开展全域土地综合整治 水乡小镇展新颜\n\n时间：2024-09-20 15:47\n\n湖南益阳市赫山区兰溪镇开展全域土地综合整治\n\n水乡小镇展新颜\n\n湖南益阳市赫山区兰溪镇是国家第一批全域土地综合整治试点地之一。以全域土地综合整治为契机，当地推进生态环境治理，发展生态旅游，村镇面貌焕然一新。\n\n在湖南益阳市赫山区兰溪镇，兰溪河如同一条灵动的飘带，将河堤两边大片绿油油的农田串联起来。白墙青瓦的民居鳞次栉比，秀美的田园风光与浓浓的烟火气息在这座水乡小镇交融。\n\n兰溪镇因河而名，水运发达。如今人道兰溪风光好，几年前，这里却不是这般光景。耕地碎片化、村庄建设用地布局凌乱、土地资源利用低效、环境污染加剧等，都曾是当地发展中面临的问题。\n\n变化起于 2021年，当时兰溪镇被自然资源部认定为国家第一批全域土地综合整治试点地之一。2022年1月，赫山区政府与湖南乡村产业发展有限公司联合投资实施该试点项目，坚持“生态优先、保护优先、集约优先”的原则，在区域内开展全要素、多手段、高效益综合整治。\n\n整治河段环境，重现水清岸绿\n\n兰溪河全长 28.51公里，有14条支流，承担着附近城镇灌溉、排涝、调蓄等任务。治理前，兰溪河河堤杂草丛生，河水污染严重。\n\n赫山区将兰溪河治理列为试点项目中的重点生态治理工程，按照 “水清、岸绿、河畅、景美”的要求，开展水域综合治理，整修沟渠，清淤治污，畅通水系，改善灌排设施，对兰溪河周边污水处理厂进行提标改造，加快截污分流工程建设。对之前的废弃坑塘，建设生态堤顶、护坡、排水渠和田埂。\n\n经过几年治理，兰溪河面貌大有改观。如今的兰溪河，碧波荡漾，以点串线，打造出 “十里画廊”生态景观。\n\n兰溪镇千家洲村村民刘志清家里经营着七八十亩藕田。 “如今兰溪河水畅通了，水位高了，水质也好了，带动了我家藕田增产增收。我去年靠藕田挣了7万多元，比以前增加了不少。”刘志清说，“水清了，环境变美了，大家都愿意晚饭后去河边散步聊天。”\n\n打造示范民居带，改善村容村貌\n\n绿树成荫，映衬着一栋栋宽敞明亮的民居。 “这是拆除废弃房后的新建房，村民们高兴得很。”湖南乡村产业发展有限公司全域土地整治项目负责人朱伟介绍。\n\n废弃房曾是兰溪镇的 “老大难”。这些房子大多建于上世纪八九十年代，零散分布在田间地头，日常无人居住、缺少维护，多用于养鸡或堆放杂物，不仅造成了土地资源浪费，也存在安全隐患，影响村容村貌。\n\n2020年以来，兰溪镇全力推进废弃房整治。在拆除后腾退出来的地基上，恢复耕地、复垦建筑用地80亩。兰溪镇党委书记邓凯兵说：“现在，兰溪镇各村的村容村貌得到明显改善，‘脏乱差’的现象也大大减少。”\n\n兰溪镇利用腾退的用地指标，根据各村实际，选取符合当地特色的房屋样板，打造宜业宜居的示范民居带。此外，兰溪镇开展美丽屋场建设，改善乡村环境面貌。\n\n如今，兰溪河 “十里画廊”沿岸村庄，生态护坡、灯光夜景、亲水平台、健身步道、休憩长廊、音乐喷泉成为标配；在农家院落中，菜园、家禽栏舍、排水沟都有了标准化制式；镇里第一批集中打造的16个美丽屋场，每个屋场都配有一个公共厕所、一片干净水域、一个休憩凉亭、一个休闲广场、一条文化长廊和一面宣传墙。\n\n发展生态旅游，助力乡村全面振兴\n\n采菱角、钓鱼虾，白天可以在兰溪河上泛舟赏景、感受水乡日常，晚上可以欣赏民歌戏曲、品尝当地美食，亲朋好友围坐一桌，闲话家常。\n\n“周末来兰溪镇观光旅游的人越来越多了！”赫山区委宣传部副部长夏正华感慨，随着全域土地综合整治的开展，兰溪镇发展生态旅游，引来游人如织。\n\n北岸新村是兰溪镇全域土地综合整治的先行示范村。村委会的办公室内，美丽乡村建设相关的奖状在墙上挂得满满当当。 “游客多了，村民们也更注重保护环境。现在田成方、路相通、渠相连、河畅通，村镇环境美了，大家的生活才会更美。”北岸新村党总支委员张怡说。\n\n“清新的空气、优美的环境，俨然成为兰溪镇的名片。通过全域土地综合整治，把零散地块重新规划，不仅实现数量上的‘扩容’，也迎来质量上的提升，为兰溪镇发展生态旅游奠定了基础。”朱伟说。\n\n兰溪这座水乡小镇的变化，是湖南省开展全域土地综合整治的一个缩影。从生态系统整体性出发，基于生态基底，突出规划引领，湖南省对全域土地综合整治范围内各种生态要素及道路、公共建筑、住宅及污水管网等基础设施进行整治，坚持高位推动、注重统筹协同，因地制宜、精准施策，积极推动区域土地保护利用，探索助力乡村全面振兴。\n\n兰溪河畔， “山乡新巨变，多彩新赫山”的标语引人注目。绿水青山间，一幅秀美的乡村生态画卷正在徐徐铺开……"
  },
  "S04": {
   "heading": "yiyang.gov.cn_益阳市人民政府：山水共治焕新颜",
   "date": "2025-08-03",
   "source": "yiyang.gov.cn_益阳市人民政府",
   "url": "https://www.yiyang.gov.cn/yiyang//2/3/74/content_2086729.html",
   "body": "山水共治焕新颜\n\n中国益阳门户网 www.yiyang.gov.cn 发布时间：2025-08-03 08:47 浏览量： 次\n\n经过综合整治后的土地变得平整、规则，基础设施更加完善。吴胜琳摄\n\n盛夏7月，早稻已经颗粒归仓，俯瞰视角之下，横平竖直的田垄，修缮一新的机耕道、引水渠、生态渠清晰可见；兰溪河“十里画廊”风光旖旎，夜幕降临，灯光璀璨；古街老巷里烟火气升腾，处处焕发新颜……这幅美丽的乡村画卷，是赫山区兰溪镇推进全域土地综合整治的生动写照。\n\n自2021年被列为湖南省全域土地综合整治20个试点区域之一以来，兰溪镇通过全要素、多手段、高效益的综合整治，交出了一份亮眼的成绩单：新增耕地179.6公顷，新建高标准农田6.6万亩，复垦建设用地5.4公顷；2025年成功入选自然资源部第三批全域土地综合整治典型案例，此前还曾获评湖南省土地工程优秀成果一等奖。\n\n“兰溪镇的巨大变化，确实与全域土地综合整治有着密切关系。”兰溪镇农业综合服务中心工作人员曹开宇告诉记者，2021年，兰溪镇正式启动全域土地综合整治，坚持“生态优先、保护优先、集约优先”原则，在粮食生产上强化保障，在粮食安全上守牢底线，在耕地保护上动真碰硬。先后对北岸新村、沙岭村等14个行政村，以及3个渔场和1所中学的3765.67公顷土地进行综合整治。同时，科学规划田、水、路、林、村、居、业等要素布局，以镇区作为三产融合引领区，因地制宜将全镇划分为休闲农业体验、立体生态种养、科技农业示范等区域，探索农田集中连片、农业规模经营、村庄集聚美丽、环境宜居宜业、产业融合发展的农村土地利用新格局。\n\n土地整治涉及每家每户的利益，必须让村民当家作主。在开展整治工作的过程中，兰溪镇通过走访党员、种粮大户、村民代表等，不断汲取群众智慧，创新建立“三方监管”工作模式。即每个项目村抽调1名村“两委”干部、4名村民小组组长或党员，与主管部门、监理人员共同组成质量监督小组，全程监督项目施工情况，并且村民对工程质量拥有“一票否决权”。\n\n全域土地整治是一项围绕土地开展的系统性工程，兰溪镇在做好看得见的土地综合治理工作的同时，用绣花功夫完成一系列与土地相关的民生工程——兰溪河河堤沿线862户改厕工程，使污水管网实现了全覆盖；迁走或深埋河堤沿线坟墓3800多座，为每个平坟点栽种铁树并挂上特制铭牌，既守护了生态底线，又留住了乡愁记忆；按照“六个一”标准开展美丽屋场建设，提升乡村环境和整体风貌，实现一村一幅画、一线一风光……“以前河堤边开门见坟、出门见墓，现在变成了水清、岸绿、河畅、景美的十里画廊，饭后散步有了好去处。”家住兰溪河沿岸的村民李建国说。\n\n作为全国十大米市之一，兰溪镇将土地整治与产业发展紧密结合，持续构建多元融合的产业体系。目前，该镇正加快建设粮食产业园二期工程，打造米市龙头企业，擦亮“兰溪大米”品牌；依托千家洲湖藕、兰溪青鱼等特色农产品，推进世林食品三期工程，促进农产品加工升级。连续三年举办的双桡龙舟赛事活动，更是成为该镇文旅融合的“引爆点”，三产带二产促一产的新路径已逐步清晰。桨声灯影中听兰溪、舌尖上品兰溪、稻花香里赏兰溪，成了独属兰溪的乡村振兴名片。\n\n信息来源：益阳日报全媒体 作者：曹灿 吴胜琳 周羽萱 蔡婷 责任编辑：曹予望"
  },
  "S05": {
   "heading": "yiyang.gov.cn_益阳市人民政府：兰溪镇 全域土地综合整治显成效",
   "date": "2022-09-01",
   "source": "yiyang.gov.cn_益阳市人民政府",
   "url": "https://www.yiyang.gov.cn/yiyang/2/3/74/content_1643511.html",
   "body": "兰溪镇 全域土地综合整治显成效\n\n中国益阳门户网 www.yiyang.gov.cn 发布时间：2022-09-01 09:00 浏览量： 次\n\n8月24日，走进赫山区兰溪镇北岸新村，只见玉兰桥电排边的农田里水稻长势喜人。微风轻拂，卷起层层绿浪，很难想象几个月前这儿还是一片废弃坑塘。\n\n兰溪镇是湖南省全域土地综合整治20个试点单位之一,整治项目区共涉及北岸新村、沙岭村等14个行政村、3个村级水产养殖基地和一所中学。今年4月，兰溪镇先期启动了沙岭村和北岸新村两个试点村的土地开发项目，该镇全力配合施工单位，积极协调解决项目建设过程中出现的问题，使全域土地综合整治项目建设顺利推进。各类大型施工机械陆续开进村里，通过坑塘填埋、土地平整、路沟渠配套建设、晚稻抢种等一系列施工运作，有效改善了田间灌排条件，提高了耕地质量和综合生产能力，村中的低效坑塘摇身一变，成了一块块优质良田。截至目前，北岸新村开工建设面积共446.3亩，新增农田72亩，落实晚稻种植72亩；沙岭村开工建设面积共201亩，新增农田82.6亩，落实晚稻种植82.6亩。\n\n信息来源：益阳日报全媒体 作者：李胜利 曾家旺 责任编辑：梁武"
  }
 },
 "35": {
  "S01": {
   "heading": "dz.jiangxi.gov.cn_江西省地质局：我局助力宁都县全域土地综合整治项目入选自然资源部第三批典型案例",
   "date": "2025-07-07",
   "source": "dz.jiangxi.gov.cn_江西省地质局",
   "url": "https://dz.jiangxi.gov.cn/jxsdzj/ttxw904/content/content_1942116650596376576.html",
   "body": "近日，自然资源部发布第三批全域土地综合整治典型案例，我局有关单位参与项目实施方案编制并全力协助案例申报的《江西省赣州市宁都县青塘镇全域土地综合整治典型案例》榜上有名，这是 “十四五”期间继“寻乌模式”入选《中国生态修复典型案例集》以来，我局入选的又一国土空间生态修复典型案例。\n\n该 项目于 2022年4月启动，项目前期，我局有色大队凭借专业优势，深度参与项目实施方案编制，精心规划项目蓝图。后续，第七大队提供全方位技术支撑，协助宁都县人民政府申报典型案例，最终成功入选。该项目以生态环境治理、农用地整理、建设用地整理、历史文化保护等为核心任务，致力于构建良田连片成势、建设用地集约高效、生态环境和谐优美的全域国土新格局。项目通过深度挖掘富硒土壤资源潜力，成功塑造“宁都富硒蔬菜”特色品牌，拓宽了当地农民增收渠道，为特色产业发展开辟了新路径。在建设用地整理方面， 统筹 废弃采矿用地治理与增减挂钩指标，吸引众多优质企业入驻， 形成产业集聚效应 。在历史文化保护领域，充分挖掘红色资源，全力打造赣南红色教育新地标等。该项目 实施规模 772.9882公顷，覆盖11个行政村。\n\n据悉， 2019年全域土地综合整治试点工作在全国正式启动以来，自然资源部支持25个省份实施了356个以乡镇为单元的试点。截至目前，自然资源部已发布三批共47个典型案例。\n\n（局生态处 卿玉玲 有色大队 张衎 第七大队 李海潘）"
  },
  "S02": {
   "heading": "dz.jiangxi.gov.cn_江西省地质局：赣南日报：江西宁都：“地质+”模式助力乡村全面振兴",
   "date": "2025-07-23",
   "source": "dz.jiangxi.gov.cn_江西省地质局",
   "url": "https://dz.jiangxi.gov.cn/jxsdzj/mtgz/content/content_1948645004192595968.html",
   "body": "2025-07-23  来源：赣南日报\n\n日前，自然资源部公布第三批全域土地综合整治典型案例，由江西省地质局有色地质大队实施的宁都县青塘镇全域土地综合整治项目成功入选。这是继“寻乌模式”后，江西地质系统在国土空间综合整治领域取得的又一标杆性成果。该项目通过“生态修复+产业导入+文化传承”三位一体创新模式，为全国乡村全面振兴提供了可复制的“江西方案”。\n\n技术创新引领：科学规划绘制整治蓝图\n\n该队核工业赣州工程勘察设计集团有限公司项目团队运用ARCGIS技术构建一体化监测体系，通过叠加分析法完成土地适宜性评价与耕地适宜性分析。数据显示，项目区772.98公顷土地经科学规划后，实现旱改水198.03亩，新建高标准农田8313.21亩，土地节约集约利用率得到极大提升。特别值得关注的是，通过“林地进出平衡”创新机制，激活镇域55.7898公顷，补充林地1753.42亩，形成“山水林田湖草”系统治理的示范样板。\n\n在建设用地整理方面，项目团队统筹废弃采矿用地治理与城乡建设用地增减挂钩政策，腾挪出122.9221公顷建设用地指标。这些指标优先用于保障青塘镇教育、医疗等民生设施建设。\n\n产业生态双赢：激活乡村全面振兴新动能\n\n项目组深度挖掘青塘镇富硒土壤资源优势，通过土地整治新建富硒蔬菜大棚21.41公顷，打造“宁都富硒蔬菜”区域公用品牌。据统计，项目实施后青塘镇富硒蔬菜带动1200余户农户实现增收。\n\n更值得称道的是，核工业赣州工程勘察设计集团有限公司创新“地质+农业”技术服务模式，为种植户提供土壤改良方案，提升土地利用率，使富硒蔬菜硒含量稳定在最佳区间，真正实现“种出好产品，卖出好价钱”。此外，该项目在生态方面也取得较好的效益，清塘河15公里水环境治理工程使水质有效提升。\n\n文化传承赋能：红绿融合打造特色IP\n\n在历史文化保护领域，项目团队创新实施活化利用，修复毛泽东同志旧居、青塘会议旧址等红色遗址，打造占地127.91亩的河背少共苏区中央局文化遗址公园。通过“矿山研学+红色教育”融合模式，有效带动周边民宿、餐饮业的发展，新增了就业岗位。\n\n传统建筑活化利用更具匠心，7处赣南特色宗祠经项目团队系统性修缮，转型为非遗工坊、乡村书院，其中青塘宗祠文化园获评“江西省优秀传统文化传承基地”。这些文化地标与富硒产业基地、生态景观带形成“红绿古”三色旅游线路，让历史文化在传承中焕发新生，丰富了群众的精神文化生活。\n\n标杆示范效应：绘就全域整治新图景\n\n作为自然资源部典型案例的青塘项目，青塘模式创造出“五个一”工程标准：一套全域整治技术规范、一张土地利用现状图、一个智慧管理平台、一组产业导入模板、一套文化保护方案。该项目实施后，青塘镇耕地保有量增加55.79公顷，通过矿山生态修复补充林地约115.07公顷，通过拆旧复垦项目补充林地约1.83公顷，耕地质量提升，富硒产业、乡村旅游等带动农民增收，走出了一条“土地整治—生态修复—产业升级—文化振兴”的良性循环道路。\n\n站在新的起点，江西省地质局有色地质大队正以青塘项目为蓝本，持续发挥地质技术优势，在乡村全面振兴的广阔天地中书写新的地质传奇。这幅“沃野千顷富一方，红绿交融美青塘”的壮美画卷，正成为新时代中国乡村全面振兴的生动注脚。"
  },
  "S03": {
   "heading": "dz.jiangxi.gov.cn_江西省地质局：大江网：赣州工勘集团：“地质+”模式 打造乡村振兴新典范",
   "date": "2025-07-25",
   "source": "dz.jiangxi.gov.cn_江西省地质局",
   "url": "https://dz.jiangxi.gov.cn/jxsdzj/mtgz/content/content_1948653615010627584.html",
   "body": "2025-07-24  来源：大江网\n\n大江网 /大江新闻客户端讯 陈柳、记者廖云萍报道：近期，自然资源部公布第三批全域土地综合整治典型案例，由核工业赣州工程勘察设计集团有限公司实施的宁都县青塘镇全域土地综合整治项目成功入选。这是继“寻乌模式”后，江西地质系统在国土空间综合整治领域又一标杆性成果。项目通过“生态修复+产业导入+文化传承”三位一体创新模式，为全国乡村振兴提供了可复制的“江西方案”。\n\n整治后的青塘镇河背村\n\n技术创新引领：科学规划绘制整治蓝图\n\n核工业赣州工程勘察设计集团有限公司项目团队运用 ARCGIS技术构建一体化监测体系，通过叠加分析法完成土地适宜性评价与耕地适宜性分析。数据显示，项目区772.98公顷土地经科学规划后，实现旱改水198.03亩，新建高标准农田8313.21亩，土地节约集约利用率极大提升。特别值得关注的是，通过“林地进出平衡”创新机制，激活镇域55.7898公顷，补充林地1753.42亩，形成“山水林田湖草”系统治理的示范样板。\n\n在建设用地整理方面，项目团队统筹废弃采矿用地治理与城乡建设用地增减挂钩政策，腾挪出 122.9221公顷建设用地指标。这些指标优先用于保障青塘镇区教育、医疗等民生设施建设，让学生教育环境彻底改变，老年人也老有所乐。\n\n蓝莓种植大棚\n\n产业生态双赢：激活乡村振兴新动能\n\n项目组深度挖掘青塘镇富硒土壤资源优势，通过土地整治新建富硒蔬菜大棚 21.41公顷，打造”宁都富硒蔬菜”区域公用品牌。据统计，项目实施后青塘镇富硒蔬菜带动1200余户农户实现增收。更值得称道的是，核工业赣州工程勘察设计集团有限公司创新“地质+农业”技术服务模式，为种植户提供土壤改良方案，提升土地利用率，使富硒蔬菜硒含量稳定在最佳区间，真正实现“种出好产品，卖出好价钱”。此外，生态效益同样显著，清塘河15公里水环境治理工程使水质有效提升。\n\n毛泽东同志旧居\n\n文化传承赋能：红绿融合打造特色 IP\n\n在历史文化保护领域，项目团队创新实施 “活化利用”，修复毛泽东同志旧居、青塘会议旧址等红色遗址，打造占地127.91亩的河背少共苏区中央局文化遗址公园。通过“矿山研学+红色教育”融合模式，有效带动周边民宿、餐饮业并新增就业岗位。\n\n传统建筑活化利用更具匠心， 7处赣南特色宗祠家庙经系统性修缮，转型为非遗工坊、乡村书院，其中青塘宗祠家庙文化园获评“江西省优秀传统文化传承基地”。这些文化地标与富硒产业基地、生态景观带形成“红绿古”三色旅游线路，让历史文化在传承中焕发新生，丰富群众精神文化生活。\n\n高标准农田无人机作业\n\n标杆示范效应：绘就全域整治新图景\n\n作为自然资源部典型案例的青塘项目，青塘模式创造出 “五个一”工程标准：一套全域整治技术规范、一张土地利用现状图、一个智慧管理平台、一组产业导入模板、一套文化保护方案。该项目实施后，青塘镇耕地保有量增加55.79公顷，补充林地115.07公顷，耕地质量提升，富硒产业、乡村旅游等带动农民增收，走出了一条”土地整治-生态修复-产业升级-文化振兴”的良性循环道路。站在新的起点，核工业赣州工程勘察设计集团有限公司正以青塘项目为蓝本，将持续发挥地质技术优势，在乡村振兴的广阔天地中书写新的地质传奇，在赣鄱大地推广“青塘经验”。"
  },
  "S04": {
   "heading": "ganzhou.gov.cn_赣州市人民政府：宁都：生态修复 变废为宝",
   "date": "2026-05-27",
   "source": "ganzhou.gov.cn_赣州市人民政府",
   "url": "https://www.ganzhou.gov.cn/gzszf/c100022/202605/fba4310d68fb433ab0f2dce6d0d1f293.shtml",
   "body": "宁都：生态修复 变废为宝\n\n访问量： 发布时间： 2026-05-27 10:57 来源： 赣南日报 字号： 大 中 小\n\n【美丽中国行】\n\n近日，记者走进宁都县竹笮镇鹅婆村定昇采石场旧址，只见昔日渣土成堆、尘土飞扬的废弃矿山，如今披上绿毯，山脚下溪涧清澈见底。宁都在生态修复攻坚中，蝶变为绿水青山、良田沃土、幸福家园。\n\n“以前矿区晴天一身灰、雨天一身泥，爆破时烟尘滚滚，路过都要捂紧口鼻。关停后，废石堆到处都是，草木不生，扬尘常年不断。”小布镇廖家坑花岗岩矿区附近居民吴传寿谈起过去，感慨万千。\n\n生态之痛，必须根治。宁都县锚定生态优先、绿色发展目标，全面打响历史遗留废弃矿山生态修复攻坚战，坚持“宜林则林、宜耕则耕、宜草则草、宜景则景、宜建则建”原则，系统实施削坡降险、危岩清理、边坡加固、覆土改良、植被重建、水系连通、土地平整等工程，标本兼治破解矿山生态难题。\n\n“我们始终坚守生态底线，抓实矿山修复。”宁都县自然资源局相关负责人介绍道，一方面压实企业主体责任，督促生产矿山严格落实“边开采、边修复”，确保方案、计划、基金“三到位”；另一方面创新“生态修复 产业发展”模式，推广“以用定治”，吸引社会资本参与，健全长效监管，让矿山“常态绿、持续绿、长久绿”。\n\n修复不是简单复绿，而是生态、安全、产业的系统重塑。2025年，青塘镇将矿山修复与全域土地综合整治深度融合，探索“土地整治—生态修复—产业升级—文化振兴”路径，成功入选自然资源部典型案例。废弃渣堆变成平整良田，灌溉渠、机耕路直通田间，合作社连片种植优质水稻、富硒蔬菜，发展生态采摘、田园观光，昔日荒坡变身“聚宝盆”。\n\n“现在田平了、路通了、水清了，环境大变样，我们还能在家门口务工，一年增收2万多元，日子越过越踏实。” 青塘镇村民李女士站在田埂上，笑容灿烂。\n\n数据见证成效。自2022年以来，宁都累计投入7000余万元，完成53座历史遗留废弃矿山治理，修复面积180公顷。2025年，全县持证矿山计提生态修复基金256.11万元，完成修复面积437亩，实现开采与修复同步推进、良性循环。\n\n从“荒山废矿”到绿水青山，从“生态伤疤”到良田家园。宁都矿山修复，修复的是生态底色，筑牢的是安全防线，激活的是土地价值，提升的是民生福祉。（记者黄松林 通讯员郭素敏 胡秀宁）"
  },
  "S05": {
   "heading": "szb.newskj.com_赣南日报：赣南日报数字报：宁都青塘镇全域土地综合整治典型案例报道",
   "date": "2025-07-27",
   "source": "szb.newskj.com_赣南日报",
   "url": "http://szb.newskj.com/resfile/2025-07-27/03/gnrb-20250727-003.pdf",
   "body": "本报地址 ：赣州市八一四大道 60 号 发行热线 ：8121878 8121828 本报年订价 ：420 元 印刷单位 ：赣南日报印务中心综合2025 年 7 月 27 日 星期日编审：傅心明 责编:郭远 实习生赖麒妍 美编 ：刘平中 校对：刘敏36 月 25 日，自然资源部公布第三批全域 土 地 综 合 整 治 典 型 案 例，由 江 西 省 地质局有色地质大队实施的宁都县青塘镇全域土地综合整治项目成功入选 。这是继“ 寻 乌 模 式”后 ，江 西 地 质 系 统 在 国 土空间综合整治领域取得的又一标杆性成果 。 该 项 目 通 过“ 生 态 修 复+ 产 业 导 入+文化传承 ”三位一体创新模式 ，为全国推进 乡 村 全 面 振 兴 提 供 了 可 复 制 的“ 江 西方案 ” 。\n\n技术创新引领 ：科学规划绘制整治蓝图该 大 队 核 工 业 赣 州 工 程 勘 察 设 计 集团 有 限 公 司 项目 团 队 运 用ARCGIS 技 术构 建 一 体 化 监测 体 系，通 过 叠 加 分 析 法完 成 土 地 适 宜 性 评 价 与 耕 地 适 宜 性 分析 。 数 据 显 示，项 目 区 772.98 公 顷 土 地经 科 学 规 划 后，土 地 节 约 集 约利 用 率 得到 极 大 提 升。 特 别 值得 关 注 的 是，通 过“ 林 地 进 出 平 衡 ”创 新 机 制 ，激 活 镇 域55.7898 公 顷，形 成“ 山 水 林 田 湖 草”系 统治理的示范样板 。\n\n在建设用地整治方面 ，项目团队统筹废弃采矿用地治理与城乡建设用地增减挂钩政策 ，腾挪出 122.9221 公顷建设用地指标。这些指标优先用于保障青塘镇教育 、医疗等民生设施建设。\n\n产业生态双赢 ：激活乡村全面振兴新动能项目组深度挖掘青塘镇富硒土壤资源优 势，通 过 土 地 整 治 新 建 富 硒 蔬 菜 大 棚21.41 公顷，打造“宁都富硒蔬菜 ”区域公用品牌 。据统计 ，项目实施后青塘镇富硒蔬菜带动 1200 余户农户实现增收 。更值得一提的是 ，核工业赣州工程勘察设计集团有 限 公 司 创 新“ 地 质+ 农 业”技 术 服 务 模式，为种植户提供土壤改良方案 ，提升土地利用率 ，使富硒蔬菜硒含量稳定在最佳区间，真正实现“种出好产品 ，卖出好价钱 ” 。此外 ，该项目在生态方面也取得较好的效益，青塘河 15 公里水环境治理工程使水质有效提升。\n\n文化传承赋能 ：红绿融合打造特色 IP在历史文化保护领域 ，项目团队创新实施活化利用 ，修复青塘会议旧址等红色遗址 ，打造河背少共苏区中央局文化遗址公园 。通过“矿山研学 +红色教育 ”融合模式，有效带动周边民宿 、餐饮业发展 ，新增了就业岗位。\n\n传统建筑活化利用更具匠心 ，7 处赣南特色宗祠经项目团队系统性修缮 ，转型为非遗工坊 、乡村书院等 ，其中青塘宗祠文化 园 获 评“ 江 西 省 优 秀 传 统 文 化 传 承 基地” 。这些文化地标与富硒产业基地 、生态景观带形成“红绿古 ”三色旅游线路 ，让历史文化在传承中焕发新生 ，丰富了群众的精神文化生活 。\n\n标杆示范效应 ：绘就全域整治新图景青塘项目创造出“五个一 ”工程标准 ：一套全域整治技术规范 、一张土地利用现状图、一个智慧管理平台 、一组产业导入模板、一套文化保护方案 。该项目实施后 ，青塘镇耕地保有量增加 55.79 公顷，补充林地115.07 公顷，耕地质量提升，富硒产业、乡村旅游等带动农民增收 ，走出了一条“土地整治—生态修复—产业升级—文化振兴 ”的良性循环道路。\n\n站 在 新 的 起 点，江 西 省 地 质 局 有 色地 质 大 队 正 以 青 塘 项 目 为 蓝 本，持 续 发挥 地 质 技 术 优 势，在 乡 村 全 面 振 兴 的 广阔 天 地 中 书 写 新 的 地 质 传 奇。 这 幅“ 沃野千顷富一方 ，红绿交融美青塘 ”的壮美画 卷，正 成 为 新 时 代 乡 村 全 面 振 兴 的 生动注脚 。七月二十二日，在宁都县石上镇石上村，党员志愿者服务队深入田间地头，帮助当地农户采收、装运莲蓬。\n\n近年来，宁都县持续完善党员志愿服务机制，在春耕备耕、产业培育、丰产丰收、产销对接等环节主动靠前服务，以实际行动打通服务群众﹃最后一公里﹄ 。\n\n钟院兰胡秀宁摄本报讯 （陈莉 严亦乔）“一 顿 违规饭局毁掉前程 ，一次礼品收受跌破底线……”近日，在南康区警示教育大会上 ，由该区纪委监委拍摄制作的警示教育片《利剑常悬斩风腐》 ，用身边人的案例为全区干部职工敲响了警钟 。\n\n南康区纪委监委聚焦“担当作为力度不足” “执纪为民有待加强 ”两大问题 ，以警示教育 、制度约束 、执纪监督推动整改走深走实，用作风建设实效筑牢全面从严治党根基，护航高质量发展。\n\n为让纪律规矩入脑入心 ，南康区纪委监委精选本地案例编撰 《违反中央八项规定及其实施细则精神典型案例》 ，将“身边事 ”变成“活教材 ” ，让党员 干 部 在 对 照 反 思 中 得 到 警 醒。 同时，在全区“强党性 知敬畏”作风建设课堂上 ，用近年来全区查处的违反中央 八 项 规 定 精 神 相 关 案 例，以“ 讲 案例 ”的 反 面 警 示，引 导 党 员 干 部 知 敬畏、存戒惧、守底线。在强化思想震慑的同时，注重以“制度刚性 +技术赋能 ”筑牢防线 ，全面推行“赣餐码 ”用餐制度，通过公务用餐全程留痕可查 ，从源头遏制“隐形违规吃喝 ” 。\n\n与此同时，该区纪委监委将警示教育活动融入日常 、做在经常。 “南埜清风廉政宣讲团 ”走遍全区乡镇（单位） ，开展 51 场廉政党课 ，6 个蹲点监督组揪出 5 条问题线索 ，重要节点通报曝光 14 起 15 人，“教育+监督”的双轮驱动让纪律约束如影随形。\n\n针对群众身边不正之风和殡葬领域乱象 ，该区纪委监委以“清单化管理、精准化督查”推进整改，通过制定 3 项整治清单明确任务时限 ，督促各职能单位履职 。\n\n截至 6 月底，通过督查已发现问题 313 个，其中 29 个待进一步核实 ，28 个已直接转为问题线索 。不定期集中约谈专项整治推进不力的单位负责人 ，层层压实责任 ，推动“蝇贪蚁腐” “歪风邪气”专项整治见实效。\n\n本报讯 （廖美君 刘子逸）如何从“头雁”领飞迈向“群雁”齐飞？日前，信丰县小河镇以“五强”书记培训计划给出了有力答案 。该镇通过创新“书记讲给书记听、书记带着书记干 ”的互动模式，搭建经验共享、互学互促的平台，持续为村级党组织带头人“充电赋能” 。\n\n小河镇锚定“五强”标准，即政治素质强、担当作为强、发展本领强 、治理能力强 、作风纪律强 ，健全“选育管用”全链条机制 ，深入开展“五强”书记培训计划 ，以“头雁”领航带动“群雁”齐飞。截至目前 ，该镇“五强”书记培训计划已成功举办 6 期，覆盖全镇 18 个行政村党组织书记及后备力量。\n\n据悉，培训突破传统课堂局限 ，融合专题讲座 、实地观摩 、案例剖析 、互动研讨等多种形式 ，推动村级党组织书记在学思践悟中提能力 、在比学赶超中强担当。培训计划紧扣党建引领乡村治理主题 ，围绕党建引领“三化 ”治理强基为民 、村集体经济发展 、产业发展、民生实事落实等重点工作 ，邀请优秀村级党组织书记现身说法 ，分享破解难题的实战经验 ，形成“典型引路、全域提升”的生动局面。\n\n党 建 引 领 风 帆 劲，强 基 固 本 正 当 时。 “五 强”书记 培 训 计 划 的 深 入 实 施，激 发 了 小 河 镇 村 级“ 领 头雁”队伍的活力 。村级党组织书记在产业发展主战场、乡村治理第一线 、民生服务最前沿积极作为 ，聚焦 发 展 壮 大 村 集 体 经 济，找 路 子、跑 项 目、看 产 业，立 足 本 地 资 源 与 发 展 需 求，新 引 进 紫 山 药、五 指 毛桃、梅 花 鹿 等 特 色 产 业，全 镇 村 级 集 体 经 济 实 现 经营 性 收 入 780 余 万 元，各 村 经 营 性 收 入 均 达20 万元；在基层治理方面 ，强化培训赋能与实践锻炼 ，切实解决了群众反映强烈的急难愁盼问题 63 件，为乡村发展注入新动能 。\n\n信丰县小河镇：开 展“ 五 强”书 记 培 训激 活“ 头 雁”领 飞 动 能本报讯 （特约记者刘林美 通讯员谢小燕 廖小燕）近日 ，上犹县东山镇彭洞村世外桃源基地热闹非凡，沉甸甸的鹰嘴桃挂满枝头 ，吸引了众多游客前来体验采摘乐趣。\n\n彭 洞 村 立 足 本 村 资 源 优 势，大 力 发 展 鹰 嘴 桃 产业。目前，鹰嘴桃种植面积达 60 余亩，800 余株桃树年产无公害鹰嘴桃 4 万余公斤 ，产品主要销往浙江 、广东等地。基地采用“合作社 +基地+农户”的发展模式 ，农户不仅能以土地 、资金、劳力等方式入股 ，还能通过在基地务工、参与销售来增加收入 ，既提高了土地利用效率，又有效解决了就业问题 。目前，鹰嘴桃产业助力村集体经济收入逾 20 万元，带动 12 户 50 余人就业 ，每户年均收入增长 3000 余元，成为带动村民增收致富的主要产业之一。\n\n近年来 ，彭洞村大力做好“农旅融合 ”文章 ，把鹰嘴桃产业与乡村休闲旅游等新业态有机结合起来 ，打造乡村旅游景点 。每年桃花盛开时节 ，漫山桃花如云似霞，吸引各地游客前来游园赏花 、摄影绘画 ，定格浪漫春光 ；丰收季 ，饱满多汁的鹰嘴桃压弯枝头 ，趣味采摘让“枝头鲜 ”化为“舌尖甜 ” ，游客在采摘中尽享丰收喜悦。\n\n小 小 的 鹰 嘴 桃，已 成 为 撬 动 村 集 体 经 济 增 收 和村民致富的“金钥匙 ” 。彭洞村党支部书记 、村委会主任刘征斌表示 ，将持续加大对鹰嘴桃产业的投入 ，着力提升果实品质与产量 。同时 ，不断完善旅游配套设施 ，丰富休闲体验项目 ，推动鹰嘴桃产业蓬勃发展，带动更多村民增收致富 ，为乡村全面振兴注入强劲动力 。\n\n上犹县东山镇：大力发展鹰嘴桃产业夜幕降临 ，石城县珠坑村欧里小组的乡间小道上，盏盏路灯次第亮起，柔和的光芒驱散了黑暗。田地里归来的群众结伴而行，一路欢声笑语。这温暖的场景，源于不久前珠坑乡开展的一场贴近民心的走访。\n\n“这条路的路灯坏了，孩子们平日里下晚自习回来太不安全了！ ”近日，在珠坑乡网格员和党员干部开展的“进百家门”活动中，欧里小组的村民们道出了心头的牵挂。乡干部们沿着村民所说的路段实地查看，只见多盏路灯或歪斜破损，或彻底“罢工” ，部分路段伸手不见五指。座谈会上，看着村民们焦急的眼神，乡干部们心里很不是滋味，当即用“如我+”的思维换位思考： “要是自家孩子走在这样的路上，怎能安心？ ”民有所呼 ，必有所应 。走访结束后 ，乡干部们第一时间将问题反馈给村 “两委” ，村“两委”迅速响应，当即决定动用村集体资金 ，对该区域路灯进行全面修缮 。\n\n从联系施工队 、采购材料到组织安装 ，村干部全程跟进 ，施工队员们更是加班加点赶进度。短短 3 天时间，6 盏崭新的路灯就安装好了，5 盏故障路灯经修复后 ，重新焕发了光彩。\n\n当第一缕灯光亮起的那一刻 ，不少村民特意走到路边 ，望着亮堂堂的路面 ，脸上露出了欣慰的笑容 。 “现在晚上路灯亮起来了，孩子放学，家长也就放心多了 ，干部们真是把我们的事放在心上 ！ ”村民叶大爷的话道出了大家的心声。\n\n这一盏盏路灯 ，是珠坑乡“如我 +”行动的生动注脚 ——把群众的事当成自家的事 ，用真心换真情 ；更是基层干部为民办实事的鲜活见证 ，让“为民服务 ”的光辉，实实在在照进了千家万户。\n\n本报讯 （郭琼涛）为进一步严密防范和严厉打击非法集资活动 ，切实提升社会公众对非法集资的防范意识和识别能力，崇义县人民检察院近期多举措开展防范非法金融活动宣传。\n\n今年6 月是第13 个全国防范非法集资集中宣传月 ，崇义县人民检察院通过院内大厅电子屏，轮播江西省地方金融监督管理局发布的“守住钱袋子·护好幸福家 ”主题海报及宣传视频，切实提高公众对非法金融活动危害的认识 ，增强公众的防范意识；7 月 15 日，该院组织“送法进社区活动 ” ，重点开展防范非法金融活动宣传 ，向居民讲解常见非法集资套路 ，共发放宣传资料200 余份；6 月至 7 月，该院多次开展“送法下乡”活动，发挥村委会“人熟、地熟、情况熟”的优势，由村委会协助分发宣传手册 ，将防范非法金融活动宣传深入基层。\n\n本报讯 （陈莉 王圣岚）“刚到城区找工作时，住宿成本高、手续繁琐，让我很焦虑。后来偶然了解到南康有青年人才驿站，提交申请后很快就入住了 。不仅省下一大笔住宿费 ，还让我有更多精力放在工作上，真是太暖心了 。 ”近日，在南康区财政局见习的青年黄杰感慨地说道。黄杰入住人才驿站的经历，是南康区青年人才驿站服务青年求职者的生动写照 。\n\n南康区以作风建设为契机，精准锚定青年住房需求痛点，通过政企协同发力，创新打造标准化、普惠型青年人才驿站，为前来求职的青年才俊搭建起温暖的安居港湾，也为城市发展注入了强劲的人才动能。\n\n走进位于南康区镜坝镇的青年人才驿站，房间内书桌 、空调等生活设施一应俱全，卫浴和厨房设备完备，真正实现“拎包入住” 。据了解，该区于今年 4 月底正式启动青年人才驿站项目，通过政企联动，按照“8 个一”标准化建设标准，精心打造居住空间，筹集 216 张免费床位 ，将冰冷的“一张床”升级为充满温度的“一个家” 。政策规定，全日制大专及以上学历的在校生或毕业 3 年内非南康户籍、无本地住房及有稳定就业记录的青年 ，均可通过“赣州住保”微信小程序申请，最长可享受 12 个月免租金住宿，仅需承担水电费用。\n\n“为保障青年人才‘拎包入住’ ，我们投入 175 万元采购设备，并配备专业物业、前台和保洁团队，提供 24 小时贴心服务。 ”南康区住房保障安置服务中心住房保障服务股负责人龙清文介绍。截至目前，已有340余名人才通过“赣州住保”微信小程序递交申请，48 名青年已顺利入住驿站。“在超 1100 万毕业生求职的大背景下，住宿成为青年跨城求职的首要难题 。\n\n南康打造的青年人才驿站 ，不仅是求职青年的暖心第一站，更是引才聚才的‘青春会客厅’和‘政策直通车’ 。 ”共青团南康区委副书记黄为表示 ，该区在严格审核确保资源精准投放的同时 ，积极通过驿站宣传城市发展机遇与惠才政策 ，展现求贤若渴的诚意，吸引更多青年认识南康 、扎根南康，为城市高质量发展注入澎湃青春动能。\n\n南康区为求职者打造温馨港湾本报讯 （刘秀珍）日前，由赣州市总工会主办、赣州蓉江新区总工会承办的“工会暖心·相伴成长”2025 年赣州市新就业形态劳动者户外拓展亲子活动在赣州蓉江新区“城里有座山”户外基地举行，44 个新就业形态劳动者家庭代表共计 140 余人参加活动。\n\n活动设计了动静结合、寓教于乐的特色项目。上午，欢快的破冰拓展游戏拉开活动序幕后，家长和孩子们通过游戏互动快速融入集体。随后，大家踏上“秘野仙踪”户外徒步之旅，共同漫步乡野 。下午，在指导老师的带领下 ，家长和孩子们分别进行了“敦煌壁画”主题手工创作和“文创冰箱贴 ”制作。在之后的“冰染创作 ”环节 ，孩子们拿起滴管，将鲜艳的颜料晕染在白布上 ，创作出各具特色的冰染作品。据了解，此次户外拓展亲子活动是赣州市总工会经过深入调研，响应新业态劳动者的需求和建议，创新举办的特色关爱活动。\n\n本 报 讯 （叶 娟）为 深 入 推 进 乡 村 全面 振 兴 战 略，培 育 农 村 电 商 新 业 态，近日，于都县铁山垅镇组织开展了电商技能 专 题 培 训，通 过“ 技 能 提 升+ 产 业 融合+人才孵化 ”培育体系 ，助力本地特色产业转型升级 ，为乡村全面振兴注入数字化新活力 。\n\n据了解 ，本次培训聚焦直播带货 、短视频运营 、网店管理等实用技能 ，讲师通过“理论+实操”相结合的方式 ，教学员掌握电商全流程操作。\n\n铁山垅镇盛产富硒大米 、富硒脐橙等农特产品 ，但以往受限于销售渠道单一 ，市场竞争力不足 。此次培训重点结合本地产业优势 ，指导学员打造品牌 IP、设计包装、挖掘产品文化内涵 。铁山垅镇还计划 与 各 村 合 作 社 联 合 搭 建 线 上 展 销 平台，推动特色农产品触网销售 ，实现“小农户对接大市场” 。\n\n为 进 一 步 巩 固 培 训 成 果，铁 山 垅 镇同 步 实 施“ 电 商 人 才 孵 化 计 划” 。该 镇在电商培训中筛选优秀学员 ，纳入镇级电 商 创 业 扶 持 名 单，提 供 技 术 指 导、创业 扶 持 等 政 策 支 持。 其 中 一 名 李 姓 返乡 大 学 生 在 培 训 后 组 建 了5 人 直 播 团队 ，不 仅 销 售 自 家 产 品，还 帮 助 周 边 农户 代 销。 该 镇 党 委 主 要 负 责 人 表 示：“ 电 商 培 训 不 仅 教 会 技 术，更 孵 化 了 推进 乡 村 全 面 振 兴 的‘ 火 种’ 。未 来 将 定期 开 设 进 阶 课 程，打 造 一 支‘ 带 不 走 的电商队伍 ’ 。 ”于都县铁山垅镇：电商培训赋能乡村全面振兴南康区纪委监委：以作风建设护航高质量发展“地质+”模式助力乡村全面振兴——宁都县青塘镇全域土地综合整治项目入选自然资源部典型案例纪事□陈柳崇义县人民检察院：开展防范非法金融活动宣传我 市 新 就 业 形 态 劳 动 者家 庭 乐 享 特 色 关 爱 活 动路灯照民心 走访暖万家——石城县珠坑乡推进为民办实事工作纪事□温东明"
  }
 },
 "36": {
  "S01": {
   "heading": "hbdj.gov.cn_杜集区人民政府：关于《安徽省淮北市杜集区朔里镇全域土地综合整治工程实施方案》的公示",
   "date": "2026-02-14",
   "source": "hbdj.gov.cn_杜集区人民政府",
   "url": "https://www.hbdj.gov.cn/zwgk/grassroots/188/64938024.html",
   "body": "003087906/202602-00013\n\n详细规划（城镇开发边界内）\n\n杜集区朔里镇\n\n关于《安徽省淮北市杜集区朔里镇全域土地综合整治工程实施方案》的公示公告\n\n2026-02-14 08:41 作者：朔里镇政务公开 来源：杜集区朔里镇 文字大小：[ 大 中 小 ] 背景色：\n\n各位村民朋友：\n\n为深入推进乡村振兴战略，优化我镇国土空间格局，提升土地资源利用效率，改善人居环境与产业发展条件，根据《自然资源部关于学习运用“千万工程”经验深入推进全域土地综合整治工作的意见》(自然资发〔2024〕149号)文件要求，我镇编制了《安徽省淮北市杜集区朔里镇全域土地综合整治工程实施方案》（以下简称《方案》）。现将《方案》核心内容公示公告如下，广泛征求大家意见，欢迎积极参与并反馈。\n\n一、项目基本情况\n\n项目范围：整治区域涉及朔南社区、朔北社区、矬楼村、坡里村、段庄村、罗里村、官庄村、沈集村、徐楼村、葛塘村，共计2个社区和8个行政村，整治区域面积为4968.6418公顷。\n\n二、总体目标与原则\n\n总体目标：按照“山水林田湖草”系统治理的理念，以破解耕地保护碎片化、建设用地布局无序化、生态环境质量低弱为着眼点，以打造“良田集中连片、村庄布局优化、产业集聚发展、生态健康优美”的土地保护利用新格局为整治目标，通过农用地整治、建设用地整理、生态保护修复、基础设施提升、产业导入等项目建设，整合朔里镇交通区位、农业与生态资源优势，构建“产业联动”发展体系。\n\n实施原则：坚持生态优先、规划引领、尊重民意、因地制宜，做到“全域规划、全域整治、全域运营、全域共富”。\n\n三、主要整治内容与建设项目\n\n农用地整治：统筹推进低效农用地整理、农田基础设施建设、现状耕地提质改造等，传承传统农耕文化，增加耕地数量，提高耕地质量，改善农田生态。规划新建高标准农田191.2094公顷，新增耕地30.2469公顷。\n\n建设用地整理：统筹农民住宅建设、产业发展、公共服务，基础设施等各类建设用地，有序开展农村宅基地及其他低效闲置建设用地整理，优化农村建设用地布局结构，提升农村建设用地使用效益和集约化水平，支持农村新产业新业态融合发展用地。通过实施建设用地整理子项目，建设用地面积减少25.2304公顷。\n\n生态保护修复：实施期内，针对河道排水不畅，局部重点堤段不达标、局部险工险段、桥涵阻水等问题，计划实施河道治理项目1项。\n\n产业融合发展：优化提升农业产业效应，持续推进产业经济发展。建设现代农业产业园、粮食收储加工中心项目、杜集区农产品研发基地、农产品深加工项目，通过产业融合发展，进一步打通土地利用空间优化至集体增收、村民致富的乡村振兴新道路。\n\n基础设施与人居环境提升：通过对重点发展乡村的人居环境进行综合治理，提升项目区域村庄整体风貌。拟在坡里村、矬楼村、沈集村、葛塘村开展人居环境整治提升工程。并对葛塘、坡里及罗里村电力基础设施进行提升，改善居民生活品质。\n\n四、投资与实施周期\n\n总投资：项目总投资133065.25万元，资金通过财政资金、政策性金融、社会资本等多元渠道筹措。\n\n实施期限：2026年—2029年，分阶段推进整治工程与产业运营。\n\n五、权属调整与利益保障\n\n涉及土地所有权、集体建设用地使用权、宅基地使用权、土地承包经营权调整，增减挂钩拆旧复垦后的农用地所有权仍归原村集体经济组织，保障各村共享发展收益。\n\n六、意见反馈方式\n\n（一）公示期限\n\n2026年2月14日-2026年2月28日（共15个自然日）\n\n（二）意见收集渠道\n\n咨询电话：05614057622（工作日8:30-17:30）\n\n反馈邮箱：441770171@qq.com\n\n公示材料查阅：可到镇政府公示栏、各村公示点查看《方案》全文。\n\n请各位村民朋友认真了解《方案》内容，积极提出宝贵意见，共同推动朔里镇高质量发展。\n\n淮北市朔里镇人民政府\n\n2026年2月14日"
  },
  "S03": {
   "heading": "sthjt.ah.gov.cn_安徽省生态环境厅：淮北市杜集区推进全域土地综合整治绘就和美乡村新画卷",
   "date": "2025-07-31",
   "source": "sthjt.ah.gov.cn_安徽省生态环境厅",
   "url": "https://sthjt.ah.gov.cn/hbzx/gzdt/sxdt/122999711.html",
   "body": "淮北市杜集区推进全域土地综合整治绘就和美乡村新画卷\n\n发布日期：2025-07-31 15:27 信息来源：淮北市局办公室 浏览量： 【字体： 大 中 小 】\n\n近年来，淮北市杜集区将推进全域土地综合整治作为推动乡村振兴的重要抓手，着力绘就和美乡村新画卷。\n\n直面沉疴破难题，多元投入“整”出发展新空间。以杜集区朔里镇葛塘村入选国家全域土地综合整治试点为契机，聚焦耕地碎片化、生态退化等历史顽疾，开启全域土地综合整治攻坚战，仅葛塘村就累计投入8774万元专项资金，实施土地整治、生态修复等四大类8个子项目。探索“政府+银行+社会+指标交易”多元筹资模式，仅在朔里镇就整合财政资金3500余万元完善基础设施。争取专项债800万元推进雨污分流、坑塘清淤等整治工程。创新指标交易反哺机制，将2000万元耕地占补指标交易收益用于黄楼自然村道路水系建设。引入社会资本2500万元开发朔西湖景区，形成水面8000亩、总面积14500亩的生态景观区。\n\n分区嵌入优布局，产业联动“兴”起致富新动能。科学划分农业、工业、文旅三大功能板块，推动土地集约高效利用。农业板块积极打造高标准农田，做优“朔湖春”稻米、“乾升”金丝黄菊、“尹老大”葡萄、“相王”牌石磨香油等特色农业品牌，带动农民增收；工业板块腾退低效建设用地380亩，吸引新能源、精密铸造等领域企业入驻，村集体经济年均增收超40万元；文旅板块围绕朔西湖打造民宿、露营地等业态，年接待游客达30万人次，旅游收入突破700万元。\n\n生态优先护底色，系统治理“焕”发绿色新活力。坚持生态修复与保护并重，结合地形地貌，将采煤沉陷区改造为耕地、林地、草地，建成100亩“碳汇林”基地；探索煤基固废生态回填技术，对地表沉陷区域采用柔性路面设计减缓地面沉降。全面关停朔西湖边养殖污染源，实施湖底清淤、河湖连通等工程，形成水系贯通、堤岛结合、湿地浅滩的自然生态景观。目前湿地内野生动植物资源丰富，栖息候鸟20余种，每年吸引大雁、白鹤等鸟类迁徙，成为兼具生态涵养与休闲功能的“城市绿肺”，生动诠释了“绿水青山就是金山银山”理念。\n\n【打印此页】 【关闭窗口】"
  }
 },
 "37": {
  "S01": {
   "heading": "ahhuoshan.gov.cn_霍山县人民政府：推进土地综合整治 助力乡村全面振兴",
   "date": "2025-05-14",
   "source": "ahhuoshan.gov.cn_霍山县人民政府",
   "url": "https://www.ahhuoshan.gov.cn/zwzx/jrhs/37889563.html",
   "body": "推进土地综合整治 助力乡村全面振兴\n\n浏览次数： 发表时间：2025-05-14 15:40 信息来源：霍山县融媒体中心 我要纠错 字体： [ 大 中 小 ]\n\n自开展全域土地综合整治工作以来，但家庙镇以科学规划为引领、以产业升级为抓手、以生态改善为底色，全面优化农村国土空间布局，改善农村生态环境与农民生产生活条件，推动农村一二三产融合发展，助力乡村全面振兴。\n\n走进但家庙镇但家庙村，昔日的荒坡地，如今变成了丰收在望的油菜和小麦田。全域土地综合整治带来的改变不仅如此，通过“小田并大田”，机械化种植得以高效推进，当地的道路、沟渠、池塘等基础设施同步提档升级。\n\n但家庙镇但家庙村党总支书记、村委会主任汪钰：“通过项目实施，新增耕地400 亩，主要用于种植油菜、玉米、水稻等，不仅提高了土地的利用率，也为村集体和村民带来了实实在在的经济效益。同时，西路庐剧广场、但家庙人行桥等项目已经进入了冲刺阶段，这些民生项目的建成，将进一步完善村里的基础设施建设，提升村民的生活品质。”\n\n作为国家级全域土地综合整治试点项目之一，自2023年10月获省厅备案批复后，但家庙镇全域土地综合整治试点项目便稳步推进。该项目整治区域规模3.06万亩，涉及但家庙、花石嘴2个行政村，总投资1.41亿元。实施内容包括农用地整治、建设用地整治、生态保护修复、历史文化保护和产业引入五大板块。\n\n通过系统性整治，一方面，耕地集聚规模效应日益凸显，为农业发展和粮食保供打下坚实基础；另一方面，土地效益得到提高，生态环境质量显著改善。项目完工后，将实现耕地净增加681亩，新增耕地率达6.85%。\n\n霍山县但家庙镇人大主席张毅：“整个项目计划于今年6 月底全面完工。项目的实施，有效地解决了农村长期存在的耕地碎片化、空间布局无序化、土地资源利用低效化、生态质量退化等问题，为我镇深化‘千万工程’、推动乡村振兴奠定了坚实的基础。”"
  },
  "S02": {
   "heading": "ahhuoshan.gov.cn_霍山县人民政府：霍山县人民政府办公室关于印发但家庙镇全域土地综合整治试点项目工作方案的通知",
   "date": "2023-12-29",
   "source": "ahhuoshan.gov.cn_霍山县人民政府",
   "url": "https://www.ahhuoshan.gov.cn/xxgk/zfgb/37214518.html",
   "body": "霍山县人民政府办公室关于印发但家庙镇全域土地综合整治试点项目协调联动工作机制的通知\n\n浏览次数： 发表时间：2023-12-29 09:08 作者：万幸运 信息来源：霍山县政府办 我要纠错 字体： [ 大 中 小 ]\n\n霍政办〔 2023 〕 20 号\n\n霍山县人民政府办公室\n\n关于 印发 但家庙镇全域土地综合整治试点\n\n项目协调联动工作机制的通知\n\n县政府有关部门、但家庙镇政府：\n\n现将《但家庙镇全域土地综合整治试点项目协调联动工作机制》印发给你们，请贯彻执行 。\n\n2023 年 10 月 9 日\n\n但家庙镇全域土地综合整治试点\n\n项目协调联动工作机制\n\n为 进一步细化但家庙镇全域土地综合整治试点项目工作任务，压紧压实 工作 责任， 坚持系统思维， 确保 实现布局优化、 宜居宜业 、绿色发展 整体目标，特制定项目协调联动机制。\n\n一、建立工作专班 推进 机制。 在但家庙镇全域土地综合整治试点工作领导组领导下，建立工作专班，专责专职推进 但家庙镇全域土地综合整治试点 工作。工作专班实行双组长制，由但家庙镇党委、政府主要负责同志担任双组长，负责项目规划、设计、建设、运营等全流程服务、全生命周期的协调推进。\n\n二 、建立工作 专班 落实机制。 工作专班实行组长负责制，由专班组长 牵头协调推动相关事项 落地。 特别是对照国家和省级 全域土地综合整治 试点任务要求，坚持一体化设计、一体化打造，确保具体任务符合整体性的规划； 科学制定 各 单位 参与的 “ 路线图 ”“ 时间表 ” “ 责任制 ”， 协调 督促各 成员单位根据职责分工，解决相关事项，落实 领导组 交办的具体任务。\n\n（一）但家庙镇工作职责： 作为项目实施主体，具体组织项目实施，实行 “ 项目、责任、时限 ” 的清单化管理，统筹把握好每个子项目的 建设， 确保与实施方案严格一致 ，实现 整体项目有序推进。\n\n（ 二）县自然资源局 工 作 职 责： 作为 项目申报单位 ，统筹做好项目立项、验收、备案入库、指标交易等工作；指导但家庙镇做好项目区内村庄规划编制、新增耕地及增减挂项目的实施。\n\n（ 三） 乡村振兴公司工 作 职 责 ： 作为项目业主单位，负责项目资金筹集，协 助但家 庙 镇做好 工程项目招投标、验收、决算、资金兑付等，全程参与全域土地综合整治项目建设。\n\n（四 ）县直相关单位 工 作 职 责： 县农业农村 局 、水务 局 、交运 局 、林业 局 、生态环境 分局 等单位要全力配合但家庙镇进行项目建设，在项目资金安排上要对试点项目区重点倾斜 ， 并 积极争取上级专项资金支持。\n\n三 、建立 工作专班 协调机制。 由工作专班牵头， 各成员单位 根据 职责落实 具体任务 ，统筹协调解决 但家庙镇全域土地综合整治试点 工作中遇到的 难点、堵点 问题。工作 专班 实行扁平化运转 ， 确保情况第一时间掌握、任务第一时间落实、问题第一时间处理、结果第一时间反馈 ， 倒排工期、按照时间节点完成相应的任务，并落实好具体任务和整体规划的衔接。\n\n四 、建立 工作专班 调度 机制 。 专班组长 每周主持召开一次工作 例 会， 根据工作需要召集领导组成员单位参加， 部署和 协调 工作 推进， 梳理和解决 周期内 工作推进过程中存在的具体问题，听取各部门的意见和建议，并定期向领导组汇报工作。\n\n领导组原则上每月召开一次会议，对项目进展进行定期调度，听取工作汇报，全面了解工作进展情况，研究解决建设过程中存在的重大问题。如有特殊情况需要会商解决的，随时召开会议。\n\n五 、建立 工作专班 督查 机制 。 工作专班组长 不定期对 但家庙镇全域土地综合整治试点项目 相关单位工作实施 情况进行监督检查， 并印发简报。工作专班发现问题将以 交办单 形式下达整改通知 ， 成员单位要在 规定时限内 将问题整改到位、工作推进到位、责任落实到位 。\n\n霍山县人民政府办公室 2023 年 10 月 9 日印发"
  },
  "S05": {
   "heading": "zrzy.luan.gov.cn_六安市自然资源和规划局：霍山县自然资源局：多点发力赋能乡村振兴 绘就和美乡村新画卷",
   "date": "2025-11-20",
   "source": "zrzy.luan.gov.cn_六安市自然资源和规划局",
   "url": "https://zrzy.luan.gov.cn/zwzx/gzdt/xqdt/5456580.html",
   "body": "霍山县自然资源局：多点发力赋能乡村振兴 绘就和美乡村新画卷\n\n近年来，霍山县局紧紧围绕“保资源、优空间、促发展”职责，主动担当、精准发力，统筹推进规划引领管控、生态修复治理、土地要素保障等重点工作，以坚实有力要素支撑，为推进乡村振兴夯实基础、注入动能。\n\n一是聚焦规划引领，提档和美乡村建设水平。有序推进乡镇级国土空间规划编制工作，全县15个乡镇国土空间规划已全部通过县规委会审批，100个村庄规划已全部获得县政府批复，其中，3个乡镇国土空间规划、47个村庄规划已纳入“一张图”管理，为高质量建设和美乡村提供了科学的规划指引；细化乡村规划许可管理，2024年以来，共核发乡村建设规划许可证10件，有效提升乡村规划管理水平。\n\n二是聚焦生态振兴，擦亮和美乡村生态底色。坚决扛牢耕地保护政治责任，2024年以来，共组织实施耕地恢复1.49万亩，补充耕地2700亩，完成新方式补充耕地指标入库600亩，守住了全县耕地保有量和永久基本农田保护红线。持续提升生态修复治理质效，精心编制《霍山县国土空间生态修复规划（2021 - 2035年）》，系统构建生态保护修复总体布局；积极探索废弃矿山再利用新路径，推动大化坪镇华羚石料厂废弃矿山转型利用，转型利用面积23亩；强化在建生产矿山生态修复监管，督促立荣石料厂、圣人山矿完成年度修复任务。\n\n三是聚焦改革试点，增强乡村发展内生动力。统筹推进但家庙镇全域土地综合整治试点项目实施，35个子项目已全部完成建设，并完成县级初验，在全省试点项目中期评估中位列第2位，2025年6月成功入选自然资源部全域土地综合整治典型案例，塑造了霍山乡村振兴先行先试样板；制定《霍山县农村集体建设用地使用权入股（联营）实施办法》，有力破解乡村振兴、文旅融合等重点项目用地落地瓶颈。\n\n四是聚焦要素保障，夯实乡村全面振兴基础。聚焦乡村发展核心需求，用活用好乡村振兴用地保障政策，精准配置用地计划，全面强化乡村发展动能支撑，2024年以来，共组卷32个批次，获批建设用地1499.8亩，使用新增建设用地计划1209亩，办理设施农业用地上图入库25宗253.7亩，有效保障了霍山大别山滑雪旅游区项目、大别山Hi(嗨)谷旅游等乡村振兴文旅、产业和基础设施项目落地建设，共组卷6个批次95.35亩，保障了329户农民建房用地需求。（吴大庆）"
  }
 },
 "38": {
  "S01": {
   "heading": "nyncw.cq.gov.cn_重庆市农业农村委员会：5个项目入选全国典型案例 重庆全域土地综合整治激活乡村发展动能",
   "date": "2026-05-13",
   "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
   "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202605/t20260513_15674921.html",
   "body": "5个项目入选全国典型案例 重庆全域土地综合整治激活乡村振兴新动能\n\n语音合成中，请耐心等待...\n\n进入播报模式\n\n退出播报模式\n\n近年来，重庆以全域土地综合整治为抓手，深入开展“五合一”综合改革，昔日耕地碎片化、产业结构单一的丘陵乡村，正逐步蝶变为宜居宜业的和美乡村。\n\n走进大足区拾万镇长虹村，田野里秧苗初绿，层层碧浪随风起伏。然而就在几年前，这里还被村民们称为“烂坑子”：田块零碎分散，最小的不到一分地，大型农机“进不去、转不开”，村民种地辛苦却收益微薄。为改变这一现状，2022年，当地启动实施全域土地综合整治。\n\n大足区拾万镇长虹村党支部书记李云仲：“我们是高标准农田建设，2228亩地，就是碎片化的，全部整合成了999块田，机械化率达到了90%，小田改成了大田，土地规模化了，养虾的业主、养鱼的业主，他就来包，所以它的经济价值还是很好。”\n\n当地创新构建“面积精准分配+股权量化登记”模式，将高标准农田改造后的连片“大田”，严格按照原“小田”承包权比例确权到户。村民每流转一亩土地，每年可稳定增加600元收入。同时还能在本地流转的土地上就近务工。当地群众对全域土地综合整治工作的满意率达95%以上。\n\n大足区拾万镇长虹村村民唐义强：“我家有两亩多地，现在承包了过后，每年12月份就要打钱，如果打工的话，七八十块钱一天，基本上零花费用各方面都可以解决了。”\n\n全域土地综合整治，还包括人居焕新、生态保护修复等。既惠及本地村民，也为外来创业者搭建了发展平台。\n\n大足区棠香街道惜字阁村“归棠里”民宿主理人刘芝莹告诉记者，房子外观都是由政府统一来打造，给他们节省了很多成本，“我们民宿一共有5间房，然后一共是7个床位，从去年开业到现在，来我们这住的人也比较多，节假日的话，一般都是定满了的”。\n\n大足区棠香街道惜字阁村党支部书记姜捷恒透露，他们现在流转了五十多栋闲置空房，撬动了可能有三千多万的社会资本流来对接，也增加了老百姓的收入。\n\n近年来，重庆以全域土地综合整治为抓手，系统优化农村生产、生活、生态空间布局，有序推进全域土地综合整治项目53个，整治总面积达2355平方公里。截至目前，全市已有5个全域土地综合整治项目入选全国典型案例，数量位居全国第三，为全国丘陵地区乡村振兴提供了“重庆经验”。\n\n市规划自然资源局生态修复处处长许东风表示，加快研究编制市级全域土地综合整治专项规划，指导各区县加大项目谋划和储备力度，尽快形成规模效应和示范效应，力争通过三到五年的持续努力，实现良田更加集中连片，生态屏障更加牢固，产业更富活力，人居环境更具品质。（重庆广电-第1眼新闻记者 刘畅 贺应桃 特约记者 李东）"
  },
  "S02": {
   "heading": "nyncw.cq.gov.cn_重庆市农业农村委员会：碎地并大田 闲房变民宿 重庆全域土地整治激活乡村发展动能",
   "date": "2026-05-11",
   "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
   "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202605/t20260511_15664767.html",
   "body": "碎地并大田 闲房变民宿 重庆全域土地整治激活乡村发展动能\n\n语音合成中，请耐心等待...\n\n进入播报模式\n\n退出播报模式\n\n近日，细雨过后，大足区拾万镇长虹村的空气格外清新。稻虾田里睡莲绽放，小龙虾在其间生长，一幅生机盎然的田园画卷尽收眼底。\n\n很难想象，这片良田，过去却是村民口中的“烂冲子”——地块零散、路渠不通，种地效益低，产业难落地。随着全域土地综合整治项目落地，这里彻底变了样：碎地拼成连片大田，产业引进村，村民在家门口就能实现致富增收。\n\n“以前守着小块薄地，累死累活收入低，现在日子舒坦多了！”79岁的长虹村村民唐义强和老伴留守村中，子女在外务工，说起村里的变化，老人满脸笑容。\n\n他家的2亩多田地，过去地块零散、耕种不便，如今通过土地整治，小块碎地拼成了规整大田，顺利流转给种养企业。\n\n2022年以来，长虹村将2228块零散小田整合优化成999块连片大田，改造高标准农田2815亩，大型农机可以直接下地作业，农业机械化率突破90%。“田地连成片，基础设施完善，外来企业主动找上门投资。”长虹村党支部书记李云仲介绍，村里引进稻虾共生特色产业，建成1450亩稻虾种养基地。通过睡莲净化水质，养出的小龙虾品质优良，运输成活率超98%，顺利入驻线上生鲜平台，直供重庆中心城区。\n\n当地还创新土地权益分配模式，整治后的大田依旧按村民原承包权确权到户，每亩土地每年可获600元流转金；青壮年村民在家门口务工，每天能挣80至100元。实实在在的收益，让村民对土地整治工作满意率超95%。\n\n全域土地综合整治还改善了农村人居环境，吸引不少年轻创业者扎根乡村。\n\n2025年下半年，“00后”创业者刘芝莹看到大足棠香街道惜字阁村的招商信息，专程前来考察。统一规划、古朴雅致的民居，让她一眼就相中了这里。\n\n“村里民居外立面由政府统一打造，省去了我一大笔装修成本。”刘芝莹说，村子紧邻大足石刻景区，客源有保障，且农房租赁期长达20年，能安心长期经营。\n\n2025年10月，她打造的民宿正式开业，每逢周末和节假日，客房全部爆满。如今，她正联合周边民宿抱团发展，扩大接待规模，带动更多村民就近就业。\n\n借助土地整治的契机，惜字阁村引进社会资本，将50多栋闲置农房改造成民宿、茶艺馆、蜡染工坊、特色餐厅，吸引投资超3000万元，带动30多名村民就近就业，户均年收入突破10万元。\n\n大足区规划自然资源局局长张燕岭介绍，当地统筹推进高标准农田改造、闲置宅基地盘活等多项改革，相关工作入选2025年全国全域土地综合整治典型案例。\n\n近年来，重庆将全域土地综合整治作为乡村振兴重要抓手，系统优化农村生产、生活、生态空间，累计实施整治项目53个，整治面积达2355平方公里，实现乡村面貌、生态环境、产业发展同步提升。目前，全市已有5个整治项目入选全国典型案例，数量位居全国第三。\n\n市规划自然资源局生态修复处处长许东风表示，重庆力争通过三到五年努力，让农村良田更连片、生态更优质、产业更兴旺、人居环境更宜居，让更多村民在家门口就能稳增收。（ 新重庆-重庆日报记者 申晓佳）"
  },
  "S05": {
   "heading": "cqrb.cn_重庆日报：全域土地综合整治 让耕地更沃乡村更美",
   "date": "2026-04-29",
   "source": "cqrb.cn_重庆日报",
   "url": "https://cqrb.cn/jingji/zixun/2026-04-29/2652981_pc.html",
   "body": "重庆日报网 > 正文\n\n全域土地综合整治 让耕地更沃乡村更美\n\n4月28日，细雨纷纷。大足区拾万镇长虹村，“隆平五彩田园”田园综合体的油菜刚收割完，稻虾田中，睡莲绽放，小龙虾在虾笼里敏捷地爬上爬下。\n\n这样温馨优美的田园画卷，过去是难以想象的。长虹村村支书李云仲说，长虹村的土名叫做“烂冲子”，土地“碎”成一片片，道路、河流都不相通。村里产业没起色，流转土地更无人问津。\n\n改变这一切的，是全域土地综合整治。在市规划自然资源局的指导下，大足区拾万镇于2024年启动了全域土地综合整治项目。如今，长虹村的2200多亩零碎耕地被整合成990块大田，机械化率达到90%以上。村里的稻渔基地亩产值突破万元，村民靠流转土地、就地务工增收，过上了“家门口致富”的好日子。\n\n▲2026年4月29日，大足区拾万镇长虹村，稻虾田里睡莲簇簇盛放，后方错落民居温婉伫立，尽显乡村诗意田园之美。记者 张锦辉 摄/视觉重庆\n\n小田变大田，流转引产业\n\n“以前自己种点田土过日子，现在我家2亩多点地，一年流转就有1200多元，多少也能解决‘零花钱’。”79岁的长虹村五组村民唐义强和老伴留守村里，儿女在外工作，他说，多亏“小田变大田”，自家又多了一份收入。\n\n“小田变大田”正是全域土地综合整治的重要内容。2022年以来，借助该项工作，长虹村将2228块细碎田块整合为999块，耕地破碎化指数下降30%。完成高标准农田改造2815余亩，机械化率超过90%，形成“田成方、渠相连、路相通”的现代农业基底。\n\n“外面业主一看，大田连片，路又通，马上就来流转土地搞产业了。”李云仲说，长虹村有1450亩稻虾田，还专门种植了睡莲净化水质。小龙虾养殖时间长，肉质饱满，运输成活率达到98%以上，可以迅速直达中心城区的消费者餐桌。目前，“大足龙虾”已经进驻京东买菜等平台。\n\n▲2026年4月29日，大足区拾万镇长虹村，整合零散耕地后形成的集中连片的稻油轮作基地。\n\n▲2026年4月29日，大足区拾万镇长虹村的稻虾田 。 记者 张锦辉 摄/视觉重庆\n\n通过构建“面积精准分配+股权量化登记”模式，大足将高标准农田改造后的“大田”按原“小田”承包权比例确权到户。像唐义强这样的村民，每流转一亩土地，每年可增加600元收入。年轻一些的村民就近务工，每天还有80元至100元不等的收入。因此，当地群众对全域土地综合整治的满意率达到95%以上。\n\n农房变民宿，带火乡村游\n\n全域土地综合整治，不仅“整”土地，还包括人居焕新、生态保护修复等。除了本地村民受益，外来的创业者们也借此找到了机遇。\n\n“00后”刘芝莹来自巴南区，2025年下半年，她看到大足区棠香街道发布的招商信息，前来棠香街道惜字阁村打探经营民宿的商机。一来到村里，灰瓦砖墙的统一民居外观，就让她动了心。\n\n“民居外观是政府统一打造的，这直接降低了我的创业成本。”刘芝莹说，更让她心动的是，惜字阁村临近大足石刻景区，地理位置好；民居租赁合同长达20年，期间房租不涨。她可以安心在此创业。\n\n2025年10月，刘芝莹打造的“归棠里”民宿开业。民宿背山望水，5个房间、7张床位经常在周末、节假日爆满。由于单打独斗的接待能力有限，刘芝莹正在和附近的几家民宿商议，准备联合运营，扩大接待规模。\n\n▲2026年 4月29日，大足区棠香街道惜字阁村，闲置农房经过特色化改造打造成的 “归棠里”民宿和茶艺主题的小院。 记者 张锦辉 摄/视觉重庆\n\n▲2026年4月29日，大足区棠香街道惜字阁村，闲置农房经过特色化改造打造成的 “归棠里”民宿。 记者 张锦辉 摄/视觉重庆\n\n记者了解到，惜字阁村目前已经通过网上招商等方式，流转了50多栋闲置农房，业态包括民宿、茶艺、蜡染、餐饮等，吸引社会资本规模超3000万元，带动30多名村民在家门口就业，村户均收入超过10万元。\n\n多项改革见效，全国树典型\n\n大足区规划自然资源局局长张燕岭介绍，大足区以拾万镇长虹村、协丰社区为示范，以全域土地综合整治为平台，统筹高标准农田改造提升、农村宅基地腾退、农村土地承包经营权确权确股、农村集体经营性建设用地入市等，开展“五合一”综合改革。在2025年获得全国第三批全域土地综合整治典型案例。\n\n记者了解到，近年来，重庆以全域土地综合整治为重要抓手，系统优化农村生产、生活、生态空间布局，有序实施全域土地综合整治项目53个、整治面积达2355平方公里，通过统筹耕地保护、生态修复、产业培育与农民增收，实现空间布局优化、生态功能提升、产业融合发展多重效应。截至目前，重庆有5个全域整治项目入选全国典型案例，位居全国第三。\n\n市规划自然资源局生态修复处处长许东风表示，下一步，该局将强化规划统筹，以市级全域土地综合整治专项规划为依据，指导各区县加大项目谋划和储备力度，尽快形成规模效应和示范效应，力争通过三到五年的持续努力，实现良田更加集中连片，生态屏障更加牢固，产业更富活力，人居环境更具品质。\n\n来源： 新重庆-重庆日报\n\n编辑： 蔡杨 审核： 陈钧 主编：曾立\n\n凡注明来源重庆日报的作品，版权均属重庆日报所有，未经授权不得转载、摘编或利用其它方式使用上述作品。已经本网授权使用作品的，应在授权范围内使用，并注明“来源：重庆日报网”。违反上述声明者，本网将追究其相关法律责任。\n\n除来源署名为重庆日报稿件外，其他所转载内容之原创性、真实性、完整性、及时性本站不作任何保证或承诺，请读者仅作参考并自行核实。\n\n铜梁 綦江 大足 璧山 南川 北碚"
  },
  "S06": {
   "heading": "cqrb.cn_重庆日报：图片新闻｜全域土地综合整治 绘就巴渝乡村新画卷",
   "date": "2026-04-30",
   "source": "cqrb.cn_重庆日报",
   "url": "https://cqrb.cn/yingxiang/tuji/2026-04-30/2654524_pc.html",
   "body": "重庆日报网 > 正文\n\n图片新闻｜全域土地综合整治 绘就巴渝乡村新画卷\n\n▲2026年4月29日，大足区拾万镇长虹村，整合零散耕地后形成的集中连片的稻油轮作基地。借助全域土地综合整治，这里2228块细碎田块整合为999块，完成高标准农田改造2815余亩，机械化率超过90%，形成“田成方、渠相连、路相通”的现代农业基底。记者 张锦辉 摄\n\n2024年，大足区拾万镇启动全域土地综合整治项目，以长虹村、协丰社区为示范，统筹高标准农田改造、宅基地腾退、土地确权确股、集体经营性建设用地入市等，开展“五合一”综合改革，于2025年获得全国第三批全域土地综合整治典型案例。近年来，重庆以全域土地综合整治为抓手，系统优化生产、生活、生态空间布局，已实施项目53个、整治面积2355平方公里，实现耕地保护、生态修复、产业融合与农民增收等多重效益。目前，重庆共有5个项目入选全国典型案例，数量居全国第三。\n\n▲4月29日，大足区拾万镇长虹村，农田之畔坐落着星光小屋与木质观景台等休闲娱乐设施。这是全域土地综合整治依托“指标池”灵活调配用地指标打造的乡村野趣景致。记者 张锦辉 摄\n\n▲4月29日，大足区拾万镇长虹村，稻虾田旁便是米堡乐园。记者 张锦辉 摄\n\n▲4月29日，大足区拾万镇长虹村，稻虾田田坎上花儿盛开，水中睡莲绽放，吸引了众多游客前来观光。记者 张锦辉 摄\n\n▲4月29日，大足区拾万镇长虹村，稻虾田中，为净化水质而栽种的睡莲绽放。这里有1450亩稻虾田，“大足龙虾”已经进驻京东买菜等平台。记者 张锦辉 摄\n\n▲4月29日，大足区拾万镇长虹村，稻虾田里睡莲簇簇盛放，后方错落的民居温婉伫立，尽显乡村诗意田园之美。长虹村整治85个院落，建成巴蜀美丽庭院示范片。记者 张锦辉 摄\n\n▲4月29日，大足区拾万镇长虹村，传承人刘萍在植物染非遗工坊晾晒植物染绣作品。长虹村依托“植物染绣”非遗资源，盘活闲置农房建成染织绣工坊、染织绣博物馆，带动百余名村民实现“家门口就业”。记者 张锦辉 摄\n\n▲4月29日，大足区棠香街道惜字阁村，闲置农房经过特色化改造打造成的“归棠里”民宿。惜字阁村已经通过网上招商等方式，流转了50多栋闲置农房，形成民宿、茶艺、蜡染、餐饮等业态，吸引社会资本规模超3000万元，带动30多名村民在家门口就业，村户均收入超过10万元。记者 张锦辉 摄\n\n▲4月29日，大足区棠香街道惜字阁村，棠香人家海棠宿集的茶艺主题的小院透着东方禅意。记者 张锦辉 摄\n\n来源： 新重庆-重庆日报\n\n编辑： 黄景琳 审核： 崔力 主编：万难\n\n凡注明来源重庆日报的作品，版权均属重庆日报所有，未经授权不得转载、摘编或利用其它方式使用上述作品。已经本网授权使用作品的，应在授权范围内使用，并注明“来源：重庆日报网”。违反上述声明者，本网将追究其相关法律责任。\n\n除来源署名为重庆日报稿件外，其他所转载内容之原创性、真实性、完整性、及时性本站不作任何保证或承诺，请读者仅作参考并自行核实。"
  }
 },
 "39": {
  "S03": {
   "heading": "zrzyj.jingzhou.gov.cn_荆州市自然资源和规划局：县市动态：公安县麻豪口镇全域国土综合整治项目",
   "date": "2023-07-18",
   "source": "zrzyj.jingzhou.gov.cn_荆州市自然资源和规划局",
   "url": "http://zrzyj.jingzhou.gov.cn/xwdt/xqdt/202307/t20230718_848565.shtml",
   "body": "增耕地 优生态 强活力——公安县麻豪口镇全域国土综合整治中踏访\n\n来源: 湖北日报,   发布时间:2023-07-18\n\n湖北日报全媒记者 戴辉 实习生 潘睿哲 通讯员 周光红\n\n盛夏的崇湖，碧波荡漾，一池荷花随风摇曳，与自由翱翔的水鸟构成一幅美丽画卷。\n\n紧邻崇湖的公安县麻豪口镇，崇湖流域综合治理、全域国土综合整治 “ 两翼齐飞 ” 。建设美丽乡村，大家的事情商量着办！首次 参与全域国土综合整治项目的湖北交投集团整合各方资源，营造人人参与、人人尽力、人人享有的新生态，不仅将万亩 “ 粮田 ” 变 “ 良田 ” ，更助推美好环境与幸福生活共同缔造。\n\n不误农时 ， 30 天平整万亩良田\n\n烈日下，广阔的 田野机声隆隆， 200 多台挖机、推土机纵横沃野，来回平整边坡沟渠 ……7 月 13 日，湖北日报全媒记者在公安县麻豪口镇看到一幅壮观景象。\n\n“ 环沟底部最深要 1 至 2 米，上宽 4 至 6 米，更利于虾稻共养。 ”“ 田块 20 至 50 亩一块最好。 ” 踩着松软的田埂，黄岭村党支部书记龚道平戴着草帽，与湖北交投建设集团项目党支部书记冯中山等人商议。村民们围绕环沟、机耕路的宽度，外湖围堤、田坎的高度，以及田块大小、坡比、电改、灌溉排涝方案等提出建议。\n\n公安县麻豪口镇全域国土综合整治项目由湖北交投建设集团投资建设，去年 11 月动工，建设规模近 4 万亩，总投资 1.7 亿元，预计新增耕地指标 2638 亩。\n\n绿油油的青苗已冒出 20 厘米，看着自家 4 块 “ 巴掌田 ” 集中成一块大田，黄岭村三组村民徐海军一脸高兴： “ 地块变大了，灌水更方便，节约种地成本，提高收入。 ” 而几个月前，他还是田间农房拆除的 “ 钉子户 ” 。\n\n方案决策共谋，破解征拆难。项目部与公安县自然资源和规划局组织村民赴外地参观学习。初步设计形成后，设计团队反复在村小组会、群众代表会上解释说明，综合村民意愿进行多次修改、完善。 “ 土地平整后，田间的房子不拆就成了 ‘ 孤岛 ’ ，而拆除了，土地连片，增加不少面积，也便于机械化操作，降低种植成本，综合算账，可增收不少。 ” 经过反复考量，徐海军等 45 户村民自行拆除危旧农房。\n\n土地平整如何不误农时？共谋共建共享理念融入其中。\n\n麻豪口镇是湖北省虾稻产业示范基地，每年 11 月至次年 6 月放水养虾， 7 至 9 月种植晚稻。冯中山介绍，项目部与村民充分协商，抓住 “ 空档期 ” ，突击增加设备、人员，冒着高温集中施工， 30 天平整土地 1 万多亩。\n\n成果集体共享。麻豪口镇党委书记胡学超称，以全域国土综合整治为抓手，通过产业导入、新增耕地租赁流转等举措，推动农村资源变资产、资产变资金，而村集体增收的 60% 用于统筹全村发展，所得收益进行第二次分红，为村民集体共享。\n\n臭水沟变身口袋公园\n\n每天，镇麻口村村民何凯波都要去村头转一圈，看着口袋公园种树植草。这里以前是一条 273 米的臭水沟，每到夏天气味难闻，村民掩鼻而走。\n\n从村民最关心的事情做起。全域国土综合整治中，项目部采纳群众意愿，将臭水沟疏通改暗渠，地面建一个 4000 平方米的乡村游园，供村民休闲娱乐。为此，何凯波让出 300 平方米菜园、雷旭光 “ 捐 ” 出自家门前 40 平方米的地坪 …… 建设美丽乡村人人参与，乐享 “ 绿色 ” 福利。\n\n推窗见绿，开门见景。荷花飘香的崇湖环绕麻豪口镇，行走环崇湖旅游路，只见河渠内设置过滤网，美人蕉、燕尾草等绿色水生植物随处可见。项目部坚持全域国土综合整治建设与流域综合治理相融合，按照 “ 以水定地 ” 原则，因地制宜优化配置水土资源，投资 6800 多万元全方位参与崇湖流域治理。\n\n好环境来之不易。建 14.8 公里三级沉淀生态沟渠、铺设 41 公里 PE 管道、修建 7.3 公里环湖路 …… 斩断直排崇湖 “ 黑龙 ” ，打造湿地壮美风光，一件件民生小事给沿线村民带来幸福感。据悉，半年来，项目部通过尾水治理、东清河综合整治等工程，河道生态清淤 3.15 万立方米，实施入湖口人工湿地营造，水环境综合治理 60 公顷。\n\n探索 “ 投资 + 建设 + 指标兑现 ” 模式\n\n开展全域国土综合整治，是优化生产、生活、生态空间布局，促进乡村振兴的有力支撑。\n\n如何解决资金难题？\n\n湖北交投集团首次探索 “ 投资 + 建设 + 指标兑现 ” 模式，形成社会资本参与全域国土整治项目的良性运转机制。该模式下，湖北交投授权旗下建设集团实施，成立 SPV （特殊目的实体）项目公司投资并负责项目建设。公安县将全域国土综合整治产生的新增耕地指标作为专属指标，纳入湖北省自然资源厅新增耕地指标台账代管。湖北交投集团投资的高速公路项目公司，按照湖北省政府确定的耕地指标价格购买耕地指标，获取高速公路建设专属用地指标。\n\n根据规划，湖北交投集团 “ 十四五 ” 期间新建、改扩建项目 36 个，里程 2144 公里，总投资 4125 亿元，约需耕地占补指标 9 万亩。由 “ 买指标 ” 到 “ 换指标 ” 。据悉，公安县麻豪口镇全域国土综合整治项目，初步安排 2024 年上半年将新增耕地专属指标用于湖北交投集团高速公路建设项目，减缓高速公路项目耕地占补压力。\n\n据介绍，该模式不仅解决地方政府财政资金压力，也解决社会资本退出变现的担忧，同时满足我省新建、改扩建高速公路项目的耕地占补问题，有利于全域国土综合整治项目的可持续建设。"
  },
  "S04": {
   "heading": "gongan.gov.cn_公安县人民政府：全域土地综合整治激发乡村活力",
   "date": "2022-12-19",
   "source": "gongan.gov.cn_公安县人民政府",
   "url": "http://www.gongan.gov.cn/xwzx/xzdt/202212/t20221219_803182.shtml",
   "body": "麻豪口镇通过土地平整、灌溉与排水工程等全域国土综合整治，使碎片化土地变成集中连片的良田，有效盘活土地资源，激发乡村发展新活力。\n\n在麻豪口镇麻口村六横渠，大型挖掘机正在进行清淤护坡，为接下来硬化沟渠做好前期准备工作。麻口村六横渠全长 1200米，由于多年未疏洗，导致杂树丛生，水葫芦、水花生横行，严重制约村里的虾稻产业发展。六横渠是全村的骨干农水，承担着全村5600亩农田排涝灌溉任务，其中有5100亩是虾稻田。为尽快疏通这条全村生产命脉，保障群众生产灌溉用水，项目部加压鼓劲、力争项目早日完工受益。\n\n在麻豪口镇黄岭村三组，土地平整项目已经基本完工，翻耕后的农田一望无垠，基本形成田成方、渠成网、路相通、沟相连。项目方也正利用晴好天气，加班加点进行路基压实工程，为农田生产道路硬化作准备。黄岭村三组共有面积 524亩，现在整治完成后，通过实地测量，面积是551亩，总共增加了27亩面积。把四荒地通过平整已经初步变成良田，可以进行农作物生产。”实施全域国土整治项目过程中，该村重新布局道路、田埂、排灌体系，打破过去宅基地间隔较大、农田碎片化的布局，改善农民生产、生活条件。整治之后是31块田块，基本上达到了一户一田，以前的农户一户多田，变成一户一田。以前田间道路就是碎石路，现在整治之后，我们进行硬化道路，直接到田边，包括水稻的收割、小龙虾的收货，不管是晴天还是下雨，都能够正常的在道路上通行。土地平整完以后，在主渠道沟渠旁，我们会种一些更时令蔬菜，成为花园式的小农经济。\n\n据了解，麻豪口镇全域土地综合整治项目总投资 1.64 亿元，涉及三个村，主要开展土地的平整、渠道疏洗和道路桥梁涵闸建设，重点解决乡村耕地碎片化、土地资源利用低效化等问题，打造“山水林田湖草生命共同体”。\n\n目前，道路桥梁已经基本上完成十五公里的硬化路，桥梁涵闸完成十五座，沟渠梳洗整个项目区鹅港、黄岭、麻口三个村加在一起是两万三千多米的沟渠清淤，目前效果比较好，工期是三年，计划是两年到两年半把项目完成，提前让老百姓享受到项目带来的红利。\n\n我们将以此次国土全域整治为契机，修复一批生态体系、修建一批生产道路、配套一批基础设施、植入一批主导产业，以国土整治腾出用地空间，提高粮食产量。促进农业高质高效、乡村宜居宜业、农民富裕富足。"
  },
  "S01": {
   "heading": "news.hubeidaily.net_湖北日报：公安县麻豪口镇入选自然资源部全域土地综合整治典型案例",
   "date": "2025-06-26",
   "source": "news.hubeidaily.net_湖北日报",
   "url": "https://news.hubeidaily.net/pc/c_4192534.html",
   "body": "公安县麻豪口镇入选自然资源部全域土地综合整治典型案例\n\n湖北日报 2025-06-26 19:40:34\n\n湖北日报讯（记者万雷萌、李冲）6月25日，自然资源部发布第三批17个全域土地综合整治典型案例，我省荆州市公安县麻豪口镇全域国土综合整治项目位列其中。2024年，自然资源部发布了两批共30个全域土地综合整治典型案例。据悉，这是我省第4个入选全国典型案例的全域国土综合整治项目。\n\n公安县麻豪口镇全域国土综合整治项目区包含黄岭村、鹅港村、麻口村3个村及崇湖国家湿地公园，总面积6.2万亩，整治规模2.28万亩，总投资1.95亿元。针对空间布局不合理、水环境差、耕地碎片化等问题，公安县麻豪口镇立足资源禀赋，探索湖区平原地区“流域型”土地综合整治模式；依托崇湖湿地生态与产业基础，致力于打造稻虾产业延伸示范区、美丽乡村样板区、生物多样性保护区。\n\n该项目以治水为抓手、治田为支撑，统筹“三生”空间治理，通过实施生态修复、农用地整治、人居环境提升及产业融合等举措，探索出一条“小田并大田、湿地焕新颜、农文旅促增收”的可持续发展路径。\n\n如今，崇湖水质从V类提升至Ⅳ类，2023年成为国际重要湿地，候鸟数量大幅增加，濒危青头潜鸭超百只；耕地质量提高，虾稻亩均增收720元，年增收超千万，黄岭村集体经济破百万；2024年旅游收入1500万元，人均增收3000元，初步实现污水变清水、小田变大田、湖区变景区、生态资源变生态资产、农民变股民、传统农业变绿色高效农业，为区域发展提供了可借鉴的示范样本。\n\n已输入 0 个字\n\n查看更多回复>\n\n查看更多评论 没有更多评论了\n\n湖北日报客户端\n\n湖北日报官方微信\n\n湖北日报官方微博"
  },
  "S02": {
   "heading": "news.hubeidaily.net_湖北日报：“五治”妙笔绘新景 公安县麻豪口镇全域国土综合整治入选全国典型案例",
   "date": "2025-06-26",
   "source": "news.hubeidaily.net_湖北日报",
   "url": "https://news.hubeidaily.net/pc/c_4201948.html",
   "body": "“五治”妙笔绘新景 公安县麻豪口镇全域国土综合整治入选全国典型\n\n湖北日报 2025-06-28 18:16:30\n\n湖北日报全媒记者 万雷萌 李冲\n\n夏日的崇湖国家湿地公园，荷花绽放，水鸟翔集。在6月25日全国“土地日”前夕，记者实地踏访公安县麻豪口镇，探访这个已入选自然资源部第三批全域土地综合整治全国典型案例的“荆楚样板”。\n\n“项目以‘五治’为抓手系统推进。”公安县自然资源和规划局党组成员、崇湖湿地中心主任邹先柱介绍。针对项目空间布局不合理、水环境差、耕地碎片化等问题，当地精准施策：一治“规”，构建以崇湖流域综合治理为核心的“1+5”规划体系，严守生态红线，明确发展方向；二治“水”，通过重塑水系格局、建设专用补水渠道、清淤疏浚等措施激活水体循环；三治“田”，依托村土地合作社集中流转，归并1.4万亩零碎耕地形成“一户一田”；四治“村”，提升改造226户农房，拆除92处闲置危房复垦还耕，改善人居环境；五治“产”，推动虾稻产业标准化全链条发展，并依托湿地资源拓展科普研学、休闲观光等业态。\n\n系统治理带来显著成效。崇湖水质从V类提升至IV类，2023年成为国际重要湿地，候鸟数量大幅增加，濒危青头潜鸭超百只；耕地质量提高，虾稻亩均增收720元，年增收超千万，黄岭村集体经济破百万；2024 年旅游收入1500万元，人均增收3000元。通过“五治”并举，这里初步实现了污水变清流、小田变大田、湖区变景区、资源变资产、农民变股民、传统农业变高效农业的转变，为区域发展提供了可借鉴的示范样本。\n\n已输入 0 个字\n\n查看更多回复>\n\n查看更多评论 没有更多评论了\n\n湖北日报客户端\n\n湖北日报官方微信\n\n湖北日报官方微博"
  },
  "S05": {
   "heading": "m.cnhubei.com_荆楚网：全域国土综合整治助力湖北乡村美丽蝶变",
   "date": "2023-08-14",
   "source": "m.cnhubei.com_荆楚网",
   "url": "http://m.cnhubei.com/content/2023-08/14/content_16412342.html",
   "body": "荆楚网（湖北日报网）讯（记者赵秀琳 通讯员陆丹 刘鹏 实习生郭婧文）美丽乡村，共同缔造。8月11日，荆楚民生观察团走进公安县麻豪口镇，探访全域国土综合整治后的乡村蝶变。\n\n小田改大田 旧村换新颜\n\n高田如楼梯，平田如棋局。白鹭忽飞来，点破秧针绿。\n\n驾车驶入公安县麻豪口镇黄岭村，沿路两旁的虾稻田整齐排列，崇湖里荷花随风摇曳，水鸟自由翱翔，宛若进入一幅秀美的水墨画卷，一步一景皆清幽，处处呈现出生态和谐的宜居乡村景象。\n\n“这是大家一起谋划、建设和管理的结果，土地整治后，方便养殖耕种，村里环境也变漂亮了。现在大家正做长远规划，准备利用现有资源转型升级。”黄岭村党支部书记龚道平笑容满面地说。\n\n据了解，黄岭村有耕地9616亩，村民2876人，92.9%的耕地是虾稻田，多数农户直接耕种承包地，土地分散。2022年11月，湖北交投集团启动公安县全域国土综合整治项目，按照“小田改大田、大户带小户”的方式，将碎片化、零散化土地集并，通过农田灌排分离、农田林网、绿化植被建设，美化人居环境，重塑生态系统。\n\n“以前我们平均每户人家有3、4块小田，田地高低不平，农机操作手都不愿意进来。”黄岭村一组村民张永胜说，现在每家一块大田，路相通，渠相连，耕种管理非常方便。\n\n麻豪口镇党委书记胡学超介绍，此次全域国土综合整治，通过调整田块空间关系、经营权属关系和集体收益使用关系，实现了集体增收、农民增幅、农业增效的良好局面。黄岭村农田整治规模约 9800 亩，新增可发包耕地约 300 亩，耕地流转每年可为村集体增收 约 56.67 万元，加上其他方面收益，整治后村集体年收入将突破 100 万元，有望成为麻豪口镇第二个村集体年收入超 100 万元的村。\n\n“黄岭村的发展就像田垄上的开花的芝麻一样——节节高。”看到黄岭村发展新风貌，荆楚民生观察团成员、中南财经政法大学马克思主义学院副院长荣枢感叹道。\n\n涵洞和沉淀池施工\n\n坚持群众路线 30天平整万亩田\n\n“自从开始谋划土地整治后，群众参与的热情超乎想象，为建设好自己的家园，村里花了半年多的时间谋划，田块的划分、道路的规划设计、沟渠的分布，统统由大家商量着办。”龚道平说。\n\n麻豪口镇是湖北省虾稻产业示范基地，每年11月至次年6月放水养虾，7至9月种植晚稻，农时有固定的要求。\n\n土地整治会不会让耕种面积变小？会影响农时吗？······龚道平说，兼顾不同诉求，大家统一决策解决。“半年时间开会讨论80多次，在田间地头的会议达15次以上。”\n\n“整治施工中，湖北交投建设集团公安县麻豪口镇全域国土综合整治项目部利用农闲空档期，增加设备、人员，30天平整土地1万多亩，没有一块农田耽误农时，没有挤占一块农耕地，更没有发生一起闹事事件。”胡学超介绍。\n\n据了解，在实施全域国土综合整治项目中，湖北交投建设集团在充分调研和反复征求各方意见的基础上，通过统一规划布局，形成 50 亩左右大田块布局；结合农业生产功能布局，打造大田块，构建全域道路体系；优化沟渠设施条件，实施灌排体系分离和农田尾水处理，以点带面地推进三生空间治理，打造现代农业示范、共同缔造示范和生态修复示范。\n\n胡学超称，后续，公安县麻豪口镇将在沿崇湖流域的麻口村、鹅港村、荆丰村继续推进，更高标准发挥土地效益，促进农业增效、农民增收、农村发展。\n\n“一路参观、走访、座谈，很受启发、很受教益。”观察团成员华中农业大学马克思主义学院党委书记程华东认为，麻豪口镇以全域国土综合整治推动乡村振兴和乡村建设，坚持群众主体性，践行决策共谋、发展共建、建设共管、效果共评、成果共享，推进基层治理体系和治理能力现代化，体现了“共同缔造”的价值旨归。\n\n全域国土综合整治 共同缔造和美乡村\n\n“湖北交投建设集团与麻豪口镇携手实施的全域国土综合整治，是落实党的二十大精神、推动《湖北省流域综合治理和统筹发展规划纲要》《关于加快建设全面构建新发展格局先行区的实施意见》的重大举措和实际步骤，具有十分重大的现实意义。”荆楚民生观察团成员、湖北省委网信办网络传播与评论处一级调研员李国红表示，“实施流域综合治理行动”“实施美好环境与幸福生活共同缔造行动”等，都是湖北省加快建设全面构建新发展格局先行区十二个具体行动的内容。围绕“共同缔造，助力乡村振兴”这一主题，落实全面构建新发展格局先行区具体行动，契合了时代要求，人民期盼，也是以人民为中心，践行党的宗旨的具体体现。\n\n据介绍，公安县麻豪口镇全域国土综合整治项目包括麻豪口镇黄岭村、鹅港村、麻口村三个完整的行政村及崇湖国家湿地公园，涵盖农用地整治、农田基础设施整治、低效建设用地整治、村容村貌整治、公服设施整治、村庄环境治理、东清河综合整治、主干渠生态修复、农田林网整治九大工程，建设规模近4万亩，项目工期3年，建设完成后预计新增耕地指标2638亩。\n\n湖北交投建设集团公安县全域土地整理有限公司副总经理冯中山介绍， 这是湖北交投集团首次探索“投资+建设+指标兑现”模式，形成社会资本参与全域国土整治项目的良性运转机制，该模式不仅解决地方政府财政资金压力，也解决社会资本退出变现的担忧，同时满足我省新建、改扩建高速公路项目的耕地占补问题，有利于全域国土综合整治项目的可持续建设。\n\n“我们将以腾空间、增耕地、优生态、强活力为整治目标，整体提升耕地质量，帮助农业增产、农民增收、农村增效，全面助力乡村振兴！”冯中山说。\n\n平田如棋局，白鹭点秧针。全域国土整治，让昔日江南农场、如今的麻豪口镇充满新时代和美乡村的发展活力，明代诗人杨慎《出郊》中的优美田园意境，也将在更多湖北乡村生动再现。"
  }
 },
 "40": {
  "S01": {
   "heading": "zrzy.jiangsu.gov.cn_江苏省自然资源厅：江苏省盐城市盐都区秦南镇全域土地综合整治典型案例——以“三产融合”打造生态农旅宜居示范区",
   "date": "2026-04-17",
   "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
   "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d57dqr/jsxcg/2026/04/17110336697718.html",
   "body": "摘要： 江苏省盐城市盐都区秦南镇全域土地综合整治项目是江苏省自然资源厅2023年批准的全域土地综合整治省级示范项目。开展以来，盐都以“农田流转、农房改善、农旅特色”为抓手，构建“政府主导、部门联动、镇（街）主体、国企实施、多方参与”的治理体系，探索多元投融资模式、长效运营模式、“土地整治+现代农业+特色文旅”融合发展模式、“1+1+N”联农共富模式、全流程监管模式五大方面的创新实践。通过实施全域规划、全域设计，以农田整治促进农业发展，以搬迁安置改善人居环境，以水系修复改善生态环境，以产业升级促进乡村振兴，逐步实现“一廊一轴两区多点”的总体空间发展格局，推动打造“高效创新有机农业，生态农旅宜居示范区”，探索出一条适用于东部平原近郊型乡镇的以空间规划为引领、保护优先为前提、高效利用为重点、生态修复为保障的空间治理新路径。\n\n图1 项目总体空间发展格局\n\n一、案例背景 （一）基本情况 秦南镇地处黄海之滨、里下河平原腹地，因明清时期“秦南仓”漕运仓储得名，至今已有近400年建镇史。镇域总面积128平方公里，辖32个行政村居，人口近10万，坐拥“两河一沟”的水网优势，盐徐高速、331省道穿境而过，是连接沿海经济带与江淮生态经济区的重要节点。作为国家商品粮基地核心区，该镇盛产“秦南大米”、“秦南水牛肉”等特色农产品，农业总产值常年稳居盐都区前列，却也面临着传统农业大镇向现代农业强镇转型的时代课题。 （二）主要问题 一是空间错配失序。整治区由原9个自然村兼并为东方红、灯塔、秦兴3个行政村，农业、居住等功能区混杂，宅基地闲置情况突出，村庄空心化现象严重；生态空间退化，部分河道存在淤积情况，引排功能、生态功能及景观功能降低。 二是土地利用效率低。土地权属分散，村民自主耕种导致土地资源利用相对粗放低效；耕地碎片化明显，整治区内耕地图斑0-3亩占比30%，3-5亩占比11%，较低的耕地集中连片度，严重制约了农业规模化经营和集体经济发展。 三是农村产业融合水平不高。虽然整治区农耕文化悠久，水乡人文底蕴深厚，但生态资源、文化资源、旅游资源缺乏有效的整合协同，乡村发展存在产业链条短、一二三产之间联动不足、市场化程度低等困境。\n\n图2 农业、居住空间混杂示意图\n\n（三）目标任务 项目选取秦南镇域北部，蟒蛇河风光带南岸的区域开展全域整治，整治区覆盖东方红村、灯塔村、秦兴村3个行政村，总面积1807.93公顷，实施周期3年，总投资8.7亿元，包含57个子项目，建设高标准农田1052.64公顷，实施生态河道整治24.6公里，完成老村庄提升改造项目6个，道路改造提升项目1个，文旅特色项目3个。 二、主要做法 （一）强化统筹协同，构建“五位一体”治理体系 一是政府高位统筹，强化顶层设计。成立由区委书记任总指挥、7个工作组、27个部门组成的项目指挥部，建立“周调度、月会办、季观摩”推进机制，出台《高标准农田建设风险管控及全程质量管理办法》《关于加强耕地保护严格耕地用途管制的通知》等6项配套政策，形成“纵向贯通、横向协同”的治理体系。 二是多企多元投入，整合要素资源。建立“财政 + 国企 + 金融”多元化投入机制，整合上级专项补助等财政资金1467万元，由区属国企作为实施主体争取农发行信用贷款8.5亿元，吸引鲜之都集团等社会资本投入1870万元，与省农垦集团签订2万亩粮食产业园长期合作战略协议，强化项目资金及长期运营保障。\n\n图3 与省农垦集团签订长期合作\n\n三是社会协同参与，深化共建共享。充分发挥基层村集体组织优势，发动村民参与全域土地整治项目的规划、选址、实施及验收，邀请安置农户担任项目群众“监理员”，实时接受群众监督及意见建议，深化全域整治共建共享。 （二）深化产业融合，打造“土地整治+”农文旅发展路径 一是规划先行，锚定融合发展方向。将产业融合理念深度融入“多规合一”的顶层设计，明确融合产业探索农文旅融合先行区的目标定位，形成秦南全域整治“1+5+5”规划体系，确保空间布局、功能分区、项目落地服务于农文旅融合发展大局。 二是生态筑基，廊道串联区域价值。以蟒蛇河水上文化生态廊道为轴线，对24.6公里河道进行生态化修复，串联泾口、千秋等周边村落风貌、景观环境、基础设施同频共振发展，形成区域联动发展的“珍珠链”效应。\n\n图4 整治区蟒蛇河水上文化生态廊道风光\n\n三是功能聚合，创新业态激活体验。打破传统产业界限，集中整合农田、水系、文旅、研学等功能，重点打造泾口葡萄采摘、休闲垂钓、千秋驿站、东方红粮库、灯塔宋泽夫故居等重要融合节点，构建全域农文旅体验网络。\n\n图5 整改前东方红闲置厂房     图6 整改后东方红粮库\n\n四是品牌赋能，乡土特色融入价值链。深度挖掘和提升秦南镇麦芽糖、粉丝、水牛肉、咸鸭蛋等农副产品潜力，通过伴手礼、主题餐饮等将“土特产”巧妙融入文旅体验场景，实现“以旅促销、以销促产”。 （三）创新利益联结，创新“1+1+N”联农共富机制 探索建立“1个园区+1间跨村股份合作联合社+N个智慧农业技术支撑团队”的联农带农富农核心机制。发展“政府引导、企业带动、集体组织、大户示范、农户参与”的“订单式”农业产销模式，由江苏绿锦农业公司和村集体经济组织合作经营，秦南镇政府负责与种植大户洽谈，村集体负责土地流转协调、参与收益分配，种植大户按照统一品种进行栽培种植，省农垦集团提供技术培训、保底收购，智慧农业专家及电商运营团队提供技术、营销创意支持，合力打造“秦南仓”优质稻米公用品牌，实现农业增效、农民增收、集体增益。 （四）严控实施质效，健全全流程监管模式 强化项目实施全流程监管，建立纪委监察部门、组织部门、审计部门联席监管机制，对项目招投标、资金使用、工程质量及干部履职等情况进行穿透式监督，实现四大类整治任务全过程数字监管、审计部门全流程现场跟审，确保整治项目依法依规；强化新增耕地管护全程监管，创新搭建“耕地网格监管APP”智慧平台，构建区、镇、村、组四级耕地保护网格化监管体系，落实耕地保护责任到村、到人、到地块的“人田对应”机制，防止耕地粗放利用及撂荒，做好土地整治“后半篇文章”。 三、取得的成效 （一）空间格局集约高效，资源承载能力提升 一是耕地整治焕发田园之韵。通过田块合并、权属流转，新增耕地76.97公顷，新增比例为6.83%，5亩以下耕地图斑数量由589块减至366块，100亩以上集中连片耕地比例由4.8%上升至8.6%；建成4200亩规模化、宜机化、条田化、数字化的高标准农田示范区，粮食生产机械化率提升至98%，农作物良种覆盖率达到100％，粮食综合生产能力提高5%，农业生产效率和土地承载能力大幅增强。 二是拆旧建新优化资源配置。创新实施货币补偿、进城入镇、以房换房、跨村安置四大差异化安置模式，释放低效建设用地资源；建设4个农民新型社区，盘活镇中心两个小区266套存量房源，实现“人退房进”的资源置换。\n\n图7 东方红村安置点建设前后\n\n三是环境整治美化公共空间。聚焦提升人居环境的品质和内涵，大力推进村道巷道、田间庭院、违搭乱建等重点区域的集中整治覆绿，同步发动村民认领管护河道、绿地等公共空间，集聚整合自留地等土地资源打造共享菜园，东方红村入选省级和美丽乡村培育村，李副使庄、宋家庄争创江苏省特色田园乡村。\n\n图8 灯塔村宋家庄老村庄改造后打造共享菜园\n\n（二）生态文化交相辉映，宜居宜游魅力彰显 一是治水护绿，重塑生态河网。统筹推进“控源截污、岸坡整治、河岸绿化、生态修复”，完成12条河道24.6公里河道整治及区域内8条河道8公里的边坡绿化，15条生态河道刷坡，种植绿化苗木6500棵、水生植物4868平方米，河网生态面貌生机盎然。\n\n图9 灯塔村河道生态修复前后\n\n二是修旧显韵，延续乡貌乡情。完成6个老村庄改造提升，将东方红粮站旧址改造成“渔耕文化记忆馆”，东方红村闲置宅基地改造为李副使村史馆，保护并修缮宋泽夫故居，植入红色文化展陈、竹编技艺体验等元素，传播历史故事，留住乡愁记忆，李副使录入江苏省第七批传统村落名录。\n\n图10 李副使村史馆改造前后\n\n图11 宋泽夫故居修缮前后\n\n三是共建共享，培育乡风文明。健全环境整治长效管护机制，创新试点村民自治“积分制”，有效激发村民参与环境治理的内生动力；进一步完善互助养老睦邻点，打造东方红村“长者幸福食堂”，编织少有所游、老有所养的美丽乡村图景。\n\n图12 秦南镇东方红村长者幸福食堂\n\n（三）产业融合动能强劲，富民增收成效显著 一是土地规模化流转促进村民增收。通过区属国企与村集体签订流转合同，实现19户大户、625户零散农户的土地统一流转与集约经营。创新采取村民土地入股分红等形式，建立每年按土地出租收益5%保底分红的利益联结机制，预计可增加村集体收入40万元，有效拓宽农民增收渠道。 二是科技赋能现代农业提质增效。引入省农垦集团一体化打造粮食产业园，建设农事服务中心、稻麦良种繁育基地、粮食加工及品牌营造基地、农业研学基地，推动农业向规模化、智慧化、现代化转型升级；通过电商直播、社区团购等模式，秦南仓农业发展公司农产品线上销售额突破2000万元，带动200余名农户家门口就业，年均增收3万元。\n\n图13 秦南仓农业发展公司农产品电商直播间\n\n三是生态文旅融合激活乡村价值。依托蟒蛇河生态廊道，重点发展水稻加工作坊、休闲民宿等美丽庭院经济，“围炉煮世界”露营地、千秋驿站、“一茶三酒”农家乐等沿线景点，年接待市民游客5万人次以上，带动河道沿线21个村庄、300多户群众直接参与管理运营，将生态价值和文化底蕴转化成经济效益和社会效益。\n\n图14 “围炉煮世界”露营地\n\n四、推广运用前景 秦南镇全域土地综合整治项目经验适用于地势平坦、交通便利、农业生态基础良好的平原近郊型城镇。通过全域规划与治理，系统性整合农业与生态资源，推动一二三产融合，实现人、地、产、资协同发展，打造生态农旅宜居示范区，对推进土地可持续利用和乡村振兴具有重要借鉴意义。 一是治理机制创新，从“政府包办”到“多元共治”，各地可借鉴“五位一体”治理体系，通过政策引导、利益共享激发各方积极性，尤其注重构建“联农带农”机制，让农民成为整治过程的参与者、成果的受益者。 二是产业融合创新，从“单一整治”到“价值增值”，跳出单一土地整治局限，通过“土地整治+现代农业+特色文旅”整治模式，在农业领域推进规模化、智慧化生产，在文旅领域挖掘地域特色文化，在生态领域打造景观化空间，实现“整治一片、提升一片、致富一片”。 三是全周期管理创新，从“重建设” 到“重长效”，突破传统整治思路，项目立项、实施、验收、管护等各个环节坚持全链条设计，延伸至融资创新、产业培育及长效管理等末端链条，提升综合整治对镇村经济绿色转型的整体效益。"
  }
 },
 "41": {
  "S02": {
   "heading": "zrzyt.hunan.gov.cn_湖南自然资源厅：点赞！湖南2个案例入选全国第三批全域土地综合整治典型案例",
   "date": "2025-06-27",
   "source": "zrzyt.hunan.gov.cn_湖南自然资源厅",
   "url": "https://zrzyt.hunan.gov.cn/zrzyt/xxgk/gzdt/zhxw_1/202506/t20250627_33723653.html",
   "body": "中华人民共和国自然资源部\n\n湖南省政府门户网站\n\n点赞！湖南2个案例入选全国第三批全域土地综合整治典型案例\n\n时间：2025-06-27 15:48\n\n6月25日，自然资源部发布第三批17个全域土地综合整治典型案例，益阳市赫山区兰溪镇全域土地综合整治项目、怀化市沅陵县官庄镇全域土地综合整治典型案例成功入选。\n\n案例在空间布局优化、生态价值实现、群众全程参与、推进机制创新、推动产业发展等方面为其他地区提供了可借鉴的宝贵经验。\n\n中国政府网 中华人民共和国自然资源部 湖南省政府门户网站"
  },
  "S03": {
   "heading": "huaihua.gov.cn_怀化市人民政府：辰龙关下听潮声 ——沅陵县官庄镇全域土地综合整治纪实",
   "date": "2025-10-01",
   "source": "huaihua.gov.cn_怀化市人民政府",
   "url": "https://www.huaihua.gov.cn/huaihua/c101116/202510/b3ee7c20c46746889dcd8fa27239087b.shtml",
   "body": "辰龙关下听潮声 ——沅陵县官庄镇全域土地综合整治纪实\n\n发布时间：2025-10-01 10:02 信息来源：怀化新闻网\n\n辰龙关下听潮声\n\n——沅陵县官庄镇全域土地综合整治纪实\n\n苏春生 李文武 瞿云\n\n在湘西连绵的群山间，辰龙关雄踞千年，见证过古驿道上的马蹄声碎，也目睹过沅水河畔的岁月沧桑。如今，这座镌刻着“天下第一关”印记的雄关之下，正激荡着土地变革的澎湃潮声。湖南省沅陵县官庄镇全域土地综合整治的春风，让311.6平方公里的土地破茧重生，曾经碎片化的耕地连田成片，破损的生态重披绿装，沉寂的乡村焕发活力，在古老的辰龙关下铺展开“田畴沃野、茶海飘香、山水相依、百姓安康”的乡村振兴新画卷。\n\n破局：雄关之下谋新篇\n\n官庄镇清晨的阳光掠过辰龙关连绵的茶园，洒向海沙坪村的稻田。69岁的村民张建国总会沿着新修的田埂走一圈——这片曾经“三亩地分五处，牛都转不开身”的耕地，如今已是连片的高标准农田，田埂上的露水折射着丰收的希望。\n\n但在三年前，官庄人面对的却是另一番景象。作为沅陵县东部的门户重镇，官庄镇35个行政村星罗棋布在山地丘陵间，耕地像“补丁”一样散落山间，2920个地块中，近七成面积不足5亩，大型农机难进场，灌溉水渠年久失修，“种一亩亏一亩”成了不少村民的心病。沃溪矿区的老矿工还记得，那时的矿山“晴天一身灰，雨天一身泥”，裸露的山体在暴雨后常引发滑坡；主埠溪村的主妇们曾为家门口的污水沟发愁，垃圾乱堆、蚊蝇乱飞成了美丽乡村的“拦路虎”。\n\n“土地是根，土地不活，乡村难兴。”沅陵县委书记在官庄调研时的这句话，点燃了全域土地综合整治的火种。县委、县政府迅速将申报、实施官庄镇全域土地综合整治国家级试点工作列为“头号工程”，成立由县长挂帅的领导小组，从自然资源、农业农村等12个部门抽调32名骨干组建工作专班，在官庄镇设立项目工程实施办公室，构建起“县里统筹、部门协同、镇村落实”的三级作战体系。领导小组、工作专班每周一次现场调度会、每月一轮进度通报、每季一场成效考核，让各部门从“各管一摊”变为“攥指成拳”。\n\n项目的实施，关键在规划。项目专班带领技术团队历时3个多月，摸清了314.38公顷耕地现状，踏勘了13处生态受损点，走访了20余处传统村落，召开了60多次座谈、屋场会，征求了20多个单位、40多个集体经济组织意见，描绘出官庄镇“一个中心、四个示范片”全域土地综合整治蓝图：集镇中心通过“白改黑”道路升级、雨污管网改造焕发新颜；辰龙关产业融合示范片串联茶旅、文旅资源；海沙坪土地整治示范片打造连片农田；沃溪生态修复示范片重现绿水青山；马家坪人居环境示范片留住乡愁记忆。\n\n资金难题的破解，让蓝图有了落地的底气。沅陵县委、县政府创新全域项目“财政投、企业帮、银行贷、市场补”的多元筹资模式：整合县级财政涉农、林、水等各类资金2.11亿元，重点投向农田、水利；辰州矿业、西澳矿业等驻地企业安排7224万元，反哺家乡矿山生态修复；向省农发行融资2.32亿元低息贷款，支持农用地整理；新增耕地指标交易收益“取之于地、用之于地”，形成资金闭环。8.1亿元的总投入，如同毛细血管中的血液，滋养着土地整治的每个细胞。\n\n焕新：四脉同频谱华章\n\n（一）田畴织锦：碎地成方粮满仓\n\n海沙坪村的田埂上，收割机正沿着笔直的田垄驰骋，金黄的稻穗卷入机身，留下阵阵稻香。“以前5亩地分成7块，最大的不到1亩，插秧、割稻全靠人工，累啊！”张建国站在田埂上，望着连片的稻田感慨万千。如今，他家的零散地块通过“小改大、陡改缓、碎改整”并入百亩农田，灌溉水渠通到田边，机耕道路直达地块，亩产比往年增加。\n\n官庄镇通过全域土地综合整治项目的实施，用“绣花功夫”重塑耕地格局。采取移土培肥、坡改梯田、地块合并等方式，新增耕地77.5公顷，建成百亩以上连片耕地7片，面积小于5亩的耕地图斑减少7.2%；314.38公顷高标准农田里，混凝土灌溉渠纵横交错，田间道路四通八达，土壤有机质含量提升12%。\n\n全域项目的实施，让土地“颜值”得到提升，带来了实实在在的“价值”增长。2024年，官庄镇粮食总产较整治前增加552吨，村民种粮收入新增132.5万元。镇里成立的土地合作社统一流转新增耕地，引进优质稻种和绿色种植技术，按“保底租金+盈余分红”模式让村民受益。“现在土地流转有租金，务工有工资，年底还有分红，一亩地的收益顶过去两亩！”海沙坪村种粮大户宋四海算起收入账，脸上笑开了花。\n\n（二）山水含情：生态修复展新颜\n\n杨家溪的堤坝上，村民们正悠闲地散步，清澈的溪水在新建的生态堤坝间流淌，岸边垂柳依依，远处青山如黛。谁能想到，这里曾是“雨天看海、晴天吃灰”的水毁重灾区。2021年汛期，洪水冲毁了原有土坝，淹没耕地200余亩，村民出行只能靠临时搭起的木桥。如今，钢筋混凝土浇筑的堤坝坚固耐用，沿岸种植的护堤林绿意盎然，既保护了耕地和生态，又能汛旱并防，成为防洪观景。\n\n生态修复是最普惠的民生工程。通过全域项目的实施，在沃溪矿区，曾经的废弃矿坑被回填平整，种植了楠木、桂花等乡土树种，120公顷裸露山体披上绿装，新建的生态公园里，健身步道蜿蜒其间，成了村民晨练的好去处。界亭驿村的溪流经过清淤疏浚、生态护坡建设，水质从劣Ⅴ类提升至Ⅲ类，村民们又能在溪边洗菜浣衣，孩子们重拾了摸鱼捉虾的乐趣。\n\n金洲溪等7个美丽村寨的建成，让乡村成了“望得见山、看得见水、记得住乡愁”的家园。主埠溪村实施“厕所革命”，家家户户用上卫生厕所；马家坪村开展垃圾分类，村容村貌干净整洁；界亭驿村修复古民居，青石板路连接起家家户户。村民们在房前屋后种花种草，村口的文化广场上，傍晚总能听到欢快的广场舞音乐，幸福的笑容映在每个人脸上。\n\n（三）茶香药韵：产业融合促增收\n\n辰龙关观光园的茶园里，游客们正品尝着刚冲泡的碣滩茶，茶汤清澈明亮，茶香沁人心脾。窗外，300多公顷茶园层层叠叠铺向远山，采茶姑娘的身影点缀其间，构成了一幅动人的田园画卷。“这茶比往年香多了！”来自长沙的游客李女士赞不绝口，她不知道，这片茶园经过品种更新和生态改良，茶叶品质已提升一个档次。\n\n全域项目的实施，让官庄镇特色产业插上了翅膀。项目采用“公司+合作社+农户”模式，在双泉、鱼儿山等村开发200多公顷黄柏药材基地，药企提供种苗和技术，村民负责种植，采收后按保底价收购。界亭驿、太平铺等村的老茶园完成提质改造，引进“黄金芽”“中黄3号”等优良品种，推广有机肥替代化肥、病虫害绿色防控技术，茶叶单价提高30%以上，亩均增收2000元。\n\n全域项目的实施，让官庄镇“农业+旅游+文化”得到了融合发展，让土地生出更多“金疙瘩”。辰龙关完善了游客中心、观光步道、茶文化体验馆等设施，推出“采茶体验+茶艺学习+民宿住宿”的旅游套餐；红军“火把”照亮辰州坪、夜过王家田等红色故事被挖掘整理，打造红色研学线路。2024年国庆、中秋假期，官庄镇接待游客8万人次，较上年翻番，200多家餐饮民宿、特产商店收入同步增长，5000多村民在家门口实现增收。\n\n（四）四区联动：示范引领树标杆\n\n官庄集镇的农贸市场里人声鼎沸，新修的柏油马路宽敞整洁，两侧商铺招牌统一亮眼，管网改造后再也没有“雨天积水、晴天堵管”的烦恼。集镇上的人们都在赞赏全域项目带来的变化，集镇中心通过基础设施升级，集聚效应显著增强，辐射带动周边5个村发展。\n\n辰龙关至界亭驿产业融合示范片里，古驿道串联起茶园、民宿和文化景点，“游辰龙关、品碣滩茶、住农家院”成了热门旅游线路；海沙坪至太平铺土地整治示范片，连片的高标准农田不仅产出粮食，更成为“稻浪翻滚”的田园景观；沃溪生态修复示范片，昔日的矿山废墟变身生态公园，诠释着“绿水青山就是金山银山”理念；马家坪至主埠溪美丽乡村示范片，干净整洁的村落、错落有致的民居，成为人居环境整治的样板。\n\n四个核心示范片如同四颗明珠，被乡村公路串联成链。在辰龙关产业示范片，茶旅融合年接待游客10万人次；在海沙坪示范片，连片农田带动粮食增产20%；在沃溪示范片，生态修复让森林覆盖率提高6个百分点；在马家坪示范片，人居环境整治让村民满意度达100%。四区联动、各美其美，共同勾勒出官庄镇高质量发展的清晰轮廓。\n\n致远：经验弥香启新程\n\n辰龙关的茶香飘向远方，也捎去了官庄镇全域土地整治的宝贵经验。这场历时三年的全域土地综合整治，不仅改变了乡村的面貌，实现了村村受益，人人增收，为乡村振兴提供了生动样本，更探索出一套可复制、可推广的“官庄模式”，先后被评为全省全域土地综合整治试点典型案例，列入《湖南省自然资源领域生态产品价值实现典型案例》，入选全国第三批全域土地综合整治典型案例。\n\n规划引领绘蓝图是项目成功的前提。官庄镇坚持“全域统筹、三生融合”理念，以国土空间规划为引领，打破“头痛医头、脚痛医脚”的零散整治模式，将生产、生活、生态空间优化纳入一盘棋。“一个中心、四个示范片”的布局既立足当下，又着眼长远，确保“一张蓝图绘到底”，避免了重复建设和资源浪费。\n\n机制创新聚合力是项目推进的保障。“三级推进体系”实现上下联动，多元筹资机制破解资金瓶颈，村民参与机制凝聚共建合力。特别是“新增耕地指标交易+产业收益反哺”的闭环模式，让土地整治形成可持续的内生动力，为项目长期推进提供了资金保障。\n\n民生为本增福祉是项目的核心追求。从平整土地让村民种粮省力增收，到修复生态让乡村环境宜居宜业，再到发展产业让群众致富门路更宽，官庄镇始终把群众满意作为出发点和落脚点。通过村民议事会、监督小组等方式，让群众全程参与规划、建设、验收，从“要我整治”变为“我要整治”，真正成为土地变革的主人。\n\n产业融合促长效是项目发展的关键。官庄镇不满足于“修田造地”的表层整治，而是深耕“土地整治+特色产业”的融合路径，让整治后的土地既产粮食又产风景，既增良田又增收益。茶叶、药材、旅游等产业的蓬勃发展，让土地资源持续产生经济效益，实现了“整治一片、激活一片、富裕一片”的良性循环。\n\n夕阳西下，辰龙关被镀上金边。山脚下，村庄炊烟袅袅；茶园里，晚风送来清香。如今的官庄，田成方、路相通、渠相连，山更青、水更绿、村更美，村民的腰包鼓了，笑容甜了，对未来的盼头更足了。这场土地的新生，不仅是空间的重塑，更是发展理念的革新，是乡村振兴的生动实践。\n\n辰龙关下的潮声仍在回响，官庄镇的发展还在继续。关于全域土地综合整治的经验和模式，如同辰龙关的茶香一般醇厚绵长，正飘向更多需要的乡村，为乡村振兴注入源源不断的力量。\n\n[打印本页] [关闭窗口]"
  },
  "S04": {
   "heading": "yuanling.gov.cn_沅陵县人民政府：易中华到官庄镇调度全域土地综合整治工作",
   "date": "2024-12-03",
   "source": "yuanling.gov.cn_沅陵县人民政府",
   "url": "https://www.yuanling.gov.cn/yuanling/c108845/202412/73754be41a394146a1616c70dd71eb5a.shtml",
   "body": "易中华到官庄镇调度全域土地综合整治工作\n\n沅陵县人民政府门户网站 www.yuanling.gov.cn 发布时间：2024-12-03 15:45\n\n12月2日，县委副书记、县长易中华到官庄镇调度全域土地综合整治工作，对全域土地综合整治工作相关项目进行再调度、再梳理、再推进。他强调，要提高认识、聚焦重点、强化保障、总结经验，一以贯之、一鼓作气地圆满完成全域土地综合整治工作收官任务，走完“最后一公里”。\n\n易中华先后在官庄镇海沙坪村、沐濯铺村调研生态流域治理、基础设施建设项目和高端蔬果基地、新增耕地开发等全域土地综合整治相关项目，听取项目建设情况汇报。\n\n易中华指出，全域土地综合整治怎么整治、整治什么，经过几年不断地探索、总结、创新，我们开阔思路，丰富了内容，规范了做法，融合了基础设施、公共服务设施、产业发展、和美乡村建设，收获了显著的政治效益、环境效益、经济效益和社会效益。在工作推进中，干部们得到很好的锻炼，既能“守正”，更能“创新”，全域土地综合整治既发挥金融工具作用，又推进了产业发展、承担了部分工业建设。官庄镇的整体格局面貌得到改善，为其他地域提供了可借鉴，可复制、可推广的模式。\n\n易中华强调，要直面当前项目推进中存在的问题，提高思想认识，绝不松懈，一个一个化解工作推进、项目建设、要素保障、完善公共资料、迎接总结等过程中的问题，突破难点堵点，确保在规定的时间内全面完成试点任务。要全力推进重点工作，不折不扣完成耕地指标、耕地恢复任务，全力推进产业发展项目。基础设施建设已开工的跟进完成，未开工的按照“打造亮点、打造特色、集中连片”优化方案，把产业发展、和美乡村建设、耕地恢复和生态修复项目尽快落地。官庄镇的新农村雏形基本具备，但产业发展存在量不足、质不优、辐射带动益农能力不强的问题，要把项目增量、存量要盘活、做优，推动农业产业化。\n\n易中华强调，不谋全局者不足以谋一域，不谋全局者不足以谋一时。要走在前列，干到实处，致力于把官庄镇建设成“林海”“金都”“茶乡”和重要的蔬菜集散基地。要强化政策、资金等方面的要素保障，确保项目验收一次性过关，总结出“沅陵亮点”“沅陵模式”“沅陵智慧”“沅陵经验”。要考虑工作实际，创造性地总结工作经验。总结的经验既要与时俱进，又要有沅陵特色。要建立常态化的高效有效有序的工作推进机制，高频次调度，确保全域土地综合整治工作圆满收官，打造土地整治的示范、投融资的典范、产业发展的标杆、乡村振兴的样板。\n\n县领导黄松柏，县直相关单位负责人参加。\n\n信息来源：沅陵融媒 作者：张贝 舒宇 责任编辑：全冬慧"
  },
  "S05": {
   "heading": "yuanling.gov.cn_沅陵县人民政府：沅陵：久久为功 一以贯之 打好全域土地综合整治“收官战”",
   "date": "2025-05-26",
   "source": "yuanling.gov.cn_沅陵县人民政府",
   "url": "https://www.yuanling.gov.cn/yuanling/c108845/202505/11a024a6623f4276a1abbc4472c7f6fa.shtml",
   "body": "沅陵：久久为功 一以贯之 打好全域土地综合整治“收官战”全力做好试点申报工作\n\n沅陵县人民政府门户网站 www.yuanling.gov.cn 发布时间：2025-05-26 10:05\n\n“实施全域土地综合整治，不仅能拓展发展空间，修复生态环境，加强耕地保护，还能促进农业现代化和农民增收，助推乡村振兴，并撬动产业转型，优化生产力布局，促进一二三产业融合发展，是推动我县实现高质量绿色发展的重要保障”。5月23日，县委副书记、县长易中华在官庄镇调研全域土地综合整治项目收尾暨二酉太常片区全域土地综合整治项目申报工作时指出。并围绕工程进度、要素保障以及项目资金等关键点工作进行安排调度。县领导黄松柏、李万喜等参加。\n\n当天，易中华先后实地查看了全域土地综合整治试点工程界亭驿桥、青少年体验中心项目建设进程，详细了解项目建设进度。易中华强调，要加快项目建设步伐，确保早日竣工投用；科学优化建设方案，合理控制成本；充分发挥项目资源优势，激活景区发展活力，推动区域经济高质量发展。\n\n易中华在听取全域土地综合整治项目工作专班、官庄镇全域土地综合整治项目实施及二酉太常片区全域土地综合整治项目融资、试点项目申报等情况汇报后强调，要强化党建引领，充分发挥镇村两级党组织作用，将党建贯穿工作全程；坚持问题与结果导向，靶向攻坚、专人专责，让群众切实感受整治成效。同时，要将官庄镇经济发展与群众身边腐败整治紧密结合，立足长效，通过党委统筹、纪委监督，以严格问责推动整治走深走实。\n\n项目自实施以来开拓创新、积极探索，取得了一系列的成果，特别是“全域+水系流域治理”“全域+矿山修复”“全域+美丽乡村建设”“全域+文旅开发”等四个“全域+”模式既突出了耕地“三位一体”保护原则又对环境生态保护、生态项目推进、乡村振兴等方面起到了很好的推动和代表性作用。易中华肯定了官庄镇全域土地综合整治项目第一阶段取得的阶段性成果，他指出，官庄在收官之年要持续深化建设，全力擦亮“当好示范、打造样板、树立标杆”品牌，推动政治效益、经济效益、社会效益与环境效益齐头并进。\n\n易中华强调，各级各部门要积极担当作为、扎实履职尽责，做实做细二酉太常片区全域土地综合整治项目试点规划、申报和实施等各项工作，要聚焦产业协调、资金安排等重点，就资产盘活、预算规划等提出解决方案，并对资金管理、验收推进、宣传推广等工作作出全面部署。要始终坚守“绿色生态是底色、古色记忆是主色、红色文化是根本”的发展理念，以更高标准、更实举措全力推动全域土地综合整治项目高效实施，确保项目建设取得更大成效。\n\n信息来源：沅陵融媒 作者：陈光旭 陈美君 责任编辑：全冬慧"
  }
 },
 "42": {
  "S02": {
   "heading": "iziran_中国自然资源报：重庆市地理信息和遥感应用中心以数字化赋能全域土地综合整治",
   "date": "2025-07-18",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5412179",
   "body": "近日，自然资源部发布第三批17个全域土地综合整治典型案例，重庆市梁平区铁门乡全域土地综合整治项目成功入选。该项目在梁平区规划和自然资源局指导下，由重庆市地理信息和遥感应用中心承担数字化场景构建，创新打造的“一张图”“一本账”“一画像”数字化赋能全域土地综合整治体系，成为案例的核心亮点。\n\n在构建铁门乡全域土地综合整治数字化场景时，重庆市地理信息和遥感应用中心运用实景三维、空间数据治理、可视化等数字化手段，搭建“一张图”，实现对生命周期数据要素的全面感知；建立“一本账”，全景呈现多维目标的实施成效；形成“一画像”，有效助推乡村土地价值的实现。数字化场景为推动国土空间规划蓝图落地、提升乡村国土空间治理水平提供了有力支持。\n\n近年来，重庆市地理信息和遥感应用中心高度重视数字化与业务的融合，整合数据治理、资源评估、数字化、规划编制等技术力量，在应用场景构建、资源潜力分析、规划方案编制等业务方面持续创新，不断深化服务内容，全力为全域土地综合整治工作提供支撑。（张少佳）"
  },
  "S07": {
   "heading": "cq.news.cn_新华网重庆频道：看梁平铁门乡如何从撂荒地蝶变美丽宜居乡村",
   "date": "2025-05-27",
   "source": "cq.news.cn_新华网重庆频道",
   "url": "http://cq.news.cn/20250527/aca1bee236f34ff7b7b15a6c558b85d2/c.html",
   "body": "铁门社区，金色的水稻与村舍、远山构成一幅乡村美景图。（资料图片）通讯员 熊伟 摄\\视觉重庆\n\n“插秧啰……”5月15日，梁平区铁门乡铁门社区，50岁的田善高带着50多位老人下田插秧，久违的农忙场景又回来了。他今年的目标是耕种280亩稻田。\n\n南华山横亘在梁平城区与铁门乡之间，全乡面临土地碎片化、生态功能退化等发展瓶颈……这使得铁门乡在很长一段时间内发展举步维艰。\n\n去年，梁平区在铁门乡铁门社区、长塘村（片区）开展村庄规划统筹引领巴渝和美乡村建设试点。一直梦想在“巴掌田”里种出优质高山香米的田善高，终于把梦想变成了现实。\n\n如今，铁门乡农田路渠通达、矿山绿树成排、农舍白墙黛瓦，变成了美丽宜居乡村。\n\n一轴六区重塑空间格局\n\n铁门乡地处梁平区东南方向，离梁平城区不到20分钟车程，海拔在696米至1113米之间，年均气温17℃，自然生态良好。\n\n以前，当地群众靠采矿、种地养家度日。后来，矿山关停，再加上耕地零碎、村舍破漏、交通不便，青壮年大多选择外出打工谋生。\n\n“都想发展，但哪个地块究竟干什么不明晰。”铁门乡党委书记张旺坦言，以前的规划对“三生”空间统筹不够，尤其对耕地的保护和利用、对闲置建设用地的挖掘和盘活、对生态环境的保护力度不够充分，导致资源闲置和浪费现象明显，发展较粗放。\n\n张旺举例，重庆乾丰农业开发有限公司（以下简称乾丰农业）于2014年落户铁门，一直想投资乡村旅游，但之前可用的建设用地与企业的用地需求不匹配，项目无法落地。\n\n2024年初，梁平区规划和自然资源局组织的乡村规划团队进驻铁门社区、长塘村（片区）。\n\n“山上有水、山腰有景、山下有田，规划要串联片区资源要素打造区域产业发展轴。”乡村规划师龚勤介绍，规划团队立足片区对外交通优势及特色种植资源，以乡村公路为交通主线，谋划生态农业种植区、四季花果种植区、宜居家园示范区、生态林地涵养区、老鹰茶文化体验区、乡村慢生活体验区，总体上形成“一轴六区”的发展空间格局。\n\n规划还明确了发展目标，突出“高山生态田园、宜人原乡风情”两大特色，打造“春赏花、秋赏稻、夏避暑、冬康养”的美丽宜居乡村和渝东北乡村微度假旅游目的地。\n\n千亩碎田变品牌粮仓\n\n在铁门社区八组，过去农田分布零散，既没有水渠，也没有道路，灌溉、运输都不方便，最小的面积仅有0.01亩，人称“烂坝”。\n\n“规划定方向，整治促落地，要确保项目空间不冲突、投资不重复。”铁门乡乡长王海峰介绍，规划团队协同编制村庄规划和全域土地综合整治实施方案，通过村庄规划明确整治区域，以全域土地综合整治细化落实梯田改造、旱地改水田、小微湿地治理、人居环境整治、道路整治等25个子项目，纳入国土空间“一张图”统筹实施。\n\n数据显示，铁门社区、长塘村（片区）累计投入9000余万元，完成农用土地整理5400余亩、建设用地整理180余亩、生态保护修复5700余亩。\n\n特别是生态农业种植区，通过高标准农田建设和土地连片整治，配套实施山坪塘改建、新建蓄水池、灌溉设施、产业道路、电力系统等产业基础设施，实现了永久基本农田提质增效和保障产业项目用地需求的统一。\n\n“烂坝变良田，梦想变成真。”田善高流转了500亩田地，其中280亩稻田过去由400多块大小不一的小块农田组成，“小改大”后变成100余块“田成方、路相通、渠相连”的高标准农田，耕种、管护、收割，大小机械直接开到田里面，省力省心又省钱。\n\n梁平城区小牧羊土菜馆老板李英也到铁门社区流转了300亩稻田。她按照绿色标准种植，全程采用社会化服务，全部种上油菜，两天收完后又全部种上水稻。现在，李英还注册了铁门百善香米、稔百善香米两个品牌，每斤大米价格卖到了10元。\n\n据统计，铁门社区、长塘村（片区）土地流转从2022年的800亩提升至2024年的2700亩，亩均流转价格从每亩280元增加至370元。\n\n矿坑荒塘变旅游景区\n\n今年6月，位于长塘村一组的乡村亲子项目将建成投用。届时，这个以“自然探险+欢乐水世界”为主题的乡村旅游项目，将为儿童提供综合性体验。\n\n“村庄规划优化了项目空间布局，依法保障了项目的用地需求，我多年的梦想也终于落地。”项目投资方乾丰农业总经理凌云称，落户铁门10余年，公司先后建成果园、蔬菜、香菇基地，但因之前用地条件不明确，乡村亲子项目迟迟未能实施。去年，铁门乡通过村庄规划融合全域土地综合整治，全面梳理出可用的村庄建设用地指标，为项目布局提供了指标来源。\n\n铁门乡一产基础较好，但二三产薄弱。规划团队在村庄规划中提出“以农业为基础，农文旅融合发展”的思路，注重生态修复与环境整治相结合，对废弃的坑塘、荒地、矿山进行生态治理，谋划布局长塘农产品加工厂、金竹坪康养中心、樱花园民宿、乾丰农业A区项目、四方矿山度假营地等12个项目。\n\n记者了解到，乡村亲子项目就建在闲置的荒坡、矿坑之上，长塘村年产值50万元的火贸香菇基地也是由原来的撂荒池塘改建而来。\n\n“茶稻花果香，生态幸福地。”梁平区规划和自然资源局村规科科长胡琼方称，“村庄规划+土地整治”推动了铁门乡一二三产增速发展，吸引返乡创业人员300余人，先后成功打造百年老鹰茶、高山优质水稻、大小白水两景区、乾丰农业园、樱花节等品牌和项目，180余户农民就近就业务工，全年游客接待量约10万人次，年收益约3000万元。\n\n【纠错】 【责任编辑:彭博】"
  },
  "S10": {
   "heading": "cq.xinhuanet.com_新华网重庆频道：巧治土地“零碎账” 乡村振兴奏“丰”谣——重庆梁平全域土地综合整治",
   "date": "2025-04-22",
   "source": "cq.xinhuanet.com_新华网重庆频道",
   "url": "http://www.cq.xinhuanet.com/20250422/4da767da72bb4b94999e4f6b838969a4/c.html",
   "body": "春日暖阳下，重庆市梁平区铁门乡长塘村的一处田地里，成片的油菜为大地披上新装。曾经零碎的土地变为如今的连片良田，正是全域土地综合整治带来的变化。\n\n图为重庆市梁平区铁门乡长塘村“小田变大田”土地综合整治后集中种植的油菜田。新华社记者周滨滔 摄\n\n“这里是梁平高山优质水稻的主产地，现在我们利用冬闲田种上油菜，等5月油菜收割后，就接着种水稻。”种粮大户何显华告诉记者，“2021年，村集体将土地流转给我们进行耕作，土地集中后，机械化普及率大幅提升。如今，我们的水稻种植面积已经达到了1000亩，每亩地产量近1000斤，相比之前每亩增加了三四百斤，优质大米的收益也从每斤3元提高到8元。”\n\n近年来，梁平区科学制定全域土地综合整治实施方案，对整治区内的农田、水系、道路、林地和村落进行系统规划，实现生态空间、生产空间和生活空间的整体优化布局。\n\n“全域土地综合整治是和美乡村建设的重要抓手。我们通过搭建数字化应用场景平台，运用实景三维、空间数据治理、可视化技术等数字化手段，助力解决农村耕地破碎化、空间无序化、土地利用低效化等问题。”梁平区规划和自然资源局党组书记、局长綦勇说。\n\n图为梁平区铁门乡全域土地综合整治数字化综合场景。（梁平区规划和自然资源局供图）\n\n为切实发挥土地效益，长塘村对区域农田进行综合整治，通过“村集体+公司（大户）+农户”的模式，将农户的土地流转到村集体，再统一向农业生产企业或大户出租。农户不仅能获得土地流转收入，还可以通过在这些公司或大户的田地里劳作，取得务工收入。\n\n通过土地整治，“小田变大田”效果逐渐显现，土地利用率大幅提高，曾经田地分散、土地撂荒的问题得到有效解决，也推动了相关产业的发展。\n\n在长塘村火贸香菇基地，村民江芬正在和工友一起搬运菌包。“香菇基地建成后，我们也可以在家门口挣钱了！”江芬兴奋地说。\n\n4月17日，重庆市梁平区铁门乡长塘村村民江芬正在与工友搬运菌包。新华社记者周滨滔 摄\n\n长塘村火贸香菇基地曾是一片撂荒水塘，经过土地整治后，村里建起菌菇种植大棚，目前年产值近200万元，增加了村集体经济收入，也带动了30名左右村民就近务工。\n\n“开展全域土地综合整治后，我们引入了高山水稻种植、香菇种植、农家乐经营等，去年村集体经济收入近30万元，全村人均收入提高了1000多元。”长塘村党总支书记、村委会主任邓大飞说，项目为村民们带来了实实在在的好处。\n\n“下一步，我们将继续打造一批有特色的示范项目，以点带面逐步扩大影响，持续发挥全域土地综合整治助力乡村振兴、助推城乡融合发展的重要作用。”重庆市规划和自然资源局生态修复处副处长蔡建军说。（记者吴梦桐、周滨滔）\n\n【纠错】 【责任编辑:李海岚】"
  },
  "S03": {
   "heading": "nyncw.cq.gov.cn_重庆市农业农村委员会：全域土地综合整治持续推进 激活乡村振兴新动能",
   "date": "2025-05-08",
   "source": "nyncw.cq.gov.cn_重庆市农业农村委员会",
   "url": "https://nyncw.cq.gov.cn/zwxx_161/mtbb/202505/t20250508_14592006.html",
   "body": "全域土地综合整治持续推进 激活乡村振兴新动能\n\n语音合成中，请耐心等待...\n\n进入播报模式\n\n退出播报模式\n\n近年来，重庆以全域土地综合整治为抓手，精准实施镇村国土空间规划，促进耕地保护和土地集约节约利用，为乡村产业发展、农民持续增收提供了有力支撑。\n\n走进梁平区铁门乡长塘村党群服务中心，三维实景地图正在大屏幕上跳动。工作人员轻点屏幕，农用地整治、建设用地整理、生态保护修复等3大类项目信息实时呈现。经过持续建设，铁门乡已构建起全域土地综合整治数字化综合场景。同时，依托无人机智能基站，支撑全域土地综合整治周期监管、招商引资项目选址、违法建设巡查等应用。\n\n梁平区国土整治中心副主任王锐说：“我们有了这个无人机巡航监测之后，没有发生任何一起违法占耕占地的情况，因为我们搭建了这个平台，整合各个部门的资金，避免了5个项目的重复选址，节约了政府资金400余万元。”\n\n据了解， 铁门乡的全域土地综合整治始于2023年，按照全域规划、全域设计、全域整治的理念，对项目区的生产、生活和生态价值进行了全面挖掘。在长塘村，政府累计投入资金500余万元，完成沟渠整治1公里、产业道路建设1公里、高标准农田改造500亩， 一幅阡陌纵横的山水田园画卷正徐徐展开。\n\n梁平区铁门乡长塘村党总支部书记邓大飞介绍，以前他们这些土地无人问津，通过全域整治项目，这些土地变成了“抢手货”，许多老板过来投资。“比如成片发展高山优质水稻，包括我们这个香菇、老鹰茶，现在我们村集体有了稳定的收益”。\n\n梁平区铁门乡长塘村村民黄国玉告诉记者：“每天有60块钱收入，还可以照顾屋头，做点事业，还可以嘛，好嘛。”\n\n梁平区规划和自然资源局党组书记、局长綦勇透露，根据国土空间总体规划，他们编制了梁平区全域土地综合整治专项规划，总共把全区分为17个实施单元，通过整治优化了耕林空间，促进耕林高效利用。\n\n市规划自然资源局介绍，自推进全域土地综合整治以来，我市已实施农用地整理近7万亩，新增机械化耕作面积2.3万亩，实施各类生态修复工程约5万亩，腾退盘活低效建设用地近600亩。\n\n市规划自然资源局生态修复处副处长蔡建军表示，下一步将强化规划协同引领，强化涉农资金项目整合，建立多元化的投融资机制，进一步完善数字应用场景建设，助力乡村振兴，助推城乡融合发展。（重庆广电-第1眼TV记者 刘畅 贺应桃 特约记者 周洁）"
  }
 },
 "43": {
  "S01": {
   "heading": "zrzy.jiangsu.gov.cn_江苏自然资源厅：产教融合绘就乡村新图景——江苏常州邹区镇全域土地综合整治典型案例获自然资源部推广",
   "date": "2025-06-26",
   "source": "zrzy.jiangsu.gov.cn_江苏自然资源厅",
   "url": "https://zrzy.jiangsu.gov.cn/cz/gtzx/gzdt/202506/t20250626_1798691.htm",
   "body": "在第 35 个全国“土地日”来临之际，自然资源部公布了第三批 17 个全域土地综合整治典型案例名单，江苏省常州市钟楼区邹区镇 “ 殷杏泰 ” 产教融合试验区项目成功入选。这一创新实践通过 “ 全域整治 + 城乡融合 + 职教赋能 ” 的复合治理模式，为破解城乡二元结构、推动乡村振兴提供了可复制可推广的“常州方案”。\n\n破题：土地碎片化困局下的创新突围\n\n邹区镇地处常州市西大门，区位优势显著，却长期面临 “ 三大痛点 ” ：耕地碎片化制约现代农业发展，宅基地分散导致土地资源浪费，生态退化阻碍价值转化。如何盘活 7578 亩整治区域，成为摆在当地政府面前的一道难题。\n\n“ 我们创新提出‘产教融合驱动城乡融合’的发展思路，让职业教育成为乡村振兴的‘智库’和‘创新源’。 ” 邹区镇党委书记介绍。项目依托江苏省首批职教特色小镇 —— 殷村职教小镇的资源优势，在殷村、杏塘村、泰村村开展系统性空间重构。\n\n实践： “ 四位一体 ” 整治重塑乡村肌理\n\n农用地整治 交出亮眼答卷。通过土地平整、坑塘填埋等措施，项目区建成 474 亩高标准农田，配套智能灌排系统实现全程机械化。更令人欣喜的是， 3547 亩集中流转的现代农业示范区已逐渐成为职教师生 “ 田间数字课堂 ” 。\n\n建设用地盘活 展现集约智慧。通过 “ 宅基地有偿退出 + 农房置换 ” 模式，项目腾退建设用地 300 亩，建成 2 个现代化村民集建区。盘活的 160 亩存量建设用地通过 “ 校企村 ” 合作，发展出智慧农业、休闲农文旅等新业态，村集体资产实现显著增值。\n\n生态修复工程 绘就诗意画卷。卜泰河、泰村浜等河道经过清淤修复，变身生态景观带。通过水系连通、清淤，铺设生态步道、建设观景台、栽种植物等，治理小微水体，改善村庄环境。修复后的生态空间融入职教研学与文旅功能，构建 “ 生态 + 职教 + 文旅 ” 的融合场景，让乡村颜值与价值同步提升。\n\n公共空间治理 推动配套化与智慧化融合，职教推动乡村治理创新。引入标准物业，试点“数字乡村”治理模式。职教师生参与设计实施，运用数字化技术赋能网格治理，实现“身边事不出网格、小事不出村”，为加强农村社会治理水平提供有力支撑，进一步激活乡村治理内生动力。\n\n机制：创新驱动激活内生动力\n\n项目成功的关键在于构建了 “ 三大创新机制 ” ： 政策创新 ：出台宅基地审批、有偿退出等系列政策，建立农村资源资产处置制度体系； 融资创新 ：争取农发行信贷资金，探索 “ 校企村联合 ” 资金平衡模式； 治理创新 ：设立 “ 村民议事堂 ” 民主协商平台，实现 “ 村民需求清单 ” 与 “ 规划设计蓝图 ” 精准对接。这种共建共治共享的治理模式，让乡村振兴真正成为全民参与的生动实践。\n\n成效：三生融合结出丰硕成果\n\n经过三年实践，项目区实现 “ 三个转变 ” ： 生产方式 ：村民年均土地流转收入增加 1120 元 / 亩，亩均收益从 1200 元跃升至 2600 元； 生活方式 ：建成 655 套现代化宜居农房、 70 套公寓， 80% 村级事务实现线上办理； 生态方式 ：形成 “ 水清、田美、人和 ” 的生态样板，“杏花春雨”品牌价值突破千万元。更可喜的是，职教资源与乡村发展形成良性循环。江苏城乡建设职业学院等院校培育的新型职业农民超过 100 名，常州卫校带来的医疗康养资源让乡村服务品质显著提升。\n\n启示：为城乡融合提供示范样本\n\n在 6·25“ 土地日 ” 主题宣传活动上，常州市自然资源和规划局钟楼分局相关负责人指出，邹区镇案例的创新价值在于：探索了 “ 空间整治与产业培育同步规划 ” 的实施路径；构建了 “ 职教资源与乡村需求精准对接 ” 的长效机制；形成了 “ 政府引导、市场运作、公众参与 ” 的多元协同格局。\n\n邹区镇杏塘村农业公司杏花春雨负责人评价： “ 这种‘产教融合 + 全域整治 ' 模式，为破解城乡要素流动障碍提供了创新方案。 ” 站在新的起点上，邹区镇正谋划新一轮发展蓝图。镇党委副书记表示： “ 我们将深入贯彻‘节约集约用地 严守耕地红线 ' 的土地日主题，让每一寸土地都焕发更大生机，书写新时代乡村振兴的精彩篇章！”（钟楼分局）"
  },
  "S03": {
   "heading": "zrzy.jiangsu.gov.cn_江苏自然资源厅：江苏省常州市钟楼区邹区镇全域土地综合整治典型案例——产教融合绘就乡村振兴新图景",
   "date": "2026-04-17",
   "source": "zrzy.jiangsu.gov.cn_江苏自然资源厅",
   "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d57dqr/jsxcg/2026/04/17150032255860.html",
   "body": "摘要： 常州市钟楼区邹区镇全域土地综合整治项目以“殷杏泰”产教融合试验区为核心载体，通过系统性重构“生产-生活-生态”空间格局，创新形成“全域整治+城乡融合+职教赋能”的复合治理模式。项目覆盖杏塘村、泰村村2个行政村，整合7578亩土地资源，通过农用地整治、建设用地盘活、生态保护修复、公共空间治理等综合性措施，实现耕地连片化、建设用地集约化、生态空间网络化，推动职教资源与乡村发展深度融合。项目依托江苏省首批职教特色小镇优势，构建北部现代农业区、中部产业集聚区、南部美丽乡村智创区的功能布局，为城乡融合发展提供可复制经验。 一、案例背景 （一）基本情况 邹区镇位于常州市西大门，紧邻常州机场，大运河、国道、高铁、高架、高速交汇，区位优势明显。全镇行政区域面积66.15平方公里，辖17个行政村、4个社区，全镇常住人口10万余人。邹区镇先后荣获国家级生态镇、江苏省新型示范小城镇等国家、省级荣誉。镇域以灯具生产、新材料、电子、旅游用品为主导产业，坐拥“中国灯具城”、百亿级凌家塘农副产品批发市场及“江苏省首批职教特色小镇”殷村职教小镇。 近年来，邹区镇深化产教融合，联合职业院校打造“智慧农业+乡村文旅”人才培育体系，构建“职教+”复合型产业体系，建成产教融合实训基地，加速技术成果转化，拓展教育装备、培训、营地、文创等多元产业。依托殷村职教小镇资源，项目以 “产教融合 + 土地整治”为双轮驱动，总投资13亿元，聚焦杏塘村、泰村村7578亩整治区域，成功获评江苏省首个全域整治省级示范项目。 （二）主要问题 一是耕地碎片化严重，集中连片程度低，农业基础设施薄弱，制约规模化农业技术推广，难以对接职教体系培育的新型农业技术人才需求，限制现代农业与职教资源的深度融合。 二是分散的宅基地布局及低效工业用地导致土地资源浪费，阻碍了职教资源与乡村空间的整合，不利于职教成果转化与产业项目承接；村庄公共服务配套不足，难以满足职教人才及产业人口的生活需求。 三是河道淤积、水系连通性差，生态功能退化，景观单一，尚未形成与职教文旅、研学等功能融合的生态基底，生态价值向经济价值转化渠道不畅。 （三）目标任务 项目以产教融合为核心引擎，通过全域土地综合整治构建“教育反哺乡村、产业振兴乡村”良性循环，重点实施四大任务： 一是农用地整治。推进耕地细碎化整治，打造“职教实训型农田”，配套智能灌排系统，推动全程机械化，作为职业院校农业实践基地，促进农业生产与人才培育深度融合。​ 二是建设用地整治。通过腾退宅基地和低效工业用地，整合零散建设用地，由村集体出资源、学校赋技术、企业引资本，激活土地价值，促进产教融合。 三是生态保护修复。实施河道清淤、水系连通及生态景观工程，并植入职教研学、文旅体验功能，形成“生态+职教+文旅”融合场景。 四是公共空间治理。依托职教小镇资源，优化基础设施，打造“职教人才扎根、乡村治理反哺教育”的共生空间，提升乡村治理效能。 二、主要做法 （一）以产教融合为纽带，构建“教育-产业-乡村”联动平台 依托殷村职教小镇丰富的院校资源，杏塘村、泰村村与殷村的高校深度共建产教融合实训基地。杏塘村践行数字化农业转型职教实践，与江苏城乡建设职业学院携手，开发独具特色的“田间数字课堂”。该课堂集生产、研学、观光等多功能于一体，组织职教师生与农户结成帮扶对子，开展智能农机操作、数据分析应用等实训活动。同时，杏塘村充分拓展农业多元化功能，积极发展农副产品加工、乡村休闲旅游等产业。泰村村则积极投身职教资源集聚与融合发展，常州卫校在泰村规划落地，形成了强大的职教资源集群效应，提供医疗健康、护理等领域的专业人才，满足当地产业发展的人才需求。后期，泰村村进一步扩大职教资源优势，规划S340省道北侧2000亩土地打造“职教+农业+旅游”深度融合示范区。该示范区未来可承接殷村职教园区的技术溢出，与杏塘村、泰村村的农文旅项目形成联动，加速城乡融合要素的流动，促进城乡一体化发展。 项目区通过“教育-产业-乡村”联动平台，将职教资源转化为乡村振兴的“智库”、“人才库”和“创新源”，不仅构建了“教育反哺乡村”的长效机制，更通过资源整合与协同创新，为乡村振兴培育了可持续的内生发展产业动能，实现“技术反哺乡村、人才扎根乡土、创新激活产业”闭环发展。\n\n图1 项目区产业规划结构图\n\n（二）以空间重构为抓手，实施“四位一体”综合整治 一是农用地整治规模化与智能化并进，职教赋能农业升级。 项目区通过土地平整、坑塘填埋等措施，整合零散耕地建成474亩高标准农田，配套智能灌排系统，实现全程机械化。同时，集中流转农田3547亩形成现代农业示范区，职教师生参与技术推广，技术推广覆盖率达100%。\n\n图2 高标准农田实施前照片\n\n图3 高标准农田实施后照片\n\n图4 现代农业示范区照片一\n\n图5 现代农业示范区照片二\n\n二是建设用地整治集约化与功能化并重，职教助力产业融合。项目区腾退建设用地300亩，通过“宅基地有偿退出+公寓置换”模式，建设2个村民集建区。盘活存量建设用地160亩，通过村集体与职教院校、企业合作，通过入股、联营等方式发展智慧农业、休闲农文旅等项目，职教师生参与规划运营为项目注入创新理念和专业知识，显化集体资产，保障农民权益。\n\n图6 项目区村庄现状图\n\n图7 集中居住区建成后照片\n\n三是生态保护修复：系统化与景观化协同，职教参与生态建设。实施卜泰河、泰村浜等河道清淤及生态修复，打造生态景观带。通过水系连通、清淤，铺设生态步道、建设观景台、栽种植物等，治理小微水体，改善村庄环境。修复后的生态空间融入职教研学与文旅功能，强化“杏花春雨”品牌，构建“生态 + 文旅”收益链。\n\n图8 卜泰河、泰村浜生态治理后照片\n\n图9 杏塘村水系生态治理后照片\n\n四是公共空间治理：配套化与智慧化融合，职教推动乡村治理创新。引入标准物业，试点“数字乡村”治理模式。职教师生参与设计实施，运用数字化技术赋能网格治理，实现“身边事不出网格、小事不出村”，为加强农村社会治理水平提供有力支撑，进一步激活乡村治理内生动力。 （三）以机制创新为保障，激活乡村内生动力 一是创新制度：钟楼区邹区镇人民政府出台宅基地审批、有偿退出、抵押贷款等系列政策，建立农村资源资产处置制度体系，保障农民权益与集体资产增值。 二是创新融资：争取农发行信贷11.5亿元。探索“校企村联合”资金平衡模式，院校（技术、人才）、企业（资金、市场）、村集体（土地、劳动力）共同参与，形成“全域土地整治+三生融合”现金流模式。 三是创新治理：设立“村民议事堂”民主协商平台。建立“校企村联合”治理机制（院校指导、企业参与、村民自治），实现“村民需求清单”与“规划设计蓝图”精准对接。项目区通过“校企村联合”模式开展深度合作，以“院校技术支持、企业投资运营、村委供地供劳”方式，推动项目可持续发展。 三、取得的成效 （一）确立全域视角，乡村发展取得结构性重塑 秉持全域发展理念，统筹规划“生产、生活、生态”三生空间，探索土地规模化、集约化利用新路径。项目实施后，村民年均土地流转收入增加1120元/亩，亩均收益从1200元提升到2600元，建成655套现代化宜居农房、70套公寓，形成“水清、田美、人和”的生态样板。同时，职教资源通过“专业链对接产业链、教学链对接建设链”，培育新型职业农民，为项目区乡村振兴注入持久动能，推动乡村从局部改善迈向全域振兴，完成结构性重塑。 （二）追求宜居和美，村居民生实现根本性改善 以职教创新驱动乡村智慧治理升级。紧扣现代化治理指标，深度融入数字乡村建设体系，探索“职教赋能+ 乡村治理”的简约高效模式。职教师生参与到“数字乡村”治理模式的设计和实施中，通过构建智慧政务平台、搭建数据共享体系、设计智能管理模块，推动农村治理从传统人力模式向数字化、智能化转型。同时，依托职业教育资源优势，面向村民开展数字技能培训，培育本土化智慧治理人才队伍，构建“政府主导、职教支撑、村民参与”的共建共治格局，设置“畅通办”专窗推动便民业务下沉，实现80%以上村级事务线上办理，村民事务办理时间平均缩短 40%；搭建的全域数据共享体系整合3000余户村民基础信息，实现100%村民集中居住区物业化管理，为村居民生改善奠定数字化治理基础，助推乡村治理体系和治理能力现代化迈出坚实步伐。 （三）畅通要素循环，产教融合构建创新生态 一是要素流动加速，职教促进产业协同。通过整合职业教育资源与乡村产业需求，推动了技术、人才、资本等要素的高效流动。职教资源与技术向乡村溢出，智能化、数字化广泛应用，职教师生促进产业协同。在474亩高标准农田和3547亩现代农业示范区实现100%技术覆盖率，农作物单产提升10%，建成的 “田间数字课堂”年接待实训学生200余人次，同步培养新型职业农民100余名，直接带动村集体资产增值100余万元。 二是产业融合发展，职教打造特色品牌。通过“校企村联合”模式，吸引新运集团等国资平台、社会资本投入，与属地村委联合成立农业合资公司“江苏杏花春雨农业科技有限公司”，成功打造“杏花春雨”品牌，开发艺术农场、研学营地、民宿集群等，形成“生态+文旅”收益链，带动本地就业超100人次。 三是人才双向流动，职教吸引人才回流。职教资源集聚和示范区建设吸引人才回流，宜居环境吸引城市人才下乡创业，形成城乡人才双向流动。构建了“教育链—产业链—创新链”协同发展的创新生态，为乡村振兴注入了强大的动能。 四、推广运用前景 常州市钟楼区邹区镇全域土地综合整治工作经验适用于城乡要素流通活跃、具备一定特色产业基础的地区，尤其适用于存在宅基地分散、农业碎片化等空间问题，且具备一定人口流动基础的城乡结合部。这类地区能够依托特色产业资源，为乡村提供定向人才培育、技术输出和创新支持，形成“人才链—产业链”协同基础，便于职教人才、技术、资本等要素向乡村渗透。​ 该项目形成的“产教融合+全域土地整治”双轮驱动模式经验，通过“校企村”合作机制盘活“三生”空间，可在长三角等城乡融合度较高地区推广，为同类项目提供“空间整治与产业培育同步规划、职教资源与乡村需求精准对接”的操作路径。"
  },
  "S04": {
   "heading": "zrzy.jiangsu.gov.cn_江苏自然资源厅常州分局：全省首个“双第一”！钟楼区邹区镇国土空间全域综合整治项目顺利通过市级综合验收",
   "date": "2026-04-17",
   "source": "zrzy.jiangsu.gov.cn_江苏自然资源厅常州分局",
   "url": "https://zrzy.jiangsu.gov.cn/cz/zlfj/gzdt/202604/t20260417_1982939.htm",
   "body": "近日，常州市钟楼区邹区镇国土空间全域综合整治项目顺利通过市级综合验收。作为全省首个获批并首个完成验收的国土空间全域综合整治省级示范项目，该项目历时四年圆满收官，不仅破解了耕地保护与乡村发展难题，更探索出一条可复制、可推广的国土空间治理现代化路径，为全省乡村全面振兴贡献了“钟楼样本”。\n\n聚焦三生空间，重塑城乡发展新格局。 项目自 2022 年 4 月启动以来，聚焦优化“生产、生活、生态”三大空间，高标准建成农田 474 亩、“稻鸭共作”生态种养 250 亩，有效破解农田“零碎化”难题，实现亩均收益翻倍。同时，腾挪建设用地 360 亩，整合搬迁 800 余户农房建成集中居住区，人居环境显著提升。通过卜泰河等水系整治与绿化提升，串联滨水景观，重现江南水乡韵味。\n\n创新产教融合，激活乡村振兴新动能。项目打破单一整治模式，创新构建“产教融合 + 全域整治”模式。依托殷村职教小镇打造“殷杏泰产教融合试验区”，导入优质产业资源，做优“杏花春雨”品牌。通过健全利益联结机制，切实带动村民增收，该模式已成功纳入自然资源部典型案例全国推广。\n\n坚持民生优先，构建治理服务新体系。项目全程一线驻点服务，打通从规划编制到产权登记的全链条难点堵点，完成钟楼区首例集体建设用地拨用手续，核发首本乡村建设规划许可证。最终实现杏塘、泰村 700 多户居民提前约 11 个月回迁入住，切实回应了群众“急难愁盼”。\n\n下一步，钟楼区将以此次验收为契机，持续深化整治成果，总结推广制度经验，以点带面推动全域国土空间治理水平整体提升，为高质量发展提供坚实空间支撑。（资源保护科、综合科）"
  },
  "S05": {
   "heading": "zrzy.jiangsu.gov.cn_江苏自然资源厅常州分局：喜讯！全市唯一！钟楼区案例入选自然资源节约集约示范县（市）第二批创新典型案例",
   "date": "2025-03-11",
   "source": "zrzy.jiangsu.gov.cn_江苏自然资源厅常州分局",
   "url": "https://zrzy.jiangsu.gov.cn/cz/zlfj/gzdt/202503/t20250311_1736747.htm",
   "body": "近日，自然资源部公布了自然资源节约集约示范县（市）第二批创新典型案例，钟楼区《全域整治推动资源重组 存量盘活赋能乡村振兴》案例入选，全市唯一。\n\n近年来，钟楼区用好全域土地综合整治关键一招，高效整合优化资源配置，量质并重加强耕地保护，精细管理赋能乡村振兴。邹区镇全域整治项目作为全省首家通过省级审查、首家获得省级批复的“全域整治省级示范项目”，历时 3 年，总投资 5 亿元，各项试点工作进展顺利， 2025 年将迎来终期考核验收，改革试点进入出成果、出经验的关键一年。\n\n农地整治，促进农业生产“拓空间”\n\n以全域土地综合整治为抓手，统筹推进农用地布局优化和耕地提质改造，破解乡村农田“零碎化”现状。邹区镇通过高标准农田建设、占补平衡补充耕地等项目，统筹推进农田整治、农田基础设施建设，建成高标准农田 450 亩，发展“稻鸭共作”生态种养项目 250 亩，亩均收益从 1200 元提升至 2600 元，显著提高了土地利用率和产出率。\n\n闲地整治，唤醒集体资产“再生金”\n\n通过污染产业腾退清理、低效产业用地置换、关联产业入园上楼等措施整治闲散建设用地，腾挪出 345 亩建设用地，并结合村庄规划，搬迁整合 800 余户农房，建设集中居住区。整治后的耕地集中流转，村民获得土地流转费，村集体通过入股、联营等方式发展智慧农业、休闲农业等项目，显化集体资产，保障农民权益，促进区域经济发展。\n\n多元投资，共促泰杏旧貌“换新颜”\n\n项目形成“政府投资 + 政策性金融贷款 + 社会资本 + 民间赞助”的全域综合整治多元化投资格局。政府统筹专项资金，国资平台投资启动城乡建设用地增减挂钩项目，为“殷杏泰产教融合试验区”高质量发展助力赋能，社会资本参与高标准农田建设项目等，民间赞助资金用于基础配套设施建设。项目实施后，乡村风貌焕然一新，不仅实现村域容貌增“颜”，更是让村民们的幸福感和满意度增 “倍”。\n\n三产融合，奏响乡村振兴“发展曲”\n\n依托殷村产业园职教资源辐射，泰村村积极引进高校产业，实施“数商兴农”战略，推动电商深入乡村。通过对北部零散耕地的整治，泰村村成功打造了高标准农田示范区。杏塘村通过拓展农业的多元化功能，发展农副产品加工、乡村休闲旅游、农村电商等产业，通过集体土地使用权入股与社会资本合作打造特色旅游产业，通过农民直接经营或参与培育发展生活性服务业。通过对闲置土地资源及生态资源的深度挖潜，打造“殷杏泰产教融合试验区”，形成教育、产业、社区深度融合的乡村振兴新模式。（钟楼分局）"
  }
 },
 "44": {
  "S01": {
   "heading": "iziran_中国自然资源报：浙江长兴：绘就美丽宜居乡村新画卷",
   "date": "2023-08-22",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=3823156",
   "body": "近年来，浙江省长兴县扎实开展全域土地综合整治，助推乡村振兴和美丽浙江建设，取得良好成效。该县吕山乡、虹星桥镇2个乡镇项目列入自然资源部试点，3个乡镇项目列入浙江省自然资源厅跨乡镇全域土地综合整治试点名单，其中和平镇小溪口村项目获评省级精品工程。\n\n2018年8月，《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》印发，全面统筹推进山水林田湖草一体化保护和系统治理。长兴县紧抓机遇，深入践行“两山”理念以及中央领导对“千村示范、万村整治”工程重要指示精神，以全域生态环境治理为牵引，坚持高起点规划、高标准设计、高效率整治，秉承自然化、生态化理念，扎实开展全域土地综合整治，助力乡村振兴，助推乡村高质量发展。\n\n长兴县将全域土地综合整治与国土空间规划修编有机统一，委托专业团队高起点、高标准、全方位科学编制村庄规划，深入挖掘乡村特色，确保规划设计顺应自然、尊重历史、突出乡土、体现文化，塑造特色鲜明的美丽乡村；综合分析项目实施村的资源禀赋、现状规模、交通区位，将整治任务、指标和布局要求落实到具体地块，统筹安排乡村生产、生活、生态空间，重点优化永久基本农田、村庄建新、基础设施、产业发展、生态保护等布局，为村庄发展树立“成长坐标”。\n\n长兴县规划做大中心村集聚点、撤并零散点、美化保留点，有序引导规模小、基础设施落后、人口流失严重的自然村向区位优良、交通便利、配套齐全、潜力较大的村聚集，为基础设施提升、公共服务升级提供硬件基础。如：吕山乡8个村102个零散居住点集聚建成14个美丽乡村，虹星桥镇3个村74个零散居住点集聚建成17个美丽乡村。\n\n在编制实施规划时，长兴县遵循乡村传统肌理和格局，将村庄历史遗迹、人文风俗与村落改造、生态修复相融合，因地制宜做好特色产业发展，让村庄既有现代风貌，又保留乡愁乡貌，努力形成“一村一品、一村一景、一村一韵、一村一业”新格局。如：吕山乡胥仓村建成蚕桑文化馆、西苕溪水文化馆；林城镇新华村、畎桥村挖掘田园水乡和南拳文化，打造以康养、民俗体验为主的多元化农旅度假基地。\n\n一是搭建土地整治“协作平台”。长兴县建立“1+4+N+X”综合整治体系，将全域土地综合整治纳入县“六创六比六看”专项行动，实行月晒季考，推动县、乡、村、组四级联动，并抽调精干力量进行一线攻坚、挂图作战、分片包干。同时，自然资源、农业农村、水利、经信等部门协同解决搬迁安置、生态修复、产业布局等具体问题，实现快签、快拆、快复垦、快集聚。\n\n二是金融助力土地整治。长兴县出台低收入农户建房扶持办法，对涉及农民建房和配套基础设施建设的行政事业性收费均予以减免；突出民生关怀，70周岁以上老人可免费居住过渡安置区；创新政银合作，积极探索以全域土地综合整治节余指标为抵押物，加大资金支持。\n\n三是公众参与，保障群众利益。长兴县让群众全程参与村庄规划、新农村建设等环节。该县实行“三个一、三个决不”工作法，即开好一场户主会、量好一把公平尺、用好一块公开栏，决不开口子、决不搞例外、决不损害群众利益；坚持同步推进签约、宅基地丈量、房屋价格确认、苗木清点、房屋腾空；推行“拔钉子”挂图作战工作机制，获得群众广泛认可。\n\n为强化耕地资源利用、打造现代农业，长兴县大力开展土地平整、田间道路修复、农田防护和农田水利建设，实施永久基本农田集中连片整治工作，建成集中连片、配套齐全、生态良好、抗灾力强的现代化高标准农田；积极探索耕地资源共富转化模式，强化耕地资源综合利用。如：林城镇高品质粮蔬保供产业园总投资1.02亿元，辐射带动长兴县蔬菜种植面积2万亩以上，总体促进村集体增收3000万元以上；虹星桥镇实行粮食“产加销”一体化全产业链项目，总投资3500万元，预计每年可为村集体经济增收240万元。\n\n在推进公共资源要素均衡配置、挖掘强村富民新动能方面，长兴县优化乡村空间格局，纵深推进安置新村公共资源要素均衡配置，建设绿道、公厕、停车场、养老服务中心、文化大礼堂等村庄基础设施，兴建农贸市场、家宴中心等，既壮大集体经济又便民利民。如：吕山乡结合全域土地综合整治，建成湖羊智慧循环产业园，项目占地700亩，全面投产后可实现湖羊年存栏6万头，出栏超8万头，加速全县湖羊产业发展。\n\n长兴县推进全域土地综合整治与有关工作有机衔接，加快改善农村生态人居环境。该县坚持整治与修复并重，同步实施生态保育、生态恢复、生态建设，将全域土地综合整治与“三改一拆”、五水共治、美丽乡村、美丽河湖、全域旅游、圩区整治等工作有机衔接，统筹推进区域内人居环境整治、流域治理、农田生态功能提升等工程，有效加快农村生态人居环境绿色蝶变。\n\n目前，长兴县全域土地综合整治工作已取得良好成效。\n\n一是完成永久基本农田集中连片整治，夯实了粮食安全根基。长兴县深入推进全域土地综合整治与生态修复工程，全面开展乡村空间优化、村庄集聚、农田连片、环境美化、生态宜居等专项整治行动，有效盘活集体资源，提升产粮水平，释放土地红利。通过整治，全县完成新增耕地面积6953亩，永久基本农田集中连片整治面积44000亩。\n\n二是壮大了村集体经济，推进了乡村治理。通过实施全域土地综合整治，长兴县村集体将发展动能从造田造地的“输血”功能，转换到发展新产业、新业态的“造血”功能上；通过空间腾挪、优化产业布局，耕地实现集中连片并夯实了土地流转基础；推动“农户保底收益+二次分红”，促进农户、集体、经营者三方受益；积极探索农村集体经济增收新路子，盘活集体资源、统一经营服务、发展多元化合作，不断壮大村集体经济，推动美丽乡村经济发展。如：和平村建设高标准农田，引进种粮大户进行机械化种植；吕山乡九村联建湖羊智慧循环产业园，加快农业产业转型升级，项目年增集体经济经营性收入900万元，提供本地就业岗位100余个；港口村通过土地流转和土地集中连片整治，村集体收入增长15%，解决了全村25%村民的就业问题。\n\n三是美丽乡村建设呈现出新气象。在开展全域土地综合整治过程中，长兴县因地制宜做项目，不搞“大锅饭”“一刀切”，确保有拆有建、有建有美，保留原汁原味的乡土风情文化。通过扎实推进项目实施，村落生态人居环境迈上新台阶，产业融合发展走上快车道，村民幸福感不断提升。"
  },
  "S02": {
   "heading": "huzhou.gov.cn_湖州市人民政府：长兴吕山全域土地综合整治案例入选全国典型",
   "date": "2025-06-27",
   "source": "huzhou.gov.cn_湖州市人民政府",
   "url": "https://www.huzhou.gov.cn/col/col1229213488/art/2025/art_396543324.html",
   "body": "长兴吕山全域土地综合 整治案例入选全国典型\n\n发布时间：2025-06-27\n 09:26 信息来源：湖州日报 字体：【 大 中 小 】\n\n自然资源部近日发布第3批17个全域土地综合整治典型案例，我市长兴县吕山乡全域土地综合整治入选。\n\n据悉，这批案例在空间布局优化、生态价值实现、群众全程参与、推进机制创新、推动产业发展等方面积累了可复制、可推广的宝贵经验。\n\n近年来，吕山乡协同推进耕地集中连片整治、村庄建设用地整理、高标准农田建设等工作，将碎片耕地、园地、坑塘水面、村庄建设用地集聚整合，配套田、水、路、林综合整治。完成空间腾挪、保障产业链用地需求后，吕山乡加快推进湖羊产业振兴计划，搭建湖羊产业农合联，构建“龙头企业+养殖企业+合作社+低收入农户”经营模式，打响区域公共品牌“鲜乡吕山”，并以生态修复推动环境持续改善，将土地综合整治与美丽乡村、全域旅游等工作有机结合。自全域土地综合整治启动以来，该乡新增耕地1484亩，打造8个“千亩良田”，多田套合率达93%，腾出建设用地35.25公顷，打造省级美丽乡村精品村1个、省级垃圾分类示范村2个、浙江省3A级景区村2个，全乡湖羊存栏量达10万头。\n\n【打印此页】 【关闭窗口】"
  },
  "S03": {
   "heading": "huzhou.gov.cn_湖州市人民政府：土地综合整治打开发展新空间",
   "date": "2023-09-18",
   "source": "huzhou.gov.cn_湖州市人民政府",
   "url": "https://www.huzhou.gov.cn/art/2023/9/18/art_1229213488_59063787.html",
   "body": "土地综合整治打开发展新空间\n\n发布时间：2023-09-18\n 09:26 信息来源：中国湖州门户网 字体：【 大 中 小 】\n\n连日来，在长兴县吕山乡胥仓绿色农田建设项目基地里，粮农忙着喷施农药，开展晚稻重大病虫害应急防治作业。 从自然村落分散、道路狭小破损，到沃野千顷、阡陌交通，再到获评土地综合整治省级精品工程，这得益于当地全域土地综合整治与生态修复工程。“通过统一的建设规划，优化了土地利用布局，推动永久基本农田由‘小田’变‘大田’。”吕山乡党委委员、常务副镇长宋耀为介绍，坚持全乡“一盘棋’，到2035年实现由102个自然村减少至14个具有江南特色、历史风貌的集聚区。 让耕地碎片化的“满天星”变身集中连片的“百千万”，这样的“魔法”在全市上演。我市以土地综合整治为强大引擎，推进全域全要素空间重构、产业重整、环境重生，助力“千万工程”向纵深迈进。在2022年度全省土地综合整治工程绩效评价及省级精品工程评定中，我市土地综合整治工作绩效居全省第二；4个项目入选省级精品工程，入选工程数量居全省第一。 今年以来，市自然资源和规划局持续高质量推进土地综合整治工作，启动全市跨乡镇土地综合整治五年行动计划（2023—2027年），谋划“一带双溪、两轴三片”整治空间结构，统筹划定以交通廊道为重点的跨区县整治区21个。上半年，共完成7个单乡镇土地综合整治项目，新谋划土地综合整治项目15个。2018年至今，累计获批项目74个，共涉及全市40个乡镇（街道）、383个行政村，项目区总面积306万亩。 省市县三级联动，部门有效协同，鼓励社会资本参与，我市奏响土地综合整治“大合唱”。“我们建立健全项目全生命周期管理。”市自然资源和规划局相关负责人介绍，以项目推进为例，实行“清单制+责任制+时限制”，画好作战图、定好时间表，实施项目有序推进，早见成效。 目前，首批4个跨乡镇土地综合整治试点项目已全部开工，开工率 100%，上半年累计完成投资59.15亿元、年度投资完成率107%。跨乡镇土地综合整治工程在全省“十大工程”半年度考核中获评五星级，居全省第二，各区县全部获评五星级。\n\n3642353-511-1-长兴县\n\n【打印此页】 【关闭窗口】"
  },
  "S04": {
   "heading": "huzhou.gov.cn_湖州市人民政府：四土地综合整治项目获评省级优秀",
   "date": "2026-01-12",
   "source": "huzhou.gov.cn_湖州市人民政府",
   "url": "https://www.huzhou.gov.cn/col/col1229213482/art/2026/art_37c5f26b1f894599892ff5e439710dbc.html",
   "body": "四土地综合整治项目获评省级优秀\n\n发布时间：2026-01-12\n 09:27 信息来源：湖州日报 字体：【 大 中 小 】\n\n浙江省近日公布2024年度土地综合整治优秀案例名单，我市4个项目成功入选，共获省级奖励资金2300万元，入选数量与奖励金额均居全省首位。这4个项目分别是，南浔区善琏镇车家兜村等15村土地综合整治与生态修复工程、长兴县虹星桥镇土地综合整治试点项目、安吉县递铺街道古城村等2村土地综合整治与生态修复工程和德清县钟管镇干山村等7村土地综合整治与生态修复工程。\n\n这些项目展现了湖州在土地综合整治路径上的多元探索。南浔区项目聚焦“土地综合整治+现代农业”，通过打造集中连片的“万亩方”“千亩方”，发展“稻渔共养”等绿色循环农业，带动亩均产值提升8%，村集体年均增收超过60万元。德清县项目则推行“土地综合整治+产业升级”，通过政策集成引导农户集聚、引入国企开展“建管营”一体化运作，推动农田规模经营，实现土地租金和亩均收益双增长，并依托生态牧场等资源拓展农旅融合新业态。安吉县通过土地整治盘活资源，打造“非遗+旅游”产品体系，年接待游客约60万人次，带动就业与增收，探索出乡村产业升级新路径。长兴县通过“小田归并”建成连片农田，引入社会资本发展稻蔬轮作，创新“两年五季”模式，推动亩均效益从2800元增至1万元，并依托生态治理与乡贤共治，完善公共服务，打造出宜居宜业的乡村振兴样本。\n\n土地综合整治已成为湖州优化乡村空间格局、激发产业动能的重要抓手。去年以来，湖州以跨乡镇土地综合整治五年行动为牵引，累计实施在建项目38个，建成多个现代化农村新社区。相关实践获推广肯定，长兴县吕山乡全域整治案例入选自然资源部典型案例，安吉县相关做法纳入浙江省首批生态产品价值实现案例。\n\n市自然资源和规划局表示，下一步将持续深化全域土地综合整治，加快推动存量项目闭环，同时谋划一批“小而美、小而精”的新项目，因地制宜拓展“土地综合整治+”模式，推动农文旅融合落地，力争每个区县建设一个共富创新改革点，为全省乡村振兴提供更多湖州经验。\n\n【打印此页】 【关闭窗口】"
  }
 },
 "45": {
  "S01": {
   "heading": "dnr.gxzf.gov.cn_广西自然资源厅：典型案例｜贵港市覃塘区覃塘街道姚山村等2个村全域土地综合整治",
   "date": "2025-09-16",
   "source": "dnr.gxzf.gov.cn_广西自然资源厅",
   "url": "https://dnr.gxzf.gov.cn/xwzx/zrzx/t25972572.shtml",
   "body": "典型案例｜贵港市覃塘区覃塘街道姚山村等2个村全域土地综合整治试点项目\n\n2025-09-16 09:35\n     来源：本网\n     作者：陆钢杰 许伊玲\n\n我要收藏 公共资源调用站点 文章分享\n\n微博 空间 qq\n\n编者按：近日，广西壮族自治区自然资源厅印发《2025年广西国土空间生态修复典型案例集》，推出贵港市覃塘区覃塘街道姚山村等2个村全域土地综合整治试点项目、钦州市孔雀湾海洋生态保护修复项目等9个案例，集中展示广西生态修复治理在制度建设、技术运用、生态产品价值实现、生态补偿、自然恢复实践等方面的创新亮点和典型经验。即日起，广西自然资源融媒体中心逐一推出案例具体内容，充分发挥典型案例的示范引领作用。本期推出的是第一个案例：《三产融合”奏响“荷美覃塘”新乐章——贵港市覃塘区覃塘街道姚山村等2个村全域土地综合整治试点项目》，敬请关注。\n\n（一）案例背景\n\n覃塘区位于广西贵港市西部，地处浔郁平原西片，地形以平原、台地和丘陵为主。姚山村、龙凤村位于覃塘区中部，两村地势平坦、水资源丰富、特色产品多样。项目针对姚山村、龙凤村试点区域内耕地局部碎片化、产业基础薄弱、局部生态环境质量退化等问题，谋划实施全域土地综合整治，构建了“空间重构-多元筹资-三产融合”的可持续发展路径，形成了具有示范效益的“土地整治＋农文旅产业融合”双轮驱动的全域土地综合整治“覃塘经验”。\n\n姚山村林村屯风貌。贵港市覃塘区自然资源局供图\n\n（二）具体做法\n\n一是以空间重构激活“荷美”新格局。通过土地整治实施田块合并、权属流转，新增耕地59.58公顷，耕地提质改造68.04公顷；通过科学选址和精准补划实现永久基本农田“数量不减少，质量不降低”，补足2.67公顷稳定利用耕地纳入永久基本农田。农业空间格局进一步优化，土地承载能力大幅增强。因地制宜、科学合理地安排设施农业用地，配套建设高端智能温室大棚、农产品烘干等设施设备，提升重要农产品供给保障能力，促进农产品产业链现代化发展。在严守耕地红线的前提下，通过编制姚山村和龙凤村村庄规划，优化产业用地空间布局，解决了荷美覃塘田园综合体核心区272亩建设用地需求，建成景区大门、游客服务中心、科普展览馆、莲藕研发培育基地等农文旅配套设施，为项目区产业融合发展提供用地支撑。\n\n二是多元筹资强劲“荷美”新动脉。通过“多渠引水、一池蓄水、一龙头放水”模式整合乡村振兴衔接资金、现代农业发展资金、全域土地综合整治专项资金、文化旅游专项资金等财政资金3.2亿元，重点投向社会资本不宜或难以独立承担的基础设施和公共服务领域，为产业发展和社会资本进入创造条件。2021—2022年，先后整合0.94亿元投入田园综合体建设。2022—2023年，水系连通项目获水利发展资金1.8亿元。同时，政府协调金融机构为企业、合作社提供优惠贷款或贴息支持，减轻社会资本投资压力。开展招商引资，国有企业、民营企业以及合作社等社会资本投入资金2.9亿元，聚焦农业技术创新、产品开发和产业运营等领域，建成荷塘基地、温室大棚、烘干机等现代农业设施，推动项目区农业规模化经营和市场拓展。2021—2022年，采用EPC模式引进广西湖美四季农业科技发展有限公司建设田园综合体项目。以“公司＋合作社＋农民”的创新发展模式构建企业与农民利益共享、风险共担的联结机制，引导农民以土地入股或流转土地获得租金、分红和就业机会。2022年田园综合体项目发放分红22.5万元。\n\n覃塘区荷花核心种植示范区。贵港市覃塘区自然资源局供图\n\n三是以三产融合绘就“荷美”新画卷。依托荷藕特色产业，明确特色农业和乡村旅游融合发展目标定位，沿209国道打造发展轴，确保空间布局、功能分区、项目落地均服务于农文旅发展大局。通过“藕虾共生”综合种养模式，亩产莲藕超2000公斤，叠加小龙虾收益，亩均增收30%以上。延伸发展毛尖茶、富硒水稻等产业7000亩，提供就业岗位近千个，户均增收1万元。开发莲子、藕粉、荷叶茶、莲藕糖等具有鲜明地方特色的深加工产品，配套富硒技术研发，打造“荷产品”矩阵。培育“覃塘莲藕”老字号品牌，举办“藕王争霸赛”等展销活动，推动农产品提升溢价。以荷美覃塘景区（国家4A级景区）为核心，建成荷田广场、荷花精品民宿、荷花科普馆等旅游配套设施，年接待游客超百万人次。\n\n四是以环境整治夯实“荷美”新根基。实施村庄人居环境改善工程，修建村民活动广场、道路、水渠等设施，建立村级污水处理站及垃圾分类系统，提高生活污水集中处理率。完善基础设施和公共服务配套设施，提升村容村貌。采用“水系＋环境治理＋生态旅游＋特色农业＋产业融合”模式，实施河流生态修复及水系连通工程。清淤疏浚50.94公里，整治水塘9个，新建生态护岸19.22公里，加固姚山支渠和平龙西干渠7.65公里，大幅提升农田灌溉效率，全面改善流域生态环境。\n\n（三）主要成效\n\n一是激活经济动力，拓宽增收路径。项目区引入荷花新品种350余种，建成贵港市最大的莲藕种植基地。藕虾套养模式实现“一地两用”。莲子、荷叶茶、藕粉等荷系列产品加工产值达8500万元，毛尖茶、富硒茶等茶系列产品加工产值高达亿元。“云认养”小程序已上线3.3万平方米富硒稻田、10万只小龙虾等产品，平台产生效益约40万元，实现产业附加值跃升。通过深入开展寻找覃塘荷花形象代言人、特色农产品展示展销、“那乡美食·覃塘味道”地标美食展示等系列活动，“荷美覃塘”文化旅游品牌影响力持续扩大，近年来旅游消费总额超10亿元。\n\n二是提升土地效能，厚植文化价值。完成1.17万亩“小田并大田”耕地整治，整治后“碎片化”程度降低63%，平均斑块面积提升38%，耕地国家利用平均等别从10等升至7等，形成集中连片的优质耕地格局，水稻耕种机械化率达98%，落实了耕地保护要求，又促进了农业现代化发展。以荷文化为核心，搭建特色展示平台，推出品茗赏荷、文艺演出、舞狮舞龙等沉浸式文旅体验活动。依托荷家坞广场举办8场“布山那乡情”实景演出，借助荷美绿道开展5次荷文化主题活动，开发17类主题文创产品。连续两年举办的中国·覃塘毛尖春茶文化节已超越传统节庆范畴，成为激活文化基因、赋能区域品牌的战略品牌。\n\n覃塘区荷花文化旅游节人气爆棚。贵港市覃塘区自然资源局供图\n\n三是焕新生态底色，扮靓水美乡村。协同推进全域土地综合整治与村庄整治，拓展农业休闲观光与研学旅游功能，打造林村屯等10个乡村示范点，完成1864栋房屋风貌改造。建成村级污水处理站和垃圾分类系统，实现生活污水95%集中处理、生活垃圾100%规范处置。建成覃塘数智乡村建设管理云平台，以“线上＋线下”模式，推进公共服务便民化，提高乡村治理效率和质量。通过实施鲤鱼江干流及支流水系连通工程，鲤鱼江姚山村、龙凤村段恢复河道生态23亩。水利设施进一步完善，打造形成16.2公里沿江风光环游带，实现村庄景区化、田园公园化，保护和恢复乡村生态功能，进一步优化项目区文旅产业资源。\n\n编辑：谢贵红 审核：范雁阳 黄尚宁"
  },
  "S05": {
   "heading": "gx.people.com.cn_人民网广西频道：全域整治谋发展 乡村振兴绘新篇",
   "date": "2024-10-23",
   "source": "gx.people.com.cn_人民网广西频道",
   "url": "https://gx.people.com.cn/n2/2024/1023/c390645-41017751.html",
   "body": "党网 · 时政\n\n经济 · 科技\n\n社会 · 法治\n\n文旅 · 体育\n\n健康 · 生活\n\n灵境·人民艺术馆\n\n毛主席纪念堂\n\n周恩来纪念网\n\n邓小平纪念网\n\n中共中央党史和文献研究院\n\n中组部12380举报网\n\n全国哲学社科工作办\n\n中国统一战线新闻网\n\n文化企业社会责任报告发布平台\n\n中国国民党革命委员会\n\n中国国家人文地理\n\n中国共产党新闻网\n\n人民日报报系\n\n人民日报 人民日报海外版 中国汽车报 中国能源报 健康时报 证券时报 国际金融报网 讽刺与幽默 中国城市报 新闻战线 人民论坛 环球人物 中国经济周刊 民生周刊 国家人文历史 人民周刊 人民数字\n\n国家重点实验室 环球网 海外网 人民图片 人民视觉 人民网研究院\n\n人民网 >> 广西频道 >> 要闻\n\n全域整治谋发展 乡村振兴绘新篇\n\n贵港市覃塘区积极推进全域土地综合整治工作\n\n2024年10月23日16:29 | 来源： 人民网－广西频道\n\n近年来，广西贵港市运用“千万工程”经验，聚焦农用地、建设用地整理，乡村历史文化与生态保护，在覃塘区推进全域土地综合整治。该区已形成政府引领、多方参与的模式，成功实施3个项目，覆盖6个行政村，总面积10.2万亩，总投资10.8亿元，其中两个村的项目入选国家试点。\n\n创新长效机制，赋能发展引擎。覃塘区融合村庄规划与全域土地整治，已完成93个村庄规划。其中，姚山村和龙凤村保障了557亩产业用地，形成多片区功能分区。党建引领基层治理，2023年覃塘区“党建+网格化+数字化”模式成为广西唯一入选全国乡村治理典型案例。樟木镇凌动村通过“党建+土地预流转”，提前完成土地流转和整治，促进农业规模经营和就业增收。覃塘区构建多元化资金筹措机制，已获财政资金3.3亿、社会资本2.9亿支持整治工作。\n\n富硒水稻连片种植实现农业生产规模化经营。覃塘区自然资源局供图\n\n聚焦综合整治，焕发乡村新颜。覃塘区通过盘活建设用地和复垦低效用地，保障了多项乡村改造工程，如“三清三拆”等，改善了乡村人居环境，实现了美化、硬化、亮化、绿化。同时，该区推行“小田并大田”政策，整治了1.17万亩耕地，降低了土地碎片化，促进了农业机械化、规模化。此外，覃塘区还聚焦鲤鱼江等水系，实施综合整治工作，保护修复了乡村生态，为乡村高质量发展增添了绿色底色。\n\n促进三产融合，奏响致富乐章。覃塘区推行“土地整治+产业+旅游”模式，促进一二三产业融合，形成“农旅互促”格局。一产上，种植莲藕、毛尖茶等特色农产品，龙凤村莲藕产值超亿元，毛尖茶获地标认证；二产上，引进现代农业公司建设综合服务中心；三产上，依托“荷美覃塘”AAAA景区，发展乡村旅游，接待游客100万人次，旅游消费超10亿，形成农文旅融合产业集群。（许伊玲 文思情）\n\n(责编：伍迁、许荩文)\n\n分享让更多人看到\n\n1 2024年环广西公路自行车世界巡回赛第…\n\n2 专访：广西国际壮医医院党委书记秦祖杰\n\n3 “桥”见柳梧铁路秋日奋进好时光\n\n4 专访：广西国际壮医医院党委副书记、院长…\n\n5 南玉珠高速玉林至横州段全线建成通车\n\n6 大新县桃城镇：栀子花开出“致富果”\n\n7 专访：广西国际壮医医院党委副书记吴光\n\n8 茶乡展翅向未来\n\n9 “数金先锋”引领，释放数字金融新动能\n\n10 北国胡韵弦乐组合亮相邕城\n\n人民日报社概况 | 关于人民网 | 报社招聘 | 招聘英才 | 广告服务 | 合作加盟 | 供稿服务 | 数据服务 | 网站声明 | 网站律师 | 信息保护 | 联系我们\n\n人民日报违法和不良信息举报电话：010-65363263    举报邮箱： jubao@people.cn\n\n人民网服务邮箱： kf@people.cn 违法和不良信息举报电话：010-65363636    举报邮箱： rmwjubao@people.cn\n\n互联网新闻信息服务许可证10120170001 | 增值电信业务经营许可证B1-20060139 | 广播电视节目制作经营许可证（广媒）字第172号\n\n信息网络传播视听节目许可证0104065 | 网络文化经营许可证 京网文[2020]5494-1075号 | 网络出版服务许可证（京）字121号 | 京ICP证000006号 | 京公网安备11000002000008号\n\n人 民 网 股 份 有 限 公 司 版 权 所 有 ，未 经 书 面 授 权 禁 止 使 用 Copyright © 1997-2024 by www.people.com.cn. all rights reserved\n\n第一时间为您推送权威资讯\n\n报道全球 传播中国\n\n关注人民网，传播正能量"
  },
  "S07": {
   "heading": "iziran_中国自然资源报：贵港市覃塘区：推进全域土地整治 赋能乡村高质量发展",
   "date": "2024-11-17",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5359592",
   "body": "近年来，贵港市借鉴运用“千万工程”经验，聚焦农用地、建设用地整理和乡村历史文化与生态保护，在覃塘区推进实施全域土地综合整治。目前，覃塘区已形成政府引领、多方参与模式，成功实施3个项目，覆盖6个行政村，实施总面积10.2万亩，总投资10.8亿元，其中两个村项目入选国家试点。\n\n覃塘区坚持党建和规划引领，先后编制完成93个村庄规划，推进 村庄规划与全域土地整治 融合 。 构建多元化资金筹措机制，获财政资金3.3亿元支持全域土地综合整治，并引进社会资本2.9亿元参与。 姚山村、龙凤村通过村庄规划，保障了557亩产业用地规模，形成多片区功能分区。凌动村通过“党建+土地预流转”，促进农业规模经营和就业增收。 2023年，覃塘区“党建+网格化+数字化”模式入选全国乡村治理典型案例，这是广西唯一入选案例。\n\n在实施全域土地综合整治基础上，覃塘区通过盘活建设用地和复垦低效用地，保障多项乡村改造工程，实现了美化、硬化、亮化、绿化。推行“小田并大田”政策，先后整治耕地1.17万亩 ，有效降低土地碎片化，促进了农业机械化、规模化、现代化。\n\n覃塘区建立千亩蔬菜种植基地，推进乡村农业高质量发展。许伊玲  摄\n\n此外，该区还推行“土地整治+产业+旅游”模式，促进一二三产业深度融合，形成“农旅互促”格局。第一产业重点发展莲藕、毛尖茶等特色农产品，目前龙凤村莲藕产值已超过1亿元，毛尖茶获地标认证；第二产业重点引进现代化企业，建设综合服务中心；第三产业依托“荷美覃塘”4A级景区发展乡村旅游，每年接待游客100万人次，旅游消费超过10亿元。"
  },
  "S02": {
   "heading": "dnr.gxzf.gov.cn_广西自然资源厅：贵港市覃塘区：推进全域土地整治 赋能乡村高质量发展",
   "date": "2024-11-17",
   "source": "dnr.gxzf.gov.cn_广西自然资源厅",
   "url": "https://dnr.gxzf.gov.cn/xwzx/sxdt/t19310147.shtml",
   "body": "贵港市覃塘区：推进全域土地整治 赋能乡村高质量发展\n\n2024-11-17 16:10\n     来源：本网\n     作者：许伊玲  文思情\n\n我要收藏 公共资源调用站点 文章分享\n\n微博 空间 qq\n\n近年来，贵港市借鉴运用“千万工程”经验，聚焦农用地、建设用地整理和乡村历史文化与生态保护，在覃塘区推进实施全域土地综合整治。目前，覃塘区已形成政府引领、多方参与模式，成功实施3个项目，覆盖6个行政村，实施总面积10.2万亩，总投资10.8亿元，其中两个村项目入选国家试点。\n\n覃塘区坚持党建和规划引领，先后编制完成93个村庄规划，推进村庄规划与全域土地整治融合。构建多元化资金筹措机制，获财政资金3.3亿元支持全域土地综合整治，并引进社会资本2.9亿元参与。姚山村、龙凤村通过村庄规划，保障了557亩产业用地规模，形成多片区功能分区。凌动村通过“党建+土地预流转”，促进农业规模经营和就业增收。2023年，覃塘区“党建+网格化+数字化”模式入选全国乡村治理典型案例，这是广西唯一入选案例。\n\n在实施全域土地综合整治基础上，覃塘区通过盘活建设用地和复垦低效用地，保障多项乡村改造工程，实现了美化、硬化、亮化、绿化。推行“小田并大田”政策，先后整治耕地1.17万亩，有效降低土地碎片化，促进了农业机械化、规模化、现代化。\n\n覃塘区建立千亩蔬菜种植基地，推进乡村农业高质量发展。许伊玲  摄\n\n此外，该区还推行“土地整治+产业+旅游”模式，促进一二三产业深度融合，形成“农旅互促”格局。第一产业重点发展莲藕、毛尖茶等特色农产品，目前龙凤村莲藕产值已超过1亿元，毛尖茶获地标认证；第二产业重点引进现代化企业，建设综合服务中心；第三产业依托“荷美覃塘”4A级景区发展乡村旅游，每年接待游客100万人次，旅游消费超过10亿元。\n\n编辑：周复宏 审核：李欣松 黄尚宁"
  }
 },
 "46": {
  "S01": {
   "heading": "zrzy.guizhou.gov.cn_贵州自然资源厅：天眼新闻 | 西江镇书写全域土地整治与文化传承融合新篇",
   "date": "2025-09-01",
   "source": "zrzy.guizhou.gov.cn_贵州自然资源厅",
   "url": "https://zrzy.guizhou.gov.cn/wzgb/xwzx/xtyw1/202509/t20250901_88547291.html",
   "body": "天眼新闻 | 西江镇书写全域土地整治与文化传承融合新篇\n\n发布时间： 2025-08-25 14:10\n\n字体大小： 大 - 中 - 小\n\n访问量： 次\n\n盛夏时节，群山环抱中的西江千户苗寨如一幅流动的山水画卷铺展在世人眼前。\n\n这里不仅是全球最大的苗族聚居地，更有璀璨的银饰文化、层叠的梯田景观和深厚的农耕文明。然而，近年来，随着旅游产业发展，面对耕地碎片化、村庄空心化与生态保护的多重挑战，这片古老土地也曾陷入发展困局。\n\n随着全域土地综合整治深入推进，西江镇正迎来一场深刻的变革。全域土地整治是指以国土空间规划为依据，在一定区域范围内，通过统筹推进农用地、建设用地整理和乡村生态保护修复，实现优化生产、生活、生态空间布局的目标。\n\n如今，破碎田畴逐渐被连成片，闲置宅基地和集体土地进一步被盘活，乡村人居环境改善……西江镇不仅入选自然资源部第三批全域土地综合整治典型案例，更探索出了一条以土地整治赋能民族文化传承、生态价值转化与乡村全面振兴的融合发展之路。\n\n西江镇控拜村俯瞰。\n\n守好耕地红线\n\n傍晚即将来临，青山的深绿与远处夕阳的橙红交相呼应，此刻的西江千户苗寨景区内聚集了大量游客。\n\n站在观景台，不仅可以一睹千户苗寨灯火亮起的瞬间，还可欣赏依山而建、宛如大地指纹镶嵌在山峦间的梯田景观。\n\n今年，景区通过全域土地整治项目，完善苗寨内数公里的梯田生产道，通过“田、水、路、林、村”全要素综合整治，建成“田成方、渠相连、路相通”的农田生态系统。\n\n游客在梯田观光区拍照打卡。\n\n这不仅方便了苗寨农户农业作业，还成功打造景区梯田观光区，拓展了核心景区容纳空间。 石板铺就的生产道上，密密麻麻站满了“打卡”夕阳稻田风光的游客。 上海游客蒋依依和闺蜜身着苗族服饰，站在田间旅拍时不停称赞：“贵州的梯田太美了，很出片！”\n\n千户苗寨景区田园风光。\n\n农用地整理只是当地全域土地整治其中一个项目类别。\n\n雷山县自然资源局党组书记、局长肖涛介绍，“雷山县是雷公山主峰所在地，全县生态保护红线面积达50.89%，耕地破碎，土地资源十分稀缺。”\n\n2021年，雷山县依托西江镇成熟的“西江千户苗寨景区”巨大吸引力以及民族文化等方面的优势，将西江镇作为全域土地的示范样本。\n\n按照“宜农则农、宜建则建、宜留则留、宜整则整”的原则，在西江镇中部核心片区、西部经济片区、北部经济片区、南部经济片区等重点村落布局了12个全域土地综合整治子项目。\n\n河道治理守护两岸耕地。\n\n项目主要包括：农用地整理、乡村历史文化保护、乡村风貌提升、道路优化、水环境整治等五类工程项目建设。\n\n单从耕地保护效果来看，土地整治项目实施后，全镇增加有效耕地面积54公顷，在保护原有耕地不撂荒的同时，有效提升耕地质量等级，全面提高农田质量和土地集约化水平，推动传统农业向高效农业、特色农业提质升级。\n\n乡村空间重构\n\n“景区单日游客接待量突破4.2万人次。”西江镇党委书记唐禄鹏介绍，暑期以来，位于雷山县西江镇的千户苗寨迎来一年里的游客高峰。\n\n然而，千户苗寨核心景区主要位于西江村所在地，占地2.5平方公里，容纳度有限，旅游旺季严重影响游客体验感。\n\n“如何让游客留下来？西江镇需要打造更多的旅游亮点。”唐禄鹏表示，全域土地整治，进一步优化了千户苗寨周边村寨的乡村空间布局，释放出周边村寨的民族文化旅游发展潜力。\n\n龙塘村一角。\n\n在全域土地整治中，西江镇以“土地整治+N”为思路，在做好耕地保护的同时，加大千户苗寨周边村寨人居环境的整治力度，通过村庄规划引领，龙塘村、控拜村等周边苗乡面貌焕然一新。\n\n走进龙塘村，干净整洁的村居道路两旁，是一栋栋风格统一的木质干栏式小青瓦苗族传统吊脚楼建筑。这几天，来自上海的暑期夏令营团正在体验当地苗族蜡染、长桌宴等民族文化。\n\n而在几年前，龙塘村还是污水横流、人畜混居的模样。\n\n“现在一张乡村规划图引领，在保留村落原始风貌的同时，村里科学规划了固定的篮球场、芦笙场以及其他公共绿化空间，比城里的小区住着还美！”龙塘村党支部书记、村主任文远胜说，通过全域土地整治，15户人家将自家打造成民宿客栈，暑期以来接待了大量来自云南、四川等地游客。\n\n经过农用地整理后的梯田。\n\n苗族芦笙广场。\n\n不仅是龙塘村，西江镇在确保耕地数量、质量、生态“三提升”前提下，深度开发利用空间资源，将碎片化的耕地、荒山荒坡整合整治为连片农田或特色农业景观，实现农村土地资源要素的科学合理配置，全面改善农村人居环境。全镇共完成2172户农村人居环境的提升改造，建成13.17公顷美丽清洁田园。\n\n依托西江千户苗寨国家4A级景区，联动周边功能片区进行差异化发展，带动区域发展，共构“复合功能区”，推动农业、文化、生态与旅游深度融合，发展休闲农业、民宿经济、旅游观光、养生体验、研学旅游等新业态。\n\n目前，西江镇正聚力打造“游在西江、乐在黄里、居在龙塘、养在脚尧、孵在白坡、产在大沟”的文化体验核心区，提升区域旅游影响力和竞争力。\n\n盘活闲置土地\n\n最近，位于黄里村的苗乡米酒厂正式进入生产。曾经闲置了好几年的村集体土地经过盘活，摇身一变为米酒厂。\n\n该米酒厂是雷山县东西部协作项目，入驻黄里村后，除每年可为黄里村增加20万土地租金外，村集体还可参与酒厂盈利后的分红。\n\n黄里村盘活闲置土地后建成的米酒厂。\n\n目前，米酒厂生产的3种产品不仅在千户苗寨景区大受欢迎，还远销北京、内蒙古等地餐馆。 酒厂技术负责人李再德表示，酒厂每年采购150至200吨稻米和糯米，主要通过就地收购，带动农户增收。 项目除了米酒生产线，还将打造米酒科技研究中心及米酒体验馆。\n\n黄里音乐农场。\n\n不仅如此，位于雷凯高速黄里出口的11亩闲置土地，如今也通过闲置地盘活，打造成黄里音乐农场。\n\n项目结合便捷的交通优势和天然的水域环境，设计了亲子农耕采摘、咖啡烧烤、露天电影等丰富休闲旅游项目。\n\n黄里音乐农场露天电影休闲项目。\n\n在西江镇，在全域土地整治机遇下，各村居因地制宜加大招商引资力度，进一步盘活乡村闲置土地，激活产业活力。\n\n雷山县常务副县长刘玉林表示，前几年，西江镇资源处于零星分散、杂乱无章的状态，行政村寨定位尚不明确、产业零散分布，生态旅游配套设施空间上覆盖不全、分布不均。目前，通过全域土地整治，为山地民族地区全域土地整治积累了丰富经验，下一步雷山县将在永乐镇等地实施全域土地整治项目。\n\n夕阳下的西江千户苗寨。\n\n夕阳西下，西江千户苗寨层层叠叠的梯田在余晖中泛着金光，曾经的“巴掌田”“腰带田”化身希望的田野，成为苗乡吸引五湖四海游客的一张新名片。古老的吊脚楼旁建成苗族银饰非遗体验馆，“沉睡”的闲置土地激活产业活力……苗乡空间重生，土地这一基本生产要素正迸发出最大的绿色发展活力。\n\n贵州省人民政府\n\n贵阳市人民政府\n\n遵义市人民政府\n\n六盘水市人民政府\n\n安顺市人民政府\n\n毕节市人民政府\n\n铜仁市人民政府\n\n黔东南苗族侗族自治州人民政府\n\n黔南州人民政府\n\n黔西南州人民政府\n\n上海市规划和自然资源局\n\n重庆市规划和自然资源局\n\n河北省自然资源厅\n\n河南省自然资源厅\n\n安徽省自然资源厅\n\n陕西省自然资源厅\n\n云南省自然资源厅\n\n江苏省自然资源厅\n\n湖北省自然资源厅\n\n浙江省自然资源厅\n\n四川省自然资源厅\n\n山东省自然资源厅\n\n湖南省自然资源厅\n\n广东省自然资源厅\n\n广西壮族自治区自然资源厅\n\n福建省自然资源厅\n\n内蒙古自治区自然资源厅\n\n江西省自然资源厅\n\n宁夏回族自治区自然资源厅\n\n贵州省自然资源厅机关服务中心\n\n贵州省自然资源厅会计结算中心\n\n贵州省自然资源厅电子政务中心\n\n贵州省土地矿产资源储备局\n\n贵州省国土资源勘测规划研究院\n\n贵州省自然资源技术信息中心\n\n贵州省土地开发整治中心\n\n贵州省不动产登记中心\n\n贵州省第一测绘院（贵州省北斗导航位置服务中心）\n\n贵州省第二测绘院\n\n贵州省第三测绘院（贵州省国土资源遥感监测中心）\n\n贵州省测绘资料档案馆（省地理信息中心、省自然资源卫星应用中心）\n\n贵州省地质博物馆\n\n贵州省测绘产品质量监督检验站\n\n贵州省油气勘查开发工程研究院\n\n贵阳市自然资源和规划局\n\n遵义市自然资源局\n\n六盘水市自然资源局\n\n毕节市自然资源和规划局\n\n安顺市自然资源局\n\n铜仁市自然资源局\n\n黔西南州自然资源局\n\n黔东南自然资源局"
  },
  "S02": {
   "heading": "zrzy.guizhou.gov.cn_贵州自然资源厅：贵州日报专版丨全域土地整治助力乡村全面振兴",
   "date": "2025-09-29",
   "source": "zrzy.guizhou.gov.cn_贵州自然资源厅",
   "url": "https://zrzy.guizhou.gov.cn/wzgb/xwzx/xtyw1/202509/t20250929_88666723.html",
   "body": "贵州日报专版丨全域土地整治助力乡村全面振兴\n\n发布时间： 2025-09-29 22:14\n\n字体大小： 大 - 中 - 小\n\n访问量： 次\n\n黔东南州雷山县西江千户苗寨。 金秋时 摄\n\n初秋，群山环抱中的黔东南州雷山县西江千户苗寨如一幅流动的山水画卷铺展在世人眼前。\n\n夕阳下，西江千户苗寨景区内聚集了大量游客。站在观景台上，可以欣赏依山而建、宛如大地指纹镶嵌在山峦间的梯田景观。\n\n今年，该景区通过全域土地整治项目，完善苗寨内数公里的梯田生产道，通过“田、水、路、林、村”全要素综合整治，建成“田成方、渠相连、路相通”的农田生态系统，不仅方便了苗寨农户农业作业，还成功打造景区梯田观光区，拓展了核心景区容纳空间。\n\n石板铺就的生产道上，密密麻麻站满了打卡夕阳稻田风光的游客。\n\n湖南游客李素萍和闺蜜身着苗族服饰，站在田间旅拍打卡：“贵州的梯田太美了，很出片！”\n\n西江千户苗寨是全球最大的苗族聚居地，有着璀璨的银饰文化、层叠的梯田景观和保存较为完好的农耕文明。然而，近年来，随着旅游产业发展，面对耕地碎片化、村庄空心化与生态保护的多重挑战，这片古老土地也曾陷入发展困局。\n\n雷山县自然资源局党组书记、局长肖涛介绍，雷山县是雷公山主峰所在地，全县生态保护红线面积达50.89%，耕地破碎，土地资源十分稀缺。\n\n2021年，雷山县依托西江镇成熟的西江千户苗寨景区巨大吸引力以及民族文化等方面的优势，将西江镇作为全域土地综合治理的示范样本。\n\n按照“宜农则农、宜建则建、宜留则留、宜整则整”的原则，在西江镇中部核心片区、西部经济片区、北部经济片区、南部经济片区等重点村落布局了12个全域土地综合整治子项目。项目主要包括：农用地整理、乡村历史文化保护、乡村风貌提升、道路优化、水环境整治等五类工程项目建设。\n\n随着全域土地综合整治深入推进，西江镇正迎来一场深刻的变革。全域土地整治是指以国土空间规划为依据，在一定区域范围内，通过统筹推进农用地、建设用地整理和乡村生态保护修复，实现优化生产、生活、生态空间布局的目标。\n\n如今，破碎田畴逐渐被连成片，闲置宅基地和集体土地进一步被盘活，乡村人居环境改善……西江镇不仅入选自然资源部第三批全域土地综合整治典型案例，更探索出了一条以土地整治赋能民族文化传承、生态价值转化与乡村全面振兴的融合发展之路。\n\n贵州省人民政府\n\n贵阳市人民政府\n\n遵义市人民政府\n\n六盘水市人民政府\n\n安顺市人民政府\n\n毕节市人民政府\n\n铜仁市人民政府\n\n黔东南苗族侗族自治州人民政府\n\n黔南州人民政府\n\n黔西南州人民政府\n\n上海市规划和自然资源局\n\n重庆市规划和自然资源局\n\n河北省自然资源厅\n\n河南省自然资源厅\n\n安徽省自然资源厅\n\n陕西省自然资源厅\n\n云南省自然资源厅\n\n江苏省自然资源厅\n\n湖北省自然资源厅\n\n浙江省自然资源厅\n\n四川省自然资源厅\n\n山东省自然资源厅\n\n湖南省自然资源厅\n\n广东省自然资源厅\n\n广西壮族自治区自然资源厅\n\n福建省自然资源厅\n\n内蒙古自治区自然资源厅\n\n江西省自然资源厅\n\n宁夏回族自治区自然资源厅\n\n贵州省自然资源厅机关服务中心\n\n贵州省自然资源厅会计结算中心\n\n贵州省自然资源厅电子政务中心\n\n贵州省土地矿产资源储备局\n\n贵州省国土资源勘测规划研究院\n\n贵州省自然资源技术信息中心\n\n贵州省土地开发整治中心\n\n贵州省不动产登记中心\n\n贵州省第一测绘院（贵州省北斗导航位置服务中心）\n\n贵州省第二测绘院\n\n贵州省第三测绘院（贵州省国土资源遥感监测中心）\n\n贵州省测绘资料档案馆（省地理信息中心、省自然资源卫星应用中心）\n\n贵州省地质博物馆\n\n贵州省测绘产品质量监督检验站\n\n贵州省油气勘查开发工程研究院\n\n贵阳市自然资源和规划局\n\n遵义市自然资源局\n\n六盘水市自然资源局\n\n毕节市自然资源和规划局\n\n安顺市自然资源局\n\n铜仁市自然资源局\n\n黔西南州自然资源局\n\n黔东南自然资源局"
  },
  "S04": {
   "heading": "zrzy.guizhou.gov.cn_贵州自然资源厅：当代贵州｜贵州一体化修复绘就黔山青绿新画卷",
   "date": "2026-09-13",
   "source": "zrzy.guizhou.gov.cn_贵州自然资源厅",
   "url": "https://zrzy.guizhou.gov.cn/wzgb/xwzx/xtyw1/202609/t20260913_90866060.html",
   "body": "当代贵州｜贵州一体化修复绘就黔山青绿新画卷\n\n发布时间： 2026-09-13 21:07\n\n字体大小： 大 - 中 - 小\n\n访问量： 次\n\n立秋过后，黔西南州贞丰县，河谷深处藏着一座“生长”在金矿废石场上的生态园。园内火龙果、芒果等时令蔬果相继成熟，空气中充盈着香甜的味道。\n\n这片绿意盎然的生态产业园，多年前是满目荒芜、乱石裸露的废石场。贵州锦丰矿业有限公司持续开展生态修复，将矿山“疮疤”变成了生态产业园。该公司烂泥沟金矿修复案例入选全国首批生产矿山生态修复典型案例，成为贵州“一体化”生态保护修复的生动缩影。\n\n贵州是全球喀斯特地貌发育最典型的地区之一，山、水、林、田、湖、草、溶洞、地下河交织共生，生态系统复杂脆弱，地表地下生态紧密相连。省自然资源厅相关负责人介绍，贵州大力推进山水林田湖草沙一体化保护和系统治理，以国家山水工程为引领，统筹矿山综合治理和全域土地综合整治，将单点修复拓展为全域协同，探索出一套适配喀斯特山地的“一体化”生态修复路径，重塑黔山秀水青绿底色。\n\n锦丰烂泥沟金矿修复后的生态园。 金秋 时 摄\n\n山水工程——勾勒修复大格局\n\n今年6月，湘黔两省联合申报的长江经济带重点生态区沅江中上游山水林田湖草沙一体化保护和修复工程，成功入选国家“十五五”第一批山水工程支持名单。这是贵州继“十三五”乌蒙山区山水工程、“十四五”武陵山区山水工程之后，第三次获批国家级山水工程，更是首次以跨省协同模式获得国家重大生态工程支持。\n\n此前，贵州曾长期面临治山不治水、护林不管田等“碎片化”治理难题。“十三五”以来，贵州以乌蒙山区、武陵山区两大国家山水工程为抓手，打破部门壁垒与地域分割，统筹山上山下、地上地下、上游下游协同治理，构建起“一源一城、两带两区”的国土空间生态修复大格局。\n\n乌蒙山区山峦起伏、地下溶洞密布，不少地区长期面临高寒高海拔、石漠化的侵扰，生态系统十分脆弱。位于乌蒙山深处的毕节市赫章县海雀村，曾经森林覆盖率仅有5%，一度被联合国教科文组织定性为“不适宜人类居住的地方”。\n\n2018年，贵州以毕节试验区为核心，启动乌蒙山区山水林田湖草生态保护修复试点工程，针对矿山开采、生态退化等突出问题，部署矿山修复、水环境治理、山林修复、湖泊治理、草地恢复等五大类工程共79个项目。2022年工程全面收官，累计完成生态修复面积65万余亩。从荒山秃岭到万亩林海，从石漠蔓延到林下产业蓬勃发展，从湿地退化到草海成为越冬鸟类天堂，当地生态发生了翻天覆地的变化。\n\n梵净山。（省自然资源厅供图）\n\n依托乌蒙山区山水工程的试点经验，贵州又将修复重心转向“世界独 生子”黔金丝猴和7000余种野生动植物赖以生存的家园——梵净山。\n\n2021年，以梵净山世界自然遗产地为核心的武陵山区山水林田湖草沙一体化保护和修复工程正式启动，布局梵净山生物多样性保护、沅江流域生态环境综合整治、乌江干流水土保持及石漠化治理、芙蓉江流域水土保持修复、洪渡河流域石漠化及水土保持修复五大修复单元共24个子项目。今年2月，工程顺利通过整体验收，累计完成修复面积超91万亩，武陵山区生态安全屏障更加牢固。\n\n在两大工程的实践基础上，贵州主动打破省域边界，与湖南携手共护沅江一江清水。今年入选的沅江中上游山水工程，以“一廊三屏”为总体布局，覆盖湘黔两省28个县（市、区），系统部署森林质量提升、生物多样性保护、水土流失治理等7类工程，共39个子项目，打造全国跨省流域生态治理“湘黔样板”。\n\n从乌蒙山试点破冰，到武陵山提质深化，再到沅江跨省协同，贵州以三期国家山水工程为笔，串联起长江上游生态脉络。治水、修山、茂林、兴地一体推进，生态修复与产业发展双向赋能，一幅人与自然和谐共生的青绿画卷正徐徐铺展。\n\n矿山治理——修复生态疮疤\n\n眼下，刺梨相继挂果。黔南州福泉市道坪镇英坪社区山坡上，刺梨树长势喜人。这片生机盎然的产业基地，曾是瓮福磷矿英坪露天矿区的废弃排土场。\n\n“以前这里放眼望去是光秃秃的黄土坡，种啥都活不了。”英坪社区党支部书记、村委会主任谭仁元说，如果不进行修复，黄土坡雨季还面临着水土流失的风险。\n\n瓮福磷矿成立“绿色矿山建设领导小组”，专人统筹推进修复工作。企业实施坡面修整、场地平整等基础工程，顺着蜿蜒而上的机耕道，从山顶至山脚的植被旁修建了几公里的隐蔽性排水沟，从源头化解水土流失风险。随后，经过多次调研论证，决定在复垦后的土地上发展刺梨产业。\n\n如今，530亩刺梨基地进入稳产期，不仅吸纳当地村民参与剪枝、采摘等管护务工增收，还与龙里县一刺梨加工厂签订统一收购协议，鲜果直供生产线加工为刺梨干、刺梨汁等产品。\n\n瓮福磷矿英坪露天矿区的废弃排土场修复后发展刺梨种植。\n\n“不仅生态治理了，村民还跟着得实惠。”谭仁元说，基地每年为征地涉及的40余户村民发放产业分红近9万元，昔日废弃排土场变成了村里的生态园，群众对修复效果很满意。\n\n锚定矿业绿色转型目标，截至今年6月底，贵州建成各级绿色矿山339座，其中，国家级绿色矿山18座、省级绿色矿山321座，覆盖磷矿、金矿、煤矿、砂石建材等多个矿种。\n\n“十四五”以来，贵州聚焦全省历史遗留矿山图斑5815个，系统推进历史遗留矿山生态修复攻坚，已完成治理图斑5735个，治理面积5360.14公顷。\n\n瓮福磷矿英坪露天矿区的废弃排土场修复后。\n\n从苗岭山脉、南北盘江流域两大国家级历史遗留废弃矿山生态修复示范工程，到多个国家生态文明试验区（贵州）补助资金支持治理项目以及多年度省级历史遗留矿山生态修复项目，贵州已构建起“示范引领、多点支撑、全域推进”的治理格局。\n\n针对我省山区陡坡多、土层薄、保水保肥难的修复痛点，各地因地制宜探索本土化技术路径：福泉市创新使用磷石膏固废资源化植生材料开展矿山边坡修复，实现固废消纳与生态治理双向增效；六盘水市应用改性糯米基植生层修复新技术，有效破解裸露陡坡固土复绿难题。一批废弃矿坑、裸露山体实现绿色蝶变，生态效益和民生效益实现双赢。\n\n土地整治——激活发展动能\n\n生态修复不止于复绿，更在于赋能。贵州以全域土地综合整治为抓手，破解山地耕地破碎化、土地利用低效化、乡村空间散乱化难题，推动生态治理与乡村振兴、文旅融合、产业发展的深度融合。\n\n避暑旅游旺季，雷山县西江镇龙塘村依山错落的吊脚楼旁，一间临田的咖啡厅吸引大批游客打卡。这间受到游客青睐的咖啡厅，过去是一片200余平方米的荒地。\n\n为盘活村集体闲置土地资源，当地将秀美的农耕风光与休闲旅游业态相结合，打造特色文旅打卡点，接连打造米酒加工厂、音乐农场等多个新业态，村内游客接待量较去年同比增长40%。\n\n游客打卡雷山县西江古镇。 金秋 时 摄\n\n龙塘村一角。金秋时摄\n\n西江镇曾长期面临耕地破碎、地块零散、宅基地闲置低效利用等突出瓶颈。当地以全域土地综合整治为抓手，统筹推进农用地整理、生态水系治理、传统村落保护、闲置建设用地盘活，实施田、水、路、林、村一体化整治。整治过程中，兼顾苗族村寨风貌保护，修缮历史建筑、治理农村水环境，探索出一条“全域整治+民族文旅”的特色发展路径。2025年，西江镇成功入选自然资源部第三批全域土地综合整治典型案例。\n\n一域突破，全域开花。各地立足资源禀赋、紧扣发展定位，因地制宜探索差异化整治模式：仁怀市长岗镇试点聚焦“全域整治+现代农业”，筑牢酱酒产业原料根基；水城区勺米镇试点践行“全域整治+生态保护”，厚植山地生态绿色本底；贵安新区高峰镇深化“全域整治+产业融合”，释放城乡发展动能……一个个试点，推动有限的土地资源释放更大的绿色发展动能。\n\n蘸修复之笔，贵州将继续总结推广西江镇等试点成功经验，不断完善制度保障与投融资机制，打通绿水青山向金山银山的转化通道，为山地地区耕地保护、生态治理、乡村振兴提供可复制的贵州实践。\n\n贵州省人民政府\n\n贵阳市人民政府\n\n遵义市人民政府\n\n六盘水市人民政府\n\n安顺市人民政府\n\n毕节市人民政府\n\n铜仁市人民政府\n\n黔东南苗族侗族自治州人民政府\n\n黔南州人民政府\n\n黔西南州人民政府\n\n上海市规划和自然资源局\n\n重庆市规划和自然资源局\n\n河北省自然资源厅\n\n河南省自然资源厅\n\n安徽省自然资源厅\n\n陕西省自然资源厅\n\n云南省自然资源厅\n\n江苏省自然资源厅\n\n湖北省自然资源厅\n\n浙江省自然资源厅\n\n四川省自然资源厅\n\n山东省自然资源厅\n\n湖南省自然资源厅\n\n广东省自然资源厅\n\n广西壮族自治区自然资源厅\n\n福建省自然资源厅\n\n内蒙古自治区自然资源厅\n\n江西省自然资源厅\n\n宁夏回族自治区自然资源厅\n\n贵州省自然资源厅机关服务中心\n\n贵州省自然资源厅会计结算中心\n\n贵州省自然资源厅电子政务中心\n\n贵州省土地矿产资源储备局\n\n贵州省国土资源勘测规划研究院\n\n贵州省自然资源技术信息中心\n\n贵州省土地开发整治中心\n\n贵州省不动产登记中心\n\n贵州省第一测绘院（贵州省北斗导航位置服务中心）\n\n贵州省第二测绘院\n\n贵州省第三测绘院（贵州省国土资源遥感监测中心）\n\n贵州省测绘资料档案馆（省地理信息中心、省自然资源卫星应用中心）\n\n贵州省地质博物馆\n\n贵州省测绘产品质量监督检验站\n\n贵州省油气勘查开发工程研究院\n\n贵阳市自然资源和规划局\n\n遵义市自然资源局\n\n六盘水市自然资源局\n\n毕节市自然资源和规划局\n\n安顺市自然资源局\n\n铜仁市自然资源局\n\n黔西南州自然资源局\n\n黔东南自然资源局"
  }
 },
 "47": {
  "S01": {
   "heading": "huinong.gov.cn_石嘴山市惠农区人民政府：燕子墩乡全域土地综合整治案例成功入选",
   "date": "2025-06-27",
   "source": "huinong.gov.cn_石嘴山市惠农区人民政府",
   "url": "http://www.huinong.gov.cn/zxdt/jzdt/202506/t20250627_4945662.html",
   "body": "您当前所在位置： 网站首页 >> 政务资讯 >> 街镇动态 >> 详细信息\n\n燕子墩乡全域土地综合整治案例成功入选\n\n发布日期：2025-06-27 浏览次数：0\n\n6月25日，自然资源部公布了第三批17个全域土地综合整治典型案例，宁夏石嘴山市惠农区燕子墩乡全域土地综合整治案例成功入选，充分展现了我市在全域土地综合整治工作中的创新实践与显著成效。\n\n为深入贯彻落实习近平总书记关于“千万工程”重要指示批示精神，2019年自然资源部正式启动全域土地综合整治试点工作，并于2024年将此项工作从试点转为全面铺开。2023年，自治区自然资源厅确定石嘴山市大武口区星海镇、石嘴山市惠农区燕子墩乡、固原市原州区开城镇、固原市隆德县城关镇等乡镇为全域土地综合整治试点。\n\n被确定为试点后，惠农区燕子墩乡牢固树立“项目整合、政企联动、共促振兴”的理念，以“补短、强农、调优、提质”为设计思路，建立“田地人”联动全域整治模式，直面乡域土地分散、质量不高、效益低下的问题，瞄准打造“34131百千万品牌工程”，即打造蛟龙口村海产品淡水化养殖、雁窝池村中药材种植、海燕村食用菌种植3个百亩产业园区；打造海燕村93.3公顷现代设施产业园区、黄渠拐子村186.7公顷供港蔬菜产业基地、燕子墩乡80公顷枸杞芽菜产业基地、贺兰山东麓（燕子墩乡片区）200公顷酿酒葡萄产业基地4个千亩产业基地；打造1个万亩高标准农田示范区；实现燕子墩红酒、简泉西甜瓜、海燕富硒菇菜3个品牌建设规划；建成1座配套完善、环境优美的特色小城镇，（下转第三版）（上接第一版）新建200套太阳能建筑一体化现代农房的战略目标，将全域土地整治和拓展乡村功能、发展现代农业、做强特色产业、改善人居环境、提升农民收入紧密结合，一体引进山东水发浩海集团有限公司等10余家农业龙头企业，协同推进重点小城镇建设、千亩现代设施农业园区等22个总投资达2.5亿元的项目。同时，健全土地流转、购房补贴等联农带农机制，逐步形成了以现代设施农业牛奶、肉牛肉羊、南美白对虾、供港蔬菜、菌菇、西甜瓜、葡萄酒为主的产业格局，乡村发展前景持续向好。\n\n经过两年试点，燕子墩乡在空间布局优化、生态价值实现、群众全程参与、推进机制创新、推动产业发展等方面积累了可推广、可复制的宝贵经验。（记者 周旭）"
  },
  "S02": {
   "heading": "zrzyt.nx.gov.cn_宁夏自然资源厅：关于自治区十三届人大三次会议第348号建议答复的函",
   "date": "2025-12-01",
   "source": "zrzyt.nx.gov.cn_宁夏自然资源厅",
   "url": "https://zrzyt.nx.gov.cn/gk/fdzdgknr/ytadf/rdjy/202512/W020251201518071889463.pdf",
   "body": "！！！— 1 —！！！\n\n关于自治区十三届人大三次会议第 348 号建议答复的函白军山代表：您提出的《关于实施惠农区燕子墩乡生态修复及历史废弃矿山治理项目的建议》收悉。经会同自治区财政厅、生态环境厅、水利厅、住房城乡建设厅、交通运输厅、农业农村厅和林草局认真研究，现答复如下：近年来，我厅联合自治区相关部门大力支持惠农区开展生态保护修复工作，推动废弃矿坑、荒滩戈壁、采矿塌陷区等生态修复、发展生态产业。2020 年以来，先后支持惠农区实施历史遗留废弃矿山生态修复项目 6 个，总投资约 1.16 亿元，矿山修复面积793 公顷；下达惠农区土地指标跨省域调剂收入资金 1.29 亿元，支持实施乡村土地整理和生态修复类项目 10 个，惠农区生态修复工作取得了显著成效，其中燕子墩乡全域土地综合整治入选全国第三批典型案例，为西北地区唯一入选案例。\n\n建议提出将惠农区燕子墩乡废弃矿山治理与红色文化旅游、乡村生态修复和灌溉基础工程建设相结合，实施生态修复治理项目，打造贺兰山下特色旅游乡村。该建议与当前推进生态修复与生态产业、文旅产业等融合发展，助力乡村全面振兴的工作方向！！！— 2 —！！！高度契合，我厅将综合施策、多措并举，会同自治区相关部门予以支持。\n\n一是增补纳入矿山示范工程。2024 年 7 月，自治区组织银川市、石嘴山市和吴忠市联合申报黄河上游风沙区（宁夏中北部）历史遗留废弃矿山生态修复示范工程，成功纳入国家支持范围，获得中央 3 亿元财政资金支持。该工程总投资 5.04 亿元，在 18个子项目推进实施过程中，经初步测算，尚有资金节余。我厅已于 11 月 27 日联合自治区财政厅组织开展工程整体实施方案调整，并新增子项目，将惠农区燕子墩乡生态修复及历史废弃矿山治理项目纳入示范工程范畴，近期下达首批资金予以支持。我厅将指导惠农区加快编制项目初步设计，尽快完成立项审批开工建设。\n\n二是强化生态产业发展指导。我们注重生态修复项目中的产业导入，立足简泉村富硒土地、红色文化和贺兰山风光等自然资源，积极提供富硒瓜菜种植、休闲农业运营管理等方面的指导培训，引导简泉村打造“硒”主题农业旅游体验区、建设农耕文化展示馆、开展富硒瓜菜采摘节等节庆活动，推动富硒农业与休闲农业深度融合，让游客在体验农事乐趣的同时感受生态修复成效。\n\n三是加强生态修复项目谋划储备。会同自治区相关厅局，指导惠农区将生态修复与葡萄酿酒、旅游康养、绿色农业、清洁能源等产业结合，持续开展项目谋划工作，按程序申报纳入自治区生态保护修复资金项目库。同时充分考虑交通等基础设施建设服！！！— 3 —！！！务特色生态产业发展作用，指导惠农区优化完善简泉村中心路新建工程等项目方案，为争取国家和自治区资金支持做好充分准备。最后，衷心感谢您对我们工作的关心与支持，并希望今后多提宝贵意见。\n\n宁夏回族自治区自然资源厅2025 年 11 月 28 日（联系人：苏宁，联系电话：0951-5059603。）！！！— 4 —！！！抄送：自治区人大常委会代表工作委员会，自治区人民政府督查室。宁夏回族自治区自然资源厅办公室 2025 年 11 月 28 日印发"
  },
  "S11": {
   "heading": "huinong.gov.cn_石嘴山市惠农区人民政府：海燕村：盐碱地变身“聚宝盆”",
   "date": "2023-11-29",
   "source": "huinong.gov.cn_石嘴山市惠农区人民政府",
   "url": "http://www.huinong.gov.cn/zzb/jzdt/202311/t20231129_4366836.html",
   "body": "海燕村：盐碱地变身“聚宝盆”\n\n农业产业发展要始终把落脚点放在为农户增收和为产业增效上。为更好地探索盐碱地生态化利用新路径，今年以来，惠农区燕子墩乡立足实际，与国内知名企业联手，大力发展设施农业，让盐碱地变身“聚宝盆”，带动移民群众增收致富。\n\n11月27日，在燕子墩乡海燕村千亩现代设施农业园区日光温室项目建设现场，挖掘机、推土机等大型机械车辆来回穿梭，一排排墙体高大厚实的温室初现“真容”。“截至目前，我们已经完成24座温室的墙体和圈梁等基础工作，接下来要进行骨架安装和薄膜、棉被覆盖。”该园区项目技术员杨洪海表示，日光温室三面土墙墙体厚达3米，可有效抵御寒冷天气，保障瓜菜正常生长。\n\n据悉，正在实施建设的千亩现代设施农业园区一期项目占地面积270亩，建设内容包括49座日光温室和室外管网、电气、路面、绿化等园区基础设施，总投资2454万元。“骨架、薄膜、棉被已准备就绪，近期将组织工人全力搭建。预计明年3月，会有15座温室投入使用。”杨洪海说。\n\n海燕村土壤盐碱化程度高，多年来，移民种植大田作物的产出和效益有限，许多土地被撂荒。“这里的土是红胶泥，排水不畅，越浇越碱，收成还少。但是，建温室就不一样了，挖条排水沟相当于淋碱沟，水浇完，盐碱就顺着水沟排走了。”杨洪海说，虽然海燕村土壤盐碱化较高，但富含硒、钾等元素，长出的瓜菜口感会更好。\n\n为此，燕子墩乡积极引进水发浩海集团有限公司，流转该村土地1400亩发展设施蔬菜特色产业，并计划利用5年时间，共同投资1.4亿元建造现代设施农业大棚240余座。“水发浩海集团有限公司是山东省大型省属企业水发集团有限公司的控股子公司，与国内知名农业批发市场、连锁超市、电商平台均建立了良好合作关系。大棚建成运行3年后，村民就可以租棚自己种植各类瓜菜，后期由水发集团负责销售，这样能带动100多户村民发展设施农业，季节性用工可达500人。”海燕村党支部书记马守芳说。（记者 马国珍 周旭）"
  },
  "S06": {
   "heading": "thepaper.cn_澎湃新闻：护耕地、住新房、强产业、促增收……自然资源部“发红包”了！",
   "date": "2026-02-19",
   "source": "thepaper.cn_澎湃新闻",
   "url": "https://m.thepaper.cn/newsDetail_forward_32634088",
   "body": "澎湃号·政务 >\n\n护耕地、住新房、强产业、促增收……自然资源部“发红包”了！\n\n资源中国 自然资源部宣传教育中心官方澎湃号\n\n这个春节，对浙江安吉县余石村的村民陈桂娥一家来说，一定印象深刻，因为这是他们在新家度过的第一个春节。2022年，凭借浙江省全域土地综合整治的东风，余石村两三百户村民告别原本分散布局、破旧的老宅；如今，土地整治播下的“种子”“开花结果”，白墙黛瓦的三层小楼在余石村整齐排开，他们住上了户户带小院、家家通燃气的新房。\n\n在宁夏石嘴山市燕子墩乡，全域土地综合整治的成果也在春节期间显现，通过重新激活盐碱地生产功能，当地出产的螺丝椒、串番茄、鲈鱼、白对虾，市场销售火爆；江苏省如东县新店镇净增加2600多亩耕地的流转收益，也在这个春节为每户村民添了一枚红包。“全域土地综合整治”，究竟是什么？为什么能给村民带来这么多实实在在的实惠？\n\n写春联、贴春联，安吉县余石村村民喜迁新居\n\n余石村村民 陈桂娥：喂，年年，今天我们在新家过第一个年，中午都回来吃午饭！\n\n对浙江湖州安吉县余石村村民陈桂娥一家来说，这个马年春节，注定难忘。清早，她就给孩子们打电话，叫他们一起在新家过第一个春节。\n\n女儿 李亚莉：妈，回来过年了！新年快乐，马年大吉！吃饭了，端菜了！\n\n不是生态搬迁，也不是临时安置，为什么陈桂娥和乡亲们今年统一都搬进了新家？这就要说到写进“十五五”规划建议的一句话——“协同推进县域国土空间治理，稳步开展全域土地综合整治”。简单而言，就是以往的国土空间布局“不够合理”，耕地、林地、园地、宅基地等碎片化分布；现在，则以国土空间规划为依据，因地制宜，将生产、生活、生态空间系统重塑。陈桂娥的老伴李志贵说，2022年，余石村推进全域土地综合整治，他们就和村里两三百户村民积极参与，去年5月，他们终于圆梦新居。\n\n李志贵：家里面的环境改善了，你看，柏油路浇到家门口，水泥场地都建得好好的。以前烧土灶，现在都是煤气灶。每天晚上大家在一起聚聚、聊聊，开心得很！以前可没有这个氛围。\n\n全域土地综合整治后，安吉县余石村新建的小区\n\n余石村地处浙皖交界，多数村民的房子建于20世纪八九十年代，分散在各个山坳，一到暴雨天，不少村民都得连夜转移。余石村党总支书记、村委会主任张杰介绍，如今，昔日碎片化分布的老宅基地已复垦成良田，冬小麦正冒着青茬，长势喜人；村民们不但住进了由物业委员会统一管理，篮球场、健身区、儿童游乐场等公共服务设施一应俱全的新小区，每年还能拿到稳定的耕地流转租金，老宅地变成了增收田。\n\n张杰：通过全域土地综合整治之后，所有的农田、土地整合起来，农田或复垦土地中间的道路也进行了生态化改造，排水渠都进行了修复重建。下一步，我们的烘干中心要造起来了。通过招商引资，我们每年通过土地大概增收30万元集体经营收入，平均每个人有千把块钱。\n\n近年来，浙江安吉县天子湖镇余石村，就是通过全域土地综合整治，培育“精品农业、特色文旅、田园社区、生态人居”多元功能，打造出以养生养老、生态旅游、休闲度假为核心的综合性特色村庄。安吉县自然资源和规划局耕地保护与生态修复科科长高殷介绍，通过农田整治、村庄整治、特色整治，安吉县下辖各村面貌焕然一新，推动要素资源有序整合、乡村发展空间科学布局，显著提升全域生态产品价值供给能力。\n\n高殷：通过全域土地综合整治，余石村不仅保护了耕地、提升了耕地质量、改善了耕地生态，还优化了村庄人居环境，打造出“青山、秀水、生态村”的乡村风貌。除了余石村，还有递铺街道青龙村、鄣吴镇鄣吴村等。现在在安吉，不管走到哪儿，都可以看到有着鲜明特色的浙派民居、美丽宜居村庄。不少村子还聚焦特色产业，尝试引进休闲度假基地、小微企业园区等项目，打造综合业态，乡村发展的动能也更足了。\n\n燕子墩乡盐碱地整治前后对比\n\n燕子墩乡，位于宁夏石嘴山市惠农区，地处宁夏北部引黄灌区边缘，年均降水量不足且蒸发量大，土地盐碱化现象严重，传统的玉米、小麦种植模式，严重制约了村民增收。同时，全乡78个自然村外出劳务人员多，加之过于分散的宅基地布局，使“空心村”现象凸显，在造成土地资源浪费的同时，也严重制约了农村污水、集中供热等民生项目的实施。2023年，当地用全域土地综合整治来拓展乡村功能、发展现代农业、做强特色产业、改善人居环境、提升农民收入，以“一把钥匙”解决这一系列问题。\n\n海燕村千亩现代设施产业园区负责人 周金明：以前这里都是盐碱地、大荒滩，土地泛白，种不了东西。现在通过燕子墩乡全域土地综合整治，我们平整了土地，疏通了沟渠，同时落实了耕地进出平衡相关要求。正是有了这些基础条件，我们投资建设了1500亩现代设施产业园区。这个月刚上市的螺丝椒、串番茄，销路非常好，订单供不应求。今年，我们计划再在燕子墩乡建设1700亩现代设施产业园区，种植蓝莓、串番茄、白玉甜瓜等适宜本地气候的特色果蔬。预计两个园区全部投产后，年销售收入能达到5000万元以上。\n\n燕子墩乡海燕村千亩现代设施农业园区项目前后对比\n\n石嘴山市惠农区燕子墩乡党委书记田原介绍，通过精准实施盐碱地治理、农用地整合、建设用地腾退三大工程，当地实现了生产、生活、生态空间深度重构，生产集约度、生活宜居度、生态承载力同步提升。\n\n田原：正值春节假期，我们海燕村千亩现代设施产业园区出产的螺丝椒，蛟龙口村海产品淡水化养殖园区出产的加州鲈鱼、南美白对虾，市场销路都特别好。可以说我们彻底打破盐碱地的生产限制，重新激活了盐碱地的生产功能，这些在全域土地综合整治前是想都不敢想的。这个春节，不少原先“空心村”的群众，已经搬进“特色小城镇中心城区”，在新家过第一个团圆年。我们建设的新式农村节能住宅全部接入农村污水管网，通过屋顶光伏解决了冬季取暖问题，在不影响正常农业生产的前提下，让搬迁群众人居环境品质得到大幅提升，公共服务满意度达92%以上。\n\n燕子墩乡蛟龙口村海产品淡水化养殖基地\n\n而坐落于江苏省如东县西南的新店镇，地处滨海平原，地势平坦开阔，作为历史悠久的传统农业镇，自清代便以盛产“贡米”闻名遐迩，2020年荣获江苏省“味稻小镇”称号。在2022年底实施全域土地综合整治之前，当地废弃沟塘与分散农宅相互嵌合，形成“田－塘－道－宅”犬牙交错的空间格局，致使耕地资源碎片化特征显著，亟须通过综合整治优化农业生产空间布局。江苏省南通市如东县新店镇副镇长张晶晶介绍，去年底，新店镇全域土地综合整治正式完成，带来的成效，正在当地持续“开花结果”。\n\n张晶晶：过年这段时间，我们正在给老百姓集中兑付土地流转费。通过全域土地综合整治，我们科学优化“三生空间”、再开发利用低效用地，从而净增耕地2655亩，新增耕地率达14.2%。这部分新增土地流转给种粮大户种植水稻、小麦，所产生的收益，我们按比例全部回馈给老百姓，最多的一户能拿到12000元的“新年红包”。我们还在孙桥村试点，用部分土地流转产生的收益为全村70岁以上老年人全额缴纳农村合作医疗保险，这对老百姓来说都是真金白银、实实在在的实惠。另外，我们还完成了2145亩区域人居环境整治，重点落地粮食烘干仓储中心、特色水产养殖基地、蔬菜仓储冷链、生物基板材等农业特色项目，构建“从田间到餐桌”的产业链条，不仅让村民实现就地就近就业，更为乡村振兴注入产业动能。\n\n新店镇农田整治前后\n\n新店镇零散居民点整治前后\n\n透过这个春节假期，不难发现，全域土地综合整治已成为促进耕地保护和土地集约节约利用、改善农村人居环境、助推乡村全面振兴的关键之举。自然资源部国土整治中心全域整治部主任吕婧介绍，近年来，自然资源部扎实开展全域土地综合整治，着力改变原本“顾此失彼、零敲碎打”的单一类型项目实施做法，运用系统思维，综合解决耕地破碎化、空间无序化、利用低效化、生态退化等问题，推动24个省份颁布配套政策措施，带动当地发展优势显著提高。\n\n吕婧：全域土地综合整治，是从早期的土地整理演变而来。通过学习运用“千万工程”经验，以县域统筹、镇域为实施单元，优化“三生”空间布局和结构，统筹开展农用地整治、建设用地整理、生态保护修复、历史风貌保护以及产业导入等空间治理活动，助力建设宜居宜业和美乡村，增强镇域经济韧性和活力。从试点到全面推开，自然资源部颁布了《自然资源部关于学习运用“千万工程”经验 深入推进全域土地综合整治工作的意见》及实施指南，发布了三批17个实践案例，全国开展了1700多个全域土地综合整治实践，带动当地发展优势提高10%至15%。\n\n当下，我国经济社会发展进入存量提质增效为主的阶段，通过全域土地综合整治这一规划实施落地的政策工具，来夯实基本实现社会主义现代化的空间基础、赋能发展，至关重要。吕婧表示，正因如此，“全域土地综合整治”被写入“十五五”规划建议；未来，应进一步提升全域土地综合整治的空间治理组织协调能力、完善空间治理制度体系、发挥当地居民的主体作用，形成可持续、蓬勃发展的生动局面。\n\n吕婧：面向“十五五”，全域土地综合整治作为空间赋能国家发展的战略选择，机遇与挑战并存。这是一项涉及多部门、多主体协同的复杂系统工程，需要政府主导，自然资源部门牵头，相关部门协同发力，同题共答，市场化推动。在完善空间治理制度体系方面，要从政策供给、标准规范、实践规律总结、理论研究等多维度提升，为全域整治稳步开展保驾护航。同时，还要探索如何发挥当地居民的主体作用，变“要我参与整”为“我要主动整”，在同一空间统筹、“多规合一”实施，以人民得实惠为目标来推动发展。未来，我们有信心通过全域土地综合整治，开展用地布局和资源配置优化，统筹绿色发展和高质量发展，助力实现人与自然和谐共生的现代化。（王泽华 白植清 吴志英 陶鹏飞 钱成 王德俭）\n\n原标题：《护耕地、住新房、强产业、促增收……自然资源部“发红包”了！》\n\n本文为澎湃号作者或机构在澎湃新闻上传并发布，仅代表该作者或机构观点，不代表澎湃新闻的观点或立场，澎湃新闻仅提供信息发布平台。申请澎湃号请用电脑访问https://renzheng.thepaper.cn。"
  }
 },
 "01": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨上海松江泖港镇：用地做“减法” 发展做“加法”",
   "date": "2024-09-04",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5341581",
   "body": "上海市松江区泖港镇全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。松江区泖港镇位于黄浦江上游南岸一线，全镇郊野地区农田广袤、滨江林带绵延，村庄与河道相依，具有典型的江南水乡田园风貌。试点承接乡村振兴战略，根据上位规划及相关专项规划的定位，立足区域自然禀赋、特色产业、乡土文化等，提出建设全球城市黄浦江上游生态保护和高质量发展的乡村振兴示范区的目标任务，积极搭建乡村有机更新和城乡统筹发展的新平台，探索富有特色的超大城市全域土地综合整治模式。试点通过开展整体策划、整体规划、整体设计，协同实施各类乡村建设行动，以问题和行动为导向创新政策机制，改善了农村生态环境，提高了耕地与永久基本农田集中连片度，实现了区域空间优化、资源整合和价值提升。\n\n高标准农田区域\n\n一、案例背景\n\n（一）基本情况\n\n松江区泖港镇位于上海市西南，共16个行政村，镇域面积57.5平方公里，其中城市开发边界外55.8平方公里，坐拥万亩泖田风情和十里涵养林带，是全国农业产业强镇、国家级生态镇。泖港镇作为典型的上海远郊乡镇，肩负着农业生产、生态保育的重任，也有着建设用地空间优化的诉求。\n\n（二）存在问题\n\n1.耕地和永久基本农田保护任务繁重与破碎化程度高并存\n\n泖港镇是远郊纯农镇，91%的现状耕地被划入永久基本农田。耕地被零星建设用地分割，破碎化明显，对于尚在城镇化进程中的泖港镇来说，腾挪空间和补划潜力极其有限。\n\n2.农民集中居住意愿强烈与村庄归并选址困难并存\n\n现状农村宅基地布局零散，大部分农宅建于20世纪70、80年代，建筑质量不高，公共服务设施能级较低，基础设施配套不齐全。由于松江浦南地区历史上对农民建房实施了严格管控，农民改善居住条件的呼声很高，但村庄归并点选址因触及永久基本农田难以落地实施。\n\n3.建设用地减量化任务与产业用地盘活需求并存\n\n泖港镇现状高能耗型、劳动密集型产业众多，其中年缴税收100万以下的企业占比65%，带动本地就业人口20人以下的企业占比64%。泖港镇持续推进低效建设用地减量化工作，2018~2020年建设用地减量复垦验收69.9公顷。按照规划，至2035年泖港镇城市开发边界外建设用地仍需净减量2平方公里，随着成本的升高，减量压力和难度越来越大。同时，随着交通改善和乡村环境品质提升，一些总部办公、休闲旅游等新型业态希望进入乡村，如何盘好产业用地的土地账和经济账是当前泖港镇发展的重要议题。\n\n4.生态建设需求与林水田空间有限并存\n\n泖港镇部分河道水质浑浊，林地树种单一。由于泖港镇位于黄浦江水源保护区，又在市域生态廊道上，生态建设任务重，环境品质有待提升，但在实施过程中河道建设、林地建设、永久基本农田保护各有任务，空间矛盾突出，急需统筹协调。\n\n（三）试点目标任务及总体安排\n\n松江区泖港镇以全域土地综合整治试点为契机，通过全域产业振兴、全域村居改善、全域景观提升，打造黄浦江滨的水乡田园小镇、全球城市的科技农业和全域旅游示范镇，建设黄浦江上游生态保护和高质量发展的乡村振兴示范区。本次土地综合整治工程重点聚焦黄桥村、腰泾村、胡光村和生态涵养林片区等16.4平方公里。\n\n一是突出耕地“三位一体”保护，适应发展现代农业和适度规模经营的需要，统筹推进高标准农田建设、低效林草地和园地整理、农田基础设施建设，传承农耕文化、改善农田生态。二是有序开展农村宅基地、工矿仓储用地等低效建设用地整治，优化农村建设用地布局，提升农村建设用地使用效益和集约化水平，支持农村新产业新业态融合发展。三是按照山水林田湖草系统治理要求，优化调整生态用地布局，统筹推进损毁和退化土地治理等，保护和恢复乡村生态功能，维护生物多样性，保持乡村自然景观。四是利用集体经营性建设用地入市等政策，盘活低效集体资产，进行产业转型改造，统筹田园艺术村项目，促进一二三产业融合发展。\n\n二、主要做法\n\n（一）编制郊野单元村庄规划，协调各类用地空间布局\n\n按照郊野单元村庄规划、村庄设计、全域土地综合整治方案联动编制的路径，将各类国土空间要素按照“规划—项目—资金—时序”四个层面进行有机整合，针对工业用地低效、农村宅基地散乱、耕地斑块分散、各条线工程项目时空统筹性和系统性不强等问题，通过郊野单元村庄规划协调各类用地，统筹安排规划管控时序，开展高水平乡村建筑、公共空间设计，着力提升全域风貌。\n\n（二）解决耕地碎片化问题，促进耕地集中连片\n\n通过协调推进零散农用地和生态用地整理、建设用地复垦，增加耕地数量，提升耕地质量，优化耕地布局。严格遵循“数量有增加、质量有提升、生态有改善、布局更集中、总体保持稳定”的原则，积极探索科学合理调整永久基本农田的通道，按照“永久基本农田—部管储备地块—市管储备地块—土地整备引导区”梯次补划，并落实耕地管护主体，确保耕地“应种尽种”，提升土地可持续治理能力。\n\n（三）推动农民相对集中居住，提高乡村生活品质\n\n充分考虑村民意愿、基础设施配套建设和各种刚性管控要素，优化村庄平移归并点选址，形成村庄布局方案。探索村内平移归并、进镇集中上楼、跨镇异地安置、自愿有偿退出等多种集中方式，激发农民集中居住的积极性。高标准规划设计集中居住点，切实满足居民需求。加强功能导入，实现集中居住点、公共服务设施和产业园区集中布局，形成宜居宜业宜游的乡村新社区。\n\n乡村农居点整治前（上）后（下）风貌\n\n（四）联动“减量”和“盘活”，提升乡村空间质量\n\n针对存量工业用地，实施全面梳理和综合评估，从产业门类、企业绩效、带动就业及环境保护四个因素开展评价，制定近、远期退出名单，有序优化乡村建设用地布局，提高建设用地综合绩效，促进区域产业可持续发展。泖港镇黄桥村通过政策组合拳，整合违法建设用地整治、提高专项资金补贴、优化资金拨付形式等手段，腾退高能耗企业，有效推动了减量化工作，建设用地总规模从2018年的74.4公顷净减至37.2公顷，净减量比例达50%。在建设用地减量的基础上，通过规划选取布局合理、配套完善、产村（产农）融合的存量工业用地实施转型升级，面向农村一二三产业融合发展需要合理布局新增建设用地。\n\n黄桥科技园镇村投资情况及运营模式\n\n原黄桥工业园面积约9.4公顷，毗邻农民集中归并居住点，区域内以小型加工企业、村办企业为主，大部分已停产。规划将现状工业用地调整为产业研发用地，建筑面积由现状36118平方米增加至95542平方米，开发强度提高265%，以集体经营性建设用地入市方式公开供应土地。2020年，该地块由区属国企“漕河泾”与集体（镇资产公司+11个村级合作社）共同成立的资产公司获得，土地出让收入共计1.2亿，其中大部分返还至镇政府用于现状企业清退。\n\n（五）实施系统生态修复，提升区域生态品质\n\n泖港镇位于上海黄浦江水源保护区内，又在市级生态廊道上，承担着重要的城市生态安全保障功能。针对区域内6平方公里的水源涵养林，采取区域内工矿用地全部退出、农民全部实施镇区集中安置等措施，同时规划慢行道、简易休憩点等配套设施，逐步开放林地空间，实现林地生态价值提升。协同开展水环境治理，区域内启动了松江泖港浦江源河道水质提升与农业面源污染生态阻控项目，在北部涵养林和南部农业面源污染控制区内构建“双回路”多级循环净化系统，目标从水环境改善转变为水生态系统修复，治理方式从单条河段整治转变为集中连片治理，治理内容从以污染源治理为主转变为生态综合治理。在不涉及永久基本农田占用的情况下实现水林联动、水田联动和治水治污联动，实现区域生态环境的整体提升。\n\n（六）集聚各条线资金，市区镇形成合力积极推进\n\n加强市、区、镇和部门协同，区政府充分发挥统筹资金和项目的主体责任，引导各条线资金聚焦整治区域，加强政策设计和资金倾斜。镇级政府作为实施主体，加强整体发展策划和产业引入，统筹各类建设需求，协调推进项目实施。市规划资源局负责顶层设计和政策配套，组织市级部门加强政策和资金协同。针对建设用地减量化和农民相对集中居住中存在的问题和困难，松江区政府对工矿仓储用地、宅基地减量化的新增建设用地指标，按每亩160万元、200万元给予补贴；对建设用地减量化产生的耕地占补平衡指标、快验快收、超额完成任务实施专项奖补。\n\n三、取得成效\n\n试点“十四五”期间在整治区域内共统筹谋划7类17个项目，集聚资金34.2亿元（中央财政0.3亿，市级资金15亿，区级资金14.6亿，镇村级资金2.8亿，社会投资1.5亿），预计新增耕地29.1公顷，建设开放休闲林地160公顷，实施农民相对集中居住、宅基地和工矿仓储用地等减量100余公顷，腾挪聚合集体经营性建设用地约68亩，形成造血机制。经过泖港镇的试点实践探索，初步检验了全域土地综合整治在规划统筹、空间协调、行动协同、资金整合和政策保障等方面的优势，具备整体性、系统性、高效性和可操作性等特点，符合新发展阶段超大型城市乡村振兴的实际需要。\n\n（一）打好底色，重塑乡村整体空间格局\n\n通过全域土地综合整治，整体优化乡村空间形态，围绕水源涵养林生态修复与利用区、家庭农场农业生产示范区、村庄整治示范区、乡村产业发展区四个主要功能区，促进生产、生活、生态空间合理布局。项目实施完成后预计新增永久基本农田7.3公顷，耕地集聚度提高，小图斑面积减少，20公顷以上大斑块面积由708.1公顷增加到739.3公顷。在确保耕地保护任务的前提下，合理拓展林水空间，增加林地空间32.16公顷，增加河湖水面37.61公顷。试点在全镇乃至全区范围内配置资源要素，为各条线建设任务提供了解决方案，提供了资金和政策支撑，探索了乡村规划精准实施的路径，受到了地方政府和群众的好评。\n\n林水复合区域\n\n（二）主客共用，构建乡村社区生活圈\n\n到2025年，试点可实现黄桥村、腰泾村和曹家浜村约1300户农民全部集中居住。同时，在慢性可达的空间范围内，营造便利共享的乡村生活品质。基于村民、游客及未来将导入的黄桥科技园等不同需求，综合布置公共服务设施，用地面积1.2公顷，建筑面积8000平方米，功能涵盖行政、养老、医疗、公共交通、文化、农技服务等多个领域。如村民事务综合服务中心提供农机仓库、党建服务站、社区服务站和村委会办公等空间，幸福老人村提供生活照护、医疗护理、膳食供应、康复保健、文体娱乐、心理咨询等一体化服务。公共服务中心南侧设置公交集散点，为村民、员工及游客出行提供便利。由于环境改善、居住条件提升和公共配套完善，泖港镇实现了村民村内居住回流，农民满意度和幸福感大大提升，村庄活力明显增强。\n\n农民相对集中居住点和公共服务中心\n\n（三）筑巢引凤，促进乡村产业融合发展\n\n围绕乡村振兴目标，试点构建了“乡村旅游＋农业研发＋科创孵化＋乡村创客”的乡村新产业多元发展格局，整治聚合土地资源，吸引社会资金投资，为壮大集体经济组织和农民增收创造机会。如黄桥科技园项目引入科创企业，发展电子信息、科技农业、都市文创等高科技产业，园区运营收益在漕河泾公司、镇资产公司、村级合作社之间分配，镇、村按股权比例可获得49%股权分红收益。\n\n园区运营为村民增加了服务岗位，企业员工的引入将有效激活农民住房闲置资产和集体公共服务设施资源，实现空间复合节约集约和农民集体权益增加双重效应；涌禾农庄、云间熙舍、玫瑰园等乡村旅游产业项目已启动建设，未来将打造集循环农业、创意农业、农事体验、研学教育于一体的互动式乡村田园主题目的地；田园艺术村依托泖港乡村创客联盟，利用存量用地和存量建筑改造成艺术家工作室、美术馆、民俗博物馆、书店、咖啡馆等，形成集美食体验、艺术创作、展览展示、影视服务、文化旅游为一体的复合型艺术空间。\n\n“老黄桥工业园”（上）变身为“黄桥科技园”（下）\n\n四、适用条件和推广前景\n\n松江区泖港镇全域土地综合整治试点在推进过程中形成重规划、强设计、重实施、强机制的总体工作框架，为超大城市郊野空间品质提升提供了系统性解决方案。试点准确把握超大城市乡村定位，找准全域土地综合整治关键点。\n\n通过政策创新和精细化规划，积极解决农民集中居住、低效建设用地减量化和产业发展等问题，激发地方积极性，推动乡村有机更新和可持续发展。创新规划方式，通过法定规划、村庄设计、实施方案“三位一体”，实现规划精准落地，提升乡村审美韵味和高效能治理水平。以郊野单元村庄规划为行动平台，承接区镇国土空间总体规划的刚性管控要求，协调各类专项规划，在镇级层面统筹乡村地区的空间布局和用地指标，按照区域发展目标，编制土地综合整治实施方案，形成全域土地综合整治行动“一张图”，实现空间、资金、时序的动态平衡。关注实施与行动，以项目聚合、政策创新、简化管理推动试点顺利进行。通过加强多规衔接和项目统筹，协调各类建设主体，变“九龙治水”为合作共建，形成行动导向、协同共治、综合施策、精准整治的乡村更新模式。同时使用集体经营性建设用地入市等政策，促进项目尽快落地，激发集体经济活力。\n\n（上海市规划和自然资源局推荐）"
  },
  "S03": {
   "heading": "ghzyj.sh.gov.cn_上海市规划和自然资源局：探索土地集约节约与群众增收致富双赢——上海市松江区泖港镇全域土地综合整治试点",
   "date": "2024-08-08",
   "source": "ghzyj.sh.gov.cn_上海市规划和自然资源局",
   "url": "https://ghzyj.sh.gov.cn/sj/20240808/9b3003478eda44cca6a59d88b7c5e84c.html",
   "body": "探索土地集约节约与群众增收致富双赢 ——上海市松江区泖港镇全域土地综合整治试点 发布日期：2024-08-02\n\n探索土地集约节约与群众增收致富双赢 ——上海市松江区泖港镇全域土地综合整治试点\n\n2024年08月02日 上海市上规院城市规划设计有限公司\n\n《上海市松江区泖港镇全域土地综合整治试点实施方案》入选自然资源部全域土地综合整治试点首批案例，该项目也获得了2023年度上海市优秀国土空间规划设计二等奖。\n\n在第34个“6.25”全国土地日到来之际，自然资源部发布全域土地综合整治试点第一批典型案例，提出：上海松江案例灵活运用全域土地综合整治与集体经营性建设用地入市试点政策，将毗邻群众居住区的低效工业厂房改造为科技园，群众既能就业又能分红，土地集约节约与群众增收致富双赢。\n\n图 1：首批全域土地综合整治试点典型案例示意图\n\n（图片来源：自然资源部   i自然公众号）\n\n工作背景及愿景\n\n按照自然资源部要求，2019年全国启动全域土地综合整治试点工作，上海启动松江区泖港镇和金山区廊下镇两个全域整治试点，探索以乡镇为基本实施单元，整体推进农用地整理、建设用地整理、生态保护修复和历史文化保护，助推乡村全面振兴。\n\n松江区泖港镇位于上海市西南，黄浦江上游南岸一线，全镇郊野地区农田广袤、滨江林带绵延、村庄与河道相依，属于本市特色村落风貌保护传承专项规划中 “棋盘”意向的风貌格局，具有较好的生态基底。\n\n试点整治区域重点聚焦黄桥村、腰泾村、胡光村和生态涵养林片区（范家村、泖港村），总面积16.4平方公里。全域整治试点积极搭建乡村有机更新和城乡统筹发展新平台，探索富有特色的超大城市全域土地综合整治新模式，通过整体策划、整体规划、整体设计，协同实施各类乡村建设行动，实现区域空间优化、资源整合和价值提升。\n\n图2：试点整治区域范围示意图\n\n主要做法及成效\n\n1、编制郊野单元村庄规划，协调各类用地空间布局\n\n通过编制郊野单元村庄规划在整镇域范围内协调各类空间资源，基于“规划—项目—资金—时序”四个层面进行有机整合，统筹安排规划管控的空间时序，高水平设计乡村建筑、公共空间，着力提升全域风貌。\n\n2、解决耕地碎片化问题，促进耕地集中连片\n\n协调推进零散农用地和生态用地整理、建设用地复垦，增加耕地数量，提升耕地质量，优化耕地布局。在全域整治试点政策的基础上，按照“永久基本农田—部管储备地块—市管储备地块—土地整备引导区”梯次补划，确保基本农田在任何时点都不减少，整治后耕地集中连片，粮食生产效率提高。\n\n图 3：土地综合整治前（左）后（右）航空影像图\n\n（通过宅基地拆旧及低效建设用地复垦，实现耕地集聚度提升）\n\n图 4：土地综合整治后（黄桥片区）鸟瞰图\n\n3、推动农民相对集中居住，提高乡村生活品质\n\n充分考虑村民意愿，探索村内平移归并、进镇集中上楼、跨镇异地安置、自愿有偿退出等多种集中方式，激发农民集中居住的积极性。高标准规划设计平移归并居住点，切实满足居民需求。加强功能导入，实现集中居住点、公共服务设施和产业园区集中布局，形成宜居、宜业、宜游的乡村新社区。\n\n黄桥村老书记陈书记称：通过全域试点实现了村民村内居住回流，2019年前村内空心化严重，800人左右住在黄桥村，60岁以上老人不少都住在镇区。2024年，村内1300人左右，回流近500人，有的年轻人把松江新城的房屋出租后，住回黄桥，去新城上下班开车也很方便，居住舒适度大大提升。\n\n图 5：整治前（左）后（右）乡村农居点风貌实景\n\n图 6：农民相对集中居住点和公共服务中心\n\n4、联动“减量”和“盘活”，提升乡村空间质量\n\n泖港镇黄桥村通过政策组合拳，腾退高能耗企业，有效推动了减量化工作，实施建设用地总规模从2018年的74.4公顷净减至37.2公顷，净减量比例达50%。在建设用地减量基础上，面向农村一二三产业融合发展需要，选取布局合理、配套完善、产村（产农）融合的存量工业用地实施转型升级，合理布局新增建设用地。\n\n原黄桥工业园面积约9.3公顷，毗邻农民集中归并居住点，区域内以小型加工企业、村办企业为主，大部分已停产。将现状工业用地调整为产业研发用地，用地面积调整为4.6公顷。建筑面积由3.6万平方米增加至9.6万平方米，开发强度提高265%。通过集体经营性建设用地入市方式公开供应土地，2020年地块由国企与集体（镇资产公司+11个村级合作社）共同成立的资产公司获得，土地出让收入计1.2亿，其中大部分返还至镇政府用于现状企业清退成本。2023年已上缴税收约3000万元，2024年已有3家企业拟入驻，随着国企招商引资，进一步带动全镇集体经济组织发展。集体经济组织年度不小于投资额的5%，给村民世世代代留有增值资产。\n\n图 7：黄桥科技园镇村投资情况及运营模式示意图\n\n图 8：黄桥工业园区改造前和改造后对比图\n\n5、实施系统生态修复，提升区域环境品质\n\n泖港镇位于上海黄浦江水源保护区内，又在市级生态廊道上，承担着重要的城市生态安全保障功能。针对区域内6平方公里的水源涵养林，引导区域内工矿用地全部退出，协同开展水环境治理。在北部涵养林和南部农业面源污染控制区内，构建“双回路”多级循环净化系统，治理方式从单条河段整治转变为集中连片治理，治理内容从以污染源治理为主转变为生态综合治理。\n\n图 9：整治区域水环境修复工程示意图（整合项目）\n\n“十四五”期间，试点在整治区域内共统筹谋划7类17个项目，预计新增耕地29.1公顷，建设开放休闲林地160公顷，依据村民意愿实施农民相对集中居住，推进低效建设用地减量60余公顷，腾挪聚合集体经营性建设用地约68亩，形成造血机制。\n\n经过泖港镇的试点实践探索，初步检验了全域土地综合整治在规划统筹、空间协调、行动协同、资金整合和政策保障等方面的优势，具有整体性、系统性、高效性和可操作性等特点，符合新发展阶段超大型城市乡村振兴的实际需要。\n\n图 10：泖港镇全域土地综合整治项目包和布局图\n\n经验总结及思考\n\n1、探索上海全域土地综合整治的技术路径\n\n松江区泖港镇全域土地综合整治试点在推进过程中形成了重规划、强设计、重实施、强机制的总体工作框架，为提升超大型城市郊野空间整体品质提供了系统性解决方案。通过试点探索，会同管理部门陆续出台了《上海市全域土地综合整治工作管理办法 （试行）》的通知（沪规划资源乡〔2022〕348 号）、上海市全域土地综合整治工作指引（沪规划资源乡[2022]349号）、《关于实施全域土地综合整治的意见》沪府办 [2022] 13 号等政策及技术指导文件。\n\n2、找准全域土地综合整治关键\n\n在试点中，以问题为导向，通过政策创新和精细化规划，积极解决了农民集中居住、低效建设用地减量化和产业发展等问题，同时落实了上位规划分解的耕地保护、林地建设等任务。全域土地综合整治试点在全镇乃至全区范围内配置资源要素，协调各条线建设任务，为地方关注的农民安置、公服配套和产业发展提供解决方案，强化了资金和政策支撑，探索了一条乡村规划实施路径，受到了地方政府和是泖港镇农民的好评和欢迎。\n\n3、创新工作模式，推动乡村地区“多师联动”\n\n通过法定规划、村庄设计、实施方案“三位一体”，实现规划精准落地，提升高效能治理水平。前期谋划阶段由规划师、建筑师、景观设计师、生态专家、村民代表“多师联动”共同策划设计，提升乡村美学价值、乡村面貌，满足人民群众的高品质生活需求。\n\n4、关注并推动试点顺利实施，助力规划图变为实景图\n\n按照区域发展目标，编制土地综合整治实施方案，形成全域土地综合整治行动“一张图”，促进空间、资金、时序动态平衡。协调各类建设主体，变“九龙治水”为合作共建，形成协同共治、综合施策、精准整治的乡村更新模式。使用好“永久基本农田优化调整”、“集体经营性建设用地入市”、“点状供地”等规划土地政策，以促进项目尽快落地、激发集体经济活力。配合“放管服”改革，在试点过程中探索简化管理流程、整合行政审批事项、下放管理权限，以提高项目审批效率。\n\n5、探索乡村产业兴旺以及乡村发展权的公平分配\n\n松江区被列为全国33个农村土地制度改革试点之一，较早进行了农村制度性改革，各村、镇成立了镇集体经济组织，集体资产经营权的适度集中，是整治试点中各项农田集中归并、集体土地入市、集体资产保值增值利益分配等试点实施的基础。\n\n通过集体土地入市，推进“黄桥工匠园”产业用地落地，是镇村级集体存量资产盘活后发展权的一个再分配。首先，规划在空间上将村庄发展空间整合在了最优区域，完成了镇域层面土地空间资源的初步分配。其次，利用制度性改革成果，对空间资源分配的未来收益进行了利益再分配（每个村的合作社、镇级的资产公司也全部参与，形成一个未来的收益的捆绑），保障了乡村振兴发展的相对公平。\n\n我们正处在乡村全面振兴时代的浪潮中，随着党中央进一步全面深化改革、推进中国式现代化的总体部署，各项制度深化改革的政策会进一步清晰。未来随着乡村经济、教育、医疗等方面的深化改革，乡村“绿水青山”的价值终将体现，乡村终将成为人们心中的“桃花源”。"
  },
  "S04": {
   "heading": "ghzyj.sh.gov.cn_上海市规划和自然资源局：泖港镇全域土地综合整治试点概览",
   "date": "2023-06-30",
   "source": "ghzyj.sh.gov.cn_上海市规划和自然资源局",
   "url": "https://ghzyj.sh.gov.cn/tpxw/20230630/08a1871892ea4af9a5a09ab1a9958fa8.html",
   "body": "泖港镇全域土地综合整治试点概览 发布日期：2023-06-26\n\n泖港镇全域土地综合整治试点概览\n\n2023-06-26 松江区规划资源局\n\n全域土地综合整治背景\n\n面对生态文明新时代国土空间规划、空间治理改革及乡村振兴战略实施等多重背景，学习贯彻习近平总书记关于浙江“千村示范、万村整治”重要批示精神及《乡村振兴战略规划（2018-2022年）》相关部署，依据自然资源部《关于开展全域土地综合整治试点工作的通知》（自然资发﹝2019﹞194号），上海市以松江区泖港镇为试点，围绕空间优化、资源整合和价值提升，整体推进农用地整理、建设用地整理、生态保护修复和历史文化保护，由点及面推动乡村高质量发展和高品质生活，先行开展了全域土地综合整治试点工作，为全国提供以全域土地综合整治为抓手的超大城市乡村地区建设和更新的上海方案。\n\n选择泖港镇作为部级试点的原因\n\n松江区泖港镇位于上海市西南，共16个行政村，总用地面积57.52平方公里，其中城市开发边界外55.84平方公里。泖港镇坐拥万亩泖田风情和十里涵养林带，生态禀赋优越，人文气息浓厚，乡村旅游资源丰富，是全国农业产业强镇、国家级生态镇，也是上海市农民相对集中居住典范镇。\n\n同时，泖港镇面临着耕地和永久基本农田破碎化、农民居住环境亟待改善、建设用地粗放低效、生态保护任务艰巨等多重问题。\n\n泖港镇全域实施方案主要内容\n\n上海市全域土地综合整治以详细规划层面的郊野单元村庄规划为指导依据，从镇级层面统筹乡村地区的空间布局和用地指标，衔接村庄设计和近期项目，强调实施导向，主要内容包括：\n\n解决耕地碎片化问题，促进耕地集中连片\n\n严格遵循“数量有增加、质量有提升、生态有改善、布局更集中、总体保持稳定”的原则，项目实施完成后永久基本农田集聚度提高，小图斑面积减少，大图斑面积及个数均有增加。\n\n调整后聚集度分析\n\n协调林水田空间，整合资源要素\n\n通过全域国土综合整治，促进黄浦江上游水源涵养林地区内的零星耕地、园地、林地、其他农用地及水域进行空间置换，农民全部实施进镇集中安置，引导生产、生活、生态空间合理布局。\n\n整治区土地利用功能分区图\n\n聚焦乡村风貌，注重高品质村庄设计，推进农民相对集中居住\n\n注重乡村风貌，在农民集中居住、黄浦江两岸功能提升、乡村文旅产业等项目中实施方案中邀请国内外知名设计团队，参与乡村设计，提升乡村整体风貌水平。\n\n胡光、腰泾村村庄设计效果图\n\n主客公用，面向未来，构建乡村生活圈\n\n为满足老人、游客及未来导入的黄桥工匠园员工等不同人群的实际需求，综合布局公共服务设施，实现设施能级提升、跨村共享，功能涵盖行政、养老、医疗、公共交通、文化、农技服务等多个领域。\n\n黄桥村村庄公共服务中心效果图\n\n盘活存量，高效配置乡村土地资源，增加农民收入提升农民幸福感\n\n在建设用地总量控制下，实施“减量”与“盘活”联动，选取布局合理、配套完善、产村融合的存量工业用地打造黄桥科技园，由区属国企、镇集体资产公司和村级合作社共同入股、合作开发，使村民增加服务岗位收入、激活住房闲置资产、共享乡村经营性建设用地增值收益。\n\n挖掘特色，支持优质乡村文旅产业发展\n\n通过全域土地综合整治，盘活存量建设用地，整合土地资源，对于试点镇内的优质文旅产业予以支持，后续通过集体土地入市、租赁等方式保障乡村产业发展用地。对于符合乡村发展导向的优质企业，在不破坏乡村风貌的前提下允许局部高度突破乡村地区18米的限高。\n\n泖港镇乡村优质文旅产业布局图\n\n整体实施生态修复\n\n在全域整治的过程中整体实施生态修复，具体在河道整治、农田建设、林地建设过程中必须考虑生态修复的要求，将生态型整治的理念落实到全域整治工程项目中。\n\n试点整治区实施生态修复工程设计方案\n\n试点特色及预期效果\n\n促进“农业强”，优化耕地和永久基本农田布局\n\n根据实施方案，泖港镇调整后土地整备引导区内永久基本农田及储备地块的比例由69%提升至74%，20公顷以上的大斑块数量由22个增加至25个，面积由708.1公顷增加至739.3公顷。规划远期整治区内耕地增加50.9公顷，林地增加24.6公顷，水系增加12.2公顷。\n\n引导“农民乐”，分类引导农民相对集中居住\n\n黄桥村一期项目64户农民房建设工程已全部竣工并入住；二期406户农民房全部完成。曹家浜村一期项目已开工建设。在村庄布局方案上，传承并发扬泖港的历史人文和自然资源特征，突出古朴典雅的白墙黛瓦、生态优越的万亩林田湿地的乡野田园新典范。\n\n推动“农民富”，协调推进乡村产业融合发展\n\n围绕乡村振兴和农村创新创业，深挖创新项目，壮大农村集体经济组织，实现农民收入增加、农业产业兴旺。\n\n田·广茂丰饶       水·畅活灵动\n\n路·通达野趣       林·疏密有致\n\n村·诗意怡人       业·融合高效"
  },
  "S05": {
   "heading": "songjiang.gov.cn_松江区政府：【泖港镇】泖港镇全域土地综合整治实施方案",
   "date": "2024-01-10",
   "source": "songjiang.gov.cn_松江区政府",
   "url": "https://www.songjiang.gov.cn/govxxgk/SHSJ65/2024-01-10/2a291f2c-537c-4df5-8b7c-68d91ffb9106.html",
   "body": "2a291f2c-537c-4df5-8b7c-68d91ffb9106\n\n【泖港镇】泖港镇全域土地综合整治实施方案\n\n【字体： 大 中 小 】\n\n索  引  号：\n\n主题分类： 综合政务\n\n公开主体： 泖港镇 003011\n\n成文日期： 2024-01-10\n\n发布日期： 2024-01-10\n\n为贯彻落实习近平总书记对浙江“千村示范，万村整治”重要批示精神，自然资源部按照《乡村振兴战略规划（2018-2022年）》相关部署要求，组织开展全域土地综合整治试点工作，并于2019年12月发布了《自然资源部关于开展全域土地综合整治试点工作的通知》（自然资发〔2019〕194号）。与此同时，2020年中央一号文件《中共中央国务院关于抓好“三农”领域重点工作确保如期实现全面小康的意见》提出“开展乡村全域土地综合整治试点，优化农村生产、生活、生态空间布局”。\n\n上海市对整治试点工作高度重视，全面把握和精心部署，全面贯彻落实文件精神，确保上海市试点工作取得成效。松江区人民政府通过调研遴选，将泖港镇产业发展有特点、村庄建设条件好、农民意愿强烈的黄桥村、腰泾村、胡光村、范家村、泖港村等五个行政村庄作为试点，申报全域土地综合整治，统筹试点区域各项整治工程实施，助推乡村振兴发展建设。\n\n为优化乡村地区国土空间利用格局，有效破解国土空间规划编制实施中“土地利用现状刚性管控和规划布局系统统筹”的矛盾，全面提高土地节约集约利用水平，上海市在全域土地综合整治试点工作中，积极探索“有行动的规划”路径，依据国土空间总体规划指引，在郊野单元村庄规划中，将各类国土空间要素通过“规划一项目一资金一时序”四个层面进行整合，将全域土地综合整治作为“国土空间规划的过程行动”，作为上海乡村地区国土空间规划的有机组成部分。通过规划设定分时段的全域土地综合整治目标，加强全域全要素过程管控和动态管理，提高规划的可实施性，从而推动空间布局动态优化和渐进完善，保障国土空间规划目标落实和指标实现。\n\n承接乡村振兴战略，根据上位规划及相关专项规划的定位，立足区域自然禀赋、特色产业、乡土文化等，提出整治区域的总体目标任务：1）建设全球城市黄浦江上游生态保护和高质量发展的乡村振兴示范区；2）确保整治区内耕地质量有所提升，新增耕地面积原则上不少于原有耕地面积的5%，并做到建设用总量不增加、生态保护红线不突破；3）确保新增永久基本农田原则上不少于调整面积的5%。\n\n试点实施项目具备充足的人力、物力和财力；区财政局通过优化资金筹措渠道，加强资金使用监督管理，能够确保资金及时足额到位；泖港镇严格按照规划要求，充分征求了村民意见并取得了试点区内村民的认可。因此，试点区域土地综合整治实施项目具有可行性。\n\n试点区域土地综合整治的主要建设内容包括：农用地整理（高标准农田建设、设施农用地建设）、建设用地整理（宅基地和工矿仓储用地复垦、宅基地安置、农村公共服务设施配套、农村公路建设）、乡村生态保护修复等多个方面工程项目，涉及永久基本农田布局优化、建设用地布局优化、权属调整等。通过政府投资、企业投资、村民自筹等多种资金渠道，完善郊野单元村庄规划实施资金筹措体系建设。为确保该项目工作的顺利推进，区政府成立了以自然资源、农业、交通、林业等相关职能部门及相关乡镇主要领导为成员的项目实施领导小组，领导小组下设指挥部和办公室，主持日常工作。\n\n试点区域土地综合整治项目的实施，不仅能促进耕地保护和土地集约节约，还能改善农村生态环境，为农业农村提供发展空间，具有一定的科学性、合理性和可实施性；同时还增加了耕地和永久基本农田的数量，提高了耕地和永久基本农田的质量，改善了农田生态系统，使耕地与永久基本农田集中连片度更高，促进农民增收，助力脱贫攻坚，推进乡村振兴。\n\n试点区域土地综合整治切实解决了生态环境问题，按照山水林田湖草系统治理要求，综合整治整治区的土地植被景观，提升生态环境，使得原有生态逐渐得到改善和提升，有效地遏止植被的退化，有效地改善人居环境，防止水土流失和环境污染，有利于黄浦江流域生态环境有效的保护；试点区域土地综合整治项目认真听取各方意见，合理安排项目年度实施计划，可操作性强。\n\n全域土地综合整治试点基本情况表\n\n一、基本信息\n\n试点名称 上海市松江区泖港镇全域土地综合整治试点\n\n涉及村庄 黄桥村、腰泾村、胡光村、范家村、泖港村\n\n涉及的村庄类型 聚集提升\n\n户数（户） 2943\n\n人口（人） 11772\n\n预计总投资（万元） 345549\n\n其中：财政投资（万元） 330129\n\n社会投资（万元） 15420\n\n实施期限 2022至2025年\n\n村庄规划情况 已有 调整 新编\n\n审批日期 审批日期 审批日期2021年3月11日\n\n是否涉及永久基本农田调整 是\n\n是否涉及权属调整 是\n\n是否涉及生态红线调整 否\n\n二、土地利用现状信息\n\n县（市、区） 试点区域 整治区域\n\n总面积（公顷） 上海市松江区 5752.22 1641.41\n\n其中农用地面积（公顷） 上海市松江区 4289.68 1524.71\n\n耕地（公顷） 上海市松江区 2299.12 580.02\n\n永久基本农田（公顷） 上海市松江区 1258.48 405.06\n\n建设用地面积（公顷） 上海市松江区 949.26 233.70\n\n水域和未利用地面积（公顷） 上海市松江区 513.27 153.00\n\n生态红线划定面积（公顷） 上海市松江区 0.00 0.00\n\n三、建设目标任务\n\n根据试点实际情况填写，其中量化指标参考以下内容填写，并根据试点情况增减量化指标\n\n主要目标任务 备注\n\n整治总规模 1641.41 政治区域全域\n\n其中：农用地整理面积（公顷） 440.2 土地平整工程、灌溉与排水工程、田间道路工程、农田防护与生态环境保持工程\n\n建设用地整理面积（公顷） 60 减量化复垦实际潜力为69.09公顷，其中宅基地39.13公顷，工业用地22.68公顷，其他建设用地7.29公顷。考虑实际推进难度，减量化目标任务定为60公顷\n\n生态修复面积（公顷） 221 开放休闲林地160公顷、浦江源水质核心区提升61公顷。\n\n新增耕地面积（公顷）及比例（%） 29.1000（5%）\n\n新增永久基本农田面积（公顷）及比例（%） 0.4347（占用部分的5%） 规划占用永久基本农田8.6935公顷，补划9.1282公顷\n\n提升耕地质量等别 0.3 耕地质量等别提高（预估），具体以新增耕地等别评定报告为准\n\n整治后的建设用地面积（公顷） 180.2102（2025年）/160.5731（2035年） 至2025年整治后建设用地目标与腰泾村、胡光村安置点建设进度挂钩，表中2025年目标为全部安置完成后的规划理论值，实际安置约100户，暂时难以确定具体地块。\n\n规划2035年整治后建设用地为范家村、泖港村内宅基地及其他建设用地全部进镇上楼后的规划值。\n\n新增生态用地面积（公顷） 3.65（2025年）/36.76（2035年） 至2025年整治后生态用地增加3.65公顷主要为黄桥港河道整治增加水域。\n\n规划远期2035年新增的林地及水域面积主要来源与河道按蓝线实施以及水源涵养林内新增林地。\n\n四、特点特色\n\n1、利用全域整治政策，解决耕地碎片化问题，促进耕地集中连片；\n\n2、以人为本，推动农民相对集中居住，强化村庄总体布局；\n\n3、聚焦乡村风貌，注重高品质村庄设计；\n\n4、主客共用，面向未来，构建乡村社区生活圈；\n\n5、严守总量，落实建设用地减量化任务；\n\n6、盘活存量，通过入市、出让等途径高效配置乡村土地资源；\n\n7、挖掘乡村特色，支持优质文旅产业发展；\n\n8、全域全要素整体实施土地整治与生态修复。\n\n五、预期效益\n\n1、预计新增耕地达到现状耕地面积的5%，新增永久基本农田0.4347公顷；\n\n2、整治后耕地集中连片，具备规模化经营的条件；\n\n3、农民居住条件全面改善，农村人居环境全面提升，村庄基础设施完善，公共服务设施配置到位；\n\n4、水源保护区内污染隐患全面排除，黄浦江上游生态环境提升，具备生态自然恢复的条件；\n\n5、产业全面转型，现状零星工矿仓储用地转为农业、文旅等适宜在乡村发展的产业；\n\n6、全域风貌整体提升，未来打造为黄埔江滨的水乡田园小镇，全球城市的科技农业和全域旅游示范区。\n\n六、试点负面清单\n\n一、基本情况\n\n（一）试点背景\n\n2018年国务院出台中央一号文件《中共中央国务院关于实施乡村振兴战略的意见》。同年9月，中共中央、国务院印发了《乡村振兴战略规划（2018-2022年）》，并发出通知，要求各地区各部门结合实际认真贯彻落实。2019年12月10日，自然资源部印发《自然资源部关于开展全域土地综合整治试点工作的通知》（自然资发〔2019〕194号）组织开展全域土地综合整治试点工作。\n\n“上海2035”国土空间总体规划构建了以生态保护红线、永久基本农田保护红线、城市开发边界为基本框架的绿色发展空间格局，松江区国土空间总体规划已编制完成，村庄布局规划和郊野单元村庄规划实现了全覆盖，国土空间用途管制及乡村地区规划资源管理路径明晰，土地利用计划管理、永久基本农田保护制度进一步优化，市级土地综合整治项目成效显著，低效工业用地减量化、农民集中居住等各项工作持续开展，乡村振兴战略深入推进。但从自然资源统筹管理的角度看，上海依然面临总体空间资源不足与乡村地区低效用地散布并存、生态空间供给有限与生态游憩需求快速增长并行、城市稳步发展与乡村相对滞后等系列挑战。为此，在已有良好工作的基础上，亟需创新农村土地管理制度，以国土空间规划为引领，统筹集聚各部门政策、项目和资金，以全域土地综合整治为抓手，对低效建设用地进行集中盘活利用，对美丽乡村和产业融合发展用地进行集约利用和精准保障，对乡村生产、生态、生活空间进行统筹安排和整体优化，系统破解乡村国土空间瓶颈，积极探索超大型城市乡村国土空间精细化治理新路径。\n\n上海市对整治试点工作高度重视，全面把握和精心部署，全面贯彻落实文件精神，确保上海市试点工作取得成效。松江区人民政府通过调研遴选，将产业发展有特点、村庄建设条件好、农民意愿强烈的泖港镇作为试点镇上报自然资源部。其中泖港镇黄桥村、腰泾村、胡光村、范家村、泖港村等五个行政村庄作为试点整治区，申报全域土地综合整治，统筹试点区域各项整治工程实施，助推乡村振兴发展建设。\n\n松江区泖港镇全域整治试点聚焦近期至2025年形成一批试点整治项目，远期至2035年完成村庄规划各项建设任务。\n\n（二）试点概况\n\n1.试点所在地基本情况及特点\n\n（1）自然地理状况\n\n1）地理位置及规模\n\n松江区地处上海市西南部、黄浦江上游,东与闵行区、奉贤区为邻,南、西南与金山区交界,西、北与青浦区接壤,是上海西南的重要门户。\n\n图1-1：上海市松江区泖港镇区位图\n\n泖港镇地处黄浦江上游，松江浦南地区中心位置，同三高速纵贯南北，叶新公路横跨东西，东连嘉金高速，西通沪杭高速，南接320国道，水、陆交通运输便利。试点区域位于上海市松江区泖港镇中部，西至黄桥港、东至大泖港、北至横潦泾、南至小泖港，区域面积为16.4平方公里，主要包含黄桥村、腰泾村、胡光村、范家村、泖港村等五个行政村。\n\n图12：全域土地综合整治试点整治区范围\n\n2）地形地貌\n\n松江区地处长江三角洲平原，太湖流域碟形洼地东缘。整个地势东高西低，略呈倾斜。地面高程(吴淞高程，下同)东部在3.5至4.5米，最高5米，南部一般为3.2米左右，西南一般为2.4米，西北部的低洼腹地在2.2至3.2米。西北部有史称“松郡九峰”的佘山、天马山、小昆山等十余座高度在100米以下的小山丘。试点区位于松江区南部，区域内地形平坦。\n\n3）气候条件\n\n松江区属北亚热带海洋季风气候，气候温和，雨水充沛，日照充足，无霜期长，有利于农业生产发展。受冷暖空气交替影响，四季分明，冬夏二季时间长，春秋两季时间短。年平均气温15.40C，极端最低气温-10.40C，出现在一月份，极端最高气温38.30C，出现在七月份。年平均降雨量为1117.1毫米，年平均雨日136天，春夏季多偏南风，晚秋和冬季多西北风和东北风，平均风速3.8米／秒。全年平均日照2047.3小时，平均太阳辐射总量为480.6千焦／平方厘米。年均无霜期230天，11月中旬初霜，4月上旬终霜。6－7月有梅雨，平均雨日20天左右。夏秋常有台风过境，平均每年1.5次。局部地区有时有龙卷风、冰雹危害。秋冬多雾，易涝少旱。\n\n4）土壤条件\n\n松江区内土壤分属5个土类，8个亚类，19个土属，96个土种。在耕种土壤中，98％是水稻土土类，其中脱潜型，亚类的青紫泥土属分布最广，土壤质量较高，适宜农作物生长。\n\n5）水文地质及水资源承载力分析\n\n松江区境内水域宽广，雨量充沛，水资源丰富，由地表径流、黄浦江潮水以及上游过境客水三部分组成，分别占总水量的2.4％、53.9％和43.7％，平均年总水量达到82.38亿立方米。松江处于黄浦江上游水资源保护区，水质较好，是上海市水环境最清洁的地区之一。\n\n④水资源承载力分析\n\n通过对历年年地表水资源量资料系列的频率计算和适线分析，得到各典型年的地表水资源量，松江区多年平均地表水资源量为2.43亿m3，历史上最大和最小年地表水资源量为5.77亿m3和0.76亿m3。\n\n全区主要超标指标为氨氮、COD以及总磷。松江区水资源充沛，区域过境水引水量大于排水量，降雨与蒸发量基本持平。受上游河道来水影响，全区存在水质型缺水问题。\n\n该区域水资源可满足用水需求，在人口承载力与农业承载力方面存在较大潜力。\n\n6）植被及主要作物状况\n\n松江气候宜人，土地肥沃、河网密布、利于农业生产，素有鱼米之乡之称。如薄稻、棉花、小麦是其主要农作物，农业物产有香粳米、四鳃鲈鱼、佘山兰花笋、黄桃、绿茶、草长浜红菱、兰花小茄、泖河大蟹等久负盛名。\n\n7）试点区域特点\n\n整治区内生态资源禀赋优渥，区域内以广袤的水田为主，现状农民宅基地依水依路而建，区域北侧靠近黄埔江沿岸以大规模的水源涵养林为主，水源涵养林发挥着巨大的生态效益，对保护生物多样性具有重要意义。保护并修复鸟类栖息地和迁徙走廊，维持自然的多空隙生境和隐蔽屏障。\n\n图13：试点区内现状林地、农田风貌\n\n泖港镇郊野地区整体为田园风貌，农田广袤、滨江林带绵延，村庄与河道相依，点缀于农田之中，形成了江南水乡田园特色风貌。其中黄桥村于2016年被列为住建部第四批美丽宜居村庄示范区之一。但是目前整治区内部村庄以及周边尚有零星工业分布，影响了村庄的整体风貌，与外围的水、田、林风貌不协调，同时村民建房多为七八十年代自建住房，缺少整体的风貌考量，因此乡村地区的整体风貌仍有很大的提升空间。\n\n图1-4：整治区现状乡村风貌鸟瞰图\n\n（2）社会经济条件\n\n整治区涉及的黄桥村、腰泾村、胡光村、范家村、泖港村等五个行政村，总户数为2943户，其中农业户数为1471户，非农户数为1472户。整治区所在的上海浦南片区是传统的以农业为主体产业的地区，整个浦南地区主要发展农业，主种农作物包括棉油及各种蔬菜、瓜果，主要养殖各类家禽家畜及河鲜。综合来看，泖港镇的综合经济发展在松江区相对落后。\n\n（3）产业发展现状\n\n产业发展现状：本次所选五个村有着较好的农业产业基础，区域内大部分农用地为家庭农场承包经营，农业生产以粮食生产为主，主要生产水稻、蔬菜。部分农用地种养结合适度发展生猪养殖。\n\n图15：试点区域农业生产用地现状图\n\n图16：试点区域农业生产模式图\n\n（4）基础设施建设情况\n\n配套基础设施条件基本完善，但品质及等级偏低。村村通路，但道路等级低，路面质量不高。村中自来水满足需求，垃圾污水集中处理。\n\n泖港镇现状村庄基本按照\"三室一点\"（即村委会办公室、医疗室、老年活动室和健身点）的标准设置了相应建筑空间，设施使用情况较好，基本满足相关要求和现阶段村民的使用需求。但试点区内公共服务配套设施等级相对较低，部分设施无法满足村民生活需求。\n\n（5）历史文化资源\n\n松江是上海历史文化的发祥地，松江地区丰富且具有特色的史前文化是松江历史文化的根基所在。在上海地区最早的地质标志是松郡九峰，根据考古发现，松江原始文化遗址包含了马家浜文化、崧泽文化、良渚型文化和广富林文化四个古文化时期，从出土的大批墓葬、发现的鼎、罐、盆、纺轮、网坠等陶器，刀、斧、犁、矛等石器，竹骨、玉、象牙制品，还有稻谷、动物遗骸等，充分证明了上海先民在从事农业、畜牧业以及手工业生产劳动中逐步具备了水稻种植、家畜饲养以及动植物纤维捻线纺织的能力，并形成饮酒等习俗。\n\n泖港镇位于黄浦江上游南岸一线，东与叶榭镇相邻，西与新浜镇交界，地处松江区正南方位上。1966年10月，泖港人民公社从金山县划入松江县；2001年1月，松江区调整行政区划，泖港镇与五厍镇撤二合一，这便是今天的泖港镇。\n\n泖湖、泖田、泖港，是一道嬗变的风景线。松江古有三泖，或以水流位置称之为上泖、中泖、下泖，或以大小形状称之为长泖、大泖、圆泖。泖港镇古为大泖之域。松江三泖中，大泖最早淤塞，最先被围垦为泖田。据史书记载，北宋宣和元年（1119），兴修华亭水利，主要任务就是“围裹华亭泖为田”。从唐宋时期开始，广袤浩阔的三泖，拉开了泖湖变泖田的历史序幕，至清代中晚期，划上了完全被围垦成泖田的句号。\n\n图17：“九峰三泖”意向\n\n整治区内的人文资源以黄桥村楹联文化为特色。村内家家写楹联，人人爱楹联，因此被誉为“上海楹联第一村”。该村村委会的楹联陈列室，在50多平方米的展厅墙壁上，挂满了各种各样村民们自编自写的楹联，主要展览主题性作品，例如茶联、励志联、法制联、廉政联等。同时整治区的泖港大米、大闸蟹、有机蔬菜等农产品也已在上海颇具知名度，每年的农副产品上市后在上海供不应求。\n\n图18：黄桥村楹联文化展示馆\n\n2.试点整治区土地利用情况\n\n（1）土地利用现状\n\n依据第三次全国国土资源调查2020年年度变更成果，整治区内土地利用情况以农用地为主，农用地占比达76.44%。农用地中主要是耕地及林地，耕地面积为580.0226公顷，占总用地面积的35.34%，林地面积为546.0306公顷，占总用地面积的33.27%。\n\n建设用地为233.7003公顷，占比为14.24%，其中主要为农村宅基地、交通运输用地及工矿仓储用地，分别为98.6735公顷、70.4789公顷、28.4082公顷。\n\n表1-1：土地利用现状表\n\n地类 现状年限（基期年）\n\n一级地类 二级地类 面积（公顷） 比例（%）\n\n农用地 耕地 580.0226 35.34\n\n园地 13.5283 0.82\n\n林地 546.0306 33.27\n\n其他农用地 96.0143 5.85\n\n小计 1235.5958 75.28\n\n建设用地 城镇住宅用地 1.3593 0.08\n\n农村宅基地 98.6735 6.01\n\n商服用地 2.0189 0.12\n\n工矿仓储用地 28.4082 1.73\n\n公共管理与公共服务用地 6.8656 0.42\n\n公用设施用地 2.9891 0.18\n\n公园与绿地 0.6379 0.04\n\n特殊用地 13.1662 0.80\n\n交通运输用地 70.4789 4.29\n\n其他建设用地（水工建筑用地、空闲地） 9.1027 0.55\n\n小计 233.7003 14.24\n\n未利用地 河湖水域 152.9985 9.32\n\n湖泊水面 0.0000 0.00\n\n其他未利用地（其他草地、内陆滩涂、裸土地） 19.1140 1.16\n\n小计 172.1124 10.49\n\n合计 1641.4086 100.00\n\n图1-9：整治区土地利用现状图\n\n（2）土地权属现状\n\n整治区土地大部分为农村集体经济组织所有，主要为范家村、胡光村、黄桥村、泖港村、新龚村、徐厍村、腰泾村。少量土地属于泖港镇农民集体以及国有土地（主要以河道、道路为主）。\n\n表1-2：整治区土地权属现状表\n\n土地权属 面积（公顷） 占比\n\n国有 12.0 0.7%\n\n松江区泖港镇范家村农民集体 384.8 23.4%\n\n松江区泖港镇胡光村农民集体 353.5 21.5%\n\n松江区泖港镇黄桥村农民集体 294.4 17.9%\n\n松江区泖港镇泖港村农民集体 184.0 11.2%\n\n松江区泖港镇农民集体 37.7 2.3%\n\n松江区泖港镇新龚村农民集体 10.9 0.7%\n\n松江区泖港镇徐厍村农民集体 1.1 0.1%\n\n松江区泖港镇腰泾村农民集体 234.0 14.3%\n\n国有(河道、道路等） 129.1 7.9%\n\n总计 1641.4 100.0%\n\n图1-10：整治区土地权属现状图\n\n（3）耕地和永久基本农田分布情况\n\n整治区现状耕地共580.0226公顷，主要位于黄桥村、腰泾村和胡光村。规划耕地面积为630.9471公顷，新增耕地约9%。新增耕地可以满足不少于原有耕地5%的要求。最终新增耕地及占用耕地以工程实施后测绘报告为准。现状永久基本农田共405.0648公顷。\n\n图1-11：现状耕地及永久基本农田分布图\n\n（三）存在问题\n\n（1）产业发展亟待转型升级\n\n一产规模经营，集聚发展：泖港镇是松江区农业大镇，承担着重要的耕地保护和水资源保护责任。三次产业结构比例为5.0%：28.2%：66.8%，产业发展居浦南四镇首位，但总体能级不高。一产以发展种养结合的家庭农场模式为主，每户耕种面积150-200亩。经过历年的土地整治，农田水利设施逐步完善，农业生产效率得到显著提升。但整治区内仍然存在种植结构单一，农产品附加值不高等问题。\n\n二产业态传统，低效粗放：城市开发边界外“198”工业用地2.18平方公里，占全镇工业用地规模的98.4%。自2016年起已经完成低效工业用地复垦39.14公顷。现存的工业用地中无证、历史形成的村办企业多，门类繁杂、业态传统、高效益企业少。\n\n三产小而散，同质竞争：泖港镇乡村旅游资源丰富，自然风貌优美，近年来随着田园综合体的开发建设，也发展出一些乡村文化旅游产业，但总体上各自为营，未成合力。在全市影响力尚不足。缺乏高品质，有影响力的乡村文化旅游项目。\n\n（2）农民居住环境亟需改善\n\n村庄整体呈现田水绕村的风貌，宅基地基本沿河沿路呈线性或组团状分布。农房大多建造于20世纪70、80年代，房龄久远，现状较为陈旧，存在一定安全隐患。村民翻建、新建农房的需求十分迫切。\n\n图1-12：泖港镇整治区现状村民住宅\n\n（3）生态保护与修复有待加强\n\n泖港镇拥有万亩泖田风情和十里涵养林带，树种类型丰富，生态资源优势突出，但黄浦江沿岸生态走廊尚未完全形成；单元内水系丰富，但部分河道水质较差；郊野地区的农村中小河道主要以硬质护岸为主，滨水空间开放性和景观质量以及河道的生态性有待提升。\n\n图1-13：整治区现状部分水系现状\n\n（4）交通系统贯通性需要加强。\n\n泖港镇已形成“一横三纵”的干路体系，叶新公路横贯全镇东西，五朱公路、辰塔公路、松金公路连接南北。上海绕城高速公路穿越镇域中部，并在与叶新公路相交处设置一组出入匝道。沪杭高速铁路途经整治区，最近的松江南站与泖港镇相距约10公里。整治区内乡村道路骨架基本成形，但村庄道路贯通性较弱，乡村旅游景点可达性不足。\n\n表1-3：现状问题与主要诉求一览表\n\n二、工作基础\n\n（一）规划编制审批情况\n\n（1）《上海市松江区总体规划暨土地利用总体规划（2017-2035年）》（沪府[2019]23号）\n\n2019年3月《上海市松江区总体规划暨土地利用总体规划（2017-2035年）》获得批复。这是松江区2035年城市格局的蓝图。\n\n从长三角区域协同发展的视角以及在全市规划空间布局方案基础上，谋划松江区城乡发展格局。优化城乡空间体系，落实全市“网络化、多中心、组团式、集约型”的空间结构。明确分类、分层、分级的空间指引策略，夯实“规土融合”的空间政策平台。规划形成以生态为底、中心强化、四元互动，形成“一廊一轴、五带四片”的空间结构。试点区域位于具有农业功能的松江浦南片区。\n\n图2-1：松江区总体规划空间结构规划图\n\n图2-2：松江区总体规划土地使用规划图\n\n（2）《松江区泖港镇国土空间总体规划（2021-2035年）》（已批）\n\n目前试点区域四个村所处的《松江区泖港镇国土空间总体规划（2021-2035年）》已批复，本次实施方案的编制紧密衔接泖港镇国土空间总体规划方案，对于试点区内的各项建设符合目前在编国土空间总体规划的基本要求。\n\n（3）《上海市松江区泖港镇郊野单元村庄规划（2020-2035年）》（沪松府[2021]51号）\n\n规划发展目标紧扣中央农村工作会议确立的乡村振兴战略“产业兴旺、生态宜居、乡风文明、治理有效、生活富裕”，通过修复环境风貌、挖掘文化特质、发展第六产业，建设具有黄浦江滨浦南特色、产业兴旺、环境宜居的乡野田园新典范。\n\n（1）鱼米水乡：以泖港特色家庭农场升级发展为基础，打响泖港大米、大闸蟹等特色农产品品牌，将泖港建设成为科技农业的示范区。\n\n（2）七彩乡岛：以花卉产业为品牌，发挥泖港花卉头部企业集聚的优势；以主题乡岛为特色，将不同游憩主题的乡村打造为主题“岛屿”；以全域旅游大发展为目标，盘活潜力游憩资源、串接现状游憩要素，形成强体系性和融合度的全域旅游新格局。\n\n（3）宜居家园：以村为单位推进农民集中居住，提升村民生活水平，改善村庄人居环境。进一步推动共享村落、乡村创客、文化艺术的发展，实现“老村民”与“新村民”互助融合的活力宜居新范式。\n\n本次试点区域实施方案的编制紧密衔接村庄规划，村庄规划是实施方案的直接规划依据，相应的整治工程符合村庄规划相关要求。\n\n图2-3：泖港镇郊野单元村庄规划空间结构规划图\n\n图2-4：泖港镇郊野单元村庄规划土地利用规划图\n\n（4）涉及永久基本农田布局优化情况\n\n本次村庄规划编制依据《自然资源部关于开展全域土地综合整治试点工作的通知》（自然资发〔2019〕194），对试点区域内永久基本农田进行优化调整。在本次编制的实施方案中整体形成永久基本农田布局优化方案，并落实到图斑。随着实施方案中具体项目的落实，具体项目工程建设中涉及永久基本农田占用的应以本实施方案为基础，落实永久基本农田的补划地块，确保永久基本农田数量有增加，质量有提升，布局更完善。\n\n（二）相关项目实施情况\n\n（1）上海市松江区国家农业综合开发云间吾舍田园综合体土地治理项目\n\n该项目位于泖港镇，涉及茹塘村、曙光村、曹家浜村、腰泾村、胡光村、新龚村、朱定村共计7个村，共32个灌区，总面积9137亩。通过对流域内中小河道的整治，增加河道流域内整体防洪除涝能力，加强流域水土保持能力；通过对流域内灌区农田水利基础设施建设（其中曙光村、腰泾村和朱定村已于2014-2016年实施国家农业综合开发高标准粮田建设，目前本项目实施剩余7个零星灌区以达到综开高标准粮田建设全覆盖），提高灌溉水利用率，促进灌区规模化建设；通过对流域内林网建设，提高灌区内防风减灾能力。本工程主要目的是综合对河道整治、灌区农田水利基础建设与改造，道路绿化及流域防护林网建设，从而改善农业生产环境，与泖港镇生态农业旅游开发项目配套。\n\n图2-5：农业综合开发云间吾舍田园综合体土地治理工程布局图\n\n（2）泖港镇浦江源河道水质提升与农业面源污染生态阻控示范工程\n\n该项目在黄桥村北部涵养林内构建“双回路”多级循环净化系统，实现北部区域内水体循环流动，并利用湿地、氧化塘等净化单元，起到对入河污染物的净化效果。多级循环净化区占地面积达到65.8万平米。南部农田面源污染控制区内，通过构建田间三级净化生态排水沟渠，净化出水氮、磷、农药等污染物，并通过将农田尾水输入北部构建的循环净化系统实现农田排水的深度净化。农田面源污染控制区占地面积达到283万平米。\n\n岸坡防护——在堤岸处种植乔木、灌木、草地，水中靠岸部分种植矮小水生植物，形成乔灌草、水生植物空间结构层次。\n\n水体净化——通过人工湿地、沼泽、生态驳岸等种植形态消除农业污染，净化基地内河道的水质。\n\n农田面源污染防控——通过田间生态净化沟渠、浦江源湿地2级净化系统，减少农业面源污染，提升水质。\n\n项目总投资3950.14万元。其中工程费用3567.18万元，其他费用311.61万元，预备费71.34万元，拟申请中央资金3800万元，泖港镇政府配套资金150.14万元。\n\n图2-6：浦江源河道水质提升项目总体布局\n\n（3）叶新公路拓宽工程\n\n规划拓宽改建现状地面主线，新建跨河桥梁11座，新建和改造G1501公路跨线桥1座，新建雨水管道，并同步实施交通信号灯、标志线和交通安全设施，同步实施公路照明、绿化、预埋监控管道、河道驳岸等附属工程和设施。项目总投资13.9亿元，其中涉及整治区内约6.1km。\n\n图2-7：叶新公路拓宽工程设计整治区内区段平面图\n\n（三）有关试点探索和制度建设情况\n\n根据党中央国务院关于农村土地制度改革的统一部署，2015年2月，松江区被列为全国33个农村土地制度改革试点之一。试点工作开展以来，按照中共中央办公厅国务院办公厅《关于农村土地征收、集体经营性建设用地入市、宅基地制度改革试点工作的意见》（中办发〔2014〕71号）文件精神，松江区按照“把握正确方向、坚守改革底线、维护农民权益、坚持循序渐进、注重改革协调”的基本原则，既审慎稳妥又积极推进集体经营性建设用地入市、农村土地征收、宅基地制度改革等三项试点工作。在上海市委市政府有力指导下，松江区委、区政府坚持以党的十九大精神和习近平新时代中国特色社会主义思想为引领，切实把试点工作摆在突出位置，深化改革共识，压实主体责任，强化协同推进，探索制度创新，持续推动改革任务扎实落地，圆满完成了三项试点工作，取得积极成效。\n\n1.征地制度改革试点\n\n结合上海城市化进程快于一般地区、征地制度体系较为完善的优势，坚持农民意愿为先、农民利益为重，着力在完善提升、规范创新上下功夫，通过试点改革探索建立了“1+N”征地农民多元保障机制；完善规范了“征地批前有协商、征地风险要评估、矛盾纠纷能调处、征地信息常公开”的土地征收全过程管控程序；征地补偿标准较改革前提高了40%；结合统筹推进集体入市试点，实际征地范围逐步缩小，在征地决策、征地程序、征地补偿等方面明显提高了对农民土地权益保障力度和水平。\n\n2.集体经营性建设用地入市试点\n\n试点按照“同地、同价、同权、同责”和“保、持、公、平”（即以解决农民基本保障为前提，以农村持续发展和农民持续增收为基础，以公共服务配套设施建设与国有土地同责为原则，兼顾不同区域间土地增值收益平衡机制）的目标要求审慎稳妥推进，重点对集体经营性建设用地入市主体、入市范围、入市权能、入市规则、入市收益分配等进行了探索和实践，明确了独立规范的入市主体、探索了管控合理的入市范围、建立了以入市管理办法为主的“1+5”政策体系，健全了市场交易规则和服务监管制度，完善了集体经营性建设用地抵押权能，构建了兼顾多方利益的平衡机制，较好完成了改革试点目标。截止目前，松江区稳妥推进8幅地块（其中商办地块2幅、租赁住房地块5幅、工业地块1幅）入市，涉及土地面积240.1亩，入市收入合计9.5亿元，探索了就地入市、调整入市、统筹入市3种入市途径。\n\n3.宅基地制度改革试点\n\n松江区宅基地制度改革试点2018年初启动实施，在长期深入推进农民集中居住丰富实践的基础上，把宅基地改革探索贯穿乡村振兴战略实施全过程，在宅基地管理基本问题上实现了制度性创新突破，系统设计了松江区关于加强农村村民宅基地管理的制度路径并积极推进相关探索实践。以切实维护农民利益为原则，明确了符合都市乡村实际情况的宅基地资格权和户的法定范围；以完善农村户有所居住房保障体系和土地节约集约利用为前提，探索了进镇集中居住、乡村归并集中、原地改善居住三种宅基地权益实现方式；以郊野单元村庄规划编制为载体推进农村土地优化利用；初步探索了宅基地有偿使用和有偿退出、村民个人建房审批管理的改革政策。围绕三权分置改革要求，实践探索了黄桥村宅基地改革综合试点以及叶榭镇幸福老人村、衡山村衡山云居民宿群落和华阳桥社区历史风貌保护与更新改造等3个宅基地（农房）盘活利用试点，改革成效初显。在一系列制度建设的保障下，试点区域发挥制度优势，积极申请全域土地综合整治试点，通过全域全要素的试点建设探索形成“产业兴旺、生态宜居、乡风文明、治理有效、生活富裕”的乡村振兴示范区。\n\n4.建立多元共赢的入市土地增值收益分配机制\n\n一是通过收益调节金制度实现政府在征收与入市之间的收益大体平衡。采取模拟征收的方式，研究制定《松江区农村集体经营性建设用地土地增值收益调节金征收使用管理实施细则》，分用途、分市场实施差别化调节金制度。入市阶段，区级财政参照国有土地出让收入分配比例收取土地增值收益调节金，商服用地（商业、办公、租赁住宅）为50%、工业用地为20%；再转让阶段，按土地增值收益的50%缴纳调节金。经同口径测算，松江区入市8幅地块农民集体收益比国有征收转用情况下所获补偿收益多24.8%。调节金计提体现了入市路径与征收转用路径下国家与农民集体的收益分配大体平衡、适度向农民集体倾斜。二是实现了镇级集体之间发展权有效统筹。入市土地增值收益调节金由松江区财政局统一征缴，部分下拨镇级财政用于基础设施建设、农民社会保障等，区留存30%在全区范围内统筹使用，通过财政转移支付机制，对经济发展薄弱地区进行定向反哺，优先用于经济欠发达的浦南地区低效用地减量化、基本农田保护、农民集中居住等。三是促进了镇级集体经济发展壮大和农民持续增收。制定了《上海市松江区农村集体经营性建设用地入市集体收益分配管理规定》，明确了农村集体经营性建设用地入市收益归本集体经济组织所有的部分，纳入农村集体资产统一管理。农民按集体产权制度改革确定的股份份额获取年收益,形成了可持续稳定收益的长效机制。目前已签订出让合同的入市地块，农民集体共获益近2亿元，农户获得股份分红相应提高。\n\n5.完善征地土地增值收益专项返还与利益分配机制\n\n为体现发展的公平性和均等性，让农业地区的农民分享征收转用土地出让增值收益，根据《松江区关于进一步加强和规范国有土地使用权出让收支管理的实施意见》，以“加强区域统筹、兼顾各方利益、维护农民利益”为原则，设立征收转用土地出让净收益区级统筹专项资金。征收土地出让净收益留取专项资金用于解决全区农民社会保障，为宅基地集中居住、低效集体建设用地减量等关系农民切身利益的事项提供资金补贴。2017年，专项资金中28.37亿元反哺于农村，其中用于农民社会保障资金8.14亿元。\n\n6.取得的主要成效\n\n（一）保障水平提高、分红收益稳定、房屋资产倍增，农民获得感显著实化。一是提高了农民社会保障水平。松江区已完成农村社会保障全覆盖，农民到龄后可以每月领取养老金1600-1800元，领先于全国平均水平。二是增加了资产分红收益。农村集体经济组织获得的入市增值收益、征收补偿的物业经营收益、宅基地退出形成的减量化物业经营收益等，均不直接分配，而是以股份分红的形式，保障了农民的长期可持续收益。试点开始之初，永丰街道农民集体2015年分红收益为977.4万元，成功入市2幅集体土地后，做大了集体资产“蛋糕”，增加了农民集体收益分红的来源，2017年农民集体分红提高到1118.85万元。三是显化了房屋资产价值。宅基地制度改革和征地制度改革实现了农民进镇居住改善居住环境的愿望，同时将宅基地变成等面积、3年后能流通的动迁安置房，显化了资产价值，让广大农民享受到更多转型发展的成果。\n\n（二）资产规模增容、持续盈利增加、市场运营增效，农村集体经济振兴壮大。一是通过统筹三项制度改革，将节约的建设用地指标通过平移或置换，为集体获得更好区位的土地或房屋资产。新浜镇通过实施宅基地制度改革将节省的共11.36公顷双指标挂钩到土地级差地租较高的城镇工业区，定向出让给集体经济组织。小昆山镇和广富林郊野公园在新建安置地块时增加部分底层配套商业用房面积，将物业提供给减量化所在镇村集体经济组织持有并经营。二是通过入市试点，农村集体经济组织获得入市土地增值收益，用于发展农村经济。通过入市8幅地块农民集体共获益近2亿元，用于集体资产再经营，建立集体经济组织持续增加财产性收益的长效机制。三是新桥镇通过集体经济组织与园区平台合资成立专业运营公司开发建设漕河泾高科技园区，总资产规模由1亿元扩容至4.6亿元，实现了资产近5倍增值，成为农民集体经济发展的标杆。\n\n（三）完善民主决策、监管重心下移、强化资产监督，农村土地基层自治走向规范。一是建立了农村土地民主管理机制。制定出台了《关于建立农村规划土地民主管理机制的实施意见》，建立了土地民主管理决策机制、完善了民主决策内容，建立了民主管理监管制度和保障制度等，进一步规范了基层土地民主管理机制，提高了农村土地民主管理效率，加强了村民参与宅基地规划、资格审核、住房建设、有偿使用等方面的自治能力。二是完善了农村集体资产监督管理。制定出台了《松江区农村集体资产管理暂行办法》《松江区农村集体经济组织重大事项备案管理实施意见（试行）》《关于贯彻<上海市农村集体资产监督管理条例>的工作意见》等，明确了加强组织领导、积极开展宣传培训、强化农村集体资产监督管理的具体措施，促进了农村集体资产的规范有效管理。\n\n（四）农地规模经营、盘活利用资源、提升生态效应，农村土地实现高质量利用。一是促进了耕地集中规模经营。通过宅基地制度改革试点，大力推进了农民城镇化和农村宅基地集中安置，大量退出宅基地减量复垦为耕地，促进了耕地的规模化经营。小昆山镇将散落的自然村落民宅动迁后，退出的宅基地整理复垦为农田，与原有农田连片建设为高标准农田，农业片区内成片耕地面积达到16800余亩，打造大都市郊区“万亩良田”的规模化经营。二是促进了闲置土地资源盘活利用。通过入市试点，将闲置低效的存量建设用地资源进行入市流转，实现了存量资源的再开发利用；开展宅基地三权分置探索，通过集体所有权的落实和宅基地使用权的放活，农村集体经济组织和农民利用农村闲置宅基地发展各类新产业新业态，促进了乡村经济发展也有效地盘活了存量宅基地资源。三是提升了城市生态功能。通过宅基地制度改革，退出的宅基地复垦为提升生态效应。广富林（陈家村），宅基地综合整治复垦后的土地用于建设郊野公园，并与辰山植物园、湿地公园、广富林遗址公园等绿色工程联动实施，构建布局连片、景观各异、特色突出的城市生态长廊，完善都市休闲游憩功能。\n\n（五）保护乡村风貌、加强生态治理、改善人居环境，农村面貌更加和谐自然。一是促进了乡村历史风貌的保护。松江区在农村土地制度改革过程中，聚焦历史文脉保护和人居环境提升。车墩镇华阳社区在确保农民住有所居、自愿参与的基础上，由村集体经济组织回购空置的宅基地和房屋，进行集中规划整理利用，发展休闲农业和新兴产业，保留保护华阳老街的历史文脉，传承地域乡土特色技艺。二是促进了美丽乡村建设。新浜镇依托市级土地整治项目，通过“田水路林村镇”全要素综合治理，对村庄环境进行综合整治，村庄生态环境得到改善。40平方公里的农林复合用地中，民居连排，农田广袤，阡陌纵横，风光秀美，形成典型的“小城镇、大生态”的空间格局。三是促进了乡村人居环境提升。黄桥村通过农村集中平移归并，邀请知名设计师对村庄房屋和公共环境景观、公共配套设施进行高标准的设计，统一规划、统一建设，推进节地建房的同时让村民享受更高标准的乡村人居环境品质和公共服务。\n\n（四）实施方案编制依据\n\n（一）规划依据：法律法规及标准文件\n\n（1）《中华人民共和国土地管理法》（2019修正）;\n\n（2）《中华人民共和国城乡规划法》（2019修正）;\n\n（3）《基本农田保护条例》（2011年修订）;\n\n（4）《关于适应新形势切实搞好土地开发整理有关工作的通知》（国土资发〔2006〕217号）;\n\n（5）《关于进一步规范城乡建设用地增减相挂钩试点工作的通知》（国土资发〔2007〕169号）;\n\n（6）《关于印发<城乡建设用地增减挂钩试点管理办法>的通知》（国土资发〔2008〕138号）;\n\n（7）《国务院关于严格规范城乡建设用地增减挂钩试点切实做好农村土地整治工作的通知》（国发〔2010〕47号）;（8）《上海市城乡规划条例》2011.1;\n\n（9）《关于进一步提高本市土地节约集约利用水平的若干意见》（沪府发〔2014〕14号）;\n\n（10）《关于印发<\"198\"区域减量化市级资金补助实施意见>的通知》（沪规土资综〔2015〕173号）;\n\n（11）《关于印发<上海市乡村规划导则（试行）>的通知》（沪规土资乡〔2018〕681号）;\n\n（12）《关于印发<上海市郊野乡村风貌规划设计和建设导则（一）>的通知》（沪规土资乡〔2018〕688号）;\n\n（13）《上海市城乡建设用地增减挂钩试点管理办法（试行）》;（14）《土地开发整理项目规划设计规范》（TD/T1012-2000）;（15）《上海市农村建设有关设施用地标准》（沪规土资综〔2010〕270号）;\n\n（16）《高标准农田建设通则》（GB/T30600—2022）;\n\n（17）《自然资源部关于开展全域土地综合整治试点工作的通知》（自然资发〔2019〕194号）;\n\n（18）《关于报送上海市全域土地综合整治试点工作进展情况及试点名单的函》（沪规划资源乡〔2020〕204号）;\n\n（19）《自然资源部国土空间生态修复司关于印发<全域土地综合整治试点实施要点（试行）>的函》（自然资生态修复函〔2020〕37号）;\n\n（20）《土地整治工程建设规范》（DB31/T 1056）\n\n（21）《土地整治生态工程规划设计标准》（DG/TJ 08-2344-2020 J15558-2021）\n\n（二）相关规划\n\n（1）《上海市松江区总体规划暨土地利用总体规划（2017-2035）》（沪府〔2019〕23号）;\n\n（2）《松江区泖港镇国土空间总体规划（2017-2035）》（草案）;\n\n（3）《上海市松江区泖港郊野单元（村庄）规划（2017-2035年）》（沪松府〔2019〕81号）;\n\n（4）《上海市耕地和永久基本农田划定成果（2020-2035年）》（在编）;\n\n（5）《上海市高标准农田建设规划(2022-2030年）》\n\n（6）《松江区农业三区规划》（在编）;\n\n（7）《松江区设施农用地专项规划（2017-2035年）》（在编）;\n\n（8）《松江区农林水专项规划暨林地建设调整（2018-2020）》（在编）;\n\n（9）《松江区河道蓝线专项规划》（沪府规〔2017〕213号）;（10）《松江区村庄布局规划（2017-2035年）》（沪松府〔2019〕105号）;\n\n（11）《松江区乡村振兴总体规划（2018-2020）》（在编）;（12）《松江区农村公路建设规划（2018-2022年）》（在编）;\n\n（13）《松江区泖港镇现状工业用地及企业梳理（2019）》（在编）。\n\n三、项目可行性分析\n\n（一）空间布局优化的可行性\n\n（1）整治区土地利用功能分区\n\n根据整治区域涉及的郊野单元规划、村庄规划、当地自然条件差异、土地利用现状、经济社会发展和产业文化特色，将整治区划分为水源涵养林生态修复与利用区、家庭农场农业生产示范区、村庄整治示范区、乡村产业发展区四个主要功能区。\n\n图3-1：整治区土地利用功能分区图\n\n（1）水源涵养林生态修复与利用区\n\n该区域为黄浦江上游水源涵养林集中的区域，区域内零散宅基地及低效工业用地将予以退出，宅基地农户根据农民相对集中居住政策予以安置，低效工业用地予以清退。退出的建设用地因地制宜进行复垦，主要复垦方向为林地，促进林地斑块集中。规划加强对现状涵养林内基础设施的建设，适当布置对周边环境与水体无影响，无排污的公共配套设施，方便市民以及周边村民休闲放松，提升林地生态价值。\n\n（2）家庭农场农业生产示范区\n\n区域内零星宅基地及低效工矿仓储用地予以退出，复垦方向优先为耕地，进一步促进耕地集中连片，以适应更高效的机械化耕作的需求。发挥松江区家庭农场集中经营的优势，提升区域粮食生产水平，增加集体经济组织成员收入，同时规模化经营统一管理，进一步提高“松江大米”的品牌知名度。\n\n（3）村庄整治示范区\n\n区域内零星宅基地归并后主要集中在村庄整治示范区内，村庄集中归并点主要以存量建设用地为主，尽可能满足村民安置需求，同时少占耕地。通过统一规划、强化设计提升村庄整体风貌，建设上海农民相对集中居住示范村。\n\n（4）乡村产业发展区\n\n依据村庄规划，选址合适的区域发展乡村产业，利用集体经济组织存量建设用地，适度发展适合乡村的产业。北侧黄桥产业园引入国企助力乡村振兴。南侧“泖田艺术村”保留原有农宅，利用存量建设用地转型发展乡村艺术为主的文化产业。\n\n（2）整治区土地利用规划\n\n规划至2035年，整治后，整治区域拥有永久基本农田407.3551公顷。整治区域规划农用地1315.6673公顷，其中耕地630.9471公顷；规划建设用地160.5731公顷，其中农村宅基地36.8033公顷，工矿仓储用地0.4968公顷；规划水域和未利用地165.1682公顷，全部为河湖水面。整治区域新增耕地50.9245公顷，为现状耕地总量的8.78%[ 规划新增耕地50.9245公顷，为现状耕地总量的8.78%，此数据为规划远期新增耕地量。本次实施方案目标为，新增耕地29.1000公顷（5%）。]；新增永久基本农田0.4409公顷，为调出永久基本农田规模的5%。\n\n图3-2：试点整治区土地利用规划图\n\n表3-1：整治区土地利用平衡表\n\n郊野单元村庄规划地类 土地利用结构调整表（公顷）\n\n大类 中类 小类 基期（2020年） 占比 规划（2035年） 占比 变化\n\n建设用地 农村宅基地 98.6735 6.01% 36.8033 2.24% -61.8701\n\n公共管理与公共服务用地 19.5954 1.19% 22.7205 1.38% 3.1251\n\n其中 村级公共建筑用地 5.3747 0.33% 2.3807 0.15% -2.9940\n\n科教文卫用地 1.4909 0.09% 6.6497 0.41% 5.1588\n\n市政公用设施用地 2.9891 0.18% 4.9562 0.30% 1.9671\n\n公园广场用地 0.6379 0.04% 0.1815 0.01% -0.4564\n\n水工建筑用地 9.1027 0.55% 8.5524 0.52% -0.5503\n\n特殊用地 13.1662 0.80% 16.6577 1.01% 3.4914\n\n经营性用地 31.7864 1.94% 8.6219 0.53% -23.1645\n\n其中 商业服务业用地 2.0189 0.12% 8.1251 0.50% 6.1062\n\n仓储用地 0.8781 0.05% 0.0000 0.00% -0.8781\n\n工矿用地 27.5300 1.68% 0.4968 0.03% -27.0332\n\n城镇住宅用地 1.3593 0.08% 0.0000 0.00% -1.3593\n\n交通运输用地 70.4789 4.29% 75.7698 4.62% 5.2909\n\n其中 铁路用地 7.1626 0.44% 6.8279 0.42% -0.3347\n\n交通服务场站用地 1.2779 0.08% 1.3810 0.08% 0.1031\n\n道路交通用地 62.0383 3.78% 67.5609 4.12% 5.5225\n\n小计 233.7003 14.24% 160.5731 9.78% -73.1272\n\n农用地 耕地 580.0226 35.34% 630.9471 38.44% 50.9245\n\n园地 13.5283 0.82% 16.6864 1.02% 3.1581\n\n林地 546.0306 33.27% 570.6238 34.76% 24.5932\n\n草地 19.1140 1.16% 5.7391 0.35% -13.3748\n\n农村道路 42.6638 2.60% 53.8271 3.28% 11.1633\n\n坑塘水面 12.0365 0.73% 11.6914 0.71% -0.3451\n\n沟渠 33.9063 2.07% 15.5029 0.94% -18.4034\n\n设施农用地 7.4078 0.45% 10.6495 0.65% 3.2417\n\n小计 1254.7098 76.44% 1315.6673 80.15% 60.9575\n\n水域和未利用地 河湖水面 152.9985 9.32% 165.1682 10.06% 12.1697\n\n小计 152.9985 9.32% 165.1682 10.06% 12.1697\n\n合计 1641.4086 100.00% 1641.4086 100.00% 0.0000\n\n注：现状农用地、水域和未利用地数值与表1-1不一致，是由于其他草地根据“第三次全国土地调查工作分类与三大类对照表”属于未利用地，根据“郊野单元村庄规划地类”属于农用地。\n\n（二）土地综合整治可行性及潜力分析\n\n1.农用地整理潜力分析\n\n农用地整理潜力包括数量潜力、质量潜力和生态潜力三个方面。数量潜力主要来自于整理田间道路降低田坎系数、归并零散地块、沟渠改造（明渠改暗渠、喷灌技术等）以及通过农用地结构调整增加耕地；质量潜力主要在于改造中低产田，建设现代化标准粮田，使耕地集中连片从而提高集约程度，提高土地产出率；生态潜力主要是在增产和增地的同时要注意规避土壤污染风险。\n\n根据试点区域土地利用现状及规划用地分析，试点区农用地整治潜力共161.6710公顷，其中园地13.5283公顷，除黄浦江水源涵养林外的林地78.9571公顷，草地19.1140公顷，农业设施建设用地（农村设施农用地、农村道路）50.0716公顷。\n\n图3-3：整治区农用地整治潜力布局分析图\n\n表3-2：农用地整理潜力分析表[ 潜力分析表为新增耕地来源的理论潜力空间，最终新增耕地地块以郊野单元村庄规划明确的耕地图斑为准。]\n\n一级地类 面积（公顷）\n\n园地 13.5283\n\n林地（除黄浦江水源涵养林外） 78.9571\n\n草地 19.1140\n\n农业设施建设用地（农村设施农用地、农村道路） 50.0716\n\n小计 161.6710\n\n根据规划，试点区全域土地综合整治后的耕地更加集中连片，有利于耕地集中耕作和土地综合整治工程实施，相关农业配套建设工程实施后，有效提升耕地质量，通过耕地集中化规模化经营可以有效减少土壤污染对作物的影响。\n\n2.建设用地整理潜力分析\n\n农村建设用地整理潜力是指在一定时期、一定生产力水平下，采取一系列措施对现有农村建设用地通过迁村并点、内部挖潜和加以改造重新组织利用，增加有效耕地及其他农用地面积、提高农村居民点利用率和效率、改善生态环境等的能力。\n\n根据试点区村庄规划方案，试点区规划远期，宅地基更加聚集，村庄公共服务与配套设施全面提升。建设用地具备整理潜力共计124.7321公顷。其中通过宅基地归并理论上具备复垦潜力空间73.0552公顷，通过工矿仓储用地复垦理论上可以复垦建设用地23.5169公顷，通过其他建设用地复垦理论潜力有28.1600公顷。\n\n表3-3：建设用地整理潜力分析表\n\n大类 一级地类 面积（公顷）\n\n建设用地 农村宅基地[ 农村宅基地整理潜力空间为理论数据，实际宅基地整治根据农民意愿及农民相对集中居住安排有序推进。] 73.0552\n\n工矿仓储用地 23.5169\n\n其他建设用地 28.1600\n\n小计 124.7321\n\n图3-4：整治区建设用地整治潜力布局分析图\n\n3.耕地和永久基本农田保护\n\n（1）耕地现状及规划情况分析\n\n整治区现状耕地共580.0226公顷，主要位于黄桥村、腰泾村和胡光村。规划耕地面积为630.9471公顷[ 规划耕地面积为依据村庄规划至2035年数据。至2025年规划耕地面积616.6102公顷。]，新增耕地约9%。新增耕地可以满足上不少于原有耕地5%的要求。最终新增耕地及占用耕地以工程实施后测绘报告为准。\n\n图3-5：现状耕地及永久基本农田分布图\n\n（2）永久基本农田现状及规划情况分析\n\n整治区现状永久基本农田共405.0648公顷，根据三调时点更新数据校核，永久基本农田全部为现状耕地，其中水田383.8362公顷，占比95%，水浇地21.2286公顷，占比5%。\n\n整治区现状202耕地保护空间547.9694公顷，根据三调时点更新数据校核，现状耕地为547.9694公顷，占比100%，其中水田441.0230公顷，占比80.48%，水浇地106.9465公顷，占比19.52%。\n\n图3-6：现状永久基本农田划定情况分析图\n\n表3-4：现状永久基本农田土地使用情况分析表\n\n一级地类 二级地类 三级地类 面积（公顷） 比例（%）\n\n农用地 耕地 水田 383.8362 95\n\n水浇地 21.2286 5\n\n合计 405.0648 100\n\n（3）永久基本农田调整补划可行性分析\n\n严防死守18亿亩耕地红线，采取长牙齿的硬措施，落实最严格的耕地保护制度。对已划定为永久基本农田，但属于安全利用类和严格管控类的耕地，按有关规定报请批准后移出并进行补划” 。\n\n优化调减现状永久基本农田8.6935公顷，调增永久基本农田9.1282公顷，调整后永久基本农田面积为407.3552公顷，净增永久基本农田比优化调减的永久基本农田增加了5%，调整优化后永久基本农田更集中连片，有利于耕地集中耕作。\n\n规划涉及占用永久基本农田8.6935公顷，其中农用地结构调整涉及占用3.5425公顷，主要为林地调整0.4992公顷、其他农业用地（主要为农村道路、灌溉沟渠）1.2264公顷，建设用地占用5.1509公顷，河湖水系占用0.0001公顷。为了农民集中居住区域及开放休闲林地区域完整性，将1.8168公顷永久基本农田调整为一般耕地。\n\n规划补充永久基本农田，主要来源于现状优质耕地。补划永久基本农田在泖港镇镇域内落实。补划地块主要位于泖港镇腰泾村、胡光村、曹嘉浜村（泖港镇内整治区外）、曙光村（泖港镇内整治区外）。补划地块总面积为9.1282公顷，补划地块均为现状优质耕地，且补划完成后永久基本农田更集中。\n\n图3-7：永久基本农田优化调整方案[ 具体补划定方案以永久基本农田调整方案为准。]\n\n优化调减耕地保护空间[ 此处耕地保护空间为上海市耕地保护任务“202”耕地保护空间。]59.7586公顷，其中农用地结构调整涉及占用41.5737公顷，主要为园林草地调整、农村道路建设、农田水利建设占用；规划建设用地占用15.7131公顷，主要占用类型为规划农村集中归并点、公共管理与公共服务用地、交通运输用地；规划河道蓝线占用2.4988公顷。为了农民集中居住区域及开放休闲林地区域完整性，将区域内耕地保护空间2.6334公顷调为一般耕地。\n\n规划补充202耕地保护空间主要来源于现状农村宅基地、工矿仓储用地及其他建设用地的复垦。补划202耕地保护空间潜力为73.1788公顷。\n\n表3-5：整治区内永久基本农田及市管耕地空间占用情况分析表\n\n一级地类 二级地类 调出永久基本农田面积（公顷） 调出市管耕地面积（公顷）\n\n农用地 耕地 1.8168 2.6334\n\n园地 0.0000 3.5185\n\n林地 0.4992 30.7334\n\n养殖水面 0.0000 1.0658\n\n坑塘水面 0.0000 0.3224\n\n设施农业用地 0.0000 0.0298\n\n其他农业用地 1.2264 3.2704\n\n小计 3.5425 41.5737\n\n农村宅基地 5.1509 15.0204\n\n公共管理与公共服务用地 0.0000 0.0054\n\n公用设施用地 0.0000 0.1124\n\n公园与绿地 0.0000 0.0192\n\n交通运输用地 0.0000 0.5558\n\n小计 5.1509 15.7131\n\n未利用地 河湖水域 0.0001 2.4988\n\n小计 0.0001 2.4988\n\n合计 8.6935 59.7856\n\n图3-8：202耕地保护空间优化调整方案\n\n4.乡村整体生态保护修复\n\n通过全域土地综合整治的实施，将实现泖港镇全域“生态建设立村、农业产业兴村、旅游产业旺村”的发展战略，提高耕地整理潜力综合能力，把生态潜力及景观优化有效结合起来。在全域土地综合整治的基础上，统筹安排区域内耕地等各类用地后备资源的开发利用，增加了区域内生态修复潜力，促进该区域生态文明示范区建设，实现该区域社会经济生态的可持续发展。试点区区政府重视，村民积极响应，各个委办局积极支持，叶新公路拓宽工程、黄桥村农民集中居住项目、建设用地减量化、生态清洁小流域项目资金已经到位并正在实施。试点区域市区两级政府对生态修复高度重视，资金上有保障，具备实施全域生态修复的能力。\n\n通过全域土地综合整治进一步调优生态用地结构。根据村庄规划，对在大片农田内影响农业机械化作业的林地、道路红线内的林地、重要规划项目占用的林地调出林地空间。对于二级水源保护区内以及水源涵养林内的宅基地以及其宅前屋后的自留地调整为林地，规划远期净增林地24.5932公顷[ 新增林地来源主要为涵养林内的宅基地复垦，由于涵养林内的宅基地复垦是根据镇区安置房的建设进度安排。因此本次实施方案中至2025年涵养林内宅基地安置未纳入计划表。林地建设根据宅宅基地退出计划依规实施。]。\n\n水系减少5.2141公顷，主要未道路红线占用、宅基地复垦后端头河填埋。水系增加17.3838公顷，主要为规划河道蓝线的实施以及涵养林内湿地建设。规划远期净增水系面积12.1697公顷。\n\n图3-9：林地空间优化调整方案\n\n图3-10：水系空间优化调整方案\n\n（三）土地权属调整可行性分析\n\n（1）土地权属现状\n\n试点区四个村土地权属主要为四个村村集体所有，区域内现状河道土地权属属于国家所有。\n\n图3-10：整治区土地权属现状图\n\n（2）土地权属调整方案\n\n四个村村域内涉及需要调整土地使用权的土地包括：待拆除复垦的工业仓储用地使用权调整、待拆除复垦的农村宅基地使用权调整、集体建设用地拆除复垦后形成的耕地的使用权调整和整治区内原土地承包经营权调整。主要调整方案如下：\n\n1）整治区内涉及搬迁的企业和农户，签订补偿协议，待补偿到位后，原已确权登记发证的，由所在集体经济组织将原有宅基地证或房地产权证统一收回，到区不动产登记部门办理注销登记。\n\n2）整治区土地整治工程完成后，由市、区自然资源部门对其进行验收，确认新增的农用地面积，并对土地质量进行综合评价。复垦后新增农用地土地所有权不变，集体建设用地复垦新增农用地归原集体经济组织所有。\n\n3）涉及土地权属调整的签订土地权属调整协议，公告并征求意见后报区政府批准，项目实施后由项目承担单位编制地籍图并办理相应的指界手续上报相关部门及时进行土地变更登记，及时更新调查图件和统计台账。\n\n（四）风险评估论证\n\n对照《全域土地综合整治试点实施要点(试行)》提出的负面清单,结合试点区域内实际和突出问题,对试点实施可能面临的违法违规、破坏生态、增加债务等情况进行风险评估。\n\n依据国家发展改革委办公厅《关于印发重大固定资产投资项目社会稳定风险分析篇章和评估报告编制大纲（试行）的通知》（国家发改委办公厅〔2013〕428号文）所要求的风险识别方法，将影响社会稳定风险的因素分为9大类59项。识别出评估事项可能存在的风险因素共计35项，并对风险进行论证，提出切实可行的防范措施和具体预案。目前正在进行《上海市松江区泖港镇全域土地综合整治试点项目社会稳定风险评估》方案编制。\n\n四、试点区规划目标\n\n（一）整治目标任务\n\n1.总体目标\n\n试点区承接乡村振兴战略，根据上位规划及相关专项规划的定位，立足区域自然禀赋、特色产业、乡土文化等，提出整治区域的总体建设目标及功能定位：通过全域产业振兴、全域村居改善、全域景观提升，打造黄浦江滨的水乡田园小镇全球城市的科技农业和全域旅游示范镇。\n\n图4-1：泖港镇全域土地综合整治总体目标\n\n2.具体建设目标\n\n（1）农民集中居住：在遵循村民意愿的前提下，采取进镇上楼以及农村集中归并两种方式[ 根据本市农民相对集中居住工作政策导向，应采取进镇上楼、 向规划农村平移点归并和货币化有偿退出这三种方式。泖港镇主要采用进镇上楼、 向规划农村平移点归并两种方式。]，改善农民居住环境。整治区内规划形成三处的农民集中居住点。\n\n（2）全域土地整治：推进土地综合整治，推动山水林田湖草系统修复、田水路林村厂综合整治。至2025年，整治区内推进建设用地减量化任务不低于60.0000公顷，土地整治补充耕地规模不小于29.1000公顷（不低于现状耕地的5%要求），永久基本农田总面积不低于407.3551公顷。结合永久基本农田的建设，优化农业产业结构，提高农业设施化水平，加大高附加值农产品的供应。\n\n（3）乡村产业发展：提升现代农业、发展乡村旅游业、培育新兴业态、清退低效工业。通过全域产业策划及全域综合整治，明确“一产为本，二产提质，一三融合”的产业方向。以家庭农场、休闲农场为基础，依托五厍田园综合体形成乡村旅游综合配套中心，增加传统文化展示、农产品展销、特色民宿、游客中心、艺术家村落等旅游功能，构建观光环道、主题路径形成体系化发展，增强营销手段，实现乡村旅游蓬勃发展。\n\n（4）生态建设：结合三类生态控制线，加强水源地保护和水质净化，协调河道蓝线、道路红线矛盾，至2035年城市开发边界外河湖水域增加12.1697公顷，林地增加24.5932公顷。提高生态修复能力，加强农林水复合利用；提高农产品有机、绿色和无公害认证率，控制面源污染，减少农药和化肥的使用强度，采取合理的休耕、轮作等措施，改善土壤质量。\n\n（5）传统文化和乡村风貌保护：实现传统文化的保护与活态传承，依托黄浦江滨五厍老街、黄桥村楹联文化、江南水乡农耕文化等，保留泖港文化原味；引入创意、艺术等新文化，与传统乡村建筑融合。保护集中连片的设施粮田、黄浦江上游水资源保护区的特色涵养林、由骨干河道等构成江南水网密布的特色水系景观、单元内田村相依的江南水乡空间特征等，实现保护与发展相促进。\n\n（6）公共服务和基础设施：根据泖港镇农民集中居住布局情况，按照“十五分钟乡村生活圈”研究内容，配置村庄公服配套设施。近期结合集中居住试点——黄桥村、腰泾村、胡光村打造一批新的村庄公共中心；市政设施结合集中居住布局，完善供电、燃气、污水、环卫等体系化建设。\n\n（二）建设内容和实施安排\n\n本次实施方案依据《上海市松江区泖港镇郊野单元村庄规划》（2020-2035）》，将村庄规划中明确的建设项目根据全域整治实施要求进行分类，分为农用地整理、建设用地整理、乡村生态保护修复、乡村产业发展四大类，具体对每一类整治项目进行建设安排，明确至2025年建设目标及项目。\n\n1.农用地整理\n\n突出耕地“三位一体”保护，适应发展现代农业和适度规模经营需要，统筹推进整治区内农田整理、低效林草地和园地整理、农田基础设施建设、耕地提质改造、高标准农田建设等项目，确保整治区域内耕地质量有提升，新增耕地面积原则上不少于原有耕地的5%，传承农耕文化、改善农田生态。本次全域土地综合整治中农用地整治项目主要是整治区内土地整治项目以及高标准农田建设项目。\n\n（1）土地整治与高标准农田建设\n\n土地整治与高标准农田建设应科学合理开展土地平整工程、灌溉与排水工程、田间道路工程、农田防护与生态环境保持工程等田间基础设施建设，满足田间管理和农业机械化、规模化生产需要；合理布置耕作田块，保持各项工程之间的协调配合，实现田间基础设施配套齐全；田间基础设施占有率应不高于8%；建成后耕地质量提高，达到所在区的较高等别；基础设施使用年限不低于15年。\n\n整治区内通过规划建设用地布局优化、农用地结构调整、工矿仓储用地复垦，使原先相对分散的耕地集中连片，具备建设高标准农田的条件。本次规划借助全域土地综合整治试点资金及政策，充分对接我市高标准农田建设 “一张图”成果，对整治区内未实施高标准农田的区域进行高标准农田建设，同时对于已实施高标准农田建设的区域结合建设用地减量化工作进一步完善农田基础配套设施，全面提升耕地质量，至2025年整治区共计农田质量提升面积440.2000公顷。\n\n图4-1土地整治与高标准农田建设规划图\n\n规划建设高标准农田中，231.86公顷为国家农业综合开发云间吾舍综合体土地治理项目，该地块目前已经建设完毕，剩余两个项目分别为黄桥村市级土地整治项目、试点区土地综合整治项目。近期针对这部分的农用地整理项目提质改造，包括土地平整、田间路建设、农田水利工程建设、农田防护林建设等工作。\n\n（2）设施农用地建设\n\n在高标准农田建设中，根据农业规模经营的需要统筹安排设施农用地，根据设施农用地配置标准，配套相应的设施，具体设施可在项目工程设计阶段明确布局及规模，相应的资金应纳入高标准农田建设资金整体考虑。\n\n2.建设用地整理\n\n统筹农民住宅建设、产业发展、公共服务、基础设施等各类建设用地，有序开展农村宅基地、工矿仓储用地等低效建设用地整治，推动实施农村建设用地拆旧复垦、城乡建设用地增减挂钩等，优化农村建设用地布局，提升农村建设用地使用效益和集约化水平，支持农村新产业新业态融合发展。\n\n（1）农民集中居住\n\n充分考虑宅基地集聚过程中的安置需求，以及未来农民宅基地建房需要，预留足够的农村宅基地建设空间，试点区域内黄桥村、胡光村、腰泾村三各村主要以农民集中居住安置为主（农民相对集中居住点），集中居住点总占地面积35.0700公顷。其中黄桥村规划农村宅基地11.5300公顷，胡光村规划农村宅基地14.1400公顷，腰泾村规划农村宅基地9.4000公顷。三个村规划安置户数为1377户，依据村民意愿及集体经济组织运营方案，对田园艺术村区域单独策划运营，严格“一户一宅”的基本原则，选择就地保留宅基地运营田园艺术村的农户，不得纳入集中安置点再次安置。\n\n范家村685户、泖港村691户大部分位于水源涵养林内，规划以镇区上楼安置为主。\n\n规划农民安置点综合考虑农民安置需求及乡村整体风貌，充分尊重村民意愿。全域整治实施方案村庄设计方案与规划同步编制，同步审批，提高审批效率。同时创新点状供地、组团供地等方式，集约节约高校利用建设用地。\n\n目前五个村的村民代表大会已经征求意见并通过。具体的安置方案中，黄桥村每户农户的意愿已经征求，腰泾村、胡光村的农户意愿在下一步村庄建筑深化方案阶段落实。\n\n表4-1规划宅基地安置情况汇总表\n\n序号 行政村 总户数 全非农户数 农业户数 分户 空户 拟建本村安置户数 安置点面积（公顷） 拟进镇安置户数\n\n1 黄桥村 515 0 515 0 0 475 11.53 0\n\n2 腰泾村 470 129 341 62 17 341 9.4 191\n\n3 胡光村 582 21 561 38 9 561 14.14 59\n\n小计 1567 150 1417 100 26 1377 35.07 250\n\n4 泖港村 691 691 0 47 10 0 0 738\n\n5 范家村 685 631 54 56 28 0 0 687\n\n总计 2943 1472 1471 203 64 1377 35.07 1675\n\n图4-2：规划宅基地布局图\n\n图4-3：整治区农民集中居住项目效果图（黄桥村）\n\n图4-4：腰泾村、胡光村村庄总平面图\n\n图4-5：腰泾村、胡光村农民安置点效果图1\n\n图4-6：腰泾村、胡光村农民安置点效果图2\n\n（2）农村公共服务设施配套\n\n根据泖港镇农民集中居住布局情况，按照\"十五分钟乡村生活圈\"研究内容，进行村庄公服配套设施配置。规划近期结合集中居住试点黄桥村，打造一批新的村庄公共中心;剩余腰泾村、胡光村庄根据规划，逐步推进村庄公共服务设施的建设。市政设施结合集中居住布局，完善供电、燃气、污水、环卫等体系化建设。\n\n为提升公共服务水平，更好地满足村民日益增长的物质文化需求，优化公共服务设施布局，提升服务能级，落实乡村生活圈建设。村级公共服务设施布局中，保障每村1处村民服务中心，作为行政村级的公共服务中心，服务半径800-1000米。综合设置行政服务、文化体育、医疗卫生、养老幼托、商业、生产培训等功能。根据现状设施及使用需求情况，适当保留或增加村级文化、体育、福利等设施，作为自然村级公共服务设施，辅助配置日常保障性公共服务设施和公共活动空间，服务半径300-500米。\n\n图4-7：乡村生活圈示意图\n\n试点区规划农村公共服务配套设施面积共2.72公顷，其中黄桥村共1.69公顷、腰泾村0.47公顷、胡光村0.56公顷。农村公共服务设施主要包含村委会、社区养老、社区医疗、社区体育等功能。除黄桥村北侧保留的农民合作社以外，剩余三处公共服务中心均为新建，主要为三个村农民相对集中居住配套建设。\n\n表4-2：整治区农村公共服务设施项目汇总表\n\n项目编号 保留村名称 位置 用地总面积（公顷） 主要功能 备注\n\n1 黄桥村乡村服务中心 叶新公路北侧黄桥中新路两侧 1.69 农村服务中心（行政服务、养老服务、体育、社区医疗、社区便利店） 一期实施中\n\n2 腰泾村乡村服务中心 东至高速、南至新三路西至腰泾公路北至中心河 0.47 农村服务中心（行政服务、养老服务、体育、社区医疗、社区便利店） 用地边界范围可随项目实施依规微调\n\n3 胡光村乡村服务中心 叶新公路以南，胡家浜河两侧 0.56 农村服务中心（行政服务、养老服务、体育、社区医疗、社区便利店） 用地边界范围可随项目实施依规微调\n\n小计 2.72\n\n图4-8：乡村社区生活圈（黄桥村村庄公共服务中心）效果图\n\n（3）道路整治\n\n整治整治区内道路建设项目根据道路等级主要分为对外交通道路建设、主要农村道路建设、田间路整治三级。\n\n对外交通道路为叶新公路拓宽工程，目前该项目已经立项正在实施中，规划道路红线宽度为45米，项目施工完成后将有力地改善整个松江浦南三镇的对外交通条件，对整治区对外交通有极大的提升。\n\n主要农村道路建设为区塘公路的拓宽，规划按照8米宽的农村道路标准实施建设[ 8米宽的农村道路包括路肩]，道路建设完成后将加强泖港镇南部地区东西向的联系，串联云间吾舍国家田园综合体、农民集中安置点以及乡村田园艺术村等多个乡村产业、文旅、人居区域。\n\n田间路整治试点区内共计29条，在试点区土地综合整治项目中，将根据道路实际情况以及农田水利工程需要对田间路进行整治，田间路整治以道路提升为主，通过路面修复、白改黑等工程建设提升道路质量以及乡村整体风貌。\n\n表4-3：整治区农村道路建设项目汇总表\n\n序号 道路名称 所属村 起点 止点 宽度（m） 实施内容 长度（m）\n\n1 叶新公路 泖港全域 老黄桥港 叶榭段 40-50 翻建提升 13000\n\n2 区塘公路 胡光村、腰泾村 老黄桥港 G1501 8 翻建提升 3000\n\n3 腰泾公路 腰泾村 叶新公路 G1501下穿道 7 中修 2009\n\n4 北十一勤公路 黄桥村 晨兴公路 黄桥公路 5~6 中修 1481\n\n5 泖范路 范家村 泖塘公路 辰塔路 4.5~6 中修 879\n\n6 中二公路 腰泾村 叶新公路 小泖港 6 提档 2137\n\n7 新三路 胡光村、腰泾村 新四路桥 工程终点 6 提档 2062\n\n8 胡光公路 胡光村 叶新公路 中四公路 3~6 提档 1362\n\n9 中四公路 胡光村 工程起点 南朱家庄队 6 提档 1807\n\n10 园外东一路 胡光村 环园东路 胡光公路 7 提档 572\n\n11 新胡路 胡光村 区塘公路 中四公路 6 提档 573\n\n12 如日路 泖港村 叶新公路 问函路 5 提档 540\n\n13 问函路 泖港村 如日路 杜厍公路 6.1 提档 792\n\n14 沈家公路 泖港村 泖塘公路 叶新公路 5.2 提档 2169\n\n15 杜厍公路 泖港村 叶新公路 沈家公路 4.4 提档 1215\n\n16 晨兴公路 范家村 辰塔路 北十一勤公路 5.5 提档 1221\n\n17 泖塘公路 范家村 叶新公路 泖晨路 5.3 提档 1389\n\n18 黄桥中心路 黄桥村 北十八勤河 叶新公路 7 提档 1575\n\n19 黄桥公路 黄桥村 横辽泾 叶新公路 3～5 提档 2210\n\n20 黄桥东路 黄桥村 北十一勤公路 叶新公路 4~4.1 提档 953\n\n21 汤家浜公路 黄桥村 六勤河 叶新公路 5 提档 530\n\n22 泖晨路 范家村 泖塘公路 晨兴公路 3～11 提档 3030\n\n23 湾巷公路 范家村 泖晨路 向阳河桥 4~4.8 提档 1761\n\n24 范家公路 范家村 辰塔路 防汛通道 4～7.5 提档 1370\n\n25 新叶路 泖港村 沈家公路 叶新公路 3～4.1 提档 1570\n\n26 腰南公路 胡光村 区塘公路 南古楼 3～4 提档 1930\n\n27 张区北路 胡光村 张腰浜 区塘公路 4 提档 620\n\n28 张区南路 胡光村 张腰浜 区塘公路 2.5 提档 621\n\n29 王长浜路 胡光村 向阳河 区塘公路 4~4.2 提档 477\n\n30 腰里公路 腰泾村 腰泾公路 里蒋沙浜 3.5 提档 1149\n\n31 五丰公路 范家村 北六勤河 叶新公路 4 提档 533\n\n总计 54538\n\n图4-9：道路建设项目布局图\n\n（4）宅基地和工矿仓储用地等建设用地复垦\n\n根据试点区村庄规划方案，试点区规划远期，宅地基更加聚集，村庄公共服务与配套设施全面提升，试点区内农田集中连片。根据整治潜力测算，整治区内建设用地整理理论潜力共计124.7000公顷（详见前章：建设用地整理潜力分析）。\n\n试点区内结合近期复垦实施计划，明确具体的减量化地块。由于减量化潜力地块中城镇村道路调整为农村道路等非减量化图斑共计21.7公顷，范家村内宅基地34公顷农民集中上楼需要视安置点建设情况推进减量，剩余减量化地块共计69.09公顷。根据试点区实际情况考虑农民集中居住项目推进时序，以及后续实施推进中可能存在的不确定性，本次实施方案将减量化建设用地目标定为60公顷（900亩）。\n\n图4-10：建设用地减量化复垦地块分布图\n\n3.乡村生态保护修复\n\n按照山水林田湖草系统治理要求，结合农村人居环境整治，优化调整生态用地布局，统筹推进损毁和退化土地治理等，保护和恢复乡村生态功能，维护生物多样性，提高防御自然灾害能力，保持乡村自然景观。\n\n（1）生态小流域生态修复\n\n区域内生态小流域生态修复项目主要为河道整治类工程，共计三类。一是黄桥港河道综合整治，通过河道清淤、护坡建设等工程提升水环境安全及水环境质量。二是浦江源水质提升工程，主要是试点区控制农业面源污染的试点项目。通过实施水动力改善，净化体系构建，入河点源、面源污染防治，水质水生态修复等系列工程内容，达到区域水环境质量整体提升效果。三是区域内多条中小河道整治工程项目，包括北十二勤河、北五丰河、北十八勤河、向阳河、东陈家浜等中小河道。通过河道疏浚、护坡修建等工程提升水环境质量\n\n表4-5：整治区河道水系整治项目汇总表\n\n项目类型 项目名称 项目编号 主要建设内容 规模\n\n河道整治 黄桥港区管河道整治 E01 河道整治、水质提升 4.1公里\n\n浦江源水质提升项目 E02 水源净化、面源污染防治 61公顷（核心区）\n\n试点区内小流域综合治理项目 E03 区域内多条河道整治及两岸提升 4.86公里\n\n图4-11：整治区河道水系整治项目布局图\n\n图4-12：浦江源水质提升项目工程方案平面图\n\n（2）开发休闲林地建设\n\n区域内通过开放休闲林地建设，增强森林系统的生态功能和内涵品质，多方位拓展森林休憩空间，建立完善的森林服务系统，推动绿色生态空间与城市功能要素和场景的融合。同时，实施景观提升，配置具有景观观赏性的乔木、花灌木和地被植物。倡导林水、林果和林产结合，提升综合功能；完善林间道路，配置相关设施；结合乡野风貌，立足森林资源本底，保留郊野森林气息和乡土文化；突出森林资源的自然特性和地方特色。确保林地面积不减少、林相结构更合理、林分质量有提高、服务功能再提升，为市民提供休憩、观赏、健身和康养的绿色生态空间。\n\n图4-13：开放休闲林地建设项目布局图\n\n4.产业布局和引入\n\n规划拟对现状黄桥产业园进行整体转型改造，利用农村集体建设用地改革入市试点政策，对原黄桥产业园所在的集体经营性建设用地入市。引入国企——漕河泾经济技术开发区，共同打造“黄桥工匠园”。\n\n同时筹划胡光村、腰泾村田园田园艺术村项目。以现状存量宅基地为载体，预留部分自然环境较好，周边限制条件较少的地块作为未来田园艺术村发展的空间，以现有乡村艺术从业者为基础，发展乡村田园艺术村。乡村振兴产业策划以市场投资为主，不纳入全域土地综合整治项目考核。\n\n图4-14：“工匠园”产业项目效果图\n\n图4-15：乡村田园艺术村规划布局图\n\n（三）试点制度建设\n\n试点区是上海市农村改革试验区、全国农村集体经营性建设用地入市试点、集体资产股份权能改革试点、农村产权流转交易市场建设试点、宅基地制度改革试点、土地征收制度改革试点等多个乡村振兴相关制度试点区域。试点区在在全域整治过程中，重点针对农民集中安置、农村集体资产置换、集体经营性建设用地入市等多个方面落实国家及上海市相关制度试点要求，探索保障农村利益，城乡融合发展的高质量发展道路。\n\n建立全域土地综合整治平台数据库，在实施方案编制、项目建设、项目验收等各个环节各项整治建设入库管理，精细化管理每一块土地。\n\n（四）试点特色及预期效果\n\n一是排摸现状，确定规模、户数、房型和位置。前期开展驻村入户调研，明确宅基地农户资格权认定规则和统计时点，统一宅基地规模、户数等基础数据来源，了解农户对集中居住方式、平移归并点选址的意愿，强化底数排摸。镇级政府出台推进农民相对集中居住工作的实施办法，实施以保留村村内平移归并为主，进镇上楼安置、跨镇异地安置、自愿有偿退出为辅的多元安置机制，并细化安置对象、安置标准、资金支持等具体操作细则。新建农宅设计充分征求镇村意愿，使房型符合村民居住需求与使用习惯，建筑立面和整体风貌与当地自然环境相协调。\n\n图4-16：公众参与实施方案编制\n\n二是协调林水田空间，以人为本，推动农民相对集中居住，强化村庄总体布局。通过全域国土综合整治，促进黄浦江上游水源涵养林地区内的零星耕地、园地、林地、其他农用地及水域进行空间置换，农民全部实施进镇集中安置，引导生产、生活、生态空间合理布局。\n\n图4-17：泖港镇及试点整治区农业产业发展规划图\n\n制定宅基地撤并的正负面清单，构建宅基地评估体系，充分考虑村民意愿、基础设施配套建设标准和各种刚性管控要素，优化村庄平移归并点选址，形成村庄布局方案。\n\n图4-18：泖港镇及试点整治区村庄布局规划图\n\n三是用好政策，解决耕地碎片化问题，促进耕地集中连片。严格遵循“数量有增加、质量有提升、生态有改善、布局更集中、总体保持稳定”的原则，在符合国土空间规划、确实无法避让永久基本农田的前提下，按照“永久基本农田—部管储备地块—市管储备地块—土地整备引导区”梯次调优补划，确保完成“两个5%”的底限要求，即整治区域内永久基本农田的净增面积不少于调出永久基本农田面积的5%、整治区域耕地净增面积不少于整治前耕地面积的5%，实现国土空间的动态管制和渐进完善。\n\n项目实施完成后永久基本农田集聚度提高，小图斑面积减少，大图斑面积及个数均有增加。\n\n表4-6：泖港镇及试点整治区耕地集聚度分析表[ ]\n\n图斑大小 调整后\n\n图斑个数 调整后\n\n缓冲图斑面积\n\n（公顷） 调整前\n\n图斑个数 调整前\n\n1公顷以下 314 79.23 460 120.01\n\n1-10公顷 292 1040.66 300 1062.4\n\n10-20公顷 45 621.16 44 610.47\n\n20公顷以上 25 739.30 22 708.11\n\n图4-19：泖港镇及试点整治区耕地集聚度分析图\n\n四是聚焦乡村风貌，注重高品质村庄设计。\n\n注重乡村风貌，在农民集中居住、黄浦江两岸功能提升、乡村文旅产业等项目中实施方案中邀请国内外知名设计团队，参与乡村设计，提升乡村整体风貌水平。\n\n在农宅设计中汲取江南传统民居及松江本土建筑特色，与村民多轮沟通修改后，形成复合松江区农民需求的宅基地建筑方案。在用地布局上坚持集约节约的原则，通过缩减建筑基地面积、不减少建筑总面积等方式，提高节地率，争取更多的市级、区级节地补贴。如胡光村、腰泾村通过有机组团的建筑布局形式，实施“点状供地”，进一步提升了土地利用效率。\n\n图4-20：腰泾村村庄设计效果图\n\n五是主客共用，面向未来，构建乡村生活圈。为满足老人、游客及未来导入的黄桥工匠园员工等不同人群的实际需求，综合布局公共服务设施，实现设施能级提升、跨村共享，功能涵盖行政、养老、医疗、公共交通、文化、农技服务等多个领域。\n\n图4-21：黄桥村村庄公共服务中心效果图\n\n六是盘活存量，通过入市、出让等途径高效配置乡村土地资源，增加农民收入，提升农民幸福感。在建设用地总量控制下，实施“减量”与“盘活”联动，选取布局合理、配套完善、产村融合的存量工业用地打造黄桥科技园，由区属国企、镇集体资产公司和12个村级合作社共同入股、合作开发，使村民增加服务岗位收入、激活住房闲置资产、共享乡村经营性建设用地增值收益。\n\n图4-22：黄桥科技园镇村投资情况及运营模式\n\n七是挖掘特色，支持优质乡村文旅产业发展\n\n通过全域土地综合整治，盘活存量建设用地，整合土地资源，对于试点镇内的优质文旅产业予以支持，后续通过集体土地入市、租赁等方式保障乡村产业发展用地。\n\n图4-23：泖港镇乡村优质文旅产业布局图\n\n八是整体实施生态修复，在全域整治的过程中整体实施生态修复，具体在河道整治、农田建设、林地建设过程中必须考虑生态修复的要求，将生态型整治的理念落实到全域整治工程项目中，如：农田建设中通过生态沟渠、净氮磷排水口的设计控制农业面源污染，在林地建设中，考虑林水复合、林湿复合，通过复合用地增加生态性、增加生物多样性。在河道整治中，考虑利用湿地的净水功能，设计水质提升、生态清洁小流域等项目。\n\n图4-24：试点整治区实施生态修复工程设计方案\n\n五、建设内容及实施安排\n\n（一）规划明确的整治内容\n\n衔接《松江区泖港镇国土空间总体规划（2021-2035）》(已批)、《上海市松江区泖港镇郊野单元村庄规划》（2020-2035）（已批），明确试点区域至2025年建设内容及项目实施安排。村庄规划中明确近期建设项目以民生保障及基础设施建设为主，市场投资项目根据招商情况稳步推进实施。\n\n（二）实施项目安排\n\n1、总体实施计划\n\n根据整治区域总体建设任务的重要性和紧迫性，结合各项目的实施条件，安排近期建设项目清单，明确近期项目的用地面积、建设时间、管理单位以及投资估算，按照自然资源部试点要求,项目实施期限一般不超过3年，原则上2025年12月底前完成近期整治建设项目的实施。远期对接“十四五”规划及村庄规划2035年完成全部整治内容。\n\n实施方案准备期间：实施准备期应完成村庄规划及实施方案的审批。整治区村庄规划应在2021年6月底前完成审批，整治区实施方案编制及审批应在2022年12月完成，在实施方案编制审批期间应启动已明确实施项目的工程可行性研究，无需规划调整及实施方案批复的项目具备开工条件的可先行启动。\n\n项目总体实施建设：2020年6月——2025年12月，应根据工程实施计划及资金落实情况逐步推进实施各类项目。\n\n项目验收：2023年12月——2025年12月，应根据项目完成情况对完成的单体项目进行验收。2025年对实施项目整体进行验收。\n\n2、分项工程建设计划\n\n分项工程主要分为四大类，分别为农用地整理、建设用地整理、乡村生态保护修复和乡村产业布局及引入，具体项目及工程建设时序情况如表5-1所示。\n\n表5-1：分项工程汇总表\n\n序号 整治分类 项目类型 项目名称 项目编号 主要建设内容 规模 行业主管部门 建设时序\n\n“十四五”期间 中远期\n\n1 农用地整理 农田水利 农田水利项目 G01 泖港村农田建设项目，胡光村农业直播项目 区农委 2022-2023\n\n2 土地综合整治 黄桥村市级土地综合整治项目 F01 农田整理、灌排设施提升、宅基地撤并、农村公路改造、环境提升 黄桥村全域 市、区规划资源局 2022-2025\n\n3 国家农业综合开发云间吾舍综合体土地治理项目 F02 腰泾村、胡光村村全域（232公顷） 区农委 2021-2022\n\n4 试点整治区土地综合整治项目 F03 试点整治区全域 市、区规划资源局 2023-2025\n\n5 建设用地整理 道路整治 叶新公路拓宽项目（老黄桥港-叶榭段） D01 道路从16米拓宽至40-50米 约13公里 区交通委 2020年开工 至2027年\n\n6 区塘公路 D02 区塘公路-新艳路道路工程及沿路景观提升 3.1公里 区交通委 2023-2025 （G1503-黄桥港段） 2026-2035\n\n（黄桥港—东二号河）\n\n7 全域试点区29道路提档升级 D03 包含29条农村道路及田间路的提档升级及养护 38公里 区交通委 2020-2025\n\n8 减量化 区域内减量化建设用地 F04 建设用地减量化 60公顷 区规划资源局 2023-2025 2025-2027\n\n9 农民集中居住 黄桥村农民集中居住项目 A01 农村集中归并点安置房建筑工程、环卫设施工程、景观风貌工程（村务综合楼、村民大食堂、农机服务站、展厅等） 安置475户 泖港镇 2019-2023\n\n10 腰泾村农民集中居住项目 A02 农村集中归并点安置房建筑工程、环卫设施工程、景观风貌工程（村务综合楼） 安置341户 泖港镇 2023-2025\n\n（一期约100户）[ 腰泾村、湖光村十四五期间至少完成一期地块约100户的的安置建设。实施方案目标为十四五期间全部安置完成。但考虑到实际建设过程中各类不确定因素，十四五期间难以完成的，考虑延期至2027年。] 2025-2027\n\n11 胡光村农民集中居住项目 A03 农村集中归并点安置房建筑工程、环卫设施工程、景观风貌工程（村务综合楼） 安置561户 泖港镇 2023-2025\n\n（一期约100户） 2025-2027\n\n12 乡村生态保护与修复 林地建设 开放休闲林地建设 C01 开放林地，林地抚育、增加林地内道路及设施 160公顷 区市容绿化局 2022-2023\n\n13 河道整治 黄桥港区管河道整治 E01 河道整治、水质提升 4.1公里 区水务局 2023-2025\n\n14 浦江源水质提升项目 E02 水源净化、面源污染防治 61公顷（核心区） 区水务局 2020-2023\n\n15 试点区内小流域综合治理项目 E03 区域内多条河道整治及两岸提升 4.86公里 区水务局 2022-2025\n\n16 乡村产业发展 办公及文旅 黄桥工匠园一期 B01 工匠园建设、配套设施 4.57公顷 市场主体 2020-2022\n\n17 乡村田园艺术村 B02 田园艺术村打造 10.3公顷 市场主体 ——\n\n3、年度投资资金安排\n\n泖港镇全域土地综合整治试点方案涉及农田水利、土地综合整治、道路整治、减量化、农民集中居住、林地建设、河道整治、环境提升、办公及文旅等9大类，包括试点整治区土地综合整治、叶新公路拓宽、区域内减量化建设用地、黄桥村农民集中居住、开放休闲林地建设、浦江源河道水质提升与农业面源污染生态组控、黄桥科技园等在内的18个项目，总投资375121.90万元。项目建设周期从2019年至2025年，按年度安排资金计划。\n\n4、年度减量化计划安排\n\n为确保全域土地综合整治项目的顺利推进，对规划减量化地块进行统筹安排，将减量化地块分为年度计划推进。规划减量化目标为60公顷，为了保障减量化任务60公顷的完成，在规划复垦地块中选取近三年拟推进实施的减量化地块69.09公顷，将该图斑分解至每年。\n\n表5-2：试点整治区年度减量化计划安排表（单位：公顷）[ 减量化图斑潜力为69.09公顷，考虑实际推进难度，减量化目标任务定为60公顷]\n\n用地类型 2023年 2024年 2025年 小计\n\n工业用地 16.68 4.42 1.58 22.68\n\n宅基地 16.36 15.98 6.78 39.13\n\n其他建设用地 1.13 0.15 6.01 7.29\n\n合计 34.17 20.56 14.37 69.09\n\n图5-1：试点整治区年度减量化计划安排图\n\n六、投资估算及资金筹措\n\n（一）投资估算\n\n1、投资估算标准及依据\n\n（1）《村镇规划卫生规范》（GB18055-2012，引用标准GB5749《生活饮用水卫生标准》GB7959《粪便无害化卫生要求》GB19379《农村户厕卫生规范》）；\n\n（2）《土地整治项目规划设计规范》（TD/T1012-2016）；\n\n（3）《土地整治工程质量检验与评定规程》（TD/T1041-2013）；\n\n（4）《土地整治项目工程量计算规则（TD/T1039-2013）；\n\n（5）《土地复垦质量控制标准》（TD/T1036-2013）\n\n（6)《农用地质量分等规程》（GB/T28407-2012）；\n\n（7）《农业机械田间行走道路技术规范》（NY/T2194-2012）；\n\n（8）《耕地后备资源调查与评价技术规程》（TD/T1007-2003）；\n\n（9）《高标准农田建设标准》（NY/T2148-2012）；\n\n（10）《国家农业综合开发高标准农田建设规划》\n\n（11）《高标准农田建设通则》（GB/T30600-2014）；\n\n（12）《水土保持工程设计规范》（GB51018-2014）\n\n（13）《松江区永久基本农田划定成果》；\n\n（14）《松江区第三次全国国土资源调查时点更新成果》；\n\n（15）《土地开发整理项目预算定额标准》（财综〔2011〕128号）。\n\n2、投资估算表\n\n（1）农民集中居住项目\n\n农民集中居住项目涉及黄桥村农民集中居住项目预计投资3.26亿元，腰泾村农民集中居住项目预计投资2.56亿元、胡光村农民集中居住项目预计投资4.21亿元，总投资估算10.02亿元，牵头实施主体为松江区泖港镇人民政府，计划2025年前完成。\n\n（2）乡村产业项目\n\n乡村产业配套建设项目包括黄桥工匠园一期、乡村田园艺术村建设，黄桥工匠园已明确的项目投资总金额为3.94亿元。乡村田园艺术村产业项目属于市场投资，目前规划已经预留，后续随着招商引资的情况予以实施建设，投资金额以实际产业投资为准。市场建设不纳入全域土地综合整治项目进度考核。\n\n（3）开放休闲林地建设\n\n开放休闲林地建设共计160公顷，由区市容绿化局指导，泖港镇人民政府实施，总投资为1228万元，预计2023年完成建设。\n\n（4）道路整治项目\n\n道路整治包括叶新公路拓宽项目（老黄桥港-叶榭段）目前已经立项正在实施，涉及投资13.9亿元，由区交通委组织实施。\n\n区塘公路及全域试点区29条道路提档升级由泖港镇负责实施，区交通委员行业指导及管理。区塘公路为规划农村道路，目前尚未建设，本次全域整治拟立项实施，涉及投资4500万元。全域试点区29条道路提档升级，原则上2025年以前全面完成建设，涉及投资8376万元。\n\n（4）河道整治项目\n\n黄桥港区管河道整治，由区水务局牵头实施，涉及投资1.5亿。浦江源水质提升项目，由区环保局牵头实施，涉及投资金额为3950万元。试点区内小流域综合治理项目由泖港镇负责实施，区水务局行业管理，涉及投资金额为674万元。\n\n（5）土地综合整治\n\n整治区内涉及三个项目：国家农业综合开发云间吾舍综合体土地治理项目，由区农委牵头实施涉及资金约3288万元，目前正在实施。黄桥村土地综合整治项目由市土地整理中心、泖港镇牵头实施，涉及投资16394万元，该项目目前可行性研究已经编制完成。试点区土地综合整治项目计划投资13238万元，由市土地整理中心、泖港镇牵头实施。\n\n（6）农田水利及减量化\n\n农田水利项目由区农委指导、泖港镇负责实施，涉及资金240万元。试点区内减量化任务为60公顷，由泖港镇实施，区规划和自然资源局指导。减量化资金预计为6223万元，相关资金已纳入试点区土地综合整治项目内统筹实施。\n\n（7）总体投资情况\n\n汇总上述项目，根据整治区域的发展需求和整治目标，结合相关规划要求，统筹安排全域整治任务和建设项目，明确项目的用地面积、建设时间、管理单位以及投资估算。试点区项目总投资为34.56亿元。\n\n表6-1：试点区项目建设及投资汇总表[ 考虑到试点区项目资金为估算，最终市区级资金以项目批复金额为准、]\n\n序号 整治工程分类 项目类型 项目名称 项目编号 规模 行业主管部门 投资金额（万元） 建设时序\n\n总投资 中央财政 市级资金 区级资金 镇级资金 村级 社会资金 “十四五”期间 中远期\n\n1 农用地整理 农田水利 农田水利项目 G01 18.2公顷 区农委 240 240 2022-2023\n\n2 土地综合整治 黄桥村市级土地综合整治项目 F01 黄桥村全域 市、区规划资源局 16394 5590 10505 2022-2025\n\n3 国家农业综合开发云间吾舍综合体土地治理项目 F02 腰泾村、胡光村村全域（232公顷） 区农委 3288 2466 822 2021-2022\n\n4 试点整治区土地综合整治项目 F03 试点整治区全域 市、区规划资源局 13238 5395 7843 2023-2025\n\n5 建设用地整理 道路整治 叶新公路拓宽项目（老黄桥港-叶榭段） D01 约13公里 区交通委 139041 104322 34719 2020年开工 至2027年\n\n6 区塘公路 D02 3.1公里 区交通委 4500 1350 2250 900 2023-2025（G1503-黄桥港段） 2026-2035黄桥港—东二号河）\n\n7 全域试点区29道路提档升级 D03 38公里 区交通委 8376 2513 4188 1675 2020-2025\n\n8 减量化 区域内减量化建设用地 F04 60公顷 区规划资源局 —— 2023-2025 2025-2027\n\n9 农民集中居住 黄桥村农民集中居住项目 A01 安置475户 泖港镇 32550 6000 26550 2019-2023\n\n10 腰泾村农民集中居住项目 A02 安置341户 泖港镇 25575 4604 20972 2023-2025 2025-2027\n\n11 胡光村农民集中居住项目 A03 安置561户 泖港镇 42075 7574 34502 2023-2025 2025-2027\n\n12 乡村生态保护与修复 林地建设 开放休闲林地建设 C01 160公顷 区市容绿化局 1228 737 491 2022-2023\n\n13 河道整治 黄桥港区管河道整治 E01 4.1公里 区水务局 15000 10500 4500 1675 2023-2025\n\n14 浦江源水质提升项目 E02 61公顷（核心区） 区水务局 3950 3800 150 2020-2023\n\n15 试点区内小流域综合治理项目 E03 4.86公里 区水务局 674 271 221 182 2022-2025\n\n16 乡村产业发展 办公及文旅 黄桥工匠园一期 B01 4.57公顷 市场主体 39420 18550 5450 15420 2020-2022\n\n17 乡村田园艺术村 B02 10.3公顷 市场主体 —— ——\n\n总计 345549 3800 151320 147461 23474 5450 15420\n\n（8）试点区近期投资\n\n对接全域土地综合整治试点建设任务要求，实施近期为2025年年底。近期实施项目总投资约为34.56亿元。其中农民集中居住黄桥的安置村庄建设资金以建设用地减量化产生的指标统筹费为主要来源（同时享受市级农民集中居住相关政策补贴），其余河道整治、道路交通建设、等项目资金主要来源为市、区两级财政。\n\n（二）资金筹措\n\n试点区资金来源主要为财政资金和社会资金。其中农民集中居住、道路整治、河道整治、土地综合整治、减量化项目总投资30.61亿元，约占总投资的88.5%，资金均来源于财政资金；乡村产业项目总投资3.94亿元，约占总投资的11.5%，其中社会资金为1.54亿元，属于市场投资。随着项目的开展，项目资金可能节余或追加，以实际发生费用结算。\n\n投资资金中，中央财政资金为3800万元，市级财政为15.13亿元，区级财政资金为14.97亿元，镇级财政资金为2.35亿元，村级财政资金为5450万元，社会资金为1.54亿元。\n\n（三）资金平衡分析\n\n根据试点区项目建设情况，本项目投资来源有保障，且安全可靠；项目支出在来源范围内，不超出资金来源筹措，项目建设有保障，而且可行；同时本项目不论在资金筹措，还是投资支出，以及社会风险上，都是可控的，项目可行。\n\n（四）效益分析\n\n1.社会效益分析\n\n多年的实践已经证明，通过土地整治，可以有效改善农业生产条件，提高农田生产能力，降低农业生产成本；可以有效改善土地利用格局，扩大经营规模，促进农业增效和农民增收；可以有效改变农村面貌，提高农民居住水平和生活质量；可以有效改善生态环境和农村景观，促进农村地区和谐发展。土地整治能够大大改善农民的生产环境，修建或改造农田水利设施，方便农业生产，修建田间道路为农民劳作带来便利，但若规划不合理或施工单位的偷工减料都可能使这一变化大打折扣。全域土地综合整治着力破解农村用地碎片化、无序化、低效化难题。因村制宜推进全域土地整治，通过全域规划、土地整治、产业植入，着力优化全域农村土地布局，提高农村土地利用效率，使得农村环境更加优美、村民收入更丰硕，亦为城乡融合发展提供了弥足珍贵且可复制的经验。将盘活利用整治腾出后的土地，用项目带动乡村振兴。土地作为农村拥有的最大资源，是实现乡村振兴的中心要素。借力全域整治，乡村腾出土地筑巢引凤，发展乡村旅游业，吸引外来投资，打造旅游景区，增加劳动力就业，促使村民返乡创业，带动村民收入。\n\n2.经济效益分析\n\n全域土地综合整治是破解农村产业发展用地难题的“金钥匙”。统筹开展闲置宅基地、村庄空闲地、厂矿废弃地、道路改线废弃地以及其他低效闲置建设用地整理，优化农村建设用地布局结构，鼓励将节约腾退的建设用地在保障整治区内农民安置、农村基础设施建设、公益事业等用地的前提下，采取入股、联营等方式，重点支持乡村休闲旅游养老等产业和农村三产融合发展，促进产业振兴，增强乡村自我造血功能。允许在依法自愿有偿前提下收回的闲置宅基地、废弃的集体公益性建设用地整理后转变为集体经营性建设用地入市。围绕有基础、有特色、有潜力的产业，建设农业文化旅游“三位一体”、生产生活生态同步改善、一产二产三产深度融合的特色村镇。\n\n土地综合整治项目不仅提升用地质效，凸显经济价值，更是提升了村民的满意度与幸福感。一方面解决了财政投入土地整理的单一模式，采用市场化运作，简化了申报程序和审批流程；另一方面，有效增加耕地面积。三是通过道路、水利配套、生态修复，提高了土地质量，增加了土地产出，增强了生态稳定性，实现土地高质量运营。\n\n3.生态效益分析\n\n整治区规划的实施，使生态环境得到改善，促进整个生态系统的融洽与协调，并保持系统之间的良性循环。将会改善当地气候，涵养水源、降低风速，减少自然灾害，构成了稳定性强、生物生产能力高的复合农业生态系统，形成了经济合理的物质能量流，有效地防止了灾害对农作物的影响。项目实施后，较大的改善了周边的生态环境，土地垦殖率大大提高，使整治区内农田环境得到改善，土地利用趋向良性循环，增强了农业生产的后劲，增强了对自然灾害的抵御能力，实现土地利用的良性循环，改善区内及周边村庄和农田生态环境，提高生态环境质量。由此可知项目规划的实施，其生态效益是十分可观的。\n\n整治区实施完成后，农村生活污水处理率≥90%，生活垃圾回收率≥45%，受污染耕地安全利用率95%，农田农药施用量降低率达到10%。\n\n4.环境影响分析\n\n（1）项目实施对环境的有利影响\n\n1）整治区将通过田、水、路、林、村的综合整治，做到宜农则农、宜林则林、宜建则建，重新建立一个合理的生态系统，创建一个和谐的生态环境；\n\n2）通过工程和生物措施，提高整治区土壤的蓄水能力，系统配套的水利设施可减少整治区内的地表径流；通过增施农家肥、绿肥和秸秆过腹还田、压青等土壤改良措施，增加土壤肥力，提高林木的水土涵养能力。项目实施后，整治区内的植被覆盖率将大大提高，水利工程设施得到全面规划配套，将有效地控制整治区内的水土流失，改善区内生态环境；\n\n3）通过土地整治，路渠改善，林网兴建，防洪、排涝、抗旱能力得到加强，有利于改善人文和自然生态景观；\n\n4）通过土地整治，增加有效耕地面积，提高耕地质量，实现占补平衡，缓解人地矛盾，促进土地向集约化方向发展，促进传统农业向现代高效农业发展，改善投资环境，加快旅游业和整个经济的发展，其意义十分重大。\n\n5）项目运营以后通过绿化和人造景观，使景观条件得到恢复，廊道功能效应增加，物质流通加速，景观异质性增加，景观流动等功能将在一定程度上得到回复。增加了宽阔的村内道路景观，改变了道路沿线的整体景观格局。\n\n（2）项目实施对环境的不利影响\n\n1）项目实施对环境的不利影响，主要在工程的实施阶段、运营阶段和短暂的环境恢复调节阶段，其影响为局部的和暂时性的，总体是朝好的、有利的方向发展的。\n\n2）施工过程中产生的废水、废气、废油、扬尘、弃渣、噪声、生活垃圾和污水等会对当地环境、人群健康产生一些不利影响，以上这些影响程度比较轻微，多为局部性和暂时性，可以通过加强施工管理得到减免，并会随施工活动的结束而消失。\n\n3）施工期绿化工程将使区域植被遭到一定程度的破坏，地表裸露后被雨水冲刷造成水土流失，土壤肥力降低，影响局部水文和生态系统的稳定性。但工程临时占地破坏的植被，在施工结束后将会采取绿化工程加以补充，因此对自然植被的影响较小，不会导致沿线区域土地利用结构发生较大改变。\n\n4）项目实施完成以后，该地区的人流预计大量增加，必然会产生更多的生活垃圾，包括道路沿线过往行人产生的垃圾以及项目养护、维修产生的废旧材料。道路沿线过往行人产生的垃圾由环保部门统一收集后清运，进行无害化处理，因此该部分垃圾对环境产生的影响较小。但是如果处理不当会破坏地貌和植被的优美形态，造成视觉污染，影响项目周围景观的舒适性。项目养护、维修所产生的废旧材料垃圾也有环保部门统一回收处理。\n\n七、组织实施\n\n（一）组织机构设置\n\n全域土地综合整治工作是一项涉及面广、跨行业、多学科的系统工程，需要政府各有关部门齐抓共管，密切配合。为保证松江区泖港镇全域土地综合整治试点项目的顺利实施，区政府成立了自然资源、农业、交通、林业等相关职能部门及相关乡镇主要领导为成员的项目实施领导小组，具体负责项目实施中各部门工作的协调及领导工作，对项目实施统一管理，监督检查项目工程进度，协调处理重大问题，定期听取项目承担单位汇报，加强项目廉政监督，确保项目保质保量顺利完成。领导小组下设指挥部和办公室，主持日常工作。明确镇、村两级党组织和村委会是村规划实施的管理主体，党支部书记、村委会主任作为规划实施的第一责任人。充分发挥村支部规划实施主体的核心作用，强化党员意识、标杆意识、建立有制度、有标准、有队伍、有资金、有督察的规划建设管理长效机制。\n\n（二）项目实施管理\n\n1.资金管理\n\n通过政府投资、企业投资、村民自筹、及银行融资等多种资金渠道，完善村规划实施资金筹措体系建设。支持收益好、市场化运作成熟的农村产业、重点项目开展股权和债权融资，充分调动村民和社会力量，保障村规划实施。同时在项目运行过程中，要加强运行管理，严把工程质量关和资金专款专用关。\n\n2.项目监管\n\n充分运用现代化科技手段，开展规划的动态监测，及时掌握规划实施的动态变化，定期向村民报告规划实施情况，对规划实施中存在的问题，及时采取适当措施加以纠正。村支部、村委会要积极应用国土规划管理电子信息，及时跟踪规划项目落地、规划实施、资金使用，加强规划实施督导。\n\n3.公众参与意愿\n\n公开、透明村规划内容，广泛听取村民意愿，保障村民的知情权、参与权、表达权和监督权，维护村民权益，保障村民参与规划实施建设、日常监督管理的权利，发挥村民主导地位。将规划纳入村规民约，加强规划政策宣传、引导，深化村民自我教育，自我管理。\n\n相关链接：【泖港镇】关于《泖港镇全域土地综合整治实施方案》的解读\n\n点击查看 文件下载\n\n附件1泖港镇全域土地综合整治实施方案（草案）.pdf\n\n问题 回复内容\n\n收藏 打印 纠错"
  }
 },
 "02": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨上海金山廊下镇：“农业标准地”整出发展新图景",
   "date": "2024-09-02",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5341024",
   "body": "上海市金山区廊下镇全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。廊下镇作为上海市“远郊生态农业镇”的典型代表，近十年来，针对区域土地碎片化严重、空间利用格局冲突、生态环境面临挑战等问题，坚持“土地整治+”实践持续发力、久久为功。试点立足区域自然禀赋、特色产业及乡土文化，围绕“花果厨房、廊下飘香”的总体定位，以市级土地整治专项资金投入为主，整合各条线涉农资金，将农业与食品加工、教育、文旅、生态等产业有机融合，创新“标准地模块”，较好地实现了各类空间要素的均衡配置。引导农民、市民、艺术、体育、金融、科研机构等多元主体共同参与，推动政策、资金、人才等资源向乡村集聚，走出具有廊下特色的全域规划引领、全方位综合整治、全产业融合发展和全域生态保护提升“四位一体”的新路径，建设符合社会主义现代化国际大都市郊区乡村特点的美丽乡村，形成了典型的“廊下模式”。\n\n农业产业发展规划图\n\n一、案例背景\n\n（一）基本情况\n\n廊下镇试点位于上海市金山区西南部，总面积 46.87 平方公里，下辖12个行政村，镇域现状土地利用以农用地为主，耕地、 林地资源较为丰富，呈现“西林东田”的布局。廊下镇是上海远郊生态农业镇的典型代表，与上海唯一的国家级现代农业产业园——金山现代农业园区实行“镇区合一”的行政管理体制。\n\n2012年，廊下镇郊野单元规划启动编制，构建了全镇基本的空间功能框架，以“农”为特色，形成了集“现代农业科技、科普教育、文化体验、旅游休闲”于一体的“多功能农场”型现代农业镇区。2013年起，廊下镇先后启动了中部、西部两期土地整治项目，形成集中连片、布局规整的万亩生态林、良田、菜田、农宅的空间格局，逐步在提升农业发展能级基础上拓展农业休闲旅游功能。近十年土地整治工程区域覆盖廊下镇近六成范围，总规模26平方公里，土地整治专项资金累计投资逾10亿元。截至2020年底，廊下镇两期市级土地整治项目共完成低效建设用地整治50公顷，新增耕地面积约80公顷，年平均接待游客70万人次，实现农民集中居住1057户。\n\n（二）主要问题\n\n多年来，廊下镇在都市农业提质升档、乡村面貌持续改善、农民生活水平显著提高等方面取得一定成效，但也面临着新的难点、问题与挑战。\n\n空间破碎化程度较高。廊下镇东部地区呈现村庄散落、配套设施落后、土地碎片化、农业种植结构不合理、生态廊道隔断等问题，空间资源有待进一步优化与盘整。\n\n部门管理相对割裂，空间利用格局存在冲突。各部门空间治理割裂，按照原有各部门规划的要求，廊下镇永久基本农田、水面率、森林覆盖率等规划指标要求较高，仅耕地、河湖水面、林地、建设用地、设施农用地需求规模已覆盖开发边界外空间的94%，出现了河道建设、湿地建设与耕地保护之间的利用冲突，亟须整体统筹、系统安排、综合协调、统一行动。\n\n土地利用效率较低，空间资源紧缺。廊下作为整镇域打造的郊野公园，具备现代农业、科普教育、文化体育、旅游休闲和亲子互动等多重功能，但土地利用效率偏低、服务设施承载能力不足，“郊野有余而公园不足”。在补足短板，把郊野公园建设成市民休闲游乐的好去处的过程中，存在用地指标不足、空间资源紧缺的问题。\n\n（三）目标任务与总体安排\n\n为破解廊下镇发展瓶颈，以自然资源部全域土地综合整治试点为契机，以郊野单元村庄规划为平台凝聚共识、盘整资源、调适空间、统筹引领，通过村庄设计整体重塑乡村风貌、精细协调各类空间，以全域土地综合整治整合各条线资金项目，在空间优化中寻找价值，在空间设计中提升价值，在项目统筹中创造价值。\n\n本次试点工程重点聚焦东部7.1平方公里，一是突出耕地与永久基本农田保护，增加耕地数量、提高耕地质量、提升农业产值，加快推进高标准农田建设，完善农业基础设施水平；二是系统优化建设用地空间布局，连片整治、整体推进，实现建设用地总量控制；三是把握“山水田林湖草”系统综合整治，重点对林地资源和水系资源进行保护和修复；四是以现代农业园区建设为依托，接二连三，打造“第六产业”，建成以农业科技为主导的“农业硅谷”。\n\n二、主要做法\n\n（一）以郊野单元规划引领空间布局优化\n\n廊下镇作为第一批开展郊野单元规划编制的乡镇之一，在不同历史阶段的建设过程中始终坚持规划先行、统筹推进。廊下先后编制四版郊野单元规划（含郊野单元村庄规划），规划重心从2012年通过低效工业用地减量保障用地空间、补充耕地，到2015年强化生态建设和人居环境改善，再到2018年安排村庄布局引导农民集中居住，最后到推动都市绿色现代农业发展，更加注重复合型目标、更强调系统内生动力，规划理念正在转变为注重过程行动的“一张路线图”。\n\n廊下镇试点以规划引领乡村高质量发展为出发点，准确把握“超大城市远郊农业镇”的特点，通过全域土地综合整治实施，用政策优势调适空间，提高资源配置效率。 按照村庄布局 ，廊下镇鼓励群众向镇区集中，集中配套公共服务设施，依托两个保护村塑造诗意乡居环境； 按照产业布局 ，自西向东打造“林、田、菜”的农业生产格局，引导田、林、水进一步集中连片，提升田园风貌，逐步建成理想的国土空间布局。\n\n（二）以多部门项目统筹撬动多渠道资金资源\n\n各级各部门在明确职责分工的前提下互相协作、密切配合，建立组织保障、资金保障、管理保障以及监督保障四方面的实施保障措施，统筹安排用地减量、资源保护、生态修复和建设开发，以全域土地综合整治为平台，帮助农、林、水、产项目落地。通过市、区、镇上下沟通和跨部门横向协调，全面梳理全镇建设项目，归集为农民集中居住、人居环境整治、美丽乡村建设、土地整治四大专项88个任务清单，将廊下镇全域土地综合整治纳入区“十四五”重点项目，协调各部门争取条线资金，依据规划蓝图招商引资吸引社会资本，其中涉农资金由区级统筹集中投放、整体立项，实现项目集聚、资金汇集、资源共享、行动统一，更加凸显综合效益。\n\n（三）以机制创新助推农业产业现代化\n\n廊下镇试点不是以工程实施为导向，而是叠加区域功能定位和产业发展方向的目标导向型土地综合整治。通过空间资源调适盘活、机制创新建设，保障产业发展的用地需求，延伸农业产业链，打造“中央厨房”“蘑菇小镇”等农业品牌，在项目落地中创造价值。同时，依托于全域土地综合整治实施成效与带动效应，引导农民、市民、艺术、体育、金融、科研机构等各类多元主体共同参与，推动政策、资金、人才等各类资源要素向乡村集聚，将乡村的各类资源优势转化为经济优势，促进乡村新产业新业态融合发展、为乡村振兴农民富裕提供源动力。\n\n1.创新组合供地模式。 在深入调研企业经营情况和发展设想的基础上，为适应乡村地区产业特色，提高用地和项目审批的效率，创新 “标准地模块” ，确定不同比例的“建设用地+设施农用地+永久基本农田+林地+其他农用地”组合，通过全域土地整治行动落实空间要素。根据不同产业特点归纳了设施养殖、设施种植、露地种植、乡居田园四类组合用地模式，可在确保耕地保护目标的前提下应用于不同的场景，满足多元产业的发展需求。\n\n四类标准地模块图\n\n2.建立现代都市农业规模化生产机制。 以产业融合发展为路径，强化规模化生产、标准化管理、品牌化经营和市场化运作，完善农业产业链建设、提升农业价值链。廊下在市级现代农业园既有产业布局的基础上，立足“蔬菜保护镇”定位，打响“一菜一菇一茄”的特色品牌，全力构筑“蘑菇小镇”“中央厨房”等特色产业集群，打造“一核一链六基地”产业布局，发挥现代农业集聚效应。依托龙头企业带动合作社和家庭农场发展产业化联合体，规划三个蘑菇生产集聚区，逐步壮大蘑菇产业。\n\n三、取得成效\n\n本次试点工程重点聚焦东部7.1平方公里，“十四五”期间在整治区域内共统筹谋划7类16个项目，集聚资金12.1亿元（市级资金5.7 亿，区级资金4.6亿，镇级资金0.2亿，社会投资1.6亿），对本地区空间优化、资源盘活、产业兴旺发挥巨大作用。\n\n（一）走出现代化大都市耕地保护与城市发展的新道路\n\n严守耕地保护红线。规模上，通过减量化及农业结构调整补充耕地3872.3亩；生态建设和集中居住、产业发展占用3430.4亩；镇域耕地面积净增加441.9亩，净增1.46%。 空间上，按照郊野单元村庄规划、村庄设计、全域土地综合整治实施方案联动编制的方式，充分运用耕地和永久基本农田布局调优的支持政策，统筹各类规划任务和用地空间，调整和优化耕地和永久基本农田布局，增加中部万亩粮田和东部菜田中的永久基本农田占比，释放郊野公园核心区和镇区周边的永久基本农田空间，有效改善耕地碎片化、化解生态—建设空间矛盾，永久基本农田整备区内的永久基本农田占比接近七成，比现状增加7%，形成 “万亩林地、万亩菜地、万亩粮田、万亩郊野公园” 的空间格局，助推乡村全面振兴。\n\n（二）空间布局更加优化，展现沪派远郊田园风貌\n\n廊下镇开发边界外共有农户6229户，现状宅基地224.48公顷，分布较为零散、公共基础服务设施显著不足。通过土地综合整治工作，提高保护保留村和镇区公共服务设施配置标准，增加村民会所、养老服务、文化体育等设施，建设特色民居集中归并点，建筑风格保留廊下民宅特有的“白墙黛瓦观音兜”的样式，改变了部分宅基地散落无序的空间格局，居住环境及基本公共服务设施大幅改善，农民集中居住意愿增强。\n\n结合郊野公园建设，实现对区域内生态环境改造及提升。优化林地布局，强化东部涵养林建设和抚育，落实生态廊道内林地图斑，增加郊野公园内林地空间，提升开放林地景观品质，通过田林网建设织补生态网络，使森林覆盖率从18.5%提高至27.4%。优化水系空间，全镇河湖水面率从8.61%增加至11%。\n\n利用500亩草地提升，复合农、林、水、湿多种景观资源，营造优美的近自然生境，恢复生态平衡和生物多样性，给予人与自然亲密接触的机会。朱平公路由平湖经此直达廊下，作为门户节点和公园的景观核心，形成独特的廊下意象，释放生态和美学多重价值，提升周边土地价值，有利于开发民宿集群和休闲文旅街区。\n\n郊野公园农田景观\n\n（三）土地利用效率显著提升，产业发展空间更加充足\n\n优化零星群众住宅、闲置宅基地，盘活废弃的公共服务设施用地空间，为现代农业产业规模化发展创造空间。新增用于蘑菇工厂化生产的设施农用地51公顷，是现状用地的4倍，引进3家龙头企业，现蘑菇种植亩均产值可达200万元，并通过蘑菇学院向长三角输出蘑菇种植技术。通过腾挪设施农用地指标102亩，建设4层楼式商品猪育肥舍，实现年出栏12万头，解决全区产能目标，同步配置设施菜田，将猪场的粪尿“变废为宝”，构建“猪—沼—蔬”循环生态模式，是现代化、集约化、生态化的典型代表。依托土地整治工程“打底色”，通过郊野公园建设联动开展低效建设用地减量、环境整治、河道整治、林地建设等工程，使得郊野空间在承载原住民生产、生活功能的基础上，为广大市民提供了观光、生态休闲、游憩体验等功能，同时也带来了人流、财力的集聚。经统计，共实施工业用地和农村宅基地减量191.4亩，分期推进343户农户集中居住，结合农业种植结构调整，可新增耕地468.3亩，新增永久基本农田26.0亩。立足区域优良农业及生态本底资源，充分利用上海及长三角区域市场优势，匹配人们日益增长的对高端农产品及休闲体验旅居需求，廊下已经找出一条以全域土地整治推动全域高质量发展的新路子。\n\n四、推广前景与适用条件\n\n金山区廊下镇作为大都市远郊生态农业镇的典型代表，从全域土地综合整治项目实践，总结总体实施思路、农业产业发展布局、用地结构调整和组合用地模式四大维度经验，以供后续项目借鉴。\n\n一是强化顶层设计，明确总体实施思路。统筹形成一张规划布局图、一个项目包、一个时间表、一张路线图的实施计划；利用财政投入和社会资金支持村庄建设，打破条块分割、统筹整合资源、形成多项资金渠道整合至一个平台运作的投资方式。\n\n二是结合自身资源禀赋，打响特色品牌，全力构筑特色产业集群，同时创新现代化生态化种养结合的农业产业发展布局新形式。强调系统观念，建立区域项目联动管理机制。\n\n三是通过对项目区内建设用地减量和乡村生态环境的整治，增加项目区内生态涵养林、生态公益林、河道水系等的建设，并建立审批联动、资金联动、实施联动、验收联动的工作机制。\n\n四是预留了一定的未落图指标采用组合模式进行供地，以适应产业发展需求的不同用地需求。现廊下已建立形成乡居田园模块、养殖模块、露地种植模块、设施种植供地模块，进一步满足农业产业需求，助力廊下乡村产业兴旺与乡村全面振兴。\n\n（上海市规划和自然资源局推荐）"
  },
  "S03": {
   "heading": "ghzyj.sh.gov.cn_上海市规划和自然资源局：“标准地”绘就发展新图景：金山廊下以自然资源部全域土地综合整治试点为抓手",
   "date": "2025-03-03",
   "source": "ghzyj.sh.gov.cn_上海市规划和自然资源局",
   "url": "https://ghzyj.sh.gov.cn/hyxw/20250303/c755a9b1d8104d8295e55f1668e9c051.html",
   "body": "“标准地”绘就发展新图景：金山廊下以自然资源部全域土地综合整治试点为契机，以郊野单元村庄规划为平台，以机制创新助推农业农村现代化 发布日期：2025-02-27\n\n“标准地”绘就发展新图景：金山廊下以自然资源部全域土地综合整治试点为契机，以郊野单元村庄规划为平台，以机制创新助推农业农村现代化\n\n2025年02月27日 中国自然资源报\n\n全域土地综合整治试点典型案例\n\n阅读提示：在建设社会主义现代化国际大都市市郊美丽乡村的过程中，廊下镇“土地整治﹢”实践，以市级土地整治专项资金投入为主，整合各条线涉农资金，将农业与食品加工、教育、文旅、生态等产业有机融合，创新“标准地模块”，较好实现了各类空间要素的均衡配置，引导多元主体共同参与，推动政策、资金、人才等资源向乡村集聚，走出全域规划引领、全方位综合整治、全产业融合发展和全域生态保护提升“四位一体”的新路径。\n\n四类标准地模块图\n\n廊下镇位于上海市金山区西南部，下辖12个行政村，耕地、林地资源较为丰富，与上海唯一的国家级现代农业产业园——金山现代农业园区实行“镇区合一”的行政管理体制，是上海“远郊生态农业镇”的典型代表。\n\n2012年，廊下镇启动编制郊野单元规划，构建了全镇基本的空间功能框架，形成了以“农”为特色，集“现代农业科技、科普教育、文化体验、旅游休闲”于一体的现代农业镇区。2013年起，廊下镇启动土地整治项目，形成集中连片、布局规整的万亩生态林、良田、菜田、农宅的空间格局，逐步在提升农业发展能级基础上拓展农业休闲旅游功能。2021年，廊下镇全域土地综合整治试点成为自然资源部部署的乡镇全域土地综合整治试点。\n\n精细协调各类空间，创新组合供地模式\n\n针对区域土地碎片化严重、空间利用格局冲突、生态环境面临挑战等问题，试点工程重点聚焦东部7.1平方公里，“十四五”期间在整治区域内共统筹谋划7类16个项目，集聚资金12.1亿元（市级资金5.7亿，区级资金4.6亿，镇级资金0.2亿，社会投资1.6亿），对本地区空间优化、资源盘活、产业兴旺发挥巨大作用。\n\n在准确把握“超大城市远郊农业镇”特点的基础上，试点通过全域土地综合整治调适空间，提高资源配置效率。按照村庄布局，鼓励群众向镇区集中，集中配套公共服务设施，依托两个保护村塑造诗意乡居环境；按照产业布局，自西向东打造“林、田、菜”的农业生产格局，引导田、林、水进一步集中连片，提升田园风貌，逐步建成理想的国土空间布局。\n\n在实施过程中，试点以多部门项目统筹撬动多渠道资金资源。明确各级各部门职责分工，互相协作，统筹安排用地减量、资源保护、生态修复和建设开发，以全域土地综合整治为平台，帮助农、林、水、产项目落地。通过市、区、镇上下沟通和跨部门横向协调，全面梳理全镇建设项目，归集为农民集中居住、人居环境整治、美丽乡村建设、土地整治四大专项88个任务清单，将廊下镇全域土地综合整治纳入区“十四五”重点项目，协调各部门争取条线资金，依据规划蓝图招商引资吸引社会资本，其中涉农资金由区级统筹集中投放、整体立项，实现项目集聚、资金汇集、资源共享、行动统一。此外，探索叠加区域功能定位和产业发展方向的目标导向型土地综合整治，引导农民、市民、艺术、体育、金融、科研机构等各类多元主体共同参与，推动政策、资金、人才等各类资源要素向乡村集聚，促进乡村新产业新业态融合发展、为乡村振兴农民富裕提供原动力。\n\n在深入调研企业经营情况和发展设想的基础上，试点创新“标准地模块”，确定不同比例的“建设用地﹢设施农用地﹢永久基本农田﹢林地﹢其他农用地”组合，通过全域土地整治行动落实空间要素。根据不同产业特点归纳了设施养殖、设施种植、露地种植、乡居田园四类组合用地模式。在确保耕地保护目标的前提下应用于不同的场景，提高用地和项目审批效率，满足多元产业发展需求。\n\n同时，建立现代都市农业规模化生产机制，在市级现代农业园既有产业布局的基础上，立足“蔬菜保护镇”定位，打响“一菜一菇一茄”的特色品牌，全力构筑“蘑菇小镇”“中央厨房”等特色产业集群，打造“一核一链六基地”产业布局，发挥现代农业集聚效应。依托龙头企业带动合作社和家庭农场发展产业化联合体，规划三个蘑菇生产集聚区，逐步壮大蘑菇产业。\n\n整体重塑乡村风貌，助推农业产业现代化\n\n试点严守耕地保护红线。规模上，通过减量化及农业结构调整补充耕地3872.3亩；生态建设和集中居住、产业发展占用3430.4亩；镇域耕地面积净增加441.9亩，净增1.46%。空间上，按照郊野单元村庄规划、村庄设计、全域土地综合整治实施方案联动编制的方式，充分运用耕地和永久基本农田布局调优的支持政策，统筹各类规划任务和用地空间，调整和优化耕地和永久基本农田布局，增加中部万亩粮田和东部菜田中的永久基本农田占比，释放郊野公园核心区和镇区周边的永久基本农田空间，有效改善耕地碎片化、化解生态—建设空间矛盾，永久基本农田整备区内的永久基本农田占比接近七成，比现状增加7%，形成“万亩林地、万亩菜地、万亩粮田、万亩郊野公园”的空间格局，助推乡村全面振兴。\n\n试点增加村民会所、养老服务、文化体育等设施，建设特色民居集中归并点，建筑风格保留廊下民宅特有的“白墙黛瓦观音兜”的样式，改变了部分宅基地散落无序的空间格局，居住环境及基本公共服务设施大幅改善，农民集中居住意愿增强。此外，结合郊野公园建设，优化林地布局，增加郊野公园内林地空间，提升开放林地景观品质，通过田林网建设织补生态网络，使森林覆盖率从18.5%提高至27.4%；优化水系空间，全镇河湖水面率从8.61%增加至11%；利用500亩草地提升，复合农、林、水、湿多种景观资源，营造优美的近自然生境，恢复生态平衡和生物多样性，释放生态和美学多重价值，提升周边土地价值，有利于开发民宿集群和休闲文旅街区。\n\n通过整治，廊下镇空间布局更加优化，展现出沪派远郊田园风貌。经统计，试点共实施工业用地和农村宅基地减量191.4亩，分期推进343户农户集中居住，结合农业种植结构调整，可新增耕地468.3亩，新增永久基本农田26.0亩。\n\n试点优化、盘活的土地，也为现代农业产业规模化发展创造了空间。试点区域新增用于蘑菇工厂化生产的设施农用地51公顷，是现状用地的4倍，引进3家龙头企业，现蘑菇种植亩均产值可达200万元，并通过蘑菇学院向长三角输出蘑菇种植技术。通过腾挪设施农用地指标102亩，建设4层楼式商品猪育肥舍，实现年出栏12万头，同步配置设施菜田，将猪场粪尿“变废为宝”，构建了“猪—沼—蔬”循环生态模式，实现了产业的现代化、集约化、生态化。依托土地整治工程“打底色”，郊野公园为广大市民提供了观光、生态休闲、游憩体验等功能，同时也带来了人流、财力的集聚。\n\n发展都市生态农业，探索四大维度经验\n\n立足区域优良农业及生态本底资源，充分利用上海及长三角区域市场优势，匹配人们日益增长的对高端农产品及休闲体验旅居需求，廊下找出一条以全域土地整治推动全域高质量发展的新路子。\n\n作为大都市远郊生态农业镇的典型代表，廊下镇从全域土地综合整治项目实践，总结了总体实施思路、农业产业发展布局、用地结构调整和组合用地模式四大维度经验。\n\n一是强化顶层设计，明确总体实施思路。统筹形成一张规划布局图、一个项目包、一个时间表、一张路线图的实施计划；利用财政投入和社会资金支持村庄建设，打破条块分割、统筹整合资源、形成多项资金渠道整合至一个平台运作的投资方式。\n\n二是结合自身资源禀赋，打响特色品牌，全力构筑特色产业集群，同时创新现代化生态化种养结合的农业产业发展布局新形式。强调系统观念，建立区域项目联动管理机制。\n\n三是通过对项目区内建设用地减量和乡村生态环境的整治，增加项目区内生态涵养林、生态公益林、河道水系等的建设，并建立审批联动、资金联动、实施联动、验收联动的工作机制。\n\n四是预留了一定的未落图指标采用组合模式进行供地，以适应产业发展的不同用地需求。现廊下已建立形成乡居田园模块、养殖模块、露地种植模块、设施种植供地模块，进一步满足农业产业需求，助力廊下乡村产业兴旺与乡村全面振兴。"
  },
  "S05": {
   "heading": "ghzyj.sh.gov.cn_上海市规划和自然资源局：绿水青山筑底 金山银山提质——上海远郊两镇以土地整治赋能乡村振兴",
   "date": "2026-08-12",
   "source": "ghzyj.sh.gov.cn_上海市规划和自然资源局",
   "url": "https://ghzyj.sh.gov.cn/tpxw/20260812/5d78142300d64b269b2bd6224abc74e7.html",
   "body": "绿水青山筑底金山银山提质——上海远郊两镇以土地整治赋能乡村振兴的答卷 发布日期：2026-08-12\n\n绿水青山筑底金山银山提质——上海远郊两镇以土地整治赋能乡村振兴的答卷\n\n2026-08-10 上海土地整治\n\n在超大城市乡村转型与国土空间治理深度变革的背景下，全域土地综合整治已成为优化乡村空间格局、激活生态资源价值、赋能乡村全面振兴的核心抓手。\n\n上海市金山区漕泾镇、廊下镇立足郊区乡村资源禀赋，以全域土地综合整治为总体平台，以市级土地整治项目为重要载体，通过系统性空间重构、用地整合与要素重组，持续盘活沉睡的山水田林生态资源，有效推动生态优势向经济优势、发展优势转化，探索形成了超大城市乡村高质量发展的创新路径。两镇先后入选国家级“绿水青山就是金山银山”实践创新基地名单，是上海仅有的两个依托全域土地综合整治获此殊荣的街镇。\n\n廊下路径： 重构空间，让“农田”产出“多元价值”\n\n金山区廊下镇郊野公园\n\n廊下镇的蜕变，是一场历时十余年时光、四轮规划与三期土地整治的接续奋斗。面对土地碎片化、产业低效化的困局，廊下以坚定的决心，系统性地对46平方公里国土空间进行“外科手术”与“功能植入”。自2012年首版郊野单元规划（1.0版）启动以来，历经四轮规划迭代，从1.0版的“万亩良田”底板打造，到4.0版的“全域综合整治”平台搭建，规划目标从单一走向复合，最终成为整合资源的行动路线图。\n\n与之同步的是扎实的三期市级土地整治项目推进。2013年，以市级投入6.23亿元的一期项目为起点，着力打造“万亩良田”空间底板；2015年，二期项目接续推进，市区两级再投入3.46亿元，拓展休闲旅游功能；直至纳入自然资源部全域土地综合整治试点，系统性探索全域全要素系统治理治理。累计投入12亿元的土地综合整治专项资金，支撑了这场深刻的“空间革命”，通过低效建设用地减量、宅基地归并（累计744户）为发展腾挪空间，将零散“补丁地”整合为“万亩粮田、菜田、林地、郊野公园”的壮阔画卷，从根本上扭转了“东散西挤”的格局。\n\n空间治理的直接成效是生态基底的根本性夯实。森林覆盖率显著提升，河湖水质稳定在Ⅲ类以上，地方协同高校共建的“农林水乡”示范区，更是通过农林湿复合系统，将农田退水净化至优良标准，实现了生态效益与科研价值的双赢。\n\n优化后的空间，直接催生了适配现代农业的新模式。廊下创新性推出“标准地模块”，像“乐高”一样为不同产业科学配比用地，解决了项目“落地难”的痛点。松林楼房养猪场正是典范：在整治后集约化供应的102亩“标准地”上，实现了年出栏8万头的规模（较传统模式节约土地超80%），并构建起“猪—沼—蔬”加绿色能源的生态闭环。该系统将粪污“吃干榨净”：年产沼气发电360万度，提纯生物天然气并网，年产70000吨有机液态肥料反哺周边13000亩农田，每年实现二氧化碳减排约2万吨，在达成近零排放的同时，开辟了绿色能源与肥料的增收渠道。正是全域土地综合整治带来的空间重组与指标保障，保障了集约化、生态化标杆项目的落地。\n\n廊下松林养猪厂\n\n空间的优化，最终导向了价值的多元溢出与产业的全面振兴。廊下镇坚守“农业立镇”的初衷定位，以土地整治为抓手调整农业生产结构和生产方式，做强特色，打造“蘑菇小镇”，形成规模效应和品牌效应，全镇蘑菇年产值达3.51亿元，占农业总产值的51.4%。食品加工产业蓬勃发展，形成了以“中央厨房”为核心的产业集群，健康食品业产值从十年前的0.48亿元跃升至逾11亿元。作为整治成果的集中展示窗口，廊下郊野公园接待游客974万人次，带动旅游收入年均超5000万元，生动实践着“田园变公园、劳动变运动”。从稳固“粮袋子”“菜篮子”到丰富“餐盘子”，廊下的探索完整诠释了大食物观的丰富内涵。\n\n这套以全域土地综合整治为基石的系统性空间治理模式，不仅催生了可观的经济效益，更因其显著的成效与可复制的路径，形成了强大的示范吸引力。2024年，廊下镇成功申报总投资达1.5亿元的“全国农村综合性改革试点试验”项目。这笔国家级重磅资金的注入，正是对其以土地整治撬动全域振兴模式的高度认可与直接投资。\n\n漕泾路径：活化水系,让“水乡风景”催生“富民实景”\n\n金山区漕泾镇水库村\n\n与廊下“重整山河”的路径不同，漕泾镇的振兴，围绕“水”字做了一篇全域活化的“系统文章”。\n\n生态筑基，重现江南水韵。漕泾的整治遵循“规划先行、以点带面”的逻辑，以水库村为“起点”，将成功经验复制到阮巷、护塘等多村，实现从“盆景”到“风景”的跨越。整治的核心是对60多平方公里水网的“通经活络”与生态修复：打通断头浜，构建生态陂塘与农林湿复合系统。建成的“莲浦葑芳”等示范基地，显著提升了水质与生物多样性，让密布的河网与70多座小岛，从昔日的交通障碍转变为生态景观与特色资源。\n\n生活提质，绘就诗居画卷。水生态修复后，漕泾着力将生态优势转化为宜居优势。按照“三师联创”的先进理念，高标准推进农民相对集中居住，为228户村民量身打造了三处安置点。设计匠心独运，将紧邻河岸的“水景黄金位”优先留给民居，营造出“粉墙黛瓦、枕水而居、农田环绕”的沪派江南新貌。同时，精心保留菜园，尊重并延续村民的生活习惯。50亩的“藕遇”公园、尚品书院、湿地公园等“水库八景”，不仅是网红打卡地，更是村民共享的“后花园”与公共客厅。自2022年漕泾郊野公园开园以来，已提供“吃住游购娱”一体化体验，让乡村生活品质与城市同频共振。\n\n漕泾镇郊野公园\n\n生产赋能，激活内生动力。优质生态空间成为吸引人才、激活产业的强大磁场。围绕“水木栖谷”定位，漕泾发展出生态乌鳢养殖、循环水养殖（产量达传统模式120倍）等高效农业。同时，创新探索城乡融合新范式，以应对乡村“老龄化”与“空心化”：精心打造的综合为老服务中心，营造出温馨的“小三园”养老环境；自2024年8月开村的“数字游民国际村”，截至2025年7月也已吸引全国200多位数字游民入驻。该社区以“青银共居”模式，吸引年轻创业者与银发族共同生活，为乡村注入崭新活力。政策、资本与人才的持续导入，让水乡从传统生产空间，转型为融特色农业、休闲文旅、创意创业于一体的“水乡综合体”，实现了“颜值”向“产值”与“价值”的华丽转身。\n\n核心启示：从“资源”到“资产”的空间治理逻辑\n\n尽管路径各异，但廊下与漕泾的实践共同揭示了以全域土地综合整治为核心的现代乡村空间治理内核：\n\n治理的本质，是对乡村国土空间价值的系统性重估与创造性转化。它超越单一的工程思维，是通过“规划-整治-运营”的全链条操作，将零散的生态资源整合为可计价、可运营的发展资产，将空间优势转化为产业胜势的系统工程。\n\n规划引领与持续迭代是先导。从“一张蓝图”到“多轮迭代实施”，长期的战略定力确保了空间格局在优化中持续增值。\n\n生态筑基与产业定制是关键。无论是廊下的“标准地”还是漕泾的“水经济+”，都是基于本地资源禀赋，通过精准的空间供给来定制产业解决方案，推动一二三产业在物理空间与价值链上的深度融合。\n\n多元共治与功能融合是保障。有效统筹政府、市场、村民主体，整合各类资金与政策，并在空间营造中有机融入宜居、宜业、宜游、宜养等多元功能，最终实现生态效益、经济效益与社会效益的统一，让乡村振兴成果惠及所有群体。\n\n全域土地综合整治带来的多元产业\n\n（图片来源于网络）\n\n从廊下镇的“标准地”到漕泾镇的“幸福水”，上海远郊的这两个乡镇，以空间治理为笔，以生态要素为墨，共同绘就了“绿水青山就是金山银山”的生动实景。它们的成功实践，正是对二十届四中全会精神的鲜活注解。全会明确提出要“加快农业农村现代化，扎实推进乡村全面振兴”，并再次强调“牢固树立和践行绿水青山就是金山银山的理念”。廊下与漕泾的探索，正是通过全域土地综合整治这一关键抓手，将生态优势转化为发展优势，在优化国土空间格局的同时，扎实推进宜居宜业和美乡村建设，为超大城市落实国家战略、推动全体人民共同富裕迈出坚实步伐提供了宝贵的基层样本。\n\n当每一寸土地都被敬畏并赋予新的使命，它所承载的，便是充满无限可能的未来乡村。这条路，正从上海金山的田野与河湖间向更远处延伸。"
  }
 },
 "03": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨江苏昆山张浦镇：“三连跳”腾挪发展新空间",
   "date": "2024-09-01",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5340939",
   "body": "江苏省苏州市昆山市张浦镇全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。试点站在人与自然和谐共生的高度，瞄准“城乡融合、全域焕新”目标，统筹谋划农用地整理、建设用地整理、生态保护修复、公共空间治理、乡村历史文化保护等项目的实施。通过农用地整理和建设用地整理，新增耕地1987.1亩，节余建设用地指标1514亩；通过河道综合整治、池塘生态化改造项目等生态保护修复项目的实施，增强了生态系统完整性和生态空间连通性；通过赵陵山良渚文化遗址保护、尚明甸传统村落活化利用等项目的实施，传承保护历史文化资源，探索了特色文化保护新模式。\n\n2020年到2023年，张浦镇实现耕地净增加5140亩，有效激活了资源禀赋，改善了农村人居环境。2022年，张浦镇获评首批苏州市“美丽宜居镇”。2023年，张浦镇综合实力跃居全国千强镇第11位，比2022年上升5位，产业主阵地德国工业园获评全国首个专精特新产业园。\n\n整治提升后的村庄环境\n\n一、案例背景\n\n（一）基本情况\n\n张浦镇位于江苏省苏州市昆山市，区域面积109平方公里，东邻上海、西接苏州、北依昆山城区，区位优越，交通便捷。镇域总人口 23万，已累计吸引20多个国家和地区的800多家外资企业、2000多家优质民营企业投资兴业。2023年，地区生产总值超315亿元，综合实力位列全国千强镇第11名，较2022年上升5位；获批江苏省农村一二三产业融合发展先导区，已建成3个高效农业园区和“昆味到”苏州大米品牌示范基地，2023年村均可支配收入1314万元，农民人均纯收入5.8万元。在传统工业重镇和现代农业强镇的身份之外，张浦还是昆山传统村落数量最多的城镇，境内共有18处不可移动文物，有1个中国传统村落、3个江苏省传统村落，农耕文化资源丰富而深厚。张浦镇是传统的工业重镇，也是现代农业强镇，资源禀赋独特，由三个乡镇撤并重组而成，空间布局“大而散”特征明显，存在布局零碎、公共设施不足、乡村风貌退化等问题亟待解决。\n\n试点选取除中心镇区以外全镇91.7%的区域，开展全域土地综合整治，总面积15万亩，包含20个行政村、5个社区以及双洋潭、白莲湖、杨氏田湖3个片区。\n\n（二）主要问题\n\n一是空间布局统筹力度不够。张浦镇由三个乡镇撤并重组而成，区域内有三条贯穿昆山南北的重要通道，空间“小集中、大分散”特征明显。虽然近年来通过土地整治项目的实施，推进了空间布局的优化，但受早期发展形成的散落式、边缘式、插花式用地制约，空间破碎混杂问题仍然存在。\n\n二是各类资源要素整合不足。由于城镇与乡村、村庄与村庄之间的资源缺乏系统整合，资源紧缺与低效利用并存、耕地连片度不高等问题，虽持续施策但未根本解决，部分资源资产利用相对低效。\n\n三是农村产业融合水平不高。镇域内虽然乡村发展要素丰富多元，历史文化底蕴深厚，但生态资源、文化资源、土地资源和已有建设空间缺乏有效的激活手段，一二三产业之间缺乏有效的整合协同，乡村发展存在产业跨界协同难、空间精准匹配难、产业落地生根难等困境。\n\n四是区域生态退化问题突出。张浦镇域内有两个合计超过3000亩的废弃工矿——振苏砖瓦厂、南姚砖瓦厂，区域内生态功能退化、生态系统受损、空间格局失衡等问题明显，亟待运用生态文明的理念，通过空间的腾挪并转，进行系统修复、综合治理。\n\n（三）目标任务及总体安排\n\n张浦镇全域土地综合整治试点，聚焦新型城镇化和乡村全面振兴，实施农用地整理、建设用地整理、生态保护修复、公共空间治理、乡村历史文化保护五大类项目，通过高起点、高标准、高质量的综合治理和系统修复，整治出城乡根本变化的全新面貌和经济社会生态的多重效益，推动张浦成为展示昆山率先基本实现农业农村现代化建设成效的“重要窗口”。本次全域土地综合整治项目，计划新增耕地1987.1亩，节余建设用地指标1514亩，改善提升高标准农田13590亩，建成高标准池塘2154.5亩，整治河道8.4公里，治理村庄水体75.7亩。\n\n二、主要做法\n\n（一）跳出“镇域”谋划顶层设计\n\n坚持系统性、整体性、协调性思维，将张浦镇全域土地综合整治试点，作为昆山推进社会主义现代化建设试点的重大任务、昆山自然资源管理综合改革的重要内容，按照全市“一盘棋”思路，谋划张浦全域土地综合整治的顶层设计。市级层面强化组织领导和统筹协调，成立昆山市张浦镇全域土地综合整治试点项目工作领导小组，发改、资源规划、住建、交通、水务、农业农村、文体广旅等12个相关部门共同参与；镇级层面细化成立五个工作小组，实体化运作、“挂图作战”，形成市级统筹、部门协同、镇负主责、村抓落实的纵向贯通、横向联动的工作推进机制。规划编制突出全域设计、统筹谋划，立足全要素“一张图”，结合国土空间总体规划镇域土地空间资源的数量、布局和功能，精准布局整治的重要区域、重点工程、重要项目与主要措施，汇总形成一张规划布局图、一个项目计划包、一张时间安排表，引导镇村空间资源按需腾挪、有序流动。建立实施方案动态优化机制，在按批复规划推进既定项目有序实施的同时，结合每年的新任务新要求，及时将新增整治内容纳入年度实施计划，在不影响约束性指标的前提下，确保实现全域“全要素”整治效益的最大化。\n\n（二）跳出“乡村”优化空间布局\n\n按照“数量有增加、质量有提升、生态有改善、布局更集中”的原则，统筹推进城乡建设用地增减挂钩、耕地占补平衡补充耕地等涉及新增耕地的项目实施，大力推进与现代农业生产和经营方式相适应的高标准农田建设，提档升级农田基础设施，优化提升田园景观风貌，从“质”上支撑耕地全面优化提升，促进一二三产业融合发展。聚焦农业农村现代化，整体考虑镇域生态修复、景观休闲、产业承载、文化传承等综合功能，深入实施百村共兴、百村共美、百村共富、百村共治、百村共享的乡村振兴“五百行动”，一体实施河道生态环境整治、农村闲置资源资产盘活、基础设施完善、历史文化保护与风貌提升等项目，整镇推动资源、资产高效配置，镇村并举优化生产、生活、生态空间布局。\n\n（三）跳出“土地”实施系统治理\n\n在充分运用自然资源部、省自然资源厅关于全域土地综合整治试点政策的基础上，市级层面先后出台《关于印发〈昆山市全域特色田园乡村建设五年行动方案（2021—2025 年）〉的通知》（昆田园办〔2021〕6 号）《关于开展农村宅基地制度改革试点工作的若干意见》（昆委〔2021〕15 号）《关于开展“五百行动”推进乡村振兴打造农业农村现代化县域示范的工作意见》（昆办发〔2022〕101 号）《关于进一步推进工业用地提质增效工作的若干意见的通知》（昆政办发〔2022〕111号）等文件，从乡村建设、人地关系优化、土地规划、财政支持等方面，为统筹实施全域土地综合整治各类项目提供政策支撑。张浦镇联合相关部门、市镇两级国有企业、社会资本、规划设计单位、村集体、农民专业合作社、农业龙头企业、农户等多元主体，共同打造全域土地综合整治运营平台，在空间重构、资源重组中相应调整和优化土地权属关系，促进乡村“资源—环境—生态”三位一体提升的同时，纵深推进城乡区域协调发展。\n\n三、取得成效\n\n（一）在资源重组整合中实现一产二产提档升级\n\n通过城乡建设用地增减挂钩、高标准农田建设、高标准农业园区建设、补充耕地等项目的实施，从2020年到2023年，张浦镇实现耕地净增加5140亩，高标准农田基本实现镇域动态全覆盖。\n\n2023年，张浦镇粮食种植面积、粮食总产量创近5年新高。通过低效建设用地的腾挪置换，张浦镇将腾出的空间指标用于产业园区的新载体建设，建立“强村公司+产业园+村集体”合作模式，拓宽富民增收渠道。2023年，张浦镇村均可支配收入达1314万元，同比增长 2.7%，农民人均纯收入达5.8万元，同比增长5%，成为昆山首个获得苏州市镇村工业集中区优化整治提升项目奖励资金的区镇；集聚200多家欧美企业的德园工业园，获评全国首个专精特新产业园（示范）。现在的张浦，不但有从“一根线束”到“一辆汽车”的汽车零部件产业链，还落地了像益海嘉里、优诺乳业等近30家国际著名食品头部企业，依托“龙头企业+集体经济+农业基地+专业农户”的合作模式，形成了从“一颗小麦”到“一片面包”、“一个水果”到“一瓶果汁”的完整产业链，2023年创造近百亿产值，规模居昆山第一。\n\n低效建设用地拆旧区整治前（上）后（下）\n\n建新指标使用区\n\n（二）在传统村落活化中实现一二三产业融合发展\n\n依托全域土地综合整治对乡村资源资产的整合提升，张浦镇将“三农”工作与文化、康养、旅游等深度融合，在实现特色康居（宜居）乡村镇域全覆盖的同时，还壮大了一批“乡村+旅游”“文化+旅游”等农文旅融合产业，文创金华、科创尚明甸、水乡姜里等特色村庄竞相“出圈”，全面打响了张浦农文旅融合发展的特色品牌。\n\n2022年，张浦镇获评首批苏州市“美丽宜居镇”。已完成整治提升的尚明甸村，入选第六批江苏省传统村落，并实现从“传统乡村”到“乡野硅谷”的蝶变，已有11家科创企业、8家文旅企业扎根。与2020年比，尚明甸2023年村集体经济收入增加300余万元，村民人均年收入增长23%。正在推进的赵陵山遗址保护项目，已完成村内2710亩高标准农田建设，与周边耕地组成了4500亩的规模化高标准农田；目前正引导居民组团翻建，有序实施景观绿化、道路整治和设施完善；计划整合赵陵山良渚文化资源，建设遗址公园，并结合遗址公园整体景观营造，发展农文旅融合产业，打响赵陵山历史文化品牌，以文化产业赋能乡村振兴。\n\n实现“传统乡村”向“乡野硅谷”蝶变的尚明甸村\n\n（三）在全域综合整治中实现人与自然和谐共生\n\n2021年以来，张浦镇按照每年打造10条生态美丽河湖的进度，推进河道生态环境整治。整治中高质量融入海绵城市建设，通过生态修复、景观提升、岸线优化等措施，不但有效提升了调蓄能力和水生态环境质量，还实现了老百姓“开门亲水，推窗见绿”的美好愿景。目前，试点包含的5个河道综合整治项目已全部竣工，整治后的河道，成了周边居民休闲漫步的好去处。张浦镇共有4条河道被评为苏州市级幸福河湖。金华村获评2022年度江苏省生态宜居美丽乡村。\n\n聚焦公共空间治理，张浦镇大力推进河道沟渠、村道巷道、田间庭院等重点区域的集中整治覆绿，对抛荒地、自留地等土地资源进行统一规划、集聚整合，打造蔬菜可食、景观可赏的“美丽菜园”，累计创建五星级庭院433户，数量位居昆山市首位，建成“美丽菜园”4213.9亩，农村整体颜值、生态全面提升，获评2022年苏州市农村人居环境整治提升典型案例、昆山2023年农村人居环境整治工作镇级典型案例。\n\n河道生态整治实施前（上）后（下）\n\n四、适用条件和推广前景\n\n张浦镇全域土地综合整治，践行了“三生融合”的价值逻辑、“要素流动”的发展逻辑、“以人为本”的民生逻辑及“扁平一体”的组织逻辑，跳出“镇域”、跳出“乡村”、跳出“土地”谋划全域土地综合整治的做法，有助于更好地推动空间缝合、资源整合、发展聚合。这样的做法，适用于国土空间规划全域全要素管控下，以城市反哺农村、以工业反哺农业，新型城镇化与乡村振兴一体推进的地区。\n\n张浦镇的全域土地综合整治模式，契合存量时代发展需求，是一种以腾挪用地空间、加速城乡要素流动与集聚为基础的“城乡融合、全域焕新”的系统治理模式，是一条可复制、可推广的全域土地综合整治实施路径。各地在借鉴过程中，可以立足当地资源禀赋、区位条件和发展阶段，通过多主体共同参与、多要素系统治理探索适合自身的整治模式，通过资源、资产、资金整合加速城乡之间的要素流动，进而推动新发展理念下城镇、农村、生态空间的调整优化以及土地利用效益的综合平衡，推动资源要素跨越城乡和村域边界的优化配置，在城乡融合发展的“双向奔赴”中推动农业农村现代化建设。\n\n（江苏省自然资源厅推荐）"
  },
  "S08": {
   "heading": "iziran_中国自然资源报：江苏：全域土地综合整治20个国家试点和16个省级示范项目总体进展超70%",
   "date": "2024",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5346043",
   "body": "近日，江苏首个镇级全域土地综合整治国家试点项目——无锡市惠山区洛社镇全域土地综合整治试点项目通过验收。苏州相城黄桥街道、南通如东新店镇等一批试点示范项目已相继进入收尾阶段，苏州吴江区整县域统筹正在全面推进。\n\n自2019年年底自然资源部部署开展全域土地综合整治试点工作以来，江苏按照“试点先行、示范引领、逐步推广”思路，推进20个国家试点和先行启动的16个省级示范项目建设，总体进展超70％，取得阶段性成效。\n\n——耕地集聚规模效应显现。完成农用地整理43．83万亩，建成15．84万亩高标准农田，耕地地块总数减幅11％，地块平均面积增幅24％，100亩以上连片耕地比例由30％上升至40％。\n\n——建设用地利用效率明显提高。完成建设用地整理7．51万亩，建设用地面积减少0．76万亩，腾退低效工业企业590家，其中苏州市黄桥街道工业用地面积由0．63万亩减少至0．36万亩，总部经济科创园税收总额连续两年超6000万元。\n\n——生态环境质量有效改善。已完成生态保护修复3．37万亩，其中河道整治297公里，绿化造林31万棵，湿地修复0．14万亩，生态廊道建设34公里等。\n\n——乡村现代化治理能力显著提升。完成公共空间治理75项，历史文化保护21项。\n\n建湖县高作镇高标准农田整治后现场实景\n\n昆山市张浦镇全域土地整治“乡野硅谷”尚明甸村村景\n\n以苏州黄桥街道为代表的城乡融合模式，通过全域规划、设计、整治，构建“以产业研发片区为中心，南北湿地、西园东城”的空间布局，大幅提升土地利用效率，工业用地容积率由0．7提升至2．5，增幅257％；实现耕地集中连片，净增耕地1150亩，地块平均面积由9．7亩增加至15．8亩，增幅63％，耕地质量有所提升；打造“三横三纵”生态廊道，畅通12条河道水系，形成了　蓝绿交织的城乡生态网络。\n\n以建湖高作镇为代表的现代高效农业模式，聚焦提高耕地集中连片度、改造中低产田、提升农业机械化作业率，实现“小田变大田、大田变良田”，耕地地块数减少22．9％，初步建成3个万亩优质稻麦种植基地，亩均增产近200斤、增收达300元。\n\n以如东新店镇为代表的农村一二三产业融合模式，着力推动村庄集聚、耕地集中连片，建成千亩以上连片高标准农田4块、千亩以下百亩以上26块；促进土地流转与规模化经营，村集体新增年收入700余万元；导入稻米加工等附加产业，每年村集体可新增租金收入200万元。\n\n以昆山张浦镇为代表的特色文化保护模式，在推进农业园区、工业集中区优化整治和村庄环境提升的同时，实施赵陵山新石器时代遗址保护，重塑了历史文化景观；活化利用尚明甸传统村落，入选第六批江苏省传统村落，再现了传统江南圩田景观风貌。\n\n除国家明确的允许永久基本农田调整和增减挂钩节余指标省内流转两项政策外，江苏还增加了4项支持政策：依申请下达试点示范项目所需建设用地流量指标；鼓励低效建设用地腾退为生态用地；产生的城乡建设用地增减挂钩指标、补充耕地指标在优先满足乡村发展用地需求后，节余指标可在省内交易，所得资金用于支持乡村振兴；省财政统筹试点地区一定规模的补充耕地指标作为启动资金支持项目建设等。目前，省财政已支持15．96亿元。\n\n积极拓展资金筹措渠道，鼓励社会资本参与全域土地综合整治，形成了“投资—建设—运营”一体化、工业反哺农业、自主开发运营等多种投入机制，与省农发行签订“政策性金融资金参与生态保护修复”战略合作协议，撬动金融资本投入全域土地综合整治。\n\n下一步，江苏将立足各地资源禀赋、资金保障力度，优选空间布局优化、耕地连片整治、资源盘活和生态修复提升潜力足、农村一二三产业融合发展需求大的地区，率先启动实施。会同农业农村等部门，加大全域土地综合整治与高标准农田建设统筹推进力度。积极争取财政部门支持，加大财政投入力度，做好全面推开的政策制度保障。"
  },
  "S03": {
   "heading": "zrzy.jiangsu.gov.cn_江苏省自然资源厅：江苏省苏州市昆山市张浦镇全域土地综合整治试点",
   "date": "2025-04-17",
   "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
   "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d57dqr/jsxcg/2025/04/23343113152712119653.html",
   "body": "张浦镇是传统的工业重镇，也是现代农业强镇，资源禀赋独特，由三个乡镇撤并重组而成，空间布局大而散特征明显，存在布局零碎、公共设施不足、乡村风貌退化等问题亟待解决。张浦镇全域土地综合整治试点，涉及除中心镇区外的全镇行政区范围，总面积15万亩，项目包含撤并乡镇、村庄、农用地、池塘等乡村和农业空间，还有2个面积较大的废弃工矿，资源集中；整治类型涵盖建设用地拆旧复垦、农用地整理、高标准农田建设、公共空间治理、乡村生态保护修复等内容，意义典型。 试点站在人与自然和谐共生的高度，瞄准“城乡融合、全域焕新”目标，统筹谋划农用地整理、建设用地整理、生态保护修复、公共空间治理、乡村历史文化保护等项目实施。计划通过农用地整理和建设用地整理，新增耕地0.1956万亩，结余建设用地指标0.1514万亩；通过河道综合整治、池塘生态化改造项目、黑臭水体治理等生态保护修复项目实施，增强生态系统的完整性和生态空间的连通性；通过赵陵山良渚文化遗址保护、尚明甸传统村落活化利用等项目的实施，传承保护历史文化资源，探索特色文化保护新模式，建设人与自然和谐共生的宜居宜业和美乡村。试点取得以下成效： （一）在资源重组整合中实现一产二产提档升级。通过城乡建设用地增减挂钩、高标准农田建设、高标准农业园区建设、补充耕地等项目的实施，从2020年到2023年，张浦镇实现耕地净增加5140亩，高标准农田基本实现镇域动态全覆盖。2023年，张浦镇粮食种植面积、粮食总产量创近5年新高。通过低效建设用地的腾挪置换，张浦镇将腾出的空间指标用于产业园区的新载体建设，建立“强村公司+产业园+村集体”合作模式，拓宽富民增收渠道。2023年，张浦镇村均可支配收入达1314万元，同比增长2.7%，农民人均纯收入达5.8万元，同比增长5%，成为昆山首个获得苏州市镇村工业集中区优化整治提升项目奖励资金的区镇；集聚200多家欧美企业的德园工业园，获评全国首个专精特新产业园(示范)。现在的张浦，不但有从“一根线束”到“一辆汽车”的汽车零部件产业链，还落地了像益海嘉里、优诺乳业等近30家国际著名食品头部企业，依托“龙头企业+集体经济+农业基地+专业农户”的合作模式，形成了从“一颗小麦”到“一片面包”、“一个水果”到“一瓶果汁”的完整产业链，2023年创造近百亿产值，规模居昆山第一。\n\n高标准农田项目区实景图\n\n低效建设用地拆旧区前后对比及建新指标使用区域实景图\n\n（二）在传统村落活化中实现一二三产融合发展。依托全域土地综合整治对乡村资源资产的整合提升，张浦镇将“三农”工作与文化、康养、旅游等深度融合，在实现特色康居（宜居）乡村镇域全覆盖的同时，还壮大了一批“乡村+旅游”“文化+旅游”等农文旅融合产业，文创金华、科创尚明甸、水乡姜里等特色村庄竞相“出圈”，全面打响了张浦农文旅融合发展的特色品牌。2022年，张浦镇获评首批苏州市“美丽宜居镇”。已完成整治提升的尚明甸村，入选第六批江苏省传统村落，并实现从“传统乡村”到“乡野硅谷”的蝶变，已有11家科创企业、8家文旅企业扎根。与2020年比，尚明甸2023年村集体经济收入增加300余万元，村民人均年收入增长23%。正在推进的赵陵山遗址保护项目，已完成村内2710亩高标准农田建设，与周边耕地组成了4500亩的规模化高标准农田；目前正引导居民组团翻建，有序实施景观绿化、道路整治和设施完善；计划整合赵陵山良渚文化资源，建设遗址公园，并结合遗址公园整体景观营造，发展农文旅融合产业，打响赵陵山历史文化品牌，以文化产业赋能乡村振兴。\n\n实现“传统乡村”向“乡野硅谷”蝶变的尚明甸村\n\n赵陵村及周边高标准农田建设项目实施前后对比图\n\n（三）在全域综合整治中实现人与自然和谐共生。2021年以来，张浦镇按照每年打造10条生态美丽河湖的进度，推进河道生态环境整治。整治中高质量融入海绵城市建设，通过生态修复、景观提升、岸线优化等措施，不但有效提升了调蓄能力和水生态环境质量，还实现了老百姓“开门亲水”“推窗见绿”的美好愿景。目前，试点包含的5个河道综合整治项目已全部竣工，整治后的河道，成了周边居民休闲漫步的好去处。张浦镇共有4条河道被评为苏州市级幸福河湖。金华村获评2022年度江苏省生态宜居美丽乡村。聚焦公共空间治理，张浦镇大力推进河道沟渠、村道巷道、田间庭院等重点区域的集中整治覆绿，把抛荒地、自留地等土地资源进行统一规划、集聚整合，打造蔬菜可食、景观可赏的“美丽菜园”，累计创建五星级庭院433户，数量位居昆山市首位，建成“美丽菜园”4213.9亩，农村整体颜值、生态全面提升，获评2022年苏州市农村人居环境整治提升典型案例，以及昆山2023年农村人居环境整治工作镇级典型案例。\n\n河道生态整治实施前后对比\n\n完成整治提升的村庄环境"
  },
  "S05": {
   "heading": "suzhou.gov.cn_苏州市政府：“张浦经验”成功入选首批全域土地综合整治试点典型案例",
   "date": "2024-06-28",
   "source": "suzhou.gov.cn_苏州市政府",
   "url": "https://www.suzhou.gov.cn/szsrmzf/qxkx/202406/e2ab57ae80184480ae5dd74fe49285f9.shtml",
   "body": "“张浦经验”成功入选首批全域土地综合整治试点典型案例\n\n时间： 2024-06-28 10:11 来源： 昆山市人民政府 访问量：\n\n6月25日，自然资源部发布首批15个全域土地综合整治试点典型案例，张浦镇成功入选。\n\n2021年1月，张浦镇全域土地综合整治项目被列入国家试点名单。试点面积15万亩，实施范围包括除中心镇区外的20个行政村、5个社区和双洋潭、白莲湖、杨氏田湖3个片区。试点站在人与自然和谐共生的高度，瞄准“城乡融合、全域焕新”目标，统筹谋划农用地整理、建设用地整理、生态保护修复、公共空间治理、乡村历史文化保护等项目实施，旨在通过高起点、高标准、高质量的综合治理和系统修复，整治出城乡根本变化的全新面貌和经济社会生态的多重效益，推动张浦成为全面展示昆山率先基本实现农业农村现代化建设成效的“重要窗口”。2023年，张浦镇综合实力跃居全国千强镇第11位，较2022年上升5位。\n\n在资源重组整合中实现一二产提档升级。张浦镇通过城乡建设用地增减挂钩、高标准农田建设、高标准农业园区建设、补充耕地等项目的实施，2020年到2023年实现耕地净增加5140亩，有效激活了“大而散”的独特资源禀赋，改善了农村人居环境和整体生态环境。通过低效建设用地的腾挪置换，将腾出的空间指标用于产业园区新载体建设，建立“强村公司+产业园+村集体”合作模式，拓宽富民增收渠道。2023年，全镇村均可支配收入达1314万元，同比增长2.7%，农民人均纯收入达5.8万元，同比增长5%，成为昆山首个获得苏州市镇村工业集中区优化整治提升项目奖励资金的区镇；集聚200多家欧美企业的德园工业园，获评全国首个专精特新产业园（示范）。\n\n在传统村落活化中实现一二三产融合发展。张浦镇依托全域土地综合整治对乡村资源资产的整合提升，将“三农”工作与文化、康养、旅游等深度融合，在实现特色康居（宜居）乡村镇域全覆盖的同时，壮大了一批“乡村+旅游”“文化+旅游”等农文旅融合产业，文创金华、科创尚明甸、水乡姜里等特色村庄竞相“出圈”，全面打响了张浦农文旅融合发展的特色品牌。2022年，张浦镇获评首批苏州市美丽宜居镇。整治提升后的尚明甸村，入选第六批江苏省传统村落，并实现从“传统乡村”到“乡野硅谷”的蝶变，已有11家科创企业、8家文旅企业扎根。\n\n在全域综合整治中实现人与自然和谐共生。张浦镇按照每年打造10条生态美丽河湖的进度，推进河道生态环境整治，高质量融入海绵城市建设，通过生态修复、景观提升、岸线优化等措施，不但有效提升了调蓄能力和水生态环境质量，还实现了老百姓“开门亲水”“推窗见绿”的美好愿景。全镇共有4条河道被评为苏州市级幸福河湖。聚焦公共空间治理，大力推进河道沟渠、村道巷道、田间庭院等重点区域的集中整治覆绿，累计创建五星级庭院433户，建成“美丽菜园”4213.9亩，获评2022年苏州市农村人居环境整治提升典型案例，以及昆山2023年农村人居环境整治工作镇级典型案例。"
  }
 },
 "04": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨江苏苏州黄桥街道：资源重组品质重塑，节地产出“双提升”",
   "date": "2024-09",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5341648",
   "body": "江苏省苏州市相城区黄桥街道全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。试点作为推动城乡融合发展和产业转型升级、实现高质量发展目标的工作路径和实施平台，以“规划引领、空间重构”谋划新蓝图，以“节约集约、资源重组”实现节地产出“双提升”，以“分类施策、品质重塑”满足人民日益增长的美好生活需要，是土地综合整治模式的一次迭代升级，更是推进中国式现代化国土空间治理的实践创新。\n\n黄桥街道以问题为导向，开展全域土地综合整治。通过农用地整治促进耕地数量有所提升、质量显著提升、空间布局更加集中连片，适应现代化农业发展需求；通过建设用地整治优化城乡建设用地空间布局，使城乡发展更加融合，建设用地利用更加节约集约高效；通过生态保护修复构建完善的生态廊道、提升生态环境质量，使区域更加宜居宜业宜游；通过公共空间治理彰显江南水乡、渔耕文化，塑造新时代鱼米之乡生态文明风貌。\n\n一、案例背景\n\n（一）基本情况\n\n黄桥街道位于苏州市中心城区西北角，地处三区交汇处，辖区总面积23.08平方公里，下辖行政村9个，人口约4.7万人，2022年地区生产总值87.45亿元，人均国内生产总值（GDP）为11.95万元，略高于相城区平均水平的11.36万元。黄桥街道是典型的城乡融合型乡镇，南部为苏州虎丘湿地公园、北部为荷塘月色湿地公园，西部是农业发展用地，整体生态空间呈“C”字形环抱黄桥城区。同时，整治区内部河流纵横，主要有西塘河、朝阳河、大庄河、大流港、东挺河、黄埭塘等，总体生态环境本底良好，具有典型江南水乡生态风貌。\n\n（二）主要问题\n\n黄桥街道在早期发展中，不少企业以劳动密集型、低附加值产业为主，对土地、资源等要素依赖性强，土地产出效益低，黄桥街道在整治前主要存在三个方面问题。\n\n1.现状空间布局无序化，呈现生产、生活、生态空间相互混杂的现象\n\n现状生活空间散点式分布在整个街道内；生产空间遍地开花，生态空间除虎丘湿地公园、荷塘月色湿地公园相对完整外，其他都穿插于生活空间和生产空间。现状空间布局呈现出城乡混杂分布的特点，难以适应产业高质量发展的要求。\n\n2.现状耕地布局较为分散、碎片化严重\n\n黄桥街道耕地布局较为分散，主要集中在生田村、胡湾村、大庄村、占上村等乡村，总规模 2410亩，占土地总面积的6.76%，占农用地面积的16.91%。据统计，零散耕地（5亩以下 图斑 ） 面积 占耕地总 面积 17.53%， 零散 耕地 图斑 占 耕地 总 图斑 数量70%，在空间形态上呈现农村耕地碎片化现象。\n\n3.土地节约集约利用水平不高，土地效益有待提升\n\n主要体现在两方面：一方面建设用地与非建设用地空间相互穿插，产业空间与生活空间相互干扰；另一方面土地产出效益有待提升，农用地受碎片化影响，不利于规模化农业、高科技农业发展，总体产出效益不高，工业用地平均容积率为0.7，亩均税收为12.8万元，开发强度和产出强度都有较大提升潜力。\n\n（三）目标任务\n\n加快推动城乡融合发展，破除城乡二元结构，实现高质量发展。解决黄桥街道耕地碎片化、空间无序化、生态环境质量不高等问题，实现黄桥街道“现代精致新城区、美好生态金黄桥”的发展定位。\n\n一是开展农用地整理，共整治农用地面积0.6万亩，通过土地平整与修复，完善灌溉与排水设施、田间道路与农田防护，进而提高耕地质量，解决过去耕地碎片化问题，形成集中连片的高质量耕地空间。\n\n二是开展建设用地整理，包括城乡建设用地增减挂钩复垦、工业用地保护更新两方面共4620.3亩，有序开展农村宅基地、工矿废弃地以及其他低效闲置建设用地整理，优化农村建设用地结构布局，提升农村建设用地使用效益和集约化水平，满足农村新产业新业态融合发展用地需求。\n\n三是开展生态保护修复，按照山水林田湖草系统治理的要求，结合农村人居环境整治等，优化调整生态用地布局，保护和恢复乡村生态功能，维护生物多样性，提高防御自然灾害能力，保持乡村自然景观和农村风貌。\n\n四是注重乡村历史文化保护。重点建设3处历史文化保护工程，包括中心河文化走廊工程、渔桥文化广场和青苔工业文化工程。充分挖掘黄桥街道自然和文化资源，保持其特有的乡土文化，尤其是荷塘文化、渔耕文化、江南水乡文化、乡镇工业文化。\n\n二、主要做法\n\n（一）制度建设探索\n\n为破除制约土地综合整治的体制机制障碍，保障试点工作的顺利开展，黄桥街道积极探索，配套推出了一系列行之有效的改革举措。一是为解决现状村级工业集中区“布局散、污染重、隐患多、亩产低”等问题，通过组建1支专业队伍，借助文献调研、实地勘探、数据分析3类研究方法，综合研判街道全域土地综合整治潜力资源分布、面积等基础信息，同时系统调查了全街道1428家企业，用地性质、厂房质量、企业税收3方面基本现状，创新提出“盘二优二”“退二进三”“退二还一”3类更新模式，为全域土地综合整治作出先行探索。二是坚持党建引领，建立“规划师下乡”制度，积极探索沟通式、陪伴式的乡村规划服务模式，通过实用性村庄规划指导全域土地综合整治试点实施。三是狠抓工业企业资源集约利用综合评价改革落地，设立“红黄牌制度”，将评价结果与企业新建、扩建项目和享受各级财政资金扶持、奖励、补助的资格，以及主要负责人的各类评先评优等全方位结合起来，加大倒逼力度。四是建立“人人参与、人人共建”的良性互动模式，由街道班子成员、机关党员和年轻干部组成先锋服务队，由村“两委”成员和村民组成“老张回收队”助力人居环境整治。\n\n（二）实施模式探索\n\n基于存在的土地利用现实问题，围绕三生空间优化、耕地保护、土地节约集约利用和人居环境改善的目标，以“全域规划、全域设计、全域整治、多措并举”为思路，根据城乡发展需求，将城市和乡村的发展统筹起来，高质量推进全域土地综合整治。\n\n1.坚持“规划引领、生态优先”，谋划全域土地综合整治新蓝 图\n\n深刻把握黄桥街道“半边田园半边城”的天然肌理和历史文脉，在南有虎丘湿地、北有荷塘月色湿地、西有西塘河的基础上，融入城市设计理念，顺势而为把西塘河沿线打造成为贯通南北湿地的绿色走廊，构筑一个围绕东部城镇集中建设区的C形生态保育区，总体呈现“一轴、两带、三心、四片”的现代田园城市新格局。\n\n2.坚持“因地制宜、分类实施”，合理安排生产、生活、生态空间\n\n统筹推进农用地、建设用地、生态保护修复和历史文化保护四类整治工程共25个子项目，通过生态廊道畅通工程构建“三横三纵”的生态体系，通过农用地整理发展观光休闲农业，通过工业用地保护更新建设产业研发社区。\n\n3.坚持“节约集约、协同联动”，确保产业转型发展稳中快进\n\n通过整治实现城镇开发边界外低效工业用地的有序退出， 原本零散分布的工业用地经整合集中分布在产业社区 ， 并统筹空间布局和产业布局。\n\n（三）资金筹措探索\n\n为保障全域土地综合整治工作顺利推进，黄桥街道委托第三方编制了苏州市相城区黄桥街道全域土地综合整治项目可行性研究报告，对全域整治工作开展中的投资估算及融资方案进行了研究，对财务效益、盈利能力、财务生存能力、借款偿还能力等进行了详细分析。拓宽思路，遵循市场经济规律，建立多元化、多渠道的筹措机制，与国家开发银行就全域土地整治项目签订了融资协议，随着试点方案的开展，通过创新实施模式，动员社会资本力量，广泛吸纳相关企业投入到全域土地整治项目。\n\n（四）过程监管探索\n\n为更好地对全域整治试点子项目进行全流程跟踪，黄桥街道积极探索建设全域整治动态监管服务系统，对全域土地综合整治进行全生命周期管理，对各类指标的产生、使用、核销、交易等实现一体化监管。对重点区域、重点工程构建三维模型立体展示，实现展示、审批、监管一张蓝图。启动黄桥街道智慧环保平台，提供全街道水、土、气常态化检测服务。通过遥感影像监测，进行日常变更自主提取变更图斑，包括补充耕地、增减挂钩、土地整治、耕地进出平衡、高标准农田建设、生态修复等全域整治子项目日常管理工作中的地类变化，尤其是耕地流入流出变化的图斑，积极落实耕地“占补平衡”和“进出平衡”，实现耕地总量年度平衡。\n\n三、取得成效\n\n（一）国土空间布局明显优化，实现空间重构\n\n整治前，黄桥空间布局较为混杂，生产、生活、生态空间相互交织，乡村耕地和建设用地碎片化、生态廊道连通不畅的问题较为严重。整治后耕地集中连片分布在C形生态保育区内，原分布零散、不成体系的林地、草地、河流水系、湿地等逐步贯通，蓝绿交织的城乡生态网络格局初步形成。\n\n1.耕地方面\n\n整治前耕地零散分布在黄桥街道全域，整治后耕地地块数由249块减少至226块，平均耕地地块面积由9.7亩增加到15.8亩，实现了耕地数量有增加、质量有提升、布局更加集中连片的新格局。\n\n耕地整治实施前（左）后（右）\n\n2.工业用地方面\n\n整治前零散分布在黄桥街道全域，整治后集中分布在省道S228两侧，用地面积由原来的6300亩下降到3600亩。\n\n工业用地整治实施前（上）后（下）\n\n3.生态用地方面\n\n整治前整体布局较为分散，河道断头浜较多；整治后整体布局较为集中，河道水系基本畅通，与耕地共同形成C字型结构。\n\n（二）经济效益明显提升，实现资源重组\n\n通过农用地整理，耕地由2410亩增加到3560亩，共增加1150亩，新增耕地比例达到47.8%，大大超出了5%新增耕地的比例要求。 同时，在实现耕地集中连片布局的基础上，进一步布局排灌设施，优化田间道路，完善田间防护，开展高标准农田建设，推动农业现代化、智能化发展，实现耕地质量国家利用等别从六等提升至五等，在让“小田”变“大田”的同时，让“大田”变成了良田，有效提升农业经济效益。\n\n通过工业用地保护更新，将原本零散分布的工业用地进行整合，提升容积率，实现“工业上楼”，促进产业用地集约高效利用。按照“产业集中、要素集聚、用地集约”的原则，规划建设“1+2+N”产业承载区，通过主动融入长三角一体化发展，积极抢抓虹桥国际开放枢纽建设等机遇，打造了一批总部经济科创园、苏州智能制造服务产业园、黄桥未来工场、数字金融街区、人工智能算力中心等重大项目。实现了工业用地的减量增容，工业用地容积率由0.7提升至2.5，建筑面积由287万平方米增加到460~640万平方米。原黄桥村电镀园9栋厂房升级为苏州智能制造服务产业园后，纳税额从改造前的不足千万增长至1亿元，黄桥总部经济科创园税收总额连续两年超6000万元。\n\n（三）生态环境明显改善，实现品质重塑\n\n通过土地综合整治，整治“散乱污”企业（作坊）近两千家，新建污水管网12公里，工业源污染治理成效明显。通过河道整治、水系畅通、生态驳岸建设等一系列工程，整治河道共12.56公里，完成东挺河东段、内青台河等12条河道的清淤工作，原有7条黑臭河道全部整治到位，水清河畅岸绿景美的水系网络逐步形成。推进“三横三纵”生态廊道畅通工程（一期），完成生态保护修复516.6亩，实现新增其他园地178.4亩、河流水面75.1亩、其他草地263.1亩，苗木成活率90%以上，草皮植被基本成型。湿地公园荣获2020年国际风景园林师联合会亚非中东地区最高荣誉。\n\n生态空间整治实施前（上）后（下）\n\n四、适用条件和推广前景\n\n黄桥街道全域土地综合整治试点工作经验适用于发达地区有一定经济基础的乡镇，如与城市中心城区经济联系紧密，能够承接城市外溢功能，服务城市能力强，具有一定的区位优势，产业发展能与市县中心城区互补互动、基础设施与市县中心城区互联互通、公共服务共建共享的城郊融合型乡镇；或二三产业强劲，专业化、特色化、规模化特征明显，吸纳劳动力能力强，急需巩固主导产业基础，助推产业创新升级的工贸带动型乡镇。黄桥街道全域土地综合整治是以“规划引领、空间重构”谋划新蓝图，以“节约集约，资源重组”实现节地产出“双提升”，以“分类施策、品质重塑”满足人民日益增长的美好生活需要，是土地综合整治模式的一次迭代升级，对当前全省、全市全域土地综合整治工作具有示范引领作用。\n\n基于国土空间总体规划、实用性村庄规划等法定规划为依据，坚持生态红线不突破、耕地数量不减少和质量有提升、建设用地不增加、农民利益有保障等原则，通过“全域规划、全域设计、全域整治、多措并举”的方式，着力解决当前乡村耕地和建设用地碎片化问题，保障城乡建设和乡村产业融合发展用地，逐步形成农田农地集中连片、建设用地集约集聚、生态环境和谐美丽的国土空间利用格局。\n\n（江苏省自然资源厅推荐）"
  },
  "S02": {
   "heading": "iziran_中国自然资源报：江苏：全域土地综合整治20个国家试点和16个省级示范项目总体进展超70%",
   "date": "2024",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5346043",
   "body": "近日，江苏首个镇级全域土地综合整治国家试点项目——无锡市惠山区洛社镇全域土地综合整治试点项目通过验收。苏州相城黄桥街道、南通如东新店镇等一批试点示范项目已相继进入收尾阶段，苏州吴江区整县域统筹正在全面推进。\n\n自2019年年底自然资源部部署开展全域土地综合整治试点工作以来，江苏按照“试点先行、示范引领、逐步推广”思路，推进20个国家试点和先行启动的16个省级示范项目建设，总体进展超70％，取得阶段性成效。\n\n——耕地集聚规模效应显现。完成农用地整理43．83万亩，建成15．84万亩高标准农田，耕地地块总数减幅11％，地块平均面积增幅24％，100亩以上连片耕地比例由30％上升至40％。\n\n——建设用地利用效率明显提高。完成建设用地整理7．51万亩，建设用地面积减少0．76万亩，腾退低效工业企业590家，其中苏州市黄桥街道工业用地面积由0．63万亩减少至0．36万亩，总部经济科创园税收总额连续两年超6000万元。\n\n——生态环境质量有效改善。已完成生态保护修复3．37万亩，其中河道整治297公里，绿化造林31万棵，湿地修复0．14万亩，生态廊道建设34公里等。\n\n——乡村现代化治理能力显著提升。完成公共空间治理75项，历史文化保护21项。\n\n建湖县高作镇高标准农田整治后现场实景\n\n昆山市张浦镇全域土地整治“乡野硅谷”尚明甸村村景\n\n以苏州黄桥街道为代表的城乡融合模式，通过全域规划、设计、整治，构建“以产业研发片区为中心，南北湿地、西园东城”的空间布局，大幅提升土地利用效率，工业用地容积率由0．7提升至2．5，增幅257％；实现耕地集中连片，净增耕地1150亩，地块平均面积由9．7亩增加至15．8亩，增幅63％，耕地质量有所提升；打造“三横三纵”生态廊道，畅通12条河道水系，形成了　蓝绿交织的城乡生态网络。\n\n以建湖高作镇为代表的现代高效农业模式，聚焦提高耕地集中连片度、改造中低产田、提升农业机械化作业率，实现“小田变大田、大田变良田”，耕地地块数减少22．9％，初步建成3个万亩优质稻麦种植基地，亩均增产近200斤、增收达300元。\n\n以如东新店镇为代表的农村一二三产业融合模式，着力推动村庄集聚、耕地集中连片，建成千亩以上连片高标准农田4块、千亩以下百亩以上26块；促进土地流转与规模化经营，村集体新增年收入700余万元；导入稻米加工等附加产业，每年村集体可新增租金收入200万元。\n\n以昆山张浦镇为代表的特色文化保护模式，在推进农业园区、工业集中区优化整治和村庄环境提升的同时，实施赵陵山新石器时代遗址保护，重塑了历史文化景观；活化利用尚明甸传统村落，入选第六批江苏省传统村落，再现了传统江南圩田景观风貌。\n\n除国家明确的允许永久基本农田调整和增减挂钩节余指标省内流转两项政策外，江苏还增加了4项支持政策：依申请下达试点示范项目所需建设用地流量指标；鼓励低效建设用地腾退为生态用地；产生的城乡建设用地增减挂钩指标、补充耕地指标在优先满足乡村发展用地需求后，节余指标可在省内交易，所得资金用于支持乡村振兴；省财政统筹试点地区一定规模的补充耕地指标作为启动资金支持项目建设等。目前，省财政已支持15．96亿元。\n\n积极拓展资金筹措渠道，鼓励社会资本参与全域土地综合整治，形成了“投资—建设—运营”一体化、工业反哺农业、自主开发运营等多种投入机制，与省农发行签订“政策性金融资金参与生态保护修复”战略合作协议，撬动金融资本投入全域土地综合整治。\n\n下一步，江苏将立足各地资源禀赋、资金保障力度，优选空间布局优化、耕地连片整治、资源盘活和生态修复提升潜力足、农村一二三产业融合发展需求大的地区，率先启动实施。会同农业农村等部门，加大全域土地综合整治与高标准农田建设统筹推进力度。积极争取财政部门支持，加大财政投入力度，做好全面推开的政策制度保障。"
  },
  "S03": {
   "heading": "zrzy.jiangsu.gov.cn_江苏省自然资源厅：苏州市黄桥街道全域土地综合整治国家试点通过综合验收",
   "date": "2024-10",
   "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
   "url": "https://zrzy.jiangsu.gov.cn/xwzx/xwbb/2024/10/15141242565782.html",
   "body": "近日，苏州市相城区黄桥街道全域土地综合整治国家试点圆满完成各项建设任务，顺利通过了综合验收，打造了城乡融合发展 “ 黄桥样板 ” 。\n\n该试点全国首个获批，覆盖黄桥街道全域，实施期限 3 年，总投资约 76 亿元，统筹开展农用地整治、建设用地整治、生态保护修复、历史文化保护 4 类工程 21 个子项目，着力破解土地开发强度大、耕地碎片化、产业用地低效、生态格局不成体系等问题，被自然资源部生态修复司列为 “ 我为群众办实事 ” 联系点，入选全国首批典型案例，并作为城乡融合治理模式的唯一代表在全国经验交流会议上作书面交流。\n\n该试点实施后，取得了显著的生态效益、经济效益和社会效益，实现了四个喜人变化。 一是空间布局明显优化。 新增耕地 1150 亩，耕地斑块数由 285 块减少到 94 块，集中连片度大大提高。 6300 亩分散布局的工业用地整合缩减至 3600 亩。贯通了分布零散、不成体系的林地、草地、河流水系、湿地等，形成蓝绿交织的城乡生态网络格局。 二是经济效益明显提升。 在工业用地总面积下降的情况下，载体空间由 287 万平方米逐步提升至 640 万平方米，容积率从 0.7 提升到 2.5 ，工业用地亩均税收由 12.8 万提升至 100 万。 三是生态环境明显改善。 整治 “ 散乱污 ” 企业近 2000 家，新建污水管网 12 公里 ，整治河道 12.56 公里 ，建成步道 10.7 公里 ，串联南北湿地和西部田园片区。 四是乡村文化明显传承。 重塑渔文化、桥文化等文化资源，打造 “ 黄桥街道手绘旅游地图 ” 等特色品牌， “ 黄桥粉青宴 ” 入选苏州市非物质文化遗产。\n\n近期，自然资源部出台深入推进全域整治工作的意见，明确了允许 “ 三区三线 ” 优化调整、鼓励低效建设用地盘活利用、支持探索整县域和跨乡镇整治等支持政策。相城区抢抓机遇、乘势而上，拟开展整县域全域整治，目前已完成总体实施方案编制。下一步，省厅将认真落实自然资源部工作要求，积极指导相城区总结黄桥街道单乡镇试点经验，用足用好政策，加快修改完善总体实施方案，明确实施单元，有序启动实施，进一步优化国土空间布局，促进城乡要素双向流动，更大力度赋能乡村振兴。（厅生态修复处）"
  },
  "S04": {
   "heading": "zrzy.jiangsu.gov.cn_江苏省自然资源厅：江苏省苏州市相城区黄桥街道全域土地综合整治试点",
   "date": "2025-04-17",
   "source": "zrzy.jiangsu.gov.cn_江苏省自然资源厅",
   "url": "https://zrzy.jiangsu.gov.cn/xwzx/ztjc/d56gsjdqr/stzlxf/2025/04/17114515103695.html",
   "body": "江苏省苏州市相城区黄桥街道全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。方案于2022年2月通过自然资源部备案，是全国首个通过省级审查和部级备案的方案。试点作为进一步推动城乡融合发展和产业转型升级，实现高质量发展目标的工作路径和实施平台，以“规划引领、空间重构”谋划新蓝图，以“集约节约，资源重组”实现节地产出“双提升”，以“分类施策、品质重塑”满足人民日益增长的美好生活需要，是土地综合整治模式的一次迭代升级，更是推进中国式现代化国土空间治理的实践创新。 黄桥街道以问题为导向，开展全域土地综合整治。通过农用地整治促进黄桥街道耕地数量有所提升、质量显著提升、空间布局更加集中连片，适应现代化农业发展需求；通过建设用地整治优化城乡建设空间布局，使黄桥街道城乡发展更加融合，建设用地利用更加集约节约高效；通过生态保护修复提升全域生态环境质量，提升水生态、构建完善的生态廊道，使黄桥街道更加宜居宜业宜游；通过公共空间治理彰显黄桥街道江南水乡、鱼耕文化，塑造新时代鱼米之乡生态文明风貌。 试点方案范围为黄桥街道全域，面积共计23.08平方公里，方案实施期三年，项目总投资约95.6亿元。取得以下成效： （一）国土空间布局明显优化，实现空间重构 整治前，黄桥空间布局较为混杂，生产、生活、生态空间相互交织，乡村耕地和建设用地碎片化、生态通廊联系不畅较为严重。整治后耕地集中连片分布在C形生态保育区内，原分布零散、不成体系的林地、草地、河流水系、湿地等逐步贯通，蓝绿交织的城乡生态网络格局初步形成。\n\n黄桥街道国土空间利用现状和规划比对图\n\n1.耕地方面。整治前耕地零散分布在黄桥街道全域，平均斑块面积10.5亩；整治后耕地集中分布于西侧C型生态保育区内，平均斑块面积58亩。5亩以下耕地图斑由171块下降到63块，实现了耕地数量有增加、质量有提升、布局更加集中连片。\n\n黄桥街道耕地布局实施前后比对图\n\n黄桥街道耕地现状实施前后比对照片1\n\n黄桥街道耕地现状实施前后比对照片2\n\n集中分布在一基地一社区，集中分布在S228两侧，用地面积由原来的6300亩下降到3600亩。\n\n黄桥街道工业用地布局实施前后比对图\n\n黄桥街道工业用地现状实施前后比对照片\n\n3.生态用地方面。整治前整体布局较为分散，河道断头浜较多；整治后整体布局较为集中，河道水系基本畅通，与耕地共同形成C字型结构。\n\n黄桥街道生态空间布局实施前后比对图\n\n黄桥街道生态空间现状实施前后比对照片\n\n（二）经济效益明显提升，实现资源重组 1.通过农用地整理，耕地由2410亩增加到4750亩，共增加2340亩，新增耕地比例达到97%，大大超出了5%新增耕地的比例要求。同时，在实现耕地集中连片布局的基础上，进一步布局排灌设施，优化田间道路，完善田间防护，开展高标准农田建设，推动农业现代化、智能化发展，实现耕地质量国家利用等别从6等提升至5等，在让小田变大田的同时，让大田变成了良田，有效提升农业经济效益。 2.通过工业用地保护更新，将原本零散分布的工业用地进行整合，提升容积率，实现“工业上楼”，促进产业用地集约高效利用。按照“产业集中、要素集聚、用地集约”的原则，规划建设“1+2+N”产业承载区，通过主动融入长三角一体化发展，积极抢抓虹桥国际开放枢纽建设等机遇，打造了一批总部经济科创园、苏州智能制造服务产业园、黄桥未来工场、数字金融街区、人工智能算力中心等重大项目。实现了工业用地的减量增容，工业用地容积率由0.7提升至2.5，建筑面积由287万方增加到460-640万方。原黄桥村电镀园9栋厂房升级为苏州智能制造服务产业园后，纳税额从改造前的不足千万增长至1亿元，黄桥总部经济科创园税收总额连续两年超6000万元。 （三）生态环境明显改善，实现品质重塑 通过土地综合整治，整治“散乱污”企业（作坊）近两千家，新建污水管网12公里，工业源污染治理成效明显。通过河道整治、水系畅通、生态驳岸建设等一系列工程，整治河道共12.56公里，完成东挺河东段、内青台河等12条河道的清淤工作，原有7条黑臭河道全部整治到位，水清河畅岸绿景美的水系网络逐步形成。推进“三横三纵”生态廊道畅通工程（一期），完成生态保护修复516.6亩，实现新增其他园地178.4亩、河流水面75.1亩、其他草地263.1亩，苗木成活率90%以上，草皮植被基本成型。湿地公园荣获2020年国际风景园林师联合会亚非中东地区最高荣誉。"
  },
  "S05": {
   "heading": "szxc.gov.cn_苏州市相城区政府：相城资规分局 | 黄桥街道全域土地综合整治国家试点项目通过综合验收",
   "date": "2024-09-26",
   "source": "szxc.gov.cn_苏州市相城区政府",
   "url": "http://www.szxc.gov.cn/szxcrmzf/bmdt/202409/c4d055b92b2f4af6bf9af5e1247d698c.shtml",
   "body": "相城资规分局 | 黄桥街道全域土地综合整治国家试点项目通过综合验收\n\n来源： 苏州市相城区人民政府 发布日期： 2024-09-26 14:49 访问量： 字体： 大 中 小\n\n近日，相城区黄桥街道全域土地综合整治综合验收会在黄桥街道顺利召开。省自然资源厅生态修复处、市自然资源和规划局、市生态环境局、市水务局、市农业农村局、市财政局等部门相关负责人和专家出席会议。\n\n2021 年，黄桥街道全域土地综合整治试点启动， 2022 年 2 月，该项目成为全国首个获得自然资源部备案批 复的国家试点。经过三年的实施，按照实施方案制定的各项目标均已达成，相关子项目均已完成并顺利通过验收。\n\n本轮试点覆盖黄桥街道全域 2308.2583 公顷，统筹实施了包括农用地整治、建设用地整治、乡村生态保护修复、乡村历史文化保护共四类工程 21 个子项目。通过本轮全域土地综合整治，黄桥街道发生了 “ 四个明显 ” 的喜人变化，为全省乃至全国全域整治提供了可复制、可推广的经验。\n\n空间布局明显 “ 提优 ” 。 经过整治，新增耕地 1150 亩，总量达到 3560 亩，集中连片分布在 C 形生态保育区；原本零散分布的 6300 亩工业用地整合成 3600 亩，集中分布在产业研发片区；原分布零散、不成体系的林地、草地、河流水系、湿地等逐步贯通，蓝绿交织的城乡生态网络格局已然形成。\n\n经济效益明显 “ 提质 ” 。 在工业用地总面积下降的情况下，载体空间总面积由 287 万平方米逐步提升至 640 万平方米，容积率从原来的平均 0.7 提升到准入 2.5 ，打造了总部经济科创园、苏州智能制造服务产业园、黄桥未来工场、数字金融街区、人工智能算力中心等重大项目，亩均税收由原来的 12.8 万提升至准入 100 万，实现产业用地发展集约高效利用。\n\n生态环境明显 “ 提美 ” 。 通过生态修复、水系畅通、生态驳岸建设等工程，整治 “ 散乱污 ” 企业近 2000 家，新建污水管网 12 公里，整治河道 12.56 公里，形成水清河畅岸绿景美的水系网络。建成 10.7 公里步道，串联南北湿地和西部田园片区，发展现代农业，实现农耕文明和乡村景观文化的有机传承。\n\n群众获得感明显 “ 提升 ” 。 通过全域土地综合整治，新建道路、停车场、公共自行车站点等，形成内外畅通交通格局。先后启用黄桥实验小学二期、黄桥中学新校区等教育服务设施，新增荷馨苑社区日间照料中心等配套养老设施，促进公共服务配套提质升档。建成安置房 2081 套，新增观光休闲农业及产业研发 3000 个工作岗位，确保动迁居民安居乐业。\n\n验收人员先后来到黄桥街道展示中心、梅花园青苔工业设计村、未来工场等地，详细听取了项目规划和实施情况，实地查看农用地整治、建设用地整治、公共空间治理和历史文化保护的成果成效。验收组还查阅了黄桥全域土地综合整治子项目验收材料，对项目完成度给予肯定并一致同意通过综合验收。（任新宇）"
  }
 },
 "05": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨浙江杭州径山镇：激活乡村资源 重塑禅茶意境",
   "date": "2024-07-23",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5333037",
   "body": "浙江省杭州市余杭区是杭州市主城区之一，也是浙江高质量发展建设共同富裕示范区第二批试点地区之一。径山镇位于余杭区西北部，属天目山余脉，总面积157.08平方公里，呈现七山一水二分田的典型山区丘陵地貌，交通区位优势显著、历史文化与自然风光资源丰厚，享有“禅茶文化摇篮、休闲旅游胜地”的美誉。\n\n2021年，浙江省杭州市余杭区径山镇全域土地综合整治项目被自然资源部部署为乡镇全域土地综合整治试点。试点遵循国土空间规划定格局、全域土地整治优布局的系统思维，聚焦各村特色风貌，合理调整耕地、林地、园地等农业生产空间布局，利用垦造耕地、保护耕地所获奖补资金，以“众人的事情由众人商量”为原则，投入到农用地优化提升、村庄优化提升、乡村产业发展、生态修复等方面。\n\n试点中，小古城村用“一棵樟树”激活村民共建共治共享的热情，描绘了以“土地综合整治+基层整治”为核心的高水平乡村治理新图景；径山村用“一片叶子”提升农文旅融合禅茶大产业，打通了生态修复后绿水青山与金山银山的转换通道；漕桥村用“一方良田”实现了耕地保护整、种、管，牢牢端紧中国饭碗……整体展现了以全域土地综合整治为引擎，打造乡村共富基本单元的地方实践样本。\n\n规划引领，描绘共富图景\n\n试点项目区村庄布局分散，生产、生活、生态空间零散交错，永久基本农田、高标准农田和粮食功能区套合比例低，耕地碎片化图斑总数较大，以茶叶种植为基础的农文旅等特色产业布局分散、用地紧缺。试点充分发挥全域土地综合整治的平台作用，将全域土地综合整治融入地区发展规划战略，与《大径山乡村共同体计划管理办法》衔接，以径山南、径山北单元详细规划编制工作紧密联动村庄建设规划，聚焦山上、田间、路边零散农居点、13个村庄风貌特色和发展方向，既合理调整耕地、林地、园地等农业生产空间布局，同时也在规划的起点上避免了村庄同质化、千村一面等问题。\n\n在规划引领下，项目区各村以乡村运营小组为抓手，实现运营前置、需求定制，对各村场景设计、施工建设、商业业态进行优化整合，以景观资源和人文脉络塑造发展特色。在以小古城为代表的村落，村党支部书记带领村民在樟树下讨论通过土地整治（复垦）项目实施方案，并通过土地整治项目为村里争取资金1.6亿元，充分保障了村庄规划的落地实施。\n\n小古城村村民在樟树下议事。\n\n试点期间，径山镇编制了径山南、径山北详细规划，做细颗粒度到具体的村庄建设规划，对13个村庄进行总体布局，避免各村风貌特色和功能的同质化、重复建设等问题，试点区域呈现特色突出、功能互补、资源互动、要素互通、时序共享的整体布局。实现了耕地连片套合，区域耕地从16443亩增加至26443亩，永久基本农田面积增加至21599亩，3亩以下碎片化图斑数减少1103个，永久基本农田、高标准农田、粮食功能区套合比例100%，同步实现耕地质量、粮食产能、农民收益“三提高”，粮食年增产379万公斤，土地亩均租金收益从800元/亩提高至1500元/亩。\n\n制度建设，守好共富红线\n\n试点组建余杭区全域土地综合整治专班、余杭生态恢复工作小组等，协同农业农村、住建、文旅等多部门，联动属地乡镇，聚力开展土壤改良、土地平整、灌溉排水、新修田间道路等工作。针对耕地布局碎片化的情况，跳出耕地垦造的问题层面，锚定“田成方、渠成网、路相通、沟相连”的现代化农业新格局目标，开展耕地整理工作。同时，细化“区—乡—村”三级田长责任体系，运用“耕地智保”场景，嵌合铁塔视联技防，细化耕地保护人田对应，责任落实到人、到地块，进一步构建全天候、全覆盖、无死角的耕地保护数字场景。结合大综合一体化执法改革和掌上执法机制，完善耕地非农化、非粮化问题图斑线索信息报送—移交—闭环处置机制，开展违法占用耕地“零新增”专项行动。\n\n整治后的径山镇万亩方项目。\n\n坚持群众利益底线，实行“众人的事由众人商量”基层民主自治机制，突出“土地综合整治+基层治理”。通过现场踏勘、入户访谈、会议讨论等多种方式，准确把握乡村风貌、地域特征、农民意愿，充分吸收群众智慧因地制宜编制村庄规划，统一规范农房设计、公服配套、景观风貌等标准，减少基础设施配套重复投入等过程性浪费。小古城村10个土地整治（复垦）项目、10个子项目实施中，具体项目要不要实施、耕地功能恢复项目如何清表、村庄风貌如何管控、农居围墙如何整治……各项问题都由村民提、评、议，形成共商、共建、共治、共享促共富的良好氛围，将习近平生态文明思想、耕地保护意识、基层民主自治进一步融入新时代乡村文脉。\n\n环境整治，守护共富之美\n\n试点系统开展废弃矿山、河流、农田、湖泊、小微水体、绿道周边环境、水源涵养地等治理提升，修复废弃矿区生态环境，建设美丽清洁田园，全面推进大径山国家乡村公园“全域化、大旅游”战略落地，进一步厚植大径山范围生态优势。\n\n同时，提升乡村人居环境，打造精品共富单元。以增存挂钩盘活存量建设用地，推进村庄建设用地整治，以大田农户、散居农户为重点，实现居民集中安置；结合城乡建设用地增减挂钩，对废弃农村宅基地、废弃工矿地以及其他低效建设用地有序复垦，为乡村文体、交通、养老等基础设施建设和公共环境改善腾挪空间，布局、构筑生产集约高效、生活质量优异、生态空间宜人的共同富裕现代化基本单元。\n\n整治后的湖泊。\n\n试点实施后，项目区实现了村、山、路、河生态修复提升全覆盖，重点实施了径山镇原风沙岭石矿（废弃）生态环境综合整治、苕溪水系环境治理，开展了大径山绿道、吴山公园周边环境综合整治等重点区域周边环境提升改造项目19个，小微水体清淤整治、河道水域和山体边坡等治理项目13个。农村人居环境和旅游区域周边环境持续优化，生态环境和生物多样性得到显著提升，绿水青山向金山银山转换的通道得以拓宽。\n\n产业振兴，擦亮共富底色\n\n夯实耕保红线，端牢中国饭碗。试点在区级层面投入资金1亿元，在径山镇漕桥村、求是村、麻车头村等实施永久基本农田集中连片整治项目，实施耕地功能恢复项目10个，以耕地资源集中助力粮食生产集中、产量提升。匹配数亿元省、市级奖补激励资金，以耕地下山、林地上山、多田套合比例提升为抓手，在实现耕地布局、品质、规模三提升的前提下，为城市发展置换空间。\n\n盘活低效用地，塑造发展新优势。试点以土地综合整治为纽带，有序推进散乱分布的工业企业入园集聚、设施更新，释放存量建设用地，为乡村振兴拓展产业空间，加快乡村发展“资金—人口—土地—产业”要素耦合，实现一二三产业融合发展；优化地区特色农产品种植、茶产业链整体布局，为禅茶文旅产业发展提供土地资源要素保障。\n\n整治后的低效建设用地。\n\n效益整合集聚，促进共同富裕。试点通过集中搬迁并安置径山寺等重点区块周边散点农户，成功打造禅茶第一村，实现了村落集聚、要素集中、风貌协调；整合集中增减挂钩指标，鼓励各村社抱团联合开发、平台牵头飞地抱团；优化连片永久基本农田布局，支撑现代农业高质量发展，实现粮食产量、村集体、村民三增收。\n\n试点期间，实施低效工业和城镇低效用地整治项目30个，盘活低效用地1031亩、存量建设用地500亩，用于民宿、镇村公益配套设施等布局建设。集中安置径山村农户117户、茶叶生产企业5家，开办民宿42家，茶产业、茶文化、茶科技三茶融合的业态不断进化，建成500亩以上现代农业园区23个，径山茶整体品牌价值达27亿余元。2023年上半年，游客量达270万人，实现旅游收入2.6亿元。\n\n试点案例适用于推动具有一定产业、生态基础，存在空间布局无序、土地资源碎片化、资源利用低效化等问题的山区集镇农村，实现内涵式发展，建设共富基本单元。 项目充分发挥全域土地综合整治的平台作用，以系统思维将国土空间规划、区域发展规划融合，并在区域详细规划编制中细致体现各村主体功能与特质，从而统筹优化区域农业、生态、乡村布局。 具体落地过程中，以土地资源整合连片为关键，以垦造耕地、耕地保护奖补资金作为抓手，解决了农村“地、钱、人”从何而来的关键问题，实现了重点攻坚和协同治理同步、外部约束和内生动力同调、全域高品质生态环境支撑高质量发展的良好格局。\n\n该案例借助全域土地综合整治，跳出一域谋划地区总体发展，实现了跨部门团结协作；用好“众人的事情由众人商量”桥梁纽带，实践了基层组织广泛动员、多元参与、民主协商，为和美乡村的生态文化增色。 项目提供了迭代升级新时代“千万工程”的一种模式，有效探索了以乡镇为单元进行全域土地综合整治，实现村落集聚、要素集中、风貌协调、产业振兴、乡风和美的地区总体发展路径，为打造绿色发展高地，建设美丽乡村、美丽中国提供了参考。\n\n（浙江省自然资源厅推荐）"
  },
  "S03": {
   "heading": "zrzyt.zj.gov.cn_浙江省自然资源厅：共“富”自然资源之约丨杭州市余杭区径山镇以土地综合整治赋能共同富裕",
   "date": "2024-04-15",
   "source": "zrzyt.zj.gov.cn_浙江省自然资源厅",
   "url": "https://zrzyt.zj.gov.cn/art/2024/4/15/art_1229619365_59027487.html",
   "body": "共“富”自然资源之约丨杭州市余杭区径山镇以土地综合整治留住乡村记忆\n\n信息来源：\n 浙江省自然资源厅国土空间生态修复处、杭州市规划和自然资源局余杭分局\n\n发布日期:\n 2024-04-15 16:57\n\n在浙江大地，一个个各具特色的土地综合整治共同富裕基本单位，从空间适配的“最优解”入手，串联起“山水林田湖草”综合治理和“产城人文景生”融合发展的和美画卷。\n\n用一句“众人的事情由众人商量”解出了全社会的最大公约数、用“一面墙”打造出美丽乡村建设的起点、用“一片叶”舞动起“种茶、制茶、卖茶、茶旅游、茶食品”的大产业……这是杭州市余杭区径山镇以美丽乡村留住美好乡愁、人与自然和谐共生的真实写照。\n\n在这片美丽绽放的土地背后，是径山镇以土地综合整治为空间载体和行动抓手，将“古朴”与“现代”紧紧相融，构筑了一个“农村生产集约高效、农居生活特色传承、生态空间自然宜人”的共同富裕现代化基本单元新样本。\n\n顺时态，精准描绘共富单元发展蓝图\n\n划分了“一轴三区”空间格局，以“全域联动发展轴”串联起禅茶文化体验区、禅城慢享休闲区和禅耕农旅示范区三大主体区块，并辅以和美乡村、特色农品种植区、高效农业生产区、田园农事体验区、生态功能保障区、水库及景观环境保护区、茶产业发展区等多个共富型整治单元。\n\n塑形态，科学优化共富单元空间布局\n\n一手抓“保红线”，率先建立田长制，守好“饭碗田”，推进“生态退耕、清洁田园”专项行动；探索“低碳试验田”，为农田装上了“智慧大脑”，打造了1个面积达1.57万亩的“万亩方”项目；一手抓“拓空间”，落实最严格的节约集约用地制度，多维度盘活利用存量土地360余亩，以村集体收购进行出租的方式盘活闲置农户房屋23套，增加村集体收益68万元，增加农户收益173万元。\n\n保生态，深耕厚植共富单元绿色底色\n\n径山镇以村、山、路、河生态修复提升为重点，让废弃矿山还绿为宝，让苕溪水系重归清澈。大径山绿道环绕其中，“生态绿”持续点亮乡村。景观资源和人文脉络紧密串联，“禅茶、山水、田园、竹林、花海、素食、民宿”交相辉映，一个以“禅茶体验”为特色的国家级乡村旅游景区绽放出夺目光芒。\n\n强业态，奋力驱动共富单元发展引擎\n\n通过“土地整治+”延长产业链和价值链，改田成景、串田连路、连点成线，“茶产业”“茶文化”“茶科技”三茶融合的业态不断进化。近年来，已建成500亩以上现代农业园区23个，涌现出“径灵子”“沐禾·前溪”等农业品牌IP，“陆羽”“茶小僧”等文创系列产品，“径山茶”整体品牌价值已达27亿元。形成兰花坪茶叶基地、径山花海、百果园农庄、农耕博览园等乡村旅游新形态。据测算，通过土地综合整治，集体经济组织收入增加约500万元，农民工资性收入增长24%，财产性收入增长33%。\n\n促文态，全面推进共富单元文脉传承\n\n将浓郁的乡土气息植入千家万户，用围墙的“降围透绿”提升全村秀色，用老宅的“特色焕新”留住乡村记忆。随处可见的古朴景墙和特色花镜，营造了“一户一处景、一路一幅画”的大美格局，在风貌塑造上传承乡村文脉之形；持续打造“11113”文化服务矩阵、“5181金色年华”养老服务等品牌，构建围绕古城慢享、漫游的惠民服务网络，在民生福祉中留住乡村文脉之魂。\n\n【打印本页】 【关闭本页】"
  },
  "S04": {
   "heading": "hangzhou.gov.cn_杭州市政府：杭州这两个项目获全国推荐",
   "date": "2024-07-01",
   "source": "hangzhou.gov.cn_杭州市政府",
   "url": "https://www.hangzhou.gov.cn/art/2024/7/1/art_812262_59099407.html",
   "body": "杭州这两个项目获全国推荐\n\n余杭径山镇全域土地综合整治项目区。\n\n日前，自然资源部公布全国首批《全域土地综合整治试点典型案例》和《节地技术和节地模式推荐目录（第四批）》，向全国推荐推广可借鉴学习的优秀做法。来自杭州市余杭区的径山镇土地综合整治项目及余杭区高铁枢纽综合体项目节地模式分别入选典型案例和推荐目录。\n\n为学习运用浙江“千万工程”经验，2019年，自然资源部在全国部署启动了全域土地综合整治试点工作。试点开展以来，共支持25个省份实施了356个以乡镇为单元的试点。本次是自然资源部首次公布全域土地综合整治试点典型案例，含径山镇土地综合整治项目在内共收录15个案例，均结合本地实际需求、资源禀赋，在组织模式、规划衔接、实施管理、验收与后期管护、资金保障等方面形成了一系列可推广、可复制的宝贵经验。\n\n“径山镇土地综合整治项目以小古城村、径山村、漕桥村等村庄为核心片区，坚持‘以人为本’发展理念，对13个村庄风貌特色和发展方向总体布局。”市规划和自然资源局余杭分局相关负责人介绍，通过科学合理规划，综合运用占补平衡、增减挂钩等政策工具，统筹实施农用地整理、建设用地整理、生态保护修复、历史文化保护等工作，余杭径山镇全域土地综合整治项目全面优化了项目区内的农村国土空间布局，大大提升了乡村民生福祉和群众获得感，形成了以“土地综合整治+基层治理”为核心的特色整治模式。\n\n今年1月，自然资源部启动第四批节地技术和节地模式案例征集工作，聚焦“用存量换增量”“用地下换地上”“用资金、技术、数据换空间”，共评选出38个典型案例。\n\n此次推荐的余杭区高铁枢纽综合体项目坚持“TOD发展”理念，将高铁枢纽场站用地及周边用地统一规划，实行地上地下空间一体化设计、一体化开发、一体化建设，通过规划引领，实现站城融合体系，探索分层供应与确权，实现多权属、多维空间、立体集合开发，充分利用站房雨棚上方空间，设置全国首个新建高铁站TOD上盖物业，在同一用地空间上增加了约5万平方米的建筑体量，以强度换空间，全面提升了土地开发强度和土地利用效率。\n\n记者获悉，杭州已先后有拱墅区密渡桥路井筒式立体停车库节地技术、上城区七堡杨柳郡地铁上盖、临平区净水厂和此次的余杭区高铁枢纽综合体项目等4个项目入选自然资源部节地技术和节地模式推荐目录。"
  },
  "S05": {
   "heading": "yuhang.gov.cn_杭州市余杭区政府：杭州市规划和自然资源局余杭分局2024年法治政府建设年度报告",
   "date": "2025-03-26",
   "source": "yuhang.gov.cn_杭州市余杭区政府",
   "url": "https://www.yuhang.gov.cn/art/2025/3/26/art_1229178802_4341095.html",
   "body": "> 政务公开（资源库） > 部门信息公开目录 > 市规划和自然资源局余杭分局 > 行政执法公开 > 法治政府建设报告和工作要求\n\n002510936/2025-01642\n\n市规划和自然资源局余杭分局\n\n杭州市规划和自然资源局余杭分局2024年法治政府建设年度报告\n\n2024年是“八五”法治宣传教育的重要一年。在区委、区政府和上级部门的正确领导下，我局紧紧围绕全区中心工作，深入贯彻落实《关于印发2024年杭州市余杭区普法依法治理工作要点的通知 》（余普法办〔2024〕1号）等文件精神，巩固完善权责明确、高效科学、依法行政的规划和自然资源管理法治体系，扎扎实实地开展依法行政工作，有效推动法治政府建设，为全区规划和自然资源工作提供了坚实的法治保障。\n\n一、2024年度推进法治政府建设的主要举措和成效\n\n（一）依法履职尽责，助力高质量发展\n\n1.科学编制，规划引领绘蓝图。《杭州市余杭区国土空间总体规划（2021-2035）》获省政府批复，明确余杭城市定位和发展目标；5个乡镇级总规获市政府批复，为各镇特色发展明确了路径；22个详细规划单元获批19个，为各类开发建设活动有提供了规划指引。成功举办“打开新中心”杭州城市重要新中心发展成果展，向社会各界充分展现了新中心规划建设成果，活动吸引超8万人参与，央广网、人民日报等重要媒体广泛报道。\n\n2.聚焦民生，高效服务创标杆。2024年市规划资源局余杭分局继续做好服务保障工作。在不动产登记方面，开通长三角区域“跨省通办”，办理业务2万余件，受益群众超3万人；实现高频业务全流程、无纸化、不见面办理，网办（掌办）率居全市第一；优化“带押过户”服务模式，推动由个人业务向企业业务、由住宅类向工业商业类业务拓展。不动产登记服务中心获全国便民利民窗口建设成效显著单位。在项目审批方面，通过提前审查、过程补件、并联审批等方式，以“店小二”“保姆式”服务，推进工业用地“三证齐发”，实现余杭区首个商业项目“拿地即开工”。在地灾防治方面，开展全区汛前地质灾害风险隐患大排查，累计参与巡查1200余人次，应急处置地质灾害险情12起，全年地质安全领域“零伤亡”。梅汛及台风期间累计转移群众436户1970人，坚定守护群众生命财产安全。\n\n3.多措并举，资源保护筑屏障。积极推进土地综合整治以及“百千万”永久基本农田集中连片整治项目，2024年完成4个土地综合整治项目，径山镇土地综合整治项目入选全国首批15个全域土地综合整治试点典型案例，完成“百千万”永久基本农田集中连片整治2.1万亩。常态化开展自然资源卫片执法工作，上级下发违法用地图斑整改率100%，实现违法占用耕地动态清零；严格整改自然资源例行督察反馈问题，完成问题整改26宗。\n\n（二）规范权力运行，提升依法行政水平\n\n1.强化理论学习。2024年组织法治培训12轮次，聚焦《行政复议法》、《浙江省国土空间规划条例》等政策法规开展学习，提高全系统干部职工运用法治思维和法治方式解决问题的能力，邀请法律从业人员开展案例培训，提升依法行政的理论水平。\n\n2.强化公正执法。加强行政执法公示、执法全过程记录、重大行政执法决定法制审核“三项制度”的贯彻落实，严格执行《自然资源行政处罚办法》明确的案件查处流程以及上级制定的行政处罚裁量基准，并做好处罚结果网上公示。\n\n3.强化全程监督。深入贯彻落实“双随机”抽查监管制度，2024年开展“双随机”检查54次，发现问题整改率100%，有效巩固依法行政成果。\n\n（三）聚焦源头治理，提高信访化解实绩\n\n1.依法公开政府信息。2024年共办理信息公开537件，其中协助上级回复信息公开申请263件。2024年全年无信息公开败诉败复案件发生，信息公开工作水平居系统前列。\n\n2.依法做好复议诉讼。对于疑难复杂案件，及时组织被诉科室和顾问律师进行法律论证，寻求最佳应对方案，最大限度地规避败诉风险。通过与相对人沟通、协商、谈判，采取民事、行政等多种举措，积极主动化解行政争议。2024年全年共办理行政诉讼、复议案件36件（诉讼20件、复议16件），未发生败诉和败复案件；负责人出庭4次，负责人出庭率达100%；积极主动化解行政争议7件。\n\n3.做好信访调处工作。完成第三轮中央环保督察信访件57件，其中行业主管单位办理5件，协办52件。对分局负责牵头督导销号的7件信访件，认真验收把关，及时组织销号。\n\n完成日常信访件1224件，其中公开电话686件、来信19件、来访12件、网信507件，2024年全年信访事项办理结果抽查情况晾晒中，未有办理不规范、不到位、群众不满意事项上榜，信访办理质效持续向好。\n\n二、2024年度推进法治政府建设存在的不足和原因\n\n（一）理论学习深度有待提升。工作中还存在“重业务、轻理论”、“老经验”、“老办法”思想，学习研讨时学议结合的程度不够深入，在学懂、弄通、做实上存在一定差距，学以致用、推动工作成效也不够明显；“向困难叫板、向问题开刀、向矛盾挑战”的勇气不足，存在畏难情绪，解决问题能力不足。\n\n（二）法治宣传渠道有待拓宽。随着社会的发展，人民群众对行政行为的规范性、及时性、公平性的要求日益严格，“最多跑一次”等便民改革对实效性、便捷性提出了更高的要求。我局与群众面对面的宣传工作主要集中在重要时间节点，宣传渠道以传统渠道为主，政策解读不够生动活泼，对群众关注的热点问题回应不足，普法宣传重点不突出。\n\n三、党政主要负责人履行推进法治建设第一责任人职责，加强法治政府建设的有关情况\n\n分局党政主要负责人高度重视依法行政工作，坚持以习近平法治思想为统领，严格按照上级关于法治政府建设的要求，加强党对法治建设的领导，深化规划资源领域法治建设，定期听取有关工作汇报及时研究，做到对法治建设重要工作亲自部署、重大问题亲自过问、重点环节亲自协调、重要任务亲自督办，切实将法治建设与规划资源工作同部署、同推进、同督促，推动全系统党员干部依法行政、依法办事的法治氛围。\n\n四、2025年度推进法治政府建设的主要安排\n\n（一）完善依法行政基础建设。坚持领导干部学法机制、工作人员法律知识学习培训长效机制，定期组织法律讲座、法律法规测试，加深干部职工对法律法规的理解和运用，把法治精神贯穿于规划和自然资源管理的各个环节。严格落实行政执法“三项制度”各项要求，继续以行政执法案卷评查、负责人出庭、科室负责人代理行政案件、工作人员参加庭审旁听，败诉案件分析等具体工作举措为抓手，提升依法行政能力。深化与法律顾问律师的合作，借助专业律师的丰富经验，推动执法水平的提升、行政程序的完善和信息公开的质量。\n\n（二）构建多元化行政争议解决机制。一是扎实做好信访工作，以信访工作法治化“路线图”、“导引图”为契入点，加强信访工作法治化建设，深入推动积案化解工作，完善落实信访工作制度，力争通过实实在在的努力，将信访工作中出现的争议解决在信访程序中，避免流入复议、诉讼程序；二是加强沟通协调，业务科室和法律顾问相互配合相互支持，综合运用调解、协调等多种手段，努力化解行政争议。同时，在日常工作中发现问题及时反馈整改，努力减少行政争议的发生。\n\n（三）开展形式多样的法制宣传。完善信息公开发布审核机制，内宣外宣“两手抓”，用好微信公众号舆论宣传主阵地，利用基层宣讲、社区活动、报刊杂志媒体等方式，集中力量对外宣传报道规划资源好政策、好服务，积极回应人民群众关心的热点问题，提高人民群众对我局工作的认同感。\n\n（四）强化考核考评倒逼机制。以行政执法案卷评查、行政执法事项“双随机”抽查监管、干部职工学法考试等为抓手，加强评查的强度和密度，将定期评查和抽查相结合，狠抓各项依法行政制度的落实，倒逼行政执法水平的提升。\n\n五、其他需要报告的情况\n\n杭州市规划和自然资源局余杭分局\n\n2025年3月26日\n\n【返回顶部】 【打印本页】 【关闭窗口】"
  },
  "S06": {
   "heading": "yuhang.gov.cn_杭州市余杭区政府：余杭四捧“神农鼎”",
   "date": "2026",
   "source": "yuhang.gov.cn_杭州市余杭区政府",
   "url": "https://www.yuhang.gov.cn/col/col1532128/art/2026/art_31ad1daea35b420dbdb91d322f08de8e.html",
   "body": "> 今日余杭 > 本地要闻\n\n余杭四捧“神农鼎”\n\n发布时间： 2026-04-17 10:10\n 来源：\n余杭时报\n 点击率：\n\n本报讯 （通讯员 方玉豪） 近日，2025年度浙江省乡村振兴战略实绩考核结果公布，余杭区凭借扎实的乡村振兴成效，连续八年获评全省乡村振兴考核优秀等次，成功再获“神农鼎·银鼎”。自2022年该奖项设立以来，余杭已连续四年夺得“神农鼎”，成为全市唯一获此殊荣的区县。\n\n“神农鼎”是目前浙江省乡村振兴领域的最高荣誉，仅授予考核优秀的设区市和前20名的县（市、区）。在这份殊荣背后，是余杭以新时代“千万工程”为牵引，长期深耕乡村、久久为功的不懈努力。\n\n2025年，余杭乡村振兴的“成绩单”格外亮眼：全区实现农林牧渔业增加值49.09亿元，同比增长4.3%；农民人均可支配收入62050元，位居全省第二，增速5.8%；城乡居民收入比缩小至1.47:1，低收入农户人均可支配收入35393元，所有村集体经营性收入均突破250万元……一系列核心指标持续位居省市最优行列。\n\n强城引领，城乡协调发展再提速。余杭始终坚持以城带乡、城乡联动，构建起“中轴线引领、中心镇辐射、山城协作共进”的发展格局。“未来中国·余杭样板”发展轴成功入选省级发展轴，瓶窑镇跻身省级中心镇、国家农业产业强镇创建名单；11个省“缩差”项目投资完成率超130%，良渚文化大走廊共富项目、宏盛粮油二期成为全省兴村融合标志性项目。同时，余杭不断深化“1+5”山城协作机制，推动城市资源向乡村流动，乡村发展活力向城市辐射，城乡联动的辐射能级持续提升。\n\n全链升级，和美乡村成色更足。在产业发展上，余杭以全产业链思维推动乡村产业转型升级，径山茶、鸬鸟蜜梨两大特色产业入选产值超10亿元省级全产业链名单，其中径山茶区域公用品牌价值达40.13亿元。以苕溪文化风情带建设为牵引，余杭推动15个乡村片区组团运营，永安村、小古城村入选省级重点村，“禹上稻乡”片区发展模式成为全国典型。此外，通过实施强村公司“一企一策”提质增效行动，21名“共享经理人”跨村服务，区级强村公司年营收超2000万元，带动村集体增收超1500万元，新增就业岗位300余个，实现了村强民富的双赢。\n\n保障提质，城乡融合走向深度。余杭持续加大乡村基础设施和公共服务投入，推动城乡一体深度融合。基础设施方面，2025年完成新改建农村公路10.3公里、燃气管道44.3公里，新增农村充电桩130个、5G基站195个。公共服务方面，14项民生实事项目完成进度达136%，成功争创省级银发经济产业园改革试点，“优托360°”养老模式入选全省重大改革典型案例；在全省率先实现“多田套合”率100%，径山镇入选全国全域土地综合整治试点典型案例。\n\n多元发力，共富图景越绘越实。为了让农民的“钱袋子”更鼓，余杭打出了一套增收“组合拳”：一方面，培育“百丈瓜子”等“小产品大产业”，带动200余名村民实现家门口就业；首创“共富好铺”模式并承接市级党群服务中心运营，构建起“共富好铺—共富工坊—共富基地—农户”的利益联结链条，累计带动全区农产品全链条增收超5000万元。另一方面，建成零工市场15家，开展技能培训1.6万人次，推动就业创业双向发力；出台青年入乡二十条政策，搭建“余省心”线上服务专区，建设14个青年入乡实践站点、8个乡创空间，吸引青年人才返乡创业，为乡村振兴注入新鲜血液。\n\n站在新的起点，余杭将继续以新时代“千万工程”为指引，聚焦缩小“三大差距”，锚定“神农鼎·金鼎”目标，实干争先、久久为功，全力打造中国式城乡一体融合高质量发展的向往地，为全省乡村振兴提供更多“余杭经验”。\n\n【返回顶部】 【打印本页】 【关闭窗口】"
  }
 },
 "06": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨浙江宁波：探索空间治理新路径",
   "date": "2024-06-26",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5327414",
   "body": "编者按： 6月25日，自然资源部发布首批全域土地综合整治试点典型案例。本次公布的15个典型案例结合当地实际需求和资源禀赋，在优化国土空间布局、提升国土空间治理效能、助力耕地三位一体保护、优化资源要素配置、促进城乡融合发展等方面进行了有益探索，取得了显著的综合效益。\n\n自今日起，本版将陆续刊发这些案例，为各地学习运用“千万工程”经验，深入推进全域土地综合整治工作，助力乡村全面振兴提供示范和借鉴。\n\n浙江省宁波市全域国土空间综合整治试点是自然资源部2022年批准的全国首个市级全域国土空间综合整治试点。开展试点工作以来，宁波统筹融合生产、生活、生态“三生空间”，探索建立了一套包括工作体系、规划体系、政策体系、监督体系的工作新范式，在耕地数量质量提升、生态修复项目落地、城乡存量建设用地盘活利用、乡村一二三产融合和共同富裕等方面取得了阶段性成效，走出了国土空间规划格局之下的“精雕细琢”的空间治理新路径。\n\n宁波市镇海区南洪村千亩连片耕地。浙江省自然资源厅供图\n\n锚定乡村振兴和城市更新\n\n宁波是我国东南沿海重要的港口城市、长江三角洲南翼经济中心，位于大陆海岸线中段，北濒杭州湾、东有舟山群岛为天然屏障。全市陆域国土面积9816平方公里，其中农林用地6107.6平方公里，占比62.2%；建设用地2188.5平方公里，占比22.3%；其他类型土地1519.9平方公里，占比14.5%。海域国土空间面积7844平方公里。\n\n以乡镇企业和家庭作坊起步、以块状经济为特色的县域经济为宁波的发展奠定了坚实基础，但在快速发展过程中，也积累了空间错配失序、资源利用低效、生态质量退化等问题。\n\n宁波将开展全域国土空间综合整治作为推进高质量发展、建设共同富裕先行市的重大牵引性工程，提出了“空间规划定格局，全域整治优布局”的理念，将整治对象确定为兼顾乡村地区振兴与城市地区更新，在全市域范围内围绕“群众满意、耕地改良、粮食增产、防灾减灾能力增强和生态环境改善”的目标，统筹推进农用地整治、村庄整治、生态保护修复、工业用地整治、城镇低效用地再开发等5项任务，并鼓励各区（县、市）结合实际开展特色亮点整治，通过整治落实国土空间总体规划锚定的蓝图，实现资源重组、功能重塑、空间重构、产业重整、环境重生。\n\n构筑全域美丽先行地\n\n坚持高位推动，建立整治工作体系。宁波坚持以全市“一盘棋”系统思维做好顶层设计，搭建了由总体要求、目标任务、工作体系框架，数据体系、组织保障体系、监管督办体系、绩效评价体系构成的“四横三纵”的总体架构。探索提出“资本金+专项债券+市场化配套融资”的投融资模式，建立市区两级公司合作、统一主体对片区实施综合开发的集成式工作模式，实现空间集聚、要素集成、力量集中、计划协同。\n\n强化规划引领，构建整治总体格局。宁波围绕整治潜力“大起底”、空间资源“全识别”目标，把脉问诊整治区域内自然资源本底和土地利用现状，谋划确定流域区域、县域统筹、城乡复合3大整治类型，6大重点整治区域的总体整治格局，改变以往零敲碎打、项目打包的传统整治模式，划定整治“主战场”。建立与国土空间规划体系相适应、面向实施的整治规划体系，完成“市级整治规划纲要－县级综合整治规划－整治片区策划与单元方案”三级整治规划方案编制，形成“全市整治潜力调查、市级规划明确任务、县级规划分区划片、整治片区资源统筹、单元方案项目落地”的全链条规划引导，创新建立片区策划+单元方案作为实施方案的更新版，做到与详细规划等法定规划的融合协调、“一体两面”。\n\n构建实施监管体系，实现整治工作闭环管理。为确保整治目标不走样、过程可溯源、成效可评价，宁波搭建“全域国土空间综合整治数字化场景”应用体系，实现全过程数字化孪生。\n\n加大政策创新集成，落实制度先行的规范化治理。2023年1月，宁波印发《关于开展全域国土空间综合整治助推高质量发展建设共同富裕先行市的意见》，作为纲领性文件指导试点工作稳步有序开展。在严格落实底线管控、加快土地管理制度改革等方面，积极探索“两线调整”机制和宅基地盘活、工业用地整治政策。为强化整治项目实施保障，出台全域整治项目审批工作指引，起草全域整治税收指引等支持政策。\n\n其中，镇海区围绕建设“现代化滨海大都市科创强区品质之城”的总体目标，推动中部绿脊空间的提升和外围产城要素的融合，形成“绿串城、金镶玉”的空间格局；奉化区以“大美田园+品质城市+共富样板”为目标，促进产城人融合、赋能高质量发展、谋划共富新局面。\n\n奉化宁南整治示范片区总体效果图 浙江省自然资源厅供图\n\n打开共富新空间\n\n截至2023年9月，宁波11个示范片区共谋划项目877个，整治片区面积489平方公里，已开展实施项目362个，累计完工项目167个。随着整治工程逐步深入推进，试点片区在耕地保护、生态修复、乡村振兴、节地利用等方面取得了阶段性成效。\n\n坚守耕地保护红线，推动农业增效农民增收。宁波通过数字赋能、科技赋能统筹推进“百千万”永久基本农田集中连片整治和高标准农田建设，推进整治区域内耕地更加集中连片，整治片区内已实现新增耕地5006.4亩，整治新增建设高标准农田2228.3亩，耕地和永久基本农田质量等别分别提升0.2和0.1。\n\n践行生态发展理念，推动绿水青山保护修复落地落细。宁波通过整治，实现了片区内河道、林地、耕地、矿山等3999亩退化生态空间的修复，以整治促进历史遗留矿山修复和联动建设美丽河湖；以整治腾挪空间，将原来断连的化工区生态隔离带补种形成宽50～200米、长11公里的林带。\n\n优化国土空间布局，推动存量空间资源提质增效。宁波以整治落实国土空间规划，统筹融合生产、生活、生态“三生空间”，实现宜耕则耕、宜建则建、宜林则林。同时，聚焦实际问题，以村庄整治和工业用地整治为重点，减少开发边界外闲置村庄建设用地，推动村庄建设用地节约集约利用，以存量空间建设村庄基础设施等配套，提升城乡居民公共服务均等化水平；腾挪集聚区外工业用地入园，工业用地集聚度提升0.3%，积极推进城镇建设区内部的有机更新，推动产业空间高质量发展。\n\n维护群众切身利益，推动城乡融合发展出新出彩。宁波围绕提升共同富裕获得感，各整治片区共落实民生项目228项，用地23365.7亩。各片区坚持“以人为本、因村制宜”，全面改造提升农村整体生态人居环境，利用乡村历史文化、产业等特色资源，秉持文化赋能乡村，发展乡村特色旅游，壮大集体经济，着力打造基础配套“硬实力”与地方特色“软实力”兼具的美丽乡村。\n\n海天林带白鹭飞   浙江省自然资源厅供图\n\n宁波案例所形成的工作模式具有三方面的推广意义。一是将全域整治作为优化国土空间布局的路径和平台。秉持全域全要素思维，将土地整治工具引申运用到城镇，通过建立整治规划体系，紧密衔接各级国土空间规划，探索出一条优化城乡空间、推进城乡融合发展的实施路径，切实发挥全域整治作为平台的“土地整治+”的价值。二是以“规划生成项目”作为方案谋划的前提。通过“全市域大起底”明确了整治任务和目标，再通过市－县－片区的整治规划层层传导，生成整治项目，改变之前“项目拼盘”模式，对各地如何确定整治需求、谋划整治项目具有普遍指导价值。三是将群众满意和共同富裕作为整治的主要目标。在整治谋划、实施过程中，始终坚持贯彻共同富裕，推动以市场化方式盘活存量用地，有效保障土地要素财产权益，将整治红利惠及全体人民。"
  },
  "S05": {
   "heading": "nbrd.gov.cn_宁波市人大常委会：关于我市全域国土空间综合整治工作情况的报告",
   "date": "2024-02-27",
   "source": "nbrd.gov.cn_宁波市人大常委会",
   "url": "https://www.nbrd.gov.cn/art/2024/2/27/art_1229578103_39885.html",
   "body": "文字： 大 中 小\n\n保护视力色：\n\n关于我市全域国土空间综合整治工作情况的报告\n\n时间：2024-02-27 16:09\n\n来源：市人大常办\n\n宁波市十六届人大常委会第十四次会议文件\n\n市自然资源规划局\n\n市人大常委会：\n\n自2022年1月我市全域国土空间综合整治试点获批以来，在市委的坚强领导下，在市人大的关心支持和有力监督下，全市上下统一思想认识、凝聚多方合力，系统推进农用地整治、村庄整治、生态保护修复、工业用地整治、城镇低效用地再开发“五位一体”的国土空间综合整治任务，取得阶段性成效。受市政府委托，现就试点工作情况报告如下：\n\n一、工作开展情况\n\n试点实施至今年10月底，全市11个全域整治试点示范片区，累计实施项目371个，实现投资443亿元，永久基本农田集中连片整治2.68万亩，高标准农田建设和改造0.98万亩，垦造耕地276.34亩，建设用地复垦492.90亩，低效建设用地整治盘活1.27万亩。试点主要做法在中央主题教育办简报刊发，宁波试点经验获自然资源部主要领导高度肯定，并在全国土地综合整治现场会交流推广，相关成效被纳入全国土地综合整治试点评估总报告及典型案例专项报告。\n\n自然资源部在全国土地综合整治试点评估报告中指出：宁波把试点工作作为高质量发展建设共同富裕先行市的重大牵引性工程，统筹融合生产、生活、生态三大空间，实现在国土空间规划格局之下的“精雕细琢”，以整治的“绣花功夫”描绘空间治理新路径，推动城乡一体更新、产业系统重整、生态安全同治、整治建设同步。“宁波的试点成功探索出了一条新时代‘千万工程’迭代升级的新路径、新范式。”\n\n（一）坚持任务导向，规划引领整治格局。一是层层传导规划。谋划确定3类整治模式，6大重点整治区域，以及首批11个先行示范片区的总体整治格局。形成了“市级整治规划纲要-县级综合整治规划-整治片区策划与单元方案”三级整治规划传导体系。4个片区策划方案已经通过市领导小组审议，报省自然资源厅审查。二是明确实施路径。搭建了由总体要求、目标任务、“1345”工作体系框架、数据体系和组织保障体系、监管督办体系、绩效评价体系构成的“四横三纵”的总体架构。印发《关于开展全域国土空间综合整治助推高质量发展建设共同富裕先行市的意见》，探索城镇开发边界、耕地及永农调整优化机制。三是完善工作机制。构建了“市负总责、条线指导监督、区县（市）负主责并具体实施、整体协同联动”的条抓块落责任体系，市县两级成立了由主要领导“挂帅”的整治工作领导小组，建立市区两级公司合作的集成式整治工作模式和全域国土空间综合整治监督评估“1352”体系，细化责任分工，明确65项重点任务及其牵头、责任单位，凝聚工作合力。\n\n（二）坚持问题导向，统筹实施整治任务。一是稳步推进耕地“三位一体”建设。将永久基本农田集中连片建设与高标准农田、粮食功能区建设统规划、同实施、齐验收，改善农田基础设施条件，提升耕地粮食产能。11个示范片区实现了耕地数量增加、质量提升，新增耕地533.75公顷、千亩方8个、耕地功能恢复488.30公顷。如奉化西坞街道永久基本农田集中连片整治耕地面积1.76万亩，新建农排沟3950米，实现从“巴掌田”、“斗笠田”到“成方连片大田”，“闲田变忙田”。二是加快盘活存量建设用地空间。从源头控制建设占用耕地，加快存量“三块地”整治，增加混合产业用地供给，推行长期租赁、先租后让、租让结合等多种供地方式，已开展工业用地整治面积856.60公顷，城中村用地规模减少17.85公顷。如慈溪周巷综合采用腾挪清退、零星升级等整治策略，加快实现低效、零散工业用地清退、园区提质升级、工业用地转型，已完成万洋智能家电产业园区等4个工业用地整治，总面积221亩，新供地工业项目亩均税收超40万元。三是加大生态保护修复力度。全要素开展生态环境保护修复，协同推进美丽河湖建设、海岸带综合整治、土壤污染治理、废弃矿山整治修复和地质灾害风险区综合治理。实现新增林地4.3公顷，修复还绿废弃矿山3个，河道整治30.017公里，海岸线修复10.19公里。如镇海南洪村复垦农田项目，统筹实施海天林带修复工程和万弓塘河整治工程，补种宽50-200米的林带11公里，河道生态化改造4.3公里，重要河流水质达标率90%，水面率提升0.96%，筑牢生态安全屏障。\n\n（三）坚持变革导向，推动整治创新升级。一是强化政策集成。形成整治方案编制审查规则、数据库建设规范、永久基本农田和城镇开发边界优化调整机制等一批技术规范。各部门印发了《全域国土空间综合整治项目审批工作指引》《宁波市城市更新办法》，起草了《宁波市工业集聚区规划建设三年行动计划》《关于推进闲置宅基地（农房）激活利用的实施方案》《全域国土空间综合整治税收指引》等。地方积极探索政策创新落地，镇海印发《2023年度镇海区全域国土空间综合整治工程工作方案》，鄞州出台《全域整治项目村庄退建补偿方案》，江北制定工业企业“亩均效益”综合评价办法3.0 版等。二是联动多方力量。将全域国土空间综合整治列入市委市政府全年重要事项计划，市人大、市政协对全域国土空间综合整治开展了专题调研、视察和监督；将综合整治工作纳入市委重大决策“全生命周期”督考内容；市纪委市监委开展了全域国土空间综合整治工作专项监督。三是借力数字赋能。建立全域国土空间综合整治综合智治集成应用场景，搭建“1+1+3+3”集成应用框架体系，实现对全域国土空间综合整治工作的全程数字孪生和全程数字监管。该场景建设纳入了2023年度数字政府建设重大应用并全面上线应用，实现五大类整治任务880个项目全过程数字孪生，确保整治目标不走样、整治流程全覆盖、整治成效可评价。\n\n（四）坚持民生导向，建设共同富裕单元。一是耕地保护助力乡村振兴。围绕着传统农业向数字农业转变的发展思路，依托现代农业技术，借助数字赋能、科技赋能，提升耕地亩产效益，实现保护与发展共赢。如奉化实行“农业园区+现代企业+新农人”模式，土地亩均流转金额提升至1000元，村庄年集体经济收入提升15-40万元，同步打造数字化智能农业种植基地，农产品产量提高约20%，特色产业效益明显；宁海推进产业导入和耕地整治同步，打造“稻虾连作”基地“一田双收”，亩均产值达万元以上，土地承包租金由600元/亩提高至1200元/亩，增加村集体经营收入230余万元。二是节约集约增加土地效益。推进工业用地集聚入园，优化产业空间布局，加大城镇低效用地再开发力度。如镇海利用棉丰村搬迁产生的160亩存量用地，支撑中石化新材料研究院和省级博士后工作站落地，助推绿色石化万亿级产业集群“补链强链”；海曙探索“区整治公司+村经济合作社综合开发”的新模式，腾退低散乱村内作坊，集中迁入改造升级的水家工业园，园区获得了海曙区第一本建设使用集体所有土地决定书、第一个农业银行“富村贷”授信，走出一条集体工业改造的新路径。三是村容整治优化公共环境。依法有序推进村庄和零星农居点搬迁撤并集聚，全面改造提升农村整体生态人居环境，发挥乡村历史文化、产业等特色资源，推动“乡村变景区、田园变花园”。如前湾新区在南洋小城片区累计拆除成片违章13.2万平方米，占该片区违章总数的84.1%，有效地破解了该片区一直以来环境“脏、乱、差”的困局和存在的各类安全生产隐患；北仑灰库地块已落地开工国内首个智能化、立体化集卡停车场及堆场项目，解决港区及后方“两场”配套布局不合理、集疏运体系不健全、港产城布局交织的难题。\n\n二、当前存在主要问题\n\n虽然我市全域整治试点工作取得了阶段性成效，但还存在一些问题和短板。\n\n（一）工作推进还不平衡。7个区（县、市）、功能园区的片策方案仍处于调整上报阶段，导致后续项目的实施存在较大变数，影响了片策方案整体报审节奏。全市试点期内整治项目平均开工实施率40.81%，个别区（县、市）项目实施进展相对滞后，尚不足30%（鄞州区24.14%），整体进度上还不够均衡。五大整治任务中农用地整治项目开工实施率最高56.05%，村庄整治项目开工实施率最低32.49%。（详见附件）\n\n（二）攻坚克难有待发力。部分支持政策尚未正式出台，特别是工业用地整治、闲置宅基地退出机制、宅基地面积超标和“一户多宅”分类认定和处置、国有土地上房屋征收拆迁成本控制、土地出让金分账管理、市场收购成片开发交易税费减免等一些重难点领域只能按照现有政策推进，行业主管部门的政策创新探索需加大克难攻坚力度，尽快发挥政策的集成效应。\n\n（三）协调配合有待加强。市县两级联动不足，县级层面缺乏对实施主体、相关部门和镇（街）的统筹。部门间协同配合不够，条线责任部门对片区整体谋划参与不深，造成片区整治项目清单的不稳定。部分实施主体角色转换不够快，对片区策划参与不足。部分区（县、市）在实施过程中更多考虑短期资金平衡，对算好“长远账”“综合账”考虑不足，未能统筹好资金安排、生态效益、民生福利等。\n\n（四）资金来源有待拓宽。大部分的农用地整治、生态保护修复等项目基本以社会效益为导向，经济投资产出比不高，社会主体参与较少，尤其对后续投资项目吸引力不足。目前多数整治项目的资金来源主要依赖政府专项资金，缺乏引入社会资本的有效途径，投融资模式创新还不够。授予专业自然资源资产公司实施生态修复工作的特许经营权有待进一步落实，金融机构创新金融工具和设立专项基金仍有待进一步探索。\n\n三、下步工作重点\n\n下步，我们将结合全市深化新时代“千万工程”加快打造乡村振兴市域样板现场推进会部署要求，针对存在问题，继续纵深推进全域整治试点工作，重点抓好以下工作。\n\n（一）强化责任落实。积极发挥市整治试点工作领导小组及办公室牵头抓总作用，压紧压实市区两级工作专班实体化运作工作机制，进一步提高各级党委政府的思想认识，发挥各地领导小组在整治项目谋划和实施层面的统筹协调作用。推动落实条线责任部门的监督职责和任务落实，其他相关部门按职责做好配合工作。推动实施主体系统性考虑项目实施过程中的资金统筹、公司化运作等，搭建整治规划实施平台，及时协调处理规划或实施过程中发现的问题。\n\n（二）加快政策创新。抢抓试点机遇、积极向上对接，用好政策叠加、释放政策红利。2024年，各整治任务市级牵头部门持续深化落实甬党发〔2023〕5号文件要求，加快完善相关配套政策和实施细则。特别是聚焦实施主体反映强烈的难点堵点痛点问题，抓紧制订土地、资金、指标等专项支持政策，优化完善相关审批流程。充分挖掘整治潜力资源，重点推进低效工业用地腾挪入园、提质增效，村庄建设用地集聚整治。在标志性成果上，至2024年底基本建成全域整治的工作体系、规划体系、制度体系和实施监督体系，形成10项以上可复制可推广的创新政策、制度规范和地方实施细则。\n\n（三）抓好工作联动。加强部门横向联动、市县纵向沟通，聚焦省“十项重大工程”核心指标争先进位，一是推进“多田套合”，加大市财政、资规、农业农村、生态环境、水利部门工作协同，明确细化农用地土壤污染调查的职责分工，加快推进责任落实，2024年力争实现整治区内80%永久基本农田建成高标准农田，2025年初步实现整治区项目内的“多田套合”。二是促进共富单元建设，以土地综合整治为突破口促进共富基本单元建设，按新标准筛选谋划整治项目，指导各地编制土地综合整治共富单元实施方案。三是强化工作联动，积极发挥市县乡纵向联动和住建、资规、水利、生态环境等部门横向协同效应，合力推进美丽河湖建设、EOD模式开发、城中村改造工作。\n\n（四）优化考核监督。深化全域综合整治数字化应用场景，通过大数据集成和应用迭代，优化提升全过程监管监测、强化数据集成分析、加强绩效评价结果应用等能力。完善由市委市政府监督考核，市人大、市政协、市委组织部、市纪委跟进检查督办的“督考+督办”机制，构建全域整治“全生命周期”督考长效机制。建立试点工作绩效考核评估体系，进一步提升整治工作的成效。转化考核结果，提炼经验成效，加大工作宣传，积极利用主流媒体，宣传推广“宁波经验”。"
  },
  "S08": {
   "heading": "nbjb.gov.cn_宁波市江北区政府：我们这一年 宁波全域国土空间的“55”解法",
   "date": "2025-01-28",
   "source": "nbjb.gov.cn_宁波市江北区政府",
   "url": "https://www.nbjb.gov.cn/art/2025/1/28/art_1229114281_58963168.html",
   "body": "人才是第一资源。古往今来，人才都是富国之本、兴邦大计。习近平总书记指出，要把我们的事业发展好，就要聚天下英才而用之。\n\n习近平总书记关于人才、人力资源、干部队伍建设重要论述精神和考察浙江重要讲话精神为宁波自然资源规划系统队伍建设工作指明了方向、提供了遵循，省委“新春第一会”精神则吹响了宁波自然资源规划队伍建设的号角。\n\n时间的渡船，驶入了新的征程。回顾2024年，全域整治的步伐坚定有力，自2022年宁波成为全国唯一获批在全市域范围开展全域国土空间综合整治试点的城市以来，这片9000多平方公里的土地上，开启了一场为全国推进国土空间治理体系和治理能力现代化的探路之旅。\n\n全域土地综合整治工作是利民利国、利乡利城的大好事。如何将好事真正办好，宁波市自然资源和规划局紧紧围绕农用地整治、村庄整治、生态保护修复、工业用地整治、城镇低效用地再开发“五大任务”和资源重组、功能重塑、空间重构、产业重整、环境重生“五重目标”，交出了一份优秀的答卷。\n\n2024这一年，宁波全域整治工作试点成效获得国家部委和社会各界的高度认可，被选为典型代表参加第34个土地日主场活动、全域整治经验交流会等全国性会议并发言，工作纪录片《蝶变》被自然资源部确定为全域整治工作的主题视频在全国经验交流会上播放。\n\n2024这一年，全域整治改革获得2023年度浙江省改革突破奖金奖，并受到自然资源部主要领导圈阅肯定；试点成果被纳入自然资源部首批全域整治试点典型案例；宁波试点相关做法及成效在《人民日报》、《中国自然资源报》头版、自然资源部公众号等多个渠道获得宣传推广，生动展示了国土空间治理现代化的“宁波经验”。\n\n做大做靓做强“宁波全域国土空间综合整治”品牌，形成一批卓有成效的全域整治典型案例。\n\n——在海曙，古林镇蜃蛟村等7村通过统筹村庄整治，农田整治、生态修复以及特色产业项目，实现“土地整治+产业升级”；在宁海，胡陈乡梅山村等6村通过全域整治大力发展抹茶产业，坚持“一村一品”，实现了“村即是景、景即是村”；在象山，石浦镇五新村等7村将海洋元素和“山水林田村”相融合，形成山水相融的全域整治格局，打通“人、地、钱、产”关键节点，促进城乡要素双向流动。以上三个项目获评2023年度土地综合整治省级精品工程。\n\n海曙区横街-古林片区“万亩方”项目\n\n——看镇海蛟川片区，绿色先导、产城融合，以全域国土空间综合整治为支点，全面撬动产业革新、城市更新、乡村振兴，27.22平方公里的土地正焕发新的活力，该项目入选全省首批土地综合整治助推共富单元建设十大优秀案例。\n\n镇海区蛟川片区 - 海天林带\n\n——观奉化西坞等2街道，通过跨乡镇土地综合整治工程创新打造的“万亩方”田园驿站，屡屡出圈，成为网红打卡地，运营大半年以来吸引游客超过20万人，新增旅游综合收入1800万元以上，走出了一条农旅融合新路径，整治“附加值”不断提升。\n\n奉化区西坞街道“万亩方”\n\n一年来，宁波市自然资源和规划局做深做透整治“文章”，聚焦“统”“优”“保”“提”四个关键字，从国土空间治理平台建设、国土空间布局优化、资源保护与要素保障、重点领域实效提升四个方面,探寻国土空间综合整治“最优解”，让人民共享整治成效。\n\n第一个关键词：“统”\n\n这一年，全域整治领导小组办公室发挥牵引作用，形成纵横联动多跨协同的国土空间治理平台。建立完善“管理规范+支持政策”的制度体系，各部门群策群力，形成包含工作管理规则、技术规则、条线支持政策三个方面，涵盖工业用地整治、城中村改造、低效用地再开发等20余项制度政策成果，推进8项行业标准制订。\n\n建立完善“部门协同+市区合作”的实施机制，以整治方案为载体，实现“区县多条线集成项目、市级多部门指导审查”的方案生成模式和“市区两级公司合作、统一主体对片区实施综合开发”的集成式工作模式，实现了“空间集聚、要素集成、力量集中、计划协同”的试点之初设定目标。\n\n第二个关键词：“优”\n\n这一年，宁波市自然资源和规划局以全域整治为抓手，优化国土空间格局，提升国土空间治理效能。\n\n今年，全市以11个全域整治示范片区带动28个省级土地综合整治项目实施。2024年新开工子项目205个，完成投资213.3亿元，实现永久基本农田集中连片整治3.5万亩，高标准农田建设和改造3.45万亩，盘活低效建设用地297公顷。全市11个示范片区方案全部完成报部备案，有效推进5亩以下零星永农集中和开发边界内“天窗”填补，耕地和建设用地布局双向优化，资源要素向优势地区集中，“宜农则农、宜建则建”。\n\n第三个关键词：“保”\n\n这一年，宁波市自然资源和规划局充分彰显全域整治在资源保护和要素保障方面的重要作用，综合集成土地、项目、资金等资源要素，为推动各类空间治理项目实施提供支撑保障。\n\n在生态保护修复方面，深入践行“两山”理念，协同推进幸福河湖建设、海岸线修复、流域湖泊整治、历史遗留矿山修复、水土保持等项目。2024年，市自然资源和规划局、市财政局联合印发《宁波市全域国土空间综合整治生态修复考核奖补资金管理实施细则》，对镇海、海曙、奉化、宁海、余姚、慈溪6个地方全域整治中取得显著成效的生态保护修复项目进行资金奖补，切实发挥财政资金的激励导向作用。\n\n在空间要素保障方面，以整治保民生，优先保障涉及公共利益的整治项目实施落地，促进城乡基本公共服务均等化，全市已通过整治腾挪空间保障新增民生项目落地27项、用地500余亩；以整治保产业，通过空间腾挪破解产业发展用地难题，如北仑区实施滨海片区综合整治，集中打造舟山港后智能配套中心，建设综合物流基地；镇海通过统筹实施绕城高速东工业整治等项目，为甬江科创区青创港建设腾挪发展空间。\n\n第四个关键词：“提”\n\n这一年，全域整治持续转动空间的“魔方”，协同联动低效用地再开发、城市更新、城中村改造、和美乡村建设等多试点任务，促进政策叠加效益的最大化，着重在“多田套合”、工业整治等重难点领域推动实效提升。\n\n在“多田套合”方面，市资规局会同市农业农村部门协力攻坚，围绕“多田套合”工作目标打出一套“组合拳”，进一步统一标准口径、统一底图底数，做优布局方案，我市全域整治“多田套合”率从一季度全省排名第八，提升至三季度排名第四，增速连续两季度保持全省第一。\n\n在工业整治方面，片区内共实施工业用地提质增效3000余亩，联动“2070”新增项目招引和低效工业腾退实现产业空间腾换。整治片区内工业用地入园率、亩均税收、吸引就业人数、研发投入等指标增长率均高于全市平均，初步实现全域整治对工业布局优化和产业提质增效的牵引性作用。\n\n从点土成金、点绿成金，到打开共富新空间，宁波市自然资源和规划局从一而终践行“五重”，初心不改，奋斗不止。\n\n新的一年，我们将继续坚持示范先行、锐意改革，将全域整治建设成为一项引领性、集成型改革，奋力实现“以空间治理撬动经济和社会治理”的任务目标，为助力我市建设现代化滨海大都市贡献硬核力量！\n\n来源：江北政府网"
  }
 },
 "07": {
  "S03": {
   "heading": "zrzyhghj.jiaxing.gov.cn_嘉兴市自然资源和规划局：激活“三生”空间化学反应，看秀洲区土地综合整治点“土”成金",
   "date": "2024-08-28",
   "source": "zrzyhghj.jiaxing.gov.cn_嘉兴市自然资源和规划局",
   "url": "https://zrzyhghj.jiaxing.gov.cn/art/2024/8/28/art_1229235671_58933830.html",
   "body": "激活“三生”空间化学反应，看秀洲区土地综合整治点“土”成金\n\n发布日期：2024-08-28 14:55 信息来源：市自然资源和规划局 浏览次数：\n\n为深入推进新时代“千万工程”，进一步促进生产、生活、生态的有机统一，我市积极谋划土地综合整治新模式，创新性提出开展“一块地”集成改革，打造具有嘉兴辨识度的土地综合整治项目集成，持续推动嘉兴在全面深化改革中创出特色、走在前列。推荐的秀洲区新塍镇等2镇（街道）全域土地综合整治试点成功入选自然资源部发布首批15个全域土地综合整治试点典型案例。也是省首批33个跨乡镇试点和全省第三批高质量发展建设共同富裕示范区试点。\n\n秀洲区新塍镇等2镇（街道）全域土地综合整治项目以“共同富裕”为总目标，构筑农村生产集约高效、农居生活特色传承、生态空间优美、新兴产业集聚发展的空间格局，打造体制机制集成改革先行区、城乡融合共富现代化基本单元的展示窗口，实现了预期成效：\n\n一是国土资源利用高效率\n\n加快土地要素流动，盘活农村宅基地、低效用地，优化农用地和村庄布局，保障安置用地和光伏产业用地。\n\n二是农业生产经营高质量\n\n推动小田变大田，形成集中连片万亩良田，实现农业规模化经营和机械化耕作，加快一二三产有机融合；探索“产业大脑+未来农场”发展模式，推动种植业向工厂化、数字化、网络化、智能化发展。\n\n三是农民居住生活高品质\n\n探索推进农业转移人口市民化改革，加强城乡融合新社区组织体系、服务体系、治理体系建设，打造共富惠民高品质安置社区。\n\n四是农村生态环境高颜值\n\n通过农用地生态化整治工程，实现耕地生态改善、质量提高，推进美丽田园、美丽乡村建设、河湖水系综合治理等工程，系统提升农村生态环境质量。\n\n土生万物，地载群伦。任何一种发展都始于土地，又不止于土地。通过“一盘棋”谋划每一寸土地的腾挪，项目区累计建成省级共同富裕新时代美丽乡村示范带1条、未来乡村1个、3A级景区村庄13个、市级特色精品村5个。火炬村2023年村集体经营性收入达521万元，实现了农民生活水平高品质、农村集体经济高收入。潘家浜村推动“绿水青山”向“金山银山”转化，打造了集聚餐饮、住宿、休闲为一体的全国乡村旅游重点村。利用新塍镇复垦产生节余指标，集中力量保障了省“415X”先进制造业集群光伏产业核心区建设，预计光伏产业规模上产值今年底可达500亿元。\n\n下一步，秀洲区将继续以土地综合整治为抓手，不断推动自然资源高效利用，努力打造土地综合整治促城乡融合共富的先行样板。"
  },
  "S06": {
   "heading": "zj.news.cn_新华网浙江：嘉兴秀洲新塍镇“天福万亩方”入选全国典型案例",
   "date": "2024-06-27",
   "source": "zj.news.cn_新华网浙江",
   "url": "http://www.zj.xinhuanet.com/20240627/e1a5286538bd4dc58f490c505edaec6c/c.html",
   "body": "近日，国家自然资源部发布15个首批全域土地综合整治试点典型案例，浙江省嘉兴市秀洲区新塍镇的“天福万亩方”亩均增收100斤典型案例上榜。\n\n六月，“万亩方”的收割工作已进入尾声。远远望去，田成片、地成块，土地整齐排列，景象甚是壮观。新塍镇“天福村万亩方”能有如今的景象，离不开全域土地综合整治工作。2021年，新塍镇全域土地综合整治与生态修复工程获批国家级试点，共涉及15个村总计8.56万亩土地，“天福万亩方”仅仅是新塍镇的一个缩影，三年来，该镇镇域耕地集中连片程度大幅提升，建成10万余亩高标准农田。\n\n田块零散、不集中，水稻无法产出高效益。因此，推动“碎田”变“整田”成为重要的工作。新塍镇围绕全域空间优化、全域农房集聚、全域要素整治、全域产业整合及全域土地流转展开土地整治工作。自开展全域土地综合整治后，复垦的耕地全部整治为“田成方、渠成网、路相连”的高标准农田。去年，天福村完成土地平整，实施田间道路、渠道、河道护岸、绿化、灌溉设施等工程，家家户户的“小田”连成了“大田”。“全域土地整治之后，有利于现代农业机械化操作，管理也更加方便了。”天福村有关负责人说。\n\n小田变大田，让高效农业成为可能。“天福万亩方”引进一家由中国水稻研究所、嘉兴市农科院、嘉兴市供销社和五芳斋集团共同组建而成的禾天下种业公司。禾天下种业公司在天福村建设了高标准良种繁育基地，自主选育、独家或区域经营的水稻品种已达9个，并推广到沪苏浙皖地区栽种。同时与国内农业龙头企业北大荒集团共同赋能，为万亩方田提供规模化、规范化、现代化的管理模式。\n\n依托这些高标准农田，新塍镇打造一条稻米全产业链，构建起“龙头企业+农资农服企业+种植企业+加工企业+销售公司”融合发展模式。目前，该模式已联结农户1000余户，覆盖水稻种植面积6万余亩。去年，新塍镇全镇粮食产量1.25亿斤，稻米产业全产业链总产值突破20亿元，并获评首批国家级农业产业强镇。（王凌霄/文 嘉兴市秀洲区新塍镇人民政府/供图）\n\n【责任编辑:韩冰玉】"
  },
  "S07": {
   "heading": "zj.people.com.cn_人民网浙江频道：嘉兴秀洲：全域土地综合整治绘就幸福新图景",
   "date": "2023-10-12",
   "source": "zj.people.com.cn_人民网浙江频道",
   "url": "https://zj.people.com.cn/n2/2023/1012/c186327-40601141.html",
   "body": "党网 · 时政\n\n经济 · 科技\n\n社会 · 法治\n\n文旅 · 体育\n\n健康 · 生活\n\n灵境·人民艺术馆\n\n毛主席纪念堂\n\n周恩来纪念网\n\n邓小平纪念网\n\n中共中央党史和文献研究院\n\n中组部12380举报网\n\n全国哲学社科工作办\n\n中国统一战线新闻网\n\n文化企业社会责任报告发布平台\n\n中国国民党革命委员会\n\n中国国家人文地理\n\n中国共产党新闻网\n\n人民日报报系\n\n人民日报 人民日报海外版 中国汽车报 中国能源报 健康时报 证券时报 国际金融报网 讽刺与幽默 中国城市报 新闻战线 人民论坛 环球人物 中国经济周刊 民生周刊 国家人文历史 人民周刊 人民数字\n\n国家重点实验室 环球网 海外网 人民图片 人民视觉 人民网研究院\n\n嘉兴秀洲：全域土地综合整治绘就幸福新图景\n\n2023年10月12日13:09 | 来源： 人民网－浙江频道\n\n近日，在嘉兴秀洲区新塍镇天福村，“万亩方”良田里水稻长势旺盛，黄绿相间，秋风徐徐，稻浪翻涌，此起彼伏。\n\n“原来的田块是零星分布的，农户你一块、我一块，东一块、西一块，现在成规模了。”秀洲区新塍镇天福村党委书记、村委会主任辅兴祥望着眼前连片整齐的稻田感慨道。\n\n新塍镇天福村良田丰收在望。秀洲区委宣传部供图\n\n田块零散、自主管理，水稻无法产出高效益。2021年，天福村正式启动土地综合整治。在两年里，陆续拆掉了25个生产小组，98%以上村民完成搬迁。截至2023年5月，天福村完成土地平整，实施田间道路、渠道及河道的护岸、绿化、灌溉设施等工程，引进农业企业，建设高标准、高产出、高效益的“万亩方”良田。\n\n“通过全域土地整治，有利于现代农业机械化操作，管理也方便了。特别是农业主体种田、规模化经营，无人机播种、插秧，这一块用工省力、机械化操作，今年是第一年。农户的租金收入提高了将近200元。”辅兴祥说。\n\n完成搬迁的村民中大部分选择住进新塍镇提供的安置小区——火炬二期安置房和天福新家园小区，还有一部分村民选择了自建房。\n\n建筑风格整体统一的自建房。秀洲区委宣传部供图\n\n“原来我们分散居住在村庄里边，生活不方便、生产也不方便。”村民李年福选择了自建房，在重新划定的集聚区按原比例建房，建筑风格整体统一。“现在集聚区，居住环境有了很大的提高，垃圾分类、绿化养护都做得很好。”李年福说。\n\n为了让村民住得安心，天福村加快文化礼堂建设，定期组织开展村民参与喜闻乐见的文化活动，丰富村民精神文化生活，提升村民幸福感、获得感。不仅如此，天福村的村民们还能享受户口保留在原农村户籍地的权益，就近享受城市优质教育、医疗等公共服务。\n\n天福村的土地综合整治，是秀洲区全域土地综合整治的一个缩影。近年来，秀洲区以土地综合整治为牵引，聚焦提质增效，建好高标田、产足责任粮、延长产业链，全力推动农业规模化；聚焦“千万工程”，做优村庄规划、建设和美乡村、发展“美丽经济”，全力推动农业现代化；聚焦城乡融合，做大中心城区、保障农民权益、供给优质服务，全力推动新型城市化；聚焦跨越发展，支持做强平台、建设“千亿集群”、推进“腾笼换鸟”，全力推动工业集约化。\n\n截至目前，秀洲区建成高标准农田33.4万亩，推动全区农村居民点从1600多个优化为“5个新市镇社区+195个保留点”，实现省级美丽乡村示范镇全覆盖，建成省级共同富裕新时代美丽乡村示范带1条、美丽乡村风景线7条、未来乡村3个、3A级景区村庄13个、特色精品村23个。\n\n秀洲区土地综合整治专班副主任金峰表示，全区通过土地综合整治，激活流量空间，推动资源向嘉兴国家高新区、运河湾新城、临空经济区三大平台倾斜，人口向运河湾新城集聚，主城区面积从13平方公里拓展至98平方公里，人口承载力从70万人提升至200万人。“通过土地综合整治，破解建设用地破碎化情况，推动工业用地集中连片，也保障了全区重大产业项目建设，优化国土空间治理模式，促进城乡要素双向流动，共同谱写高质量发展新篇章。”金峰说。（肖赟、史意）\n\n(责编：孙鹏、王丽玮)\n\n分享让更多人看到\n\n推荐阅读 第十八届中国戏剧节将于11月8日至27日在杭州举行 新闻发布会现场。林安琪摄\n人民网杭州10月11日电 （记者张帆）记者从今日在杭州举行的新闻发布会上获悉，第十八届中国戏剧节将于11月8日至27日在杭州举行。届时将有34台入选剧目和1台特邀剧目在杭州参加主场演出，同时还有12部展演剧目在温州上演。… “慧眼”识险情 古镇装上“智慧脑” 杭州富春山水旁，有一处千年古镇，这是孙权后裔的最大聚居地——龙门古镇。走进古镇，大量明清古建筑自带“宣传属性”，吸引大量游客前往“打卡”。\n随着游客的不断增加，“甜蜜的烦恼”也随之而来。…\n\n1 杭州第十九届亚洲运动会闭幕\n\n2 360°看亚运｜奥体中心体育场已完成“…\n\n3 360°看亚运｜走近亚运场馆 揭秘“小…\n\n4 浙江省首个高速公路主题馆正式开馆\n\n5 亚运史上首枚！中国队刘清漪霹雳舞夺金\n\n6 六战全胜！中国女排卫冕亚运冠军\n\n7 刘捷同志任中共浙江省委副书记\n\n8 亚运会攀岩项目收官，中国队摘得6枚奖牌\n\n9 中国女篮战胜日本队，夺冠！\n\n10 潮涌亚细亚 携手向未来\n\n人民日报社概况 | 关于人民网 | 报社招聘 | 招聘英才 | 广告服务 | 合作加盟 | 供稿服务 | 数据服务 | 网站声明 | 网站律师 | 信息保护 | 联系我们\n\n人民日报违法和不良信息举报电话：010-65363263    举报邮箱： jubao@people.cn\n\n人民网服务邮箱： kf@people.cn 违法和不良信息举报电话：010-65363636    举报邮箱： rmwjubao@people.cn\n\n互联网新闻信息服务许可证10120170001 | 增值电信业务经营许可证B1-20060139 | 广播电视节目制作经营许可证（广媒）字第172号\n\n信息网络传播视听节目许可证0104065 | 网络文化经营许可证 京网文[2020]5494-1075号 | 网络出版服务许可证（京）字121号 | 京ICP证000006号 | 京公网安备11000002000008号\n\n人 民 网 股 份 有 限 公 司 版 权 所 有 ，未 经 书 面 授 权 禁 止 使 用 Copyright © 1997-2023 by www.people.com.cn. all rights reserved\n\n第一时间为您推送权威资讯\n\n报道全球 传播中国\n\n关注人民网，传播正能量"
  }
 },
 "08": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨江西瑞昌桂林街道：统筹全域整治 绘就秀美蓝图",
   "date": "2024-08-27",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5340043",
   "body": "江西省九江市瑞昌市桂林街道全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。试点坚持“全域试点、全域规划、全域设计”工作思路，高效高质开展农用地整理、建设用地整理、生态修复保护和乡村人居环境整治等工作，通过“一条示范道路、十里生态河流、百处秀美村庄、千亩特色产业、万亩高标农田”，实现了整治区域“乡村振兴先行区、瑞昌城市后花园”的目标定位，绘就了山水相连、田河相映、村产相融、路桥相通的全域整治秀美画卷。\n\n桂林街道全域土地综合整治项目区\n\n突出规划引领  明确发展定位\n\n桂林街道地处瑞昌城郊，土地资源较为稀缺，整治区域内存在耕地碎片化、布局无序化、利用低效化等问题。\n\n试点工作启动以来，瑞昌市同步开展市国土空间总体规划、桂林街道国土空间总体规划以及整治区域内12个行政村村庄规划的编制，做好全域土地综合整治实施方案与相应的国土空间规划衔接，全面明确目标定位，落实发展方向。\n\n为整合优化空间布局，试点规划强化“五统筹”：统筹农业发展空间，优化农业总体布局；统筹生态保护空间，构建生态安全格局；统筹城乡融合发展，助推乡村振兴；统筹历史人文资源，彰显地方特色空间；统筹村庄建设边界，梳理低效用地空间。针对区域内各行政村特点，采用“片区—轴发展”和“分片整治”的城镇体系空间布局战略，形成了南北发展联系轴、桂石沿线观光带以及农业生产区、生活集聚区、生态保育区、产业发展区四大功能分区“一轴一带四区”的发展格局。\n\n试点经过前期充分调研、反复论证，制定一揽子规划文本，坚持一张蓝图管到底，以村庄规划保障全域土地整治项目实施，确保各类整治项目有出处、有落点，推动规划精准落地、用地指标合理落地。\n\n全域土地综合整治项目投资大、见效慢，社会资本投入积极性不高。为保证试点工作的顺利开展，瑞昌市通过政银结合、资金整合、盘活资产等方式，破解资金难题。\n\n瑞昌市主动对接江西省政策性金融机构，多次组织政银企座谈会、项目对接会，建立了省市县三级联动机制，积极引进社会资本投入参与全域土地综合整治项目投资、建设及运维。目前，项目投资方得到国家开发银行等金融机构大力支持，已获得投资1.5亿元，有力保障了试点工作的开展。\n\n同时，瑞昌市对农业农村、水利、交通、住建等数十个部门所辖项目和各类专项资金进行整合，推动相关项目及资源向整治区域倾斜，共计整合9300余万元资金投入项目建设。桂林街道还依托近城优势，盘活街道和村组闲置资源，让资源变资产、资产变资金，累计盘活1100万元资金用于试点工作。\n\n坚持因地制宜 优化空间布局\n\n城乡一体，优化生产空间。 试点坚持空间合理布局、要素合理配置，推动区域内宜工则工、宜农则农、宜旅则旅。扎实推进9000亩高标准农田建设，让低产田变高产田。通过建设用地整理、农用地整理等方式，优化空间布局并产生一定数量的耕地占补平衡指标和城乡建设用地增减挂钩指标，在保障整治区域内三产融合及乡村振兴用地的基础上，预计可节余耕地占补平衡指标500余亩、城乡建设用地增减挂钩指标300余亩。\n\n光明村乌山范村庄整治前后对比图\n\n内外兼修，优化生活空间。 大力推进乡村建设行动，投资2550万元开展美丽集镇建设，实现“三年大变样、镇域大提升”。扎实推进村庄整治行动，对49个自然村实行全面整治，整体提升，形成“一村一景、串珠成链”的秀美乡村格局。围绕生活垃圾、村庄外立面、破损道路等开展十大整治，让村庄更美丽、生活更宜居。\n\n点面结合，优化生态空间。 试点做好“治山、理水、彰文”三篇文章。治山方面，高标准推进狮山、北亭等6个废弃矿山生态修复；理水方面，投资1100余万元，推动横港河光明常丰段改造，以及10余个山塘水库除险加固；彰文方面，投资400余万元，对石山村程普墓进行扩建保护，新建亭子山公园，留住历史文脉，凸显地域特色。\n\n通过优化空间布局，试点破解耕地碎片化，盘活了用地空间。如今，原有的837个细碎化耕地图斑变为集中连片的460个，可解放劳动力2000余名，增加粮食产能48万公斤。盘活存量闲置土地1000余亩，并为城市发展预留了广阔空间。\n\n夯实产业基础  经济生态双赢\n\n试点重点打造“一条示范道路、十里生态河流、百处秀美村庄、千亩特色产业、万亩高标农田”区域示范点，提升村庄颜值，夯实产业基础，带动试点全区域和全要素的整治提升，惠及1.8万余农户、200余名脱贫人口。\n\n一条示范道路。 投资2600万元高标准建设光明大道，配套绿化、美化、亮化，统一安装太阳能路灯，沿路建特色矮墙和生态边坡，打造集自然与人文风光于一身的景观路。同时兼顾产业配套路网连线贯通，完善5条产业道，让各村产业串点成线，助力乡村振兴步入“快车道”。\n\n建成后的“光明大道”\n\n十里生态河流。 横港河光明常丰段全长4700米，与光明大道相映，通过对全流域进行生态景观修复，形成集水源涵养、生态宜居、防洪御险等多种功能于一体的生态河流。\n\n百处秀美村庄。 对辖区内上百处村庄进行统一设计、分片美化。逐步完善了理论宣教阵地、文体场所、童心港湾、公厕等公共服务设施，建成了主题明确、色彩鲜明、乡情浓厚、宜居宜业、一村一景的秀美村庄，全方位、多层次实现秀美乡村质貌升级。\n\n千亩特色产业。 按照一村一品、品品姓“公”的发展思路，创新“基础设施联村建设、特色产业联村打造、集体经济联村发展，统一管理、统一加工、统一销售”的“三联三统”特色产业发展模式，布局了传统产业、竹茶产业、渔稻产业、采摘产业等四大产业示范片，经过2~3年时间，千亩雷竹、五百亩黄茶、两百亩采摘园、六十亩智慧渔业等特色产业均能达到丰产期，届时桂林街道将实现产业多点开花，一年四季、季季繁华。\n\n万亩高标农田。 对道路两侧万亩水田进行高标准农田建设，同时按照宜耕则耕、宜林则林、宜改则改的原则，统筹做好区域内土地开发、城乡建设用地增减钩、矿山修复和旱改水等整治活动。通过土地整治，促成集中连片的用地格局，并流转至大户经营，机械化轮作优质稻、油菜、棉花等农作物，真正让藏粮于地、藏粮于技战略在试点区域落地生根。\n\n万亩高标准农田\n\n试点工作形成了溢出效益。依托良好的生态和丰富的资源，桂林街道引进了投资数亿元的旭源赤乌文创基地、星阳湾综合体等文旅项目，充分享受到“两山”转化带来的新成果。2023年，试点区域内长河（瑞昌段）全民所有自然资源资产通过挂牌成功出让，出让价达14.6亿元。试点带来的是变化，享受的是实惠。区域内的虹南农场，原先流转资金不足200元/亩；实施综合整治后，成为近郊土地中的香饽饽，以500元/亩的地租迅速流转。\n\n试点对利用政策性金融工具，撬动社会资本，破解耕地碎片化，助力乡村振兴有示范意义。试点积极引进社会资本投入参与项目的投资、建设及运维。通过山、水、路、林、田、村、矿等全要素整治，高标准规划，优化生产、生活和生态空间格局，融合推进现代农业、乡村旅游、生态保护和秀美乡村建设，有效拓展了土地整治的产业链、价值链和生态链，对同类型地区开展全域土地综合整治具有一定借鉴意义。\n\n（江西省自然资源厅推荐）"
  },
  "S04": {
   "heading": "bnr.jiujiang.gov.cn_九江市自然资源局：整装再出发 治出新未来——瑞昌市成功入选全国首批全域土地综合整治试点典型案例",
   "date": "2024-06-27",
   "source": "bnr.jiujiang.gov.cn_九江市自然资源局",
   "url": "https://bnr.jiujiang.gov.cn/zwzx_255/xqdt/202406/t20240627_6593973.html",
   "body": "整装再出发 治出新未来——瑞昌市成功入选全国首批全域土地综合整治试点典型案例 ​\n\n6月25日，自然资源部发布首批全域土地综合整治试点典型案例，瑞昌市桂林街道全域土地综合整治试点项目以统筹生态保护修复改善农村人居环境为亮点和特色，成功入选全国15个典型案例之一。\n\n桂林街道全域土地综合整治试点项目“一轴一带四区”全域空间布局规划图\n\n瑞昌市桂林街道全域土地综合整治试点自2021年获批国家级全域土地综合整治试点以来，始终坚持以乡镇国土空间规划、村庄规划为引领，以农用地整理、建设用地整理、乡村生态保护修复、历史文化保护、产业发展等五项任务为抓手，以优化桂林全域生产、生活、生态空间格局，促进耕地保护助推乡村振兴为核心目标，扎实推进试点各项工作，取得初步成效，初步形成了“一条示范道路、十里生态河流、百处秀美村庄、千亩特色产业、万顷高标农田”的示范提升，绘就出一幅“山水相连、田河相映、村产相融、路桥相通”的乡村振兴秀美画卷。\n\n在试点推进过程中，瑞昌市坚持做到“三个一”：\n\n一是成立一个专班。瑞昌市委、市政府高度重视试点工作，将其纳入高质量发展考核重要内容。高规格成立瑞昌市全域土地综合整治试点项目工作领导小组，同时抽调9名科级以上干部组建一线项目指挥部，靠前指挥、协同作战，全力保障项目高效推进。二是制定一套方案。制定出台整治试点工作实施总方案和年度方案，明确目标任务、工作举措、具体项目、完成时限、标准要求，为试点工作推进绘就了“路线图”“施工图”。\n\n三是建立一项机制。建立“日会商、周调度、月汇报、季评估”机制，确保试点工作压茬推进、滚动向前。市委、市政府主要领导多次专项调度并实地督导，派单子、压担子、出点子，高位推进试点工作。\n\n来 源: 张   征（瑞昌市自然资源局）"
  }
 },
 "09": {
  "S01": {
   "heading": "iziran_中国自然资源报：全域土地综合整治试点典型案例丨江西余江马荃镇：“一改促六化” 绘就乡村振兴新画卷",
   "date": "2024-08-31",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5340643",
   "body": "江西省鹰潭市余江区马荃镇全域土地综合整治试点是自然资源部2021年部署的乡镇全域土地综合整治试点。试点坚持以宅基地制度改革为主线，以土地综合整治为抓手，通过与集体建设用地入市试点、城乡融合发展试点相统筹，与新农村建设、乡村振兴等相关政策相衔接，积极开展高标准农田建设、土地开发、美丽乡村建设等工作，有效提高了土地综合效益，解决了乡村耕地碎片化、空间布局无序化、土地资源利用低效化、生态质量退化等问题，打造了集约高效的生产空间、宜居适度的生活空间、山清水秀的生态空间，激活配优了各类自然资源要素，释放了政策红利，促进了村集体经济发展和群众增收，助推了乡村振兴和生态文明建设。试点在江西省全域土地综合整治试点现场推进暨山水林田湖草沙一体化保护和系统治理专题研讨会上作典型发言，获评中国改革2023年度地方全面深化改革典型案例。\n\n一、案例背景\n\n（一）基本情况\n\n试点位于江西省鹰潭市余江区马荃镇。该镇位于余江南郊，东临龙虎山风景区，南接金溪县，西靠抚州市东乡区。鹰瑞高速公路穿过境内，龙虎山连接线位于岩前村。镇政府所在地距余江区城区9公里，距龙虎山风景区12公里。该镇是余江区的一个农业大镇，山地多、水利资源丰富。\n\n试点涉及马荃村、洪岩村、霞山村和杨柳村4个行政村。其中，马荃村、洪岩村和杨柳村为集聚提升类村庄，霞山村为特色保护类村庄。整治区域总人口8833人，土地总面积4.6平方公里，其中耕地面积2.6平方公里（包括水田2.4平方公里，旱地0.2平方公里），人均山林面积达3.4亩。\n\n（二）存在的空间问题\n\n土地资源利用低效。整治区域存在一定量的碎片化耕地、残次林地、低效坑塘，且随着农村人口的减少，农村学校合并，存在闲散集体建设用地。\n\n乡村规划滞后。部分村庄空心化严重，存在大量闲置宅基地，基础设施落后，村庄配套设施不完善，农民无序建房、只见新房不见新村等问题，需要统一规划、集中整治。\n\n产业发展用地受限。现有存量建设用地少，产业发展用地只能满足农业产业发展，不能满足二产发展需求，影响群众就业、增收。\n\n（三）试点目标任务及总体安排\n\n通过全域土地综合整治，充分发挥优越的自然资源禀赋，对国土空间山水林田湖全要素进行综合治理修复，全域优化乡村地区生产、生活、生态空间布局，实现空间形态、产业发展、生态环境、人居环境、基础设施等诸多方面的系统重塑和集成创新。\n\n到2025年，耕地面积由2.6平方公里增至2.7平方公里，增长5.1%；盘活存量农村集体经营性建设用地15.7亩；农村人均可支配收入由21582元增至28820元，增长33.5%。\n\n二、主要做法\n\n（一）坚持系统谋划、高位推动\n\n余江区成立了以区长为组长，分管副区长为副组长，马荃镇政府及自然资源、农业、林业、乡村振兴等相关部门主要负责人为成员的全域土地综合整治试点领导小组，区委、区政府将整治工作列为区重点工作每月调度。分管副区长定期召开领导小组工作推进会，布置各阶段任务，研究解决工作中遇到的新情况、新问题。区自然资源分局驻点指导，镇政府及有关部门按照职责分工，上下齐心，形成合力，全面推进。区委、区政府成立督导组，开展专项督查，对工作进度缓慢的单位下发工作提示单，实行“三单制”督办，要求限期整改，并对整改不到位的进行问责处理。\n\n（二）坚持规划引领、久久为功\n\n坚持一张蓝图绘到底。先易后难、循序渐进，不断调整优化政策措施。制定了全域土地综合整治实施方案，并通过省市两级审查，明确了各成员单位的主要任务、工作职责和各阶段完成时间节点。按照国土空间规划和“三区三线”最新成果要求，马荃镇还编制完成了马荃村、杨柳村、洪岩村、霞山村“多规合一”的村庄规划。将各部门建设项目纳入国土空间规划范畴，确保各部门的建设项目能安全落地。此外，马荃镇还合理安排整治建设用地用于农村集体经营性建设用地入市或实施城乡建设用地增减挂钩项目，满足一二三产业融合发展用地需求。\n\n（三）坚持量力而行、精打细算\n\n坚持精打细算，有多少钱办多少事，“一改促六化”（即以宅基地制度改革促进农村发展现代化、基础设施标准化、公共服务均等化、村庄面貌靓丽化、转移人口市民化、农村治理规范化），将宅基地改革、城乡融合发展、乡村治理等国家试点一体推进，促进自治组织、村庄环境、农村产业、生活水平提升。\n\n依托余江区农业投资公司，将整治退出的闲置宅基地和山水林田湖草等农村集体资源资产进行整合，并通过产权抵押融资，解决整治区域资金不足的问题。同时，整合高标准农田建设、乡村振兴、土地开发、农房改造、城乡建设用地增减挂钩、新农村建设、人居环境整治、废弃矿山生态修复等方面资金，系统推进整治项目建设，共实施项目46个、投资5733万元，区级财政仅提供引导资金。\n\n（四）坚持人民至上、共建共享\n\n广泛征求镇、村、组干部以及当地村民的意见，了解村民诉求，保障群众的知情权、参与权和收益权，激发群众的内生动力。4个行政村所有自然村成立村民事务理事会，赋予理事会在村庄长效管护、规范农村建房等方面12项权力和15项职责，充分调动农民参与改革的积极性。为打消村民顾虑，拆出来的宅基地优先保障本村村民需求，并在村庄规划中提前预留了15年的宅基地。此外，余江区还出台农村集体经济组织选举办法，探索打造村民事务理事会2.0版——组级集体经济合作社，并将宅基地和山水林田湖草等各项集体资产权属确权登记到集体经济合作社，有效解决了集体所有权虚置的问题。同时，马荃镇还参照宅基地制度改革工作构架，压实村党支部责任，让试点村党支部成为推进全域整治的“主心骨”“领头雁”。\n\n（五）抓好政策协同、形成合力\n\n依托农村宅基地制度改革、城乡融合发展试验区建设、乡村治理体系建设形成的制度基础，马荃镇进一步总结提炼，形成了一批全域土地综合整治制度成果。通过宅基地制度改革落实集体所有权，厘清宅基地权属关系，清退历史上形成的“一户多宅‚超占面积”的宅基地，为秀美乡村建设奠定坚实基础。通过推进土地入市、产权抵押改革等一系列试点政策，打破发展建设用地紧张与存量建设用地零散闲置的矛盾关系，进一步释放村集体建设用地潜能，为全域土地综合整治提供用地保障。\n\n（六）注重产业导入、推动多方参与\n\n马荃镇紧抓粮食生产不放松，积极探索发展特色农业，先后制定了《马荃镇特色农业五年发展规划》等一系列规定，并根据各村的自然、地理条件和农民种植习惯，进行“一村一品、一品一优”的专业化布局，不断调整农产品种植结构，先后引导村民建立了种猪、土鸡、蔬菜、水产品等四大农产品生产基地。 同时，积极调动民间资本，立足自身农业布局，利用调整出来的空间发展农产品加工、仓储、销售行业，发展木雕特色产业。\n\n三、取得成效\n\n（一）产业得发展\n\n马荃镇通过全域土地综合整治整合集体建设用地，整治区域内15.7亩集体经营性建设用地成功入市，招拍价62.5万元，并引导余江区传统产业下沉，共建成6个“产业下沉”车间，带动140余人就业，实现了群众在家门口就业增收致富。\n\n如，马荃八村联建雕刻“产业下沉”车间，年产值超千万元，村集体经济增加40余万元，带动60余人就业，人均月工资4000余元。利用闲置资产改建5个“产业下沉”车间，带动80余人就业，如洪岩村利用闲置粮库改建余满园食品产业园，霞山村利用闲置学校建成家具厂。\n\n马荃镇洪岩村食品产业园\n\n马荃镇通过产权抵押发展产业，把农村“不动的资产”变成“流动的资本”。如，洪岩村以村委会大楼为资产授信，抵押贷款40万元入股当地土地入市地块建成的菜籽油加工厂，每年固定分红4万元。同时菜籽油加工厂还带动脱贫户利用小额信贷资金入股，按照保底受益的方式，吸纳16户脱贫户小额信贷贷款72.5万元入股，年助脱贫户增收2.9万元，实现了村民当股东。\n\n（二）村民得宜居\n\n马荃镇在农村宅基地制度改革的基础上，充分利用全域土地综合整治的政策优势，促进村庄环境全方位提升，为群众创造优美的生活环境和舒适的人居条件。马荃洪岩毛家村在全域整治前，村庄基础设施薄弱，环境脏、乱、差，基本没有集体经济收入，建房杂乱无序，宅基地紧缺，是马荃镇遗留下来的老大难村。通过全域综合整治，优化村庄规划，实行闲置宅基地和闲置农房盘活，严格落实“一户一宅”，合理高效规划使用宅基地，腾退出2万平方米宅基地，不但满足了农民建房需求，同时还满足了基础服务设施和产业发展的用地需求，村庄环境和产业发展由“后进村”变为“先进村”。\n\n马荃镇在整治区域共修建、硬化提升道路25公里，整治修复渠道3000米，村庄改厕1500户，清理垃圾1000余吨，安装路灯700盏；建设文化广场4座，面积0.9万平方米；修缮古建筑6座，面积0.3万平方米；洪岩毛家、杨柳雷家建成污水管网和终端处理设施，并在整治区域内完成城乡供水一体化，实现了村庄环境靓丽化。\n\n马荃洪岩毛家村整治前（上）后（下）\n\n马荃镇高标准做好建房监管，严格落实农民建房线上申请、审核、审批，线下“四公开、四到场”的工作制度，形成了“政府负责、部门协同、上下联动”的宅基地管理新格局。健全三级网格化土地巡查制度，镇、村、组实行土地巡查员每天巡查打卡奖惩措施，确保整治区域内违法用地零发生。\n\n（三）农用地得提升\n\n马荃镇大力实施高标准农田建设，整治3800余亩耕地，使耕地质量提升了0.5个以上土地利用等别，粮食产能平均提升20%，有利于保障粮食安全。同时，马荃镇还有效改善了土地资源利用低效化的问题，增加耕地面积194.6亩，其中水田面积96.2亩，平均土地等别为6等，整治区域内耕地面积增加5.1%。\n\n土地开发新增耕地前（上）后（下）\n\n马荃镇依托余江区总投资11亿元的“长江经济带森林质量提升——碳中和”项目，流转林地0.78万亩，使村集体和农户每年实现租金收益40万元。通过森林抚育、低产低效林更新造林等项目，每亩新增林业碳国家核证自愿减排量（CCER）0.2吨~0.5吨，每年增加4千~5千吨碳汇，可实现10万~15万元的碳汇收益。\n\n马荃镇还不断完善农田基础设施建设，在整治区域内修护水库6座、修缮排水沟渠13条共7600余米，彻底解决了区域内农田灌溉问题。\n\n四、适用条件和推广前景\n\n马荃镇是传统意义上的一般农业镇，山、林、水等自然资源丰富。试点充分利用镇内资源，以土地整治为平台，将农田、林地、水库等整合起来，统一规划管理，优化生产、生活、生态空间布局。同时引导农民转变思维，多元化发展产业，推动农村经济结构调整和转型升级，为实施城乡融合发展提供强劲动力。通过全域土地综合整治，进一步改善了农田水利设施，完善了基础服务设施，提高了农民的生活质量和幸福感。同时强化了农村社会组织建设，提高了农民自治意识和参与度，形成了稳定、和谐、有序的农村社会环境。马荃镇试点经验对类似地区开展全域土地综合整治有一定的指导和借鉴意义。\n\n（江西省自然资源厅推荐）"
  },
  "S03": {
   "heading": "iziran_中国自然资源报：江西鹰潭余江分局推进全域土地综合整治试点",
   "date": "2024-05-22",
   "source": "iziran_中国自然资源报",
   "url": "https://www.iziran.net/news.html?aid=5320161",
   "body": "江西省鹰潭市余江区马荃镇全域土地综合整治项目是自然资源部批准的全域土地综合整治试点之一。自开展试点工作以来，鹰潭市自然资源局余江分局坚持规划引领，将土地整治与城乡融合发展、乡村振兴等相衔接，积极开展高标准农田建设、乡村治理等，为推动地方经济高质量发展提供动能。截至目前，马荃镇通过实施高标准农田建设，整治耕地3800亩，新增耕地194.6亩，整治区域内的耕地实现了数量质量“双提升”。\n\n据悉，余江区成立了以区政府主要负责人为组长、分管副区长为副组长，马荃镇政府及自然资源等部门主要负责人为成员的全域土地综合整治试点领导小组。区委、区政府将整治工作列为区重点工作每月调度；分管副区长定期召开领导小组工作推进会，研究解决工作中遇到的新情况、新问题；余江分局进行驻点指导，并与相关部门形成合力，全面推进试点工作，指导马荃镇编制完成马荃村、杨柳村等多规合一村庄规划。\n\n在此基础上，余江分局一方面将涉及高标准农田建设、土地整理、人居环境整治、废弃矿山生态修复等方面的项目资金予以整合，系统推进整治项目建设，实施相关项目46个；另一方面积极进行制度整合，形成了《余江区马荃镇全域土地综合整治试点工作方案》《余江区开展农村闲置宅基地和闲置农房盘活利用工作实施方案》等制度成果。\n\n余江分局还把宅基地制度改革作为全域土地综合整治的“基本点”，通过宅改落实集体所有权，厘清宅基地权属关系，清退历史上形成的“一户多宅”“超占面积”的宅基地；把城乡融合作为全域土地综合整治的“动力源”，通过推进产权抵押改革等系列试点，打破发展建设用地紧张与存量建设用地零散闲置的矛盾关系，进一步释放村集体建设用地潜能；把乡村治理作为全域土地综合整治的“保障点”，成立村民事务理事会，赋予理事会在村庄长效管护、规范农村建房等方面职责，充分调动了农民参与改革的积极性。\n\n通过全域土地整治试点工作，马荃镇建成6个“产业下沉”车间，修建、硬化提升道路25公里，整治修复渠道3000米，建设文化广场4座，修缮古建筑6座，整治区域内实现城乡供水一体化。"
  },
  "S04": {
   "heading": "bnr.jiangxi.gov.cn_江西省自然资源厅：余江大力推进马荃镇全域土地综合整治试点工作",
   "date": "2024-05",
   "source": "bnr.jiangxi.gov.cn_江西省自然资源厅",
   "url": "https://bnr.jiangxi.gov.cn/jxszrzyt/sxdt/content/content_1887091926254264320.html",
   "body": "余江大力推进马荃镇全域土地综合整治试点工作\n\n江西省自然资源厅\n\n发布日期：2024-05-10 16:28\n\n鹰潭市余江区马荃镇全域土地综合整治试点是自然资源部 2021年部署的乡镇全域土地综合整治试点项目。自试点工作开展以来，余江区将整治试点与集体建设用地入市试点、城乡融合发展试点相统筹，与新农村建设、乡村振兴等相关政策相衔接，积极开展高标准农田建设、土地开发、美丽乡村建设等，有效提高了土地综合效应，促进了村集体经济发展和群众增收，助力乡村振兴和生态文明建设。\n\n坚持高位推动，让职责更明晰\n\n成立以区政府主要负责同志为组长、分管副区长为副组长，马荃镇政府及自然资源、农业、林业等部门主要负责人为成员的全域土地综合整治试点领导小组。区委区政府将整治工作列为区重点工作每月调度 ， 定期召开领导小组工作推进会，布置各阶段任务，研究解决工作中遇到的新情况、新问题；区自然资源分局驻点指导，镇政府及有关部门按照职责分工，上下齐心，形成合力，全面推进。马荃镇参照宅改工作构架，压实村党支部责任，让试点村党支部成为推进全域整治的 “主心骨”“领头雁”。同时，区委区政府成立督导组，开展专项督查，对工作进度缓慢的单位下发《工作提示单》，严格“三单制”督办，要求限期整改，并对整改不到位的进行问责处理。\n\n坚持规划引领，让实施更规范。\n\n在充分征求马 荃镇、村、组干部和当地村民意见的基础上，制定全域土地综合整治实施方案，明确各成员单位的主要任务、工作职责和各阶段完成时间节点，并通过了省市两级审查。按照国土空间规划和 “三区三线”最新成果要求，指导马荃镇编制完成了马荃村、杨柳村、洪岩村、霞山村多规合一的村庄规划，与相关部门对接，将各部门建设项目纳入国土空间规划范畴，促进项目“应保尽保”。\n\n坚持整合推进，让效益更凸显。\n\n一方面整合项目资金， 将高标准农田建设、乡村振兴、土地整理、农房改造、增减挂钩、新农村建设、人居环境整治、废弃矿山生态修复等方面项目资金予以整合，系统推进整治项目建设。试点以来共实施项目 46个、投资5733万元，其中已完工项目38个、投资3993万元。另一方面，整合有效资源，将整治退出的闲置宅基地和山水林田湖草等农村集体资源资产进行整合，通过产权抵押融资，解决整治区域资金不足问题。同时，进一步发挥制度整合优势，在农村宅基地制度改革、城乡融合发展试验区建设、乡村治理体系建设形成的制度基础上，形成了《余江区马荃镇全域土地综合整治试点工作方案》《 余江区开展农村闲置宅基地和闲置农房盘活利用工作实施方案 》等一批新的全域土地综合整治制度成果。\n\n坚持统筹融合，让成果更彰显\n\n将全域土地综合整治与宅改、城乡融合、乡村治理等工作统筹融合， 把宅改作为全域土地综合整治的 “基本点”，通过宅改落实集体所有权，理清宅基地权属关系，清退历史上形成的“一户多宅”“超占面积”的宅基地，为秀美乡村建设奠定坚实基础；把城乡融合作为全域土地综合整治的“动力源”，通过推进土地入市、产权抵押改革等系列试点，化解发展建设用地紧张与存量建设用地零散闲置的矛盾，进一步释放村集体建设用地潜能，为全域土地综合整治提供资金保障；把乡村治理作为全域土地综合整治的“保障点”，4个行政村所有自然村成立村民事务理事会，赋予理事会在村庄长效管护、规范农村建房等方面12项权力和15项职责，充分调动了农民参与改革的积极性。\n\n图为马荃洪岩毛家村实施整治前后对比图\n\n试点以来，马荃镇 15.7亩集体经营性建设用地成功入市，土地价款62.5万元，引导建成6个“产业下沉”车间，带动140余人就业，实现了群众在家门口就业增收致富，整治区域产业得到进一步发展。修建、硬化提升道路25公里，整治修复渠道3000米，村庄改厕1500户，清理垃圾1000余吨，安装路灯700盏；建设文化广场4座，面积0.9万平方米；修缮古建筑6座，面积0.3万平方米。洪岩毛家、杨柳雷家建成污水管网和终端处理设施，整治区域内完成了城乡供水一体化，村庄环境全方位提升，村民更宜居。大力实施高标准农田建设，整治3800余亩耕地，耕地质量提升了0.5个以上土地利用等别、粮食产能平均提升20%，保障了粮食安全。同时，马荃镇还有效改善土地资源利用低效化，通过整治增加耕地面积194.6亩，土地等别为6等，整治区域内耕地面积增加5.1%，整治区域内的耕地实现了数质“双提升”。\n\n来源： 鹰潭市自然资源局余江分局"
  }
 }
};

export const SOURCES_META = {
 "contentHash": "69fb72b922020b84",
 "totalCases": 47,
 "totalItems": 627,
 "totalExcerpts": 153,
 "byKind": {
  "web": 623,
  "video": 3,
  "attachment": 1
 },
 "byCategory": {
  "核心权威报道": 73,
  "政府官方通报": 343,
  "其他媒体报道": 208,
  "音视频资料": 3
 },
 "categories": [
  {
   "name": "核心权威报道",
   "desc": "自然资源部典型案例发布、中国自然资源报等权威渠道的完整报道，含整治前后对比数据。",
   "count": 73
  },
  {
   "name": "政府官方通报",
   "desc": "国家、省、市、县各级主管部门与政府门户的官方通报、批复、方案与解读。",
   "count": 343
  },
  {
   "name": "其他媒体报道",
   "desc": "主流媒体与地方融媒体的报道、转载，用于交叉印证与补充细节。",
   "count": 208
  },
  {
   "name": "音视频资料",
   "desc": "电视台、广播与「视频号」等渠道的影像报道；部分条目挂在政府网站或门户网站的转载页上，URL 无视频扩展名，故按源清单的分类名归入本类。",
   "count": 3
  }
 ]
};

/** 按案例编号取资料来源（编号为字符串，如 '01'） */
export function getSources(id) {
  const key = String(id).padStart(2, '0');
  return CASES.find(c => c.id === key) || null;
}

/** 按案例编号与来源编号取核心资料摘录 */
export function getExcerpt(caseId, no) {
  const key = String(caseId).padStart(2, '0');
  const m = EXCERPTS[key];
  return (m && m[no]) || null;
}
