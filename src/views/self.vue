<template>
  <div class="selfCon" :style="'background:url('+bg+')no-repeat center center'">
    <div class="info">
      <div class="info_avater">
        <img src="../assets/ava.jpg" alt />
      </div>
      <div class="info_data">
        <div>-幸会，我是魏嘉</div>
        <div>我是一名钱端攻城狮。打造一款成功的产品离不开持之以恒的照料，希望能成为你的搭档创造出别具一格的作品，让我倍感荣幸。</div>
      </div>
      <div class="info_data">
        <div>-我能效劳</div>
        <div>前端开发，MVVM模块化开发，利用各种技巧实现交互丰富的界面。</div>
      </div>
      <div class="info_data">
        <div>-关于我</div>
        <div>坐标杭州。本科毕业，三年工作经验，钱端攻城狮，主要从事微信小程序和商超后台的开发。技术栈vue+es6+element ui 不浮躁，执行力，学习能力都棒棒哒！</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      bg: require("../assets/self1.jpg"),
      cur: 1
    };
  },
  components: {},
  methods: {
    changeBg(x) {
      var that = this;
      switch (x % 3) {
        case 1:
          that.bg = require("../assets/self1.jpg");
          that.cur = 1;
          break;
        case 2:
          that.bg = require("../assets/self2.jpg");
          that.cur = 2;
          break;
        default:
          that.bg = require("../assets/self3.jpg");
          that.cur = 3;
          break;
      }
    }
  },
  created() {
    var that = this;
    var imgs = this.imgArr;
    var x = 0;
    setInterval(() => {
      x++;
      that.changeBg(x);
    }, 3000);
  }
};
</script>

<style scoped lang="stylus">
.selfCon {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 2s;
  .info {
    width: 600px;
    height: 500px;
    padding: 10px 20px;
    border-radius: 10px;
    opacity: 0.5;
    &:hover {
      cursor: pointer;
      border: 1px solid #efefef;
      box-shadow: 8px 5px 26px 2px #656B79 !important;
      opacity: 1;
      transition-duration: 2s;
    }

    .info_avater img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    .info_data {
      text-align: left;

      div:nth-child(1) {
        font-family: 'Helvetica Neue';
        color: #fff;
        font-weight: bold;
        font-size: 22px;
        margin: 5px 0;
      }

      div:nth-child(2) {
        font-family: 'PingFang SC';
        color: #fff;
        font-size: 18px;
      }
    }
  }
}
</style>
