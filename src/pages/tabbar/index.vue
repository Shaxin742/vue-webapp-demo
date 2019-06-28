<template>
  <div class="tabbar">
    <normal v-if="active===0"/>
    <plus v-if="active===1"/>
    <sxcomponents v-if="active===2"/>
    <my v-if="active===3"/>
    <div style="height:50px"></div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">plus</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import normal from './normal'
import plus from './plus'
import sxcomponents from './sxComponents'
import my from './my'
export default {
  components: {
    normal,
    my,
    sxcomponents,
    plus: plus
  },
  data () {
    return {
      active: 3
    }
  }
}
</script>
