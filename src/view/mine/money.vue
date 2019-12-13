<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="提款账号" fixed :z-index="10"></van-nav-bar>
   
    <div class="nav-con-16">
   
<van-cell-group>
  <van-field label="会员" disabled v-model="name"  />
  <van-field label="支付宝" v-model="alipay" placeholder='请输入支付宝' />
</van-cell-group>
      <div style="text-align:center;margin:20px;">

        <van-button type="primary" size="large" @click="confirm">确定修改</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Dialog} from 'vant';

  export default {
    name: "test-case-page",
    data(){
      return{
        alipay:'',
        name:''
      }
    },
    mounted(){
          this.name=JSON.parse(localStorage.getItem('user')).userName
          if(JSON.parse(localStorage.getItem('user')).alipayUser){
            this.alipay=JSON.parse(localStorage.getItem('user')).alipayUser
          }
    },
    methods: {
      // 测试Post请求
      confirm() {
        let param={
          alipayUser:this.alipay,
          id:JSON.parse(localStorage.getItem('user')).id
        }
        this._showLoading();
        this.$http.post('api/user/update',param).then(res => {
          this._dismissLoading();
          console.log(res);
          Dialog({message: res.data.message}).then();
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
          Dialog({message: res.data.origin}).then();
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
