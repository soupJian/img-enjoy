<template>
  <el-scrollbar wrap-class="scrollbar">
    <Description />
    <Image />
    <PreviewImage />
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Description from "./components/Description.vue";
import Image from "./components/Image.vue";
import PreviewImage from "@/components/PreviewImage.vue";

export default defineComponent({
  name: "Home",
  components: {
    Description,
    Image,
    PreviewImage,
  },
});
</script>
<style scoped lang="scss">
.scrollbar {
  height: 100%;
}
:deep(.el-scrollbar__view) {
  height: 100%;
}
</style>
