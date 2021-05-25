<template>
  <div class="bord" style="background:#f0f0f0;">
    <!-- <van-notice-bar
      text="安美汇整合了由上海、广州、深圳、福建、贵阳、惠州、广西、四川、在内百余家医院共同开发建设，迎合当下市场潮流，顺应时代趋势，运用了当下最为先进的商业模式和为全产业赋能的美业生态消费体系，为全产业上下游提供更高效，良性的经营战略，重塑行业新生态，制定行业新标准；快速成为中国美业生态链第一平台；"
      left-icon="volume-o" /> -->
    <!-- <div class="imgBackground" style="">
        <div >招商剖析</div>
      </div> -->
    <div class="img-responsive">
    </div>
    <div>
      <div v-for="(item,index) in zsImg" :key="index" style="color:#69696a" class="borderCard">
    
        <div class="tags" v-if="item.state==0">
          <img :src="item.img" alt="" style="width: 185px;height:220px">
        </div>
        <div v-if="item.state==0" style="text-align: center;width:100%;color:#ababab">
          <div style="height:100px;" v-if="index==0">
          </div>
          <div style="height:100px;" v-if="index==1">
          </div>
          <div style="height:100px;" v-if="index==2">
          </div>
          <div>

            <van-button  type="primary" style="width: 125px;" @click="getList(item.id)">点击加入</van-button>
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
        vip: [

          {
            img: '../../../../static/img/vip/980.png',
            id: 3
          },
          {
            img: '../../../../static/img/vip/10000.png',
            id: 4
          },
          {
            img: '../../../../static/img/vip/30000.png',
            id: 5
          },

        ],
        zsImg:[],
        payInfo: {}
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

      this.getMemberInfo()
      this.clearLoc()
    },
    methods: {
      getMemberInfo() {
        const url = '/api/user/query'
        const data = {
          userId: JSON.parse(localStorage.getItem('user')).id
        }
        this.$http.post(url, data).then(res => {
          if(res.data.code==200){
            res.data.data.forEach((item,index) => {
              item.img=this.vip[index].img
              return item
            });
              this.zsImg=res.data.data
              console.log(this.zsImg);
          }
        })
      },
      getList(index) {
        let phone = JSON.parse(localStorage.getItem("user")).phone
        this.$http.get(`api/wx/pay/app?type=1&phone=${phone}&memberId=${index}`).then(res => {

          this.payInfo = res.data
          this.wexinPay(res.data.data)
        }).catch(err => {
          this._showToast('系统错误');
        });
      },
      clearLoc() {
        this.$http.get(
          `api/user/login?phone=${JSON.parse(localStorage.getItem('user')).phone}&password=${JSON.parse(localStorage.getItem('user')).password}`
        ).then(res => {
          localStorage.clear()
          localStorage.setItem('user', JSON.stringify(res.data.data))

        })
      },

      async wexinPay(index) {
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId": index.appId, //公众号名称，由商户传入     
            "timeStamp": index.timeStamp, //时间戳，自1970年以来的秒数     
            "nonceStr": index.nonceStr, //随机串     
            "package": index.package,
            "signType": index.signType, //微信签名方式：     
            "paySign": index.sign //微信签名 
          },
          function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              // 使用以上方式判断前端返回,微信团队郑重提示：
              //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            }
          });

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

  .backImg {}

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
