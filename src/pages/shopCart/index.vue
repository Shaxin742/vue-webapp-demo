<template>
  <div>
    {{name}}
    <van-button type="default" @click="$router.back(-1)">返回</van-button>
  </div>
</template>
<script>
import { Button } from 'vant'
export default {
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      name: 'shopCart'
    }
  }
}
</script>
