<template>
  <div class="hello">
    <!-- 导航栏 代码省略-->
    <van-nav-bar left-arrow @click-left="_routerBack" title="添加消费" fixed :z-index="10"></van-nav-bar>
    <!-- 登录页 用户表单 -->
    <van-cell-group style="margin-top:50px;">
      <!-- <van-field v-model="username" clearable label="消费者" placeholder="请输入用户名" left-icon="contact" /> -->
      <van-field v-model="username" disabled clearable label="消费者" placeholder="请输入用户名" left-icon="contact" />
      <van-field v-model="hospital" clearable label="消费医院" placeholder="请输入客人消费医院名称" left-icon="wap-home-o" />
      <van-field v-model="project" clearable label="项目" placeholder="请输入客人所做项目" left-icon="description" />
      <van-field v-model="money" clearable label="金额" placeholder="请输入项目的费用" left-icon="balance-o" />
      <van-field left-icon="tosend  -o" v-model="starttime" clearable label="消费时间" placeholder="请选择消费时间"
        @focus="start" />
      <van-popup v-model="show" position="bottom">
        <van-datetime-picker v-model="currentDate" type="date" :max-date="minDate" @confirm="confirm"
          @cancel="cancel" :formatter="formatter" />

      </van-popup>

      <van-field v-model="explain" clearable label="说明" placeholder="补充说明" left-icon="records" />
      <div style="display:flex">

        <div class="van-cell van-field" style="width:125px;">
          <div class="van-field__left-icon"><i class="van-icon van-icon-upgrade">
              <!----></i></div>
          <div class="van-cell__title van-field__label"><span>证据图</span></div>
        </div>
        <div>

          <van-uploader v-model="fileList" :preview-image='true' :after-read="afterRead" />
        </div>
      </div>
      <!-- <span>证据图:</span> <van-uploader :after-read="afterRead" /> -->

      <!-- @click-right-icon="$toast('密码必须是数字、字母、下划线')" -->
      <!--登录按钮-->
      <div style="text-align:center;margin:20px;">

        <van-button type="primary" size="large" @click="onClickButtonSubmit">确认提交 </van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
  import axios from "axios";
  const token = "123456";
  export default {
    name: "login",
    data() {
      return {
        fileList: [],

        explain: "",
        name: "", //活动名称
        message: "", //活动详情
        show: false, //开始时间弹窗
        show1: false, //结束时间弹窗
        minHour: 10,
        maxHour: 20,
        minDate: new Date(),
        maxDate: new Date(2020, 11, 31),
        currentDate: new Date(), //开始标准时间
        currentDate1: new Date(), //结束标准时间
        starttime: "", //开始时间
        starttime1: "", //开始时间时间戳
        endtime: "", //结束时间
        endtime1: "", //结束时间时间戳
        errors: [],
        username: "",
        password: "",
        hospital: "",
        project: "",
        money: "",
        starttime: "",
        // currentDate: "",
        evidenceUrl:''
      };
    },
    created() {
      this.username =
        JSON.parse(localStorage.getItem("user")).userName +
        "(" +
        JSON.parse(localStorage.getItem("user")).phone +
        ")";
    },
    methods: {
      afterRead(file) {
        var fordata = new FormData();
        console.log(file.file);
        fordata.append("file", file.file, file.file.name);
        // console.log(file);
        this.$http.post("api/user/uploadimgdd", fordata).then(res => {
          this.evidenceUrl=res.data.data
        });
      },
      // 选择开始时间
      start() {
        this.show = true;
      },
      // 选择结束时间
      end() {
        this.show1 = true;
      },
      // 点击确定
      confirm() {
        this.show = false;
        this.starttime =
          this.currentDate.getFullYear() +
          "-" +
          (Number(this.currentDate.getMonth()) + 1) +
          "-" +
          this.currentDate.getDate() 
        this.starttime1 = new Date(this.currentDate).getTime() / 1000;
        // console.log(this.starttime);
      },
      // 点击取消
      cancel() {
        this.show = false;
      },

      cancel1() {
        this.show1 = false;
      },
      // 处理控件显示的时间格式
      formatter(type, value) {
        // 格式化选择器日期
        if (type === "year") {
          return `${value}年`;
        } else if (type === "month") {
          return `${value}月`;
        } else if (type === "day") {
          return `${value}日`;
        }
        return value;
      },
      onClickRight() {
        // this.$toast('请填写注册信息');
        // this.$router.push({ path:'/register'});
      },
      // 表单提交
      onClickButtonSubmit: function (e, username, password) {
        if (this.hospital == "") {
          this.$toast("消费医院名称不能为空");
          return false;
        }
        if (this.project == "") {
          this.$toast("所做项目不能为空");
          return false;
        } else if (this.money == "") {
          this.$toast("消费金额不能为空");
        } else if (this.currentDate == "") {
          this.$toast("消费时间不能为空");
        } else {
            let param={
                consumptionTime:this.starttime,   
                project:this.project,
                amount:this.money,
                userId:JSON.parse(localStorage.getItem("user")).id,
                explain:this.explain,
                evidenceUrl:this.evidenceUrl,
                hospitalName:this.hospital
            }
   
        this.$http.post(`login/lyConsumption/save`,param).then(res=>{
          if(res.data.code==200){
            this.$toast("提交成功");
            this.$router.go(-1)
          }else{
             this.$toast("网络错误");
          }
        })
            .catch(function (error) {
              console.log("请求失败" + error);
            });
          e.preventDefault();
        }
      },
      validEmail: function (password) {
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(password);
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
