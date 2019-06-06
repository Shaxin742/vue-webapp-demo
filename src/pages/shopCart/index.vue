<template>
  <transition name="slide">
    <div class="con">
      <van-nav-bar
        class="header"
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <div style="padding-top:50px;">
        {{name}}
        <van-button type="default" @click="$router.goBack()">返回</van-button>
      </div>
      </div>
  </transition>
</template>
<script>
import { Button, Toast, NavBar } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [NavBar.name]: NavBar
  },
  data () {
    return {
      name: 'shopCart'
    }
  },
  methods: {
    onClickLeft () {
      window.history.back()
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import "@/assets/css/transtion.scss";
.con{
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f7f7f7;
}
.header {
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
</style>
