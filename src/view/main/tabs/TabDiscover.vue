<template>
  <div>
    <van-nav-bar title="公司" fixed :z-index="10"></van-nav-bar>

    <div class="nav-con">
      <!--顶部图片-->
      <van-swipe :autoplay="3000" style="width:100%;height: 230px;">
        <van-swipe-item v-for="(image, index) in imgData" :key="index">
          <div class="img-responsive">

            <img v-lazy="image" />
          </div>
        </van-swipe-item>
      </van-swipe>
      <!--中部内容-->
      <div style="padding: 10px">
        <div class="align-center commu-all"
          :style="{'background-image':'url(static/img/home/fresher_ticket_back.png)'}">
          <div class="commu-top">
            <div class="commu-left">公司简介</div>
            <!-- <div class="commu-right">2个活动奖励</div> -->
          </div>
          <div class="commu-mid">
            <div class="commu-title">甄美纪：甄美纪医疗美容连锁集团,从无到</div>
            <div class="light-txt commu-txt">
              有,从小到大,凭借着先进的经营管
              理模式,专业的策划团队、强大的专
              家团队和人性化的服务,已成为西南
              较大的整形美容连锁集团。集团总部
              设立在亚洲金融中心——上海,经过
              几年的快速发展...
            </div>
          </div>
          <!-- <van-button type="danger" round class="commu-btn" @click="onCommuClick">进入社区</van-button> -->
        </div>
      </div>
      <!--下部应用入口-->
      <div class="commu-left" style="color: #FE7846;text-align:left;margin:5px;margin-left:25px;">美容连锁</div>
      <van-grid :border="false" :column-num="2" :gutter="10">
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片1.png" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片2.png" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片3.png" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片4.png" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片5.png" />
        </van-grid-item>
      </van-grid>
          <div class="commu-left" style="color: #FE7846;text-align:left;margin:5px;margin-left:25px;">师资力量</div>
      <van-grid :border="false" :column-num="1" :gutter="10">
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片6.png" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片7.png" />
        </van-grid-item>
      </van-grid>
            <div class="commu-left" style="color: #FE7846;text-align:left;margin:5px;margin-left:25px;">王牌项目</div>
      <van-grid :border="false" :column-num="1" :gutter="10">
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片8.png" />
        </van-grid-item>
       
      </van-grid>
              <div class="commu-left" style="color: #FE7846;text-align:left;margin:5px;margin-left:25px;">医院环境</div>
      <van-grid :border="false" :column-num="1" :gutter="10">
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片9.png" />
        </van-grid-item>
      
      </van-grid>
            <div class="commu-left" style="color: #FE7846;text-align:left;margin:5px;margin-left:25px;">服务体系</div>
      <van-grid :border="false" :column-num="1" :gutter="10">
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片15.png" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片16.png" />
        </van-grid-item>
          <van-grid-item>
          <van-image src="../../../../static/img/chain/图片17.png" />
        </van-grid-item>
          <van-grid-item>
          <van-image src="../../../../static/img/chain/图片18.png" />
        </van-grid-item>
          <van-grid-item>
          <van-image src="../../../../static/img/chain/图片19.png" />
        </van-grid-item>
          <van-grid-item>
          <van-image src="../../../../static/img/chain/图片20.png" />
        </van-grid-item>
          <van-grid-item>
          <van-image src="../../../../static/img/chain/图片21.png" />
        </van-grid-item>
           <van-grid-item>
          <van-image src="../../../../static/img/chain/图片22.png" />
        </van-grid-item>
     
      </van-grid>
                     <div class="commu-left" style="color: #FE7846;text-align:left;margin:5px;margin-left:25px;">十大优势</div>
      <van-grid :border="false" :column-num="1" :gutter="10">
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片10.png" />
        </van-grid-item>
           <van-grid-item>
          <van-image src="../../../../static/img/chain/图片11.png" />
        </van-grid-item>
           <van-grid-item>
          <van-image src="../../../../static/img/chain/图片12.png" />
        </van-grid-item>
           <van-grid-item>
          <van-image src="../../../../static/img/chain/图片13.png" />
        </van-grid-item>
           <van-grid-item>
          <van-image src="../../../../static/img/chain/图片14.png" />
        </van-grid-item>
           <van-grid-item>
        </van-grid-item>
      </van-grid>
      <!-- <van-row class="line2-all">
        <van-col span="12" v-for="(it, idx) in middleApps" :key="idx" class="line2-item click-box">
          <img :src="'static/img/discovery/'+it.icon" class="line2-icon" />
          <div>
            <div class="line2-title">{{it.title}}</div>
            <div class="line2-text light-txt">{{it.text}}</div>
          </div>
        </van-col>
      </van-row> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-discover",
    data() {
      return {
        imgData: ['../../../../static/img/doctor/WechatIMG1640.jpeg',
          '../../../../static/img/doctor/WechatIMG1642.jpeg',
          '../../../../static/img/doctor/WechatIMG1643.jpeg',
          '../../../../static/img/doctor/WechatIMG1644.jpeg',
          '../../../../static/img/doctor/WechatIMG1645.jpeg',
          '../../../../static/img/doctor/WechatIMG1646.jpeg',
          '../../../../static/img/doctor/WechatIMG1647.jpeg',
          '../../../../static/img/doctor/WechatIMG1648.jpeg',
          '../../../../static/img/doctor/WechatIMG1649.jpeg'
        ],
        middleApps: [{
            icon: 'discovery_app_icon4.png',
            title: '积分商城',
            'text': '绝不让每一个积分落空'
          },
          {
            icon: 'discovery_app_icon2.png',
            title: '融金公益',
            'text': '时间有爱，融金有益'
          },
          {
            icon: 'discovery_app_icon3.png',
            title: '红包广场',
            'text': '福利大派送，一起来抢钱'
          },
          {
            icon: 'discovery_app_icon1.png',
            title: '任务大厅',
            'text': 'VIP进阶之路'
          },
          {
            icon: 'discovery_app_icon5.png',
            title: '理财小公举',
            'text': '算一算我的第一桶金'
          },
        ],
      };
    },
    methods: {
      onCommuClick() {
        this._loginOr(() => {
          this._routePush('ForumPage');
        })
      }
    },
  }

</script>

<style scoped lang="scss">
  .commu-all {
    background-size: 100% 100%;
    padding: 6px 16px 20px 16px;

    .commu-mid {
      width: 100%;
      padding: 10px;
      text-align: left;

      .commu-title {
        font-size: 16px;
        margin-top: 14px;
      }

      .commu-txt {
        font-size: 14px;
        margin-top: 10px;
      }
    }

    .commu-btn {
      margin-top: 10px;
      width: 70%;
      font-size: 16px;
      height: 36px;
      line-height: 30px;
    }

    .commu-top {
      display: flex;
      justify-content: space-between;
      color: #FE7846;

      .commu-right {
        font-size: 14px;
        border-radius: 20px;
        padding: 0 6px;
        border: 1px solid #FE7846;
      }
    }
  }

  .banner-img {
    width: 100%;
    height: 35vw;
  }

  .line2-all {
    margin-bottom: 20px;

    .line2-item {
      display: flex;
      border: 1px solid #f7f7f7;
      align-items: center;
      padding: 10px;

      .line2-icon {
        width: 60px;
        height: 60px;
      }

      .line2-title {
        font-size: 14px;
      }

      .line2-text {
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }

  .img-responsive img {
    width: 100%;
    height: inherit;
  }

</style>
