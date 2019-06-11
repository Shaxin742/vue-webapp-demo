<template>
  <transition name="slide">
    <div class="con">
      <head-nav leftValue='返回' @leftClick='back'></head-nav>
      <div>
        <van-button type="default" @click="$router.goBack()">返回</van-button>
      </div>
    </div>
  </transition>
</template>
<script>
import headNav from '@/components/headNav'
import { Button, Toast, NavBar } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [NavBar.name]: NavBar,
    headNav: headNav
  },
  data () {
    return {
      name: 'shopCart',
      show: true
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
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
