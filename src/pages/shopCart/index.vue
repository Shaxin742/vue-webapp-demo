<template>
  <transition name="slide">
    <div class="container">
      <head-nav leftValue='返回' @leftClick='back'></head-nav>
      <div>
        <img v-lazy="imgUrl" alt=""/>
        <img v-lazy="imgUrl" alt=""/>
        <img v-lazy="imgUrl" alt=""/>
        <img v-lazy="imgUrl" alt=""/>
        <img v-lazy="imgUrl" alt=""/>

        <img v-lazy="imgUrl" alt=""/>
        <van-button type="default" @click="$router.goBack()">返回</van-button>
      </div>
    </div>
  </transition>
</template>
<script>
import headNav from '@/components/headNav'
export default {
  components: {
    headNav: headNav
  },
  data () {
    return {
      name: 'shopCart',
      imgUrl: '',
      show: true
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
.header {
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
</style>
