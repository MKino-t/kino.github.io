<template>
  <div class="carrer">
    <div class="carrerCon">
      <div class="carrerCon_tit">工作经历</div>
      <div class="hx"></div>
      <ul class="carrerUl">
        <li class="carrerItem" v-for="(item,idx) in company" :key="idx">
          <template v-if="item.id%2!=0">
            <div style="display:flex">
              <div class="carrerItem_l">
                <div class="companyTit">{{item.comArr.name}}</div>
                <div class="job">{{item.comArr.job}}</div>
                <div>
                  <div v-for="(li,ix) in item.comArr.do" :key="ix">{{li}}</div>
                </div>
              </div>
              <div class="carrerItem_r">
                <div class="time">
                  <div class="start">{{item.time[0]}}</div>
                  <div class="line"></div>
                  <div class="start">{{item.time[1]}}</div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div style="display:flex;justify-content: flex-end;">
              <div class="carrerItem_r">
                <div class="time">
                  <div class="start">{{item.time[0]}}</div>
                  <div class="line"></div>
                  <div class="start">{{item.time[1]}}</div>
                </div>
              </div>
              <div class="carrerItem_l" style="text-align:left">
                <div class="companyTit">{{item.comArr.name}}</div>
                <div class="job">{{item.comArr.job}}</div>
                <div>
                  <div v-for="(li,ix) in item.comArr.do" :key="ix">{{li}}</div>
                </div>
              </div>
            </div>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      company: [
        {
          id: 1,
          time: ["2018/09", "2020/03"],
          comArr: {
            name: "杭州腾纵科技有限公司",
            job: "web前端工程师",
            do: [
              "1.负责公司客无忧乘风os商家后台服务系统的前端开发工作，重视组件的复用与模块复用，使用vue.js技术栈进行开发，利用自行封装的组件动态生成筛选条件。使用echarts进行页面可视化数据的渲染",
              "2.负责公司菜芯商家管理端小程序的前端开发工作，使用微信小程序，独立开发该项目前端。",
              "3.负责公司客无忧群英汇的前端开发工作，使用hbuideX进行开发，独立开发出多端覆盖的程序。",
              "4.负责公司同城客无忧和商家助手小程序的前端开发工作，将App端的功能移植于微信小程序端。",
              "5.负责公司官网的建设、更新和美化，根据seo要求，调整官网搜索字段等，优化引擎，便于用户搜索",
              "6.完成领导布置的其他事务性工作"
            ]
          }
        },
        {
          id: 2,
          time: ["2017/11", "2018/8"],
          comArr: {
            name: "杭州博彦信息技术有限公司",
            job: "web前端工程师",
            do: [
              "1.主要进行淘宝、阿里云活动外包PC、无线以及响应式页面开发",
              "2.根据设计稿与产品的需求设计出可行的方案，使用kissy、kimi、dbl、框架对页面模块化开发",
              "3.样式通过使用less处理器，实现复用性强，且易于维护。",
              "4.通过后端提供的API，对获取的到数据进行处理及展示，达到需求要实现的交互及页面效果",
              "5.完成领导布置的其他事务性工作"
            ]
          }
        },
        {
          id: 3,
          time: ["2017/3", "2017/8"],
          comArr: {
            name: "杭州小墩科技有限公司",
            job: "web前端工程师",
            do: [
              "1.主要根据设计提供的设计图编写静态页面和样式",
              "2.完成领导布置的其他事务性工作"
            ]
          }
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.carrer {
  width: 100%;
  height: 100%;
  background: url('../assets/carrer.jpg') no-repeat center center;
  background-size: 100% 100%;
  overflow-y: scroll;

  .carrerCon {
    width: 100%;
    height: 100%;

    .carrerCon_tit {
      position: relative;
      width: 200px;
      margin: 0 auto;
      padding-top: 30px;
      font-family: 'Helvetica Neue';
    }

    .hx {
      width: 108px;
      height: 5px;
      margin: 10px auto;
      background: #E87E04;
    }

    .carrerUl {
      position: relative;
      width: 90%;
      margin: 0 auto;
      margin-top: 30px;

      .carrerItem {
        width: 100%;
        // display: flex;
        color: #787978;

        .carrerItem_l {
          text-align: right;
          flex-basis: 40%;

          .companyTit {
            color: #626e7c;
            font-size: 16px;
            font-weight: 500;
          }

          .job {
            color: #E87E04;
            font-size: 16px;
            font-family: 'SimHei';
          }
        }

        .carrerItem_r {
          flex-basis: 20%;

          .time {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 1px solid rgb(238, 238, 238);
            background: #fff;
            margin: 0 auto;
            z-index: 10;

            .line {
              width: 30px;
              height: 2px;
              margin: 0 auto;
              background: #efefef;
            }
          }
        }
      }

      .carrerItem:last-child {
        padding-bottom: 30px;
      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        margin-left: -1px;
        top: 0px;
        width: 2px;
        height: 100%;
        background: grey;
      }
    }
  }
}
</style>
