<template>
  <div class="project">
    <div class="projectCon">
      <el-carousel :interval="2000" type="card" height="500px">
        <el-carousel-item v-for="(item,idx) in pro" :key="idx">
          <div class="proDiv">
            <div class="pic" @click="detail(item)">
              <img :src="item.img" alt />
            </div>
            <div class="proName">{{item.name}}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-dialog
      :title="detailObj.name+'详情'"
      :visible.sync="proWin"
      width="70%"
      :before-close="handleClose"
    >
      <div class="detailCon">
        <div class="des">
          <div class="desCon">
            <div>链接</div>
            <div
              v-if="detailObj.id=='pc'"
              @click="tolink(detailObj.link)"
              style="color:#409EFF;cursor:pointer"
            >{{detailObj.link}}</div>
            <div v-if="detailObj.id=='h5'">{{detailObj.link}}</div>
          </div>

          <div class="desCon">
            <div>项目名称</div>
            <div>{{detailObj.name}}</div>
          </div>
          <div class="desCon">
            <div>技术栈</div>
            <div>{{detailObj.skill}}</div>
          </div>
          <div class="desCon">
            <div>项目描述</div>
            <div>{{detailObj.des}}</div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="proWin = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      pro: [
        {
          id: "pc",
          img: require("../assets/pro1.png"),
          name: "客无忧乘风os商超后台",
          link: "https://b.ke51.com",
          skill:
            "vue /vuex/ axios/ router/ element-ui / echarts / html2canvas / jspdf",
          des:
            "该项目主要是为了针对超市行业，优化超市管理模式精细、优化商品管理，为各类超市提供智能信息化的管理方案的系统，共有商品资料、库存管理、采购管理、销售管理、员工管理、会员管理、营销管理、公共设置九大模块，前端基于vue框架进行pc端开发，使用element-ui作为ui组件,采用flex弹性盒模型进行页面布局，使用axios与后台进行数据交互，动态渲染页面，使用session保存会话，使用echart进行可视化开发，合理使用vuex存储管理组件的状态、父子组件进行传值，等方式加速开发速度,版本控制为git"
        },
        {
          id: "h5",
          img: require("../assets/pro2.jpg"),
          name: "客无忧群英汇",
          link: "微信请输入:客无忧群英汇",
          skill: "hbuildx、uni-app、mint-ui、echarts",
          des:
            "此项目是为了给公司代理商提供一个快速便利简单集查询、 购物、咨询等功能于一体的便捷程序， 此程序包含三大模块，一是首页展示页， 首页展示页通过echart进行图表的展示，商城模块则进行商品的展示、购买等功能，功能模块则有 在线充值，提交需求等功能，前端基于vue的基础，使用uniapp开发移动端，使用mint-ui作为ui组件，采用flex弹性盒模型进行页面布局，使用自带api与后台进行数据交互，动态渲染页面，调用微信原生api在h5页面进行充值，其他端调用小程序自带API进行充值功能,版本控制为git"
        },
        {
          id: "h5",
          img: require("../assets/pro3.jpg"),
          name: "同城客无忧",
          link: "微信请输入:同城客无忧",
          skill: "小程序开发框架、echarts、canvas",
          des:
            "该项目是为了满足不断增多的商户，以云计算为基础，利用大数据结合微信小程序，为他们寻找到精准客人，优化推广的一款程序,包括优选商城，点单，优惠券等功能,前端基于微信按照微开发微信小程序，采用采用flex弹性盒模型进行页面布局，使用自带api与后台进行数据交互，动态渲染页面,版本控制为git"
        },
        {
          id: "h5",
          img: require("../assets/pro4.jpg"),
          name: "客无忧商家助手",
          link: "微信请输入:客无忧商家助手",
          skill: "小程序开发框架",
          des:
            "该项目是为了配合同城客无忧小程序而开发，为商户提供更简单便捷的商家后台服务,前端基于微信按照微开发微信小程序，采用采用flex弹性盒模型进行页面布局，使用自带api与后台进行数据交互，动态渲染页面,版本控制为git"
        },
        {
          id: "h5",
          img: require("../assets/pro5.jpg"),
          name: "客无忧售后服务",
          link: "微信请输入:客无忧售后服务",
          skill: "小程序开发框架",
          des:
            "该项目是为简化公司售后服务而开发的小程序，售后服务人员只需添加相关目录，用户就能用手机查阅，方便快捷,前端基于微信按照微开发微信小程序，采用采用flex弹性盒模型进行页面布局，使用自带api与后台进行数据交互，动态渲染页面,版本控制为git"
        },
        {
          id: "h5",
          img: require("../assets/pro6.jpg"),
          name: "菜芯商家",
          link: "微信请输入:菜芯商家",
          skill: "小程序开发框架",
          des:
            "该项目是为了政府改造老破旧菜市场而开发的项目,前端基于微信按照微开发微信小程序，采用采用flex弹性盒模型进行页面布局，使用自带api与后台进行数据交互，动态渲染页面,版本控制为git"
        },
        {
          id: "h5",
          img: require("../assets/pro7.jpg"),
          name: "停省事",
          link: "微信请输入:停省事",
          skill: "小程序开发框架",
          des:
            "该项目是公司开展停车业务而开发，前端基于微信按照微开发微信小程序，采用采用flex弹性盒模型进行页面布局，使用自带api与后台进行数据交互，动态渲染页面,版本控制为git"
        }
      ],
      proWin: false,
      detailObj: {}
    };
  },
  components: {},
  methods: {
    tolink(url) {
      // window.location.href = url
      window.open(url, "_blank");
    },
    detail(data) {
      this.proWin = true;
      this.detailObj = data;
    },
    handleClose() {
      this.proWin = false;
    }
  }
};
</script>

<style scoped lang="stylus">
.project {
  width: 100%;
  height: 100%;
  background: url('../assets/project.jpg') no-repeat center center;
  background-size: 100% 100%;
  overflow-y: scroll;

  .projectCon {
    padding-top: 10px;

    .proDiv {
      width: 95%;
      height: 95%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;

      .pic {
        // width: 100%;
        height: 90%;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .proName {
        margin-top: 15px;
        color: #1a3754;
        font-weight: 500;
      }
    }
  }

  .detailCon {
    .des {
      width: 100%;

      .desCon {
        display: flex;
        text-align: left;

        &.desCon div:nth-child(1) {
          width: 80px;
          font-size: 16px;
          margin-right: 10px;
        }

        &.desCon div:nth-child(2) {
          width: 85%;
        }
      }
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

// .el-carousel__item:nth-child(2n) {
// background-color: #fff;
// }
.el-carousel__item {
  background-color: #d3dce6;
}
</style>
