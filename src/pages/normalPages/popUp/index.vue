<template>
  <transition name="slide">
    <div class="container">
      <head-nav leftValue='返回' @leftClick='back'></head-nav>
      <div>
        <van-button class="btn" type="primary" @click="bottomPop = !bottomPop">底部弹出</van-button>
        <van-button class="btn" type="primary" @click="rightPop = !rightPop">右侧弹出</van-button>
      </div>
      <van-popup v-model="bottomPop" position="bottom" :overlay="true">
        <van-datetime-picker
          v-model="currentDate"
          type="datetime"
          @confirm='getTime()'
          @cancel='cancel()'
          :min-date="minDate"
          :max-date="maxDate"
        />
      </van-popup>
      <van-popup v-model="rightPop" position="right" :overlay="true">
        <div class="rightPop" :style="{height: clientHeight + 'px'}">
          <div class="imgCon" v-if="fileList.length>0" v-for="(v,i) in fileList" :key="i">
            <van-image
              width="100"
              height="100"
              lazy-load
              fit="contain"
              :src="v"
            />
            <van-icon name="close" class="delte" @click="delte(i)"/>
          </div>
          <van-uploader
            :after-read="afterRead">
            <!-- <img :src="aver" alt=""> -->
            <van-image
              width="100"
              height="100"
              lazy-load
              fit="contain"
              :src="aver"
            />
          </van-uploader>
        </div>
      </van-popup>
    </div>
  </transition>
</template>
<script>
import headNav from '@/components/headNav'
import { Button, Popup, DatetimePicker, Toast, Uploader, Image, Icon } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Uploader.name]: Uploader,
    [Image.name]: Image,
    [Icon.name]: Icon,
    [DatetimePicker.name]: DatetimePicker,
    headNav: headNav
  },
  created () {
    this.clientHeight = document.body.clientHeight
  },
  data: function () {
    return {
      fileList: [],
      aver: 'http://qiniudns.shaxin741.vip/timg.jpg',
      clientHeight: '',
      bottomPop: false,
      rightPop: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date()
    }
  },
  methods: {
    getTime (v) {
      Toast('时间：' + this.currentDate)
      this.bottomPop = false
    },
    cancel () {
      Toast('取消')
      this.bottomPop = false
    },
    delte (i) {
      this.fileList.splice(i, 1)
    },
    afterRead (file) {
      this.fileList.push(file.content)
      console.log(file)
      // this.aver = file.content
    }
  }
}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
@import "@/assets/css/transtion.scss";
.rightPop{
  width: 300px;
}
.imgCon{
  position: relative;
  display: inline-block;
  margin: 6px;
  .delte{
    position: absolute;
    top: 3px;
    right: -8px;;
  }
}
</style>
