<template>
  <div class="procon">
    <div id="skill"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    initPie() {
      var that = this;
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("skill"));
      myChart.setOption({
        title: {
          text: "前端技能",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "javascript",
            "html+css",
            "html5+css3",
            "jquery",
            "vue",
            "微信小程序",
            "git"
          ]
        },
        series: [
          {
            name: "javascript",
            type: "pie",
            radius: ["10%", "15%"],
            label: {
              normal: {
                position: "inner"
              }
            },

            data: [
              {
                value: "75",
                name: "javascript",
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    normal: {
                      color: "#dc1439"
                    }
                  }
                }
              },
              {
                value: "25",
                itemStyle: {
                  normal: {
                    color: "transparent"
                  }
                }
              }
            ]
          },
          {
            name: "html+css",
            type: "pie",
            radius: ["20%", "25%"],

            data: [
              {
                value: "85",
                name: "html+css",
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    normal: {
                      color: "#dc1439"
                    }
                  }
                }
              },
              {
                value: "15",
                itemStyle: {
                  normal: {
                    color: "transparent"
                  }
                }
              }
            ]
          },
          {
            name: "html5+css3",
            type: "pie",
            radius: ["30%", "35%"],
            data: [
              // {value:1078, name:'生物'}
              {
                value: "75",
                name: "html5+css3",
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    normal: {
                      color: "#dc1439"
                    }
                  }
                }
              },
              {
                value: "25",
                itemStyle: {
                  normal: {
                    color: "transparent"
                  }
                }
              }
            ]
          },
          {
            name: "jquery",
            type: "pie",
            radius: ["40%", "45%"],
            data: [
              // {value:1078, name:'生物'}
              {
                value: "75",
                name: "jquery",
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    normal: {
                      color: "#b3c0d1"
                    }
                  }
                }
              },
              {
                value: "25",
                itemStyle: {
                  normal: {
                    color: "transparent"
                  }
                }
              }
            ]
          },
          {
            name: "vue",
            type: "pie",
            radius: ["50%", "55%"],
            data: [
              // {value:981, name:'政治'}
              {
                value: "70",
                name: "vue",
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    normal: {
                      color: "#dc1439"
                    }
                  }
                }
              },
              {
                value: "30",
                itemStyle: {
                  normal: {
                    color: "transparent"
                  }
                }
              }
            ]
          },
          {
            name: "微信小程序",
            type: "pie",
            radius: ["60%", "65%"],
            data: [
              // {value:877, name:'历史'}
              {
                value: "70",
                name: "微信小程序",
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    normal: {
                      color: "#dc1439"
                    }
                  }
                }
              },
              {
                value: "30",
                itemStyle: {
                  normal: {
                    color: "transparent"
                  }
                }
              }
            ]
          },
          {
            name: "git",
            type: "pie",
            radius: ["70%", "75%"],
            data: [
              // {value:939, name:'地理'}
              {
                value: "70",
                name: "git",
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    normal: {
                      color: "#dc1439"
                    }
                  }
                }
              },
              {
                value: "30",
                itemStyle: {
                  normal: {
                    color: "transparent"
                  }
                }
              }
            ]
          }
        ]
      });
    }
  },
  created() {},
  mounted() {
    this.initPie();
  }
};
</script>

<style scoped lang="stylus">
.procon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../assets/skill.jpg') no-repeat center center;
  background-size: 100% 100%;

  #skill {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
}
</style>
