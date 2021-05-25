<template>
  <div>
    <!-- <van-nav-bar left-arrow @click-left="_routerBack" title="登录" fixed :z-index="10"></van-nav-bar> -->
    <div class="nav-con align-center login-con" :style="{'background-image':'url(static/img/login/login_back.png)'}">
      <div class="top-area">
        <van-image src="../../../../static/img/LOGO B.png" class="top-logo"></van-image>
      </div>
      <!--用户名密码登录-->
      <div v-if="loginWay==1">
        <van-cell-group>
          <!--输入账号-->
          <van-field v-model="userName" left-icon="static/img/login/login_user.png" required clearable label="手机号"
            placeholder="请输入手机号" label-align="left" size="large" maxlength="20"></van-field>
          <!--输入密码-->
          <van-field v-model="password" left-icon="static/img/login/login_pass.png" label="密　码" placeholder="请输入密码"
            size="large" required clearable :type="showPassword?'text':'password'" maxlength="20"
            :right-icon="'static/img/login/eye_'+(showPassword?'open':'close')+'.png'"
            @click-right-icon="showPassword=!showPassword"></van-field>
        </van-cell-group>
        <!--账密登录按钮-->
        <div class="button-con">
          <van-button type="danger" round class="login-btn" @click="onLoginClick">登录
          </van-button>
          <!-- <van-button type="danger" round class="login-btn" @click="onLoginClick1">登录
          </van-button> -->
          <!-- <van-button type="danger" plain round class="login-btn" @click="loginWay=3-loginWay">短信登录</van-button> -->
        </div>
      </div>
      <div class="bottom">
        <a href="http://www.beian.miit.gov.cn" style="color:#010101;">
          粤ICP备19162088号
        </a>
      </div>
      <!--验证码登陆-->

    </div>
  </div>
</template>

<script>
  import wx from "weixin-js-sdk";
  import md5 from 'js-md5';
  import {
    Toast
  } from 'vant';
  export default {
    name: "login-page",
    data() {
      return {
        userName: '',
        password: '',
        smsCode: '',
        showPassword: false, //是否显示明文
        loginWay: 1, //1: 账密，2：验证码
        smsCountDown: 0,
        smsCountInterval: null,
        wxcode: ''
      };
    },
    computed: {


      isSendSMSEnable() {
        return this.smsCountDown <= 0 && this.userName.length > 4;
      },
      getSendBtnText() {
        if (this.smsCountDown > 0) {
          return this.smsCountDown + '秒后发送';
        } else {
          return '发送验证码';
        }
      },
      canSMSLogin() {
        return this.userName.length > 4 && this.smsCode.length > 4;
      },
      canPwdLogin() {
        return this.userName.length > 4 && this.password.length > 4;
      },
    },
    created() {
         if(window.location.search){

              let str = window.location.search.split("&")[0].split("=")[1]

              this.wxcode = str
              console.log(this.wxcode);
            }else{


            }



    },
    mounted() {

    },
    beforeDestroy() {
      if (this.smsCountInterval) {
        clearInterval(this.smsCountInterval);
      }
    },
    methods: {
      onSMSSend() {
        this._showLoading();
        setTimeout(() => {
          this._dismissLoading();
          this._showToast('已发送');
          this.smsCountDown = 60;
          this.startSMSTimer();
        }, 300);
      },
      startSMSTimer() {
        this.smsCountInterval = setInterval(() => {
          this.smsCountDown--;
          if (this.smsCountDown <= 0) {
            clearInterval(this.smsCountInterval);
          }
        }, 1000);
      },
      getUrlParam(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        let url = window.location.href.split('#')[0]
        let search = url.split('?')[1]
        if (search) {
          var r = search.substr(0).match(reg)
          if (r !== null) return unescape(r[2])
          return null
        } else {
          return null
        }
      },
      onSMSLogin() {
        this.onLoginClick();
      },
      // 模拟登陆
      onLoginClick1() {
        window.location.href =
          'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMTM3OTMzNQ==#wechat_redirect'
        //  this._routeReplace('https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMTM3OTMzNQ==#wechat_redirect');
      },
      onLoginClick() {
       
       
       if (this.userName && this.password) {

          this.$http.get(`api/user/login?phone=${this.userName}&password=${this.password}&code=${this.wxcode}`).then(
            res => {
   
              if (res.data.code == 200) {
                this._showLoading();
                console.log(res.data.data.headUrl);
                this.$store.commit('TokenInfo', res.data.data.token);
                this.$store.commit('setUserInfo', res.data.data);

                setTimeout(() => {
                  Toast('登录成功');
                  this._dismissLoading();
                  this.$router.push({
                    name: 'mine',
                  })
     location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx27c08fe4a23c5aa5&redirect_uri=http://www.anmeihui.cn/&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect&connect_redirect=1")

                }, 1000);

                localStorage.setItem('user', JSON.stringify(res.data.data))

              } else {
                Toast('账号密码错误');
              }
            }).catch(err => {
            this._dismissLoading();

            this._showToast('系统错误');
          });

        } else {
          Toast('请输入账号密码');
        }
      },
      //保存用户信息
      saveUserInfo() {
        let info = {
          userName: this.userName
        };
        // 全局修改
        this.$store.commit('setUserInfo', info);
        // 持久化修改
        localStorage.setItem('userInfo', JSON.stringify(info));
      },
    },
  }

</script>

<style scoped>
  .bottom {
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -74px;
  }

  .send-btn {
    height: 26px;
    line-height: 24px;
  }

  .button-con {
    margin-top: 36px;
  }

  .top-area {
    margin: 30px 0;
  }

  .login-con {
    background-size: 100% 100%;
    height: calc(100vh - 46px);
  }

  .login-btn {
    width: 60%;
    margin: 12px;
  }

  .top-logo {
    width: 180px;
    margin: 16px 0;
  }

</style>
