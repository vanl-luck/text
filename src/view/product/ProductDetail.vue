<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="C计划详情" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con-16">
      <!--头部信息-->
      <div class="main-con">
        <div class="van-hairline--bottom prod-name">
          <span class="name-ico">C</span>中小企业-E车贷ECO JKI45002 1654241
        </div>
        <div class="align-center rate-con">
          <div class="red-txt"><span class="big-rate">4.98</span>%</div>
          <div class="rate-tit">预期年化收益</div>
          <div class="period-txt top-mar-16">期限12个月</div>
        </div>
        <div>
          <div class="pro-per">投资进度<span class="red-txt">64.5%</span></div>
          <van-progress :percentage="64.5" color="#ff6611" class="prod-progress" :show-pivot="false">
          </van-progress>
          <div class="pro-amount">
            <div>项目总额180万</div>
            <div>剩余可投<span class="red-txt">75万</span></div>
          </div>
        </div>
      </div>
      <!--中部信息-->
      <div class="top-mar-16 detail-con">
        <div class="top-title van-hairline--bottom">
          <div>C计划简介</div>
          <div class="period-txt">优享计划</div>
        </div>
        <div class="top-intro">优选分散投资，确保稳定收益</div>
        <van-row>
          <van-col span="6" class="row-item" v-for="(it,idx) in statusList" :key="idx">
            <div class="align-center">
              <van-image :src="'static/img/product/'+it.img1" class="status-img"></van-image>
              <div class="status-txt">{{it.text}}</div>
            </div>
            <van-image :src="'static/img/product/'+it.img2" v-if="idx!=3" class="arrow-img"></van-image>
          </van-col>
        </van-row>
      </div>
      <!--底部选项-->
      <div class="top-mar-16">
        <van-cell-group>
          <van-cell title="计划详情" is-link size="large"></van-cell>
          <van-cell title="购买记录" is-link size="large"></van-cell>
          <van-cell title="常见问题" is-link size="large"></van-cell>
        </van-cell-group>
      </div>
      <div class="align-center bottom-txt">个人资产由银行托管保障安全</div>
      <!--底部按钮-->
      <van-button type="danger" class="bottom-btn">
        立即投标 <span class="btn-left">(剩余可投70万元)</span>
      </van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product-detail",
    data() {
      return {
        statusList: [
          {img1: 'prod_status2.png', img2: 'prod_arrow1.png', text: '启动计划'},
          {img1: 'prod_status3.png', img2: 'prod_arrow1.png', text: '启动计划'},
          {img1: 'prod_status4.png', img2: 'prod_arrow1.png', text: '启动计划'},
          {img1: 'prod_status1.png', img2: 'prod_arrow1.png', text: '启动计划'},
        ],
      };
    },
  }
</script>

<style scoped lang="scss">
  .bottom-txt {
    padding: 30px 0 64px 0;
    font-size: 14px;
    background-color: #f7f7f7;
    color: #999999;
  }

  .detail-con {
    background-color: white;
    padding: 10px;
    .top-intro {
      margin-top: 16px;
      color: #999999;
    }
    .row-item {
      display: flex;
      align-items: center;
      padding: 16px 0;
      .status-img {
        width: 10vw;
        height: 10vw;
      }
      .arrow-img {
        width: 6vw;
        height: 6vw;
      }
      .status-txt {
        font-size: 12px;
        color: #999999;
      }
    }
    .top-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-bottom: 10px;
      color: #999999;
    }
  }

  .bottom-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-radius: 0;
    font-size: 20px;
    height: 46px;
    .btn-left {
      font-size: 14px;
    }
  }

  .period-txt {
    font-size: 14px;
    color: #ff6611;
    display: inline-block;
    padding: 1px 8px;
    border: 1px solid #ff6611;
    border-radius: 20px;
  }

  .rate-con {
    padding: 20px 0;
    .rate-tit {
      color: #999999;
      font-size: 14px;
      margin-top: 8px;
    }
    .big-rate {
      font-size: 34px;
    }
  }

  .pro-per {
    margin: 4px 0;
    font-size: 14px;
    color: #999999;
  }

  .pro-amount {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    font-size: 14px;
    color: #999999;
  }

  .prod-progress {
    height: 6px;
  }

  .main-con {
    background-color: white;
    padding: 10px;
    .prod-name {
      padding: 4px 0;
      font-size: 14px;
      color: #666666;
      .name-ico {
        background-color: #ff6c6c;
        height: 20px;
        padding: 0 4px;
        margin-right: 4px;
        border-radius: 2px;
        color: white;
        line-height: 20px;
      }
    }
  }
</style>
