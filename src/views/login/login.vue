<template>
  <div class="login">
    <Row type="flex" justify="center" align="middle" @keydown.enter.native="submitLogin">
      <Col style="width: 368px;">
        <!-- 头部logo -->
        <Row>
            <h1 style="text-align:center; font-size:2em;">HDU AI</h1>
        </Row>
        <Row v-if="!socialLogining">
          <!-- 登录框 -->
          <Tabs v-model="tabName">
            <TabPane label="账户密码登录" name="username" icon="md-person">
              <Form
                ref="usernameLoginForm"
                :model="form"
                :rules="rules"
                class="form"
                v-if="tabName=='username'"
              >
                <FormItem prop="username">
                  <Input
                    v-model="form.username"
                    prefix="ios-contact"
                    size="large"
                    clearable
                    placeholder="请输入用户名"
                    autocomplete="off"
                  />
                </FormItem>
                <FormItem prop="password">
                  <Input
                    type="password"
                    v-model="form.password"
                    prefix="ios-lock"
                    size="large"
                    clearable
                    placeholder="请输入密码"
                    autocomplete="off"
                  />
                </FormItem>
                <FormItem prop="tip">
                  <Row type="flex" justify="space-between" class="code-row-bg">
                  <Col span="18">
                  <Checkbox v-model="form.rememberMe">是否记住登录</Checkbox>
                  </Col>
                  <Col span="4">
                  <div @click="goToRegist" class="tip">前往注册</div>
                  </Col>
                  </Row>
                </FormItem>
              </Form>
            </TabPane>
          </Tabs>

          <!-- 登录按钮 -->
          <Row>
            <Button
              class="login-btn"
              type="primary"
              size="large"
              :loading="loading"
              @click="submitLogin"
              long
            >
              <span v-if="!loading">登录</span>
              <span v-else>登录中</span>
            </Button>
          </Row>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
// import {
//   login,
//   userInfo,
//   githubLogin,
//   qqLogin,
//   weiboLogin,
//   getJWT,
//   sendLoginSms,
//   smsLogin,
//   initCaptcha,
//   drawCodeImage,
//   getOtherSet
// } from "@/api/index";
import {
  userLogin
}from "@/api/index"
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";


var md5 = require('md5');
import { getStore, setStore } from '@/libs/storage';

export default {
  components: {
    // CountDownButton,
    // RectLoading,
    // LangSwitch,
    // Header,
    // Footer
  },
  data() {
    return {
      captchaId: "",
      captchaImg: "",
      loadingCaptcha: true,
      socialLogining: false,
      error: false,
      tabName: "username",
      saveLogin: true,
      getSms: "获取验证码",
      loading: false,
      sending: false,
      errorCode: "",
      form: {
        username: "",
        password: "",
        rememberMe: false
      },
      rules: {
        username: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ],
      }
    };
  },
  methods: {
    ...mapActions([
      "getUserInfoAction"
    ]),
    // 跳转注册页面
    goToRegist(){
      this.$router.push({
        name: "regist"
      });
    },
    // getCaptchaImg() {
    //   this.loadingCaptcha = true;
    //   initCaptcha().then(res => {
    //     this.loadingCaptcha = false;
    //     if (res.success) {
    //       this.captchaId = res.result;
    //       this.captchaImg = drawCodeImage + this.captchaId;
    //     }
    //   });
    // },
    // sendSmsCode() {
    //   this.$refs.mobileLoginForm.validate(valid => {
    //     if (valid) {
    //       this.sending = true;
    //       this.getSms = "发送中";
    //       sendLoginSms(this.form.mobile).then(res => {
    //         this.getSms = "获取验证码";
    //         this.sending = false;
    //         if (res.success) {
    //           this.$Message.success("发送短信验证码成功");
    //           // 开始倒计时
    //           this.$refs.countDown.startCountDown();
    //         }
    //       });
    //     }
    //   });
    // },
    // 登录完成之后
    afterLogin(res) {
      this.loading = false;
      let accessToken = res.result;
      setStore("accessToken", accessToken);
      this.getUserInfoAction().then(res =>{
        console.log(res);
        if(res.success){
          setStore("userInfo", res.result);
          this.$Message.success("登录成功");
          this.$router.push({
            name: "console-home"
          });
        }else{
          this.$Message.error("登录失败");
        }
      })
      
    },
    // 处理 点击登录按钮 事件
    submitLogin() {
      this.$refs.usernameLoginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          userLogin({
            name: this.form.username,
            password: md5(this.form.password),
            rememberMe: this.form.rememberMe,
          }).then(res => {
            console.log(res);
            if (res.success) {
              this.afterLogin(res);
            } else {
              this.loading = false;
              // this.getCaptchaImg();
              this.$Message.error(res.message);
            }
          }).catch(err =>{
            console.log(err);
          });
        }
      });
    },
  },
  mounted() {
  }
};
</script>

<style lang="less" scoped>
@import "./login.less";

</style>
