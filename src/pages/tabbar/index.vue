<template>
  <div class="tabbar">
    <router-view/>
    <div style="height:50px"></div>
    <van-tabbar v-model="navIndex">
      <van-tabbar-item name='home' to='/home' icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name='plus' to='/plus' :info="plusInfo>0?plusInfo:''" icon="search">plus</van-tabbar-item>
      <van-tabbar-item name='comp' to='/comp' icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item
        name='mine'
        to='/mine'
        >
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.normal"
          style="width:auto"
        >
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      plusInfo: 2,
      icon: {
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png',
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png'
      }
    }
  },
  computed: {
    navIndex: {
      get () {
        return this.$store.state.app.navIndex
      },
      set (value) {
        this.$store.commit('CHANGE_NAV_ACTIVE', value)
      }
    }
  }
}
</script>
