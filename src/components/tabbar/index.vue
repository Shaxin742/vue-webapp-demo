<template>
  <div class="tabbar">
    <router-view/>
    <div style="height:50px"></div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
      <van-tabbar-item icon="search" to='/plus'>plus</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to='/'>标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to='/'>标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>
