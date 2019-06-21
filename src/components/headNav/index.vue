<template>
    <van-nav-bar
      :title="title || $route.meta.name"
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
import { myMixin } from '@/util/mixin.js'
import { NavBar } from 'vant'
export default {
  components: {
    [NavBar.name]: NavBar
  },
  mixins: [myMixin],
  props: {
    leftValue: {
      default: '',
      type: String
    },
    rightValue: {
      default: '',
      type: String
    },
    title: {
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
