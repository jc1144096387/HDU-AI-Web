<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <front-header></front-header>
    <!-- 广告轮播图 -->
    <div class="banner jmod_banner">
      <a
        href="https://ai.qq.com/case/facedoor.shtml"
        target="_blank"
        class="ban"
        :class="bannerIndex==0?'cur':''"
        style="background-color: rgb(3, 22, 69); background-image: url(&quot;https://p.qpic.cn/zckj/0/f71e1effa232a7bdcf543686eaa437ad1558687947218/0&quot;);"
        _stat_click_id="banner_0"
      ></a>
      <a
        href="https://ai.qq.com/product/gesture.shtml"
        target="_blank"
        class="ban"
        :class="bannerIndex==1?'cur':''"
        style="background-color: rgb(3, 22, 69); background-image: url(&quot;https://p.qpic.cn/zckj/0/2f70a970a1a4b965b848a73bc1ba3f9f1548407391649/0&quot;);"
        _stat_click_id="banner_1"
      ></a>
      <a
        href="https://ai.qq.com/product/evilaudio.shtml"
        target="_blank"
        class="ban"
        :class="bannerIndex==2?'cur':''"
        style="background-color: rgb(3, 22, 69); background-image: url(&quot;https://p.qpic.cn/zckj/0/b0cece78f1656f394b28b61d9f661d311540868418205/0&quot;);"
        _stat_click_id="banner_2"
      ></a>
      <div class="layout">
        <div class="ban-index">
          <span
            class="index-item"
            :class="bannerIndex==0?'cur':''"
            data-index="0"
            @click="changeBanner(0)"
          ></span>
          <span
            class="index-item"
            :class="bannerIndex==1?'cur':''"
            data-index="1"
            @click="changeBanner(1)"
          ></span>
          <span
            class="index-item"
            :class="bannerIndex==2?'cur':''"
            data-index="2"
            @click="changeBanner(2)"
          ></span>
        </div>
      </div>
    </div>

    <div class="sec sec-capability">
      <div class="layout">
        <h2 class="sec-tit">接入腾讯AI能力 打造极致产品</h2>
        <div class="sec-cont">

          <div class="capability-row">
            <template v-for="(item1, index1) in productList" >
            <div v-if="index1 <=3" :key="index1" class="capability-group" :class="index1%4==3?'no-margin':''">
              <div class="capability-group-logo" >
                <i
                  class="capa-1"
                  :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">{{item1.label}}</p>
                <template v-for="(item2,index2) in item1.children">
                <a
                  v-if="index2<5" :key="index2"
                  _stat_click_id="capa_ocridentify"
                  class="capability-group-wrap__item"
                  @click="goToProductDetail(item1.value, item2.value)"
                >{{item2.label}}</a>
                </template>

                <a
                  v-if="item1.children.length>5"
                  _stat_click_id="capa_more"
                  _stat_action_obj="ocr"
                  href="javascript:void(0);"
                  class="capability-group-more jmod-capa-more"
                  :style="{display: isLoadMore[index1]?'none':'block'}"
                  @click="loadMore(index1)"
                >
                  <i
                    class="ico-more"
                    :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                  ></i>展开更多
                </a>
                <div class="hide-wrap" :style="{display: isLoadMore[index1]?'block':'none'}">
                  <template v-for="(item2,index2) in item1.children">
                    <a
                      v-if="index2>=5" :key="index2"
                      _stat_click_id="capa_ocridentify"
                      class="capability-group-wrap__item"
                      @click="goToProductDetail(item1.value, item2.value)"
                    >{{item2.label}}</a>
                  </template>

                  <a
                    _stat_click_id="capa_hide"
                    _stat_action_obj="ocr"
                    href="javascript:void(0);"
                    class="capability-group-more jmod-capa-hide"
                    @click="hideMore(index1)"
                  >
                    <i
                      class="ico-more"
                      style="transform: rotate(180deg);"
                      :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                    ></i>收起
                  </a>
                </div>
              </div>
            </div>
            </template>
          </div>
          <div class="capability-row">
            <template v-for="(item1, index1) in productList" >
            <div v-if="index1>=4 && index1 <=7" :key="index1" class="capability-group" :class="index1%4==3?'no-margin':''">
              <div class="capability-group-logo" >
                <i
                  class="capa-1"
                  :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">{{item1.label}}</p>
                <template v-for="(item2,index2) in item1.children">
                <a
                  v-if="index2<5" :key="index2"
                  _stat_click_id="capa_ocridentify"
                  class="capability-group-wrap__item"
                  @click="goToProductDetail(item1.value, item2.value)"
                >{{item2.label}}</a>
                </template>

                <a
                  v-if="item1.children.length>5"
                  _stat_click_id="capa_more"
                  _stat_action_obj="ocr"
                  href="javascript:void(0);"
                  class="capability-group-more jmod-capa-more"
                  :style="{display: isLoadMore[index1]?'none':'block'}"
                  @click="loadMore(index1)"
                >
                  <i
                    class="ico-more"
                    :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                  ></i>展开更多
                </a>
                <div class="hide-wrap" :style="{display: isLoadMore[index1]?'block':'none'}">
                  <template v-for="(item2,index2) in item1.children">
                    <a
                      v-if="index2>=5" :key="index2"
                      _stat_click_id="capa_ocridentify"
                      class="capability-group-wrap__item"
                      @click="goToProductDetail(item1.value, item2.value)"
                    >{{item2.label}}</a>
                  </template>

                  <a
                    _stat_click_id="capa_hide"
                    _stat_action_obj="ocr"
                    href="javascript:void(0);"
                    class="capability-group-more jmod-capa-hide"
                    @click="hideMore(index1)"
                  >
                    <i
                      class="ico-more"
                      style="transform: rotate(180deg);"
                      :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                    ></i>收起
                  </a>
                </div>
              </div>
            </div>
            </template>
          </div>
          <div class="capability-row">
            <template v-for="(item1, index1) in productList" >
            <div v-if="index1>=8 && index1 <=11" :key="index1" class="capability-group" :class="index1%4==3?'no-margin':''">
              <div class="capability-group-logo" >
                <i
                  class="capa-1"
                  :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">{{item1.label}}</p>
                <template v-for="(item2,index2) in item1.children">
                <a
                  v-if="index2<5" :key="index2"
                  _stat_click_id="capa_ocridentify"
                  class="capability-group-wrap__item"
                  @click="goToProductDetail(item1.value, item2.value)"
                >{{item2.label}}</a>
                </template>

                <a
                  v-if="item1.children.length>5"
                  _stat_click_id="capa_more"
                  _stat_action_obj="ocr"
                  href="javascript:void(0);"
                  class="capability-group-more jmod-capa-more"
                  :style="{display: isLoadMore[index1]?'none':'block'}"
                  @click="loadMore(index1)"
                >
                  <i
                    class="ico-more"
                    :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                  ></i>展开更多
                </a>
                <div class="hide-wrap" :style="{display: isLoadMore[index1]?'block':'none'}">
                  <template v-for="(item2,index2) in item1.children">
                    <a
                      v-if="index2>=5" :key="index2"
                      _stat_click_id="capa_ocridentify"
                      class="capability-group-wrap__item"
                      @click="goToProductDetail(item1.value, item2.value)"
                    >{{item2.label}}</a>
                  </template>

                  <a
                    _stat_click_id="capa_hide"
                    _stat_action_obj="ocr"
                    href="javascript:void(0);"
                    class="capability-group-more jmod-capa-hide"
                    @click="hideMore(index1)"
                  >
                    <i
                      class="ico-more"
                      style="transform: rotate(180deg);"
                      :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                    ></i>收起
                  </a>
                </div>
              </div>
            </div>
            </template>
          </div>
          

          <!-- <div class="capability-row">
            <div class="capability-group">
              <div class="capability-group-logo">
                <i
                  class="capa-5"
                  :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">敏感信息甄别</p>
                <a
                  _stat_click_id="capa_terror"
                  href="/product/terror.shtml"
                  class="capability-group-wrap__item"
                >暴恐识别</a>
                <a
                  _stat_click_id="capa_yellow"
                  href="/product/yellow.shtml"
                  class="capability-group-wrap__item"
                >图片鉴黄</a>
                <a
                  _stat_click_id="capa_evilaudio"
                  href="/product/evilaudio.shtml"
                  class="capability-group-wrap__item"
                >音频鉴黄</a>
                <a
                  _stat_click_id="capa_sensitive"
                  href="/product/sensitive.shtml"
                  class="capability-group-wrap__item no-border"
                >音频敏感词检测</a>
              </div>
            </div>
            <div class="capability-group">
              <div class="capability-group-logo">
                <i
                  class="capa-6"
                  :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">智能闲聊</p>
                <a
                  _stat_click_id="capa_nlpchat"
                  href="/product/nlpchat.shtml"
                  class="capability-group-wrap__item no-border"
                >智能闲聊</a>
              </div>
            </div>
            <div class="capability-group">
              <div class="capability-group-logo">
                <i
                  class="capa-7"
                  :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">机器翻译</p>
                <a
                  _stat_click_id="capa_nlptranstext"
                  href="/product/nlptrans.shtml#text"
                  class="capability-group-wrap__item"
                >文本翻译</a>
                <a
                  _stat_click_id="capa_nlptransaudio"
                  href="/product/nlptrans.shtml#audio"
                  class="capability-group-wrap__item"
                >语音翻译</a>
                <a
                  _stat_click_id="capa_nlptransphoto"
                  href="/product/nlptrans.shtml#photo"
                  class="capability-group-wrap__item no-border"
                >图片翻译</a>
              </div>
            </div>
            <div class="capability-group no-margin">
              <div class="capability-group-logo">
                <i
                  class="capa-8"
                  :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">基础文本分析</p>
                <a
                  _stat_click_id="capa_nlpbaseparticiple"
                  href="/product/nlpbase.shtml#participle"
                  class="capability-group-wrap__item"
                >分词/词性</a>
                <a
                  _stat_click_id="capa_nlpbaseproper"
                  href="/product/nlpbase.shtml#proper"
                  class="capability-group-wrap__item"
                >专有名词</a>
                <a
                  _stat_click_id="capa_nlpbasesynonym"
                  href="/product/nlpbase.shtml#synonym"
                  class="capability-group-wrap__item no-border"
                >同义词</a>
              </div>
            </div>
          </div>
          <div class="capability-row">
            <div class="capability-group">
              <div class="capability-group-logo">
                <i
                  class="capa-9"
                  :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">语义解析</p>
                <a
                  _stat_click_id="capa_nlpsem"
                  href="/product/nlpsem.shtml"
                  class="capability-group-wrap__item"
                >意图成分</a>
                <a
                  _stat_click_id="capa_nlpemo"
                  href="/product/nlpemo.shtml"
                  class="capability-group-wrap__item no-border"
                >情感分析</a>
              </div>
            </div>
            <div class="capability-group">
              <div class="capability-group-logo">
                <i
                  class="capa-10"
                  :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">语音识别</p>
                <a
                  _stat_click_id="capa_aaiasr"
                  href="/product/aaiasr.shtml"
                  class="capability-group-wrap__item"
                >语音识别</a>
                <a
                  _stat_click_id="capa_aaiasrl"
                  href="/product/aaiasrl.shtml"
                  class="capability-group-wrap__item"
                >长语音识别</a>
                <a
                  _stat_click_id="capa_keywords"
                  href="/product/keywords.shtml"
                  class="capability-group-wrap__item no-border"
                >关键词检索</a>
              </div>
            </div>
            <div class="capability-group">
              <div class="capability-group-logo">
                <i
                  class="capa-11"
                  :style="{backgroundImage:'url('+require('@/assets/sprite1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">语音合成</p>
                <a
                  _stat_click_id="capa_aaitts"
                  href="/product/aaitts.shtml"
                  class="capability-group-wrap__item no-border"
                >语音合成</a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div class="sec sec-resource">
      <div class="layout">
        <h2 class="sec-tit">6大资源助力企业加速</h2>
        <div class="sec-cont">
          <div class="resource-left">
            <div class="resource-item item-1">
              <p class="resource-item-name">技术</p>
              <div class="resource-item-desc">
                <p>AI Lab、优图、微信AI顶尖技术支持</p>
              </div>
            </div>
            <div class="resource-item item-2">
              <p class="resource-item-name">市场</p>
              <div class="resource-item-desc">
                <p>提供TGPC等顶级舞台</p>
                <p>顶尖AI科技媒体追踪报道</p>
              </div>
            </div>
            <div class="resource-item item-3">
              <p class="resource-item-name">投资</p>
              <div class="resource-item-desc">
                <p>VC机构关注和对接</p>
                <p>获得腾讯投资机会</p>
              </div>
            </div>
          </div>
          <div class="resource-middle">
            <img
              src="//cdn.ai.qq.com/ai/page/index/img/resource-bg-d6f52c58c8.png?max_age=31536000"
              alt
            />
          </div>
          <div class="resource-right">
            <div class="resource-item item-4">
              <p class="resource-item-name">导师</p>
              <div class="resource-item-desc">
                <p>技术产品专家深入辅导</p>
                <p>行业大咖指导企业发展</p>
              </div>
            </div>
            <div class="resource-item item-5">
              <p class="resource-item-name">产业</p>
              <div class="resource-item-desc">
                <p>行业客户资源对接</p>
                <p>供应链/硬件等资源对接</p>
              </div>
            </div>
            <div class="resource-item item-6">
              <p class="resource-item-name">众创空间</p>
              <div class="resource-item-desc">
                <p>线上创业服务线下实体空间，一站式解决企业需求</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="gas jmod-aiclass">
      <div class="layout clearfix">
        <h1>关注AI资讯&nbsp;&nbsp;捕捉行业前沿</h1>
        <ul>
          <li class="gas-card gas-card-2">
            <div class="gas-card-img">
              <img src="//cdn.ai.qq.com/ai/page/index/img/gas-bg-2-de3d9421f4.jpg?max_age=31536000" />
              <h5>业界观察</h5>
            </div>
            <div class="gas-card-cont jmod-industry">
              <div class="gas-card-item">
                <h5>
                  <a
                    href="https://mp.weixin.qq.com/s?__biz=MzI4OTY3OTYzNA==&amp;mid=2247487701&amp;idx=1&amp;sn=7344d86e019eca6e80996fffe1833bf8&amp;chksm=ec2a20a8db5da9be017139d1ace72253ad679f9c905c4013160fa55474f93ad8be520baacd9f#rd"
                    target="_blank"
                    _stat_click_id="info_iw0"
                  >腾讯研究院：如何让“算法公平”成为机器学习的一部分？</a>
                </h5>
                <p>腾讯研究院 2018-08-10 15:00</p>
              </div>
              <div class="gas-card-item">
                <h5>
                  <a
                    href="https://mp.weixin.qq.com/s?__biz=MzI4OTY3OTYzNA==&amp;mid=2247487675&amp;idx=2&amp;sn=d9b374bbb70a93eb8a1492fde265dc15&amp;chksm=ec2a20c6db5da9d0d030fabf2065c62c1bb9be68b1419586020e7053a965444bd903511b2603#rd"
                    target="_blank"
                    _stat_click_id="info_iw1"
                  >学界 | 18岁天才华裔少年用一个经典算法，推翻量子加速神话！</a>
                </h5>
                <p>新智元 2018-08-08 16:00</p>
              </div>
              <a
                href="/info/index.shtml#iw"
                class="gas-card-more"
                target="_blank"
                _stat_click_id="info_iwmore"
              >查看更多&nbsp;&gt;</a>
            </div>
          </li>
          <li class="gas-card gas-card-1">
            <div class="gas-card-img">
              <img src="//cdn.ai.qq.com/ai/page/index/img/gas-bg-1-a1c768e6eb.jpg?max_age=31536000" />
              <h5>科技前沿</h5>
            </div>
            <div class="gas-card-cont jmod-science">
              <div class="gas-card-item">
                <h5>
                  <a
                    href="https://mp.weixin.qq.com/s?__biz=MzI4OTY3OTYzNA==&amp;mid=2247487765&amp;idx=2&amp;sn=e70863655c578bb7645c3ea901969de1&amp;chksm=ec2a2168db5da87eb22e35f4e403b80e4295863b5182033f72a824c4a41a454b5b09ce73197d&amp;token=958931579&amp;lang=zh_CN#rd"
                    target="_blank"
                    _stat_click_id="info_sf0"
                  >前沿 | 当马赛克被AI看穿，我们的隐私将藏于何处？</a>
                </h5>
                <p>脑极体 2018-08-15 16:00</p>
              </div>
              <div class="gas-card-item">
                <h5>
                  <a
                    href="https://mp.weixin.qq.com/s?__biz=MzI4OTY3OTYzNA==&amp;mid=2247487701&amp;idx=2&amp;sn=4959b8713840cdfbc9f481eb40aa8fa3&amp;chksm=ec2a20a8db5da9bedff8c7825deeacc693229d753ca763984112dec2c37302acb9704d8f8752#rd"
                    target="_blank"
                    _stat_click_id="info_sf1"
                  >前沿 | 来围观 UC 伯克利和CMU的「踩高跷走梅花桩」机器人</a>
                </h5>
                <p>AI科技评论 2018-08-10 16:00</p>
              </div>
              <a
                href="/info/index.shtml#sf"
                class="gas-card-more"
                target="_blank"
                _stat_click_id="info_sfmore"
              >查看更多&nbsp;&gt;</a>
            </div>
          </li>
          <li class="gas-card gas-card-3">
            <div class="gas-card-img">
              <img src="//cdn.ai.qq.com/ai/page/index/img/gas-bg-4-3d75a0a69e.jpg?max_age=31536000" />
              <h5>观点</h5>
            </div>
            <div class="gas-card-cont jmod-viewpoint">
              <div class="gas-card-item">
                <h5>
                  <a
                    href="https://mp.weixin.qq.com/s?__biz=MzI4OTY3OTYzNA==&amp;mid=2247487784&amp;idx=2&amp;sn=e1b0043b8447fc70ff1551ba15a1f5fb&amp;chksm=ec2a2155db5da843fdd6e72ff4abd234dc0cea3c67ee0d999ab375586d8efa3664456fdeba69&amp;token=958931579&amp;lang=zh_CN#rd"
                    target="_blank"
                    _stat_click_id="info_vp0"
                  >观点 | Yann LeCun喊话硅谷：工业界学术界要紧密合作才能加快AI发展</a>
                </h5>
                <p>AI科技评论 2018-08-16 16:00</p>
              </div>
              <div class="gas-card-item">
                <h5>
                  <a
                    href="https://mp.weixin.qq.com/s?__biz=MzI4OTY3OTYzNA==&amp;mid=2247487689&amp;idx=1&amp;sn=4a2e4efb769740db63d592fd1a69e208&amp;chksm=ec2a20b4db5da9a23537c7686dbfe980814d23cd70ae47a1709d2228c038d74c36ed0278fb87#rd"
                    target="_blank"
                    _stat_click_id="info_vp1"
                  >人民日报：人工智能，务实发展是正道</a>
                </h5>
                <p>中国人工智能学会 2018-08-09 15:00</p>
              </div>
              <a
                href="/info/index.shtml#vp"
                class="gas-card-more"
                target="_blank"
                _stat_click_id="info_vpmore"
              >查看更多&nbsp;&gt;</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="lab" id="jmod-lab">
      <div class="layout clearfix">
        <h1>腾讯三大AI实验室&nbsp;&nbsp;强大的技术基石</h1>
        <ul>
          <li class="lab-card">
            <a href="/hr/ailab.shtml" _stat_click_id="lab_ailab">
              <div class="lab-card-hd">
                <i></i>
              </div>
              <div class="lab-card-bd">
                <h3>AI LAB</h3>
                <p>腾讯AI Lab聚集全球数十位人工智能科学家、70位世界一流AI博士，专注机器学习、计算机视觉、语音识别、自然语言处理等人工智能领域的研究。</p>
              </div>
            </a>
          </li>
          <li class="lab-card">
            <a href="/hr/youtu.shtml" _stat_click_id="lab_youtu">
              <div class="lab-card-hd">
                <i></i>
              </div>
              <div class="lab-card-bd">
                <h3>优图实验室</h3>
                <p>优图实验室致力于人脸识别、图像识别及声音识别的技术研究和产品研发，拥有业界独创的活体检测技术，已为上百家企业提供服务。</p>
              </div>
            </a>
          </li>
          <li class="lab-card">
            <a href="/hr/weixin.shtml" _stat_click_id="lab_weixin">
              <div class="lab-card-hd">
                <i></i>
              </div>
              <div class="lab-card-bd">
                <h3>微信AI</h3>
                <p>微信AI致力于为语音识别、自然语言处理、计算机视觉、数据挖掘和机器学习等人工智能技术的发展带来革命性进步。</p>
              </div>
            </a>
          </li>
        </ul>
        <a href="/hr/index.shtml" class="btn-more" _stat_click_id="lab_more">了解更多</a>
      </div>
    </div>

    <div class="invest">
      <div class="layout clearfix">
        <h1>AI专项投资&nbsp;&nbsp;聚力AI未来</h1>
        <ul>
          <li class="invest-col invest-col-1">
            <h5>机构对接</h5>
            <p>帮助项目对接AI专业投资机构，例如蓝驰创投、松禾远望、蛮子基金、金沙江创投、北极光创投、高榕资本、华诺创投等。通过资本助力项目成长。</p>
          </li>
          <li class="invest-col invest-col-2">
            <h5>主投领域</h5>
            <p>目前在AI领域重点关注AI消费级应用、AI模块化产品、AI行业解决方案、AI硬件&amp;芯片等。</p>
          </li>
          <li class="invest-col invest-col-3">
            <h5>资源注入</h5>
            <p>整合腾讯线上线下资源，助力AI创业项目成长。包括腾讯AI技术、技术产品专家导师、腾讯云等专项资源，以及覆盖全国范围的腾讯众创空间实体资源、产业资源、客户资源等。</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="jmod-case case case1">
      <div class="layout">
        <h1>合作伙伴计划&nbsp;&nbsp;共建AI生态</h1>
        <div class="case-list">
          <a href="javascript:void(0);" class="ico-1 jmod-ico active" data-id="1">AI Lab</a>
          <a href="javascript:void(0);" class="ico-2 jmod-ico" data-id="2">腾讯云</a>
          <a href="javascript:void(0);" class="ico-3 jmod-ico" data-id="3">优图</a>
          <a href="javascript:void(0);" class="ico-4 jmod-ico" data-id="4">微信</a>
          <a href="javascript:void(0);" class="ico-5 jmod-ico" data-id="5">天天P图</a>
          <a href="javascript:void(0);" class="ico-6 jmod-ico" data-id="6">应用宝</a>
          <a href="javascript:void(0);" class="ico-7 jmod-ico" data-id="7">QQ</a>
          <a href="javascript:void(0);" class="ico-8 jmod-ico" data-id="8">WPS</a>
          <a href="javascript:void(0);" class="ico-9 jmod-ico" data-id="9">腾讯地图</a>
          <a href="javascript:void(0);" class="ico-10 jmod-ico" data-id="10">微众银行</a>
          <a href="javascript:void(0);" class="ico-11 jmod-ico" data-id="11">QQ空间</a>
          <a href="javascript:void(0);" class="ico-12 jmod-ico" data-id="12">滴滴出行</a>
          <a href="javascript:void(0);" class="ico-13 jmod-ico" data-id="13">南方电网</a>
          <a href="javascript:void(0);" class="ico-14 jmod-ico" data-id="14">快报</a>
          <a href="javascript:void(0);" class="ico-15 jmod-ico" data-id="15">唯品会</a>
          <a href="javascript:void(0);" class="ico-16 jmod-ico" data-id="16">QQ音乐</a>
          <a href="javascript:void(0);" class="ico-17 jmod-ico" data-id="17">腾讯视频</a>
          <a href="javascript:void(0);" class="ico-18 jmod-ico" data-id="18">招联</a>
        </div>
      </div>
    </div>

    <div class="ai-footer">
      <div class="layout">
        <div class="qrcode">
          <h5>关注公众号</h5>
          <p>打造升级AI项目</p>
          <p>推送全球AI热点</p>
        </div>
        <div class="guidance">
          <h5>快速入口</h5>
          <a href="/doc/index.shtml" target="_blank" _stat_click_id="footer_tutorial">新手指南</a>
          <a href="/doc/faq.shtml" target="_blank" _stat_click_id="footer_faq">常见问题</a>
          <a href="/doc/protocol.shtml" target="_blank" _stat_click_id="footer_protocol">用户协议</a>
        </div>
        <div class="contact">
          <h5>商务合作</h5>
          <p class="contact-qqgroup">
            <a style="text-decoration:underline;" href="/product/faceid.shtml">联系我们</a>
          </p>
          <p class="contact-qqgroup">官方交流一群 : 581197347</p>
          <p class="contact-qqgroup">官方交流二群 : 705874401</p>
          <p class="contact-qqgroup">官方交流三群 : 415349651</p>
          <p class="contact-qqgroup">官方交流四群 : 818275263</p>
        </div>
        <a
          href="https://cloud.tencent.com/act/event/accelerator"
          target="_blank"
          class="btn weak"
          _stat_click_id="footer_console"
        >了解更多</a>
        <a href="/console/home" target="_blank" class="btn" _stat_click_id="footer_console">立即使用</a>
      </div>
    </div>

    <div class="fixed-bar" id="jmod-fixed-bar" style="right: 0px; bottom: 225px;">
      <a
        href="javascript:void(0);"
        title="QQ咨询"
        class="item qq jmod-contact-qq"
        _stat_click_id="fixedbar_contactqq"
      ></a>
      <div class="item code">
        <div class="code-layer">
          <img
            src="//cdn.ai.qq.com/ai/common/img/qrcode-e878712066.jpg?max_age=31536000"
            width="126"
            height="126"
            alt="AI开放平台公众号"
          />
          <h5>关注公众号</h5>
          <p class="intro">
            打造升级AI项目
            <br />推送全球AI热点
          </p>
        </div>
      </div>
      <a
        href="#"
        title="返回顶部"
        class="item backtop"
        id="jmod-backtotop-wrap"
        style="visibility: visible;"
        _stat_click_id="fixedbar_backtotop"
      ></a>
    </div>
  </div>
</template>

<script>
import product from "@/mock/product.js"

import frontHeader from "@/components/header/front-header.vue";
var timer;
export default {
  name: "home",
  components: {
    frontHeader
  },
  data() {
    return {
      bannerIndex: 0,
      isLoadMore:[],
      productList: product.productList
    };
  },
  mounted() {
    var that = this;
    // 自动轮播
    timer = setInterval(() => {
      that.bannerIndex = (that.bannerIndex + 1) % 3;
    }, 5000);
  },
  methods: {
    changeBanner(e) {
      this.bannerIndex = e;
      clearInterval(timer);
      var that = this;
      // 自动轮播
      timer = setInterval(() => {
        that.bannerIndex = (that.bannerIndex + 1) % 3;
      }, 5000);
    },
    loadMore(e) {
      console.log(this.isLoadMore);
      this.isLoadMore[e] = true;
    },
    hideMore(e) {
      console.log(this.isLoadMore);
      this.isLoadMore[e] = false;
    },
    // 跳转技术引擎详情页
    goToProductDetail(type1,type2){
      this.$router.push({
        path: 'product', 
        query: { 
          type1: type1,
          type2: type2
        }
      })
    }
  }
};
</script>

<style>
.container {
  /* background-color: black; */
}

.banner {
  height: 490px;
  position: relative;
}
.banner .ban {
  background-repeat: no-repeat;
  background-position: bottom;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  transition: opacity 1s ease-out;
}
.banner .ban.cur {
  opacity: 1;
  z-index: 2;
}
/* a {
    text-decoration: none;
    cursor: pointer;
    outline: none;
    color: inherit;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
} */

.banner .layout {
  position: relative;
  height: 100%;
}
.banner .ban-index {
  position: absolute;
  right: 0;
  bottom: 10px;
  width: 100%;
  text-align: center;
  z-index: 3;
}
.banner .ban-index .cur {
  background-color: #fff;
}
.banner .ban-index span {
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 23px;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  margin: 0 4px;
  cursor: pointer;
  background-color: gray;
}

.sec-capability {
  background-color: #f9f9f9;
  padding-bottom: 5px;
}
.sec-tit {
  font-size: 32px;
  text-align: center;
  padding: 56px 0 40px;
}
.sec-capability .capability-row {
  margin-bottom: 50px;
}
.sec-capability .capability-group {
  width: 280px;
  height: 100%;
  margin-right: 22px;
  display: inline-block;
  vertical-align: top;
}
.sec-capability .no-margin {
  margin-right: 0;
}
.sec-capability .capability-group-logo {
  display: inline-block;
  vertical-align: top;
  height: 100%;
  width: 72px;
}
.sec-capability .capability-group-logo i.capa-1 {
  width: 50px;
  height: 50px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px -111px;
}
.sec-capability .capability-group-logo i.capa-2 {
  width: 52px;
  height: 51px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: 0 -692px;
}
.sec-capability .capability-group-logo i.capa-3 {
  width: 52px;
  height: 52px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -394px -312px;
}
.sec-capability .capability-group-logo i.capa-4 {
  width: 50px;
  height: 49px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px -218px;
}
.sec-capability .capability-group-logo i.capa-5 {
  width: 50px;
  height: 49px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px -165px;
}
.sec-capability .capability-group-logo i.capa-6 {
  width: 50px;
  height: 52px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px 0;
}
.sec-capability .capability-group-logo i.capa-7 {
  width: 50px;
  height: 56px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -545px -416px;
}
.sec-capability .capability-group-logo i.capa-8 {
  width: 52px;
  height: 52px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -450px -312px;
}
.sec-capability .capability-group-logo i.capa-9 {
  width: 50px;
  height: 51px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px -56px;
}
.sec-capability .capability-group-logo i.capa-10 {
  width: 51px;
  height: 51px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -56px -692px;
}
.sec-capability .capability-group-logo i.capa-11 {
  width: 51px;
  height: 51px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -111px -692px;
}

.sec-capability .capability-group-logo i {
  display: inline-block;
  background-repeat: no-repeat;
}
.sec-capability .capability-group-wrap {
  display: inline-block;
  vertical-align: top;
}
.sec-capability .capability-group-wrap__title {
  font-size: 16px;
  line-height: 32px;
  margin-top: 6px;
  margin-bottom: 6px;
  color: #000;
}
.sec-capability .capability-group-wrap__item {
  display: block;
  line-height: 48px;
  font-size: 14px;
  color: #1070e1;
  border-bottom: 1px solid #ddd;
  width: 150px;
}
.sec-capability .capability-group-wrap__item.no-border {
  border: none;
}
.sec-capability .capability-group-more {
  font-size: 14px;
  line-height: 50px;
  color: #000;
  cursor: pointer;
  vertical-align: middle;
}
.sec-capability .capability-group-more i.ico-more {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px -271px;
  width: 11px;
  height: 6px;
  display: inline-block;
  margin-right: 12px;
  vertical-align: middle;
}
.sec-capability .hide-wrap {
  display: none;
}
.sec-capability .capability-group-wrap__item {
  display: block;
  line-height: 48px;
  font-size: 14px;
  color: #1070e1;
  border-bottom: 1px solid #ddd;
  width: 150px;
}

.sec-proj .proj-news li {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  word-wrap: normal;
}
.banner {
  height: 490px;
  position: relative;
}
.banner .layout {
  position: relative;
  height: 100%;
}
.banner .ban {
  background-repeat: no-repeat;
  background-position: bottom;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
}
.banner .ban.cur {
  opacity: 1;
  z-index: 2;
}
.banner .ban-index {
  position: absolute;
  right: 0;
  bottom: 10px;
  width: 100%;
  text-align: center;
  z-index: 3;
}
.banner .ban-index span {
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 23px;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  margin: 0 4px;
  cursor: pointer;
  background-color: gray;
}
.banner .ban-index .cur {
  background-color: #fff;
}
.sec-tit {
  font-size: 32px;
  text-align: center;
  padding: 56px 0 40px;
}
.sec-tit-w {
  color: #fff;
}
.sec-src {
  background-color: #fff;
}
.sec-src .sec-tit {
  padding-bottom: 10px;
}
.sec-src .sec-cont {
  position: relative;
  height: 460px;
  /* background: url(img/bg-src-60cda1f161.png) no-repeat; */
  background-position: top;
  margin-top: 40px;
}
.sec-src .item {
  position: absolute;
  width: 260px;
}
.sec-src .item:before {
  content: "";
  width: 125px;
  height: 108px;
  position: absolute;
  transition: all 0.3s ease;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  opacity: 0;
}
.sec-src .item:after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #126ee1;
  border-radius: 50%;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}
.sec-src .item:first-child {
  text-align: right;
  left: 90px;
  top: -10px;
}
.sec-src .item:first-child:before {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -387px -580px;
  top: 82px;
  right: -313px;
}
.sec-src .item:first-child:after {
  top: 21px;
  right: -39px;
}
.sec-src .item:nth-child(2) {
  text-align: right;
  left: 90px;
  top: 210px;
}
.sec-src .item:nth-child(2):before {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -129px -580px;
  top: -138px;
  right: -313px;
}
.sec-src .item:nth-child(2):after {
  top: 25px;
  right: -39px;
}
.sec-src .item:nth-child(3) {
  left: 472px;
  top: 340px;
  text-align: center;
}
.sec-src .item:nth-child(3):before {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -516px -580px;
  top: -268px;
  right: 70px;
}
.sec-src .item:nth-child(3):after {
  top: -32px;
  left: 124px;
}
.sec-src .item:nth-child(4) {
  top: 210px;
  right: 90px;
  text-align: left;
}
.sec-src .item:nth-child(4):before {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: 0 -580px;
  top: -138px;
  left: -313px;
}
.sec-src .item:nth-child(4):after {
  top: 25px;
  left: -38px;
}
.sec-src .item:nth-child(5) {
  top: -10px;
  right: 90px;
  text-align: left;
}
.sec-src .item:nth-child(5):before {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -258px -580px;
  top: 82px;
  left: -313px;
}
.sec-src .item:nth-child(5):after {
  top: 21px;
  left: -38px;
}
.sec-src .item.active h5 {
  color: #126ee1;
}
.sec-src .item.active:after {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.sec-src .item.active:before {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}
.sec-src .item h5 {
  font-size: 20px;
  line-height: 1;
  margin-bottom: 15px;
  color: #000;
  transition: color 0.3s ease;
}
.sec-src .item p {
  font-size: 16px;
  line-height: 26px;
  color: gray;
}
.sec-capability {
  background-color: #f9f9f9;
  padding-bottom: 5px;
}
.sec-capability .capability-row {
  margin-bottom: 50px;
}
.sec-capability .capability-group {
  width: 280px;
  height: 100%;
  margin-right: 22px;
  display: inline-block;
  vertical-align: top;
}
.sec-capability .capability-group-logo {
  display: inline-block;
  vertical-align: top;
  height: 100%;
  width: 72px;
}
.sec-capability .capability-group-logo i {
  display: inline-block;
  background-repeat: no-repeat;
}
.sec-capability .capability-group-logo i.capa-1 {
  width: 50px;
  height: 50px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px -111px;
}
.sec-capability .capability-group-logo i.capa-2 {
  width: 52px;
  height: 51px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: 0 -692px;
}
.sec-capability .capability-group-logo i.capa-3 {
  width: 52px;
  height: 52px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -394px -312px;
}
.sec-capability .capability-group-logo i.capa-4 {
  width: 50px;
  height: 49px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px -218px;
}
.sec-capability .capability-group-logo i.capa-5 {
  width: 50px;
  height: 49px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px -165px;
}
.sec-capability .capability-group-logo i.capa-6 {
  width: 50px;
  height: 52px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px 0;
}
.sec-capability .capability-group-logo i.capa-7 {
  width: 50px;
  height: 56px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -545px -416px;
}
.sec-capability .capability-group-logo i.capa-8 {
  width: 52px;
  height: 52px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -450px -312px;
}
.sec-capability .capability-group-logo i.capa-9 {
  width: 50px;
  height: 51px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px -56px;
}
.sec-capability .capability-group-logo i.capa-10 {
  width: 51px;
  height: 51px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -56px -692px;
}
.sec-capability .capability-group-logo i.capa-11 {
  width: 51px;
  height: 51px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -111px -692px;
}
.sec-capability .capability-group-wrap {
  display: inline-block;
  vertical-align: top;
}
.sec-capability .capability-group-wrap__title {
  font-size: 16px;
  line-height: 32px;
  margin-top: 6px;
  margin-bottom: 6px;
  color: #000;
}
.sec-capability .capability-group-wrap__item {
  display: block;
  line-height: 48px;
  font-size: 14px;
  color: #1070e1;
  border-bottom: 1px solid #ddd;
  width: 150px;
}
.sec-capability .capability-group-wrap__item.no-border {
  border: none;
}
.sec-capability .capability-group-more {
  font-size: 14px;
  line-height: 50px;
  color: #000;
  cursor: pointer;
  vertical-align: middle;
}
.sec-capability .capability-group-more i.ico-more {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -780px -271px;
  width: 11px;
  height: 6px;
  display: inline-block;
  margin-right: 12px;
  vertical-align: middle;
}
.sec-capability .no-margin {
  margin-right: 0;
}
.sec-capability .hide-wrap {
  display: none;
}
.sec-resource {
  background-color: #fff;
  text-align: center;
  padding-bottom: 88px;
}
.sec-resource .resource-left,
.sec-resource .resource-right {
  display: inline-block;
  vertical-align: top;
}
.sec-resource .resource-left .resource-item {
  padding: 30px 40px 30px 20px;
}
.sec-resource .resource-left .resource-item:after {
  right: -26px;
}
.sec-resource .resource-right .resource-item {
  padding: 30px 20px 30px 40px;
}
.sec-resource .resource-right .resource-item:after {
  left: -26px;
}
.sec-resource .resource-middle {
  margin-top: 50px;
  width: 688px;
  height: 419px;
  display: inline-block;
  vertical-align: top;
}
.sec-resource .resource-item {
  width: 237px;
  height: 152px;
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
  text-align: left;
}
.sec-resource .resource-item.item-1:after {
  content: "01";
}
.sec-resource .resource-item.item-2:after {
  content: "02";
}
.sec-resource .resource-item.item-3:after {
  content: "03";
}
.sec-resource .resource-item.item-4:after {
  content: "04";
}
.sec-resource .resource-item.item-5:after {
  content: "05";
}
.sec-resource .resource-item.item-6:after {
  content: "06";
}
.sec-resource .resource-item-desc {
  font-size: 16px;
  line-height: 28px;
  color: gray;
}
.sec-resource .resource-item-name {
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 10px;
}
.sec-resource .resource-item:after {
  content: "";
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -599px -416px;
  width: 52px;
  height: 52px;
  display: inline-block;
  position: absolute;
  top: calc(50% - 26px);
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  line-height: 52px;
  text-align: center;
}
.lab {
  padding: 65px 0;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
}
.lab .layout {
  z-index: 1;
  position: relative;
}
.lab h1 {
  font-size: 30px;
  text-align: center;
  margin-bottom: 45px;
}
.lab-card {
  position: relative;
  width: 390px;
  height: 390px;
  box-sizing: border-box;
  margin-left: 15px;
  float: left;
  border: 1px solid #efefef;
  background-color: #fff;
  transition: all 0.3s ease;
}
.lab-card:first-child {
  margin-left: 0;
}
.lab-card:hover {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
}
.lab-card-bd {
  padding: 74px 26px 0;
}
.lab-card h3 {
  position: relative;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 28px;
}
.lab-card p {
  text-align: left;
  font-size: 14px;
}
.lab-card-hd {
  position: relative;
  height: 120px;
}
.lab-card-hd i {
  width: 97px;
  height: 97px;
  position: absolute;
  left: 50%;
  bottom: 0;
  -webkit-transform: translate(-50%, 50%);
  -ms-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
}
.lab-card:first-child .lab-card-hd {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: 0 -248px;
}
.lab-card:first-child .lab-card-hd i {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -302px -476px;
}
.lab-card:nth-child(2) .lab-card-hd {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: 0 0;
}
.lab-card:nth-child(2) .lab-card-hd i {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -504px -476px;
}
.lab-card:nth-child(3) .lab-card-hd {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: 0 -124px;
}
.lab-card:nth-child(3) .lab-card-hd i {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -403px -476px;
}
.lab .btn-more {
  width: 140px;
  line-height: 48px;
  font-size: 16px;
  color: #515dff;
  display: inline-block;
  border: 1px solid #515dff;
  border-radius: 3px;
  transition: all 0.3s ease;
  margin-top: 60px;
}
.lab .btn-more:hover {
  background-color: #e8f2ff;
}
.sec-proj {
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: bottom;
  color: #fff;
  height: 714px;
  padding-bottom: 100px;
  text-align: center;
  font-size: 0;
}
.sec-proj .sec-tit {
  padding-bottom: 70px;
}
.sec-proj .proj {
  display: inline-block;
  vertical-align: top;
  width: 200px;
  height: 400px;
  background-position: 50%;
  font-size: 14px;
  box-sizing: border-box;
  padding: 110px 40px 0;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}
.sec-proj .proj:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: background 0.3s ease;
}
.sec-proj .proj.active {
  width: 400px;
  height: 440px;
  -webkit-transform: translateY(-20px);
  -ms-transform: translateY(-20px);
  transform: translateY(-20px);
  padding-top: 64px;
}
.sec-proj .proj.active .proj-info {
  padding-bottom: 28px;
}
.sec-proj .proj.active:hover:before {
  background-color: rgba(18, 110, 225, 0.7);
}
.sec-proj .proj-info {
  position: relative;
  padding-bottom: 240px;
  border-bottom: 1px solid #fff;
  transition: padding 0.3s ease;
}
.sec-proj .proj-info-ico {
  height: 60px;
  margin-bottom: 18px;
}
.sec-proj .proj-info-ico i {
  vertical-align: top;
  display: inline-block;
}
.sec-proj .proj-info-ico .ico-1 {
  width: 54px;
  height: 54px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -696px -566px;
}
.sec-proj .proj-info-ico .ico-2 {
  width: 55px;
  height: 55px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -696px -507px;
}
.sec-proj .proj-info-ico .ico-3 {
  width: 54px;
  height: 48px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -166px -692px;
}
.sec-proj .proj-info-ico .ico-4 {
  width: 60px;
  height: 56px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -696px -447px;
}
.sec-proj .proj-info-ico .ico-5 {
  width: 52px;
  height: 56px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -696px -624px;
}
.sec-proj .proj-info-tit {
  font-size: 20px;
  margin-bottom: 15px;
}
.sec-proj .proj-news {
  text-align: left;
  position: relative;
  padding-top: 22px;
}
.sec-proj .proj-news-blank {
  text-align: center;
  font-size: 16px;
}
.sec-proj .proj-news h6 {
  font-size: 16px;
  margin-bottom: 16px;
}
.sec-proj .proj-news li {
  margin-bottom: 12px;
  line-height: 1;
}
.sec-proj .proj-news li a {
  vertical-align: middle;
}
.sec-proj .proj-news li:before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #fff;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 8px;
}
.accelerator {
  padding: 65px 0;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
}
.accelerator .layout {
  z-index: 1;
  position: relative;
}
.accelerator h1 {
  font-size: 30px;
  text-align: center;
  margin-bottom: 48px;
}
.accelerator-card {
  position: relative;
  width: 288px;
  height: 338px;
  box-sizing: border-box;
  margin-right: 14px;
  float: left;
  border: 1px solid #efefef;
  background-color: #fff;
  transition: all 0.3s ease;
}
.accelerator-card:hover {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
}
.accelerator-card h3 {
  position: relative;
  font-size: 24px;
  line-height: 24px;
  margin: 34px 0 18px;
}
.accelerator-card h3 em {
  font-size: 20px;
  color: #fff;
  background-color: #323232;
  border-radius: 50%;
  width: 24px;
  display: inline-block;
  margin-right: 10px;
  vertical-align: top;
}
.accelerator-card p {
  position: relative;
  font-size: 16px;
  color: gray;
  text-align: left;
  width: 11em;
  margin: 0 auto;
}
.accelerator-card:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.accelerator-card-1:before {
  height: 128px;
  /* background-image: url(../../sprite/sprite-2a0a82c8f6.index.png?max_age=31536000); */
  background-position: -292px -252px;
}
.accelerator-card-2:before {
  height: 140px;
  /* background-image: url(../../sprite/sprite-2a0a82c8f6.index.png?max_age=31536000); */
  background-position: 0 -252px;
}
.accelerator-card-3:before {
  height: 190px;
  /* background-image: url(../../sprite/sprite-2a0a82c8f6.index.png?max_age=31536000); */
  background-position: -292px 0;
}
.accelerator-card-4 {
  margin-right: 0;
}
.accelerator-card-4:before {
  height: 248px;
  /* background-image: url(../../sprite/sprite-2a0a82c8f6.index.png?max_age=31536000); */
  background-position: 0 0;
}
.accelerator .btn-more {
  width: 140px;
  line-height: 48px;
  font-size: 16px;
  color: #515dff;
  display: inline-block;
  border: 1px solid #515dff;
  border-radius: 3px;
  transition: all 0.3s ease;
  margin-top: 60px;
}
.accelerator .btn-more:hover {
  background-color: #e8f2ff;
}
.accelerator .accel-feat {
  text-align: center;
  font-size: 0;
  height: 220px;
}
.accelerator .accel-feat__item {
  display: inline-block;
  vertical-align: top;
  float: left;
  width: 230px;
  height: 220px;
  box-sizing: border-box;
  padding: 48px 0;
  border: 1px solid #ececec;
  margin-left: 12px;
  position: relative;
  overflow: hidden;
}
.accelerator .accel-feat__item:first-child {
  margin-left: 0;
}
.accelerator .accel-feat__item .title {
  font-size: 24px;
  line-height: 1;
}
.accelerator .accel-feat__item .front:before {
  content: "";
  display: block;
}
.accelerator .accel-feat__item .front .title {
  color: #323232;
  padding-top: 20px;
}
.accelerator .accel-feat__item .back {
  background-color: #126ee1;
  color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-transform: translateY(220px);
  -ms-transform: translateY(220px);
  transform: translateY(220px);
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
}
.accelerator .accel-feat__item .back .title {
  margin-bottom: 34px;
  padding-top: 36px;
}
.accelerator .accel-feat__item .back p {
  font-size: 14px;
  text-align: center;
  padding: 0 22px;
}
.accelerator .accel-feat__item:hover {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
}
.accelerator .accel-feat__item:hover .back {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.accelerator .accel-feat__item.item-1 .front:before {
  width: 74px;
  height: 76px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -696px -84px;
  margin: 0 auto;
}
.accelerator .accel-feat__item.item-2 .front:before {
  width: 70px;
  height: 63px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -696px -312px;
  margin: 6px auto;
}
.accelerator .accel-feat__item.item-3 .front:before {
  width: 74px;
  height: 74px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -696px -164px;
  margin: 1px auto;
}
.accelerator .accel-feat__item.item-4 .front:before {
  width: 61px;
  height: 64px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -696px -379px;
  margin: 6px auto;
}
.accelerator .accel-feat__item.item-5 .front:before {
  width: 69px;
  height: 66px;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -696px -242px;
  margin: 5px auto;
}
.accelerator .accel-com {
  position: relative;
}
.accelerator .accel-com-title {
  display: block;
  font-size: 14px;
  line-height: 1;
  padding-top: 64px;
  margin-bottom: 48px;
}
.accelerator .accel-com-title:after,
.accelerator .accel-com-title:before {
  content: "";
  display: inline-block;
  width: 193px;
  height: 1px;
  background-color: #dedede;
  vertical-align: middle;
  margin-top: -1px;
  margin: 0 8px;
}
.accelerator .accel-com-list {
  width: 100%;
  height: 88px;
  white-space: nowrap;
  font-size: 0;
  position: relative;
}
.accelerator .accel-com-list .item {
  display: inline-block;
  vertical-align: middle;
  width: 140px;
  height: 100px;
  margin: 0 30px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.accelerator .accel-com-scroll {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.accelerator .accel-com-arrow {
  position: absolute;
  top: 50%;
  margin-top: -14px;
}
.accelerator .accel-com-arrow.btn-prev {
  height: 0;
  width: 0;
  border-radius: 3px;
  border-right: 14px solid #ddd;
  border-top: 14px dashed transparent;
  border-bottom: 14px dashed transparent;
  left: -48px;
}
.accelerator .accel-com-arrow.btn-prev:after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-radius: 3px;
}
.accelerator .accel-com-arrow.btn-prev:after {
  left: 4px;
  top: -14px;
  border-right: 14px solid #fff;
  border-top: 14px dashed transparent;
  border-bottom: 14px dashed transparent;
}
.accelerator .accel-com-arrow.btn-next {
  height: 0;
  width: 0;
  border-radius: 3px;
  border-left: 14px solid #ddd;
  border-top: 14px dashed transparent;
  border-bottom: 14px dashed transparent;
  right: -48px;
}
.accelerator .accel-com-arrow.btn-next:after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-radius: 3px;
}
.accelerator .accel-com-arrow.btn-next:after {
  right: 4px;
  top: -14px;
  border-left: 14px solid #fff;
  border-top: 14px dashed transparent;
  border-bottom: 14px dashed transparent;
}
.accelerator .accel-com-arrow.disabled {
  visibility: hidden;
}
.gas {
  padding: 65px 0;
  overflow: hidden;
  background-color: #f2f2f2;
}
.gas .layout {
  z-index: 1;
  position: relative;
}
.gas h1 {
  font-size: 30px;
  text-align: center;
  margin-bottom: 48px;
}
.gas-card {
  width: 392px;
  height: 450px;
  box-sizing: border-box;
  border: 1px solid #efefef;
  background-color: #fff;
  float: left;
  margin-right: 12px;
  transition: all 0.3s ease;
}
.gas-card:hover {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
}
.gas-card-3 {
  margin-right: 0;
}
.gas-card-img {
  height: 185px;
  position: relative;
  overflow: hidden;
}
.gas-card-img img {
  display: block;
  width: 100%;
  height: 100%;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}
.gas-card-img:hover img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.gas-card-img h5 {
  line-height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-size: 24px;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.gas-card-cont {
  padding: 28px 17px 32px;
}
.gas-card-item {
  padding-left: 14px;
  position: relative;
  height: 76px;
  margin-bottom: 10px;
}
.gas-card-item:before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  width: 6px;
  height: 6px;
  background-color: #b2b2b2;
  border-radius: 50%;
}
.gas-card-item h5 {
  font-size: 16px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.gas-card-item p {
  color: #b2b2b2;
  font-size: 14px;
  margin-top: 8px;
}
.gas-card-more {
  font-size: 16px;
  color: #515dff;
  padding-left: 14px;
  padding-top: 16px;
  display: inline-block;
}
.invest {
  padding: 65px 0;
  overflow: hidden;
  background: #f2f2f2;
  position: relative;
}
.invest:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: url(img/bg-invest-dee2d8d891.png) no-repeat; */
  background-position: bottom;
}
.invest .layout {
  z-index: 1;
  position: relative;
}
.invest h1 {
  font-size: 30px;
  text-align: center;
  margin-bottom: 48px;
}
.invest-col {
  width: 400px;
  height: 182px;
  float: left;
  box-sizing: border-box;
  padding-left: 118px;
  position: relative;
}
.invest-col:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
}
.invest-col-1:before {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -453px -372px;
}
.invest-col-2:before {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -605px -476px;
}
.invest-col-3:before {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -696px 0;
}
.invest-col h5 {
  font-size: 20px;
  margin-bottom: 18px;
}
.invest-col p {
  font-size: 14px;
  color: gray;
  width: 230px;
}
.case {
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  padding: 64px 0;
  overflow: hidden;
  color: #fff;
  text-align: center;
  height: 548px;
}
/* .case.case1 {
  background-image: url(img/case-bg-ai-c033eba4ae.jpg);
}
.case.case2 {
  background-image: url(img/case-bg-yun-c4944f458d.jpg);
}
.case.case3 {
  background-image: url(img/case-bg-yt-862ea9851f.jpg);
}
.case.case4 {
  background-image: url(img/case-bg-wx-ddef20ad02.jpg);
}
.case.case5 {
  background-image: url(img/case-bg-ptu-0597390e7b.jpg);
}
.case.case6 {
  background-image: url(img/case-bg-yyb-5b258275c7.jpg);
}
.case.case7 {
  background-image: url(img/case-bg-qq-ab8216fdd5.jpg);
}
.case.case8 {
  background-image: url(img/case-bg-wps-bfe7cdda0e.jpg);
}
.case.case9 {
  background-image: url(img/case-bg-map-2560afeda4.jpg);
}
.case.case10 {
  background-image: url(img/case-bg-wb-648174131f.jpg);
}
.case.case11 {
  background-image: url(img/case-bg-qzone-76aa1e33b9.jpg);
}
.case.case12 {
  background-image: url(img/case-bg-dd-0a59e7be76.jpg);
}
.case.case13 {
  background-image: url(img/case-bg-nw-2295061c68.jpg);
}
.case.case14 {
  background-image: url(img/case-bg-kb-d592a6d38c.jpg);
}
.case.case15 {
  background-image: url(img/case-bg-wy-3801450b89.jpg);
}
.case.case16 {
  background-image: url(img/case-bg-music-4e70ced67d.jpg);
}
.case.case17 {
  background-image: url(img/case-bg-video-de09ffb652.jpg);
}
.case.case18 {
  background-image: url(img/case-bg-zl-7943332f04.jpg);
} */
.case h1 {
  font-size: 30px;
}
.case-list {
  font-size: 0;
}
.case-list a {
  display: inline-block;
  width: 147px;
  height: 100px;
  margin: 30px 0 0 62px;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-filter: gray;
  filter: gray;
}
.case-list a.active,
.case-list a:hover {
  -webkit-filter: grayscale(0);
  -moz-filter: grayscale(0);
  -ms-filter: grayscale(0);
  -o-filter: grayscale(0);
  filter: grayscale(0);
  -webkit-filter: none;
  filter: none;
}
.case .ico-1 {
  margin-left: 0;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -545px -208px;
}
.case .ico-2 {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -545px -104px;
}
.case .ico-3 {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -545px 0;
}
.case .ico-4 {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -302px -372px;
}
.case .ico-5 {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -151px -476px;
}
.case .ico-6 {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: 0 -372px;
}
.case .ico-7 {
  margin-left: 0;
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -394px -208px;
}
.case .ico-8 {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -394px -104px;
}
.case .ico-9 {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -394px 0;
}
.case .ico-10 {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: 0 -476px;
}
.case .ico-11 {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -151px -372px;
}
.case .ico-12 {
  /* background-image: url(../../sprite/sprite-814a811252.index.v2.png?max_age=31536000); */
  background-position: -545px -312px;
}
.case .ico-13 {
  margin-left: 0;
  /* background-image: url(../../sprite/sprite-2a0a82c8f6.index.png?max_age=31536000); */
  background-position: 0 -396px;
}
.case .ico-14 {
  /* background-image: url(../../sprite/sprite-2a0a82c8f6.index.png?max_age=31536000); */
  background-position: -151px -396px;
}
.case .ico-15 {
  /* background-image: url(../../sprite/sprite-2a0a82c8f6.index.png?max_age=31536000); */
  background-position: -302px -396px;
}
.case .ico-16 {
  /* background-image: url(../../sprite/sprite-2a0a82c8f6.index.png?max_age=31536000); */
  background-position: -584px 0;
}
.case .ico-17 {
  /* background-image: url(../../sprite/sprite-2a0a82c8f6.index.png?max_age=31536000); */
  background-position: -584px -104px;
}
.case .ico-18 {
  /* background-image: url(../../sprite/sprite-2a0a82c8f6.index.png?max_age=31536000); */
  background-position: -584px -208px;
}
</style>