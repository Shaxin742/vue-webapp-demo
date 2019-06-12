<template>
  <transition name="slide">
    <div >
      <head-nav leftValue='返回' @leftClick='back'></head-nav>
      <div>
        <van-button class="btn" type="primary" @click="show = !show">选择图片</van-button>
      </div>
      <!-- <div v-if="photoInfo.path"> -->
      <!-- <van-image
        width="100"
        height="100"
        lazy-load
        fit="contain"
        :src="photoInfo.path"
      /> -->
      <img :src="photoInfo.path" alt="">
      {{photoInfo.path}}
      <!-- </div> -->

      <van-uploader :after-read="afterRead" :capture='camera' ref="camera"/>
      <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        @select="onSelect"
      />
    </div>
  </transition>
</template>
<script>
import headNav from '@/components/headNav'
import { Cell, Button, Uploader, ActionSheet, Image } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Image.name]: Image,
    [Uploader.name]: Uploader,
    [ActionSheet.name]: ActionSheet,
    [Cell.name]: Cell,
    headNav: headNav
  },
  data: function () {
    return {
      show: false,
      photoInfo: {},
      aver: '',
      actions: [
        { name: '拍照', index: 1 },
        { name: '从相册中选取', index: 2 }
      ]
    }
  },
  methods: {
    onSelect (item) {
      if (item.index === 1) {
        this.$refs.camera.click()
      }
      if (item.index === 2) {
        this.album()
      }
    },
    camera () {
      console.log(1)
    },
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  }
}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import "@/assets/css/transtion.scss";
</style>
