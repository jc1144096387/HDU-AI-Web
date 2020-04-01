/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <div class="mod-header" :class="isShow ? 'hover' : ''">
    <!-- <div class="cat">
      <div class="cat-box" :class="isShow?'active':''" data-cat="engine">
        <div class="layout">
          <div class="cat-group">
            <h3 class="cat-tit">
              <div class="cat-ico">
                <i
                  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                  class="ico-lan"
                ></i>
              </div>自然语言处理
            </h3>
            <ul class="cat-list">
              <li class="cat-item">
                <div class="cat-item-main">
                  <span>基础文本分析</span>
                </div>
                <div class="cat-item-sub">
                  <div class="cat-item-row">
                    <a href="#participle">分词/词性</a>
                    <a href="#proper">专有名词</a>
                    <a href="#synonym">同义词</a>
                  </div>
                </div>
              </li>
              <li class="cat-item">
                <div class="cat-item-main">
                  <span>语义解析</span>
                </div>
                <div class="cat-item-sub">
                  <div class="cat-item-row">
                    <a href="#">
                      意图/成分
                      <i
                        :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                        class="cat-tag is-beta"
                      ></i>
                    </a>
                  </div>
                </div>
              </li>
              <li class="cat-item">
                <div class="cat-item-main">
                  <a href="#">情感分析</a>
                </div>
              </li>
              <li class="cat-item">
                <div class="cat-item-main">
                  <span>机器翻译</span>
                </div>
                <div class="cat-item-sub">
                  <div class="cat-item-row">
                    <a href="#">文本翻译</a>
                    <a href="#">
                      图片翻译
                      <i
                        :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                        class="cat-tag is-new"
                      ></i>
                    </a>
                    <a href="#">
                      语音翻译
                      <i
                        :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                        class="cat-tag is-new"
                      ></i>
                    </a>
                  </div>
                </div>
              </li>
              <li class="cat-item">
                <div class="cat-item-main">
                  <a href="#">
                    智能闲聊
                    <i
                      :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                      class="cat-tag is-hot"
                    ></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="cat-group">
            <h3 class="cat-tit">
              <div class="cat-ico">
                <i
                  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                  class="ico-image"
                ></i>
              </div>计算机视觉
            </h3>
            <ul class="cat-list">
              <li class="cat-item">
                <div class="cat-item-main">
                  <span>
                    OCR
                    <i
                      :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                      class="cat-tag is-hot"
                    ></i>
                  </span>
                </div>
                <div class="cat-item-sub">
                  <div class="cat-item-row">
                    <a href="#identify">身份证识别</a>
                    <a href="#card">名片识别</a>
                    <a href="#driverregistration">行驶证/驾驶证识别</a>
                  </div>
                  <div class="cat-item-row">
                    <a href="#businesslicense">营业执照识别</a>
                    <a href="#creditcard">银行卡识别</a>
                    <a href="#common">通用识别</a>
                  </div>
                </div>
              </li>
              <li class="cat-item">
                <div class="cat-item-main">
                  <span>人脸识别</span>
                </div>
                <div class="cat-item-sub">
                  <div class="cat-item-row">
                    <a href="#detect">人脸分析</a>
                    <a href="#multiface">
                      多人脸检测
                      <i
                        :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                        class="cat-tag is-new"
                      ></i>
                    </a>
                    <a href="#compare">人脸对比</a>
                    <a href="#search">人脸搜索</a>
                  </div>
                  <div class="cat-item-row">
                    <a href="#shape">五官定位</a>
                    <a href="javascript:void(0);" class="disabled">人脸核身(即将开放)</a>
                  </div>
                </div>
              </li>
              <li class="cat-item">
                <div class="cat-item-main">
                  <span>图片识别</span>
                </div>
                <div class="cat-item-sub">
                  <div class="cat-item-row">
                    <a href="#scene">
                      物体/场景识别
                      <i
                        :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                        class="cat-tag is-beta"
                      ></i>
                    </a>
                    <a href="#tag">图片标签识别</a>
                    <a href="#express">看图说话</a>
                  </div>
                  <div class="cat-item-row">
                    <a href="#fuzzy">模糊图片识别</a>
                    <a href="#food">美食图片识别</a>
                    <a href="#plants">
                      花草识别
                      <i
                        :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                        class="cat-tag is-hot"
                      ></i>
                    </a>
                  </div>
                  <div class="cat-item-row">
                    <a href="#cars">
                      车辆识别
                      <i
                        :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                        class="cat-tag is-new"
                      ></i>
                    </a>
                  </div>
                </div>
              </li>
              <li class="cat-item">
                <div class="cat-item-main">
                  <span>
                    图片特效
                    <i
                      :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                      class="cat-tag is-new"
                    ></i>
                  </span>
                </div>
                <div class="cat-item-sub">
                  <div class="cat-item-row">
                    <a href="#">人脸融合</a>
                    <a href="#">滤镜</a>
                    <a href="#">人脸美妆</a>
                  </div>
                  <div class="cat-item-row">
                    <a href="#">人脸变妆</a>
                    <a href="#">大头贴</a>
                    <a href="#">颜龄检测</a>
                  </div>
                </div>
              </li>
              <li class="cat-item">
                <div class="cat-item-main">
                  <a href="#">智能鉴黄</a>
                </div>
              </li>
              <li class="cat-item">
                <div class="cat-item-main">
                  <a href="#">暴恐识别</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="cat-group">
            <h3 class="cat-tit">
              <div class="cat-ico">
                <i
                  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                  class="ico-voice"
                ></i>
              </div>智能语音
            </h3>
            <ul class="cat-list">
              <li class="cat-item">
                <div class="cat-item-main">
                  <span>语音识别</span>
                </div>
                <div class="cat-item-sub">
                  <div class="cat-item-row">
                    <a href="#">语音识别</a>
                    <a href="#">
                      长语音识别
                      <i
                        :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                        class="cat-tag is-new"
                      ></i>
                    </a>
                    <a href="#">
                      关键词检索
                      <i
                        :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                        class="cat-tag is-new"
                      ></i>
                    </a>
                  </div>
                </div>
              </li>
              <li class="cat-item">
                <div class="cat-item-main">
                  <a href="#">
                    语音合成
                    <i
                      :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                      class="cat-tag is-new"
                    ></i>
                  </a>
                </div>
              </li>
              <li class="cat-item">
                <div class="cat-item-main">
                  <span>语音唤醒(即将开放)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>-->
    <div class="cat">
      <div
        class="cat-box"
        :class="isShow ? 'active' : ''"
        data-cat="capability"
      >
        <div class="layout">
          <div class="cat-col">
            <template v-for="(item1, index1) in productList">
              <div class="cat-group top-row" :key="index1" v-if="index1 <= 1">
                <p class="cat-tit">
                  {{ item1.label }}
                  <i
                    v-if="item1.span"
                    :class="'is-' + item1.span"
                    :style="{
                      backgroundImage:
                        'url(' +
                        require('../../assets/header/cpimg/sprite.png') +
                        ')'
                    }"
                    class="cat-tag"
                  ></i>
                </p>
                <div class="cat-list">
                  <div
                    class="cat-item"
                    v-for="(item2, index2) in item1.children"
                    :key="index2"
                  >
                    <a
                      _stat_click_id="header_demonav"
                      _stat_action_obj="ocr_identify"
                      @click="
                        goToProductDetail(item1.value, item2.value, index2)
                      "
                      >{{ item2.label }}</a
                    >
                    <i
                      v-if="item2.span"
                      :class="'is-' + item2.span"
                      :style="{
                        backgroundImage:
                          'url(' +
                          require('../../assets/header/cpimg/sprite.png') +
                          ')'
                      }"
                      class="cat-tag"
                    ></i>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="cat-col">
            <template v-for="(item1, index1) in productList">
              <div
                class="cat-group top-row"
                :key="index1"
                v-if="index1 >= 2 && index1 <= 3"
              >
                <p class="cat-tit">
                  {{ item1.label }}
                  <i
                    v-if="item1.span"
                    :class="'is-' + item1.span"
                    :style="{
                      backgroundImage:
                        'url(' +
                        require('../../assets/header/cpimg/sprite.png') +
                        ')'
                    }"
                    class="cat-tag"
                  ></i>
                </p>
                <div class="cat-list">
                  <div
                    class="cat-item"
                    v-for="(item2, index2) in item1.children"
                    :key="index2"
                  >
                    <a
                      _stat_click_id="header_demonav"
                      _stat_action_obj="ocr_identify"
                      @click="
                        goToProductDetail(item1.value, item2.value, index2)
                      "
                      >{{ item2.label }}</a
                    >
                    <i
                      v-if="item2.span"
                      :class="'is-' + item2.span"
                      :style="{
                        backgroundImage:
                          'url(' +
                          require('../../assets/header/cpimg/sprite.png') +
                          ')'
                      }"
                      class="cat-tag"
                    ></i>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="cat-col">
            <template v-for="(item1, index1) in productList">
              <div
                class="cat-group top-row"
                :key="index1"
                v-if="index1 >= 4 && index1 <= 7"
              >
                <p class="cat-tit">
                  {{ item1.label }}
                  <i
                    v-if="item1.span"
                    :class="'is-' + item1.span"
                    :style="{
                      backgroundImage:
                        'url(' +
                        require('../../assets/header/cpimg/sprite.png') +
                        ')'
                    }"
                    class="cat-tag"
                  ></i>
                </p>
                <div class="cat-list">
                  <div
                    class="cat-item"
                    v-for="(item2, index2) in item1.children"
                    :key="index2"
                  >
                    <a
                      _stat_click_id="header_demonav"
                      _stat_action_obj="ocr_identify"
                      @click="
                        goToProductDetail(item1.value, item2.value, index2)
                      "
                      >{{ item2.label }}</a
                    >
                    <i
                      v-if="item2.span"
                      :class="'is-' + item2.span"
                      :style="{
                        backgroundImage:
                          'url(' +
                          require('../../assets/header/cpimg/sprite.png') +
                          ')'
                      }"
                      class="cat-tag"
                    ></i>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="cat-col">
            <template v-for="(item1, index1) in productList">
              <div
                class="cat-group top-row"
                :key="index1"
                v-if="index1 >= 8 && index1 <= 10"
              >
                <p class="cat-tit">
                  {{ item1.label }}
                  <i
                    v-if="item1.span"
                    :class="'is-' + item1.span"
                    :style="{
                      backgroundImage:
                        'url(' +
                        require('../../assets/header/cpimg/sprite.png') +
                        ')'
                    }"
                    class="cat-tag"
                  ></i>
                </p>
                <div class="cat-list">
                  <div
                    class="cat-item"
                    v-for="(item2, index2) in item1.children"
                    :key="index2"
                  >
                    <a
                      _stat_click_id="header_demonav"
                      _stat_action_obj="ocr_identify"
                      @click="
                        goToProductDetail(item1.value, item2.value, index2)
                      "
                      >{{ item2.label }}</a
                    >
                    <i
                      v-if="item2.span"
                      :class="'is-' + item2.span"
                      :style="{
                        backgroundImage:
                          'url(' +
                          require('../../assets/header/cpimg/sprite.png') +
                          ')'
                      }"
                      class="cat-tag"
                    ></i>
                  </div>
                </div>
              </div>
            </template>
          </div>

          <!-- <div class="cat-col">
            <div class="cat-group top-row">
              <p class="cat-tit">
                OCR
                <i
                  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                  class="cat-tag is-hot"
                ></i>
              </p>
              <div class="cat-list">
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="ocr_identify"
                    href="/product/ocr.shtml#identify"
                  >身份证OCR</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="ocr_driverregistration"
                    href="/product/ocr.shtml#driverregistration"
                  >行驶证OCR</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="ocr_driverlicense"
                    href="/product/ocr.shtml#driverlicense"
                  >驾驶证OCR</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="ocr_common"
                    href="/product/ocr.shtml#common"
                  >通用OCR</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="ocr_businesslicense"
                    href="/product/ocr.shtml#businesslicense"
                  >营业执照OCR</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="ocr_creditcard"
                    href="/product/ocr.shtml#creditcard"
                  >银行卡OCR</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="ocr_handwrite"
                    href="/product/ocr.shtml#handwrite"
                  >手写体OCR</a>
                  <i
                    :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                    class="cat-tag is-new"
                  ></i>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="ocr_plate"
                    href="/product/ocr.shtml#plate"
                  >车牌OCR</a>
                  <i
                    :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                    class="cat-tag is-new"
                  ></i>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="ocr_card"
                    href="/product/ocr.shtml#card"
                  >名片OCR</a>
                </div>
              </div>
            </div>
            <div class="cat-group bottom-row">
              <p class="cat-tit">人脸与人体识别</p>
              <div class="cat-list">
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="face_detect"
                    href="/product/face.shtml#detect"
                  >人脸检测与分析</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="face_multiface"
                    href="/product/face.shtml#multiface"
                  >多人脸检测</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="face_agecompare"
                    href="/product/face.shtml#agecompare"
                  >跨年龄人脸识别</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="face_shape"
                    href="/product/face.shtml#shape"
                  >五官定位</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="face_compare"
                    href="/product/face.shtml#compare"
                  >人脸对比</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="face_search"
                    href="/product/face.shtml#search"
                  >人脸搜索</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="gesture"
                    href="/product/gesture.shtml"
                  >手势识别</a>
                  <i
                    :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                    class="cat-tag is-new"
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <div class="cat-col">
            <div class="cat-group top-row">
              <p class="cat-tit">图片特效</p>
              <div class="cat-list">
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="facemerge"
                    href="/product/facemerge.shtml"
                  >人脸融合（即将开放）</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="imgfilter"
                    href="/product/imgfilter.shtml"
                  >滤镜</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="facemakeup"
                    href="/product/facemakeup.shtml"
                  >人脸美妆</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="facedecoration"
                    href="/product/facedecoration.shtml"
                  >人脸变妆</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="sticker"
                    href="/product/sticker.shtml"
                  >大头贴</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="faceage"
                    href="/product/faceage.shtml"
                  >颜龄检测</a>
                </div>
              </div>
            </div>
            <div class="cat-group bottom-row">
              <p class="cat-tit">图片识别</p>
              <div class="cat-list">
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="visionimgidy_express"
                    href="/product/visionimgidy.shtml#express"
                  >看图说话</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="visionimgidy_tag"
                    href="/product/visionimgidy.shtml#tag"
                  >多标签识别</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="visionimgidy_fuzzy"
                    href="/product/visionimgidy.shtml#fuzzy"
                  >模糊图片识别</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="visionimgidy_food"
                    href="/product/visionimgidy.shtml#food"
                  >美食图片识别</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="visionimgidy_scene"
                    href="/product/visionimgidy.shtml#scene"
                  >场景/物体识别</a>
                </div>
              </div>
            </div>
          </div>

          <div class="cat-col">
            <div class="cat-group top-row">
              <p class="cat-tit">敏感信息甄别</p>
              <div class="cat-list">
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="terror"
                    href="/product/terror.shtml"
                  >暴恐识别</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="yellow"
                    href="/product/yellow.shtml"
                  >图片鉴黄</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="evilaudio"
                    href="/product/evilaudio.shtml"
                  >音频鉴黄</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="sensitive"
                    href="/product/sensitive.shtml"
                  >音频敏感词检测</a>
                  <i
                    :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                    class="cat-tag is-new"
                  ></i>
                </div>
              </div>
            </div>
            <div class="cat-group">
              <p class="cat-tit">智能闲聊</p>
              <div class="cat-list">
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="nlpchat"
                    href="/product/nlpchat.shtml"
                  >智能闲聊</a>
                  <i
                    :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                    class="cat-tag is-hot"
                  ></i>
                </div>
              </div>
            </div>
            <div class="cat-group">
              <p class="cat-tit">机器翻译</p>
              <div class="cat-list">
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="nlptrans_text"
                    href="/product/nlptrans.shtml#text"
                  >文本翻译</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="nlptrans_audio"
                    href="/product/nlptrans.shtml#audio"
                  >语音翻译</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="nlptrans_photo"
                    href="/product/nlptrans.shtml#photo"
                  >图片翻译</a>
                </div>
              </div>
            </div>
            <div class="cat-group bottom-row">
              <p class="cat-tit">基础文本分析</p>
              <div class="cat-list">
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="nlpbase_participle"
                    href="/product/nlpbase.shtml#participle"
                  >分词/词性</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="nlpbase_proper"
                    href="/product/nlpbase.shtml#proper"
                  >专有名词</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="nlpbase_synonym"
                    href="/product/nlpbase.shtml#synonym"
                  >同义词</a>
                </div>
              </div>
            </div>
          </div>

          <div class="cat-col">
            <div class="cat-group top-row">
              <p class="cat-tit">语义解析</p>
              <div class="cat-list">
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="nlpsem"
                    href="/product/nlpsem.shtml"
                  >意图成分</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="nlpemo"
                    href="/product/nlpemo.shtml"
                  >情感分析</a>
                </div>
              </div>
            </div>
            <div class="cat-group">
              <p class="cat-tit">语音识别</p>
              <div class="cat-list">
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="aaiasr"
                    href="/product/aaiasr.shtml"
                  >语音识别</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="aaiasrl"
                    href="/product/aaiasrl.shtml"
                  >长语音识别</a>
                </div>
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="keywords"
                    href="/product/keywords.shtml"
                  >关键词检索</a>
                  <i
                    :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"
                    class="cat-tag is-new"
                  ></i>
                </div>
              </div>
            </div>
            <div class="cat-group bottom-row">
              <p class="cat-tit">语音合成</p>
              <div class="cat-list">
                <div class="cat-item">
                  <a
                    _stat_click_id="header_demonav"
                    _stat_action_obj="aaitts"
                    href="/product/aaitts.shtml"
                  >语音合成</a>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div class="layout clearfix">
      <a
        @click="goToHome()"
        class="mod-header-logo"
        :style="{
          backgroundImage:
            'url(' + require('../../assets/header/cpimg/sprite.png') + ')'
        }"
      ></a>

      <div class="mod-header-nav">
        <ul id="jmod-header-nav">
          <li
            id="nav-header-serv"
            class="top-cat hassub"
            data-cat="engine"
            @mouseenter="show($event)"
            @mouseleave="hide($event)"
          >
            <h2>
              <a href="javascript:void(0);">技术引擎</a>
              <i
                :style="{
                  backgroundImage:
                    'url(' +
                    require('../../assets/header/cpimg/sprite.png') +
                    ')'
                }"
                class="top-cat-arrow"
              ></i>
            </h2>
          </li>
          <li
            id="nav-header-case"
            class="top-cat hassub"
            data-cat="case"
            @mouseenter="sliderIn('186px', '96px')"
            @mouseleave="sliderOut()"
          >
            <h2>
              <a href="javascript:void(0);">解决方案</a>
              <i
                :style="{
                  backgroundImage:
                    'url(' +
                    require('../../assets/header/cpimg/sprite.png') +
                    ')'
                }"
                class="top-cat-arrow"
              ></i>
            </h2>
            <div class="case-menu">
              <a
                href="/case/hardware.shtml"
                class="case-menu-row"
                _stat_click_id="header_casenav"
                _stat_action_obj="hardware"
                >智能硬件</a
              >
              <a
                href="/case/xianji.shtml"
                class="case-menu-row"
                _stat_click_id="header_casenav"
                _stat_action_obj="xianji"
                >智慧招聘</a
              >
              <a
                href="/case/facedoor.shtml"
                class="case-menu-row"
                _stat_click_id="header_casenav"
                _stat_action_obj="facedoor"
                >智慧门禁</a
              >
            </div>
          </li>

          <li
            id="nav-header-accelerator"
            class="top-cat"
            @mouseenter="sliderIn('322px', '72px')"
            @mouseleave="sliderOut()"
          >
            <h2>
              <a href="#">AI加速器</a>
            </h2>
          </li>
          <li
            id="nav-header-info"
            class="top-cat"
            @mouseenter="sliderIn('434px', '72px')"
            @mouseleave="sliderOut()"
          >
            <h2>
              <a href="#">资讯动态</a>
            </h2>
          </li>
          <li
            id="nav-header-hr"
            class="top-cat"
            @mouseenter="sliderIn('546px', '72px')"
            @mouseleave="sliderOut()"
          >
            <h2>
              <a href="#">AI在腾讯</a>
            </h2>
          </li>
          <li
            id="nav-header-join"
            class="top-cat"
            @mouseenter="sliderIn('658px', '72px')"
            @mouseleave="sliderOut()"
          >
            <h2>
              <a href="#">加入我们</a>
            </h2>
          </li>
          <li
            id="nav-header-doc"
            class="top-cat"
            @mouseenter="sliderIn('770px', '72px')"
            @mouseleave="sliderOut()"
            @click="goToDoc()"
          >
            <h2>
              <a href="#">文档中心</a>
            </h2>
          </li>
        </ul>
        <i
          :style="{
            width: sliderWidth,
            transform: 'translateX(' + sliderX + ')',
            backgroundImage:
              'url(' + require('../../assets/header/cpimg/sprite.png') + ')'
          }"
          class="jmod-nav-slider slider"
          :class="isSliderHidden ? 'hidden' : ''"
        ></i>
      </div>

      <div v-if="!userInfo" class="mod-header-user" @click="goToLogin()">
        <a class="try jmod-header-try">控制台</a>
        <a class="console jmod-header-console hidden">控制台</a>
      </div>
      <div v-if="userInfo"  class="mod-header-user">
        <a
          href="/console/home"
          target="_blank"
          class="try jmod-header-try hidden"
          _stat_click_id="header_console"
          >控制台</a
        >
        <a
          href="/console/home"
          target="_blank"
          class="console jmod-header-console"
          _stat_click_id="header_console"
          >控制台</a
        >
        <div class="jmod-header-user user">
          <em class="jmod-header-name">{{userInfo.name}}</em>              <i
                :style="{
                  backgroundImage:
                    'url(' +
                    require('../../assets/header/cpimg/sprite.png') +
                    ')'
                }"
                class="top-cat-arrow"
              ></i>
          <div class="dropdown">
            <a
              href="/console/user/account-info"
              target="__blank"
              _stat_click_id="header_userinfo"
              >帐号信息</a
            >
            <a
              href="javascript:void(0);"
              @click="logout()"
              >退出</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="banner jmod_banner">
    <div class="ban cur" style="background-color:#1e1f21;background-image:url('自定义Banner图片地址');height: 62px;">
    </div>
  </div>-->

  <!-- </div> -->
</template>

<script>
import product from "@/mock/product.js";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import Cookies from 'js-cookie';
import { getStore, setStore } from '@/libs/storage';
export default {
  name: "front-header",

  data() {
    return {
      isShow: false,
      sliderX: "0px",
      sliderWidth: "80px",
      isSliderHidden: true,
      productList: product.productList
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  mounted() {
    this.getUserInfoAction().then(res => {
      if (!this.userInfo) {
        this.$router.push({
          name: "login"
        });
      }
    });
  },
  methods: {
    ...mapActions(["getUserInfoAction"]),
    //登出
    logout(){
      console.log("登出");
      Cookies.set('userInfo', '');
      setStore('userInfo', '');
      setStore('accessToken', '');
      this.getUserInfoAction();
    },
    show() {
      this.isShow = true;

      this.isSliderHidden = false;
      var that = this;
      setTimeout(function() {
        that.sliderX = "50px";
        that.sliderWidth = "96px";
      }, 1);
      // this.sliderX = '12px';
      // this.sliderWidth = '104px';
    },
    hide() {
      this.isShow = false;
      this.sliderX = "50px";
      this.isSliderHidden = true;
    },
    sliderIn(x, width) {
      this.isSliderHidden = false;
      // this.sliderX = x;
      // this.sliderWidth = '80px';
      var that = this;
      setTimeout(function() {
        that.sliderX = x;
        that.sliderWidth = width;
      }, 1);
    },
    sliderOut() {
      this.isSliderHidden = true;
    },
    // 返回首页
    goToHome() {
      this.$router.push({
        path: "/"
      });
    },
    // 跳转技术引擎详情页
    goToProductDetail(type1, type2, currentTab) {
      this.$router.push({
        path: "product",
        query: {
          type1: type1,
          type2: type2,
          currentTab: currentTab
        }
      });
    },
    // 跳转文档中心
    goToDoc() {
      this.$router.push({
        path: "doc"
      });
    },
    // 跳转登录页
    goToLogin() {
      this.$router.push({
        path: "login"
      });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
  outline: none;
  color: inherit;
}
.mod-header .cat .layout {
  min-width: 0;
}

.mod-header-logo {
  float: left;
  width: 189px;
  height: 60px;
  /* background-image: url(@/components/header/img/cpimg/sprite.png); */
  background-position: 0 -64px;
  margin-left: 12px;
}

.mod-header-nav .top-cat-arrow {
  content: "";
  width: 20px;
  height: 12px;
  background-image: url(/components/header/img/cpimg/sprite.png);
  background-position: -331px -158px;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  display: inline-block;
  vertical-align: bottom;
  margin-left: 4px;
}

.mod-header-user .user i {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  background-image: url(/components/header/img/cpimg/sprite);
  background-position: -291px -174px;
  width: 20px;
  height: 12px;
  margin-left: 5px;
}

.mod-header.active .mod-header-logo,
.mod-header.hover .mod-header-logo,
.mod-header:hover .mod-header-logo {
  /* background-image: url(@/components/header/img/cpimg/sprite.png); */
  background-position: 0 -128px;
}

.mod-header .cat-tag.is-beta {
  /* background-image: url(@/components/header/img/cpimg/sprite.png); */
  background-position: -299px -158px;
}

.mod-header .cat-tag.is-hot {
  /* background-image: url(@/components/header/img/cpimg/sprite.png); */
  background-position: -267px -158px;
}

.mod-header .cat-tag.is-new {
  /* background-image: url(@/components/header/img/cpimg/sprite.png); */
  background-position: -321px -124px;
}

.mod-header .ico-lan {
  width: 24px;
  height: 30px;
  /* background-image: url(@/components/header/img/cpimg/sprite.png); */
  background-position: -267px -124px;
}

.mod-header .ico-voice {
  width: 33px;
  height: 30px;
  /* background-image: url(@/components/header/img/cpimg/sprite.png); */
  background-position: -267px -90px;
}

.mod-header .ico-image {
  width: 33px;
  height: 30px;
  /* background-image: url(@/components/header/img/cpimg/sprite.png); */
  background-position: -304px -90px;
}
</style>
