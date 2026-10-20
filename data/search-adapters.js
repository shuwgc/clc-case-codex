/*
 * 生成物，勿手改。来源：tools/external/search-adapters.json
 * 生成命令：npm run search:adapters
 * 说明：联盟式站内检索的来源白名单。客户端只允许向这些域名发起检索请求。
 */
export const SEARCH_ADAPTERS = [
  {
    "siteId": "mnr-nat-news",
    "region": "国家",
    "siteName": "自然资源部",
    "mode": "html-parse",
    "searchUrlTemplate": "https://search.mnr.gov.cn/was5/web/search?channelid=227454&searchword={q}",
    "resultLinkPattern": "^https://(?:www|search)\\.mnr\\.gov\\.cn/",
    "verified": "2026-10-12",
    "summary": "自然资源部官网全文检索（was5）"
  },
  {
    "siteId": "mee-gov",
    "region": "国家",
    "siteName": "生态环境部",
    "mode": "html-parse",
    "searchUrlTemplate": "https://www.mee.gov.cn/was5/web/search?channelid=270514&searchword={q}",
    "resultLinkPattern": "^https://www\\.mee\\.gov\\.cn/",
    "verified": "2026-10-12",
    "pages": 3,
    "pageParam": "page",
    "summary": "生态环境部官网全文检索（was5）"
  },
  {
    "siteId": "gov-cn",
    "region": "国家",
    "siteName": "中国政府网",
    "mode": "handoff",
    "searchUrlTemplate": "https://sousuo.www.gov.cn/sousuo/search.shtml?code=17da70961a7&searchWord={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "中国政府网 · 国务院政策文件库检索"
  },
  {
    "siteId": "anhui-nr",
    "region": "安徽",
    "siteName": "安徽省自然资源厅",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zrzyt.ah.gov.cn/site/search/49631951?typeCode=articleNews%2CpictureNews%2CvideoNews%2CpolicyDoc%2CexplainDoc%2CmessageBoard%2CinterviewInfo%2CcollectInfo%2Csurvey%2Cpublic_content%2CordinaryPage&isAllSite=false&fuzzySearch=true&fromCode=&sort=intelligent&orderType=0&platformCode=anhui_szbm_6&keywords={q}&input=%E6%90%9C%E7%B4%A2",
    "resultLinkPattern": "^https://zrzyt\\.ah\\.gov\\.cn/",
    "verified": "2026-10-12",
    "pages": 3,
    "pageParam": "pageIndex",
    "summary": "安徽省自然资源厅站内全文检索"
  },
  {
    "siteId": "beijing-nr",
    "region": "北京",
    "siteName": "北京市规划和自然资源委员会",
    "mode": "handoff",
    "searchUrlTemplate": "https://ghzrzyw.beijing.gov.cn/so/s?siteCode=1100000049&qt={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12"
  },
  {
    "siteId": "chongqing-nr",
    "region": "重庆",
    "siteName": "重庆市规划和自然资源局",
    "mode": "handoff",
    "searchUrlTemplate": "https://ghzrzyj.cq.gov.cn/cqs/searchResultPC.html?tenantId=13&configTenantId=13&areaCode=500000122&searchWord={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "重庆市规划和自然资源局 · 全市统一检索入口"
  },
  {
    "siteId": "gd-gov-dept-news",
    "region": "广东",
    "siteName": "广东省人民政府门户网站",
    "mode": "handoff",
    "searchUrlTemplate": "https://search.gd.gov.cn/search/all/2?keyword={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "广东省人民政府门户 · 全省政策与要闻检索"
  },
  {
    "siteId": "guangdong-nr",
    "region": "广东",
    "siteName": "广东省自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://search.gd.gov.cn/search/all/153?keyword={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "广东省自然资源厅 · 经省统一搜索平台检索"
  },
  {
    "siteId": "guizhou-nr",
    "region": "贵州",
    "siteName": "贵州省自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://zrzy.guizhou.gov.cn/so/search.shtml?tenantId=168&dataTypeId=310&searchWord={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "贵州省自然资源厅 · 厅网站群检索"
  },
  {
    "siteId": "hainan-nr",
    "region": "海南",
    "siteName": "海南省自然资源和规划厅",
    "mode": "json-api",
    "searchUrlTemplate": "https://lr.hainan.gov.cn/igs/front/search.jhtml?code=460cba3871804a4f8f696b6429e0fa08&searchWord={q}&siteId=33&pageNumber=1&pageSize=10",
    "resultLinkPattern": "^https://lr\\.hainan\\.gov\\.cn/",
    "verified": "2026-10-12",
    "pageUrlTemplate": "https://lr.hainan.gov.cn/wzss/search.html?siteId=33&pageSize=10&searchWord={q}",
    "json": {
      "listPath": "page.content",
      "titleField": "title",
      "urlField": "url",
      "textFields": [
        "content"
      ]
    },
    "allowHosts": [
      "lr.hainan.gov.cn"
    ],
    "pages": 3,
    "pageParam": "pageNumber",
    "summary": "海南省自然资源和规划厅 IGS 检索接口（siteId=33）"
  },
  {
    "siteId": "hebei-nr",
    "region": "河北",
    "siteName": "河北省自然资源厅",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zrzy.hebei.gov.cn/cms/www/search/fullText/101603153981093s100.do?full_text_eq={q}&channel_id_kt=100",
    "resultLinkPattern": "^https://(?:zrzy.hebei.gov.cn|www.mnr.gov.cn)/",
    "verified": "2026-10-12",
    "allowHosts": [
      "www.mnr.gov.cn"
    ],
    "summary": "河北省自然资源厅站内全文检索"
  },
  {
    "siteId": "henan-nr",
    "region": "河南",
    "siteName": "河南省自然资源厅",
    "mode": "json-api",
    "searchUrlTemplate": "https://searchapi.henan.gov.cn/open/api/external-new?keywords={q}&siteId=4500000014&pageNum=1&pageSize=10",
    "resultLinkPattern": "^https://dnr\\.henan\\.gov\\.cn/",
    "verified": "2026-10-12",
    "json": {
      "listPath": "data.datas",
      "titleField": "title",
      "urlField": [
        "selfUrl",
        "outUrl"
      ],
      "textFields": [
        "content",
        "summary",
        "subtitle"
      ]
    },
    "allowHosts": [
      "dnr.henan.gov.cn"
    ],
    "summary": "河南省统一检索开放接口（searchapi.henan.gov.cn）"
  },
  {
    "siteId": "hubei-nr",
    "region": "湖北",
    "siteName": "湖北省自然资源厅",
    "mode": "json-api",
    "searchUrlTemplate": "https://zrzyt.hubei.gov.cn/igs/front/search.jhtml?code=03074fc5eaae4cd5b5be57bd3fe4e9b6&siteId=23&pageSize=10&searchWord={q}",
    "resultLinkPattern": "^https?://zrzyt.hubei.gov.cn/",
    "verified": "2026-10-15",
    "pageUrlTemplate": "https://zrzyt.hubei.gov.cn/site/zrzyt/search.html?searchWord={q}&siteId=23&pageSize=10",
    "json": {
      "listPath": "page.content",
      "titleField": "title",
      "urlField": "url",
      "textFields": [
        "content"
      ]
    },
    "allowHosts": [
      "zrzyt.hubei.gov.cn"
    ],
    "pages": 3,
    "pageParam": "pageNumber",
    "summary": "湖北省自然资源厅 IGS 检索接口（TRS isearch，siteId=23）"
  },
  {
    "siteId": "hunan-nr",
    "region": "湖南",
    "siteName": "湖南省自然资源厅",
    "mode": "html-parse",
    "searchUrlTemplate": "https://searching.hunan.gov.cn/hunan/114000000/news?q={q}",
    "resultLinkPattern": "^https://zrzyt\\.hunan\\.gov\\.cn/",
    "verified": "2026-10-12",
    "allowHosts": [
      "zrzyt.hunan.gov.cn"
    ],
    "summary": "湖南省统一搜索平台 · 省自然资源厅频道"
  },
  {
    "siteId": "jilin-nr",
    "region": "吉林",
    "siteName": "吉林省自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://intellsearch.jl.gov.cn/search/index.html?a=jl2&q={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "吉林省自然资源厅 · 经省统一智能检索"
  },
  {
    "siteId": "jiangsu-nr",
    "region": "江苏",
    "siteName": "江苏省自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://www.jiangsu.gov.cn/jsearchfront/search.do?websiteid=320000000100000&searchid=12&p=1&tpl=38&q={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "江苏省自然资源厅 · 经省政府统一检索覆盖厅网站"
  },
  {
    "siteId": "liaoning-nr",
    "region": "辽宁",
    "siteName": "辽宁省自然资源厅",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zrzy.ln.gov.cn/search/pcRender?sr=dateTime%20desc&searchArea=title&app=b37590e6e3544623a6e521c6072ba2ea&pageId=113ad65e611549f183cd3e21b7fd980f&siteId=0670765f18fc4f03bcdecd637cec8aba&pNo=1&q={q}",
    "resultLinkPattern": "^https://zrzy\\.ln\\.gov\\.cn/",
    "verified": "2026-10-12",
    "pages": 3,
    "pageParam": "pNo",
    "summary": "辽宁省自然资源厅站内检索（pcRender）"
  },
  {
    "siteId": "ningxia-nr",
    "region": "宁夏",
    "siteName": "宁夏回族自治区自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://zrzyt.nx.gov.cn/nxsearch/search.html?code=17c7942a304&tenantId=31&searchWord={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "宁夏自然资源厅 · 全区站群检索"
  },
  {
    "siteId": "shaanxi-nr-land",
    "region": "陕西",
    "siteName": "陕西省自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://zrzyt.shaanxi.gov.cn/sxsearch-a/search.shtml?code=19014c9eb1e&dataTypeId=20455&searchWord={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "陕西省自然资源厅 · 厅站群检索"
  },
  {
    "siteId": "shanxi-nr",
    "region": "山西",
    "siteName": "山西省自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://zrzyt.shanxi.gov.cn/dept_search/#/Door?keywords={q}&siteTag=1&siteid=90",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "山西省自然资源厅 · 部门检索（接口不响应关键词，如实标注）"
  },
  {
    "siteId": "sichuan-nr",
    "region": "四川",
    "siteName": "四川省自然资源厅",
    "mode": "html-parse",
    "searchUrlTemplate": "https://dnr.sc.gov.cn/guestweb4/s?uc=1&siteCode=5100000009&column=%E5%85%A8%E9%83%A8&searchWord={q}",
    "resultLinkPattern": "^https://(?:dnr|www)\\.sc\\.gov\\.cn/",
    "verified": "2026-10-12",
    "allowHosts": [
      "dnr.sc.gov.cn",
      "www.sc.gov.cn"
    ],
    "summary": "四川省自然资源厅站内全文检索（guestweb4）"
  },
  {
    "siteId": "jiuquan-nr",
    "region": "甘肃",
    "siteName": "酒泉市自然资源局",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zrzy.jiuquan.gov.cn/guestweb4/s?uc=1&siteCode=6209000030&column=%E5%85%A8%E9%83%A8&searchWord={q}",
    "resultLinkPattern": "^https?://zrzy\\.jiuquan\\.gov\\.cn/",
    "verified": "2026-10-15",
    "allowHosts": [
      "zrzy.jiuquan.gov.cn"
    ],
    "summary": "酒泉市自然资源局站内全文检索（guestweb4，甘肃市级替代源）"
  },
  {
    "siteId": "tianjin-nr",
    "region": "天津",
    "siteName": "天津市规划和自然资源局",
    "mode": "handoff",
    "searchUrlTemplate": "https://ghhzrzy.tj.gov.cn/searchsite/tjsghhzrzyj_244/search.html?siteId=86&searchWord={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "天津市规划和自然资源局 · 局网站检索"
  },
  {
    "siteId": "tibet-nr",
    "region": "西藏",
    "siteName": "西藏自治区自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://zrzyt.xizang.gov.cn/site/zrzyt/search.html?searchWord={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "西藏自治区自然资源厅 · 厅网站检索"
  },
  {
    "siteId": "xinjiang-nr",
    "region": "新疆",
    "siteName": "新疆维吾尔自治区自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://zrzyt.xinjiang.gov.cn/guestweb5/html/searchResult.html?searchWord={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "新疆维吾尔自治区自然资源厅 · 厅网站检索"
  },
  {
    "siteId": "zhejiang-nr",
    "region": "浙江",
    "siteName": "浙江省自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://zxts.zjzwfw.gov.cn/zwmhww/#/home/index/search?areacode=330000&orgId=1534961394984701953&keyword={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "浙江省自然资源厅 · 经浙江政务服务网检索"
  },
  {
    "siteId": "xian-nr",
    "region": "西安",
    "siteName": "西安市自然资源和规划局",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zygh.xa.gov.cn/search.html?keywords={q}",
    "resultLinkPattern": "^https://zygh\\.xa\\.gov\\.cn/",
    "verified": "2026-10-12",
    "summary": "西安市自然资源和规划局站内检索"
  },
  {
    "siteId": "yanan-nr",
    "region": "延安",
    "siteName": "延安市自然资源局",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zrzy.yanan.gov.cn/search.html?keywords={q}",
    "resultLinkPattern": "^https://zrzy\\.yanan\\.gov\\.cn/",
    "verified": "2026-10-12",
    "browserHeaders": true,
    "summary": "延安市自然资源局站内检索（WAF 需完整浏览器头）"
  },
  {
    "siteId": "weinan-nr",
    "region": "渭南",
    "siteName": "渭南市自然资源和规划局",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zrzyghj.weinan.gov.cn/search.html?keywords={q}",
    "resultLinkPattern": "^https://zrzyghj\\.weinan\\.gov\\.cn/",
    "verified": "2026-10-12",
    "summary": "渭南市自然资源和规划局站内检索"
  },
  {
    "siteId": "baoding-nr",
    "region": "保定",
    "siteName": "保定市自然资源和规划局",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zrgh.baoding.gov.cn/cms/www/search/fullText/10549576867524800512s117.do?title_eq={q}",
    "resultLinkPattern": "^https://zrgh\\.baoding\\.gov\\.cn/",
    "verified": "2026-10-12",
    "summary": "保定市自然资源和规划局站内标题检索"
  },
  {
    "siteId": "langfang-nr",
    "region": "廊坊",
    "siteName": "廊坊市自然资源和规划局",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zrghj.lf.gov.cn/cms/www/search/fullText/10536608155926687744s115.do?title_eq={q}",
    "resultLinkPattern": "^https://zrghj\\.lf\\.gov\\.cn/",
    "verified": "2026-10-12",
    "summary": "廊坊市自然资源和规划局站内标题检索"
  },
  {
    "siteId": "bazhong-nr",
    "region": "巴中",
    "siteName": "巴中市自然资源和规划局",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zrzygh.cnbz.gov.cn/site/search/6819741?keywords={q}",
    "resultLinkPattern": "^https://zrzygh\\.cnbz\\.gov\\.cn/",
    "verified": "2026-10-12",
    "summary": "巴中市自然资源和规划局站内检索"
  },
  {
    "siteId": "yaan-nr",
    "region": "雅安",
    "siteName": "雅安市自然资源和规划局",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zrzyhghj.yaan.gov.cn/search.html?q={q}",
    "resultLinkPattern": "^https://zrzyhghj\\.yaan\\.gov\\.cn/",
    "verified": "2026-10-12",
    "summary": "雅安市自然资源和规划局站内检索"
  },
  {
    "siteId": "guangxi-nr",
    "region": "广西",
    "siteName": "广西壮族自治区自然资源厅",
    "mode": "json-api",
    "searchUrlTemplate": "https://dnr.gxzf.gov.cn/irs-common-search/search?code=1871bd81d84&sign=9cc99c9d-94aa-44b4-aa79-41227a5385d7&searchWord={q}&orderBy=time&searchBy=all&granularity=ALL&pageNo=1&pageSize=20",
    "resultLinkPattern": "^https://dnr\\.gxzf\\.gov\\.cn/",
    "verified": "2026-10-12",
    "pageUrlTemplate": "https://dnr.gxzf.gov.cn/irs-common-search/search?code=1871bd81d84&sign=9cc99c9d-94aa-44b4-aa79-41227a5385d7&searchWord={q}",
    "method": "POST",
    "apiUrl": "https://dnr.gxzf.gov.cn/irs/front/search",
    "bodyTemplate": {
      "code": "1871bd81d84",
      "dataTypeId": 5735,
      "configCode": "",
      "searchWord": "{q}",
      "orderBy": "time",
      "searchBy": "all",
      "appendixType": "",
      "granularity": "ALL",
      "filters": [],
      "pageNo": "{page}",
      "pageSize": 20
    },
    "json": {
      "listPath": "data.middle.listAndBox",
      "itemPath": "data",
      "titleField": "title",
      "urlField": "url",
      "textFields": [
        "content",
        "title_no_tag"
      ]
    },
    "allowHosts": [
      "dnr.gxzf.gov.cn"
    ],
    "pages": 5,
    "summary": "广西自然资源厅 IRS 检索接口（POST，dataTypeId=5735）"
  },
  {
    "siteId": "shanghai-nr",
    "region": "上海",
    "siteName": "上海市规划和自然资源局",
    "mode": "json-api",
    "searchUrlTemplate": "https://ghzyj.sh.gov.cn/websearch/#search/query={q}",
    "resultLinkPattern": "^https://ghzyj.sh.gov.cn/",
    "verified": "2026-10-15",
    "pageUrlTemplate": "https://ghzyj.sh.gov.cn/websearch/#search/query={q}",
    "method": "POST",
    "apiUrl": "https://ss.shanghai.gov.cn/manda-app/api/app/search/v1/jjlk53/search",
    "bodyTemplate": {
      "cid": "jjlk53",
      "uid": "jjlk53",
      "query": "{q}",
      "current": "{page}",
      "size": 10
    },
    "json": {
      "listPath": "result.items",
      "titleField": "title.raw",
      "urlField": "url.raw",
      "textFields": [
        "date.raw"
      ]
    },
    "allowHosts": [
      "ss.shanghai.gov.cn",
      "ghzyj.sh.gov.cn"
    ],
    "pages": 3,
    "summary": "上海市规划和自然资源局 manda 搜索接口（POST，token=jjlk53）"
  },
  {
    "siteId": "fujian-nr",
    "region": "福建",
    "siteName": "福建省自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://zrzyt.fujian.gov.cn/ssp/main/index.html?key={q}&siteId=ff8080816e59baf3016e5e6dcbbc3f",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "福建省自然资源厅 · TRS 搜索平台（SPA）"
  },
  {
    "siteId": "jiangxi-nr",
    "region": "江西",
    "siteName": "江西省自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://www.jiangxi.gov.cn/jrobot/search.do?q={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-12",
    "summary": "江西省自然资源厅 · 经省政府统一检索（待复核）"
  },
  {
    "siteId": "xianning-nr",
    "region": "咸宁",
    "siteName": "咸宁市自然资源和城乡建设局",
    "mode": "handoff",
    "searchUrlTemplate": "https://zrzyhghj.xianning.gov.cn/ssp/main/index.html?siteId=8ada93e184a906cb0184c140f9590083&keyWord={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-15",
    "pageUrlTemplate": "https://zrzyhghj.xianning.gov.cn/ssp/main/index.html?siteId=8ada93e184a906cb0184c140f9590083&keyWord={q}",
    "allowHosts": [
      "zrzyhghj.xianning.gov.cn"
    ],
    "summary": "咸宁市自然资源和城乡建设局站内检索（TRS SSP SPA，仅跳转）"
  },
  {
    "siteId": "qinghai-nr",
    "region": "青海",
    "siteName": "青海省自然资源厅",
    "mode": "html-parse",
    "searchUrlTemplate": "https://zrzyt.qinghai.gov.cn/s?sid=0&wd={q}",
    "resultLinkPattern": "^https://zrzyt.qinghai.gov.cn/",
    "verified": "2026-10-15",
    "pageUrlTemplate": "https://zrzyt.qinghai.gov.cn/s?sid=0&wd={q}",
    "allowHosts": [
      "zrzyt.qinghai.gov.cn"
    ],
    "pages": 3,
    "pageParam": "p",
    "linkPathPattern": "content_[0-9]+$",
    "sessionCookie": {
      "name": "SessionVerify",
      "bootstrap": "/"
    },
    "summary": "青海省自然资源厅全文检索（动易，SessionVerify 握手）"
  },
  {
    "siteId": "shandong-nr",
    "region": "山东",
    "siteName": "山东省自然资源厅",
    "mode": "json-api",
    "searchUrlTemplate": "http://dnr.shandong.gov.cn/irs-c-web/search.shtml?code=18d8112db78&searchWord={q}",
    "resultLinkPattern": "^https?://dnr\\.shandong\\.gov\\.cn/",
    "verified": "2026-10-15",
    "pageUrlTemplate": "http://dnr.shandong.gov.cn/irs-c-web/search.shtml?code=18d8112db78&searchWord={q}",
    "method": "POST",
    "apiUrl": "http://dnr.shandong.gov.cn/irs/front/search",
    "bodyTemplate": {
      "code": "18d8112db78",
      "dataTypeId": 165,
      "configCode": "",
      "searchWord": "{q}",
      "orderBy": "time",
      "searchBy": "all",
      "appendixType": "",
      "granularity": "ALL",
      "filters": [],
      "pageNo": "{page}",
      "pageSize": 10
    },
    "json": {
      "listPath": "data.middle.listAndBox",
      "itemPath": "data",
      "titleField": "title",
      "urlField": "url",
      "textFields": [
        "content",
        "title_no_tag"
      ]
    },
    "allowHosts": [
      "dnr.shandong.gov.cn"
    ],
    "pages": 3,
    "keepHttp": true,
    "summary": "山东省自然资源厅 IRS 检索接口（POST，http 明文，dataTypeId=165）"
  },
  {
    "siteId": "heilongjiang-nr",
    "region": "黑龙江",
    "siteName": "黑龙江省自然资源厅",
    "mode": "json-api",
    "searchUrlTemplate": "https://zrzyt.hlj.gov.cn/so/s?qt={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-15",
    "pageUrlTemplate": "https://zrzyt.hlj.gov.cn/so/s?qt={q}",
    "method": "POST",
    "apiUrl": "https://api.so-gov.cn/query/s",
    "bodyTemplate": {
      "siteCode": "2300000038",
      "qt": "{q}",
      "page": "{page}",
      "rows": "10"
    },
    "bodyType": "form",
    "json": {
      "listPath": "resultDocs",
      "itemPath": "data",
      "titleField": "title",
      "urlField": "url",
      "textFields": [
        "summary"
      ]
    },
    "allowHosts": [
      "zrzyt.hlj.gov.cn",
      "api.so-gov.cn"
    ],
    "pages": 3,
    "summary": "黑龙江省自然资源厅站内检索（so-gov 云搜索 API，自动取回）"
  },
  {
    "siteId": "neimenggu-nr",
    "region": "内蒙古",
    "siteName": "内蒙古自治区自然资源厅",
    "mode": "handoff",
    "searchUrlTemplate": "https://zrzy.nmg.gov.cn/nmg_dept_search/#/Door?keywords={q}",
    "resultLinkPattern": "",
    "verified": "2026-10-15",
    "pageUrlTemplate": "https://zrzy.nmg.gov.cn/nmg_dept_search/#/Door?keywords={q}",
    "allowHosts": [
      "zrzy.nmg.gov.cn"
    ],
    "summary": "内蒙古自治区自然资源厅站内检索（dept_search SPA，仅跳转）"
  }
];

export const SEARCH_HOST_WHITELIST = [
  "api.so-gov.cn",
  "dnr.gxzf.gov.cn",
  "dnr.henan.gov.cn",
  "dnr.sc.gov.cn",
  "dnr.shandong.gov.cn",
  "ghhzrzy.tj.gov.cn",
  "ghzrzyj.cq.gov.cn",
  "ghzrzyw.beijing.gov.cn",
  "ghzyj.sh.gov.cn",
  "intellsearch.jl.gov.cn",
  "lr.hainan.gov.cn",
  "search.gd.gov.cn",
  "search.mnr.gov.cn",
  "searchapi.henan.gov.cn",
  "searching.hunan.gov.cn",
  "sousuo.www.gov.cn",
  "ss.shanghai.gov.cn",
  "www.jiangsu.gov.cn",
  "www.jiangxi.gov.cn",
  "www.mee.gov.cn",
  "www.mnr.gov.cn",
  "www.sc.gov.cn",
  "zrgh.baoding.gov.cn",
  "zrghj.lf.gov.cn",
  "zrzy.guizhou.gov.cn",
  "zrzy.hebei.gov.cn",
  "zrzy.jiuquan.gov.cn",
  "zrzy.ln.gov.cn",
  "zrzy.nmg.gov.cn",
  "zrzy.yanan.gov.cn",
  "zrzygh.cnbz.gov.cn",
  "zrzyghj.weinan.gov.cn",
  "zrzyhghj.xianning.gov.cn",
  "zrzyhghj.yaan.gov.cn",
  "zrzyt.ah.gov.cn",
  "zrzyt.fujian.gov.cn",
  "zrzyt.hlj.gov.cn",
  "zrzyt.hubei.gov.cn",
  "zrzyt.hunan.gov.cn",
  "zrzyt.nx.gov.cn",
  "zrzyt.qinghai.gov.cn",
  "zrzyt.shaanxi.gov.cn",
  "zrzyt.shanxi.gov.cn",
  "zrzyt.xinjiang.gov.cn",
  "zrzyt.xizang.gov.cn",
  "zxts.zjzwfw.gov.cn",
  "zygh.xa.gov.cn"
];

export const SEARCH_ADAPTERS_META = {
  schemaVersion: 3,
  contentHash: "d5ab4709424d8545",
  adapterCount: 42,
  modes: ["html-parse","json-api","handoff"],
};
