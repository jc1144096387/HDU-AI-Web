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
            <TabPane label="账户密码注册" name="username" icon="md-person">
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
                <FormItem prop="passwordAgain">
                  <Input
                    type="password"
                    v-model="form.passwordAgain"
                    prefix="ios-lock"
                    size="large"
                    clearable
                    placeholder="请确认密码"
                    autocomplete="off"
                  />
                </FormItem>
                <FormItem prop="mail">
                  <Input
                    v-model="form.mail"
                    prefix="ios-mail"
                    size="large"
                    clearable
                    placeholder="请输入邮箱"
                    autocomplete="off"
                  />
                </FormItem>
                <FormItem prop="phone">
                  <Input
                    v-model="form.phone"
                    prefix="ios-phone-portrait"
                    size="large"
                    clearable
                    placeholder="请输入手机号"
                    autocomplete="off"
                  />
                </FormItem>

                <FormItem prop="tip">
                  <Row type="flex" justify="space-between" class="code-row-bg">
                  <Col span="18">
                  <!-- <Checkbox v-model="form.rememberMe">是否记住登录</Checkbox> -->
                  </Col>
                  <Col span="4">
                  <div @click="goToLogin" class="tip">前往登录</div>
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
              <span v-if="!loading">注册</span>
              <span v-else>注册中</span>
            </Button>
          </Row>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>

import {
  userRegister
}from "@/api/index"


var md5 = require('md5');

export default {
  components: {
  },
  data() {
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入的密码不一样"));
      } else {
        callback();
      }
    };

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
        passwordAgain: "",
        mail:"",
        phone:""
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
        passwordAgain: [
          {
            required: true,
            message: "确认密码不能为空",
            trigger: "blur"
          },
          { required: true, validator: validatePassCheck, trigger: "blur" }
        ],
        mail: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    // 跳转登录页面
    goToLogin(){
      this.$router.push({
        name: "login"
      });
    },

    // 登录完成之后
    afterLogin(res) {
      this.loading = false;
      this.$Message.success(res.message)
      this.$router.push({
        name: "login"
      });

    },
    // 处理 点击登录按钮 事件
    submitLogin() {
      this.$refs.usernameLoginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          userRegister({
            name: this.form.username,
            password: md5(this.form.password),
            mobile: this.form.phone,
            email: this.form.mail
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
    // this.showAccount();
    // this.relatedLogin();
    // this.getCaptchaImg();
  }
};
</script>

<style lang="less" scoped>
@import "./regist.less";
</style>
