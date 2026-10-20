/* ================================================================
 * 政策工具数据：47 个案例的政策激励工具箱
 * ----------------------------------------------------------------
 * ⚠️ 本文件由脚本生成，请勿手工编辑。
 *
 * 数据来源：各案例目录下「04_政策工具/*.docx」的原生内容，
 *          经解析、排版后写入，未直接嵌入原始附件。
 *
 * 更新流程：
 *   1. 修改各案例「04_政策工具/*.docx」；
 *   2. node tools/extract-policy.mjs         （抽取为 JSON）
 *   3. node tools/build-policy-module.mjs    （生成本文件）
 *
 * 分层口径（1.2 新增）：
 *   每条工具带 scope（local／province／national），每份文件带 level
 *   （乡镇／区县／市／省／国家）。叙述重心放在地方一级，
 *   国家与省级只作精神概述——详见渲染层的分层呈现。
 *
 * 导出：
 *   CASES      各案例的政策工具与政策文件（含派生统计）
 *   NATIONAL   国家级政策工具综述（v1.3.3：15 条通用工具 + 6 份国家级文件，
 *              由上游自各案例工具箱分离归并，供政策总览页首位呈现）
 *   POLICY_META 全局汇总（总清单口径，47 个案例；不含国家级综述）
 *   getCase(id) 按案例编号取数据
 * ================================================================ */

export const CASES = [
 {
  "id": "01",
  "dir": "01_上海市松江区泖港镇",
  "title": "上海市松江区泖港镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "上海市松江区泖港镇",
  "batch": "第一批",
  "province": "上海",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "34.56 亿元",
  "summary": "以农民集中居住推动耕地集中连片，统筹零散农用地和生态用地整理、建设用地复垦，改善村庄居住环境；通过村庄规划、资源整合与产业发展，推进生产、生活、生态空间融合。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以上海市配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具15项（其中创新工具3项）、政策文件18份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "关于上海市改革完善耕地占补平衡制度的操作细则（试行）",
    "detail": "专设「全域土地综合整治项目暂借周转制」，规定整治项目占用耕地和永久基本农田按镇—区—市三级平衡并暂借市级补划空间；将全域整治列为补充耕地来源。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "松江区关于进一步统筹城乡高质量发展 推进农民相对集中居住的实施意见",
    "detail": "规定农民相对集中居住中的跨镇增减挂钩项目实施、减量化「双指标」补贴、宅基地有偿退出（节地率100%，市级40万元/亩节地补贴并由区级1:1配套）及4人及以下户安置面积不超180㎡的标准，并明确平移集中点涉及永久基本农田按「先补后占」办理，是全域整治中增减挂钩与宅基地退出补偿的区级操作依据。",
    "innovation": "",
    "deps": [
     4,
     17,
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "区县"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "农民集中居住与村庄布局优化政策",
    "detail": "统筹推进黄桥村、腰泾村、胡光村等农民集中居住项目，总投资估算10.02亿元，通过宅基地减量60公顷、农民集中居住，推动永久基本农田及储备地块比例由69%提升至74%，20公顷以上大斑块由22个增至25个。",
    "innovation": "以农民集中居住为抓手推动耕地集中连片，实现居住空间与生产空间同步重构",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "上海市特色村落风貌保护传承专项规划",
    "detail": "要求特色村落风貌保护传承与「全域土地综合整治等乡村建设行动结合，放大各类涉农政策集成效应」。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "上海市高标准农田建设规划（2022—2030年）",
    "detail": "全域整治「农用地集中连片整治」核心配套，为整治区高标准农田建设与耕地提质改造提供市级任务与布局依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "上海市松江区人民政府关于同意开展叶榭镇全域土地综合整治试点工作的批复",
    "detail": "同意叶榭镇纳入松江区2023年度全域土地综合整治工作计划，依据国家层面全域土地综合整治制度框架与沪府办〔2022〕13号《关于实施全域土地综合整治的意见》作出，是全域整治试点在区级立项批准口径上的制度环境佐证。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "关于本市实施国土空间用途管制加强耕地保护的若干意见",
    "detail": "明确「聚焦土地整备引导区，大力推进全域土地综合整治」，规定整治项目可在项目区内调优耕地保护空间布局（不适用「先补后占」）。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "关于本市全面推进土地资源高质量利用的若干意见",
    "detail": "「全面推进全域土地综合整治试点，统筹推进农用地整理、建设用地整理和生态保护修复工程」，并叠加低效建设用地减量化、集体经营性建设用地入市、宅基地自愿有偿退出。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "关于加强农业现代化发展 推进农业生产配套「点状供地」工作的实施意见",
    "detail": "建立农业配套「点状供地」ABC分类与融合用地制度，并要求合并编制全市域土地综合整治耕地（永久基本农田）布局优化方案。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "上海市松江区农村集体经营性建设用地入市管理办法",
    "detail": "规定集体经营性建设用地入市的同地同价同权同责原则、入市类型（含乡村旅游、康养、保障性租赁住房）、入市方式（招拍挂／带产业项目挂牌／协议出让）与土地增值收益调节金，是全域整治中集体经营性建设用地入市的区级操作依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "松江区关于扎实推进乡村全面振兴的若干意见",
    "detail": "部署耕地质量保护和提升、耕地与灌溉水监测、高标准农田新增建设与改造提升、农村闲置农户住房盘活利用与整村运营，并明确深化涉农资金统筹整合，是全域整治中涉农资金统筹整合与高标准农田建设的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "上海市规划和自然资源局、松江区政府",
    "policyTitle": "耕地占补平衡指标市级统筹调剂政策",
    "detail": "耕地（永久基本农田）整理方案按「先补后占、占优补优、补占面积比超过1.05」原则编制，市级平台优先将节余的新增建设用地计划指标和耕地占补平衡指标在全市范围内有偿调剂，收益由区政府统筹，市级土地整治项目按不低于1:1配套。",
    "innovation": "「补占面积比超过1.05」的高标准占补平衡规则与市级有偿调剂平台",
    "deps": [
     2
    ],
    "leadLevel": "省",
    "scope": "province",
    "scopeRank": 3,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "全面实施",
    "lead": "松江区政府（区级全域土地综合整治联席会议）",
    "policyTitle": "区级联席会议统筹推进机制",
    "detail": "成立区级全域土地综合整治联席会议，由分管副区长牵头、多部门共同参与，统筹推进泖港镇试点方案编制、报批与实施；泖港镇以全域产业振兴、全域村居改善、全域景观提升为路径，打造黄浦江滨乡村振兴样板。",
    "innovation": "区级联席会议+镇级实施的「区镇联动」组织架构",
    "deps": [
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省"
    ]
   },
   {
    "no": 14,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "上海市市级土地整治项目管理办法",
    "detail": "依据《上海市全域土地综合整治工作管理办法（试行）》制定；市级土地整治项目原则上选址于全市域土地综合整治重点区域，新增耕地纳入重点区域统筹计算。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 15,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "松江区政府、泖港镇政府",
    "policyTitle": "上海市松江区人民政府关于同意《上海市松江区泖港镇全域土地综合整治试点实施方案（2022-2025）》的批复",
    "detail": "对泖港镇全域土地综合整治试点实施方案（2022-2025）作出批复、原则同意方案内容并抄送区规划资源局，是本案例区级最直接的审批依据件。",
    "innovation": "",
    "deps": [
     5,
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "上海市人民政府办公厅关于深入开展全市域土地综合整治 助推郊野空间提质增效的实施意见",
    "docNo": "沪府办〔2025〕26号",
    "issuer": "上海市人民政府办公厅",
    "date": "2025-09-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shanghai.gov.cn/nw12344/20250926/bf63c8476f4a43b5aa96321ab0180d58.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "上海市全域土地综合整治工作管理办法（试行）",
    "docNo": "沪规划资源乡〔2022〕348号",
    "issuer": "上海市规划和自然资源局（经市政府同意）",
    "date": "2022-09",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcwj/zhl/20220926/9c7f5d3cc93343ca92ca03e46828323c.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "关于印发《上海市全域土地综合整治工作指引（试行）》的通知",
    "docNo": "沪规划资源乡〔2022〕349号",
    "issuer": "上海市规划和自然资源局",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcfg-zhl/20221229/1f33e970312a4fb0a4a937168bac2966.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "上海市人民政府关于印发《关于切实改善本市农民生活居住条件和乡村风貌 进一步推进农民相对集中居住的若干意见》的通知",
    "docNo": "沪府规〔2019〕21号",
    "issuer": "上海市人民政府",
    "date": "2019（2024年修订）",
    "status": "现行有效（2024年修订版）",
    "grade": "核验A级",
    "url": "https://www.shanghai.gov.cn/nw12344/20240430/645dcf86b8094d35bd5659570b2f84f9.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "上海市松江区泖港镇全域土地综合整治实施方案",
    "docNo": "未标注（方案公示页未列文号）",
    "issuer": "上海市松江区人民政府",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.songjiang.gov.cn/zmhd/004002/20220907/a06e821e-ff96-483e-a451-011fefd39a98.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "上海市人民政府办公厅转发市规划资源局《关于本市实施国土空间用途管制加强耕地保护的若干意见》的通知",
    "docNo": "沪府办规〔2020〕19号",
    "issuer": "上海市人民政府办公厅",
    "date": "2020-12-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcwj/tdgl/20250904/b8beb5bef38d40188c172baaf3d75943.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "上海市人民政府印发修订后的《关于本市全面推进土地资源高质量利用的若干意见》的通知",
    "docNo": "沪府规〔2023〕12号",
    "issuer": "上海市人民政府",
    "date": "2023-10-24",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/nw2520/20231011/f6d36f547f904b0fbfeb6b3a96fa4c1b.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "关于印发《上海市市级土地整治项目管理办法》的通知",
    "docNo": "沪规划资源施〔2024〕55号",
    "issuer": "上海市规划和自然资源局",
    "date": "2024-02-27",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shanghai.gov.cn/gwk/search/content/da9d0d44a01e4af6a28599f3d9ffdc31",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "关于印发《关于加强农业现代化发展 推进农业生产配套「点状供地」工作的实施意见》的通知",
    "docNo": "未获取",
    "issuer": "上海市规划和自然资源局、上海市农业农村委员会",
    "date": "2024-04-03",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcwj/tdgl/20240403/3b460dd0d68c4b08960b24c7fcb8b309.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "关于印发《关于上海市改革完善耕地占补平衡制度的操作细则（试行）》的通知",
    "docNo": "未获取",
    "issuer": "上海市规划和自然资源局",
    "date": "2024-12-19",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcwj/tdgl/20241220/3e2cc81a785446f6a7ea65da7a368b59.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "关于印发《上海市特色村落风貌保护传承专项规划》的通知",
    "docNo": "沪府〔2024〕21号（市政府批复）",
    "issuer": "上海市人民政府（批复）、上海市规划和自然资源局（印发）",
    "date": "2024-04-24",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcwj/cxgh/20240424/c0601fcd06754750840fa4bf84a87b50.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "关于印发《上海市高标准农田建设规划（2022—2030年）》的通知",
    "docNo": "未获取",
    "issuer": "上海市农业农村委员会（经市政府同意）",
    "date": "2022-10-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.shanghai.gov.cn/gwk/search/content/d6af93e9f58a44f48ee884810b599eed",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "01",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "上海市松江区人民政府关于同意《上海市松江区泖港镇全域土地综合整治试点实施方案（2022-2025）》的批复",
    "docNo": "沪松府〔2023〕10号",
    "issuer": "上海市松江区人民政府（办公室 2023-02-02 印发）",
    "date": "2023-01-31 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.songjiang.gov.cn/govxxgk/SHSJ43/2023-01-31/81f7d774-2358-441b-8578-af207a49391b.html",
    "attachUrl": "",
    "sourceNote": "文书形态：未见废止标注",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "上海市松江区人民政府关于印发《上海市松江区农村集体经营性建设用地入市管理办法》的通知",
    "docNo": "沪松府规〔2026〕1号",
    "issuer": "上海市松江区人民政府",
    "date": "2026-04-08 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.songjiang.gov.cn/govxxgk/SHSJ31/2026-04-08/23991201-cd32-4e3b-8b7f-84663a46027d.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自 2026-05-15 施行，有效期至 2027-12-31（现行有效）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "上海市松江区人民政府关于同意开展叶榭镇全域土地综合整治试点工作的批复",
    "docNo": "沪松府〔2023〕77号",
    "issuer": "上海市松江区人民政府（办公室 2023-05-29 印发）",
    "date": "2023-05-29 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.songjiang.gov.cn/govxxgk/SHSJ43/2023-05-29/ada8bd65-bf1c-45f5-9b0c-6d737d741579.html",
    "attachUrl": "",
    "sourceNote": "文书形态：未见废止标注",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "上海市松江区人民政府关于印发《松江区关于扎实推进乡村全面振兴的若干意见》的通知",
    "docNo": "沪松府〔2025〕142号",
    "issuer": "上海市松江区人民政府（办公室 2025-11-07 印发）",
    "date": "2025-11-07 发布（经 2025-10-28 第111次区政府常务会议审议通过）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.songjiang.gov.cn/govxxgk/SHSJ43/2025-11-07/739dd439-5412-4efd-9d72-73d9d1c75427.html",
    "attachUrl": "",
    "sourceNote": "文书形态：未见废止标注",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "上海市松江区人民政府关于印发《松江区关于进一步统筹城乡高质量发展 推进农民相对集中居住的实施意见》的通知",
    "docNo": "沪松府〔2022〕44号",
    "issuer": "上海市松江区人民政府（办公室 2022-03-16 印发）",
    "date": "2022-03-15 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.shanghai.gov.cn/gwk/search/content/13f49b20200b4174b78d9d6a6c57c2d9",
    "attachUrl": "",
    "sourceNote": "文书形态：门户未标注效力状态（未列入现行区级规范性文件目录，效力待官方复核）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "关于印发《泖港镇关于推进农民相对集中居住的实施办法（试行）》的通知",
    "docNo": "泖府字〔2020〕1号",
    "issuer": "上海市松江区泖港镇人民政府",
    "date": "2020-01-13 印发",
    "status": "现行有效（试行）",
    "grade": "核验A级",
    "url": "https://www.songjiang.gov.cn/govxxgk/SHSJ65/2020-01-13/ea6e9a01-a7c5-49e4-a45f-644e9fd975bb.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "直辖市区镇",
    "rank": 1,
    "caseId": "01",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 4,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 5,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 14,
   "provinceTools": 11,
   "nationalTools": 0,
   "provinceBasis": 10,
   "nationalBasis": 0,
   "localDocs": 7,
   "provinceDocs": 11,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 15,
   "docs": 18,
   "innovations": 3,
   "implementation": 12,
   "pilot": 3,
   "gradeA": 17,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "02",
  "dir": "02_上海市金山区廊下镇",
  "title": "上海市金山区廊下镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "上海市金山区廊下镇",
  "batch": "第一批",
  "province": "上海",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "12.1 亿元",
  "summary": "创新「标准地模块」，归纳设施养殖、设施种植、露地种植、乡居田园四类组合用地模式，可新增耕地468.3亩；蘑菇种植亩均产值可达200万元，构建「猪—沼—蔬」循环生态模式。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以上海市配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具15项（其中创新工具3项）、政策文件18份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "关于上海市改革完善耕地占补平衡制度的操作细则（试行）",
    "detail": "专设「全域土地综合整治项目暂借周转制」，明确整治项目占用耕地和永久基本农田的镇—区—市三级平衡与市级补划空间暂借归还规则。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "金山区规划和自然资源局、金山区发展和改革委员会、金山区财政局",
    "policyTitle": "金山区集建区外现状建设用地减量化指标管理办法",
    "detail": "规定减量化指标含新增建设用地指标与耕地占补平衡指标、指标取得流程（计划下达—立项预审—评估—签约—立项—验收—地类确认）、后期管护要求及补贴标准（宅基地减量100万元/亩、工矿70万元/亩、其他35万元/亩，仅新增建设用地指标20万元/亩），是全域整治中减量化指标统筹的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "中共金山区委办公室 金山区人民政府办公室印发《金山区关于乡村建设行动推进实施方案（2023-2025年）》的通知",
    "detail": "明确乡村规划引领先导（重点推进农民集中居住点、乡村振兴示范村和全域土地综合整治试点的整体风貌提升），并提出持续推进低效建设用地减量化、规范开展城乡建设用地增减挂钩、推进全域土地综合整治、盘活农村存量建设用地，以及土地出让收入用于农业农村部分可统筹支持乡村建设，是全域整治中指标统筹与涉农资金整合的区级依据。",
    "innovation": "",
    "deps": [
     15,
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县",
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "「一核两翼三片」功能布局与项目集聚政策",
    "detail": "以廊下镇「一核两翼三片」空间结构中的设施菜田片为基础，深化为「循环生态种养基地」「设施菜田优势区」「设施粮田集中区」「田园水乡综合提升区」，突出项目集聚、资金汇集、行动统筹、效益综合，共谋划7类16个项目，聚集资金12.58亿元。",
    "innovation": "以功能片区为载体的项目集聚与资金汇集机制，实现「多规合一」下的项目统筹",
    "deps": [
     1,
     2,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "金山区政府、上海市规划和自然资源局",
    "policyTitle": "设施农用地腾挪与循环生态农业政策",
    "detail": "通过腾挪设施农用地指标102亩，建设4层楼式商品猪育肥舍，实现年出栏12万头；新增用于蘑菇工厂化生产的设施农用地51公顷（现状用地的4倍），引进3家龙头企业，蘑菇种植亩均产值达200万元，构建「猪—沼—蔬」循环生态模式。",
    "innovation": "设施农用地跨村腾挪与「猪—沼—蔬」循环生态模式，实现产业现代化、集约化、生态化",
    "deps": [
     1,
     2,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "上海市特色村落风貌保护传承专项规划",
    "detail": "要求将特色村落风貌保护传承与全域土地综合整治等乡村建设行动结合，集中推进典型风貌试点单元先行先试。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "上海市高标准农田建设规划（2022—2030年）",
    "detail": "全域整治农用地集中连片整治的核心配套，为整治区高标准农田建设与耕地提质改造提供市级任务依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "关于本市实施国土空间用途管制加强耕地保护的若干意见",
    "detail": "明确「聚焦土地整备引导区，大力推进全域土地综合整治」，规定整治项目可在项目区内调优耕地保护空间布局。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "关于本市全面推进土地资源高质量利用的若干意见",
    "detail": "「全面推进全域土地综合整治试点，统筹推进农用地整理、建设用地整理和生态保护修复工程」，叠加低效建设用地减量化与集体经营性建设用地入市。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "关于加强农业现代化发展 推进农业生产配套「点状供地」工作的实施意见",
    "detail": "点状供地与农业融合用地制度，要求合并编制全市域土地综合整治耕地（永久基本农田）布局优化方案，是廊下现代农业片区整治的用地配套。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "金山区人民政府延长《关于金山区改善农民生活居住条件和乡村风貌 推进农民相对集中居住的实施意见》有效期的通知",
    "detail": "将《关于金山区改善农民生活居住条件和乡村风貌 推进农民相对集中居住的实施意见》有效期延长至2029-12-17，为农民相对集中居住、宅基地及住房建设管理、闲置农房盘活等工具提供现行有效的区级效力延续依据。",
    "innovation": "",
    "deps": [
     4,
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省",
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "多元资金统筹与市场投资分类管理政策",
    "detail": "区分财政资金与社会资金投入，乡村田园艺术村等产业项目属市场投资不纳入全域整治项目进度考核；统筹农民集中居住、道路整治、河道整治、土地整治等各类资金，形成「资金汇集、行动统筹」的投入格局。",
    "innovation": "将市场投资项目与整治考核项目分类管理，避免社会资本投资受行政考核约束",
    "deps": [
     2,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "金山区人民政府关于同意《上海市金山区廊下镇全域土地综合整治实施方案（2022-2025）》的批复",
    "detail": "对廊下镇全域土地综合整治实施方案（2022-2025）作出批复，原则同意方案并要求细化任务、盘活土地资源、项目聚焦与资金聚焦，是本案例区级最直接的审批依据件。",
    "innovation": "",
    "deps": [
     5,
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "上海市市级土地整治项目管理办法",
    "detail": "市级土地整治项目选址于全市域土地综合整治重点区域内，并允许区级整治实施领导小组与区级全域土地综合整治联席会议合并。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 15,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "金山区政府、廊下镇政府",
    "policyTitle": "金山区征收集体土地房屋补偿实施办法",
    "detail": "规定征收集体土地房屋补偿的标准、计户与程序规则，是全域整治中土地权属调整与征地补偿安置的区级依据。（该件有效期至2026-09-29，引用前须核续期或替代件）",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "上海市人民政府办公厅关于深入开展全市域土地综合整治 助推郊野空间提质增效的实施意见",
    "docNo": "沪府办〔2025〕26号",
    "issuer": "上海市人民政府办公厅",
    "date": "2025-09-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shanghai.gov.cn/nw12344/20250926/bf63c8476f4a43b5aa96321ab0180d58.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "上海市全域土地综合整治工作管理办法（试行）",
    "docNo": "沪规划资源乡〔2022〕348号",
    "issuer": "上海市规划和自然资源局（经市政府同意）",
    "date": "2022-09",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcwj/zhl/20220926/9c7f5d3cc93343ca92ca03e46828323c.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "关于印发《上海市全域土地综合整治工作指引（试行）》的通知",
    "docNo": "沪规划资源乡〔2022〕349号",
    "issuer": "上海市规划和自然资源局",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcfg-zhl/20221229/1f33e970312a4fb0a4a937168bac2966.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "上海市人民政府关于印发《关于切实改善本市农民生活居住条件和乡村风貌 进一步推进农民相对集中居住的若干意见》的通知",
    "docNo": "沪府规〔2019〕21号",
    "issuer": "上海市人民政府",
    "date": "2019（2024年修订）",
    "status": "现行有效（2024年修订版）",
    "grade": "核验A级",
    "url": "https://www.shanghai.gov.cn/nw12344/20240430/645dcf86b8094d35bd5659570b2f84f9.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "上海市金山区廊下镇全域土地综合整治实施方案",
    "docNo": "未标注（方案为金府〔2023〕49号批复附件）",
    "issuer": "上海市金山区人民政府",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shanghai.gov.cn/gwk/search/content/ede042b1a1e0403fad25a202c4211e28",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "上海市人民政府办公厅转发市规划资源局《关于本市实施国土空间用途管制加强耕地保护的若干意见》的通知",
    "docNo": "沪府办规〔2020〕19号",
    "issuer": "上海市人民政府办公厅",
    "date": "2020-12-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcwj/tdgl/20250904/b8beb5bef38d40188c172baaf3d75943.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "上海市人民政府印发修订后的《关于本市全面推进土地资源高质量利用的若干意见》的通知",
    "docNo": "沪府规〔2023〕12号",
    "issuer": "上海市人民政府",
    "date": "2023-10-24",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/nw2520/20231011/f6d36f547f904b0fbfeb6b3a96fa4c1b.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "关于印发《上海市市级土地整治项目管理办法》的通知",
    "docNo": "沪规划资源施〔2024〕55号",
    "issuer": "上海市规划和自然资源局",
    "date": "2024-02-27",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shanghai.gov.cn/gwk/search/content/da9d0d44a01e4af6a28599f3d9ffdc31",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "关于印发《关于加强农业现代化发展 推进农业生产配套「点状供地」工作的实施意见》的通知",
    "docNo": "未获取",
    "issuer": "上海市规划和自然资源局、上海市农业农村委员会",
    "date": "2024-04-03",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcwj/tdgl/20240403/3b460dd0d68c4b08960b24c7fcb8b309.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "关于印发《关于上海市改革完善耕地占补平衡制度的操作细则（试行）》的通知",
    "docNo": "未获取",
    "issuer": "上海市规划和自然资源局",
    "date": "2024-12-19",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcwj/tdgl/20241220/3e2cc81a785446f6a7ea65da7a368b59.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "关于印发《上海市特色村落风貌保护传承专项规划》的通知",
    "docNo": "沪府〔2024〕21号（市政府批复）",
    "issuer": "上海市人民政府（批复）、上海市规划和自然资源局（印发）",
    "date": "2024-04-24",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.sh.gov.cn/zcwj/cxgh/20240424/c0601fcd06754750840fa4bf84a87b50.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "关于印发《上海市高标准农田建设规划（2022—2030年）》的通知",
    "docNo": "未获取",
    "issuer": "上海市农业农村委员会（经市政府同意）",
    "date": "2022-10-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.shanghai.gov.cn/gwk/search/content/d6af93e9f58a44f48ee884810b599eed",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "金山区人民政府关于同意《上海市金山区廊下镇全域土地综合整治实施方案（2022-2025）》的批复",
    "docNo": "金府〔2023〕49号",
    "issuer": "上海市金山区人民政府",
    "date": "2023-05-19 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.shanghai.gov.cn/gwk/search/content/ede042b1a1e0403fad25a202c4211e28",
    "attachUrl": "",
    "sourceNote": "文书形态：未见废止标注",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "区规划资源局 区发改委 区财政局关于印发《金山区集建区外现状建设用地减量化指标管理办法》的通知",
    "docNo": "未标注（部门联合发文，门户条目页未列文号）",
    "issuer": "金山区规划和自然资源局、金山区发展和改革委员会、金山区财政局（经区政府同意）",
    "date": "2021-12-27 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.jinshan.gov.cn/zhengwu/ghzyj-ghjh/2024/332/71a37f16e95472d668a6b705b13dbd25.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自 2022-01-01 起施行",
    "level": "区县",
    "levelHit": "区政府",
    "rank": 1,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "中共金山区委办公室 金山区人民政府办公室印发《金山区关于乡村建设行动推进实施方案（2023-2025年）》的通知",
    "docNo": "金委办发〔2023〕11号",
    "issuer": "中共金山区委办公室、金山区人民政府办公室",
    "date": "2023-07-12 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.jinshan.gov.cn/zhengwu/zfwj-dzhhxxwj/2024/331/43baeac4773e5f5a9d2b481a74e0904f.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "金山区人民政府延长《关于金山区改善农民生活居住条件和乡村风貌 推进农民相对集中居住的实施意见》有效期的通知",
    "docNo": "金府规发〔2024〕3号",
    "issuer": "上海市金山区人民政府",
    "date": "2024-12-16 发布",
    "status": "有效期延长至 2029-12-17（有效）",
    "grade": "核验A级",
    "url": "https://www.jinshan.gov.cn/zhengwu/qzf-gfxwj/2025/46/531.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "金山区人民政府关于印发《金山区征收集体土地房屋补偿实施办法》的通知",
    "docNo": "金府规发〔2023〕3号",
    "issuer": "上海市金山区人民政府",
    "date": "2023-10-26 发布",
    "status": "有效（有效期至 2026-09-29）",
    "grade": "核验A级",
    "url": "https://www.jinshan.gov.cn/zhengwu/qzf-gfxwj/2024/331/6c2d5b648f915787a2ece814a2581fc0.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "上海市人民政府办公厅印发《关于实施全域土地综合整治的意见》的通知",
    "docNo": "沪府办〔2022〕13号",
    "issuer": "上海市人民政府办公厅",
    "date": "2022-03-09 印发",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shanghai.gov.cn/nw12344/20220309/b35aa3a2ae464a95a60cb345ae095481.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "02",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 3,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 4,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 15,
   "provinceTools": 12,
   "nationalTools": 0,
   "provinceBasis": 12,
   "nationalBasis": 0,
   "localDocs": 6,
   "provinceDocs": 12,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 15,
   "docs": 18,
   "innovations": 3,
   "implementation": 14,
   "pilot": 1,
   "gradeA": 17,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "03",
  "dir": "03_江苏省苏州市昆山市张浦镇",
  "title": "江苏省苏州市昆山市张浦镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江苏省苏州市昆山市张浦镇",
  "batch": "第一批",
  "province": "江苏",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "传统工业重镇与现代农业强镇并重，2020至2023年全镇耕地净增加5140亩；试点计划新增耕地1987.1亩、节余建设用地指标1514亩、整治河道8.4公里，实施赵陵山良渚文化遗址保护，探索特色文化保护新模式。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以《江苏省国土空间全域综合整治方案》等江苏省级政策文件、苏州市本级政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具30项、政策文件16份（其中省、市级文件11份）。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "昆山市自然资源和规划局、昆山市农业农村局，张浦镇人民政府",
    "policyTitle": "永久基本农田布局优化与耕地集中连片整治",
    "detail": "依据《江苏省国土空间全域综合整治方案》与《中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见》，张浦镇在试点范围内统筹永久基本农田布局优化与耕地集中连片整治，按国家级工具箱（1.0版）附表第6份关于调整程序与规模控制的要求，编制永久基本农田调整方案并报批。通过城乡建设用地增减挂钩、高标准农田建设、高标准农业园区建设、补充耕地等项目协同实施，2020年至2023年全镇实现耕地净增加5140亩，高标准农田基本实现镇域动态全覆盖，耕地由「大而散」转向集中连片，2023年粮食种植面积与总产量创近5年新高。",
    "innovation": "多项目协同实现镇域耕地净增加5140亩、高标准农田动态全覆盖",
    "deps": [
     1,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "昆山市自然资源和规划局、昆山市财政局，张浦镇人民政府",
    "policyTitle": "增减挂钩节余指标流转使用与收益反哺",
    "detail": "依据《江苏省增减挂钩节余指标流转使用管理暂行办法》与苏州市加强耕地保护和改进占补平衡的实施意见，张浦镇通过农村建设用地拆旧复垦产生城乡建设用地增减挂钩节余指标，在优先满足乡村发展用地需求后，节余指标按江苏省支持政策在省内交易，所得资金全部用于支持乡村振兴。试点计划通过农用地整理和建设用地整理新增耕地1987.1亩、节余建设用地指标1514亩，指标交易收益定向用于安置补偿、基础设施配套与耕地质量提升，形成「复垦—交易—反哺」闭环。",
    "innovation": "节余指标省内交易、收益全额反哺乡村振兴",
    "deps": [
     4,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "补充耕地指标有偿调剂与省财政启动资金",
    "detail": "按照《江苏省国土空间全域综合整治方案》与江苏省关于学习运用「千万工程」经验深入推进全域土地综合整治的实施意见，张浦镇将整治新产生的补充耕地指标在优先满足乡村发展用地需求后，节余指标在省内交易；同时依据江苏省支持政策，由省财政统筹试点地区一定规模的补充耕地指标作为启动资金支持项目建设，目前省财政已支持15.96亿元。补充耕地指标有偿调剂与省级启动资金相结合，缓解了整治项目前期资金缺口，实现耕地数量、质量、生态「三位一体」保护与指标价值转化。",
    "innovation": "以省级统筹补充耕地指标作启动资金，缓解项目前期资金缺口",
    "deps": [
     3,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "低效建设用地腾退为生态用地与流量指标申请",
    "detail": "依据《市政府印发关于促进低效建设用地再开发提升土地综合利用水平的实施意见的通知》与江苏省全域土地综合整治实施意见，张浦镇对镇域内低效工业用地实施腾退，鼓励低效建设用地腾退为生态用地，并依申请下达试点示范项目所需建设用地流量指标。通过空间的腾挪并转，两个合计超过3000亩的废弃工矿区域生态功能逐步恢复；德园工业园集聚200多家欧美企业，获评全国首个专精特新产业园（示范），实现低效用地再开发与产业能级提升同步推进。",
    "innovation": "低效用地腾退为生态用地＋流量指标申请，实现空间腾挪并转",
    "deps": [
     3,
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局、昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "耕作层剥离与再利用",
    "detail": "依据《市政府办公室转发关于加快推动占用耕地耕作层剥离和再利用工作的意见的通知》，张浦镇在农用地整理与建设用地拆旧复垦中同步实施耕作层剥离，将剥离的耕作层土壤优先用于新开垦耕地、复垦耕地和劣质耕地改良，提高补充耕地质量。通过耕作层剥离与再利用，整治新增的1987.1亩耕地耕作层厚度与土壤肥力得到保障，避免了「占优补劣」，实现了耕地数量增加与质量提升的同步，也为高标准农田建设提供了合格的耕作层基础。",
    "innovation": "耕作层剥离土壤定向用于补充耕地，避免「占优补劣」",
    "deps": [
     6
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "昆山市政府、张浦镇政府",
    "policyTitle": "关于全面统筹土地资源配置的实施细则（试行）",
    "detail": "规定土地指标含补充耕地指标与土地综合整治建新指标，并明确基本农田跨区镇保护补偿费20万元/亩、低效存量建设用地土地综合整治拆旧复垦奖励10万元/亩、建新指标竞买不低于50万元/亩，是全域整治中指标统筹与补偿激励的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "昆山市农业农村局、昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "农用地整理与高标准农田建设",
    "detail": "落实《市政府关于苏州市高标准农田建设规划（2021～2025年）的批复》与《市政府办公室关于转发苏州市「十四五」高标准农田改造提升实施方案的通知》，张浦镇整体推进农用地整理与高标准农田建设，试点计划改善提升高标准农田13590亩。通过小田并大田、田块归并与灌排配套，耕地地块总数减少、地块平均面积明显提升；高标准农田基本实现镇域动态全覆盖，赵陵山片区已完成2710亩高标准农田建设并与周边耕地组成4500亩规模化高标准农田，为机械化、规模化经营奠定基础。",
    "innovation": "高标准农田动态全覆盖，形成4500亩规模化连片良田",
    "deps": [
     9,
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "昆山市自然资源和规划局、昆山市工业和信息化局，张浦镇人民政府",
    "policyTitle": "建设用地整理与低效工业用地盘活",
    "detail": "按照《市政府印发关于促进低效建设用地再开发提升土地综合利用水平的实施意见的通知》与江苏省全域土地综合整治实施意见，张浦镇系统推进建设用地整理，试点计划节余建设用地指标1514亩。通过对镇村工业集中区实施优化整治提升，腾退低效工业企业、推动工业用地集中连片，全镇形成从「一根线束」到「一辆汽车」的汽车零部件产业链，并落地益海嘉里、优诺乳业等近30家国际食品头部企业，2023年创造近百亿产值、规模居昆山第一。",
    "innovation": "以低效用地再开发支撑产业链集聚，食品产业产值近百亿元",
    "deps": [
     3,
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "昆山市自然资源和规划局、苏州市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "废弃工矿生态修复",
    "detail": "依据《苏州市国土空间生态保护和修复规划（2021—2035年）》与江苏省全域土地综合整治实施意见，张浦镇针对镇域内振苏砖瓦厂、南姚砖瓦厂两个合计超过3000亩的废弃工矿开展系统修复。区域内原有生态功能退化、生态系统受损、空间格局失衡问题明显，通过空间腾挪并转、地形重塑、植被恢复与水体治理，恢复生态功能并提升生态空间连通性，把废弃工矿转化为生态空间与产业空间，实现「变废为宝」。",
    "innovation": "超3000亩废弃工矿系统修复，生态功能与空间格局同步恢复",
    "deps": [
     3,
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "昆山市水务局、昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "河道综合整治与幸福河湖建设",
    "detail": "结合《苏州市国土空间生态保护和修复规划（2021—2035年）》与江苏省全域土地综合整治实施意见，张浦镇按每年打造10条生态美丽河湖的进度推进河道生态环境整治，试点计划整治河道8.4公里、治理村庄水体75.7亩。通过生态修复、景观提升、岸线优化等措施，高质量融入海绵城市建设，有效提升调蓄能力与水生态环境质量；试点包含的5个河道综合整治项目已全部竣工，全镇共有4条河道被评为苏州市级幸福河湖，实现了老百姓「开门亲水」「推窗见绿」。",
    "innovation": "5个河道整治项目全部竣工，4条河道获评苏州市级幸福河湖",
    "deps": [
     3,
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "昆山市文体广电和旅游局、昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "传统村落活化利用与历史文化保护",
    "detail": "依据《苏州市国土空间生态保护和修复规划（2021—2035年）》与《江苏省全域土地综合整治项目管理办法》，张浦镇在整治中同步推进历史文化资源保护，境内18处不可移动文物、1个中国传统村落、3个江苏省传统村落得到系统保护与活化利用。整治提升后的尚明甸村入选第六批江苏省传统村落，实现从「传统乡村」到「乡野硅谷」的蝶变，已有11家科创企业、8家文旅企业扎根；与2020年相比，尚明甸村2023年村集体经济收入增加300余万元、村民人均年收入增长23%。",
    "innovation": "传统村落活化利用实现「乡野硅谷」蝶变，村集体增收300余万元",
    "deps": [
     2,
     3,
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "昆山市农业农村局、昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "公共空间治理与「美丽菜园」建设",
    "detail": "按照《苏州市国土空间生态保护和修复规划（2021—2035年）》与江苏省全域土地综合整治实施意见关于公共空间治理的部署，张浦镇大力推进河道沟渠、村道巷道、田间庭院等重点区域的集中整治覆绿，对抛荒地、自留地等土地资源统一规划、集聚整合，打造蔬菜可食、景观可赏的「美丽菜园」。全镇累计创建五星级庭院433户、数量位居昆山市首位，建成「美丽菜园」4213.9亩，获评2022年苏州市农村人居环境整治提升典型案例与昆山2023年农村人居环境整治工作镇级典型案例。",
    "innovation": "五星级庭院433户居昆山首位，「美丽菜园」建成4213.9亩",
    "deps": [
     3,
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "昆山市农业农村局，张浦镇人民政府",
    "policyTitle": "高标准池塘生态化改造",
    "detail": "依据《苏州市国土空间生态保护和修复规划（2021—2035年）》与江苏省全域土地综合整治实施意见，张浦镇在整治中同步推进池塘生态化改造与黑臭水体治理，试点计划建成高标准池塘2154.5亩。通过池塘生态化改造项目与河道综合整治协同实施，增强生态系统完整性和生态空间连通性，提升养殖尾水治理水平，推动水产养殖由粗放型向生态化、标准化转变，与高标准农田、高标准农业园区共同构成现代农业空间格局。",
    "innovation": "高标准池塘2154.5亩，生态化改造提升养殖尾水治理水平",
    "deps": [
     3,
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "昆山市政府、张浦镇政府",
    "policyTitle": "昆山市工业用地调查及低效用地再开发实施方案",
    "detail": "部署低效用地再开发规划编制与实施计划编制，并明确由国土局牵头制定推进土地节约集约利用政策性文件的组织分工，是全域整治中低效用地再开发的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "昆山市政府、张浦镇政府",
    "policyTitle": "昆山市防止耕地「非粮化」稳定粮食生产实施意见",
    "detail": "严格落实耕地保护制度（禁止占用永久基本农田种树挖塘），推进高标准农田集中连片建设力争全覆盖，并加强耕地质量建设，是全域整治中耕地保护与高标准农田建设的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 16,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "昆山市农业农村局、昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "农村宅基地制度改革与村庄集聚",
    "detail": "依据《中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见》与江苏省全域土地综合整治实施意见，张浦镇结合农村宅基地制度改革推进村庄集聚与农房更新。在赵陵山片区引导居民组团翻建，有序实施景观绿化、道路整治和设施完善；通过宅基地退出与复垦同步产生增减挂钩节余指标，保障农民安置与农村基础设施用地，同步推进农业转移人口市民化，搬迁村民保留原集体经济组织成员权益，就近享受城镇优质公共服务。",
    "innovation": "宅基地制度改革与村庄集聚联动，组团翻建有序实施",
    "deps": [
     3,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 17,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "集体经营性建设用地入市",
    "detail": "依据《江苏省国土空间全域综合整治方案》与《市政府印发关于促进低效建设用地再开发提升土地综合利用水平的实施意见的通知》，张浦镇对整治归并、零星插花的存量集体建设用地，在符合规划属工业、商业等经营性用途的前提下，由土地所有权人通过出让、出租等方式交由单位或个人使用，实行「先整治、再验收、后入市」。集体经营性建设用地入市与镇村工业集中区优化整治提升相衔接，为食品加工、文旅等产业导入提供合规用地保障，拓宽村集体与农民财产性收入渠道。",
    "innovation": "「先整治、再验收、后入市」的集体建设用地盘活路径",
    "deps": [
     1,
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 18,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "「三区三线」局部优化调整",
    "detail": "按照国家级工具箱（1.0版）附表第3份关于「三区三线」局部优化调整的要求与《中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见》，张浦镇在确保耕地和永久基本农田保护面积不减少、生态保护红线不突破的前提下，结合整治项目对项目区内的「三区三线」作局部优化调整。通过统筹划定农业、生态、城镇空间，解决历史遗留的耕地与建设用地交错、生态空间破碎问题，为整治项目落地提供规划依据。",
    "innovation": "底线不突破前提下局部优化「三区三线」，化解空间交错矛盾",
    "deps": [
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 19,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "昆山市财政局、昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "涉农资金统筹整合与省级支持",
    "detail": "依据《中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见》与江苏省全域土地综合整治实施意见关于资金保障的部署，张浦镇统筹整合高标准农田建设、乡村振兴、土地整理、农房改造、增减挂钩、人居环境整治、废弃工矿生态修复等各条线涉农资金，形成资金合力；同时争取省级支持，江苏省支持政策明确产生的增减挂钩指标、补充耕地指标在优先满足乡村发展用地需求后可节余部分省内交易、所得资金用于支持乡村振兴，省财政已支持15.96亿元，集中投入整治项目建设。",
    "innovation": "多渠道理顺涉农资金，叠加省级财政支持集中投入",
    "deps": [
     3,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 20,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局、昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "政策性金融资金支持",
    "detail": "在《市政府办公室关于转发苏州市「十四五」高标准农田改造提升实施方案的通知》确定的投入保障机制下，张浦镇积极对接国家级工具箱（1.0版）附表第4份明确的国家开发银行、农业发展银行综合服务团队，在贷款期限、额度、利率上争取优惠，并通过绿色通道获得全链条融资服务。政策性金融资金与财政资金、指标交易收益相衔接，为试点15万亩整治范围、多类子项目提供长期稳定的资金支撑。",
    "innovation": "以市级投入保障机制对接国家政策性金融，解决长周期资金需求",
    "deps": [
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 21,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "昆山市工业和信息化局、昆山市财政局，张浦镇人民政府",
    "policyTitle": "镇村工业集中区优化整治提升奖励资金",
    "detail": "依据《市政府印发关于促进低效建设用地再开发提升土地综合利用水平的实施意见的通知》与江苏省全域土地综合整治实施意见，张浦镇推进镇村工业集中区优化整治提升，成为昆山首个获得苏州市镇村工业集中区优化整治提升项目奖励资金的区镇。奖励资金定向用于集中区基础设施提升、低效企业腾退补偿与产业配套，推动工业用地集中连片、容积率与亩均产出同步提高，德园工业园集聚200多家欧美企业并获评全国首个专精特新产业园（示范）。",
    "innovation": "昆山首个获苏州市镇村工业集中区优化整治提升奖励资金的区镇",
    "deps": [
     3,
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 22,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "昆山市自然资源和规划局、昆山市财政局，张浦镇人民政府",
    "policyTitle": "耕地保护补偿与占补平衡资金",
    "detail": "依据《中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见》与江苏省全域土地综合整治实施意见，张浦镇严格落实耕地占补平衡责任，将补充耕地指标收益与耕地保护补偿资金定向用于耕地质量提升和后期管护，建立整治项目后期管护的资金保障机制。补偿与管护责任挂钩，明确镇、村两级管护主体，确保整治形成的5140亩新增耕地和镇域高标准农田长期稳定利用，避免「重建轻管」，为粮食稳产保供提供持续支撑。",
    "innovation": "占补平衡收益与管护责任挂钩，建立后期管护资金机制",
    "deps": [
     3,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 23,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "昆山市政府、张浦镇政府",
    "policyTitle": "昆山市生态补偿实施办法",
    "detail": "规定基本农田每亩补偿100元、水稻田每亩补偿700元，并明确基本农田数量不减少、质量不降低、禁止闲置荒芜的保护责任，是全域整治中耕地保护补偿的区级标准依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 24,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "试点推进",
    "lead": "昆山市人民政府、张浦镇人民政府，昆山市自然资源和规划局",
    "policyTitle": "全域土地综合整治国家试点与镇域整体推进",
    "detail": "依据国家级工具箱（1.0版）附表第1、2份，张浦镇全域土地综合整治试点于2021年1月列入国家试点名单，2024年6月入选自然资源部首批15个全域土地综合整治试点典型案例。试点按《江苏省国土空间全域综合整治方案》要求，选取除中心镇区以外全镇91.7%的区域，总面积15万亩，覆盖20个行政村、5个社区及双洋潭、白莲湖、杨氏田湖3个片区，实现镇域整体推进。",
    "innovation": "以91.7%镇域范围整体推进，入选自然资源部首批15个典型案例",
    "deps": [
     1,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 25,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "全面实施",
    "lead": "昆山市人民政府，张浦镇人民政府",
    "policyTitle": "市级统筹、部门协同的推进机制",
    "detail": "按照《江苏省全域土地综合整治项目管理办法》与《江苏省国土空间全域综合整治方案》关于组织实施的要求，昆山市成立张浦镇全域土地综合整治试点项目工作领导小组，发改、资源规划、住建、交通、水务、农业农村、文体广旅等12个相关部门共同参与；镇级层面细化成立五个工作小组，实体化运作、「挂图作战」，形成市级统筹、部门协同、镇负主责、村抓落实的纵向贯通、横向联动推进机制，保障多类子项目同步实施、按期竣工。",
    "innovation": "「市级统筹、部门协同、镇负主责、村抓落实」四级联动机制",
    "deps": [
     2,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 26,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "项目全过程管理与验收规范",
    "detail": "依据《江苏省全域土地综合整治项目管理办法》与江苏省地方标准《全域土地综合整治项目验收规范》（DB32/T 5048-2025），张浦镇建立从前期谋划、方案审批、项目实施、竣工验收、后期管护的全链条管理机制，按地方标准明确的验收内容、程序与指标开展分阶段验收与绩效评价。同时依据《市政府印发关于促进低效建设用地再开发提升土地综合利用水平的实施意见的通知》，对腾退低效用地与新增耕地实行台账化管理，确保项目实施过程可追溯、成效可核查。",
    "innovation": "按省级地方标准开展分阶段验收，项目成效可追溯可核查",
    "deps": [
     5,
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 27,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "昆山市自然资源和规划局，张浦镇人民政府",
    "policyTitle": "实施方案编制与联合审查",
    "detail": "按照国家级工具箱（1.0版）附表第3份关于实施方案编制的要求与《江苏省全域土地综合整治项目管理办法》，张浦镇按照实施方案编制大纲编制项目实施方案，明确整治类型、项目清单、资金平衡与实施时序，涵盖建设用地拆旧复垦、农用地整理、高标准农田建设、公共空间治理、乡村生态保护修复等五类项目；方案由市级初审、省级联合审查后批复实施，审查重点覆盖规划符合性、永久基本农田调整、「三区三线」优化与资金平衡，减少重复报批、压缩审批周期。",
    "innovation": "五类项目一次性编制、一次性审查，压缩审批周期",
    "deps": [
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 28,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "张浦镇人民政府，昆山市自然资源和规划局",
    "policyTitle": "群众参与与权益保障、底线管控",
    "detail": "落实《中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见》关于群众权益保障的要求，以及国家级工具箱（1.0版）附表第5份划定的负面清单，张浦镇严守底线规范开展整治，禁止大拆大建、变相占用永久基本农田、违规调整生态保护红线、搞人造景观与增加地方政府隐性债务；实施方案编制与项目实施中充分征求村民意见，保障农民知情权、参与权与收益权，搬迁村民保留原集体经济组织成员权益。",
    "innovation": "负面清单＋群众参与双约束，把农民权益嵌入整治全流程",
    "deps": [
     8
    ],
    "leadLevel": "乡镇",
    "scope": "local",
    "scopeRank": 0,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   },
   {
    "no": 29,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "张浦镇人民政府，昆山市农业农村局",
    "policyTitle": "「强村公司＋产业园＋村集体」与龙头企业利益联结",
    "detail": "依据《市政府办公室关于转发苏州市「十四五」高标准农田改造提升实施方案的通知》与江苏省全域土地综合整治实施意见，张浦镇依托高标准农田与农业园区建设，构建「强村公司＋产业园＋村集体」合作模式和「龙头企业＋集体经济＋农业基地＋专业农户」利益联结机制，落地益海嘉里、优诺乳业等近30家国际食品头部企业，形成从「一颗小麦」到「一片面包」的完整产业链，2023年创造近百亿产值、规模居昆山第一；2023年村均可支配收入达1314万元，农民人均纯收入5.8万元。",
    "innovation": "「强村公司＋产业园＋村集体」模式带动村均可支配收入1314万元",
    "deps": [
     3,
     10
    ],
    "leadLevel": "乡镇",
    "scope": "local",
    "scopeRank": 0,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 30,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "昆山市政府、张浦镇政府",
    "policyTitle": "昆山市人民政府关于公布昆山市征地区片综合地价标准",
    "detail": "公布征地区片综合地价标准（区片Ⅰ71000元/亩、区片Ⅱ70000元/亩；土地补偿费36000／35000元/亩、安置补助费35000元/人，含张浦镇所在区片Ⅱ），是全域整治中征地补偿测算的区级价格依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省政府办公厅关于转发省自然资源厅《江苏省国土空间全域综合整治方案》的通知",
    "docNo": "苏政办发〔2020〕26号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2020-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://czj.huaian.gov.cn/upload/2020-11/d2806407-b54b-45db-8693-65ef03128ce8.pdf",
    "attachUrl": "",
    "sourceNote": "核验说明：省、市门户均无该文正文页，来源为官网公开的全文附件",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江苏省全域土地综合整治项目管理办法",
    "docNo": "苏自然资发〔2025〕301号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-12-23",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c9082549b4f613b019b4f9399a0006f",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江苏省自然资源厅关于学习运用「千万工程」经验深入推进全域土地综合整治的实施意见",
    "docNo": "苏自然资函〔2025〕325号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-07-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c90825497528e63019811c7bbd4133e",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "江苏省政府办公厅关于印发《江苏省增减挂钩节余指标流转使用管理暂行办法》的通知",
    "docNo": "苏政办发〔2017〕101号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2017-07-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.jiangsu.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "全域土地综合整治项目验收规范（江苏省地方标准）",
    "docNo": "DB32/T 5048-2025",
    "issuer": "江苏省市场监督管理局（归口）",
    "date": "2025-02-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=3049356D14F03289E06397BE0A0AC3F7",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "市政府办公室转发关于加快推动占用耕地耕作层剥离和再利用工作的意见的通知",
    "docNo": "苏府办〔2016〕262号",
    "issuer": "苏州市人民政府办公室",
    "date": "2016-12-02",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.suzhou.gov.cn/szsrmzf/zfbgswj/201612/YNP8MZXRUIUUCYQKIB88RAZJYDO1LQJC.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "市政府印发关于促进低效建设用地再开发提升土地综合利用水平的实施意见的通知",
    "docNo": "苏府〔2017〕60号",
    "issuer": "苏州市人民政府",
    "date": "2017-05-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.suzhou.gov.cn/szsrmzf/zfwj/201706/cb0dca3c091a4a8ba7bc05f8de4807cc.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见",
    "docNo": "苏委发〔2018〕26号",
    "issuer": "中共苏州市委、苏州市人民政府",
    "date": "2018-07-21",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zrzy.jiangsu.gov.cn/gtapp/nrglIndex.action?type=2&messageID=2c9082b5669a3b740166e283312d12a0",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "市政府关于苏州市高标准农田建设规划（2021～2025年）的批复",
    "docNo": "苏府复〔2022〕74号",
    "issuer": "苏州市人民政府",
    "date": "2022-11-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.suzhou.gov.cn/szsrmzf/zfwj/202211/e59bc371e51b4235a7d717870fea967c.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "市政府办公室关于转发苏州市「十四五」高标准农田改造提升实施方案的通知",
    "docNo": "苏府办〔2022〕57号",
    "issuer": "苏州市人民政府办公室",
    "date": "2022-04-24",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://nyncj.suzhou.gov.cn/nlj/ywdt/202205/84bf8f5f83564aafafb95aac0ed2a52f.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "苏州市国土空间生态保护和修复规划（2021—2035年）",
    "docNo": "未获取",
    "issuer": "苏州市自然资源和规划局",
    "date": "2025-08-15",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.suzhou.gov.cn/szsrmzf/zwgg/202508/4e341fcab405426990cdfc7385df9ebf.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "昆山市生态补偿实施办法",
    "docNo": "昆政规〔2016〕1号",
    "issuer": "昆山市人民政府",
    "date": "2016-01-04 印发",
    "status": "现行有效（列入《关于公布继续施行的市政府行政规范性文件目录的通告》第43项，2025-08-26）",
    "grade": "核验A级",
    "url": "https://www.ks.gov.cn/kss/c112598/201601/de2006eb11b2401e8811c752c66d2a49.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "昆山市人民政府关于公布昆山市征地区片综合地价标准的通知",
    "docNo": "未标注（门户正文页未列文号；原昆政规〔2024〕1号已被本次调整替代）",
    "issuer": "昆山市人民政府",
    "date": "2026-04-14 成文、2026-04-15 发布",
    "status": "有效期至2028-12-31",
    "grade": "核验A级",
    "url": "https://www.ks.gov.cn/kss/c112598/202604/c13ab401b6b945f9b98c752f4cc8f3b5.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "关于全面统筹土地资源配置的实施细则（试行）",
    "docNo": "昆政办发〔2018〕19号",
    "issuer": "昆山市人民政府办公室",
    "date": "2018-01-28 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ks.gov.cn/kss/c112598/201801/1f092b1ae73947b7a8650ab6ad20d311.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：官方页面未标注效力状态（未列入2025-08-26继续施行目录，效力待确认）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "昆山市工业用地调查及低效用地再开发实施方案",
    "docNo": "昆政办发〔2016〕176号",
    "issuer": "昆山市人民政府办公室",
    "date": "2016-09-06 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ks.gov.cn/kss/zcwj/201609/70f1962de1ed4c7a834969b6d550bf17.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：官方页面未标注效力状态（未列入2025-08-26继续施行目录，效力待确认）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "昆山市防止耕地「非粮化」稳定粮食生产实施意见",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "昆山市人民政府办公室",
    "date": "2021-05-10 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ks.gov.cn/kss/c112598/202105/53cd8562b144492ebf4622c55b0efe89.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：官方页面未标注效力状态",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "03",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 6,
    "innovations": 5
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 9,
    "innovations": 7
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 3,
    "innovations": 3
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 5,
    "innovations": 4
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 2,
    "innovations": 2
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 2
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 3,
    "innovations": 2
   }
  ],
  "levels": {
   "localTools": 30,
   "provinceTools": 18,
   "nationalTools": 0,
   "provinceBasis": 18,
   "nationalBasis": 0,
   "localDocs": 12,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 30,
   "docs": 16,
   "innovations": 25,
   "implementation": 25,
   "pilot": 5,
   "gradeA": 13,
   "gradeB": 3,
   "revoked": 0,
   "mechanisms": 7
  }
 },
 {
  "id": "04",
  "dir": "04_江苏省苏州市相城区黄桥街道",
  "title": "江苏省苏州市相城区黄桥街道全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江苏省苏州市相城区黄桥街道",
  "batch": "第一批",
  "province": "江苏",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "76 亿元",
  "summary": "实施4类工程21个子项目，新增耕地1150亩，工业用地容积率从0.7提升至2.5，亩均税收从12.8万提升至100万，重塑渔文化、桥文化。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以《江苏省国土空间全域综合整治方案》等江苏省级政策文件、苏州市本级政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具29项、政策文件16份（其中省、市级文件12份）。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局相城分局、苏州市相城区农业农村局，黄桥街道办事处",
    "policyTitle": "永久基本农田布局优化与耕地集中连片整治",
    "detail": "依据《江苏省国土空间全域综合整治方案》与《中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见》，黄桥街道针对整治前耕地零散分布全域、零散耕地（5亩以下图斑）面积占比17.53%、图斑数量占比70%的碎片化问题，按国家级工具箱（1.0版）附表第6份关于调整程序与规模控制的要求，统筹永久基本农田布局优化与耕地集中连片整治。整治后耕地地块数由249块减少至226块，平均耕地地块面积由9.7亩增加到15.8亩，耕地由2410亩增加到3560亩、净增1150亩，新增耕地比例达47.8%，实现数量增加、质量提升、布局集中连片。",
    "innovation": "零散图斑占比70%的碎片化耕地整治为集中连片，新增耕地比例47.8%",
    "deps": [
     1,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局相城分局、苏州市相城区财政局，黄桥街道办事处",
    "policyTitle": "增减挂钩节余指标流转使用与收益反哺",
    "detail": "依据《江苏省增减挂钩节余指标流转使用管理暂行办法》与苏州市加强耕地保护和改进占补平衡的实施意见，黄桥街道通过城乡建设用地增减挂钩复垦产生节余指标，在优先满足乡村发展用地需求后按江苏省支持政策在省内交易，所得资金全部用于支持乡村振兴。试点建设用地整理总规模4620.3亩，包括城乡建设用地增减挂钩复垦与工业用地保护更新两类，指标交易收益定向用于安置补偿、基础设施配套与耕地质量提升，形成「复垦—交易—反哺」闭环。",
    "innovation": "节余指标省内交易、收益全额反哺乡村振兴",
    "deps": [
     4,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "补充耕地指标有偿调剂与省财政启动资金",
    "detail": "按照《江苏省国土空间全域综合整治方案》与江苏省关于学习运用「千万工程」经验深入推进全域土地综合整治的实施意见，黄桥街道将农用地整理新产生的补充耕地指标在优先满足乡村发展用地需求后，节余指标在省内交易；同时依据江苏省支持政策，由省财政统筹试点地区一定规模的补充耕地指标作为启动资金支持项目建设。补充耕地指标有偿调剂与省级启动资金相结合，缓解了整治项目前期资金缺口，支撑了农用地整理0.6万亩与四类整治工程共25个子项目的资金平衡。",
    "innovation": "以省级统筹补充耕地指标作启动资金，支撑25个子项目资金平衡",
    "deps": [
     3,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局、苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "耕作层剥离与再利用",
    "detail": "依据《市政府办公室转发关于加快推动占用耕地耕作层剥离和再利用工作的意见的通知》，黄桥街道规定增减挂钩复垦、占补平衡补充耕地等土地综合整治项目必须优先使用本地耕作层剥离土壤。在农用地整理0.6万亩与建设用地拆旧复垦中同步实施耕作层剥离，将剥离土壤用于新开垦耕地、复垦耕地和劣质耕地改良，保障了整治新增1150亩耕地的耕作层厚度与土壤肥力，避免了「占优补劣」，实现耕地数量增加与质量提升同步。",
    "innovation": "耕作层剥离土壤定向用于补充耕地，避免「占优补劣」",
    "deps": [
     6
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局相城分局、苏州市相城区财政局，黄桥街道办事处",
    "policyTitle": "耕地保护补偿与三类指标储备库",
    "detail": "依据《中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见》提出的「土地整治+」理念，黄桥街道建立补充耕地、水田、粮食产能三类指标储备库，明确市级补充耕地指标有偿调剂与增减挂钩指标县域内调剂规则。将指标收益与耕地保护补偿资金定向用于耕地质量提升和后期管护，明确街道、村两级管护主体，确保整治形成的3560亩耕地长期稳定利用，避免「重建轻管」。",
    "innovation": "建立补充耕地、水田、粮食产能三类指标储备库",
    "deps": [
     3,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "苏州市相城区农业农村局、苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "农用地整理与高标准农田建设",
    "detail": "落实《市政府关于苏州市高标准农田建设规划（2021～2025年）的批复》与《市政府办公室关于转发苏州市「十四五」高标准农田改造提升实施方案的通知》，黄桥街道共整治农用地面积0.6万亩，通过土地平整与修复，完善灌溉与排水设施、田间道路与农田防护，提高耕地质量，解决耕地碎片化问题。整治后耕地地块数由249块减少至226块、平均地块面积由9.7亩增加到15.8亩，形成集中连片的高质量耕地空间，并按规划要求将建成后的高标准农田划入永久基本农田储备区。",
    "innovation": "农用地整理0.6万亩，地块平均面积由9.7亩增至15.8亩",
    "deps": [
     9,
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局相城分局、苏州市相城区工业和信息化局，黄桥街道办事处",
    "policyTitle": "工业用地减量提质与低效用地再开发",
    "detail": "依据《市政府印发关于促进低效建设用地再开发提升土地综合利用水平的实施意见的通知》与《苏州市镇村两级工业集中区优化整治提升工作方案》，黄桥街道以「减量提质」为特色推进工业用地保护更新。整治前工业用地零散分布全域、平均容积率仅0.7、亩均税收12.8万元，整治后集中分布在省道S228两侧，用地面积由6300亩下降到3600亩，容积率由0.7提升至2.5，建筑面积由287万平方米增加到460～640万平方米，亩均税收提升至100万元，实现工业用地减量增容、节地产出双提升。",
    "innovation": "工业用地6300亩缩减至3600亩，容积率0.7→2.5，亩均税收12.8万→100万元",
    "deps": [
     7,
     12
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "苏州市相城区工业和信息化局、苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "镇村工业集中区优化整治提升",
    "detail": "按照《苏州市镇村两级工业集中区优化整治提升工作方案》与低效建设用地再开发实施意见，黄桥街道针对村级工业集中区「布局散、污染重、隐患多、亩产低」问题，组建1支专业队伍，系统调查全街道1428家企业的用地性质、厂房质量、企业税收，创新提出「盘二优二」「退二进三」「退二还一」三类更新模式，整治「散乱污」企业（作坊）近两千家。原黄桥村电镀园9栋厂房升级为苏州智能制造服务产业园后，纳税额从改造前的不足千万元增长至1亿元。",
    "innovation": "「盘二优二」「退二进三」「退二还一」三类更新模式，电镀园纳税额增至1亿元",
    "deps": [
     7,
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局相城分局、苏州市相城区水务局，黄桥街道办事处",
    "policyTitle": "蓝绿交织城乡生态网络构建",
    "detail": "依据《苏州市国土空间生态保护和修复规划（2021—2035年）》与江苏省全域土地综合整治实施意见，黄桥街道针对林地、草地、河流水系、湿地分布零散、不成体系的问题，通过生态廊道畅通工程构建「三横三纵」生态体系，贯通蓝绿空间形成城乡生态网络格局。新建污水管网12公里，整治河道12.56公里，建成步道10.7公里，串联南北湿地和西部田园片区，大幅提升生态系统完整性与生态空间连通性。",
    "innovation": "「三横三纵」生态体系构建蓝绿交织城乡生态网络",
    "deps": [
     3,
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "苏州市相城区水务局、苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "河道综合整治与黑臭水体治理",
    "detail": "结合《苏州市国土空间生态保护和修复规划（2021—2035年）》与江苏省全域土地综合整治实施意见，黄桥街道通过河道整治、水系畅通、生态驳岸建设等工程推进水环境治理，共整治河道12.56公里，完成东挺河东段、内青台河等12条河道的清淤工作，原有7条黑臭河道全部整治到位，水清河畅岸绿景美的水系网络逐步形成，为周边居民提供了休闲漫步空间。",
    "innovation": "整治河道12.56公里，原有7条黑臭河道全部整治到位",
    "deps": [
     3,
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "苏州市相城区文化体育和旅游局、苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "历史文化保护与工业遗产活化",
    "detail": "依据《苏州市国土空间生态保护和修复规划（2021—2035年）》与江苏省全域土地综合整治实施意见，黄桥街道在整治中统筹推进历史文化保护，重点建设中心河文化走廊工程、渔桥文化广场和青苔工业文化工程3处历史文化保护工程。通过工业遗产活化利用与农用地整理发展观光休闲农业相结合，传承保护历史文化资源，探索特色文化保护新模式，建设人与自然和谐共生的宜居宜业和美乡村。",
    "innovation": "3处历史文化保护工程与工业遗产活化，探索特色文化保护新模式",
    "deps": [
     3,
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "苏州市相城区农业农村局，黄桥街道办事处",
    "policyTitle": "高标准农田改造提升与农田退水生态化改造",
    "detail": "依据《市政府办公室关于转发苏州市「十四五」高标准农田改造提升实施方案的通知》与《市政府关于苏州市高标准农田建设规划（2021～2025年）的批复》，黄桥街道将高标准农田改造提升与农田退水生态化改造作为农用地整理和农田生态修复的配套工程同步实施。通过完善灌溉与排水设施、田间道路与农田防护，结合农田退水生态化改造控制农业面源污染，实现耕地质量提升与农田生态改善同步推进，为观光休闲农业与规模化经营创造条件。",
    "innovation": "高标准农田改造提升与农田退水生态化改造同步实施",
    "deps": [
     9,
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "相城区政府、黄桥街道办事处",
    "policyTitle": "2025年相城区高标准农田建设实施方案",
    "detail": "确定年亩均粮食产能1000公斤的建设标准，下达2025年新建高标准农田3000亩任务（分度假区1600亩、望亭436亩、太平530亩、漕湖262亩），并提出探索土地出让收入支持高标准农田改造提升的创新投资模式，是全域整治中高标准农田建设的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "「三区三线」局部优化调整",
    "detail": "按照国家级工具箱（1.0版）附表第3份关于「三区三线」局部优化调整的要求与《中共苏州市委苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见》，黄桥街道针对现状生产、生活、生态空间相互混杂、建设用地与非建设用地空间相互穿插的问题，在确保耕地和永久基本农田保护面积不减少、生态保护红线不突破的前提下，坚持「因地制宜、分类实施」，对项目区内「三区三线」作局部优化调整，合理安排生产、生活、生态空间，为整治项目落地提供规划依据。",
    "innovation": "底线不突破前提下优化「三区三线」，破解三生空间混杂",
    "deps": [
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "集体经营性建设用地入市",
    "detail": "依据《江苏省国土空间全域综合整治方案》与《市政府印发关于促进低效建设用地再开发提升土地综合利用水平的实施意见的通知》，黄桥街道对整治归并、零星插花的存量集体建设用地，在符合规划属工业、商业等经营性用途的前提下，由土地所有权人通过出让、出租等方式交由单位或个人使用，实行「先整治、再验收、后入市」。集体经营性建设用地入市与「1+2+N」产业承载区建设相衔接，为总部经济科创园、苏州智能制造服务产业园等重大项目提供合规用地保障。",
    "innovation": "「先整治、再验收、后入市」支撑「1+2+N」产业承载区建设",
    "deps": [
     1,
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 16,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "零星边角地协议出让与历史遗留用地分类处置",
    "detail": "按照《市政府印发关于促进低效建设用地再开发提升土地综合利用水平的实施意见的通知》与《江苏省国土空间全域综合整治方案》，黄桥街道运用零星边角地协议出让、历史遗留建设用地分类处置、地下空间综合开发等市级政策工具，解决城中村与旧工业区整治中土地权属复杂、边角地难以利用的问题。通过分类处置历史遗留用地、盘活零星边角地，提高了土地节约集约利用水平，为产业研发社区建设腾出连片空间。",
    "innovation": "零星边角地协议出让＋历史遗留用地分类处置，盘活存量空间",
    "deps": [
     1,
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 17,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "相城区政府、黄桥街道办事处",
    "policyTitle": "关于加强和规范相城区农房规划建设管理的指导意见",
    "detail": "坚持「一户一宅」、引导盘活农村宅基地等集体存量建设用地资源，并规定每户宅基地不超过135㎡、建筑占地不超宅基地面积70%、一般不超过三层且须先拆旧后建新，是全域整治中宅基地及住房建设管理的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 18,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "相城区政府、黄桥街道办事处",
    "policyTitle": "相城区旅游民宿规范发展试点指导意见",
    "detail": "以促进农民就业增收为目标建立旅游民宿长效管理机制、盘活利用农村闲置房屋资源发展民宿，是全域整治中闲置农房盘活的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 19,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "苏州市相城区财政局、苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "涉农资金统筹整合与省级支持",
    "detail": "依据《中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见》与江苏省全域土地综合整治实施意见关于资金保障的部署，黄桥街道统筹整合高标准农田建设、乡村振兴、土地整理、农房改造、增减挂钩、人居环境整治、废弃工矿生态修复等各条线涉农资金，形成资金合力；同时争取省级支持，江苏省支持政策明确产生的增减挂钩指标、补充耕地指标节余部分可在省内交易、所得资金用于支持乡村振兴，省财政已支持15.96亿元，为总投资76亿元的试点提供资金保障。",
    "innovation": "多渠道理顺涉农资金，叠加省级财政支持支撑76亿元总投资",
    "deps": [
     3,
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 20,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局相城分局、苏州市相城区财政局，黄桥街道办事处",
    "policyTitle": "政策性金融资金支持",
    "detail": "在《市政府办公室关于转发苏州市「十四五」高标准农田改造提升实施方案的通知》确定的投入保障机制下，黄桥街道积极对接国家级工具箱（1.0版）附表第4份明确的国家开发银行、农业发展银行综合服务团队，在贷款期限、额度、利率上争取优惠，并通过绿色通道获得全链条融资服务。政策性金融资金与财政资金、指标交易收益相衔接，为25个子项目提供长期稳定的资金支撑。",
    "innovation": "以市级投入保障机制对接国家政策性金融，支撑25个子项目",
    "deps": [
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 21,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "苏州市相城区财政局、苏州市相城区工业和信息化局，黄桥街道办事处",
    "policyTitle": "产业载体税收反哺与「工业上楼」资金机制",
    "detail": "依据《苏州市镇村两级工业集中区优化整治提升工作方案》与江苏省全域土地综合整治实施意见，黄桥街道按照「产业集中、要素集聚、用地集约」原则规划建设「1+2+N」产业承载区，通过主动融入长三角一体化发展、抢抓虹桥国际开放枢纽建设机遇，打造总部经济科创园、苏州智能制造服务产业园、黄桥未来工场、数字金融街区、人工智能算力中心等重大项目。产业载体税收形成反哺机制，黄桥总部经济科创园税收总额连续两年超6000万元。",
    "innovation": "「1+2+N」产业承载区税收反哺，科创园税收连续两年超6000万元",
    "deps": [
     3,
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 22,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "苏州市相城区财政局、苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "工业用地保护更新资金保障",
    "detail": "按照《市政府印发关于促进低效建设用地再开发提升土地综合利用水平的实施意见的通知》与《苏州市镇村两级工业集中区优化整治提升工作方案》，黄桥街道建立工业用地保护更新的资金保障机制，统筹腾退补偿、厂房升级改造与产业配套投入。原黄桥村电镀园9栋厂房升级为苏州智能制造服务产业园后，纳税额从改造前的不足千万元增长至1亿元，验证了「以改造投入换产出倍增」的资金循环路径，为后续低效工业用地更新提供了可复制的资金安排。",
    "innovation": "「以改造投入换产出倍增」的工业用地更新资金循环",
    "deps": [
     3,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 23,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "试点推进",
    "lead": "苏州市相城区人民政府、黄桥街道办事处，苏州市自然资源和规划局相城分局",
    "policyTitle": "部级试点备案与镇域整体推进",
    "detail": "依据国家级工具箱（1.0版）附表第1、2份，黄桥街道全域土地综合整治试点为2021年自然资源部部署的乡镇全域土地综合整治试点，其试点方案是全国首个获自然资源部批复的试点方案。试点按《江苏省国土空间全域综合整治方案》要求覆盖辖区23.08平方公里全域，下辖9个行政村、人口约4.7万人，2022年地区生产总值87.45亿元，实现镇域整体推进。",
    "innovation": "全国首个获自然资源部批复的试点方案，全域23.08平方公里整体推进",
    "deps": [
     1,
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 24,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "全面实施",
    "lead": "苏州市相城区人民政府，黄桥街道办事处",
    "policyTitle": "四类整治工程25个子项目统筹实施",
    "detail": "按照《江苏省全域土地综合整治项目管理办法》与《江苏省国土空间全域综合整治方案》关于组织实施的要求，黄桥街道统筹推进农用地整理、建设用地整理、生态保护修复和历史文化保护四类整治工程共25个子项目，通过生态廊道畅通工程构建「三横三纵」生态体系，通过农用地整理发展观光休闲农业，通过工业用地保护更新建设产业研发社区。坚持「规划引领、生态优先」「因地制宜、分类实施」「节约集约、协同联动」，确保多类子项目同步实施、产业转型稳中快进。",
    "innovation": "四类整治工程25个子项目统筹实施，产业转型稳中快进",
    "deps": [
     2,
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 25,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "项目全过程管理与验收规范",
    "detail": "依据《江苏省全域土地综合整治项目管理办法》与江苏省地方标准《全域土地综合整治项目验收规范》（DB32/T 5048-2025），黄桥街道建立从前期谋划、方案审批、项目实施、竣工验收、后期管护的全链条管理机制，按地方标准明确的验收内容、程序与指标开展分阶段验收与绩效评价。同时依据低效建设用地再开发实施意见，对腾退低效用地与新增耕地实行台账化管理，确保25个子项目实施过程可追溯、成效可核查。",
    "innovation": "按省级地方标准开展分阶段验收，25个子项目成效可追溯",
    "deps": [
     5,
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 26,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "苏州市自然资源和规划局相城分局，黄桥街道办事处",
    "policyTitle": "实施方案编制与联合审查",
    "detail": "按照国家级工具箱（1.0版）附表第3份关于实施方案编制的要求与《江苏省全域土地综合整治项目管理办法》，黄桥街道按照实施方案编制大纲编制项目实施方案，明确整治类型、项目清单、资金平衡与实施时序，涵盖农用地整理、建设用地整理、生态保护修复、历史文化保护四类工程；方案由市级初审、省级联合审查后批复实施，审查重点覆盖规划符合性、永久基本农田调整、「三区三线」优化与资金平衡，减少重复报批、压缩审批周期。",
    "innovation": "四类工程一次性编制、一次性审查，压缩审批周期",
    "deps": [
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 27,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "黄桥街道办事处，苏州市自然资源和规划局相城分局",
    "policyTitle": "群众参与与权益保障、底线管控",
    "detail": "落实《中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见》关于群众权益保障的要求，以及国家级工具箱（1.0版）附表第5份划定的负面清单，黄桥街道严守底线规范开展整治，禁止大拆大建、变相占用永久基本农田、违规调整生态保护红线、搞人造景观与增加地方政府隐性债务；实施方案编制与项目实施中维护群众合法权益、尊重农民意愿，保障农民知情权、参与权与收益权。",
    "innovation": "负面清单＋群众意愿双约束，把农民权益嵌入整治全流程",
    "deps": [
     8
    ],
    "leadLevel": "乡镇",
    "scope": "local",
    "scopeRank": 0,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   },
   {
    "no": 28,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "黄桥街道办事处，苏州市相城区工业和信息化局",
    "policyTitle": "企业调查摸底与分类更新模式",
    "detail": "按照《苏州市镇村两级工业集中区优化整治提升工作方案》与江苏省全域土地综合整治实施意见，黄桥街道组建1支专业队伍，借助文献调研、实地勘探、数据分析3类研究方法，综合研判街道全域土地综合整治潜力资源分布与面积等基础信息，同时系统调查全街道1428家企业的用地性质、厂房质量、企业税收三方面现状，形成企业分类台账，并据此创新提出「盘二优二」「退二进三」「退二还一」三类更新模式，为全域土地综合整治作出先行探索。",
    "innovation": "系统调查1428家企业形成分类台账，创新三类更新模式先行探索",
    "deps": [
     3,
     12
    ],
    "leadLevel": "乡镇",
    "scope": "local",
    "scopeRank": 0,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 29,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "相城区政府、黄桥街道办事处",
    "policyTitle": "相城区国有土地上房屋征收与补偿实施办法",
    "detail": "规定国有土地上房屋征收补偿方案内容（补偿方式、计户规则、评估基数）、补偿范围、货币补偿或产权调换二选一及先补偿后搬迁原则，是全域整治中征收补偿安置的区级程序依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省政府办公厅关于转发省自然资源厅《江苏省国土空间全域综合整治方案》的通知",
    "docNo": "苏政办发〔2020〕26号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2020-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://czj.huaian.gov.cn/upload/2020-11/d2806407-b54b-45db-8693-65ef03128ce8.pdf",
    "attachUrl": "",
    "sourceNote": "核验说明：省、市门户均无该文正文页，来源为官网公开的全文附件",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江苏省全域土地综合整治项目管理办法",
    "docNo": "苏自然资发〔2025〕301号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-12-23",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c9082549b4f613b019b4f9399a0006f",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江苏省自然资源厅关于学习运用「千万工程」经验深入推进全域土地综合整治的实施意见",
    "docNo": "苏自然资函〔2025〕325号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-07-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c90825497528e63019811c7bbd4133e",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "江苏省政府办公厅关于印发《江苏省增减挂钩节余指标流转使用管理暂行办法》的通知",
    "docNo": "苏政办发〔2017〕101号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2017-07-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.jiangsu.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "全域土地综合整治项目验收规范（江苏省地方标准）",
    "docNo": "DB32/T 5048-2025",
    "issuer": "江苏省市场监督管理局（归口）",
    "date": "2025-02-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=3049356D14F03289E06397BE0A0AC3F7",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "市政府办公室转发关于加快推动占用耕地耕作层剥离和再利用工作的意见的通知",
    "docNo": "苏府办〔2016〕262号",
    "issuer": "苏州市人民政府办公室",
    "date": "2016-12-02",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.suzhou.gov.cn/szsrmzf/zfbgswj/201612/YNP8MZXRUIUUCYQKIB88RAZJYDO1LQJC.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "市政府印发关于促进低效建设用地再开发提升土地综合利用水平的实施意见的通知",
    "docNo": "苏府〔2017〕60号",
    "issuer": "苏州市人民政府",
    "date": "2017-05-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.suzhou.gov.cn/szsrmzf/zfwj/201706/cb0dca3c091a4a8ba7bc05f8de4807cc.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "中共苏州市委 苏州市人民政府关于加强耕地保护和改进占补平衡的实施意见",
    "docNo": "苏委发〔2018〕26号",
    "issuer": "中共苏州市委、苏州市人民政府",
    "date": "2018-07-21",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zrzy.jiangsu.gov.cn/gtapp/nrglIndex.action?type=2&messageID=2c9082b5669a3b740166e283312d12a0",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "04",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "市政府关于苏州市高标准农田建设规划（2021～2025年）的批复",
    "docNo": "苏府复〔2022〕74号",
    "issuer": "苏州市人民政府",
    "date": "2022-11-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.suzhou.gov.cn/szsrmzf/zfwj/202211/e59bc371e51b4235a7d717870fea967c.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "市政府办公室关于转发苏州市「十四五」高标准农田改造提升实施方案的通知",
    "docNo": "苏府办〔2022〕57号",
    "issuer": "苏州市人民政府办公室",
    "date": "2022-04-24",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://nyncj.suzhou.gov.cn/nlj/ywdt/202205/84bf8f5f83564aafafb95aac0ed2a52f.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "04",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "苏州市国土空间生态保护和修复规划（2021—2035年）",
    "docNo": "未获取",
    "issuer": "苏州市自然资源和规划局",
    "date": "2025-08-15",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.suzhou.gov.cn/szsrmzf/zwgg/202508/4e341fcab405426990cdfc7385df9ebf.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "04",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "关于印发《苏州市镇村两级工业集中区优化整治提升工作方案》的通知",
    "docNo": "苏工信产业发〔2019〕3号",
    "issuer": "苏州市工业和信息化局",
    "date": "2019-08-13",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.suzhou.gov.cn/szsrmzf/bmwj/201908/X8IMK7BM1MZ72GD0M9NLS8LCZF0FCU54.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "04",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "关于加强和规范相城区农房规划建设管理的指导意见",
    "docNo": "相政规字〔2019〕3号",
    "issuer": "苏州市相城区人民政府",
    "date": "2019-12-13 印发（2021-10-28 公开）",
    "status": "有效（列入相政通〔2025〕1号继续施行目录第4项）",
    "grade": "核验A级",
    "url": "http://www.szxc.gov.cn/szxcrmzf/qzfwj/202110/f0083ebee0f94bcf9adc131349ff08be.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "2025年相城区高标准农田建设实施方案",
    "docNo": "相政办〔2025〕11号（惠企通平台标注；同平台另一条目文号重复，待复核）",
    "issuer": "苏州市相城区人民政府办公室",
    "date": "2025-02-24 印发",
    "status": "有效（惠企通平台标注「状态：有效」）",
    "grade": "核验A级",
    "url": "https://xcqfzx.szxc.gov.cn/xcservplat/Apps/psp/index.php?s=/PolicySearch/policyServ/qb/1//policylevel/zone/domainclass//tag///p/2",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "相城区旅游民宿规范发展试点指导意见",
    "docNo": "相政规字〔2024〕4号",
    "issuer": "苏州市相城区人民政府",
    "date": "2024-10-30 发布",
    "status": "有效（列入相政通〔2025〕1号继续施行目录第13项）",
    "grade": "核验A级",
    "url": "http://www.szxc.gov.cn/szxcrmzf/c114234/202410/d122cb1fdc6d400fbe7d98520b7e2413.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "相城区国有土地上房屋征收与补偿实施办法",
    "docNo": "相政规字〔2025〕2号",
    "issuer": "苏州市相城区人民政府",
    "date": "2025-12-02 发布",
    "status": "有效，有效期至2030-09-17",
    "grade": "核验A级",
    "url": "http://www.szxc.gov.cn/szxcrmzf/qzfwj/202511/5edebf2943e34927872444eeada9167c.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "04",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 5,
    "innovations": 5
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 8,
    "innovations": 7
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 5,
    "innovations": 3
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 4,
    "innovations": 4
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 2,
    "innovations": 2
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 2
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 3,
    "innovations": 2
   }
  ],
  "levels": {
   "localTools": 29,
   "provinceTools": 15,
   "nationalTools": 0,
   "provinceBasis": 15,
   "nationalBasis": 0,
   "localDocs": 12,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 29,
   "docs": 16,
   "innovations": 25,
   "implementation": 24,
   "pilot": 5,
   "gradeA": 12,
   "gradeB": 4,
   "revoked": 0,
   "mechanisms": 7
  }
 },
 {
  "id": "05",
  "dir": "05_浙江省杭州市余杭区径山镇",
  "title": "浙江省杭州市余杭区径山镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "浙江省杭州市余杭区径山镇",
  "batch": "第一批",
  "province": "浙江",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "以「三茶融合」为核心，推动茶产业、茶文化、茶科技融合发展，盘活低效用地1031亩，土地亩均租金从800元提升至1500元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》等浙江省级政策文件、杭州市本级及余杭区本级政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具23项、政策文件20份（浙江省级6份、杭州市本级及区级项目文件7份、余杭区本级6份）。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局、余杭区农业农村局，径山镇人民政府",
    "policyTitle": "永久基本农田集中连片整治与「万亩方」建设",
    "detail": "依据《杭州市人民政府办公厅关于优化创新耕地保护机制促进全市共同富裕的实施意见》与《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》，径山镇按国家级工具箱（1.0版）附表第6份关于调整程序与规模控制的要求，在漕桥村、求是村、麻车头村等实施永久基本农田集中连片整治项目，区级层面投入资金1亿元，实施耕地功能恢复项目10个，打造1个面积达1.57万亩的「万亩方」，以耕地资源集中助力粮食生产集中、产量提升。",
    "innovation": "区级投入1亿元实施10个耕地功能恢复项目，建成1.57万亩「万亩方」",
    "deps": [
     1,
     10,
     14,
     19
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市",
     "区县"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局、余杭区农业农村局，径山镇人民政府",
    "policyTitle": "碎片化图斑归并与耕地连片套合",
    "detail": "依据《杭州市高标准农田建设「十四五」规划》与杭州市优化创新耕地保护机制的实施意见，径山镇聚焦山上、田间、路边零散农居点，合理调整耕地、林地、园地等农业生产空间布局，推进碎片化图斑归并与耕地连片套合。整治后区域耕地从16443亩增加至26443亩，永久基本农田面积增加至21599亩，3亩以下碎片化图斑数减少1103个，永久基本农田、高标准农田、粮食生产功能区套合比例达100%，粮食年增产379万公斤，土地亩均租金收益从800元/亩提高至1500元/亩。",
    "innovation": "3亩以下碎片化图斑减少1103个，三区套合比例达100%，粮食年增产379万公斤",
    "deps": [
     10,
     13,
     19
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市",
     "区县"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局，径山镇人民政府",
    "policyTitle": "补充耕地指标有偿调剂与耕地功能恢复",
    "detail": "按照《余杭区径山镇土地综合整治项目实施方案》与《浙江省自然资源厅关于深入开展土地综合整治工作助推城乡融合发展促进共同富裕的实施意见》，径山镇将整治新产生的补充耕地指标在优先满足本区发展用地需求后，节余指标纳入省级管理平台有偿调剂，调剂收益回投项目区用于耕地质量提升与后期管护。通过10个耕地功能恢复项目与永久基本农田集中连片整治协同实施，实现耕地数量、质量、生态「三位一体」保护，耕地质量、粮食产能、农民收益「三提高」。",
    "innovation": "补充耕地指标有偿调剂，实现耕地质量、产能、收益「三提高」",
    "deps": [
     3,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "区县"
    ]
   },
   {
    "no": 4,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局、余杭区财政局，径山镇人民政府",
    "policyTitle": "增减挂钩节余指标调剂使用与收益反哺",
    "detail": "依据《浙江省国土资源厅关于做好城乡建设用地增减挂钩节余指标调剂使用管理工作的通知》与《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见》，径山镇通过零散农居点搬迁与低效建设用地复垦产生增减挂钩节余指标，纳入市级土地指标交易平台统一入市调剂，收益定向用于安置补偿、基础设施配套与村集体经济发展，形成「复垦—交易—反哺」闭环。",
    "innovation": "节余指标统一入市市级平台调剂，收益定向反哺项目区",
    "deps": [
     4,
     6
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局、余杭区农业农村局，径山镇人民政府",
    "policyTitle": "耕地保护「田长制」与「生态退耕、清洁田园」",
    "detail": "依据《杭州市人民政府办公厅关于优化创新耕地保护机制促进全市共同富裕的实施意见》与《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》，径山镇率先建立田长制，守好「饭碗田」，推进「生态退耕、清洁田园」专项行动，探索「低碳试验田」，为农田装上了「智慧大脑」。田长制与耕地保护补偿资金挂钩，明确镇、村两级管护主体，确保整治形成的26443亩耕地与21599亩永久基本农田长期稳定利用，避免「重建轻管」。",
    "innovation": "率先建立田长制，探索「低碳试验田」为农田装上「智慧大脑」",
    "deps": [
     1,
     10,
     14
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市",
     "区县"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "余杭区人民政府、径山镇人民政府，杭州市规划和自然资源局余杭分局",
    "policyTitle": "「土地整治+」三茶融合与产业链延伸",
    "detail": "依据《杭州市人民政府办公厅关于高质量开展跨乡镇土地综合整治工作的通知》与《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见》，径山镇通过「土地整治+」模式延长产业链和价值链，推动「茶产业」「茶文化」「茶科技」三茶融合业态不断进化，整合农业、文化、旅游等产业资源促进一二三产业融合。已建成500亩以上现代农业园区23个，涌现「径灵子」「沐禾·前溪」等农业品牌IP，「径山茶」整体品牌价值达27亿余元。",
    "innovation": "「土地整治+」三茶融合，径山茶品牌价值达27亿余元",
    "deps": [
     4,
     7,
     19
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市",
     "区县"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "余杭区人民政府、径山镇人民政府，杭州市规划和自然资源局余杭分局",
    "policyTitle": "村庄风貌统筹与详细规划联动",
    "detail": "依据《杭州市人民政府办公厅关于高质量开展跨乡镇土地综合整治工作的通知》与浙江省全域土地综合整治实施意见，径山镇以「大径山乡村共同体计划管理办法」相衔接，编制径山南、径山北详细规划，做细颗粒度到具体村庄建设规划，对13个村庄风貌特色和发展方向总体布局，合理调整耕地、林地、园地等农业生产空间布局，在规划起点上避免了村庄同质化、千村一面等问题，试点区域呈现特色突出、功能互补、资源互动、要素互通、时序共享的整体布局。",
    "innovation": "13个村庄总体布局＋南北详细规划联动，避免「千村一面」",
    "deps": [
     3,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局、余杭区经济和信息化局，径山镇人民政府",
    "policyTitle": "低效用地盘活与租金收益提升",
    "detail": "依据《杭州市人民政府办公厅关于印发杭州市城镇低效用地认定办法的通知》与《杭州市人民政府办公厅关于推进工商业用地改革促进空间精准有效配置的实施意见》，径山镇按市级统一认定标准与建库流程开展低效工矿仓储、低效居住、低效商服等低效用地认定，运用低效用地再开发指标放宽、单一性质用地兼容15%—30%、「X」类混合用地、土地短期开发利用等政策工具，实施低效工业和城镇低效用地整治项目30个，盘活低效用地1031亩、存量建设用地500亩，用于民宿、镇村公益配套设施等布局建设。",
    "innovation": "低效用地整治项目30个，盘活低效用地1031亩、存量建设用地500亩",
    "deps": [
     11,
     12,
     18,
     19
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市",
     "区县"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局、余杭区林业水利局，径山镇人民政府",
    "policyTitle": "废弃矿山与苕溪水系生态修复",
    "detail": "依据《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见》与《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》，径山镇重点实施原风沙岭石矿（废弃）生态环境综合整治与苕溪水系环境治理，实现项目区村、山、路、河生态修复提升全覆盖。通过矿山地形重塑、植被恢复与河道水系治理，恢复生态功能、提升生态空间连通性，为「禅茶文化摇篮、休闲旅游胜地」的生态本底提供支撑。",
    "innovation": "废弃矿山整治＋苕溪水系治理，实现村山路河生态修复全覆盖",
    "deps": [
     1,
     3
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 10,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "余杭区人民政府、径山镇人民政府，杭州市规划和自然资源局余杭分局",
    "policyTitle": "绿道建设与公共空间环境提升",
    "detail": "结合《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见》与《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》，径山镇开展大径山绿道、吴山公园周边环境综合整治等重点区域周边环境提升改造项目19个，小微水体清淤整治、河道水域和山体边坡等治理项目13个，合计32个项目。随处可见的古朴景墙和特色花镜营造了「一户一处景、一路一幅画」的大美格局，在风貌塑造上传承乡村文脉之形。",
    "innovation": "环境提升改造19个＋小微水体等治理13个，营造「一户一处景」格局",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 11,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "余杭区农业农村局、杭州市规划和自然资源局余杭分局，径山镇人民政府",
    "policyTitle": "高标准农田建设与绿色农田示范",
    "detail": "依据《杭州市高标准农田建设「十四五」规划》与《杭州市人民政府办公厅关于优化创新耕地保护机制促进全市共同富裕的实施意见》，径山镇推进「十四五」高标准农田示范区与绿色农田建设，支撑整治区永久基本农田高标准化。整治后永久基本农田、高标准农田、粮食生产功能区套合比例达100%，同步实现耕地质量、粮食产能、农民收益「三提高」，粮食年增产379万公斤，为规模化、机械化经营和「三茶」融合产业提供高质量耕地空间。",
    "innovation": "高标准农田与永久基本农田、粮食功能区套合比例达100%",
    "deps": [
     10,
     13,
     16,
     19
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市",
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "杭州市规划和自然资源局余杭分局，径山镇人民政府",
    "policyTitle": "「三区三线」局部优化调整",
    "detail": "按照国家级工具箱（1.0版）附表第3份关于「三区三线」局部优化调整的要求与《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见》，径山镇在确保耕地和永久基本农田保护面积不减少、生态保护红线不突破的前提下，结合整治项目对项目区内「三区三线」作局部优化调整，统筹安排生产、生活、生态空间，解决山区丘陵地带耕地与林地、园地交错和村庄用地零散问题，为整治项目落地提供规划依据。",
    "innovation": "底线不突破前提下优化「三区三线」，破解山区耕地林地交错",
    "deps": [
     3
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "杭州市规划和自然资源局余杭分局，径山镇人民政府",
    "policyTitle": "集体经营性建设用地入市",
    "detail": "依据《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》与《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见》，径山镇对整治归并、零星插花的存量集体建设用地，在符合规划属工业、商业等经营性用途的前提下，由土地所有权人通过出让、出租等方式交由单位或个人使用，实行「先整治、再验收、后入市」。集体经营性建设用地入市与民宿、镇村公益配套设施布局相衔接，为茶文旅产业导入提供合规用地保障。",
    "innovation": "「先整治、再验收、后入市」保障民宿与茶文旅产业用地",
    "deps": [
     1,
     3,
     17
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省",
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "径山镇人民政府、杭州市规划和自然资源局余杭分局",
    "policyTitle": "闲置农房盘活与村集体收购出租",
    "detail": "按照《杭州市人民政府办公厅关于推进工商业用地改革促进空间精准有效配置的实施意见》与《杭州市人民政府办公厅关于印发杭州市城镇低效用地认定办法的通知》，径山镇多维度盘活利用存量土地360余亩，以村集体收购进行出租的方式盘活闲置农户房屋23套，增加村集体收益68万元、增加农户收益173万元。集中安置径山村农户117户、茶叶生产企业5家，开办民宿42家，推动闲置资源向经营资产转化，拓宽村集体与农民的财产性收入渠道。",
    "innovation": "村集体收购出租盘活闲置农房23套，村集体增收68万元、农户增收173万元",
    "deps": [
     11,
     12,
     17,
     18
    ],
    "leadLevel": "乡镇",
    "scope": "local",
    "scopeRank": 0,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市",
     "区县"
    ]
   },
   {
    "no": 15,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "余杭区财政局、杭州市规划和自然资源局余杭分局，径山镇人民政府",
    "policyTitle": "涉农资金统筹整合与区级集中投入",
    "detail": "依据《杭州市人民政府办公厅关于优化创新耕地保护机制促进全市共同富裕的实施意见》与《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》，径山镇统筹整合高标准农田建设、乡村振兴、土地整理、农房改造、增减挂钩、人居环境整治、废弃矿山生态修复等各条线涉农资金，形成资金合力；区级层面集中投入资金1亿元用于永久基本农田集中连片整治与耕地功能恢复项目，以小古城村为代表，通过土地整治项目为村争取资金1.6亿元，充分保障村庄规划落地实施。",
    "innovation": "区级集中投入1亿元，小古城村通过整治争取资金1.6亿元",
    "deps": [
     1,
     10,
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省",
     "市",
     "区县"
    ]
   },
   {
    "no": 16,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局、余杭区财政局，径山镇人民政府",
    "policyTitle": "政策性金融资金支持",
    "detail": "在《杭州市高标准农田建设「十四五」规划》确定的投入保障机制下，径山镇积极对接国家级工具箱（1.0版）附表第4份明确的国家开发银行、农业发展银行综合服务团队，在贷款期限、额度、利率上争取优惠，并通过绿色通道获得全链条融资服务。政策性金融资金与财政资金、指标交易收益相衔接，为山区丘陵地带多类子项目提供长期稳定的资金支撑。",
    "innovation": "以市级规划投入保障机制对接国家政策性金融，解决长周期资金需求",
    "deps": [
     13
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 17,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局、余杭区财政局，径山镇人民政府",
    "policyTitle": "市级土地指标交易平台与精品工程奖补",
    "detail": "依据《杭州市人民政府办公厅关于优化创新耕地保护机制促进全市共同富裕的实施意见》，该意见第十四条设专条「加大全域土地综合整治力度」，第二十一条建立市级土地指标交易平台，明确补充耕地、增减挂钩节余指标统一入市调剂，并设立「全域整治精品工程」市级奖补。径山镇据此将节余指标纳入市级平台调剂，同时申报市级精品工程奖补，形成「指标交易＋市级奖补」的双重资金渠道。",
    "innovation": "市级指标交易平台＋「全域整治精品工程」奖补双重资金渠道",
    "deps": [
     7,
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 18,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局、余杭区财政局，径山镇人民政府",
    "policyTitle": "低效用地再开发资金保障",
    "detail": "按照《杭州市人民政府办公厅关于印发杭州市城镇低效用地认定办法的通知》与《杭州市人民政府办公厅关于推进工商业用地改革促进空间精准有效配置的实施意见》，径山镇建立低效用地再开发的资金保障机制，统筹腾退补偿、改造提升与配套投入。实施低效工业和城镇低效用地整治项目30个，盘活低效用地1031亩、存量建设用地500亩，用于民宿与镇村公益配套设施建设，通过经营收益反哺改造投入，形成可持续的资金循环。",
    "innovation": "30个低效用地整治项目的改造投入—经营收益资金循环",
    "deps": [
     11,
     12,
     18,
     19
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市",
     "区县"
    ]
   },
   {
    "no": 19,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "试点推进",
    "lead": "余杭区人民政府、径山镇人民政府，杭州市规划和自然资源局余杭分局",
    "policyTitle": "跨乡镇土地综合整治试点与镇域整体推进",
    "detail": "依据《浙江省人民政府关于跨乡镇开展土地综合整治试点的意见》与《杭州市人民政府办公厅关于高质量开展跨乡镇土地综合整治工作的通知》，并按照国家级工具箱（1.0版）附表第1、2份，径山镇全域土地综合整治项目于2021年被自然资源部部署为乡镇全域土地综合整治试点，并列入浙江省首批试点。试点覆盖径山镇总面积157.08平方公里，呈现七山一水二分田的典型山区丘陵地貌，将全域土地综合整治融入地区发展规划战略，实现镇域整体推进。",
    "innovation": "国家级试点＋浙江省首批试点双试点叠加，157.08平方公里镇域整体推进",
    "deps": [
     1,
     2,
     7,
     15,
     18,
     20
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省",
     "市",
     "区县"
    ]
   },
   {
    "no": 20,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "全面实施",
    "lead": "杭州市人民政府、余杭区人民政府，径山镇人民政府",
    "policyTitle": "市级土地综合整治工作领导小组统筹",
    "detail": "按照《杭州市人民政府办公厅关于成立杭州市土地综合整治工作领导小组的通知》与《杭州市人民政府办公厅关于高质量开展跨乡镇土地综合整治工作的通知》，杭州市成立市级土地综合整治工作领导小组，办公室设在市规划和自然资源局，作为全市全域土地综合整治的市级组织协调与统筹机构。径山镇在市级统筹下建立区级组织、镇负主责、村抓落实的推进机制，保障13个村庄风貌统筹与32个环境治理项目同步实施、按期完成。",
    "innovation": "市级领导小组统筹、区级组织、镇负主责、村抓落实的推进机制",
    "deps": [
     7,
     9,
     15
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "市",
     "区县"
    ]
   },
   {
    "no": 21,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局，径山镇人民政府",
    "policyTitle": "全过程管理与绩效评价",
    "detail": "依据《浙江省土地综合整治全过程管理办法（试行）》与《杭州市人民政府办公厅关于高质量开展跨乡镇土地综合整治工作的通知》，径山镇建立从前期谋划、方案审批、项目实施、竣工验收、后期管护的全链条管理机制，实行分阶段验收与绩效评价，明确各阶段验收主体与责任。同时依据杭州市优化创新耕地保护机制的实施意见，对永久基本农田集中连片整治、耕地功能恢复项目实行台账化管理，确保整治成效可追溯、可核查。",
    "innovation": "全过程管理＋分阶段验收绩效评价，整治成效可追溯可核查",
    "deps": [
     3,
     7,
     15,
     16
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "市",
     "区县"
    ]
   },
   {
    "no": 22,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "杭州市规划和自然资源局余杭分局，径山镇人民政府",
    "policyTitle": "实施方案编制与联合审查",
    "detail": "按照《关于印发2020年乡村全域土地综合整治与生态修复工程名单的通知》（浙保耕办〔2020〕12号）与《浙江省土地综合整治全过程管理办法（试行）》，径山镇按照实施方案编制大纲编制项目实施方案，明确整治类型、项目清单、资金平衡与实施时序，方案由区级政府组织、市级初审、省级联合审查后批复实施；审查重点覆盖规划符合性、永久基本农田调整、「三区三线」优化与资金平衡，实行「一次性编制、一次性审查」，压缩审批周期、减少重复报批。",
    "innovation": "实施方案一次性编制、一次性审查，压缩审批周期",
    "deps": [
     3,
     5,
     16
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "区县"
    ]
   },
   {
    "no": 23,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "径山镇人民政府、余杭区人民政府，杭州市规划和自然资源局余杭分局",
    "policyTitle": "村民共商共建与底线管控",
    "detail": "落实《杭州市人民政府办公厅关于优化创新耕地保护机制促进全市共同富裕的实施意见》关于群众权益保障的要求，以及国家级工具箱（1.0版）附表第5份划定的负面清单，径山镇严守底线规范开展整治，禁止大拆大建、变相占用永久基本农田、违规调整生态保护红线、搞人造景观与增加地方政府隐性债务。以小古城村为代表，村党支部书记带领村民在樟树下讨论通过土地整治（复垦）项目实施方案，具体项目要不要实施、耕地功能恢复项目如何清表、村庄风貌如何管控等事项都由村民提、评、议，形成共商、共建、共治、共享促共富的氛围。",
    "innovation": "「樟树下议事」村民共商共建，把群众意愿前置到方案环节",
    "deps": [
     10,
     17
    ],
    "leadLevel": "乡镇",
    "scope": "local",
    "scopeRank": 0,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市",
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见",
    "docNo": "浙政办发〔2018〕80号",
    "issuer": "浙江省人民政府办公厅",
    "date": "2018-08-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2018/8/15/art_1229620738_2394685.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "浙江省人民政府关于跨乡镇开展土地综合整治试点的意见",
    "docNo": "浙政发〔2022〕32号",
    "issuer": "浙江省人民政府",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.zj.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "浙江省自然资源厅关于印发《浙江省土地综合整治全过程管理办法（试行）》的通知",
    "docNo": "浙自然资规〔2023〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2024-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2024/1/3/art_1229098242_2506965.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见",
    "docNo": "浙自然资〔2025〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2025-11-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229098242_2579170.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室关于印发2020年乡村全域土地综合整治与生态修复工程名单的通知",
    "docNo": "浙保耕办〔2020〕12号",
    "issuer": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室（浙江省自然资源厅代章）",
    "date": "2020-09-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2021/9/6/art_1229196455_2353233.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "浙江省国土资源厅关于做好城乡建设用地增减挂钩节余指标调剂使用管理工作的通知",
    "docNo": "浙土资规〔2018〕11号",
    "issuer": "浙江省国土资源厅",
    "date": "2018-10-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2018/10/18/art_1229098242_2322294.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "杭州市人民政府办公厅关于高质量开展跨乡镇土地综合整治工作的通知",
    "docNo": "杭政办函〔2023〕21号",
    "issuer": "杭州市人民政府办公厅",
    "date": "2023",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.hangzhou.gov.cn/",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "杭州市余杭区径山镇土地综合整治项目实施方案",
    "docNo": "未获取（门户未检索到方案正文页与文号）",
    "issuer": "杭州市余杭区人民政府",
    "date": "2021",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2024/4/15/art_1229619365_59027487.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "杭州市人民政府办公厅关于成立杭州市土地综合整治工作领导小组的通知",
    "docNo": "杭政办函〔2023〕10号",
    "issuer": "杭州市人民政府办公厅",
    "date": "2023-01-19",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.hangzhou.gov.cn/art/2023/1/31/art_1229063387_1829153.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "杭州市人民政府办公厅关于优化创新耕地保护机制促进全市共同富裕的实施意见",
    "docNo": "杭政办函〔2022〕66号",
    "issuer": "杭州市人民政府办公厅",
    "date": "2022-11-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.hangzhou.gov.cn/art/2022/11/21/art_1229063382_1827548.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "杭州市人民政府办公厅关于印发杭州市城镇低效用地认定办法的通知",
    "docNo": "杭政办函〔2025〕67号",
    "issuer": "杭州市人民政府办公厅",
    "date": "2025-12-30",
    "status": "现行有效（2026-02-01起施行）",
    "grade": "核验A级",
    "url": "https://zfgb.hangzhou.gov.cn/10/112220253/t131220253124/530071.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "杭州市人民政府办公厅关于推进工商业用地改革促进空间精准有效配置的实施意见",
    "docNo": "未获取",
    "issuer": "杭州市人民政府办公厅",
    "date": "2025-10-29",
    "status": "现行有效（2025-12-01起施行）",
    "grade": "核验A级",
    "url": "https://ghzy.hangzhou.gov.cn/col/col1229560919/art/2025/art_e46ed650126648ff8ee0ee12559041cb.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "杭州市高标准农田建设「十四五」规划",
    "docNo": "未获取",
    "issuer": "杭州市农业农村局（杭州市乡村振兴局）（经市政府同意）",
    "date": "2022-10-27",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.hangzhou.gov.cn/art/2024/1/16/art_1229591748_59092479.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市政府",
    "rank": 2,
    "caseId": "05",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "关于进一步完善耕地保护补偿机制的实施意见",
    "docNo": "余政办〔2022〕2号",
    "issuer": "杭州市余杭区人民政府办公室",
    "date": "2022-01-07 印发",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yuhang.gov.cn/art/2022/1/17/art_1229174782_1812257.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "关于高质量开展跨乡镇土地综合整治试点的实施意见",
    "docNo": "余政办〔2023〕45号",
    "issuer": "杭州市余杭区人民政府办公室",
    "date": "2023-07-19 印发",
    "status": "现行有效（有效期至 2027-12-31）",
    "grade": "核验A级",
    "url": "https://www.yuhang.gov.cn/art/2023/7/26/art_1229174782_1833468.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "余杭区农田建设项目管理实施办法",
    "docNo": "余农发〔2023〕158号",
    "issuer": "余杭区农业农村局、余杭区财政局",
    "date": "2023-11-29 印发",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yuhang.gov.cn/art/2025/6/16/art_1229176398_59144224.html",
    "attachUrl": "",
    "sourceNote": "核验说明：效力佐证：区农业农村局行政规范性文件清理结果目录第22项；门户发布页待补",
    "level": "区县",
    "levelHit": "区财政局",
    "rank": 1,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "余杭区农村宅基地及住房建设管理办法",
    "docNo": "余政办〔2024〕22号",
    "issuer": "杭州市余杭区人民政府办公室",
    "date": "2024-06-11 印发",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yuhang.gov.cn/art/2024/6/14/art_1229174782_1843920.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "余杭区深化工业用地有机更新 加快产业发展能级提升的实施意见",
    "docNo": "余政办〔2024〕26号",
    "issuer": "杭州市余杭区人民政府办公室",
    "date": "2024-07-03 印发",
    "status": "现行有效（有效期至 2026-12-31）",
    "grade": "核验A级",
    "url": "https://www.yuhang.gov.cn/art/2024/7/9/art_1229174782_1844576.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 19,
    "name": "推动经济高质量发展若干政策（2026年版）",
    "docNo": "余政发〔2026〕12号",
    "issuer": "杭州市余杭区人民政府",
    "date": "2026-03-24 印发",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yuhang.gov.cn/col/col1229174782/art/2026/art_4fc449b48d7f4888b6aff616a2e8984e.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 20,
    "name": "关于《余杭区全域土地综合整治与生态修复工程实施方案》的政策解读",
    "docNo": "无文号（政策解读件）",
    "issuer": "杭州市规划和自然资源局余杭分局",
    "date": "2019-01-03 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.yuhang.gov.cn/art/2019/1/3/art_1229178634_1199133.html",
    "attachUrl": "",
    "sourceNote": "文书形态：政策解读",
    "level": "市",
    "levelHit": "市规划和自然资源局",
    "rank": 2,
    "caseId": "05",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 5,
    "innovations": 5
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 6,
    "innovations": 6
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 3,
    "innovations": 3
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 4,
    "innovations": 4
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 2,
    "innovations": 2
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 2
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 23,
   "provinceTools": 14,
   "nationalTools": 0,
   "provinceBasis": 14,
   "nationalBasis": 0,
   "localDocs": 14,
   "provinceDocs": 6,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 23,
   "docs": 20,
   "innovations": 23,
   "implementation": 19,
   "pilot": 4,
   "gradeA": 19,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 7
  }
 },
 {
  "id": "06",
  "dir": "06_浙江省宁波市全域国土空间综合整治",
  "title": "浙江省宁波市全域国土空间综合整治全域土地综合整治政策激励工具箱（1.0版）",
  "name": "浙江省宁波市全域国土空间综合整治",
  "batch": "第一批",
  "province": "浙江",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "443 亿元",
  "summary": "全国首个全域国土空间综合整治城市，创新3类整治模式、6大重点区域、11个先行示范片区，永久基本农田集中连片整治2.68万亩。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以浙江省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具18项（其中创新工具3项）、政策文件21份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "宁波市政府、宁波市自然资源和规划局",
    "policyTitle": "增减挂钩节余指标调剂使用与收益反哺",
    "detail": "依据《浙江省国土资源厅关于做好城乡建设用地增减挂钩节余指标调剂使用管理工作的通知》，宁波市全域整治产生的增减挂钩节余指标纳入省级统一调剂管理，明确指标核定、调剂使用与收益分配的基本规则，调剂收益定向用于整治项目区安置补偿与基础设施配套，为整治项目资金平衡提供指标保障。",
    "innovation": "增减挂钩节余指标省级统一调剂，收益定向反哺整治项目区",
    "deps": [
     6
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宁波市委、市政府、宁波市自然资源和规划局",
    "policyTitle": "推进全域土地综合整治与生态修复工程",
    "detail": "宁波最早的市级全域土地综合整治专门文件，明确「山水林田湖草路村」全要素整治、「土地整治+」工程、永久基本农田整备区制度、增减挂钩节余指标跨县域调剂与指标收益返村，并设立市领导小组。",
    "innovation": "",
    "deps": [
     1,
     5,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宁波市委、市政府、宁波市自然资源和规划局",
    "policyTitle": "宁波市历史遗留矿山生态修复三年工作计划（2023—2025年）",
    "detail": "明确衔接「片区全域国土空间综合整治规划」、「一矿一策」分类实施矿山生态修复，全市任务574.77公顷。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宁波市政府",
    "policyTitle": "宁波市城镇低效用地认定办法",
    "detail": "规定低效工矿仓储用地认定标准（亩均税收低于省定分行业低效指导标准或连续2年亩均效益综合评价最低档、现状容积率低于1.0、已闭坑采矿用地）及边角地／夹心地／插花地等零星建设用地的处理，并建立「乡镇摸排、行业审查、资规统筹、政府认定」协同机制与低效用地数据库年度更新备案制度，是全域整治中低效用地认定的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "宁波市委、市政府、宁波市自然资源和规划局",
    "policyTitle": "宁波市城镇低效用地认定办法",
    "detail": "全域整治「城镇低效用地再开发」任务的市级统一认定标准，建立「乡镇摸排、行业审查、资规统筹、政府认定」机制与全市统一低效用地数据库平台。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "宁波市委、市政府、宁波市自然资源和规划局",
    "policyTitle": "宁波市低效用地再开发试点",
    "detail": "全域整治五大任务之一「工业用地整治和城镇低效用地再开发」的市级试点实施方案，与全域整治双试点驱动。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "宁波市政府",
    "policyTitle": "宁波市人民政府关于贯彻落实《宁波市征收集体所有土地房屋补偿条例》的实施意见",
    "detail": "加快农村宅基地管理制度落地（规范成员认定、宅基地建房审批、分户合户），并因地制宜安排补偿方式、盘活存量安置房、探索跨区域安置、鼓励货币补偿及明确货币补偿奖励与购房补助标准，是全域整治中宅基地管理与征收补偿安置的区级依据。",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "宁波市农业农村局",
    "policyTitle": "关于深化农村闲置农房盘活利用工作的指导意见",
    "detail": "推进农村闲置农房盘活利用，鼓励有条件的区（县、市）发展乡村民宿与乡村新业态，是全域整治中闲置农房盘活的区级依据。（该件正文未获取，名称与内容见市农业农村局提案答复的明确引用）",
    "innovation": "",
    "deps": [
     21
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "宁波市政府、各区（县、市）政府",
    "policyTitle": "大规模投资统筹与指标价值转化政策",
    "detail": "全市11个全域整治试点示范片区累计实施项目371个，实现投资443亿元，永久基本农田集中连片整治2.68万亩，垦造耕地276.34亩，建设用地复垦492.90亩，低效建设用地整治盘活1.27万亩。",
    "innovation": "以市级统筹实现443亿元投资聚焦，形成功能优化、生态改善、耕地连片、产业升级的「甬式」蝶变",
    "deps": [
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "宁波市委、市政府、宁波市自然资源和规划局",
    "policyTitle": "宁波市全域国土空间综合整治生态修复考核奖补资金管理实施细则",
    "detail": "专为全域国土空间综合整治试点设立生态修复考核奖补机制，五星/四星/三星级项目分别奖励500/400/300万元，年度奖补2200万元。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "宁波市委、市政府、宁波市自然资源和规划局",
    "policyTitle": "宁波市耕地保护与土地整治专项资金管理办法（试行）",
    "detail": "明确市级专项资金用于耕地保护补偿与「示范工程市级奖补」，奖补对象包括永久基本农田集中连片整治示范工程和「乡村全域土地综合整治与生态修复工程」。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "宁波市自然资源和规划局、宁波市财政局",
    "policyTitle": "宁波市全域国土空间综合整治生态修复考核奖补资金管理实施细则",
    "detail": "对全域国土空间综合整治生态修复项目分档奖补（五星级500万元、四星级、三星级），并确立区（县、市）级申报—市级复核—审定发文的流程，是全域整治中生态修复奖补资金管理的区级依据。",
    "innovation": "",
    "deps": [
     20
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "试点推进",
    "lead": "宁波市委、市政府、宁波市自然资源和规划局",
    "policyTitle": "全市域全要素自然资源综合整治试点政策",
    "detail": "宁波是全国首个获批在全市域范围、针对全自然资源要素开展综合整治的试点城市，创新构建3类整治模式、6大重点整治区域、首批11个先行示范片区格局，统筹融合生产、生活、生态「三生空间」。",
    "innovation": "全国首个全市域、全自然资源要素综合整治试点，突破乡镇单元限制",
    "deps": [
     2,
     4,
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "宁波市发展和改革委员会、宁波市自然资源和规划局",
    "policyTitle": "主项目+子项目分级赋码审批政策",
    "detail": "以整治片区策划、单元方案为基础生成主项目统一立项并在3.0平台赋码，主项目下按内容或行业分类分成子项目赋子码；片区策划、单元方案达深度要求的可直接作为主项目的项目建议书和可行性研究报告审批依据。",
    "innovation": "全国首创「主项目+子项目」分级赋码审批模式，大幅简化整治项目审批流程",
    "deps": [
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "宁波市委、市政府、宁波市自然资源和规划局",
    "policyTitle": "全域国土空间综合整治项目审批工作指引（试行）",
    "detail": "依据甬党发〔2023〕5号制定，创新「主项目+子项目」赋码立项、片区策划与单元方案替代项目建议书/可研的审批机制。",
    "innovation": "",
    "deps": [
     3,
     9
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 16,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "宁波市委、市政府、宁波市自然资源和规划局",
    "policyTitle": "宁波市高标准农田建设工程设施管护办法",
    "detail": "全域整治农用地整理建成高标准农田后的长效管护制度，保障整治新增耕地与农田设施长期发挥效益。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 17,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "宁波市发展和改革委员会",
    "policyTitle": "全域国土空间综合整治项目审批工作指引（试行）",
    "detail": "以整治片区策划、整治单元方案为基础设立主项目并在省投资项目在线审批监管平台统一赋码立项，明确跨区（县、市）项目由市级审批（核准、备案），且片区策划、单元方案报市全域国土空间综合整治领导小组批准后可作为主项目的项目建议书、可行性研究报告审批依据，是全域整治中项目审批的区级工作指引。",
    "innovation": "",
    "deps": [
     18
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 18,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "宁波市政府",
    "policyTitle": "中共宁波市委 宁波市人民政府关于开展全域国土空间综合整治助推高质量发展建设共同富裕先行市的意见",
    "detail": "围绕「群众满意、耕地改良、粮食增产、防灾减灾能力增强和生态环境改善」目标系统开展农用地整理、建设用地整理与生态保护修复，是全市域开展全域国土空间综合整治的纲领性依据。（正文全文未在市门户公开，文号与名称见市发改委通知的明确引用）",
    "innovation": "",
    "deps": [
     19
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见",
    "docNo": "浙政办发〔2018〕80号",
    "issuer": "浙江省人民政府办公厅",
    "date": "2018-08-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2018/8/15/art_1229620738_2394685.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "浙江省人民政府关于跨乡镇开展土地综合整治试点的意见",
    "docNo": "浙政发〔2022〕32号",
    "issuer": "浙江省人民政府",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.zj.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "浙江省自然资源厅关于印发《浙江省土地综合整治全过程管理办法（试行）》的通知",
    "docNo": "浙自然资规〔2023〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2024-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2024/1/3/art_1229098242_2506965.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见",
    "docNo": "浙自然资〔2025〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2025-11-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229098242_2579170.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室关于印发2020年乡村全域土地综合整治与生态修复工程名单的通知",
    "docNo": "浙保耕办〔2020〕12号",
    "issuer": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室（浙江省自然资源厅代章）",
    "date": "2020-09-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2021/9/6/art_1229196455_2353233.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "浙江省国土资源厅关于做好城乡建设用地增减挂钩节余指标调剂使用管理工作的通知",
    "docNo": "浙土资规〔2018〕11号",
    "issuer": "浙江省国土资源厅",
    "date": "2018-10-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2018/10/18/art_1229098242_2322294.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "中共宁波市委 宁波市人民政府关于开展全域国土空间综合整治的实施意见",
    "docNo": "甬党发〔2023〕5号",
    "issuer": "中共宁波市委、宁波市人民政府",
    "date": "2023",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ningbo.gov.cn/art/2023/2/16/art_1229099763_59450984.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "宁波市人民政府办公厅关于推进全域土地综合整治与生态修复工程的意见",
    "docNo": "甬政办发〔2019〕10号",
    "issuer": "宁波市人民政府办公厅",
    "date": "2019-01-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ningbo.gov.cn/art/2019/1/25/art_1229533176_949635.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "关于印发《全域国土空间综合整治项目审批工作指引（试行）》的通知",
    "docNo": "未获取",
    "issuer": "宁波市发展和改革委员会",
    "date": "2023-06-30",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://qf.ningbo.gov.cn/qfpt/fwbk/xmfw/xmzx/zczx/art/2024/art_722c0811e69f4b02bfe468f54a15fdf7.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市发展和改革委员会",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "宁波市自然资源和规划局关于印发《宁波市历史遗留矿山生态修复三年工作计划（2023—2025年）》的通知",
    "docNo": "甬自然资规发〔2023〕58号",
    "issuer": "宁波市自然资源和规划局（经市政府同意）",
    "date": "2023-11-16",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zgj.ningbo.gov.cn/art/2023/11/16/art_1229622279_1783343.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市政府",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "宁波市自然资源和规划局 宁波市财政局关于印发《宁波市全域国土空间综合整治生态修复考核奖补资金管理实施细则》的通知",
    "docNo": "甬自然资规发〔2024〕29号",
    "issuer": "宁波市自然资源和规划局、宁波市财政局",
    "date": "2024-08-20",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zgj.ningbo.gov.cn/art/2024/9/5/art_1229036864_58976620.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市财政局",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "宁波市人民政府办公厅关于印发宁波市城镇低效用地认定办法的通知",
    "docNo": "甬政办发〔2026〕15号",
    "issuer": "宁波市人民政府办公厅",
    "date": "2026-06-18",
    "status": "现行有效（2026-07-19起施行）",
    "grade": "核验A级",
    "url": "https://www.ningbo.gov.cn/col/col1229533176/art/2026/art_267580853426458fbfa90320a2378623.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "关于印发《宁波市耕地保护与土地整治专项资金管理办法（试行）》的通知",
    "docNo": "未获取",
    "issuer": "宁波市自然资源和规划局、宁波市财政局、宁波市农业农村局",
    "date": "2022-06-06",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zgj.ningbo.gov.cn/art/2022/6/10/art_1229036864_58958468.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "宁波市低效用地再开发试点实施方案",
    "docNo": "未获取",
    "issuer": "宁波市人民政府办公厅",
    "date": "2024-06-04",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zgj.ningbo.gov.cn/art/2024/9/9/art_1229037531_58976714.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "宁波市农业农村局关于印发《宁波市高标准农田建设工程设施管护办法》的通知",
    "docNo": "未获取",
    "issuer": "宁波市农业农村局",
    "date": "2024-11-13",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.ningbo.gov.cn/art/2024/11/18/art_1229884062_1803755.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "宁波市人民政府办公厅关于印发宁波市城镇低效用地认定办法的通知",
    "docNo": "甬政办发〔2026〕15号",
    "issuer": "宁波市人民政府办公厅",
    "date": "2026-06-18 成文、2026-07-21 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ningbo.gov.cn/col/col1229897207/2026nd13q/art/2026/art_54a06aa571a24bc19a4faaef7a52a2d2.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自2026-07-19 起施行，有效期至2030-07-19（现行有效）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "宁波市人民政府关于贯彻落实《宁波市征收集体所有土地房屋补偿条例》的实施意见",
    "docNo": "甬政发〔2026〕47号",
    "issuer": "宁波市人民政府",
    "date": "2026-07-23 成文、2026-08-07 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ningbo.gov.cn/col/col1229533175/art/2026/art_db3788c31a454defa45de9ed764782cc.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自公布之日起施行（现行有效）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "全域国土空间综合整治项目审批工作指引（试行）",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "宁波市发展和改革委员会",
    "date": "2023-06-30 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://qf.ningbo.gov.cn/qfpt/fwbk/xmfw/xmzx/zczx/art/2024/art_722c0811e69f4b02bfe468f54a15fdf7.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自发布之日起试行（门户未标注效力状态）",
    "level": "市",
    "levelHit": "市发展和改革委员会",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 19,
    "name": "中共宁波市委 宁波市人民政府关于开展全域国土空间综合整治助推高质量发展建设共同富裕先行市的意见",
    "docNo": "甬党发〔2023〕5号",
    "issuer": "中共宁波市委、宁波市人民政府",
    "date": "2023 年印发",
    "status": "",
    "grade": "核验B级",
    "url": "https://qf.ningbo.gov.cn/qfpt/fwbk/xmfw/xmzx/zczx/art/2024/art_722c0811e69f4b02bfe468f54a15fdf7.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未在市门户公开（文号与名称见第 3 项市发改委通知的明确引用）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 20,
    "name": "宁波市全域国土空间综合整治生态修复考核奖补资金管理实施细则",
    "docNo": "未获取",
    "issuer": "宁波市自然资源和规划局、宁波市财政局",
    "date": "2024-09 印发",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.fh.gov.cn/col/col1229037584/art/2026/art_bf1385bb09c24b77a183cfa50b5b84e6.html",
    "attachUrl": "",
    "sourceNote": "文书形态：效力与内容佐证页为市资规局奉化分局 2025 年度奖补资金支付公示（2026-06-26）",
    "level": "市",
    "levelHit": "市财政局",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 21,
    "name": "关于深化农村闲置农房盘活利用工作的指导意见",
    "docNo": "未获取",
    "issuer": "宁波市农业农村局",
    "date": "未获取",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.ningbo.gov.cn/col/col1229884074/art/2026/art_f9c6b8b904b343a1a9688253b6043836.html",
    "attachUrl": "",
    "sourceNote": "文书形态：见市农业农村局对市政协十六届五次会议第 51 号提案答复的明确引用（2026-06-16）",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "06",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 3,
    "innovations": 0
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 4,
    "innovations": 1
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 5,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 18,
   "provinceTools": 4,
   "nationalTools": 0,
   "provinceBasis": 4,
   "nationalBasis": 0,
   "localDocs": 15,
   "provinceDocs": 6,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 18,
   "docs": 21,
   "innovations": 4,
   "implementation": 12,
   "pilot": 6,
   "gradeA": 14,
   "gradeB": 7,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "07",
  "dir": "07_浙江省嘉兴市秀洲区新塍镇",
  "title": "浙江省嘉兴市秀洲区新塍镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "浙江省嘉兴市秀洲区新塍镇",
  "batch": "第一批",
  "province": "浙江",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "16.42 亿元",
  "summary": "首创农田退水「零直排」，推广稻渔综合种养，建成2个万亩方，新增集中连片耕地8445亩，亩均土地流转费用从800元增至1200元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以浙江省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具28项（其中创新工具3项）、政策文件18份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "嘉兴市自然资源和规划局、嘉兴市农业农村局，秀洲区人民政府、新塍镇人民政府",
    "policyTitle": "永久基本农田集中连片整治与布局优化",
    "detail": "依据《嘉兴市土地综合整治工程推进方案（2023—2027年）》部署的永久基本农田集中连片建设任务，以天福村为核心实施万亩方集中连片整治，编制永久基本农田调整方案并按已有规定办理，新增永久基本农田面积不少于调整面积的5%、调整规模不超过所涉乡镇划定面积的5%，坚持「先补后调」「可实测、可追溯」。2023年5月天福村完成土地平整及田间道路、渠道、河道护岸、绿化、灌溉设施等工程，复垦耕地全部整治为「田成方、渠成网、路相连」的高标准农田，镇域耕地集中连片程度大幅提升。",
    "innovation": "形成全省规模最大、质量等级最高的天福万亩方，亩均增收100斤",
    "deps": [
     8,
     9
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "嘉兴市自然资源和规划局、嘉兴市农业农村局，秀洲区自然资源和规划分局、新塍镇人民政府",
    "policyTitle": "多田套合工程",
    "detail": "按照《嘉兴市土地综合整治（多田套合工程）2025年度实施方案》与《促进共同富裕基本单元建设推进土地综合整治「一块地」集成改革的实施方案》，在整治项目区内推动耕地、永久基本农田、高标准农田、粮食生产功能区层层套合，以「一块地」集成改革统筹农用地整理与永久基本农田布局调整，做到同一地块上多类保护任务边界一致、图层合一。全镇建成高标准农田10万余亩、建成2个万亩方，新增集中连片耕地8445亩、建成标准地1.2万亩，为规模化经营与机械化耕作奠定空间基础。",
    "innovation": "以「多田套合＋一块地」集成改革实现耕地保护任务的空间合一",
    "deps": [
     7,
     12
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "嘉兴市自然资源和规划局、嘉兴市财政局，秀洲区人民政府",
    "policyTitle": "增减挂钩节余指标交易与收益分配",
    "detail": "依据《嘉兴市农村土地整治增减挂钩节余指标交易管理办法（试行）》与《浙江省国土资源厅关于做好城乡建设用地增减挂钩节余指标调剂使用管理工作的通知》，新塍镇通过宅基地退出与低效建设用地复垦产生增减挂钩节余指标，纳入市级、县级交易平台按基准价公开交易，收益全额返还项目区用于安置补偿、基础设施与后期管护。整治腾退的建设用地在优先保障试点乡镇农民安置、农村基础设施建设与公益事业用地后，节余指标重点用于农村一二三产业融合发展。",
    "innovation": "建立节余指标「复垦—交易—反哺」闭环",
    "deps": [
     6,
     13
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "秀洲区人民政府、秀洲区自然资源和规划分局，新塍镇人民政府",
    "policyTitle": "节余指标优先保障重大产业与民生用地",
    "detail": "按照《嘉兴市土地综合整治工程推进方案（2023—2027年）》「打造项目示范体系」的要求与「一块地」集成改革部署，新塍镇将复垦产生的节余指标优先用于农民安置房、农村基础设施和公共服务设施建设，其余指标由区级统筹，集中力量保障省「415X」先进制造业集群光伏产业核心区建设。通过土地要素向平台集聚，推动人口向运河湾新城集聚，主城区面积由13平方公里拓展至98平方公里，人口承载力由70万人提升至200万人。",
    "innovation": "以整治节余指标保障重大产业落地，实现「整治—指标—产业」联动",
    "deps": [
     7,
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "嘉兴市自然资源和规划局，秀洲区自然资源和规划分局",
    "policyTitle": "补充耕地指标有偿调剂",
    "detail": "依据《嘉兴市创建耕地保护示范市实施方案》部署的「百千万」永久基本农田集中连片整治与补充耕地任务，以及国家关于完善补充耕地指标调剂机制的要求，新塍镇将整治新产生的补充耕地指标在优先满足县域自行平衡需要后，剩余指标统一纳入省级管理平台在省域范围内有偿调剂，实现耕地数量、质量、生态「三位一体」保护与指标价值转化，调剂收益回投项目区用于耕地质量提升与后期管护。",
    "innovation": "以补充耕地指标有偿调剂打通耕地保护的价值实现通道",
    "deps": [
     9
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "秀洲区政府、新塍镇政府",
    "policyTitle": "秀洲区推动经济高质量发展若干政策（2025年版）",
    "detail": "部署协同推进高标准农田建设与耕地功能恢复，明确2025年全区新建（认定）高标准农田（储备区）0.63万亩以上、力争「多田套合」率达100%，并争取省级新增建设用地、耕地占补平衡、林地定额等指标保障，是全域整治中指标统筹与高标准农田建设的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "秀洲区人民政府、新塍镇人民政府，秀洲区自然资源和规划分局",
    "policyTitle": "「小田变大田」农用地整理与万亩方建设",
    "detail": "围绕《嘉兴市土地综合整治工程推进方案（2023—2027年）》部署的农用地整治任务与《嘉兴市高标准农田建设提升行动方案（2022-2025年）》的田块整治要求，新塍镇整体推进零星破碎耕地整合与高标准农田建设，通过小田并大田、拆旧复垦实现「碎田」变「整田」。全镇建成2个万亩方，新增集中连片耕地8445亩，建成标准地1.2万亩；天福村拆除25个生产小组、98%以上村民完成搬迁，亩均土地流转费用由800元提升至1200元、增长50%。",
    "innovation": "「万亩方＋标准地」集中连片整治模式",
    "deps": [
     8,
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "嘉兴市农业农村局、嘉兴市自然资源和规划局，秀洲区人民政府、新塍镇人民政府",
    "policyTitle": "高标准农田建设与耕地地力提升",
    "detail": "落实《嘉兴市高标准农田建设提升行动方案（2022-2025年）》与《嘉兴市创建耕地保护示范市实施方案》「百千万」永久基本农田集中连片整治部署，结合永久基本农田集中连片整治同步开展田块整治、耕地地力提升与灌排配套。三年间镇域建成高标准农田10万余亩，天福村建成高标准农田6000多亩，复垦耕地全部达到「田成方、渠成网、路相连」标准，农田基础设施与耕地质量同步提升，为规模化、机械化经营创造条件。",
    "innovation": "高标准农田建设与永久基本农田集中连片整治同步实施、一次成型",
    "deps": [
     9,
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "秀洲区人民政府、新塍镇人民政府，秀洲区自然资源和规划分局",
    "policyTitle": "宅基地整理、农房集聚与共富安置社区",
    "detail": "依据《促进共同富裕基本单元建设推进土地综合整治「一块地」集成改革的实施方案》与《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见》，新塍镇加快土地要素流动，盘活农村宅基地与低效用地，推进农房集聚与安置社区建设。完成搬迁的村民主要入住火炬二期安置房与天福新家园小区，部分村民在重新划定的集聚区按原比例自建、建筑风格整体统一；同步推进农业转移人口市民化改革，搬迁村民保留原农村户籍地权益，就近享受城市优质教育、医疗等公共服务。",
    "innovation": "打造共富惠民高品质安置社区，实现农民居住生活高品质",
    "deps": [
     4,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "嘉兴市自然资源和规划局，秀洲区人民政府、新塍镇人民政府",
    "policyTitle": "乡村生态保护修复与美丽田园建设",
    "detail": "依据《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》与《嘉兴市土地综合整治工程推进方案（2023—2027年）》部署的生态修复任务，新塍镇通过农用地生态化整治工程实现耕地生态改善与质量提高，同步推进美丽田园与美丽乡村建设，系统提升农村生态环境质量。项目区累计建成省级共同富裕新时代美丽乡村示范带1条、未来乡村1个、3A级景区村庄13个、市级特色精品村5个，农村生态环境呈现高颜值。",
    "innovation": "以农用地生态化整治带动乡村整体风貌提升",
    "deps": [
     1,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "嘉兴市农业农村局，秀洲区人民政府、新塍镇人民政府",
    "policyTitle": "农田生态化整治与退水「零直排」",
    "detail": "落实《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》关于农用地生态化整治的部署与《嘉兴市创建耕地保护示范市实施方案》的耕地生态保护要求，新塍镇首创农田退水「零直排」技术模式，从源头控制农业面源污染；深化「肥药两制」改革，推广稻渔综合种养模式，配套建设生态沟渠与退水治理设施，实现耕地生态改善与质量提高同步推进，为平原水网地区农田面源污染治理提供可复制样板。",
    "innovation": "全国首创农田退水「零直排」技术模式",
    "deps": [
     1,
     9
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "嘉兴市自然资源和规划局，秀洲区人民政府、新塍镇人民政府",
    "policyTitle": "河湖水系综合治理与人居环境提升",
    "detail": "结合《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》的生态环境整治修复任务与《嘉兴市土地综合整治工程推进方案（2023—2027年）》的生态修复部署，新塍镇实施渠道、河道护岸、绿化与灌溉设施等工程，推进河湖水系综合治理与农村人居环境整治，补齐农村基础设施短板。天福村在土地平整的同时完成渠道、河道护岸与绿化工程，村庄垃圾分类、绿化养护实现常态化管护，村民居住环境显著改善。",
    "innovation": "土地整治与河湖水系治理同步实施、一次施工多重成效",
    "deps": [
     1,
     8,
     18
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "新塍镇人民政府、秀洲区自然资源和规划分局",
    "policyTitle": "权属调整与群众参与机制",
    "detail": "按照《关于印发2020年乡村全域土地综合整治与生态修复工程名单的通知》（浙保耕办〔2020〕12号）关于按实施方案编制提纲要求编制工程实施方案的规定与「一块地」集成改革的群众参与安排，新塍镇在实施方案报批前须经村民会议三分之二以上成员或村民代表同意，并在项目区公示不少于15日；同步编制权属调整方案，明确承包权与经营权调整、宅基地资格权退出与置换等安排，推广「村民议事堂」「代表跑团」等群众参与机制，保障农民的知情权、参与权与收益权。",
    "innovation": "以权属调整方案＋公示议事程序把群众意愿前置到方案报批环节",
    "deps": [
     5,
     7
    ],
    "leadLevel": "乡镇",
    "scope": "local",
    "scopeRank": 0,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "秀洲区人民政府、秀洲区自然资源和规划分局",
    "policyTitle": "集体经营性建设用地入市",
    "detail": "依据《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》关于盘活集体建设用地的部署与「一块地」集成改革的产权政策安排，新塍镇对整治归并、零星插花的存量集体建设用地，在符合规划属工业、商业等经营性用途的前提下，由土地所有权人通过出让、出租等方式交由单位或个人使用，实行「先整治、再验收、后入市」，拓宽乡村振兴资金来源，为产业导入提供合规用地保障。",
    "innovation": "「先整治、再验收、后入市」的集体建设用地盘活路径",
    "deps": [
     1,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "秀洲区财政局、秀洲区人民政府，嘉兴市自然资源和规划局",
    "policyTitle": "涉农资金统筹整合",
    "detail": "按照《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》关于资金保障的部署与《嘉兴市土地综合整治工程推进方案（2023—2027年）》的资金统筹要求，新塍镇统筹整合高标准农田建设、乡村振兴、土地整理、农房改造、增减挂钩、人居环境整治、废弃矿山生态修复等各条线涉农资金，形成资金合力；统筹新增建设用地有偿使用费、土地出让收入、耕地开垦费、指标交易费等，集中支持整治项目，项目总投资规模达45.1亿元。",
    "innovation": "多渠道资金统筹整合，破解整治资金碎片化",
    "deps": [
     1,
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 16,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "嘉兴市自然资源和规划局、嘉兴市财政局、嘉兴市农业农村局，秀洲区人民政府",
    "policyTitle": "耕地保护补偿与「田长制」管护资金",
    "detail": "依据《关于调整完善耕地保护补偿实施办法的通知》确定的耕地保护差别化补偿标准与资金管理规定，并在《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》确立的资金保障框架下，新塍镇将耕地保护补偿资金定向用于「田长制」与耕地保护日常管护，建立整治项目后期管护的资金保障机制。补偿资金按耕地保护责任落实情况差别化分配，与永久基本农田集中连片整治、高标准农田建成后的管护责任挂钩，由镇、村两级田长分级承担巡查管护责任，形成「整治—验收—移交—管护」的责任链条，确保整治形成的集中连片耕地长期稳定利用，避免「重建轻管」。",
    "innovation": "以差别化耕地保护补偿为后期管护提供稳定资金机制",
    "deps": [
     1,
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 17,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "秀洲区财政局、秀洲区自然资源和规划分局，新塍镇人民政府",
    "policyTitle": "指标交易收益反哺与产业投资",
    "detail": "按照《嘉兴市农村土地整治增减挂钩节余指标交易管理办法（试行）》关于指标交易收益分配的规定与《嘉兴市土地综合整治工程推进方案（2023—2027年）》的项目示范体系部署，新塍镇将增减挂钩节余指标交易收益定向用于项目区安置补偿、基础设施配套与产业培育，并利用复垦产生的节余指标集中保障省「415X」先进制造业集群光伏产业核心区建设，预计光伏产业规模以上产值今年底可达500亿元，形成「指标交易—资金反哺—产业增值」的循环。",
    "innovation": "指标收益定向反哺项目区，保障省「415X」光伏产业核心区落地",
    "deps": [
     8,
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 18,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "浙江省自然资源厅（指导）、嘉兴市自然资源和规划局，秀洲区人民政府",
    "policyTitle": "政策性金融资金支持",
    "detail": "在《浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见》确立的多元化资金保障框架下，新塍镇积极对接国家级工具箱（1.0版）附表第4份明确的国家开发银行、农业发展银行综合服务团队，在贷款期限、额度、利率上争取优惠，最长可达30年，并通过绿色通道获得全链条融资服务，为总投资45.1亿元的整治项目提供长期稳定的资金支撑。",
    "innovation": "以省级制度框架对接国家政策性金融，解决整治项目长周期资金需求",
    "deps": [
     1
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 19,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "嘉兴市秀洲区农业农村和水利局、嘉兴市秀洲区财政局",
    "policyTitle": "秀洲区农田建设项目与资金管理实施细则（修订）",
    "detail": "规定农田建设实行集中统一管理（统一规划布局、建设标准、组织实施、验收评价、上图入库），明确区农业农村和水利局、区财政局、镇（街道）三级职责分工，以及规划编制—前期准备—申报审批—计划管理—组织实施—竣工验收—监督评价的项目程序，是全域整治中农田建设项目与资金管理的区级依据。",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 20,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "试点推进",
    "lead": "浙江省自然资源厅（指导）、嘉兴市自然资源和规划局，秀洲区人民政府、新塍镇人民政府",
    "policyTitle": "跨乡镇土地综合整治试点",
    "detail": "依据《浙江省人民政府关于跨乡镇开展土地综合整治试点的意见》，新塍镇等2镇（街道）全域土地综合整治项目于2021年获批国家级试点，并列入浙江省首批33个跨乡镇试点、全省第三批高质量发展建设共同富裕示范区试点，共涉及15个村、总面积8.56万亩、总投资45.1亿元。项目以「共同富裕」为总目标，构筑农村生产集约高效、农居生活特色传承、生态空间优美、新兴产业集聚发展的空间格局，打造体制机制集成改革先行区与城乡融合共富现代化基本单元的展示窗口。",
    "innovation": "国家级试点与省首批跨乡镇试点双试点叠加",
    "deps": [
     2,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 21,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "全面实施",
    "lead": "秀洲区人民政府、秀洲区自然资源和规划分局",
    "policyTitle": "低效用地再开发与工业用地集中连片",
    "detail": "按照「一块地」集成改革的集成整治要求与《嘉兴市土地综合整治工程推进方案（2023—2027年）》部署的建设用地整治任务，新塍镇推进闲置低效建设用地盘活与村庄布局优化，通过拆旧建新、空间腾挪盘活存量建设用地。整治破解了建设用地破碎化问题，推动工业用地集中连片，激活流量空间并推动资源向嘉兴国家高新区、运河湾新城、临空经济区三大平台倾斜，保障了全区重大产业项目建设，提升了土地节约集约利用水平。",
    "innovation": "以整治腾挪的存量空间支撑平台经济与重大产业落地",
    "deps": [
     7,
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "市"
    ]
   },
   {
    "no": 22,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "浙江省自然资源厅（指导）、嘉兴市自然资源和规划局，秀洲区自然资源和规划分局",
    "policyTitle": "全过程管理与绩效评价",
    "detail": "按照《浙江省土地综合整治全过程管理办法（试行）》建立的全过程管理制度与《嘉兴市土地综合整治工程推进方案（2023—2027年）》的年度任务要求，新塍镇建立从前期谋划、方案审批、项目实施、竣工验收、后期管护的全链条管理机制，实行分阶段验收与绩效评价，明确各阶段验收主体与责任；同时将年度整治复垦任务纳入区「百日攻坚」专项行动考核，以任务清单与考核倒逼整治进度，确保项目按年度计划闭环推进、按期完成。",
    "innovation": "全过程管理＋专项行动考核双线推进，确保任务闭环",
    "deps": [
     3,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 23,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "秀洲区人民政府、秀洲区自然资源和规划分局，新塍镇人民政府",
    "policyTitle": "实施方案编制与联合审查",
    "detail": "依据《关于印发2020年乡村全域土地综合整治与生态修复工程名单的通知》（浙保耕办〔2020〕12号）与《嘉兴市土地综合整治工程推进方案（2023—2027年）》的项目管理要求，新塍镇按照实施方案编制大纲要求编制项目实施方案，由区级政府组织、市级初审、省级联合审查后批复实施；审查重点覆盖规划符合性、永久基本农田调整、「三区三线」优化、资金平衡等方面，实行「一次性编制、一次性审查」，压缩审批周期、减少重复报批。",
    "innovation": "实施方案一次性编制、一次性审查，提升审批效率",
    "deps": [
     5,
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 24,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "新塍镇人民政府、秀洲区人民政府",
    "policyTitle": "群众知情参与与权益保障",
    "detail": "落实《关于印发2020年乡村全域土地综合整治与生态修复工程名单的通知》（浙保耕办〔2020〕12号）关于充分尊重人民群众意愿、切实维护人民群众利益的要求、「一块地」集成改革的权益保障安排，以及国家级工具箱（1.0版）附表第5份划定的负面清单，新塍镇严守底线规范开展整治，禁止大拆大建、变相占用永久基本农田、违规调整生态保护红线、搞人造景观与增加地方政府隐性债务；实施方案经村民会议三分之二以上成员或村民代表同意、项目区公示不少于15日，并推广「村民议事堂」「代表跑团」等群众参与机制。",
    "innovation": "负面清单＋公示议事双约束，把群众权益嵌入整治全流程",
    "deps": [
     5,
     7
    ],
    "leadLevel": "乡镇",
    "scope": "local",
    "scopeRank": 0,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 25,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "秀洲区人民政府、新塍镇人民政府",
    "policyTitle": "龙头企业带动与利益联结",
    "detail": "依据《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见》与「一块地」集成改革关于多方参与的部署，新塍镇依托万亩方高标准农田引进由中国水稻研究所、嘉兴市农科院、嘉兴市供销社与五芳斋集团共同组建的禾天下种业公司，建成高标准良种繁育基地、自主选育品种9个，并与北大荒集团合作提供规模化、现代化管理；构建「龙头企业＋农资农服企业＋种植企业＋加工企业＋销售公司」融合发展模式，联结农户1000余户、覆盖水稻种植面积6万余亩。",
    "innovation": "以龙头带动＋全链条联结实现农民持续增收",
    "deps": [
     4,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 26,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "秀洲区人民政府、新塍镇人民政府",
    "policyTitle": "村集体经济壮大与生态价值转化",
    "detail": "按照《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见》关于促进共同富裕的部署与「一块地」集成改革的共富基本单元建设要求，新塍镇推动「绿水青山」向「金山银山」转化，打造集聚餐饮、住宿、休闲为一体的全国乡村旅游重点村潘家浜村，年均接待游客超50万人次；火炬村2023年村集体经营性收入达521万元。全镇稻米产业全产业链总产值突破20亿元，获评首批国家级农业产业强镇，实现农民生活水平高品质与农村集体经济高收入。",
    "innovation": "生态价值转化＋全产业链增值带动村集体与农民双增收",
    "deps": [
     4,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 27,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "秀洲区政府、新塍镇政府",
    "policyTitle": "嘉兴市秀洲区集体土地房屋拆迁补偿安置办法",
    "detail": "规定集体土地房屋拆迁补偿安置方式（房屋产权置换安置、易地新建安置、货币化补偿／房票），明确安置地块选址须符合国土空间规划并报区主管部门审核、城镇开发边界内原则上不采取易地新建安置而鼓励房票安置，以及产权置换安置面积标准（1-3人每人60㎡，4人及以上每增1人递增30㎡），是全域整治中搬迁补偿安置的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 28,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "秀洲区政府、新塍镇政府",
    "policyTitle": "嘉兴市秀洲区房屋征迁补偿房票安置实施办法（修订）",
    "detail": "界定征迁补偿房票为货币补偿的补充与记名凭证，规定房票基础奖励不超过货币安置价格标准的10%、跨安置区域放弃房屋安置面积按每平方米600元奖励、限期使用奖励（3个月5万元、6个月2万元、1年1万元），是全域整治中房票安置的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见",
    "docNo": "浙政办发〔2018〕80号",
    "issuer": "浙江省人民政府办公厅",
    "date": "2018-08-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2018/8/15/art_1229620738_2394685.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "浙江省人民政府关于跨乡镇开展土地综合整治试点的意见",
    "docNo": "浙政发〔2022〕32号",
    "issuer": "浙江省人民政府",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.zj.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "浙江省自然资源厅关于印发《浙江省土地综合整治全过程管理办法（试行）》的通知",
    "docNo": "浙自然资规〔2023〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2024-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2024/1/3/art_1229098242_2506965.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见",
    "docNo": "浙自然资〔2025〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2025-11-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229098242_2579170.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室关于印发2020年乡村全域土地综合整治与生态修复工程名单的通知",
    "docNo": "浙保耕办〔2020〕12号",
    "issuer": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室（浙江省自然资源厅代章）",
    "date": "2020-09-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2021/9/6/art_1229196455_2353233.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "浙江省国土资源厅关于做好城乡建设用地增减挂钩节余指标调剂使用管理工作的通知",
    "docNo": "浙土资规〔2018〕11号",
    "issuer": "浙江省国土资源厅",
    "date": "2018-10-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2018/10/18/art_1229098242_2322294.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "嘉兴市人民政府办公室关于印发促进共同富裕基本单元建设推进土地综合整治「一块地」集成改革的实施方案的通知",
    "docNo": "嘉政办发〔2023〕55号",
    "issuer": "嘉兴市人民政府办公室",
    "date": "2023-11-27",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiaxing.gov.cn/art/2023/11/29/art_1229567743_2499279.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "嘉兴市人民政府办公室关于印发嘉兴市土地综合整治工程推进方案（2023—2027年）的通知",
    "docNo": "嘉政办发〔2023〕23号",
    "issuer": "嘉兴市人民政府办公室",
    "date": "2023-04-03",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiaxing.gov.cn/art/2023/5/29/art_1229708768_1995.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "嘉兴市人民政府办公室关于印发嘉兴市创建耕地保护示范市实施方案的通知",
    "docNo": "未获取",
    "issuer": "嘉兴市人民政府办公室",
    "date": "2023-07-05",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiaxing.gov.cn/art/2023/9/8/art_1229708766_2007.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "嘉兴市人民政府办公室关于印发嘉兴市高标准农田建设提升行动方案（2022-2025年）的通知",
    "docNo": "嘉政办发〔2022〕51号",
    "issuer": "嘉兴市人民政府办公室",
    "date": "2022-10-27",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiaxing.gov.cn/art/2022/12/26/art_1229708760_1922.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "关于调整完善耕地保护补偿实施办法的通知",
    "docNo": "未获取",
    "issuer": "嘉兴市自然资源和规划局、嘉兴市财政局、嘉兴市农业农村局",
    "date": "2022-12-05",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyhghj.jiaxing.gov.cn/art/2022/12/5/art_1229235671_58929214.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "关于印发《嘉兴市土地综合整治（多田套合工程）2025年度实施方案》的通知",
    "docNo": "未获取",
    "issuer": "嘉兴市自然资源和规划局、嘉兴市农业农村局",
    "date": "2025-05-20",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.haining.gov.cn/art/2025/5/20/art_1229563423_2555310.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "07",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "嘉兴市人民政府办公室关于印发嘉兴市农村土地整治增减挂钩节余指标交易管理办法（试行）的通知",
    "docNo": "嘉政办发〔2014〕85号",
    "issuer": "嘉兴市人民政府办公室",
    "date": "2014-10-01实施",
    "status": "不确定",
    "grade": "核验B级",
    "url": "https://www.jiaxing.gov.cn/art/2014/9/11/art_1229567743_2365111.html",
    "attachUrl": "",
    "sourceNote": "核验说明：原为附件直链（.doc），已换为门户正文页",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "07",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "嘉兴市秀洲区人民政府关于印发秀洲区推动经济高质量发展若干政策（2025年版）的通知",
    "docNo": "秀洲政发〔2025〕10号",
    "issuer": "嘉兴市秀洲区人民政府",
    "date": "2025-05-23 成文、2025-05-30 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.xiuzhou.gov.cn/art/2025/5/30/art_1229431049_2555862.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注有效，但正文自述「本文件明确的各项政策除标明具体实施期限外，均为 2025 年全年实施有效」（年度政策包，须以最新年版为准）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "嘉兴市秀洲区人民政府关于印发《嘉兴市秀洲区集体土地房屋拆迁补偿安置办法》的通知",
    "docNo": "秀洲政发〔2025〕4号",
    "issuer": "嘉兴市秀洲区人民政府",
    "date": "2025-03-17 成文、2025-03-24 发布",
    "status": "有效，自2025-04-18 起施行",
    "grade": "核验A级",
    "url": "https://www.xiuzhou.gov.cn/art/2025/3/24/art_1229431049_2547860.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "嘉兴市秀洲区人民政府办公室关于印发《嘉兴市秀洲区房屋征迁补偿房票安置实施办法（修订）》的通知",
    "docNo": "秀洲政办发〔2025〕16号",
    "issuer": "嘉兴市秀洲区人民政府办公室",
    "date": "2025-07-23 成文、2025-07-30 发布",
    "status": "有效，自2025-08-23 起施行，有效期一年",
    "grade": "核验A级",
    "url": "https://www.xiuzhou.gov.cn/art/2025/7/30/art_1229431049_2560716.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "秀洲区农田建设项目与资金管理实施细则（修订）",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "嘉兴市秀洲区农业农村和水利局、嘉兴市秀洲区财政局",
    "date": "2023-10-31 印发、2023-11-07 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.xiuzhou.gov.cn/art/2023/11/7/art_1229431050_2495222.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户未标注效力状态",
    "level": "区县",
    "levelHit": "区财政局",
    "rank": 1,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "秀洲区全域土地综合整治专项规划（2020—2035年）",
    "docNo": "无文号（批前公告）",
    "issuer": "嘉兴市自然资源和规划局秀洲分局",
    "date": "2020-11-23 公示",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.xiuzhou.gov.cn/art/2020/11/23/art_1229410905_4352745.html",
    "attachUrl": "",
    "sourceNote": "文书形态：批前公告（未正式批复）",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "07",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 6,
    "innovations": 5
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 6,
    "innovations": 6
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 2,
    "innovations": 2
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 5,
    "innovations": 4
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 2,
    "innovations": 2
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 2
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 5,
    "innovations": 3
   }
  ],
  "levels": {
   "localTools": 28,
   "provinceTools": 16,
   "nationalTools": 0,
   "provinceBasis": 16,
   "nationalBasis": 0,
   "localDocs": 12,
   "provinceDocs": 6,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 28,
   "docs": 18,
   "innovations": 24,
   "implementation": 25,
   "pilot": 3,
   "gradeA": 16,
   "gradeB": 2,
   "revoked": 0,
   "mechanisms": 7
  }
 },
 {
  "id": "08",
  "dir": "08_江西省九江市瑞昌市桂林街道",
  "title": "江西省九江市瑞昌市桂林街道全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江西省九江市瑞昌市桂林街道",
  "batch": "第一批",
  "province": "江西",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "强化「五统筹」，推进9000亩高标准农田建设，盘活存量闲置土地1000余亩，预计节余耕地占补平衡指标500余亩；2023年长河（瑞昌段）全民所有自然资源资产挂牌出让价达14.6亿元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以江西省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具18项（其中创新工具3项）、政策文件18份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "瑞昌市政府、瑞昌市自然资源局",
    "policyTitle": "「指标经营」与自然资源资产价值实现政策",
    "detail": "节余耕地占补平衡指标500余亩、城乡建设用地增减挂钩指标300余亩；试点区域内长河（瑞昌段）全民所有自然资源资产通过挂牌成功出让，出让价达14.6亿元；虹南农场原先流转资金不足200元/亩，整治后以500元/亩的地租迅速流转。",
    "innovation": "全民所有自然资源资产挂牌出让实现14.6亿元价值变现，探索自然资源资产价值实现路径",
    "deps": [
     3
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "瑞昌市土地整治项目管理办法",
    "detail": "界定土地整治项目范围（土地开发、旱地改水田、增减挂钩、生态修复），对田、水、路、林、村实行综合整治，并对农村闲置建设用地、废弃工矿区等历史遗留损毁土地和自然灾害损毁土地恢复利用；坚持政府主导、农民自愿、统筹规划、整体推进原则，成立由政府分管领导任组长的市土地整治项目领导小组、自然资源部门为主管部门，是全域整治中土地整治项目管理的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "瑞昌市自然资源局",
    "policyTitle": "瑞昌市自然资源局关于土地开发补充耕地项目专项整治工作延长半年",
    "detail": "依据省自然资源厅通知，对土地开发补充耕地项目开展为期半年的「小切口」专项监督，聚焦资金管理不规范与招投标领域「一人多公司」「一公司多人」等突出问题，是全域整治中补充耕地指标管理的区级监管依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "「五统筹」规划管控政策",
    "detail": "强化「五统筹」：统筹农业发展空间、生态保护空间、城乡融合发展、历史人文资源、村庄建设边界，优化农业总体布局，构建生态安全格局，梳理低效用地空间。",
    "innovation": "以「五统筹」系统谋划整治空间格局，实现全域全要素统筹",
    "deps": [
     1,
     2
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "「治山、理水、彰文」三篇文章政策",
    "detail": "治山方面高标准推进狮山、北亭等6个废弃矿山生态修复；投资1100余万元推动横港河光明常丰段改造及10余个山塘水库除险加固；投资400余万元对石山村程普墓进行扩建保护，新建亭子山公园，留住历史文脉。",
    "innovation": "「治山、理水、彰文」三位一体的生态与文化协同修复路径",
    "deps": [
     1,
     2
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "切实加强高标准农田建设提升国家粮食安全保障能力",
    "detail": "部署集中连片高标准农田建设，与全域整治永久基本农田集中连片整治、耕地质量提升任务直接衔接。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "九江市国土空间总体规划（2021-2035年）",
    "detail": "设「国土综合整治与生态修复」专章，统筹土地综合整治、低效用地再开发、矿山生态修复与永久基本农田特殊保护，是全域整治的上位规划依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "九江市「十四五」国土空间生态修复",
    "detail": "统筹山水林田湖草沙一体化保护修复与矿山生态修复、农用地整理，是全域整治生态类工程的市级依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "瑞昌市低效用地再开发试点工作实施方案",
    "detail": "确定低效用地再开发试点范围为瑞昌市全域、试点期限2024-01-01至2027-09-30，要求依据国土空间总体规划适时启动低效用地再开发专项规划，鼓励集中连片改造开发、土地混合开发与容积率奖励，对履行公共性、公益性义务的改造项目给予政策奖励，并以城中村、低效工业用地改造为重点整合「批而未用、批而未供、闲置」土地，是全域整治中低效用地再开发的区级依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "瑞昌市「十四五」国土空间生态修复规划",
    "detail": "对全市（含桂林街道）农用地整理、建设用地整理与生态保护修复作系统部署，含生态修复工作成效、面临的主要生态问题与规划目标等章，是全域整治中生态修复的区级上位专项规划依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "瑞昌市推进农村土地承包经营权纳入不动产统一登记实施方案(试行)",
    "detail": "推进农村土地承包经营权纳入不动产统一登记，是全域整治中土地权属调整的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "瑞昌市人民政府关于废止、宣布失效、修改部分行政规范性文件和政策性文件",
    "detail": "公布废止、宣布失效、修改的行政规范性文件与政策性文件清单，可用于反查本案例各政策件的现行效力，是全域整治政策效力核验的区级依据。",
    "innovation": "",
    "deps": [
     18
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "九江市农村住房建设管理办法",
    "detail": "明确农村宅基地「一户一宅、节约集约」、闲置宅基地和闲置农房利用、村庄规划与用地计划管理，是全域整治村庄建设用地整理与布局优化的市级配套制度。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "规范农村宅基地审批管理工作",
    "detail": "规范宅基地分配、使用、流转与闲置宅基地闲置农房利用，落实「一户一宅」，是全域整治农村宅基地整理与闲置农房盘活的操作性配套。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "九江市建设用地使用权转让、出租、抵押二级市场管理办法（试行）",
    "detail": "建立城乡统一建设用地二级市场、鼓励存量低效工业用地分割转让盘活，为全域整治腾退建设用地与指标市场化流转提供配套制度。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 16,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "九江市土地复垦耕地质量验收办法",
    "detail": "规定土地复垦形成耕地（旱地/水浇地/水田）的验收程序与质量控制标准，是全域整治拆旧复垦新增耕地质量把关的市级技术性制度。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 17,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "瑞昌市人民政府办公室关于调整征地及农村村民住宅、其他地上附着物、青苗补偿标准的通知",
    "detail": "调整征地及农村村民住宅、其他地上附着物、青苗的补偿标准，是全域整治中土地权属调整与征收补偿的区级价格依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   },
   {
    "no": 18,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "瑞昌市政府、桂林街道办事处",
    "policyTitle": "瑞昌市被征地农民参加基本养老保险实施细则",
    "detail": "规定被征地农民参加基本养老保险，系征地补偿安置的配套制度，是全域整治中农民权益保障的区级依据。",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "江西省自然资源厅关于开展全域土地综合整治试点工作的实施意见",
    "docNo": "赣自然资发〔2021〕号",
    "issuer": "江西省自然资源厅（经省政府同意）",
    "date": "2021-04-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jxlcx.gov.cn/art/2023/4/11/art_3922_3978232.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省政府",
    "rank": 3,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江西省全域土地综合整治管理办法（试行）",
    "docNo": "赣自然资发〔2025〕号",
    "issuer": "江西省自然资源厅",
    "date": "2025-07-10",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zgys.gov.cn/ysnsx/c122635/202605/8aac5739792e4d7e9ca358f4b3c2353d.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江西省人民政府办公厅关于印发《江西省补充耕地指标交易管理办法》《江西省城乡建设用地增减挂钩节余指标调剂交易管理办法》的通知",
    "docNo": "赣府厅发〔2023〕15号",
    "issuer": "江西省人民政府办公厅",
    "date": "2023-11-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiangxi.gov.cn/jxsrmzf/szfbg100/pc/content/content_1899485512506212352.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "九江市人民政府办公室关于印发九江市农村住房建设管理办法的通知",
    "docNo": "九府办发〔2022〕5号",
    "issuer": "九江市人民政府办公室",
    "date": "2022-02-22",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiujiang.gov.cn/fdzdxxgk/01/00/szfwjk/szfbgswj/202202/t20220223_5409445.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "九江市农业农村局 九江市自然资源局关于规范农村宅基地审批管理工作的通知",
    "docNo": "九农字〔2020〕49号",
    "issuer": "九江市农业农村局、九江市自然资源局",
    "date": "2020-11-20",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://nyncj.jiujiang.gov.cn/zwgk_203/zcfg_287998/xzgfxwj/202011/t20201127_4685536.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "九江市农业农村局关于印发《九江市土地复垦耕地质量验收办法》的通知",
    "docNo": "九农字〔2020〕8号",
    "issuer": "九江市农业农村局",
    "date": "2020-02-19",
    "status": "已失效（市农业农村局标注「失效」）",
    "grade": "核验A级",
    "url": "https://nyncj.jiujiang.gov.cn/zwgk_203/zcfg_287998/xzgfxwj/202011/t20201124_4675469.html",
    "attachUrl": "",
    "sourceNote": "市级未见现行替代文件，同主题现行依据为国家级《补充耕地质量验收办法（试行）》（农建发〔2025〕5号，2025-12-01 施行）与省级《江西省补充耕地质量验收细则（试行）》（赣农字〔2026〕12号）",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "九江市人民政府办公室关于切实加强高标准农田建设提升国家粮食安全保障能力的实施意见",
    "docNo": "九府办发〔2020〕33号",
    "issuer": "九江市人民政府办公室",
    "date": "2020-08-28",
    "status": "不确定",
    "grade": "核验B级",
    "url": "https://www.jiujiang.gov.cn/zwzx/ztbd/6w6b/zchjd/202101/t20210113_4740509.html",
    "attachUrl": "",
    "sourceNote": "核验说明：原解读页（…/zcjd/202009/t20200909_4536376.html）已 404，已换为该站同一篇图解解读（现行有效，2026-09-28 复验 200）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "九江市人民政府关于印发《九江市国土空间总体规划（2021-2035年）》的通知",
    "docNo": "九府发〔2024〕6号",
    "issuer": "九江市人民政府",
    "date": "2024-08-22",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://bnr.jiujiang.gov.cn/zwgk_255/zdly/ghsj/gtkjgh/202408/t20240829_6684275.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "九江市「十四五」国土空间生态修复规划",
    "docNo": "未获取",
    "issuer": "九江市自然资源局、九江市发展和改革委员会",
    "date": "2023-08",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://pet-city.jiujiang.gov.cn/xzfxxgk/fgzc/zcwj/202401/t20240104_6358024.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市发展和改革委员会",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "九江市建设用地使用权转让、出租、抵押二级市场管理办法（试行）",
    "docNo": "九府办发〔2023〕8号",
    "issuer": "九江市人民政府办公室",
    "date": "2023-07-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://bnr.jiujiang.gov.cn/zwgk_255/jc/gfxwj/202308/t20230821_6188491.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "瑞昌市人民政府办公室关于印发瑞昌市土地整治项目管理办法的通知",
    "docNo": "瑞府办发〔2022〕18号",
    "issuer": "瑞昌市人民政府办公室",
    "date": "2022-09-09 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ruichang.gov.cn/fdzdxxgk/01/00/gzk/gfxwj/202509/t20250908_7008951.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【有效】（2025-09-08 重新公开）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "瑞昌市人民政府办公室关于印发瑞昌市低效用地再开发试点工作实施方案的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "瑞昌市人民政府办公室",
    "date": "2024-09-19 成文、2025-01-06 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ruichang.gov.cn/fdzdxxgk/bmxxgk/rcszrzyj/fgzc/zcwj/202501/t20250106_6821531.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注有效",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "瑞昌市人民政府办公室关于印发瑞昌市「十四五」国土空间生态修复规划的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "瑞昌市人民政府办公室",
    "date": "2023-09-28 成文、2023-10-08 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ruichang.gov.cn/fdzdxxgk/bmxxgk/rcszrzyj/fgzc/zcwj/202311/t20231102_6274479.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注有效",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "瑞昌市自然资源局关于土地开发补充耕地项目专项整治工作延长半年的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "瑞昌市自然资源局",
    "date": "2026-03-04 成文、2026-03-12 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ruichang.gov.cn/fdzdxxgk/bmxxgk/rcszrzyj/fgzc/zcwj/202603/t20260312_7190393.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注有效",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "瑞昌市人民政府办公室关于调整征地及农村村民住宅、其他地上附着物、青苗补偿标准的通知",
    "docNo": "瑞府办字〔2024〕14号",
    "issuer": "瑞昌市人民政府办公室",
    "date": "2024-02-29 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ruichang.gov.cn/fdzdxxgk/01/00/gzk/gfxwj/202412/t20241216_6797207.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【有效】",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "瑞昌市人民政府办公室关于印发瑞昌市推进农村土地承包经营权纳入不动产统一登记实施方案(试行)的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "瑞昌市人民政府办公室",
    "date": "2024-01-10 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ruichang.gov.cn/fdzdxxgk/bmxxgk/rcszrzyj/fgzc/zcwj/202402/t20240205_6394086.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注有效",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "瑞昌市人民政府办公室关于印发瑞昌市被征地农民参加基本养老保险实施细则的通知",
    "docNo": "瑞府办字〔2024〕61号",
    "issuer": "瑞昌市人民政府办公室",
    "date": "2024-12-18 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ruichang.gov.cn/fdzdxxgk/01/00/gzk/gfxwj/202509/t20250908_7009138.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【有效】",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "瑞昌市人民政府关于废止、宣布失效、修改部分行政规范性文件和政策性文件的通知",
    "docNo": "瑞府字〔2025〕32号",
    "issuer": "瑞昌市人民政府",
    "date": "2025-12-31 成文、2026-01-21 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ruichang.gov.cn/fdzdxxgk/01/00/gzk/gfxwj/202601/t20260121_7152349.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【有效】",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "08",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 9,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 3,
    "innovations": 0
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 18,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 15,
   "provinceDocs": 3,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 18,
   "docs": 18,
   "innovations": 3,
   "implementation": 15,
   "pilot": 3,
   "gradeA": 17,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "09",
  "dir": "09_江西省鹰潭市余江区马荃镇",
  "title": "江西省鹰潭市余江区马荃镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江西省鹰潭市余江区马荃镇",
  "batch": "第一批",
  "province": "江西",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "5733 万元",
  "summary": "统筹集体建设用地入市与城乡融合发展，实施46个项目，新增耕地194.6亩，耕地质量提升0.5个以上等别，建成6个「产业下沉」车间。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以江西省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具16项（其中创新工具3项）、政策文件17份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "耕地数质「双提升」政策",
    "detail": "大力实施高标准农田建设，整治3800余亩耕地，耕地质量提升0.5个以上土地利用等别、粮食产能平均提升20%；通过整治增加耕地面积194.6亩，整治区域内耕地面积增加5.1%，实现数量质量「双提升」。",
    "innovation": "以土地等别提升与产能提升双重指标考核整治成效",
    "deps": [
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "进一步规范我市农田建设",
    "detail": "提出「全域推进、重点突破」规范农田建设，到2030年永久基本农田全部建成高标准农田，与全域整治农田连片整治主线一致。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "鹰潭市「十四五」国土空间生态修复规划（含编制说明书）",
    "detail": "市级国土空间生态修复专项规划，明确农用地整治、矿山生态恢复、山水林田湖草系统修复分区与重大工程。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "鹰潭市余江区人民政府办公室关于进一步规范全区设施农业用地管理",
    "detail": "明确设施农业用地范围与负面清单（坚持农地农用、严防「大棚房」问题反弹，8类情形不得备案），并规定用地规模上限（作物种植辅助设施用地控制在项目总规模10%以内且不超过15亩；畜禽养殖15%以内且不超过20亩、集中式不超过30亩；水产养殖10%以内且不超过10亩），是全域整治中设施农业用地管理的区级依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "江西省鹰潭市余江区2025年度高标准农田建设项目实施方案",
    "detail": "依据《江西省高标准农田建设规划（2021-2030年）》，围绕「田、土、水、路、林、电、技、管」八个方面实施，重点在永久基本农田、粮食生产功能区和重要农产品生产保护区布局，并统一上图入库、强化监测与用途管控以遏制耕地「非农化」、管控耕地「非粮化」，是全域整治中高标准农田建设的区级依据。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "余江区加强和改进设施农业用地管理实施意见",
    "detail": "规范设施农业用地备案与管理，与本批2026年新规构成同一政策链条的旧件，是全域整治中设施农业用地管理的制度沿革佐证。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "余江区土地储备管理办法（试行）",
    "detail": "规范土地储备管理，是全域整治中低效用地再开发与建设用地整理的区级依据；另有施行后评估报告与图文解读可作实施成效佐证。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "鹰潭市余江区人民政府办公室关于公布区政府行政规范性文件清理结果",
    "detail": "依据《江西省行政规范性文件管理办法》清理区政府行政规范性文件，决定废止19件、保留87件并附废止与保留目录，可用于反查本案例各政策件的现行效力，是全域整治政策效力核验的区级依据。",
    "innovation": "",
    "deps": [
     16,
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县",
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "鹰潭市余江区政府、马荃镇政府",
    "policyTitle": "整治试点与入市试点、城乡融合试点「三试点统筹」政策",
    "detail": "将整治试点与集体建设用地入市试点、城乡融合发展试点相统筹，与新农村建设、乡村振兴等政策相衔接，将高标准农田建设、土地整理、农房改造、增减挂钩、人居环境整治、废弃矿山生态修复等项目资金予以整合，系统推进。",
    "innovation": "「三试点统筹」+多部门资金整合的系统推进机制，避免政策碎片化",
    "deps": [
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "全域深化农村宅基地制度改革与规范管理工作",
    "detail": "全域推进宅基地制度改革与规范管理，明确「盘活利用闲置宅基地和闲置农房」、村庄规划、退出与流转机制，直接服务马荃镇全域整治的村庄建设用地整理。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "鹰潭市集体经营性建设用地入市管理办法（试行）",
    "detail": "鹰潭市本级文件。经市政府同意印发，明确集体经营性建设用地入市的准入条件、出让／租赁／作价出资（入股）方式、民主决策程序、收益分配与监管机制，是全域整治「集体经营性建设用地入市」方向的市级直接依据。",
    "innovation": "",
    "deps": [
     3,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "鹰潭市土地储备管理办法（试行）",
    "detail": "该办法旨在「增强政府对城乡统一建设用地市场的调控和保障能力，促进土地资源的高效配置和合理利用」，实行土地储备三年滚动计划与年度计划管理，明确「优先储备空闲、低效利用等存量建设用地」，并同时废止《鹰潭市人民政府关于印发鹰潭市市区土地储备办法的通知》（鹰府发〔2015〕3号）；是全域整治「建设用地整理 → 存量低效用地盘活 → 储备与供应」环节的市级制度依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "鹰潭市余江区农村村民建房管理办法（暂行）",
    "detail": "为规范农村村民建房管理、保护耕地、维护农民合法权益、实现节约集约用地，依据土地管理法、城乡规划法等制定，是全域整治中宅基地及住房建设管理的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "闲置集体资源资产整合与产权抵押融资政策",
    "detail": "将整治退出的闲置宅基地和山水林田湖草等农村集体资源资产进行整合，通过产权抵押融资解决整治区域资金不足问题；试点以来共实施项目46个、投资5733万元。",
    "innovation": "以闲置集体资源资产整合+产权抵押融资破解整治资金瓶颈",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 15,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "余江区加强和改进永久基本农田保护工作意见",
    "detail": "依据国家层面永久基本农田保护制度框架与赣自然资发〔2019〕2号，构建数量、质量、生态「三位一体」耕地保护新格局，建立健全永久基本农田「划、建、管、补、护」长效机制，是全域整治中永久基本农田集中连片整治与耕地保护补偿的区级依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 16,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "余江区政府、马荃镇政府",
    "policyTitle": "鹰潭市余江区人民政府关于公布全区征地补偿标准",
    "detail": "公布全区征地补偿标准，是全域整治中土地权属调整与征收补偿的区级价格依据；另有区自然资源分局新闻发布会与文字解读可作实施佐证。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "江西省自然资源厅关于开展全域土地综合整治试点工作的实施意见",
    "docNo": "赣自然资发〔2021〕号",
    "issuer": "江西省自然资源厅（经省政府同意）",
    "date": "2021-04-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jxlcx.gov.cn/art/2023/4/11/art_3922_3978232.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省政府",
    "rank": 3,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江西省全域土地综合整治管理办法（试行）",
    "docNo": "赣自然资发〔2025〕号",
    "issuer": "江西省自然资源厅",
    "date": "2025-07-10",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zgys.gov.cn/ysnsx/c122635/202605/8aac5739792e4d7e9ca358f4b3c2353d.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江西省人民政府办公厅关于印发《江西省补充耕地指标交易管理办法》《江西省城乡建设用地增减挂钩节余指标调剂交易管理办法》的通知",
    "docNo": "赣府厅发〔2023〕15号",
    "issuer": "江西省人民政府办公厅",
    "date": "2023-11-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiangxi.gov.cn/jxsrmzf/szfbg100/pc/content/content_1899485512506212352.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "鹰潭市人民政府办公室关于全域深化农村宅基地制度改革与规范管理工作的实施意见",
    "docNo": "鹰府办发〔2021〕15号",
    "issuer": "鹰潭市人民政府办公室",
    "date": "2021-07-08",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.yingtan.gov.cn/art/2021/7/8/art_10962_1138523.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "鹰潭市人民政府办公室关于进一步规范我市农田建设的实施意见",
    "docNo": "鹰府办发〔2023〕17号",
    "issuer": "鹰潭市人民政府办公室",
    "date": "2023-12-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.yingtan.gov.cn/art/2023/12/11/art_14609_1371569.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "鹰潭市「十四五」国土空间生态修复规划（含编制说明书）",
    "docNo": "未获取",
    "issuer": "鹰潭市自然资源局",
    "date": "2022-10-05",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://zrzyj.yingtan.gov.cn/art/2022/10/5/art_857_1217679.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "鹰潭市人民政府办公室关于印发《鹰潭市集体经营性建设用地入市管理办法（试行）》《鹰潭市集体经营性建设用地入市收益分配暂行办法（试行）》的通知",
    "docNo": "鹰府办发〔2021〕8号",
    "issuer": "鹰潭市人民政府办公室（正文公开于贵溪市人民政府网站「农村集体经营性建设用地入市」栏目）",
    "date": "2021-06-02",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.guixi.gov.cn/art/2026/7/17/art_19796_1603790.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "鹰潭市人民政府关于印发鹰潭市土地储备管理办法（试行）的通知",
    "docNo": "鹰府发〔2023〕11号",
    "issuer": "鹰潭市人民政府",
    "date": "2023-11-02（2023-12-02 起施行）",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.yingtan.gov.cn/art/2023/11/2/art_14608_1371564.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "鹰潭市余江区人民政府办公室关于进一步规范全区设施农业用地管理的通知",
    "docNo": "余府办字〔2026〕58号",
    "issuer": "鹰潭市余江区人民政府办公室",
    "date": "2026-08-05 成文",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yujiang.gov.cn/art/2026/8/5/art_19766_1606389.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户未标注效力状态",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "鹰潭市余江区人民政府关于印发江西省鹰潭市余江区2025年度高标准农田建设项目实施方案的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "鹰潭市余江区人民政府",
    "date": "2025-02-17 成文、2025-02-18 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yujiang.gov.cn/art/2025/2/18/art_19767_1547965.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户未标注效力状态",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "余江区加强和改进设施农业用地管理实施意见",
    "docNo": "余府办发〔2020〕12号",
    "issuer": "鹰潭市余江区人民政府办公室",
    "date": "2020-07-07 成文",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yujiang.gov.cn/art/2020/7/7/art_19729_1547697.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【有效】",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "余江区加强和改进永久基本农田保护工作意见",
    "docNo": "余府发〔2020〕4号",
    "issuer": "鹰潭市余江区人民政府",
    "date": "2020-07-14 成文",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yujiang.gov.cn/art/2020/7/14/art_19729_1547683.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【有效】",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "余江区土地储备管理办法（试行）",
    "docNo": "余府发〔2023〕2号",
    "issuer": "鹰潭市余江区人民政府",
    "date": "2023-04-18 成文",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yujiang.gov.cn/art/2023/4/18/art_19729_1547664.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【有效】",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "鹰潭市余江区人民政府关于公布全区征地补偿标准的通知",
    "docNo": "余府字〔2024〕10号",
    "issuer": "鹰潭市余江区人民政府",
    "date": "2024-02-29 成文",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yujiang.gov.cn/art/2024/2/29/art_19729_1548003.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【有效】",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "鹰潭市余江区农村村民建房管理办法（暂行）",
    "docNo": "余府发〔2020〕6号",
    "issuer": "鹰潭市余江区人民政府",
    "date": "2020-10-28 成文",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yujiang.gov.cn/art/2020/10/28/art_19729_1548017.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【有效】",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "鹰潭市余江区人民政府办公室关于公布区政府行政规范性文件清理结果的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "鹰潭市余江区人民政府办公室（余江区司法局承办）",
    "date": "2026-01-15 成文",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yujiang.gov.cn/art/2026/1/15/art_19729_1594384.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【文件清理情况】",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "鹰潭市自然资源局办公室关于印发2026年全市自然资源工作要点的通知",
    "docNo": "鹰自然资办字〔2026〕5号",
    "issuer": "鹰潭市自然资源局办公室",
    "date": "2026-06-10 印发",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.yingtan.gov.cn/art/2026/6/10/art_12452_1609220.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "09",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 8,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 5,
    "innovations": 1
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 16,
   "provinceTools": 4,
   "nationalTools": 0,
   "provinceBasis": 4,
   "nationalBasis": 0,
   "localDocs": 14,
   "provinceDocs": 3,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 16,
   "docs": 17,
   "innovations": 3,
   "implementation": 11,
   "pilot": 5,
   "gradeA": 17,
   "gradeB": 0,
   "revoked": 0,
   "mechanisms": 4
  }
 },
 {
  "id": "10",
  "dir": "10_河南省商丘市民权县绿洲街道吴庄等12村",
  "title": "河南省商丘市民权县绿洲街道吴庄等12村全域土地综合整治政策激励工具箱（1.0版）",
  "name": "河南省商丘市民权县绿洲街道吴庄等12村",
  "batch": "第一批",
  "province": "河南",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "9.8 亿元",
  "summary": "摒弃拆村并点，向用地布局优化和低效用地整治要空间，盘活零散、闲置、低效建设用地900亩，形成3个千亩方集中大田共1.1万亩，耕地图斑由605块减至586块，退塘还湿18600余亩。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以河南省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具14项（其中创新工具3项）、政策文件13份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "「拆旧复垦指标」收益反哺乡村振兴政策",
    "detail": "项目整治区域内建设用地规模减少32.7807公顷，可结余拆旧复垦指标118.38公顷（合1776亩），结余补充耕地指标19公顷（合285亩），按现行交易价格预计两项指标可收入4亿元以上，项目区拆迁安置费用约2.2亿元，可有效解决乡村振兴资金来源问题。",
    "innovation": "以指标交易收入覆盖拆迁安置成本并反哺乡村振兴，实现资金自平衡",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "国家"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "河南省人民政府办公厅、河南省自然资源厅",
    "policyTitle": "试点实施方案批复视同增减挂钩批复政策",
    "detail": "试点区域内乡村振兴项目用地实行联合审批，试点实施方案批复视同增减挂钩批复；试点县（市、区）可提留不超过试点区域内建设用地增减挂钩节余指标的20%作为试点区域新增建设用地预留指标。",
    "innovation": "「实施方案批复视同增减挂钩批复」的审批合并政策，大幅提高审批效率",
    "deps": [
     1
    ],
    "leadLevel": "省",
    "scope": "province",
    "scopeRank": 3,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "民权县城乡建设用地增减挂钩拆旧整治复垦三年行动实施方案",
    "detail": "依《中共河南省委办公厅 河南省人民政府办公厅关于严格规范村庄撤并工作的通知》（豫办〔2021〕11号）精神制定，部署城乡建设用地增减挂钩拆旧整治复垦三年行动，是全域整治中增减挂钩与拆旧复垦的区级依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "新村安置社区建设与低效宅基地整理政策",
    "detail": "涉及整理低效农村宅基地61.1061公顷，建设4个新村安置社区，建设规模41.1877公顷，安置总户数1155户、安置人口3596人，实现村庄建设用地规模化、集约化。",
    "innovation": "以大社区安置推动宅基地集约利用与村庄布局优化",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "商丘市高标准农田建设规划（2021—2030年）",
    "detail": "全市高标准农田建设规划，统筹永久基本农田与高标准农田布局，是全域整治农田集中连片与耕地质量提升的市级依据。",
    "innovation": "",
    "deps": [
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "商丘市高标准农田示范区建设实施方案",
    "detail": "明确「田、土、水、路、林、电、技、管」综合配套、集中连片建设与建后管护机制，并把民权县列为重点产粮大县任务区。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "商丘市「十四五」国土空间生态修复和森林商丘建设规划",
    "detail": "市级国土空间生态修复专项规划，部署农用地整治、废弃工矿地修复、水生态修复等重大工程。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "商丘市「十四五」自然资源保护和利用规划",
    "detail": "市级自然资源保护利用五年规划，统筹耕地保护、建设用地整理与国土空间格局优化。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "河南省农村宅基地和村民自建住房管理办法（试行）",
    "detail": "明确村庄布局分类、宅基地节约集约、闲置宅基地和闲置农房盘活、腾退土地优先用于村庄建设与产业，并明确可依法通过「增减挂」置换建新指标。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "商丘市批而未供土地专项处置活动实施方案",
    "detail": "存量建设用地挖潜处置的市级专项行动方案，属全域整治城镇低效用地/批而未供处置配套政策工具。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "民权县集体林经营权流转证管理办法",
    "detail": "为集体林经营权流转登记（发证）的管理规范，对象为林地经营权，是全域整治中土地权属调整的区级旁证依据（契合度弱于本案例其他权属类文件）。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "民权县农田水利工程管理办法",
    "detail": "为全县农田水利工程的建设与管护管理规范，支撑高标准农田建设的配套水利工程管理与建后管护，是全域整治中农田水利工程管理的区级依据。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 13,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "民权县集体土地上房屋征收安置补偿办法（与《民权县国有土地上房屋征收补偿办法》同文印发）",
    "detail": "为集体土地上房屋征收安置补偿的县级规范性依据，支撑宅基地及住房建设管理、土地权属调整与搬迁补偿，是全域整治中征收补偿安置的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "民权县政府、绿洲街道办事处",
    "policyTitle": "民权县被征地农民养老保险暂行办法",
    "detail": "为被征地农民社会保障（养老保险）的县级制度安排，是全域整治中农民权益保障环节的区级旁证依据（契合度弱）。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "河南省人民政府办公厅关于开展全域土地综合整治试点工作的实施意见",
    "docNo": "豫政办〔2023〕42号",
    "issuer": "河南省人民政府办公厅",
    "date": "2023-08-10",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zc.qianzhan.com/policy/41/ba7f139477e4987ccc140dc820ad9466",
    "attachUrl": "",
    "sourceNote": "核验说明：河南省人民政府门户「豫政办」栏目未收录该文正文，来源为第三方政策库全文转载（非官方渠道）；文号、机构、日期已逐字核对",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "10",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "城乡建设用地增减挂钩节余指标跨省域调剂管理办法",
    "docNo": "国办发〔2018〕16号",
    "issuer": "国务院办公厅",
    "date": "2018-03",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.gov.cn/zhengce/content/2018-03/26/content_5277477.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "国家",
    "levelHit": "国务院",
    "rank": 4,
    "caseId": "10",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "商丘市人民政府办公室关于印发商丘市高标准农田建设规划（2021—2030年）的通知",
    "docNo": "商政办〔2023〕27号",
    "issuer": "商丘市人民政府办公室",
    "date": "2023-06-12",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://shangqiu.gov.cn/zwgk/zc47szfbgs/szb47szfbgs/content_73054",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "10",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "商丘市人民政府办公室关于印发商丘市高标准农田示范区建设实施方案的通知",
    "docNo": "商政办〔2023〕31号",
    "issuer": "商丘市人民政府办公室",
    "date": "2023-07-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://shangqiu.gov.cn/zwgk/zc47szfbgs/szb47szfbgs/content_74854",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "10",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "商丘市人民政府关于印发商丘市「十四五」国土空间生态修复和森林商丘建设规划的通知",
    "docNo": "商政〔2022〕39号",
    "issuer": "商丘市人民政府",
    "date": "2022-10-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://shangqiu.gov.cn/zwgk/fdzdgknr/ghjs47szfbgs/gtkjgh/content_53115",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "10",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "商丘市人民政府办公室关于印发商丘市贯彻《河南省农村宅基地和村民自建住房管理办法（试行）》实施方案的通知",
    "docNo": "商政办〔2021〕22号",
    "issuer": "商丘市人民政府办公室",
    "date": "2021-09-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://shangqiu.gov.cn/zwgk/zc47szfbgs/hzgfxwj/content_53136",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "10",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "商丘市人民政府关于印发商丘市「十四五」自然资源保护和利用规划的通知",
    "docNo": "商政〔2022〕40号",
    "issuer": "商丘市人民政府",
    "date": "2022-12-11",
    "status": "不确定",
    "grade": "核验B级",
    "url": "https://xiayi.gov.cn/xzxxgk/qhx/jczwgk876/zrzy13/gtkjghbz12/vz7j7rjufv/content_16207",
    "attachUrl": "",
    "sourceNote": "核验说明：原商丘市自然资源和规划局链接已 404，已换为夏邑县人民政府门户转载的正文页（含商政〔2022〕40号全文，2026-09-28 复验 200）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "10",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "商丘市人民政府关于印发商丘市批而未供土地专项处置活动实施方案的通知",
    "docNo": "未获取",
    "issuer": "商丘市人民政府",
    "date": "2015-02-24",
    "status": "不确定",
    "grade": "核验B级",
    "url": "https://shangqiu.gov.cn/zwgk/zc47szfbgs/sz47szfbgs/content_8099",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "10",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "民权县城乡建设用地增减挂钩拆旧整治复垦三年行动实施方案",
    "docNo": "民政办〔2022〕42号",
    "issuer": "民权县人民政府办公室",
    "date": "2022 年印发（依《中共河南省委办公厅 河南省人民政府办公厅关于严格规范村庄撤并工作的通知》豫办〔2021〕11 号制定）",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.minquan.gov.cn/bmxxgk/zrzyj/fdzdgknr37/jytabl37/rddbjybl37/content_30175",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未公开，名称、文号与核心内容见县自然资源局人大代表建议答复函的明确引用（发布页待补）",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "10",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "民权县人民政府办公室关于印发民权县农田水利工程管理办法的通知",
    "docNo": "民政办〔2017〕3号（门户页面文号栏未标注）",
    "issuer": "民权县人民政府办公室",
    "date": "2018-05-07 发布（成文 2017-02-15）",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.minquan.gov.cn/zwgk/zc/gfxwj/content_366",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注「有效」；并列入《民权县保留行政规范性文件目录》（民政〔2025〕1号）第 34 项",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "10",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "民权县集体土地上房屋征收安置补偿办法（与《民权县国有土地上房屋征收补偿办法》同文印发）",
    "docNo": "民政〔2015〕32号",
    "issuer": "民权县人民政府",
    "date": "2015 年印发（清理目录「发文日期」栏原文记为 2005-08-11，疑为录入笔误）",
    "status": "现行有效——列入《民权县保留行政规范性文件目录》（民政〔2025〕1号）第 5 项",
    "grade": "核验B级",
    "url": "https://www.minquan.gov.cn/zwgk/zc/gfxwj/content_31467",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "10",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "民权县集体林经营权流转证管理办法",
    "docNo": "民政办〔2022〕43号",
    "issuer": "民权县人民政府办公室",
    "date": "2022-11-11",
    "status": "现行有效——列入《民权县保留行政规范性文件目录》（民政〔2025〕1号）第 27 项",
    "grade": "核验B级",
    "url": "https://www.minquan.gov.cn/zwgk/zc/gfxwj/content_31467",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "10",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "民权县被征地农民养老保险暂行办法",
    "docNo": "民政办〔2014〕39号",
    "issuer": "民权县人民政府办公室",
    "date": "2014-03-20",
    "status": "现行有效——列入《民权县保留行政规范性文件目录》（民政〔2025〕1号）第 3 项",
    "grade": "核验B级",
    "url": "https://www.minquan.gov.cn/zwgk/zc/gfxwj/content_31467",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "10",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 3,
    "innovations": 2
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 3,
    "innovations": 0
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 13,
   "provinceTools": 3,
   "nationalTools": 1,
   "provinceBasis": 2,
   "nationalBasis": 1,
   "localDocs": 11,
   "provinceDocs": 1,
   "nationalDocs": 1
  },
  "stats": {
   "tools": 14,
   "docs": 13,
   "innovations": 3,
   "implementation": 12,
   "pilot": 2,
   "gradeA": 5,
   "gradeB": 8,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "11",
  "dir": "11_湖北省孝感市孝南区朱湖办事处",
  "title": "湖北省孝感市孝南区朱湖办事处全域土地综合整治政策激励工具箱（1.0版）",
  "name": "湖北省孝感市孝南区朱湖办事处",
  "batch": "第一批",
  "province": "湖北",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "11.72 亿元",
  "summary": "统筹朱湖国家湿地公园生态建设与人居环境系统治理，加固堤防12公里、建设生态河渠130公里，湿地核心区增至5000亩，新增耕地5090亩，朱湖糯米辐射带动周边8万亩，成为武汉都市圈「后花园」。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以湖北省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具17项（其中创新工具3项）、政策文件18份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "孝感市孝南区政府、朱湖办事处",
    "policyTitle": "三类指标生成与耕地面积双增长政策",
    "detail": "通过零散村庄拆迁集并、坑塘水面整治、土地综合平整等措施，小田改大田、闲地变耕地，产生土地增减挂钩指标1820亩、占补平衡指标3270亩、「旱改水」指标3690亩；全域耕地面积由3.6万亩增至4.1万亩，粮食种植面积由2.5万亩增至4万亩。，实现指标收益最大化）",
    "innovation": "一次整治同步生成三类指标（增减挂钩+占补平衡+旱改水",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "孝感市孝南区政府、朱湖办事处",
    "policyTitle": "湿地公园生态建设与人居环境系统治理政策",
    "detail": "统筹推进朱湖国家湿地公园生态建设与水田路林村和人居环境系统治理，有效解决耕地碎片化、经营分散化、生产低效化、农村空心化等问题；加固堤防12公里，贯通主干渠系88公里，建设生态河渠130公里，完成生态修复5000余亩。",
    "innovation": "国家湿地公园生态建设与人居环境治理一体化推进，解决「四化」问题",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "孝感市孝南区政府、朱湖办事处",
    "policyTitle": "孝感市加强高标准农田建设实施方案",
    "detail": "明确高标准农田建设与全域国土综合整治统筹结合、同步实施，含田块归并、耕作层剥离利用、灌排设施配套等工程内容（索引号 040200/2023-01160）。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "孝感市孝南区政府、朱湖办事处",
    "policyTitle": "孝感市滚子河流域全域国土综合整治规划研究（实施方案）",
    "detail": "孝感市本级首份流域尺度全域国土综合整治实施方案；围绕耕地恢复、耕地进出平衡、占补平衡、林地复垦、村庄建设用地腾挪潜力分析，提出土地整治与指标生产、存量土地盘活、流域自然资源资产清查等六大行动。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "孝感市孝南区政府、朱湖办事处",
    "policyTitle": "孝感市矿产资源总体规划（2021—2025年）",
    "detail": "全市矿产资源开发与矿山生态修复的市级总纲，为全域整治中的历史遗留矿山生态修复、损毁土地复垦提供规划依据与空间管控边界。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "孝感市孝南区政府、朱湖办事处",
    "policyTitle": "做实做优全域国土综合整治项目放大综合效应",
    "detail": "标题即含「全域国土综合整治」，是孝感市级层面专项部署全域整治项目实施、统筹整合涉农资金与项目、放大综合效应的直接依据文件（索引号 040200/2021-02194）。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "孝南区政府、朱湖办事处",
    "policyTitle": "湖北孝感朱湖国家湿地公园管理办法",
    "detail": "为加强湖北孝感朱湖国家湿地公园建设和管理、维护湿地生态功能和生物多样性，依据《湿地保护法》《国家湿地公园管理办法》（林湿发〔2022〕3号）与《湖北省湿地公园管理办法》（省政府令第370号）制定并界定湿地公园范围，系朱湖办事处辖区内唯一以「朱湖」命名的区级规范性文件，是全域整治中生态保护修复的区级直接依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "孝南区政府、朱湖办事处",
    "policyTitle": "孝南区2026年行政规范性文件清理结果",
    "detail": "依据省司法厅、市司法局清理部署，对截至2026-03-31现行有效的46件行政规范性文件全面清理，决定保留28件、拟修订10件、废止8件并附三类目录，是反查本案例各政策件现行效力的最直接依据。",
    "innovation": "",
    "deps": [
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "孝感市孝南区政府、朱湖办事处",
    "policyTitle": "孝感市批而未供土地、闲置土地、低效用地专项治理行动方案",
    "detail": "方案部署批而未供、闲置土地、低效用地三类存量土地的调查建库、分类处置、增存挂钩、净地供应与「双合同」监管、府院联动等机制，是全域整治「存量土地盘活」方向的核心市级配套。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "孝感市孝南区政府、朱湖办事处",
    "policyTitle": "做好工业用地要素保障助推全市城市和产业集中高质量发展若干措施",
    "detail": "建立「增存挂钩」机制（新增计划与盘活批而未供、闲置土地挂钩），推进城镇低效用地再开发，支持混合产业用地、弹性年期出让、「标准地」与「用地清单制」。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "孝南区政府、朱湖办事处",
    "policyTitle": "孝南区自然资源统一确权登记工作实施方案",
    "detail": "依据国家层面自然资源统一确权登记制度框架等上级文件，对水流、湿地、森林、荒地、滩涂等自然资源统一确权登记，是全域整治中土地权属调整的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "孝南区政府、朱湖办事处",
    "policyTitle": "孝南区农村宅基地和集体建设用地使用权房屋补充调查工作实施方案",
    "detail": "部署全区农村宅基地和集体建设用地使用权及其地上房屋的补充调查（权籍调查）工作，是全域整治中宅基地及住房建设管理与土地权属调整的区级依据。",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 13,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "孝感市孝南区政府、朱湖办事处",
    "policyTitle": "规范设施农业用地管理",
    "detail": "规范设施农业用地范围、规模与备案程序，强调对耕地特别是永久基本农田特殊保护、设施农业用地上图入库并纳入国土空间规划「一张图」。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "孝南区政府、朱湖办事处",
    "policyTitle": "孝南区农田水利工程运行管护办法",
    "detail": "为加强全区农田水利工程管理、发挥灌溉排水防洪综合效益，依据《水法》《农田水利条例》（国务院令第669号）制定，发文范围含朱湖、东山头办事处，是全域整治中高标准农田建设工程管护的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 15,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "孝感市孝南区政府、朱湖办事处",
    "policyTitle": "全域国土综合整治实施方案编制指南",
    "detail": "按照《全域国土综合整治项目实施方案编制指南》（湖北省地方标准），朱湖办事处整治项目实施方案按统一的技术框架与内容深度编制，规范整治目标、工程布局、投资估算与效益评价的表述口径，提升方案编制的规范化与可审查性。",
    "innovation": "按省级地方标准统一方案编制技术框架与内容深度",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 16,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "孝感市孝南区政府、朱湖办事处",
    "policyTitle": "「朱湖糯米」产业带动与近零碳试点政策",
    "detail": "朱湖国家湿地公园成为湖北省近零碳排放商业试点、武汉都市圈「后花园」；高标准农田成为孝南区国家糯米现代农业示范区主体，辐射周边形成30万亩「朱湖糯米」金色产业，1万亩花卉苗木、1万亩休闲产业。",
    "innovation": "近零碳排放试点+国家级现代农业示范区，形成生态与产业双品牌",
    "deps": [
     1,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   },
   {
    "no": 17,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "孝南区政府、朱湖办事处",
    "policyTitle": "孝南区人民政府关于公布孝南区征收集体建设用地、未利用地和被征收土地地上附着物和青苗补偿标准的通知",
    "detail": "依据《省人民政府关于重新公布全省征地区片综合地价标准的通知》（鄂政发〔2023〕1号）并经市人民政府批复同意，公布全区征收集体建设用地、未利用地及地上附着物、青苗补偿标准，是朱湖办事处全域整治中土地权属调整与青苗补偿的区级标准依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省人民政府批转省自然资源厅关于推进全域国土综合整治和加快推进新增工业用地「标准地」出让两个意见的通知",
    "docNo": "鄂政发〔2019〕25号",
    "issuer": "湖北省人民政府",
    "date": "2019-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.hbqj.gov.cn/xxgk/zc/qtwj/szfwj/2020/202005/t20200521_2283229.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "省全域国土综合整治领导小组办公室关于印发《湖北省全域国土综合整治项目管理办法》等三项制度的通知",
    "docNo": "鄂土整办函〔2023〕6号",
    "issuer": "湖北省全域国土综合整治领导小组办公室",
    "date": "2023-03-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.hubei.gov.cn/fbjd/zhengce/qtzdgkwj/202303/t20230321_4595569.shtml",
    "attachUrl": "",
    "sourceNote": "核验说明：原为前瞻政策库（商业网站），已换为发文机关官网正文页",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "湖北省自然资源厅、湖北省财政厅、湖北省农业农村厅关于印发《湖北省补充耕地指标省级统筹管理办法（修订）》的通知",
    "docNo": "鄂自然资发〔2023〕23号",
    "issuer": "湖北省自然资源厅、湖北省财政厅、湖北省农业农村厅",
    "date": "2023-09-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.guoturen.com/guihua-2986.html",
    "attachUrl": "",
    "sourceNote": "核验说明：湖北省自然资源厅官网未见该修订版正文，来源为第三方政策文库全文转载（非官方渠道）；文号、机构、日期已逐字核对",
    "level": "省",
    "levelHit": "省农业农村厅",
    "rank": 3,
    "caseId": "11",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "全域国土综合整治项目实施方案编制指南（湖北省地方标准）",
    "docNo": "DB42/T 2391-2025",
    "issuer": "湖北省市场监督管理局（主管）",
    "date": "2025-06-23发布／2025-08-23实施",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=398FC6B4C2E24911E06397BE0A0AD48A",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "湖北省自然资源厅、中国农业发展银行湖北省分行、湖北省长江产业投资集团有限公司关于共同推进我省全域国土综合整治的合作协议",
    "docNo": "无文号",
    "issuer": "湖北省自然资源厅、农发行湖北省分行、长江产业投资集团",
    "date": "2020-01-09",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "http://m.cnhubei.com/content/2020-01/09/content_12606179.html",
    "attachUrl": "",
    "sourceNote": "核验说明：湖北日报2020-01-09全文报道，含六大重点合作领域；省自然资源厅官网未见原文，原澎湃转载页标注「政务：湖北省人民政府网」",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "11",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "市人民政府办公室关于印发孝感市加强高标准农田建设实施方案的通知",
    "docNo": "孝感政办函〔2023〕51号",
    "issuer": "孝感市人民政府办公室",
    "date": "2023-08-21",
    "status": "有效",
    "grade": "核验A级",
    "url": "http://gkml.xiaogan.gov.cn/c/www/xgzbh/307072.jhtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "市人民政府办公室关于印发孝感市批而未供土地、闲置土地、低效用地专项治理行动方案的通知",
    "docNo": "未获取",
    "issuer": "孝感市人民政府办公室",
    "date": "2023-12-25",
    "status": "有效",
    "grade": "核验B级",
    "url": "http://zrzy.xiaogan.gov.cn/tdgl/1770774.jhtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "11",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "市人民政府印发关于做好工业用地要素保障助推全市城市和产业集中高质量发展若干措施的通知",
    "docNo": "孝感政规〔2023〕12号",
    "issuer": "孝感市人民政府",
    "date": "2023-12-25",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.xiaogan.gov.cn/c/www/gfxwj/335101.jhtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "孝感市滚子河流域全域国土综合整治规划研究（实施方案）",
    "docNo": "未标注（已正式印发，未公开文号）",
    "issuer": "孝感市自然资源和城乡建设局",
    "date": "2024-10",
    "status": "有效",
    "grade": "核验B级",
    "url": "https://www.xiaogan.gov.cn/hd/rdwt/202410/t20241016_91008.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "11",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "市人民政府关于印发孝感市矿产资源总体规划（2021—2025年）的通知",
    "docNo": "孝感政发〔2022〕23号",
    "issuer": "孝感市人民政府",
    "date": "2022-10-19",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.xiaogan.gov.cn/c/www/xgzf2/267229.jhtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "关于规范设施农业用地管理的通知",
    "docNo": "未标注（公开报道未载文号）",
    "issuer": "孝感市自然资源和城乡建设局、孝感市农业农村局",
    "date": "2024-07",
    "status": "有效",
    "grade": "核验B级",
    "url": "https://news.hubeidaily.net/mobile/c_2879241.html",
    "attachUrl": "",
    "sourceNote": "核验说明：孝感市自然资源和城乡建设局门户未检索到该文，来源为湖北日报（官方媒体）报道；政府门户原文未公开",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "11",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "市人民政府办公室关于做实做优全域国土综合整治项目放大综合效应的通知",
    "docNo": "孝感政办函〔2021〕74号",
    "issuer": "孝感市人民政府办公室",
    "date": "2021-09-09",
    "status": "有效",
    "grade": "核验A级",
    "url": "http://gkml.xiaogan.gov.cn/c/www/xgzbh/200894.jhtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "孝感市孝南区人民政府关于印发湖北孝感朱湖国家湿地公园管理办法的通知",
    "docNo": "孝南政规〔2023〕4号",
    "issuer": "孝感市孝南区人民政府",
    "date": "2023-11-06 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xiaonan.gov.cn/c/xnq/xzgfxwj/317410.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "孝南区人民政府关于公布孝南区征收集体建设用地、未利用地和被征收土地地上附着物和青苗补偿标准的通知",
    "docNo": "孝南政发〔2024〕1号",
    "issuer": "孝南区人民政府",
    "date": "2024-02-01 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xiaonan.gov.cn/c/xnq/xzgfxwj/383288.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "孝南区人民政府办公室关于印发孝南区农田水利工程运行管护办法的通知",
    "docNo": "孝南政办发〔2022〕2号",
    "issuer": "孝南区人民政府办公室",
    "date": "2022-01-24 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xiaonan.gov.cn/c/xnq/xzgfxwj/408741.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "孝南区人民政府办公室关于印发孝南区自然资源统一确权登记工作实施方案的通知",
    "docNo": "孝南政办函〔2020〕18号",
    "issuer": "孝南区人民政府办公室",
    "date": "2020-12-07 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xiaonan.gov.cn/c/xnq/xzgfxwj/353222.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "孝南区人民政府办公室关于印发孝南区农村宅基地和集体建设用地使用权房屋补充调查工作实施方案的通知",
    "docNo": "孝南政办发〔2020〕10号",
    "issuer": "孝南区人民政府办公室",
    "date": "2020-06-10 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xiaonan.gov.cn/c/xnq/xnzbf/154759.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "孝南区人民政府关于印发孝南区2026年行政规范性文件清理结果的通知",
    "docNo": "孝南政规〔2026〕3号",
    "issuer": "孝南区人民政府",
    "date": "2026-07-22 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xiaonan.gov.cn/c/xnq/xzgfxwj/450960.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "11",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 7,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 17,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 14,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 17,
   "docs": 18,
   "innovations": 4,
   "implementation": 17,
   "pilot": 0,
   "gradeA": 13,
   "gradeB": 5,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "12",
  "dir": "12_湖南省长沙市浏阳市永安镇",
  "title": "湖南省长沙市浏阳市永安镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "湖南省长沙市浏阳市永安镇",
  "batch": "第一批",
  "province": "湖南",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "3.01 亿元",
  "summary": "推进农用地整理、建设用地整理、生态修复，耕地有所增加、连片度提升，新增产能指标超340万公斤，带动农民年增收约400万元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以湖南省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具17项（其中创新工具3项）、政策文件16份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "零散田块归并与耕地连片度提升政策",
    "detail": "对1200多个无序化田块进行田坎统一整治、零散田块合并平整，整治集中连片耕地（100亩以上）12片，开发新增耕地461亩；耕地连片度由原来的79个图斑降低到55个，零星非耕地面积下降率达8.59%。",
    "innovation": "以图斑数量下降率量化耕地集中连片成效",
    "deps": [
     1
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "耕作层剥离再利用「客土」改造政策",
    "detail": "结合长沙黄花机场占用耕地耕作层剥离再利用试点项目，改造1700亩非粮化耕地；通过挖高填低平整田块、2次深翻耕、撒石灰、覆土优质耕作层土壤30厘米以上，将贫瘠耕地治理成优质良田，完成农用地整理2080亩，新增耕地169.85亩，实现耕地质量等别提升一等。",
    "innovation": "全国首创耕作层剥离再利用的「客土」改造模式，实现耕地质量等别提升一等",
    "deps": [
     1,
     2
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "「一轴一廊四区」国土空间新格局构建政策",
    "detail": "以永丰公路为空间联动发展轴、捞刀河为生态廊道，基本形成千鹭湖生态旅游区、现代休闲农业区、田园乐活宜居区、高新智造发展区四区联动的「一轴一廊四区」国土空间新格局。",
    "innovation": "「一轴一廊四区」空间格局统筹生产、生活、生态空间",
    "deps": [
     1
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "长沙市高标准农田建设规划（2021—2030年）",
    "detail": "正文载明「已经市人民政府同意，现印发给你们」；规划部署田块归并、土壤改良、灌溉排水、农田防护与生态环境保持等建设内容，是全域整治「农用地整理」方向的市级专项规划依据。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "长沙市国土空间生态修复专项规划（2021-2035年）",
    "detail": "市级国土空间生态修复专项规划，明确生态修复分区、重点工程与矿山/流域修复任务，为全域整治的生态保护修复内容提供上位专项规划依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "关于全面推行田长制严格耕地保护的实施方案",
    "detail": "八大任务含耕作层土壤剥离再利用、耕地占补平衡与年度进出平衡、高标准农田建设、村庄规划编制、耕地「一张图」管控，几乎覆盖全域整治的农用地整理与耕地保护全部工具。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "浏阳市人民政府关于公布规范性文件清理结果",
    "detail": "公布截至清理基准日浏阳市现行有效的行政规范性文件目录及废止目录，是反查本案例各政策件现行效力的最直接依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "积极推进全市农村闲置宅基地和闲置住宅盘活利用工作",
    "detail": "界定闲置宅基地/闲置住宅盘活对象与路径（民宿、文旅、康养、创意办公等），与国土空间规划、用途管制、耕地红线相衔接。",
    "innovation": "",
    "deps": [
     3
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "盘活裸露闲置地块支持全民健身场地设施建设的通知（试行）",
    "detail": "盘活裸露闲置/储备地块，支持土地混合利用、纳入规划许可豁免清单、短期开发利用（累计≤20年），是存量闲置土地盘活与低效用地再开发的直接工具。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "长沙市农村产权流转交易市场建设实施方案",
    "detail": "建设全市统一的农村产权流转交易市场，推动农村土地经营权、集体经营性资产等要素市场化流转，为全域整治中农用地流转与集体资产盘活提供交易平台。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "长沙市全面推进城市更新行动方案（2026—2030年）",
    "detail": "以城市更新统筹存量空间再开发，涉及低效用地再开发、城中村改造与土地混合利用，与全域整治的存量建设用地整理、城乡空间优化相衔接。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "浏阳市农村产权流转交易市场建设工作方案",
    "detail": "明确建立市、镇、村三级农村产权流转交易体系，将土地经营权、集体经营性建设用地使用权等纳入交易品种（责任部门市农业农村局），为永安镇整治后耕地集中流转与权属调整提供交易平台依据，是全域整治中集体经营性建设用地入市与土地权属调整的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "浏阳市征地拆迁货币安置区范围划分方案",
    "detail": "以「经开区货币安置范围」明确将永安镇划入货币安置范围，界定货币安置与宅基地安置的适用区域与认定标准，系本案例直接点名永安镇的核心区级文件，是全域整治中土地权属调整与征收补偿的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "浏阳市农村村民住房建设管理实施办法",
    "detail": "规范农村村民建房审批、宅基地面积标准与「一户一宅」管理，是永安镇村庄整治中农房建设管理的现行县级办法，支撑宅基地及住房建设管理与闲置农房盘活。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "试点推进",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "支持农村闲置住宅盘活利用若干政策措施（试行）",
    "detail": "提出支持盘活利用农村闲置住宅的若干政策措施，含经营权流转、金融支持（「交易+金融」）、村级集体经济组织中介服务、城镇户籍子女继承住宅并办理不动产登记等，是全域整治「闲置宅基地与闲置农房盘活」方向的市级直接依据。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   },
   {
    "no": 16,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "浏阳市政府、永安镇政府",
    "policyTitle": "浏阳市人民政府办公室关于进一步做好被征地农民社会保障工作",
    "detail": "明确被征地农民纳入社会保障的范围、资金渠道与办理程序，是永安镇全域整治中征地拆迁的社保兜底依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   },
   {
    "no": 17,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "浏阳市自然资源局",
    "policyTitle": "浏阳市征地补偿安置若干问题补充规定",
    "detail": "对征地补偿标准、安置方式、青苗及地上附着物补偿等作出补充规定，是永安镇整治中征地补偿测算的县级价格与程序依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "湖南省自然资源厅关于深入推进全域土地综合整治工作的通知",
    "docNo": "湘自资发〔2025〕17号",
    "issuer": "湖南省自然资源厅",
    "date": "2025-06-05",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.hunan.gov.cn/zrzyt/xxgk/gzdt/zhxw_1/202506/t20250610_33705003.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "湖南省自然资源厅关于印发《湖南省全域土地综合整治项目管理办法（试行）》的通知",
    "docNo": "湘自资发〔2025〕41号",
    "issuer": "湖南省自然资源厅",
    "date": "2025-09-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.hunan.gov.cn/zrzyt/xxgk/gzdt/zhxw_1/202509/t20250930_33818066.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "关于积极推进全市农村闲置宅基地和闲置住宅盘活利用工作的通知",
    "docNo": "长农联〔2023〕49号",
    "issuer": "中共长沙市委农村工作领导小组办公室、长沙市农业农村局、长沙市自然资源和规划局",
    "date": "2023-11-10",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.yuhua.gov.cn/zwgk97/jcxxgk/zdmslyxx/xczxxx/zcgh/202402/t20240202_11364166.html",
    "attachUrl": "",
    "sourceNote": "核验说明：原为附件直链（.pdf），已换为门户正文页",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "中共长沙市委农村工作领导小组办公室 长沙市农业农村局关于印发《支持农村闲置住宅盘活利用若干政策措施（试行）》的通知",
    "docNo": "长农发〔2024〕14号",
    "issuer": "中共长沙市委农村工作领导小组办公室、长沙市农业农村局",
    "date": "2024-06-24（2024-07-01 起施行）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.changsha.gov.cn/zfxxgk/zfwjk/gdwxtwj/202406/t20240624_11477724.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文载明「自2024年7月1日起施行，有效期2年」→ 至 2026-06-30",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "长沙市高标准农田建设规划（2021—2030年）",
    "docNo": "长农发〔2023〕15号",
    "issuer": "长沙市农业农村局",
    "date": "2023-09-13（官网发布 2023-09-14）",
    "status": "有效",
    "grade": "核验A级",
    "url": "http://nyw.changsha.gov.cn/xxgk/xxgkml/ghjh/202311/t20231117_11290240.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "关于盘活裸露闲置地块支持全民健身场地设施建设的通知（试行）",
    "docNo": "长资规发〔2026〕28号",
    "issuer": "长沙市自然资源和规划局、长沙市城市管理局、长沙市住房和城乡建设局",
    "date": "2026-08-13",
    "status": "有效（试行，2026-09-15起，有效期两年）",
    "grade": "核验A级",
    "url": "https://zygh.changsha.gov.cn/zfxxgk/fdzdgknr/lzyj/gfxwj/202608/t20260813_12524572.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市住房和城乡建设局",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "长沙市人民政府办公室关于印发《长沙市农村产权流转交易市场建设实施方案》的通知",
    "docNo": "长政办发〔2024〕3号",
    "issuer": "长沙市人民政府办公室",
    "date": "2024-03-14",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.hunan.gov.cn/zqt/zcsd/202403/t20240318_33255793.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "长沙市人民政府办公室关于印发《长沙市全面推进城市更新行动方案（2026—2030年）》的通知",
    "docNo": "长政办发〔2026〕6号",
    "issuer": "长沙市人民政府办公室",
    "date": "2026-03-26",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.changsha.gov.cn/szf/zfgb/2026n/2026n5y22r/202605/t20260525_12391035.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "长沙市国土空间生态修复专项规划（2021-2035年）",
    "docNo": "未标注",
    "issuer": "长沙市自然资源和规划局",
    "date": "2023-02-22",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://zygh.changsha.gov.cn/zfxxgk/fdzdgknr/ghxx/zxgh/202310/t20231028_11265795.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "中共长沙市委 长沙市人民政府印发《关于全面推行田长制严格耕地保护的实施方案》的通知",
    "docNo": "长发〔2022〕23号",
    "issuer": "中共长沙市委、长沙市人民政府",
    "date": "2022-08",
    "status": "有效",
    "grade": "核验B级",
    "url": "https://www.changsha.gov.cn/szf/ywdt/zwdt/202208/t20220820_10747193.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "浏阳市人民政府办公室关于印发浏阳市农村产权流转交易市场建设工作方案的通知",
    "docNo": "浏政办发〔2024〕10号",
    "issuer": "浏阳市人民政府办公室",
    "date": "2024-06-12 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.liuyang.gov.cn/zwgk/zfxxgk/fdzdgknr/zcwj/xzgfxwj/szfyzfbwj/202602/t20260228_12321660.html",
    "attachUrl": "",
    "sourceNote": "文书形态：生效 2024-08-01，信息时效期至 2026-07-31；门户标注现行有效",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "浏阳市人民政府办公室关于进一步做好被征地农民社会保障工作的通知",
    "docNo": "浏政办发〔2024〕15号",
    "issuer": "浏阳市人民政府办公室",
    "date": "2024-12-11 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.liuyang.gov.cn/zwgk/zfxxgk/fdzdgknr/zcwj/xzgfxwj/szfyzfbwj/202602/t20260228_12321665.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2027-12-10；门户标注现行有效",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "浏阳市人民政府办公室关于印发浏阳市征地拆迁货币安置区范围划分方案的通知",
    "docNo": "浏政办发〔2024〕16号",
    "issuer": "浏阳市人民政府办公室",
    "date": "2024-12-10 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.liuyang.gov.cn/zwgk/zfxxgk/fdzdgknr/zcwj/xzgfxwj/szfyzfbwj/202602/t20260228_12321667.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2029-12-09；门户标注现行有效",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "浏阳市自然资源局关于印发浏阳市征地补偿安置若干问题补充规定的通知",
    "docNo": "浏自然资发〔2024〕43号",
    "issuer": "浏阳市自然资源局",
    "date": "2024-12-10 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.liuyang.gov.cn/zwgk/zfxxgk/fdzdgknr/zcwj/xzgfxwj/gdwxtwj/202602/t20260209_12279346.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2029-12-09；门户标注现行有效",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "浏阳市人民政府办公室关于印发浏阳市农村村民住房建设管理实施办法的通知",
    "docNo": "浏政办发〔2026〕4号",
    "issuer": "浏阳市人民政府办公室",
    "date": "2026-07-27 印发并生效",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.liuyang.gov.cn/zwgk/zfxxgk/fdzdgknr/zcwj/xzgfxwj/szfyzfbwj/202608/t20260803_12516271.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2031-07-26；门户标注现行有效",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "浏阳市人民政府关于公布规范性文件清理结果的公告",
    "docNo": "浏政发〔2026〕2号",
    "issuer": "浏阳市人民政府",
    "date": "2026-02-09 生效",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.liuyang.gov.cn/zwgk/zfxxgk/fdzdgknr/zcwj/xzgfxwj/gfxwjql/202602/t20260225_12318844.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2036-02-09；门户标注现行有效",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "12",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 6,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 7,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 3,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 17,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 14,
   "provinceDocs": 2,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 17,
   "docs": 16,
   "innovations": 3,
   "implementation": 15,
   "pilot": 2,
   "gradeA": 15,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 4
  }
 },
 {
  "id": "13",
  "dir": "13_广东省广州市从化区",
  "title": "广东省广州市从化区全域土地综合整治政策激励工具箱（1.0版）",
  "name": "广东省广州市从化区",
  "batch": "第一批",
  "province": "广东",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "399.6 亿元",
  "summary": "划定10个示范片区，探索「全域+城乡融合」「全域+园区开发」「全域+城市功能提升」「全域+生态修复」四大模式，打造湾区样板。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以广东省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具15项（其中创新工具3项）、政策文件17份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "广州市从化区政府、广州市规划和自然资源局",
    "policyTitle": "永久基本农田布局优化保障产业用地政策",
    "detail": "南部以太平镇为突破口，规划建设面积16平方公里的高埔创智谷，通过优化调整永久基本农田布局，保障并启动首期780亩开发建设，成功落户顺兴绿色建材、菜鸟数智运营中心等重点项目。",
    "innovation": "以永久基本农田布局优化腾挪发展空间，保障重大产业平台落地",
    "deps": [
     5,
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "广州市从化区政府、广州市规划和自然资源局",
    "policyTitle": "「指标池」「资金池」管理制度与补充耕地指标交易",
    "detail": "依据《广东省自然资源厅关于完善「指标池」「资金池」管理制度深入推进全域土地综合整治的通知》与《广东省补充耕地指标交易管理办法》，从化区将整治形成的补充耕地指标纳入省「指标池」统一管理、通过公开交易平台有偿流转，交易收益纳入「资金池」统筹用于整治项目，实现指标与资金双向闭环。",
    "innovation": "「指标池」与「资金池」联动，补充耕地指标公开交易反哺整治",
    "deps": [
     2,
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "广州市从化区政府、广州市规划和自然资源局",
    "policyTitle": "「全域+」四种差异化整治模式政策",
    "detail": "西部探索「全域+城乡融合」模式，依托鳌头万亩良田示范项目，叠加国家级田园综合体「双试点」；南部探索「全域+园区开发」模式，规划建设16平方公里高埔创智谷；中部探索「全域+城市功能提升」模式；北部探索「全域+生态修复」模式。划定10个示范片区，拟实施97个整治项目，总投资约399.6亿元。整治投资格局）",
    "innovation": "四种「全域+」差异化模式分区施策，形成超大规模（399.6亿元",
    "deps": [
     5,
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "广州市从化区政府、广州市规划和自然资源局",
    "policyTitle": "实施乡村振兴项目点状用地分类办理指引",
    "detail": "点状供地/点状用地是全域整治中乡村产业用地保障的重要政策工具。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "广州市从化区政府、广州市规划和自然资源局",
    "policyTitle": "广州市国土空间生态修复规划（2021—2035年）",
    "detail": "市级国土空间生态修复规划，是全域整治「生态保护修复」板块的上位依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "从化区政府",
    "policyTitle": "广州市从化区关于以全域土地综合整治促进乡村振兴实现高质量发展的十条措施",
    "detail": "以全域土地综合整治促进乡村振兴、实现高质量发展为主题提出十条措施，经2023年第1次区政府常务会议审议通过，系区政府门户报道明确载明已出台的区级专门文件。（正文全文未在公开渠道检索到发布页，名称与文号见区政府门户报道）",
    "innovation": "",
    "deps": [
     3,
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "区县"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "从化区政府",
    "policyTitle": "广州市从化区关于严格落实耕地保护全面推进全域土地综合整治 助力「百千万工程」的实施意见",
    "detail": "严格落实耕地保护并全面推进全域土地综合整治、助力「百千万工程」，内容包括实施原则、组织体系和工作职责、耕地保护目标任务、集中政策红利调动耕作、工作机制与保障措施，是全域整治的区级专门依据。（正文全文未公开，内容见区政府门户报道）",
    "innovation": "",
    "deps": [
     1,
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "区县"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "广州市从化区政府、广州市规划和自然资源局",
    "policyTitle": "广州市非农建设占用水田耕作层剥离再利用工作流程",
    "detail": "建设占用耕地耕作层剥离再利用是全域土地综合整治中「耕地质量提升/占补平衡」的核心配套工具。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "广州市从化区政府、广州市规划和自然资源局",
    "policyTitle": "进一步加强和改进耕地保护、严格耕地用途管制",
    "detail": "明确「谁占用、谁剥离」耕作层剥离再利用、垦造水田、永久基本农田储备区与集中连片保护，是全域整治耕地板块的市级规则。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "广州市从化区政府、广州市规划和自然资源局",
    "policyTitle": "广州市低效用地再开发试点工作实施方案",
    "detail": "方案第20条专列「积极推进全域土地综合整治」，含增减挂钩、农用地/村庄/工业用地整治。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "从化区政府",
    "policyTitle": "广州市从化区关于助力产业高质量发展的十条规划用地措施",
    "detail": "加强国土空间规划保障（工业项目原则上在产业区块内落地；重点农业产业项目选址于城镇开发边界外的，可以一个或几个行政村为单元编制「多规合一」实用性村庄规划予以保障），优化土地储备机制确保「净地」供应，并实行差别化土地供应方式，是全域整治中规划用地保障与产业用地管理的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "广州市从化区农业农村局",
    "policyTitle": "广州市从化区农村宅基地和住宅建设管理实施细则（试行）",
    "detail": "严格执行「一户一宅」和土地用途管制，明确选址不得占用耕地、永久基本农田、生态公益林和限制建设区，并规定新建宅基地建筑基底面积不超过80㎡、建筑面积不超过280㎡、不超过3层，是全域整治中宅基地及住房建设管理的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 13,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "广州市从化区政府、广州市规划和自然资源局",
    "policyTitle": "生态价值转化与城乡建设用地增减挂钩政策",
    "detail": "北部依托四张世界级名片，用好城乡建设用地增减挂钩政策，预期腾退建设用地114亩，创新流溪河上下游生态价值转化实践；中部集中落地361亩历史留用地，带动2.25万亩文商旅组团连片建设。",
    "innovation": "流溪河上下游生态价值转化机制+历史留用地集中落地",
    "deps": [
     5,
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "广州市从化区政府、广州市规划和自然资源局",
    "policyTitle": "广州市规划和自然资源局 广州市财政局 广州市农业农村局关于印发广州市永久基本农田保护补贴实施办法",
    "detail": "永久基本农田保护补贴机制，是全域整治「耕地保护补偿/长效管护」的市级制度。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "从化区政府",
    "policyTitle": "广州市从化区农民集体所有土地征收补偿实施办法",
    "detail": "规定土地补偿费、安置补助费按征收农用地区片综合地价执行并归土地所有权人所有、由属地镇（街）拨付至农村集体经济组织专用账户；成片青苗及水产养殖品包干补偿2万元/亩、期限内完成登记的一次性奖励5000元/亩；提前交出土地按征地区片综合地价标准的10%奖励，是全域整治中征收补偿安置的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "中共广东省委办公厅、广东省人民政府办公厅关于深入推进全域土地综合整治助力「百县千镇万村高质量发展工程」的意见",
    "docNo": "无文号",
    "issuer": "中共广东省委办公厅、广东省人民政府办公厅",
    "date": "2025-02-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.gd.gov.cn/zzzq/gdyw/content/post_4668970.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "广东省自然资源厅关于完善「指标池」「资金池」管理制度深入推进全域土地综合整治的通知",
    "docNo": "粤自然资规〔2025〕号",
    "issuer": "广东省自然资源厅",
    "date": "2026-05-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.gd.gov.cn/zwgk/zcjd/snzcsd/content/mpost_4903214.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "全域土地综合整治技术导则（广东省地方标准）",
    "docNo": "DB44/T 2771-2025",
    "issuer": "广东省市场监督管理局（归口：广东省自然资源厅）",
    "date": "2025-11-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=482944BE05B8C6A2E06397BE0A0A51C3",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "广东省自然资源厅关于印发《广东省补充耕地指标交易管理办法》的通知",
    "docNo": "粤自然资规〔2022〕号",
    "issuer": "广东省自然资源厅",
    "date": "2022-10-18发布／2022-11-17实施",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://nr.gd.gov.cn/gkmlpt/content/4/4047/post_4047727.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "广州市全域土地综合整治指引",
    "docNo": "无文号",
    "issuer": "广州市规划和自然资源局",
    "date": "2023-04-27",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.gz.gov.cn/xwzx/tzgg/content/post_8953301.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市规划和自然资源局",
    "rank": 2,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "全域土地综合整治「指标池」指引（广州市）",
    "docNo": "无文号",
    "issuer": "广州市规划和自然资源局",
    "date": "2025-08-19",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.gz.gov.cn/xwzx/tzgg/content/post_10410435.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市规划和自然资源局",
    "rank": 2,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "关于印发《广州市非农建设占用水田耕作层剥离再利用工作流程》的通知",
    "docNo": "穗国土规划字〔2018〕627号",
    "issuer": "广州市国土资源和规划委员会（现广州市规划和自然资源局）",
    "date": "2018-12-20",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://ghzyj.gz.gov.cn/zwgk/xxgkml3/bmwj/qtwj/content/post_2685457.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市规划和自然资源局",
    "rank": 2,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "广州市人民政府办公厅关于进一步加强和改进耕地保护、严格耕地用途管制的实施意见",
    "docNo": "穗府办函〔2022〕92号",
    "issuer": "广州市人民政府办公厅",
    "date": "2022-12-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.gz.gov.cn/gkmlpt/content/8/8712/mpost_8712053.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "广州市规划和自然资源局关于印发广州市低效用地再开发试点工作实施方案的通知",
    "docNo": "穗规划资源字〔2023〕37号",
    "issuer": "广州市规划和自然资源局",
    "date": "2023-12-12",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzyj.gz.gov.cn/ywpd/tdgl/tdgltzgg/tzgg/content/mpost_9808848.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市规划和自然资源局",
    "rank": 2,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "广州市规划和自然资源局关于实施乡村振兴项目点状用地分类办理指引的通知",
    "docNo": "未获取",
    "issuer": "广州市规划和自然资源局",
    "date": "2020-12-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.gz.gov.cn/xw/tzgg/content/mpost_7020233.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市规划和自然资源局",
    "rank": 2,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "广州市规划和自然资源局 广州市财政局 广州市农业农村局关于印发广州市永久基本农田保护补贴实施办法的通知",
    "docNo": "穗规划资源规字〔2021〕2号",
    "issuer": "广州市规划和自然资源局、广州市财政局、广州市农业农村局",
    "date": "2021-10-09",
    "status": "现行有效（有效期5年）",
    "grade": "核验A级",
    "url": "https://www.gz.gov.cn/gfxwj/sbmgfxwj/gzsghhzrzyj/content/post_7822336.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "广州市规划和自然资源局关于印发《广州市国土空间生态修复规划（2021—2035年）》的通知",
    "docNo": "未获取",
    "issuer": "广州市规划和自然资源局（经市人民政府同意）",
    "date": "2023-10-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.gz.gov.cn/zwgk/ghjh/zxgh/content/post_9356326.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "广州市从化区人民政府关于印发广州市从化区农民集体所有土地征收补偿实施办法的通知",
    "docNo": "从府规〔2024〕2号",
    "issuer": "广州市从化区人民政府",
    "date": "2024-03-08 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.gz.gov.cn/gfxwj/qjgfxwj/chq/qf/content/post_9534281.html",
    "attachUrl": "",
    "sourceNote": "文书形态：2024-03-12 实施（统一编号 CH0120240002）；文件状态有效，失效日期 2029-03-12（有效期 5 年）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "广州市从化区人民政府办公室关于印发广州市从化区关于助力产业高质量发展的十条规划用地措施的通知",
    "docNo": "从府办规〔2023〕1号",
    "issuer": "广州市从化区人民政府办公室",
    "date": "2023-04-14 成文、实施（统一编号 CH0220230001）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.gz.gov.cn/gfxwj/qjgfxwj/chq/qfb/content/post_8920913.html",
    "attachUrl": "",
    "sourceNote": "文书形态：文件状态有效，失效日期 2028-04-13（有效期 5 年）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "广州市从化区农业农村局关于印发《广州市从化区农村宅基地和住宅建设管理实施细则（试行）》的通知",
    "docNo": "从农规字〔2023〕1号",
    "issuer": "广州市从化区农业农村局",
    "date": "2023-12-26 成文、印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.conghua.gov.cn/ztzlbqwgczcwj/content/post_9497376.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自发布之日起施行，有效期 3 年（到期前 6 个月组织评估修订）",
    "level": "区县",
    "levelHit": "区农业农村局",
    "rank": 1,
    "caseId": "13",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "广州市从化区关于以全域土地综合整治促进乡村振兴实现高质量发展的十条措施",
    "docNo": "从府规〔2023〕3号",
    "issuer": "广州市从化区人民政府",
    "date": "2023 年印发（经 2023 年第 1 次广州市从化区政府常务会议审议通过）",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.conghua.gov.cn/zwgk/tpxw/content/mpost_9743306.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未在公开渠道检索到发布页（未见于广州市行政规范性文件统一发布平台从化区区政府文件栏与从化区政府门户「政策文件」栏），名称、文号与核心内容见从化区政府门户官方发布内容（发布页待补）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "13",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "广州市从化区关于严格落实耕地保护全面推进全域土地综合整治 助力「百千万工程」的实施意见",
    "docNo": "未获取（区政府／区规划资源分局牵头制定，门户未公开文号）",
    "issuer": "广州市从化区人民政府（区规划资源分局牵头起草）",
    "date": "2024 年印发（区门户 2024-09-09 报道「近日，从化区出台了……」）",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.conghua.gov.cn/zwgk/chyw/content/mpost_9859075.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未公开，名称与核心内容见从化区政府门户官方发布内容（发布页待补）",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "13",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 2
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 5,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 15,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 13,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 15,
   "docs": 17,
   "innovations": 4,
   "implementation": 9,
   "pilot": 6,
   "gradeA": 15,
   "gradeB": 2,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "14",
  "dir": "14_重庆市九龙坡区铜罐驿镇",
  "title": "重庆市九龙坡区铜罐驿镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "重庆市九龙坡区铜罐驿镇",
  "batch": "第一批",
  "province": "重庆",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "统筹5大类12个子项目，新增布局产业用地13.52公顷，耕地破碎度从62%降至38%，水质由劣Ⅴ类提升为Ⅳ类，构建2.1公里植被缓冲带。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以重庆市配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具14项（其中创新工具3项）、政策文件15份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "「果园上山、良田下山」耕地破碎度降低政策",
    "detail": "在农业生产区按照「果园上山、良田下山」「小块并大块」思路，统筹实施农用地整理和乡村生态保护修复，耕地破碎度从62%降低至38%，土壤质量获得有机认证；灌溉保证率从20%提高至85%、路网密度从每公顷35米提高至每公顷65米、道路通达度从50%提高至93%。",
    "innovation": "「果园上山、良田下山」的立体空间置换模式，耕地破碎度降低24个百分点",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "重庆市高标准农田建设规划（2021—2030年）",
    "detail": "高标准农田建设是全域土地综合整治农用地整治的核心抓手。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "重庆市国土空间生态保护修复规划（2021—2035年）",
    "detail": "山水林田湖草沙一体化生态修复，是全域整治「生态修复」板块的市级上位规划。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "加强规划统筹和自然资源要素保障促进乡村全面振兴",
    "detail": "正文多处直接规定「村庄规划与全域土地综合整治实施方案协同融合」「通过全域土地综合整治、增减挂钩盘活存量」，契合度极高。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "重庆市逐步把永久基本农田建成高标准农田",
    "detail": "永久基本农田集中连片建设高标准农田，与全域整治农用地整治直接衔接。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "九龙坡区划拨用地划拨价款指导标准",
    "detail": "规定西彭镇、铜罐驿镇、陶家镇划拨用地划拨价款为81万元/亩（全区最低档），该标准每3年调整或重新公布一次，直接支撑该镇土地要素成本测算，是全域整治中土地要素配置的区级价格依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "重庆市九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "跨村联合编制村庄规划与产业用地统筹政策",
    "detail": "打破村域限制，联合编制英雄湾等4个村村庄规划，盘活3处闲置资产、7个大院落整治提升区域，优化商业用地、工业用地、农村社区服务设施用地等空间布局，新增布局产业用地13.52公顷；调整商业用地和工业用地倾斜至英雄湾村、新合村133亩，后期产业运营收益由4个村共享。",
    "innovation": "打破村域限制的「四村联编」规划模式，产业运营收益跨村共享",
    "deps": [
     2,
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "重庆市九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "农房收储联营与闲置资产盘活政策",
    "detail": "在农文旅核心区对无保留价值的破旧房屋拆旧复垦25.6亩，新增建设用地指标用于建设美丽乡村民居；对风貌较好的农房由村集体收储36栋，用于与招商企业联营开展文旅产业；盘活国有闲置资产15亩，变为乡村振兴学院培训基地。",
    "innovation": "村集体收储农房+企业联营的文旅产业合作模式",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "重庆市九龙坡区集体土地征收补偿安置实施办法（修订）",
    "detail": "适用范围含铜罐驿镇辖区，规定住房安置可采取宅基地自建安置、安置房安置或货币安置三种方式并以户为单位统一选择，明确铜罐驿镇货币安置价格标准为6600元/平方米、宅基地自建安置按被拆迁房屋补偿金额的50%给予自建住房补助，是全域整治中集体土地征收补偿安置的区级依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "九龙坡区加强农村土地经营权流转管理的实施细则",
    "detail": "建立土地经营权流转上限控制制度（工商资本租赁农地原则上控制在1000亩以内、超限须报区政府批准）、流转资格审查与项目审核制度（50亩以上报区政府审查）及经营主体退出机制，严禁以「以租代征」等方式擅自将农用地和未利用地转为建设用地，是全域整治中土地经营权流转管理的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "重庆市九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "重庆市2024年度耕地保护奖补激励工作",
    "detail": "建立耕地保护奖补激励机制，是全域整治「耕地保护补偿」的市级配套。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "重庆市九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "国土空间生态修复重点专项资金管理",
    "detail": "依据《重庆市国土空间生态修复重点专项资金管理办法》，铜罐驿镇生态修复类整治工程按市级专项资金申报、拨付与绩效管理要求组织实施，明确资金使用范围、支出进度与绩效评价节点，保障整治区内生态修复工程投入。",
    "innovation": "按市级专项资金管理办法规范修复工程资金使用与绩效评价",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "重庆市九龙坡区规划自然资源下放审批事权实施细则",
    "detail": "下放国有建设用地使用权划拨审批（10个工作日办结）、工业及划拨用地使用权收回审批（含公告30日与听证程序）等事权，并规定土地复垦方案由区规划自然资源局组织专家论证后备案、出具审查确认意见书（涉及临时占用永久基本农田的须提交踏勘论证报告），是全域整治中审批事权下放的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "试点推进",
    "lead": "重庆市九龙坡区政府、铜罐驿镇政府",
    "policyTitle": "社会资本参与生态保护修复",
    "detail": "依据《重庆市鼓励和支持社会资本参与生态保护修复实施方案》，铜罐驿镇在整治中引入社会资本参与生态修复，通过赋予自然资源资产使用权、允许合理收益等方式建立回报机制，并明确参与程序与权益保障，拓宽修复资金渠道。",
    "innovation": "以自然资源资产使用权与合理收益机制吸引社会资本参与修复",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "重庆市全域土地综合整治改革方案（2025—2029年）",
    "docNo": "无文号",
    "issuer": "重庆市经济体制改革专项小组",
    "date": "2025-04-08",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/jytablqk/202508/t20250805_14877169_wap.html",
    "attachUrl": "",
    "sourceNote": "核验说明：官方答复函引用其名称与日期，全文未公开",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "14",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "重庆市规划和自然资源局关于印发《重庆市全域土地综合整治项目规划设计导则（试行）》的通知",
    "docNo": "渝规资发〔2022〕53号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2022-12-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/qtwj/202304/t20230428_11923465.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "14",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "重庆市全域土地综合整治实施方案编制指南（试行）",
    "docNo": "无文号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2022-09-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/qtwj/202304/t20230428_11923480.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "14",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "重庆市财政局、重庆市规划和自然资源局关于印发《重庆市国土空间生态修复重点专项资金管理办法》的通知",
    "docNo": "渝财建〔2021〕100号",
    "issuer": "重庆市财政局、重庆市规划和自然资源局",
    "date": "2021-06-10",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://czj.cq.gov.cn/zwgk_268/zfxxgkml/zcwj/qtwj/202106/t20210610_9387659.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "14",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "重庆市人民政府办公厅关于印发《重庆市鼓励和支持社会资本参与生态保护修复实施方案》的通知",
    "docNo": "渝府办发〔2023〕32号",
    "issuer": "重庆市人民政府办公厅",
    "date": "2023-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/qtgw/202304/t20230417_11885285.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "14",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "重庆市规划和自然资源局关于印发重庆市农村集体经营性建设用地入市交易规则（试行）的通知",
    "docNo": "渝规资规范〔2023〕8号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2023-06-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://nyncw.cq.gov.cn/ztzl_161/rdzt/xczx/zcwj_249776/bm_257463/202312/t20231208_12678198_wap.html",
    "attachUrl": "",
    "sourceNote": "核验说明：相关入市交易规则已公开，本通知全文未公开",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "14",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "重庆市人民政府关于重庆市高标准农田建设规划（2021—2030年）的批复",
    "docNo": "渝府〔2022〕16号",
    "issuer": "重庆市人民政府",
    "date": "2022-04-26",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/qtgw/202204/t20220426_10660952.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "14",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "重庆市国土空间生态保护修复规划（2021—2035年）",
    "docNo": "未获取",
    "issuer": "重庆市规划和自然资源局",
    "date": "2022-02-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/ztlm_186/ghgb/zxgh/202202/t20220218_10412867.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "14",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "重庆市规划和自然资源局全面深化改革委员会关于加强规划统筹和自然资源要素保障促进乡村全面振兴的通知",
    "docNo": "渝规资改委发〔2024〕11号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2024-12-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkzl/fdzdgknr/zdmsxx/fp/fpzcjd/202503/t20250328_14454046.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "14",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "重庆市2024年度耕地保护奖补激励工作方案",
    "docNo": "未获取",
    "issuer": "重庆市规划和自然资源局",
    "date": "2024-06",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.cq.gov.cn/ywdt/zwhd/bmdt/202406/t20240625_13319885.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "14",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "重庆市逐步把永久基本农田建成高标准农田实施方案",
    "docNo": "未获取",
    "issuer": "重庆市农业农村委员会",
    "date": "2026",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://nyncw.cq.gov.cn/hdjl_161/cajd/202603/t20260319_15551867.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "14",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "重庆市九龙坡区集体土地征收补偿安置实施办法（修订）",
    "docNo": "九龙坡府发〔2026〕8号",
    "issuer": "重庆市九龙坡区人民政府",
    "date": "2026-07-07 印发",
    "status": "现行有效（列于区政府行政规范性文件「现行有效文件（64件）」目录，且未见于 2023—2026 年历次废止决定）",
    "grade": "核验A级",
    "url": "https://cqjlp.gov.cn/zwgk_251/zcwj/gfxwj/202607/t20260710_15815425.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "14",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "九龙坡区划拨用地划拨价款指导标准",
    "docNo": "九龙坡府办发〔2025〕73号",
    "issuer": "重庆市九龙坡区人民政府办公室",
    "date": "2025-09-11 印发",
    "status": "现行有效（同属区政府行政规范性文件现行有效目录）",
    "grade": "核验A级",
    "url": "https://cqjlp.gov.cn/zwgk_251/zcwj/gfxwj/202509/t20250922_15027940.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "14",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "九龙坡区加强农村土地经营权流转管理的实施细则",
    "docNo": "九龙坡府办发〔2023〕5号",
    "issuer": "重庆市九龙坡区人民政府办公室",
    "date": "2023-01-19 印发",
    "status": "现行有效（未见于历次废止决定）",
    "grade": "核验A级",
    "url": "https://cqjlp.gov.cn/zwgk_251/zcwj/gfxwj/202301/t20230130_11545082.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "14",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "重庆市九龙坡区规划自然资源下放审批事权实施细则",
    "docNo": "九龙坡府发〔2021〕20号",
    "issuer": "重庆市九龙坡区人民政府",
    "date": "2021-10-28 印发",
    "status": "现行有效（未见于历次废止决定）",
    "grade": "核验A级",
    "url": "https://cqjlp.gov.cn/zwgk_251/zcwj/gfxwj/202111/t20211104_9925841.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "14",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 6,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 2
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 14,
   "provinceTools": 10,
   "nationalTools": 0,
   "provinceBasis": 10,
   "nationalBasis": 0,
   "localDocs": 4,
   "provinceDocs": 11,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 14,
   "docs": 15,
   "innovations": 5,
   "implementation": 11,
   "pilot": 3,
   "gradeA": 11,
   "gradeB": 4,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "15",
  "dir": "15_陕西省安康市白河县仓上镇",
  "title": "陕西省安康市白河县仓上镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "陕西省安康市白河县仓上镇",
  "batch": "第一批",
  "province": "陕西",
  "positioning": "第一批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "以「多规合一」村庄规划为引领，提质改造耕地1288亩，新增耕地65.6亩，打造4A级旅游景区、田园综合体，推动一二三产融合。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以陕西省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具10项（其中创新工具3项）、政策文件8份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "白河县政府、仓上镇政府",
    "policyTitle": "旧宅基地拆旧复垦与增减挂钩政策",
    "detail": "有效解决仓上镇天宝村等3个村467户268.9亩旧宅基地闲置废弃造成的「一户多宅、土地闲置浪费」现象；完成城乡建设用地增减挂钩项目420.4亩，实现新增耕地320.7亩；通过农用地整理完成1288亩，实现新增耕地65.6亩，新增耕地率5.08%。",
    "innovation": "以增减挂钩破解山区「一户多宅」与宅基地闲置问题",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "白河县政府、仓上镇政府",
    "policyTitle": "安康市耕地占补平衡专项整治工作实施方案",
    "detail": "耕地占补平衡专项整治，是全域整治「补充耕地/占补平衡」配套工具。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "白河县政府、仓上镇政府",
    "policyTitle": "加强高标准农田建设工作方案",
    "detail": "高标准农田建设是全域土地综合整治农用地整治的核心内容。",
    "innovation": "",
    "deps": [
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "白河县政府、仓上镇政府",
    "policyTitle": "安康市全面推行耕地保护田长制",
    "detail": "建立市、县、镇、村四级田长制网格化耕地保护机制，是全域整治「耕地保护」的市级制度基础。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "白河县政府、仓上镇政府",
    "policyTitle": "安康市国土空间生态修复规划（2021—2035年）",
    "detail": "市级国土空间生态修复规划，是全域整治「生态修复」板块的上位依据。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "白河县政府、仓上镇政府",
    "policyTitle": "安康市国土空间总体规划（2021—2035年）",
    "detail": "划定耕地保有量、永久基本农田与生态保护红线，是全域整治的规划底线依据。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "白河县政府、仓上镇政府",
    "policyTitle": "省级自然资源生态修复保护专项资金管理",
    "detail": "依据《省级自然资源生态修复保护专项资金管理办法》，白河县仓上镇整治中的生态修复保护类工程按省级专项资金申报与使用要求组织实施，规范资金分配、拨付与绩效管理，保障废弃硫铁矿污染治理等修复工程投入。",
    "innovation": "按省级专项资金办法规范修复工程资金分配与绩效管理",
    "deps": [
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 8,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "白河县政府、仓上镇政府",
    "policyTitle": "「多规合一」实用性村庄规划编制试点政策",
    "detail": "将天宝等3个村作为首批「多规合一」实用性村庄规划编制试点村，根据规划准确定位村庄未来发展方向；按照「精准定位、突出特色」要求，将天宝村定位为特色保护类村庄，槐坪村定位为聚集提升类村庄，仓坪村定位为文明工业生态宜居村庄。",
    "innovation": "「多规合一」实用性村庄规划先行，一村一策分类定位发展",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 9,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "白河县政府、仓上镇政府",
    "policyTitle": "田园综合体与特色旅游产业链政策",
    "detail": "将项目区打造成为白河县一二三产业融合发展的田园综合体，园区以养殖和苗木为主，包括年出栏5000头养猪场、养殖3万只乌鸡的林下养殖基地、种植20万株木瓜的千亩小杂粮基地等；天宝村打造为全国青少年教育研学基地、陕西「醉美」4A级旅游胜地。",
    "innovation": "田园综合体+4A景区+研学基地的多元产业融合路径",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   },
   {
    "no": 10,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "白河县政府、仓上镇政府",
    "policyTitle": "白河县人民政府办公室印发白河县废弃硫铁矿污染治理项目和资金管理办法",
    "detail": "规定废弃硫铁矿污染治理专项资金含中央、省级下达的财政专项及市县预算安排资金，使用范围含治理所需的土地征收、房屋拆迁、搬迁、排险费用，以及硫铁矿废石处置、矿山生态修复科普教育示范基地建设、资源化利用试验和废弃矿山污染专项整治费用，是全域整治中废弃矿山生态修复资金管理的区级依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "陕西省自然资源厅等六部门关于学习运用「千万工程」经验深入推进全域土地综合整治工作的实施意见",
    "docNo": "陕自然资规〔2025〕520号",
    "issuer": "陕西省自然资源厅、陕西省财政厅、陕西省生态环境厅、陕西省水利厅、陕西省农业农村厅、陕西省林业局",
    "date": "2025-05-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.shaanxi.gov.cn/zcfg/zfwj/stgfwj/202505/t20250527_3523764.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省林业局",
    "rank": 3,
    "caseId": "15",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "陕西省财政厅、陕西省自然资源厅关于印发《省级自然资源生态修复保护专项资金管理办法》的通知",
    "docNo": "无文号",
    "issuer": "陕西省财政厅、陕西省自然资源厅",
    "date": "2024-06-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.shaanxi.gov.cn/zcfg/zfwj/stqtwj/202501/t20250103_3279148.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "15",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "安康市人民政府办公室关于印发加强高标准农田建设工作方案的通知",
    "docNo": "安政办函〔2022〕160号",
    "issuer": "安康市人民政府办公室",
    "date": "2022-12-05",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://nyj.ankang.gov.cn/Content-2505302.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "15",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "安康市全面推行耕地保护田长制实施方案",
    "docNo": "未获取",
    "issuer": "中共安康市委、安康市人民政府",
    "date": "2022-11",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zrzy.ankang.gov.cn/Content-2482993.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "15",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "安康市国土空间生态修复规划（2021—2035年）",
    "docNo": "未获取",
    "issuer": "安康市自然资源局、安康市发展和改革委员会（经市政府同意）",
    "date": "2023-12-26",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zrzy.ankang.gov.cn/Content-2658568.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市政府",
    "rank": 2,
    "caseId": "15",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "安康市国土空间总体规划（2021—2035年）",
    "docNo": "未获取",
    "issuer": "安康市人民政府",
    "date": "2025-01-08",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.ankang.gov.cn/Content-2783138.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "15",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "安康市自然资源局关于印发《安康市耕地占补平衡专项整治工作实施方案》的通知",
    "docNo": "未获取",
    "issuer": "安康市自然资源局",
    "date": "2023-08-21",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zrzy.ankang.gov.cn/Content-2644434.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "15",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "白河县人民政府办公室印发白河县废弃硫铁矿污染治理项目和资金管理办法的通知",
    "docNo": "白规〔2024〕001—政府办001；白政办发〔2024〕9号",
    "issuer": "白河县人民政府办公室",
    "date": "2024-06-27 成文、印发（经县政府第四次常务会议审议通过）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.baihe.gov.cn/Content-2722093.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自 2024-07-27 起施行，有效期至 2029-07-26；现行有效（同时废止白政办发〔2023〕25号）",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "15",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 10,
   "provinceTools": 4,
   "nationalTools": 0,
   "provinceBasis": 4,
   "nationalBasis": 0,
   "localDocs": 6,
   "provinceDocs": 2,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 10,
   "docs": 8,
   "innovations": 4,
   "implementation": 9,
   "pilot": 1,
   "gradeA": 4,
   "gradeB": 4,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "16",
  "dir": "16_天津市宝坻区牛家牌镇",
  "title": "天津市宝坻区牛家牌镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "天津市宝坻区牛家牌镇",
  "batch": "第二批",
  "province": "天津",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "在赵家湾村、西老鸦口村实施土地开发整理与村台环境提升改造，引入社会资本6048万元建设特色湿地民宿，村民分红每年4500元以上，打造稻田里的水村与乡村振兴示范村。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以天津市配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具12项（其中创新工具2项）、政策文件12份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "天津市规划和自然资源局、宝坻区政府",
    "policyTitle": "天津市城乡建设用地增减挂钩管理办法",
    "detail": "增减挂钩拆旧复垦/挂钩指标库制度，是全域整治「建设用地整理」核心工具。",
    "innovation": "",
    "deps": [
     3
    ],
    "leadLevel": "省",
    "scope": "province",
    "scopeRank": 3,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "宝坻区政府、牛家牌镇政府",
    "policyTitle": "天津市宝坻区人民政府办公室关于转发宝坻区耕地占补平衡指标统筹管理办法",
    "detail": "将耕地占补平衡指标分为本区土地整治与高标准农田建设产生的新增耕地指标、国家跨省域统筹的补充耕地指标、国家跨省域调剂的增减挂钩节余指标三部分，明确占一补一、占优补优、占水田补水田原则并深度挖潜新增指标，是全域整治中耕地占补平衡指标统筹的区级依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "宝坻区政府、牛家牌镇政府",
    "policyTitle": "宝坻区人民政府办公室关于转发区国土资源分局拟定的宝坻区耕地保护责任目标考核办法的通知",
    "detail": "明确镇街人民政府和辖区内国有单位对本区域耕地保有量、永久基本农田保护面积和高标准农田建设任务负责，镇长、街道办事处主任、国有单位法人为第一责任人，由区国土资源分局会同区发改委、区农委、区统计局组织考核，实行年度自查与期中、期末考核相结合，是全域整治中耕地保护责任目标考核的区级依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 4,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "宝坻区政府、牛家牌镇政府",
    "policyTitle": "天津市宝坻区人民政府办公室转发区国土分局拟定的宝坻区加强后备资源开发落实耕地占补平衡工作实施方案的通知",
    "detail": "依据土地利用总体规划并结合生态保护红线，对具备整治潜力的坑塘、砖瓦厂和未利用地进行综合整治（对21个街镇的坑塘水面综合整治，用三年时间综合整治已关停的18个砖瓦厂），明确项目选址与前期准备程序并由区财政按建设规模给予资金补助，是全域整治中后备资源开发与耕地占补平衡的区级依据。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "天津市规划和自然资源局、宝坻区政府",
    "policyTitle": "耕地进出平衡年度核算政策",
    "detail": "落实耕地年度内「进出平衡」要求，在实施农用地整理和建设用地整理过程中，确保耕地数量不减少、质量不降低，通过年度核算实现耕地的动态平衡管理。",
    "innovation": "",
    "deps": [
     1
    ],
    "leadLevel": "省",
    "scope": "province",
    "scopeRank": 3,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "天津市规划和自然资源局、宝坻区政府",
    "policyTitle": "天津市国土空间生态修复规划（2021—2035年）",
    "detail": "市级国土空间生态修复规划批复，是全域整治「生态修复」板块上位依据。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "省",
    "scope": "province",
    "scopeRank": 3,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "天津市规划和自然资源局、宝坻区政府",
    "policyTitle": "天津市高标准农田建设规划（2021—2030年）",
    "detail": "高标准农田建设是全域整治农用地整治核心抓手。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "省",
    "scope": "province",
    "scopeRank": 3,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "天津市规划和自然资源局、宝坻区政府",
    "policyTitle": "天津市逐步把永久基本农田建成高标准农田实施方案",
    "detail": "永久基本农田集中连片建成高标准农田，与全域整治农用地整治衔接。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "省",
    "scope": "province",
    "scopeRank": 3,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "天津市规划和自然资源局、宝坻区政府",
    "policyTitle": "天津市深化农村集体经营性建设用地入市试点工作方案",
    "detail": "方案明确「探索全域土地综合整治、城乡建设用地增减挂钩、农村集体土地整理等政策措施盘活存量建设用地」。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "省",
    "scope": "province",
    "scopeRank": 3,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "宝坻区政府、牛家牌镇政府",
    "policyTitle": "宝坻区农村宅基地及其地上房屋发证工作实施方案",
    "detail": "对涉及668个村共111757宗符合条件的宅基地及其地上房屋颁证，坚持「一户只能拥有一处宅基地」与「权属来源合法、产权清楚无争议、面积量算准确」，对违规占地建设、超占面积、城镇居民非法购买宅基地、「一户多宅」等按规定处理，是全域整治中宅基地及住房建设管理、土地权属调整的区级依据。",
    "innovation": "",
    "deps": [
     11,
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "天津市规划和自然资源局、宝坻区政府",
    "policyTitle": "市级审查意见与「先补划后调整」政策",
    "detail": "市规划资源局出具试点审查意见，明确要求执行耕地年度内「进出平衡」和永久基本农田「先补划后调整」；要求依法依规实施农用地整理、建设用地整理、生态保护修复及产业项目等子项目，并及时公开实施方案、维护群众合法权益。",
    "innovation": "以市级审查意见函明确「先补划后调整」的操作规则",
    "deps": [
     2
    ],
    "leadLevel": "省",
    "scope": "province",
    "scopeRank": 3,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 12,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "宝坻区政府、牛家牌镇政府",
    "policyTitle": "「闲置宅基地盘活+现代农业」政策",
    "detail": "以「闲置宅基地盘活+现代农业」为核心，建设集种植、加工、销售于一体的现代农业产业园，项目流转土地2000亩，村集体收入增长40%，带动300余名村民就业，探索出「土地整治+乡村产业」的城乡融合新路径。",
    "innovation": "「闲置宅基地盘活+现代农业」的城乡融合新路径",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "天津市人民政府办公厅关于印发天津市全面推进土地资源高质量利用若干措施的通知",
    "docNo": "津政办发〔2024〕18号",
    "issuer": "天津市人民政府办公厅",
    "date": "2024-08-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.tj.gov.cn/zwgk/szfwj/tjsrmzfbgt/202408/t20240809_6695705.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "16",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "市规划资源局关于宝坻区牛家牌镇全域土地综合整治试点审查意见的函",
    "docNo": "无文号",
    "issuer": "天津市规划和自然资源局",
    "date": "2023-12-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghhzrzy.tj.gov.cn/zwgk_143/tzgg/202401/t20240108_6502868.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "16",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "市规划资源局关于印发天津市城乡建设用地增减挂钩管理办法的通知",
    "docNo": "津规资源发〔2023〕113号",
    "issuer": "天津市规划和自然资源局",
    "date": "2023-07-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghhzrzy.tj.gov.cn/zwgk_143/tzgg/202307/t20230731_6366056.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "16",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "天津市人民政府办公厅关于印发天津市深化农村集体经营性建设用地入市试点工作方案的通知",
    "docNo": "津政办发〔2023〕15号",
    "issuer": "天津市人民政府办公厅",
    "date": "2023-05-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.tj.gov.cn/zwgk/szfwj/tjsrmzfbgt/202305/t20230531_6256992.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "16",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "天津市人民政府关于天津市国土空间生态修复规划（2021—2035年）的批复",
    "docNo": "津政函〔2023〕41号",
    "issuer": "天津市人民政府",
    "date": "2023-05-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.tj.gov.cn/zwgk/szfwj/tjsrmzf/202305/t20230531_6255928.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "16",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "天津市人民政府关于天津市高标准农田建设规划（2021—2030年）的批复",
    "docNo": "津政函〔2022〕73号",
    "issuer": "天津市人民政府",
    "date": "2022-07-20",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.tj.gov.cn/zwgk/szfwj/tjsrmzf/202207/t20220720_5938345.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "16",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "市农业农村委关于印发《天津市逐步把永久基本农田建成高标准农田实施方案》的通知",
    "docNo": "未获取",
    "issuer": "天津市农业农村委员会",
    "date": "2026-07-07",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://nync.tj.gov.cn/ZWGK0/GHJH152022/202607/t20260707_7331448.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "16",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "天津市宝坻区人民政府办公室关于转发宝坻区耕地占补平衡指标统筹管理办法的通知",
    "docNo": "宝坻政办发〔2019〕5号",
    "issuer": "天津市宝坻区人民政府办公室（拟定单位：区规划和自然资源分局）",
    "date": "2019-04-19 印发（已经区政府领导同志同意）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.tjbd.gov.cn/zwgk/zcwj/qjwj/QZFBGS/202012/t20201209_4729382.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注「有效」",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "16",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "宝坻区人民政府办公室关于转发区国土资源分局拟定的宝坻区耕地保护责任目标考核办法的通知",
    "docNo": "宝坻政办发〔2018〕16号",
    "issuer": "天津市宝坻区人民政府办公室（拟定单位：区国土资源分局）",
    "date": "2018-12-10 印发（经第 31 次区长办公会议审议通过）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.tjbd.gov.cn/zwgk/zcwj/qjwj/QZFBGS/202012/t20201209_4729349.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注「有效」",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "16",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "天津市宝坻区人民政府办公室转发区国土分局拟定的宝坻区加强后备资源开发落实耕地占补平衡工作实施方案的通知",
    "docNo": "宝坻政办发〔2017〕38号",
    "issuer": "天津市宝坻区人民政府办公室（拟定单位：区国土分局）",
    "date": "2017-12-29 印发（经区政府第 27 次常务会议研究同意）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.tjbd.gov.cn/zwgk/zcwj/qjwj/QZFBGS/202109/t20210906_5581830.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注「有效」",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "16",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "天津市宝坻区人民政府关于印发宝坻区农村宅基地及其地上房屋发证工作实施方案的通知",
    "docNo": "宝坻政发〔2024〕3号",
    "issuer": "天津市宝坻区人民政府",
    "date": "2024-04-30 印发（经区政府第 52 次常务会议审议通过）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.tjbd.gov.cn/zwgk/zcwj/qjwj/QZF/202404/t20240430_6615524.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段未标注（未列入失效／废止文件清单）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "16",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "天津市宝坻区人民政府办公室关于印发宝坻区低效用地再开发试点工作实施方案的通知",
    "docNo": "宝坻政办发〔2024〕3号",
    "issuer": "天津市宝坻区人民政府办公室",
    "date": "2024-05-21 印发",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.tjbd.gov.cn/zwgk/zcwj/qjwj/QZFBGS/202405/t20240521_6630775.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "16",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 5,
   "provinceTools": 8,
   "nationalTools": 0,
   "provinceBasis": 1,
   "nationalBasis": 0,
   "localDocs": 5,
   "provinceDocs": 7,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 12,
   "docs": 12,
   "innovations": 2,
   "implementation": 11,
   "pilot": 1,
   "gradeA": 11,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "17",
  "dir": "17_吉林省白城市大安市新平安镇",
  "title": "吉林省白城市大安市新平安镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "吉林省白城市大安市新平安镇",
  "batch": "第二批",
  "province": "吉林",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "20.19 亿元",
  "summary": "实施新平安镇全域土地综合整治试点项目，改造耕地2.04万亩、新造水田2.25万亩、治理退化草原0.90万亩，配套易地搬迁安置与牧业小区建设，推进盐碱地综合利用，助力耕地数量、质量、生态「三位一体」保护。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以吉林省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具18项（其中创新工具2项）、政策文件16份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "盐碱地综合利用与占补平衡政策",
    "detail": "利用政府财政资金实施占补平衡项目5个，总计新增耕地4.09万亩，总投资达4.62亿元，每年可增产粮食0.49亿斤；通过推进盐碱地综合利用，助力耕地数量、质量、生态三位一体保护，严守耕地保护红线。",
    "innovation": "盐碱地综合利用纳入占补平衡，实现耕地数量、质量、生态三位一体保护",
    "deps": [
     3
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "大安市全域土地综合整治试点工作方案",
    "detail": "载明经市政府遴选、省自然资源厅批准并报自然资源部备案，确定新平安镇为大安市试点乡镇、试点项目区涉及长和、长明和平安三个村；明确谋划农田综合整治、统筹安排生态修复工程、补齐农村基础设施和公共服务短板的工作目标，以及自然资源部门为项目主管部门、负责试点项目总调度与项目申报的责任分工，是本案例最早的镇域专项工作方案。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "大安市全域土地综合整治试点工作实施方案",
    "detail": "本案例核心实施方案，部署农用地整理（现状耕地提质改造预计1600公顷、坑塘和林草资源治理预计900公顷）、农村建设用地整理（对项目区内6个自然屯搬迁合并，预计腾退建设用地27公顷、结余建设用地指标23公顷并优先用于项目区农业农村发展）与乡村生态保护修复，是全域整治中项目实施的核心区级依据。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "大安市引导和规范社会力量参与土地整治项目建设实施意见",
    "detail": "建立「政府引导、市场运作、社会参与」机制，引导农民、农村集体经济组织、新型农业经营主体、工商资本、金融资本投资或参与土地整治，明确社会力量参与范围为治理盐碱地、改善修复生态环境及未利用地开发等用于占补平衡的土地整治项目，并建立项目储备库，是全域整治中社会力量参与机制建设的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "大安盐碱地等耕地后备资源综合利用国家试点（改善水田）项目 2024 年实施方案",
    "detail": "确定2024年发展改善8.6万亩生态环保、地力肥沃、设施配套、稳定持续的水田并实现全面有效种植的目标，部署修缮田间工程（土地平整、田埂修筑、新建毛渠毛沟、修缮田间道路，道路通达度100%）与土壤改良培肥工程（工程与生物措施结合、面源污染防治与盐碱化治理，实现「田成方、路成网、渠相连、旱能灌、涝能排、土肥沃」），是全域整治中盐碱地综合利用的区级依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "大安市高标准农田建后管护办法（试行）",
    "detail": "适用于全市2011年以来财政、发改、自然资源、农业及灌区等部门建成的高标准农田的管理、维修与养护，按「谁受益、谁管护，谁使用、谁管护」原则，并分层确定管护主体（受益范围为某一行政村的项目由村民委员会负责或委托农民专业合作组织、协会管护；跨行政村由乡镇政府确定；跨乡镇由县级行业主管部门确定），是全域整治中高标准农田建后管护的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "大安市行政审批局",
    "policyTitle": "大安市行政审批局关于大安市新平安镇全域土地综合整治项目平安村等 3 个村（四期）可行性研究报告的批复",
    "detail": "批复大安市新平安镇全域土地综合整治项目平安村等3个村（四期）可行性研究报告，项目法人为大安市自然资源局，建设地点为新平安镇平安村、长和村，项目区总面积512.9161公顷、建设规模489.6926公顷（其中新增林地6.0706公顷），是本案例最直接的镇域项目批复件。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "易地搬迁安置与牧业小区配套建设政策",
    "detail": "配套实施易地搬迁安置项目和牧业小区建设项目，计划总投资4.9亿元，拆迁房屋465户，安置村民1042人，规划建设住宅12栋、商业用房6栋、牛舍94栋、羊舍159栋、看护房253间及相关附属配套设施。",
    "innovation": "易地搬迁+牧业小区「人畜分离」配套建设模式",
    "deps": [
     3
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "白城市高标准农田建设规划（2021—2030年）",
    "detail": "高标准农田建设是全域整治农用地整治核心内容。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "白城市黑土地保护总体规划（2021－2025年）",
    "detail": "黑土地保护总体规划，是全域整治「耕地质量提升/黑土地保护」板块上位依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "盐碱地等耕地后备资源综合利用",
    "detail": "依据《吉林省人民政府办公厅关于开展盐碱地等耕地后备资源综合利用的指导意见》，新平安镇将盐碱地治理与耕地后备资源开发纳入整治范围，按省级部署推进盐碱地改良与综合利用，拓展耕地增量空间并与占补平衡指标生成衔接。",
    "innovation": "盐碱地治理与耕地后备资源开发、占补平衡指标生成衔接",
    "deps": [
     2
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "大安市政府、吉林省财政厅",
    "policyTitle": "财政资金主导的占补平衡项目投入政策",
    "detail": "利用政府财政资金实施占补平衡项目，形成财政资金主导、指标收益回收的投入机制，总投资达4.62亿元，实现盐碱地治理的规模化推进。",
    "innovation": "",
    "deps": [
     3
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "社会资本参与土地整治项目奖补办法",
    "detail": "明确社会资本参与土地整治的奖补标准与资金支付，是全域整治投融资配套政策。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "大安盐碱地等耕地后备资源综合利用国家试点（小西米片区）项目实施方案",
    "detail": "依据国家层面盐碱地等耕地后备资源综合利用试点制度框架与本案例社会力量参与实施意见制定，明确以水定地、生态优先，因地制宜、建管并重，综合施策、形成合力，政府引导、市场运作等工作原则，是全域整治中盐碱地耕地后备资源综合利用的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "大安市 2023 年财政涉农资金统筹整合使用调整方案",
    "detail": "依据财农〔2021〕22号、吉财农〔2021〕613号等制定，明确规划引领、统筹兼顾，突出重点、产业优先等基本原则，并要求整合资金支持的项目原则上从项目库中选择、科学设定绩效目标、严格项目论证入库，是全域整治中涉农资金统筹整合的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 16,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "白城市土地整治项目后期经营管护办法",
    "detail": "土地整治项目后期经营管护制度，是全域整治「建后管护长效机制」配套。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 17,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "全域土地综合整治项目全流程管理",
    "detail": "依据《吉林省全域土地综合整治项目管理办法（试行）》，新平安镇整治项目实行省级立项审核、实施监管与竣工验收全流程管理，落实项目入库、变更调整与成效评估要求，是本案例项目规范化实施的省级制度依据。",
    "innovation": "省级统一的项目立项—实施—验收全流程管理制度",
    "deps": [
     1
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 18,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "大安市政府、新平安镇政府",
    "policyTitle": "引导和规范社会资本参与耕地后备资源开发利用",
    "detail": "引导社会资本参与土地整治/耕地后备资源开发，是全域整治「社会资本参与+指标收益」配套工具。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "吉林省全域土地综合整治项目管理办法（试行）",
    "docNo": "无文号",
    "issuer": "吉林省自然资源厅（经省政府同意）",
    "date": "2025-06-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://zrzy.jl.gov.cn/zwgk/fgwj/gfxwj/tgfxwj/202506/t20250630_9268080.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省政府",
    "rank": 3,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "吉林省人民政府办公厅关于开展盐碱地等耕地后备资源综合利用的指导意见",
    "docNo": "无文号",
    "issuer": "吉林省人民政府办公厅",
    "date": "2022-09-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://xxgk.jl.gov.cn/szf/gkml/202209/t20220923_8584059.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "大安市人民政府办公室关于印发《大安市全域土地综合整治试点工作方案》的通知",
    "docNo": "大政办发〔2020〕13号",
    "issuer": "大安市人民政府办公室",
    "date": "2020-07-06",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.daan.gov.cn/root267_45/dasrmzf/dasrm/xxgkml/202010/t20201022_874031.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "白城市人民政府办公室关于引导和规范社会资本参与耕地后备资源开发利用的实施意见",
    "docNo": "白政办发〔2022〕13号",
    "issuer": "白城市人民政府办公室",
    "date": "2022-07-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://xxgk.jlbc.gov.cn/bcsrmzf/szf/xxgkml/202208/t20220804_941974.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "白城市人民政府关于印发《社会资本参与土地整治项目奖补办法》的通知",
    "docNo": "未获取",
    "issuer": "白城市人民政府",
    "date": "2023-10-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jlrd.gov.cn/jlsjk/202407/t20240709_8931714.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "白城市人民政府关于白城市高标准农田建设规划（2021—2030年）的批复",
    "docNo": "白政函〔2022〕107号",
    "issuer": "白城市人民政府",
    "date": "2022-12-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://xxgk.jlbc.gov.cn/bcsrmzf/szf/xxgkml/202301/t20230105_953489.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "白城市人民政府关于印发《白城市土地整治项目后期经营管护办法》的通知",
    "docNo": "白政规〔2023〕4号",
    "issuer": "白城市人民政府",
    "date": "2023-10-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://xxgk.jlbc.gov.cn/bcsrmzf/szf/xxgkml/202311/t20231110_975089.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "白城市人民政府关于印发白城市黑土地保护总体规划（2021－2025年）的通知",
    "docNo": "白政发〔2022〕23号",
    "issuer": "白城市人民政府",
    "date": "2022-12-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://xxgk.jlbc.gov.cn/bcsrmzf/szf/xxgkml/202301/t20230119_954461.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "大安市人民政府办公室关于印发《大安市全域土地综合整治试点工作方案》的通知",
    "docNo": "大政办发〔2020〕13号",
    "issuer": "大安市人民政府办公室",
    "date": "2020-07-06 成文、印发（经市政府同意）",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.daan.gov.cn/root267_45/dasrmzf/dasrm/xxgkml/202010/t20201022_874031.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "大安市人民政府办公室关于印发《大安市全域土地综合整治试点工作实施方案》的通知",
    "docNo": "大政办发〔2020〕25号",
    "issuer": "大安市人民政府办公室",
    "date": "2020-11-18 成文、印发（经市政府同意）",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.daan.gov.cn/root267_45/dasrmzf/dasrm/xxgkml/202012/t20201209_883223.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "大安市人民政府关于印发《大安市引导和规范社会力量参与土地整治项目建设实施意见》的通知",
    "docNo": "大政发〔2019〕10号",
    "issuer": "大安市人民政府",
    "date": "2019-03-28 成文、印发（经市政府同意）",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.daan.gov.cn/root267_45/dasrmzf/dasrm/xxgkml/201904/t20190404_808476.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "大安市人民政府关于印发《大安盐碱地等耕地后备资源综合利用国家试点（改善水田）项目 2024 年实施方案》的通知",
    "docNo": "大政发〔2024〕3号",
    "issuer": "大安市人民政府",
    "date": "2024-03-07 成文（经市政府 2024 年第 3 次常务会议通过）、2024-03-13 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.daan.gov.cn/root267_45/dasrmzf/dasrm/xxgkml/202403/t20240313_984633.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "大安市人民政府关于印发《大安盐碱地等耕地后备资源综合利用国家试点（小西米片区）项目实施方案》的通知",
    "docNo": "大政发〔2022〕13号",
    "issuer": "大安市人民政府",
    "date": "2022-10-28 成文、印发（经市政府常务会议审议通过）",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.daan.gov.cn/root267_45/dasrmzf/dasrm/xxgkml/202211/t20221111_949676.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "大安市人民政府办公室关于印发《大安市高标准农田建后管护办法（试行）》的通知",
    "docNo": "大政办规〔2023〕2号",
    "issuer": "大安市人民政府办公室",
    "date": "2023-11-16 成文、2023-11-23 发布（经市政府同意）",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.daan.gov.cn/root267_45/dasrmzf/dasrm/xxgkml/202311/t20231123_976547.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注「有效」，正文第十九条自述试行期三年",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "大安市行政审批局关于大安市新平安镇全域土地综合整治项目平安村等 3 个村（四期）可行性研究报告的批复",
    "docNo": "大行审投字〔2021〕129号",
    "issuer": "大安市行政审批局（大安市政务服务局）",
    "date": "2021-10-29 成文、2021-11-10 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.daan.gov.cn/root267_45/zfbm6/zwfw/xxgkml/202111/t20211119_916707.html",
    "attachUrl": "",
    "sourceNote": "文书形态：核准文件有效期 2 年（自发布之日起计算）",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "大安市人民政府关于印发大安市 2023 年财政涉农资金统筹整合使用调整方案的通知",
    "docNo": "大政发〔2023〕6号",
    "issuer": "大安市人民政府",
    "date": "2023-08-23 成文（经市政府 2023 年第 10 次常务会议通过）、2023-08-31 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.daan.gov.cn/root267_45/dasrmzf/dasrm/xxgkml/202308/t20230831_969707.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "17",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 7,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 4,
    "innovations": 2
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 18,
   "provinceTools": 2,
   "nationalTools": 0,
   "provinceBasis": 2,
   "nationalBasis": 0,
   "localDocs": 14,
   "provinceDocs": 2,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 18,
   "docs": 16,
   "innovations": 4,
   "implementation": 13,
   "pilot": 5,
   "gradeA": 16,
   "gradeB": 0,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "18",
  "dir": "18_江苏省盐城市建湖县高作镇",
  "title": "江苏省盐城市建湖县高作镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江苏省盐城市建湖县高作镇",
  "batch": "第二批",
  "province": "江苏",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "9.82 亿元",
  "summary": "按照「先流转、再建设，先平整、再配套」模式破除田埂、平整田地，已形成增减挂钩指标1998亩、补充耕地指标600亩，建成3个万亩连片优质稻麦种植基地，亩均增产100多斤、增收200元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以江苏省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具12项（其中创新工具3项）、政策文件14份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "建湖县政府、高作镇政府",
    "policyTitle": "补充耕地指标与增减挂钩指标双指标生成政策",
    "detail": "目前已形成补充耕地指标733亩、增减挂钩指标1998亩；正在推进实施增减挂钩项目，完成农户搬迁655户，预计新增耕地317亩；实施完成占补平衡补充耕地510亩。",
    "innovation": "同步生成补充耕地与增减挂钩两类指标，实现指标收益最大化",
    "deps": [
     2,
     3,
     4,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "建湖县政府、高作镇政府",
    "policyTitle": "建湖县高标准农田工程设施管护维修办法",
    "detail": "要求受益村结合田长制设置专人分区明确管护责任人，明确管护资金主要来源含新增耕地指标交易收益，并规定灌排、道路、输配电工程的管护标准，是全域整治中高标准农田工程设施管护的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "建湖县政府、高作镇政府",
    "policyTitle": "「先流转、再建设，先平整、再配套」整治模式政策",
    "detail": "按照「先流转、再建设，先平整、再配套」模式，统筹「水、田、路、林」等设施建设改造，逐步建成「田成方、渠成型、林成网、路相通、沟相连、土壤肥、旱能灌、涝能排」的高标准吨粮田，形成西南、中部、东部3个万亩连片优质稻麦种植基地。",
    "innovation": "「先流转、再建设，先平整、再配套」的整治时序模式，避免重复建设",
    "deps": [
     1,
     2,
     3,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "建湖县政府、高作镇政府",
    "policyTitle": "智慧农场与化肥农药「减量使用」政策",
    "detail": "建设智慧农场，实行农药、化肥「减量使用」，有效降低农业面源污染，进一步提升耕地质量和种植水平，亩均增产100多斤、增收达200元。",
    "innovation": "智慧农场+化肥农药减量，实现增产增收与面源污染治理协同",
    "deps": [
     2,
     3,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "建湖县政府、高作镇政府",
    "policyTitle": "盐城市国土空间生态保护和修复规划（2021-2035年）",
    "detail": "市级国土空间生态保护和修复规划，是全域整治「生态修复」板块上位依据。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "建湖县政府、高作镇政府",
    "policyTitle": "盐城市高标准农田建设规划（2021-2030年）",
    "detail": "高标准农田建设是全域整治农用地整治核心内容。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "建湖县政府、高作镇政府",
    "policyTitle": "盐城市高标准农田建设全程质量管理办法（试行）",
    "detail": "高标准农田建设全程质量管理，衔接永久基本农田补划与耕地「进出平衡」，是全域整治农用地整治配套。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "建湖县政府、高作镇政府",
    "policyTitle": "盐城市农村住房规划建设管理指导意见",
    "detail": "规定农村宅基地管理、闲置宅基地和闲置农房盘活利用、村庄规划与村庄整治，是全域整治「村庄整治/宅基地盘活」配套。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "建湖县政府、高作镇政府",
    "policyTitle": "全面推进美丽盐城建设行动方案",
    "detail": "含闲置土地/低效厂房清理、耕地和永久基本农田保护、山水林田湖草沙一体化生态修复等全域整治支撑内容。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "建湖县自然资源和规划局",
    "policyTitle": "建湖县耕地保护激励暂行办法",
    "detail": "按耕地保有量、永久基本农田建设、高标准农田建设、耕地占补平衡、土地综合整治等八方面任务开展绩效评价，每年评选2个镇（街道）、9个村级集体经济组织给予资金奖励，激励资金来源于省返还县级新增建设用地土地有偿使用费并用于永久基本农田（高标准农田）建设与保护、土地综合整治、耕地质量保护与提升，是全域整治中耕地保护激励的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "建湖县政府、高作镇政府",
    "policyTitle": "建湖县人民政府关于公布实施建湖县征地区片综合地价",
    "detail": "公布征地区片综合地价（区片Ⅰ47000元/亩，土地补偿费23500元/亩、安置补助费23500元/人；区片Ⅱ含高作镇45000元/亩；征收集体未利用地按0.7倍执行），是全域整治中征地补偿测算的区级价格依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "建湖县政府、高作镇政府",
    "policyTitle": "建湖县被征地农民社会保障实施办法",
    "detail": "确立「先筹后征、即征即保，应保尽保、分类施保」原则，规定从土地出让金等土地有偿使用收益中安排被征地农民社会保障费用并实行社会保障费用预存制度，是全域整治中农民权益保障的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省政府办公厅关于转发省自然资源厅《江苏省国土空间全域综合整治方案》的通知",
    "docNo": "苏政办发〔2020〕26号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2020-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://czj.huaian.gov.cn/upload/2020-11/d2806407-b54b-45db-8693-65ef03128ce8.pdf",
    "attachUrl": "",
    "sourceNote": "核验说明：省、市门户均无该文正文页，来源为官网公开的全文附件",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江苏省全域土地综合整治项目管理办法",
    "docNo": "苏自然资发〔2025〕301号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-12-23",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c9082549b4f613b019b4f9399a0006f",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江苏省自然资源厅关于学习运用「千万工程」经验深入推进全域土地综合整治的实施意见",
    "docNo": "苏自然资函〔2025〕325号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-07-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c90825497528e63019811c7bbd4133e",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "江苏省政府办公厅关于印发《江苏省增减挂钩节余指标流转使用管理暂行办法》的通知",
    "docNo": "苏政办发〔2017〕101号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2017-07-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.jiangsu.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "全域土地综合整治项目验收规范（江苏省地方标准）",
    "docNo": "DB32/T 5048-2025",
    "issuer": "江苏省市场监督管理局（归口）",
    "date": "2025-02-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=3049356D14F03289E06397BE0A0AC3F7",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "盐城市人民政府办公室关于印发盐城市国土空间生态保护和修复规划（2021-2035年）的通知",
    "docNo": "盐政办函〔2024〕20号",
    "issuer": "盐城市人民政府办公室",
    "date": "2024-12-03",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yancheng.gov.cn/art/2024/12/3/art_23770_4266107.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "盐城市人民政府办公室关于印发盐城市高标准农田建设规划（2021-2030年）的通知",
    "docNo": "盐政办发〔2022〕62号",
    "issuer": "盐城市人民政府办公室",
    "date": "2022-10-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yancheng.gov.cn/art/2022/10/21/art_13184_3919480.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "盐城市人民政府关于印发盐城市高标准农田建设全程质量管理办法（试行）的通知",
    "docNo": "盐政规发〔2023〕4号",
    "issuer": "盐城市人民政府",
    "date": "2023-11-07",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://wap.yancheng.gov.cn/art/2023/11/7/art_44682_10928.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "盐城市人民政府办公室关于印发盐城市农村住房规划建设管理指导意见的通知",
    "docNo": "未获取",
    "issuer": "盐城市人民政府办公室",
    "date": "2022-05-12",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yancheng.gov.cn/art/2022/5/13/art_25891_3859892.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "盐城市人民政府关于印发全面推进美丽盐城建设行动方案的通知",
    "docNo": "盐政发〔2024〕22号",
    "issuer": "盐城市人民政府",
    "date": "2024-11-26",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yancheng.gov.cn/art/2025/1/14/art_45462_10992.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "建湖县高标准农田工程设施管护维修办法",
    "docNo": "建政规发〔2026〕1号",
    "issuer": "建湖县人民政府",
    "date": "2026-04-20 印发",
    "status": "有效，有效期至2031-05-31",
    "grade": "核验A级",
    "url": "https://www.jianhu.gov.cn/art/2026/5/7/art_32123_4422996.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "建湖县人民政府关于公布实施建湖县征地区片综合地价的通知",
    "docNo": "建政发〔2026〕5号",
    "issuer": "建湖县人民政府",
    "date": "2026-04-30 印发",
    "status": "有效，有效期至2028-12-31",
    "grade": "核验A级",
    "url": "https://www.jianhu.gov.cn/art/2026/5/8/art_32123_4426142.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "建湖县被征地农民社会保障实施办法",
    "docNo": "建政规发〔2022〕4号",
    "issuer": "建湖县人民政府",
    "date": "2022-11-13 印发",
    "status": "有效，有效期至2027-12-12",
    "grade": "核验A级",
    "url": "https://www.jianhu.gov.cn/art/2022/11/18/art_32727_3931231.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "18",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "建湖县耕地保护激励暂行办法",
    "docNo": "未获取",
    "issuer": "建湖县自然资源和规划局会同建湖县财政局",
    "date": "2023-07 出台",
    "status": "",
    "grade": "核验B级",
    "url": "https://zrzy.jiangsu.gov.cn/ycjh/gtzx/gzdt/202307/t20230711_1442453.htm",
    "attachUrl": "",
    "sourceNote": "文书形态：效力佐证页（部门官方工作动态）",
    "level": "区县",
    "levelHit": "县财政局",
    "rank": 1,
    "caseId": "18",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 6,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 12,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 10,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 12,
   "docs": 14,
   "innovations": 3,
   "implementation": 11,
   "pilot": 1,
   "gradeA": 13,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "19",
  "dir": "19_江苏省宿迁市宿豫区新庄镇",
  "title": "江苏省宿迁市宿豫区新庄镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江苏省宿迁市宿豫区新庄镇",
  "batch": "第二批",
  "province": "江苏",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "81680 万元",
  "summary": "以解决耕地碎片化问题为重点推进耕地集中连片整治，新增耕地1560亩、年增加粮食产能1740吨，建成优质籼米示范基地约1.2万亩。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以江苏省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具11项（其中创新工具3项）、政策文件13份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "宿迁市自然资源和规划局",
    "policyTitle": "「县域统筹、市域流通」指标调剂政策",
    "detail": "重点健全「县域统筹、市域流通」补充耕地指标统筹调剂机制，推动跨乡镇、整县域实践；县级人民政府为责任主体，建立「政府主导、部门协同、公众参与」机制。",
    "innovation": "「县域统筹、市域流通」的两级指标调剂机制",
    "deps": [
     2,
     3,
     5
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "宿迁市宿豫区政府、新庄镇政府",
    "policyTitle": "宿迁市土地增减挂钩节余指标预期收益权质押贷款实施方案",
    "detail": "政策性金融支持增减挂钩，为整治项目融资提供市级制度安排。",
    "innovation": "",
    "deps": [
     4,
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "宿迁市宿豫区政府、新庄镇政府",
    "policyTitle": "学习运用「千万工程」经验有力有效推进乡村全面振兴的实施方案",
    "detail": "正文第三部分明确「稳妥有序开展以乡镇为基本单元的全域土地综合整治，整合盘活农村零散闲置土地」；同时部署城乡建设用地增减挂钩指标统筹（不低于省下达新增用地计划的5%）、农村闲置宅基地和闲置住宅盘活利用线上流转交易试点、农村集体经营性建设用地入市改革。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宿迁市宿豫区政府、新庄镇政府",
    "policyTitle": "耕地集中连片整治破解碎片化政策",
    "detail": "总投资81680万元，以解决耕地碎片化问题为重点，推进耕地集中连片整治，有效增加了耕地数量。截至目前，新庄镇新增耕地1560亩，年增加粮食产能1740吨。",
    "innovation": "以耕地集中连片整治为核心破解碎片化，实现产能规模化提升",
    "deps": [
     2,
     3,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宿迁市自然资源和规划局、宿豫区政府",
    "policyTitle": "高标准农田「先建后补」整镇推进政策",
    "detail": "2025年以来宿迁协同推进国土全域综合整治，统筹开展高标准农田整镇推进和「先建后补」，力争全年建设高标准农田25万亩、绿色高产高效丰产片20万亩，高效推进农田提质。",
    "innovation": "「先建后补」+整镇推进的高标准农田建设机制",
    "deps": [
     1,
     2,
     3,
     5
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宿迁市宿豫区政府、新庄镇政府",
    "policyTitle": "关于学习运用「千万工程」经验深入推进全域土地综合整治的实施办法",
    "detail": "宿迁市本级全域土地综合整治的纲领性实施办法，明确农用地整治、建设用地整理、生态修复等全域整治任务框架。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宿迁市宿豫区政府、新庄镇政府",
    "policyTitle": "高质量推进高标准农田建设",
    "detail": "明确「田、土、水、路、林、电、技、管综合治理」「高标田新增耕地指标纳入补充耕地指标库优先用于占补平衡」「溢出耕地归村集体所有」。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宿迁市宿豫区政府、新庄镇政府",
    "policyTitle": "宿迁市国土空间生态保护和修复规划（2021—2035年）",
    "detail": "市级国土空间生态修复专项规划，规划范围为宿迁市全域（8524.33平方公里），部署农用地整理、矿山生态修复、山水林田湖草沙一体化保护修复等重大工程，是全域整治生态类工程的市级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宿豫区政府、新庄镇政府",
    "policyTitle": "宿迁市宿豫区生态文明建设规划（2024—2030年）",
    "detail": "明确深化国土空间全域土地综合整治试点（依托新庄镇国家试点），系统开展农用地整理、建设用地整理和生态保护修复，并设定高标准农田建成面积由2023年41.5万亩增至2025年45万亩、2030年57.5万亩，受污染耕地安全利用率≥93%、耕地土壤有机质含量保持稳定或提升等指标，是全域整治中生态修复的区级上位规划依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "中共宿豫区委农村工作领导小组办公室",
    "policyTitle": "加强和规范农村宅基地管理利用",
    "detail": "确立宅基地有偿退出、有偿使用、联合经营、宅基地及住宅流转、闲置宅基地整治五项盘活利用机制，并规定闲置宅基地整治产生的土地增值收益全部用于农业农村，是全域整治中宅基地盘活利用的区级依据。（正文全文未在门户公开）",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "全面实施",
    "lead": "宿迁市宿豫区政府、新庄镇政府",
    "policyTitle": "加快改善农民群众住房条件推进城乡融合发展",
    "detail": "第（十七）条明确「开展以乡镇为单位的全域土地综合整治，提高新增耕地数量和质量，大力推进高标准农田建设」；第（十八）条明确增减挂钩节余指标省域内流转交易。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省政府办公厅关于转发省自然资源厅《江苏省国土空间全域综合整治方案》的通知",
    "docNo": "苏政办发〔2020〕26号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2020-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://czj.huaian.gov.cn/upload/2020-11/d2806407-b54b-45db-8693-65ef03128ce8.pdf",
    "attachUrl": "",
    "sourceNote": "核验说明：省、市门户均无该文正文页，来源为官网公开的全文附件",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "19",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江苏省全域土地综合整治项目管理办法",
    "docNo": "苏自然资发〔2025〕301号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-12-23",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c9082549b4f613b019b4f9399a0006f",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "19",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江苏省自然资源厅关于学习运用「千万工程」经验深入推进全域土地综合整治的实施意见",
    "docNo": "苏自然资函〔2025〕325号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-07-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c90825497528e63019811c7bbd4133e",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "19",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "江苏省政府办公厅关于印发《江苏省增减挂钩节余指标流转使用管理暂行办法》的通知",
    "docNo": "苏政办发〔2017〕101号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2017-07-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.jiangsu.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "19",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "全域土地综合整治项目验收规范（江苏省地方标准）",
    "docNo": "DB32/T 5048-2025",
    "issuer": "江苏省市场监督管理局（归口）",
    "date": "2025-02-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=3049356D14F03289E06397BE0A0AC3F7",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "19",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "关于印发《关于学习运用「千万工程」经验深入推进全域土地综合整治的实施办法》的通知",
    "docNo": "宿自然资规发〔2025〕84号",
    "issuer": "宿迁市自然资源和规划局（经市政府常务会议审议通过、报市委深改委审定）",
    "date": "2025-09-12",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtapp/nrglIndex.action?type=2&messageID=2c9082b59b67f090019b6820911400c9",
    "attachUrl": "",
    "sourceNote": "核验说明：原为附件直链（.pdf），已换为门户正文页",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "19",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "中共宿迁市委 宿迁市人民政府关于加快改善农民群众住房条件推进城乡融合发展的实施意见",
    "docNo": "宿发〔2018〕16号",
    "issuer": "中共宿迁市委、宿迁市人民政府",
    "date": "2018-09-19",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://suqian.gov.cn/zfb/zcfg/202208/d6fd9c2dbcc54095b1fa9259031b9727.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "19",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "市政府办公室关于高质量推进高标准农田建设的实施意见",
    "docNo": "宿政办发〔2023〕13号",
    "issuer": "宿迁市人民政府办公室",
    "date": "2023-03-24",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.suqian.gov.cn/cnsq/gbszfwj/202304/b3a2d7b4f1714cfaa96acea2fb6d4447.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "19",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "市政府办公室关于印发宿迁市土地增减挂钩节余指标预期收益权质押贷款实施方案的通知",
    "docNo": "未获取",
    "issuer": "宿迁市人民政府办公室",
    "date": "2018-06-05",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://suqian.gov.cn/zfb/zcfg/202208/1f7ac783cfff4685b439929819842791.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "19",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "中共宿迁市委 宿迁市人民政府关于印发《学习运用「千万工程」经验有力有效推进乡村全面振兴的实施方案》的通知",
    "docNo": "宿发〔2024〕3号",
    "issuer": "中共宿迁市委、宿迁市人民政府",
    "date": "2024-03-27",
    "status": "现行有效（载《宿迁市人民政府公报》2024年第3期）",
    "grade": "核验A级",
    "url": "https://suqian.gov.cn/cnsq/swszf/202404/9a2a883999544d8eb2ab89c982da278b.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "19",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "市政府办公室关于印发宿迁市国土空间生态保护和修复规划（2021—2035年）的通知",
    "docNo": "宿政办发〔2024〕35号",
    "issuer": "宿迁市人民政府办公室",
    "date": "2024-05-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.suqian.gov.cn/cnsq/szfbwj/202405/59f7b16289f64876b983825059e08504.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "19",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "宿迁市宿豫区生态文明建设规划（2024—2030年）",
    "docNo": "宿豫政发〔2025〕78号",
    "issuer": "宿豫区人民政府",
    "date": "2025-09-05 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.suqian.gov.cn/zcwjk/suyu/202509/437040340f96464ab45b52eee607017f.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：经区政府十八届三十三次常务会议审议通过（平台「有效性」字段空白）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "19",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "关于加强和规范农村宅基地管理利用的通知",
    "docNo": "宿豫委农组办发〔2021〕19号",
    "issuer": "中共宿豫区委农村工作领导小组办公室联合区农业农村局、区资规分局、区住建局印发",
    "date": "2021 年印发",
    "status": "",
    "grade": "核验B级",
    "url": "http://www.suyu.gov.cn/suyu/jyyabl/202510/d64806246ee64980a7dabe48eda4cb58.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未在门户公开",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "19",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 6,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 1,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 11,
   "provinceTools": 4,
   "nationalTools": 0,
   "provinceBasis": 4,
   "nationalBasis": 0,
   "localDocs": 9,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 11,
   "docs": 13,
   "innovations": 3,
   "implementation": 11,
   "pilot": 0,
   "gradeA": 11,
   "gradeB": 2,
   "revoked": 0,
   "mechanisms": 4
  }
 },
 {
  "id": "20",
  "dir": "20_江苏省无锡市惠山区洛社镇",
  "title": "江苏省无锡市惠山区洛社镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江苏省无锡市惠山区洛社镇",
  "batch": "第二批",
  "province": "江苏",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "2.7 亿元",
  "summary": "统筹大运河、湿地、耕地整体保护，实施5类工程16个子项目，新增耕地约9.07公顷；核心区万马村每年吸引游客超30万人次，旅游总收入超6000万元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以江苏省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具17项（其中创新工具3项）、政策文件19份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "无锡市政府、无锡市自然资源和规划局",
    "policyTitle": "市域自然资源要素调配平台统筹政策",
    "detail": "搭建全市域自然资源要素调配平台，统筹调配规划流量空间、增减挂钩建新指标、耕地占补平衡、永久基本农田保护等指标；国家试点和省级示范项目产生的增减挂钩指标、补充耕地指标和建设用地规模指标，节余可在市域范围内调剂。",
    "innovation": "全国较早建立的地市级「自然资源要素调配平台」",
    "deps": [
     3,
     6
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "进一步深化农村改革扎实做好推进乡村全面振兴2025年重点工作",
    "detail": "第（二十八）条明确「有序开展农村集体经营性建设用地入市改革，推进全域土地综合整治」「强化城乡建设用地增减挂钩指标…落实『点状用地』政策」「健全宅基地管理制度，有序探索闲置农房盘活利用」。",
    "innovation": "",
    "deps": [
     4,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "惠山区政府、洛社镇政府",
    "policyTitle": "无锡市惠山区国土空间生态保护和修复规划（2021-2035年）",
    "detail": "部署全域土地综合整治（优先在玉祁街道、前洲街道实施，2025—2030年项目）、农用地整理（推进高标准农田建设与面源污染治理）、农村建设用地整理（增减挂钩、工矿废弃地复垦、「小散远」村庄与「空心村」危房整治），并明确高标准农田新建12200亩、2025年底达120700亩、低效用地再开发608宗等指标，是全域整治中生态保护修复的区级上位规划依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "大运河湿地耕地村庄整体保护系统治理政策",
    "detail": "统筹大运河、湿地、耕地、村庄等整体保护和系统治理，实施了农用地整治、建设用地整治、生态保护修复、公共空间治理和乡村历史文化保护五类工程16个子项目，有力助推乡村振兴。",
    "innovation": "大运河文化带背景下的全要素整体保护与系统治理",
    "deps": [
     3,
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "无锡市国土空间总体规划（2021—2035年）",
    "detail": "全域整治的上位规划依据，划定永久基本农田、生态保护红线、城镇开发边界三条控制线。",
    "innovation": "",
    "deps": [
     1,
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "进一步加强耕地保护工作",
    "detail": "耕地数量质量生态「三位一体」保护、占补平衡、高标准农田建设的市级部署（时间较早，作为制度沿革依据）。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "加强整区域推进高标准农田建设",
    "detail": "将整区域推进高标准农田建设作为耕地保护重要抓手，要求田块整治、土壤改良、配套设施建设集中连片推进。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "惠山区政府、洛社镇政府",
    "policyTitle": "关于规范全区旅游民宿管理的指导意见",
    "detail": "界定旅游民宿为利用当地民居等闲置资源、经营用客房不超过4层且建筑面积不超过800㎡，并规定开办申请—前期指导—综合核查—多验合一—登记备案的开办程序，是全域整治中闲置农房盘活的区级依据。",
    "innovation": "",
    "deps": [
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "无锡市建设占用耕地耕作层剥离和再利用工作",
    "detail": "建设占用耕地「应剥尽剥、能覆尽覆」，剥离土壤定向用于土地整治、高标准农田建设、耕地质量提升与临时用地复垦，是全域整治耕地质量提升的配套工具。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "加强和规范农村宅基地管理工作",
    "detail": "设专章规范闲置宅基地和闲置住宅盘活利用、村庄整治与废旧宅基地腾退、引导适度规模集中居住，对应全域整治建设用地整理与农民相对集中居住。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "无锡市城镇低效用地再开发实施方案",
    "detail": "明确低效用地认定、再开发单元方案、归并零星土地（「三地」）可依增减挂钩政策处理后协议出让，是全域整治存量建设用地盘活与增存挂钩工具。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "无锡市产业空间优化焕新行动方案",
    "detail": "含批而未供处置、低效用地腾退、混合产业用地供应、「林耕置换」，是全域整治存量空间盘活的市级行动方案。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "惠山区政府、洛社镇政府",
    "policyTitle": "惠山区耕地整治恢复工作三年行动计划实施方案",
    "detail": "统筹开展低效建设用地整治、高标准农田建设和农用地整治三类项目工程，逐年按30%、40%、30%进度推进、到2025年底新增耕地12700亩，成立区委区政府主要领导任双组长的领导小组，保障举措含强化规划引领、落实奖补政策、实施区内代保、严格监管考核，是全域整治中耕地整治恢复的区级依据。",
    "innovation": "",
    "deps": [
     19
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "无锡市市（县）区政府耕地保护责任目标考核办法",
    "detail": "建立耕地保有量、永久基本农田、高标准农田、占补平衡、耕地提质改造的年度自查/期中/期末考核机制，是全域整治耕地保护责任落实的考核工具。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "惠山区政府、洛社镇政府",
    "policyTitle": "关于进一步优化惠山区产业用地供应管理的实施办法",
    "detail": "以80平方千米工业控制线（产业区块保护线）为蓝图深入开展产业用地资源整理行动，要求新招引项目在资源整理行动实施片区内选址、片区外选址须盘活存量低效建设用地，并规定容积率（工业上楼）与达产／周期／到期三阶段、亩均税收的监管考核，是全域整治中产业用地供应管理的区级依据。",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 16,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "全域土地综合整治项目全流程管理与验收规范",
    "detail": "依据《江苏省全域土地综合整治项目管理办法》与《全域土地综合整治项目验收规范》（江苏省地方标准），洛社镇整治项目按省级要求实行立项审核、实施监管与竣工验收全过程管理，统一验收内容、指标与判定标准，保障项目实施质量与成效可核验。",
    "innovation": "省级管理办法与地方验收标准配套，项目全流程可核验",
    "deps": [
     2,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 17,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "无锡市惠山区政府、洛社镇政府",
    "policyTitle": "生态修复与文旅业态融合发展政策",
    "detail": "实施白荡湿地、大运河两岸生态修复30.14公顷，美化乡村生态环境；挖掘历史文化资源，利用闲置农房建设村庄文化展览馆和乡村振兴馆；围绕万马白荡水利风景区和尚田小镇发展农业采摘、乡村民宿、休闲旅游等业态，每年吸引游客超30万人次，旅游总收入超6000万元。",
    "innovation": "生态修复+闲置农房活化+文旅业态的三位一体融合",
    "deps": [
     3,
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省",
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省政府办公厅关于转发省自然资源厅《江苏省国土空间全域综合整治方案》的通知",
    "docNo": "苏政办发〔2020〕26号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2020-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://czj.huaian.gov.cn/upload/2020-11/d2806407-b54b-45db-8693-65ef03128ce8.pdf",
    "attachUrl": "",
    "sourceNote": "核验说明：省、市门户均无该文正文页，来源为官网公开的全文附件",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江苏省全域土地综合整治项目管理办法",
    "docNo": "苏自然资发〔2025〕301号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-12-23",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c9082549b4f613b019b4f9399a0006f",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江苏省自然资源厅关于学习运用「千万工程」经验深入推进全域土地综合整治的实施意见",
    "docNo": "苏自然资函〔2025〕325号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-07-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c90825497528e63019811c7bbd4133e",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "江苏省政府办公厅关于印发《江苏省增减挂钩节余指标流转使用管理暂行办法》的通知",
    "docNo": "苏政办发〔2017〕101号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2017-07-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.jiangsu.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "全域土地综合整治项目验收规范（江苏省地方标准）",
    "docNo": "DB32/T 5048-2025",
    "issuer": "江苏省市场监督管理局（归口）",
    "date": "2025-02-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=3049356D14F03289E06397BE0A0AC3F7",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "无锡市人民政府办公室关于推进国土空间全域综合整治的实施意见",
    "docNo": "锡政办发〔2022〕66号",
    "issuer": "无锡市人民政府办公室",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.wuxi.gov.cn/",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "中共无锡市委 无锡市人民政府关于进一步深化农村改革扎实做好推进乡村全面振兴2025年重点工作的实施意见",
    "docNo": "未获取（市委市政府文件）",
    "issuer": "中共无锡市委、无锡市人民政府",
    "date": "2025-05-20（生成2025-04-30）",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.wuxi.gov.cn/doc/2025/05/20/4576982.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "无锡市国土空间总体规划（2021—2035年）",
    "docNo": "未获取（规划文本）",
    "issuer": "无锡市人民政府",
    "date": "2025-04-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.wuxi.gov.cn/doc/2025/04/28/4554534.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "无锡市人民政府关于进一步加强耕地保护工作的实施意见",
    "docNo": "未获取",
    "issuer": "无锡市人民政府",
    "date": "2017-03-03",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.wuxi.gov.cn/doc/2017/03/03/1273310.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "20",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "无锡市人民代表大会常务委员会关于加强整区域推进高标准农田建设的决定",
    "docNo": "未获取（人大决定）",
    "issuer": "无锡市人民代表大会常务委员会",
    "date": "2023-10-27（2023-12-22公布）",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.wuxi.gov.cn/doc/2023/12/22/4141985.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "市政府办公室关于无锡市建设占用耕地耕作层剥离和再利用工作的实施意见",
    "docNo": "锡政办发〔2016〕213号",
    "issuer": "无锡市人民政府办公室",
    "date": "2016-12-02",
    "status": "现行有效（官网状态：执行中）",
    "grade": "核验A级",
    "url": "https://www.wuxi.gov.cn/doc/2017/03/03/1273355.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "市政府办公室关于加强和规范农村宅基地管理工作的意见",
    "docNo": "锡政办发〔2021〕79号",
    "issuer": "无锡市人民政府办公室",
    "date": "2021-12-31",
    "status": "现行有效（官网状态：执行中）",
    "grade": "核验A级",
    "url": "https://www.wuxi.gov.cn/doc/2022/04/28/3655617.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "市政府办公室关于印发无锡市城镇低效用地再开发实施方案的通知",
    "docNo": "锡政办发〔2015〕62号",
    "issuer": "无锡市人民政府办公室",
    "date": "2015-03-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.wuxi.gov.cn/doc/2015/03/31/2451569.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "市政府办公室关于印发无锡市市（县）区政府耕地保护责任目标考核办法的通知",
    "docNo": "锡政办发〔2019〕59号",
    "issuer": "无锡市人民政府办公室",
    "date": "2019-10-14",
    "status": "现行有效（官网状态：执行中）",
    "grade": "核验A级",
    "url": "https://www.wuxi.gov.cn/doc/2020/03/30/2875668.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "市政府办公室关于印发无锡市产业空间优化焕新行动方案的通知",
    "docNo": "锡政办发〔2024〕52号",
    "issuer": "无锡市人民政府办公室",
    "date": "2024-11-05",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.wuxi.gov.cn/doc/2024/11/08/4501551.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "无锡市惠山区国土空间生态保护和修复规划（2021-2035年）",
    "docNo": "惠府办〔2025〕35号",
    "issuer": "惠山区人民政府办公室",
    "date": "2025-12-18 成文、2025-12-29 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.huishan.gov.cn/doc/2025/12/29/4729319.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：效力状况「有效」，有效期「长期」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "关于进一步优化惠山区产业用地供应管理的实施办法",
    "docNo": "惠府办规〔2025〕1号",
    "issuer": "惠山区人民政府办公室",
    "date": "2025-02-05 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.huishan.gov.cn/doc/2025/02/07/4725396.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：效力状况「有效」，有效期至2030-02-04",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "关于规范全区旅游民宿管理的指导意见",
    "docNo": "惠府办〔2026〕14号",
    "issuer": "惠山区人民政府办公室",
    "date": "2026-04-29 印发、2026-07-10 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.huishan.gov.cn/doc/2026/07/10/4803284.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：效力状况「有效」，有效期「长期」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "20",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 19,
    "name": "惠山区耕地整治恢复工作三年行动计划实施方案",
    "docNo": "未获取",
    "issuer": "惠山区委、区政府",
    "date": "2023-03 印发",
    "status": "",
    "grade": "核验B级",
    "url": "https://zrzy.jiangsu.gov.cn/wxhs/gtzx/gzdt/202303/t20230327_1390377.htm",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未在门户公开",
    "level": "区县",
    "levelHit": "区政府",
    "rank": 1,
    "caseId": "20",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 17,
   "provinceTools": 6,
   "nationalTools": 0,
   "provinceBasis": 6,
   "nationalBasis": 0,
   "localDocs": 15,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 17,
   "docs": 19,
   "innovations": 4,
   "implementation": 17,
   "pilot": 0,
   "gradeA": 17,
   "gradeB": 2,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "21",
  "dir": "21_浙江省台州市温岭市横峰街道",
  "title": "浙江省台州市温岭市横峰街道全域土地综合整治政策激励工具箱（1.0版）",
  "name": "浙江省台州市温岭市横峰街道",
  "batch": "第二批",
  "province": "浙江",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "围绕「两城两湖」战略推进全域改造，村庄用地平均容积率由0.72提高到2.65，规划工业产业园8个，吸引「回力」自动化制鞋等优质项目落户。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以浙江省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具14项（其中创新工具3项）、政策文件16份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "温岭市人民政府办公室关于进一步推进土地整治工作的若干政策意见",
    "detail": "界定土地整治基本内容（补充耕地、建设用地复垦、土地综合整治、永久基本农田集中连片整治），规定补充耕地补助标准（水田指标6万元/亩、旱地3.5万元/亩，后期管护水田3万元/亩）、增减挂钩指标市级统筹30%与自留70%（市统筹补助水田40万元/亩、旱地20万元/亩）及省级土地综合整治项目补助，是全域整治中土地整治推进与补助的区级依据。",
    "innovation": "",
    "deps": [
     6,
     12
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "产业平台集聚与容积率提升政策",
    "detail": "全面推动工业用地入产业平台、企业入园区、生产进厂房、职工住宿舍，规划工业产业园8个，总用地面积约615亩，建筑面积约101万平方米；对13个村开展城乡风貌整治，村庄用地平均容积率由原先的0.72提高到2.65。",
    "innovation": "「工业入平台+村庄风貌整治」双轮驱动，村庄容积率提升3.7倍",
    "deps": [
     1,
     2
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "河流水系全面优化与市政基础设施统一实施政策",
    "detail": "通过拓展骨干河道、增设连接河道、集中布设调蓄水域、加强水污染治理等方式，境内的200多条河流水系得到全面优化；统一实施市政基础设施建设，建设四纵三横的主干路网15.6公里，开通市域铁路S1线，打造「10分钟公共服务圈」。",
    "innovation": "200多条河流水系全域优化+S1线轨道与「10分钟公共服务圈」配套",
    "deps": [
     1,
     2
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "台州市全域土地综合整治三年行动计划（2018—2020年）",
    "detail": "全文以「全域土地综合整治」为主线，部署村庄整治、「二改一还」农地整治、城镇低效用地再开发、矿山环境生态综合治理「四项子行动」，并设市全域土地综合整治工作领导小组，列入市对县考核；附表大量部署温岭市任务。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "加快推进农业农村高质量发展促进乡村全面振兴",
    "detail": "乡村振兴用地保障、耕地保护与高标准农田建设部署。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "台州市耕地保护利用",
    "detail": "明确未来五年耕地保护目标与重点工程，「统筹协调土地综合整治、国土生态…」。",
    "innovation": "",
    "deps": [
     5,
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "台州市全域低效用地再开发三年行动方案（2025—2027年）",
    "detail": "明确「提升全域土地节约集约利用水平」，含旧城镇、旧厂矿、旧村庄再开发与片区开发、混合用地、复合利用等机制。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "温岭市村级低效用地整治三年行动计划（2024-2026年）",
    "detail": "确定到2026年底完成村级低效用地整治1000宗7000亩的目标，部署村级留用地开发建设（村留地开发102宗1517.1亩、三年清零，可集体使用／划拨／公开出让＋村集体回购）与低效工业用地整治提升（整治低效企业1000家、盘活低效用地6000亩），并结合农村全域土地整治推进，是全域整治中低效用地整治的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "温岭市农村宅基地使用和农村住房建设管理办法",
    "detail": "宅基地使用管理实行「一户一宅、限额用地、男女平等、拆旧建新」，要求农房建设积极盘活存量建设用地、优先利用原有宅基地与村内空闲地，并规定每户宅基地用地限额（1-2人55㎡、3-4人85㎡、5人及以上110㎡），是全域整治中宅基地及住房建设管理的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "温岭市自然资源和规划局、温岭市财政局",
    "policyTitle": "温岭市自然资源和规划局 温岭市财政局关于调整耕地保护补偿政策",
    "detail": "确定耕地保护补偿范围为现状耕地、永久基本农田与高标准农田已套合部分优先补偿，补偿标准为永久基本农田40元/亩、一般耕地30元/亩，年度新增（垦造或耕地功能恢复）耕地按200元/亩补偿，资金主要用于耕地保护管理、耕地质量提升、农田基础设施管护与修缮、田长制建设，是全域整治中耕地保护补偿的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "温岭市人民政府关于重新公布征地区片综合地价标准",
    "detail": "明确征地区片综合地价包括土地补偿费和安置补助费，征收集体土地按区片综合地价标准执行，是全域整治中土地权属调整与征收补偿的区级价格依据。（正文页未检索到，补偿口径见征地补偿安置方案官方附件的明确引用，文号与发布页待补）",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "试点推进",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "「两城两湖」战略与九龙湖核心区打造政策",
    "detail": "围绕两城两湖战略，打造九龙湖城市核心区，划定改造土地综合整治实验区，吸引「回力」自动化制鞋等优质项目落户，形成4-5家年产值5000万元以上、发展态势良好的鞋企群。",
    "innovation": "以城市战略为引领划定整治实验区，形成优质产业集群",
    "deps": [
     4
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "台州市坚决制止耕地「非农化」防止耕地「非粮化」稳定发展粮食生产实施方案",
    "detail": "耕地保护底线管控工具（永久基本农田、耕地「非农化」监管），为整治项目提供耕地保护约束条件。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "温岭市政府、横峰街道办事处",
    "policyTitle": "土地综合整治全过程管理",
    "detail": "依据《浙江省土地综合整治全过程管理办法（试行）》，横峰街道整治项目按省级全过程管理要求，规范项目立项、规划设计、实施监管、竣工验收与后期管护各环节，明确各级职责与流程节点，是本案例项目管理的省级制度依据。",
    "innovation": "覆盖立项到后期管护全环节的全过程管理制度",
    "deps": [
     3
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见",
    "docNo": "浙政办发〔2018〕80号",
    "issuer": "浙江省人民政府办公厅",
    "date": "2018-08-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2018/8/15/art_1229620738_2394685.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "浙江省人民政府关于跨乡镇开展土地综合整治试点的意见",
    "docNo": "浙政发〔2022〕32号",
    "issuer": "浙江省人民政府",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.zj.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "浙江省自然资源厅关于印发《浙江省土地综合整治全过程管理办法（试行）》的通知",
    "docNo": "浙自然资规〔2023〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2024-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2024/1/3/art_1229098242_2506965.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见",
    "docNo": "浙自然资〔2025〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2025-11-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229098242_2579170.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室关于印发2020年乡村全域土地综合整治与生态修复工程名单的通知",
    "docNo": "浙保耕办〔2020〕12号",
    "issuer": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室（浙江省自然资源厅代章）",
    "date": "2020-09-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2021/9/6/art_1229196455_2353233.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "浙江省国土资源厅关于做好城乡建设用地增减挂钩节余指标调剂使用管理工作的通知",
    "docNo": "浙土资规〔2018〕11号",
    "issuer": "浙江省国土资源厅",
    "date": "2018-10-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2018/10/18/art_1229098242_2322294.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "台州市人民政府办公室关于印发台州市全域土地综合整治三年行动计划（2018—2020年）的通知",
    "docNo": "台政办发〔2018〕27号",
    "issuer": "台州市人民政府办公室",
    "date": "2018-05-07",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zjtz.gov.cn/art/2018/5/9/art_1229564401_1629813.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "台州市人民政府办公室关于印发台州市全域低效用地再开发三年行动方案（2025—2027年）的通知",
    "docNo": "未获取",
    "issuer": "台州市人民政府办公室",
    "date": "2025-04-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zjtz.gov.cn/art/2025/5/9/art_1229564401_1718453.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "台州市人民政府办公室关于印发台州市坚决制止耕地「非农化」防止耕地「非粮化」稳定发展粮食生产实施方案的通知",
    "docNo": "未获取",
    "issuer": "台州市人民政府办公室",
    "date": "2021-05-26",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.zjtz.gov.cn/art/2021/5/26/art_1229564401_1641492.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "21",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "台州市人民政府关于加快推进农业农村高质量发展促进乡村全面振兴的实施意见",
    "docNo": "未获取",
    "issuer": "台州市人民政府",
    "date": "2024-12-02",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.zjtz.gov.cn/art/2024/12/2/art_1229564400_1715908.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "21",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "台州市耕地保护利用规划（2023—2027年）（公示稿）",
    "docNo": "未获取（公示稿）",
    "issuer": "台州市自然资源和规划局、台州市农业农村局",
    "date": "2023-12-01",
    "status": "",
    "grade": "核验B级",
    "url": "https://zrzy.zjtz.gov.cn/art/2023/12/1/art_1229577955_3906510.html",
    "attachUrl": "",
    "sourceNote": "文书形态：公示稿（公开征求意见，尚未正式批复）",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "21",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "温岭市人民政府办公室关于进一步推进土地整治工作的若干政策意见",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "温岭市人民政府办公室",
    "date": "2025-06-13 成文、2025-06-23 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.wl.gov.cn/art/2025/6/23/art_1229299718_1719069.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自发布之日起施行（同时废止温政办发〔2021〕7号、温政办发〔2022〕14号、温政办发〔2022〕33号）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "温岭市自然资源和规划局 温岭市财政局关于调整耕地保护补偿政策的通知",
    "docNo": "温自然资规发〔2025〕36号",
    "issuer": "温岭市自然资源和规划局、温岭市财政局",
    "date": "2025-09-11 印发、2025-09-09 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.wl.gov.cn/art/2025/9/9/art_1229300710_1723622.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自发文之日起施行，2025 年度耕地保护以奖代补资金按本文件执行",
    "level": "市",
    "levelHit": "市财政局",
    "rank": 2,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "温岭市人民政府办公室关于印发温岭市村级低效用地整治三年行动计划（2024-2026年）的通知",
    "docNo": "未标注（附件名为「温政办函 7」，完整文号待核）",
    "issuer": "温岭市人民政府办公室",
    "date": "2024-05-22 成文、2024-06-04 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.wl.gov.cn/art/2024/6/4/art_1229558470_1693652.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户未标注效力状态",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "温岭市人民政府关于印发温岭市农村宅基地使用和农村住房建设管理办法的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "温岭市人民政府",
    "date": "2026-09-23 成文、2026-09-24 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.wl.gov.cn/col/col1229296228/art/2026/art_791e5b39aeaf4f18a24cc38e68c7b608.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自2027-01-01 起施行（尚未生效），同时废止温政发〔2018〕35号、温政发〔2021〕16号",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "21",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "温岭市人民政府关于重新公布征地区片综合地价标准的通知",
    "docNo": "未获取（正文页未检索到；补偿口径见征地补偿安置方案官方附件明确引用）",
    "issuer": "温岭市人民政府",
    "date": "未获取",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.wl.gov.cn/col/col1229307275/art/2026/art_6ec058556f904afd8af24f04dfbb7246.html",
    "attachUrl": "",
    "sourceNote": "文书形态：效力佐证为市资规局征地补偿安置方案官方附件（2026-09-15）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "21",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 3,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 14,
   "provinceTools": 6,
   "nationalTools": 0,
   "provinceBasis": 6,
   "nationalBasis": 0,
   "localDocs": 10,
   "provinceDocs": 6,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 14,
   "docs": 16,
   "innovations": 4,
   "implementation": 12,
   "pilot": 2,
   "gradeA": 12,
   "gradeB": 4,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "22",
  "dir": "22_安徽省芜湖市无为市开城镇",
  "title": "安徽省芜湖市无为市开城镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "安徽省芜湖市无为市开城镇",
  "batch": "第二批",
  "province": "安徽",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "6450 万元",
  "summary": "建立「财政+社会资本」筹融资机制，建成高标准农田3391亩，撤并12个自然村、搬迁312户，产生增减挂钩指标308亩、占补平衡新增耕地指标139亩。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以安徽省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具13项（其中创新工具3项）、政策文件13份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "无为市政府、开城镇政府",
    "policyTitle": "高标准农田建设与耕地连片化政策",
    "detail": "建设高标准农田3391亩，新增耕地446.69亩，减少基础服务设施建设用地168.4亩；原先零散化、碎片化的土地得以集中连片进行规模化生产，使耕地资源产生最大化经济效益。",
    "innovation": "减少基础服务设施用地与新增耕地同步推进，提升土地综合效益",
    "deps": [
     2
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "无为市政府、开城镇政府",
    "policyTitle": "矿山生态修复与生态公园建设政策",
    "detail": "修复废弃矿山500亩，建设生态公园，带动乡村旅游发展；通过增减挂、新增耕地、高标准农田等项目实施，确保数量不减少、质量不降低、布局更加集中连片、生态有改善。",
    "innovation": "废弃矿山修复与生态公园、乡村旅游联动，实现「还绿于山、还景于民」",
    "deps": [
     1
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "无为市政府、开城镇政府",
    "policyTitle": "芜湖市国土空间生态修复规划（2021—2035年）",
    "detail": "明确「全域土地整治」「稳步推进全域国土综合整治」，部署农用地整理（补充耕地、耕地质量提升）、城镇建设用地整治、矿山生态修复等五大工程。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "无为市政府、开城镇政府",
    "policyTitle": "进一步推进土地整治工作",
    "detail": "以高标准农田建设、村庄整治、城乡建设用地增减挂钩和工矿废弃地复垦利用等土地整治项目为核心，明确新增耕地任务。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "无为市农业农村局",
    "policyTitle": "无为市高标准农田规划（2021—2030年）",
    "detail": "规划从2025年起计划投资4.94亿元，对19万亩老旧高标准农田实施改造提升、重点解决灌排设施老化等问题，是全域整治中高标准农田建设的区级规划依据。（正文全文未公开，效力与内容以市农业农村局政协提案答复函引用佐证）",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "无为市政府、开城镇政府",
    "policyTitle": "芜湖市低效用地再开发试点实施方案",
    "detail": "第16条「稳妥有序推进镇村土地集约化整治」，明确建设用地复垦、农用地整理、未利用地开发、集中连片整治、人居环境提升，盘活农村低效集体建设用地、闲置宅基地、村庄空闲地；第17条探索「生态修复主体与土地使用权一并确定」。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "无为市政府、开城镇政府",
    "policyTitle": "芜湖市批而未供、闲置和工业低效用地处置三年攻坚实施方案（2022—2024年）",
    "detail": "存量建设用地盘活（增存挂钩、低效用地清理），是建设用地整理类整治工具的市级制度安排。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "无为市政府、开城镇政府",
    "policyTitle": "无为市全域土地综合整治和生态修复项目农户搬迁补偿安置指导意见",
    "detail": "规定自然村（10户及以上）或各村民小组农户书面申请搬迁同意率达80%以上且符合连片复垦条件方可启动项目，农村集体经济组织（村委会／社区居委会）为搬迁与集中安置的组织实施单位、镇市两级分设指挥部，并提供产权调换、货币补偿、二者结合、购买中心城区商品房安置等安置方式，是全域整治中农户搬迁补偿安置的区级依据。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "无为市政府、开城镇政府",
    "policyTitle": "无为市农村集体经营性建设用地入市实施办法（试行）",
    "detail": "明确全域土地综合整治范围内的农村集体经营性建设用地入市参照国家级工具箱（1.0版）附表第3份执行，即结合整治工作将零星、插花的小块存量集体建设用地整治归并为大块宗地，依据国土空间规划属于经营性用途的允许入市，是本案例最直接的入市区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "无为市政府、开城镇政府",
    "policyTitle": "「财政+社会资本」融资机制政策",
    "detail": "建立「财政+社会资本」融资机制，通过政府奖补、社会资本参与，吸引1.2亿元资金用于生态修复；项目修复废弃矿山500亩，建设生态公园，带动乡村旅游发展。",
    "innovation": "「财政奖补+社会资本」双轮驱动，吸引1.2亿元社会资金参与矿山生态修复",
    "deps": [
     1
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 11,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "无为市政府、开城镇政府",
    "policyTitle": "芜湖市田长制工作",
    "detail": "耕地数量、质量、生态「三位一体」保护与田长制网格化监管，为整治提供耕地保护责任机制。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "无为市农业农村局",
    "policyTitle": "无为市高标准农田建设操作规程",
    "detail": "按「谁受益，谁管护」原则建立和完善管护体系、落实管护责任，确保建成项目长期发挥效益，是全域整治中高标准农田建后管护的区级依据。（正文全文未公开，内容见市农业农村局政协提案答复函引用）",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "无为市政府、开城镇政府",
    "policyTitle": "实施方案编制大纲与省级审查要点",
    "detail": "依据《安徽省全域土地综合整治工程实施方案编制大纲（试行）》与《安徽省全域土地综合整治实施方案省级审查要点（试行）》，开城镇整治实施方案按省级统一大纲编制，并按省级审查要点逐项自查后报审，规范方案内容深度与审查口径。",
    "innovation": "省级编制大纲与审查要点配套，方案编制与审查口径统一",
    "deps": [
     3,
     4
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "安徽省人民政府办公厅关于开展全域土地综合整治试点工作的实施意见",
    "docNo": "皖政办〔2020〕15号",
    "issuer": "安徽省人民政府办公厅",
    "date": "2020-10-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ah.gov.cn/public/1681/553918871.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "22",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "安徽省自然资源厅关于印发《安徽省城乡建设用地增减挂钩节余指标有偿调剂管理办法》的通知",
    "docNo": "皖自然资〔2021〕165号",
    "issuer": "安徽省自然资源厅（经省政府同意）",
    "date": "2021-12-03",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.ah.gov.cn/xwdt/tzgg/146252221.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省政府",
    "rank": 3,
    "caseId": "22",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "安徽省自然资源厅关于印发《安徽省全域土地综合整治工程实施方案编制大纲（试行）》的通知",
    "docNo": "皖自然资修函〔2025〕18号",
    "issuer": "安徽省自然资源厅",
    "date": "2025-03-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.ah.gov.cn/public/7021/149865971.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "22",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "安徽省自然资源厅关于印发《安徽省全域土地综合整治实施方案省级审查要点（试行）》的通知",
    "docNo": "皖自然资修函〔2025〕61号",
    "issuer": "安徽省自然资源厅",
    "date": "2025-08-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.guoturen.com/wenku-17678.html",
    "attachUrl": "",
    "sourceNote": "核验说明：正文见第三方完整转载，省厅官网未公开",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "22",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "芜湖市人民政府关于印发芜湖市低效用地再开发试点实施方案的通知",
    "docNo": "未获取（经2024-02-04市政府第61次常务会审议通过）",
    "issuer": "芜湖市人民政府",
    "date": "2024-02-06",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.wuhu.gov.cn/openness/zfgb/39156315.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "22",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "芜湖市人民政府办公室关于印发芜湖市国土空间生态修复规划（2021—2035年）的通知",
    "docNo": "芜政办〔2025〕2号",
    "issuer": "芜湖市人民政府办公室",
    "date": "2025-01-09",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.wuhu.gov.cn/openness/public/6596211/39792325.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "22",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "芜湖市人民政府关于印发芜湖市批而未供、闲置和工业低效用地处置三年攻坚实施方案（2022—2024年）的通知",
    "docNo": "芜政〔2022〕46号",
    "issuer": "芜湖市人民政府",
    "date": "2022-06-15",
    "status": "不确定（三年攻坚期已届满）",
    "grade": "核验B级",
    "url": "https://www.wuhu.gov.cn/openness/zfgb/34908821.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "22",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "芜湖市人民政府办公室关于进一步推进土地整治工作的实施意见",
    "docNo": "未获取",
    "issuer": "芜湖市人民政府办公室",
    "date": "2018-07-17",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.wuhu.gov.cn/openness/public/6596211/17189121.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "22",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "芜湖市田长制工作实施方案",
    "docNo": "未获取",
    "issuer": "中共芜湖市委、芜湖市人民政府",
    "date": "2021-11",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.wuhu.gov.cn/xwzx/zwyw/32691831.html",
    "attachUrl": "",
    "sourceNote": "核验说明：方案正文未公开，本页为市政府门户发布的解读报道，可核验其名称与核心内容",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "22",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "无为市人民政府办公室关于印发无为市全域土地综合整治和生态修复项目农户搬迁补偿安置指导意见的通知",
    "docNo": "政办〔2025〕8号（门户文号栏原文如此）",
    "issuer": "无为市人民政府办公室",
    "date": "2025-08-13 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ww.gov.cn/zwgk/zfgb/12238874.html",
    "attachUrl": "",
    "sourceNote": "文书形态：2025-09-28 政府公报刊发；现行有效（经市政府第 44 次常务会议审议通过，2025-06-12）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "22",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "无为市人民政府办公室关于印发无为市农村集体经营性建设用地入市实施办法（试行）的通知",
    "docNo": "政办〔2026〕5号",
    "issuer": "无为市人民政府办公室",
    "date": "2026-06-05 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ww.gov.cn/openness/public/6603381/41205586.html",
    "attachUrl": "",
    "sourceNote": "文书形态：2026-06-17 发布；页面「有效性」字段标注「有效」（经市政府第 55 次常务会议审议通过）",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "22",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "无为市高标准农田规划（2021—2030年）",
    "docNo": "未获取（区农业农村局制定，门户未公开文号）",
    "issuer": "无为市农业农村局",
    "date": "2025 年前已制定并实施",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.ww.gov.cn/openness/public/6603381/40218235.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未公开，效力与内容以市农业农村局政协提案答复函引用佐证（发布页待补）",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "22",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "无为市高标准农田建设操作规程",
    "docNo": "未获取（区农业农村局制定，门户未公开文号）",
    "issuer": "无为市农业农村局",
    "date": "2025 年前已出台",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.ww.gov.cn/openness/public/6603381/40218235.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未公开（发布页待补）",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "22",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 4,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 3,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 13,
   "provinceTools": 4,
   "nationalTools": 0,
   "provinceBasis": 4,
   "nationalBasis": 0,
   "localDocs": 9,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 13,
   "docs": 13,
   "innovations": 4,
   "implementation": 10,
   "pilot": 3,
   "gradeA": 7,
   "gradeB": 6,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "23",
  "dir": "23_福建省莆田市荔城区木兰溪南岸",
  "title": "福建省莆田市荔城区木兰溪南岸全域土地综合整治政策激励工具箱（1.0版）",
  "name": "福建省莆田市荔城区木兰溪南岸",
  "batch": "第二批",
  "province": "福建",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "由自然资源部2021年部署的新度镇、黄石镇2个试点整合而成，复垦无序村庄建设用地与零散工业厂房用地，打造「1个万亩方、2个千亩方」高标准生态良田并拟全部划入永久基本农田；整治后两镇耕地质量等别分别提升0.1等、0.3等。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以福建省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具13项（其中创新工具3项）、政策文件13份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "莆田市荔城区政府、莆田市自然资源局",
    "policyTitle": "永久基本农田集中隔离布局优化政策",
    "detail": "整治后永久基本农田布局全部集中连片且与村庄、城镇功能区隔离，基本农田集中区成为最适宜的农业生产功能区，占用意愿明显下降，监管效率显著提高；通过空间腾挪、集中安置、产业集聚等建设用地整治行动，盘活低效用地1416亩，腾退建设用地997亩，为新产业新业态项目发展提供用地304亩。",
    "innovation": "永久基本农田与村庄城镇功能区「物理隔离」的布局优化创新",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "莆田市荔城区政府、新度镇政府、黄石镇政府",
    "policyTitle": "木兰溪流域系统治理与高标准生态良田建设政策",
    "detail": "对山水林田河村等进行综合统筹和全域整治，加大「三生」空间格局优化调整力度，加强生态化、集约化、品质化改造；整治后形成「1个万亩方、2个千亩方」的高标准生态良田，两个镇耕地质量平均等别分别提升0.1等和0.3等。",
    "innovation": "木兰溪流域治理理念下的「万亩方+千亩方」高标准生态良田格局",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "莆田市荔城区政府、莆田市自然资源局",
    "policyTitle": "进一步盘活低效工业用地促进绿色高质量发展",
    "detail": "低效工业用地盘活支撑工具，工业用地提质增效与存量挖潜。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "莆田市荔城区政府、莆田市自然资源局",
    "policyTitle": "莆田市高标准农田建设专项规划（2021-2030年）",
    "detail": "高标准农田建设支撑工具，全市高标准农田布局与任务安排。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "莆田市荔城区政府、莆田市自然资源局",
    "policyTitle": "莆田市国土空间生态修复规划（2021-2035年）",
    "detail": "国土空间生态修复上位专项规划，含农用地整治与生态修复工程部署。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "荔城区政府",
    "policyTitle": "莆田市荔城区人民政府关于公布行政规范性文件清理情况的决定",
    "detail": "对2025-01-01前发布的区政府及区政府办公室行政规范性文件全面清理，76件继续有效、27件宣布废止或宣告失效并附继续有效与废止／失效目录，是反查本案例各政策件现行效力的最直接依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "莆田市荔城区政府、莆田市自然资源局",
    "policyTitle": "莆田市低效用地再开发试点工作实施方案",
    "detail": "正文第5条明确「结合全域土地综合整治归并零星集体建设用地，属于经营性用途的允许入市，探索『国有+集体』组合供应」；「深入践行木兰溪治理理念」，试点范围为莆田市全域。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "莆田市荔城区政府、莆田市自然资源局",
    "policyTitle": "莆田市低效闲置土地处置工作导则",
    "detail": "批而未供、供而未建、建有余地等低效闲置土地全生命周期分类处置，含「增存挂钩」、边角地夹心地结合城镇低效用地一并开发。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "荔城区政府",
    "policyTitle": "莆田市荔城区农村集体经营性建设用地入市收益分配指导意见",
    "detail": "明确农村集体经营性建设用地入市收益分配规则，是全域整治中集体经营性建设用地入市的区级依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "荔城区政府",
    "policyTitle": "莆田市荔城区人民政府关于进一步规范农村建房审批加强批后监管",
    "detail": "依据莆政综〔2020〕58号、莆自然资规〔2025〕5号制定，明确农村集体经济组织成员身份确认原则及不予认定的7类情形（须经成员〔代表〕大会三分之二以上表决、公示7天），并规定宅基地申请条件遵循「以成员认定、以户取得、限定面积」原则、严格落实「一户一宅」，是全域整治中宅基地及住房建设管理的区级依据。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "荔城区政府",
    "policyTitle": "荔城区城区片区改造工业用地收回收储实施办法（修订版）",
    "detail": "规范城区片区改造中工业用地的收回收储，是全域整治中低效用地再开发与工业用地有机更新的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "莆田市荔城区政府、莆田市自然资源局",
    "policyTitle": "「整治+」绿色木兰溪品牌与乡村休闲产业政策",
    "detail": "推进「旅游+生态+文化」的绿色木兰溪品牌打造，推进康养农业、观光农业、研学等乡村休闲旅游产业发展，提升农业空间复合利用价值；整治形成的集体经济产业园为本地传统产业升级提供支撑平台，通过土地资产化运营支持壮大集体经济。",
    "innovation": "「整治+」推动「旅游+生态+文化」品牌化与农业空间复合利用",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "试点推进",
    "lead": "荔城区政府",
    "policyTitle": "莆田市荔城区房屋征收补偿房票安置实施细则（试行）",
    "detail": "依据闽建房〔2023〕5号制定，拓宽国有土地、集体土地上房屋征收补偿安置渠道、满足被征收人多样化需求并推行房票安置，是全域整治中土地权属调整与征收补偿的区级依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "福建省自然资源厅关于学习运用「千万工程」经验深入推进全域土地综合整治工作的实施意见",
    "docNo": "闽自然资规〔2025〕1号",
    "issuer": "福建省自然资源厅（经省政府同意）",
    "date": "2025-07-04",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.fujian.gov.cn/zwgk/zfxxgkzl/zfxxgkml/flfgjgfxwj/202507/t20250704_6962100.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省政府",
    "rank": 3,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "福建省自然资源厅等六部门关于印发《福建省补充耕地项目管理办法（试行）》的通知",
    "docNo": "闽自然资规〔2023〕号",
    "issuer": "福建省自然资源厅等六部门",
    "date": "2023-07-06",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.fujian.gov.cn/zwgk/zfxxgkzl/zfxxgkml/flfgjgfxwj/202307/t20230719_6209938.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "莆田市自然资源局 莆田市农业农村局关于开展建设占用耕地耕作层土壤剥离再利用工作的实施意见",
    "docNo": "莆自然资〔2022〕139号",
    "issuer": "莆田市自然资源局、莆田市农业农村局",
    "date": "2022-04-08",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyj.putian.gov.cn/zfxxgk/fdzdgknr/tdgl_40374/202204/t20220428_1722028.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "莆田市人民政府关于印发莆田市低效用地再开发试点工作实施方案的通知",
    "docNo": "莆政综〔2025〕22号",
    "issuer": "莆田市人民政府",
    "date": "2025-10-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.putian.gov.cn/zwgk/zxwjs/szfwj/202511/t20251119_2032947.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "莆田市人民政府关于进一步盘活低效工业用地促进绿色高质量发展的通知",
    "docNo": "莆政规〔2024〕4号",
    "issuer": "莆田市人民政府",
    "date": "2024-03-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.putian.gov.cn/zfxxgk/zc/xzgfxwj/202403/t20240325_1910002.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "莆田市自然资源局关于印发《莆田市低效闲置土地处置工作导则》的通知",
    "docNo": "未获取（经市政府同意）",
    "issuer": "莆田市自然资源局",
    "date": "2025-03-25",
    "status": "现行有效（有效期十年）",
    "grade": "核验A级",
    "url": "https://zrzyj.putian.gov.cn/xxgk/flfg/202504/t20250401_1988206.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "莆田市农业农村局关于印发莆田市高标准农田建设专项规划（2021-2030年）的通知",
    "docNo": "莆农综〔2022〕35号",
    "issuer": "莆田市农业农村局",
    "date": "2022-03-23",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.putian.gov.cn/zfxxgk/bmzfxxgk/ptnyj/zfxxgk/fdzdgknr/nyfzgh/202204/t20220415_1718889.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "《莆田市国土空间生态修复规划（2021—2035年）》",
    "docNo": "未获取（规划公布）",
    "issuer": "莆田市自然资源和规划局",
    "date": "2025-05-09",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.putian.gov.cn/zwgk/ghxx/qygh/202505/t20250509_1994316.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "23",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "莆田市荔城区人民政府办公室关于印发莆田市荔城区农村集体经营性建设用地入市收益分配指导意见的通知",
    "docNo": "荔政办规〔2024〕1号",
    "issuer": "莆田市荔城区人民政府办公室",
    "date": "2024-10-15 成文、2024-10-24 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ptlc.gov.cn/zfxxgkzl/zfxxgkml/fggz/202410/t20241024_1950334.htm",
    "attachUrl": "",
    "sourceNote": "文书形态：门户未标注效力状态（正文以附件发布）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "莆田市荔城区人民政府关于进一步规范农村建房审批加强批后监管的通知",
    "docNo": "荔政规〔2026〕2号",
    "issuer": "莆田市荔城区人民政府",
    "date": "2026-05-29 成文、2026-06-11 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ptlc.gov.cn/zfxxgkzl/zfxxgkml/fggz/202606/t20260611_2220370.htm",
    "attachUrl": "",
    "sourceNote": "文书形态：门户未标注效力状态",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "莆田市荔城区人民政府关于印发荔城区城区片区改造工业用地收回收储实施办法（修订版）的通知",
    "docNo": "荔政规〔2025〕3号",
    "issuer": "莆田市荔城区人民政府",
    "date": "2025-09-28 成文、2025-10-14 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ptlc.gov.cn/zfxxgkzl/zfxxgkml/fggz/202510/t20251014_2025368.htm",
    "attachUrl": "",
    "sourceNote": "文书形态：门户未标注效力状态",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "莆田市荔城区人民政府关于印发莆田市荔城区房屋征收补偿房票安置实施细则（试行）的通知",
    "docNo": "荔政规〔2025〕2号",
    "issuer": "莆田市荔城区人民政府",
    "date": "2025-09-03 成文、2025-09-19 发布",
    "status": "有效期 24 个月",
    "grade": "核验A级",
    "url": "https://www.ptlc.gov.cn/zfxxgkzl/zfxxgkml/fggz/202509/t20250919_2019325.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "莆田市荔城区人民政府关于公布行政规范性文件清理情况的决定",
    "docNo": "荔政规〔2025〕4号",
    "issuer": "莆田市荔城区人民政府",
    "date": "2025-10-28 成文、2025-11-05 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ptlc.gov.cn/zfxxgkzl/zfxxgkml/fggz/202511/t20251105_2030154.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "23",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 5,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 13,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 11,
   "provinceDocs": 2,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 13,
   "docs": 13,
   "innovations": 3,
   "implementation": 11,
   "pilot": 2,
   "gradeA": 12,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 4
  }
 },
 {
  "id": "24",
  "dir": "24_江西省宜春市铜鼓县大塅镇",
  "title": "江西省宜春市铜鼓县大塅镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江西省宜春市铜鼓县大塅镇",
  "batch": "第二批",
  "province": "江西",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "实施耕地数量、质量、生态「三位一体」保护提升工程，建成高标准农田近6500亩，改造河堤保护耕地约1600亩，腾退盘活土地560余亩，种植有机白茶近万亩、林下黄精6000余亩。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以江西省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具16项（其中创新工具3项）、政策文件16份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "铜鼓县政府、铜鼓县自然资源局",
    "policyTitle": "永久基本农田储备区与指标奖励政策",
    "detail": "探索林地空间置换、建立永久基本农田储备区等机制，确保整治区域内耕地数量有增加、质量有提高、生态有改善、布局有优化；鼓励和服务村集体利用增减挂钩节余指标参与乡村振兴项目，把指标资源转化为发展资产；通过农用地整理、建设用地整理得到的耕地占补平衡指标和建设用地流量指标按比例奖励给乡镇及村委会。",
    "innovation": "永久基本农田储备区机制+指标按比例奖励乡镇村，激励基层积极性",
    "deps": [
     1,
     2,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "宜春市补充耕地项目管理实施细则（试行）",
    "detail": "补充耕地（占补平衡）项目管理支撑工具，规范土地开发补充耕地项目全流程，直接服务整治新增耕地指标形成。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "铜鼓县人民政府办公室印发关于进一步加强耕地保护工作的实施办法（试行）",
    "detail": "明确落实「占补平衡」补充耕地（建设占用多少耕地即通过土地开发整治项目补充数量质量相当的耕地，新增耕地产生的占补平衡指标用于建设用地占用耕地报批）与落实「进出平衡」补充耕地两类情形，是全域整治中补充耕地指标与耕地保护补偿的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "严格落实高标准农田建设项目耕地保护有关工作",
    "detail": "高标准农田建设中的耕地保护要求，农用地整治与耕地质量提升。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "宜春市2024年度耕地保护领域攻坚行动工作",
    "detail": "含耕作层剥离再利用、耕地恢复、铜鼓县「山上换山下」试点等任务，直接对应耕地保护与农用地布局优化工具。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "宜春市地质灾害防治规划（2021—2035年）",
    "detail": "与国土空间生态修复相关（地质环境治理），与整治的生态修复工具间接相关，契合度较弱。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "宜春市国土空间总体规划（2021—2035年）",
    "detail": "第11章专设「国土综合整治与生态修复」，部署土地综合整治、矿山生态修复、低效用地再开发及永久基本农田特殊保护。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "加快推进废弃矿山和近年关闭矿山环境治理恢复工作",
    "detail": "明确以增减挂钩、土地开发整治立项完成矿山土地复垦，并鼓励社会资本参与废弃矿山治理，直接对接全域整治复垦与生态修复工具。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "铜鼓县自然资源局",
    "policyTitle": "铜鼓县国土空间生态修复规划（2021-2035年）",
    "detail": "县域国土空间生态修复的纲领性规划，是全域整治中生态保护修复的区级上位专项规划依据。（正文以附件形式发布，门户条目页为现行有效入口）",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "铜鼓县开展「节地增效」行动实施方案",
    "detail": "依据《江西省人民政府关于实施「节地增效」行动的指导意见》（赣府发〔2019〕5号）与《宜春市人民政府关于开展「节地增效」行动的实施意见》（宜府发〔2019〕26号）制定，以「节地增效」为载体助推国土空间规划和管理、完善土地利用制度、优化土地资源配置，是全域整治中低效用地再开发与工业用地有机更新的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "铜鼓县农村产权交易中心建设实施方案",
    "detail": "为推进农村集体产权制度改革、培育和发展全县各级农村产权交易市场，决定成立铜鼓县农村产权交易中心，是全域整治中集体经营性建设用地入市与土地权属调整的交易平台依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "江西长江重点生态区（鄱阳湖流域）历史遗留废弃矿山生态修复示范工程（宜春片区）项目和资金管理暂行办法",
    "detail": "规范山水林田湖草沙一体化生态修复示范工程的项目与资金全流程管理，是市级矿山生态修复操作办法。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "铜鼓县农业农村水利局",
    "policyTitle": "铜鼓县统筹整合资金推进高标准农田建后管护实施细则",
    "detail": "明确建后管护对象为田间道路、灌排渠道、输水管道、下田通道、机耕桥、渡水槽、拦水坝、提灌站、涵管等工程设施，按「谁使用、谁管护」「谁受益、谁负责」原则采取「县负总责、乡镇监管、村为主体」三级管护制度、县农业农村水利局为业务主管部门，是全域整治中高标准农田建后管护与涉农资金统筹整合的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "铜鼓县人民政府印发关于探索建立涉农资金统筹整合长效机制的实施方案",
    "detail": "依据国家层面涉农资金统筹整合制度框架、《江西省人民政府关于探索建立涉农资金统筹整合长效机制的实施意见》（赣府发〔2018〕33号）及宜府发〔2019〕9号制定，是全域整治中涉农资金统筹整合的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 15,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "县镇两级试点工作方案编制政策",
    "detail": "编制《铜鼓县大塅镇全域土地综合整治项目试点工作方案》，同时结合区域内的农业产业现状，全域规划试点乡镇生产、生活、生态空间，全域布局农用地整理、耕地提质改造（旱改水）、宜耕后备土地资源开发、村容村貌提升和生态治理，形成了科学有序的多层次规划体系。",
    "innovation": "县镇两级方案衔接编制，形成多层次规划体系",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 16,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "铜鼓县政府、大塅镇政府",
    "policyTitle": "康养旅游与绿色生态农业新业态培育政策",
    "detail": "打造万亩有机白茶基地、中药材基地和千亩有机水稻基地，培育发展了肆博业态、西雅图等多家市级龙头农业开发有限公司；先后创建汤里文化旅游度假区、天柱峰景区2家国家4A级景区和1家省4A级乡村旅游点，深化农文旅融合发展步伐。",
    "innovation": "「2个4A景区+1个省4A乡村旅游点」的农文旅融合发展格局",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "江西省自然资源厅关于开展全域土地综合整治试点工作的实施意见",
    "docNo": "赣自然资发〔2021〕号",
    "issuer": "江西省自然资源厅（经省政府同意）",
    "date": "2021-04-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jxlcx.gov.cn/art/2023/4/11/art_3922_3978232.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省政府",
    "rank": 3,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江西省全域土地综合整治管理办法（试行）",
    "docNo": "赣自然资发〔2025〕号",
    "issuer": "江西省自然资源厅",
    "date": "2025-07-10",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zgys.gov.cn/ysnsx/c122635/202605/8aac5739792e4d7e9ca358f4b3c2353d.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江西省人民政府办公厅关于印发《江西省补充耕地指标交易管理办法》《江西省城乡建设用地增减挂钩节余指标调剂交易管理办法》的通知",
    "docNo": "赣府厅发〔2023〕15号",
    "issuer": "江西省人民政府办公厅",
    "date": "2023-11-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiangxi.gov.cn/jxsrmzf/szfbg100/pc/content/content_1899485512506212352.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "宜春市补充耕地项目管理实施细则（试行）",
    "docNo": "未获取",
    "issuer": "宜春市自然资源局",
    "date": "2026-09-03",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://bnr.yichun.gov.cn/ycszrzyj/zcwj/pc/content/2095435686513303552/content_2095435686513303552.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "宜春市自然资源局 宜春市农业农村局关于严格落实高标准农田建设项目耕地保护有关工作的通知",
    "docNo": "未获取（两局联合）",
    "issuer": "宜春市自然资源局、宜春市农业农村局",
    "date": "2024-07-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://bnr.yichun.gov.cn/ycszrzyj/zcwj/pc/content/1998562130194706432/content_1998562130194706432.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "宜春市2024年度耕地保护领域攻坚行动工作方案",
    "docNo": "未获取",
    "issuer": "宜春市自然资源局",
    "date": "2024-07-12",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://bnr.yichun.gov.cn/ycszrzyj/zcwj/pc/content/1998562137039810560/content_1998562137039810560.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "宜春市自然资源局关于印发《宜春市地质灾害防治规划（2021—2035年）》的通知",
    "docNo": "未获取",
    "issuer": "宜春市自然资源局",
    "date": "2024-01-08",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://bnr.yichun.gov.cn/ycszrzyj/zcwj/pc/content/1998562073319944192/content_1998562073319944192.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "24",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "宜春市人民政府关于印发《宜春市国土空间总体规划（2021—2035年）》的通知",
    "docNo": "宜府发〔2024〕9号",
    "issuer": "宜春市人民政府",
    "date": "2024-11-20",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yichun.gov.cn/ycsrmzf/szfwjmc/pc/content/2003348272324632576/content_2003348272324632576.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "关于加快推进废弃矿山和近年关闭矿山环境治理恢复工作的通知",
    "docNo": "宜市自然资办发〔2021〕23号",
    "issuer": "宜春市自然资源局办公室",
    "date": "2021-04-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://bnr.yichun.gov.cn/ycszrzyj/gfxwj/pc/content/1998561249965486080/content_1998561249965486080.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "关于印发《江西长江重点生态区（鄱阳湖流域）历史遗留废弃矿山生态修复示范工程（宜春片区）项目和资金管理暂行办法》的通知",
    "docNo": "未获取",
    "issuer": "宜春市自然资源局",
    "date": "2026-04-16",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://bnr.yichun.gov.cn/ycszrzyj/gfxwj/pc/content/2044584589507002368/content_2044584589507002368.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "铜鼓县人民政府办公室印发关于进一步加强耕地保护工作的实施办法（试行）的通知",
    "docNo": "铜府办字〔2023〕60号",
    "issuer": "铜鼓县人民政府办公室（铜鼓县自然资源局承办）",
    "date": "2023-11-24 成文",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.tonggu.gov.cn/tgxrmzf/qtygwj6d/pc/content/2028857372235898880/content_2028857372235898880.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注现行有效",
    "level": "区县",
    "levelHit": "县自然资源局",
    "rank": 1,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "铜鼓县国土空间生态修复规划（2021-2035年）",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "铜鼓县自然资源局",
    "date": "2023-09-08 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.tonggu.gov.cn/tgxrmzf/ghjh54/pc/content/2028878289242529792/content_2028878289242529792.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注现行有效",
    "level": "区县",
    "levelHit": "县自然资源局",
    "rank": 1,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "铜鼓县统筹整合资金推进高标准农田建后管护实施细则",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "铜鼓县农业农村水利局",
    "date": "2025-01-08 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.tonggu.gov.cn/tgxrmzf/ghjh2126/pc/content/2028876557150167040/content_2028876557150167040.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注现行有效",
    "level": "区县",
    "levelHit": "县",
    "rank": 1,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "铜鼓县人民政府办公室关于印发铜鼓县开展「节地增效」行动实施方案的通知",
    "docNo": "铜府办发〔2020〕32号",
    "issuer": "铜鼓县人民政府办公室",
    "date": "2020-09-08 成文",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.tonggu.gov.cn/tgxrmzf/gfxwj/pc/content/2028856389216870400/content_2028856389216870400.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【文件有效】",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "铜鼓县人民政府印发关于探索建立涉农资金统筹整合长效机制的实施方案的通知",
    "docNo": "铜府发〔2019〕9号",
    "issuer": "铜鼓县人民政府",
    "date": "2019-04-30 成文",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.tonggu.gov.cn/tgxrmzf/gfxwj/pc/content/2028856272342589440/content_2028856272342589440.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【文件有效】",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "铜鼓县人民政府办公室关于印发铜鼓县农村产权交易中心建设实施方案的通知",
    "docNo": "铜府办字〔2022〕56号",
    "issuer": "铜鼓县人民政府办公室",
    "date": "2022-07-26 成文",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.tonggu.gov.cn/tgxrmzf/gfxwj/pc/content/2028856554564722688/content_2028856554564722688.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注【文件有效】",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "24",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 7,
    "innovations": 0
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 3,
    "innovations": 0
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 16,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 13,
   "provinceDocs": 3,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 16,
   "docs": 16,
   "innovations": 3,
   "implementation": 11,
   "pilot": 5,
   "gradeA": 15,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "25",
  "dir": "25_湖北省孝感市应城市杨河镇",
  "title": "湖北省孝感市应城市杨河镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "湖北省孝感市应城市杨河镇",
  "batch": "第二批",
  "province": "湖北",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "4.85 亿元",
  "summary": "探索林耕空间置换，整治土地3.27万亩，新增耕地1832亩，引入龙头企业中磐粮油、组建磐农联盟，形成糯稻种植、收储、加工、电商销售全产业链，带动农民每亩年增收180元，8个村集体增收82万元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以湖北省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具18项（其中创新工具3项）、政策文件18份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "应城市国土空间总体规划（2021—2035年）",
    "detail": "经省人民政府批复同意印发，第四章第四节专列「实施全域国土综合整治」；将「矿区生态修复重点区」划定于杨岭镇、杨河镇、城北街道、四里棚街道、东马坊街道等膏盐矿地区，重点开展矿山损毁土地复垦、矿山污染土壤治理、废弃矿山治理并推进矿山地质公园建设以实现「矿山复绿」，同时以北部和南部农业种植区为重点推进集中连片整治，是全域整治的区级上位规划依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "货币化安置与空心村湾拆除搬迁政策",
    "detail": "采取货币化安置方式拆除搬迁项目区8个村44个空心村湾1155户；推进城镇化，引导50%左右群众向城区转移，35%左右向集镇集中，15%左右保留村湾自建；新增各类耕地指标2000余亩，为项目收益奠定了基础。，实现村庄建设用地集约化）",
    "innovation": "货币化安置+分层城镇化引导（50%/35%/15%",
    "deps": [
     1,
     3
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "生态沟渠与生态涵养林建设政策",
    "detail": "以养殖场拆除搬迁、河道除杂清障、背水面坡面修整、沟渠清淤硬化为重点，实施生态环保沟渠建设、生态涵养林建设和河湖库生态修复工程；长达12.28公里的生态沟渠建设和新建生态涵养林120亩已完成，5公里漳河堤硬化等工程皆已完工。",
    "innovation": "以生态沟渠+生态涵养林实现农田面源污染拦截与景观靓化",
    "deps": [
     1
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "孝感市加强高标准农田建设实施方案",
    "detail": "明确高标准农田建设与全域国土综合整治统筹结合、同步实施，含田块归并、耕作层剥离利用、灌排设施配套等工程内容（索引号 040200/2023-01160）。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "孝感市国土空间总体规划（2021—2035年）",
    "detail": "市级国土空间总体规划确定耕地保有量、永久基本农田与村庄布局，是全域土地综合整治实施方案编制与审查的上位依据。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "孝感市滚子河流域全域国土综合整治规划研究（实施方案）",
    "detail": "市本级流域尺度全域国土综合整治实施方案，涵盖耕地恢复、进出平衡、占补平衡、林地复垦、建设用地腾挪潜力分析与六大整治行动，可作同市其他整治项目的方案范式。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "孝感市矿产资源总体规划（2021—2025年）",
    "detail": "全市矿产资源开发与矿山生态修复的市级总纲，为全域整治中历史遗留矿山生态修复、损毁土地复垦提供规划依据与空间管控边界。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "做实做优全域国土综合整治项目放大综合效应",
    "detail": "标题即含「全域国土综合整治」，是孝感市级层面专项部署全域整治项目实施、统筹整合涉农资金与项目、放大综合效应的直接依据文件（索引号 040200/2021-02194）。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "应城市自然资源综合利用与生态修复实施方案",
    "detail": "经市人民政府第十届六十一次常务会议审议通过，提出充分发挥地质资源基础性、公益性、战略性作用，推进新一轮找矿突破战略行动与膏盐地热等优势资源集约节约高效利用、全面推进绿色勘查和绿色矿区建设，与杨河镇膏盐矿区生态修复直接衔接，是全域整治中废弃矿山生态修复的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "市人民政府关于2026年行政规范性文件清理结果的决定",
    "detail": "依据《孝感市司法局关于开展规范性文件清理工作的通知》，对市政府和市政府办公室制发的规范性文件全面清理（共清理现行有效64件，保留46件、宣布失效7件、废止10件、修订1件）并附四份目录，可用于反查本案例各政策件的现行效力。",
    "innovation": "",
    "deps": [
     18
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "高标准农田承包经营权拍卖与龙头企业引入政策",
    "detail": "采取拍卖的方式，拍卖整治后的高标准农田集体土地承包经营权；成功引入省级农业产业化龙头企业中磐粮油食品有限公司，按每亩每年430元的价格流转项目区4080亩土地，组建磐农联盟农业产业化联合体，采取「公司+基地+农户+服务」的运营模式，形成糯稻种植、收储、加工、电商销售于一体的全糯稻产业链。",
    "innovation": "高标准农田承包经营权拍卖+「公司+基地+农户+服务」全产业链运营",
    "deps": [
     1
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 12,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "做好工业用地要素保障助推全市城市和产业集中高质量发展若干措施",
    "detail": "建立「增存挂钩」机制，推进城镇低效用地再开发，支持混合产业用地、弹性年期出让、「标准地」与「用地清单制」。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "应城市人民政府关于公布实施应城市集体建设用地和农用地级别与基准地价更新成果的通知",
    "detail": "依据上级批复公布集体建设用地和农用地级别与基准地价更新成果（附件含集体建设用地与农用地基准地价成果表，集体建设用地含农村宅基地1.2容积率、70年），是全域整治中集体经营性建设用地入市与土地权属调整的区级价格依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "2024年度应城市耕地恢复工作方案",
    "detail": "界定耕地恢复为落实最严格耕地保护制度、依据国土空间规划和相关专项规划，将林地、草地、园地、坑塘水面等其他农用地及农业设施建设用地整治恢复到认定为耕地的土地整治工作，适用范围为使用政府财政资金、通过即可恢复或工程恢复措施恢复耕地，是全域整治中耕地恢复的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "公布应城市园、林、草地定级与基准地价制定成果",
    "detail": "依据上级批复公布园地、林地、草地基准地价成果，是杨河镇园地、林地、草地（含低效园地）整治补偿与土地权属调整的区级价格依据。",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 16,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "政银企合作推进全域国土综合整治",
    "detail": "依据湖北省自然资源厅与农发行湖北省分行、湖北省长江产业投资集团共同推进全域国土综合整治的合作协议，应城市杨河镇整治项目纳入政银企合作框架，通过政策性金融与省级投资平台协同，拓宽整治项目融资渠道。",
    "innovation": "政银企合作协议为整治项目提供政策性金融与平台投资支持",
    "deps": [
     5
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 17,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "规范设施农业用地管理",
    "detail": "规范设施农业用地范围、规模与备案程序，强调耕地特别是永久基本农田特殊保护、设施农业用地上图入库纳入国土空间规划「一张图」。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 18,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "应城市政府、杨河镇政府",
    "policyTitle": "全域国土综合整治项目管理制度与方案编制指南",
    "detail": "依据《湖北省全域国土综合整治项目管理办法》等三项制度与《全域国土综合整治项目实施方案编制指南》（湖北省地方标准），杨河镇整治项目按省级制度规范项目申报、实施与验收流程，并按统一技术框架编制实施方案，提升项目管理的规范化水平。",
    "innovation": "省级项目管理制度与方案编制地方标准配套实施",
    "deps": [
     2,
     4
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省人民政府批转省自然资源厅关于推进全域国土综合整治和加快推进新增工业用地「标准地」出让两个意见的通知",
    "docNo": "鄂政发〔2019〕25号",
    "issuer": "湖北省人民政府",
    "date": "2019-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.hbqj.gov.cn/xxgk/zc/qtwj/szfwj/2020/202005/t20200521_2283229.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "省全域国土综合整治领导小组办公室关于印发《湖北省全域国土综合整治项目管理办法》等三项制度的通知",
    "docNo": "鄂土整办函〔2023〕6号",
    "issuer": "湖北省全域国土综合整治领导小组办公室",
    "date": "2023-03-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.hubei.gov.cn/fbjd/zhengce/qtzdgkwj/202303/t20230321_4595569.shtml",
    "attachUrl": "",
    "sourceNote": "核验说明：原为前瞻政策库（商业网站），已换为发文机关官网正文页",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "湖北省自然资源厅、湖北省财政厅、湖北省农业农村厅关于印发《湖北省补充耕地指标省级统筹管理办法（修订）》的通知",
    "docNo": "鄂自然资发〔2023〕23号",
    "issuer": "湖北省自然资源厅、湖北省财政厅、湖北省农业农村厅",
    "date": "2023-09-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.guoturen.com/guihua-2986.html",
    "attachUrl": "",
    "sourceNote": "核验说明：湖北省自然资源厅官网未见该修订版正文，来源为第三方政策文库全文转载（非官方渠道）；文号、机构、日期已逐字核对",
    "level": "省",
    "levelHit": "省农业农村厅",
    "rank": 3,
    "caseId": "25",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "全域国土综合整治项目实施方案编制指南（湖北省地方标准）",
    "docNo": "DB42/T 2391-2025",
    "issuer": "湖北省市场监督管理局（主管）",
    "date": "2025-06-23发布／2025-08-23实施",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=398FC6B4C2E24911E06397BE0A0AD48A",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "湖北省自然资源厅、中国农业发展银行湖北省分行、湖北省长江产业投资集团有限公司关于共同推进我省全域国土综合整治的合作协议",
    "docNo": "无文号",
    "issuer": "湖北省自然资源厅、农发行湖北省分行、长江产业投资集团",
    "date": "2020-01-09",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "http://m.cnhubei.com/content/2020-01/09/content_12606179.html",
    "attachUrl": "",
    "sourceNote": "核验说明：湖北日报2020-01-09全文报道，含六大重点合作领域；省自然资源厅官网未见原文，原澎湃转载页标注「政务：湖北省人民政府网」",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "25",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "市人民政府办公室关于印发孝感市加强高标准农田建设实施方案的通知",
    "docNo": "孝感政办函〔2023〕51号",
    "issuer": "孝感市人民政府办公室",
    "date": "2023-08-21",
    "status": "有效",
    "grade": "核验A级",
    "url": "http://gkml.xiaogan.gov.cn/c/www/xgzbh/307072.jhtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "市人民政府关于印发《孝感市国土空间总体规划（2021—2035年）》的通知",
    "docNo": "未获取",
    "issuer": "孝感市人民政府",
    "date": "2025-12-16",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.xiaogan.gov.cn/c/www/xgzf2/429696.jhtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "市人民政府印发关于做好工业用地要素保障助推全市城市和产业集中高质量发展若干措施的通知",
    "docNo": "孝感政规〔2023〕12号",
    "issuer": "孝感市人民政府",
    "date": "2023-12-25",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.xiaogan.gov.cn/c/www/gfxwj/335101.jhtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "孝感市滚子河流域全域国土综合整治规划研究（实施方案）",
    "docNo": "未标注（已正式印发，未公开文号）",
    "issuer": "孝感市自然资源和城乡建设局",
    "date": "2024-10",
    "status": "有效",
    "grade": "核验B级",
    "url": "https://www.xiaogan.gov.cn/hd/rdwt/202410/t20241016_91008.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "市人民政府关于印发孝感市矿产资源总体规划（2021—2025年）的通知",
    "docNo": "孝感政发〔2022〕23号",
    "issuer": "孝感市人民政府",
    "date": "2022-10-19",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.xiaogan.gov.cn/c/www/xgzf2/267229.jhtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "关于规范设施农业用地管理的通知",
    "docNo": "未标注（公开报道未载文号）",
    "issuer": "孝感市自然资源和城乡建设局、孝感市农业农村局",
    "date": "2024-07",
    "status": "有效",
    "grade": "核验B级",
    "url": "https://news.hubeidaily.net/mobile/c_2879241.html",
    "attachUrl": "",
    "sourceNote": "核验说明：孝感市自然资源和城乡建设局门户未检索到该文，来源为湖北日报（官方媒体）报道；政府门户原文未公开",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "市人民政府办公室关于做实做优全域国土综合整治项目放大综合效应的通知",
    "docNo": "孝感政办函〔2021〕74号",
    "issuer": "孝感市人民政府办公室",
    "date": "2021-09-09",
    "status": "有效",
    "grade": "核验A级",
    "url": "http://gkml.xiaogan.gov.cn/c/www/xgzbh/200894.jhtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "市人民政府关于印发应城市国土空间总体规划（2021—2035年）的通知",
    "docNo": "应城政发〔2025〕7号",
    "issuer": "应城市人民政府",
    "date": "2025-12-25 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yingcheng.gov.cn/c/ycs/gfxwj2/428453.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "市人民政府办公室关于印发2024年度应城市耕地恢复工作方案的通知",
    "docNo": "应城政办发〔2024〕11号",
    "issuer": "应城市人民政府办公室",
    "date": "2024-09-05 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yingcheng.gov.cn/c/ycs/gfxwj2/370666.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "市人民政府办公室关于印发应城市自然资源综合利用与生态修复实施方案的通知",
    "docNo": "应城政办发〔2024〕14号",
    "issuer": "应城市人民政府办公室",
    "date": "2024-10-17 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yingcheng.gov.cn/c/ycs/gfxwj2/373561.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "应城市人民政府关于公布实施应城市集体建设用地和农用地级别与基准地价更新成果的通知",
    "docNo": "应城政发〔2025〕8号",
    "issuer": "应城市人民政府",
    "date": "2025-12-25 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yingcheng.gov.cn/c/ycs/gfxwj2/428378.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "关于公布应城市园、林、草地定级与基准地价制定成果的通知",
    "docNo": "应城政办函〔2024〕45号",
    "issuer": "应城市人民政府办公室",
    "date": "2024-09-26 成文、门户 2024-10-16 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yingcheng.gov.cn/c/ycs/gfxwj2/431762.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "市人民政府关于2026年行政规范性文件清理结果的决定",
    "docNo": "应城政规〔2026〕1号",
    "issuer": "应城市人民政府",
    "date": "2026-07-09 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yingcheng.gov.cn/c/ycs/gfxwj2/453114.jhtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "25",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 9,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 18,
   "provinceTools": 5,
   "nationalTools": 0,
   "provinceBasis": 5,
   "nationalBasis": 0,
   "localDocs": 14,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 18,
   "docs": 18,
   "innovations": 5,
   "implementation": 16,
   "pilot": 2,
   "gradeA": 13,
   "gradeB": 5,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "26",
  "dir": "26_湖北省恩施州宣恩县椒园镇",
  "title": "湖北省恩施州宣恩县椒园镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "湖北省恩施州宣恩县椒园镇",
  "batch": "第二批",
  "province": "湖北",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "2.8 亿元（融资）",
  "summary": "政银企创新合作，农发行融资2.8亿元，推进农用地整治与建设用地腾退，打造「山区特色农业+乡村旅游+文化保护」产业链，塑造富硒米、富硒油新型IP。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以湖北省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具19项（其中创新工具3项）、政策文件20份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "增减挂钩指标备案与废弃宅基地拆旧复垦政策",
    "detail": "出台《宣恩县椒园镇全域国土综合整治增减挂钩指标管理相关规定》，通过农村废弃宅基地拆旧复垦释放存量用地潜力，2025年首次成功备案增减挂钩指标109亩，拆除636户；实施农用地整治，盘活土地资源，改造低效用地500余亩，腾退建设用地200余亩。",
    "innovation": "县级专项出台增减挂钩指标管理规定，实现指标规范备案",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "恩施州实施「亩产论英雄」推进土地集约高效可持续利用工作方案",
    "detail": "明确「统筹开展国土综合整治，优化土地利用结构和布局」，并含低效用地再开发、存量土地优化、土地混合利用、增减挂钩节余指标交易奖惩。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "进一步改进全州高标准农田建设管理体制",
    "detail": "全文明确水田垦造、拆旧复垦、耕作层剥离回填、高标准农田新增耕地与增减挂钩指标备案调剂，几乎逐条对应全域整治配套政策工具。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "恩施州2023年度耕地流出整改和永久基本农田划定成果核实处置工作方案",
    "detail": "永久基本农田布局优化调整、就地恢复/异地补划/林耕置换、占补水田指标形成，是全域整治中永久基本农田调整与耕地恢复的直接政策依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "做好重要生态系统保护和修复重大工程实施有关工作",
    "detail": "州级「双重」项目（山水林田湖草沙一体化保护修复）实施机制，含宣恩县石漠化治理与生物多样性保护任务。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "恩施州国土空间总体规划（2021—2035年）",
    "detail": "州级国土空间总体规划是全域土地综合整治项目区划定与实施方案报批的必备要件。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "建立乡村规划师制度的指导",
    "detail": "乡村规划师制度服务实用性村庄规划编制，是全域整治「多规合一」与村庄规划先行环节的制度保障。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "进一步深化农村改革扎实推进乡村全面振兴",
    "detail": "州委州政府联合发文的农村改革文件，统筹土地要素配置与乡村振兴用地保障，是全域整治的政策总纲性文件。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "宣恩县新增工业用地「标准地」出让方案",
    "detail": "对新增工业用地实行「标准地」出让（带指标、带条件出让），是全域整治中工业用地有机更新与低效用地再开发的区级依据。",
    "innovation": "",
    "deps": [
     19
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "宣恩县规范性文件清理结果",
    "detail": "公布宣恩县规范性文件清理结果目录（保留／废止），可用于反查本案例各政策件的现行效力（2024年、2023年清理结果已被替代）。",
    "innovation": "",
    "deps": [
     20
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "委托农村宅基地农用地转用审批权",
    "detail": "下放农村宅基地农用地转用审批权，支撑全域整治中宅基地退出、闲置农房盘活与村庄建设用地整理。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "宣恩县农村不动产登记工作实施方案",
    "detail": "推进全县农村宅基地、集体建设用地及房屋等不动产统一登记，是全域整治中土地权属调整与宅基地及住房建设管理的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 13,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "宣恩县农村综合产权交易管理办法",
    "detail": "规范全县农村综合产权（含农村土地经营权、集体经营性资产等）交易行为，是全域整治中集体经营性建设用地入市与土地权属调整的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "宣恩县农村土地经营权抵押贷款实施细则（试行）",
    "detail": "以农村土地经营权设定抵押融资、激活土地财产权能，是全域整治中土地权属调整与闲置农房盘活（经营权流转）的区级依据。",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 15,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "「政银企」创新合作与联合体融资政策",
    "detail": "统筹全要素资源，开创政银企创新合作机制，统筹财政资金8703.6万元；引入社会资本方宣恩仙山贡水生态农业投资有限公司和宣恩天蓝生态环境建设投资有限公司为联合体，利用地方国有企业平台优势在中国农业发展银行宣恩县支行成功融资2.8亿元，负责整治开发、拆除腾退、施工管理、农业开发等领域工作。",
    "innovation": "地方国企联合体+农发行融资2.8亿元的「政银企」合作机制",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 16,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "2023年宣恩县财政涉农资金统筹方案",
    "detail": "对全县财政涉农资金实行统筹整合使用，是椒园镇全域整治涉农资金整合的区级制度依据。（属年度性文件，未检索到2024／2025／2026年度版本）",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 17,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "宣恩县小型农田水利工程运行管护办法",
    "detail": "明确全县小型农田水利工程的运行、管护与责任主体，是椒园镇整治后农田水利设施管护的区级依据。",
    "innovation": "",
    "deps": [
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 18,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "全域国土综合整治项目管理制度与方案编制指南",
    "detail": "依据《湖北省全域国土综合整治项目管理办法》等三项制度与《全域国土综合整治项目实施方案编制指南》（湖北省地方标准），椒园镇整治项目按省级制度规范项目申报、实施与验收流程，并按统一技术框架编制实施方案，提升项目管理的规范化水平。",
    "innovation": "省级项目管理制度与方案编制地方标准配套实施",
    "deps": [
     2,
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 19,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "宣恩县政府、椒园镇政府",
    "policyTitle": "富硒产业IP与「双创产业园」就业带动政策",
    "detail": "打造「山区特色农业+乡村旅游+文化保护」特色产业链条，巩固「果、蔬、茶、稻」特色农业，农业产业人均可支配收入增长10%；打造富硒米、富硒油新型IP，建成硒食品精深加工产业链，建设「双创产业园产业工人配套综合体」，增加就业岗位2000余个。",
    "innovation": "富硒区域公用品牌IP+「双创产业园」配套综合体解决就业",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省人民政府批转省自然资源厅关于推进全域国土综合整治和加快推进新增工业用地「标准地」出让两个意见的通知",
    "docNo": "鄂政发〔2019〕25号",
    "issuer": "湖北省人民政府",
    "date": "2019-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.hbqj.gov.cn/xxgk/zc/qtwj/szfwj/2020/202005/t20200521_2283229.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "省全域国土综合整治领导小组办公室关于印发《湖北省全域国土综合整治项目管理办法》等三项制度的通知",
    "docNo": "鄂土整办函〔2023〕6号",
    "issuer": "湖北省全域国土综合整治领导小组办公室",
    "date": "2023-03-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.hubei.gov.cn/fbjd/zhengce/qtzdgkwj/202303/t20230321_4595569.shtml",
    "attachUrl": "",
    "sourceNote": "核验说明：原为前瞻政策库（商业网站），已换为发文机关官网正文页",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "湖北省自然资源厅、湖北省财政厅、湖北省农业农村厅关于印发《湖北省补充耕地指标省级统筹管理办法（修订）》的通知",
    "docNo": "鄂自然资发〔2023〕23号",
    "issuer": "湖北省自然资源厅、湖北省财政厅、湖北省农业农村厅",
    "date": "2023-09-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.guoturen.com/guihua-2986.html",
    "attachUrl": "",
    "sourceNote": "核验说明：湖北省自然资源厅官网未见该修订版正文，来源为第三方政策文库全文转载（非官方渠道）；文号、机构、日期已逐字核对",
    "level": "省",
    "levelHit": "省农业农村厅",
    "rank": 3,
    "caseId": "26",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "全域国土综合整治项目实施方案编制指南（湖北省地方标准）",
    "docNo": "DB42/T 2391-2025",
    "issuer": "湖北省市场监督管理局（主管）",
    "date": "2025-06-23发布／2025-08-23实施",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=398FC6B4C2E24911E06397BE0A0AD48A",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "湖北省自然资源厅、中国农业发展银行湖北省分行、湖北省长江产业投资集团有限公司关于共同推进我省全域国土综合整治的合作协议",
    "docNo": "无文号",
    "issuer": "湖北省自然资源厅、农发行湖北省分行、长江产业投资集团",
    "date": "2020-01-09",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "http://m.cnhubei.com/content/2020-01/09/content_12606179.html",
    "attachUrl": "",
    "sourceNote": "核验说明：湖北日报2020-01-09全文报道，含六大重点合作领域；省自然资源厅官网未见原文，原澎湃转载页标注「政务：湖北省人民政府网」",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "26",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "恩施州人民政府关于进一步改进全州高标准农田建设管理体制的意见",
    "docNo": "恩施州政规〔2022〕10号",
    "issuer": "恩施州人民政府",
    "date": "2022-08-08",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.enshi.gov.cn/zc/zc/gfxwj_1/202212/t20221209_1384156.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "恩施州人民政府办公室关于印发恩施州实施「亩产论英雄」推进土地集约高效可持续利用工作方案的通知",
    "docNo": "恩施州政办发〔2022〕45号",
    "issuer": "恩施州人民政府办公室",
    "date": "2022-11-16",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.enshi.gov.cn/zc/zc/zcwj/202302/t20230214_1405552.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "恩施州人民政府办公室关于印发恩施州2023年度耕地流出整改和永久基本农田划定成果核实处置工作方案的通知",
    "docNo": "恩施州政办函〔2023〕33号",
    "issuer": "恩施州人民政府办公室",
    "date": "2023-09-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.enshi.gov.cn/zc/zc/zcwj/202310/t20231027_1494988.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "州人民政府办公室关于做好重要生态系统保护和修复重大工程实施有关工作的通知",
    "docNo": "恩施州政办函〔2024〕28号",
    "issuer": "恩施州人民政府办公室",
    "date": "2024-09-09",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.enshi.gov.cn/zc/zc/zcwj/202410/t20241015_1623288.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "恩施州人民政府关于印发《恩施州国土空间总体规划（2021—2035年）》的通知",
    "docNo": "恩施州政发〔2026〕6号",
    "issuer": "恩施州人民政府",
    "date": "2026-05-26",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "http://www.enshi.gov.cn/zc/zc/zcwj/202607/t20260707_1817576.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "26",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "恩施州人民政府办公室关于建立乡村规划师制度的指导意见",
    "docNo": "恩施州政办发〔2024〕26号",
    "issuer": "恩施州人民政府办公室",
    "date": "2024-08-30",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "http://www.enshi.gov.cn/zc/zc/zcwj/202410/t20241014_1622902.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "26",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "恩施州人民政府关于委托农村宅基地农用地转用审批权的通知",
    "docNo": "恩施州政发〔2023〕2号",
    "issuer": "恩施州人民政府",
    "date": "2023-03-21",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "http://www.enshi.gov.cn/zc/zc/zcwj/202305/t20230505_1433770.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "26",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "中共恩施州委 恩施州人民政府关于进一步深化农村改革扎实推进乡村全面振兴的实施意见",
    "docNo": "恩施州发〔2025〕1号",
    "issuer": "中共恩施州委、恩施州人民政府",
    "date": "2025-07-15",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "http://www.enshi.gov.cn/zc/zc/zcwj/202507/t20250715_1718792.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "26",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "宣恩县人民政府关于印发2023年宣恩县财政涉农资金统筹方案的通知",
    "docNo": "宣政发〔2023〕1号",
    "issuer": "宣恩县人民政府",
    "date": "2023-03-30 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xe.gov.cn/xxgk/zc/gfxwj/202304/t20230414_1426888.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "县人民政府办公室关于印发宣恩县农村不动产登记工作实施方案的通知",
    "docNo": "宣政办发〔2024〕6号",
    "issuer": "宣恩县人民政府办公室",
    "date": "2024-02-28 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xe.gov.cn/xxgk/zc/gfxwj/202412/t20241202_1642279.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "宣恩县农村综合产权交易管理办法",
    "docNo": "宣政规〔2021〕1号",
    "issuer": "宣恩县人民政府",
    "date": "2021-09-02 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xe.gov.cn/xxgk/zc/gfxwj/202412/t20241202_1642147.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "宣恩县农村土地经营权抵押贷款实施细则（试行）",
    "docNo": "宣政办发〔2021〕24号",
    "issuer": "宣恩县人民政府办公室",
    "date": "2021-10-11 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xe.gov.cn/xxgk/zc/gfxwj/202412/t20241205_1643557.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "宣恩县小型农田水利工程运行管护办法",
    "docNo": "宣政办发〔2021〕19号",
    "issuer": "宣恩县人民政府办公室",
    "date": "2021-07-20 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xe.gov.cn/xxgk/zc/gfxwj/202412/t20241206_1643758.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 19,
    "name": "县人民政府关于印发宣恩县新增工业用地「标准地」出让方案的通知",
    "docNo": "宣政办发〔2020〕18号",
    "issuer": "宣恩县人民政府办公室",
    "date": "2020-08-03 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xe.gov.cn/xxgk/zc/gfxwj/202311/t20231106_1502313.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 20,
    "name": "宣恩县规范性文件清理结果",
    "docNo": "未标注（门户列「无」）",
    "issuer": "宣恩县人民政府",
    "date": "2025-05-08 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.xe.gov.cn/xxgk/zc/gfxwj/202505/t20250512_1696913.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "26",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 8,
    "innovations": 0
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 19,
   "provinceTools": 4,
   "nationalTools": 0,
   "provinceBasis": 4,
   "nationalBasis": 0,
   "localDocs": 16,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 19,
   "docs": 20,
   "innovations": 4,
   "implementation": 16,
   "pilot": 3,
   "gradeA": 14,
   "gradeB": 6,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "27",
  "dir": "27_广东省梅州市蕉岭县新铺镇",
  "title": "广东省梅州市蕉岭县新铺镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "广东省梅州市蕉岭县新铺镇",
  "batch": "第二批",
  "province": "广东",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "7.37 亿元",
  "summary": "以石窟河、石扇河生态修复为主线，系统推进5000亩生态化耕地治理、10公里生态碧道、1万亩碳汇林建设与4片人居环境提升，打造「山水人居·十村联动」与「稻香画廊」。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以广东省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具14项（其中创新工具3项）、政策文件15份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "蕉岭县政府、梅州市自然资源局",
    "policyTitle": "永久基本农田布局优化支撑绿色建材产业政策",
    "detail": "按照好地用于粮食生产、劣地用于工业发展的原则，调整优化永久基本农田布局，将452亩永农调整至水源充足、自然条件良好的石窟河两岸；通过增减挂钩等方式支撑1298亩绿色建材产业发展用地；预期完成新增耕地率>5%、新增永久基本农田面积比例>5%、节余建设用地指标>0规定指标成效。",
    "innovation": "「好地种粮、劣地工业」的永农布局优化原则，支撑绿色建材产业用地",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "蕉岭县农村集体经营性建设用地入市管理办法（试行）",
    "detail": "专设农村集体建设用地整备与综合整治两章：对用地零散、效率低下或不利于空间和功能优化的存量农村集体建设用地进行整合、土地清理及前期开发，通过对零散集体建设用地、废弃的集体公益性建设用地、退出的宅基地等进行用地整备，重新划分宗地并确定产权归属后按新的规划条件入市，是本案例直接支撑全域整治的入市区级依据。",
    "innovation": "",
    "deps": [
     4,
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "区县"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "石窟河生态修复与碳汇林建设政策",
    "detail": "围绕「千年古镇·秀美新铺·稻香画廊」发展目标，以石窟河、石扇河生态修复为主线，系统推进5000亩生态化耕地治理、10公里生态碧道建设、1万亩碳汇林建设、4片人居环境质量提升工程；通过人工造林、现有林改培、中幼林抚育等措施建设约1万亩生态碳汇林，实现森林单位面积碳储量显著提升。",
    "innovation": "生态碧道+万亩碳汇林，探索森林碳汇与生态修复协同增效",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "梅州市全域土地综合整治工作手册（第二版）",
    "detail": "市级实操手册，逐项列出农用地整理、建设用地整理、低效闲置存量盘活、集体经营性建设用地入市、宅基地制度改革、生态修复六大任务与市县镇村四级职责，并载明2023年10月8日市委市政府印发《梅州市推进全域土地综合整治实施意见》。",
    "innovation": "",
    "deps": [
     3,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "梅州市高标准农田建设规划（2021—2030年）",
    "detail": "批复明确以永久基本农田、粮食生产功能区为重点集中连片建设高标准农田、建管并重、衔接「三区三线」，是全域整治农用地整理与高标准农田建设的市级纲领依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "梅州市蕉岭县高标准农田建设规划（2021—2030年）",
    "detail": "印发经县政府常务会议审议通过的《梅州市蕉岭县高标准农田建设规划（2021—2030年）》，规划期为2021—2030年，是全域整治中高标准农田建设的区级规划依据。（正文以附件形式公开）",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "梅州市闲置土地处置",
    "detail": "闲置土地调查、认定与处置的市政府规章，是全域整治「低效用地再开发/批而未供与闲置土地处置」类核心配套工具。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "梅州市乡村产业项目点状供地实施",
    "detail": "点状供地准入与负面清单、点状报批+成片流转的「农用地+建设用地」综合利用机制，是全域整治乡村产业用地保障类工具。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "蕉岭县入市集体经营性建设用地低效用地认定和处置办法（试行）",
    "detail": "以「为全面推进蕉岭县全域土地综合整治，优化土地资源配置，推进节约集约用地」为立法目的，界定入市集体经营性建设用地低效用地为已开发建设但利用现状仍有调整盘活和提升利用空间者（不含闲置土地、宅基地和不符合国土空间规划的历史遗留集体建设用地），并规定低效用地认定的四种情形，是本案例直接点名全域整治的区级依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "蕉岭县农村土地承包经营权流转奖补暂行办法",
    "detail": "规定土地经营权流转奖补条件：须通过梅州市农村产权交易平台公开交易；单一经营主体或种植大户流转耕地300亩以上（含），或流转整村耕地50%以上，或流转集中连片耕地100亩以上（含）；合同2025-01-01以后签订且期限3年及以上；流转后必须用于农业生产并严格遵守「非粮化」「非农化」规定、粮食生产功能区内须确保种植一季以上粮食作物，是全域整治中土地权属调整与耕地保护的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "梅州市基本农田保护经济补偿制度实施细则",
    "detail": "建立基本农田（耕地）保护经济补偿与责任挂钩机制，补贴用于农田水利等后续维护，是全域整治耕地保护补偿激励工具。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "梅州市高标准农田建设项目「先建后补」管理办法",
    "detail": "正文明确项目须「与全域土地综合整治、耕地保护专项规划有效衔接」，以「先建后补」吸引社会资本参与高标准农田建设管护，属全域整治社会资本参与配套工具。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "古驿道文化与客家村落风貌保护政策",
    "detail": "重点修缮历史文物，加强传统风貌、历史建筑及古村落保护传承；充分运用原有新铺圩沿石窟河的八字码头等九座码头遗址，挖掘赣南-潮汕、闽西-潮汕古驿道文化要素，打造特色水路古驿道；推动象岭、金沙两村新村示范村建设，创建3A级景区。",
    "innovation": "九座码头遗址+古驿道文化挖掘，打造特色水路古驿道文旅品牌",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   },
   {
    "no": 14,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "蕉岭县政府、新铺镇政府",
    "policyTitle": "梅州市梅县区全域土地综合整治实施方案成果的公示",
    "detail": "由梅州市自然资源局梅县分局发布，属梅县区（非本案例所在蕉岭县）。依据《广东省自然资源厅关于推进全域土地综合整治扩面提质的通知》（粤自然资修复〔2024〕584号）与《广东省全域土地综合整治项目实施方案编制指南（试行）》编制区级实施方案并公示，附实施方案全文 PDF；可佐证梅州市推进全域整治扩面提质的实际操作路径。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "中共广东省委办公厅、广东省人民政府办公厅关于深入推进全域土地综合整治助力「百县千镇万村高质量发展工程」的意见",
    "docNo": "无文号",
    "issuer": "中共广东省委办公厅、广东省人民政府办公厅",
    "date": "2025-02-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.gd.gov.cn/zzzq/gdyw/content/post_4668970.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "广东省自然资源厅关于完善「指标池」「资金池」管理制度深入推进全域土地综合整治的通知",
    "docNo": "粤自然资规〔2025〕号",
    "issuer": "广东省自然资源厅",
    "date": "2026-05-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.gd.gov.cn/zwgk/zcjd/snzcsd/content/mpost_4903214.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "全域土地综合整治技术导则（广东省地方标准）",
    "docNo": "DB44/T 2771-2025",
    "issuer": "广东省市场监督管理局（归口：广东省自然资源厅）",
    "date": "2025-11-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=482944BE05B8C6A2E06397BE0A0A51C3",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "广东省自然资源厅关于印发《广东省补充耕地指标交易管理办法》的通知",
    "docNo": "粤自然资规〔2022〕号",
    "issuer": "广东省自然资源厅",
    "date": "2022-10-18发布／2022-11-17实施",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://nr.gd.gov.cn/gkmlpt/content/4/4047/post_4047727.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "梅州市全域土地综合整治工作手册（第二版）",
    "docNo": "无文号",
    "issuer": "梅州市自然资源局（编）",
    "date": "2024-03-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.meizhou.gov.cn/zwgk/zfjg/szrzyj/tzgg/content/post_2617511.html",
    "attachUrl": "",
    "sourceNote": "核验说明：原为附件直链（.pdf），已换为门户正文页",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "梅州市闲置土地处置规定",
    "docNo": "未获取（2023年3月16日市政府八届第8次常务会议审议通过）",
    "issuer": "梅州市人民政府",
    "date": "2023-04-10",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://meizhou.gov.cn/zwgk/zfgb/2023n/2023nd6q/szfwj/content/post_2486405.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "27",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "梅州市乡村产业项目点状供地实施细则",
    "docNo": "未获取",
    "issuer": "梅州市自然资源局",
    "date": "2023-01-18",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.meizhou.gov.cn/zwgk/zfgb/2023n/2023nd4q/zcjd/content/post_2469554.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "27",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "梅州市人民政府关于梅州市高标准农田建设规划（2021—2030年）的批复",
    "docNo": "梅市府函〔2023〕52号",
    "issuer": "梅州市人民政府",
    "date": "2023-04-27",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.meizhou.gov.cn/zwgk/jhgh/content/post_2518059.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "梅州市人民政府办公室转发市国土资源局财政局关于梅州市基本农田保护经济补偿制度实施细则的通知",
    "docNo": "梅市府办〔2013〕23号",
    "issuer": "梅州市人民政府办公室",
    "date": "2013-04-10",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://www.meizhou.gov.cn/zwgk/fggw/sfbgswj/content/post_595045.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "梅州市农业农村局 梅州市财政局关于印发《梅州市高标准农田建设项目「先建后补」管理办法》的通知",
    "docNo": "梅市农农〔2026〕11号（经市人民政府同意）",
    "issuer": "梅州市农业农村局、梅州市财政局",
    "date": "2026-03-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.meizhou.gov.cn/zwgk/fggw/bmgfxwj/content/post_2886089.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市财政局",
    "rank": 2,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "关于梅州市梅县区全域土地综合整治实施方案成果的公示",
    "docNo": "未标注（公示件）",
    "issuer": "梅州市自然资源局梅县分局【区县级】",
    "date": "2024-06-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.gdmx.gov.cn/mzmxgzj/gkmlpt/content/2/2643/post_2643576.html",
    "attachUrl": "",
    "sourceNote": "核验说明：附件：《梅州市梅县区全域土地综合整治实施方案》全文 PDF（见上页页尾下载）",
    "level": "区县",
    "levelHit": "县",
    "rank": 1,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "蕉岭县人民政府关于印发《蕉岭县入市集体经营性建设用地低效用地认定和处置办法（试行）》的通知",
    "docNo": "蕉府〔2024〕34号",
    "issuer": "蕉岭县人民政府",
    "date": "2024-12-09 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.jiaoling.gov.cn/xxgk/xxgkzdly/zdlyxgzc/content/post_2712752.html",
    "attachUrl": "",
    "sourceNote": "文书形态：2024-12-19 发布（经 2024-12-06 县政府常务会议研究同意）；自印发之日起试行，有效期两年",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "关于印发蕉岭县农村集体经营性建设用地入市管理办法（试行）的通知",
    "docNo": "蕉府办〔2024〕6号",
    "issuer": "蕉岭县人民政府办公室",
    "date": "2024-03-22 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.jiaoling.gov.cn/zwgk/fggw/zcxwj/content/post_2622216.html",
    "attachUrl": "",
    "sourceNote": "文书形态：2024-04-08 发布（经 2024-02-27 县政府常务会议研究同意）；自公布之日起施行，有效期 3 年",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "关于印发蕉岭县农村土地承包经营权流转奖补暂行办法的通知",
    "docNo": "蕉府〔2025〕14号",
    "issuer": "蕉岭县人民政府",
    "date": "2025-07-10 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.jiaoling.gov.cn/zwgk/fggw/xzfwj/content/post_2799757.html",
    "attachUrl": "",
    "sourceNote": "文书形态：2025-07-18 发布（经 2025-07-09 县政府常务会议研究通过）；自发布之日起实施，有效期 3 年",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "关于印发梅州市蕉岭县高标准农田建设规划（2021—2030年）的通知",
    "docNo": "蕉府办〔2023〕8号",
    "issuer": "蕉岭县人民政府办公室",
    "date": "2023-10-20 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.jiaoling.gov.cn/zwgk/fggw/xfbgswj/content/post_2563525.html",
    "attachUrl": "",
    "sourceNote": "文书形态：2023-10-30 发布（经 2023-10-13 县政府常务会议审议通过）",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "27",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 4,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 14,
   "provinceTools": 5,
   "nationalTools": 0,
   "provinceBasis": 5,
   "nationalBasis": 0,
   "localDocs": 11,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 14,
   "docs": 15,
   "innovations": 3,
   "implementation": 11,
   "pilot": 3,
   "gradeA": 13,
   "gradeB": 2,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "28",
  "dir": "28_重庆市涪陵区大顺乡",
  "title": "重庆市涪陵区大顺乡全域土地综合整治政策激励工具箱（1.0版）",
  "name": "重庆市涪陵区大顺乡",
  "batch": "第二批",
  "province": "重庆",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "9700 余万元（社会资本）",
  "summary": "以「多规合一」为切入点形成「一张蓝图」，引入太极集团等企业发展林下中药材，2023年林下中药材产值达3.1亿元；小微型农机化率由53%提升到78%，试点区年接待游客由整治前100人次跃升至3万余人次。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以重庆市配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具13项（其中创新工具3项）、政策文件18份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "涪陵区政府、大顺乡政府",
    "policyTitle": "台面重构与农机化率提升政策",
    "detail": "通过实施台面重构、田块归并等土地平整工程，实现小田并大田，促进耕地集中连片，实现小微型农机化率由53%提升到78%；整治后耕地利用率达到100%，新增土地流转2750亩；农户公路通达率和田间生产道路通达率均达到100%。",
    "innovation": "台面重构推动农机化率提升25个百分点，耕地利用率达100%",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "涪陵区政府、大顺乡政府",
    "policyTitle": "重庆市高标准农田建设规划（2021—2030年）",
    "detail": "市政府批复高标准农田建设规划，确立「集中连片、整村整镇推进」布局，是全域整治农用地整理与永久基本农田建成的上位依据。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "涪陵区政府、大顺乡政府",
    "policyTitle": "加强规划统筹和自然资源要素保障促进乡村全面振兴",
    "detail": "强化规划统筹与自然资源要素保障、服务乡村振兴，是全域整治用地保障与规划衔接的配套政策。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "涪陵区政府、大顺乡政府",
    "policyTitle": "加强村庄规划编制管理工作",
    "detail": "村庄规划编制管理要求，是全域整治「村庄规划与实施方案同步编制」环节的直接依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "涪陵区政府、大顺乡政府",
    "policyTitle": "成渝地区双城经济圈「六江」生态廊道建设规划（2022—2035年）",
    "detail": "流域生态廊道建设规划，与全域整治中生态保护修复、山水林田湖草一体化治理任务相衔接。",
    "innovation": "",
    "deps": [
     11,
     17,
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "区县"
    ]
   },
   {
    "no": 6,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "涪陵区政府、大顺乡政府",
    "policyTitle": "涪陵区推进要素市场化配置改革实施方案",
    "detail": "在「优化农村土地盘活机制」中明确全面推开农村集体经营性建设用地入市，允许通过全域土地综合整治将零星地块归并为大块宗地入市，实现集体经营性建设用地与国有建设用地同等入市、同权对待；同节「优化存量用地盘活机制」提出2026—2027年盘活存量用地安排，是本案例唯一直接点名「全域土地综合整治」的区本级现行有效文件。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "涪陵区政府、大顺乡政府",
    "policyTitle": "重庆市涪陵区集体土地征收补偿安置实施办法",
    "detail": "规定区片综合地价构成（土地补偿费30%、安置补助费70%）、安置补助费按36000元/人发放给人员安置对象，并分章规定征地补偿、人员安置、住房安置，明确区农业农村委负责征地涉及的农村土地承包经营及合同管理与农村宅基地管理、镇街负责辖区内征地相关工作，是全域整治中集体土地征收补偿安置的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "涪陵区政府、大顺乡政府",
    "policyTitle": "规范农村宅基地审批管理工作",
    "detail": "对农村宅基地登记条件、程序、所需材料及各部门职责分工作出规定，是全域整治中宅基地审批管理的区级依据。（正文全文未公开，内容见区规划自然资源局答复函引用）",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "重庆市涪陵区规划和自然资源局、重庆市涪陵区农业农村委员会",
    "policyTitle": "农村宅基地标准和审批流程",
    "detail": "对宅基地申请条件、审批流程、材料目录及表格样式作出明确，推行联审联办机制、简化办事程序，是全域整治中宅基地及住房建设管理的区级依据。（正文全文未公开，内容见区规划自然资源局答复函引用）",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "重庆市涪陵区农业农村委员会",
    "policyTitle": "印发重庆市涪陵区宅基地基础信息调查实施方案",
    "detail": "对宅基地开展专项调查，建立包含宅基地权利人、地类、四至方位、宗地面积、房屋建筑面积以及审批、使用、流转、监管等信息在内的农村宅基地数据库，是全域整治中宅基地及住房建设管理的区级证据链依据。（正文全文未公开，内容见区规划自然资源局答复函引用）",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "涪陵区政府、大顺乡政府",
    "policyTitle": "林下仿野生中药材产业与龙头企业引领政策",
    "detail": "先后引进太极集团有限公司、重庆天同生态农业有限公司等龙头企业，吸引社会资本投入9700余万元，在不影响林地生态功能的前提下大力发展林下仿野生生态种植灵芝、黄精、石斛、仙茅等中药材，复合利用林下空间，2023年林下中药材产值达到3.1亿元。",
    "innovation": "林下仿野生中药材复合利用模式，2023年产值达3.1亿元",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 12,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "涪陵区政府、大顺乡政府",
    "policyTitle": "「多规合一」一张蓝图与部门协同政策",
    "detail": "以「多规合一」为切入点，通过整合项目、聚集资金、协调用地布局，形成了管到底的「一张蓝图」，促进部门间协同配合和土地资源高效利用；结合农文旅和红色教育，打造「绿色+红色」经济，助推乡村振兴驶入「快车道」。",
    "innovation": "「多规合一」一张蓝图管到底，促进部门协同与用地布局协调",
    "deps": [
     1,
     2,
     3,
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "涪陵区政府、大顺乡政府",
    "policyTitle": "重庆市村庄规划编制技术导则",
    "detail": "村庄规划编制技术导则，为全域整治项目区内村庄布局优化、居民点整理提供技术标准。",
    "innovation": "",
    "deps": [
     4,
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "重庆市全域土地综合整治改革方案（2025—2029年）",
    "docNo": "无文号",
    "issuer": "重庆市经济体制改革专项小组",
    "date": "2025-04-08",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/jytablqk/202508/t20250805_14877169_wap.html",
    "attachUrl": "",
    "sourceNote": "核验说明：官方答复函引用其名称与日期，全文未公开",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "28",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "重庆市规划和自然资源局关于印发《重庆市全域土地综合整治项目规划设计导则（试行）》的通知",
    "docNo": "渝规资发〔2022〕53号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2022-12-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/qtwj/202304/t20230428_11923465.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "28",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "重庆市全域土地综合整治实施方案编制指南（试行）",
    "docNo": "无文号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2022-09-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/qtwj/202304/t20230428_11923480.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "28",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "重庆市财政局、重庆市规划和自然资源局关于印发《重庆市国土空间生态修复重点专项资金管理办法》的通知",
    "docNo": "渝财建〔2021〕100号",
    "issuer": "重庆市财政局、重庆市规划和自然资源局",
    "date": "2021-06-10",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://czj.cq.gov.cn/zwgk_268/zfxxgkml/zcwj/qtwj/202106/t20210610_9387659.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "28",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "重庆市人民政府办公厅关于印发《重庆市鼓励和支持社会资本参与生态保护修复实施方案》的通知",
    "docNo": "渝府办发〔2023〕32号",
    "issuer": "重庆市人民政府办公厅",
    "date": "2023-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/qtgw/202304/t20230417_11885285.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "28",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "重庆市规划和自然资源局关于印发重庆市农村集体经营性建设用地入市交易规则（试行）的通知",
    "docNo": "渝规资规范〔2023〕8号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2023-06-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://nyncw.cq.gov.cn/ztzl_161/rdzt/xczx/zcwj_249776/bm_257463/202312/t20231208_12678198_wap.html",
    "attachUrl": "",
    "sourceNote": "核验说明：相关入市交易规则已公开，本通知全文未公开",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "28",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "重庆市人民政府关于重庆市高标准农田建设规划（2021—2030年）的批复",
    "docNo": "未获取",
    "issuer": "重庆市人民政府",
    "date": "2022-04-26",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/qtgw/202204/t20220426_10660952.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "28",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "重庆市规划和自然资源局全面深化改革委员会关于加强规划统筹和自然资源要素保障促进乡村全面振兴的通知",
    "docNo": "未获取",
    "issuer": "重庆市规划和自然资源局",
    "date": "2025-01-23",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/qtwj/202501/t20250123_14197995.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "28",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "重庆市规划和自然资源局关于加强村庄规划编制管理工作的通知",
    "docNo": "未获取",
    "issuer": "重庆市规划和自然资源局",
    "date": "2024-08-28",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/qtwj/202408/t20240828_13564173.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "28",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "重庆市规划和自然资源局关于印发《重庆市村庄规划编制技术导则》的通知",
    "docNo": "未获取",
    "issuer": "重庆市规划和自然资源局",
    "date": "2024-08-28",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/qtwj/202408/t20240828_13564142.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "28",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "重庆市人民政府办公厅 四川省人民政府办公厅关于印发《成渝地区双城经济圈「六江」生态廊道建设规划（2022—2035年）》的通知",
    "docNo": "未获取",
    "issuer": "重庆市人民政府办公厅、四川省人民政府办公厅",
    "date": "2023-11-22",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/cylhfw/202311/t20231121_12584968.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "28",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "涪陵区推进要素市场化配置改革实施方案",
    "docNo": "涪陵府发〔2026〕9号",
    "issuer": "重庆市涪陵区人民政府",
    "date": "2026-09-20 印发",
    "status": "现行有效（列于区政府行政规范性文件「现行有效文件（59件）」目录）",
    "grade": "核验A级",
    "url": "http://www.fl.gov.cn/zfxxgk_206/zcwj/xzgfxwj/202609/t20260924_16129375.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "28",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "重庆市涪陵区集体土地征收补偿安置实施办法",
    "docNo": "涪陵府发〔2021〕27号",
    "issuer": "重庆市涪陵区人民政府",
    "date": "2021-07-01 印发",
    "status": "现行有效（列于区政府行政规范性文件现行有效目录）",
    "grade": "核验A级",
    "url": "http://www.fl.gov.cn/zfxxgk_206/zcwj/xzgfxwj/202107/t20210701_9444115.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "28",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "关于规范农村宅基地审批管理工作的通知",
    "docNo": "涪陵府办发〔2020〕112号",
    "issuer": "重庆市涪陵区人民政府办公室",
    "date": "2020 年印发",
    "status": "",
    "grade": "核验B级",
    "url": "https://ghzrzyj.cq.gov.cn/zz/flq/zwgk/jczwgk/jytablqk_373136/202507/t20250701_14766841.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未公开，效力以区规划自然资源局答复函引用佐证（发布页待补）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "28",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "关于印发农村宅基地标准和审批流程的通知",
    "docNo": "涪农委发〔2020〕78号",
    "issuer": "重庆市涪陵区规划和自然资源局、重庆市涪陵区农业农村委员会",
    "date": "2020 年印发",
    "status": "",
    "grade": "核验B级",
    "url": "https://ghzrzyj.cq.gov.cn/zz/flq/zwgk/jczwgk/jytablqk_373136/202606/t20260623_15771673.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未公开（发布页待补）",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "28",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "关于印发重庆市涪陵区宅基地基础信息调查实施方案的函",
    "docNo": "涪农委函〔2023〕315号",
    "issuer": "重庆市涪陵区农业农村委员会",
    "date": "2023 年印发",
    "status": "",
    "grade": "核验B级",
    "url": "https://ghzrzyj.cq.gov.cn/zz/flq/zwgk/jczwgk/jytablqk_373136/202507/t20250701_14766841.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未公开（发布页待补）",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "28",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "重庆市涪陵区人民政府办公室关于印发涪陵区国土空间生态保护修复规划（2021—2035年）的通知",
    "docNo": "涪陵府办发〔2023〕92号",
    "issuer": "重庆市涪陵区人民政府办公室",
    "date": "2023-12-20 印发",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.fl.gov.cn/zfxxgk_206/fdzdgknr/ghxx/qygh/202312/t20231220_12728446_zbb.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "28",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "重庆市涪陵区人民政府关于印发重庆市涪陵区「绿水青山就是金山银山」实践创新基地建设实施方案（2023—2028年）的通知",
    "docNo": "涪陵府发〔2024〕3号",
    "issuer": "重庆市涪陵区人民政府",
    "date": "2024-02-18 印发",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.fl.gov.cn/zfxxgk_206/zcwj/qtgw/202402/t20240218_12928451.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "28",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 5,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 13,
   "provinceTools": 8,
   "nationalTools": 0,
   "provinceBasis": 8,
   "nationalBasis": 0,
   "localDocs": 7,
   "provinceDocs": 11,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 13,
   "docs": 18,
   "innovations": 3,
   "implementation": 12,
   "pilot": 1,
   "gradeA": 8,
   "gradeB": 10,
   "revoked": 0,
   "mechanisms": 4
  }
 },
 {
  "id": "29",
  "dir": "29_四川省自贡市大安区牛佛镇",
  "title": "四川省自贡市大安区牛佛镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "四川省自贡市大安区牛佛镇",
  "batch": "第二批",
  "province": "四川",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "8.5 亿元",
  "summary": "探索「资金整合+融资贷款+社会资本+债券包装」投入模式，实施22个子项目，建成「一园六区」示范园区，亩均土地流转收入由300—400元/亩/年增至600—800元/亩/年。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以四川省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具13项（其中创新工具3项）、政策文件13份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "自贡市大安区政府、牛佛镇政府",
    "policyTitle": "全域实施深化城乡建设用地增减挂钩试点项目",
    "detail": "以全域实施增减挂钩为抓手，明确拆旧复垦年度任务（2018年各1000亩以上）、节余挂钩指标管理、宅基地自愿有偿退出与集中居住区建设，直接对应全域整治建设用地整理。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "自贡市大安区政府、牛佛镇政府",
    "policyTitle": "「一园六区」稻渔综合种养与土地流转增收政策",
    "detail": "推行「稻鱼、稻虾、稻蛙」等轮作共生产业发展模式，由公司平台和经济联合社共同开发，建成1000亩水稻核心区、1000亩稻渔示范区、1000亩机耕示范区、600亩农耕研学区、300亩稻蛙孵化区、2000亩稻虾孵化区的「一园六区」示范园区；整治后的土地已全部流转，亩均土地流转收入由300—400元/亩/年增加至600—800元/亩/年。",
    "innovation": "「一园六区」稻渔综合种养格局，亩均流转收入实现翻倍",
    "deps": [
     1,
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "自贡市大安区政府、牛佛镇政府",
    "policyTitle": "自贡市「十四五」推进农业农村现代化规划",
    "detail": "正文专章「推进全域土地综合整治试点工作」，明确大安区牛佛镇国家级试点与耕地保护、高标准农田、增减挂钩、撂荒地整治任务。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "自贡市大安区政府、牛佛镇政府",
    "policyTitle": "自贡市国土空间总体规划（2021—2035年）",
    "detail": "市级国土空间总体规划，是全域整治项目区划定、永久基本农田与村庄布局调整的上位依据。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "自贡市大安区政府、牛佛镇政府",
    "policyTitle": "自贡市「十四五」自然资源利用规划",
    "detail": "自然资源利用规划统筹耕地保护、土地节约集约利用与生态修复，是全域整治资源要素配置的上位专项规划。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "自贡市大安区政府、牛佛镇政府",
    "policyTitle": "自贡市乡村振兴用地指南（2025年）",
    "detail": "系统梳理乡村振兴用地涉及的法律、法规、规章与政策要点，建立乡村建设用地审批管理制度，是全域整治「乡村振兴用地保障」方向的市级操作依据。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "大安区政府、牛佛镇政府",
    "policyTitle": "自贡市大安区国家储备林项目林地流转和林木收储实施方案",
    "detail": "确定全区计划实施集体商品林流转、收储约3万亩，范围涉及全区10个镇街并明确含牛佛镇；建设主体为四川盛安土地整理有限公司（经区政府授权在项目区域内实施）；流转方式为入股／租赁／入股加租赁三种、林地流转期限30年，是全域整治中土地权属调整与产业用地保障的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 8,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "自贡市大安区政府、牛佛镇政府",
    "policyTitle": "「资金整合+融资贷款+社会资本+债券包装」四位一体投入模式",
    "detail": "总投资8.5亿元，探索采用「资金整合+融资贷款+社会资本+债券包装」的投入模式提供资金保障。充分整合发改、自然资源、农业农村、水利、交通等多部门资金1亿元，分三期向银行申请中长期融资贷款7.3亿元，同步发行乡村振兴生态农旅融合产业区基础设施建设项目专项债券资金9亿元。",
    "innovation": "「资金整合+融资贷款+社会资本+债券包装」四位一体投入模式，破解大额资金需求",
    "deps": [
     1,
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 9,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "自贡市大安区政府、牛佛镇政府",
    "policyTitle": "自贡市征收土地补偿补助安置办法",
    "detail": "征地补偿补助安置标准，是全域整治中建设用地整理、搬迁安置与群众权益保障的配套依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "大安区政府、牛佛镇政府",
    "policyTitle": "自贡市大安区国家储备林项目贷款资金管理办法（试行）",
    "detail": "规定金融贷款资金专款专用、地方政府和建设主体不得挪作他用并严禁新增隐性债务；项目可享受财政贴息政策，财政补贴资金可用于项目资本金、贴息资金用于偿还贷款本息；并分列区财政局（资本金筹集、融资方案、贴息申领）、区自然资源局（制定办法、审核监督贷款资金使用）与建设主体职责，是全域整治中项目融资与资金监管的区级依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "大安区政府、牛佛镇政府",
    "policyTitle": "大安区加快推进农产品品牌建设实施方案",
    "detail": "统筹安排农产品品牌建设奖补资金、优化财政涉农资金整合投入投向，并结合农村土地确权依法有序推进土地向专业大户、家庭农场集中、发展适度规模经营，是全域整治中涉农资金统筹整合与土地权属调整的区级旁证依据（本件主题为农业品牌，关联度较弱）。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "自贡市大安区政府、牛佛镇政府",
    "policyTitle": "政策性金融支持全域土地综合整治",
    "detail": "依据《关于政策性金融支持全域土地综合整治工作的通知》，牛佛镇整治项目对接政策性金融机构，按省级部署争取中长期信贷支持，用于农用地整理、建设用地整理与生态修复等工程，与「资金整合＋融资贷款＋社会资本＋债券包装」四位一体投入模式形成互补。",
    "innovation": "政策性金融中长期信贷与多元投入模式互补",
    "deps": [
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "自贡市大安区政府、牛佛镇政府",
    "policyTitle": "「三区共建」与沉浸式文旅景区打造政策",
    "detail": "系统推进产业园区、生活社区、生态景区「三区」共建，新建集地域文化、建筑风格、田园风光于一体的18个集中居住区，打造「红旗飘飘·津津乐稻」「拾光漫步·醉美农科」等示范村庄；建成3条古镇生活画廊，创立「牛佛五味、自在牛佛」特色品牌，牛佛古镇年接待游客量达30万人次以上。",
    "innovation": "「三区共建」+沉浸式体验景区，年接待游客30万人次以上",
    "deps": [
     1,
     2,
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "四川省人民政府办公厅关于学习运用「千万工程」经验深入推进全域土地综合整治工作的实施意见",
    "docNo": "川办发〔2025〕35号",
    "issuer": "四川省人民政府办公厅",
    "date": "2025-10-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.sc.gov.cn/10462/zfwjts/2025/10/21/69ae6f9c343a44ed96db796ecdc01de2.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "29",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "中共四川省委办公厅、四川省人民政府办公厅关于深化农村土地要素市场化改革的意见",
    "docNo": "川委办〔2025〕10号",
    "issuer": "中共四川省委办公厅、四川省人民政府办公厅",
    "date": "2025-04-30",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.sc.gov.cn/10462/c110462/2025/4/30/ebac0f562fea43c9ba3fd79426d4ecfc.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "29",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "关于政策性金融支持全域土地综合整治工作的通知",
    "docNo": "无文号",
    "issuer": "四川省自然资源厅、国家开发银行四川省分行、中国农业发展银行四川省分行",
    "date": "2025-11-02",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://dnr.sc.gov.cn/scdnr/scgsgg/2025/12/2/0849d94472dc497191963981c9994549.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "29",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "四川省全域土地综合整治项目管理办法（征求意见稿）",
    "docNo": "无文号",
    "issuer": "四川省自然资源厅",
    "date": "2025-12-05",
    "status": "征求意见中",
    "grade": "核验A级",
    "url": "https://dnr.sc.gov.cn/scdnr/yjzjres/2026/1/9/30887125f6fa4bbc959c4ae71888fdef.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "29",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "自贡市人民政府关于印发《自贡市「十四五」推进农业农村现代化规划》的通知",
    "docNo": "自府发〔2022〕15号",
    "issuer": "自贡市人民政府",
    "date": "2022-06-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zg.gov.cn/zgsrmzf/zxgh/pc/content/content_1893273278369136640.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "29",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "自贡市人民政府关于印发《自贡市国土空间总体规划（2021—2035年）》的通知",
    "docNo": "未获取",
    "issuer": "自贡市人民政府",
    "date": "2025-02-11",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.zg.gov.cn/zgsrmzf/kjgh/pc/content/content_1892812998048645120.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "29",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "自贡市人民政府关于印发《自贡市「十四五」自然资源利用规划》的通知",
    "docNo": "未获取",
    "issuer": "自贡市人民政府",
    "date": "2022-11-23",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.zg.gov.cn/zgsrmzf/zxgh/pc/content/content_1892813101467598848.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "29",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "自贡市人民政府关于印发《自贡市征收土地补偿补助安置办法》的通知",
    "docNo": "自府规〔2025〕3号",
    "issuer": "自贡市人民政府",
    "date": "2025-03-11",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.zg.gov.cn/zgsrmzf/zfgfxwj387/pc/content/content_1911627072513470464.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "29",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "自贡市人民政府关于全域实施深化城乡建设用地增减挂钩试点项目的通知",
    "docNo": "未获取（通知未标注文号）",
    "issuer": "自贡市人民政府",
    "date": "2018-10-19",
    "status": "已过有效期（原文载「有效期为5年」）",
    "grade": "核验A级",
    "url": "http://zgs.sczwfw.gov.cn/art/2018/11/16/art_15773_38704.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "29",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "自贡市自然资源和规划局关于印发《自贡市乡村振兴用地指南（2025年）》的通知",
    "docNo": "未标注（通知未载文号）",
    "issuer": "自贡市自然资源和规划局",
    "date": "2025-12-31（官网发布 2026-01-08）",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zg.gov.cn/zgsrmzf/c00065/pc/content/content_2009157153921613824.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "29",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "自贡市大安区国家储备林项目林地流转和林木收储实施方案",
    "docNo": "大府办发〔2024〕10号",
    "issuer": "自贡市大安区人民政府办公室",
    "date": "2024-05-11 印发（2024-05-14 公开）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.zgda.gov.cn/daqrmzf/xzgfx655/pc/content/2021486566327681024/content_2021486566327681024.html",
    "attachUrl": "",
    "sourceNote": "文书形态：列于区政府门户「行政规范性文件」现行栏目，未见于「失效废止文件」栏目",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "29",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "自贡市大安区国家储备林项目贷款资金管理办法（试行）",
    "docNo": "大府办发〔2024〕11号",
    "issuer": "自贡市大安区人民政府办公室",
    "date": "2024-05-11 印发（2024-05-14 公开）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.zgda.gov.cn/daqrmzf/xzgfx655/pc/content/2021488110620082176/content_2021488110620082176.html",
    "attachUrl": "",
    "sourceNote": "文书形态：同属「行政规范性文件」现行栏目",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "29",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "大安区加快推进农产品品牌建设实施方案",
    "docNo": "大府办发〔2023〕20号",
    "issuer": "自贡市大安区人民政府办公室",
    "date": "2023-07-07 印发（2023-07-14 公开）",
    "status": "",
    "grade": "核验A级",
    "url": "https://zgs.sczwfw.gov.cn/art/2023/7/14/art_63573_240163.html?areaCode=510300000000",
    "attachUrl": "",
    "sourceNote": "文书形态：自贡市／大安区政务服务网政策文件栏目在列",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "29",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 5,
    "innovations": 2
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 13,
   "provinceTools": 4,
   "nationalTools": 0,
   "provinceBasis": 4,
   "nationalBasis": 0,
   "localDocs": 9,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 13,
   "docs": 13,
   "innovations": 4,
   "implementation": 9,
   "pilot": 4,
   "gradeA": 10,
   "gradeB": 3,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "30",
  "dir": "30_陕西省榆林市绥德县满堂川镇",
  "title": "陕西省榆林市绥德县满堂川镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "陕西省榆林市绥德县满堂川镇",
  "batch": "第二批",
  "province": "陕西",
  "positioning": "第二批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "整理耕地28.1公顷，复垦腾退13.2公顷，土地利用率提升32%，生态系统物种多样性从38个提升至51个，林草覆盖度从13%提升至30%以上。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以陕西省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具11项（其中创新工具3项）、政策文件9份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "绥德县政府、满堂川镇政府",
    "policyTitle": "黄土高原坡改梯与高标准农田建设政策",
    "detail": "整治区域内3个村共整理耕地28.1公顷，复垦腾退废旧建设用地13.2公顷，建设高标准农田36.2公顷，新增耕地15.73公顷，新增耕地率6%，优化了村庄用地布局，土地利用率提升了32%，实现「田成方、树成行、路相通、渠相连」的国土空间新格局。",
    "innovation": "黄土高原地区坡改梯与废旧建设用地复垦协同推进",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "绥德县政府、满堂川镇政府",
    "policyTitle": "灾毁地治理与生态系统物种多样性提升政策",
    "detail": "推进实施生态保护修复工程，生态系统物种多样性从实施前的38个提升至51个，重点领域林草覆盖度由实施前的13%提升至30%以上，生物群落的构成增加13个子目；实施灾毁地治理，使地面坡度下降至6°以下，耕地质量提升率达到90%以上，景观的协调性从实施前的单调单色提升至全色域。",
    "innovation": "以物种多样性、林草覆盖度、景观全色域多维指标衡量生态修复成效",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "绥德县政府、满堂川镇政府",
    "policyTitle": "关于高质量推进高标准农田建设的实施意见（试行）",
    "detail": "明确「逐步把永久基本农田全部建成高标准农田」、土地平整与田块整治、优化永久基本农田布局并推进永久基本农田与林草地空间置换。",
    "innovation": "",
    "deps": [
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "绥德县政府、满堂川镇政府",
    "policyTitle": "榆林市国土空间总体规划（2021—2035年）",
    "detail": "市级国土空间总体规划是全域整治项目区划定与实施方案报批的上位依据。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "绥德县政府、满堂川镇政府",
    "policyTitle": "榆林市矿产资源总体规划（2021-2025年）",
    "detail": "矿产资源规划统筹矿区生态修复与绿色矿山建设，对应全域整治中矿山生态修复类任务。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "绥德县政府、满堂川镇政府",
    "policyTitle": "在生态保护上下苦功夫",
    "detail": "32项措施中明确「治土护绿」、科学开展国土绿化、矿区生态修复与碳汇核算体系，是全域整治生态保护修复类市级配套方案。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "绥德县政府、满堂川镇政府",
    "policyTitle": "榆林市严管严控防止违法用地十五条措施",
    "detail": "严控违法占用耕地、强化用途管制，是全域整治「消除违法占耕、守牢耕地红线」任务的地方配套措施。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "绥德县政府、满堂川镇政府",
    "policyTitle": "绥德县人民政府关于进一步加强国有建设用地使用权出让价款收缴管理",
    "detail": "规定出让价款范围（招拍挂／协议出让总成交价款，转让划拨土地或利用原划拨土地经营性建设、改变用途与容积率等条件应补缴价款），并明确不得以「招商引资」「旧城改造」「国有企业改制」等名义减免土地出让收入、搞「零地价」「负地价」或以土地换项目、先征后返，是全域整治中土地出让收入管理的区级依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 9,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "绥德县政府、满堂川镇政府",
    "policyTitle": "省级自然资源生态修复保护专项资金管理",
    "detail": "依据《省级自然资源生态修复保护专项资金管理办法》，满堂川镇整治中的生态修复保护类工程按省级专项资金申报与使用要求组织实施，规范资金分配、拨付与绩效管理，保障坡改梯、灾毁地治理等修复工程投入。",
    "innovation": "按省级专项资金办法规范修复工程资金分配与绩效管理",
    "deps": [
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 10,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "绥德县农业农村局",
    "policyTitle": "绥德县农业农村局关于进一步加强全县高标准农田管护工作",
    "detail": "明确管护范围为2019年以来已建成并上图入库的高标准农田（含田块整治、灌溉与排水、田间道路、农田输配电、农田防护、附属工程6类），按「谁受益、谁管护，谁使用、谁管护」与「县负总责、乡镇监管、村为主体」压实责任、建成交付后管护责任同步移交各镇并签订管护协议，并规定6类工程管护标准与严禁「非农化」「非粮化」、严禁破坏耕作层的保护机制，是全域整治中高标准农田管护的区级依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "绥德县政府、满堂川镇政府",
    "policyTitle": "「全域」融合发展产业链与写生基地培育政策",
    "detail": "充分发挥全域土地综合整治的平台作用，助力农业产业植入，建成现代绿色采摘大棚25座，发展特色种植业1200亩，完善一批文旅服务设施，每年接待游客8万余人次、接待写生人员近5000人次，增加经济收入近200万元，打造了一条满堂川镇「全域」融合发展产业链。",
    "innovation": "以写生基地+采摘大棚培育「全域」文旅融合产业链",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "陕西省自然资源厅等六部门关于学习运用「千万工程」经验深入推进全域土地综合整治工作的实施意见",
    "docNo": "陕自然资规〔2025〕520号",
    "issuer": "陕西省自然资源厅、陕西省财政厅、陕西省生态环境厅、陕西省水利厅、陕西省农业农村厅、陕西省林业局",
    "date": "2025-05-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.shaanxi.gov.cn/zcfg/zfwj/stgfwj/202505/t20250527_3523764.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省林业局",
    "rank": 3,
    "caseId": "30",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "陕西省财政厅、陕西省自然资源厅关于印发《省级自然资源生态修复保护专项资金管理办法》的通知",
    "docNo": "无文号",
    "issuer": "陕西省财政厅、陕西省自然资源厅",
    "date": "2024-06-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.shaanxi.gov.cn/zcfg/zfwj/stqtwj/202501/t20250103_3279148.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "30",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "榆林市人民政府办公室印发《关于高质量推进高标准农田建设的实施意见（试行）》的通知",
    "docNo": "榆政办发〔2024〕33号",
    "issuer": "榆林市人民政府办公室",
    "date": "2024-10-25",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://yl.gov.cn/zwgk/zc/qtwj/szfbwj/202411/t20241101_1923207.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "30",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "榆林市人民政府关于印发榆林市严管严控防止违法用地十五条措施的通知",
    "docNo": "未获取",
    "issuer": "榆林市人民政府",
    "date": "2023-02-22",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.yl.gov.cn/zwgk/zc/qtwj/szfwj_3122/202302/t20230222_71984.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "30",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "《榆林市国土空间总体规划（2021—2035年）》",
    "docNo": "未获取",
    "issuer": "榆林市自然资源和规划局（规划经陕西省人民政府批复同意）",
    "date": "2024-12-19",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://yl.gov.cn/zwgk/fdzdgknr/ghjh/fzgh/202509/t20250908_2034638.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "30",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "榆林市人民政府关于印发《榆林市矿产资源总体规划（2021-2025年）》的通知",
    "docNo": "未获取",
    "issuer": "榆林市人民政府",
    "date": "2023-01-19",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.yl.gov.cn/zwgk/zc/qtwj/szfwj_3122/202301/t20230119_48779.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "30",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "在生态保护上下苦功夫实施方案",
    "docNo": "未获取",
    "issuer": "榆林市人民政府办公室",
    "date": "2023-02",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://yl.gov.cn/ywdt/ttxw/202302/t20230208_52941.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "30",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "绥德县人民政府关于进一步加强国有建设用地使用权出让价款收缴管理的意见",
    "docNo": "绥政函〔2024〕2号",
    "issuer": "绥德县人民政府（门户\"发布机构\"栏标注\"绥德县人民政府办公室\"）",
    "date": "2024-01-24 成文、印发（经县政府常务会议研究同意）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.sxsd.gov.cn/zfxxgk/fdzdgknr/zfwj/xzgfxwj/202401/t20240124_1623648.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「效力状态」栏标注「有效」，正文自述有效期五年",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "30",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "绥德县农业农村局关于进一步加强全县高标准农田管护工作的公告",
    "docNo": "未获取（公告未标注文号）",
    "issuer": "绥德县农业农村局",
    "date": "2026-04-13 发布",
    "status": "",
    "grade": "核验B级",
    "url": "https://nyj.yl.gov.cn/yw/tzgg/202604/t20260413_2088857_wap.html",
    "attachUrl": "",
    "sourceNote": "文书形态：公告性质（非规范性文件正式印发件）；发布渠道为榆林市农业农村局网站转载县局公告（来源标注「绥德三农微信公众号」）",
    "level": "区县",
    "levelHit": "县农业农村局",
    "rank": 1,
    "caseId": "30",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 6,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 11,
   "provinceTools": 5,
   "nationalTools": 0,
   "provinceBasis": 5,
   "nationalBasis": 0,
   "localDocs": 6,
   "provinceDocs": 3,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 11,
   "docs": 9,
   "innovations": 4,
   "implementation": 10,
   "pilot": 1,
   "gradeA": 4,
   "gradeB": 5,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "31",
  "dir": "31_江苏省南通市如东县新店镇",
  "title": "江苏省南通市如东县新店镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江苏省南通市如东县新店镇",
  "batch": "第三批",
  "province": "江苏",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "3.26 亿元",
  "summary": "形成「3+6+4」全域土地综合整治工作模式，建成连片高标田1.02万亩，填埋1600个废弃沟塘净增耕地2830亩，项目村净增村营收入超600万元，打造「味稻小镇」。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以江苏省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具13项（其中创新工具3项）、政策文件15份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "永久基本农田调整与废弃沟塘复垦净增耕地政策",
    "detail": "项目调整永久基本农田，解决农田「碎片化」等问题，建成1.02万亩连片高标田；拆除零散农房88户，户均宅基地面积减少57%，结余指标用于三产融合；填埋废弃沟塘净增耕地2830亩，年增收入约283万元；连片耕地1.62万亩，年增收入约324万元，合计年增超600万元；预留300亩一般农用地指标，预计增加收入100万元。",
    "innovation": "废弃沟塘填埋净增耕地2830亩，形成稳定的年增收入约600万元",
    "deps": [
     3,
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "县政府办公室关于下达2022年度县级土地整治任务",
    "detail": "下达年度县级土地整治任务并规定补助标准：占补平衡新增水田7万元/亩（其中2万元/亩补助到村居）、非水田6万元/亩；增减挂钩按完成率分档（＜80%按10万元/亩、≥80%按15万元/亩、全部完成按20万元/亩）；整村或整区域推进（零散宅基地拆除复垦）按35万元/亩；经费包干160／180／200元/亩，是全域整治中土地整治任务与补助的区级依据。（年度任务类文件，效力待复核）",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "沟渠路网与生态河道综合配套政策",
    "detail": "建成沟渠144.5公里、机耕路48.9公里、修复生态河道17.5公里、主干道绿化6公里、配套路灯11.7公里，全面提升农业基础设施水平与乡村人居环境。",
    "innovation": "以长里程沟渠路网配套支撑万亩连片高标准农田运营",
    "deps": [
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "南通市国土空间生态保护和修复规划（2021—2035年）",
    "detail": "专设「国土综合整治」章节，明确如东县新店镇、洋口镇等全域土地综合整治试点及农用地、建设用地整治任务。",
    "innovation": "",
    "deps": [
     1,
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "南通市高标准农田建设规划（省高标准农田建设区域化整体推进示范区规划）（2021—2030年）",
    "detail": "高标准农田建设为全域整治农用地整治核心子项，并要求优先将建成高标准农田划入永久基本农田储备区。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "通州区集体经营性建设用地入市试点实施方案",
    "detail": "集体经营性建设用地入市是全域整治建设用地整理与指标价值实现的关键配套工具。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "进一步推进工业用地提质增效的实施意见（试行）",
    "detail": "低效用地再开发规划计划、产业混合用地、地下空间复合利用、增存挂钩，属低效用地再开发配套工具。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "规范做好各类土地整治项目中耕作层剥离再利用工作",
    "detail": "耕作层剥离再利用是全域整治实现建设占用耕地「占优补优、占水补水」的核心配套政策。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "县政府办公室关于切实做好2026年度耕地地力保护补贴发放工作",
    "detail": "规定耕地地力保护补贴标准120元/亩，明确占补平衡、增减挂钩等项目补充耕地以自然资源和规划部门及农业农村部门验收合格面积计发，并将长期抛荒耕地、占补平衡与增减挂钩中「补」的面积质量不达耕种条件的耕地列入不予补贴情形，是全域整治中耕地保护补偿的区级依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "如东县农业农村局、如东县财政局",
    "policyTitle": "如东县高标准农田建设工程设施管护实施办法",
    "detail": "规定田块整治工程管护要求（土地平整度、耕作层厚度、田埂护坡无垮塌、无闲置撂荒）与农田防护及生态环境保护工程管护标准，明确管护资金由县镇两级筹集并可从高标准农田流转增值收益中提取，是全域整治中高标准农田建设工程设施管护的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "「3+6+4」工作模式与「土地整治+产业导入」政策",
    "detail": "衔接市、县「十四五」规划，形成「3+6+4」工作模式，通过「土地整治+产业导入」引入田园综合体等新业态，推动三产融合；依托「味稻小镇」发展「稻+」模式，引入龙头企业，成立稻米产业化联合体，打造全产业链，预计年营收1亿元，利税2000万元，提供超200个就业岗位，辐射带动5000户农户。",
    "innovation": "「3+6+4」工作模式+「土地整治+产业导入」，形成稻米全产业链",
    "deps": [
     2,
     3,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "南通市县（市）区政府（管委会）耕地保护责任目标考核办法",
    "detail": "第十二条明确考核结果在安排国土空间综合整治项目、耕地提质改造项目、耕地质量提升资金等方面予以倾斜。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "如东县政府、新店镇政府",
    "policyTitle": "县政府关于公布如东县征地区片综合地价标准",
    "detail": "公布征地区片综合地价（全县划定一个区片，征收农民集体所有农用地52000元/亩，土地补偿费26000元/亩、安置补助费26000元/人；集体建设用地参照52000元/亩，集体未利用地按0.7倍即36400元/亩；青苗补偿粮油作物1500元/亩），是全域整治中征地补偿测算的区级价格依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省政府办公厅关于转发省自然资源厅《江苏省国土空间全域综合整治方案》的通知",
    "docNo": "苏政办发〔2020〕26号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2020-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://czj.huaian.gov.cn/upload/2020-11/d2806407-b54b-45db-8693-65ef03128ce8.pdf",
    "attachUrl": "",
    "sourceNote": "核验说明：省、市门户均无该文正文页，来源为官网公开的全文附件",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江苏省全域土地综合整治项目管理办法",
    "docNo": "苏自然资发〔2025〕301号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-12-23",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c9082549b4f613b019b4f9399a0006f",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江苏省自然资源厅关于学习运用「千万工程」经验深入推进全域土地综合整治的实施意见",
    "docNo": "苏自然资函〔2025〕325号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-07-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c90825497528e63019811c7bbd4133e",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "江苏省政府办公厅关于印发《江苏省增减挂钩节余指标流转使用管理暂行办法》的通知",
    "docNo": "苏政办发〔2017〕101号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2017-07-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.jiangsu.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "全域土地综合整治项目验收规范（江苏省地方标准）",
    "docNo": "DB32/T 5048-2025",
    "issuer": "江苏省市场监督管理局（归口）",
    "date": "2025-02-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=3049356D14F03289E06397BE0A0AC3F7",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "南通市人民政府办公室关于印发南通市国土空间生态保护和修复规划（2021—2035年）的通知",
    "docNo": "通政办发〔2024〕31号",
    "issuer": "南通市人民政府办公室",
    "date": "2024-10-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.nantong.cn/ntsrmzf/2024ndlq/content/09aaecaa-d4a2-4a56-8197-e517af36a55d.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "市政府办公室关于印发南通市县（市）区政府（管委会）耕地保护责任目标考核办法的通知",
    "docNo": "通政办发〔2019〕37号",
    "issuer": "南通市人民政府办公室",
    "date": "2019-04-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.nantong.gov.cn/ntsrmzf/szfbwj/content/f63f7c4f-700d-4177-b587-018afdd59878.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "市政府关于南通市高标准农田建设规划（省高标准农田建设区域化整体推进示范区规划）（2021—2030年）的批复",
    "docNo": "通政复〔2022〕83号",
    "issuer": "南通市人民政府",
    "date": "2022-08-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.nantong.gov.cn/ntsrmzf/szfwj/content/b01c5a5d-7294-4fe9-94d7-778cf1d25cdb.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "市政府关于通州区集体经营性建设用地入市试点实施方案的批复",
    "docNo": "通政复〔2021〕106号",
    "issuer": "南通市人民政府",
    "date": "2021-07-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.nantong.gov.cn/ntsrmzf/szfwj/content/eb2a0c2f-7855-4c35-907f-d55ab839ca39.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "南通市人民政府办公室印发关于进一步推进工业用地提质增效的实施意见（试行）的通知",
    "docNo": "未获取",
    "issuer": "南通市人民政府办公室",
    "date": "2022-01-07",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.nantong.gov.cn/ntsrmzf/wsgbs/content/e97ef92e-d773-44de-8f80-5c9d7d2a7503.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "关于规范做好各类土地整治项目中耕作层剥离再利用工作的通知",
    "docNo": "未获取",
    "issuer": "南通市自然资源和规划局",
    "date": "2021-09-24",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zrzy.jiangsu.gov.cn/nt/gtzx/gzdt/202109/t20210924_1132795.htm",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "31",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "县政府办公室关于切实做好2026年度耕地地力保护补贴发放工作的通知",
    "docNo": "东政办发〔2026〕13号",
    "issuer": "如东县人民政府办公室",
    "date": "2026-04-07 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.rudong.gov.cn/rdxrmzf/xzfbwj/content/9ac40625-6598-4bd7-b33a-3a4de318bfc2.html",
    "attachUrl": "",
    "sourceNote": "文书形态：现行（2026 年度最新版）",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "如东县高标准农田建设工程设施管护实施办法",
    "docNo": "东农〔2026〕26号",
    "issuer": "如东县农业农村局、如东县财政局",
    "date": "2026-04-27 发布",
    "status": "有效，有效期至2030-12-31",
    "grade": "核验A级",
    "url": "https://www.rudong.gov.cn/nw/bmwj/content/bba2ade4-7294-4463-8bfa-5d7f9d350fba.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "县财政局",
    "rank": 1,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "县政府关于公布如东县征地区片综合地价标准的通知",
    "docNo": "东政规〔2026〕1号",
    "issuer": "如东县人民政府",
    "date": "2026-04-10 出台",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.rudong.gov.cn/rdxrmzf/yx/content/38b10707-d577-43db-a31f-53928f9ffadc.htm",
    "attachUrl": "",
    "sourceNote": "文书形态：自2026-01-01 起施行，有效期至2028-12-31；核验说明：佐证页（政策解读）：https://www.rudong.gov.cn/rdxrmzf/xjzcjd/content/3011b267-8410-4c89-9fe4-885e3b614fb4.html",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "县政府办公室关于下达2022年度县级土地整治任务的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "如东县人民政府办公室",
    "date": "2022-03-01 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.rudong.gov.cn/rdxrmzf/xzfbwj/content/c068b51d-76eb-40cc-8d30-fa29e5881879.htm",
    "attachUrl": "",
    "sourceNote": "文书形态：年度任务类文件（门户未再见 2023—2026 年版，效力待复核）",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "31",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 3,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 13,
   "provinceTools": 4,
   "nationalTools": 0,
   "provinceBasis": 4,
   "nationalBasis": 0,
   "localDocs": 11,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 13,
   "docs": 15,
   "innovations": 3,
   "implementation": 10,
   "pilot": 3,
   "gradeA": 14,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "32",
  "dir": "32_浙江省嘉兴市桐乡市濮院镇",
  "title": "浙江省嘉兴市桐乡市濮院镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "浙江省嘉兴市桐乡市濮院镇",
  "batch": "第三批",
  "province": "浙江",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "5.8 亿元",
  "summary": "整治3.12万亩土地，打造万亩粮油、千亩葡萄、千亩水产三大特色示范区，「喜濮」大米等地理标志产品声名鹊起，水稻亩产达1730斤、亩均效益逼近万元，新村集聚率超90%。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以浙江省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具15项（其中创新工具3项）、政策文件20份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "加强耕地保护完善补充耕地指标管理工作",
    "detail": "补充耕地指标市级统筹与县域调剂规则，资金明确用于土地综合整治、「多田套合」工程与林耕置换。",
    "innovation": "",
    "deps": [
     6,
     12
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "桐乡市土地全域整治行动总体实施方案",
    "detail": "按「1+5+X」模式打造土地综合整治精品工程，同步推动「百千万」永久基本农田连片建设、打造高产优质粮食生产功能区以破解耕地碎片化与空间布局无序化，并明确到2025年12月底整治区域面积不少于40万亩、获取增减挂钩指标不少于0.6万亩、新增永久基本农田储备不少于3.5万亩，是全域整治的区级总体实施方案依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "「万亩千方」农业集聚与耕地功能恢复政策",
    "detail": "在规划引领下对区域内所有土地资源进行「系统重构」：通过打造「万亩千方」农业集聚，建设高标准农田119.7公顷、实施垦造耕地8.0公顷、耕地功能恢复207.1公顷；以「喜濮」大米等地理标志产品为核心，依托标准化生产与数字化管理，实现水稻亩产1730斤，亩均效益近1万元。",
    "innovation": "「万亩千方」农业集聚+地标产品「喜濮」大米品牌化运营",
    "deps": [
     1,
     2,
     5,
     7,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "生态沟渠与「碧水绕村」江南水乡图景营造政策",
    "detail": "创新农田生态保护修复工程措施，建设生态节水拦截渠和生态缓冲河塘，生态沟渠拦截面源污染35%，节水灌溉系统节能20%，完成红旗漾村塘浜池塘整治等项目，营造水系环境与乡土空间和谐共生、「碧水绕村流，鱼戏莲叶间」的江南水乡图景。",
    "innovation": "生态沟渠拦截面源污染35%、节水灌溉节能20%的量化绿色指标",
    "deps": [
     3,
     4,
     7,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "嘉兴市土地综合整治工程推进方案（2023—2027年）",
    "detail": "正文「打造项目示范体系」明确「高品质实施秀洲区新塍镇、嘉善县西塘镇、海宁市马桥街道、桐乡市濮院镇、平湖市新埭镇等5个国家级全域土地综合整治试点」，并部署农用地整治、建设用地整治、生态修复、永久基本农田集中连片建设、补充耕地指标调剂等任务。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "嘉兴市创建耕地保护示范市实施方案",
    "detail": "四级田长制、百千万永久基本农田集中连片整治、土地综合整治工程28个、复垦建设用地2万亩。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "嘉兴市高标准农田建设提升行动方案（2022-2025年）",
    "detail": "明确结合永久基本农田集中连片整治等项目开展高标准农田建设，田块整治与耕地地力提升。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "嘉兴市土地综合整治（多田套合工程）2025年度实施方案",
    "detail": "「多田套合」即永久基本农田集中连片整治，是全域整治农用地整治的年度落地实施方案。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "桐乡市土地综合整治工程推进方案(2023-2027年)",
    "detail": "明确把实施土地综合整治作为推动乡村振兴和共同富裕的重要平台、促进国土空间治理有效落地的重要途径，并提出生态为基、保护优先，规划引领、节约集约（控制总量、优化增量、盘活存量、释放流量、提升质量），守住底线、系统推进的基本原则，是全域整治的区级推进方案依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "桐乡市推进低效建设用地再开发的实施意见（试行）",
    "detail": "规范低效建设用地再开发，是全域整治中低效用地再开发与工业用地有机更新的区级依据。（正文发布页待补；效力见2026-06-09清理结果通知，列为继续有效第126项）",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "桐乡市粮食生产功能区整治优化工作方案",
    "detail": "部署粮食生产功能区整治优化，是全域整治中永久基本农田集中连片整治与高标准农田建设的区级依据。（正文发布页待补；效力见2026-06-09清理结果通知，列为继续有效第174项）",
    "innovation": "",
    "deps": [
     18,
     20
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "建设用地复垦与工业用地腾退集约政策",
    "detail": "盘活城镇低效建设用地，实施建设用地复垦51.8公顷，完成工业用地腾退，土地集约度提升37.4%；打造共享餐厅，设计18公里美丽乡村精品线，推动乡村旅游发展，盘活集体存量建设用地。",
    "innovation": "土地集约度提升37.4%，以精品线串联激活集体存量建设用地",
    "deps": [
     7,
     8
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "桐乡市农村村民建房用地管理办法",
    "detail": "规范农村村民建房用地审批与管理，是全域整治中宅基地及住房建设管理的区级依据。（正文发布页待补）",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "嘉兴市自然资源和规划局 嘉兴市财政局 嘉兴市农业农村局关于调整完善耕地保护补偿实施办法",
    "detail": "差别化耕地保护补偿标准，补偿资金可用于地力培育与「田长制」工作经费，属全域整治耕地保护激励工具。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "桐乡市政府、濮院镇政府",
    "policyTitle": "桐乡市人民政府关于重新公布征地区片综合地价标准",
    "detail": "公布征地区片综合地价标准，是全域整治中土地权属调整与征收补偿的区级价格依据。（正文发布页待补；效力见2026-06-09清理结果通知，列为继续有效第80项）",
    "innovation": "",
    "deps": [
     19
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见",
    "docNo": "浙政办发〔2018〕80号",
    "issuer": "浙江省人民政府办公厅",
    "date": "2018-08-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2018/8/15/art_1229620738_2394685.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "浙江省人民政府关于跨乡镇开展土地综合整治试点的意见",
    "docNo": "浙政发〔2022〕32号",
    "issuer": "浙江省人民政府",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.zj.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "浙江省自然资源厅关于印发《浙江省土地综合整治全过程管理办法（试行）》的通知",
    "docNo": "浙自然资规〔2023〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2024-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2024/1/3/art_1229098242_2506965.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见",
    "docNo": "浙自然资〔2025〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2025-11-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229098242_2579170.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室关于印发2020年乡村全域土地综合整治与生态修复工程名单的通知",
    "docNo": "浙保耕办〔2020〕12号",
    "issuer": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室（浙江省自然资源厅代章）",
    "date": "2020-09-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2021/9/6/art_1229196455_2353233.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "浙江省国土资源厅关于做好城乡建设用地增减挂钩节余指标调剂使用管理工作的通知",
    "docNo": "浙土资规〔2018〕11号",
    "issuer": "浙江省国土资源厅",
    "date": "2018-10-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2018/10/18/art_1229098242_2322294.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "嘉兴市人民政府办公室关于印发促进共同富裕基本单元建设推进土地综合整治「一块地」集成改革的实施方案的通知",
    "docNo": "嘉政办发〔2023〕55号",
    "issuer": "嘉兴市人民政府办公室",
    "date": "2023-11-27",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiaxing.gov.cn/art/2023/11/29/art_1229567743_2499279.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "桐乡市人民政府办公室关于印发桐乡市土地全域整治行动总体实施方案的通知",
    "docNo": "桐政办发〔2023〕8号",
    "issuer": "桐乡市人民政府办公室",
    "date": "2023-03-27",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.tx.gov.cn/art/2023/4/3/art_1641029_59159687.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "嘉兴市人民政府办公室关于印发嘉兴市土地综合整治工程推进方案（2023—2027年）的通知",
    "docNo": "嘉政办发〔2023〕23号",
    "issuer": "嘉兴市人民政府办公室",
    "date": "2023-04-03",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiaxing.gov.cn/art/2023/5/29/art_1229708768_1995.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "嘉兴市人民政府办公室关于印发嘉兴市创建耕地保护示范市实施方案的通知",
    "docNo": "未获取",
    "issuer": "嘉兴市人民政府办公室",
    "date": "2023-07-05",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiaxing.gov.cn/art/2023/9/8/art_1229708766_2007.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "嘉兴市人民政府办公室关于印发嘉兴市高标准农田建设提升行动方案（2022-2025年）的通知",
    "docNo": "嘉政办发〔2022〕51号",
    "issuer": "嘉兴市人民政府办公室",
    "date": "2022-10-27",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiaxing.gov.cn/art/2022/12/26/art_1229708760_1922.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "嘉兴市人民政府办公室关于加强耕地保护完善补充耕地指标管理工作的通知",
    "docNo": "嘉政办发〔2026〕6号",
    "issuer": "嘉兴市人民政府办公室",
    "date": "2026-01-22",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiaxing.gov.cn/col/col1229567743/art/2026/art_19a0925b91594b9ab0fbee32f4bfbce9.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "嘉兴市自然资源和规划局 嘉兴市农业农村局关于印发《嘉兴市土地综合整治（多田套合工程）2025年度实施方案》的通知",
    "docNo": "未获取",
    "issuer": "嘉兴市自然资源和规划局、嘉兴市农业农村局",
    "date": "2025",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.haining.gov.cn/art/2025/5/20/art_1229563423_2555310.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "嘉兴市自然资源和规划局 嘉兴市财政局 嘉兴市农业农村局关于调整完善耕地保护补偿实施办法的通知",
    "docNo": "未获取",
    "issuer": "嘉兴市自然资源和规划局、嘉兴市财政局、嘉兴市农业农村局",
    "date": "2022-12",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zrzyhghj.jiaxing.gov.cn/art/2022/12/5/art_1229235671_58929214.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "桐乡市人民政府办公室关于印发桐乡市土地综合整治工程推进方案(2023-2027年)的通知",
    "docNo": "桐政办发〔2023〕24号",
    "issuer": "桐乡市人民政府办公室",
    "date": "2023-03-30 成文、2023-05-04 发布",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.tx.gov.cn/art/2023/5/4/art_1641029_59160405.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "桐乡市农村村民建房用地管理办法",
    "docNo": "政府令第 111 号",
    "issuer": "桐乡市人民政府",
    "date": "效力见《桐乡市人民政府关于公布市政府及市政府办公室行政规范性文件清理结果的通知》（2026-06-05 成文、2026-06-09 发布，自 2026-06-08 起施行），列为继续有效第 24 项",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.tx.gov.cn/col/col1229563734/art/2026/art_ae5ce3a0d4814817ac329fd020300b80.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文发布页待补",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "桐乡市推进低效建设用地再开发的实施意见（试行）",
    "docNo": "桐政办发〔2014〕103号",
    "issuer": "桐乡市人民政府办公室",
    "date": "效力见 2026-06-09《清理结果的通知》，列为继续有效第 126 项",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.tx.gov.cn/col/col1229563734/art/2026/art_ae5ce3a0d4814817ac329fd020300b80.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文发布页待补",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "桐乡市粮食生产功能区整治优化工作方案",
    "docNo": "桐政办发〔2022〕14号",
    "issuer": "桐乡市人民政府办公室",
    "date": "效力见 2026-06-09《清理结果的通知》，列为继续有效第 174 项",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.tx.gov.cn/col/col1229563734/art/2026/art_ae5ce3a0d4814817ac329fd020300b80.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文发布页待补",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 19,
    "name": "桐乡市人民政府关于重新公布征地区片综合地价标准的通知",
    "docNo": "桐政发〔2023〕22号",
    "issuer": "桐乡市人民政府",
    "date": "效力见 2026-06-09《清理结果的通知》，列为继续有效第 80 项",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.tx.gov.cn/col/col1229563734/art/2026/art_ae5ce3a0d4814817ac329fd020300b80.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文发布页待补",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 20,
    "name": "《桐乡市濮院镇国土空间总体规划（2021—2035年）》批后公布",
    "docNo": "无文号（批后公布）",
    "issuer": "桐乡市自然资源和规划局",
    "date": "2025-03-06 公布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.tx.gov.cn/art/2025/3/6/art_1229618798_59199562.html",
    "attachUrl": "",
    "sourceNote": "文书形态：批后公布",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "32",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 9,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 15,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 14,
   "provinceDocs": 6,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 15,
   "docs": 20,
   "innovations": 3,
   "implementation": 14,
   "pilot": 1,
   "gradeA": 14,
   "gradeB": 6,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "33",
  "dir": "33_浙江省宁波市海曙区横街-古林片区",
  "title": "浙江省宁波市海曙区横街-古林片区全域土地综合整治政策激励工具箱（1.0版）",
  "name": "浙江省宁波市海曙区横街-古林片区",
  "batch": "第三批",
  "province": "浙江",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "宁波海曙横街—古林片区涵盖2镇16村，构建「两廊五片」格局；实施农用地整治23项、新增耕地1198.2亩，古林镇蜃蛟片区10900亩农田整合为数字农业示范区；疏浚河道11公里，打造14公里「舟游古林」水上共富环线。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以浙江省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具15项（其中创新工具3项）、政策文件18份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "宁波市海曙区政府、横街镇政府、古林镇政府",
    "policyTitle": "增减挂钩节余指标调剂使用与收益反哺",
    "detail": "依据《浙江省国土资源厅关于做好城乡建设用地增减挂钩节余指标调剂使用管理工作的通知》，横街—古林片区整治产生的增减挂钩节余指标纳入省级统一调剂管理，明确指标核定、调剂使用与收益分配的基本规则，为整治项目资金平衡提供指标保障。",
    "innovation": "增减挂钩节余指标省级统一调剂，为整治项目提供资金平衡渠道",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "宁波市海曙区政府、横街镇政府、古林镇政府",
    "policyTitle": "数字农业「数控中心」与数字农田建设政策",
    "detail": "建设古林数字农业「数控中心」监管连片耕地，建成4000余亩数字农田，实现农机可视化、灌溉智能化，零散耕地向「数智良田」转型，亩均收益提升超50%；完成永久基本农田连片整治，推动「多田套合」，耕地布局优化率居宁波市前列。",
    "innovation": "数字农业「数控中心」+4000余亩数字农田，亩均收益提升超50%",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宁波市海曙区政府、横街镇政府、古林镇政府",
    "policyTitle": "生态河道修复与「舟游古林」水上共富环线政策",
    "detail": "协同推进生态修复治理，打造连接14公里生态河道的「舟游古林」水上共富精品环线；修复沿山干河等生态河道，打造「水清、岸绿、景美」景观带，同步植入职教研学、蔺草文化体验等功能；获评宁波市生态修复奖补项目，生态旅游带动片区年游客量超20万人次。",
    "innovation": "14公里生态河道串联「舟游古林」水上共富环线，年游客量超20万人次",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宁波市海曙区政府、横街镇政府、古林镇政府",
    "policyTitle": "推进全域土地综合整治与生态修复工程",
    "detail": "全市全域土地综合整治与生态修复的纲领性意见，含永久基本农田整备区、指标调剂收益分配、涉农资金整合。",
    "innovation": "",
    "deps": [
     1,
     5,
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宁波市海曙区政府、横街镇政府、古林镇政府",
    "policyTitle": "宁波市历史遗留矿山生态修复三年工作计划（2023-2025年）",
    "detail": "明确结合片区全域国土空间综合整治规划，因地制宜实施土地复垦与矿山生态修复，社会资本参与。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "海曙区政府",
    "policyTitle": "海曙区建设占用耕地耕作层土壤剥离与再利用工作实施办法",
    "detail": "规定建设占用耕地耕作层土壤的剥离与再利用，与耕地功能恢复（垦造耕地）中的优质表土回填直接衔接，是全域整治中耕地保护与耕地质量提升的区级依据。",
    "innovation": "",
    "deps": [
     14,
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县",
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "宁波市海曙区政府、横街镇政府、古林镇政府",
    "policyTitle": "中共宁波市委宁波市人民政府农业和农村工作领导小组办公室 宁波市农业农村局关于推进农村宅基地「三权分置」和闲置农房激活利用改革工作的指导",
    "detail": "明确闲置农房激活利用须「与全域土地综合整治与生态修复工程相衔接」，并可按土地综合整治调整宅基地。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "宁波市海曙区政府、横街镇政府、古林镇政府",
    "policyTitle": "宁波市耕地保护与土地整治专项资金管理办法（试行）",
    "detail": "市级专项资金对永久基本农田集中连片整治示范工程、乡村全域土地综合整治与生态修复工程给予奖补。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "宁波市海曙区政府、横街镇政府、古林镇政府",
    "policyTitle": "宁波市全域国土空间综合整治生态修复考核奖补资金管理实施",
    "detail": "对全域整治已验收生态修复项目按五星/四星/三星级分别奖补500/400/300万元，建立全域整治财政奖补机制。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "海曙区政府",
    "policyTitle": "海曙区耕地保护补偿机制管理办法（试行）",
    "detail": "确立海曙区耕地保护补偿机制，是年度补偿资金下达的区级依据。（正文发布页待补；效力见区资规分局2025年度耕地保护补偿资金下达情况公示）",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "试点推进",
    "lead": "宁波市海曙区政府、古林镇政府",
    "policyTitle": "「区整治公司+村集体」低效工业用地盘活政策",
    "detail": "水家工业园试点「区整治公司+村集体」模式，盘活村级低效工业用地，新建厂房10.1万平方米（原4.2倍），预计年净收益230万元，村经营性收入从251万元增至650万元，提供就业岗位超500个；挖掘御史家风、古林米食、蔺草文化，推出稻虾共养、农田认养、水上研学等项目，「杏花春雨」「舟游古林」品牌价值突破千万元，带动5000户农户增收。",
    "innovation": "「区整治公司+村集体」模式，村经营性收入从251万元增至650万元",
    "deps": [
     2,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "试点推进",
    "lead": "宁波市海曙区政府、横街镇政府、古林镇政府",
    "policyTitle": "土地综合整治助推城乡融合与共同富裕",
    "detail": "依据《浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见》，海曙区横街—古林片区按省级部署深化土地综合整治，将整治与城乡融合发展、共同富裕目标衔接，统筹推进农用地整理、建设用地整理与生态修复。",
    "innovation": "整治与城乡融合发展、共同富裕目标衔接的省级深化部署",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "宁波市海曙区政府、横街镇政府、古林镇政府",
    "policyTitle": "全域国土空间综合整治项目审批工作指引（试行）",
    "detail": "全域整治项目「主项目＋子项目」赋码立项、审批层级与竣工验收流程，是全域整治项目审批配套制度。",
    "innovation": "",
    "deps": [
     3,
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "海曙区政府",
    "policyTitle": "海曙区加强土地整治工作实施细则（试行）",
    "detail": "界定土地整治内容为垦造耕地、旱地改水田、建设用地复垦、耕地质量提升项目建设；要求垦造耕地必须配套优质表土再利用（耕作层厚度不足30厘米不予验收）；并规定补助标准（垦造旱地10万元/亩、垦造水田16万元/亩、旱改水4万元/亩、建设用地复垦新增水田48万元/亩／旱地28万元/亩），是全域整治中土地整治实施与补助的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 15,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "海曙区政府",
    "policyTitle": "宁波市海曙区人民政府关于重新公布海曙区征地区片综合地价",
    "detail": "公布征地区片综合地价（含土地补偿费40%与安置补助费60%；一级区片100500元/亩、二级区片90000元/亩、三级区片80000元/亩；征收林地及集体未利用地按农用地标准60%执行，征收集体建设用地按农用地标准执行），是全域整治中土地权属调整与征收补偿的区级价格依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见",
    "docNo": "浙政办发〔2018〕80号",
    "issuer": "浙江省人民政府办公厅",
    "date": "2018-08-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2018/8/15/art_1229620738_2394685.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "浙江省人民政府关于跨乡镇开展土地综合整治试点的意见",
    "docNo": "浙政发〔2022〕32号",
    "issuer": "浙江省人民政府",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.zj.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "浙江省自然资源厅关于印发《浙江省土地综合整治全过程管理办法（试行）》的通知",
    "docNo": "浙自然资规〔2023〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2024-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2024/1/3/art_1229098242_2506965.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见",
    "docNo": "浙自然资〔2025〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2025-11-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229098242_2579170.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室关于印发2020年乡村全域土地综合整治与生态修复工程名单的通知",
    "docNo": "浙保耕办〔2020〕12号",
    "issuer": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室（浙江省自然资源厅代章）",
    "date": "2020-09-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2021/9/6/art_1229196455_2353233.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "浙江省国土资源厅关于做好城乡建设用地增减挂钩节余指标调剂使用管理工作的通知",
    "docNo": "浙土资规〔2018〕11号",
    "issuer": "浙江省国土资源厅",
    "date": "2018-10-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2018/10/18/art_1229098242_2322294.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "中共宁波市委 宁波市人民政府关于开展全域国土空间综合整治的实施意见",
    "docNo": "甬党发〔2023〕5号",
    "issuer": "中共宁波市委、宁波市人民政府",
    "date": "2023",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ningbo.gov.cn/art/2023/2/16/art_1229099763_59450984.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "宁波市人民政府办公厅关于推进全域土地综合整治与生态修复工程的意见",
    "docNo": "甬政办发〔2019〕10号",
    "issuer": "宁波市人民政府办公厅",
    "date": "2019-01-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ningbo.gov.cn/art/2019/1/25/art_1229533176_949635.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "关于印发《全域国土空间综合整治项目审批工作指引（试行）》的通知",
    "docNo": "未获取",
    "issuer": "宁波市发展和改革委员会",
    "date": "2023-06-30",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://qf.ningbo.gov.cn/qfpt/fwbk/xmfw/xmzx/zczx/art/2024/art_722c0811e69f4b02bfe468f54a15fdf7.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市发展和改革委员会",
    "rank": 2,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "宁波市自然资源和规划局关于印发《宁波市历史遗留矿山生态修复三年工作计划（2023-2025年）》的通知",
    "docNo": "甬自然资规发〔2023〕58号",
    "issuer": "宁波市自然资源和规划局（经市政府同意）",
    "date": "2023-11-16",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zgj.ningbo.gov.cn/art/2023/11/16/art_1229622279_1783343.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市政府",
    "rank": 2,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "宁波市耕地保护与土地整治专项资金管理办法（试行）",
    "docNo": "甬自然资规发〔2022〕28号",
    "issuer": "宁波市自然资源和规划局、宁波市财政局、宁波市农业农村局",
    "date": "2022-06-06",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zgj.ningbo.gov.cn/art/2022/6/10/art_1229036864_58958468.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "中共宁波市委宁波市人民政府农业和农村工作领导小组办公室 宁波市农业农村局关于推进农村宅基地「三权分置」和闲置农房激活利用改革工作的指导意见",
    "docNo": "甬农办〔2019〕3号",
    "issuer": "中共宁波市委宁波市人民政府农业和农村工作领导小组办公室、宁波市农业农村局",
    "date": "2019-07-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://nyncj.ningbo.gov.cn/art/2019/7/11/art_1229058290_48593735.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "宁波市全域国土空间综合整治生态修复考核奖补资金管理实施细则",
    "docNo": "未获取",
    "issuer": "宁波市自然资源和规划局、宁波市财政局",
    "date": "2024-08-20",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zgj.ningbo.gov.cn/art/2024/9/5/art_1229713376_58976815.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市财政局",
    "rank": 2,
    "caseId": "33",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "宁波市海曙区人民政府办公室关于印发海曙区建设占用耕地耕作层土壤剥离与再利用工作实施办法的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "宁波市海曙区人民政府办公室",
    "date": "2025-09-23 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.haishu.gov.cn/col/col1229564949/art/2025/art_1632841617.html",
    "attachUrl": "",
    "sourceNote": "文书形态：经区政府常务会议审议通过，门户未标注效力状态",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "宁波市海曙区人民政府办公室关于印发海曙区加强土地整治工作实施细则（试行）的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "宁波市海曙区人民政府办公室",
    "date": "2018-09-30 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.haishu.gov.cn/art/2018/9/30/art_1229564949_541249.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自2018-10-01 起施行（门户未标注效力状态）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "宁波市海曙区人民政府关于重新公布海曙区征地区片综合地价的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "宁波市海曙区人民政府",
    "date": "2023-11-27 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.haishu.gov.cn/art/2023/11/27/art_1229829654_1803326.html",
    "attachUrl": "",
    "sourceNote": "文书形态：自2023-11-27 起施行（同时废止海政发〔2020〕23号）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "海曙区耕地保护补偿机制管理办法（试行）",
    "docNo": "海政办发〔2018〕92号",
    "issuer": "宁波市海曙区人民政府办公室",
    "date": "效力见区资规分局《关于下达海曙区 2025 年度耕地保护补偿资金的情况公示》（2026-09-16）的明确引用，该公示仍按本件执行",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.haishu.gov.cn/col/col1229830357/art/2026/art_eb781dd785a44bc5a89049c08ca5de37.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文发布页待补",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "33",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "宁波市人民政府关于海曙区老城片区等乡镇级国土空间总体规划的批复",
    "docNo": "未获取（门户正文页未列文号）",
    "issuer": "宁波市人民政府",
    "date": "2025-08-20 发布",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ningbo.gov.cn/art/2025/8/20/art_1229886232_4671783.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "33",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 3,
    "innovations": 0
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 2,
    "innovations": 2
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 15,
   "provinceTools": 5,
   "nationalTools": 0,
   "provinceBasis": 5,
   "nationalBasis": 0,
   "localDocs": 12,
   "provinceDocs": 6,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 15,
   "docs": 18,
   "innovations": 5,
   "implementation": 8,
   "pilot": 7,
   "gradeA": 16,
   "gradeB": 2,
   "revoked": 0,
   "mechanisms": 7
  }
 },
 {
  "id": "34",
  "dir": "34_湖南省益阳市赫山区兰溪镇",
  "title": "湖南省益阳市赫山区兰溪镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "湖南省益阳市赫山区兰溪镇",
  "batch": "第三批",
  "province": "湖南",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "50033.13 万元",
  "summary": "兰溪镇系自然资源部第一批全域土地综合整治试点之一，2022年1月由赫山区政府与湖南乡村产业发展有限公司联合投资实施，对北岸新村、沙岭村等14个行政村及3个水产养殖基地、1所中学共3765.67公顷土地开展全要素整治。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以湖南省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具15项（其中创新工具3项）、政策文件14份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "益阳市赫山区政府、兰溪镇政府",
    "policyTitle": "新增耕地与旱改水指标生成政策",
    "detail": "项目实施预计新增耕地179.6195公顷，旱改水3.5291公顷，建设用地整理5.7106公顷；能促进耕地保护和土地集约节约利用，有效提升耕地质量，减少耕地碎片化；能改善农村人居环境，优化区域内生存空间布局，助推乡村全面振兴。",
    "innovation": "以新增耕地179.62公顷为核心指标，实现耕地提质与碎片化治理双目标",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "益阳市赫山区政府、兰溪镇政府",
    "policyTitle": "益阳市全面推行田长制严格耕地保护",
    "detail": "建立市、县、镇、村四级田长制耕地保护监管体系，是全域整治耕地保护的制度基础。",
    "innovation": "",
    "deps": [
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "益阳市赫山区政府、兰溪镇政府",
    "policyTitle": "益阳市国土空间生态修复规划（2021—2035年）",
    "detail": "全市山水林田湖草系统修复总纲，含历史遗留矿山、南洞庭湖湿地与流域生态修复重点工程。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "益阳市赫山区政府、兰溪镇政府",
    "policyTitle": "益阳市高标准农田建设规划（2021—2030年）",
    "detail": "集中连片开展田块整治、土壤改良、配套设施建设，是全域整治农用地整治子项。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "赫山区政府、兰溪镇政府",
    "policyTitle": "赫山区人民政府关于公布本级政府规范性文件清理结果的决定",
    "detail": "公布赫山区本级现行有效、需修订及废止的规范性文件目录，是反查本案例各政策件现行效力的最直接依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 6,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "益阳市赫山区政府、兰溪镇政府",
    "policyTitle": "益阳市农村产权流转交易市场体系建设实施方案",
    "detail": "建立农村土地经营权与集体资产流转交易平台，为全域整治土地集中流转与规模化经营提供要素市场配套。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "赫山区政府、兰溪镇政府",
    "policyTitle": "赫山区农村集体经营性建设用地入市管理办法（试行）、赫山区农村集体经营性建设用地入市土地增值收益及调节金征收使用管理办法（试行）",
    "detail": "建立赫山区农村集体经营性建设用地入市的范围、主体、程序与土地增值收益调节金征收使用规则，是兰溪镇整治后集体经营性建设用地入市的核心区级办法。（该件时效期至2026-10-17，引用前须复核是否已延续或修订）",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "赫山区政府、兰溪镇政府",
    "policyTitle": "赫山区加快推进农村土地经营权流转实施方案",
    "detail": "部署农村土地经营权流转的规范与激励措施，是全域整治中土地权属调整与耕地保护的区级依据。（门户标注「需评估」，引用前须复核效力）",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "赫山区政府、兰溪镇政府",
    "policyTitle": "赫山区农村产权流转交易市场建设实施方案",
    "detail": "部署区、镇、村三级农村产权流转交易市场建设，是全域整治中集体经营性建设用地入市与土地权属调整的区级依据。（门户标注「需评估」，引用前须复核效力）",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "湖南省自然资源厅、赫山区政府、湖南乡村产业发展有限公司",
    "policyTitle": "省级评审与联合投资实施机制",
    "detail": "2022年1月赫山区政府与湖南乡村产业发展有限公司联合投资实施；2023年12月省自然资源厅召开专家评审会，实施方案通过省级评审，形成「水韵古镇绽新颜」的整治模式。",
    "innovation": "政府+省级国企联合投资实施，实施方案经省级专家评审把关",
    "deps": [
     1,
     2
    ],
    "leadLevel": "省",
    "scope": "province",
    "scopeRank": 3,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "赫山区政府、兰溪镇政府",
    "policyTitle": "赫山区高标准农田建设投融资创新实施方案",
    "detail": "部署高标准农田建设投融资创新机制，是兰溪镇（洞庭湖区粮食主产乡镇）高标准农田建设的区级方案依据，支撑高标准农田建设与涉农资金统筹整合。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "赫山区政府、兰溪镇政府",
    "policyTitle": "赫山区耕地地力保护补贴政策实施方案",
    "detail": "明确耕地地力保护补贴的补贴对象、标准与发放程序，是全域整治中耕地保护补偿的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 13,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "益阳市赫山区政府、兰溪镇政府",
    "policyTitle": "全要素多手段高效益综合整治实施方案政策",
    "detail": "坚持「生态优先、保护优先、集约优先」原则，在区域内开展全要素、多手段、高效益综合整治；项目涉及莲花塘村、金石村等14个行政村、3个村级水产养殖基地和1个学校，试点区域土地总面积7089.67公顷，约占兰溪镇域面积的62%；预计总投资50033.13万元。",
    "innovation": "覆盖14个行政村的全要素综合整治，规模占镇域面积62%",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 14,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "赫山区政府、兰溪镇政府",
    "policyTitle": "赫山区集体土地征收与房屋拆迁补偿安置实施细则",
    "detail": "明确集体土地征收程序、房屋拆迁补偿标准与安置方式，是兰溪镇全域整治中征地拆迁补偿安置的区级操作依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 15,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "赫山区政府、兰溪镇政府",
    "policyTitle": "赫山区被征地农民社会保障工作实施办法",
    "detail": "明确被征地农民社会保障的对象认定、资金来源与办理程序，是全域整治中土地权属调整与征收补偿的配套保障依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "湖南省自然资源厅关于深入推进全域土地综合整治工作的通知",
    "docNo": "湘自资发〔2025〕17号",
    "issuer": "湖南省自然资源厅",
    "date": "2025-06-05",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.hunan.gov.cn/zrzyt/xxgk/gzdt/zhxw_1/202506/t20250610_33705003.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "湖南省自然资源厅关于印发《湖南省全域土地综合整治项目管理办法（试行）》的通知",
    "docNo": "湘自资发〔2025〕41号",
    "issuer": "湖南省自然资源厅",
    "date": "2025-09-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.hunan.gov.cn/zrzyt/xxgk/gzdt/zhxw_1/202509/t20250930_33818066.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "益阳市全面推行田长制严格耕地保护实施方案",
    "docNo": "未获取",
    "issuer": "中共益阳市委、益阳市人民政府",
    "date": "2022-08-23",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.yiyang.gov.cn/yiyang/2/3/73/content_1641019.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "34",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "益阳市国土空间生态修复规划（2021—2035年）",
    "docNo": "未获取",
    "issuer": "益阳市自然资源和规划局",
    "date": "2023-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://zygh.yiyang.gov.cn/6623/41425/content_1913820.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "益阳市人民政府办公室关于印发《益阳市农村产权流转交易市场体系建设实施方案》的通知",
    "docNo": "益政办发〔2024〕13号",
    "issuer": "益阳市人民政府办公室",
    "date": "2024-12-20",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yiyang.gov.cn/yiyang/2/78/3284/content_2030123.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "益阳市高标准农田建设规划（2021—2030年）",
    "docNo": "未获取",
    "issuer": "益阳市农业农村局",
    "date": "2023",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "http://nyw.yiyang.gov.cn/34726/content_1794545.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "34",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "赫山区人民政府办公室关于印发赫山区农村集体经营性建设用地入市管理办法（试行）、赫山区农村集体经营性建设用地入市土地增值收益及调节金征收使用管理办法（试行）的通知",
    "docNo": "益赫政办发〔2024〕7号",
    "issuer": "赫山区人民政府办公室",
    "date": "2024-10-18 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.hnhs.gov.cn/23247/23248/23808/24229/content_2004623.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2026-10-17；门户标注「需评估」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "赫山区人民政府关于印发赫山区集体土地征收与房屋拆迁补偿安置实施细则的通知",
    "docNo": "益赫政发〔2024〕8号",
    "issuer": "赫山区人民政府",
    "date": "2024-12-12 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.hnhs.gov.cn/zone/2026181/content_2026181.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2029-12-11；门户标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "赫山区人民政府办公室关于印发赫山区被征地农民社会保障工作实施办法的通知",
    "docNo": "益赫政办发〔2025〕1号",
    "issuer": "赫山区人民政府办公室",
    "date": "2025-01-15 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.hnhs.gov.cn/zone/2034422/content_2034422.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2030-01-14；门户标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "赫山区人民政府办公室关于印发赫山区高标准农田建设投融资创新实施方案的通知",
    "docNo": "益赫政办发〔2023〕1号",
    "issuer": "赫山区人民政府办公室",
    "date": "2023-02-11 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.hnhs.gov.cn/zone/1728364/content_1728364.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2028-02-10；门户标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "赫山区人民政府办公室关于印发赫山区耕地地力保护补贴政策实施方案的通知",
    "docNo": "益赫政办发〔2023〕11号",
    "issuer": "赫山区人民政府办公室",
    "date": "2023-07-04 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.hnhs.gov.cn/zone/1795278/content_1795278.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2028-07-03；门户标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "赫山区人民政府办公室关于印发赫山区加快推进农村土地经营权流转实施方案的通知",
    "docNo": "益赫政办发〔2022〕5号",
    "issuer": "赫山区人民政府办公室",
    "date": "2022-01-20 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.hnhs.gov.cn/zone/1609776/content_1609776.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2027-01-19；门户标注「需评估」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "赫山区人民政府办公室关于印发赫山区农村产权流转交易市场建设实施方案的通知",
    "docNo": "益赫政办发〔2022〕3号",
    "issuer": "赫山区人民政府办公室",
    "date": "2022-01-20 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.hnhs.gov.cn/zone/1609751/content_1609751.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2027-01-19；门户标注「需评估」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "赫山区人民政府关于公布本级政府规范性文件清理结果的决定",
    "docNo": "益赫政发〔2025〕4号",
    "issuer": "赫山区人民政府",
    "date": "2025-10-20 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.hnhs.gov.cn/zone/2104347/content_2104347.html",
    "attachUrl": "",
    "sourceNote": "文书形态：信息时效期至 2030-10-20；门户标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "34",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 14,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 2,
   "nationalBasis": 0,
   "localDocs": 12,
   "provinceDocs": 2,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 15,
   "docs": 14,
   "innovations": 3,
   "implementation": 13,
   "pilot": 2,
   "gradeA": 12,
   "gradeB": 2,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "35",
  "dir": "35_江西省赣州市宁都县青塘镇",
  "title": "江西省赣州市宁都县青塘镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江西省赣州市宁都县青塘镇",
  "batch": "第三批",
  "province": "江西",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "3.4 亿元（贷款）",
  "summary": "实施规模772.9882公顷、覆盖11个行政村，新建高标准农田8313.21亩、旱改水198.03亩，通过「林地进出平衡」补充林地1753.42亩，腾挪建设用地指标122.9221公顷，获农发行3.4亿元全省首笔贷款。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以江西省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具16项（其中创新工具3项）、政策文件16份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "耕地保护领域突出问题专项整改工作方案",
    "detail": "明确落实建设占用永久基本农田耕作层土壤剥离再利用制度、补充耕地任务与耕地保护「田长制」，并成立市级专项整改领导小组。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "进一步规范全市矿山生态修复基金管理工作",
    "detail": "矿山生态修复基金计提、使用与验收全流程管理，为全域整治生态修复提供资金保障工具。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "赣州市加强高标准农田建设管理若干措施",
    "detail": "高标准农田建设全链条监管25条措施，是全域整治农用地整治与耕地质量提升的配套政策。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "宁都县城区预留地合作开发建设实施细则",
    "detail": "规范城区预留地合作开发建设，是全域整治中土地权属调整与预留地开发利用的区级依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "2026年宁都县行政规范性文件动态调整目录",
    "detail": "列明现行有效行政规范性文件目录（141件）与废止目录（13件）并逐件标注发文单位、标题与文号，是本案例效力核验的主依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 6,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "全国首创「建设使用集体所有土地决定书」制度",
    "detail": "全国首创「建设使用集体所有土地决定书」，探索宅基地有偿退出、工业全生命周期管理等制度，完成宅基地确权登记并允许抵押贷款；通过「宅基地置换+集体经营性建设用地入市」优化村庄布局，推动零散宅基地向集中居住区集聚，腾退建设用地指标122.92公顷。",
    "innovation": "全国首创「建设使用集体所有土地决定书」，打通集体土地建设使用制度通道",
    "deps": [
     1,
     2,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "赣州市新型产业用地配置管理的实施意见（试行）",
    "detail": "明确低效工业用地调整为新型产业用地（M0）的盘活路径与混合用地、带方案出让规则，属低效用地再开发配套工具。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "宁都县集体建设用地使用权确权登记工作指导意见",
    "detail": "规定集体建设用地确权登记应在无权属争议、无土地违法行为且已办理集体土地所有权登记的前提下按先易后难、需求先行原则分步实施，区分不同历史阶段依国家层面集体建设用地确权登记制度框架与赣国土资发〔2018〕7号、赣土登记办发〔2019〕3号执行，并对用地权属来源按自1987年《土地管理法》实施起分阶段调查确认，是全域整治中土地权属调整与集体经营性建设用地入市的区级依据。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "宁都县城市规划区内村民建房管理办法",
    "detail": "规范城市规划区内农村村民建房管理，是全域整治中宅基地及住房建设管理的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "宁都县政府、中国农业发展银行",
    "policyTitle": "政策性金融与「校企村联合」资金平衡机制政策",
    "detail": "项目获农发行3.4亿元贷款支持，引入社会资本超5亿元，创新「校企村联合」资金平衡机制，农发行「富村贷」授信支持项目实施；2025年6月入选自然资源部第三批全域土地综合整治典型案例。",
    "innovation": "「校企村联合」资金平衡机制+农发行「富村贷」专项授信3.4亿元",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "宁都县防止耕地「非粮化」稳定粮食生产工作方案",
    "detail": "实施最严格的耕地保护制度、将有限耕地资源优先用于粮食生产并防止耕地「非粮化」，明确完成高标准农田新建和改造提升任务、稳定粮食播种面积101万亩与总产7.3亿斤以上，并对已划定57.2万亩粮食生产功能区重新核实补划，是全域整治中耕地保护补偿与永久基本农田保护的区级依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "「田小二」智慧管理平台与数字化治理政策",
    "detail": "建立「田小二」智慧管理平台，实现耕地保护数字化巡查、村级事务线上办理，80%以上事项「一网通办」；智慧农业基地通过物联网监测墒情、自动化灌溉，温氏乳业引入智能化管理系统，生产效率提升30%；建立「乡管面、村管片、组管格」三级监管体系。",
    "innovation": "「田小二」平台+「乡管面、村管片、组管格」三级监管体系，80%事项一网通办",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "赣州市打造国家生态文明建设高地三年行动方案（2024—2026年）",
    "detail": "山水林田湖草一体化保护修复、废弃矿山治理、鼓励社会资本参与生态资产运营与生态产品价值实现。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "宁都县进一步加强工程项目用地全过程纪实管理意见",
    "detail": "规定以划拨方式提供国有土地使用权的建设项目须提出选址书面申请并组织实地踏勘，重点审核用地规模、现状地类、耕地保护、生态保护、林地、湿地、压覆矿、土地报批、土地征收与规划用地性质，并要求优先在存量建设用地上选址、尽量少占耕地、不占永久基本农田与生态保护红线，是全域整治中项目用地全过程管理的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 15,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "宁都县县城规划区征地安置预留地开发利用实施办法",
    "detail": "规范县城规划区征地安置预留地开发利用，是全域整治中土地权属调整与征收补偿的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 16,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "宁都县政府、青塘镇政府",
    "policyTitle": "宁都县征地地上附着物和青苗补偿标准实施方案",
    "detail": "明确征地地上附着物和青苗补偿标准，是全域整治中土地权属调整与征收补偿的区级价格依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "江西省自然资源厅关于开展全域土地综合整治试点工作的实施意见",
    "docNo": "赣自然资发〔2021〕号",
    "issuer": "江西省自然资源厅（经省政府同意）",
    "date": "2021-04-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jxlcx.gov.cn/art/2023/4/11/art_3922_3978232.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省政府",
    "rank": 3,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江西省全域土地综合整治管理办法（试行）",
    "docNo": "赣自然资发〔2025〕号",
    "issuer": "江西省自然资源厅",
    "date": "2025-07-10",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zgys.gov.cn/ysnsx/c122635/202605/8aac5739792e4d7e9ca358f4b3c2353d.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江西省人民政府办公厅关于印发《江西省补充耕地指标交易管理办法》《江西省城乡建设用地增减挂钩节余指标调剂交易管理办法》的通知",
    "docNo": "赣府厅发〔2023〕15号",
    "issuer": "江西省人民政府办公厅",
    "date": "2023-11-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.jiangxi.gov.cn/jxsrmzf/szfbg100/pc/content/content_1899485512506212352.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "赣州市人民政府办公室关于印发耕地保护领域突出问题专项整改工作方案的通知",
    "docNo": "未获取",
    "issuer": "赣州市人民政府办公室",
    "date": "2023-06",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ganzhou.gov.cn/gzszf/c102790vpcnhgkvgththn/202306/39e9cc88432b4742955222cd9f99fde9.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "关于进一步规范全市矿山生态修复基金管理工作的通知",
    "docNo": "未获取",
    "issuer": "赣州市自然资源局、赣州市财政局、赣州市生态环境局",
    "date": "2024-02-26",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://bnr.ganzhou.gov.cn/gzzrzy/c102604/202403/d37a2e0e4f674247b78dae41c79b6a01.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "赣州市人民政府办公室关于印发赣州市打造国家生态文明建设高地三年行动方案（2024—2026年）的通知",
    "docNo": "赣市府办发〔2024〕18号",
    "issuer": "赣州市人民政府办公室",
    "date": "2024-09-06",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ganzhou.gov.cn/gzszf/c102790vpcnhgkvgththnqdrksthdk/202411/c6854e3a9c64463b8efe978ee85fd00e.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "关于印发《赣州市新型产业用地配置管理的实施意见（试行）》的通知",
    "docNo": "赣市自然资字〔2025〕82号",
    "issuer": "赣州市自然资源局（经市政府同意）",
    "date": "2025-09-30",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ganzhou.gov.cn/zfxxgk/c143913/202511/f518b255fe3745829bd04d871d618e76.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市政府",
    "rank": 2,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "赣州市人民政府办公室关于印发《赣州市加强高标准农田建设管理若干措施》的通知",
    "docNo": "未获取",
    "issuer": "赣州市人民政府办公室",
    "date": "2026-08",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://audit.ganzhou.gov.cn/gzssjj/c116223/202608/3bf5e3f929c345cf8eb593ac55b3db2f.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "35",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "关于印发《宁都县防止耕地「非粮化」稳定粮食生产工作方案》的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "宁都县人民政府办公室",
    "date": "2021-03-25 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ningdu.gov.cn/ndxxxgk/c100076/202103/6533d8fda99a4b00afdb53b285f07b34.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "关于印发宁都县集体建设用地使用权确权登记工作指导意见的通知",
    "docNo": "宁府办字〔2025〕60号",
    "issuer": "宁都县人民政府办公室",
    "date": "2025-11-20 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ningdu.gov.cn/ndxxxgk/c100076/202511/1fd66d02d0f842bd988c112d3401573d.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "关于印发宁都县进一步加强工程项目用地全过程纪实管理意见的通知",
    "docNo": "宁府办字〔2024〕54号",
    "issuer": "宁都县人民政府办公室",
    "date": "2024-11-04 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ningdu.gov.cn/ndxxxgk/c100076/202411/d6fa69556efe4ce2bd5a90fd56e3f840.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "关于印发宁都县城区预留地合作开发建设实施细则的通知",
    "docNo": "宁府办字〔2025〕14号",
    "issuer": "宁都县人民政府办公室",
    "date": "2025-02-26 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ningdu.gov.cn/ndxxxgk/c100076/202502/9bbf7af7e710470c91c433350df444e0.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "宁都县城市规划区内村民建房管理办法",
    "docNo": "宁府字〔2022〕37号",
    "issuer": "宁都县人民政府",
    "date": "2022-06-22 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ningdu.gov.cn/ndxxxgk/c100076/202212/70527d4a3b63472cb5f774c6a0ea0049.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "宁都县县城规划区征地安置预留地开发利用实施办法",
    "docNo": "宁府字〔2022〕38号",
    "issuer": "宁都县人民政府",
    "date": "2022-06-22 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ningdu.gov.cn/ndxxxgk/c100076/202212/a65f12fb3beb4a7aa1c8816f7a65f475.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "关于印发宁都县征地地上附着物和青苗补偿标准实施方案的通知",
    "docNo": "宁府办字〔2024〕39号",
    "issuer": "宁都县人民政府办公室",
    "date": "2024-09-09 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ningdu.gov.cn/ndxxxgk/c100076/202409/8505040453a74a8a876890c848bdee18.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "2026年宁都县行政规范性文件动态调整目录",
    "docNo": "未标注（目录性文件）",
    "issuer": "宁都县人民政府（县司法局承办）",
    "date": "2026-07-24 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ningdu.gov.cn/ndxxxgk/c100076/202607/1047d9c42e7047048e87ba0a65194e3e.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "县",
    "rank": 1,
    "caseId": "35",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 0
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 1
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 4,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 16,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 13,
   "provinceDocs": 3,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 16,
   "docs": 16,
   "innovations": 3,
   "implementation": 12,
   "pilot": 4,
   "gradeA": 15,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "36",
  "dir": "36_安徽省淮北市杜集区朔里镇",
  "title": "安徽省淮北市杜集区朔里镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "安徽省淮北市杜集区朔里镇",
  "batch": "第三批",
  "province": "安徽",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "133065.25 万元",
  "summary": "整治区涉2个社区、8个行政村共4968.6418公顷，规划新建高标准农田191.2094公顷、新增耕地30.2469公顷；2021年葛塘村入选国家试点，投入8774万元实施8个子项目，朔西湖景区引入社会资本2500万元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以安徽省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具12项（其中创新工具3项）、政策文件13份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "淮北市杜集区政府、朔里镇政府",
    "policyTitle": "淮北市复垦建新指标管理办法（试行）",
    "detail": "规范增减挂钩复垦建新指标的核定、使用与交易，是全域整治建设用地整理的核心指标工具。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "淮北市杜集区政府、朔里镇政府",
    "policyTitle": "淮北市土地节约集约利用综合改革",
    "detail": "批而未供、闲置和工业低效土地全域治理攻坚、土地利用计划指标池、产业混合用地与「零增地技改」。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "杜集区政府、朔里镇政府",
    "policyTitle": "杜集区林地占补平衡指标管理暂行办法",
    "detail": "规范林地占补平衡指标管理（与耕地补充指标工具同族），是全域整治中指标管理机制的区级旁证依据（契合度弱于本案例其他指标类文件）。（正文发布页待补，效力见区政府现行有效规范性文件目录动态更新第16项）",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "淮北市杜集区政府、朔里镇政府",
    "policyTitle": "「沉陷梯度治理法」采煤沉陷区治理政策",
    "detail": "针对采煤沉陷导致的耕地碎片化、生态退化、产业低端化等问题，创新提出「沉陷梯度治理法」，按沉降程度将土地分为稳定区、活跃区和衰退区，采取「宜耕则耕、宜建则建、宜湿则湿」策略；项目总治理面积9880亩，获国开行专项债、农发行贷款及社会资本超1.5亿元支持。",
    "innovation": "全国首创「沉陷梯度治理法」，按沉降程度分区分类施策治理采煤沉陷区",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "淮北市杜集区政府、朔里镇政府",
    "policyTitle": "生态公园建设与粉煤灰堆场生态修复政策",
    "detail": "治理沉陷区面积超2万亩，修复耕地1.6万亩，建成绿金湖、朔西湖等生态公园，形成「一带双城三青山，六湖九河十八湾」的城市风貌；通过水系连通工程，改善灌溉面积1.2万亩，防洪排涝能力提升30%；粉煤灰堆场生态修复项目栽植北国柳11万株，固碳能力年增1200吨，扬尘污染减少80%。",
    "innovation": "采煤沉陷区转化为生态公园，粉煤灰堆场修复实现固碳1200吨/年",
    "deps": [
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "淮北市杜集区政府、朔里镇政府",
    "policyTitle": "淮北市防止耕地「非粮化」稳定粮食生产实施方案",
    "detail": "耕地「非粮化」整治与耕地功能恢复，是全域整治农用地整治的先行任务。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "淮北市杜集区政府、朔里镇政府",
    "policyTitle": "淮北市国土空间生态修复规划（2022—2035年）",
    "detail": "以采煤沉陷区、废弃矿山生态修复为重点的市域生态修复总纲，是全域整治生态修复的规划依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "淮北市杜集区政府、朔里镇政府",
    "policyTitle": "淮北市推行耕地保护「田长制」",
    "detail": "建立市、县、镇、村四级田长制耕地保护监管体系，确保耕地保有量、永久基本农田与高标准农田建设目标。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "淮北市杜集区政府、朔里镇政府",
    "policyTitle": "「宅基地置换+集体经营性建设用地入市」产业重构政策",
    "detail": "腾退低效建设用地380亩，整合建成180亩工业园区，吸引23家企业入驻，创造300多个就业岗位，村集体经济年均增收超40万元；葛塘村通过整合零散宅基地建设集中居住区，释放产业用地50亩，实现「土地节约+农民安居」双目标；伊特纳能源科技项目投产后年产值预计达29.55亿元，税收近亿元。",
    "innovation": "「宅基地置换+入市」双政策联动，实现土地节约与产业重构双目标",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "杜集区政府、朔里镇政府",
    "policyTitle": "杜集区制止耕地「非农化」防止耕地「非粮化」实施方案",
    "detail": "为贯彻落实党中央、国务院关于严格耕地保护的决策部署，提出制止耕地「非农化」、防止耕地「非粮化」的具体要求，系本批该主题下唯一检出的杜集区本级文件，是全域整治中耕地保护补偿与责任目标考核的证据链依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "杜集区政府、朔里镇政府",
    "policyTitle": "杜集区土地节约集约利用综合改革实施方案",
    "detail": "明确结合安徽省全域土地综合整治政策、规范有序开展朔里镇全域土地综合整治试点项目，在保证数量增加、质量提升、生态改善的前提下优化永久基本农田布局，并提出探索全域土地综合整治试点、加大国家级朔里镇试点支持推进力度，同时深化建设用地「增存挂钩」机制，是本案例直接点名全域整治的区级依据。",
    "innovation": "",
    "deps": [
     3,
     4,
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "淮北市杜集区政府、朔里镇政府",
    "policyTitle": "探索利用市场化方式支持采煤沉陷区综合治理实施办法",
    "detail": "以市场化方式引入社会资本开展采煤沉陷区土地复垦与生态修复，属全域整治社会资本参与配套政策。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "安徽省人民政府办公厅关于开展全域土地综合整治试点工作的实施意见",
    "docNo": "皖政办〔2020〕15号",
    "issuer": "安徽省人民政府办公厅",
    "date": "2020-10-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ah.gov.cn/public/1681/553918871.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "36",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "安徽省自然资源厅关于印发《安徽省城乡建设用地增减挂钩节余指标有偿调剂管理办法》的通知",
    "docNo": "皖自然资〔2021〕165号",
    "issuer": "安徽省自然资源厅（经省政府同意）",
    "date": "2021-12-03",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.ah.gov.cn/xwdt/tzgg/146252221.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省政府",
    "rank": 3,
    "caseId": "36",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "安徽省自然资源厅关于印发《安徽省全域土地综合整治工程实施方案编制大纲（试行）》的通知",
    "docNo": "皖自然资修函〔2025〕18号",
    "issuer": "安徽省自然资源厅",
    "date": "2025-03-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.ah.gov.cn/public/7021/149865971.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "36",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "安徽省自然资源厅关于印发《安徽省全域土地综合整治实施方案省级审查要点（试行）》的通知",
    "docNo": "皖自然资修函〔2025〕61号",
    "issuer": "安徽省自然资源厅",
    "date": "2025-08-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.guoturen.com/wenku-17678.html",
    "attachUrl": "",
    "sourceNote": "核验说明：正文见第三方完整转载，省厅官网未公开",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "36",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "淮北市人民政府办公室关于印发淮北市复垦建新指标管理办法（试行）的通知",
    "docNo": "淮政办秘〔2018〕194号",
    "issuer": "淮北市人民政府办公室",
    "date": "2018-12-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.huaibei.gov.cn/zwgk/site/tpl/37451?contentId=11030631&organId=15",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "36",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "淮北市人民政府办公室关于印发探索利用市场化方式支持采煤沉陷区综合治理实施办法的通知",
    "docNo": "淮政办秘〔2021〕1号",
    "issuer": "淮北市人民政府办公室",
    "date": "2021-01-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.huaibei.gov.cn/zwgk/public/15/59645731.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "36",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "淮北市人民政府办公室关于印发淮北市防止耕地「非粮化」稳定粮食生产实施方案的通知",
    "docNo": "淮政办〔2021〕10号",
    "issuer": "淮北市人民政府办公室",
    "date": "2021-07-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.huaibei.gov.cn/zwgk/public/15/60262271.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "36",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "淮北市土地节约集约利用综合改革实施方案",
    "docNo": "未获取",
    "issuer": "淮北市人民政府",
    "date": "2023-09",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrghj.huaibei.gov.cn/zwgk/public/48/63020822.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "36",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "淮北市国土空间生态修复规划（2022—2035年）",
    "docNo": "未获取",
    "issuer": "淮北市自然资源和规划局",
    "date": "2024-02-22",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrghj.huaibei.gov.cn/zwgk/public/48/63218561.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "36",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "淮北市推行耕地保护「田长制」的实施方案",
    "docNo": "未获取",
    "issuer": "中共淮北市委、淮北市人民政府",
    "date": "2021-12",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://zrghj.huaibei.gov.cn/gzdt/jndt/56943571.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "36",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "杜集区人民政府办公室关于印发杜集区土地节约集约利用综合改革实施方案的通知",
    "docNo": "未获取（页面未标注文号）",
    "issuer": "杜集区人民政府办公室",
    "date": "2023-11-06 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.hbdj.gov.cn/zwgk/public/35/64585176.html",
    "attachUrl": "",
    "sourceNote": "文书形态：页面未设「有效性」字段，且未列入《杜集区人民政府现行有效的规范性文件目录（动态更新）》（2026-09-01，共 16 件）——是否仍延续有效需再核",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "36",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "杜集区人民政府办公室关于印发杜集区制止耕地「非农化」防止耕地「非粮化」实施方案的通知",
    "docNo": "杜政办〔2023〕7号",
    "issuer": "杜集区人民政府办公室",
    "date": "2023-04-04 发布",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.hbdj.gov.cn/zwgk/public/35/62873355.html",
    "attachUrl": "",
    "sourceNote": "核验说明：原条目页（…/grassroots/35/62966837.html）已 404，已换为杜集区人民政府信息公开网正文页（2026-09-28 复验 200，标题逐字一致）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "36",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "杜集区人民政府办公室关于印发《杜集区林地占补平衡指标管理暂行办法》的通知",
    "docNo": "杜政办〔2025〕2号",
    "issuer": "杜集区人民政府办公室",
    "date": "2025-01-26 施行",
    "status": "现行有效（列入《杜集区人民政府现行有效的规范性文件目录（动态更新）》，2026-09-01 版第 16 项）",
    "grade": "核验B级",
    "url": "https://www.hbdj.gov.cn/zwgk/public/35/65142339.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "36",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 3,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 12,
   "provinceTools": 4,
   "nationalTools": 0,
   "provinceBasis": 4,
   "nationalBasis": 0,
   "localDocs": 9,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 12,
   "docs": 13,
   "innovations": 3,
   "implementation": 9,
   "pilot": 3,
   "gradeA": 9,
   "gradeB": 4,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "37",
  "dir": "37_安徽省六安市霍山县但家庙镇",
  "title": "安徽省六安市霍山县但家庙镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "安徽省六安市霍山县但家庙镇",
  "batch": "第三批",
  "province": "安徽",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "1.41 亿元",
  "summary": "整治区域3.06万亩，涉及但家庙、花石嘴2个行政村，总投资1.41亿元，统筹农用地整治、建设用地整治、生态保护修复、历史文化保护和产业引入；截至2025年11月，35个子项目已全部完成建设并完成县级初验。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以安徽省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具16项（其中创新工具3项）、政策文件18份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "六安市乡村振兴发展土地整治项目增减挂钩与补充耕地指标管理暂行办法",
    "detail": "规定增减挂钩周转指标与补充耕地指标「所有权归县区政府、管理权归市政府、使用权有偿取得」及使用价款标准，是全域整治指标闭环与资金闭环的核心配套办法。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "但家庙镇全域土地综合整治试点项目协调联动工作机制",
    "detail": "本案例唯一的镇域专项机制文件：工作专班实行双组长制（由但家庙镇党委、政府主要负责同志担任），负责项目规划设计建设运营全流程协调；但家庙镇为项目实施主体并实行「项目、责任、时限」清单化管理；县自然资源局为项目申报单位，统筹立项、验收、备案入库与指标交易，是本案例最直接的镇域协调联动依据。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "霍山县农村土地整治项目实施管理办法",
    "detail": "为加强新增耕地和城乡建设用地增减挂钩项目实施管理，明确新增耕地项目实行「占一补一、占优补优、占水田补水田」、通过省市级验收后纳入补充耕地指标储备库用于占补平衡；增减挂钩项目通过建新拆旧与土地整理复垦实现项目区各类土地面积平衡，是全域整治中土地整治项目实施管理的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 4,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "霍山县城乡建设用地增减挂钩和新增耕地项目实施管理办法",
    "detail": "规定县政府每年年初下达增减挂钩项目计划任务，乡镇负责找地块、拆迁安置、土地权属调整与复垦（每年6月底前完成复垦、7月组织报验），实行乡镇自验、县级初验、市级复验、省厅抽验四级验收，复垦指标首先满足各乡镇农民建房、基础设施、美丽乡村等项目、剩余由县政府统一安排使用，是全域整治中增减挂钩与新增耕地项目管理的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 5,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "（政府办文件）霍山县耕地保护责任目标考核办法",
    "detail": "明确各乡镇政府、经济开发区管委会对本行政区域内耕地保有量、永久基本农田保护面积以及高标准农田建设任务负责，乡镇长、管委会主任为第一责任人，由县自然资源和规划局会同县农业农村局、统计局组织考核，实行年度自查、期中检查、期末考核相结合（每5年1个规划期），是全域整治中耕地保护责任目标考核的区级依据。",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "垦造水田与耕地「三位一体」保护政策",
    "detail": "整治区域规模3.06万亩，涉及但家庙、花石嘴2个行政村，总投资1.41亿元；突出耕地数量、质量和生态「三位一体」保护，大力推动垦造水田工作；项目完工后，将实现耕地净增加681亩，新增耕地率达6.85%。",
    "innovation": "垦造水田为抓手推动耕地数量质量生态「三位一体」保护",
    "deps": [
     1,
     3,
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "实施农村土地综合整治三年行动计划（2018-2020年）助力乡村振兴",
    "detail": "市政府直接部署「田水路林村」综合整治、高标准农田连片提质、存量建设用地集中盘活挂钩，是六安市全域土地综合整治的直接前身与政策基础。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "建立耕地保护田长制",
    "detail": "建立市、县、乡、村四级田长制，明确「优化农田布局」「实施高标准农田建设」「建立耕地保护补偿制度」等八项任务。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "六安市高标准农田建设实施方案",
    "detail": "提出「旱改水应改尽改、新增耕地应增尽增」并要求同步摸排增减挂钩资源，是全域整治新增耕地与水田指标生成的核心政策工具。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "六安市国土空间生态修复规划（2022—2035年）",
    "detail": "划定「岗丘农田整治与耕地质量提升区」等五大修复分区，将「农田整治与高标准农田建设」列为重点工程（估算投资97.4亿元）。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 11,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "六安市土地综合整治规划（2022-2035年）",
    "detail": "明确全市土地整治战略、目标任务、重点区域与重点项目布局，自定位为「指导全市土地整治工作的纲领性文件和基本依据」。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "增减挂钩拆旧复垦与建设用地布局优化政策",
    "detail": "统筹农民住宅建设、产业发展、公共服务、基础设施等各类建设用地，通过增减挂钩、拆旧复垦等方式，有序开展农村宅基地、工矿废弃地以及其他低效闲置建设用地整理，优化建设用地布局结构；累计进场施工地块102块340余亩，已完成地块69块210余亩。",
    "innovation": "以地块清单化进场施工管理推进拆旧复垦进度",
    "deps": [
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "霍山县农村集体建设用地使用权入股（联营）实施办法",
    "detail": "鼓励在符合国土空间规划前提下对依法登记的宅基地等农村建设用地进行复合利用、发展乡村民宿与农产品初加工等农村产业，鼓励盘活利用乡村闲置校舍、厂房等建设养老服务设施，并规定前期准备—项目审查—地价评估—方案编制—民主决策（村民会议三分之二以上成员或村民代表同意并公示）的程序，是全域整治中集体建设用地入股（联营）与闲置农房盘活的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "六安市耕地保护补偿激励及专项资金管理暂行办法",
    "detail": "落实田长制配套的市级耕地保护补偿激励专项资金制度，对成效突出的乡镇给予专项资金补偿激励。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "市"
    ]
   },
   {
    "no": 15,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "霍山县集体经营性建设用地入市实施办法",
    "detail": "规定入市范围为国土空间规划确定为工业、商业等经营性用途、产权明晰且已依法办理土地所有权登记的集体经营性建设用地；入市地块须产权明晰、界址清楚、权属无争议，所有权人与承包经营权人、使用权人签订补偿协议或调剂土地并注销／变更权证；并明确民主决策要求，是全域整治中集体经营性建设用地入市的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 16,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "全面实施",
    "lead": "霍山县政府、但家庙镇政府",
    "policyTitle": "五大板块系统整治与县级协调联动机制",
    "detail": "实施内容包括农用地整治、建设用地整治、生态保护修复、历史文化保护和产业引入五大板块；霍政办〔2023〕20号建立但家庙镇全域土地综合整治试点项目协调联动工作机制，明确部门职责分工、协调联动流程。",
    "innovation": "五大板块系统整治+县级协调联动工作机制保障",
    "deps": [
     1,
     5,
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省",
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "安徽省人民政府办公厅关于开展全域土地综合整治试点工作的实施意见",
    "docNo": "皖政办〔2020〕15号",
    "issuer": "安徽省人民政府办公厅",
    "date": "2020-10-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ah.gov.cn/public/1681/553918871.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "安徽省自然资源厅关于印发《安徽省城乡建设用地增减挂钩节余指标有偿调剂管理办法》的通知",
    "docNo": "皖自然资〔2021〕165号",
    "issuer": "安徽省自然资源厅（经省政府同意）",
    "date": "2021-12-03",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.ah.gov.cn/xwdt/tzgg/146252221.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省政府",
    "rank": 3,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "安徽省自然资源厅关于印发《安徽省全域土地综合整治工程实施方案编制大纲（试行）》的通知",
    "docNo": "皖自然资修函〔2025〕18号",
    "issuer": "安徽省自然资源厅",
    "date": "2025-03-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.ah.gov.cn/public/7021/149865971.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "安徽省自然资源厅关于印发《安徽省全域土地综合整治实施方案省级审查要点（试行）》的通知",
    "docNo": "皖自然资修函〔2025〕61号",
    "issuer": "安徽省自然资源厅",
    "date": "2025-08-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.guoturen.com/wenku-17678.html",
    "attachUrl": "",
    "sourceNote": "核验说明：正文见第三方完整转载，省厅官网未公开",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "37",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "霍山县人民政府办公室关于印发但家庙镇全域土地综合整治试点项目协调联动工作机制的通知",
    "docNo": "霍政办〔2023〕20号",
    "issuer": "霍山县人民政府办公室",
    "date": "2023-10-09",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.ahhuoshan.gov.cn/xxgk/zfgb/37214518.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "六安市人民政府关于实施农村土地综合整治三年行动计划（2018-2020年）助力乡村振兴的意见",
    "docNo": "六政秘〔2018〕166号",
    "issuer": "六安市人民政府",
    "date": "未获取",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://zrzy.luan.gov.cn/public/6608271/10044130.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "六安市人民政府办公室关于印发六安市乡村振兴发展土地整治项目增减挂钩与补充耕地指标管理暂行办法的通知",
    "docNo": "六政办秘〔2018〕87号",
    "issuer": "六安市人民政府办公室",
    "date": "2018-05-15",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://www.luan.gov.cn/group1/M00/0B/55/wKgSGWN_J3CALDNKAALfPuAOtBQ923.pdf",
    "attachUrl": "",
    "sourceNote": "核验说明：省、市门户均无该文正文页，来源为官网公开的全文附件",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "中共六安市委 六安市人民政府关于建立耕地保护田长制的实施意见",
    "docNo": "六发〔2021〕26号",
    "issuer": "中共六安市委、六安市人民政府",
    "date": "2021-11-24",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.luan.gov.cn/public/content/9840168",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "六安市自然资源和规划局 六安市财政局关于印发《六安市耕地保护补偿激励及专项资金管理暂行办法》的通知",
    "docNo": "六自然〔2022〕110号",
    "issuer": "六安市自然资源和规划局、六安市财政局（经市政府同意）",
    "date": "2022-05-12",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://zrzy.luan.gov.cn/group1/M00/08/D2/wKgSGWKC-dGADMWxAAP2_HODotE533.pdf",
    "attachUrl": "",
    "sourceNote": "核验说明：省、市门户均无该文正文页，来源为官网公开的全文附件",
    "level": "市",
    "levelHit": "市政府",
    "rank": 2,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "六安市人民政府办公室关于印发《六安市高标准农田建设实施方案》的通知",
    "docNo": "六政办〔2022〕10号",
    "issuer": "六安市人民政府办公室",
    "date": "2022-03-16",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://nyncj.luan.gov.cn/public/6608321/9911256.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "六安市人民政府办公室关于印发《六安市国土空间生态修复规划（2022—2035年）》的通知",
    "docNo": "未获取",
    "issuer": "六安市人民政府办公室",
    "date": "2024-11-19",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.luan.gov.cn/ghjh/tdlygh/5400984.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "六安市自然资源和规划局关于《六安市土地综合整治规划（2022-2035年）》（征求意见稿）意见的公告",
    "docNo": "未获取",
    "issuer": "六安市自然资源和规划局",
    "date": "2024-08-01",
    "status": "不确定（征求意见稿）",
    "grade": "核验A级",
    "url": "https://www.luan.gov.cn/hdjl/yjzjk/content/article/10544617",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "关于印发《霍山县农村土地整治项目实施管理办法》的通知",
    "docNo": "霍政办〔2021〕19号",
    "issuer": "霍山县人民政府办公室",
    "date": "2021-03-29 成文、印发（经县政府第 68 次常务会议审议通过）",
    "status": "现行有效——列入《霍山县继续有效规范性文件目录》（2026-05-06，政府及政府办 131 件之第 91 项，起草单位自然资源局）",
    "grade": "核验A级",
    "url": "https://www.ahhuoshan.gov.cn/public/content/34523794",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "关于印发霍山县城乡建设用地增减挂钩和新增耕地项目实施管理办法的通知",
    "docNo": "霍政办秘〔2018〕42号",
    "issuer": "霍山县人民政府办公室",
    "date": "2018-03-09 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ahhuoshan.gov.cn/public/6596221/34523782.html",
    "attachUrl": "",
    "sourceNote": "文书形态：2018-03-12 发布；页面「有效性」字段标注「有效」，废止时间「暂无」（经县政府第 12 次常务会议研究同意）",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "关于印发霍山县集体经营性建设用地入市实施办法的通知",
    "docNo": "霍政办〔2022〕16号",
    "issuer": "霍山县人民政府办公室",
    "date": "2022-07-24 发布（经县政府第 8 次常务会议审议通过）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ahhuoshan.gov.cn/public/content/35972586",
    "attachUrl": "",
    "sourceNote": "文书形态：页面「有效性」字段标注「有效」，废止时间「暂无」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "霍山县人民政府办公室关于印发霍山县农村集体建设用地使用权入股（联营）实施办法的通知",
    "docNo": "霍政办秘〔2024〕54号",
    "issuer": "霍山县人民政府办公室",
    "date": "2024-08-20 成文、发布（经县政府第 42 次常务会议研究同意）",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.ahhuoshan.gov.cn/public/6619001/37514947.html",
    "attachUrl": "",
    "sourceNote": "文书形态：试行期两年",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "（政府办文件）霍山县耕地保护责任目标考核办法",
    "docNo": "霍政办〔2019〕25号",
    "issuer": "霍山县人民政府办公室（发布机构标注\"霍山县\"，来源单位霍山县自然资源和规划局）",
    "date": "2019-09-06 成文、印发",
    "status": "现行有效——列入《霍山县继续有效规范性文件目录》（2026-05-06，政府及政府办 131 件之第 72 项）",
    "grade": "核验A级",
    "url": "https://www.ahhuoshan.gov.cn/public/6619001/35808071.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "县自然资源和规划局",
    "rank": 1,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "安徽省自然资源厅关于印发《全域土地综合整治试点实施方案报批审查要点（试行）》的通知",
    "docNo": "皖自然资修〔2022〕1号",
    "issuer": "安徽省自然资源厅",
    "date": "2022-01-26 印发",
    "status": "现行有效（试行）",
    "grade": "核验A级",
    "url": "https://zrzyt.ah.gov.cn/xwdt/tzgg/146433751.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "37",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 5,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 6,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 1,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 16,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 13,
   "provinceDocs": 5,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 16,
   "docs": 18,
   "innovations": 3,
   "implementation": 13,
   "pilot": 3,
   "gradeA": 17,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "38",
  "dir": "38_重庆市大足区拾万镇",
  "title": "重庆市大足区拾万镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "重庆市大足区拾万镇",
  "batch": "第三批",
  "province": "重庆",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "大足区拾万镇统筹高标准农田改造、宅基地腾退、确权确股、集体经营性建设用地入市等「五合一」改革，2025年入选全国第三批典型案例；长虹村2228块碎田整合为999块大田，入市成交32亩、金额1000余万元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以重庆市配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具15项（其中创新工具3项）、政策文件19份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "重庆市大足区政府、拾万镇政府",
    "policyTitle": "闲置宅基地大规模腾退与集中居住政策",
    "detail": "试点区域累计腾退闲置宅基地9535户，增加建设用地指标5054亩；以长虹村为例，腾退宅基地16亩，用于建设2个微集中居住点、1个农村集市和高标准民宿，既改善居住环境，又释放产业发展空间。",
    "innovation": "腾退闲置宅基地9535户、增加建设用地指标5054亩，微集中居住点模式",
    "deps": [
     1,
     2,
     3,
     6,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "重庆市大足区政府、拾万镇政府",
    "policyTitle": "重庆市要素市场化配置综合改革试点行动方案",
    "detail": "明确提出「允许零星插花集体建设用地通过全域土地综合整治并为大块宗地入市」，并部署闲置农房盘活、宅基地自愿有偿退出、地票与增减挂钩衔接、存量闲置土地盘活。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市大足区政府、拾万镇政府",
    "policyTitle": "切实加强高标准农田建设提升粮食安全保障能力",
    "detail": "建立「五统一」农田建设管理新体制，明确高标准农田新增耕地指标核定后纳入补充耕地指标库并可用于跨区域调剂。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市大足区政府、拾万镇政府",
    "policyTitle": "重庆市高标准农田建设规划（2021—2030年）",
    "detail": "要求形成规划项目库和布局图、强化建后管护与耕地用途管制，为全域整治「农田集中连片」提供规划依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市大足区政府、拾万镇政府",
    "policyTitle": "重庆市历史遗留和关闭矿山地质环境治理恢复与土地复垦工作方案",
    "detail": "统筹山水林田湖草系统治理，按「宜农则农、宜林则林」原则推进矿山损毁土地治理恢复与土地复垦（附件任务表含大足区88.49公顷）。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市大足区政府、拾万镇政府",
    "policyTitle": "重庆市临时用地和设施农业用地土地复垦管理办法",
    "detail": "明确临时用地和设施农业用地的复垦义务、方案与验收要求，是全域整治项目实施中临时占地「用后复垦」的配套管理规则。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市大足区政府、拾万镇政府",
    "policyTitle": "重庆市矿山生态修复市场主体信用管理办法",
    "detail": "建立矿山生态修复市场主体信用管理机制，是社会资本参与全域整治生态修复的准入与监管工具。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市大足区农业农村委员会",
    "policyTitle": "重庆市大足区高标准农田建设规划（2021—2030年）",
    "detail": "规划「七化」示范区39696亩（涉及拾万镇、石马镇、金山镇），建设内容按「田、土、水、路、林、电、技、管」八个维度实施（田面平整、耕作层≥50cm、田坎化率丘陵区≥90%），每亩投资逐步达到约3000元，并设定2025年累计建成78万亩、2030年累计建成83万亩等约束性指标，是全域整治中高标准农田建设的区级规划依据。",
    "innovation": "",
    "deps": [
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "大足区政府、拾万镇政府",
    "policyTitle": "大足区规范农村宅基地审批管理工作实施方案",
    "detail": "明确区农业农村委负责建立健全宅基地分配、使用、流转、违法用地查处等管理制度并指导宅基地合理布局与闲置宅基地、闲置农房利用；宅基地用地面积标准为每人30平方米；审批流程实行镇街「一个窗口」联审联办、涉及占用农用地的办理农用地转用审批并实行「三到场」全过程监管，是全域整治中宅基地审批管理的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "重庆市大足区规划和自然资源局、重庆市大足区农业农村委员会、…",
    "policyTitle": "大足区农房建设管控指导意见（试行）",
    "detail": "规定农房建设「八不准」（不准占用永久基本农田建房、不准强占多占耕地建房、不准买卖流转耕地违法建房等）、农房用地面积标准每人30平方米，并要求居民点聚集度以8—10户为起点、不宜超过50户，坚持「小组团、微田园、生态化、有特色」，是全域整治中农房建设管控的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "重庆市大足区农业农村委员会、重庆市大足区财政局",
    "policyTitle": "2026年重庆市大足区耕地地力保护补贴工作实施方案",
    "detail": "规定对撂荒1年以上的耕地取消次年补贴资格、待复耕后重新申报，符合条件的新增耕地（已确权）可纳入补贴范围，并通过引导秸秆还田、深松整地、科学施肥用药等措施保护耕地、提升地力，是全域整治中耕地保护补偿的区级依据。",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "重庆市大足区政府、拾万镇政府",
    "policyTitle": "重庆市农村建设用地复垦项目管理办法",
    "detail": "规范农村废弃、闲置、低效建设用地复垦为耕地并核定复垦指标（新增耕地、新增水田指标），是全域整治「拆旧复垦/增减挂钩」指标生产的直接操作办法。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "大足区政府、拾万镇政府",
    "policyTitle": "关于防止耕地「非粮化」稳定粮食生产的实施意见",
    "detail": "为贯彻落实防止耕地「非粮化」稳定粮食生产的部署，据此提出严禁规模经营主体流转永久基本农田种树挖塘、坚持将流转耕地优先用于粮食生产、加强耕地流转后监管等要求，是全域整治中耕地保护的区级依据。（正文全文未在门户公开，文号与名称见区农业农村委正式文件引用）",
    "innovation": "",
    "deps": [
     19
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "试点推进",
    "lead": "重庆市大足区政府、拾万镇政府",
    "policyTitle": "「五合一」综合改革与非遗文旅业态培育政策",
    "detail": "以全域土地综合整治为平台，统筹高标准农田改造提升、农村宅基地腾退、土地承包经营权确权确股、集体经营性建设用地入市、集体经济发展「五合一」综合改革；长虹村利用腾退指标建设非遗技艺工坊、农耕文化带和文旅融合项目，形成「淮远河农耕文化带」；2024年计划推动集体经营性建设用地入市33亩，预计直接收益3177万元。",
    "innovation": "全国「五合一」综合改革集成模式，2024年计划入市33亩预计收益3177万元",
    "deps": [
     2,
     4,
     5,
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   },
   {
    "no": 15,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "重庆市大足区政府、拾万镇政府",
    "policyTitle": "农民增收与村集体「造血」机制政策",
    "detail": "通过土地流转、入股分红和务工就业，农民收入显著增长；长虹村村民依托五彩稻田发展乡村旅游，年增收超200万元；村集体通过土地入市和产业项目，年收益预计突破500万元；纳入重庆市全域土地综合整治渝西样板间，预计带动周边3镇10村协同发展。",
    "innovation": "村集体年收益突破500万元，形成「土地增值、文化增色、农民增收」可持续模式",
    "deps": [
     1,
     3,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "重庆市全域土地综合整治改革方案（2025—2029年）",
    "docNo": "无文号",
    "issuer": "重庆市经济体制改革专项小组",
    "date": "2025-04-08",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/jytablqk/202508/t20250805_14877169_wap.html",
    "attachUrl": "",
    "sourceNote": "核验说明：官方答复函引用其名称与日期，全文未公开",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "重庆市规划和自然资源局关于印发《重庆市全域土地综合整治项目规划设计导则（试行）》的通知",
    "docNo": "渝规资发〔2022〕53号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2022-12-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/qtwj/202304/t20230428_11923465.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "重庆市全域土地综合整治实施方案编制指南（试行）",
    "docNo": "无文号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2022-09-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/qtwj/202304/t20230428_11923480.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "重庆市财政局、重庆市规划和自然资源局关于印发《重庆市国土空间生态修复重点专项资金管理办法》的通知",
    "docNo": "渝财建〔2021〕100号",
    "issuer": "重庆市财政局、重庆市规划和自然资源局",
    "date": "2021-06-10",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://czj.cq.gov.cn/zwgk_268/zfxxgkml/zcwj/qtwj/202106/t20210610_9387659.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "重庆市人民政府办公厅关于印发《重庆市鼓励和支持社会资本参与生态保护修复实施方案》的通知",
    "docNo": "渝府办发〔2023〕32号",
    "issuer": "重庆市人民政府办公厅",
    "date": "2023-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/qtgw/202304/t20230417_11885285.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "重庆市规划和自然资源局关于印发重庆市农村集体经营性建设用地入市交易规则（试行）的通知",
    "docNo": "渝规资规范〔2023〕8号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2023-06-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://nyncw.cq.gov.cn/ztzl_161/rdzt/xczx/zcwj_249776/bm_257463/202312/t20231208_12678198_wap.html",
    "attachUrl": "",
    "sourceNote": "核验说明：相关入市交易规则已公开，本通知全文未公开",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "重庆市全域土地综合整治项目管理办法",
    "docNo": "未获取",
    "issuer": "重庆市规划和自然资源局",
    "date": "2026-04",
    "status": "现行有效（2026-04-28 市局在大足区召开政策解读会，宣布已施行）",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/jytablqk/202608/t20260817_15943879_wap.html",
    "attachUrl": "",
    "sourceNote": "核验说明：市局答复函确认该办法已印发施行；正式印发全文页待补",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "重庆市人民政府办公厅关于切实加强高标准农田建设提升粮食安全保障能力的实施意见",
    "docNo": "渝府办发〔2020〕27号",
    "issuer": "重庆市人民政府办公厅",
    "date": "2020-03-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/qtgw/202003/t20200317_8614325.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "重庆市人民政府关于重庆市高标准农田建设规划（2021—2030年）的批复",
    "docNo": "渝府〔2022〕16号",
    "issuer": "重庆市人民政府",
    "date": "2022-04-20",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/qtgw/202204/t20220426_10660952.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "重庆市规划和自然资源局关于印发《重庆市农村建设用地复垦项目管理办法》的通知",
    "docNo": "渝规资规范〔2021〕8号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2021-12-30",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/xzgfxwj/202201/t20220118_10312702_wap.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "重庆市人民政府办公厅关于印发重庆市历史遗留和关闭矿山地质环境治理恢复与土地复垦工作方案的通知",
    "docNo": "渝府办发〔2018〕55号",
    "issuer": "重庆市人民政府办公厅",
    "date": "2018-04-29",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/xzgfxwj/szfbgt/201805/t20180507_8837617.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "重庆市规划和自然资源局关于印发重庆市临时用地和设施农业用地土地复垦管理办法的通知",
    "docNo": "渝规资规范〔2024〕3号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2024-06-12",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/xzgfxwj/202406/t20240627_13329348.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "重庆市规划和自然资源局关于印发重庆市矿山生态修复市场主体信用管理办法的通知",
    "docNo": "渝规资规范〔2024〕4号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2024-10-10",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/xzgfxwj/202410/t20241031_13757529.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "重庆市人民政府关于印发《重庆市要素市场化配置综合改革试点行动方案》的通知",
    "docNo": "渝府发〔2025〕16号",
    "issuer": "重庆市人民政府",
    "date": "2025-11-23",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/xzgfxwj/szf/202511/t20251128_15195161.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "大足区规范农村宅基地审批管理工作实施方案",
    "docNo": "大足府发〔2020〕35号",
    "issuer": "重庆市大足区人民政府（页面\"发布机构\"标注：大足区农业农村委）",
    "date": "2020-10-20 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.dazu.gov.cn/qzfbm/qnyncw/zwgk_53321/fdzdgknr_53323/lzyj_100471/qtgw_100473/202011/t20201111_8449800.html",
    "attachUrl": "",
    "sourceNote": "文书形态：页面「有效性」字段标注「有效」",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "大足区农房建设管控指导意见（试行）",
    "docNo": "大足规资发〔2023〕10号",
    "issuer": "重庆市大足区规划和自然资源局、重庆市大足区农业农村委员会、重庆市大足区住房和城乡建设委员会",
    "date": "2023-02-23 成文",
    "status": "",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zz/dzq/zwgk/fdzdgknr/zcwj_151427/xzgfxwj_151429/202310/t20231024_12466065.html",
    "attachUrl": "",
    "sourceNote": "文书形态：2023-04-01 起施行；现行有效（列于区规划自然资源局行政规范性文件栏目）",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "2026年重庆市大足区耕地地力保护补贴工作实施方案",
    "docNo": "大足农委发〔2026〕6号",
    "issuer": "重庆市大足区农业农村委员会、重庆市大足区财政局",
    "date": "2026-02-26 成文、2026-02-27 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.dazu.gov.cn/qzfjz/txjdbsc/zwgk_53321/zfxxgkml/jczwgk_218260/snbtlyjczwgk_449608/gdjsylyzj/gddlbhhzlbt/zcyj/202602/t20260227_15460653.html",
    "attachUrl": "",
    "sourceNote": "文书形态：页面「有效性」字段标注「有效」",
    "level": "区县",
    "levelHit": "区财政局",
    "rank": 1,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "重庆市大足区高标准农田建设规划（2021—2030年）",
    "docNo": "未获取（区农业农村委发布，页面无文号）",
    "issuer": "重庆市大足区农业农村委员会",
    "date": "2022-08 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.dazu.gov.cn/qzfbm/qnyncw/zwxx_53317/gggs/202208/t20220831_11058352.html",
    "attachUrl": "",
    "sourceNote": "文书形态：规划期 2021—2030 年（展望 2035 年）。发布栏目为「公告公示」，但系正式印发的规划而非征求意见稿（含约束性指标）",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "38",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 19,
    "name": "关于防止耕地「非粮化」稳定粮食生产的实施意见",
    "docNo": "大足府办发〔2021〕76号",
    "issuer": "重庆市大足区人民政府办公室",
    "date": "2021 年印发",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.dazu.gov.cn/qzfbm/qnyncw/zwxx_53317/gggs/202405/t20240514_13203988.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文全文未在门户公开（文号与名称见区农业农村委正式文件引用，发布页待补）",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "38",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 6,
    "innovations": 0
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 2
   }
  ],
  "levels": {
   "localTools": 15,
   "provinceTools": 10,
   "nationalTools": 0,
   "provinceBasis": 10,
   "nationalBasis": 0,
   "localDocs": 5,
   "provinceDocs": 14,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 15,
   "docs": 19,
   "innovations": 3,
   "implementation": 12,
   "pilot": 3,
   "gradeA": 16,
   "gradeB": 3,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "39",
  "dir": "39_湖北省荆州市公安县麻豪口镇",
  "title": "湖北省荆州市公安县麻豪口镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "湖北省荆州市公安县麻豪口镇",
  "batch": "第三批",
  "province": "湖北",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "1.95 亿元",
  "summary": "探索湖区平原「流域型」土地综合整治模式，项目区含黄岭、鹅港、麻口3村及崇湖国家湿地公园，总投资1.95亿元；崇湖水质由V类提升至Ⅳ类，2023年成为国际重要湿地，虾稻亩均增收720元，2024年旅游收入1500万元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以湖北省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具17项（其中创新工具3项）、政策文件18份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "加强补充耕地指标和城乡建设用地增减挂钩指标管理",
    "detail": "建立市级补充耕地指标与增减挂钩节余指标统筹调剂机制并明确奖补价格，随文印发《荆州市城乡建设用地增减挂钩节余指标市域统筹调剂暂行办法》。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "公安县占补平衡补充耕地管理工作方案",
    "detail": "以加强耕地占补平衡项目实施、提高土地复垦整理开发水平、促进农村土地综合整治工程实施、缓解补充耕地指标缺口矛盾为目的，明确县政府是耕地占补项目申报实施管理的责任主体，占补平衡项目实行政府主导、国土资源部门牵头、财政部门管资金、农业部门把关后期管护、乡镇组织实施的分工，是全域整治中占补平衡补充耕地管理的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "湖区平原「流域型」土地综合整治模式",
    "detail": "项目区包含黄岭村、鹅港村、麻口村3个村及崇湖国家湿地公园，总面积6.2万亩，整治规模2.28万亩，总投资1.95亿元；针对空间布局不合理、水环境差、耕地碎片化等问题，探索湖区平原地区「流域型」土地综合整治模式，以治水为抓手、治田为支撑，统筹「三生」空间治理。",
    "innovation": "全国首创湖区平原「流域型」土地综合整治模式，以治水带动治田",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "湿地生态修复与国际重要湿地认定政策",
    "detail": "依托崇湖湿地生态与产业基础，致力于打造稻虾产业延伸示范区、美丽乡村样板区、生物多样性保护区；崇湖水质从V类提升至Ⅳ类，2023年成为国际重要湿地，候鸟数量大幅增加，濒危青头潜鸭超百只；虾稻亩均增收720元，年增收超千万，黄岭村集体经济破百万；2024年旅游收入1500万元，人均增收3000元。",
    "innovation": "崇湖升级为国际重要湿地，实现「污水变清水、小田变大田、湖区变景区」",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "加快推进荆州市全域国土综合整治",
    "detail": "荆州市本级全域国土综合整治的纲领性实施意见，明确全市整治目标、任务、区域布局与推进机制。",
    "innovation": "",
    "deps": [
     4,
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "支持开发区新型工业用地（M0）发展",
    "detail": "通过「标准地」出让、存量工业用地转M0、产业用房分割转让等安排推进产业用地混合利用与存量盘活。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "公安县人民政府关于公布行政规范性文件清理结果的决定",
    "detail": "公布县政府行政规范性文件清理结果（保留／废止／失效目录），可用于反查本案例各政策件的现行效力。（该件为2022年版，另有2021年版与2025年版，引用时须以上述目录逐件复核）",
    "innovation": "",
    "deps": [
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "进一步加强和规范农村宅基地和农房建设审批管理工作",
    "detail": "部署闲置宅基地和闲置住宅盘活、「建新拆旧」、低效闲置农房建设用地整治及村庄规划统筹。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "深化「亩产论英雄」改革服务全市高质量发展",
    "detail": "以亩均效益为导向推进土地节约集约利用与低效用地再开发，是全域整治「低效用地再开发」维度的市级政策工具。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "公安县农村宅基地和农房审批管理暂行办法",
    "detail": "确立农村宅基地审批的集约节约原则（充分利用原有宅基地、空闲地和其它未利用地，凡能利用旧宅基地的不得新占土地，禁止占用永久基本农田），严格实行「一户一宅」，并规定规模适度标准（使用农用地每户不超过140㎡、使用未利用地或建设用地每户不超过200㎡），是全域整治中宅基地及农房审批管理的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "县人民政府关于建立粮食生产功能区和重要农产品生产保护区的实施意见",
    "detail": "依据国家层面粮食生产功能区和重要农产品生产保护区制度框架与《省人民政府关于建立粮食生产功能区和重要农产品生产保护区的实施意见》（鄂政发〔2017〕43号），以永久基本农田和农村土地承包经营权确权登记颁证为基础将「两区」细化落实到具体地块，坚持科学划定、确保产能，是全域整治中永久基本农田保护的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "公安县政府、湖北交投建设集团、湖北省自然资源厅",
    "policyTitle": "「投资＋建设＋指标兑现」模式与省级指标台账代管政策",
    "detail": "项目首次探索「投资＋建设＋指标兑现」模式，形成社会资本参与全域国土整治项目的良性运转机制。成立SPV（特殊目的实体）项目公司投资并负责项目建设。公安县将全域国土综合整治产生的新增耕地指标作为专属指标，纳入湖北省自然资源厅新增耕地指标台账代管。",
    "innovation": "全国首创「投资＋建设＋指标兑现」模式+新增耕地指标省级台账代管",
    "deps": [
     3,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "公安县2024年财政衔接资金项目实施方案",
    "detail": "统筹安排全县2024年度财政衔接推进乡村振兴补助资金项目（含农村基础设施建设、产业发展配套），是全域整治中涉农资金统筹整合的区级依据。（最新年版，此前年度版本均已被替代）",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "公安县农业农村局、公安县财政局",
    "policyTitle": "公安县2025年耕地地力补贴工作实施方案",
    "detail": "部署全县2025年度耕地地力保护补贴的申报、核实与发放工作，是全域整治中耕地保护补偿的区级依据。（最新年版，此前年度版本均已被替代）",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 15,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "全域国土综合整治项目管理制度",
    "detail": "依据《湖北省全域国土综合整治项目管理办法》等三项制度，麻豪口镇整治项目按省级制度规范项目申报、实施监管与竣工验收流程，明确各级职责分工与流程节点，是本案例项目规范化实施的省级制度依据。",
    "innovation": "省级项目管理办法等三项制度规范项目全流程管理",
    "deps": [
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 16,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "公安县集体土地上房屋搬迁补偿安置实施办法（暂行）",
    "detail": "规范全县集体土地上房屋搬迁的补偿与安置（含搬迁范围、补偿方式、安置途径），是全域整治中土地权属调整与征收补偿的区级依据；门户另有政策解读与图文解读可作实施佐证。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 17,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "公安县政府、麻豪口镇政府",
    "policyTitle": "县人民政府关于重新公布实施集体建设用地、集体未利用地、地上附着物和青苗补偿标准的通知",
    "detail": "重新公布实施全县集体建设用地、集体未利用地、地上附着物和青苗补偿标准，是麻豪口镇整治范围内土地权属调整与青苗补偿的最新区级价格依据；门户附有政策解读。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省人民政府批转省自然资源厅关于推进全域国土综合整治和加快推进新增工业用地「标准地」出让两个意见的通知",
    "docNo": "鄂政发〔2019〕25号",
    "issuer": "湖北省人民政府",
    "date": "2019-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.hbqj.gov.cn/xxgk/zc/qtwj/szfwj/2020/202005/t20200521_2283229.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "省全域国土综合整治领导小组办公室关于印发《湖北省全域国土综合整治项目管理办法》等三项制度的通知",
    "docNo": "鄂土整办函〔2023〕6号",
    "issuer": "湖北省全域国土综合整治领导小组办公室",
    "date": "2023-03-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.hubei.gov.cn/fbjd/zhengce/qtzdgkwj/202303/t20230321_4595569.shtml",
    "attachUrl": "",
    "sourceNote": "核验说明：原为前瞻政策库（商业网站），已换为发文机关官网正文页",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "湖北省自然资源厅、湖北省财政厅、湖北省农业农村厅关于印发《湖北省补充耕地指标省级统筹管理办法（修订）》的通知",
    "docNo": "鄂自然资发〔2023〕23号",
    "issuer": "湖北省自然资源厅、湖北省财政厅、湖北省农业农村厅",
    "date": "2023-09-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.guoturen.com/guihua-2986.html",
    "attachUrl": "",
    "sourceNote": "核验说明：湖北省自然资源厅官网未见该修订版正文，来源为第三方政策文库全文转载（非官方渠道）；文号、机构、日期已逐字核对",
    "level": "省",
    "levelHit": "省农业农村厅",
    "rank": 3,
    "caseId": "39",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "全域国土综合整治项目实施方案编制指南（湖北省地方标准）",
    "docNo": "DB42/T 2391-2025",
    "issuer": "湖北省市场监督管理局（主管）",
    "date": "2025-06-23发布／2025-08-23实施",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=398FC6B4C2E24911E06397BE0A0AD48A",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "湖北省自然资源厅、中国农业发展银行湖北省分行、湖北省长江产业投资集团有限公司关于共同推进我省全域国土综合整治的合作协议",
    "docNo": "无文号",
    "issuer": "湖北省自然资源厅、农发行湖北省分行、长江产业投资集团",
    "date": "2020-01-09",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "http://m.cnhubei.com/content/2020-01/09/content_12606179.html",
    "attachUrl": "",
    "sourceNote": "核验说明：湖北日报2020-01-09全文报道，含六大重点合作领域；省自然资源厅官网未见原文，原澎湃转载页标注「政务：湖北省人民政府网」",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "39",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "荆州市人民政府关于加快推进荆州市全域国土综合整治的实施意见",
    "docNo": "荆政发〔2020〕9号",
    "issuer": "荆州市人民政府",
    "date": "2020-07-02",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://zrzyj.zwgk.jingzhou.gov.cn/67984/202209/t20220926/139031.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "荆州市人民政府办公室关于加强补充耕地指标和城乡建设用地增减挂钩指标管理的通知",
    "docNo": "未获取",
    "issuer": "荆州市人民政府办公室",
    "date": "2020-01-09",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://zwgk.jingzhou.gov.cn/42/202302/t20230216/279466.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "关于进一步加强和规范农村宅基地和农房建设审批管理工作的通知",
    "docNo": "未获取",
    "issuer": "荆州市农业农村局、荆州市自然资源和规划局、荆州市住房和城乡建设局（经市政府同意）",
    "date": "2021-09-30",
    "status": "不确定",
    "grade": "核验A级",
    "url": "http://www.jingzhou.gov.cn/ztzl_9/tpgjz/gjz_fpzc/202202/t20220218_698455.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市政府",
    "rank": 2,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "荆州市人民政府办公室关于深化「亩产论英雄」改革服务全市高质量发展的通知",
    "docNo": "未获取",
    "issuer": "荆州市人民政府办公室",
    "date": "2023-07-27",
    "status": "不确定",
    "grade": "核验A级",
    "url": "http://zrzyj.jingzhou.gov.cn/ztzl/yhyshj/zcwj/202310/t20231025_881207.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "荆州市人民政府办公室关于支持开发区新型工业用地（M0）发展的意见",
    "docNo": "荆政办发〔2022〕28号",
    "issuer": "荆州市人民政府办公室",
    "date": "2022-12-26",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://zwgk.jingzhou.gov.cn/42/202302/t20230216/280701.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "县人民政府办公室关于印发公安县农村宅基地和农房审批管理暂行办法的通知",
    "docNo": "公政办发〔2021〕16号",
    "issuer": "公安县人民政府办公室",
    "date": "2021-11-01 成文、门户 2021-11-05 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://zwgk.gongan.gov.cn/31719/202210/t20221018/213717.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "县人民政府关于印发公安县集体土地上房屋搬迁补偿安置实施办法（暂行）的通知",
    "docNo": "公政规〔2023〕1号",
    "issuer": "公安县人民政府",
    "date": "2023-01-18 成文、门户 2023-01-22 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://zwgk.gongan.gov.cn/31719/202302/t20230209/275430.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "县人民政府关于重新公布实施集体建设用地、集体未利用地、地上附着物和青苗补偿标准的通知",
    "docNo": "公政发〔2024〕2号",
    "issuer": "公安县人民政府",
    "date": "2024-03-06 成文、门户 2024-03-08 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://zwgk.gongan.gov.cn/31975/104220243/t110220243044/478619.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "县人民政府办公室关于印发公安县占补平衡补充耕地管理工作方案的通知",
    "docNo": "公政办发〔2015〕41号",
    "issuer": "公安县人民政府办公室",
    "date": "2015-10-16 成文、门户 2015-10-31 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://zwgk.gongan.gov.cn/39868/202209/t20220922/106449.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "县人民政府关于建立粮食生产功能区和重要农产品生产保护区的实施意见",
    "docNo": "公政发〔2018〕9号",
    "issuer": "公安县人民政府",
    "date": "2018-06-08 成文、门户 2018-06-13 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://zwgk.gongan.gov.cn/31719/202210/t20221018/213551.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "县人民政府办公室关于印发公安县2024年财政衔接资金项目实施方案的通知",
    "docNo": "公政办函〔2024〕2号",
    "issuer": "公安县人民政府办公室",
    "date": "2024-05-08 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://zwgk.gongan.gov.cn/31975/107220243/t104220243074/505368.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "县农业农村局 县财政局关于印发公安县2025年耕地地力补贴工作实施方案的通知",
    "docNo": "未标注（门户正文页未列文号）",
    "issuer": "公安县农业农村局、公安县财政局",
    "date": "2025-05-09 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://zwgk.gongan.gov.cn/31592/109220253/t111220253094/618849.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户未标注效力状态",
    "level": "区县",
    "levelHit": "县财政局",
    "rank": 1,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "公安县人民政府关于公布行政规范性文件清理结果的决定",
    "docNo": "公政发〔2022〕11号",
    "issuer": "公安县人民政府",
    "date": "2022-10-20 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://zwgk.gongan.gov.cn/31975/202209/t20220930/173254.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：门户标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "39",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 2
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 17,
   "provinceTools": 4,
   "nationalTools": 0,
   "provinceBasis": 4,
   "nationalBasis": 0,
   "localDocs": 14,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 17,
   "docs": 18,
   "innovations": 4,
   "implementation": 15,
   "pilot": 2,
   "gradeA": 16,
   "gradeB": 2,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "40",
  "dir": "40_江苏省盐城市盐都区秦南镇",
  "title": "江苏省盐城市盐都区秦南镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江苏省盐城市盐都区秦南镇",
  "batch": "第三批",
  "province": "江苏",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "8.7 亿元",
  "summary": "秦南镇构建「1+5+5」规划体系，整治区涉东方红、灯塔、秦兴3村共1807.93公顷，总投资8.7亿元；拆除老旧农房1245户，新增耕地76.97公顷，建成高标准农田1052.64公顷，与省农垦集团共建2万亩粮食产业园。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以江苏省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具14项（其中创新工具3项）、政策文件15份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "盐城市盐都区政府、秦南镇政府",
    "policyTitle": "耕地集中连片度量化提升政策",
    "detail": "通过复耕复垦、土壤改良、化零为整等工程技术手段，进行「田水路林村」一体化综合治理，先后实施增减挂钩复垦542亩、占补平衡复垦698亩；项目建成后，5亩以下耕地图斑数量将由589块减至358块，100亩以上集中连片耕地比例由4.8%上升至6.8%。",
    "innovation": "以「5亩以下图斑减少数」和「百亩以上连片比例」双指标量化连片度",
    "deps": [
     3,
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "盐城市盐都区政府、秦南镇政府",
    "policyTitle": "进一步加强自然资源要素保障严格规范管理秩序",
    "detail": "明确耕地占补平衡与增减挂钩节余指标「优先满足市内需求」、推行「增存挂钩」与低效用地再开发、推进农村集体经营性建设用地入市试点。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "盐城市盐都区政府、秦南镇政府",
    "policyTitle": "学习运用「千万工程」经验有力有效推进乡村全面振兴",
    "detail": "部署耕地保护、高标准农田建设、「小田变大田」改革、闲置宅基地与闲置住宅盘活、集体经营性建设用地入市、增减挂钩指标统筹保障乡村产业用地。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "盐城市盐都区政府、秦南镇政府",
    "policyTitle": "盐城市农村住房规划建设管理指导意见",
    "detail": "统筹村庄规划编制、宅基地管理、「三到场」审批、闲置宅基地和闲置农房盘活与农房改善。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "盐城市盐都区政府、秦南镇政府",
    "policyTitle": "盐城市高标准农田建设规划（2021—2030年）",
    "detail": "市级高标准农田建设规划，明确农田集中连片建设与耕地质量提升任务。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "盐城市盐都区政府、秦南镇政府",
    "policyTitle": "盐城市国土空间生态保护和修复规划（2021-2035年）",
    "detail": "市级国土空间生态保护修复规划，统筹山水林田湖草一体化保护修复、完善生态保护补偿机制。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "盐都区政府、秦南镇政府",
    "policyTitle": "盐都区城市更新高质量发展三年行动计划（2026—2028年）",
    "detail": "经区政府常务会审议通过，系统部署城市更新三年行动（低效空间再开发、存量用地提质），是全域整治中低效用地再开发与城市更新的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "盐城市盐都区政府、秦南镇政府",
    "policyTitle": "国土空间全域综合整治方案",
    "detail": "依据《江苏省国土空间全域综合整治方案》，盐都区秦南镇按省级部署推进国土空间全域综合整治，统筹农用地整理、建设用地整理与生态保护修复，明确整治目标、空间布局与实施要求，是本案例整治工作的省级上位依据。",
    "innovation": "省级国土空间全域综合整治方案作为整治工作上位依据",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "盐都区政府、秦南镇政府",
    "policyTitle": "公布盐都区征地区片综合地价执行标准",
    "detail": "公布征地区片综合地价执行标准（区片Ⅰ54000元/亩、区片Ⅱ含秦南镇52000元/亩，土地补偿费均26000元/亩、安置补助费26000元/人；征收集体建设用地参照所在区片农用地标准、集体未利用地按0.7倍；征收集体经营性建设用地按宗地地价评估确定），并设征地补偿调剂金账户统筹补齐，是全域整治中土地权属调整与征收补偿的区级价格依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "盐城市盐都区政府、秦南镇政府",
    "policyTitle": "多元资金整合与长效经营管理转型政策",
    "detail": "整合上级财政涉农资金、政策性融资、社会资金，通过平台公司申请农发行政策性融资8.5亿；与省农垦集团等签订长期合作协议，合作打造高标准农田核心区并规划万亩粮食产业园，目前已统一流转、规模经营土地4200余亩，实现了由以往政府独资向多元参与、短期项目建设向长效经营管理、「分散式补充耕地简单治理」向「土地整治+」融合发展模式的转变。",
    "innovation": "实现「三个转变」：政府独资→多元参与、短期建设→长效经营、简单治理→「土地整治+」",
    "deps": [
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "省"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "盐城市盐都区农业农村局、盐城市盐都区财政局",
    "policyTitle": "盐都区2026年耕地地力保护补贴政策告知书",
    "detail": "明确耕地地力保护补贴标准全区120元/亩，规定补贴范围与排除情形（成片耕地转设施农业用地、非农占用、抛荒一年以上取消次年补贴资格等），并明确登记核实—公示不少于7个工作日—系统录入—6月30日前打卡到户的工作程序与一卡通封闭管理，是全域整治中耕地保护补偿的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "盐城市自然资源和规划局盐都分局、盐城市盐都区财政局",
    "policyTitle": "盐城市盐都区耕地保护激励办法",
    "detail": "对耕地保护成绩突出的镇、村给予资金激励（每个镇50万元、每个村级集体经济组织10万元），健全「责任＋激励、行政＋市场」耕地保护机制，是全域整治中耕地保护责任目标考核与耕地保护激励的区级依据。（正文未在门户公开，效力见区级公告）",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "市",
    "scope": "local",
    "scopeRank": 2,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 13,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "盐城市盐都区政府、秦南镇政府",
    "policyTitle": "「1+5+5」规划体系与32个自然村整体改造政策",
    "detail": "因地制宜编制秦南全域整治「1+5+5」规划体系，对项目区内32个自然村实施整体改造；先后投入资金6亿元，实施农用地整理子项目5个、建设用地整理子项目2个、乡村生态保护修复子项目1个、乡村历史文化保护子项目4个，拆除老旧农房1173户，新增耕地1240亩，建设高标准农田1.5万亩。",
    "innovation": "「1+5+5」规划体系覆盖32个自然村整体改造，实现「小田变大田、旧居改新颜」",
    "deps": [
     2,
     3,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "盐都区政府、秦南镇政府",
    "policyTitle": "盐城市盐都区高标准农田工程设施建后管护实施细则",
    "detail": "明确高标准农田工程设施建后管护主体、管护责任与管护经费，是全域整治中高标准农田建设与建后管护的区级依据。（正文为附件PDF）",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省政府办公厅关于转发省自然资源厅《江苏省国土空间全域综合整治方案》的通知",
    "docNo": "苏政办发〔2020〕26号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2020-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://czj.huaian.gov.cn/upload/2020-11/d2806407-b54b-45db-8693-65ef03128ce8.pdf",
    "attachUrl": "",
    "sourceNote": "核验说明：省、市门户均无该文正文页，来源为官网公开的全文附件",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江苏省全域土地综合整治项目管理办法",
    "docNo": "苏自然资发〔2025〕301号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-12-23",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c9082549b4f613b019b4f9399a0006f",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江苏省自然资源厅关于学习运用「千万工程」经验深入推进全域土地综合整治的实施意见",
    "docNo": "苏自然资函〔2025〕325号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-07-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c90825497528e63019811c7bbd4133e",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "江苏省政府办公厅关于印发《江苏省增减挂钩节余指标流转使用管理暂行办法》的通知",
    "docNo": "苏政办发〔2017〕101号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2017-07-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.jiangsu.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "全域土地综合整治项目验收规范（江苏省地方标准）",
    "docNo": "DB32/T 5048-2025",
    "issuer": "江苏省市场监督管理局（归口）",
    "date": "2025-02-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=3049356D14F03289E06397BE0A0AC3F7",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "盐城市人民政府办公室关于印发进一步加强自然资源要素保障严格规范管理秩序的通知",
    "docNo": "盐政办发〔2022〕4号",
    "issuer": "盐城市人民政府办公室",
    "date": "2022-01-12",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://wap.yancheng.gov.cn/art/2022/3/2/art_32996_684.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "盐城市人民政府办公室关于印发盐城市农村住房规划建设管理指导意见的通知",
    "docNo": "盐政办发〔2022〕30号",
    "issuer": "盐城市人民政府办公室",
    "date": "2022-05-12",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://www.yancheng.gov.cn/art/2022/7/27/art_33485_738.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "盐城市人民政府办公室关于印发盐城市高标准农田建设规划（2021—2030年）的通知",
    "docNo": "盐政办发〔2022〕62号",
    "issuer": "盐城市人民政府办公室",
    "date": "2022-09-30",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yancheng.gov.cn/art/2022/10/21/art_13184_3919480.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "盐城市人民政府办公室关于印发盐城市国土空间生态保护和修复规划（2021-2035年）的通知",
    "docNo": "盐政办函〔2024〕20号",
    "issuer": "盐城市人民政府办公室",
    "date": "2024-12-03",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yancheng.gov.cn/art/2024/12/3/art_23770_4266107.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "中共盐城市委 盐城市人民政府关于学习运用「千万工程」经验有力有效推进乡村全面振兴的实施意见",
    "docNo": "盐发〔2024〕1号",
    "issuer": "中共盐城市委、盐城市人民政府",
    "date": "2024-05-06",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.yancheng.gov.cn/art/2024/5/6/art_23089_4184814.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "关于公布盐都区征地区片综合地价执行标准的通知",
    "docNo": "都政发〔2026〕7号",
    "issuer": "盐城市盐都区人民政府",
    "date": "2026-05-30 印发",
    "status": "有效（有效期至 2028-12-31）",
    "grade": "核验A级",
    "url": "https://www.yandu.gov.cn/art/2026/5/30/art_17746_4428648.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "关于印发盐城市盐都区高标准农田工程设施建后管护实施细则的通知",
    "docNo": "都政办发〔2026〕8号",
    "issuer": "盐城市盐都区人民政府办公室",
    "date": "2026-04-10 印发",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.yandu.gov.cn/art/2026/4/10/art_17747_4423481.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "关于印发《盐都区城市更新高质量发展三年行动计划（2026—2028年）》的通知",
    "docNo": "都政办发〔2026〕4号",
    "issuer": "盐城市盐都区人民政府办公室",
    "date": "2026-01-20 印发",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.yandu.gov.cn/art/2026/1/20/art_17747_4412458.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "盐都区2026年耕地地力保护补贴政策告知书",
    "docNo": "未标注（部门政策告知书）",
    "issuer": "盐城市盐都区农业农村局、盐城市盐都区财政局",
    "date": "2026-03-13 发布",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.yandu.gov.cn/art/2026/3/13/art_33295_4409662.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区财政局",
    "rank": 1,
    "caseId": "40",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "盐城市盐都区耕地保护激励办法",
    "docNo": "都自然资发〔2025〕88号",
    "issuer": "盐城市自然资源和规划局盐都分局、盐城市盐都区财政局",
    "date": "2025年印发",
    "status": "",
    "grade": "核验B级",
    "url": "https://zrzy.jiangsu.gov.cn/ycyd/gtzx/tzgg/202601/t20260122_1927149.htm",
    "attachUrl": "",
    "sourceNote": "文书形态：正文未在门户公开（效力佐证见区级公告）",
    "level": "区县",
    "levelHit": "区财政局",
    "rank": 1,
    "caseId": "40",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 14,
   "provinceTools": 4,
   "nationalTools": 0,
   "provinceBasis": 4,
   "nationalBasis": 0,
   "localDocs": 11,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 14,
   "docs": 15,
   "innovations": 4,
   "implementation": 14,
   "pilot": 0,
   "gradeA": 14,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "41",
  "dir": "41_湖南省怀化市沅陵县官庄镇",
  "title": "湖南省怀化市沅陵县官庄镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "湖南省怀化市沅陵县官庄镇",
  "batch": "第三批",
  "province": "湖南",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "8.1 亿元",
  "summary": "探索「全域+水系流域治理」「全域+矿山修复」「全域+美丽乡村建设」「全域+文旅开发」四个模式，新增耕地77.5公顷，2024年粮食总产较整治前增加552吨，村民种粮收入新增132.5万元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以湖南省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具15项（其中创新工具3项）、政策文件14份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "黄柏种植与高质量新增耕地政策",
    "detail": "目前完成各类项目投资8000多万元，在双泉、鱼儿山、太平铺等村开发了200多公顷黄柏，实施生态修复生态13处，带动新发展茶叶、大棚蔬菜、棚中药材种植大户130多户，实现高质量新增耕地50.26公顷，增加粮食产能25.5万公斤，建设乡村道路提质改造40余公里。",
    "innovation": "以200多公顷黄柏等特色中药材种植带动高质量新增耕地50.26公顷",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "「全域+」四个融合模式政策",
    "detail": "取得一系列成果，特别是「全域+水系流域治理」「全域+矿山修复」「全域+美丽乡村建设」「全域+文旅开发」等四个「全域+」模式，既突出了耕地「三位一体」保护原则，又对环境生态保护、生态项目推进、乡村振兴等方面起到了很好的推动和代表性作用。",
    "innovation": "「全域+水系流域治理／矿山修复／美丽乡村建设／文旅开发」四模式集成",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "怀化市耕地保护国土空间专项规划（2021-2035年）",
    "detail": "围绕优化耕地与永久基本农田布局、保障重要农产品生产空间、提升耕地质量、健全耕地保护监管体系提出全市安排。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "沅陵县人民政府关于禁止开垦陡坡地范围",
    "detail": "公告全县禁止开垦陡坡地范围，附件表明确列出官庄镇9877.88公顷（382个图斑），直接划定本案例所在官庄镇的陡坡地禁垦边界，是全域整治中耕地保护与生态修复的区级管控依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "沅陵县人民政府关于公布 2022 年规范性文件清理结果的决定",
    "detail": "公布沅陵县本级规范性文件清理结果（保留、修改、废止目录），是反查本案例各政策件现行效力的依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "沅陵县自然资源局",
    "policyTitle": "沅陵县国土空间总体规划（2021—2035年）批后公布",
    "detail": "载明已经省人民政府批复同意并予以公布，批后公布《沅陵县国土空间总体规划（2021—2035年）》，是官庄镇全域整治在县级国土空间层面的上位规划依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "学习运用「千村示范、万村整治」工程经验有力有效推进乡村全面振兴的实施意见（2024年市委一号文件）",
    "detail": "部署耕地数量质量生态「三位一体」保护、百万亩农田产能提升工程、村庄规划全覆盖、宅基地制度改革与闲置宅基地盘活、田长制，并在县域经济部分点名「重点推进……沅陵县官庄镇……建设」。",
    "innovation": "",
    "deps": [
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "怀化市农村住房质量安全管理办法（试行）",
    "detail": "明确农村住房建设须取得乡村建设规划许可证和宅基地批准书、「六到场」监管与竣工验收，涉及耕地用途管制与集中居住点引导。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "沅陵县人民政府办公室关于进一步规范沅陵县居民自建房报建审批和安全监管工作的通知",
    "detail": "规范居民自建房报建审批流程与安全监管责任，是官庄镇村庄整治中农房建设管理的现行县级文件，支撑宅基地及住房建设管理。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "沅陵县人民政府关于公布实施园地、林地、草地定级与基准地价",
    "detail": "公布全县园地、林地、草地定级与基准地价成果，是官庄镇园地、林地（含低效园地）整治补偿与权属调整的县级价格依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "「一个中心、四个示范片」格局构建政策",
    "detail": "全域项目打造「一个中心、四个示范片」的格局已经基本形成，努力向着「试点变示范，样板变标杆」的目标奋力推进；一期工程于2022年4月由沅陵县发展和改革局审批核准并开展全过程工程招标。",
    "innovation": "以「一个中心、四个示范片」空间格局统领全域整治项目实施",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省"
    ]
   },
   {
    "no": 12,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "县市区政府耕地保护责任目标考核办法",
    "detail": "将耕地保有量、永久基本农田保护、补充耕地计划完成、占补平衡、高标准农田建设、耕地质量保护与提升纳入对县市区政府的年度考核。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "沅陵县被征地农民社会保障实施办法",
    "detail": "明确被征地农民社会保障的对象认定、资金来源与办理程序，是官庄镇全域整治中征地拆迁的社保兜底依据。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "沅陵县集体土地上房屋征收补偿安置实施细则",
    "detail": "明确集体土地上房屋征收程序、补偿标准与安置方式，是全域整治中土地权属调整与征收补偿的区级依据。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 15,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "沅陵县政府、官庄镇政府",
    "policyTitle": "沅陵县人民政府办公室关于公布实施新一轮城镇基准地价",
    "detail": "公布新一轮城镇基准地价成果，是整治中土地估价与补偿测算的县级价格依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "湖南省自然资源厅关于深入推进全域土地综合整治工作的通知",
    "docNo": "湘自资发〔2025〕17号",
    "issuer": "湖南省自然资源厅",
    "date": "2025-06-05",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.hunan.gov.cn/zrzyt/xxgk/gzdt/zhxw_1/202506/t20250610_33705003.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "湖南省自然资源厅关于印发《湖南省全域土地综合整治项目管理办法（试行）》的通知",
    "docNo": "湘自资发〔2025〕41号",
    "issuer": "湖南省自然资源厅",
    "date": "2025-09-28",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.hunan.gov.cn/zrzyt/xxgk/gzdt/zhxw_1/202509/t20250930_33818066.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "中共怀化市委 怀化市人民政府关于学习运用「千村示范、万村整治」工程经验有力有效推进乡村全面振兴的实施意见（2024年市委一号文件）",
    "docNo": "未获取",
    "issuer": "中共怀化市委、怀化市人民政府",
    "date": "2024-03-29",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.huaihua.gov.cn/huaihua/c200023/202404/ba8ae043c8f1435fa1b2e416ed8bf102.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "怀化市人民政府办公室关于印发《县市区政府耕地保护责任目标考核办法》的通知",
    "docNo": "怀政办发〔2020〕3号",
    "issuer": "怀化市人民政府办公室",
    "date": "2020-04-08",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://www.huaihua.gov.cn/huaihua/c122169/202006/f1f14cc3cc5a426eb1460cb81e55d1b9.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "怀化市人民政府办公室关于印发《怀化市农村住房质量安全管理办法（试行）》的通知",
    "docNo": "怀政办发〔2023〕1号",
    "issuer": "怀化市人民政府办公室",
    "date": "2023-01-04",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://www.huaihua.gov.cn/huaihua/c136891/202301/23c397608f4548e4bc000c8640a0d78f.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "怀化市耕地保护国土空间专项规划（2021-2035年）",
    "docNo": "未获取",
    "issuer": "怀化市自然资源和规划局",
    "date": "2024-01-02",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.huaihua.gov.cn/huaihua/c133195/202401/b20b257c19e74cb4bd46c5a646563d16.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "沅陵县人民政府关于印发沅陵县被征地农民社会保障实施办法的通知",
    "docNo": "沅政发〔2026〕1号",
    "issuer": "沅陵县人民政府",
    "date": "2026-01-23 签署",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yuanling.gov.cn/yuanling/c120653/202601/ac6d9cc194bb406dbf28fbabc5f93918.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：信息有效期至 2031-01-23；经县人民政府 2026 年第 1 次常务会议审议通过，现行有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "沅陵县人民政府关于印发沅陵县集体土地上房屋征收补偿安置实施细则的通知",
    "docNo": "沅政发〔2023〕5号",
    "issuer": "沅陵县人民政府",
    "date": "2023-07-05 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yuanling.gov.cn/yuanling/c120653/202307/67127eb873514e1db76c2a1781d753d2.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：信息有效期至 2028-08-04；现行有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "沅陵县人民政府关于公布实施园地、林地、草地定级与基准地价的通知",
    "docNo": "沅政函〔2024〕91号",
    "issuer": "沅陵县人民政府",
    "date": "2024-10-09 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yuanling.gov.cn/yuanling/c120653/202410/44192896572a4860aa896e3e82c71aed.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：信息有效期至 2029-10-09；现行有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "沅陵县人民政府办公室关于进一步规范沅陵县居民自建房报建审批和安全监管工作的通知",
    "docNo": "沅政办发〔2025〕4号",
    "issuer": "沅陵县人民政府办公室",
    "date": "2025-12-31 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yuanling.gov.cn/yuanling/c108860/202601/5dbe89b9102f4986a5e27a5a262048e7.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：信息有效期至 2030-12-31；现行有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "沅陵县人民政府办公室关于公布实施新一轮城镇基准地价的通知",
    "docNo": "沅政办函〔2024〕17号",
    "issuer": "沅陵县人民政府办公室",
    "date": "2024-06-12 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yuanling.gov.cn/yuanling/c108860/202406/4dea885c5f834555bb52c80f1aca7c89.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：信息有效期至 2029-06-12；现行有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "沅陵县人民政府关于禁止开垦陡坡地范围的公告",
    "docNo": "沅政发〔2025〕5号",
    "issuer": "沅陵县人民政府",
    "date": "2025-12-29 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yuanling.gov.cn/yuanling/c120653/202512/00bb1ecefe704863b292c946a14e93ee.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：信息有效期至 2030-12-29；现行有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "沅陵县人民政府关于公布 2022 年规范性文件清理结果的决定",
    "docNo": "沅政发〔2022〕3号",
    "issuer": "沅陵县人民政府",
    "date": "2022-12-28 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yuanling.gov.cn/yuanling/c120653/202212/7cc3b0b2b57e4feeb4fada307f87e4b3.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：统一登记号 YLDR─2022─00002；信息有效期至 2027-12-28；现行有效",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "沅陵县国土空间总体规划（2021—2035年）批后公布",
    "docNo": "—（批后公布件，无文号）",
    "issuer": "沅陵县自然资源局",
    "date": "2024-08-09 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.yuanling.gov.cn/yuanling/c132956/202408/f167d2fe429d4df28909b212637cee0f.shtml",
    "attachUrl": "",
    "sourceNote": "文书形态：载明「已经省人民政府批复同意，现予以公布」",
    "level": "区县",
    "levelHit": "县自然资源局",
    "rank": 1,
    "caseId": "41",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 3,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 3,
    "innovations": 0
   }
  ],
  "levels": {
   "localTools": 15,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 12,
   "provinceDocs": 2,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 15,
   "docs": 14,
   "innovations": 3,
   "implementation": 13,
   "pilot": 2,
   "gradeA": 14,
   "gradeB": 0,
   "revoked": 0,
   "mechanisms": 7
  }
 },
 {
  "id": "42",
  "dir": "42_重庆铁门乡",
  "title": "重庆铁门乡全域土地综合整治政策激励工具箱（1.0版）",
  "name": "重庆铁门乡",
  "batch": "第三批",
  "province": "重庆",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "9000 万元",
  "summary": "铁门乡实施全域土地综合整治，长塘村整合智慧灌溉、沟渠整治、产业道路等，改造500亩高标准农田、整治梯田600亩，打造「庙坝千年良田」；通过「村集体+公司+农户」模式，每年村集体和农户增收约25万元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以重庆市配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具17项（其中创新工具3项）、政策文件19份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "重庆市梁平区政府、铁门乡政府",
    "policyTitle": "重庆市要素市场化配置综合改革试点行动方案",
    "detail": "明确提出「允许零星插花集体建设用地通过全域土地综合整治并为大块宗地入市」，并部署闲置农房盘活、宅基地自愿有偿退出、地票与增减挂钩衔接、存量闲置土地盘活。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市梁平区政府、铁门乡政府",
    "policyTitle": "「庙坝千年良田」整合建设政策",
    "detail": "整合了智慧灌溉、沟渠整治、产业道路、高标准农田改造、人居环境提升等项目，累计投入资金700余万元，打造「路成网、田成块、地平整、渠畅通」的「庙坝千年良田」；经过整治，水稻田从「小散乱」变成了连片大田，地形更平整，也更适合机械化耕种。",
    "innovation": "整合多类项目打造「庙坝千年良田」，实现小散乱到连片大田转变",
    "deps": [
     1,
     3,
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市梁平区政府、铁门乡政府",
    "policyTitle": "切实加强高标准农田建设提升粮食安全保障能力",
    "detail": "建立「五统一」农田建设管理新体制，明确高标准农田新增耕地指标核定后纳入补充耕地指标库并可用于跨区域调剂。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市梁平区政府、铁门乡政府",
    "policyTitle": "重庆市高标准农田建设规划（2021—2030年）",
    "detail": "要求形成规划项目库和布局图、强化建后管护与耕地用途管制。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市梁平区政府、铁门乡政府",
    "policyTitle": "重庆市历史遗留和关闭矿山地质环境治理恢复与土地复垦工作方案",
    "detail": "统筹山水林田湖草系统治理，按「宜农则农、宜林则林」原则推进矿山损毁土地治理恢复与土地复垦（附件任务表含梁平区36.51公顷）。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市梁平区政府、铁门乡政府",
    "policyTitle": "重庆市临时用地和设施农业用地土地复垦管理办法",
    "detail": "明确临时用地和设施农业用地的复垦义务、方案与验收要求。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市梁平区政府、铁门乡政府",
    "policyTitle": "重庆市矿山生态修复市场主体信用管理办法",
    "detail": "建立矿山生态修复市场主体信用管理机制，是社会资本参与全域整治生态修复的准入与监管工具。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "重庆市梁平区规划和自然资源局、重庆市梁平区农业农村委员会",
    "policyTitle": "梁平区耕地「非农化」、「非粮化」问题专项清理整治行动方案",
    "detail": "全面清理整治2020-07-03以来耕地「非农化」四类行为（超标准建设绿色通道、挖田造湖挖湖造景、扩大自然保护地、从事非农建设）与「非粮化」四类行为（工商资本大规模流转耕地不种粮、占用永久基本农田种植林果、挖塘养鱼、闲置荒芜），逐项建立台账、限期整改，是全域整治中耕地保护的区级依据。",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "重庆市梁平区政府、铁门乡政府",
    "policyTitle": "「村集体+公司（大户）+农户」土地流转模式政策",
    "detail": "为发挥土地效益，长塘村通过「村集体+公司（大户）+农户」的模式，由村集体经济组织将农户的土地流转到集体，再统一向农业生产企业或大户出租，农户从中取得务工收入，每年村集体和农户可实现增收约25万元。+农户」三级流转模式，年增收约25万元）",
    "innovation": "「村集体+公司（大户",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "梁平区政府、铁门乡政府",
    "policyTitle": "重庆市梁平区农村土地经营权证管理办法（试行）",
    "detail": "落实农村承包土地集体所有权、稳定承包权、放活经营权，维护土地流转双方合法权益，并明确「重庆市梁平区农村土地经营权证」是区人民政府对依法流转农村承包土地的农业经营主体颁发的权属凭证，是全域整治中土地权属调整与经营权流转的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "梁平区政府、铁门乡政府",
    "policyTitle": "公布执行梁平区国有建设用地使用权土地级别和基准地价",
    "detail": "经区政府常务会议审议通过，更新并公布全区国有建设用地使用权土地级别与基准地价，明确基准地价是政府管理和调控土地市场的基础，为土地出让、划拨价款测算及整治后土地要素配置提供价格依据。",
    "innovation": "",
    "deps": [
     19
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "试点推进",
    "lead": "重庆市规划和自然资源局、梁平区政府",
    "policyTitle": "数字化赋能全域整治监管政策",
    "detail": "构建全域土地综合整治数字化综合场景，依托无人机智能基站实现土地利用现状、土地所有权、整治进度等数字化监测与监管；5年来重庆市全域土地综合整治项目实施农用地整理近7万亩，新增机械化耕作面积2.3万亩，实施各类生态修复工程约5万亩。",
    "innovation": "无人机智能基站+数字化综合场景，实现整治全过程数字化监管",
    "deps": [
     4
    ],
    "leadLevel": "省",
    "scope": "province",
    "scopeRank": 3,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "省"
    ]
   },
   {
    "no": 13,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "重庆市梁平区政府、铁门乡政府",
    "policyTitle": "重庆市农村建设用地复垦项目管理办法",
    "detail": "规范农村废弃、闲置、低效建设用地复垦为耕地并核定复垦指标，是全域整治「拆旧复垦/增减挂钩」指标生产的直接操作办法。",
    "innovation": "",
    "deps": [
     2,
     6,
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省"
    ]
   },
   {
    "no": 14,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "梁平区政府、铁门乡政府",
    "policyTitle": "重庆市梁平区集体土地征收补偿安置实施办法",
    "detail": "依据《重庆市集体土地征收补偿安置办法》（市政府令第344号）与渝府发〔2021〕14号制定，分章规定征地补偿、人员安置与住房安置，适用于本区行政区域内集体土地征收（铁门乡适用），是全域整治中土地征收补偿安置的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 15,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "试点推进",
    "lead": "梁平区政府、铁门乡政府",
    "policyTitle": "重庆市梁平区农村承包土地「三权分置」改革试点实施方案",
    "detail": "坚守「决不能把农村土地集体所有制改垮、决不能把耕地改少、决不能把粮食生产能力改弱、决不能损害农民合法权益」的底线，明确试点颁发农村土地经营权证、实现以经营权证抵押担保融资突破，规模经营100亩以上耕地或300亩以上「四荒地」的经营主体可申请，是全域整治中农村承包土地「三权分置」改革的区级依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 16,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "重庆市梁平区规划和自然资源局、重庆市梁平区农业农村委员会",
    "policyTitle": "农村乱占耕地建房动态巡查工作实施方案",
    "detail": "实行网格化管理（以乡镇街道为一级网格、行政村社为二级网格、村民组为三级网格），逐级明确第一责任人及巡查职责，坚持「源头严防、过程严管、后果严惩」，区规划自然资源局按12个基层所设置网格化管理单位负责调度监督，是全域整治中耕地保护责任目标考核与田长制的区级依据。",
    "innovation": "",
    "deps": [
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 17,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "试点推进",
    "lead": "重庆市梁平区政府、铁门乡政府",
    "policyTitle": "社会资本参与生态保护修复",
    "detail": "依据《重庆市鼓励和支持社会资本参与生态保护修复实施方案》，铁门乡在整治中引入社会资本参与矿山生态修复与土地复垦，通过赋予自然资源资产使用权、允许合理收益等方式建立回报机制，并明确参与程序与权益保障。",
    "innovation": "以自然资源资产使用权与合理收益机制吸引社会资本参与修复",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "重庆市全域土地综合整治改革方案（2025—2029年）",
    "docNo": "无文号",
    "issuer": "重庆市经济体制改革专项小组",
    "date": "2025-04-08",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/jytablqk/202508/t20250805_14877169_wap.html",
    "attachUrl": "",
    "sourceNote": "核验说明：官方答复函引用其名称与日期，全文未公开",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "重庆市规划和自然资源局关于印发《重庆市全域土地综合整治项目规划设计导则（试行）》的通知",
    "docNo": "渝规资发〔2022〕53号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2022-12-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/qtwj/202304/t20230428_11923465.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "重庆市全域土地综合整治实施方案编制指南（试行）",
    "docNo": "无文号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2022-09-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/qtwj/202304/t20230428_11923480.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "重庆市财政局、重庆市规划和自然资源局关于印发《重庆市国土空间生态修复重点专项资金管理办法》的通知",
    "docNo": "渝财建〔2021〕100号",
    "issuer": "重庆市财政局、重庆市规划和自然资源局",
    "date": "2021-06-10",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://czj.cq.gov.cn/zwgk_268/zfxxgkml/zcwj/qtwj/202106/t20210610_9387659.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "重庆市人民政府办公厅关于印发《重庆市鼓励和支持社会资本参与生态保护修复实施方案》的通知",
    "docNo": "渝府办发〔2023〕32号",
    "issuer": "重庆市人民政府办公厅",
    "date": "2023-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/qtgw/202304/t20230417_11885285.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "重庆市规划和自然资源局关于印发重庆市农村集体经营性建设用地入市交易规则（试行）的通知",
    "docNo": "渝规资规范〔2023〕8号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2023-06-14",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://nyncw.cq.gov.cn/ztzl_161/rdzt/xczx/zcwj_249776/bm_257463/202312/t20231208_12678198_wap.html",
    "attachUrl": "",
    "sourceNote": "核验说明：相关入市交易规则已公开，本通知全文未公开",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "重庆市人民政府办公厅关于切实加强高标准农田建设提升粮食安全保障能力的实施意见",
    "docNo": "渝府办发〔2020〕27号",
    "issuer": "重庆市人民政府办公厅",
    "date": "2020-03-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/qtgw/202003/t20200317_8614325.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "重庆市人民政府关于重庆市高标准农田建设规划（2021—2030年）的批复",
    "docNo": "渝府〔2022〕16号",
    "issuer": "重庆市人民政府",
    "date": "2022-04-20",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/qtgw/202204/t20220426_10660952.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "重庆市规划和自然资源局关于印发《重庆市农村建设用地复垦项目管理办法》的通知",
    "docNo": "渝规资规范〔2021〕8号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2021-12-30",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/xzgfxwj/202201/t20220118_10312702_wap.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "重庆市人民政府办公厅关于印发重庆市历史遗留和关闭矿山地质环境治理恢复与土地复垦工作方案的通知",
    "docNo": "渝府办发〔2018〕55号",
    "issuer": "重庆市人民政府办公厅",
    "date": "2018-04-29",
    "status": "不确定",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/xzgfxwj/szfbgt/201805/t20180507_8837617.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "重庆市规划和自然资源局关于印发重庆市临时用地和设施农业用地土地复垦管理办法的通知",
    "docNo": "渝规资规范〔2024〕3号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2024-06-12",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/xzgfxwj/202406/t20240627_13329348.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "重庆市规划和自然资源局关于印发重庆市矿山生态修复市场主体信用管理办法的通知",
    "docNo": "渝规资规范〔2024〕4号",
    "issuer": "重庆市规划和自然资源局",
    "date": "2024-10-10",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://ghzrzyj.cq.gov.cn/zwgk_186/zcwj/xzgfxwj/202410/t20241031_13757529.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "重庆市人民政府关于印发《重庆市要素市场化配置综合改革试点行动方案》的通知",
    "docNo": "渝府发〔2025〕16号",
    "issuer": "重庆市人民政府",
    "date": "2025-11-23",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/xzgfxwj/szf/202511/t20251128_15195161.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "直辖市市级",
    "rank": 3,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "重庆市梁平区集体土地征收补偿安置实施办法",
    "docNo": "梁平府发〔2021〕9号",
    "issuer": "重庆市梁平区人民政府",
    "date": "2021-07-01 印发",
    "status": "现行有效（列于区政府「现行有效文件（77件）」行政规范性文件目录）",
    "grade": "核验A级",
    "url": "http://www.cqlp.gov.cn/zwgk_178/zcwj/xzgfxwjk/gfxwj_1/202107/t20210701_9512582.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "重庆市梁平区农村承包土地「三权分置」改革试点实施方案",
    "docNo": "梁平府办发〔2017〕84号",
    "issuer": "重庆市梁平区人民政府办公室",
    "date": "2017-05-04 印发",
    "status": "现行有效（列于区政府行政规范性文件现行有效目录）",
    "grade": "核验A级",
    "url": "http://www.cqlp.gov.cn/zwgk_178/zcwj/xzgfxwjk/gfxwj_1/202002/t20200206_4860857.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "重庆市梁平区农村土地经营权证管理办法（试行）",
    "docNo": "梁平府办发〔2017〕85号",
    "issuer": "重庆市梁平区人民政府办公室",
    "date": "2017-05-04 印发",
    "status": "现行有效（列于区政府行政规范性文件现行有效目录）",
    "grade": "核验A级",
    "url": "http://www.cqlp.gov.cn/zwgk_178/zcwj/xzgfxwjk/gfxwj_1/202002/t20200206_4860853.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "梁平区耕地「非农化」、「非粮化」问题专项清理整治行动方案",
    "docNo": "梁平规资发〔2021〕20号",
    "issuer": "重庆市梁平区规划和自然资源局、重庆市梁平区农业农村委员会",
    "date": "2021-04-01 成文、2021-04-05 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.cqlp.gov.cn/ghzrzyj/zwgk_29313/zcwj/qtwj/202104/t20210416_9184444.html",
    "attachUrl": "",
    "sourceNote": "文书形态：页面「有效性」字段为空，效力待补",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "农村乱占耕地建房动态巡查工作实施方案",
    "docNo": "梁平规资发〔2021〕9号",
    "issuer": "重庆市梁平区规划和自然资源局、重庆市梁平区农业农村委员会",
    "date": "2021-02-04 成文、2021-02-09 发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.cqlp.gov.cn/ghzrzyj/zwgk_29313/zcwj/qtwj/202104/t20210416_9184377.html",
    "attachUrl": "",
    "sourceNote": "文书形态：页面「有效性」字段为空，效力待补",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 19,
    "name": "关于公布执行梁平区国有建设用地使用权土地级别和基准地价的通知",
    "docNo": "梁平府发〔2023〕11号",
    "issuer": "重庆市梁平区人民政府",
    "date": "2023-08-01 印发",
    "status": "现行有效（列于区政府行政规范性文件现行有效目录）",
    "grade": "核验A级",
    "url": "http://www.cqlp.gov.cn/zwgk_178/zcwj/xzgfxwjk/gfxwj_1/202308/t20230809_12225612.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "42",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 7,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 4,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 16,
   "provinceTools": 11,
   "nationalTools": 0,
   "provinceBasis": 10,
   "nationalBasis": 0,
   "localDocs": 6,
   "provinceDocs": 13,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 17,
   "docs": 19,
   "innovations": 4,
   "implementation": 11,
   "pilot": 6,
   "gradeA": 17,
   "gradeB": 2,
   "revoked": 0,
   "mechanisms": 7
  }
 },
 {
  "id": "43",
  "dir": "43_江苏省常州市钟楼区邹区镇",
  "title": "江苏省常州市钟楼区邹区镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "江苏省常州市钟楼区邹区镇",
  "batch": "第三批",
  "province": "江苏",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "以「全域整治+城乡融合+职教赋能」复合模式，建成474亩高标准农田，亩均收益从1200元跃升至2600元，「杏花春雨」品牌价值突破千万元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以江苏省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具14项（其中创新工具3项）、政策文件16份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "常州市钟楼区政府、邹区镇政府",
    "policyTitle": "关于促进土地资源高效优配推动产业高质量发展的若干意见",
    "detail": "明确批而未供、闲置土地处置、低效用地再开发、增减挂钩、「点状供地」与土地综合整治项目资金挂钩等全域整治核心政策工具。",
    "innovation": "",
    "deps": [
     4,
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "钟楼区政府、邹区镇政府",
    "policyTitle": "区政府办公室关于耕地林地资源补偿激励",
    "detail": "规定耕地占补平衡项目补偿激励标准（新增水田20万元/亩、水田以外其他耕地16万元/亩，新增林地20万元/亩）与耕地占补指标／异地补充林地指标使用费28万元/亩；明确邹区镇、各街道为项目选址、方案编制、实施与后期管护主体，钟楼自然资源和规划分局负责立项验收；并规定立项后40%启动、验收后连续5年分期、40%转乡村振兴项目资金的拨付方式，是全域整治中耕地林地资源补偿激励的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "常州市钟楼区政府、邹区镇政府",
    "policyTitle": "职教赋能与「校企村」合作盘活存量政策",
    "detail": "3547亩现代农业示范区集中流转，成为职教师生实践课堂；盘活160亩存量用地通过「校企村」合作发展新业态，村集体资产增值；引入标准物业，试点「数字乡村」治理模式，职教师生运用数字化技术赋能网格治理，实现80%村级事务线上办理；建成655套宜居农房。",
    "innovation": "「校企村」合作+职教赋能，为全域整治注入专业技术与人才支撑",
    "deps": [
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "常州市钟楼区政府、邹区镇政府",
    "policyTitle": "常州市城乡环境大整治实施方案",
    "detail": "专设「田容田貌改善工程」与「村容村貌重塑工程」，部署高标准农田三年行动计划、农田有序整合、闲置地块覆绿、和美乡村片区整治。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "常州市钟楼区政府、邹区镇政府",
    "policyTitle": "常州市村庄规划动态优化管理规程",
    "detail": "明确「落实全域综合整治实施方案」及增减挂钩、耕地占补平衡、高标准农田建设等土地整治项目引起的村庄建设用地减量可动态优化村庄规划。",
    "innovation": "",
    "deps": [
     1,
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "常州市钟楼区政府、邹区镇政府",
    "policyTitle": "「宅基地有偿退出+农房置换」腾退政策",
    "detail": "采用「宅基地有偿退出+农房置换」模式，腾退建设用地300亩，建成2个村民集建区；对卜泰河、泰村浜等河道清淤修复，铺设生态步道、建设观景台，构建「生态+职教+文旅」融合场景；村民年均土地流转收入增1120元/亩，亩均收益从1200元跃至2600元。",
    "innovation": "「宅基地有偿退出+农房置换」模式，亩均收益从1200元跃至2600元",
    "deps": [
     2,
     3,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "常州市钟楼区政府、邹区镇政府",
    "policyTitle": "加强和规范农村宅基地审批管理工作",
    "detail": "村庄规划引领、闲置宅基地和闲置农房盘活利用、宅基地自愿有偿退出试点，是全域整治「村庄建设用地整理」的配套制度。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "常州市钟楼区政府、邹区镇政府",
    "policyTitle": "常州市闲置土地处置",
    "detail": "存量建设用地盘活与闲置土地认定处置程序，属全域整治「建设用地整理/低效用地再开发」配套工具。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "常州市钟楼区政府、邹区镇政府",
    "policyTitle": "新北区集体经营性建设用地入市实施方案",
    "detail": "集体经营性建设用地入市是全域土地综合整治中集体建设用地盘活与增值收益分配的配套政策工具。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "钟楼区政府、邹区镇政府",
    "policyTitle": "常州市钟楼区集体经营性建设用地入市管理办法（试行）",
    "detail": "允许各镇（街道）、农民集体对历史形成的零星分散存量集体建设用地统一开展国土空间综合整治、重新划分宗地并调整产权归属后入市；规定不同集体经济组织间土地所有权调换程序（三分之二成员同意＋镇政府批准＋变更登记）；并明确出让／出租／作价出资（入股）方式（工业50年、商业40年，出租5—20年），是全域整治中集体经营性建设用地入市的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "钟楼区政府、邹区镇政府",
    "policyTitle": "常州市钟楼区乡村地区「通则式」规划管理规定（试行）",
    "detail": "面向邹区镇人民政府及各街道，对乡村地区（含邹区镇）建设项目规划许可实行「通则式」管理，覆盖村民建房、宅基地使用、设施农业用地等一般性项目审批规则，是全域整治中宅基地及住房建设管理与设施农业用地的区级依据。（正文为附件PDF）",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "钟楼区政府、邹区镇政府",
    "policyTitle": "钟楼区城乡环境大整治实施方案",
    "detail": "优化乡村空间布局（整合高新区即邹区镇自然资源要素、动态优化镇村布局与村庄规划）；实施田容田貌改善行动（推进农田有序整合、加大高标准农田建设力度、提升农田设施标准）；改善农村住房条件（2025年完成300户）并推进和美乡村及片区整治更新；综合利用闲置地块（28块闲置建设用地覆绿，实行「一地一方案」），是全域整治中城乡环境大整治的区级依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 13,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "常州市钟楼区政府、邹区镇政府",
    "policyTitle": "「四位一体」整治与三大创新机制政策",
    "detail": "在7578亩整治区域内，以「四位一体」整治（农用地整治、建设用地盘活、生态修复、公共空间治理）重塑乡村肌理，构建政策、融资、治理「三大创新机制」，实现生产方式、生活方式、生态方式的「三个转变」，为乡村振兴提供「常州方案」。",
    "innovation": "「全域整治+城乡融合+职教赋能」复合治理与「三位一体」创新机制",
    "deps": [
     2,
     3,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "常州市钟楼区政府、邹区镇政府",
    "policyTitle": "常州市辖市、区政府耕地保护责任目标考核办法",
    "detail": "将耕地占补平衡、高标准农田建设、补充耕地指标统筹纳入市对区考核，并明确与土地整治专项资金及项目安排挂钩。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "省政府办公厅关于转发省自然资源厅《江苏省国土空间全域综合整治方案》的通知",
    "docNo": "苏政办发〔2020〕26号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2020-04-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://czj.huaian.gov.cn/upload/2020-11/d2806407-b54b-45db-8693-65ef03128ce8.pdf",
    "attachUrl": "",
    "sourceNote": "核验说明：省、市门户均无该文正文页，来源为官网公开的全文附件",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "江苏省全域土地综合整治项目管理办法",
    "docNo": "苏自然资发〔2025〕301号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-12-23",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c9082549b4f613b019b4f9399a0006f",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "江苏省自然资源厅关于学习运用「千万工程」经验深入推进全域土地综合整治的实施意见",
    "docNo": "苏自然资函〔2025〕325号",
    "issuer": "江苏省自然资源厅",
    "date": "2025-07-15",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.jiangsu.gov.cn/gtxxgk/nrglIndex.action?type=2&messageID=2c90825497528e63019811c7bbd4133e",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "江苏省政府办公厅关于印发《江苏省增减挂钩节余指标流转使用管理暂行办法》的通知",
    "docNo": "苏政办发〔2017〕101号",
    "issuer": "江苏省人民政府办公厅",
    "date": "2017-07-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.jiangsu.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "全域土地综合整治项目验收规范（江苏省地方标准）",
    "docNo": "DB32/T 5048-2025",
    "issuer": "江苏省市场监督管理局（归口）",
    "date": "2025-02-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://std.samr.gov.cn/db/search/stdDBDetailed?id=3049356D14F03289E06397BE0A0AC3F7",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市",
    "rank": 2,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "市政府关于印发《关于促进土地资源高效优配推动产业高质量发展的若干意见》的通知",
    "docNo": "常政发〔2019〕60号",
    "issuer": "常州市人民政府",
    "date": "2019-06-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.changzhou.gov.cn/gi_news/974156195067109",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "关于加强和规范农村宅基地审批管理工作的通知",
    "docNo": "常政办发〔2021〕107号",
    "issuer": "常州市人民政府办公室",
    "date": "2021-11-13",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.changzhou.gov.cn/gi_news/981163849747719",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "市政府办公室关于印发《常州市辖市、区政府耕地保护责任目标考核办法》的通知",
    "docNo": "常政办发〔2018〕122号",
    "issuer": "常州市人民政府办公室",
    "date": "2018-08-20",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.changzhou.gov.cn/gi_news/973153534363370",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "常州市闲置土地处置办法",
    "docNo": "常政规〔2013〕13号",
    "issuer": "常州市人民政府",
    "date": "2013-09-04",
    "status": "不确定（需核对后续规范性文件清理决定）",
    "grade": "核验A级",
    "url": "https://www.changzhou.gov.cn/gi_news/713137906002397",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "市政府关于新北区集体经营性建设用地入市实施方案的批复",
    "docNo": "常政复〔2020〕110号",
    "issuer": "常州市人民政府",
    "date": "2020-11-16",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.changzhou.gov.cn/gi_news/103166527847302",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "市政府办公室关于印发《常州市城乡环境大整治实施方案》的通知",
    "docNo": "常政办发〔2025〕7号",
    "issuer": "常州市人民政府办公室",
    "date": "2025-03-17",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.changzhou.gov.cn/gi_news/938174228074825",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "关于印发《常州市村庄规划动态优化管理规程》的通知",
    "docNo": "未获取",
    "issuer": "常州市自然资源和规划局",
    "date": "2025-11-25",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.changzhou.gov.cn/gi_news/519176611532485",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源和规划局",
    "rank": 2,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "常州市钟楼区人民政府关于印发《常州市钟楼区集体经营性建设用地入市管理办法（试行）》的通知",
    "docNo": "钟政规〔2024〕1号",
    "issuer": "常州市钟楼区人民政府（发布机构：政府办）",
    "date": "2024-09-23 成文、2024-10-10 发布",
    "status": "有效（有效期至 2026-10-31）",
    "grade": "核验A级",
    "url": "https://www.zhonglou.gov.cn/html/czzl/2024/FPJQLMLL_1028/22452.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "区政府办公室关于耕地林地资源补偿激励的通知",
    "docNo": "钟政办发〔2025〕29号",
    "issuer": "常州市钟楼区人民政府办公室",
    "date": "2025-11-03 发布",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.zhonglou.gov.cn/html/czzl/2026/FPJBLMLO_0226/24286.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "区政府办公室关于印发《常州市钟楼区乡村地区「通则式」规划管理规定（试行）》的通知",
    "docNo": "钟政办发〔2024〕27号",
    "issuer": "常州市钟楼区人民政府办公室",
    "date": "2024-12-12 发布",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.zhonglou.gov.cn/html/czzl/2025/FPJBLMLO_0108/22731.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "区政府办公室关于印发《钟楼区城乡环境大整治实施方案》的通知",
    "docNo": "钟政办发〔2025〕10号",
    "issuer": "常州市钟楼区人民政府办公室",
    "date": "2025-05-12 发布",
    "status": "有效",
    "grade": "核验A级",
    "url": "https://www.zhonglou.gov.cn/html/czzl/2025/FPJBLMLO_0603/23354.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "43",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 7,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 14,
   "provinceTools": 5,
   "nationalTools": 0,
   "provinceBasis": 5,
   "nationalBasis": 0,
   "localDocs": 12,
   "provinceDocs": 4,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 14,
   "docs": 16,
   "innovations": 3,
   "implementation": 9,
   "pilot": 5,
   "gradeA": 16,
   "gradeB": 0,
   "revoked": 0,
   "mechanisms": 4
  }
 },
 {
  "id": "44",
  "dir": "44_浙江省湖州市长兴县吕山乡",
  "title": "浙江省湖州市长兴县吕山乡全域土地综合整治政策激励工具箱（1.0版）",
  "name": "浙江省湖州市长兴县吕山乡",
  "batch": "第三批",
  "province": "浙江",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "11.38 亿元",
  "summary": "新增耕地1484亩，打造8个「千亩良田」，多田套合率达93%，腾出建设用地35.25公顷；九村联建湖羊智慧循环产业园项目年增集体经济经营性收入900万元。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以浙江省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具14项（其中创新工具3项）、政策文件18份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "「九村联建」与自然村集聚政策",
    "detail": "腾退建设用地35.25公顷，通过「宅基地置换+集体经营性建设用地入市」建设14个江南特色集聚区，自然村从102个减至14个，形成「集约居住区+规模农田区+产业发展区」空间格局；试点「九村联建」模式，盘活低效工业用地，新建厂房10.1万平方米，村集体经营性收入从251万元增至650万元。",
    "innovation": "「九村联建」模式，自然村从102个减至14个，村集体收入增至650万元",
    "deps": [
     2,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "进一步加强市级补充耕地指标标准农田指标调剂和统筹管理",
    "detail": "规定土地整治产生的补充耕地指标、标准农田指标的市域内调剂价格与程序，并建立市级统筹库（各按10%统筹），是全域整治指标收益机制的核心配套。",
    "innovation": "",
    "deps": [
     6,
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "「多田套合」与「千亩方、万亩方」建设政策",
    "detail": "耕地集中连片整治新增耕地1484亩，打造8个「千亩良田」，多田套合率达93%，最小耕地图斑从0.5亩提升至12亩，建成13个千亩方、2个万亩方永久基本农田示范区；胥仓村千亩方改造提升耕地3237亩，新建高效节水灌溉面积1152亩，单季水稻亩产超1000公斤，实现「吨粮田」突破。",
    "innovation": "多田套合率达93%，最小耕地图斑从0.5亩提升至12亩，实现「吨粮田」",
    "deps": [
     2,
     3,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "加快推进全域土地综合整治与生态修复工程",
    "detail": "直接部署全市全域土地综合整治与生态修复工程，明确农用地综合整治、建设用地整治、生态整治修复任务及指标奖励、补充耕地指标调剂、增减挂钩指标统筹等政策。",
    "innovation": "",
    "deps": [
     1,
     5,
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "长兴县高质量推进低效用地再开发试点工作实施方案（2023—2027年）",
    "detail": "明确城市有机更新、工业全域有机更新、土地综合整治、废弃矿地再利用四条低效用地再开发实施路径，协商收回、市场流转、协议置换、增容技改、转型利用五种再开发模式，并提出规划管控引领、土地收储机制、资金渠道多元化、征收补偿办法、土地立体开发混合利用、资源资产组合供应、收益分享机制、历史遗留问题处置等11项政策探索，是全域整治中低效用地再开发的区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 6,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "湖州市高质量推进低效用地再开发试点工作实施方案（2023—2027年）",
    "detail": "将「土地综合整治」列为三大实施路径之一，明确「百千万」永久基本农田集中连片整治、高标准农田建设、搬迁撤并类村庄整治、矿地综合利用等。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "坚决制止耕地「非农化」防止耕地「非粮化」稳定发展粮食生产",
    "detail": "明确「大力推进全域土地综合整治，开展千亩方、万亩方永久基本农田集中连片建设」，并要求建设占用耕地耕作层剥离用于土壤改良。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "农村住房建设管理的指导",
    "detail": "要求盘活村内空闲地、闲置宅基地、废弃建设用地、腾退用地，开展「一户多宅」分类清理与宅基地置换，属全域整治「村庄优化提升」配套制度。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "长兴县农村宅基地和农民建房管理办法",
    "detail": "规范农村宅基地和农民建房管理、促进宅基地节约集约利用，是全域整治中宅基地及住房建设管理的区级依据。（正文发布页待补；效力见长政发〔2026〕64号清理结果，列为继续有效第132项）",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "调整县级耕地保护补偿机制",
    "detail": "调整县级耕地保护补偿机制，是全域整治中耕地保护补偿的区级依据。（正文发布页待补；效力见长政发〔2026〕64号清理结果，列为继续有效第119项）",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "全面实施",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "长兴县工业用地二次开发项目管理办法",
    "detail": "规定重点发展类容积率宜高则高且不低于2.0；对管理引导类明确在全域国土空间综合整治、城市更新、土地储备等工作中需退出的工业用地应推进腾挪入园或退出、不得新建改建扩建；并提出增容提质、企企合作、自主联合（允许打破权属界线置换土地、重新约定宗地）、共建共享四类二次开发模式，是本案例直接点名全域整治的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "六、优化审批管理服务",
    "category": "试点推进",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "长兴县高标准农田建设工程设施管护实施办法（试行）",
    "detail": "规范高标准农田建设工程设施管护，是全域整治中高标准农田建设的区级依据。（正文发布页待补；效力见长政发〔2026〕64号清理结果，列为继续有效第104项）",
    "innovation": "",
    "deps": [
     17
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 13,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "试点推进",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "品牌化宣传与「长兴经验」示范推广政策",
    "detail": "以「全域整治+产业振兴+生态修复」为核心路径，入选《中国自然资源报》头版报道及全国全域整治主题宣传片，形成可复制的「长兴经验」，项目覆盖全乡8个行政村，总面积39.73平方公里。",
    "innovation": "入选《中国自然资源报》头版及全国全域整治主题宣传片，形成「长兴经验」",
    "deps": [
     4,
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省",
     "市"
    ]
   },
   {
    "no": 14,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "长兴县政府、吕山乡政府",
    "policyTitle": "重新公布长兴县征地区片综合地价标准",
    "detail": "公布征地区片综合地价标准，是全域整治中土地权属调整与征收补偿的区级价格依据。（正文发布页待补；效力见长政发〔2026〕64号清理结果，列为继续有效第105项）",
    "innovation": "",
    "deps": [
     18
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "浙江省人民政府办公厅关于实施全域土地综合整治与生态修复工程的意见",
    "docNo": "浙政办发〔2018〕80号",
    "issuer": "浙江省人民政府办公厅",
    "date": "2018-08-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2018/8/15/art_1229620738_2394685.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "浙江省人民政府关于跨乡镇开展土地综合整治试点的意见",
    "docNo": "浙政发〔2022〕32号",
    "issuer": "浙江省人民政府",
    "date": "2022",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.zj.gov.cn/",
    "level": "省",
    "levelHit": "省人民政府",
    "rank": 3,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "浙江省自然资源厅关于印发《浙江省土地综合整治全过程管理办法（试行）》的通知",
    "docNo": "浙自然资规〔2023〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2024-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2024/1/3/art_1229098242_2506965.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "浙江省自然资源厅关于深入开展土地综合整治工作 助推城乡融合发展促进共同富裕的实施意见",
    "docNo": "浙自然资〔2025〕号",
    "issuer": "浙江省自然资源厅",
    "date": "2025-11-14",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2025/11/14/art_1229098242_2579170.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室关于印发2020年乡村全域土地综合整治与生态修复工程名单的通知",
    "docNo": "浙保耕办〔2020〕12号",
    "issuer": "浙江省保护耕地和全域土地综合整治与生态修复领导小组办公室（浙江省自然资源厅代章）",
    "date": "2020-09-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.zj.gov.cn/art/2021/9/6/art_1229196455_2353233.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "浙江省国土资源厅关于做好城乡建设用地增减挂钩节余指标调剂使用管理工作的通知",
    "docNo": "浙土资规〔2018〕11号",
    "issuer": "浙江省国土资源厅",
    "date": "2018-10-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.zj.gov.cn/art/2018/10/18/art_1229098242_2322294.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省",
    "rank": 3,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "湖州市人民政府办公室关于印发湖州市高质量实施土地综合整治工作方案的通知",
    "docNo": "湖政办发〔2023〕37号",
    "issuer": "湖州市人民政府办公室",
    "date": "2023",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "",
    "attachUrl": "",
    "sourceNote": "原文链接仅给首页：https://www.huzhou.gov.cn/",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "湖州市人民政府办公室关于加快推进全域土地综合整治与生态修复工程的实施意见",
    "docNo": "湖政办发〔2019〕31号",
    "issuer": "湖州市人民政府办公室",
    "date": "2019-11-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.huzhou.gov.cn/art/2019/11/14/art_1229596875_59047829.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "湖州市人民政府关于印发湖州市高质量推进低效用地再开发试点工作实施方案（2023—2027年）的通知",
    "docNo": "湖政发〔2024〕2号",
    "issuer": "湖州市人民政府",
    "date": "2024-01-28",
    "status": "现行有效（有效期至2027-09-30）",
    "grade": "核验A级",
    "url": "https://www.huzhou.gov.cn/art/2024/1/31/art_1229561841_1676193.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "湖州市人民政府办公室关于进一步加强市级补充耕地指标标准农田指标调剂和统筹管理的通知",
    "docNo": "未获取",
    "issuer": "湖州市人民政府办公室",
    "date": "2020-09-29",
    "status": "现行有效（2021-01-01起施行）",
    "grade": "核验A级",
    "url": "https://www.huzhou.gov.cn/art/2020/10/13/art_1229596867_59047742.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "湖州市人民政府办公室关于坚决制止耕地「非农化」防止耕地「非粮化」稳定发展粮食生产的实施意见",
    "docNo": "湖政办发〔2021〕34号",
    "issuer": "湖州市人民政府办公室",
    "date": "2021-12-16",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.huzhou.gov.cn/art/2021/12/27/art_1229561842_1663960.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "湖州市人民政府办公室关于农村住房建设管理的指导意见",
    "docNo": "未获取",
    "issuer": "湖州市人民政府办公室",
    "date": "2026-02-09",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.huzhou.gov.cn/col/col1229561842/art/2026/art_1e1099020cbf493db0fcd3381c96ce45.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "长兴县人民政府关于印发《长兴县工业用地二次开发项目管理办法》的通知",
    "docNo": "长政发〔2026〕22号",
    "issuer": "长兴县人民政府",
    "date": "2026-04-30 成文、2026-05-06 发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.zjcx.gov.cn/col/col1229518369/fdzdgknr/zcwj/gfxwj/xbjgfxwj/art/2026/art_f8059d2881054aaf844d46a854fe75ce.html",
    "attachUrl": "",
    "sourceNote": "文书形态：门户「有效性」字段标注有效，自发布之日起 30 日后施行",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "44",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "长兴县人民政府关于印发《长兴县高质量推进低效用地再开发试点工作实施方案（2023—2027年）》的通知",
    "docNo": "长政发〔2024〕43号",
    "issuer": "长兴县人民政府",
    "date": "效力见《长兴县人民政府关于公布行政规范性文件清理结果的通知》（长政发〔2026〕64号，2026-09-03 成文，自公布之日起 30 日后施行），列为继续有效第 114 项",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.zjcx.gov.cn/col/col1229518369/xzfjgbm/zxxrmzfbgs/fdzdgknr/zcwj/xbjfgfxwj/xzgfxwjjd/art/2025/art_2095596178.html",
    "attachUrl": "",
    "sourceNote": "文书形态：方案自 2024-05-30 起施行；正文发布页待补；核验说明：效力佐证页（长政发〔2026〕64号清理结果通知）：https://www.zjcx.gov.cn/col/col1229518369/fdzdgknr/zcwj/gfxwj/xbjgfxwj/art/2026/art_cd5cf9e82e3e4ef7be27208a3979aba1.html",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "44",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "关于调整县级耕地保护补偿机制的通知",
    "docNo": "长政办发〔2024〕57号",
    "issuer": "长兴县人民政府办公室",
    "date": "效力见长政发〔2026〕64号《清理结果》，列为继续有效第 119 项",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.zjcx.gov.cn/col/col1229518369/fdzdgknr/zcwj/gfxwj/xbjgfxwj/art/2026/art_cd5cf9e82e3e4ef7be27208a3979aba1.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文发布页待补",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "44",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "关于印发《长兴县农村宅基地和农民建房管理办法》的通知",
    "docNo": "长政办发〔2025〕38号",
    "issuer": "长兴县人民政府办公室",
    "date": "效力见长政发〔2026〕64号《清理结果》，列为继续有效第 132 项",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.zjcx.gov.cn/col/col1229518369/fdzdgknr/zcwj/gfxwj/xbjgfxwj/art/2026/art_cd5cf9e82e3e4ef7be27208a3979aba1.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文发布页待补",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "44",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 17,
    "name": "关于印发《长兴县高标准农田建设工程设施管护实施办法（试行）》的通知",
    "docNo": "长政办发〔2023〕69号",
    "issuer": "长兴县人民政府办公室",
    "date": "效力见长政发〔2026〕64号《清理结果》，列为继续有效第 104 项",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.zjcx.gov.cn/col/col1229518369/fdzdgknr/zcwj/gfxwj/xbjgfxwj/art/2026/art_cd5cf9e82e3e4ef7be27208a3979aba1.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文发布页待补",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "44",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 18,
    "name": "关于重新公布长兴县征地区片综合地价标准的通知",
    "docNo": "长政发〔2023〕116号",
    "issuer": "长兴县人民政府",
    "date": "效力见长政发〔2026〕64号《清理结果》，列为继续有效第 105 项",
    "status": "",
    "grade": "核验B级",
    "url": "https://www.zjcx.gov.cn/col/col1229518369/fdzdgknr/zcwj/gfxwj/xbjgfxwj/art/2026/art_cd5cf9e82e3e4ef7be27208a3979aba1.html",
    "attachUrl": "",
    "sourceNote": "文书形态：正文发布页待补",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "44",
    "gradeLetter": "B",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 14,
   "provinceTools": 5,
   "nationalTools": 0,
   "provinceBasis": 5,
   "nationalBasis": 0,
   "localDocs": 12,
   "provinceDocs": 6,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 14,
   "docs": 18,
   "innovations": 3,
   "implementation": 8,
   "pilot": 6,
   "gradeA": 13,
   "gradeB": 5,
   "revoked": 0,
   "mechanisms": 7
  }
 },
 {
  "id": "45",
  "dir": "45_广西壮族自治区贵港市覃塘区覃塘街道",
  "title": "广西壮族自治区贵港市覃塘区覃塘街道全域土地综合整治政策激励工具箱（1.0版）",
  "name": "广西壮族自治区贵港市覃塘区覃塘街道",
  "batch": "第三批",
  "province": "广西",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "10.8 亿元",
  "summary": "借鉴「千万工程」经验，覃塘区实施3个项目、覆盖6个行政村、总面积10.2万亩；推行「小田并大田」整治耕地1.17万亩，龙凤村莲藕产值超1亿元，毛尖茶获地标认证，「荷美覃塘」4A景区年接待游客超百万人次。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以广西壮族自治区配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具17项（其中创新工具4项）、政策文件16份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "贵港市覃塘区政府、覃塘街道办事处",
    "policyTitle": "「小田并大田」与低效用地复垦政策",
    "detail": "推行「小田并大田」政策，先后整治耕地1.17万亩，有效降低土地碎片化，促进了农业机械化、规模化、现代化；通过盘活建设用地和复垦低效用地，保障多项乡村改造工程，实现了美化、硬化、亮化、绿化。",
    "innovation": "「小田并大田」整治耕地1.17万亩，全面降低碎片化",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "贵港市覃塘区政府、覃塘街道办事处",
    "policyTitle": "贵港市补充耕地指标交易管理实施细则",
    "detail": "规定土地整治、高标准农田建设、增减挂钩及工矿废弃地复垦形成补充耕地指标的市级交易平台、协议/挂牌出让程序与价格机制。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "贵港市覃塘区政府、覃塘街道办事处",
    "policyTitle": "贵港市土地综合整治工作实施方案（试行）",
    "detail": "直接部署全市土地综合整治（含全域土地综合整治项目），规定项目立项、实施、验收、新增耕地核定入库、指标分成与管护全流程。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "贵港市覃塘区政府、覃塘街道办事处",
    "policyTitle": "贵港市国土空间生态修复规划（2023—2035年）",
    "detail": "全市国土空间生态修复纲领性文件，落实「市级规划—县（市、区）行动计划—项目方案」，为全域整治生态保护修复子项目提供依据。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "贵港市覃塘区政府、覃塘街道办事处",
    "policyTitle": "贵港市「十四五」有责任主体废弃矿山生态修复专项行动方案",
    "detail": "明确废弃矿山复垦新增耕地可核定报入耕地占补平衡系统、节余建设用地指标可调整使用，是全域整治生态修复与指标收益的配套政策。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "贵港市覃塘区政府、覃塘街道办事处",
    "policyTitle": "贵港市高标准农田建设规划（2021—2030年）",
    "detail": "高标准农田建设是全域整治农用地整理的核心子工程，规划明确全市新建与改造提升任务布局。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "贵港市覃塘区政府、覃塘街道办事处",
    "policyTitle": "贵港市利用市场化方式推进历史遗留矿山生态修复政策若干措施（试行）",
    "detail": "以市场化方式（含指标激励、产权激励）推进历史遗留矿山生态修复，与全域整治「社会资本参与、生态保护修复」配套工具契合。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "覃塘区水利局，覃塘街道办事处",
    "policyTitle": "贵港市覃塘区人民政府办公室关于印发贵港市覃塘区禁止开垦陡坡地范围划定和公告工作方案的通知",
    "detail": "依据国家层面水土保持制度框架与省级《广西加强新时代水土保持工作实施方案》（桂政办发〔2023〕28号），覃塘区组织划定禁止开垦陡坡地范围，按乡镇、行政村逐级标注问题并完成内业核查与外业复核，为全域整治「生态保护修复」提供区级空间管控依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 9,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "覃塘区自然资源局，覃塘街道办事处",
    "policyTitle": "贵港市覃塘区人民政府办公室关于印发贵港市覃塘区乡村地区「通则式」规划管理规定（试行）的通知",
    "detail": "经区五届人民政府第九十三次常务会议审议通过，覃塘区印发乡村地区「通则式」规划管理规定（试行），对村庄规划尚未覆盖的乡村地区建设活动，明确农房建设、产业用地与公共设施用地的选址、规模及风貌管控要求，给出统一的规划管理通则，与全域整治「村庄规划与空间布局优化」工具衔接，为整治项目区内农房建设、产业用地布局提供区级规划管理依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "覃塘区农业农村局、覃塘区自然资源局，覃塘街道办事处",
    "policyTitle": "贵港市覃塘区人民政府办公室关于进一步规范设施农业用地管理的通知",
    "detail": "依据国家层面设施农业用地管理制度框架与省级《关于进一步加强和规范我区设施农业用地管理的通知》（桂自然资规〔2020〕3号），覃塘区明确设施农业用地范围与规模，成立联合审查工作专班（办公室设在区农业农村局、每月联审），备案后 5 个工作日内上图入库并主动公开，建立退出与撤销备案机制，为全域整治「设施农业用地管理」提供区级操作规则。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "覃塘区农业农村局、覃塘区自然资源局，覃塘街道办事处",
    "policyTitle": "覃塘区人民政府办公室关于印发关于规范农村宅基地审批管理工作的实施意见（试行）的通知",
    "detail": "依据《中华人民共和国土地管理法》第六十二条与国家层面农村宅基地审批管理制度框架，覃塘区由乡镇政府审核批准宅基地，严格落实「一户一宅」「先批后建」「建新拆旧」，明确宅基地占地不超过 150 平方米、层数不超过 4 层、建筑面积不超过 450 平方米，经批准易地建房须签订原宅基地退出协议，为全域整治「宅基地管理与产权调整」提供区级依据。",
    "innovation": "",
    "deps": [
     14
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "贵港市覃塘区政府、广西壮族自治区自然资源厅",
    "policyTitle": "多元化资金筹措与社会资本引进政策",
    "detail": "构建多元化资金筹措机制，获财政资金3.3亿元支持全域土地综合整治，并引进社会资本2.9亿元参与；覃塘区已形成政府引领、多方参与模式，成功实施3个项目，覆盖6个行政村，实施总面积10.2万亩，总投资10.8亿元，其中两个村项目入选国家试点。",
    "innovation": "财政资金3.3亿元+社会资本2.9亿元的多元化资金筹措机制",
    "deps": [
     1,
     2,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 13,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "覃塘区农业农村局、覃塘区财政局，覃塘街道办事处",
    "policyTitle": "贵港市覃塘区人民政府办公室关于印发覃塘区2026年耕地地力保护补贴项目实施方案的通知",
    "detail": "依据省级《关于做好2026年耕地地力保护补贴项目实施工作的通知》（桂农厅发〔2026〕16号）与市级《贵港市2026年耕地地力保护补贴项目实施方案》（贵农局发〔2026〕4号），覃塘区对农户自主采取冬种绿肥、秸秆还田、畜禽粪肥还田等措施的耕地按 200 元/亩补贴，以确权登记面积为补贴依据，并将补贴与耕地保护挂钩（违规焚烧秸秆取消申报资格），为全域整治「耕地保护激励」提供区级资金依据。",
    "innovation": "",
    "deps": [
     15
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 14,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "覃塘区财政局，覃塘街道办事处",
    "policyTitle": "贵港市覃塘区人民政府办公室关于印发覃塘区现代农业融资风险补偿管理办法（暂行）（修订版）的通知",
    "detail": "依据市级《贵港市本级现代农业融资风险代偿补偿机制实施方案（试行）（修订版）》（贵政办规〔2025〕7号）与《加快推进现代设施农业高质量发展实施方案》（贵政办通〔2023〕27号），覃塘区设立现代农业融资风险补偿金，由区财政存放合作银行，对涉农经营主体贷款本金损失按规定比例补偿，资金来源为区财政预算、利息收益与主体保证金，为全域整治「金融资金支持」提供区级制度依据。",
    "innovation": "",
    "deps": [
     16
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 15,
    "mechanism": "五、加大区域综合整治实施力度",
    "category": "试点推进",
    "lead": "贵港市覃塘区政府、覃塘街道办事处",
    "policyTitle": "村庄规划与全域土地整治融合政策",
    "detail": "覃塘区先后编制完成93个村庄规划，推进村庄规划与全域土地整治融合；姚山村、龙凤村通过村庄规划保障了557亩产业用地规模，形成多片区功能分区；凌动村通过「党建+土地预流转」促进农业规模经营和就业增收；2023年覃塘区「党建+网格化+数字化」模式入选全国乡村治理典型案例。",
    "innovation": "93个村庄规划与全域整治融合+「党建+网格化+数字化」全国典型案例",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "五",
    "mechShort": "加大区域综合整治实施力度",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 16,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "贵港市覃塘区政府、覃塘街道办事处",
    "policyTitle": "「土地整治+产业+旅游」三产融合政策",
    "detail": "推行「土地整治+产业+旅游」模式，促进一二三产业深度融合，形成「农旅互促」格局。第一产业重点发展莲藕、毛尖茶等特色农产品，龙凤村莲藕产值已超过1亿元，毛尖茶获地标认证；第二产业重点引进现代化企业，建设综合服务中心；第三产业依托「荷美覃塘」4A级景区发展乡村旅游，每年接待游客100万人次，旅游消费超过10亿元。",
    "innovation": "龙凤村莲藕产值超1亿元+4A景区年游客100万人次、旅游消费超10亿元",
    "deps": [
     1,
     2
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 17,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "贵港市覃塘区政府、覃塘街道办事处",
    "policyTitle": "规范贵港市中心城区规划控制区范围内村民建房管理",
    "detail": "划定村庄保留区与建房严控区、落实「一户一宅」与节约集约用地，属全域整治村庄建设用地整理与农房管控配套政策。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "市"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "广西壮族自治区自然资源厅关于印发《广西壮族自治区全域土地综合整治管理办法》的通知",
    "docNo": "桂自然资规〔2025〕7号",
    "issuer": "广西壮族自治区自然资源厅（经自治区人民政府同意）",
    "date": "2025-11-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://dnr.gxzf.gov.cn/zfxxgk/fdzdgknr/zcfg/gfxwj/t27128116.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "广西壮族自治区自然资源厅关于印发开展全域土地综合整治助推乡村振兴意见的通知",
    "docNo": "桂自然资规〔2020〕9号",
    "issuer": "广西壮族自治区自然资源厅",
    "date": "2020-07-30",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://dnr.gxzf.gov.cn/zfxxgk/fdzdgknr/zcfg/gfxwj/t16390720.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "广西协同实施灌区工程与全域土地综合整治工作方案",
    "docNo": "无文号",
    "issuer": "广西壮族自治区自然资源厅、水利厅、农业农村厅、财政厅",
    "date": "2026-06-22",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://dnr.gxzf.gov.cn/xwzx/zrzx/t27829027.shtml",
    "attachUrl": "",
    "sourceNote": "核验说明：官方新闻发布，全文未公开",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "45",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "贵港市人民政府办公室关于印发贵港市土地综合整治工作实施方案（试行）的通知",
    "docNo": "未获取",
    "issuer": "贵港市人民政府办公室",
    "date": "2020-10-30",
    "status": "不确定（「试行」）",
    "grade": "核验A级",
    "url": "http://gg.dnr.gxzf.gov.cn/ghly/tdzz/t7165651.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "贵港市人民政府关于印发贵港市国土空间生态修复规划（2023—2035年）的通知",
    "docNo": "贵政发〔2023〕11号",
    "issuer": "贵港市人民政府",
    "date": "2023-11-29",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.gxgg.gov.cn/xxgk/zfwj/gzf1/t17605182.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "贵港市自然资源局关于印发《贵港市「十四五」有责任主体废弃矿山生态修复专项行动方案》的通知",
    "docNo": "贵自然资发〔2023〕56号",
    "issuer": "贵港市自然资源局（经市人民政府同意）",
    "date": "2023-09-11",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.gxgg.gov.cn/xxgk/bmwj/t17147101.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "贵港市自然资源局关于印发贵港市补充耕地指标交易管理实施细则的通知",
    "docNo": "贵自然资发〔2021〕70号",
    "issuer": "贵港市自然资源局（经市人民政府同意）",
    "date": "2021-12-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.gxgg.gov.cn/xxgk/fzjszl_2884/flfg/t11167384.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "贵港市农业农村局关于印发贵港市高标准农田建设规划（2021—2030年）的通知",
    "docNo": "贵农局发〔2023〕13号",
    "issuer": "贵港市农业农村局（经市人民政府同意）",
    "date": "2023-03-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.gxgg.gov.cn/xxgk/bmwj/t15909812.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "贵港市人民政府办公室关于规范贵港市中心城区规划控制区范围内村民建房管理的通知",
    "docNo": "贵政办规〔2023〕6号",
    "issuer": "贵港市人民政府办公室",
    "date": "2023-11-07",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.gxgg.gov.cn/xxgk/zfwj/gzbg/t17532663.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "贵港市人民政府办公室关于印发贵港市利用市场化方式推进历史遗留矿山生态修复政策若干措施（试行）的通知",
    "docNo": "贵政办通〔2021〕23号",
    "issuer": "贵港市人民政府办公室",
    "date": "2021-05-31",
    "status": "不确定（「试行」）",
    "grade": "核验A级",
    "url": "http://www.gxgg.gov.cn/xxgk/zfwj/gzbt/t11092157.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "贵港市覃塘区人民政府办公室关于印发贵港市覃塘区禁止开垦陡坡地范围划定和公告工作方案的通知",
    "docNo": "覃政办通〔2025〕16号",
    "issuer": "贵港市覃塘区人民政府办公室",
    "date": "2025-05-30 成文、印发",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.ggqt.gov.cn/xxgk/zfwj/bjwj/fdzdgkzcwjqzbt/t27109779.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "贵港市覃塘区人民政府办公室关于印发贵港市覃塘区乡村地区「通则式」规划管理规定（试行）的通知",
    "docNo": "覃政办规〔2025〕5号",
    "issuer": "贵港市覃塘区人民政府办公室",
    "date": "2025-11-27 印发（经区五届人民政府第九十三次常务会议审议通过）",
    "status": "不确定（「试行」）",
    "grade": "核验A级",
    "url": "http://www.ggqt.gov.cn/xxgk/zfwj/bjwj/fdzdgkzcwjqzbg/t26492511.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "贵港市覃塘区人民政府办公室关于进一步规范设施农业用地管理的通知",
    "docNo": "覃政办通〔2025〕2号",
    "issuer": "贵港市覃塘区人民政府办公室",
    "date": "2025-02-18 成文、印发",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.ggqt.gov.cn/xxgk/zfwj/bjwj/fdzdgkzcwjqzbt/t19724281.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 14,
    "name": "覃塘区人民政府办公室关于印发关于规范农村宅基地审批管理工作的实施意见（试行）的通知",
    "docNo": "覃政办规〔2020〕2号",
    "issuer": "贵港市覃塘区人民政府办公室",
    "date": "2020-12-24 成文、印发",
    "status": "不确定（「试行」）",
    "grade": "核验A级",
    "url": "http://www.ggqt.gov.cn/xxgk/zfwj/bjwj/fdzdgkzcwjqzbg/t7432102.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 15,
    "name": "贵港市覃塘区人民政府办公室关于印发覃塘区2026年耕地地力保护补贴项目实施方案的通知",
    "docNo": "覃政办通〔2026〕5号",
    "issuer": "贵港市覃塘区人民政府办公室",
    "date": "2026-04-23 成文、2026-04-24 发布",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.ggqt.gov.cn/xxgk/zfwj/bjwj/fdzdgkzcwjqzbt/t27499281.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 16,
    "name": "贵港市覃塘区人民政府办公室关于印发覃塘区现代农业融资风险补偿管理办法（暂行）（修订版）的通知",
    "docNo": "覃政办规〔2026〕1号",
    "issuer": "贵港市覃塘区人民政府办公室",
    "date": "2026-04-23 成文、2026-04-24 发布",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://www.ggqt.gov.cn/xxgk/zfwj/bjwj/fdzdgkzcwjqzbg/t27500022.shtml",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "45",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 7,
    "innovations": 0
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "五、加大区域综合整治实施力度",
    "short": "加大区域综合整治实施力度",
    "no": "五",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 2,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 17,
   "provinceTools": 0,
   "nationalTools": 0,
   "provinceBasis": 0,
   "nationalBasis": 0,
   "localDocs": 16,
   "provinceDocs": 0,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 17,
   "docs": 16,
   "innovations": 4,
   "implementation": 14,
   "pilot": 3,
   "gradeA": 15,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 6
  }
 },
 {
  "id": "46",
  "dir": "46_贵州省黔东南州雷山县西江镇",
  "title": "贵州省黔东南州雷山县西江镇全域土地综合整治政策激励工具箱（1.0版）",
  "name": "贵州省黔东南州雷山县西江镇",
  "batch": "第三批",
  "province": "贵州",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "—",
  "summary": "依托西江千户苗寨景区，按「宜农则农、宜建则建、宜留则留、宜整则整」原则布局12个全域土地综合整治子项目，实施农用地整理、风貌提升、道路优化、水环境整治等工程；全镇增加有效耕地面积54公顷，完成2172户人居环境改造，龙塘村游客接待量较上年增长40%。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以贵州省配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具12项（其中创新工具3项）、政策文件12份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "雷山县政府、西江镇政府",
    "policyTitle": "黔东南州补充耕地指标统筹管理暂行办法",
    "detail": "建立州级补充耕地指标统筹库与有偿调剂标准，明确指标收益用于补充耕地后续管护、耕地保护、高标准农田建设，是全域整治指标收益机制配套。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 2,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "雷山县政府、西江镇政府",
    "policyTitle": "黔东南州畅通城乡要素流动促进房地产市场良性循环和平稳健康发展工作方案（试行）",
    "detail": "明确统筹用好「农村耕地和宅基地增减挂钩」政策，将旧房拆除后土地复垦复绿形成的新增耕地指标、增减挂钩指标流转收益用于地质灾害搬迁安置。",
    "innovation": "",
    "deps": [
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "雷山县政府、西江镇政府",
    "policyTitle": "黔东南州民族特色村寨保护高质量发展实施方案",
    "detail": "要求以国土空间规划与村庄规划修编为引领，通过生态红线「占补平衡」、永久基本农田「耕地置换」统筹建设用地指标，并在年度用地计划中单列不低于5%保障村民建房。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "一、强化土地指标统筹",
    "category": "全面实施",
    "lead": "雷山县政府、西江镇政府",
    "policyTitle": "雷山县补充耕地项目地上附着物补偿暂行办法",
    "detail": "落实「藏粮于地、藏粮于技」，推进耕地数量、质量、生态「三位一体」保护；明确适用于本县行政区域内实施补充耕地项目（旱地改水田、土地综合整治、全域土地综合整治、耕地占补平衡项目）土地范围内药材类、果树类、林木类及构建筑物等地上附着物补偿，恢复后的耕地权属不变仍由原使用者所有，是本案例直接点名全域整治的区级依据。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 5,
    "mechanism": "一、强化土地指标统筹",
    "category": "试点推进",
    "lead": "雷山县政府、西江镇政府",
    "policyTitle": "雷山县城乡居民建房管理办法（试行）",
    "detail": "严格落实「一户一宅」城乡居民宅基地审批管理制度；要求建房优先使用原有宅基地、村内空闲建设用地和未利用地，尽量不占或少占耕地，涉及占用耕地的宅基地面积最高不超过170平方米；选址不得占用永久基本农田；并鼓励盘活利用闲置宅基地（进城落户自愿有偿退出、继承受赠的超「一户一宅」多余宅基地），是全域整治中宅基地及住房建设管理的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "一",
    "mechShort": "强化土地指标统筹",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 6,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "雷山县政府、西江镇政府",
    "policyTitle": "高标准农田建设与耕地集中连片政策",
    "detail": "实施高标准农田建设，将碎片化农田整合为集中连片的「大田」，新增耕地251.27公顷，提高机械化作业效率；例如西源村最大田块面积从2亩增至12亩，新增耕地50亩，粮食综合生产能力显著提升。",
    "innovation": "西源村最大田块由2亩增至12亩，碎片化农田整合为连片大田",
    "deps": [
     1,
     2,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "省"
    ]
   },
   {
    "no": 7,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "雷山县政府、西江镇政府",
    "policyTitle": "黔东南州国土空间生态修复规划（2021—2035年）",
    "detail": "全州国土空间生态修复的规划依据，明确矿山生态修复、水土流失治理等修复工程布局，支撑全域整治生态修复子项目。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "雷山县政府、西江镇政府",
    "policyTitle": "黔东南苗族侗族自治州国土空间总体规划（2021—2035年）",
    "detail": "全域土地综合整治的上位国土空间规划依据，统筹「三区三线」与全域全要素整治空间安排。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "雷山县政府、西江镇政府",
    "policyTitle": "「龙头企业+合作社+农户」土地流转与产业带动政策",
    "detail": "通过土地流转引入企业，形成「龙头企业+合作社+农户」模式，推动有机高粱、茶叶等特色农业规模化发展；旅拍、民宿、餐饮等业态蓬勃发展，仅旅拍店就达232家，单店日营业额最高达6万元；乡村振兴产业基地入驻17家企业，解决就业2500余人；景区周边村民参与旅游服务，年均增收7000元，产业基地员工月均工资达3150元。",
    "innovation": "「龙头企业+合作社+农户」+232家旅拍店集群，文旅新业态带动就业2.5万人",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "省"
    ]
   },
   {
    "no": 10,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "试点推进",
    "lead": "雷山县政府、西江镇政府",
    "policyTitle": "西江景区及周边「两违」处置和风貌管控暂行办法（试行）",
    "detail": "界定「两违」为违法占地和违法建设，非法获取土地、违法占地建房、未经批准新建改扩建、开挖山体或地下室等由县自然资源局牵头、县住建局等部门与西江镇配合依法处理；占用国有土地、基本农田或耕地的「两违」建筑一律拆除类处置；原宅基地违建超层超高（＞3层／＞11.6米）按规定处理，是全域整治中西江景区及周边风貌管控的区级依据。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "全面实施",
    "lead": "雷山县农业农村局、雷山县财政局",
    "policyTitle": "雷山县2026年耕地地力保护补贴工作实施方案",
    "detail": "依据《贵州省2026年耕地地力保护补贴实施方案》及黔财农〔2025〕170号、黔财农〔2026〕14号编制，耕地地力保护补贴按拥有耕地承包权农户直接补贴并与耕地保护责任挂钩（撂荒、违规用地等情形按规定处理），是全域整治中耕地保护补偿与整治后耕地持续管护的区级依据。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 12,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "试点推进",
    "lead": "雷山县政府、西江镇政府",
    "policyTitle": "「全域土地综合整治+少数民族文化旅游」模式政策",
    "detail": "将自然景观与苗族特色文化融合，逐步探索出「全域土地综合整治+少数民族文化旅游」的创新发展模式，致力于打造文农旅一体的现代化小镇；依托苗族文化遗产资源，整合自然景观与传统村落；2023年西江景区接待游客464.33万人次，旅游综合收入50.66亿元，直接带动就业2万余人。",
    "innovation": "全国首创「全域土地综合整治+少数民族文化旅游」融合模式，旅游综合收入超50亿元",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "省"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "贵州省自然资源厅关于印发《贵州省全域土地综合整治试点工作指南（试行）》的通知",
    "docNo": "黔自然资〔2022〕号",
    "issuer": "贵州省自然资源厅",
    "date": "2022-04-18",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzy.guizhou.gov.cn/wzgb/zwgk/zdlyxxgk/gtkj/stxf/202204/t20220418_73484061.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "46",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "贵州省自然资源厅关于做好全域土地综合整治项目申报工作的通知",
    "docNo": "黔自然资函〔2025〕157号",
    "issuer": "贵州省自然资源厅",
    "date": "2025-04-03",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://www.guoturen.com/wenku-17525.html",
    "attachUrl": "",
    "sourceNote": "核验说明：正文见第三方完整转载，省厅官网未公开",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "46",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "贵州省全域土地综合整治工作管理办法（试行）（征求意见稿）",
    "docNo": "无文号",
    "issuer": "贵州省自然资源厅",
    "date": "2025-10-17",
    "status": "征求意见中",
    "grade": "核验A级",
    "url": "https://zrzy.guizhou.gov.cn/opinion/202510/tOpinion_19627.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "省",
    "levelHit": "省自然资源厅",
    "rank": 3,
    "caseId": "46",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "州人民政府办公室关于印发黔东南州补充耕地指标统筹管理暂行办法的通知",
    "docNo": "未获取（州政府办公室文件）",
    "issuer": "黔东南州人民政府办公室",
    "date": "2022-08-06",
    "status": "不确定（「暂行」）",
    "grade": "核验A级",
    "url": "https://www.qdn.gov.cn/zwgk_5871642/zfgb_5871708/2022n/2022ndwq/zzfbgswj/202210/t20221024_76836156.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "46",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "州人民政府办公室关于印发《黔东南州畅通城乡要素流动促进房地产市场良性循环和平稳健康发展工作方案（试行）》的通知",
    "docNo": "黔东南府办函〔2023〕30号",
    "issuer": "黔东南州人民政府办公室",
    "date": "2023-09-26",
    "status": "不确定（「试行」）",
    "grade": "核验A级",
    "url": "https://www.qdn.gov.cn/zwgk_5871642/zfgb_5871708/2023n/2023ndsq_5952965/zzfbgswj_5947735/202312/t20231204_83179861.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "46",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "黔东南州国土空间生态修复规划（2021—2035年）",
    "docNo": "未获取",
    "issuer": "黔东南州自然资源局",
    "date": "2024-04-22",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "http://zrzy.qdn.gov.cn/zwgk_2020/zfxxgk_5803426/fdzdgknr/ghjh_5803438/202404/t20240422_84340778.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州自然资源局",
    "rank": 2,
    "caseId": "46",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "州人民政府办公室关于印发黔东南州民族特色村寨保护高质量发展实施方案的通知",
    "docNo": "黔东南府办函〔2025〕30号",
    "issuer": "黔东南州人民政府办公室",
    "date": "2025-12-22",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.qdn.gov.cn/zwgk_5871642/zfgb_5871708/2026n/2026ndyq/zzfbgswj/202512/t20251222_89078811.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "46",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "黔东南苗族侗族自治州国土空间总体规划（2021—2035年）",
    "docNo": "未获取",
    "issuer": "黔东南州人民政府",
    "date": "2025-03-27",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.qdn.gov.cn/zwgk_5871642/zdlyxxgk/fzgh_5872129/gtkjgh/202503/t20250327_87285586.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "州人民政府",
    "rank": 2,
    "caseId": "46",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "雷山县补充耕地项目地上附着物补偿暂行办法",
    "docNo": "雷府办函〔2025〕1号",
    "issuer": "雷山县人民政府办公室",
    "date": "2025-01-06 印发",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.leishan.gov.cn/zwgk/zcwj/zcwj/202501/t20250106_86583156.html",
    "attachUrl": "",
    "sourceNote": "文书形态：第六条明确「自本办法印发之日生效，有效期 3 年」（即至 2028-01-05，现行有效）",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "46",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "雷山县2026年耕地地力保护补贴工作实施方案",
    "docNo": "未获取（部门发文，页面未列文号）",
    "issuer": "雷山县农业农村局、雷山县财政局",
    "date": "2026-05-18 成文、2026-05-25 公开",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.leishan.gov.cn/zwgk/zdlygk/xczx/202605/t20260525_90205931.html",
    "attachUrl": "",
    "sourceNote": "文书形态：经报州农业农村局、州财政局征求意见并报县人民政府审定同意后印发，现行执行",
    "level": "区县",
    "levelHit": "县财政局",
    "rank": 1,
    "caseId": "46",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "雷山县城乡居民建房管理办法（试行）",
    "docNo": "雷府办函〔2025〕16号",
    "issuer": "雷山县人民政府办公室",
    "date": "2025-05-19 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.leishan.gov.cn/zwgk/gzhgfxwjsjk/gfxwjsjk/qzfzfb/202507/t20250717_88301333.html",
    "attachUrl": "",
    "sourceNote": "文书形态：列于县政府门户「行政规范性文件库—县政府（政府办）」栏目，文件状态标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "46",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "西江景区及周边「两违」处置和风貌管控暂行办法（试行）",
    "docNo": "雷府办函〔2024〕26号",
    "issuer": "雷山县人民政府办公室",
    "date": "2024-08-02 印发",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.leishan.gov.cn/zwgk/gzhgfxwjsjk/gfxwjsjk/qzfzfb/202408/t20240822_85433159.html",
    "attachUrl": "",
    "sourceNote": "文书形态：列于「行政规范性文件库—县政府（政府办）」栏目，文件状态标注「有效」",
    "level": "区县",
    "levelHit": "县人民政府",
    "rank": 1,
    "caseId": "46",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "一、强化土地指标统筹",
    "short": "强化土地指标统筹",
    "no": "一",
    "count": 5,
    "innovations": 0
   },
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 3,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 2,
    "innovations": 1
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 12,
   "provinceTools": 3,
   "nationalTools": 0,
   "provinceBasis": 3,
   "nationalBasis": 0,
   "localDocs": 9,
   "provinceDocs": 3,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 12,
   "docs": 12,
   "innovations": 3,
   "implementation": 6,
   "pilot": 6,
   "gradeA": 11,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 5
  }
 },
 {
  "id": "47",
  "dir": "47_宁夏回族自治区石嘴山市惠农区燕子墩乡",
  "title": "宁夏回族自治区石嘴山市惠农区燕子墩乡全域土地综合整治政策激励工具箱（1.0版）",
  "name": "宁夏回族自治区石嘴山市惠农区燕子墩乡",
  "batch": "第三批",
  "province": "宁夏",
  "positioning": "第三批全域土地综合整治试点典型案例",
  "investment": "2.5 亿元",
  "summary": "针对土地分散、盐碱化严重与「空心村」问题，实施盐碱地治理、农用地整合、建设用地腾退三大工程，建立「田地人」联动整治模式，引进山东水发浩海集团等10余家龙头企业，推进重点小城镇建设、千亩现代设施农业园区等22个总投资2.5亿元的项目。",
  "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。本案例不再重复列入国家层面政策工具；「主要举措」正文所称「国家级工具箱（1.0版）」即《国家级全域土地综合整治政策激励工具箱（1.0版）》，其「附表第N份」对应该国家级工具箱文末「附：政策文件依据清单」中的文件序号。",
  "closing": "说明：本工具箱以宁夏回族自治区配套政策文件为主要依据，并参照国家层面制度框架梳理形成，共梳理政策工具13项（其中创新工具3项）、政策文件13份。政策文件清单经逐份联网核验：标注「核验A级」者，可在政府官网、政府公报、国家标准平台、中国政府网等官方渠道查阅正文全文或官方发布的明确公开内容，并附可访问来源网址；标注「核验B级」者，其名称与核心内容见官方文件或官方答复函的明确引用，正文全文尚未公开。已剔除无法核验或非政策文件性质的条目。",
  "tools": [
   {
    "no": 1,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "试点推进",
    "lead": "石嘴山市惠农区政府、燕子墩乡政府",
    "policyTitle": "盐碱地综合治理与高标准农田建设政策",
    "detail": "针对区域内盐碱化土地占比高的突出问题，推进土地平整、排灌设施升级、生物改良等综合治理工程，累计改良盐碱地2万余亩，配套建设高标准农田水利管网30公里，构建「田成方、林成网、渠相通、路相连」的现代农田格局；预计建设高标准农田（高效节水）15503亩，治理盐碱地1026亩，整合碎片化土地18191亩。",
    "innovation": "以土地平整+排灌升级+生物改良组合技术治理盐碱地2万余亩",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 2,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "石嘴山市惠农区政府、燕子墩乡政府",
    "policyTitle": "石嘴山市国土空间生态修复规划（2021—2035年）",
    "detail": "全市国土空间生态修复纲领性文件，统筹贺兰山、黄河沿线矿山与盐碱地修复工程，支撑全域整治生态修复内容。",
    "innovation": "",
    "deps": [
     2,
     5
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县",
     "市"
    ]
   },
   {
    "no": 3,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "石嘴山市惠农区政府、燕子墩乡政府",
    "policyTitle": "石嘴山市自然资源「十四五」规划",
    "detail": "部署耕地保护、国土空间生态修复、土地资源高效配置等自然资源领域重点任务，是全域整治的市级规划支撑。",
    "innovation": "",
    "deps": [
     9
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "市"
    ]
   },
   {
    "no": 4,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "惠农区政府、燕子墩乡政府",
    "policyTitle": "惠农区2024年度农田水利基本建设实施方案",
    "detail": "经区政府第79次常务会议研究通过后印发各乡镇，以「农田基础设施建设工程＋农田地力提升工程」为主线，含田块整治、灌溉与排水（渠道砌护、暗管排水、高效节水灌溉）、田间道路、农田防护与生态环境保护、输配电、土壤培肥与机深松等内容，覆盖燕子墩乡等乡镇，是全域整治中高标准农田建设与盐碱地改良的区级依据。",
    "innovation": "",
    "deps": [
     11
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 5,
    "mechanism": "二、支持空间优化和生态修复",
    "category": "全面实施",
    "lead": "惠农区政府、燕子墩乡政府",
    "policyTitle": "惠农区农业设施产权登记颁证工作实施方案",
    "detail": "经区人民政府第120次常务会议研究通过后印发，系本表农业设施产权登记颁证实施细则的配套工作方案，明确组织领导、职责分工、实施步骤与时间节点并由区农业农村和水务局主责推进，与实施细则共同构成「实施细则＋工作方案」的完整制度闭环，是全域整治中设施农业用地管理的区级依据。",
    "innovation": "",
    "deps": [
     13
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "二",
    "mechShort": "支持空间优化和生态修复",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 6,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "石嘴山市惠农区政府、燕子墩乡政府",
    "policyTitle": "进一步推进工业园区土地管理「优二进三」意见",
    "detail": "工业园区低效用地腾退与存量建设用地再开发，属全域整治「低效用地再开发/建设用地整理」配套政策。",
    "innovation": "",
    "deps": [
     6
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 7,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "石嘴山市惠农区政府、燕子墩乡政府",
    "policyTitle": "石嘴山市临时用地管理办法（修订稿）",
    "detail": "依据《土地复垦条例》规范临时用地表土剥离、土地复垦与恢复责任，是全域整治中土地复垦与耕作层保护的配套管理规则。",
    "innovation": "",
    "deps": [
     7
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 8,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "石嘴山市惠农区政府、燕子墩乡政府",
    "policyTitle": "石嘴山市2026年土地储备计划",
    "detail": "年度土地储备计划是全域整治中存量土地收储、建设用地整理的年度实施抓手。",
    "innovation": "",
    "deps": [
     10
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "市"
    ]
   },
   {
    "no": 9,
    "mechanism": "三、优化产权和土地管理政策",
    "category": "全面实施",
    "lead": "惠农区政府、燕子墩乡政府",
    "policyTitle": "惠农区农业设施产权登记颁证实施细则（暂行）",
    "detail": "经区人民政府研究同意后印发各乡镇（街道）、区直各部门执行，对农业设施（设施农业用地上的温室、大棚、畜禽舍、水产养殖设施等）开展产权登记颁证，明确登记范围、程序与凭证效力，为整治区内设施农业资产确权、经营权流转与抵押融资提供区本级制度依据，支撑设施农业用地与土地权属调整。",
    "innovation": "",
    "deps": [
     12
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "三",
    "mechShort": "优化产权和土地管理政策",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 10,
    "mechanism": "四、加大资金保障和金融政策支持",
    "category": "试点推进",
    "lead": "石嘴山市惠农区政府、燕子墩乡政府",
    "policyTitle": "社会资本大规模引入与政企合作政策",
    "detail": "通过实施全域土地综合整治项目建强现代农业基础，以完善灌溉体系、开展碱地整治、实施高标准农田等工程为抓手，推动土地增值和赋能，擦亮土地「招牌」，稳步提升燕子墩乡招商引资聚集力，先后吸引山东水发集团、宁夏宁苗生态建设集团等十几家集团公司和专业合作社累计投入1.642亿元，是2022年吸引社会资本（352万元）的46.6倍。",
    "innovation": "社会资本投入1.642亿元，为2022年的46.6倍，政企合作成效显著",
    "deps": [
     1
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "四",
    "mechShort": "加大资金保障和金融政策支持",
    "basis": [
     "区县"
    ]
   },
   {
    "no": 11,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "石嘴山市惠农区政府、燕子墩乡政府",
    "policyTitle": "石嘴山市耕地保护网格化监管工作方案",
    "detail": "建立市—县区—乡镇—村网格化耕地保护监管体系，是全域整治「耕地保护底线管控」的配套制度。",
    "innovation": "",
    "deps": [
     4
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 12,
    "mechanism": "六、优化审批管理服务",
    "category": "全面实施",
    "lead": "石嘴山市惠农区政府、燕子墩乡政府",
    "policyTitle": "石嘴山市农业农村局盐碱地综合利用项目管理办法",
    "detail": "盐碱地改良与综合利用属耕地质量提升类政策工具，燕子墩乡案例核心内容即盐碱地整治改良。",
    "innovation": "",
    "deps": [
     8
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "六",
    "mechShort": "优化审批管理服务",
    "basis": [
     "市"
    ]
   },
   {
    "no": 13,
    "mechanism": "七、鼓励多方参与和权益保障",
    "category": "全面实施",
    "lead": "石嘴山市惠农区政府、燕子墩乡政府",
    "policyTitle": "耐盐碱特色农业体系与产业链培育政策",
    "detail": "精准培育耐盐碱特色农业体系，重点发展枸杞深加工、苜蓿规模化种植、富硒小麦育种等优势产业，建成智能化育苗基地和农产品初加工中心，形成「土地整治—生态修复—产业提质」的良性循环；每亩土地的平均流转费用由300元增长至1000元以上。",
    "innovation": "「土地整治—生态修复—产业提质」良性循环，亩均流转费由300元增至1000元以上",
    "deps": [
     1,
     3
    ],
    "leadLevel": "区县",
    "scope": "local",
    "scopeRank": 1,
    "mechNo": "七",
    "mechShort": "鼓励多方参与和权益保障",
    "basis": [
     "区县"
    ]
   }
  ],
  "docs": [
   {
    "no": 1,
    "name": "宁夏回族自治区自然资源厅关于印发《宁夏回族自治区全域土地综合整治工作管理办法》的通知",
    "docNo": "宁自然资规发〔2024〕11号",
    "issuer": "宁夏回族自治区自然资源厅（经自治区政府常务会议审议通过）",
    "date": "2024-12-31",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://zrzyt.nx.gov.cn/gk/zhengce/gfwj/202501/t20250106_4780546.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区政府",
    "rank": 1,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 2,
    "name": "关于推动宁夏盐碱地综合利用的科技支撑方案",
    "docNo": "无文号",
    "issuer": "宁夏回族自治区科学技术厅",
    "date": "2024-01-24",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://kjt.nx.gov.cn/zcfg/tfwj/202401/t20240124_4428076.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 3,
    "name": "宁夏盐碱地土壤专题调查实施方案",
    "docNo": "无文号",
    "issuer": "宁夏回族自治区农业农村厅",
    "date": "2024",
    "status": "现行有效",
    "grade": "核验B级",
    "url": "https://nynct.nx.gov.cn/zwgk/zfxxgkml/tajybljggk/202411/t20241114_4727217.html",
    "attachUrl": "",
    "sourceNote": "核验说明：全文未公开，名称与核心内容见农业农村厅答复函及工作通报",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "47",
    "gradeLetter": "B",
    "isRepealed": false
   },
   {
    "no": 4,
    "name": "市人民政府办公室关于印发《石嘴山市耕地保护网格化监管工作方案》的通知",
    "docNo": "石政办发〔2023〕82号",
    "issuer": "石嘴山市人民政府办公室",
    "date": "2023-12-21",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shizuishan.gov.cn/zwgk/zc/szfwj/szbf/202402/t20240201_4445601.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 5,
    "name": "市人民政府关于印发《石嘴山市国土空间生态修复规划（2021—2035年）》的通知",
    "docNo": "石政发〔2024〕40号",
    "issuer": "石嘴山市人民政府",
    "date": "2024-11-22",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shizuishan.gov.cn/zwgk/zc/szfwj/zzf/202511/t20251125_5092042.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 6,
    "name": "市人民政府办公室关于印发进一步推进工业园区土地管理「优二进三」意见的通知",
    "docNo": "石政办发〔2017〕253号",
    "issuer": "石嘴山市人民政府办公室",
    "date": "2017-12-29",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shizuishan.gov.cn/zwgk/zc/szfwj/szbf/202112/t20211202_3187938.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 7,
    "name": "关于印发《石嘴山市临时用地管理办法（修订稿）》的通知",
    "docNo": "未获取",
    "issuer": "石嘴山市自然资源局",
    "date": "2025-10-23",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shizuishan.gov.cn/zwgk/zc/gfxwj/bmgfxwj/szsszrzyj_75942/202510/t20251023_5060905.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市自然资源局",
    "rank": 2,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 8,
    "name": "关于印发《石嘴山市农业农村局盐碱地综合利用项目管理办法》的通知",
    "docNo": "石农发〔2024〕23号",
    "issuer": "石嘴山市农业农村局",
    "date": "2024-07-16",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shizuishan.gov.cn/zwgk/bmxxgk/szssnyncj_61162/jllssx123_/adc123_/202407/t20240716_4596039.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市农业农村局",
    "rank": 2,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 9,
    "name": "市人民政府办公室关于印发《石嘴山市自然资源「十四五」规划》的通知",
    "docNo": "石政办发〔2022〕58号",
    "issuer": "石嘴山市人民政府办公厅",
    "date": "2022-06-01",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shizuishan.gov.cn/zwgk/zc/szfwj/szbf/202206/t20220616_3573858.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 10,
    "name": "市人民政府办公室关于公布《石嘴山市2026年土地储备计划》的通知",
    "docNo": "石政办发〔2026〕8号",
    "issuer": "石嘴山市人民政府办公室",
    "date": "2026-03-02",
    "status": "现行有效",
    "grade": "核验A级",
    "url": "https://www.shizuishan.gov.cn/zwgk/zc/szfwj/szbf/202603/t20260302_5182556.html",
    "attachUrl": "",
    "sourceNote": "",
    "level": "市",
    "levelHit": "市人民政府",
    "rank": 2,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 11,
    "name": "惠农区2024年度农田水利基本建设实施方案",
    "docNo": "惠政办发〔2024〕52号",
    "issuer": "惠农区人民政府办公室",
    "date": "2024-11-28 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "http://www.huinong.gov.cn/zwgk/zcwj/qzfbwj/202411/t20241129_4743559.html",
    "attachUrl": "",
    "sourceNote": "文书形态：列于门户「其他文件（本级）」栏目，效力状态标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 12,
    "name": "惠农区农业设施产权登记颁证实施细则（暂行）",
    "docNo": "惠政规发〔2026〕4号",
    "issuer": "惠农区人民政府（页面\"发文机关\"标注：惠农区农业农村和水务局）",
    "date": "2026-08-21 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.huinong.gov.cn/zwgk/zcwj/gfxwj/202608/t20260821_5319947.html",
    "attachUrl": "",
    "sourceNote": "文书形态：页面「有效性」字段标注「有效」",
    "level": "区县",
    "levelHit": "区",
    "rank": 1,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   },
   {
    "no": 13,
    "name": "惠农区农业设施产权登记颁证工作实施方案",
    "docNo": "惠政办发〔2026〕24号",
    "issuer": "惠农区人民政府办公室",
    "date": "2026-07-31 成文并发布",
    "status": "",
    "grade": "核验A级",
    "url": "https://www.huinong.gov.cn/zwgk/zcwj/qzfbwj/202607/t20260731_5304058.html",
    "attachUrl": "",
    "sourceNote": "文书形态：列于「其他文件（本级）」栏目，效力状态标注「有效」",
    "level": "区县",
    "levelHit": "区人民政府",
    "rank": 1,
    "caseId": "47",
    "gradeLetter": "A",
    "isRepealed": false
   }
  ],
  "mechanisms": [
   {
    "name": "二、支持空间优化和生态修复",
    "short": "支持空间优化和生态修复",
    "no": "二",
    "count": 5,
    "innovations": 1
   },
   {
    "name": "三、优化产权和土地管理政策",
    "short": "优化产权和土地管理政策",
    "no": "三",
    "count": 4,
    "innovations": 0
   },
   {
    "name": "四、加大资金保障和金融政策支持",
    "short": "加大资金保障和金融政策支持",
    "no": "四",
    "count": 1,
    "innovations": 1
   },
   {
    "name": "六、优化审批管理服务",
    "short": "优化审批管理服务",
    "no": "六",
    "count": 2,
    "innovations": 0
   },
   {
    "name": "七、鼓励多方参与和权益保障",
    "short": "鼓励多方参与和权益保障",
    "no": "七",
    "count": 1,
    "innovations": 1
   }
  ],
  "levels": {
   "localTools": 13,
   "provinceTools": 0,
   "nationalTools": 0,
   "provinceBasis": 0,
   "nationalBasis": 0,
   "localDocs": 13,
   "provinceDocs": 0,
   "nationalDocs": 0
  },
  "stats": {
   "tools": 13,
   "docs": 13,
   "innovations": 3,
   "implementation": 11,
   "pilot": 2,
   "gradeA": 12,
   "gradeB": 1,
   "revoked": 0,
   "mechanisms": 5
  }
 }
];

export const NATIONAL = {
 "id": "00",
 "dir": "00_国家级政策工具",
 "title": "国家级全域土地综合整治政策激励工具箱（1.0版）",
 "name": "国家级",
 "batch": "",
 "province": "",
 "positioning": "",
 "investment": "",
 "summary": "本工具箱汇总全域土地综合整治国家层面的政策激励工具，供全部案例共用。各案例工具箱只保留本案例专属（省／市／区县）的政策工具，国家级工具统一在此呈现，避免 44 个案例重复。",
 "note": "说明：下表「主要举措」栏末的【政策依据：附表○】标注，指该举措所依据的政策文件，带圈序号对应文末「附：政策文件依据清单」中的文件序号。",
 "closing": "说明：本工具箱依据《自然资源部关于开展全域土地综合整治试点工作的通知》（自然资发〔2019〕194号）、《自然资源部关于学习运用「千万工程」经验深入推进全域土地综合整治工作的意见》（自然资发〔2024〕149号）、《全域土地综合整治实施指南（试行）》（自然资办发〔2024〕57号）等 6 份国家级文件编制。",
 "tools": [
  {
   "no": 1,
   "mechanism": "一、强化土地指标统筹",
   "category": "全面实施",
   "lead": "自然资源部、省自然资源厅",
   "policyTitle": "永久基本农田布局优化调整",
   "detail": "整治区域内涉及永久基本农田调整的，编制调整方案并按已有规定办理，确保新增永久基本农田面积原则上不少于调整面积的5%，调整规模原则上不超过所涉乡镇永久基本农田划定面积的5%，坚持「先补后调」「可实测、可追溯」。",
   "innovation": "",
   "deps": [
    1,
    2,
    3
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "一",
   "mechShort": "强化土地指标统筹",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 2,
   "mechanism": "一、强化土地指标统筹",
   "category": "全面实施",
   "lead": "自然资源部、省自然资源厅",
   "policyTitle": "节余建设用地指标省域流转",
   "detail": "整治验收后腾退的建设用地，在保障试点乡镇农民安置、农村基础设施建设、公益事业等用地的前提下，重点用于农村一二三产业融合发展，节余指标可纳入省级管理平台在省域范围内调剂使用，收益用于乡村振兴。",
   "innovation": "",
   "deps": [
    1,
    2
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "一",
   "mechShort": "强化土地指标统筹",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 3,
   "mechanism": "一、强化土地指标统筹",
   "category": "全面实施",
   "lead": "自然资源部、省自然资源厅",
   "policyTitle": "补充耕地指标有偿调剂",
   "detail": "整治新产生的补充耕地指标在优先满足县域自行平衡需要后确有剩余的，可统一纳入省级管理平台在省域范围内调剂，实现耕地数量、质量、生态「三位一体」保护与指标价值转化。",
   "innovation": "",
   "deps": [
    2,
    3
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "一",
   "mechShort": "强化土地指标统筹",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 4,
   "mechanism": "二、支持空间优化和生态修复",
   "category": "全面实施",
   "lead": "县（市、区）人民政府、自然资源主管部门",
   "policyTitle": "农用地整理（耕地集中连片整治）",
   "detail": "整体推进农用地整理，包括耕地质量提升、永久基本农田优化布局、零星破碎耕地整合、高标准农田建设、农田基础设施完善等，通过小田并大田、坡改梯、旱改水实现耕地集中连片与质量提升。",
   "innovation": "",
   "deps": [
    1,
    2
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "二",
   "mechShort": "支持空间优化和生态修复",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 5,
   "mechanism": "二、支持空间优化和生态修复",
   "category": "全面实施",
   "lead": "县（市、区）人民政府、自然资源主管部门",
   "policyTitle": "建设用地整理与低效用地盘活",
   "detail": "整体推进建设用地整理，包括农村宅基地整理、空心村整治、闲置低效建设用地盘活、村庄布局优化等，通过拆旧建新、空间腾挪，盘活存量建设用地，提升节约集约利用水平。",
   "innovation": "",
   "deps": [
    1,
    2
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "二",
   "mechShort": "支持空间优化和生态修复",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 6,
   "mechanism": "二、支持空间优化和生态修复",
   "category": "全面实施",
   "lead": "自然资源、生态环境、水利、林草主管部门",
   "policyTitle": "乡村生态保护修复",
   "detail": "整体推进乡村生态保护修复，包括国土绿化、湿地保护恢复、水土流失治理、流域水环境治理、矿山生态修复、地质灾害治理等，推动山水林田湖草沙一体化保护修复。",
   "innovation": "",
   "deps": [
    1,
    2
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "二",
   "mechShort": "支持空间优化和生态修复",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 7,
   "mechanism": "三、优化产权和土地管理政策",
   "category": "试点推进",
   "lead": "自然资源部、省自然资源厅",
   "policyTitle": "「三区三线」局部优化调整",
   "detail": "在确保耕地、生态保护等目标前提下，对「三区三线」进行局部优化。实施指南附录明确「三区三线」调整情形和程序，包括城镇开发边界允许和禁止优化调整情形，纳入实施方案一并报批。",
   "innovation": "",
   "deps": [
    3
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "三",
   "mechShort": "优化产权和土地管理政策",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 8,
   "mechanism": "三、优化产权和土地管理政策",
   "category": "试点推进",
   "lead": "县（市、区）人民政府、自然资源主管部门",
   "policyTitle": "集体经营性建设用地入市",
   "detail": "整治归并、零星插花的存量集体建设用地，依规划属工业、商业等经营性用途的，土地所有权人可通过出让、出租等方式交由单位或个人使用，实现「先整治、再验收、后入市」，拓宽乡村振兴资金来源。",
   "innovation": "",
   "deps": [
    2
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "三",
   "mechShort": "优化产权和土地管理政策",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 9,
   "mechanism": "四、加大资金保障和金融政策支持",
   "category": "全面实施",
   "lead": "省自然资源厅、国家开发银行、农业发展银行",
   "policyTitle": "政策性金融资金支持",
   "detail": "支持利用政策性金融资金加快推进土地综合整治和生态保护修复，国开行、农发行组建综合服务团队，在贷款期限、额度、利率上给予优惠，最长可达30年，设立绿色通道，提供全链条融资服务。",
   "innovation": "",
   "deps": [
    4
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "四",
   "mechShort": "加大资金保障和金融政策支持",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 10,
   "mechanism": "四、加大资金保障和金融政策支持",
   "category": "全面实施",
   "lead": "省财政厅、省发展改革委、各行业主管部门",
   "policyTitle": "涉农资金统筹整合",
   "detail": "统筹整合高标准农田建设、乡村振兴、土地整理、农房改造、增减挂钩、人居环境整治、废弃矿山生态修复等各条线涉农资金，形成资金合力；统筹新增建设用地有偿使用费、土地出让收入、耕地开垦费、指标交易费等，支持整治项目。",
   "innovation": "",
   "deps": [
    1,
    2
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "四",
   "mechShort": "加大资金保障和金融政策支持",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 11,
   "mechanism": "四、加大资金保障和金融政策支持",
   "category": "全面实施",
   "lead": "省发展改革委、省财政厅",
   "policyTitle": "地方政府专项债支持",
   "detail": "用好地方政府专项债自审自发机制，支持符合条件的全域土地综合整治项目；鼓励申报国家超长期特别国债等资金，严格把控资金平衡，防止新增地方政府隐性债务。",
   "innovation": "",
   "deps": [
    2
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "四",
   "mechShort": "加大资金保障和金融政策支持",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 12,
   "mechanism": "六、优化审批管理服务",
   "category": "全面实施",
   "lead": "省、市自然资源主管部门、县（市、区）人民政府",
   "policyTitle": "实施方案编制与联合审查",
   "detail": "按照实施方案编制大纲要求编制项目实施方案，经县级政府组织、市级初审、省级联合审查后批复实施；审查重点覆盖规划符合性、永久基本农田调整、「三区三线」优化、资金平衡等方面，实行「一次性编制、一次性审查」。",
   "innovation": "",
   "deps": [
    2,
    3
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "六",
   "mechShort": "优化审批管理服务",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 13,
   "mechanism": "六、优化审批管理服务",
   "category": "全面实施",
   "lead": "省自然资源厅、市（州）自然资源主管部门",
   "policyTitle": "全流程管理与绩效评价",
   "detail": "建立从前期谋划、方案审批、项目实施、竣工验收、后期管护的全链条管理机制，明确省、市、县三级职责；验收采取「子项目验收—县级初验—市级验收—省级评估」模式，依托「天空地网」综合监测体系和自然资源「一张图」监管。",
   "innovation": "",
   "deps": [
    3,
    6
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "六",
   "mechShort": "优化审批管理服务",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 14,
   "mechanism": "七、鼓励多方参与和权益保障",
   "category": "全面实施",
   "lead": "自然资源部、省自然资源厅",
   "policyTitle": "负面清单与底线管控",
   "detail": "严守底线规范开展整治，划定负面清单：禁止大拆大建、变相占用永久基本农田、违规调整生态保护红线、搞人造景观、增加地方政府隐性债务等；维护群众合法权益，尊重农民意愿。",
   "innovation": "",
   "deps": [
    5
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "七",
   "mechShort": "鼓励多方参与和权益保障",
   "basis": [
    "国家"
   ]
  },
  {
   "no": 15,
   "mechanism": "七、鼓励多方参与和权益保障",
   "category": "全面实施",
   "lead": "县（市、区）人民政府、乡镇（街道）",
   "policyTitle": "群众参与和权属调整机制",
   "detail": "实施方案须经村民会议三分之二以上成员或村民代表同意，在项目区公示不少于15日；同步编制权属调整方案，推广「村民议事堂」「代表跑团」等群众参与机制，保障农民知情权、参与权、收益权。",
   "innovation": "",
   "deps": [
    2,
    6
   ],
   "leadLevel": "国家",
   "scope": "national",
   "scopeRank": 4,
   "mechNo": "七",
   "mechShort": "鼓励多方参与和权益保障",
   "basis": [
    "国家"
   ]
  }
 ],
 "docs": [
  {
   "no": 1,
   "name": "自然资源部关于开展全域土地综合整治试点工作的通知",
   "docNo": "自然资发〔2019〕194号",
   "issuer": "自然资源部",
   "date": "2019-12-10",
   "status": "现行有效",
   "grade": "核验A级",
   "url": "https://www.gov.cn/zhengce/zhengceku/2019-12/18/content_5462127.htm",
   "attachUrl": "",
   "sourceNote": "",
   "level": "国家",
   "levelHit": "自然资源部",
   "rank": 4,
   "caseId": "00",
   "gradeLetter": "A",
   "isRepealed": false
  },
  {
   "no": 2,
   "name": "自然资源部关于学习运用「千万工程」经验深入推进全域土地综合整治工作的意见",
   "docNo": "自然资发〔2024〕149号",
   "issuer": "自然资源部",
   "date": "2024-08-05",
   "status": "现行有效",
   "grade": "核验A级",
   "url": "https://www.gov.cn/zhengce/zhengceku/202408/content_6968946.htm",
   "attachUrl": "",
   "sourceNote": "",
   "level": "国家",
   "levelHit": "自然资源部",
   "rank": 4,
   "caseId": "00",
   "gradeLetter": "A",
   "isRepealed": false
  },
  {
   "no": 3,
   "name": "自然资源部办公厅关于印发《全域土地综合整治实施指南（试行）》的通知",
   "docNo": "自然资办发〔2024〕57号",
   "issuer": "自然资源部办公厅",
   "date": "2024-12",
   "status": "现行有效",
   "grade": "核验A级",
   "url": "https://www.gov.cn/zhengce/zhengceku/202412/content_7000027.htm",
   "attachUrl": "",
   "sourceNote": "",
   "level": "国家",
   "levelHit": "自然资源部",
   "rank": 4,
   "caseId": "00",
   "gradeLetter": "A",
   "isRepealed": false
  },
  {
   "no": 4,
   "name": "自然资源部办公厅关于支持利用政策性金融资金加快推进土地综合整治和生态保护修复的通知",
   "docNo": "自然资办函〔2024〕522号",
   "issuer": "自然资源部办公厅",
   "date": "2024",
   "status": "现行有效",
   "grade": "核验A级",
   "url": "https://dnr.sc.gov.cn/scdnr/scqt/2025/12/2/c36c1c449df1452fa1f2e7f6da43ae39.shtml",
   "attachUrl": "",
   "sourceNote": "",
   "level": "国家",
   "levelHit": "自然资源部",
   "rank": 4,
   "caseId": "00",
   "gradeLetter": "A",
   "isRepealed": false
  },
  {
   "no": 5,
   "name": "自然资源部办公厅关于严守底线规范开展全域土地综合整治试点工作有关要求的通知",
   "docNo": "自然资办发〔2023〕15号",
   "issuer": "自然资源部办公厅",
   "date": "2023-04",
   "status": "现行有效",
   "grade": "核验A级",
   "url": "https://www.gov.cn/zhengce/zhengceku/2023-04/26/content_5753236.htm",
   "attachUrl": "",
   "sourceNote": "",
   "level": "国家",
   "levelHit": "自然资源部",
   "rank": 4,
   "caseId": "00",
   "gradeLetter": "A",
   "isRepealed": false
  },
  {
   "no": 6,
   "name": "永久基本农田保护红线管理办法",
   "docNo": "自然资源部、农业农村部令第17号",
   "issuer": "自然资源部、农业农村部",
   "date": "2025-08-29公布／2025-10-01施行",
   "status": "现行有效",
   "grade": "核验A级",
   "url": "https://www.gov.cn/gongbao/2025/issue_12366/202510/content_7046041.html",
   "attachUrl": "",
   "sourceNote": "核验说明：原司法部链接 302 自跳转（Location 指向自身）已打不开，已换为 2025 年第 30 号《国务院公报》上的同一部令（2026-09-28 复验 200）",
   "level": "国家",
   "levelHit": "自然资源部",
   "rank": 4,
   "caseId": "00",
   "gradeLetter": "A",
   "isRepealed": false
  }
 ],
 "mechanisms": [
  {
   "name": "一、强化土地指标统筹",
   "short": "强化土地指标统筹",
   "no": "一",
   "count": 3,
   "innovations": 0
  },
  {
   "name": "二、支持空间优化和生态修复",
   "short": "支持空间优化和生态修复",
   "no": "二",
   "count": 3,
   "innovations": 0
  },
  {
   "name": "三、优化产权和土地管理政策",
   "short": "优化产权和土地管理政策",
   "no": "三",
   "count": 2,
   "innovations": 0
  },
  {
   "name": "四、加大资金保障和金融政策支持",
   "short": "加大资金保障和金融政策支持",
   "no": "四",
   "count": 3,
   "innovations": 0
  },
  {
   "name": "六、优化审批管理服务",
   "short": "优化审批管理服务",
   "no": "六",
   "count": 2,
   "innovations": 0
  },
  {
   "name": "七、鼓励多方参与和权益保障",
   "short": "鼓励多方参与和权益保障",
   "no": "七",
   "count": 2,
   "innovations": 0
  }
 ],
 "levels": {
  "localTools": 0,
  "provinceTools": 0,
  "nationalTools": 15,
  "provinceBasis": 0,
  "nationalBasis": 0,
  "localDocs": 0,
  "provinceDocs": 0,
  "nationalDocs": 6
 },
 "stats": {
  "tools": 15,
  "docs": 6,
  "innovations": 0,
  "implementation": 13,
  "pilot": 2,
  "gradeA": 6,
  "gradeB": 0,
  "revoked": 0,
  "mechanisms": 6
 }
};

export const POLICY_META = {
 "contentHash": "856eec94d234e396",
 "totalCases": 47,
 "totalTools": 743,
 "totalDocs": 748,
 "totalInnovations": 246,
 "totalGradeA": 622,
 "totalGradeB": 126,
 "uniqueDocs": 453,
 "totalImplementation": 603,
 "totalPilot": 140,
 "totalLocalTools": 732,
 "totalProvinceTools": 263,
 "totalNationalTools": 1,
 "docLevels": {
  "乡镇": 0,
  "区县": 201,
  "市": 321,
  "省": 225,
  "国家": 1
 },
 "mechanisms": [
  {
   "name": "一、强化土地指标统筹",
   "short": "强化土地指标统筹",
   "no": "一",
   "count": 105,
   "innovations": 46
  },
  {
   "name": "二、支持空间优化和生态修复",
   "short": "支持空间优化和生态修复",
   "no": "二",
   "count": 259,
   "innovations": 73
  },
  {
   "name": "三、优化产权和土地管理政策",
   "short": "优化产权和土地管理政策",
   "no": "三",
   "count": 144,
   "innovations": 22
  },
  {
   "name": "四、加大资金保障和金融政策支持",
   "short": "加大资金保障和金融政策支持",
   "no": "四",
   "count": 88,
   "innovations": 36
  },
  {
   "name": "五、加大区域综合整治实施力度",
   "short": "加大区域综合整治实施力度",
   "no": "五",
   "count": 19,
   "innovations": 17
  },
  {
   "name": "六、优化审批管理服务",
   "short": "优化审批管理服务",
   "no": "六",
   "count": 61,
   "innovations": 26
  },
  {
   "name": "七、鼓励多方参与和权益保障",
   "short": "鼓励多方参与和权益保障",
   "no": "七",
   "count": 67,
   "innovations": 26
  }
 ]
};

/** 按案例编号取政策工具数据（编号为字符串，如 '01'） */
export function getCase(id) {
  const key = String(id).padStart(2, '0');
  return CASES.find(c => c.id === key) || null;
}

/** 按批次分组 */
export function groupByBatch() {
  const order = ['第一批', '第二批', '第三批'];
  return order.map(batch => ({ batch, cases: CASES.filter(c => c.batch === batch) }));
}
