<template>
  <div>
    <van-cell title="保存图片" is-link to="/plus/saveImg" />
    <van-cell title="单元格" is-link to="index" />
  </div>
</template>
<script>import { Cell, CellGroup, Toast } from 'vant'
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
}
</script>
