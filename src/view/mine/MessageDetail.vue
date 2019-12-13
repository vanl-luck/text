<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="公告详情" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con-16">
      <div class="msg-item">
        <div class="msg-title">修复 Collapse 在 safari 浏览器上动画可能闪烁的问题</div>
        <div class="msg-sub">
          <div class="msg-flag">平台公告</div>
          <div class="msg-date light-txt">2019-05-02</div>
        </div>
        <div class="msg-content light-txt">
          位置信息的通知对用户在相关位置需要使用的时候是非常有用的。如果app可以把用户的信息集中在一起，
          就能知道用户的喜好，并给出相关的推送。例如一款电商app，人们更希望可以创建购物和愿望清单。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "message-detail",
  }
</script>

<style scoped lang="scss">
  .msg-item {
    background-color: white;
    padding: 12px;
    .msg-title {
      font-size: 14px;
      color: #666666;
    }
    .msg-sub {
      display: flex;
      align-items: center;
      margin: 10px 0;
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
    .msg-content {
      border-top: solid 1px #f7f7f7;
      padding-top: 10px;
      font-size: 12px;
    }
  }
</style>
