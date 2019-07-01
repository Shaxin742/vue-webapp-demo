<template>
  <div id="app">
    <keep-alive>
      <router-view class="childView" :style="{minHeight:clientHeight+'px'}"/>
    </keep-alive>
  </div>
</template>

<script>
// import { plusReady } from '@/util/common'
export default {
  name: 'App',
  created () {
    // plusReady(this.plusReady)
    this.clientHeight = document.body.clientHeight
  },
  data: function () {
    return {
      clientHeight: '',
      currentRoute: ''
    }
  },
  methods: {
    plusReady () {
    }
  }
}
</script>
<style lang="scss">
</style>
