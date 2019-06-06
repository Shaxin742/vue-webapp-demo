<template>
  <div>
    <!-- <div class="header">{{route.name}}</div> -->
    <transition :name="transitionName" mode="out-in">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'slide-left',
      backPath: []
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    console.log(isBack)
    isBack ? this.transitionName = 'slide-right' : this.transitionName = 'slide-left'
    this.$router.isBack = false
    next()
  }
}
</script>

<style scoped>
.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(200px, 0);
  transform: translate(200px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-200px, 0);
  transform: translate(-200px, 0);
}

.slide-enter-active, .slide-leave-active{
  transition: all .3s}

.slide-enter, .slide-leave-to{
  transform: translate3d(100%, 0, 0)}

</style>
