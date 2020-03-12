<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <front-header></front-header>

    <div class="banner">
      <div class="layout clearfix">
        <div class="banner-intro">
          <h1 class="banner-name">{{currentProduct.banner.title}}</h1>
          <p class="banner-des">{{currentProduct.banner.content}}</p>
          <div class="banner-btns">
            <a
              href="/console/capability/detail/19"
              target="_blank"
              class="jmod-console-btn btn btn-try"
              _stat_click_id="banner_freetrial"
            >免费试用</a>
            <a
              href="/doc/ocridcardocr.shtml"
              class="jmod-doc-btn btn btn-doc"
              _stat_click_id="banner_doc"
            >技术文档</a>
          </div>
        </div>
        <img
          src="//cdn.ai.qq.com/ai/page/product/ocr/img/banner-ico-fe4c0a089e.png?max_age=31536000"
          class="banner-gif"
        />
        <div class="banner-powerby">
          <p>Powered by</p>
          <i class="banner-brand is-youtu"></i>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="layout">
        <h1>功能体验</h1>
        <div class="demo-tab">
          <div class="demo-tab-wrap">
            <a
              href="javascript:void(0);"
              class="demo-tab-1 jmod-demo-tab"
              data-id="1"
              _stat_click_id="demonav_identify"
            >身份证OCR</a>
            <a
              href="javascript:void(0);"
              class="demo-tab-3 jmod-demo-tab"
              data-id="3"
              _stat_click_id="demonav_driverregistration"
            >行驶证OCR</a>
            <a
              href="javascript:void(0);"
              class="demo-tab-3 jmod-demo-tab"
              data-id="4"
              _stat_click_id="demonav_driverlicense"
            >驾驶证OCR</a>
            <a
              href="javascript:void(0);"
              class="demo-tab-6 jmod-demo-tab"
              data-id="0"
              _stat_click_id="demonav_common"
            >通用OCR</a>
            <a
              href="javascript:void(0);"
              class="demo-tab-4 jmod-demo-tab"
              data-id="5"
              _stat_click_id="demonav_businesslicense"
            >营业执照OCR</a>
            <a
              href="javascript:void(0);"
              class="demo-tab-4 jmod-demo-tab"
              data-id="6"
              _stat_click_id="demonav_creditcard"
            >银行卡OCR</a>
            <a
              href="javascript:void(0);"
              class="demo-tab-8 jmod-demo-tab"
              data-id="8"
              _stat_click_id="demonav_handwrite"
            >手写体OCR</a>
            <a
              href="javascript:void(0);"
              class="demo-tab-7 jmod-demo-tab"
              data-id="7"
              _stat_click_id="demonav_plate"
            >车牌OCR</a>
            <a
              href="javascript:void(0);"
              class="demo-tab-2 jmod-demo-tab cur"
              data-id="2"
              _stat_click_id="demonav_card"
            >名片OCR</a>
          </div>
        </div>

        <!-- 通用OCR -->
        <div class="tab-cont jmod-ocr-common" style="display: none;">
          <div class="demo-opt demo-box jmod-uploader-wrapper">
            <div class="img-list jmod-demo-list">
              <a href="javascript:void(0);" class="img-wrap active">
                <img
                  data-src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/o-1.jpg"
                  src="//cdn.ai.qq.com/aiplat/static/ai-demo/small/o-1.jpg"
                />
              </a>
              <a href="javascript:void(0);" class="img-wrap">
                <img
                  data-src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/o-2.jpg"
                  src="//cdn.ai.qq.com/aiplat/static/ai-demo/small/o-2.jpg"
                />
              </a>
              <a href="javascript:void(0);" class="img-wrap">
                <img
                  data-src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/o-3.jpg"
                  src="//cdn.ai.qq.com/aiplat/static/ai-demo/small/o-3.jpg"
                />
              </a>
              <a href="javascript:void(0);" class="img-wrap">
                <img
                  data-src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/o-4-1.jpg"
                  src="//cdn.ai.qq.com/aiplat/static/ai-demo/small/o-4.jpg"
                />
              </a>
              <a href="javascript:void(0);" class="img-wrap">
                <img
                  data-src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/o-5.jpg"
                  src="//cdn.ai.qq.com/aiplat/static/ai-demo/small/o-5.jpg"
                />
              </a>
              <a href="javascript:void(0);" class="img-wrap">
                <img
                  data-src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/o-6.jpg"
                  src="//cdn.ai.qq.com/aiplat/static/ai-demo/small/o-6.jpg"
                />
              </a>
            </div>
            <div class="img-preview jmod-preview" id="preview">
              <label>原始图片</label>
              <img
                src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/o-1.jpg"
                style="width: auto; height: 100%; margin-top: 0px;"
              />
              <p class="err-tip jmod-err-tip"></p>
              <div class="jmod-img-result" style="display:inline-block;"></div>
            </div>
            <div class="form-row">
              <span class="btn btn-upload jmod-upload-disable disabled hidden">本地上传</span>
              <input
                type="file"
                name="file"
                id="file_3"
                class="inputfile jmod-file"
                _stat_click_id="demo_uploadbtn"
                _stat_action_obj="common"
              />
              <label for="file_3" class="btn btn-upload jmod-upload">本地上传</label>
              <label>或</label>
              <span class="imgurl">
                <div class="ui-input">
                  <input type="text" class="jmod-network-url" placeholder="输入网络图片URL" />
                  <div class="ui-input-bg"></div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-test jmod-detect"
                  _stat_click_id="demo_checkurlbtn"
                  _stat_action_obj="common"
                >检测</a>
              </span>
            </div>
            <p class="tips">提示：图片大小不超过1M，请保证需要识别部分为图片主体部分</p>
          </div>
          <div class="demo-rs demo-box jmod-result-wrapper">
            <div class="jmod-result">
              <label class="demo-rs-label">识别结果</label>
              <div class="sec sec-txt">
                <p>1、夏天的飞鸟，飞到我窗前唱歌，又飞去了。</p>
                <p>2、秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里。</p>
                <p>3、Stray birds of summer come to my window to sing and fly away.</p>
                <p>4、And yellow leaves of autumn, which have no songs, futter and fall there with a sign.</p>
                <p>5、飞鸟集</p>
                <p>6、STRAY</p>
                <p>7、BIRDS</p>
              </div>
            </div>
            <div class="ui-loading jmod-result-loading hidden">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <!-- 通用OCR -->

        <!-- 身份证 -->
        <div class="tab-cont jmod-ocr-id" style="display: none;">
          <div class="demo-opt demo-box demo-box-sm jmod-uploader-wrapper">
            <div class="img-preview jmod-preview" id="preview">
              <label>原始图片</label>
              <img
                src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/odemo-pic-7.jpg"
                style="width: auto; height: 100%; margin-top: 0px;"
              />
              <p class="err-tip jmod-err-tip"></p>
              <div class="jmod-img-result" style="display:inline-block;"></div>
            </div>
            <div class="form-row">
              <span class="btn btn-upload jmod-upload-disable disabled hidden">本地上传</span>
              <input
                type="file"
                name="file"
                id="file_1"
                class="inputfile jmod-file"
                _stat_click_id="demo_uploadbtn"
                _stat_action_obj="identify"
              />
              <label for="file_1" class="btn btn-upload jmod-upload">本地上传</label>
              <label>或</label>
              <span class="imgurl">
                <div class="ui-input">
                  <input type="text" class="jmod-network-url" placeholder="输入网络图片URL" />
                  <div class="ui-input-bg"></div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-test jmod-detect"
                  _stat_click_id="demo_checkurlbtn"
                  _stat_action_obj="identify"
                >检测</a>
              </span>
            </div>
            <p class="tips">提示：图片大小不超过1M，请保证需要识别部分为图片主体部分</p>
          </div>
          <div class="demo-rs demo-box demo-box-sm jmod-result-wrapper">
            <div class="jmod-result">
              <label class="demo-rs-label">识别结果</label>
              <div class="sec sec-txt">
                <p>姓名：艾米</p>
                <p>性别：女</p>
                <p>民族：汉</p>
                <p>出生：1986/4/23</p>
                <p>住址：上海徐汇区田林路397号腾云大厦6F</p>
                <p>身份号码：310104198604230289</p>
              </div>
            </div>
            <div class="ui-loading jmod-result-loading hidden">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <!-- 身份证 -->
        <!-- 名片 -->
        <div class="tab-cont jmod-ocr-card" style="display: block;">
          <div class="demo-opt demo-box demo-box-sm jmod-uploader-wrapper">
            <div class="img-preview jmod-preview" id="preview">
              <label>原始图片</label>
              <img
                src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/odemo-pic-2.jpg"
                style="width: 100%; height: auto; margin-top: 6.05392px;"
              />
              <p class="err-tip jmod-err-tip"></p>
              <div class="jmod-img-result" style="display:inline-block;"></div>
            </div>
            <div class="form-row">
              <span class="btn btn-upload jmod-upload-disable disabled hidden">本地上传</span>
              <input
                type="file"
                name="file"
                id="file_9"
                class="inputfile jmod-file"
                _stat_click_id="demo_uploadbtn"
                _stat_action_obj="card"
              />
              <label for="file_9" class="btn btn-upload jmod-upload">本地上传</label>
              <label>或</label>
              <span class="imgurl">
                <div class="ui-input">
                  <input type="text" class="jmod-network-url" placeholder="输入网络图片URL" />
                  <div class="ui-input-bg"></div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-test jmod-detect"
                  _stat_click_id="demo_checkurlbtn"
                  _stat_action_obj="card"
                >检测</a>
              </span>
            </div>
            <p class="tips">提示：图片大小不超过1M，请保证需要识别部分为图片主体部分</p>
          </div>
          <div class="demo-rs demo-box demo-box-sm jmod-result-wrapper">
            <div class="jmod-result">
              <label class="demo-rs-label">识别结果</label>
              <div class="sec sec-txt">
                <p>姓名：李明</p>
                <p>职位：产品经理</p>
                <p>公司：Tencent腾讯</p>
                <p>地址：深圳市南山区深南大道10000号腾讯大厦</p>
                <p>邮箱：8888asss@tencent.com</p>
                <p>手机：13888882222</p>
                <p>QQ：16828</p>
                <p>微信：limig</p>
              </div>
            </div>
            <div class="ui-loading jmod-result-loading hidden">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <!-- 名片 -->
        <!-- 行驶证识别 -->
        <div class="tab-cont jmod-ocr-dlicense1" style="display: none;">
          <div class="demo-opt demo-box demo-box-sm jmod-uploader-wrapper">
            <div class="img-preview jmod-preview" id="preview">
              <label>原始图片</label>
              <img
                src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/odemo-pic-3.jpg"
                style="width: auto; height: 100%; margin-top: 0px;"
              />
              <p class="err-tip jmod-err-tip"></p>
              <div class="jmod-img-result" style="display:inline-block;"></div>
            </div>
            <div class="form-row">
              <span class="btn btn-upload jmod-upload-disable disabled hidden">本地上传</span>
              <input
                type="file"
                name="file"
                id="file_2"
                class="inputfile jmod-file"
                _stat_click_id="demo_uploadbtn"
                _stat_action_obj="driverregistration"
              />
              <label for="file_2" class="btn btn-upload jmod-upload">本地上传</label>
              <label>或</label>
              <span class="imgurl">
                <div class="ui-input">
                  <input type="text" class="jmod-network-url" placeholder="输入网络图片URL" />
                  <div class="ui-input-bg"></div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-test jmod-detect"
                  _stat_click_id="demo_checkurlbtn"
                  _stat_action_obj="driverregistration"
                >检测</a>
              </span>
            </div>
            <p class="tips">提示：图片大小不超过1M，请保证需要识别部分为图片主体部分</p>
          </div>
          <div class="demo-rs demo-box demo-box-sm jmod-result-wrapper">
            <div class="jmod-result">
              <label class="demo-rs-label">识别结果</label>
              <div class="sec sec-txt">
                <p>车牌号码：沪AA1234</p>
                <p>车辆类型：小型轿车</p>
                <p>所有人：李明</p>
                <p>使用性质：非营运</p>
                <p>品牌型号：大众汽车牌SVW71612RS</p>
                <p>识别代码：ABCDEFGH123456789</p>
                <p>发动机号：8B54321</p>
                <p>注册日期：2011-10-10</p>
                <p>发证日期：2011-10-10</p>
                <p>住址：上海市徐汇区田林路397号腾云大厦6F</p>
                <p>发证单位：上海市公安局交通警察总队</p>
                <p>红章：上海市公安局交通警察总队</p>
              </div>
            </div>
            <div class="ui-loading jmod-result-loading hidden">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <!-- 行驶证识别 -->
        <!-- 驾驶证识别 -->
        <div class="tab-cont jmod-ocr-dlicense2" style="display: none;">
          <div class="demo-opt demo-box demo-box-sm jmod-uploader-wrapper">
            <div class="img-preview jmod-preview" id="preview">
              <label>原始图片</label>
              <img
                src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/odemo-pic-8.jpg"
                style="width: auto; height: 100%; margin-top: 0px;"
              />
              <p class="err-tip jmod-err-tip"></p>
              <div class="jmod-img-result" style="display:inline-block;"></div>
            </div>
            <div class="form-row">
              <span class="btn btn-upload jmod-upload-disable disabled hidden">本地上传</span>
              <input
                type="file"
                name="file"
                id="file_4"
                class="inputfile jmod-file"
                _stat_click_id="demo_uploadbtn"
                _stat_action_obj="driverlicense"
              />
              <label for="file_4" class="btn btn-upload jmod-upload">本地上传</label>
              <label>或</label>
              <span class="imgurl">
                <div class="ui-input">
                  <input type="text" class="jmod-network-url" placeholder="输入网络图片URL" />
                  <div class="ui-input-bg"></div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-test jmod-detect"
                  _stat_click_id="demo_checkurlbtn"
                  _stat_action_obj="driverlicense"
                >检测</a>
              </span>
            </div>
            <p class="tips">提示：图片大小不超过1M，请保证需要识别部分为图片主体部分</p>
          </div>
          <div class="demo-rs demo-box demo-box-sm jmod-result-wrapper">
            <div class="jmod-result">
              <label class="demo-rs-label">识别结果</label>
              <div class="sec sec-txt">
                <p>证号：610333199012213125</p>
                <p>姓名：艾米</p>
                <p>国籍：中国</p>
                <p>性别：女</p>
                <p>出生日期：1990-12-21</p>
                <p>领证日期：2015-01-01</p>
                <p>准驾车型：C1</p>
                <p>起始日期：2015-01-01</p>
                <p>有效日期：2021-01-01</p>
                <p>住址：深圳市南山区高新科技园科技中一路腾讯大厦</p>
                <p>发证单位：广东省深圳市公安局交通警察支队</p>
                <p>红章：广东省深圳市公安局交通警察支队</p>
              </div>
            </div>
            <div class="ui-loading jmod-result-loading hidden">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <!-- 驾驶证识别 -->
        <!-- 车牌识别 -->
        <div class="tab-cont jmod-ocr-plate" style="display: none;">
          <div class="demo-opt demo-box demo-box-sm jmod-uploader-wrapper">
            <div class="img-preview jmod-preview" id="preview">
              <label>原始图片</label>
              <img
                src="//cdn.ai.qq.com/ai/assets/ai-demo/large/plate-1-lg.jpg"
                style="width: auto; height: 100%; margin-top: 0px;"
              />
              <p class="err-tip jmod-err-tip"></p>
              <div class="jmod-img-result" style="display:inline-block;"></div>
            </div>
            <div class="form-row">
              <span class="btn btn-upload jmod-upload-disable disabled hidden">本地上传</span>
              <input
                type="file"
                name="file"
                id="file_8"
                class="inputfile jmod-file"
                _stat_click_id="demo_uploadbtn"
                _stat_action_obj="plate"
              />
              <label for="file_8" class="btn btn-upload jmod-upload">本地上传</label>
              <label>或</label>
              <span class="imgurl">
                <div class="ui-input">
                  <input type="text" class="jmod-network-url" placeholder="输入网络图片URL" />
                  <div class="ui-input-bg"></div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-test jmod-detect"
                  _stat_click_id="demo_checkurlbtn"
                  _stat_action_obj="plate"
                >检测</a>
              </span>
            </div>
            <p class="tips">提示：图片大小不超过1M，请保证需要识别部分为图片主体部分</p>
          </div>
          <div class="demo-rs demo-box demo-box-sm jmod-result-wrapper">
            <div class="jmod-result">
              <label class="demo-rs-label">识别结果</label>
              <div class="sec sec-txt">
                <p>车牌：京N0L9U8</p>
              </div>
            </div>
            <div class="ui-loading jmod-result-loading hidden">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <!-- 车牌识别 -->
        <!-- 营业执照识别 -->
        <div class="tab-cont jmod-ocr-blicense" style="display: none;">
          <div class="demo-opt demo-box demo-box-sm jmod-uploader-wrapper">
            <div class="img-preview jmod-preview" id="preview">
              <label>原始图片</label>
              <img
                src="//cdn.ai.qq.com/aiplat/static/ai-demo/large/odemo-pic-5.jpg"
                style="width: auto; height: 100%; margin-top: 0px;"
              />
              <p class="err-tip jmod-err-tip"></p>
              <div class="jmod-img-result" style="display:inline-block;"></div>
            </div>
            <div class="form-row">
              <span class="btn btn-upload jmod-upload-disable disabled hidden">本地上传</span>
              <input
                type="file"
                name="file"
                id="file_5"
                class="inputfile jmod-file"
                _stat_click_id="demo_uploadbtn"
                _stat_action_obj="businesslicense"
              />
              <label for="file_5" class="btn btn-upload jmod-upload">本地上传</label>
              <label>或</label>
              <span class="imgurl">
                <div class="ui-input">
                  <input type="text" class="jmod-network-url" placeholder="输入网络图片URL" />
                  <div class="ui-input-bg"></div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-test jmod-detect"
                  _stat_click_id="demo_checkurlbtn"
                  _stat_action_obj="businesslicense"
                >检测</a>
              </span>
            </div>
            <p class="tips">提示：图片大小不超过1M，请保证需要识别部分为图片主体部分</p>
          </div>
          <div class="demo-rs demo-box demo-box-sm jmod-result-wrapper">
            <div class="jmod-result">
              <label class="demo-rs-label">识别结果</label>
              <div class="sec sec-txt">
                <p>注册号：91440300708461136T</p>
                <p>法定代表人：马化腾</p>
                <p>公司名称：深圳市腾讯计算机系统有限公司</p>
                <p>地址：深圳市南山区深南大道10000号</p>
                <p>主体类型：有限责任公司</p>
                <p>营业期限：1998年11月11日至长期</p>
              </div>
            </div>
            <div class="ui-loading jmod-result-loading hidden">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <!-- 营业执照识别 -->
        <!-- 银行卡识别 -->
        <div class="tab-cont jmod-ocr-creditcard" style="display: none;">
          <div class="demo-opt demo-box demo-box-sm jmod-uploader-wrapper">
            <div class="img-preview jmod-preview" id="preview">
              <label>原始图片</label>
              <img
                src="//p.qpic.cn/zc_pic/0/1ccd9a5be6a581a0b0b28ad0af49117815222914526139/0"
                style="width: 100%; height: auto; margin-top: 22.5px;"
              />
              <p class="err-tip jmod-err-tip"></p>
              <div class="jmod-img-result" style="display:inline-block;"></div>
            </div>
            <div class="form-row">
              <span class="btn btn-upload jmod-upload-disable disabled hidden">本地上传</span>
              <input
                type="file"
                name="file"
                id="file_6"
                class="inputfile jmod-file"
                _stat_click_id="demo_uploadbtn"
                _stat_action_obj="creditcard"
              />
              <label for="file_6" class="btn btn-upload jmod-upload">本地上传</label>
              <label>或</label>
              <span class="imgurl">
                <div class="ui-input">
                  <input type="text" class="jmod-network-url" placeholder="输入网络图片URL" />
                  <div class="ui-input-bg"></div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-test jmod-detect"
                  _stat_click_id="demo_checkurlbtn"
                  _stat_action_obj="creditcard"
                >检测</a>
              </span>
            </div>
            <p class="tips">提示：图片大小不超过1M，请保证需要识别部分为图片主体部分</p>
          </div>
          <div class="demo-rs demo-box demo-box-sm jmod-result-wrapper">
            <div class="jmod-result">
              <label class="demo-rs-label">识别结果</label>
              <div class="sec sec-txt">
                <p>卡号：6225760088888888</p>
                <p>卡类型：贷记卡</p>
                <p>卡名字：招商银行信用卡</p>
                <p>银行信息：招商银行(03080000)</p>
                <p>有效期：08/2022</p>
              </div>
            </div>
            <div class="ui-loading jmod-result-loading hidden">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <!-- 银行卡识别 -->
        <!-- 手写体识别 -->
        <div class="tab-cont jmod-ocr-handwrite" style="display: none;">
          <div class="demo-opt demo-box jmod-uploader-wrapper">
            <div class="img-list jmod-demo-list">
              <a href="javascript:void(0);" class="img-wrap active">
                <img
                  data-src="//cdn.ai.qq.com/ai/assets/ai-demo/large/hd-1-lg.jpg"
                  src="//cdn.ai.qq.com/ai/assets/ai-demo/small/hd-1-sm.jpg"
                />
              </a>
              <a href="javascript:void(0);" class="img-wrap">
                <img
                  data-src="//cdn.ai.qq.com/ai/assets/ai-demo/large/hd-7-lg.jpg"
                  src="//cdn.ai.qq.com/ai/assets/ai-demo/small/hd-7-sm.jpg"
                />
              </a>
              <a href="javascript:void(0);" class="img-wrap">
                <img
                  data-src="//cdn.ai.qq.com/ai/assets/ai-demo/large/hd-3-lg.jpg"
                  src="//cdn.ai.qq.com/ai/assets/ai-demo/small/hd-3-sm.jpg"
                />
              </a>
              <a href="javascript:void(0);" class="img-wrap">
                <img
                  data-src="//cdn.ai.qq.com/ai/assets/ai-demo/large/hd-4-lg.jpg"
                  src="//cdn.ai.qq.com/ai/assets/ai-demo/small/hd-4-sm.jpg"
                />
              </a>
              <a href="javascript:void(0);" class="img-wrap">
                <img
                  data-src="//cdn.ai.qq.com/ai/assets/ai-demo/large/hd-5-lg.jpg"
                  src="//cdn.ai.qq.com/ai/assets/ai-demo/small/hd-5-sm.jpg"
                />
              </a>
              <a href="javascript:void(0);" class="img-wrap">
                <img
                  data-src="//cdn.ai.qq.com/ai/assets/ai-demo/large/hd-6-lg.jpg"
                  src="//cdn.ai.qq.com/ai/assets/ai-demo/small/hd-6-sm.jpg"
                />
              </a>
            </div>
            <div class="img-preview jmod-preview" id="preview">
              <label>原始图片</label>
              <img
                src="//cdn.ai.qq.com/ai/assets/ai-demo/large/hd-1-lg.jpg"
                style="width: auto; height: 100%; margin-top: 0px;"
              />
              <p class="err-tip jmod-err-tip"></p>
              <div class="jmod-img-result" style="display:inline-block;"></div>
            </div>
            <div class="form-row">
              <span class="btn btn-upload jmod-upload-disable disabled hidden">本地上传</span>
              <input
                type="file"
                name="file"
                id="file_7"
                class="inputfile jmod-file"
                _stat_click_id="demo_uploadbtn"
                _stat_action_obj="handwrite"
              />
              <label for="file_7" class="btn btn-upload jmod-upload">本地上传</label>
              <label>或</label>
              <span class="imgurl">
                <div class="ui-input">
                  <input type="text" class="jmod-network-url" placeholder="输入网络图片URL" />
                  <div class="ui-input-bg"></div>
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn btn-test jmod-detect"
                  _stat_click_id="demo_checkurlbtn"
                  _stat_action_obj="handwrite"
                >检测</a>
              </span>
            </div>
            <p class="tips">提示：图片大小不超过1M，请保证需要识别部分为图片主体部分</p>
          </div>
          <div class="demo-rs demo-box jmod-result-wrapper">
            <div class="jmod-result">
              <label class="demo-rs-label">识别结果</label>
              <p class="err-tip">结果加载失败</p>
            </div>
            <div class="ui-loading jmod-result-loading hidden">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <!-- 手写体识别 -->
      </div>
    </div>

    <div class="advan">
      <div class="layout">
        <h1>产品优势</h1>
        <ul>
          <li class="advan-item" v-for="(item,index) in currentProduct.advance" :key="index">
            <i class="ico-1"></i>
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
          </li>
          <!-- <li class="advan-item">
            <i class="ico-2"></i>
            <h3>识别精准</h3>
            <p>单字识别准确率可达到中文98%以上，数字99%以上</p>
          </li>
          <li class="advan-item">
            <i class="ico-3"></i>
            <h3>适应性强</h3>
            <p>适应各种实际应用中的异常情况，如光照不均、倾斜、模糊等，具备非常高的复杂环境可用性</p>
          </li>
          <li class="advan-item">
            <i class="ico-4"></i>
            <h3>服务可靠</h3>
            <p>已成功应用于多项核心业务，历经市场验证，技术成熟稳定，可用性高达99.9%</p>
          </li>
          <li class="advan-item">
            <i class="ico-5"></i>
            <h3>企业级平台</h3>
            <p>企业级图片处理大平台，保证7x24不间断云服务，让您的产品always online</p>
          </li>-->
        </ul>
      </div>
    </div>

    <div class="scene">
      <div class="layout">
        <h1>推荐场景</h1>
        <ul>
          <li class="scene-item" v-for="(item,index) in currentProduct.scene" :key="index">
            <i class="ico-1"></i>
            <div class="des">
              <h3>{{item.title}}</h3>
              <p>{{item.content}}</p>
            </div>
          </li>
          <!-- <li class="scene-item">
            <i class="ico-2"></i>
            <div class="des">
              <h3>物流场景</h3>
              <p>精确识别运单上的寄件人和收件人信息，大大减轻人工输入成本</p>
            </div>
          </li>
          <li class="scene-item">
            <i class="ico-3"></i>
            <div class="des">
              <h3>智慧医疗</h3>
              <p>将医疗单据自动识别为文字，方便医疗信息的电子化存储和分析</p>
            </div>
          </li>
          <li class="scene-item">
            <i class="ico-4"></i>
            <div class="des">
              <h3>身份认证</h3>
              <p>无需手动输入证件信息，可快速进行银行身份认证、主播身份认证等</p>
            </div>
          </li>
          <li class="scene-item">
            <i class="ico-5"></i>
            <div class="des">
              <h3>交通监管</h3>
              <p>实时对车牌OCR，快速锁定违章车辆信息</p>
            </div>
          </li>-->
        </ul>
      </div>
    </div>

    <div class="case jmod-case case4">
      <div class="layout">
        <h1>合作案例</h1>
        <div class="case-list">
          <a href="javascript:void(0);" class="jmod-ico ico-1" data-id="1">微众银行</a>
          <a href="javascript:void(0);" class="jmod-ico ico-2" data-id="2">QQ</a>
          <a href="javascript:void(0);" class="jmod-ico ico-3" data-id="3">应用宝</a>
          <a href="javascript:void(0);" class="jmod-ico ico-4 active" data-id="4">58同城</a>
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
  </div>
</template>

<script>
import product from "@/mock/product.js";

import frontHeader from "@/components/header/front-header.vue";

export default {
  name: "product",
  components: {
    frontHeader
  },
  data() {
    return {
      productDetail: product.productDetail,
      currentProduct: product.productDetail.identify,
      type1: "",
      type2: ""
    };
  },
  watch: {
    "$route.query.type2": function(newVal, oldVal) {
      this.type2 = newVal;
    },
    "$route.query.type1": function(newVal, oldVal) {
      this.type1 = newVal;
    }
  },
  mounted() {
    this.type1 = this.$route.query.type1;
    this.type2 = this.$route.query.type2;
    this.currentProduct = this.productDetail[this.type2];
  }
};
</script>

<style>
a {
  text-decoration: none;
  cursor: pointer;
  outline: none;
  color: inherit;
}

.banner {
  width: 100%;
  height: 490px;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.banner:after {
  content: "";
  width: 100%;
  height: 115px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: 0 0;
  position: absolute;
  bottom: -65px;
  left: 0;
}
.banner-intro {
  float: left;
}
.banner-name {
  font-size: 30px;
  line-height: 1;
  margin-top: 100px;
  margin-bottom: 40px;
}
.banner-des {
  font-size: 14px;
  width: 496px;
}
.banner-btns {
  margin-top: 40px;
}
.banner-btns .btn {
  width: 140px;
  line-height: 48px;
  text-align: center;
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 3px;
}
.banner-btns .btn-try {
  background-color: #fff;
  margin-right: 30px;
}
.banner-btns .btn-try:hover {
  background-color: #e8f2ff;
}
.banner-btns .btn-doc {
  color: #fff;
  border: 1px solid #fff;
}
.banner-btns .btn-doc:hover {
  background-color: hsla(0, 0%, 100%, 0.2);
}
.banner-gif {
  float: right;
}
.banner-powerby {
  position: absolute;
  bottom: 70px;
  font-size: 12px;
  opacity: 0.6;
}
.banner-powerby p {
  display: inline-block;
  vertical-align: middle;
}
.banner-brand {
  display: inline-block;
  vertical-align: middle;
  margin-left: 18px;
}
.banner-brand.is-ailab {
  width: 59px;
  height: 23px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -189px -167px;
}
.banner-brand.is-youtu {
  width: 73px;
  height: 21px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -763px -119px;
}
.banner-brand.is-aiwx {
  width: 96px;
  height: 26px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -89px -167px;
}
.banner-brand.is-xxaq {
  width: 172px;
  height: 44px;
  -webkit-transform: scale(0.5) translate(-86px);
  -ms-transform: scale(0.5) translate(-86px);
  transform: scale(0.5) translate(-86px);
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -292px -119px;
}
.banner-brand.is-fyj {
  width: 112px;
  height: 23px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -468px -119px;
}
.banner-brand.is-dd {
  width: 87px;
  height: 22px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -584px -119px;
}
.banner-brand.is-pit,
.banner-brand.is-ptu {
  width: 74px;
  height: 19px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -917px -119px;
}
.banner-brand.is-yspsys {
  width: 288px;
  height: 44px;
  -webkit-transform: scale(0.5) translate(-144px);
  -ms-transform: scale(0.5) translate(-144px);
  transform: scale(0.5) translate(-144px);
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: 0 -119px;
}
.ico {
  display: inline-block;
  vertical-align: middle;
  margin-left: 16px;
}
.ico-ailab {
  width: 59px;
  height: 23px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -252px -167px;
}
.ico-youtu {
  width: 73px;
  height: 21px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -840px -119px;
}
.ico-fyj {
  width: 50px;
  height: 50px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: 0 -236px;
}
.ico-dd {
  width: 84px;
  height: 21px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -675px -119px;
}
.ico-c2e {
  width: 43px;
  height: 44px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -54px -236px;
}
.ico-e2c {
  width: 43px;
  height: 44px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -101px -236px;
}
.ico-en {
  width: 41px;
  height: 26px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -89px -197px;
}
.ico-ch {
  width: 39px;
  height: 26px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -134px -197px;
}
.ico-dot {
  width: 48px;
  height: 3px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -995px -119px;
}
.ico-ailab-sm {
  width: 24px;
  height: 24px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -261px -197px;
}
.ico-youtu-sm {
  width: 22px;
  height: 23px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -341px -167px;
}
.ico-wx-sm {
  width: 24px;
  height: 24px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -177px -197px;
}
.ico-ptu-sm {
  width: 24px;
  height: 24px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -205px -197px;
}
.ico-fyj-sm {
  width: 32px;
  height: 32px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -184px -236px;
}
.demo {
  padding: 64px 0;
  background-color: #fff;
}
.demo h1 {
  font-size: 32px;
  line-height: 1;
  text-align: center;
  margin-bottom: 16px;
}
.demo-tab a i {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  margin-top: -2px;
}
.demo-tab a.cur .ico-ailab-sm {
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -233px -197px;
}
.demo-tab a.cur .ico-youtu-sm {
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -315px -167px;
}
.demo-tab a.cur .ico-ptu-sm {
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -317px -197px;
}
.demo-des {
  font-size: 16px;
  text-align: center;
}
.demo-des .switch {
  color: #0052d9;
  font-size: 14px;
}
.demo-des .switch:after {
  content: "";
  display: inline-block;
  width: 12px;
  height: 11px;
  margin-left: 4px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -995px -126px;
}
.demo-opt {
  width: 590px;
}
.demo-opt .imgurl .ui-input {
  width: 357px;
}
.demo-rs {
  width: 590px;
  height: 408px;
  box-sizing: border-box;
}
.demo-rs .jmod-result {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 46px 44px;
  overflow-y: auto;
}
.demo-rs .jmod-result .err-tip {
  font-size: 12px;
  color: #b2b2b2;
  text-align: center;
  margin-top: 170px;
}
.demo-rs .jmod-result .err-tip:before {
  content: "";
  display: block;
  width: 85px;
  height: 65px;
  margin: 0 auto 18px;
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: 0 -167px;
}
.demo-rs pre {
  margin: 0;
  font-family: microsoft yahei;
}
.demo-rs-label {
  z-index: 10;
}
.demo-rs .sec {
  margin-top: 30px;
}
.demo-box-sm .jmod-result .err-tip {
  margin-top: 120px;
}
.demo-powerby {
  position: absolute;
  bottom: 0;
  right: 45px;
  color: #b2b2b2;
  z-index: 10;
  background-color: #fff;
  padding-bottom: 12px;
}
.demo-powerby p {
  font-size: 12px;
  display: inline-block;
  vertical-align: middle;
}
.engine-tab {
  margin-bottom: 20px;
  color: gray;
  text-align: left;
}
.engine-tab-label {
  width: 90px;
  display: inline-block;
  font-size: 14px;
}
.engine-tab-wrap {
  display: inline-block;
  font-size: 0;
}
.engine-tab a {
  line-height: 40px;
  display: inline-block;
  color: #b2b2b2;
  width: 140px;
  text-align: center;
  border: 1px solid #d5d5d5;
  border-left-width: 0;
  font-size: 14px;
}
.engine-tab a i {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  margin-top: -2px;
}
.engine-tab a:first-child {
  border-left: 1px solid #d5d5d5;
}
.engine-tab a.cur {
  color: #0052d9;
  background-color: #fff;
  border-color: #0052d9;
  border-left: 1px solid #0052d9;
  margin-left: -1px;
  position: relative;
  z-index: 1;
}
.engine-tab a.cur:first-child {
  margin-left: 0;
}
.engine-tab a.cur .ico-ailab-sm {
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -233px -197px;
}
.engine-tab a.cur .ico-youtu-sm {
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -315px -167px;
}
.engine-tab a.cur .ico-ptu-sm {
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -317px -197px;
}
.engine-tab a.cur .ico-wx-sm {
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -289px -197px;
}
.engine-tab a.cur .ico-fyj-sm {
  /* background-image: url(../../../sprite/sprite-0ad75e3bb3.product.png?max_age=31536000); */
  background-position: -148px -236px;
}
.lan-tab {
  padding-bottom: 20px;
  font-size: 0;
  text-align: left;
}
.lan-tab-label {
  width: 90px;
  display: inline-block;
  font-size: 14px;
  color: gray;
  vertical-align: middle;
}
.lan-tab a {
  display: inline-block;
  vertical-align: middle;
  background-color: #fff;
  color: #0052d9;
  padding: 0 13px;
  margin-right: 6px;
  border-radius: 3px;
  border: 1px solid #0052d9;
  font-size: 14px;
  line-height: 2;
}
.lan-tab a.selected {
  color: #fff;
  background-color: #0052d9;
}
.lan-select {
  text-align: left;
  color: gray;
}
.lan-select-label {
  width: 90px;
  display: inline-block;
  font-size: 14px;
  vertical-align: middle;
}
.advan {
  padding: 65px 0;
  overflow: hidden;
  background-color: #f2f2f5;
}
.advan h1 {
  font-size: 32px;
  text-align: center;
}
.advan-item {
  box-sizing: border-box;
  width: 400px;
  padding: 0 75px;
  float: left;
  text-align: center;
  margin-top: 84px;
  height: 190px;
}
.advan-item i {
  height: 100px;
  display: block;
  margin: 0 auto;
  position: relative;
}
.advan-item i:before {
  content: "";
  display: inline-block;
  width: 80px;
  height: 80px;
}
.advan-item h3 {
  font-size: 20px;
  line-height: 1;
  margin-bottom: 18px;
}
.advan-item p {
  color: gray;
  font-size: 14px;
  text-align: justify;
}
.scene {
  padding: 65px 0;
  overflow: hidden;
  background-color: #fff;
}
.scene h1 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 60px;
}
.scene-item {
  box-sizing: border-box;
  width: 400px;
  float: left;
  padding: 40px 35px 20px;
}
.scene-item i {
  float: left;
  width: 90px;
  height: 100px;
  position: relative;
  text-align: left;
}
.scene-item i:before {
  content: "";
  display: inline-block;
  width: 56px;
  height: 56px;
}
.scene-item .des {
  width: 240px;
  float: left;
}
.scene-item h3 {
  font-size: 20px;
  line-height: 1;
  margin-bottom: 16px;
}
.scene-item p {
  color: gray;
  font-size: 14px;
  text-align: left;
}
.case {
  box-sizing: border-box;
  height: 430px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  padding: 64px 0;
  overflow: hidden;
  color: #fff;
  text-align: center;
  transition: background 0.3s ease;
}
.case h1 {
  font-size: 32px;
}
.case-list a {
  display: inline-block;
  width: 147px;
  height: 100px;
  margin: 60px 0 60px 60px;
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
.case-intro {
  font-size: 16px;
  width: 960px;
  margin: 0 auto;
}
.ui-input {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  overflow: hidden;
  padding: 0 10px;
  font-size: 14px;
}
.ui-input input {
  position: relative;
  width: 100%;
  display: block;
  height: 20px;
  line-height: 20px;
  margin: 10px 0;
  outline: none;
  border: none;
  background: none;
  z-index: 1;
}
.ui-input input[disabled] ~ .ui-input-bg:hover {
  border-color: #e2e2e2;
}
.ui-input input:focus ~ .ui-input-bg {
  border-color: #1cbcb4;
}
.ui-input input:focus ~ .ui-input-count {
  visibility: visible;
}
.ui-input:hover .ui-input-bg {
  border-color: #c9c9c9;
}
.ui-input.error .ui-input-bg {
  border-color: #f4615c !important;
}
.ui-input-bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 1px solid #e2e2e2;
  background-color: #fff;
  transition: border-color 0.15s, background-color 0.15s;
}
.ui-input.count,
.ui-input.unit {
  padding-right: 40px;
}
.ui-input-count {
  line-height: 40px;
  color: #a2a9b6;
  font-size: 12px;
  white-space: nowrap;
  position: absolute;
  right: 10px;
  top: 0;
  z-index: 1;
  visibility: hidden;
}
.ui-input-count i {
  font-style: normal;
}
.ui-input-unit {
  position: absolute;
  top: 0;
  right: 10px;
  line-height: 40px;
  color: #9e9e9e;
}
.ui-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -50px;
}
.ui-loading span {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #0033d9;
  position: absolute;
  -webkit-animation: a 1.04s ease infinite;
  animation: a 1.04s ease infinite;
}
.ui-loading span:first-child {
  left: 0;
  top: 50%;
  margin-top: -8px;
  -webkit-animation-delay: 0.13s;
  animation-delay: 0.13s;
}
.ui-loading span:nth-child(2) {
  left: 14px;
  top: 14px;
  -webkit-animation-delay: 0.26s;
  animation-delay: 0.26s;
}
.ui-loading span:nth-child(3) {
  left: 50%;
  top: 0;
  margin-left: -8px;
  -webkit-animation-delay: 0.39s;
  animation-delay: 0.39s;
}
.ui-loading span:nth-child(4) {
  top: 14px;
  right: 14px;
  -webkit-animation-delay: 0.52s;
  animation-delay: 0.52s;
}
.ui-loading span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -8px;
  -webkit-animation-delay: 0.65s;
  animation-delay: 0.65s;
}
.ui-loading span:nth-child(6) {
  right: 14px;
  bottom: 14px;
  -webkit-animation-delay: 0.78s;
  animation-delay: 0.78s;
}
.ui-loading span:nth-child(7) {
  bottom: 0;
  left: 50%;
  margin-left: -8px;
  -webkit-animation-delay: 0.91s;
  animation-delay: 0.91s;
}
.ui-loading span:nth-child(8) {
  bottom: 14px;
  left: 14px;
  -webkit-animation-delay: 1.04s;
  animation-delay: 1.04s;
}
@-webkit-keyframes a {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
@keyframes a {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
/* .mod-header {
  background-color: #257eeb;
} */
.mod-header-user .user i:after {
  border-top-color: #257eeb;
}
.banner {
  background-color: #257eeb;
}
.banner-btns .btn-try {
  color: #257eeb;
}
.banner-gif {
  margin-top: 90px;
  margin-right: 40px;
}
.demo {
  font-size: 0;
}
.demo h1 {
  margin-bottom: 40px;
}
.demo-tab {
  text-align: center;
  margin-bottom: 20px;
}
.demo-tab-wrap {
  display: inline-block;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  font-size: 0;
}
.demo-tab a {
  padding: 0 20px;
  line-height: 40px;
  border-left: 1px solid #d5d5d5;
  font-size: 16px;
  display: inline-block;
}
.demo-tab a:first-child {
  border-left: none;
}
.demo-tab a.cur {
  background-color: #0052d9;
  color: #fff;
}
.demo-opt {
  width: 612px;
  margin-right: 18px;
}
.demo-rs {
  width: 570px;
  height: 526px;
  border: 1px solid #d5d5d5;
  vertical-align: top;
  position: relative;
  overflow-y: auto;
}
.demo-rs-label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 16px;
  background-color: #e6fafd;
  color: gray;
  border: 1px solid #d5d5d5;
  border-width: 0 1px 1px 0;
  line-height: 1;
}
.demo-rs .sec-tit {
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
}
.demo-rs .sec-item {
  margin-bottom: 25px;
}
.demo-rs .sec-item p {
  text-align: left;
  overflow: hidden;
}
.demo-rs .sec-item label {
  float: right;
}
.demo-rs .sec-item .bar {
  position: relative;
  height: 4px;
  background-color: #efefef;
  margin-top: 5px;
}
.demo-rs .sec-item .bar span {
  height: 100%;
  position: absolute;
  background-color: #4cb050;
}
.demo-rs .sec-txt {
  padding: 20px 14px;
  line-height: 30px;
}
.demo .img-preview {
  margin-bottom: 16px;
  height: 352px;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.demo .img-preview:after {
  content: "";
  width: 0;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.demo .img-preview img {
  margin: auto;
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
}
.demo .img-preview label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 16px;
  background-color: #e6fafd;
  color: gray;
  border: 1px solid #d5d5d5;
  border-width: 0 1px 1px 0;
  line-height: 1;
}
.demo .img-preview .err-tip {
  display: none;
  font-size: 12px;
  color: #b2b2b2;
  text-align: center;
  margin-top: 120px;
}
.demo .img-preview .err-tip:before {
  content: "";
  display: block;
  width: 85px;
  height: 65px;
  margin: 0 auto 18px;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: 0 -292px;
}
.demo .img-preview.error img {
  display: none;
}
.demo .img-preview.error .err-tip {
  display: block;
}
.demo-box {
  font-size: 14px;
  display: inline-block;
  box-sizing: border-box;
}
.demo-box-sm {
  height: 408px;
}
.demo-box-sm .img-preview img {
  display: inline-block;
  vertical-align: middle;
  width: 400px;
}
.demo .tips {
  font-size: 12px;
  color: #b2b2b2;
  margin-top: 10px;
}
.demo .img-list {
  overflow: hidden;
  margin-bottom: 16px;
}
.demo .img-list .img-wrap {
  opacity: 0.6;
  float: left;
  width: 102px;
  height: 102px;
}
.demo .img-list .img-wrap.active {
  opacity: 1;
}
.demo .img-list .img-wrap img {
  width: 100%;
  height: 100%;
  display: block;
}
.demo .form-row label {
  margin: 0 5px;
}
.demo .form-row .imgurl {
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.demo .form-row .btn {
  background-color: #0052d9;
  color: #fff;
  line-height: 40px;
  text-align: center;
  border-radius: 3px;
  display: inline-block;
  vertical-align: bottom;
}
.demo .form-row .btn:hover {
  background-color: #0033d9;
}
.demo .form-row .btn-upload {
  width: 200px;
}
.demo .form-row .btn-test {
  width: 110px;
  position: absolute;
  right: 0;
  top: 0;
}
.demo .form-row .ui-input {
  padding-right: 120px;
}
.demo .form-row .ui-input input {
  box-sizing: border-box;
}
.demo .form-row .ui-input-bg {
  border-radius: 3px;
}
.advan .ico-1:before {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: -302px -84px;
}
.advan .ico-2:before {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: 0 -208px;
}
.advan .ico-3:before {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: -84px -208px;
}
.advan .ico-4:before {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: -168px -208px;
}
.advan .ico-5:before {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: -302px 0;
}
.scene .ico-1:before {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: -149px -292px;
}
.scene .ico-2:before {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: -209px -292px;
}
.scene .ico-3:before {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: -89px -292px;
}
.scene .ico-4:before {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: -302px -228px;
}
.scene .ico-5:before {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: -302px -168px;
}
.case.case1 {
  background-image: url(https://cdn.ai.qq.com/ai/page/product/ocr/img/case-bg-wz-c22a5bd6b9.jpg);
}
.case.case2 {
  background-image: url(https://cdn.ai.qq.com/ai/page/product/ocr/img/case-bg-qq-072ab4e31f.jpg);
}
.case.case3 {
  background-image: url(https://cdn.ai.qq.com/ai/page/product/ocr/img/case-bg-yyb-95a25619d0.jpg);
}
.case.case4 {
  background-image: url(https://cdn.ai.qq.com/ai/page/product/ocr/img/case-bg-58tc-a326e84ebc.jpg);
}
.case .ico-1 {
  margin-left: 0;
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: -151px -104px;
}
.case .ico-2 {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: 0 -104px;
}
.case .ico-3 {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: -151px 0;
}
.case .ico-4 {
  background-image: url(https://cdn.ai.qq.com/ai/sprite/sprite-b3224a3fd7.product.ocr.png?max_age=31536000);
  background-position: 0 0;
}
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfile + label {
  margin: 0 !important;
  cursor: pointer;
}
.tab-cont {
  display: none;
}
</style>