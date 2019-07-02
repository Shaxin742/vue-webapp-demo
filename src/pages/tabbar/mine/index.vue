<template>
  <div class="my" :style="{height:windowHeight+'px'}" @scroll="getscroll()">
    <div class="infoCon">
      <div class="headerBar"></div>
      <div class="userInfo" :style="{height:styles.userInfoHeight+'px'}">
        <div class="name" :style="{fontSize:styles.nameFont+'px',top:styles.nameTop+'px',position:styles.namePosition}">
          {{userInfo.name}}
        </div>
        <div class="jianli" :style="{'opacity':styles.opacity}">我的附件简历>></div>
        <div class="aver" :style="{'background-image':'url('+userInfo.img+')','opacity':styles.opacity}"></div>
      </div>
      <div class="tools">
        <van-icon name="setting-o" />
        <van-icon name="scan" @click="scan()"/>
      </div>
    </div>
    <van-cell-group ref="gggg">
      <van-cell title="测试"/>
      <van-cell title="测试"/>
      <van-cell title="测试"/>
      <van-cell title="测试"/>
      <van-cell title="测试"/>
      <van-cell title="测试"/>
      <van-cell title="测试"/>
      <van-cell title="测试"/>
      <van-cell title="测试"/>
      <van-cell title="测试"/>
      <van-cell title="测试"/>
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data: function () {
    return {
      userInfo: {
        name: '沙鑫',
        img: 'http://qiniudns.shaxin741.vip/timg.jpg'
      },
      styles: {
        nameFont: 22,
        userInfoHeight: 140,
        namePosition: 'absolute',
        nameTop: 40,
        opacity: 1,
        windowHeight: 0
      }
    }
  },
  created () {
    console.log(document.body.clientHeight)
    this.windowHeight = document.body.clientHeight
  },
  mounted () {
    // console.log(this)
    // window.addEventListener('scroll', this.handleScroll, true)
    // console.log(document.getElementById('id'))
  },
  methods: {
    getscroll ($event) {
      console.log($event)
    },
    handleScroll (e) {
      // console.log(e)
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // var scrollTop =
      //   window.pageYOffset ||
      //   document.documentElement.scrollTop ||
      //   document.body.scrollTop
      console.log(scrollTop)
      // console.log(1)
      // console.log(this.$refs.my.scrollTop)

      // if (scrollTop < 140) {
      //   this.styles.userInfoHeight = 140 - scrollTop
      //   this.styles.nameFont =
      //     (140 - scrollTop) / 140 * 22 > 17 ? (140 - scrollTop) / 140 * 22 : 17
      //   this.styles.nameFont <= 17
      //     ? (this.styles.namePosition = 'fixed')
      //     : (this.styles.namePosition = 'absolute')
      //   this.styles.nameFont <= 17
      //     ? (this.styles.nameTop = 10)
      //     : (this.styles.nameTop = 40)
      //   this.styles.opacity = (140 - scrollTop) / 140
      // }
    },
    // 二维码扫码
    scan () {
      console.log(123)
      plus.barcode.scan('http://qiniudns.shaxin741.vip/barcode.png', function (type, result) { // eslint-disable-line
        console.log('Scan success:(' + type + ')' + result)
      }, function (e) {
        console.log('Scan failed: ' + JSON.stringify(e))
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/css/index.scss";
.my{
  overflow: scroll
}
.infoCon {
  position: relative;
  overflow: hidden;
  background: $green;
  min-height: 40px;
  color: white;
  .headerBar {
    position: fixed;
    width: 100%;
    background: $green;
    z-index: 3;
    height: 40px;
  }
  .userInfo {
    margin-top: 15px;
    .name {
      left: 20px;
      z-index: 5;
    }
    .jianli {
      position: absolute;
      left: 20px;
      z-index: 4;
      top: 70px;
    }
    .aver {
      position: absolute;
      top: 40px;
      z-index: 4;
      right: 20px;
      width: 40px;
      height: 40px;
      background-position: center;
      background-size: cover;
    }
  }
  .tools {
    position: fixed;
    display: flex;
    justify-content: center;
    // width: 100%;
    font-size: 22px;
    z-index: 4;
    right: 20px;
    top: 10px;
    i + i {
      margin-left: 14px;
    }
  }
}
</style>
