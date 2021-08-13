<template>
  <div class="image-wrap">
    <el-card shadow="never">
      <img
        src="../../../assets/background.jpg"
        width="200"
        alt=""
      >
    </el-card>
    <el-card shadow="never">
      <img
        src="../../../assets/background.jpg"
        width="200"
        alt=""
      >
    </el-card>
    <el-card shadow="never">
      <img
        src="../../../assets/background.jpg"
        width="200"
        alt=""
      >
    </el-card>
    <el-card shadow="never">
      <img
        src="../../../assets/background.jpg"
        width="200"
        alt=""
      >
    </el-card>
    <el-card shadow="never">
      <img
        src="../../../assets/background.jpg"
        width="200"
        alt=""
      >
    </el-card>
    <el-card shadow="never">
      <img
        src="../../../assets/background.jpg"
        width="200"
        alt=""
      >
    </el-card>
    <el-card shadow="never">
      <img
        src="../../../assets/background.jpg"
        width="200"
        alt=""
      >
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
:deep(.el-card) {
  border: 0;
  margin-bottom: 10px;
  background: transparent;
  text-align: center;
  .el-card__body {
    padding: 0 !important;
  }
}
.image-wrap {
  -moz-column-count: 3; /* 火狐 */
  -webkit-column-count: 3; /* Safari 和 谷歌 */
  column-count: 3;
  // -moz-column-gap: 10px;
  // -webkit-column-gap: 10px;
  // column-gap: 10px;
  margin: 0 auto;
}
@media screen and (max-width: 900px) {
  .image-wrap {
    column-count: 2; // two columns on larger phones
  }
}
@media screen and (max-width: 500px) {
  .image-wrap {
    column-count: 1; // two columns on larger phones
  }
}
</style>
