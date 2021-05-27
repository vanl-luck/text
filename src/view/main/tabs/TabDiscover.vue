<template>
  <div>
    <!-- <van-nav-bar title="甄美纪医疗美容连锁机构" fixed :z-index="10"></van-nav-bar> -->

    <div>
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
            <div class="commu-title">花果山医美流量颜究社</div>
            <div class="light-txt commu-txt">
              花果山医美流量颜究社聚合医美生态参与者，以赋能和利他为宗旨，
              重构医美新消费生态结构，优化医美专属版图的全域营销体系，加
              速推动医疗机构场景营销革命，改善医美生态事业人创业现状，同
              时弘扬国潮东方美学理念，真正的让消费者受益，让医美行业收获
              更多正能量评价。
              作为中国新一代“轻成本、快裂变、新模式、快变现”的医美新消
              费社区，花果山医美流量颜究社聚合优质机构与品牌，致力于为医
              美减负、为变美减压，是国内最懂你心的医美新消费社区。

            </div>
          </div>
          <!-- <van-button type="danger" round class="commu-btn" @click="onCommuClick">进入社区</van-button> -->
        </div>
      </div>
      <!--下部应用入口-->
      <!-- <div>
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
          :options="playerOptions"></video-player>
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
          :options="playerOptions1"></video-player>
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
          :options="playerOptions2"></video-player>
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
          :options="playerOptions3"></video-player>
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
          :options="playerOptions4"></video-player>
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
          :options="playerOptions5"></video-player>
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
          :options="playerOptions7"></video-player>
      </div> -->
      <van-grid :border="false" :column-num="1" :gutter="10">
        <van-grid-item>
          <div v-for="(img,index) in manageImg" :key="index">
            <img class="laze-img" :src="img">
            <!-- <img :src="img" alt=""> -->
          </div>

        </van-grid-item>
      </van-grid>
      <!-- <van-grid :border="false" :column-num="1" :gutter="10">
        <van-grid-item>
          <img class="laze-img" v-for="img in physicianIme" v-lazy="img">
        </van-grid-item>
      </van-grid> -->


      <!-- <van-grid :border="false" :column-num="1" :gutter="10">
        <van-grid-item>
          <img class="laze-img" v-lazy="hospital">
        </van-grid-item>

      </van-grid> -->


      <!-- <van-grid :border="false" :column-num="1" :gutter="10">
        <van-grid-item>
          <img class="laze-img" v-for="img in advantageImg" v-lazy="img">
        </van-grid-item>
      </van-grid> -->

    </div>
  </div>
</template>

<script>
  import {
    videoPlayer
  } from 'vue-video-player'
  import 'video.js/dist/video-js.css'

  export default {
    components: {
      videoPlayer
    },
    name: "tab-discover",
    data() {
      return {
        // hospital: '../../../../static/img/chain/图片9.png',
        manageImg: [
          'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%871.jpg',
          'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%872.jpg',
          'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%873.jpg',
          'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%874.jpg',
          'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%875.jpg',
          'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%876.jpg',
          'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%877.jpg',
          'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%878.jpg',
          'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%879.jpg',
          'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%8710.jpg',
          'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%8711.jpg',
                    'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%8712.jpg',
                              'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%8713.jpg',
                                        'http://amez5.oss-cn-shenzhen.aliyuncs.com/z/%E5%9B%BE%E7%89%8714.jpg',


        ],
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

        vedioData: [{
            src: "../../../../static/video/2.mp4",
            type: 'video/mp4' //播放hls流
          },
          {
            src: "../../../../static/video/3.mp4",
            type: 'video/mp4' //播放hls流
          },
          {
            src: "../../../../static/video/4.mp4",
            type: 'video/mp4' //播放hls流
          },
          {
            src: "../../../../static/video/5.mp4",
            type: 'video/mp4' //播放hls流
          },
          {
            src: "../../../../static/video/6.mp4",
            type: 'video/mp4' //播放hls流
          },
        ]

      };
    },
    methods: {
      onCommuClick() {
        this._loginOr(() => {
          this._routePush('ForumPage');
        })
      }
    },
    mounted() {
      console.log(...this.vedioData);
    }

  }

</script>

<style scoped lang="scss">
  /deep/ .video-js .vjs-big-play-button {
    left: 50%;
    top: 50%;
    margin-left: -45px;
    margin-top: -25px;

  }

  .video-player {
    margin: 0px 20px;
  }

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

  .laze-img {
    margin-top: 10px;
    width: 100%;
    // height: inherit;
  }

</style>
