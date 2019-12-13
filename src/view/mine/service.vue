<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="消费明细" fixed :z-index="10"></van-nav-bar>
    <div style="margin-top:50px;display:flex">
      <van-button style="flex:1;width:150px;" @click="payData" type="default">全部</van-button>
      <van-button style="flex:1;width:150px;" @click="payData('1')" type="default">已付</van-button>
      <van-button style="flex:1;width:150px;" @click="payData('0')" type="default">没付</van-button>
    </div>
    <van-panel v-for="(item,index) in allData" style="font-size:14px;">

      <div>
        <div style="display:flex">
          <div class="cards">
            店铺名称:{{item.merchantName}}
          </div>
          <div class="cards">
            价格:{{item.actualPrice}}
          </div>
        </div>
      </div>
      <div>
        <div style="display:flex">
          <div class="cards">
            付款: <span v-if="item.payStatus==0">未付</span><span v-if="item.payStatus==1">已付</span>
          </div>
          <div class="cards">
            时间:{{item.addTime}}
          </div>
        </div>
      </div>
    </van-panel>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        ueerId: '',
        page: 1,
        size: 100,
        allData: []
      }
    },
    methods: {

      payData(value) {
        let param = {
          ueerId: JSON.parse(localStorage.getItem('user')).id,
          page: this.page,
          size: this.size
        }
        if(value){
            param.type=Number(value)
        }
        this.$http.post(`/api/lyPay/selectALL`, param).then(res => {
          if (res.data.code == 200) {
              this.allData = res.data.data.list
              this.allData.map(item => {
                item.addTime = item.addTime.slice(0, 10)
                if (item.payStatus == 1) {
                  item.pay == '已付'
                } else {
                  item.pay == '未付'
                }
              })
          } else {
            this.$toast("网络错误");
          }

        })
      }
    },
    created() {
      this.payData()
    }
  }

</script>
<style lang="" scoped>
  .card {
    display: flex;
  }

  .cards {
    margin: 2px;
    flex: 1;
  }

  .van-panel__content {
    margin-left: 20px
  }

</style>
