# hdu-ai-web
HDU AI平台（仿腾讯AI）

## 需求分析（腾讯AI）
- 首页https://ai.qq.com/
- 技术引擎 product （初步分析，技术引擎的子页面结构较为统一，可以考虑合并成一个页面，然后通过路由传参）
  - OCR ocr
    - 身份证OCR identify
    - 行驶证OCR driverregistration
    - 驾驶证OCR driverlicense
    - 通用OCR common
    - 营业执照OCR businesslicense
    - 银行卡OCR creditcard
    - 手写体OCR handwrite
    - 车牌OCR plate
    - 名片OCR card
  - 人脸与人体识别 face
    - 人脸检测与分析 detect
    - 多人脸检测 multiface
    - 跨年龄人脸识别 agecompare
    - 五官定位 shape
    - 人脸对比 compare
    - 人脸搜索 search
    - 手势识别 gesture
  - 图片特效 effect(自己加的)
    - 人脸融合 facemerge
    - 滤镜 imgfilter
    - 人脸美妆 facemakeup
    - 人脸变妆 facedecoration
    - 大头贴 sticker
    - 颜龄检测 faceage
  - 图片识别 visionimgidy
    - 看图说话 express
    - 多标签识别 tag
    - 模糊图片识别 fuzzy
    - 美食图片识别 food
    - 场景/物体识别 scene
  - 敏感信息甄别 sensitivity(自己加的)
    - 暴恐识别 terror
    - 图片鉴黄 yellow
    - 音频鉴黄 evilaudio
    - 音频敏感词检测 sensitive
  - 智能闲聊 nlpchat(自己加的)
    - 智能闲聊 nlpchat
  - 机器翻译 nlptrans
    - 文本翻译 text
    - 语音翻译 audio
    - 图片翻译 photo
  - 基础文本分析 nlpbase
    - 分词/词性 participle
    - 专有名词 proper
    - 同义词 synonym
  - 语义解析 nlpsem(自己加的)
    - 意图成分 nlpsem
    - 情感分析 nlpemo
  - 语音识别 aaiasr(自己加的)
    - 语音识别 aaiasr
    - 长语音识别 aaiasrl
    - 关键词检索 keywords
  - 语音合成 aaitts(自己加的)
    - 语音合成 aaitts
- 解决方案 case（解决方案的子页面可以考虑合并成一个页面，还待分析）
  - 智能硬件 hardware
  - 智慧招聘 xianji
  - 智慧门禁 facedoor
- AI加速器（待分析）
- 咨询动态（待分析）
- AI在腾讯（待分析）
- 加入我们（待分析）
- 文档中心 doc（文档详情页如何实现还待分析，可以考虑文档列表和技术引擎列表独立）
  - 文档中心（索引页） home
  - 新手指南 help(自己加的,分类存放便于维护)
    - 接入指引 index
    - 接口鉴权 auth
    - SDK下载 sdk
    - 返回码 returncode
    - 常见问题 faq
    - 用户协议 protocol
    - 实名认证授权书 authorization
  - OCR ocr(自己加的,分类存放便于维护)
    - 身份证OCR ocridcardocr
    - 行驶证/驾驶证OCR ocrdriverlicenseocr
    - 通用OCR ocrgeneralocr
    - 营业执照OCR ocrbizlicenseocr
    - 银行卡OCR ocrcreditcardocr
    - 手写体OCR handwritingocr
    - 车牌OCR plateocr
    - 名片OCR ocrbcocr
  - 人脸与人体识别 face(自己加的,分类存放便于维护)
    - 人脸检测与分析 detectface
    - 多人脸检测 detectmultiface
    - 跨年龄人脸识别 detectcrossageface
    - 五官定位 faceshape
    - 人脸对比 facecompare
    - 人脸搜索 faceidentify(自己加的,分类存放便于维护)
      - 人脸搜索 faceidentify
      - 个体创建 newperson
      - 删除个体 delperson
      - 增加人脸 addface
      - 删除人脸 delface
      - 设置信息 setinfo
      - 获取信息 getinfo
      - 获取组列表 getgroupids
      - 获取个体列表 getpersonids
      - 获取人脸列表 getfaceids
      - 获取人脸信息 getfaceinfo
    - 人脸验证 faceverify
  - 图片特效 effect(自己加的,分类存放便于维护)
    - 滤镜 ptuimgfilter
    - 人脸美妆 facecosmetic
    - 人脸变妆 facedecoration
    - 大头贴 facesticker
    - 颜龄检测 faceage
  - 图片识别 visionimgidy(自己加的,分类存放便于维护)
    - 看图说话 imgtotext
    - 多标签识别 imagetag
    - 模糊图片识别 imagefuzzy
    - 美食图片识别 imagefood
    - 场景识别 vision_scene
    - 物体识别 vision_object
  - 敏感信息甄别 sensitivity(自己加的,分类存放便于维护)
    - 暴恐识别 imageterrorism
    - 图片鉴黄 jianhuang
    - 音频鉴黄/敏感词检测 aaievilaudio
  - 智能闲聊 nlpchat(自己加的,分类存放便于维护)
    - 智能闲聊 nlpchat
  - 机器翻译 nlptrans(自己加的,分类存放便于维护)
    - 文本翻译 nlptrans
    - 语音翻译 speechtranslate
    - 图片翻译 imagetranslate
    - 语种识别 textdetect
  - 基础文本分析 nlpbase(自己加的,分类存放便于维护)
    - 分词 nlpbase
    - 词性 nlp_wordpos
    - 专有名词 nlp_wordner
    - 同义词 nlp_wordsyn
  - 语义解析 nlpsem(自己加的,分类存放便于维护)
    - 意图成分 nlpsem
    - 情感分析 nlpemo
  - 语音识别 aaiasr(自己加的,分类存放便于维护)
    - 语音识别 aaiasr
    - 长语音识别 wxasrlong
    - 关键词检索 detectword
  - 语音合成 aaitts(自己加的,分类存放便于维护)
    - 语音合成 aaitts

## 项目页面
- front 前端页面
  + 首页
  + 技术介绍页
  + 文档索引页
  + 文档详情页
  
- console 控制台页面
  - 控制台首页 console/home
  - 账号信息 console/user/account-info
  - 应用管理 console/application
    - 创建应用 console/application/create-app
    - 应用概览 console/application/{id}/overview
    - 数据分析 console/application/{id}/data-analysis
    - 应用信息 console/application/{id}/data-info
  - 能力库 console/capability/overview
    - 能力详情 console/capability/detail
  
## 需要的api
- 技术引擎列表
- 技术引擎详情
- 用户登录
- 用户注册
- 我的应用列表（应用基本信息、应用调用运行情况、接入的能力等）
- 创建应用
- 删除应用
- 编辑应用基本信息
- 能力列表（与技术引擎差不多，但是略有区别）
- 模糊搜索能力
- 将某个能力接入某个应用


## 通用组件
- 顶部导航栏
- 底部网站信息

- 控制台顶部导航栏
- 控制台底部版权信息

## 用户态
利用JWT实现基于token的鉴权机制
调用登录接口成功登录后，后台会返回一个token
将token保存到localstorage的accessToken中
调用其他接口时在请求的header中带上accessToken
调用接口时如果后台返回401状态码（和后台的约定），表示登录失效了，此时清除localstorage中的accessToken和userInfo
调用登录接口成功并保存token后会调用获取用户信息的接口，并将用户信息保存到localstorage的userInfo中
vuex保存userInfo以及实现自动登录

## todo list

- 文档详情考虑用静态页面，看看vuepress

- 修改创建应用页面（表单部分，考虑用iview的组件，自己写感觉很麻烦），对接创建应用接口
- 引入vuex，用户信息，控制台的顶部导航栏以及修改登录状态下官网的顶部导航栏
- 账号信息页
- 对接应用列表接口
- 对接删除应用接口
- 创建应用成功时显示appid和appkey
- 应用详情页面
- 对接编辑应用接口
- 编辑账号信息

- 编辑应用页面的复制功能(使用clipboard实现)
- 数据分析页面的时间选择
- 数据分析页面的选择具体能力时的页面显示
- 应用概览页面的折线图表
- 表格的分页

- 修改技术引擎产品详情页，对接技术引擎详情接口
- 技术引擎产品详情的功能体验

- 文档详情页



## 工作报告
### 第4周
- 完善技术详情页
- 登录页
- 文档中心

### 第5周
- 对接登录页
- 对接注册页
- 试用腾讯AI
- 控制台首页

### 第6周
- 获取用户信息，修改登录态的样式
- 控制台里的账号信息页面
- 控制台里的获取应用列表、创建应用、删除应用
- 创建应用成功时显示appid和appkey

### 第7周
- 应用详情页面
  + 应用概览
  + 数据分析
  + 应用信息：编辑应用

### 第8周
- 图表（ECharts）
  + 引入ECharts
  + 对照ECharts文档将图表修改成类似腾讯AI里的图表
- 能力库首页
  + 渲染能力库列表
```
list: [
  {
    label: "基础文本分析",
    value: "",
    children: [
      {
        label: "基础文本分析",
        value: "",
        content:
          "抽取文本关键信息，提供准确的分词、词性标注，命名实体识别、同义词转换等功能"
      }
    ]
  },
  {
    label: "语义解析",
    value: "",
    children: [
      {
        label: "意图成分",
        value: "",
        content: "对文本进行意图识别，快速找出意图及上下文成分"
      },
      {
        label: "情感分析",
        value: "",
        content: "对文本进行情感分析，快速判断情感倾向（正面或负面）"
      }
    ]
  },
  {
    label: "机器翻译",
    value: "",
    children: [
      {
        label: "文本翻译",
        value: "",
        content: "对文本进行翻译，支持多种语言之间互译"
      },
      {
        label: "语音翻译",
        value: "",
        content: "识别出音频中的文字，并进行翻译"
      },
      {
        label: "图片翻译",
        value: "",
        content: "识别图片中的文字，并进行翻译"
      },
      {
        label: "语种识别",
        value: "",
        content: "识别给出文本的语种"
      }
    ]
  },
  {
    label: "智能闲聊",
    value: "",
    children: [
      {
        label: "智能闲聊",
        value: "",
        content:
          "基于文本的基础聊天能力，具备上下文语义理解的机器聊天功能"
      }
    ]
  },
  {
    label: "图片识别",
    value: "",
    children: [
      {
        label: "看图说话",
        value: "",
        content: "用一句话描述图片"
      },
      {
        label: "多标签识别",
        value: "",
        content: "识别一个图像的标签信息，对图像分类"
      },
      {
        label: "模糊图片识别",
        value: "",
        content: "判断一个图像的模糊程度"
      },
      {
        label: "美食图片识别",
        value: "",
        content: "识别一个图像是否为美食图像"
      },
      {
        label: "场景物体识别",
        value: "",
        content:
          "对图片进行场景物体识别，快速找出图片中包含的场景物体信息"
      }
    ]
  },
  {
    label: "敏感信息甄别",
    value: "",
    children: [
      {
        label: "暴恐识别",
        value: "",
        content: "识别一个图像是否为暴恐图像"
      },
      {
        label: "图片鉴黄",
        value: "",
        content: "识别一个图像是否为色情图像"
      },
      {
        label: "音频鉴黄/敏感词检测",
        value: "",
        content: "识别一段音频是否为恶意音频，并判断其恶意类别"
      }
    ]
  },
  {
    label: "OCR",
    value: "",
    children: [
      {
        label: "身份证OCR",
        value: "",
        content: "识别身份证图像上面的详细身份信息"
      },
      {
        label: "行驶证/驾驶证OCR",
        value: "",
        content: "识别行驶证或驾驶证图像上面的字段信息"
      },
      {
        label: "通用OCR",
        value: "",
        content: "识别上传图像上面的字段信息"
      },
      {
        label: "营业执照OCR",
        value: "",
        content: "识别营业执照上面的字段信息"
      },
      {
        label: "银行卡OCR",
        value: "",
        content: "识别银行卡上面的字段信息"
      },
      {
        label: "手写体OCR",
        value: "",
        content: "检测和识别图像上面手写体的字段信息"
      },
      {
        label: "车牌OCR",
        value: "",
        content: "识别车牌上面的字段信息"
      },
      {
        label: "名片OCR",
        value: "",
        content: "识别名片图像上面的字段信息"
      }
    ]
  },
  {
    label: "图片特效",
    value: "",
    children: [
      {
        label: "滤镜",
        value: "",
        content: "对原图进行滤镜特效处理，适合人物、风景等各类图片"
      },
      {
        label: "人脸美妆",
        value: "",
        content: "给定图片和美妆编码，对原图进行人脸美妆特效处理"
      },
      {
        label: "人脸变妆",
        value: "",
        content: "给定图片和变妆编码，对原图进行人脸变妆特效处理"
      },
      {
        label: "大头贴",
        value: "",
        content: "给定图片和大头贴编码，对原图进行大头贴特效处理"
      },
      {
        label: "颜龄检测",
        value: "",
        content: "给定图片，对原图进行人脸颜龄检测处理"
      }
    ]
  },
  {
    label: "人脸与人体识别",
    value: "",
    children: [
      {
        label: "人脸检测与分析",
        value: "",
        content: "识别上传图像上面的人脸信息"
      },
      {
        label: "多人脸检测",
        value: "",
        content: "识别上传图像上面的人脸位置，支持多人脸识别"
      },
      {
        label: "跨年龄人脸识别",
        value: "",
        content: "上传两张人脸照，返回最相似的两张人脸及相似度"
      },
      {
        label: "五官定位",
        value: "",
        content: "对请求图片进行五官定位"
      },
      {
        label: "人脸对比",
        value: "",
        content: "对请求图片进行人脸对比"
      },
      {
        label: "人脸搜索与验证",
        value: "",
        content:
          "人脸搜索支持图片人脸在人脸库中进行搜索；人脸验证可根据图片和个体ID，返回是否是同一个人"
      }
    ]
  },
  {
    label: "语音合成",
    value: "",
    children: [
      {
        label: "语音合成",
        value: "",
        content: "将文字转换为语音，返回文字的语音数据"
      }
    ]
  },
  {
    label: "语音识别",
    value: "",
    children: [
      {
        label: "语音识别",
        value: "",
        content:
          "对音频进行语音识别，并返回语音的文字内容，支持整段识别或流式识别"
      },
      {
        label: "长语音识别",
        value: "",
        content: "上传长音频，提供回调接口，异步获取识别结果"
      },
      {
        label: "关键词检索",
        value: "",
        content: "上传长音频，设置关键词，提供回调接口，异步获取识别结果"
      }
    ]
  }
],
```
  + 实现滚动切换Nav
  + 实现前端模糊搜索

### 第9周
- 能力库详情页

### 第10周、11周
#### 修改技术引擎详情页，内容和能力库目录统一
#### 明确api
控制台部分目前还需要以下api
1. 控制台首页的已接入能力表格
  + 分页
  + 能力、API、本月调用量、免费调用限额、QPS限额、接口状态
2. 应用概览里的调用总量（近30天）图表
  + 返回调用总量数组，如[0,0,0,0]，数组长度为天数30，一个元素项对应一天的数据
3. 应用概览里的能力运行概览（近30天）表格
  + 某个应用近30天的数据
  + 分页
  + 能力	API	调用量	失败次数	失败率	耗时（ms）
4. 数据分析里的某个应用已接入的能力列表
  + 返回某个应用已接入的能力列表
5. 数据分析里的能力运行概况表格
  + 参数：能力（全部能力或者某个能力）、开始时间、结束时间
  + 返回对应的分页表格：能力	API	调用量	失败次数	失败率	耗时（ms）
6. 数据分析里的某个能力某段时间的调用次数和耗时
  + 参数：能力、开始时间、结束时间
  + 返回：总次数数组、成功次数数组、失败次数数组、调用耗时数组（如[0,0,0,0]，数组长度为天数，一个元素项对应一天的数据）
7. 能力库里的接入能力时需要用到的判断某个应用是否已经接入该能力，上次讨论过方案，你选择一下
  - 在应用列表那里给每个应用加一个已接入能力列表 或者 给个接口查询某个能力的接入情况
  - 7这里如果选择 在应用列表那里给每个应用加一个已接入能力列表，那么就不用提供接口4，如果提供了接口4，就不需要7了
8. 关于api限额，我看你那里没加限额，看情况做不做吧，不做的话，前端那边直接删掉

#### 功能体验分析
- OCR：图像识别类，显示识别条目
- 人脸与人体识别
  + 跨年龄人脸识别、人脸比对：图像比对类，会根据识别数据渲染div标识原始图像，显示相似度
  + 人脸搜索：图像识别类，显示多张图片和对应的相似度
  + 手势识别：视频演示类，显示文字描述和多个演示视频
  + 其他：图像识别类，会根据识别数据渲染div标识原始图像，显示json数据
- 图片特效
  + 人脸融合：无功能体验
  + 滤镜、人脸美妆、人脸变妆、大头贴：图像融合类，会根据功能选项和原始图像生成融合图像
  + 颜龄检测：图像识别类，显示结果未知
- 图片识别
  + 多标签识别：图像识别类，显示标签符合度
  + 其他：图像识别类，显示json数据
- 敏感信息甄别
  + 暴恐识别、图片鉴黄：图像识别类，会根据识别数据渲染概率标识原始图像，显示标签符合度
  + 其他：无
- 智能闲聊：无
- 机器翻译
  + 文本翻译
  + 语音翻译
  + 图片翻译
- 基础文本分析
  + 分词/词性
  + 专有名词
  + 同义词
- 语义解析
  + 意图成分
  + 情感分析
- 语音识别
  + 语音识别
  + 长语音识别
  + 关键词检索
- 语音合成

可以考虑几个通用的功能体验由后端来提供原始数据，一些特殊的功能体验，type设为null，其中一部分前端根据特定的算法硬编码特定的功能体验，另一部分则无功能体验
图像识别类的识别结果暂时考虑先显示json数据

以下是我目前觉得可以做成通用的功能体验
- 技术引擎详情页的功能体验
  + 图像识别类picture(OCR中的全部算法、人脸与人体识别中的部分算法、图片识别中的部分算法、敏感信息甄别中的部分算法)
    + 除了type，后台还需要提供：原始图片url
    + 需要一个图片上传接口(如果算法接口可以同时支持网络图片url和base64格式则不需要图片上传接口)
    + 需要算法接口地址
  + 图像对比类picture2(人脸与人体识别中的跨年龄人脸识别、图片特效里的部分算法、人脸对比)
    + 除了type，后台还需要提供：两个原始图片url
    + 需要一个图片上传接口(如果算法接口可以同时支持网络图片url和base64格式则不需要图片上传接口)
    + 需要算法接口地址
  + 图像融合类（图片特效里的部分算法）
    + 除了type，后台还需要提供：原始图片url、图像融合的功能选项列表（图片+文字）
    + 需要一个图片上传接口(如果算法接口可以同时支持网络图片url和base64格式则不需要图片上传接口)
    + 需要算法接口地址
  + 视频演示类（脸与人体识别中的手势识别）
    + 除了type，后台还需要提供：文字说明、演示视频url列表
  + 无功能体验或前端硬编码特定的算法显示特定功能体验
    + 需要算法接口地址
和陆胜稳讨论之后，觉得有几个实现起来可能会比较麻烦。目前也不知道我们有哪些算法，以及和腾讯ai的是否相同，目前还没写代码实现这些功能体验。



### 第12周
- 控制台
  + 对接后台应用接入能力
  + 对接控制台首页已接入能力表格（todo）
- 文档详情页



