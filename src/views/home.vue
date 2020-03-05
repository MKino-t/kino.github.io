<template>
  <div class="homepage">
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <p>专注前端开发</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="stylus">
border() {
  position: absolute;
  border-style: solid;
  border-color: #b3c0d1;
}

.homepage {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../assets/bg.jpg') no-repeat;
  background-size: 100% 100%;
  color: #fff;
  font-size: 28px;
  animation: bg infinite 100s linear alternate;

  .box {
    position: relative;
    width: 400px;
    height: 200px;

    div:nth-child(1) {
      border();
      padding: 10px 0 0 100px;
      left: 0px;
      top: 0px;
      border-width: 5px 0 0 5px;
    }

    div:nth-child(2) {
      border();
      padding: 10px 100px 0 0;
      right: 0px;
      top: 0px;
      border-width: 5px 5px 0 0;
    }

    div:nth-child(3) {
      border();
      left: 0px;
      bottom: 0px;
      padding: 0 0 10px 100px;
      border-width: 0 0 5px 5px;
    }

    div:nth-child(4) {
      border();
      right: 0px;
      bottom: 0px;
      padding: 0 100px 10px 0;
      border-width: 0 5px 5px 0;
    }

    p:nth-child(5) {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -114px;
      margin-top: -20px;
      color: #b3c0d1;
      font-weight: bold;
      letter-spacing: 10px;
      font-size: 28px;
    }
  }
}

@keyframes bg {
  0% {
    background-size: 110% 130%;
  }

  10% {
    background-size: 111% 131%;
  }

  20% {
    background-size: 112% 132%;
    background-position: bottom;
  }

  30% {
    background-size: 113% 133%;
  }

  40% {
    background-size: 114% 134%;
  }

  50% {
    background-size: 115% 135%;
    background-position: left;
  }

  60% {
    background-size: 116% 136%;
  }

  70% {
    background-size: 117% 137%;
  }

  80% {
    background-size: 118% 138%;
    background-position: right;
  }

  90% {
    background-size: 119% 139%;
  }

  100% {
    background-size: 120% 140%;
  }
}
</style>
