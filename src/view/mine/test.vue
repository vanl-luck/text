<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="付款" fixed :z-index="10"></van-nav-bar>
    <!-- <van-cell title="基本资料" icon="info-o"  size="large" @click="onVersionClick" is-link> -->
    <div class="img-responsive">
      <img :src="price[this.$route.query-3]" alt="">
      <div style="margin:20px 0;text-align:center;">
        <van-dialog v-if="showTrue" :beforeClose="chargeBtn" v-model="show" title="付款图上传" :show-cancel-button='true'
          :showCancelButton='true'>
          <van-uploader v-model="fileList" :after-read="afterRead" />
          <!-- <van-button @click='payment' type="primary">确认付款</van-button> -->
        </van-dialog>
        <van-button @click='payment' type="primary">确认付款</van-button>
      </div>
    </div>
  </div>

</template>
<script>
  import {
    Toast,
    Dialog
  } from 'vant';
  export default {
    data() {
      return {
        show: false,
        fileList: [],
        evidenceUrl: '',
        showTrue:true,
        price:['../../../static/img/price/2980.jpg','../../../static/img/price//10000.jpg','../../../static/img/price//30000.jpg']
      }
    },
    mounted() {
      Dialog.alert({
        title: '由于备案问题暂时不支持微信支付',
        message: '请扫码付款后截图上传图片,确认付款'
      }).then(() => {
        // on close
      });
    },
    methods: {
      afterRead(file) {
        var fordata = new FormData();
        fordata.append("file", file.file, file.file.name);
        this.$http.post("api/user/uploadimgdd", fordata).then(res => {
          this.evidenceUrl = res.data.data
          console.log(this.evidenceUrl);
        });
      },
      payment() {
        this.show = true

      },
      chargeBtn() {
        if (this.evidenceUrl) {

          let param = {
            userId: JSON.parse(localStorage.getItem('user')).id,
            memberId: this.$route.query,
            payEvidence: this.evidenceUrl
          }
          this.$http.post(`api/lyPay/save`, param).then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                Toast('提交成功');
                this.show = false
                this.$router.go(-1)
              }, 1000)
            } else {
              Toast('取消上传');
              this.show = false
            }
          }).catch(err => {
            Toast('取消上传');
            this.show = false
          });
        } else {
      
          this.showTrue=false
                  this.$nextTick(() => {
            this.showTrue=true
      })
          this.show = false
          // Toast('取消上传');
        }

      },

    }
  }

</script>
<style lang="">
  .img-responsive {
    margin-top: 50px;
    max-width: 100%;

    background-color: #fef9ff;
    /*背景色*/

  }

  .img-responsive img {
    width: 100%;
  }

</style>
