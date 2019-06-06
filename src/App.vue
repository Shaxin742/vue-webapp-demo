<template>
  <div id="app" v-touch:left="onSwipeLeft">
    <router-view/>
  </div>
</template>

<script>
import { plusReady } from '@/util/common'
export default {
  name: 'App',
  created () {
    plusReady(this.plusReady)
  },
  methods: {
    onSwipeLeft () {
      this.$router.goBack()
    },
    plusReady () {
      let self = this
      plus.key.addEventListener(//eslint-disable-line
        'backbutton',
        function () {
          self.$router.isBack = true
          self.$router.goBack()
        },
        false
      )
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
