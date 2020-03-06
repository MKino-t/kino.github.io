<template>
  <div class="page">
    <el-container >
      <el-header height='80px'>
        <hea></hea>
      </el-header>
      <el-main :style="defaultHeight" style="overflow:hidden">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <fot></fot>
      </el-footer>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
import hea from "@/components/header.vue";
import fot from "@/components/footer.vue";
export default {
  data() {
    return {
      defaultHeight: {
        height: ""
      }
    };
  },
  components: {
    hea,
    fot
  },
  methods:{
    getHeight(){
      this.defaultHeight.height = window.innerHeight - 140 + "px";
    },
  },
  created() {
    // 页面创建时执行一次getHeight进行赋值，顺道绑定resize事件
    window.addEventListener('resize',this.getHeight)
    this.getHeight()
  }
};
</script>

<style scoped >
</style>
