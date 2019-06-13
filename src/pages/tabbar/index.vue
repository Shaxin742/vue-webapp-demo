<template>
  <div class="tabbar">
    <dash v-if="active===0"/>
    <plus v-if="active===1"/>
    <div style="height:50px"></div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">plus</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import dash from './dash'
import plus from './plus'
export default {
  components: {
    dash: dash,
    plus: plus
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>
