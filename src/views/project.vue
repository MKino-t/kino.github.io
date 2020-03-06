<template>
  <div class="project">
    <div class="projectCon">
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item v-for="(item,idx) in pro" :key="idx">
          <div class="proDiv">
            <div class="pic" @click="detail(item)">
              <img :src="item.img" alt />
            </div>
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
            <div @click="tolink(detailObj.link)" style="color:#409EFF;cursor:pointer">{{detailObj.link}}</div>
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
          img: require("../assets/pro1.png"),
          name: "客无忧乘风os商超后台",
          link: "https://b.ke51.com",
          skill:
            "vue /vuex/ axios/ router/ element-ui / echarts / html2canvas / jspdf",
          des:
            "该项目主要是为了针对超市行业，优化超市管理模式精细、优化商品管理，为各类超市提供智能信息化的管理方案的系统，共有商品资料、库存管理、采购管理、销售管理、员工管理、会员管理、营销管理、公共设置九大模块，前端基于vue框架进行pc端开发，使用element-ui作为ui组件,采用flex弹性盒模型进行页面布局，使用axios与后台进行数据交互，动态渲染页面，使用session保存会话，使用echart进行可视化开发，合理使用vuex存储管理组件的状态、父子组件进行传值，等方式加速开发速度,版本控制为git"
        },
        {
          img: require("../assets/pro1.png"),
          name: "客无忧群英汇",
          link: "https://b.ke51.com",
          skill: "hbuildx、uni-app、mint-ui、echarts",
          des:
            "此项目是为了给公司代理商提供一个快速便利简单集查询、 购物、咨询等功能于一体的便捷程序， 此程序包含三大模块，一是首页展示页， 首页展示页通过echart进行图表的展示，商城模块则进行商品的展示、购买等功能，功能模块则有 在线充值，提交需求等功能，前端基于vue的基础，使用uniapp开发移动端，使用mint-ui作为ui组件，采用flex弹性盒模型进行页面布局，使用自带api与后台进行数据交互，动态渲染页面，调用微信原生api在h5页面进行充值，其他端调用小程序自带API进行充值功能,版本控制为git"
        },
        {
          img: require("../assets/pro1.png"),
          name: "同城客无忧",
          link: "https://b.ke51.com",
          skill: "小程序开发框架、echarts、canvas",
          des:
            "该项目是为了满足不断增多的商户，以云计算为基础，利用大数据结合微信小程序，为他们寻找到精准客人，优化推广的一款程序,包括优选商城，点单，优惠券等功能,前端基于微信按照微开发微信小程序，采用采用flex弹性盒模型进行页面布局，使用自带api与后台进行数据交互，动态渲染页面,版本控制为git"
        }
      ],
      proWin: false,
      detailObj: {}
    };
  },
  components: {},
  methods: {
    tolink(url){
      // window.location.href = url
      window.open(url,'_blank')
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
      margin: 0 auto;

      .pic {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
