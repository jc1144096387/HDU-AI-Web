<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <front-header></front-header>
    <div class="header"></div>

    <div class="layout main-cont">
      <div
        class="jmod-doc-sidebar doc-sidebar"
        style="top: 92px; margin-left: 20px;"
        :style="{left: sidebarLeft+'px'}"
      >
        <div class="doc-sidebar-iconwrap jmod-hide-sidebar">
          <i class="doc-sidebar-icon"></i>
        </div>
        <div class="doc-sidebar-wrap" style="height: 773px;">
          <div class="doc-sidebar-title">文档目录</div>
          <div class="doc-sidebar-panel">
            <Menu
              style="z-index:2;background-color: #f7f7f7;"
              v-if="productList"
              :active-name="productList[currentIndex1].children[currentIndex2].value"
              :open-names="[productList[currentIndex1].value]"
            >
              <Submenu
                v-for="(item1, index1) in productList"
                :key="index1"
                :name="item1.value"
              >
                <template slot="title">
                  <!-- <Icon type="ios-cog" /> -->
                  {{ item1.label }}
                </template>
                <MenuItem
                  v-for="(item2, index2) in item1.children"
                  :key="index2"
                  :name="item2.value"
                  >{{ item2.label }}</MenuItem
                >
              </Submenu>
            </Menu>
          </div>
        </div>
      </div>

      <div class="main markdown-body jmod-doc-main doc-main">
        <div class="doc-bread jmod-doc-bread">
          <a @click="goToDoc()">文档中心</a><span>&gt;</span
          ><span>{{productList[currentIndex1].label}}</span><span>&gt;</span><span>{{productList[currentIndex1].children[currentIndex2].label}}</span>
        </div>

        <vue-markdown  :source="msg"></vue-markdown>

      </div>
    </div>
  </div>
</template>
<script>
import frontHeader from "@/components/header/front-header.vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

import VueMarkdown from 'vue-markdown';

export default {
  name: "",
  components: {
    frontHeader,
    VueMarkdown,
  },
  data() {
    return {
      // 记录当前激活侧边栏序号
      currentIndex1:0,
      currentIndex2:0,

      // 侧边栏left
      sidebarLeft: 0,
      // markdown字符串
      msg:'```html \n<form method="GET" action="/transferFunds ">\n cash: <input type="text" name="cash"> \n to: <input type=" text " name=“to"> \n<input type="submit" name="action" value=""> \n</form> \n```'
    };
  },
  computed: {
    ...mapState(["productList"])
  },
  created(){
    this.getProductListAction();

    // 监听窗口变化事件
    window.addEventListener("resize", this.handleResize);
    this.sidebarLeft = (window.innerWidth-1300)/2;
  },
  methods: {
    ...mapActions([ "getProductListAction"]),
    // 窗口变化
    handleResize(){
      console.log(window.innerWidth);
      if(window.innerWidth > 1300){
        this.sidebarLeft = (window.innerWidth-1300)/2;
      }else{
        this.sidebarLeft = 0;
      }
    },
    // 跳转文档中心
    goToDoc() {
      this.$router.push({
        name: "doc"
      });
    },
    //切换侧边栏二级菜单当前元素
    changeSideBar2(index1,index2){
      this.currentIndex1 = index1;
      this.currentIndex2 = index2;
    },
  }
};
</script>
<style scoped>
.container {
  background-color: #ffffff;
  height: auto;
}
.header {
  width: 100%;
  height: 62px;
  background-color: #333;
}
.main-cont {
  padding: 30px 0;
  overflow: hidden;
  max-width: 1397px;
  min-width: 1300px;
  width: auto;
  position: relative;
}
.layout {
  width: 1300px;
  margin: 0 auto;
}

.doc-sidebar {
  position: fixed;
  text-align: left;
  margin-left: 20px;
  transition: left 0.3s ease-out;
}
.doc-sidebar-title {
  padding: 10px 14px;
  border-bottom: 1px solid #eff0f2;
  font-weight: 700;
}
.doc-sidebar-wrap {
  width: 220px;
  background-color: #f7f7f7;
  font-size: 14px;
  line-height: 24px;
  color: #333;
  overflow: hidden;
  -webkit-transform-origin: top right;
  -ms-transform-origin: top right;
  transform-origin: top right;
  transition: -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.doc-sidebar-panel {
  width: 238px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100% - 45px);
}

.main {
  max-width: 952px;
  min-width: 755px;
  background-color: #fff;
  box-sizing: border-box;
  margin-left: 270px;
  margin-right: 175px;
  display: inline-block;
  text-align: left;
  transition: margin-left 0.3s ease-out;
}
.doc-main {
  color: #333;
}
.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: #24292e;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}
.markdown-body > :first-child {
  margin-top: 0 !important;
}
.doc-bread {
  font-size: 14px;
  line-height: 24px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
.markdown-body * {
  box-sizing: border-box;
}
.doc-bread span {
  display: inline-block;
  min-width: 25px;
  text-align: center;
  color: gray;
}
</style>
