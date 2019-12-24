<template>
  <div>
    <van-nav-bar title="甄美纪医疗美容连锁机构" fixed :z-index="10"></van-nav-bar>

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
            <div class="commu-title">甄美纪·安美汇</div>
            <div class="light-txt commu-txt">
              <p>1: 资本背景及保障</p>
              <p>
                安美汇，是全国连锁医美机构“甄美纪”的旗下品牌，安美汇通过“平台赋能、品牌增信、全网合作、品质运营”模式，与中信集团旗下子公司签约独家合作，配套8000万固定资产包括60余套高材生人才公寓；同时，安美汇与中国平安保险达成战略合作，并获得全国唯一指定授权企业，授权安美汇为“医疗美容保险投保受理.鉴定.理赔”的中国唯一标准执行企业，其联合了由北京、上海、广州、深圳、贵阳、惠州、桂林、成都等在内103家甄美纪连锁机构共同开发建设。
              </p>
              <p>2: 资金安全</p>
              <p> 安美汇与广东发展银行总行达成战略合作，委托广发银行为线上产业链上下游唯一支付结算机构和指定资金托管业务机构；并为用户提供信用卡办理业务，联合发卡，商业担保授信等。</p>

              <p>3: 团队优势</p>
              <p>甄美纪迎合当下市场潮流，顺应时代趋势，运用了当下最为先进的安美汇商业模式和为全产业赋能的美业生态消费体系，为全产业上下游提供更高效，良性的经营战略，重塑行业新生态，制定行业新标准。</p>
              <p>4: 独特监控</p>
              <p>甄美纪采用【0客诉极致化管控体系】严格把关出品质量，规范手术流程，以“规范行业标准，保障求美者权益”为使命，为行业打造一条健康的医美生态链。</p>
            </div>
          </div>
          <!-- <van-button type="danger" round class="commu-btn" @click="onCommuClick">进入社区</van-button> -->
        </div>
      </div>
      <!--下部应用入口-->
      <div>
      <video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions"
></video-player>
  <video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions1"
></video-player>
  <video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions2"
></video-player>
  <video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions3"
></video-player>
  <video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions4"
></video-player>
  <video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions5"
></video-player>
  <!-- <video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions6"
></video-player> -->
  <video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions7"
></video-player>
      </div>
      <div class="commu-left" style="color: #FE7846;text-align:left;margin:5px;margin-left:25px;">连锁经营</div>
      <van-grid :border="false" :column-num="1" :gutter="10">
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
      <div class="commu-left" style="color: #FE7846;text-align:left;margin:5px;margin-left:25px;">医师团队</div>
      <van-grid :border="false" :column-num="1" :gutter="10">
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片6.png" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="../../../../static/img/chain/图片7.png" />
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
// videojs('my-video', {
//     bigPlayButton: false,
//     textTrackDisplay: false,
//     posterImage: true,
//     errorDisplay: false,
//     controlBar: true
// }, function () {
//     this.play()
// })

import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
  export default {
      components: {
    videoPlayer
  },
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
        playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources:[
       {
          
          src:
            "../../../../static/video/1.mp4",
          type: 'video/mp4' //播放hls流
        },
       
      ] ,
        poster: "../../../../static/video/1.png", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
      playerOptions1 : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。  
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources:[
       {
          
          src:
            "../../../../static/video/2.mp4",
          type: 'video/mp4' //播放hls流
        },
       
      ] ,
        poster: "../../../../static/video/2.png", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
      playerOptions2 : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources:[
       {
          
          src:
            "../../../../static/video/3.mp4",
          type: 'video/mp4' //播放hls流
        },
       
      ] ,
        poster: "../../../../static/video/3.png", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
      playerOptions3 : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources:[
       {
          
          src:
            "../../../../static/video/4.mp4",
          type: 'video/mp4' //播放hls流
        },
       
      ] ,
         poster: "../../../../static/video/4.png", //你的封面地址, //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
      playerOptions4 : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources:[
       {
          
          src:
            "../../../../static/video/5.mp4",
          type: 'video/mp4' //播放hls流
        },
       
      ] ,
         poster: "../../../../static/video/5.png", //你的封面地址, //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
      playerOptions5 : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources:[
       {
          
          src:
            "../../../../static/video/6.mp4",
          type: 'video/mp4' //播放hls流
        },
       
      ] ,
        poster: "../../../../static/video/6.png", //你的封面地址, //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
      playerOptions6 : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources:[
       {
          
          src:
            "../../../../static/video/7.mp4",
          type: 'video/mp4' //播放hls流
        },
       
      ] ,
         poster: "../../../../static/video/7.png", //你的封面地址 //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
      playerOptions7: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources:[
       {
          
          src:
            "../../../../static/video/8.mp4",
          type: 'video/mp4' //播放hls流
        },
       
      ] ,
         poster: "../../../../static/video/8.png", //你的封面地址 //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
         vedioData: [
         {
          src:
            "../../../../static/video/2.mp4",
          type: 'video/mp4' //播放hls流
        },
              {
          src:
            "../../../../static/video/3.mp4",
          type: 'video/mp4' //播放hls流
        },
              {
          src:
            "../../../../static/video/4.mp4",
          type: 'video/mp4' //播放hls流
        },
              {
          src:
            "../../../../static/video/5.mp4",
          type: 'video/mp4' //播放hls流
        },
              {
          src:
            "../../../../static/video/6.mp4",
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
    mounted(){
      console.log( ...this.vedioData);
    }
    
  }

</script>

<style scoped lang="scss">
/deep/ .video-js .vjs-big-play-button{
  left: 50%;
  top: 50%;
  margin-left:-45px;
  margin-top:-25px;
  
}
.video-player{
  margin:0px 20px;
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

</style>
