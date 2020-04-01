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
TODO：vuex保存userInfo以及实现自动登录

## todo list

- 文档详情考虑用静态页面，看看vuepress

- 修改创建应用页面（表单部分，考虑用iview的组件，自己写感觉很麻烦），对接创建应用接口
- 引入vuex，用户信息，控制台的顶部导航栏以及修改登录状态下官网的顶部导航栏
- 对接应用列表接口
- 对接删除应用接口
- 应用详情页面
- 对接编辑应用接口

- 修改技术引擎产品详情页，对接技术引擎详情接口
- 技术引擎产品详情的功能体验

- 文档详情页

## 后台管理系统
- 用户管理：可以查看平台用户的相关信息，以及对这些用户进行一些操作。
- 技术引擎管理（对应平台网站的技术引擎产品列表）：提供大类的管理，以及可以将已有的算法添加到某个大类下。
- 解决方案管理
- 文档管理
- 应用管理：管理用户创建的应用
- 能力库管理（对应控制台里的能力库）
- 数据统计

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
- 获取应用列表、创建应用、删除应用

### 第7周
- 应用详情页面、编辑应用

