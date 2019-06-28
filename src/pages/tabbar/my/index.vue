<template>
  <div class="my">
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
        <van-icon name="scan" />
      </div>
    </div>
    <van-cell-group>
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
  name: 'my',
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
        opacity: 1
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop < 140) {
        this.styles.userInfoHeight = 140 - scrollTop
        this.styles.nameFont =
          (140 - scrollTop) / 140 * 22 > 17 ? (140 - scrollTop) / 140 * 22 : 17
        this.styles.nameFont <= 17
          ? (this.styles.namePosition = 'fixed')
          : (this.styles.namePosition = 'absolute')
        this.styles.nameFont <= 17
          ? (this.styles.nameTop = 10)
          : (this.styles.nameTop = 40)
        this.styles.opacity = (140 - scrollTop) / 140
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/css/index.scss";
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
    font-size: 16px;
    z-index: 4;
    right: 10px;
    top: 10px;
    i + i {
      margin-left: 10px;
    }
  }
}
</style>
