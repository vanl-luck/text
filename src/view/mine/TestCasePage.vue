<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="基本资料" fixed :z-index="10"></van-nav-bar>

    <div class="nav-con-16">

      <van-cell-group>
        <van-field label="会员" disabled v-model="name" />
      </van-cell-group>
      <van-field label="地址" v-model="address" placeholder="请输入地址" />
      <div style="text-align:center;margin:20px;">

        <div style="text-align:center;margin:20px;">

    <!-- <van-button type="primary" size="large" @click="confirms">获取微信头像</van-button> -->
          <van-button type="primary" size="large" @click="confirm">确定修改</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Dialog
  } from 'vant';

  export default {
    name: "test-case-page",
    data() {
      return {
        address: '',
        name: ''
      }
    },
    mounted() {
      this.name = JSON.parse(localStorage.getItem('user')).userName
    },
    methods: {
      // 测试Post请求
      confirm() {
        if (this.address) {

          this._showLoading();
          let param = {
            address: this.address,
            id: JSON.parse(localStorage.getItem('user')).id
          }
          this.$http.post("api/user/update", param).then(res => {
            this._dismissLoading();
            if (res.data.code == 200) {
              this.$toast("修改成功");
              this.$router.go(-1)
            } else {
              this.$toast("修改失败,网络报错");
            }
          }).catch(err => {
            this._dismissLoading();
            this._showToast(res.message);
          });

        } else {
          this.$toast("请输入地址");
        }
      },
      // 测试Get请求
      confirms() {
        this._showLoading();
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx27c08fe4a23c5aa5&redirect_uri=http:111.229.216.180/#/TestCasePage&response_type=code&scope=snsapi_userinfo&state=STATE';
    
        // this.$http.get(this.$urls.HTTP_BIN_GET).then(res => {
        //   this._dismissLoading();
        //   console.log(res.data);
        //   Dialog({
        //     message: res.data.origin
        //   }).then();
        // }).catch(err => {
        //   this._dismissLoading();
        //   this._showToast(err.message);
        // });
      },
    },
  }

</script>

<style scoped>

</style>
