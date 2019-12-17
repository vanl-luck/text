<template>

<div>
      <van-nav-bar left-arrow @click-left="_routerBack" title="提现明细" :z-index="10"></van-nav-bar>
      <van-cell v-for="(item,index) in allData" :key="item.id">
      <template slot-scope="scpoed">
        <div class="bord" style="display:flex;font-size:14px;">

          <div style="flex:1;margin:5px;">
            <div>
              提现金额:{{item.amount}}.00
            </div>
            <div>
              支付宝:{{item.alipayUser}}
            </div>
            <div style="text-align:left">
              状态: {{item.state}}
            </div>
          </div>
          <div style="flex:1;margin:5px;">
            <div>
              时间:{{item.addTime}}
            </div>
          </div>
        </div>
      </template>
    </van-cell>
</div>
  <!-- <div class="pages-tables " id="pages-tables">

    <van-nav-bar left-arrow @click-left="_routerBack" title="提现明细" :z-index="10"></van-nav-bar>
    <div v-if="yList.length!=0">

      <div class="waterMask" id="watermark"></div>
      <div class="rolling-table meal-table" ref="tableBox">
        <table class="table" id="table" cellpadding="0" cellspacing="0" ref="rollingTable">
          <tr v-for="(x,i) in xList" :key="i">
            <th class="rows " :class="{'cross': index == 0 && i == 0}" v-for="(l,index) in x" :key="index"
              :colspan="l.colspan" :rowspan="l.rowspan">{{l.name}}</th>
          </tr>
          <tr v-for="(l,i) in yList" :key="i + 'a'">
            <template v-for="(x, xKey) in xField">
              <td v-for="(ll,yKey) in l" :key="yKey" v-if="x === yKey" :class="{'cols': yKey == xField[0]}">
                {{ yList[i][yKey]}}
              </td>
            </template>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
    <div v-else> 
     <span class="table__empty-text"><p style="color: #909399;">暂无数据</p></span>
    </div>
  </div> -->
</template>
<script>
  import {
    createIScroller,
    refreshScroller
  } from "../main/setting/iscrollTable";
  export default {
    data() {
      return {
        name: '',
        maxHeight: '100%',
        scroll: {
          scroller: null
        },
        xList: [
          [{
              field_name: "statis_date",
              name: "提现金额",
              colspan: 1, //指定单元格 横向 跨越的 列数
              rowspan: 1, //指定单元格 纵向 跨越的 行数
            },
            {
              field_name: "custom_field",
              name: "支付宝",
              colspan: 1,
              rowspan: 1,
            },
            {
              field_name: "custom_field",
              name: "状态",
              colspan: 1,
              rowspan: 1,
            },

          ]

        ],
        xField: ["amount", 'alipayUser', "state", ],
        allData: [

        ],
        page: 1,
        size: 100
      }
    },
    mounted() {
      // this.maxHeight = window.screen.height
      // this.scroll.scroller = createIScroller(".meal-table");n
      this.tableOut()
    },
    methods: {
      onSearch() {
        this.tableOut(this.name)
      },
      tableOut(value) {

        let param = {
          userId: JSON.parse(localStorage.getItem('user')).id,
          page: this.page,
          size: this.size,
        }
        // if (!value) {
        //   param = {
        //     userId: JSON.parse(localStorage.getItem('user')).id,
        //     page: this.page,
        //     size: this.size,
        //   }
        // } else {
        //   param = {
        //     id: JSON.parse(localStorage.getItem('user')).id,
        //     userName: this.name,
        //     page: this.page,
        //     size: this.size,
        //   }
        // }
        // let url = value ? 'api/user/search' : 'api/user/queryMember'
        this.$http.post('api/lyRecord/selectALL', param).then(res => {
          if (res.data.code == 200) {

            this.allData = value ? res.data.data : res.data.data.list

            this.allData.map(item => {
              item.addTime= item.addTime.slice(0,10)
              if (item.state == 0) {
                item.state = '未处理'
              }
              if (item.state == 1) {
                item.state = '以处理'
              }
          
            })

          }
        })
      }
    }
  }

</script>
<style lang="less" scoped>
.van-cell__value{
    // border: 1px solid #e4e4e4;
  box-shadow: 3px 3px 3px 0px #ccc;
}
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
