<template>
    <van-nav-bar
      title="标题"
      :left-text="leftValue"
      :right-text="rightValue"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <slot name="icon"></slot>
    </van-nav-bar>
</template>
<script>
import { NavBar } from 'vant'
export default {
  components: {
    [NavBar.name]: NavBar
  },
  props: {
    leftValue: {
      default: '',
      type: String
    },
    rightValue: {
      default: '',
      type: String
    }
  },
  data: function () {
    return {

    }
  },
  methods: {
    onClickLeft () {
      this.$emit('leftClick')
    },
    onClickRight () {
      this.$emit('rightClick')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
