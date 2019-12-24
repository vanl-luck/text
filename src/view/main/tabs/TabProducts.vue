<template>
  <div class="bord" style="background:#f0f0f0;">
    <!-- <van-notice-bar
      text="安美汇整合了由上海、广州、深圳、福建、贵阳、惠州、广西、四川、在内百余家医院共同开发建设，迎合当下市场潮流，顺应时代趋势，运用了当下最为先进的商业模式和为全产业赋能的美业生态消费体系，为全产业上下游提供更高效，良性的经营战略，重塑行业新生态，制定行业新标准；快速成为中国美业生态链第一平台；"
      left-icon="volume-o" /> -->
    <!-- <div class="imgBackground" style="">
        <div >招商剖析</div>
      </div> -->
    <div class="img-responsive">
      <!-- <img src="../../../../static/img/zhaoshang/WechatIMG1730.jpeg" alt=""> -->
    </div>
    <div>
      <div v-for="(item,index) in vip" :key="index" style="color:#69696a" class="borderCard">
        <!-- <van-card > -->
        <div class="tags">
          <img :src="item" alt="" style="width: 185px;height:220px">
        </div>
        <div style="text-align: center;width:100%;color:#ababab">
          <div style="height:180px;" v-if="index==0">
                   <p>招商奖励20%</p>
              <p>5盒熬夜医美面膜</p>
          </div>
            <div style="height:180px;" v-if="index==1">
                 <p>招商直推30% 8%</p>
              <p>赠送vip名额1位</p>
              <p>时尚芭莎独家赞助口红组合</p>
                  </div>
            <div style="height:180px;" v-if="index==2">
            <p>项目奖励30% 3%</p>
              <p>20盒熬夜医美面膜</p>
          </div>
          <div>

                    <van-button type="primary" style="width: 75px;" size="mini" @click="pay(item.id)">点击加入</van-button>
          </div>
        </div>

        <!-- thumb="../../../../static/img/vip/vip.jpeg"  -->
        <!-- :price="item.memberMoney+'.00'" desc="　" :title="item.memberName+'('+text[index]+')'" :origin-price='price[index]' -->

        <!-- <div slot="tags" v-if="index==0" style="display:flex;">
            <div style="flex:1">
              <p>招商奖励20%</p>
              <p>5盒熬夜医美面膜</p>
            </div>
            <div style="flex:1">
              <p>项目奖励20%</p>

            </div>
          </div>
          <div slot="tags" v-if="index==1" style="display:flex;">
            <div style="flex:1">
              <p>招商直推30% 8%</p>
              <p>赠送vip名额1位</p>
              <p>时尚芭莎独家赞助口红组合</p>

            </div>
            <div style="flex:1">
              <p>项目奖励30% 3%</p>
              <p>20盒熬夜医美面膜</p>
            </div>
          </div>
          <div slot="tags" v-if="index==2" style="display:flex">
            <div style="flex:1">
          <p> -->
        <!-- <div slot="footer">
            <van-button style="width: 75px;" size="mini" @click="pay(item.id)">点击加入</van-button>
          </div> -->
        <!-- </van-card> -->

      </div>

    </div>
    <!-- <div class="imgBackground" style="">
      </div> -->

    <!-- </span>

    <!-- <div class="top-fixed">
      <van-nav-bar :title="$t('tab_products')" fixed :z-index="10"></van-nav-bar>
      <div class="nav-con navbar-con">
        <van-tabs v-model="activeSort" class="sort-all" sticky @change="onTabChange" line-width="33%">
          <van-tab :title="it_so.title" v-for="(it_so, idx) in sortItems" :key="idx">
            <div class="prod-item click-box" v-for="(it_po,idx_p) in getProductList(idx)"
                 :key="idx_p" @click="onProductClick(it_po)">
              <van-row>
                <van-col span="12" class="prod-rate">
                  <div class="red-txt rate-txt"><span class="rate-big">{{it_po.rate}}</span>%+{{it_po.add}}%</div>
                  <div class="light-txt rate-ins">预期年化收益率</div>
                </van-col>
                <van-col span="12" class="prod-ins">
                  <div class="prod-title">{{it_po.name}}</div>
                  <div class="prod-tag">期限{{it_po.days}}天</div>
                </van-col>
              </van-row>
              <van-progress :percentage="it_po.percent" color="#ff6611" class="prod-progress" :show-pivot="false">
              </van-progress>
              <div class="pro-amount">
                <div>项目总额180万</div>
                <div>剩余可投<span class="red-txt">75万</span></div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div> -->
  </div>
</template>

<script>
  import wx from "weixin-js-sdk";
  export default {
    name: "tab-products",
    data() {
      return {
        text: ['客户门槛', '代言人门槛', '私董门槛'],
        imgPattern: ['../../../../static/img/zhaoshang/1.png', '../../../../static/img/zhaoshang/2.png',
          '../../../../static/img/zhaoshang/3.png', '../../../../static/img/zhaoshang/4.png',
          '../../../../static/img/zhaoshang/5.png', '../../../../static/img/zhaoshang/6.png'
        ],
        backgroundColor: ['background: linear-gradient(#f4f9f7, #c9ddd8);flex:1;color:aquamarine'

          , 'background: linear-gradient(#d9d9d9, #9e9e9e);flex:1;color: beige;',
          'background: linear-gradient(#f4ec2b, #ecd900,#d19400);flex:1;color: darkgray;'
        ],
        price: [2980.00, 20000.00, 40000.00],
        images: [
          '../../../../static/img/anmeihui/轮播1.png',
          '../../../../static/img/anmeihui/2.png'
        ],
        img: [
          '../../../../static/img/Snipaste_2019-12-10_17-43-06.png',
          '../../../../static/img/Snipaste_2019-12-10_17-46-26.png',
          '../../../../static/img/Snipaste_2019-12-10_17-49-25.png',
        ],
        activeSort: 0,
        sortItems: [{
            title: '推荐'
          },
          {
            title: '收益率'
          },
          {
            title: '期限'
          },
        ],
        allProducts: [],
        vip: ['../../../../static/img/vip/vip.jpeg', '../../../../static/img/vip/WechatIMG2143.jpeg',
          '../../../../static/img/vip/私懂.jpeg'
        ],

      };
    },
    computed: {
      getProductList() {
        let newList = this.allProducts.slice(0);
        return (index) => {
          if (index == 0) {
            return this.allProducts;
          } else if (index == 1) {
            return newList.sort((a, b) => {
              return a.rate - b.rate;
            });
          } else if (index == 2) {
            return newList.sort((a, b) => {
              return a.days - b.days;
            });
          }
        }
      }
    },
    created() {
      this.$http.post(`api/user/query`).then(res => {
        if (res.data.code == 200) {
          this.allProducts = res.data.data
          // this.allProducts.map((item,index)=>{
          //   item.img=vip[index]
          // })
        }
      }).catch(err => {
        this._dismissLoading();
        this._showToast('系统错误');
      });
      this.clearLoc()
    },
    methods: {
      clearLoc() {
        this.$http.get(
          `api/user/login?phone=${JSON.parse(localStorage.getItem('user')).phone}&password=${JSON.parse(localStorage.getItem('user')).password}`
        ).then(res => {
          localStorage.clear()
          localStorage.setItem('user', JSON.stringify(res.data.data))

        })
      },

      wexinPay(data, cb, errorCb) {


        //获取后台传入的数据
        let appId = data.appId;
        let timestamp = data.timeStamp;
        let nonceStr = data.nonceStr;
        let signature = data.signature;
        let packages = data.package;
        let paySign = data.paySign;
        let signType = data.signType;
        console.log('发起微信支付')
        //下面要发起微信支付了
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: appId, // 必填，公众号的唯一标识
          timestamp: timestamp, // 必填，生成签名的时间戳
          nonceStr: nonceStr, // 必填，生成签名的随机串
          signature: signature, // 必填，签名，见附录1
          jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(function () {
          wx.chooseWXPay({
            timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
            package: packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: paySign, // 支付签名
            success: function (res) {
              // 支付成功后的回调函数
              cb(res);
            },
            fail: function (res) {
              //失败回调函数
              errorCb(res);
            }
          });
        });
        wx.error(function (res) {
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
          /*alert("config信息验证失败");*/
        });
      },
      pay(value) {
        if (JSON.parse(localStorage.getItem('user')).payState == 1) {
          this._showToast('已缴费');
        } else {
          this.$router.push({
            name: 'test',
            query: value,
          });
        }
        console.log(value);
        // this.$router.push('test')



        //  const BASE_URL = 'http://192.168.0.108:7878/zkview/';


        // this.$http.get(`api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx4cf67da399a7cad0&secret=62e2bcacaffa86f92ce69f30a8ace141`).then(res=>{
        //   console.log(ers);
        // })

        // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect



        // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4cf67da399a7cad0&redirect_uri=http://localhost:8023/#/main/products&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';

        //                this.axios.post("user/recommend", data).then(res => {
        //   //成功状态下 
        //   if (res.data.status) {
        //    // 存储微信支付数据data
        //    let data = res.data.data;
        //    console.log("即将跳转微信支付");
        //    //函数为分装过得 (就是调用微信支付)
        //    http.wexinPay(
        //    {
        //     appId: data.appId,
        //     nonceStr: data.nonceStr,
        //     package: data.package,
        //     paySign: data.paySign,
        //     signType: data.signType,
        //     timeStamp: data.timeStamp
        //    },
        //    //成功回调函数
        //    res => {
        //     that.$router.push({ path: "/vip" });
        //    }
        //    );
        //   } 
        //   else {
        //    that.$message.error(res.data.message);
        //  }
        // });
        // return
        // var payParams = {
        //   // "appId": $wxData.appId,
        //   // "timeStamp": $wxData.timeStamp, //时间戳，自1970年以来的秒数
        //   // "nonceStr": $wxData.nonceStr, //随机串
        //   // "package": $wxData.package,
        //   // "signType": $wxData.signType, //微信签名方式：
        //   // "paySign": $wxData.paySign //微信签名
        // };
        // var req = localStorage.getItem("payParams");
        // if (!req) return;
        // else req = JSON.parse(req);
        // WeixinJSBridge.invoke(
        //   'getBrandWCPayRequest', req,
        //   function (res) {
        //     if (res.err_msg == "get_brand_wcpay_request:ok") {
        //       // alert("支付成功");
        //     } // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回 ok，但并不保证它绝对可靠。
        //     else {
        //       console.log(res.err_msg);

        //       //支付失败后的操作
        //       window.location.href = "pay.html?ticketPrice=" + $tickprice + "&actid=" + $actid + "&ticketId=" +
        //         $ticketId + "&sellerid=" + $sellerid;
        //     }
        //   }

        // );
        // if (typeof WeixinJSBridge == "undefined") {
        //   if (document.addEventListener) {
        //     document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        //   } else if (document.attachEvent) {
        //     document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        //     document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        //   }
        // } else {
        //   onBridgeReady();
        // }
      },

      onProductClick(item) {
        this._routePushQ('ProductDetail', {
          id: item.id
        });
      },
      onTabChange() {},
    },
  }

</script>

<style scoped lang="scss">
  .imgBackground {
    background: url('../../../../static/img/zhaoshang/WechatIMG1730.jpeg');
    margin-top: 5px;
    height: 80px;
    // div{
    //   line-height: 80px;
    //   text-align: center;
    //   color: #164273;
    //   font-size:30px;
    // }
  }

  .van-card__footer {
    text-align: right;
  }

  .borderCard {
    display: flex;
    border: 1px solid #d7e6e2;
    background: white;
    margin: 10px
  }

  .tags {
    margin: 0 5px;
    margin-top: 5px;
  }

  .product {
    background: -webkit-linear-gradient(#c9ddd8, #cadcd8);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#f4f9f7, #f4f9f7);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#c9ddd8, #f4f9f7);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(#c9ddd8, #f4f9f7);
    /* 标准的语法（必须放在最后） */
  }

  .van-card {
    margin: 5px;
    border: 1px solid #ccc;
    // background:linear-gradient(#55bd8c,#4fc281,#51c677,#60d285);
    box-shadow: 3px 3px 3px 0px #ccc;
  }

  .van-card__content {
    min-height: 50px;
    margin: 5px;

    .van-card__title {
      font-size: 20px;
      max-height: 32px;
      font-weight: 500;
      line-height: 20px;
    }
  }

  .backImg {
    // background:url('../../../../static/img/zhaoshang/WechatIMG1730.jpeg') 
  }

  .prod-item {
    padding: 12px;
    margin-top: 12px;

    .pro-amount {
      display: flex;
      justify-content: space-between;
      margin-top: 4px;
      font-size: 14px;
      color: #999999;
    }

    .prod-progress {
      margin-top: 20px;
      height: 6px;
    }

    .prod-rate {
      text-align: center;
      padding: 2px 10px;

      .rate-txt {
        font-size: 18px;

        .rate-big {
          font-size: 24px;
        }
      }

      .rate-ins {
        font-size: 14px;
        margin-top: 4px;
      }
    }

    .prod-ins {
      border-left: 1px solid #aaaaaa;
      padding: 2px 10px;

      .prod-title {
        font-size: 14px;
      }

      .prod-tag {
        display: table;
        font-size: 12px;
        margin-top: 16px;
        border: 1px solid #ff6c6c;
        border-radius: 20px;
        color: #ff6c6c;
        padding: 0 6px;
      }
    }
  }

  .img-responsive img {
    width: 100%;
    height: inherit;
  }

  .navbar-con {
    .sort-all {
      padding-top: 0;
    }
  }

</style>
