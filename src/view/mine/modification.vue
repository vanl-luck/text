<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="修改密码" fixed :z-index="10"></van-nav-bar>

    <div class="nav-con-16">

      <van-cell-group>
        <van-field label="姓名" disabled v-model="name" />
        <van-field label="手机号" disabled v-model="phone" placeholder="请输入手机号" />
        <van-field label="旧密码" v-model="password" placeholder="请输入旧密码" />
        <van-field label="新密码" v-model="newpassword" placeholder="请输入新密码" />
      </van-cell-group>

      <div style="text-align:center;margin:20px;">

        <van-button type="primary" size="large" @click="confirm">确定修改</van-button>
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
        name: '',
        password: '',
        newpassword: '',
        phone: '',
      }
    },
    created() {
      this.name = JSON.parse(localStorage.getItem('user')).userName
      this.phone=JSON.parse(localStorage.getItem('user')).phone
    },
    methods: {
      // 测试Post请求
      confirm() {
        this._showLoading();
            let param={
        password:this.password,
        newPassword:this.newpassword,
        phone:this.phone
    }
  
        this.$http.post('api/user/updataPassword',param).then(res => {
          this._dismissLoading();
          console.log(res);
          if(res.data.code==200){
  Dialog({
            message: '修改成功'
          }).then();
          this._routePush('mine');
          }else{
             Dialog({
            message: res.data.message
          }).then();
          }
        
        }).catch(err => {
          this._dismissLoading();
          this._showToast('系统错误');
        });
      },
      onHttpPostClick() {
        this._showLoading();
        this.$http.post(this.$urls.HTTP_BIN_POST).then(res => {
          this._dismissLoading();
          console.log(res.data);
          Dialog({
            message: res.data.origin
          }).then();
        }).catch(err => {
          this._dismissLoading();
          this._showToast(err.message);
        });
      },
      // 测试Get请求
      onHttpGetClick() {
        this._showLoading();
        this.$http.get(this.$urls.HTTP_BIN_GET).then(res => {
          this._dismissLoading();
          console.log(res.data);
          Dialog({
            message: res.data.origin
          }).then();
        }).catch(err => {
          this._dismissLoading();
          this._showToast(err.message);
        });
      },
    },
  }

</script>

<style scoped>

</style>
