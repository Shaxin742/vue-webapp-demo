<template>
  <div>
    <!-- <div class="header">{{route.name}}</div> -->
    <transition :name="transitionName">
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
  methods: {},
  beforeRouteUpdate (to, from, next) {
    let isBack = this.backPath.some(item => {
      return item === from.path
    })
    if (isBack) {
      this.backPath.map((v, i) => {
        if (v === from.path) {
          this.backPath.splice(i, 1)
        }
      })
      this.transitionName = 'slide-right'
    } else {
      this.backPath.push(to.path)
      this.transitionName = 'slide-left'
    }
    // this.backPath = Array.from(new Set(this.backPath))
    this.$router.isBack = false
    next()
  }
}
</script>

<style scoped>
.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(350px, 0);
  transform: translate(350px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-350px, 0);
  transform: translate(-350px, 0);
}
.header {
  position: absolute;
  height: 44px;
  background: #0058f1;
  width: 100%;
}
</style>
