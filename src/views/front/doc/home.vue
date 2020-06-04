<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <front-header></front-header>

    <div
      class="banner"
      style="background-image: url('//cdn.ai.qq.com/ai/page/doc/home/img/banner-95720c5dbe.jpg?max_age=31536000');"
    >
      <p>HDU AI开放平台文档中心</p>
    </div>

    <!-- <div class="sec sec-new">
      <div class="layout">
        <div class="sec-tit">新手指南</div>
        <div class="sec-cont">
          <a _stat_click_id="index" href="/doc/index.shtml" class="new-item">
            <i class="ico-1"></i>
            <p>新手引导</p>
          </a>
          <a _stat_click_id="auth" href="/doc/auth.shtml" class="new-item">
            <i class="ico-2"></i>
            <p>接口鉴权</p>
          </a>
          <a _stat_click_id="returncode" href="/doc/returncode.shtml" class="new-item">
            <i class="ico-3"></i>
            <p>返回码</p>
          </a>
          <a _stat_click_id="faq" href="/doc/faq.shtml" class="new-item no-margin">
            <i class="ico-4"></i>
            <p>常见问题</p>
          </a>
        </div>
      </div>
    </div> -->

    <!-- <div class="sec sec-capability">
      <div class="layout">
        <h2 class="sec-tit">接口文档</h2>
        <div class="sec-cont">
          <div class="capability-row">
            <div class="capability-group">
              <div class="capability-group-logo">
                <i class="capa-1"></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">OCR</p>
                <a
                  _stat_click_id="ocridcardocr"
                  href="/doc/ocridcardocr.shtml"
                  class="capability-group-wrap__item"
                >身份证OCR</a>
                <a
                  _stat_click_id="ocrdriverlicenseocr"
                  href="/doc/ocrdriverlicenseocr.shtml"
                  class="capability-group-wrap__item"
                >行驶证/驾驶证OCR</a>
                <a
                  _stat_click_id="ocrgeneralocr"
                  href="/doc/ocrgeneralocr.shtml"
                  class="capability-group-wrap__item"
                >通用OCR</a>
                <a
                  _stat_click_id="ocrbizlicenseocr"
                  href="/doc/ocrbizlicenseocr.shtml"
                  class="capability-group-wrap__item"
                >营业执照OCR</a>
                <a
                  _stat_click_id="ocrcreditcardocr"
                  href="/doc/ocrcreditcardocr.shtml"
                  class="capability-group-wrap__item"
                >银行卡OCR</a>
                <a
                  _stat_click_id="more_ocr"
                  href="javascript:void(0);"
                  class="capability-group-more jmod-capa-more"
                >
                  <i class="ico-more"></i>展开更多
                </a>
                <div class="hide-wrap">
                  <a
                    _stat_click_id="handwritingocr"
                    href="/doc/handwritingocr.shtml"
                    class="capability-group-wrap__item"
                  >手写体OCR</a>
                  <a
                    _stat_click_id="plateocr"
                    href="/doc/plateocr.shtml"
                    class="capability-group-wrap__item"
                  >车牌OCR</a>
                  <a
                    _stat_click_id="ocrbcocr"
                    href="/doc/ocrbcocr.shtml"
                    class="capability-group-wrap__item no-border"
                  >名片OCR</a>
                  <a
                    _stat_click_id="hide_ocr"
                    href="javascript:void(0);"
                    class="capability-group-more jmod-capa-hide"
                  >
                    <i class="ico-more" style="transform: rotate(180deg);"></i>收起
                  </a>
                </div>
              </div>
            </div>
            <div class="capability-group">
              <div class="capability-group-logo">
                <i class="capa-2"></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">人脸与人体识别</p>
                <a
                  _stat_click_id="detectface"
                  href="/doc/detectface.shtml"
                  class="capability-group-wrap__item"
                >人脸检测与分析</a>
                <a
                  _stat_click_id="detectmultiface"
                  href="/doc/detectmultiface.shtml"
                  class="capability-group-wrap__item"
                >多人脸检测</a>
                <a
                  _stat_click_id="detectcrossageface"
                  href="/doc/detectcrossageface.shtml"
                  class="capability-group-wrap__item"
                >跨年龄人脸识别</a>
                <a
                  _stat_click_id="faceshape"
                  href="/doc/faceshape.shtml"
                  class="capability-group-wrap__item"
                >五官定位</a>
                <a
                  _stat_click_id="facecompare"
                  href="/doc/facecompare.shtml"
                  class="capability-group-wrap__item"
                >人脸对比</a>
                <a
                  _stat_click_id="more_facedetect"
                  href="javascript:void(0);"
                  class="capability-group-more jmod-capa-more"
                >
                  <i class="ico-more"></i>展开更多
                </a>
                <div class="hide-wrap">
                  <a
                    _stat_click_id="faceidentify"
                    href="/doc/faceidentify.shtml"
                    class="capability-group-wrap__item"
                  >人脸搜索</a>
                  <a
                    _stat_click_id="faceidentify"
                    href="/doc/faceverify.shtml"
                    class="capability-group-wrap__item no-border"
                  >人脸验证</a>
                  <a
                    _stat_click_id="hide_facedetect"
                    href="javascript:void(0);"
                    class="capability-group-more jmod-capa-hide"
                  >
                    <i class="ico-more" style="transform: rotate(180deg);"></i>收起
                  </a>
                </div>
              </div>
            </div>
            <div class="capability-group">
              <div class="capability-group-logo">
                <i class="capa-3"></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">图片特效</p>
                <a
                  _stat_click_id="ptuimgfilter"
                  href="/doc/ptuimgfilter.shtml"
                  class="capability-group-wrap__item"
                >滤镜</a>
                <a
                  _stat_click_id="facecosmetic"
                  href="/doc/facecosmetic.shtml"
                  class="capability-group-wrap__item"
                >人脸美妆</a>
                <a
                  _stat_click_id="facedecoration"
                  href="/doc/facedecoration.shtml"
                  class="capability-group-wrap__item"
                >人脸变妆</a>
                <a
                  _stat_click_id="facesticker"
                  href="/doc/facesticker.shtml"
                  class="capability-group-wrap__item"
                >大头贴</a>
                <a
                  _stat_click_id="faceage"
                  href="/doc/faceage.shtml"
                  class="capability-group-wrap__item no-border"
                >颜龄检测</a>
              </div>
            </div>
            <div class="capability-group no-margin">
              <div class="capability-group-logo">
                <i class="capa-4"></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">图片识别</p>
                <a
                  _stat_click_id="imgtotext"
                  href="/doc/imgtotext.shtml"
                  class="capability-group-wrap__item"
                >看图说话</a>
                <a
                  _stat_click_id="imagetag"
                  href="/doc/imagetag.shtml"
                  class="capability-group-wrap__item"
                >多标签识别</a>
                <a
                  _stat_click_id="imagefuzzy"
                  href="/doc/imagefuzzy.shtml"
                  class="capability-group-wrap__item"
                >模糊图片识别</a>
                <a
                  _stat_click_id="imagefood"
                  href="/doc/imagefood.shtml"
                  class="capability-group-wrap__item"
                >美食图片识别</a>
                <a
                  _stat_click_id="visionscene"
                  href="/doc/vision_scene.shtml"
                  class="capability-group-wrap__item"
                >场景识别</a>
                <a
                  _stat_click_id="more_imgdetect"
                  href="javascript:void(0);"
                  class="capability-group-more jmod-capa-more"
                >
                  <i class="ico-more"></i>展开更多
                </a>
                <div class="hide-wrap">
                  <a
                    _stat_click_id="visionobject"
                    href="/doc/vision_object.shtml"
                    class="capability-group-wrap__item no-border"
                  >物体识别</a>
                  <a
                    _stat_click_id="hide_imgeffect"
                    href="javascript:void(0);"
                    class="capability-group-more jmod-capa-hide"
                  >
                    <i class="ico-more" style="transform: rotate(180deg);"></i>收起
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="capability-row">
            <div class="capability-group">
              <div class="capability-group-logo">
                <i class="capa-5"></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">敏感信息甄别</p>
                <a
                  _stat_click_id="imageterrorism"
                  href="/doc/imageterrorism.shtml"
                  class="capability-group-wrap__item"
                >暴恐识别</a>
                <a
                  _stat_click_id="jianhuang"
                  href="/doc/jianhuang.shtml"
                  class="capability-group-wrap__item"
                >图片鉴黄</a>
                <a
                  _stat_click_id="aaievilaudio"
                  href="/doc/aaievilaudio.shtml"
                  class="capability-group-wrap__item no-border"
                >音频鉴黄/敏感词检测</a>
              </div>
            </div>
            <div class="capability-group">
              <div class="capability-group-logo">
                <i class="capa-6"></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">智能闲聊</p>
                <a
                  _stat_click_id="nlpchat"
                  href="/doc/nlpchat.shtml"
                  class="capability-group-wrap__item no-border"
                >智能闲聊</a>
              </div>
            </div>
            <div class="capability-group">
              <div class="capability-group-logo">
                <i class="capa-7"></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">机器翻译</p>
                <a
                  _stat_click_id="nlptrans"
                  href="/doc/nlptrans.shtml"
                  class="capability-group-wrap__item"
                >文本翻译</a>
                <a
                  _stat_click_id="speechtranslate"
                  href="/doc/speechtranslate.shtml"
                  class="capability-group-wrap__item"
                >语音翻译</a>
                <a
                  _stat_click_id="imagetranslate"
                  href="/doc/imagetranslate.shtml"
                  class="capability-group-wrap__item"
                >图片翻译</a>
                <a
                  _stat_click_id="textdetect"
                  href="/doc/textdetect.shtml"
                  class="capability-group-wrap__item no-border"
                >语种识别</a>
              </div>
            </div>
            <div class="capability-group no-margin">
              <div class="capability-group-logo">
                <i class="capa-8"></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">基础文本分析</p>
                <a
                  _stat_click_id="nlpbase"
                  href="/doc/nlpbase.shtml"
                  class="capability-group-wrap__item"
                >分词</a>
                <a
                  _stat_click_id="nlpwordpos"
                  href="/doc/nlp_wordpos.shtml"
                  class="capability-group-wrap__item"
                >词性</a>
                <a
                  _stat_click_id="nlpwordner"
                  href="/doc/nlp_wordner.shtml"
                  class="capability-group-wrap__item"
                >专有名词</a>
                <a
                  _stat_click_id="nlpwordsyn"
                  href="/doc/nlp_wordsyn.shtml"
                  class="capability-group-wrap__item no-border"
                >同义词</a>
              </div>
            </div>
          </div>
          <div class="capability-row">
            <div class="capability-group">
              <div class="capability-group-logo">
                <i class="capa-9"></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">语义解析</p>
                <a
                  _stat_click_id="nlpsem"
                  href="/doc/nlpsem.shtml"
                  class="capability-group-wrap__item"
                >意图成分</a>
                <a
                  _stat_click_id="nlpemo"
                  href="/doc/nlpemo.shtml"
                  class="capability-group-wrap__item no-border"
                >情感分析</a>
              </div>
            </div>
            <div class="capability-group">
              <div class="capability-group-logo">
                <i class="capa-10"></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">语音识别</p>
                <a
                  _stat_click_id="aaiasr"
                  href="/doc/aaiasr.shtml"
                  class="capability-group-wrap__item"
                >语音识别</a>
                <a
                  _stat_click_id="wxasrlong"
                  href="/doc/wxasrlong.shtml"
                  class="capability-group-wrap__item"
                >长语音识别</a>
                <a
                  _stat_click_id="detectword"
                  href="/doc/detectword.shtml"
                  class="capability-group-wrap__item no-border"
                >关键词检索</a>
              </div>
            </div>
            <div class="capability-group">
              <div class="capability-group-logo">
                <i class="capa-11"></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">语音合成</p>
                <a
                  _stat_click_id="aaitts"
                  href="/doc/aaitts.shtml"
                  class="capability-group-wrap__item no-border"
                >语音合成</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

     <div class="sec sec-capability">
      <div class="layout">
        <h2 class="sec-tit">接入HDU AI能力 打造极致产品</h2>
        <div class="sec-cont">

          <div class="capability-row">
            <template v-for="(item1, index1) in productList" >
            <div v-if="index1 <=3" :key="index1" class="capability-group" :class="index1%4==3?'no-margin':''">
              <div class="capability-group-logo" >
                <i
                  class="capa-1"
                  :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">{{item1.label}}</p>
                <template v-for="(item2,index2) in item1.children">
                <a
                  v-if="index2<5" :key="index2"
                  _stat_click_id="capa_ocridentify"
                  class="capability-group-wrap__item"
                  @click="goToDetail(item2.value)"
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
                    :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
                  ></i>展开更多
                </a>
                <div v-if="item1.children.length>5" class="hide-wrap" :style="{display: isLoadMore[index1]?'block':'none'}">
                  <template v-for="(item2,index2) in item1.children">
                    <a
                      v-if="index2>=5" :key="index2"
                      _stat_click_id="capa_ocridentify"
                      class="capability-group-wrap__item"
                      @click="goToDetail(item2.value)"
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
                      :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
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
                  :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">{{item1.label}}</p>
                <template v-for="(item2,index2) in item1.children">
                <a
                  v-if="index2<5" :key="index2"
                  _stat_click_id="capa_ocridentify"
                  class="capability-group-wrap__item"
                  @click="goToDetail(item2.value)"
                >{{item2.label}}</a>
                </template>

                <a
                  v-if="item1.children.length>5"
                  _stat_click_id="capa_more"
                  _stat_action_obj="ocr"
                  href="javascript:void(0);"
                  class="capability-group-more jmod-capa-more"
                  :style="{display: isLoadMore?'none':'block'}"
                  @click="loadMore(index1)"
                >
                  <i
                    class="ico-more"
                    :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
                  ></i>展开更多
                </a>
                <div v-if="item1.children.length>5" class="hide-wrap" :style="{display: isLoadMore?'block':'none'}">
                  <template v-for="(item2,index2) in item1.children">
                    <a
                      v-if="index2>=5" :key="index2"
                      _stat_click_id="capa_ocridentify"
                      class="capability-group-wrap__item"
                      @click="goToDetail(item2.value)"
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
                      :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
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
                  :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">{{item1.label}}</p>
                <template v-for="(item2,index2) in item1.children">
                <a
                  v-if="index2<5" :key="index2"
                  _stat_click_id="capa_ocridentify"
                  class="capability-group-wrap__item"
                  @click="goToDetail(item2.value)"
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
                    :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
                  ></i>展开更多
                </a>
                <div v-if="item1.children.length>5" class="hide-wrap" :style="{display: isLoadMore[index1]?'block':'none'}">
                  <template v-for="(item2,index2) in item1.children">
                    <a
                      v-if="index2>=5" :key="index2"
                      _stat_click_id="capa_ocridentify"
                      class="capability-group-wrap__item"
                      @click="goToDetail(item2.value)"
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
                      :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
                    ></i>收起
                  </a>
                </div>
              </div>
            </div>
            </template>
          </div>
          
          <div class="capability-row">
            <template v-for="(item1, index1) in productList" >
            <div v-if="index1>=12 && index1 <=15" :key="index1" class="capability-group" :class="index1%4==3?'no-margin':''">
              <div class="capability-group-logo" >
                <i
                  class="capa-1"
                  :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
                ></i>
              </div>
              <div class="capability-group-wrap">
                <p class="capability-group-wrap__title">{{item1.label}}</p>
                <template v-for="(item2,index2) in item1.children">
                <a
                  v-if="index2<5" :key="index2"
                  _stat_click_id="capa_ocridentify"
                  class="capability-group-wrap__item"
                  @click="goToDetail(item2.value)"
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
                    :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
                  ></i>展开更多
                </a>
                <div v-if="item1.children.length>5" class="hide-wrap" :style="{display: isLoadMore[index1]?'block':'none'}">
                  <template v-for="(item2,index2) in item1.children">
                    <a
                      v-if="index2>=5" :key="index2"
                      _stat_click_id="capa_ocridentify"
                      class="capability-group-wrap__item"
                      @click="goToDetail(item2.value)"
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
                      :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
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
                  :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
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
                  :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
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
                  :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
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
                  :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
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
                  :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
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
                  :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
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
                  :style="{backgroundImage:'url('+require('@/assets/doc-home1.png')+')'}"
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
        style="visibility: hidden;"
        _stat_click_id="fixedbar_backtotop"
      ></a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import frontHeader from "@/components/header/front-header.vue";

export default {
  name: "doc-home",
  components: {
    frontHeader
  },
  data() {
    return {
      isLoadMore:[],
    };
  },
  computed: {
    ...mapState(["productList"])
  },
  mounted() {},
  methods: {
    loadMore(e) {
      let arr = [...this.isLoadMore];
      arr[e] = true;
      this.isLoadMore = arr;
    },
    hideMore(e) {
      let arr = [...this.isLoadMore];
      arr[e] = false;
      this.isLoadMore = arr;
    },

    goToDetail(value){
      this.$router.push({
        name: 'doc-detail', 
        query: { 
          value: value
        }
      })
    }
  }
};
</script>

<style scoped>
.container {
  /* background-color: black; */
}

.banner {
  height: 320px;
  width: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #09202e;
  text-align: center;
}
.banner p {
  font-size: 30px;
  padding-top: 163px;
  color: #fff;
}
.sec-tit {
  font-size: 32px;
  text-align: center;
  padding: 56px 0;
}
.sec-new {
  background-color: #f2f2f2;
  padding-bottom: 98px;
  text-align: center;
}
.sec-new a{
  color: inherit;
}
.sec-new .new-item {
  width: 285px;
  height: 180px;
  box-sizing: border-box;
  background-color: #fff;
  margin-right: 16px;
  display: inline-block;
  vertical-align: top;
  transition: all 0.3s ease;
}
.sec-new .new-item:hover {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
}
.sec-new .new-item p {
  font-size: 20px;
  margin-top: 15px;
}
.sec-new .new-item i {
  display: inline-block;
  background-repeat: no-repeat;
  margin-top: 40px;
}
.sec-new .new-item i.ico-1 {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: 0 0;
  width: 73px;
  height: 63px;
}
.sec-new .new-item i.ico-2 {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: -77px -68px;
  width: 56px;
  height: 56px;
}
.sec-new .new-item i.ico-3 {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: 0 -67px;
  width: 64px;
  height: 64px;
}
.sec-new .new-item i.ico-4 {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: -77px 0;
  width: 60px;
  height: 64px;
}
.sec-new .no-margin {
  margin-right: 0;
}
.sec-capability {
  background-color: #fff;
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
  /* background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000); */
  background-position: 0 -191px;
}
/* 
.sec-capability .capability-group-logo i.capa-2 {
  width: 52px;
  height: 51px;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: -112px -135px;
}
.sec-capability .capability-group-logo i.capa-3 {
  width: 52px;
  height: 52px;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: 0 -135px;
}
.sec-capability .capability-group-logo i.capa-4 {
  width: 50px;
  height: 49px;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: -54px -191px;
}
.sec-capability .capability-group-logo i.capa-5 {
  width: 50px;
  height: 49px;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: -108px -191px;
}
.sec-capability .capability-group-logo i.capa-6 {
  width: 50px;
  height: 52px;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: -195px -110px;
}
.sec-capability .capability-group-logo i.capa-7 {
  width: 50px;
  height: 56px;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: -141px 0;
}
.sec-capability .capability-group-logo i.capa-8 {
  width: 52px;
  height: 52px;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: -56px -135px;
}
.sec-capability .capability-group-logo i.capa-9 {
  width: 50px;
  height: 51px;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: -141px -60px;
}
.sec-capability .capability-group-logo i.capa-10 {
  width: 51px;
  height: 51px;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: -195px 0;
}
.sec-capability .capability-group-logo i.capa-11 {
  width: 51px;
  height: 51px;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000);
  background-position: -195px -55px;
} */
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
  /* background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-ed33a25616.doc.home.png?max_age=31536000); */
  background-position: -195px -166px;
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
</style>