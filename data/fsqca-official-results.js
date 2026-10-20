/* 生成物，勿手改。来源：_fsQCA分析结果.xlsx / _编码总览_fsQCA校准矩阵.xlsx / _论文修订对照表_20261018.xlsx
 * + 3 份 docx 摘录；生成命令：node tools/build-fsqca-official.mjs（断言不过不会写本文件）。
 * 数值一律为字符串（保留 xlsx 原文小数位），运行时只读，展示层禁止 Number() 转换再渲染。 */
export const FSQCA_OFFICIAL = {
  "meta": {
    "version": "0.6.5",
    "generatedAt": "2026-10-19T15:50:09.108Z",
    "calibration": "实质锚点直接校准（0.25/0.5/0.75，Ragin log-odds）",
    "thresholds": {
      "necessity": "一致性 ≥0.90 且 RoN ≥0.50",
      "sufficiency": "频数 ≥1、一致性 ≥0.80、PRI ≥0.5"
    },
    "priNote": "本页判定口径为官方 xlsx 原样（PRI ≥0.5），与「组态分析」交互页默认 PRI ≥0.75 口径不同，两页结果不可直接互比。"
  },
  "s1_overview": {
    "source": {
      "file": "_fsQCA分析结果.xlsx",
      "sheet": "0_说明",
      "rows": "2-16"
    },
    "cards": [
      {
        "label": "案例数",
        "value": "47",
        "note": "全部部级试点（成功样本，注意截尾）"
      },
      {
        "label": "条件变量",
        "value": "6",
        "note": "RES 资源结构化 · TEC 资源能力化 · ACT 组织协同 · CAP 资本运作 · SPA 空间要素配置 · IND 产业跃迁"
      },
      {
        "label": "结果变量",
        "value": "4",
        "note": "AGR 农用地整治 · CON 建设用地整治 · ECO 生态保护修复 · SPE 特色整治（非互斥，分别建模）"
      },
      {
        "label": "隶属度来源",
        "value": "五档细类",
        "note": "细类得分锚定 0 / 0.25 / 0.5 / 0.75 / 1；变量合成值＝有效细类得分算术平均（缺失、不适用不计入）"
      },
      {
        "label": "主校准口径",
        "value": "实质锚点直接校准",
        "note": "完全不属于 0.25 / 交叉点 0.5 / 完全属于 0.75（Ragin log-odds）；分位锚点与原始合成值仅出现在稳健性节"
      },
      {
        "label": "分析视角",
        "value": "否集为主",
        "note": "对 ~AGR / ~CON / ~ECO / ~SPE 分别建模，识别「结果不出现时」的条件组合"
      }
    ],
    "coreLimits": [
      "47 个案例全部为成功试点，条件侧普遍偏高（RES、SPA 无案例低于 0.5）。任何校准都无法创造数据中不存在的方差，因此充分性解的解释力有限——这是样本性质决定的，不是编码质量问题",
      "正集必要性结果（如 TEC→AGR）多为「天花板效应」的产物：条件普遍偏高，自然容易成为结果的必要条件。**RoN 在一致性恰为 1.000 时会失效（趋于无穷），需人工复核**"
    ],
    "stance": "① 以否集必要性（~RES/~SPA/~TEC → 结果不出现）为主结论，其 RoN 更高、更稳健；② 充分性结果作为「存在性证据」而非「覆盖性结论」；③ 报告三种校准下的稳健性，不挑选单一结果",
    "negation": "取 1−x；配置（角）隶属度取各条件（或其否定）的最小值（模糊 AND）",
    "noIntermediateReason": "中间解需要「方向性预期」筛选逻辑余项。本库 64 个配置中绝大多数是逻辑余项，任何方向性预期都会主导结果，故只报复杂解与简约解，二者共同界定结果的稳健区间"
  },
  "s2_necessity": {
    "source": {
      "file": "_fsQCA分析结果.xlsx",
      "sheet": "3_必要性分析",
      "rows": "24,48,53,72,76,77,82"
    },
    "stance": "① 以否集必要性（~RES/~SPA/~TEC → 结果不出现）为主结论，其 RoN 更高、更稳健；② 充分性结果作为「存在性证据」而非「覆盖性结论」；③ 报告三种校准下的稳健性，不挑选单一结果",
    "items": [
      {
        "expr": "~SPA→~AGR",
        "outcome": "~AGR",
        "cond": "~SPA",
        "condName": "非空间要素配置",
        "consistency": "0.9504",
        "coverage": "0.3064",
        "ron": "13.98",
        "verdict": "★ 必要条件",
        "note": "",
        "flag": "star"
      },
      {
        "expr": "~SPA→~CON",
        "outcome": "~CON",
        "cond": "~SPA",
        "condName": "非空间要素配置",
        "consistency": "1.0000",
        "coverage": "0.2259",
        "ron": "",
        "verdict": "★ 必要条件（一致性=1，需人工复核）",
        "note": "RoN 失效须人工复核",
        "flag": "ron-invalid"
      },
      {
        "expr": "TEC→ECO",
        "outcome": "ECO",
        "cond": "TEC",
        "condName": "资源能力化",
        "consistency": "0.9007",
        "coverage": "0.6610",
        "ron": "3.41",
        "verdict": "★ 必要条件",
        "note": "贴线，余量约 0.0007",
        "flag": "edge",
        "footnote": "Q40 报告/总报告/修订对照表中作 0.9003，以权威 xlsx 为准修正为 0.9007。"
      },
      {
        "expr": "~SPA→~ECO",
        "outcome": "~ECO",
        "cond": "~SPA",
        "condName": "非空间要素配置",
        "consistency": "0.9493",
        "coverage": "0.3123",
        "ron": "13.56",
        "verdict": "★ 必要条件",
        "note": "",
        "flag": "star"
      },
      {
        "expr": "~RES→SPE",
        "outcome": "SPE",
        "cond": "~RES",
        "condName": "非资源结构化",
        "consistency": "0.9017",
        "coverage": "0.1444",
        "ron": "8.70",
        "verdict": "★ 必要条件",
        "note": "",
        "flag": "star"
      },
      {
        "expr": "TEC→SPE",
        "outcome": "SPE",
        "cond": "TEC",
        "condName": "资源能力化",
        "consistency": "0.9029",
        "coverage": "0.6420",
        "ron": "3.69",
        "verdict": "★ 必要条件",
        "note": "",
        "flag": "star"
      },
      {
        "expr": "~CAP→SPE",
        "outcome": "SPE",
        "cond": "~CAP",
        "condName": "非资本运作",
        "consistency": "0.9030",
        "coverage": "0.4089",
        "ron": "6.09",
        "verdict": "★ 必要条件",
        "note": "",
        "flag": "star"
      }
    ],
    "nearNecessary": [
      {
        "expr": "~RES→AGR",
        "outcome": "AGR",
        "cond": "~RES",
        "condName": "非资源结构化",
        "consistency": "0.8352",
        "coverage": "0.1392",
        "ron": "5.22",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "TEC→AGR",
        "outcome": "AGR",
        "cond": "TEC",
        "condName": "资源能力化",
        "consistency": "0.8967",
        "coverage": "0.6636",
        "ron": "3.26",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "ACT→AGR",
        "outcome": "AGR",
        "cond": "ACT",
        "condName": "组织协同",
        "consistency": "0.8291",
        "coverage": "0.9314",
        "ron": "0.40",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~ACT→AGR",
        "outcome": "AGR",
        "cond": "~ACT",
        "condName": "非组织协同",
        "consistency": "0.8247",
        "coverage": "0.2481",
        "ron": "4.29",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "CAP→AGR",
        "outcome": "AGR",
        "cond": "CAP",
        "condName": "资本运作",
        "consistency": "0.8557",
        "coverage": "0.8154",
        "ron": "1.28",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~CAP→AGR",
        "outcome": "AGR",
        "cond": "~CAP",
        "condName": "非资本运作",
        "consistency": "0.8519",
        "coverage": "0.4015",
        "ron": "4.04",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~SPA→AGR",
        "outcome": "AGR",
        "cond": "~SPA",
        "condName": "非空间要素配置",
        "consistency": "0.8086",
        "coverage": "0.1106",
        "ron": "4.65",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~IND→AGR",
        "outcome": "AGR",
        "cond": "~IND",
        "condName": "非产业跃迁",
        "consistency": "0.8619",
        "coverage": "0.1869",
        "ron": "5.89",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~RES→~AGR",
        "outcome": "~AGR",
        "cond": "~RES",
        "condName": "非资源结构化",
        "consistency": "0.8922",
        "coverage": "0.3505",
        "ron": "6.02",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~RES→CON",
        "outcome": "CON",
        "cond": "~RES",
        "condName": "非资源结构化",
        "consistency": "0.8176",
        "coverage": "0.1664",
        "ron": "4.57",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~RES→~CON",
        "outcome": "~CON",
        "cond": "~RES",
        "condName": "非资源结构化",
        "consistency": "0.8862",
        "coverage": "0.2439",
        "ron": "6.64",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~ACT→~CON",
        "outcome": "~CON",
        "cond": "~ACT",
        "condName": "非组织协同",
        "consistency": "0.8651",
        "coverage": "0.4298",
        "ron": "4.23",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~IND→~CON",
        "outcome": "~CON",
        "cond": "~IND",
        "condName": "非产业跃迁",
        "consistency": "0.8644",
        "coverage": "0.3097",
        "ron": "5.09",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~RES→ECO",
        "outcome": "ECO",
        "cond": "~RES",
        "condName": "非资源结构化",
        "consistency": "0.8701",
        "coverage": "0.1438",
        "ron": "6.59",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "ACT→ECO",
        "outcome": "ECO",
        "cond": "ACT",
        "condName": "组织协同",
        "consistency": "0.8139",
        "coverage": "0.9066",
        "ron": "0.50",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~ACT→ECO",
        "outcome": "ECO",
        "cond": "~ACT",
        "condName": "非组织协同",
        "consistency": "0.8304",
        "coverage": "0.2477",
        "ron": "4.44",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "CAP→ECO",
        "outcome": "ECO",
        "cond": "CAP",
        "condName": "资本运作",
        "consistency": "0.8607",
        "coverage": "0.8133",
        "ron": "1.34",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~CAP→ECO",
        "outcome": "ECO",
        "cond": "~CAP",
        "condName": "非资本运作",
        "consistency": "0.8312",
        "coverage": "0.3884",
        "ron": "3.62",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "IND→ECO",
        "outcome": "ECO",
        "cond": "IND",
        "condName": "产业跃迁",
        "consistency": "0.8076",
        "coverage": "0.9668",
        "ron": "0.17",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~IND→ECO",
        "outcome": "ECO",
        "cond": "~IND",
        "condName": "非产业跃迁",
        "consistency": "0.8044",
        "coverage": "0.1730",
        "ron": "4.23",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~IND→~ECO",
        "outcome": "~ECO",
        "cond": "~IND",
        "condName": "非产业跃迁",
        "consistency": "0.8454",
        "coverage": "0.4411",
        "ron": "3.62",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~TEC→SPE",
        "outcome": "SPE",
        "cond": "~TEC",
        "condName": "非资源能力化",
        "consistency": "0.8165",
        "coverage": "0.5367",
        "ron": "2.52",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "ACT→SPE",
        "outcome": "SPE",
        "cond": "ACT",
        "condName": "组织协同",
        "consistency": "0.8482",
        "coverage": "0.9155",
        "ron": "0.56",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~ACT→SPE",
        "outcome": "SPE",
        "cond": "~ACT",
        "condName": "非组织协同",
        "consistency": "0.8709",
        "coverage": "0.2517",
        "ron": "5.80",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "CAP→SPE",
        "outcome": "SPE",
        "cond": "CAP",
        "condName": "资本运作",
        "consistency": "0.8580",
        "coverage": "0.7855",
        "ron": "1.51",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~SPA→SPE",
        "outcome": "SPE",
        "cond": "~SPA",
        "condName": "非空间要素配置",
        "consistency": "0.8168",
        "coverage": "0.1073",
        "ron": "4.87",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "IND→SPE",
        "outcome": "SPE",
        "cond": "IND",
        "condName": "产业跃迁",
        "consistency": "0.8318",
        "coverage": "0.9648",
        "ron": "0.21",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~IND→SPE",
        "outcome": "SPE",
        "cond": "~IND",
        "condName": "非产业跃迁",
        "consistency": "0.8107",
        "coverage": "0.1690",
        "ron": "4.39",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~SPA→~SPE",
        "outcome": "~SPE",
        "cond": "~SPA",
        "condName": "非空间要素配置",
        "consistency": "0.8689",
        "coverage": "0.3100",
        "ron": "5.27",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      },
      {
        "expr": "~IND→~SPE",
        "outcome": "~SPE",
        "cond": "~IND",
        "condName": "非产业跃迁",
        "consistency": "0.8312",
        "coverage": "0.4702",
        "ron": "3.14",
        "verdict": "接近必要",
        "note": "一致性 0.80~0.90，可作辅助论据"
      }
    ],
    "coreLimitsRef": true
  },
  "s3_truthTable": {
    "source": {
      "file": "_fsQCA分析结果.xlsx",
      "sheet": "4_真值表",
      "rows": "4,37,42,46,50,57,62,66,101,106,110,114,121,126,130,165,170,174,178,185,190,194,229,234,238,242,249,254,258"
    },
    "configs": [
      {
        "config": "000001",
        "meaning": "IND",
        "n": 1,
        "results": {
          "AGR": {
            "consistency": "0.8073",
            "pri": "0.0000",
            "rawCov": "0.0571",
            "verdict": "结果不发生（PRI 不足）"
          },
          "CON": {
            "consistency": "0.8073",
            "pri": "0.0000",
            "rawCov": "0.0698",
            "verdict": "结果不发生（PRI 不足）"
          },
          "ECO": {
            "consistency": "0.8658",
            "pri": "0.0000",
            "rawCov": "0.0607",
            "verdict": "结果不发生（PRI 不足）"
          },
          "SPE": {
            "consistency": "0.9026",
            "pri": "0.0000",
            "rawCov": "0.0614",
            "verdict": "结果不发生（PRI 不足）"
          }
        },
        "caseIds": [
          "16"
        ]
      },
      {
        "config": "100010",
        "meaning": "RES＊SPA",
        "n": 1,
        "results": {
          "AGR": {
            "consistency": "0.9154",
            "pri": "0.3258",
            "rawCov": "0.1107",
            "verdict": "结果不发生（PRI 不足）"
          },
          "CON": {
            "consistency": "0.8689",
            "pri": "0.2185",
            "rawCov": "0.1283",
            "verdict": "结果不发生（PRI 不足）"
          },
          "ECO": {
            "consistency": "0.8210",
            "pri": "0.1453",
            "rawCov": "0.0984",
            "verdict": "结果不发生（PRI 不足）"
          },
          "SPE": {
            "consistency": "0.8302",
            "pri": "0.0975",
            "rawCov": "0.0964",
            "verdict": "结果不发生（PRI 不足）"
          }
        },
        "caseIds": [
          "37"
        ]
      },
      {
        "config": "100111",
        "meaning": "RES＊CAP＊SPA＊IND",
        "n": 1,
        "results": {
          "AGR": {
            "consistency": "0.9112",
            "pri": "0.5744",
            "rawCov": "0.1758",
            "verdict": "结果发生"
          },
          "CON": {
            "consistency": "0.8863",
            "pri": "0.4369",
            "rawCov": "0.2088",
            "verdict": "结果不发生（PRI 不足）"
          },
          "ECO": {
            "consistency": "0.9427",
            "pri": "0.8057",
            "rawCov": "0.1803",
            "verdict": "结果发生"
          },
          "SPE": {
            "consistency": "0.9650",
            "pri": "0.8313",
            "rawCov": "0.1788",
            "verdict": "结果发生"
          }
        },
        "caseIds": [
          "08"
        ]
      },
      {
        "config": "101011",
        "meaning": "RES＊ACT＊SPA＊IND",
        "n": 5,
        "results": {
          "AGR": {
            "consistency": "0.9326",
            "pri": "0.8140",
            "rawCov": "0.2833",
            "verdict": "结果发生"
          },
          "CON": {
            "consistency": "0.8649",
            "pri": "0.4563",
            "rawCov": "0.3209",
            "verdict": "结果不发生（PRI 不足）"
          },
          "ECO": {
            "consistency": "0.9174",
            "pri": "0.7897",
            "rawCov": "0.2763",
            "verdict": "结果发生"
          },
          "SPE": {
            "consistency": "0.9778",
            "pri": "0.9497",
            "rawCov": "0.2854",
            "verdict": "结果发生"
          }
        },
        "caseIds": [
          "20",
          "24",
          "34",
          "46",
          "47"
        ]
      },
      {
        "config": "101111",
        "meaning": "RES＊ACT＊CAP＊SPA＊IND",
        "n": 10,
        "results": {
          "AGR": {
            "consistency": "0.9275",
            "pri": "0.8393",
            "rawCov": "0.4287",
            "verdict": "结果发生"
          },
          "CON": {
            "consistency": "0.8550",
            "pri": "0.6269",
            "rawCov": "0.4826",
            "verdict": "结果发生"
          },
          "ECO": {
            "consistency": "0.8895",
            "pri": "0.7842",
            "rawCov": "0.4076",
            "verdict": "结果发生"
          },
          "SPE": {
            "consistency": "0.9109",
            "pri": "0.8080",
            "rawCov": "0.4045",
            "verdict": "结果发生"
          }
        },
        "caseIds": [
          "09",
          "10",
          "15",
          "21",
          "22",
          "25",
          "26",
          "28",
          "29",
          "38"
        ]
      },
      {
        "config": "110110",
        "meaning": "RES＊TEC＊CAP＊SPA",
        "n": 1,
        "results": {
          "AGR": {
            "consistency": "1.0000",
            "pri": "1.0000",
            "rawCov": "0.1082",
            "verdict": "结果发生"
          },
          "CON": {
            "consistency": "0.8884",
            "pri": "0.2684",
            "rawCov": "0.1175",
            "verdict": "结果不发生（PRI 不足）"
          },
          "ECO": {
            "consistency": "1.0000",
            "pri": "1.0000",
            "rawCov": "0.1073",
            "verdict": "结果发生"
          },
          "SPE": {
            "consistency": "0.9377",
            "pri": "0.6267",
            "rawCov": "0.0975",
            "verdict": "结果发生"
          }
        },
        "caseIds": [
          "04"
        ]
      },
      {
        "config": "111011",
        "meaning": "RES＊TEC＊ACT＊SPA＊IND",
        "n": 4,
        "results": {
          "AGR": {
            "consistency": "0.9695",
            "pri": "0.9104",
            "rawCov": "0.2681",
            "verdict": "结果发生"
          },
          "CON": {
            "consistency": "0.8982",
            "pri": "0.6857",
            "rawCov": "0.3034",
            "verdict": "结果发生"
          },
          "ECO": {
            "consistency": "0.9531",
            "pri": "0.8689",
            "rawCov": "0.2614",
            "verdict": "结果发生"
          },
          "SPE": {
            "consistency": "0.9507",
            "pri": "0.8767",
            "rawCov": "0.2526",
            "verdict": "结果发生"
          }
        },
        "caseIds": [
          "05",
          "07",
          "30",
          "42"
        ]
      },
      {
        "config": "111111",
        "meaning": "RES＊TEC＊ACT＊CAP＊SPA＊IND",
        "n": 24,
        "results": {
          "AGR": {
            "consistency": "0.9416",
            "pri": "0.8967",
            "rawCov": "0.5823",
            "verdict": "结果发生"
          },
          "CON": {
            "consistency": "0.8217",
            "pri": "0.6832",
            "rawCov": "0.6207",
            "verdict": "结果发生"
          },
          "ECO": {
            "consistency": "0.9494",
            "pri": "0.9174",
            "rawCov": "0.5822",
            "verdict": "结果发生"
          },
          "SPE": {
            "consistency": "0.9441",
            "pri": "0.9110",
            "rawCov": "0.5610",
            "verdict": "结果发生"
          }
        },
        "caseIds": [
          "01",
          "02",
          "03",
          "06",
          "11",
          "12",
          "13",
          "14",
          "17",
          "18",
          "19",
          "23",
          "27",
          "31",
          "32",
          "33",
          "35",
          "36",
          "39",
          "40",
          "41",
          "43",
          "44",
          "45"
        ]
      }
    ],
    "coverageDiag": {
      "text": "覆盖 8 / 64 个理想配置 = 12.5%（fsQCA 一般要求 ≥60%~70%），建议模糊集（保留五档差异）而非硬二值。",
      "bullets": [
        "111111　24",
        "101111　10",
        "101011　5",
        "111011　4",
        "000001　1",
        "100010　1",
        "100111　1",
        "110110　1",
        "最大配置 111111 占 24 例（51%）；仅 1 例的配置 4 个，覆盖 ≥2 例的配置 4 个",
        "二值化后近似常量（低于 0.5 的案例 ≤2 例）：RES（1 例）、SPA（1 例）、IND（2 例）",
        "结论：样本为部级/省级试点，六条件普遍偏高，配置高度集中于「全高」一类；建议改用模糊集（保留五档差异）而非硬二值，并重点依靠 TEC（17 例低于 0.5）/CAP（11 例）等仍有离散度的条件识别路径差异。",
        "另注：条件侧 6 个变量的离散度普遍低于结果侧，说明「什么样的整治」比「整治到什么程度」更能区分案例；这也是把结果变量拆成 AGR/CON/ECO/SPE 四类的意义所在。"
      ],
      "source": {
        "file": "_编码总览_fsQCA校准矩阵.xlsx",
        "sheet": "4_配置覆盖诊断",
        "rows": "3-15"
      }
    }
  },
  "s4_sufficiency": {
    "source": {
      "file": "_fsQCA分析结果.xlsx",
      "sheet": "5_充分性解",
      "rows": "3-21"
    },
    "outcomes": {
      "AGR": {
        "complex": {
          "paths": [
            {
              "expr": "RES*~TEC*CAP*SPA*IND",
              "consistency": "0.9074",
              "coverage": "0.4401",
              "uniqCov": "0.0114"
            },
            {
              "expr": "RES*ACT*SPA*IND",
              "consistency": "0.8810",
              "coverage": "0.8982",
              "uniqCov": "0.4596"
            },
            {
              "expr": "RES*TEC*~ACT*CAP*SPA*~IND",
              "consistency": "1.0000",
              "coverage": "0.1082",
              "uniqCov": "0.0069"
            }
          ],
          "solution": {
            "consistency": "0.8735",
            "coverage": "0.9165"
          }
        },
        "parsimonious": {
          "paths": [
            {
              "expr": "SPA*IND",
              "consistency": "0.8071",
              "coverage": "0.9511",
              "uniqCov": "0.1641"
            },
            {
              "expr": "CAP",
              "consistency": "0.8557",
              "coverage": "0.8154",
              "uniqCov": "0.0284"
            }
          ],
          "solution": {
            "consistency": "0.7963",
            "coverage": "0.9795"
          }
        }
      },
      "CON": {
        "complex": {
          "paths": [
            {
              "expr": "RES*ACT*CAP*SPA*IND",
              "consistency": "0.7654",
              "coverage": "0.8007",
              "uniqCov": "0.1800"
            },
            {
              "expr": "RES*TEC*ACT*SPA*IND",
              "consistency": "0.8123",
              "coverage": "0.6794",
              "uniqCov": "0.0587"
            }
          ],
          "solution": {
            "consistency": "0.7624",
            "coverage": "0.8594"
          }
        },
        "parsimonious": {
          "paths": [
            {
              "expr": "ACT*CAP",
              "consistency": "0.7463",
              "coverage": "0.8200",
              "uniqCov": "0.1993"
            },
            {
              "expr": "TEC*IND",
              "consistency": "0.7993",
              "coverage": "0.6904",
              "uniqCov": "0.0698"
            }
          ],
          "solution": {
            "consistency": "0.7387",
            "coverage": "0.8898"
          }
        }
      },
      "ECO": {
        "complex": {
          "paths": [
            {
              "expr": "RES*~TEC*CAP*SPA*IND",
              "consistency": "0.8915",
              "coverage": "0.4287",
              "uniqCov": "0.0211"
            },
            {
              "expr": "RES*ACT*SPA*IND",
              "consistency": "0.8593",
              "coverage": "0.8687",
              "uniqCov": "0.4513"
            },
            {
              "expr": "RES*TEC*~ACT*CAP*SPA*~IND",
              "consistency": "1.0000",
              "coverage": "0.1073",
              "uniqCov": "0.0068"
            }
          ],
          "solution": {
            "consistency": "0.8618",
            "coverage": "0.8966"
          }
        },
        "parsimonious": {
          "paths": [
            {
              "expr": "SPA*IND",
              "consistency": "0.8224",
              "coverage": "0.9610",
              "uniqCov": "0.1677"
            },
            {
              "expr": "CAP",
              "consistency": "0.8607",
              "coverage": "0.8133",
              "uniqCov": "0.0200"
            }
          ],
          "solution": {
            "consistency": "0.8043",
            "coverage": "0.9809"
          }
        },
        "samePathTextAs": "AGR"
      },
      "SPE": {
        "complex": {
          "paths": [
            {
              "expr": "RES*~TEC*CAP*SPA*IND",
              "consistency": "0.9057",
              "coverage": "0.4221",
              "uniqCov": "0.0176"
            },
            {
              "expr": "RES*ACT*SPA*IND",
              "consistency": "0.8816",
              "coverage": "0.8636",
              "uniqCov": "0.4496"
            },
            {
              "expr": "RES*TEC*~ACT*CAP*SPA*~IND",
              "consistency": "0.9377",
              "coverage": "0.0975",
              "uniqCov": "0.0066"
            }
          ],
          "solution": {
            "consistency": "0.8806",
            "coverage": "0.8878"
          }
        },
        "parsimonious": {
          "paths": [
            {
              "expr": "SPA*IND",
              "consistency": "0.8407",
              "coverage": "0.9519",
              "uniqCov": "0.1837"
            },
            {
              "expr": "CAP",
              "consistency": "0.8580",
              "coverage": "0.7855",
              "uniqCov": "0.0174"
            }
          ],
          "solution": {
            "consistency": "0.8201",
            "coverage": "0.9692"
          }
        },
        "samePathTextAs": "AGR"
      }
    },
    "noIntermediateReason": "中间解需要「方向性预期」筛选逻辑余项。本库 64 个配置中绝大多数是逻辑余项，任何方向性预期都会主导结果，故只报复杂解与简约解，二者共同界定结果的稳健区间"
  },
  "s5_negative": {
    "source": {
      "file": "_fsQCA分析结果.xlsx",
      "sheet": "6_否集分析",
      "rows": "3-19"
    },
    "outcomes": {
      "~AGR": {
        "necessity": [
          {
            "text": "~SPA 是 ~AGR 的必要条件",
            "consistency": "0.9504",
            "coverage": "0.3064",
            "ron": "13.98",
            "verdict": "★ 必要条件"
          }
        ],
        "complex": {
          "paths": [
            {
              "expr": "~RES*~TEC*~ACT*~CAP*~SPA*IND",
              "consistency": "1.0000",
              "coverage": "0.1668",
              "uniqCov": "0.1668"
            }
          ],
          "solutionText": "解一致性 1.000 / 解覆盖度 0.167"
        },
        "parsimonious": {
          "paths": [
            {
              "expr": "~SPA",
              "consistency": "0.9504",
              "coverage": "0.3064",
              "uniqCov": "0.3064"
            }
          ],
          "solutionText": "解一致性 0.950 / 解覆盖度 0.306"
        }
      },
      "~CON": {
        "necessity": [
          {
            "text": "~SPA 是 ~CON 的必要条件",
            "consistency": "1.0000",
            "coverage": "0.2259",
            "ron": "",
            "verdict": "★ 必要条件（一致性=1，需人工复核）"
          }
        ],
        "complex": {
          "paths": [
            {
              "expr": "~RES*~TEC*~ACT*~CAP*~SPA*IND",
              "consistency": "1.0000",
              "coverage": "0.1169",
              "uniqCov": "0.0189"
            },
            {
              "expr": "RES*~TEC*~ACT*CAP*SPA*IND",
              "consistency": "0.9038",
              "coverage": "0.2879",
              "uniqCov": "0.1332"
            },
            {
              "expr": "RES*TEC*~ACT*CAP*SPA*~IND",
              "consistency": "0.9590",
              "coverage": "0.1715",
              "uniqCov": "0.0277"
            }
          ],
          "solutionText": "解一致性 0.916 / 解覆盖度 0.335"
        },
        "parsimonious": {
          "paths": [
            {
              "expr": "~ACT*IND",
              "consistency": "0.8917",
              "coverage": "0.3757",
              "uniqCov": "0.1934"
            },
            {
              "expr": "CAP*~IND",
              "consistency": "0.9201",
              "coverage": "0.2706",
              "uniqCov": "0.0882"
            }
          ],
          "solutionText": "解一致性 0.882 / 解覆盖度 0.464"
        }
      },
      "~ECO": {
        "necessity": [
          {
            "text": "~SPA 是 ~ECO 的必要条件",
            "consistency": "0.9493",
            "coverage": "0.3123",
            "ron": "13.56",
            "verdict": "★ 必要条件"
          }
        ],
        "complex": {
          "paths": [
            {
              "expr": "~RES*~TEC*~ACT*~CAP*~SPA*IND",
              "consistency": "1.0000",
              "coverage": "0.1702",
              "uniqCov": "0.0381"
            },
            {
              "expr": "RES*~TEC*~ACT*~CAP*SPA*~IND",
              "consistency": "0.9696",
              "coverage": "0.2820",
              "uniqCov": "0.1499"
            }
          ],
          "solutionText": "解一致性 0.973 / 解覆盖度 0.320"
        },
        "parsimonious": {
          "paths": [
            {
              "expr": "~ACT*~CAP",
              "consistency": "0.7889",
              "coverage": "0.4698",
              "uniqCov": "0.4698"
            }
          ],
          "solutionText": "解一致性 0.789 / 解覆盖度 0.470"
        }
      },
      "~SPE": {
        "necessity": [],
        "complex": {
          "paths": [
            {
              "expr": "~RES*~TEC*~ACT*~CAP*~SPA*IND",
              "consistency": "1.0000",
              "coverage": "0.1845",
              "uniqCov": "0.0413"
            },
            {
              "expr": "RES*~TEC*~ACT*~CAP*SPA*~IND",
              "consistency": "0.9817",
              "coverage": "0.3096",
              "uniqCov": "0.1664"
            }
          ],
          "solutionText": "解一致性 0.984 / 解覆盖度 0.351"
        },
        "parsimonious": {
          "paths": [
            {
              "expr": "~ACT*~CAP",
              "consistency": "0.8106",
              "coverage": "0.5234",
              "uniqCov": "0.5234"
            }
          ],
          "solutionText": "解一致性 0.811 / 解覆盖度 0.523"
        },
        "necessityNote": "无一致性 ≥0.90 的条件项"
      }
    }
  },
  "s6_robustness": {
    "source": {
      "file": "_fsQCA分析结果.xlsx",
      "sheet": "7_稳健性",
      "rows": "3-50"
    },
    "rows": [
      {
        "calib": "实质锚点",
        "outcome": "AGR",
        "freq": 1,
        "consCut": "0.8",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.8735",
        "solCoverage": "0.9165",
        "drift": "minor"
      },
      {
        "calib": "实质锚点",
        "outcome": "AGR",
        "freq": 1,
        "consCut": "0.75",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.8735",
        "solCoverage": "0.9165",
        "drift": "minor"
      },
      {
        "calib": "实质锚点",
        "outcome": "AGR",
        "freq": 2,
        "consCut": "0.8",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.8810",
        "solCoverage": "0.8982",
        "drift": "minor"
      },
      {
        "calib": "实质锚点",
        "outcome": "AGR",
        "freq": 2,
        "consCut": "0.75",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.8810",
        "solCoverage": "0.8982",
        "drift": "minor"
      },
      {
        "calib": "实质锚点",
        "outcome": "CON",
        "freq": 1,
        "consCut": "0.8",
        "configs": 3,
        "remainders": 56,
        "complexPaths": 2,
        "parsimPaths": 2,
        "solConsistency": "0.7624",
        "solCoverage": "0.8594",
        "drift": "none"
      },
      {
        "calib": "实质锚点",
        "outcome": "CON",
        "freq": 1,
        "consCut": "0.75",
        "configs": 3,
        "remainders": 56,
        "complexPaths": 2,
        "parsimPaths": 2,
        "solConsistency": "0.7624",
        "solCoverage": "0.8594",
        "drift": "none"
      },
      {
        "calib": "实质锚点",
        "outcome": "CON",
        "freq": 2,
        "consCut": "0.8",
        "configs": 3,
        "remainders": 60,
        "complexPaths": 2,
        "parsimPaths": 2,
        "solConsistency": "0.7624",
        "solCoverage": "0.8594",
        "drift": "none"
      },
      {
        "calib": "实质锚点",
        "outcome": "CON",
        "freq": 2,
        "consCut": "0.75",
        "configs": 3,
        "remainders": 60,
        "complexPaths": 2,
        "parsimPaths": 2,
        "solConsistency": "0.7624",
        "solCoverage": "0.8594",
        "drift": "none"
      },
      {
        "calib": "实质锚点",
        "outcome": "ECO",
        "freq": 1,
        "consCut": "0.8",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.8618",
        "solCoverage": "0.8966",
        "drift": "minor"
      },
      {
        "calib": "实质锚点",
        "outcome": "ECO",
        "freq": 1,
        "consCut": "0.75",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.8618",
        "solCoverage": "0.8966",
        "drift": "minor"
      },
      {
        "calib": "实质锚点",
        "outcome": "ECO",
        "freq": 2,
        "consCut": "0.8",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.8593",
        "solCoverage": "0.8687",
        "drift": "minor"
      },
      {
        "calib": "实质锚点",
        "outcome": "ECO",
        "freq": 2,
        "consCut": "0.75",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.8593",
        "solCoverage": "0.8687",
        "drift": "minor"
      },
      {
        "calib": "实质锚点",
        "outcome": "SPE",
        "freq": 1,
        "consCut": "0.8",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.8806",
        "solCoverage": "0.8878",
        "drift": "minor"
      },
      {
        "calib": "实质锚点",
        "outcome": "SPE",
        "freq": 1,
        "consCut": "0.75",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.8806",
        "solCoverage": "0.8878",
        "drift": "minor"
      },
      {
        "calib": "实质锚点",
        "outcome": "SPE",
        "freq": 2,
        "consCut": "0.8",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.8816",
        "solCoverage": "0.8636",
        "drift": "minor"
      },
      {
        "calib": "实质锚点",
        "outcome": "SPE",
        "freq": 2,
        "consCut": "0.75",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.8816",
        "solCoverage": "0.8636",
        "drift": "minor"
      },
      {
        "calib": "分位锚点",
        "outcome": "AGR",
        "freq": 1,
        "consCut": "0.8",
        "configs": 16,
        "remainders": 35,
        "complexPaths": 8,
        "parsimPaths": 5,
        "solConsistency": "0.6986",
        "solCoverage": "0.5753",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "AGR",
        "freq": 1,
        "consCut": "0.75",
        "configs": 20,
        "remainders": 35,
        "complexPaths": 9,
        "parsimPaths": 5,
        "solConsistency": "0.7126",
        "solCoverage": "0.6631",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "AGR",
        "freq": 2,
        "consCut": "0.8",
        "configs": 4,
        "remainders": 56,
        "complexPaths": 4,
        "parsimPaths": 3,
        "solConsistency": "0.7418",
        "solCoverage": "0.4165",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "AGR",
        "freq": 2,
        "consCut": "0.75",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 5,
        "parsimPaths": 2,
        "solConsistency": "0.7166",
        "solCoverage": "0.5294",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "CON",
        "freq": 1,
        "consCut": "0.8",
        "configs": 17,
        "remainders": 35,
        "complexPaths": 9,
        "parsimPaths": 5,
        "solConsistency": "0.8062",
        "solCoverage": "0.6028",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "CON",
        "freq": 1,
        "consCut": "0.75",
        "configs": 21,
        "remainders": 35,
        "complexPaths": 12,
        "parsimPaths": 5,
        "solConsistency": "0.7826",
        "solCoverage": "0.6082",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "CON",
        "freq": 2,
        "consCut": "0.8",
        "configs": 5,
        "remainders": 56,
        "complexPaths": 4,
        "parsimPaths": 1,
        "solConsistency": "0.8171",
        "solCoverage": "0.4867",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "CON",
        "freq": 2,
        "consCut": "0.75",
        "configs": 5,
        "remainders": 56,
        "complexPaths": 4,
        "parsimPaths": 1,
        "solConsistency": "0.8171",
        "solCoverage": "0.4867",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "ECO",
        "freq": 1,
        "consCut": "0.8",
        "configs": 11,
        "remainders": 35,
        "complexPaths": 4,
        "parsimPaths": 4,
        "solConsistency": "0.8228",
        "solCoverage": "0.5214",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "ECO",
        "freq": 1,
        "consCut": "0.75",
        "configs": 11,
        "remainders": 35,
        "complexPaths": 4,
        "parsimPaths": 4,
        "solConsistency": "0.8228",
        "solCoverage": "0.5214",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "ECO",
        "freq": 2,
        "consCut": "0.8",
        "configs": 3,
        "remainders": 56,
        "complexPaths": 2,
        "parsimPaths": 1,
        "solConsistency": "0.7877",
        "solCoverage": "0.3812",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "ECO",
        "freq": 2,
        "consCut": "0.75",
        "configs": 3,
        "remainders": 56,
        "complexPaths": 2,
        "parsimPaths": 1,
        "solConsistency": "0.7877",
        "solCoverage": "0.3812",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "SPE",
        "freq": 1,
        "consCut": "0.8",
        "configs": 18,
        "remainders": 35,
        "complexPaths": 9,
        "parsimPaths": 5,
        "solConsistency": "0.8460",
        "solCoverage": "0.6363",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "SPE",
        "freq": 1,
        "consCut": "0.75",
        "configs": 21,
        "remainders": 35,
        "complexPaths": 11,
        "parsimPaths": 6,
        "solConsistency": "0.8173",
        "solCoverage": "0.7088",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "SPE",
        "freq": 2,
        "consCut": "0.8",
        "configs": 4,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.8845",
        "solCoverage": "0.4566",
        "drift": "significant"
      },
      {
        "calib": "分位锚点",
        "outcome": "SPE",
        "freq": 2,
        "consCut": "0.75",
        "configs": 7,
        "remainders": 56,
        "complexPaths": 6,
        "parsimPaths": 2,
        "solConsistency": "0.8163",
        "solCoverage": "0.5761",
        "drift": "significant"
      },
      {
        "calib": "原始合成",
        "outcome": "AGR",
        "freq": 1,
        "consCut": "0.8",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.9175",
        "solCoverage": "0.9485",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "AGR",
        "freq": 1,
        "consCut": "0.75",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.9175",
        "solCoverage": "0.9485",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "AGR",
        "freq": 2,
        "consCut": "0.8",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.9223",
        "solCoverage": "0.9394",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "AGR",
        "freq": 2,
        "consCut": "0.75",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.9223",
        "solCoverage": "0.9394",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "CON",
        "freq": 1,
        "consCut": "0.8",
        "configs": 5,
        "remainders": 56,
        "complexPaths": 2,
        "parsimPaths": 1,
        "solConsistency": "0.8403",
        "solCoverage": "0.9495",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "CON",
        "freq": 1,
        "consCut": "0.75",
        "configs": 5,
        "remainders": 56,
        "complexPaths": 2,
        "parsimPaths": 1,
        "solConsistency": "0.8403",
        "solCoverage": "0.9495",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "CON",
        "freq": 2,
        "consCut": "0.8",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.8466",
        "solCoverage": "0.9453",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "CON",
        "freq": 2,
        "consCut": "0.75",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.8466",
        "solCoverage": "0.9453",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "ECO",
        "freq": 1,
        "consCut": "0.8",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.9189",
        "solCoverage": "0.9222",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "ECO",
        "freq": 1,
        "consCut": "0.75",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.9189",
        "solCoverage": "0.9222",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "ECO",
        "freq": 2,
        "consCut": "0.8",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.9184",
        "solCoverage": "0.9083",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "ECO",
        "freq": 2,
        "consCut": "0.75",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.9184",
        "solCoverage": "0.9083",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "SPE",
        "freq": 1,
        "consCut": "0.8",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.9269",
        "solCoverage": "0.9202",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "SPE",
        "freq": 1,
        "consCut": "0.75",
        "configs": 6,
        "remainders": 56,
        "complexPaths": 3,
        "parsimPaths": 2,
        "solConsistency": "0.9269",
        "solCoverage": "0.9202",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "SPE",
        "freq": 2,
        "consCut": "0.8",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.9288",
        "solCoverage": "0.9086",
        "drift": "minor"
      },
      {
        "calib": "原始合成",
        "outcome": "SPE",
        "freq": 2,
        "consCut": "0.75",
        "configs": 4,
        "remainders": 60,
        "complexPaths": 1,
        "parsimPaths": 1,
        "solConsistency": "0.9288",
        "solCoverage": "0.9086",
        "drift": "minor"
      }
    ],
    "disclosure": "分位锚点漂移明显（如 AGR 解一致性低至 0.6986），结论依赖校准方式——诚实披露：本页主结论以实质锚点为准，三校准并列用于判断稳健性。"
  },
  "s7_baseline_diff": {
    "sensitive": true,
    "collapsedTitle": "与 Q40 前基线的差异（⚠ 含结论被推翻的敏感叙述，点击展开）",
    "sources": [
      {
        "file": "_fsQCA分析结果_Q40前基线_20261018.xlsx",
        "rows": "1_校准数据 对拍"
      },
      {
        "file": "_Q40_结果侧预期句执行报告_20261018.docx",
        "rows": "段 23-34、表 4-5"
      },
      {
        "file": "_10-18收口总报告_20261018.docx",
        "rows": "段 13-30、表 2-7"
      }
    ],
    "calibDiff": {
      "title": "① 校准值变动（22 案 29 格结果侧原始合成值；条件侧仅案 32 ACT、案 46 TEC 两格随 P 码收口修正）",
      "items": [
        {
          "caseId": "01",
          "outcome": "AGR",
          "from": "0.65",
          "to": "0.6"
        },
        {
          "caseId": "01",
          "outcome": "ECO",
          "from": "0.625",
          "to": "0.5833"
        },
        {
          "caseId": "09",
          "outcome": "ECO",
          "from": "0.5625",
          "to": "0.5"
        },
        {
          "caseId": "10",
          "outcome": "CON",
          "from": "0.6667",
          "to": "0.5"
        },
        {
          "caseId": "13",
          "outcome": "CON",
          "from": "0.5",
          "to": "0.45"
        },
        {
          "caseId": "17",
          "outcome": "CON",
          "from": "0.4167",
          "to": "0.25"
        },
        {
          "caseId": "22",
          "outcome": "CON",
          "from": "0.5625",
          "to": "0.5833"
        },
        {
          "caseId": "24",
          "outcome": "CON",
          "from": "0.4375",
          "to": "0.625"
        },
        {
          "caseId": "27",
          "outcome": "CON",
          "from": "0.625",
          "to": "0.6667"
        },
        {
          "caseId": "29",
          "outcome": "CON",
          "from": "0.5",
          "to": "0.375"
        },
        {
          "caseId": "32",
          "outcome": "AGR",
          "from": "0.65",
          "to": "0.6667"
        },
        {
          "caseId": "34",
          "outcome": "CON",
          "from": "0.4167",
          "to": "0.5"
        },
        {
          "caseId": "35",
          "outcome": "CON",
          "from": "0.65",
          "to": "0.6667"
        },
        {
          "caseId": "36",
          "outcome": "CON",
          "from": "0.65",
          "to": "0.5833"
        },
        {
          "caseId": "36",
          "outcome": "ECO",
          "from": "0.9375",
          "to": "0.9167"
        },
        {
          "caseId": "37",
          "outcome": "CON",
          "from": "0.3333",
          "to": "0.5"
        },
        {
          "caseId": "38",
          "outcome": "CON",
          "from": "0.45",
          "to": "0.5"
        },
        {
          "caseId": "38",
          "outcome": "ECO",
          "from": "0.3125",
          "to": "0.3333"
        },
        {
          "caseId": "38",
          "outcome": "SPE",
          "from": "0.6667",
          "to": "0.75"
        },
        {
          "caseId": "39",
          "outcome": "AGR",
          "from": "0.65",
          "to": "0.6"
        },
        {
          "caseId": "40",
          "outcome": "AGR",
          "from": "0.55",
          "to": "0.5625"
        },
        {
          "caseId": "40",
          "outcome": "CON",
          "from": "0.5833",
          "to": "0.625"
        },
        {
          "caseId": "42",
          "outcome": "SPE",
          "from": "0.625",
          "to": "0.75"
        },
        {
          "caseId": "43",
          "outcome": "AGR",
          "from": "0.45",
          "to": "0.5"
        },
        {
          "caseId": "44",
          "outcome": "AGR",
          "from": "0.6",
          "to": "0.55"
        },
        {
          "caseId": "44",
          "outcome": "CON",
          "from": "0.5",
          "to": "0.4167"
        },
        {
          "caseId": "46",
          "outcome": "AGR",
          "from": "0.55",
          "to": "0.5625"
        },
        {
          "caseId": "47",
          "outcome": "AGR",
          "from": "0.6",
          "to": "0.5833"
        },
        {
          "caseId": "47",
          "outcome": "ECO",
          "from": "0.5625",
          "to": "0.5833"
        }
      ]
    },
    "condDiffs": [
      {
        "caseId": "32",
        "cond": "ACT",
        "from": "0.6667",
        "to": "0.75"
      },
      {
        "caseId": "46",
        "cond": "TEC",
        "from": "0.375",
        "to": "0.25"
      }
    ],
    "diffs": [
      {
        "key": "con-path",
        "title": "② CON 解路径变化",
        "lines": [
          "复杂解：RES*~TEC*CAP*SPA*IND → RES*ACT*CAP*SPA*IND（~TEC 换成 ACT）",
          "简约解：CAP*IND → ACT*CAP（强执行＋资金保障成为核心路径）"
        ]
      },
      {
        "key": "tec-agr-flip",
        "title": "③ TEC→AGR 必要性翻转",
        "lines": [
          "0.9021 ★必要条件 → 0.8915 接近必要：跌破 0.90 阈值，结论降格为「高度相关」"
        ]
      },
      {
        "key": "neg-con",
        "title": "④ ~CON 必要性收敛",
        "lines": [
          "由 3 条 ★（~RES / ~SPA / ~IND）收敛为 1 条 ★（~SPA，且一致性=1 须人工复核）"
        ]
      },
      {
        "key": "spe-frozen",
        "title": "⑤ SPE 数值完全不动",
        "lines": [
          "SPE 复杂解/简约解路径条数与文本均不变，是最稳健的一组。"
        ]
      }
    ]
  },
  "s8_revision": {
    "source": {
      "file": "_论文修订对照表_20261018.xlsx",
      "sheet": "论文修订对照表",
      "rows": "2-11"
    },
    "revisions": [
      {
        "stars": "★★★ 必须改",
        "num": 1,
        "original": "技术水平低也能取得建设用地优化成效",
        "revised": "强执行（ACT）+ 资金保障（CAP）是建设用地优化的核心路径",
        "reason": "CON 的 ~TEC 路径消失，原结论是用计划数编码出来的产物",
        "vars": "CON 复杂解",
        "note": "答辩话术见总报告§6.1"
      },
      {
        "stars": "★★★ 必须改",
        "num": 2,
        "original": "TEC 是农用地整治（AGR）的必要条件",
        "revised": "TEC 与 AGR 高度相关（一致性 0.89，接近必要阈值 0.90），但未达必要性标准",
        "reason": "TEC→AGR 0.9021→0.8915，跌破 0.90 阈值；这是阈值敏感性的正常表现",
        "vars": "实质锚 AGR→TEC",
        "note": "答辩话术见总报告§6.2"
      },
      {
        "stars": "★★★ 必须改",
        "num": 3,
        "original": "SPA 是 AGR 的接近必要条件",
        "revised": "SPA 与 AGR 相关性有限，不构成必要条件",
        "reason": "原始合成下判定翻转为「非必要」",
        "vars": "原始合成 AGR→SPA",
        "note": ""
      },
      {
        "stars": "★★★ 必须改",
        "num": 4,
        "original": "ACT 是 CON 的接近必要条件",
        "revised": "ACT 与 CON 相关性有限，不构成必要条件",
        "reason": "原始合成下判定翻转为「非必要」",
        "vars": "原始合成 CON→ACT",
        "note": ""
      },
      {
        "stars": "★★★ 必须改",
        "num": 5,
        "original": "~IND 是 ~CON 的必要条件",
        "revised": "~IND 与 ~CON 高度相关（接近必要），但余量有限",
        "reason": "实质锚点下判定翻转为「接近必要」",
        "vars": "实质锚 ~CON→~IND",
        "note": ""
      },
      {
        "stars": "★★ 建议改",
        "num": 6,
        "original": "TEC 是 ECO 的必要条件",
        "revised": "TEC 与 ECO 高度相关（一致性 0.9003），恰在必要阈值上，稳健性有限",
        "reason": "余量仅 0.0003，下一轮微调就没了",
        "vars": "实质锚 ECO→TEC",
        "note": "建议降格为『接近必要』"
      },
      {
        "stars": "★ 可保留",
        "num": 7,
        "original": "AGR 三条路径（~TEC*CAP、ACT*SPA、TEC*~ACT*CAP*~IND）",
        "revised": "保留",
        "reason": "路径文本未变，数值微调",
        "vars": "AGR 复杂解/简约解",
        "note": "加一句『数值微调不影响结论』"
      },
      {
        "stars": "★ 可保留",
        "num": 8,
        "original": "ECO 三条路径（同上）",
        "revised": "保留",
        "reason": "路径文本未变，数值微调",
        "vars": "ECO 复杂解/简约解",
        "note": "加一句『数值微调不影响结论』"
      },
      {
        "stars": "★ 可保留",
        "num": 9,
        "original": "SPE 全部路径",
        "revised": "保留",
        "reason": "数值完全不动",
        "vars": "SPE 复杂解/简约解",
        "note": "最稳健的一组，可强调"
      },
      {
        "stars": "★★ 方法论",
        "num": 10,
        "original": "（论文方法部分）删除低分证据会抬高校准值",
        "revised": "补充说明：校准值=AVERAGEIF(有效,得分)，删低分格会抬高均值——这是数学性质，不是放水",
        "reason": "答辩会被问到；每处删格都在台账留痕",
        "vars": "全部变量",
        "note": "见总报告§6.3"
      }
    ],
    "footnote": "（仅 #6 涉及 0.9003 处）文内 0.9003 以权威 xlsx 为准为 0.9007。",
    "defenseScripts": [
      "原结论不是发现，是『用计划数当成效』编码出来的产物。修正后反而验证了数据有效性。",
      "这说明原结论的稳健性不足，而非数据有误。我们已将表述从『必要条件』降格为『高度相关』。",
      "这是均值口径的数学性质，不是放水。每处删格都在台账留痕，可逐格回验。"
    ],
    "defenseSource": {
      "file": "_10-18收口总报告_20261018.docx",
      "rows": "段 41-49（§6 答辩口径）"
    }
  },
  "s9_baseline": {
    "sources": [
      {
        "file": "_数据编码说明手册_20261018.docx",
        "rows": "段 4-8"
      },
      {
        "file": "_10-18收口总报告_20261018.docx",
        "rows": "表 11"
      }
    ],
    "stats": {
      "total": 1645,
      "cond": 470,
      "result": 1175,
      "valid": 1461,
      "validCond": 818,
      "validResult": 643,
      "missing": 169,
      "na": 15,
      "verifiable": "1461/1461=100%",
      "expectationCells": 0
    }
  }
};
