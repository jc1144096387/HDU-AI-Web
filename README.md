## hdu-ai-web
HDU AI平台（仿腾讯AI）

### 项目介绍
基于vue.js的人工智能算法平台，样式部分大多直接复制腾讯AI开放平台的html和css代码并作一些修改，一部分采用iview的ui组件，功能部分采用vue
.js参照腾讯AI开放平台的功能进行复现。该平台主要包含首页、技术引擎、文档中心、登录、注册、控制台首页、应用管理（创建应用、删除应用、应用概览、数据分析、应用信息）、能力库、接入能力等功能。

### 项目预览
预览地址： http://106.54.192.188/hdu-ai-web/

测试账号：test  密码：123

### 启动项目
注：需要先在开发机器上安装node.js(npm)

安装npm依赖
```
npm install
```

在开发环境启动项目, 以及打包项目

```
1. 使用命令行

# 启动项目
npm run serve

# 打包项目
npm run build


2. 使用vue ui（推荐）

# 安装最新版的vue-cli    
npm install -g @vue/cli

# 检查vue-cli版本
vue -V

# 运行 vue ui
vue ui

# 运行vue ui之后，在ui界面进行相应的启动打包操作
```

### 部署项目
本系统采用前后端分离的模式，可以考虑将前端项目单独部署到nginx并通过添加反向代理配置解决跨域问题。

接下来介绍如何将本项目部署到云服务器的docker nginx容器上  

nginx容器的创建及相关配置文件可参考项目代码中的docker文件夹     
创建好nginx容器后，用xftp等工具连接云服务器，将打包生成的dist目录下的文件拖入对应目录

### 技术选型
- MVVM框架：vue.js        
- 前端路由框架：vue-router
- 全局状态管理框架：vuex
- 前端UI框架：iview（view ui）
- 前端HTTP框架：Axios
- 图表框架：Echarts

### 项目结构
- api -- 请求后端数据用到的接口
- assets -- 静态资源，如图片等
- components -- 公共组件
  + footer -- 控制台的页脚（前台的页面暂未抽离也未修改）
  + header -- 前台顶栏和控制台顶栏
  + chart.vue -- 简单封装的echarts折线图
- libs -- 工具文件
  + axios.js -- 封装axios，用于api的http请求
  + dateUtil -- 日期格式转化
  + storage -- 封装localstorage，主要用于存储token
- mock -- 前期开发时写的模拟数据，后期有变动，以后端返回数据为准
- iview -- vue-cli插件形式安装iview
- router -- 前端路由vue-router
- store -- 全局状态管理框架vuex
- views -- 项目的页面文件
  + console -- 控制台相关页面
    - application -- 应用管理相关页面
      + create-app.vue -- 创建应用
      + detail.vue -- 应用详情主体布局
      + detail
        - data-analysis.vue -- 应用详情的数据分析
        - data-info.vue -- 应用详情的应用信息
        - overview.vue -- 应用详情的应用概览
    - capability -- 能力库相关页面
      + detail -- 能力详情页面
      + overview -- 能力库列表页面
    - home -- 控制台首页
    - user -- 账号信息页面
  + error -- 错误页面（暂时只用到了404）
  + front -- 前台相关页面
    - doc -- 文档中心
      + detail.vue -- 文档中心详情页
      + home.vue -- 文档中心首页
    - home -- 前台首页
    - product -- 技术引擎详情页
  + login -- 登录页面
  + regist -- 注册页面

### 项目功能
本项目主要分为前台和控制台。其中，前台页面不需要登录即可访问，而控制台页面需要登录后才能访问。本项目未实现权限功能，仅通过api是否需要token来实现是否需要登录才能访问。如果某个页面的接口需要token，用户未登录时调用该接口，因为没有token或token过期，后台会返回401（和后台的约定）表示未授权，此时前端会清空localstorage里的token和userInfo，并跳转登录页面让用户重新登录。

对于用户来说，大概的使用流程如下：
- 通过前台部分了解和体验平台的算法
- 注册登录以便后续使用平台提供的算法
- 登录后进入控制台
- 创建应用
- 浏览能力库，为应用接入能力
- 对照文档，使用应用的appid和appkey调用已接入的能力
- 通过控制台管理应用，增加应用、删除应用、查看应用详情（能力调用情况、能力运行情况）

#### 前台部分
前台部分主要用于让用户了解我们平台提供的算法及相关文档。

前台部分主要包括首页、文档中心、技术引擎详情页以及前台每个页面都有的顶栏。          
首页主要有一个轮播图和技术引擎的目录。        
文档中心包括文档目录和文档详情页，目前文档目录和技术引擎目录一致，文档详情页的具体内容还未填充。          
技术引擎详情页主要有各个算法的具体介绍和功能体验，其中功能体验目前只实现了机器翻译的文字翻译，后续只需要和后台做好约定，根据后台返回的目录中的关键字进行条件渲染对应的页面即可。          
顶栏包含前台部分各个页面的入口，以及登录入口和控制台入口。

#### 登录注册
本项目的账号验证方式采用最常见的账号密码形式。
其中，前端会对用户输入的密码进行一次md5加密后再传给后端。

#### 控制台部分
控制台部分用于让用户管理自己的应用和接入能力。

控制台部分主要包括控制台首页、账号信息、应用管理、能力库以及控制台每个页面都有的控制台顶栏。

在控制台首页，用户能查看拥有的应用和总体的能力接入情况。

账号信息主要包括用户的id、绑定的手机和绑定的邮箱。

应用管理，主要有创建应用、删除应用和查看应用详情功能。在应用概览中，用户能查看该应用近30天的调用总量和能力运行概况。在数据分析中，用户可以通过选择能力和时间来查看相应的应用调用情况和能力运行情况。在应用信息中，用户能够查看应用的信息以及修改应用的部分信息，其中appid和appkey是用户调用能力的关键。

在能力库中，用户可以查看平台提供的所有能力（目前与技术引擎保持一致），用户可以通过模糊查询找到需要的能力。进入能力详情页可以查看能力的介绍以及将能力接入应用和查看文档。接入能力后，该应用即可调用该能力。

控制台顶栏主要包括各个页面的入口，以及退出登录。

### 核心代码介绍
#### 封装axios
具体代码见libs/axios.js
该文件基于axios对http请求的request和response进行了拦截。
对request进行了请求超时拦截，抛出异常信息。
对response进行了一些状态码的拦截，如果后台返回401状态码，表示未授权，清空本地的token和userInfo，并跳转登录页。
对常见的http请求方法，如get、post等进行了封装。需要向后端发送具体的请求时，只需要在api文件中导入这些方法并传入具体的url即可供具体的页面使用。

#### Echarts
简单封装了一个Echarts日期相关的折线图。见components/chart.vue       
其中views/console/application/detail/data-analysis.vue和views/console/application/detail/data-info.vue这两个页面使用了该组件        
使用方法可参考上述文件和文章https://blog.csdn.net/u013556477/article/details/105477430      
如有需要修改图表样式，请参照Echarts官方文档进行修改

#### 关于页面共享的数据
本项目采用vuex进行全局状态管理。见store目录下的文件       
主要有用户信息，技术引擎目录（能力库和文档中心的目录也是这个）和用户应用列表。        
状态的定义在index.js文件中。        
mutations.js中为同步方法，用来修改index.js中定义的状态。        
actions.js中为异步方法，通过调用api获取后端数据并调用提交mutation来修改状态。       
getters.js类似compute计算属性，用于对index.js状态进行特殊处理，本项目中未使用。       
具体使用方法可参考各个使用了vuex中数据的页面以及官方文档：https://vuex.vuejs.org/zh/        

#### 关于vue-router
本项目的vue-router配置见router/index.js         
具体使用见官方文档：https://router.vuejs.org/zh/installation.html
需要注意的有两点：
1. 无路由匹配时跳转404页面。
需要在路由列表的最后添加以下代码。必须添加在最后，表示与之前路由规则都不匹配的所有路由。
```
// 无对应路由跳转404
  { path: '*', component:  () => import('@/views/error/404/404.vue')}
```
2. history模式
history模式利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。这两个方法能改变当前的url，但浏览器不会向后端发送对应的请求。        
需要注意的是，当用户通过url打开某个页面或者进行刷新操作时，浏览器会像这个url发送http请求，但是实际上服务器中并没有对应的html资源，即返回404找不到资源。因此，使用history模式时，需要服务器进行支持。
之前我介绍了通过docker的nginx容器进行部署该项目，现在，我将以此为例介绍如何配置服务器解决上述问题。
请看docker/config/default.conf文件，这是nginx的配置文件。
请看以下代码和注释
```
    # 表示匹配/hdu-ai-web请求
    location /hdu-ai-web {
        # 对应/hdu-ai-web请求，会以/usr/share/nginx/html为根目录，因此，如果是这样的配置，我们只需要在html目录下创建hdu-ai-web目录，并将打包后的文件拖入该目录即可，对应的，ip/hdu-ai-web/即为我们的平台首页
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        # 表示如果匹配不到资源，则会返回/hdu-ai-web/index.html文件
        try_files $uri $uri/ /hdu-ai-web/index.html;
    }
    # 表示匹配/api请求（/api是本项目的后台接口前缀）
    location /api {
        # 表示/api请求会转发到proxy_pass对应的主机，即实现反向代理解决跨域问题（此处与history模式无关，讲到nginx配置顺带提一下反向代理解决跨域问题）
        proxy_pass http://47.99.47.230:8090;
    }
```
更详细的nginx配置请自行搜索nginx配置相关的文章

#### 关于vue的响应式原理
由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。
假设有以下data
```
data:{
  object:{
    k1: 'v1',
  },
  arr:[1,2,3]
}
```
如果使用以下代码来更新这些data，将会出现数值被修改，而视图并未重新渲染的情况，即vue没有检测到数组和对象的变化。
```
      this.object.k2 = 'v2';
      this.arr[1] = 22;
```
因为对于对象，vue无法检测 property 的添加或移除。我们可以用以下代码来添加响应式的property
```
this.$set(this.object,'k2','v2');
// 或者创建新的对象赋值给this.object
this.object = Object.assign({}, this.object, { a: 1, b: 2 })
```
对于数组，Vue 不能检测以下数组的变动：

1. 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
2. 当你修改数组的长度时，例如：vm.items.length = newLength

为解决这一问题可以使用
```
// Vue.set方法
this.$set(vm.items, indexOfItem, newValue)
// Array.prototype.splice方法
this.arr.splice(1, 1, 22)
// 对于问题二：修改数组长度，可以使用Array.prototype.splice(newLength)
// 长度变为1
this.arr.splice(1)
```
更详细的介绍可参考官方文档：https://cn.vuejs.org/v2/guide/reactivity.html

### 项目总结
本项目的核心功能基本完成。          
后续开发可考虑完善以下功能：        
- 技术引擎的功能体验：目前只有机器翻译-文字翻译的功能体验，后续可根据具体算法开发对应的功能体验
- 平台的图标和页脚信息等：目前图标和页脚信息基本直接使用了腾讯AI开放平台，后续可根据实际需要替换对应的图标和信息
- 文档详情页：目前文档详情页的内容为硬编码的md文件，后续可根据后端提供的接口替换成对应的md文件内容或者使用富文本的形式


---

分割线： 以下是项目开发过程中的一些草稿，比较乱，可作以上正式文档的补充         

---

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
6. 数据分析里的某个能力某段时间的调用次数和耗时图表
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
  + 对接控制台首页已接入能力表格
  + 应用页面数据改用vuex管理，并将url传参改为传index，对接应用概览的图表和表格
  + 对接数据分析的图表
- 文档详情页
  + 文档内容用md字符串存入数据库
  + （备选方案）文档内容用md文件，文件名与目录项value对应，放在前端项目的静态资源中
  + 参考博客
    - https://blog.csdn.net/qq_38735931/article/details/103242525
    - https://blog.csdn.net/qq_38735931/article/details/103389123
    - 注意点：
      1. markdown-loader
        + For Vue1
          npm i vue-markdown-loader@0 -D
        + For Vue2
          npm i vue-markdown-loader -D
      2. 缺少babel-runtime/core-js/get-iterator 和 babel-runtime/core-js/object/keys
        + 重新安装一下babel-runtime，若不行，再安装@babel-runtime
    

### 第13周
- 控制台
  + 修改数据分析里的小bug-初始日期未格式化导致获取的图表数据不对
  + 应用管理中应用概览跳转数据分析以及使用watch修复刷新后数据丢失问题
- 其他页面跳转文档详情页
  + 跳转时url传参value，文档详情页遍历二级目录，根据value确定当前项，显示当前项并做一些处理，如获取该项的文档内容。
  + 文档中心跳转文档详情页
  + 控制台首页跳转文档详情页
  + 控制台能力库详情页跳转文档详情页
  + 技术引擎产品详情页跳转文档详情页

### 第14周
- 完善一些细节
  + 跳转路由时自动滚动到顶部(使用vue-router的scrollBehavior实现)
  + 调用后台接口获取数据的等待期间 显示iview的loading组件（控制台部分页面添加了loading）

### 第15周
- 完善细节
  + 跳转页面时顶部加入模拟进度条（iview）

### 第16周
- 功能体验-机器翻译-文字翻译（英译中）
- 部署到云服务器的docker的nginx容器中，预览地址：http://106.54.192.188/hdu-ai-web/
- 处理部署后出现的一些bug，添加404页面

