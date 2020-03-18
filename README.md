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


## 通用组件
- 顶部导航栏
- 底部网站信息

## todo list
- 设计技术引擎product的数据结构，然后用v-for修改顶部导航栏和首页的技术引擎列表
- 复制技术引擎的介绍页
- 设计技术引擎介绍的数据结构，然后用路由传参、组件传参来修改技术引擎的介绍页
- 复制文档中心
- 复制文档详情页
- 后续可以考虑制作控制台部分了


- 首页的更多出现性能问题
- 功能体验部分如何实现(细节还需要打磨)
- 技术引擎的详情页后续考虑要不要分成多个页面
  
- tab通过传index实现(完成)
- 文档中心和文档
- 控制台页面


## 工作报告
### 第4周
- 完善技术详情页
- 