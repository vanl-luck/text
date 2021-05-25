<template>
  <div>
    <!--顶部导航-->
    <div class="top-nav ">
      <van-image lazy-load style="width:28px;height:28px" width="15rem" height="15rem"  round :src="mineUrl" class="head-img"></van-image>
      <div class="top-right">
        <van-icon name="static/img/mine/mine_nav_settings2.png" size="28px" @click="onSettingsClick"></van-icon>
      </div>
    </div>
    <!--下部内容-->
    <div class="nav-con " style="background: #fff;" >
      <div class="amount-con " style="display:flex;">
        <van-image style="left:30px;top:10px;width: 66px;height: 66px;" round width="15rem" height="15rem" :src="mineUrl" />

        <div style="margin-left:30px;">
          <div class="light-txt amount-ins">名字:{{user.userName}}</div>
          <div class="light-txt amount-ins">手机:{{user.phone}}</div>
          <div class="light-txt amount-ins">级别:{{user.memberName}}</div>
        </div>
   
      </div>
      <!--代收收益-->
      <van-row class="receive-all">
        <van-col span="8" @click="$router.push({path: '/withdraw', query:{money: num.rewardIntegral,name:'奖励积分'}});">
          <div>{{num.rewardIntegral}}</div>
          <div class="light-txt receive-ins">奖励积分</div>
        </van-col>
        <van-col span="8" @click="$router.push({path: '/withdraw', query:{money: num.excellentIntegral,name:'优享积分'}});"
          class="receive-right">
          <div>-</div>
          <div class="light-txt receive-ins">花果山</div>
        </van-col>
        <van-col span="8" @click="shareIn" class="receive-right">
          <div>{{num.shareIntegral}}</div>
          <div class="light-txt receive-ins">共享积分</div>
        </van-col>
      </van-row>
      <!--我的余额-->

      <!--下方应用入口-->
      <div>
        <van-row class="app-con">
          <van-col span="8" v-for="(it,idx) in bottomApps" :key="idx" class="app-item click-box">
            <div @click="pushIdx(it.id)">
              <van-image v-if="it.flag" :src="'static/img/mine/'+it.flag" class="flag-icon"></van-image>
              <div>
                <van-image :src="'static/img/mine/'+it.icon" class="app-icon"></van-image>
                <div class="app-text light-txt">{{it.title}}</div>
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
      <!-- <div class="img-responsive">
        <img src="../../../../static/img/product/微信图片_20191223085800.jpg" alt="">
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    // name: "tab-mine",
    //  inject: ['reload'],
    data() {
      return {
        // user:'',
        bottomApps: [{
            icon: 'mine_app_icon3.png',
            flag: '',
            title: '提现明细',
            id: 1
          },
          {
            icon: 'mine_app_icon6.png',
            flag: '',
            title: '消费明细',
            id: 2
          },
          {
            icon: 'prod_status4.png',
            flag: '',
            title: '积分明细',
            id: 7
          },
          {
            icon: 'mine_app_icon5.png',
            flag: '',
            title: '我的会员',
            id: 3
          },
          {
            icon: 'mine_nav_settings1.png',
            flag: '',
            title: '我的设置',
            id: 4
          },
          // {icon: 'mine_app_icon9.png', flag: '', title: '积分',id:1},
          {
            icon: 'mine_app_icon4.png',
            flag: '',
            title: '添加消费',
            id: 5
          },
          {
            icon: 'mine_app_icon2.png',
            flag: '',
            title: '消费管理',
            id: 6
          },
          {
            icon: 'mine_app_icon7.png',
            flag: '',
            title: '关于我们',
            id: 8
          },
          {
            icon: 'mine_app_icon1.png',
            flag: '',
            title: '联系客服',
          },
        ],
        user: {},
        num: {
          rewardIntegral: '',
          excellentIntegral: '',
          shareIntegral: '',
        },
      mineUrl:''
      };
    },
    created() {
      console.log(this.$route.params);
      this.mineUrl=JSON.parse(localStorage.getItem('user')).headUrl


      this.numcomponent()

    },
    computed: {
      rewardIntegral() {
        return this.num.rewardIntegral
      },
      excellentIntegral() {
        return this.num.excellentIntegral
      },
      rewardIntegral() {
        return this.num.rewardIntegral
      },
    },
    //   watch:{
    //  user(){
    //     console.log('user');
    //   }
    //   },
    methods: {
      shareIn() {
        if (JSON.parse(localStorage.getItem('user')).sumAmount > 10000) {

          this.$router.push({
            path: '/withdraw',
            query: {
              money: this.num.shareIntegral,
              name: '共享积分'
            }
          })
        } else {
          this._showToast('不满足消费金额');
        }

      },
      //更改积分的变动
      numcomponent() {
        this.$http.get(
          `api/user/login?phone=${JSON.parse(localStorage.getItem('user')).phone}&password=${JSON.parse(localStorage.getItem('user')).password}`
        ).then(res => {
          localStorage.clear()
          localStorage.setItem('user', JSON.stringify(res.data.data))
          this.user = res.data.data
          this.num.rewardIntegral = res.data.data.rewardIntegral
          sessionStorage.setItem('rewardIntegral', this.num.rewardIntegral)
          this.num.excellentIntegral = res.data.data.excellentIntegral
          this.num.shareIntegral = res.data.data.shareIntegral
        })
      },
      pushIdx(id) {
        if (id == 1) {
          this._routePush('consume');
        } else if (id == 2) {
          this._routePush('service');
        } else if (id == 3) {
          this._routePush('basic');
        } else if (id == 4) {
          this._routePush('SettingsPage');
        } else if (id == 5) {
          this._routePush('addMine');
        } else if (id == 6) {
          this._routePush('detail')
        } else if (id == 7) {
          this._routePush('selectExamineRecord', {
            rewardIntegral: this.num.rewardIntegral
          })
        } else if (id == 8) {
          this._routePush('aboutUs')
        } else {
          window.location.href =
            'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMTM3OTMzNQ==#wechat_redirect'

        }
      },
      onMessageClick() {
        this._routePush('MessagePage');
      },
      onSettingsClick() {
        this._routePush('SettingsPage')
      },
    },
  }

</script>

<style scoped lang="scss">
  // .img-div {
  //   position: relative;
  //   right: -5%;
  //   width: 100px;
  //   height: 100px;
  //   top: 10px;

  //   img {
  //     width: auto;
  //     height: auto;
  //     max-width: 100%;
  //     max-height: 100%
  //   }
  // }

  .app-con {
    margin: 0px 20px;

    .app-item {
      border: 1px solid #f7f7f7;
      text-align: center;
      position: relative;
      padding: 24px 0;

      .flag-icon {
        position: absolute;
        right: 0;
        top: 0;
        width: 36px;
        height: 36px;
      }

      .app-text {
        font-size: 14px;
      }

      .app-icon {
        width: 36px;
        height: 36px;
      }
    }
  }

  .img-responsive {

    margin: 10px 20px;

    img {
      width: 100%;
      height: inherit;
    }
  }

  .remain-con {
    // margin-top: 12px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    padding: 14px;

    .avail-amount {
      font-size: 20px;
    }

    .avail-ins {
      margin-top: 4px;
      font-size: 14px;
    }

    .remain-right {
      display: flex;
      align-items: center;
      font-size: 16px;

      .remain-divi {
        width: 1px;
        height: 24px;
        margin: 0 18px;
        background-color: #cccccc;
      }

      .remain-charge {
        height: 24px;
        line-height: 21px;
      }
    }
  }

  .receive-all {
    box-shadow: 3px 3px 3px 1px #ccc;
    position: relative;
    top: -10px;
    /* border: 1px solid #e2ca9c; */
    border-radius: 5px;
    margin: -1px 20px;
    text-align: center;
    // margin-top: 12px;
    background-color: white;
    padding: 16px;

    .receive-right {
      border-left: 1px solid #cccccc;
    }

    .receive-ins {
      font-size: 14px;
      margin-top: 6px;
    }
  }

  .amount-con {

    background: #fff;
    display: flex;
    border-radius: 30px;
    margin-top: -20px;
    width: 100%;
    // background-color: white;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 20px;

    .amount-ins {
      color: #000000;
      margin-left: 20px;
      text-align: left;
      font-size: 14px;
      width: 130px;
      margin-top: 10px;
    }

    .amount-txt {
      font-size: 28px;
    }
  }

  .top-nav {
    background-color: #fff;
    position: fixed;
    height: 50px;
    z-index: 10;
    // border-bottom: 1px solid #f7f7f7;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .top-right {
      margin-right: 16px;
    }

    .head-img {
      width: 30px;
      height: 30px;
      // border-radius: 40px;
      overflow: hidden;
      margin-left: 16px;
    }

    .van-image__img {
      border-radius: 5px;
    }
  }

  .main-router-view {
    background: #f0f0f0;
  }

</style>
