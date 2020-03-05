<template>
  <div class="page">
    <div class="navCon">
      <ul class="navUl">
        <li v-for="(item,idx) in router" :key="idx" class="navLi">
          <router-link :to="item.path">
            <div>{{item.name}}</div>
          </router-link>
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
        { name: "首页", path: "/home" },
        { name: "个人介绍", path: "/self" },
        { name: "专业技能", path: "/profession" },
        { name: "工作经历", path: "/carrer" },
        { name: "作品集", path: "/project" }
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

  .navUl {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    color: #fff;

    .navLi {
      width: 100%;

      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}

.router-link-exact-active {
  cursor: pointer;
  background: #1a3754;
}
</style>
