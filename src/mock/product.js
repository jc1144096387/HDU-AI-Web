export default {
  // 技术引擎列表
  productList: [
    // ocr
    {
      id: 1,
      label: "OCR",
      value: "ocr",
      span: "hot",
      children: [
        {
          id: 3,
          label: "身份证OCR",
          value: "identify"
        },
        {
          id: 4,
          label: "行驶证OCR",
          value: "driverregistration",
        },
        {
          id: 5,
          label: "驾驶证OCR",
          value: "driverlicense",
        },
        {
          id: 6,
          label: "通用OCR",
          value: "common",
        },
        {
          id: 7,
          label: "营业执照OCR",
          value: "businesslicense",
        },
        {
          id: 8,
          label: "银行卡OCR",
          value: "creditcard",
        },
        {
          id: 9,
          label: "手写体OCR",
          value: "handwrite",
          span: "new"
        },
        {
          id: 10,
          label: "车牌OCR",
          value: "plate",
          span: "new"
        },
        {
          id: 11,
          label: "名片OCR",
          value: "card",
        },
      ]
    },
    // 人脸与人体识别
    {
      id: 12,
      label: "人脸与人体识别",
      value: "face",
      children: [
        {
          id: 13,
          label: "人脸检测与分析",
          value: "detect",
        },
        {
          id: 14,
          label: "多人脸检测",
          value: "multiface",
        },
        {
          id: 15,
          label: "跨年龄人脸识别",
          value: "agecompare",
        },
        {
          id: 16,
          label: "五官定位",
          value: "shape",
        },
        {
          id: 17,
          label: "人脸对比",
          value: "compare",
        },
        {
          id: 18,
          label: "人脸搜索",
          value: "search",
        },
        {
          id: 18,
          label: "手势识别",
          value: "search",
          span: "new"
        }
      ]
    },
    // 图片特效
    {
      id: 12,
      label: "图片特效",
      value: "effect",
      children: [
        {
          id: 13,
          label: "人脸融合",
          value: "facemerge",
        },
        {
          id: 14,
          label: "滤镜",
          value: "imgfilter",
        },
        {
          id: 15,
          label: "人脸美妆",
          value: "facemakeup",
        },
        {
          id: 16,
          label: "人脸变妆",
          value: "facedecoration",
        },
        {
          id: 17,
          label: "大头贴",
          value: "sticker",
        },
        {
          id: 18,
          label: "颜龄检测",
          value: "searfaceagech",
        }
      ]
    },
    // 图片识别
    {
      id: 12,
      label: "图片识别",
      value: "visionimgidy",
      children: [
        {
          id: 13,
          label: "看图说话",
          value: "express",
        },
        {
          id: 14,
          label: "多标签识别",
          value: "tag",
        },
        {
          id: 15,
          label: "模糊图片识别",
          value: "fuzzy",
        },
        {
          id: 16,
          label: "美食图片识别",
          value: "food",
        },
        {
          id: 17,
          label: "场景/物体识别",
          value: "scene",
        }
      ]
    },
    // 敏感信息甄别
    {
      id: 12,
      label: "敏感信息甄别",
      value: "sensitivity",
      children: [
        {
          id: 13,
          label: "暴恐识别",
          value: "terror",
        },
        {
          id: 14,
          label: "图片鉴黄",
          value: "yellow",
        },
        {
          id: 15,
          label: "音频鉴黄",
          value: "evilaudio",
        },
        {
          id: 16,
          label: "音频敏感词检测",
          value: "sensitive",
        }
      ]
    },
    // 智能闲聊
    {
      id: 12,
      label: "智能闲聊",
      value: "nlpchat",
      children: [
        {
          id: 13,
          label: "智能闲聊",
          value: "nlpchat",
        }
      ]
    },
    // 机器翻译
    {
      id: 12,
      label: "机器翻译",
      value: "nlptrans",
      children: [
        {
          id: 13,
          label: "文本翻译",
          value: "text",
        },
        {
          id: 14,
          label: "语音翻译",
          value: "audio",
        },
        {
          id: 15,
          label: "图片翻译",
          value: "photo",
        }
      ]
    },
    // 基础文本分析
    {
      id: 12,
      label: "基础文本分析",
      value: "nlpbase",
      children: [
        {
          id: 13,
          label: "分词/词性",
          value: "participle",
        },
        {
          id: 14,
          label: "专有名词",
          value: "proper",
        },
        {
          id: 15,
          label: "同义词",
          value: "synonym",
        }
      ]
    },
    // 语义解析
    {
      id: 12,
      label: "语义解析",
      value: "nlpsem",
      children: [
        {
          id: 13,
          label: "意图成分",
          value: "nlpsem",
        },
        {
          id: 14,
          label: "情感分析",
          value: "nlpemo",
        }
      ]
    },
    // 语音识别
    {
      id: 12,
      label: "语音识别",
      value: "aaiasr",
      children: [
        {
          id: 13,
          label: "语音识别",
          value: "aaiasr",
        },
        {
          id: 14,
          label: "长语音识别",
          value: "aaiasrl",
        },
        {
          id: 15,
          label: "关键词检索",
          value: "keywords",
        }
      ]
    },
    // 语音合成
    {
      id: 12,
      label: "语音合成",
      value: "aaitts",
      children: [
        {
          id: 13,
          label: "语音合成",
          value: "aaitts",
        }
      ]
    },



  ],

  // 技术引擎详情
  productDetail: {
    //身份证OCR
    identify: {
      // 头部简介
      banner: {
        title: "优图OCR",
        content: "腾讯优图OCR基于腾讯领先的深度学习算法，利用光学字符识别技术，将图片上的文字内容，直接转换为可编辑文本。不仅能精准快速识别身份证、名片、营业执照、驾驶证等卡证类信息，更有通用OCR和手写体识别技术支持更多场景、任意版面的文字信息获取，大大提高了工作效率和用户体验。",
      },
      //功能体验
      demo:[
        {
          id: 3,
          label: "身份证OCR",
          value: "identify"
        },
        {
          id: 4,
          label: "行驶证OCR",
          value: "driverregistration",
        },
        {
          id: 5,
          label: "驾驶证OCR",
          value: "driverlicense",
        },
        {
          id: 6,
          label: "通用OCR",
          value: "common",
        },
        {
          id: 7,
          label: "营业执照OCR",
          value: "businesslicense",
        },
        {
          id: 8,
          label: "银行卡OCR",
          value: "creditcard",
        },
        {
          id: 9,
          label: "手写体OCR",
          value: "handwrite",
          span: "new"
        },
        {
          id: 10,
          label: "车牌OCR",
          value: "plate",
          span: "new"
        },
        {
          id: 11,
          label: "名片OCR",
          value: "card",
        },
      ],
      // 产品优势
      advance: [
        {
          icon: "",
          title: "通用性强",
          content: "不仅支持证照类图片，还支持多种复杂场景的文字识别，如街景门店、印刷图文等",
        },
        {
          icon: "",
          title: "识别精准",
          content: "单字识别准确率可达到中文98%以上，数字99%以上",
        },
        {
          icon: "",
          title: "适应性强",
          content: "适应各种实际应用中的异常情况，如光照不均、倾斜、模糊等，具备非常高的复杂环境可用性",
        },
        {
          icon: "",
          title: "服务可靠",
          content: "已成功应用于多项核心业务，历经市场验证，技术成熟稳定，可用性高达99.9%",
        },
        {
          icon: "",
          title: "企业级平台",
          content: "企业级图片处理大平台，保证7x24不间断云服务，让您的产品always online",
        },
      ],
      // 推荐场景
      scene: [
        {
          icon: "",
          title: "文档整理",
          content: "轻松识别图片、PDF等扫描文档中的文字，文字录入不再繁琐",
        },
        {
          icon: "",
          title: "物流场景",
          content: "精确识别运单上的寄件人和收件人信息，大大减轻人工输入成本",
        },
        {
          icon: "",
          title: "智慧医疗",
          content: "将医疗单据自动识别为文字，方便医疗信息的电子化存储和分析",
        },
        {
          icon: "",
          title: "身份认证",
          content: "无需手动输入证件信息，可快速进行银行身份认证、主播身份认证等",
        },
        {
          icon: "",
          title: "交通监管",
          content: "实时对车牌OCR，快速锁定违章车辆信息",
        },
      ],
      //合作案例
      case: {

      }
    },
    //行驶证OCR
    driverregistration: {
      // 头部简介
      banner: {
        title: "优图OCR",
        content: "腾讯优图OCR基于腾讯领先的深度学习算法，利用光学字符识别技术，将图片上的文字内容，直接转换为可编辑文本。不仅能精准快速识别身份证、名片、营业执照、驾驶证等卡证类信息，更有通用OCR和手写体识别技术支持更多场景、任意版面的文字信息获取，大大提高了工作效率和用户体验。",
      },
      //功能体验
      demo:[
        {
          id: 3,
          label: "身份证OCR",
          value: "identify"
        },
        {
          id: 4,
          label: "行驶证OCR",
          value: "driverregistration",
        },
        {
          id: 5,
          label: "驾驶证OCR",
          value: "driverlicense",
        },
        {
          id: 6,
          label: "通用OCR",
          value: "common",
        },
        {
          id: 7,
          label: "营业执照OCR",
          value: "businesslicense",
        },
        {
          id: 8,
          label: "银行卡OCR",
          value: "creditcard",
        },
        {
          id: 9,
          label: "手写体OCR",
          value: "handwrite",
          span: "new"
        },
        {
          id: 10,
          label: "车牌OCR",
          value: "plate",
          span: "new"
        },
        {
          id: 11,
          label: "名片OCR",
          value: "card",
        },
      ],
      // 产品优势
      advance: [
        {
          icon: "",
          title: "通用性强",
          content: "不仅支持证照类图片，还支持多种复杂场景的文字识别，如街景门店、印刷图文等",
        },
        {
          icon: "",
          title: "识别精准",
          content: "单字识别准确率可达到中文98%以上，数字99%以上",
        },
        {
          icon: "",
          title: "适应性强",
          content: "适应各种实际应用中的异常情况，如光照不均、倾斜、模糊等，具备非常高的复杂环境可用性",
        },
        {
          icon: "",
          title: "服务可靠",
          content: "已成功应用于多项核心业务，历经市场验证，技术成熟稳定，可用性高达99.9%",
        },
        {
          icon: "",
          title: "企业级平台",
          content: "企业级图片处理大平台，保证7x24不间断云服务，让您的产品always online",
        },
      ],
      // 推荐场景
      scene: [
        {
          icon: "",
          title: "文档整理",
          content: "轻松识别图片、PDF等扫描文档中的文字，文字录入不再繁琐",
        },
        {
          icon: "",
          title: "物流场景",
          content: "精确识别运单上的寄件人和收件人信息，大大减轻人工输入成本",
        },
        {
          icon: "",
          title: "智慧医疗",
          content: "将医疗单据自动识别为文字，方便医疗信息的电子化存储和分析",
        },
        {
          icon: "",
          title: "身份认证",
          content: "无需手动输入证件信息，可快速进行银行身份认证、主播身份认证等",
        },
        {
          icon: "",
          title: "交通监管",
          content: "实时对车牌OCR，快速锁定违章车辆信息",
        },
      ],
      //合作案例
      case: {

      }
    },


    //人脸检测与分析
    detect: {
      // 头部简介
      banner: {
        title: "人脸识别",
        content: "腾讯人脸识别基于腾讯优图和腾讯AI Lab的深度学习算法和海量数据集，对图片和视频源中面部特征进行提取分析。可实现精准的人脸检测和人脸识别，涵盖人脸检测与分析、五官定位、人脸对比与搜索、跨年龄人脸识别等，为安防监控、人脸美化、智能相册分类等应用场景提供有力的技术支持。",
      },
      //功能体验
      demo:[
        {
          id: 13,
          label: "人脸检测与分析",
          value: "detect",
        },
        {
          id: 14,
          label: "多人脸检测",
          value: "multiface",
        },
        {
          id: 15,
          label: "跨年龄人脸识别",
          value: "agecompare",
        },
        {
          id: 16,
          label: "五官定位",
          value: "shape",
        },
        {
          id: 17,
          label: "人脸对比",
          value: "compare",
        },
        {
          id: 18,
          label: "人脸搜索",
          value: "search",
        }
      ],
      // 产品优势
      advance: [
        {
          icon: "",
          title: "样本丰富",
          content: "立足于腾讯社交大数据平台收集的海量训练集，成功标注千万张人脸",
        },
        {
          icon: "",
          title: "算法领先",
          content: "基于腾讯优图和AILab的深度人脸模型，不断打磨算法，在国际权威评测平台中保持世界领先",
        },
        {
          icon: "",
          title: "识别率高",
          content: "对于一般生活场景中的人脸，达到99%的准确率和98%的召回率",
        },
        {
          icon: "",
          title: "跨年龄识别",
          content: "在保证通用场景识别能力的同时，实现跨年龄算法不断升级",
        },
        {
          icon: "",
          title: "服务可靠",
          content: "训练集源于腾讯核心业务，精细标注、多轮迭代，覆盖多种场景，服务更可靠",
        },
        {
          icon: "",
          title: "追踪稳定",
          content: "支持大角度侧脸、快速移动人脸、多人追踪场景，追踪速度和稳定性行业领先",
        },
      ],
      // 推荐场景
      scene: [
        {
          icon: "",
          title: "智慧社区",
          content: "集成人脸识别的功能，提供社区各入口通行解决方案",
        },
        {
          icon: "",
          title: "相册分类",
          content: "结合图片识别功能，检测场景、物体和人脸，快速聚类，让照片管理更直观",
        },
        {
          icon: "",
          title: "动态贴图",
          content: "实时追踪人脸，实现人脸的动态贴图，让图片和视频变得更有趣",
        },
        {
          icon: "",
          title: "精准寻亲",
          content: "依托互联网大数据，通过人脸识别系统精准匹配报失人口，助力寻亲路",
        },
        {
          icon: "",
          title: "金融行业",
          content: "通过人脸识别进行身份认证，极大缩短业务办理时间，提升业务安全性",
        },
      ],
      //合作案例
      case: {

      }
    },


  },
}