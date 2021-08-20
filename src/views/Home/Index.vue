<template>
  <el-scrollbar wrap-class="scrollbar">
    <Description />
    <ImageList :ImgList="hotImgList" />
    <PreviewImage />
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Description from "./components/Description.vue";
import ImageList from "@/components/ImageList.vue";
import PreviewImage from "@/components/PreviewImage.vue";
import { ImgRes, Image } from "@/utils/data";
import { getHotImg } from "./service";

export default defineComponent({
  name: "Home",
  components: {
    Description,
    ImageList,
    PreviewImage,
  },
  setup() {
    const hotImgList = ref<Image[]>([]);
    const getHotImage = () => {
      getHotImg().then((res: ImgRes) => {
        hotImgList.value = res.ImageList;
      });
    };
    onMounted(() => {
      getHotImage();
    });
    return {
      hotImgList,
    };
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
