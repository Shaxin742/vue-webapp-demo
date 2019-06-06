<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
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
body,
html {
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
