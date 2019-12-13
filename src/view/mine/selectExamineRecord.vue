<template>
  <div>
    <van-nav-bar style="background:#c9ddd8" left-arrow @click-left="_routerBack" title="我的积分" fixed :z-index="10">
    </van-nav-bar>
    <div class="grad1">
      <div class="explain">
        <p>
          <br>
          <span style="color:#777f7f;font-size:14px;">
            积分
          </span>
        </p>
        <div>
          <p class="fontCor">
            {{rewardIntegral}}
          </p>
        </div>
      </div>
      <div>
        <p class="running">积分流水 </p>
        <div v-for="(item,index) in explain">

        <van-panel :title="item.parentName+'推荐'+item.invitedName+'('+item.relationship+')'" :desc="item.addTime" :status="item.rewardIntegral">
        </van-panel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        explain: [],
        rewardIntegral:this.$route.params.rewardIntegral
      }
    },
    methods: {
      num() {

        this.$http.post(`api/lyPay/selectExamineRecord`, {
          userId: JSON.parse(localStorage.getItem('user')).id
        }).then(res => {
          this.explain = res.data.data.list
          this.explain.map(item=>{
              item.addTime=item.addTime.slice(0, 10)
              item.parentName=item.parentName
              item.invitedName=item.invitedName
              item.rewardIntegral='+'+item.rewardIntegral
           
              if(item.relationship==1){
                  item.relationship='直推'
              }
                 if(item.relationship==2){
                  item.relationship='间推'
              }
                 if(item.relationship==3){
                  item.relationship='VIP团队收益'
              }
                 if(item.relationship==4){
                  item.relationship='代言人团队收益'
              }
              
          })

        })
      }
    },
    created() {
    this.num()
      console.log(JSON.parse(sessionStorage.getItem('rewardIntegral')));
      if(!this.rewardIntegral){
          this.rewardIntegral=JSON.parse(sessionStorage.getItem('rewardIntegral'))
      }
      
      console.log(this.$route.params);
    }

  }

</script>
<style lang="scss">
  .explain {
    margin-top: 45px;
    text-align: center;

    .fontCor {
      font-size: 40px;
      color: #dfbaa7;
    }
  }

  .running {
    margin: 10px;
    font-size: 14px;
    font-weight: bold;
  }
.van-cell{
    font-size: 13px;
}
</style>
