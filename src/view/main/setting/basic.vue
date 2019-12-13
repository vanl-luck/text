<template>

  <div class="pages-tables grad1" id="pages-tables">
<div class="grad1">

    <van-nav-bar left-arrow @click-left="_routerBack" title="我的会员" :z-index="10"></van-nav-bar>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

      <van-search v-model="name" placeholder="请输入搜索会员名" show-action shape="round" @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>

      <div v-for="(item,index) in yList" 　v-if="yList.length!=0">

        <van-card title="　" thumb="https://img.yzcdn.cn/vant/cat.jpeg">
          <div slot="tags">
            <div>用户名：{{item.userName}} <span style="color:red">({{item.memberName}})</span> </div>
            <div>加入时间：{{item.registrationTime}} </div>
            <div>手机号：{{item.phone}} </div>
            <div>消费额：{{item.sumAmount}} </div>
          </div>
        </van-card>
      </div>
      <div v-else>
        <span class="table__empty-text">
          <p style="color: #909399;">暂无数据</p>
        </span>
      </div>
    </van-pull-refresh>
  </div>

</div>
</template>
<script>
  import {
    createIScroller,
    refreshScroller
  } from "./iscrollTable";
  export default {
    data() {
      return {
        loading: false,
        finished: false,
        isLoading: false,
        name: '',
        maxHeight: '100%',
        scroll: {
          scroller: null
        },
        xList: [
          [{
              field_name: "statis_date",
              name: "名称(消费)",
              colspan: 1, //指定单元格 横向 跨越的 列数
              rowspan: 1, //指定单元格 纵向 跨越的 行数
            },
            {
              field_name: "custom_field",
              name: "业务",
              colspan: 1,
              rowspan: 1,
            },
            {
              field_name: "custom_field",
              name: "时间",
              colspan: 1,
              rowspan: 1,
            },

          ]

        ],
        xField: ["userName", 'growth', "registrationTime", ],
        yList: [

        ],
        page: 1,
        size: 100
      }
    },
    mounted() {
      this.maxHeight = window.screen.height
      // this.scroll.scroller = createIScroller(".meal-table");
      this.tableOut()
    },
    methods: {
      onRefresh() {
        this.name=''
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.tableOut()
        }, 500);
      },
      onSearch() {
        this.tableOut(this.name)
      },
      // tableSe(){
      //   if (res.data.code === 200) {
      //     const rows = res.data.data.rows
      //     if (rows == null || rows.length === 0) {
      //       // 加载结束
      //       _self.upFinished = true
      //       return
      //     }
      //     if (rows.length < this.pageSize) {
      //       // 最后一页不足10条的情况
      //       _self.upFinished = true
      //     }
      //     // 处理数据
      //     if (_self.pageIndex === 1) {
      //       _self.dtWinNumberInfos = rows
      //     } else {
      //       _self.dtWinNumberInfos = _self.dtWinNumberInfos.concat(rows)
      //     }
      //   }
  
      // },
      tableOut(value) {

        let param
        if (!value) {
          param = {
            userId: JSON.parse(localStorage.getItem('user')).id,
            page: this.page,
            size: this.size,
          }
        } else {
          param = {
            id: JSON.parse(localStorage.getItem('user')).id,
            userName: this.name,
            page: this.page,
            size: this.size,
          }
        }
        let url = value ? 'api/user/search' : 'api/user/queryMember'
        this.$http.post(url, param).then(res => {
          if (res.data.code == 200) {

            this.yList = value ? res.data.data : res.data.data.list

            console.log(this.yList);
            // this.yList.map(item => {
            //   if (item.growth == 0) {
            //     item.growth = '会员'
            //   }
            //   if (item.growth == 1) {
            //     item.growth = '美代'
            //   }
            //   if (item.growth == 2) {
            //     item.growth = '美商'
            //   }
            // })

          }
        })
      }
    }
  }

</script>
<style lang="less" scoped>
  .pages-tables {
    -webkit-overflow-scrolling: touch; // ios滑动顺畅
    position: relative;
  }

  .rolling-table {
    height: 100%;
    font-size: 0.28rem;
    color: #86939a;
    background-color: #fff;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    position: relative;
    top: 0;
    overflow: hidden;
  }

  .rows {
    position: relative;
    z-index: 3;
  }

  .cross {
    position: relative;
    z-index: 5;
  }

  table td {
    border: 0px solid #000;
    font-size: 0.32rem;
    background: #fff;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .table {
    //   border-collapse: collapse; //去掉重复的border
    color: #86939e;
    font-size: 0.32rem;
    border: 0px solid #000;
    min-height: 100%;
    text-align: center;

    td {
      border-bottom: 0.02rem solid #eee;
      white-space: nowrap;
      height: 1rem;
      line-height: 2rem;
      width: 100rem;
      // padding: 0 0.2rem;
    }

    th {
      color: #43484d;
      white-space: nowrap;
      height: 1rem;
      line-height: 1rem;
      padding: 0rem 0.3rem;
      background-color: #f3f4f6;
      font-weight: normal;
      padding-bottom: 0;
      padding-top: 0;
      // border: 0.02rem solid red;
    }
  }

  tr {
    position: relative;
    background-color: #fff;

    &:nth-of-type(odd) {
      td {
        // background-color: pink;
      }
    }
  }

  .table__empty-text {
    line-height: 20;
    text-align: center;
  }

</style>
