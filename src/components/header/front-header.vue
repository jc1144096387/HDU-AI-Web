<template>
  <div class="mod-header">
  <div class="cat">
    <div class="cat-box" data-cat="engine">
      <div class="layout">
        <div class="cat-group">
          <h3 class="cat-tit"><div class="cat-ico"><i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="ico-lan"></i></div>自然语言处理</h3>
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
                  <a href="#">意图/成分<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-beta"></i></a>
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
                  <a href="#">图片翻译<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-new"></i></a>
                  <a href="#">语音翻译<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-new"></i></a>
                </div>
              </div>
            </li>
            <li class="cat-item">
              <div class="cat-item-main">
                <a href="#">智能闲聊<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-hot"></i></a>
              </div>
            </li>
          </ul>
        </div>
        <div class="cat-group">
          <h3 class="cat-tit"><div class="cat-ico"><i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="ico-image"></i></div>计算机视觉</h3>
          <ul class="cat-list">
            <li class="cat-item">
              <div class="cat-item-main">
                <span>OCR<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-hot"></i></span>
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
                  <a href="#multiface">多人脸检测<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-new"></i></a>
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
                  <a href="#scene">物体/场景识别<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-beta"></i></a>
                  <a href="#tag">图片标签识别</a>
                  <a href="#express">看图说话</a>
                </div>
                <div class="cat-item-row">
                  <a href="#fuzzy">模糊图片识别</a>
                  <a href="#food">美食图片识别</a>
                  <a href="#plants">花草识别<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-hot"></i></a>
                </div>
                <div class="cat-item-row">
                  <a href="#cars">车辆识别<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-new"></i></a>
                </div>
              </div>
            </li>
            <li class="cat-item">
              <div class="cat-item-main">
                <span>图片特效<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-new"></i></span>
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
          <h3 class="cat-tit"><div class="cat-ico"><i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="ico-voice"></i></div>智能语音</h3>
          <ul class="cat-list">
            <li class="cat-item">
              <div class="cat-item-main">
                <span>语音识别</span>
              </div>
              <div class="cat-item-sub">
                <div class="cat-item-row">
                  <a href="#">语音识别</a>
                  <a href="#">长语音识别<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-new"></i></a>
                  <a href="#">关键词检索<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-new"></i></a>
                </div>
              </div>
            </li>
            <li class="cat-item">
              <div class="cat-item-main">
                <a href="#">语音合成<i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="cat-tag is-new"></i></a>
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
  </div>

  <div class="layout clearfix">
    <a href="" class="mod-header-logo" :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" ></a>

    <div class="mod-header-nav">
      <ul id="jmod-header-nav">
        <li id="nav-header-serv" class="top-cat hassub" data-cat="engine">
          <h2><a href="javascript:void(0);">技术引擎</a><i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}"  class="top-cat-arrow"></i></h2>
        </li>
        <li id="nav-header-accelerator" class="top-cat"><h2><a href="#">AI加速器</a></h2></li>
        <li id="nav-header-info" class="top-cat"><h2><a href="#">资讯动态</a></h2></li>
        <li id="nav-header-hr" class="top-cat"><h2><a href="#">AI在腾讯</a></h2></li>
        <li id="nav-header-join" class="top-cat"><h2><a href="#">加入我们</a></h2></li>
        <li id="nav-header-doc" class="top-cat"><h2><a href="#">文档中心</a></h2></li>
      </ul>
      <i  :style="{backgroundImage:'url('+require('../../assets/header/cpimg/sprite.png')+')'}" class="jmod-nav-slider slider hidden" style="transform: translateX(0px);"></i>
    </div>

    <div class="mod-header-user">
      <a href="#" target="_blank" class="try jmod-header-try">控制台</a>
      <a href="#" target="_blank" class="console jmod-header-console hidden">控制台</a>
    </div>
  </div>

</div>

  <!-- <div class="banner jmod_banner">
    <div class="ban cur" style="background-color:#1e1f21;background-image:url('自定义Banner图片地址');height: 62px;">
    </div>
  </div> -->

<!-- </div> -->
</template>

<script>
// import store from '@/store/index';
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { removeStore } from "@/libs/storage";
export default {
  name: "front-header",
  
  data() {
    return {
     
    };
  },
  methods: {
	
	}
};
</script>

<style scoped>
body,dd,dt,h1,h2,h3,h4,h5,h6,li,p,ul {
	margin: 0;
	padding: 0
}

h1,h2,h3,h4,h5,h6 {
	font-size: 100%;
	font-weight: 400
}

dd,li,ul {
	list-style: none
}

img {
	border: none;
	outline: none
}

table {
	border-collapse: collapse;
	border-spacing: 0
}

a {
	text-decoration: none;
	cursor: pointer;
	outline: none;
	color: inherit
}

input {
	outline: none
}

em {
	font-style: normal
}

html {
	height: 100%
}

body {
	position: relative;
	font: 12px/1.5 microsoft yahei,arial,sans-serif;
	-webkit-font-smoothing: antialiased;
	background-color: #f8f8f8;
	min-width: 1200px;
	color: #323232;
	min-height: 100%;
	box-sizing: border-box
}

button,input,select,textarea {
	font-size: 1em;
	font-family: inherit
}

::-webkit-input-placeholder {
	color: #a9a9a9
}

:-moz-placeholder {
	color: #a9a9a9
}

::-moz-placeholder {
	color: #a9a9a9
}

:-ms-input-placeholder {
	color: #a9a9a9
}

.scroll::-webkit-scrollbar {
	width: 8px;
	background: #eee
}

.scroll::-webkit-scrollbar-thumb {
	border-radius: 4px;
	background: #ddd
}

.hidden {
	display: none!important
}

.disabled {
	opacity: .5;
	filter: alpha(opacity=50);
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=50)";
	cursor: default;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}

:disabled {
	opacity: .5;
	filter: alpha(opacity=50);
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=50)";
	cursor: default;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.layout {
	width: 1200px;
	margin: 0 auto
}

.mr0 {
	margin-right: 0!important
}

.weak {
	color: #878787
}

.weaker {
	color: #9e9e9e
}


.clearfix:after,.clearfix:before {
	content: '';
	display: table;
	font: 0/0 a
}

.clearfix:after {
	clear: both
}

.mod-header-user .user em {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	max-width: 100%;
	word-wrap: normal
}

.fixed-bar .backtop:before {
	font: 0/0 a;
	color: transparent;
	text-shadow: none;
	background-color: transparent;
	border: 0
}

.mod-header {
	width: 100%;
	font-size: 14px;
	position: absolute;
	top: 0;
	left: 0;
	box-sizing: border-box;
	color: #fff;
	z-index: 10;
	transition: background .3s ease
}

.mod-header .layout {
	min-width: 1200px;
	width: auto;
	position: relative
}

.mod-header-logo {
	float: left;
	width: 189px;
	height: 60px;
	/* background-image: url(@/components/header/img/cpimg/sprite.png); */
	background-position: 0 -64px;
	margin-left: 12px
}

.mod-header-nav {
	position: relative;
	float: left
}

.mod-header-nav li {
	position: relative;
	float: left;
	line-height: 1
}

.mod-header-nav a:hover {
	text-decoration: none
}

.mod-header-nav .top-cat {
	text-align: center;
	padding: 24px 12px;
	margin-right: 12px
}

.mod-header-nav .top-cat:first-child {
	margin: 0 12px
}

.mod-header-nav .top-cat h2 {
	position: relative
}

.mod-header-nav .top-cat h2 a {
	padding: 0;
	position: relative
}

.mod-header-nav .top-cat-arrow {
	content: "";
	width: 20px;
	height: 12px;
	background-image: url(/components/header/img/cpimg/sprite.png);
	background-position: -331px -158px;
	transition: -webkit-transform .3s ease;
	transition: transform .3s ease;
	transition: transform .3s ease,-webkit-transform .3s ease;
	-webkit-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	transform: rotate(180deg);
	display: inline-block;
	vertical-align: bottom;
	margin-left: 4px
}

.mod-header-nav .top-cat.hassub:active .top-cat-arrow,.mod-header-nav .top-cat.hassub:hover .top-cat-arrow {
	-webkit-transform: rotate(0deg);
	-ms-transform: rotate(0deg);
	transform: rotate(0deg)
}

.mod-header-nav .slider {
	position: absolute;
	bottom: 0;
	left: 0;
	width: auto;
	height: 3px;
	background-color: #fff;
	transition: width .3s ease-out,-webkit-transform .3s ease-out;
	transition: transform .3s ease-out,width .3s ease-out;
	transition: transform .3s ease-out,width .3s ease-out,-webkit-transform .3s ease-out
}

.mod-header-user {
	line-height: 25px;
	position: absolute;
	top: 14px;
	right: 0;
	font-size: 0
}

.mod-header-user .console {
	display: inline-block;
	padding: 0 12px;
	vertical-align: middle;
	font-size: 14px
}

.mod-header-user .console:hover {
	color: #126ee1
}

.mod-header-user .user {
	padding-left: 11px;
	display: inline-block;
	vertical-align: middle;
	position: relative;
	border-left: 1px solid #fff;
	font-size: 14px;
	margin-right: 22px
}

.mod-header-user .user em {
	color: #fff;
	display: inline-block;
	max-width: 102px;
	vertical-align: bottom
}

.mod-header-user .user i {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	background-image: url(/components/header/img/cpimg/sprite);
	background-position: -291px -174px;
	width: 20px;
	height: 12px;
	margin-left: 5px
}

.mod-header-user .user .dropdown {
	position: absolute;
	padding-top: 19px;
	top: 25px;
	left: 0;
	width: 100%;
	text-align: center;
	display: none
}

.mod-header-user .user .dropdown a {
	display: block;
	line-height: 40px;
	background-color: #333
}

.mod-header-user .user:hover {
	color: #126ee1
}

.mod-header-user .user:hover .dropdown {
	display: block
}

.mod-header-user .user:hover a {
	color: #fff
}

.mod-header-user .user:hover a:hover {
	color: #126ee1
}

.mod-header-user .try {
	background-color: #fff;
	color: #0052d9;
	padding: 8px 18px;
	border-radius: 3px;
	line-height: 1;
	display: inline-block;
	transition: all .3s ease;
	vertical-align: middle;
	font-size: 14px;
	margin-right: 22px
}

.mod-header.active,.mod-header.hover,.mod-header:hover {
	background-color: #333
}

.mod-header.active .mod-header-logo,.mod-header.hover .mod-header-logo,.mod-header:hover .mod-header-logo {
	/* background-image: url(@/components/header/img/cpimg/sprite.png); */
	background-position: 0 -128px
}

.mod-header.active .mod-header-user .user i:after,.mod-header.hover .mod-header-user .user i:after,.mod-header:hover .mod-header-user .user i:after {
	border-top-color: #333
}

.mod-header.active .mod-header-user .try,.mod-header.hover .mod-header-user .try,.mod-header:hover .mod-header-user .try {
	color: #fff;
	background-color: #0052d9
}

.mod-header .cat {
	position: relative
}

.mod-header .cat .layout {
	min-width: 0
}

.mod-header .cat-ico {
	display: inline-block;
	width: 49px
}

.mod-header .cat-box {
	color: #fff;
	font-size: 0;
	box-sizing: border-box;
	padding: 0 0 0 220px;
	background-color: rgba(51,51,51,.95);
	position: absolute;
	width: 100%;
	top: 60px;
	left: 0;
	text-align: left;
	transition: -webkit-transform .3s ease-out;
	transition: transform .3s ease-out;
	transition: transform .3s ease-out,-webkit-transform .3s ease-out;
	-webkit-transform: scaleY(0);
	-ms-transform: scaleY(0);
	transform: scaleY(0);
	-webkit-transform-origin: center top;
	-ms-transform-origin: center top;
	transform-origin: center top
}

.mod-header .cat-box.active,.mod-header .cat-box:hover {
	-webkit-transform: scaleY(1);
	-ms-transform: scaleY(1);
	transform: scaleY(1)
}

.mod-header .cat-group {
	display: inline-block;
	vertical-align: top;
	font-size: 14px;
	margin-left: 12px;
	padding: 20px 0
}

.mod-header .cat-group:first-child {
	margin-left: 0
}

.mod-header .cat-tit {
	font-size: 16px;
	padding-bottom: 7px
}

.mod-header .cat-tit i {
	display: inline-block;
	vertical-align: middle;
	margin-right: 16px
}

.mod-header .cat-item {
	display: block;
	width: 390px;
	box-sizing: border-box;
	padding: 7px 0 7px 50px;
	margin-bottom: 4px;
	font-size: 14px;
	line-height: 1
}

.mod-header .cat-item:hover {
	background-color: #42464c
}

.mod-header .cat-item a {
	color: #fff
}

.mod-header .cat-item a:hover {
	color: #1070e1
}

.mod-header .cat-item-sub {
	margin-top: 7px;
	font-size: 12px
}

.mod-header .cat-item-sub a {
	display: inline-block;
	vertical-align: middle;
	color: #a3a3a3;
	margin-top: 4px;
	padding-right: 24px;
	line-height: 22px
}

.mod-header .cat-item-sub a:last-child {
	padding-right: 0
}

.mod-header .cat-item-sub a.disabled {
	color: #a3a3a3;
	cursor: default;
	pointer-events: none;
	opacity: 1;
	filter: alpha(opacity=100);
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=100)"
}

.mod-header .cat-item-row {
	display: table-row
}

.mod-header .cat-item-row a {
	display: table-cell
}

.mod-header .cat-tag {
	display: inline-block;
	vertical-align: middle;
	width: 28px;
	height: 12px;
	margin-left: 6px;
	margin-top: -2px
}

.mod-header .cat-tag.is-beta {
	/* background-image: url(@/components/header/img/cpimg/sprite.png); */
	background-position: -299px -158px
}

.mod-header .cat-tag.is-hot {
	/* background-image: url(@/components/header/img/cpimg/sprite.png); */
	background-position: -267px -158px
}

.mod-header .cat-tag.is-new {
	/* background-image: url(@/components/header/img/cpimg/sprite.png); */
	background-position: -321px -124px
}

.mod-header .ico-lan {
	width: 24px;
	height: 30px;
	/* background-image: url(@/components/header/img/cpimg/sprite.png); */
	background-position: -267px -124px
}

.mod-header .ico-voice {
	width: 33px;
	height: 30px;
	/* background-image: url(@/components/header/img/cpimg/sprite.png); */
	background-position: -267px -90px
}

.mod-header .ico-image {
	width: 33px;
	height: 30px;
	/* background-image: url(@/components/header/img/cpimg/sprite.png); */
	background-position: -304px -90px
}

.upgrade-box-cont h3 {
	font-size: 32px;
	line-height: 1;
	margin: 22px auto
}

.upgrade-box-cont p {
	color: #c3deff;
	width: 26em;
	margin: 0 auto
}

.upgrade-box-btm {
	margin-top: 45px
}

.upgrade-box-btm .btn {
	width: 180px;
	line-height: 48px;
	border: 1px solid #fff;
	border-radius: 4px;
	display: inline-block
}

.upgrade-box-btm .btn-ff {
	margin: 0 16px
}

.upgrade-box-btm .btn:hover {
	background-color: hsla(0,0%,100%,.2)
}

.upgrade-box-btm i {
	display: inline-block;
	margin-right: 10px;
	vertical-align: text-bottom
}

.ie-placeholder {
	color: #aaa
}

@media screen and (max-width:1400px) {
	.mod-header .cat-box {
		padding: 0 0 0 18px
	}

	.mod-header .cat-group {
		margin-left: 6px
	}
}

html[lang=en] body {
	font-family: Arial,sans-serif
}
</style>
