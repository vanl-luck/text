<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="融金公告" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con-16">
      <div v-for="(it, idx) in messageData" :key="idx" class="msg-item click-box" @click="onClickMessage(it)">
        <div class="msg-title">{{it.title}}</div>
        <div class="msg-sub">
          <div class="msg-flag">{{it.flag}}</div>
          <div class="msg-date light-txt">{{it.date}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "message-page",
    data() {
      return {
        messageData: [
          {title: '新增 Grid、GridItem 组件', flag: '平台公告', date: '2019-05-02'},
          {title: '修复 Collapse 在 safari 浏览器上动画可能闪烁的问题', flag: '平台公告', date: '2019-05-02'},
          {title: 'CouponList: 新增 enabled-title、disabled-title 属性', flag: '平台公告', date: '2019-03-02'},
          {title: '新增 Grid、GridItem 组件', flag: '平台公告', date: '2019-05-02'},
          {title: '修复 Collapse 在 safari 浏览器上动画可能闪烁的问题', flag: '平台公告', date: '2019-05-02'},
          {title: 'CouponList: 新增 enabled-title、disabled-title 属性', flag: '平台公告', date: '2019-03-02'},
        ],
      };
    },
    methods: {
      onClickMessage(item) {
        this._routePush('MessageDetail');
      }
    },
  }
</script>

<style scoped lang="scss">
  .msg-item {
    margin-bottom: 12px;
    padding: 12px;
    .msg-title {
      font-size: 14px;
      color: #666666;
    }
    .msg-sub {
      display: flex;
      align-items: center;
      margin-top: 10px;
      justify-content: space-between;
      .msg-date {
        font-size: 12px;
      }
      .msg-flag {
        font-size: 14px;
        border-radius: 20px;
        border: solid 1px #f56723;
        color: #f56723;
        padding: 1px 8px;
      }
    }
  }
</style>
