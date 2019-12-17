<template>
  <div>
    <!-- <div><van-button type="default">默认按钮</van-button><van-button type="default">默认按钮</van-button><van-button type="default">默认按钮</van-button></div> -->
    <van-nav-bar left-arrow @click-left="_routerBack" title="消费管理" fixed :z-index="10"></van-nav-bar>
  
<!-- <div style="margin-top:50px;"></div> -->
      <!-- <div  v-for="(item,index) in allData" 　v-if="allData.length!=0">

        <van-card title="　" >
          <div slot="tags">
            <div><span>客人:{{user}}</span>     <span>项目:{{item.project}}</span> </div>
            <div> <span>总价:{{item.amount}}.00</span> <span> 结算: <span v-if="item.state==1">{{item.amount}}.00</span> <span v-else>0.00</span></span> </div>
            <div> <span>  补贴: <span v-if="item.state==1">已反</span> <span v-else>没反</span></span> <span>消费时间:{{item.consumptionTime}}</span> </div>
            <div> <span> 录入时间:{{item.addTime}}</span>  </div>
          </div>
      
           <div slot="footer">
    <van-button @click="det(item.id)" size="small" type="danger">删除</van-button>
  </div>
        </van-card>
      </div>
      <div v-else>
        <span class="table__empty-text">
          <p style="color: #909399;">暂无数据</p>
        </span>
      </div>
    </van-pull-refresh> -->
        <van-cell v-for="(item,index) in allData" :key="item.id">
      <template slot-scope="scpoed">
  <div class="bord" :style="index==0?oneStyle:twoStyle">
        <div style="display:flex;    margin: 5px;">
          <div class="cards">
            客人:{{user}}
          </div>
          <div class="cards">
            项目:{{item.project}}
          </div>
        </div>
        <div style="display:flex;    margin: 5px;">
          <div class="cards">
            总价:{{item.amount}}.00
          </div>
          <div class="cards">
            结算: <span v-if="item.state==1">{{item.amount}}.00</span> <span v-else>0.00</span>
          </div>
        </div>
        <div style="display:flex;    margin: 5px;">
          <div class="cards">
            补贴: <span v-if="item.state==1">已反</span> <span v-else>没反</span>
          </div>
          <div class="cards">
            消费时间:{{item.consumptionTime}}
          </div>
        </div>
        <div style="display:flex;    margin: 5px;">
          <div class="cards">
            录入时间:{{item.addTime}}
          </div>
          <div>
            <van-button @click="det(item.id)" v-if="item.state!=1" size="small" type="danger">删除</van-button>
          </div>
        </div>
      </div>
      </template>
    </van-cell>
  </div>
</template>
<script>
  import {
    Dialog
  } from 'vant';
  export default {
    data() {
      return {
        oneStyle:'margin:50px 5px 5px 5px',
        twoStyle:'margin:5px',
        guest: '',
        // project: '',
        total: '',
        account: '',
        subsidy: '',
        expenseTime: '',
        enteringTime: '',
        page: 1,
        size: 100,
        allData: [],
        uesr: ''
      }
    },
    methods: {
      det(value) {
        Dialog.confirm({
          title: '删除该信息',
          message: '你确定要删除吗?'
        }).then(() => {
          let param = {

            id: value,

          }
          this.$http.post(`login/lyConsumption/updata`, param).then(res => {
              if (res.data.code == 200) {
                this.getData()
                this.$toast("删除成功");
                // this.allData = res.data.data.list
              } else {
                this.$toast("网络错误");
              }
            })
            .catch(function (error) {
              console.log("请求失败" + error);
            });
        }).catch(() => {
          // on cancel
        });
      },
      getData() {
        let param = {
          userId: JSON.parse(localStorage.getItem('user')).id,
          page: this.page,
          size: this.size
        }
        this.$http.post(`login/lyConsumption/selectALL`, param).then(res => {
            if (res.data.code == 200) {
              this.allData = res.data.data.list
            } else {
              this.$toast("网络错误");
            }
          })
          .catch(function (error) {
            console.log("请求失败" + error);
          });
      }
    },
    created() {
      this.getData()
      this.user = JSON.parse(localStorage.getItem("user")).userName
    }
  }

</script>
<style>
  .card {
    display: flex;
  }

  .cards {
    font-size: 13px;
    margin: 2px;
    flex: 1;
  }
.van-panel__content{
    border: 1px solid #e4e4e4;
  box-shadow: 3px 3px 3px 0px #ccc;
}
</style>
