<template>
  <div>
    <van-nav-bar style="background:#c9ddd8" left-arrow @click-left="_routerBack" title="我的积分" fixed :z-index="10">
    </van-nav-bar>

    <div class="grad1">
      <div class="explain">
        <p>
          <br>
          <span style="color:#777f7f;font-size:14px;">
            奖励积分
          </span>
        </p>
        <div>
          <p class="fontCor">
            {{rewardIntegral}}
          </p>
        </div>
      </div>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="积分流水" name="1">
          <div>
            <p class="running"> </p>
            <div v-for="(item,index) in explain">
              <van-panel
              v-if="item.relationship==1||item.relationship==2||item.relationship==3||item.relationship==4||item.relationship==5"
                :title="item.parentName+' 推荐 '+item.invitedName+' ['+item.memberName+']'+' ('+item.name+')'"
                :desc="item.addTime" :status="item.rewardIntegral">
              </van-panel>
            </div>
          </div>
        </van-collapse-item>
        <van-collapse-item title="优享积分" name="2">
          <div>
            <div v-for="(item,index) in explain" :key="index">
              <van-panel
              v-if="item.relationship==6||item.relationship==7||item.relationship==8||item.relationship==9"
                :title="item.parentName+' 推荐 '+item.invitedName+' ['+item.memberName+']'+' ('+'优享积分'+')'"
                :desc="item.addTime" :status="item.rewardIntegral">
              </van-panel>
            </div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script>
  import {
    Collapse,
    CollapseItem
  } from 'vant';
  export default {
    data() {
      return {
        activeNames: [],
        explain: [],
        memberName: '<span></span>',
        rewardIntegral: this.$route.params.rewardIntegral
      }
    },
    methods: {
      num() {

        this.$http.post(`api/lyPay/selectExamineRecord`, {
          userId: JSON.parse(localStorage.getItem('user')).id,
          size:100,
          page:1
        }).then(res => {
          this.explain = res.data.data.list
          this.explain.map(item => {
            item.addTime = item.addTime.slice(0, 10)
            item.parentName = item.parentName
            item.invitedName = item.invitedName
            item.rewardIntegral = '+' + item.rewardIntegral


            if (item.relationship == 1) {
              item.name = '直推'
            }
            if (item.relationship == 2) {
              item.name = '间推'
            }
            if (item.relationship == 3) {
              item.name = 'VIP团队收益'
            }
            if (item.relationship == 4) {
              item.name = '代言人团队收益'
            }
            if (item.relationship == 9) {
              item.name = '优享积分直推'
            }
            if (item.relationship == 6) {
              item.name = '优享积分间推'
            }
            if (item.relationship == 7) {
              item.name = 'KOC 团队收益'
            }
            if (item.relationship == 8) {
              item.name = 'KOL 团队收益'
            }
            //        if (item.relationship == 9) {
            //   item.name = '终端终端VIP团队奖'
            // }
            //      if (item.relationship == 9) {
            //   item.name = '优享积分'
            // }

          })

        })
      }
    },
    created() {
      this.num()
      console.log(JSON.parse(sessionStorage.getItem('rewardIntegral')));
      if (!this.rewardIntegral) {
        this.rewardIntegral = JSON.parse(sessionStorage.getItem('rewardIntegral'))
      }

      console.log(this.$route.params);
    }

  }

</script>
<style lang="scss" scoped>
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
    font-size: 13px;
    font-weight: bold;
  }

  .van-cell {
    font-size: 13px;
  }

  .van-cell__title {
    flex: 4;
  }

  .van-cell__value {
    flex: 1;
  }

</style>
