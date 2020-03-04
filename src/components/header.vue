<template>
  <div class="page">
    <div class="navCon">
      <div class="icon">
        <!-- <img src="" alt=""> -->
      </div>
      <ul class="navUl">
        <li v-for="(item,idx) in router" :key="idx" class="navLi">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      activeIndex2: "1",
      router: [
        { name: "个人介绍", path: "/self" },
        { name: "专业技能", path: "/profession" },
        { name: "项目介绍", path: "/project" },
        { name: "工作经历", path: "/carrer" }
      ]
    };
  },
  components: {},
  methods: {
    handleSelect() {}
  }
};
</script>

<style scoped lang="stylus">
.navCon {
  width: 100%;
  height: 100%;
  display: flex;

  .icon {
    flex-basis: 30%;
  }
  .navUl {
    flex-basis: 60%;
    display: flex;
    justify-content: space-evenly;
    color #fff;
    .navLi {
      width :100%;
      &:hover {
        cursor :pointer;
        background:#1a3754;
      }
      a{
        display:block;
        width :100%;
        height 100%;
      }
    }
  }
}
</style>
