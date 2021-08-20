<template>
  <div class="title">我的上传</div>
  <el-empty
    description="空空如也"
    v-if="ImgList.length === 0"
  ></el-empty>
  <ImageList
    :ImgList="ImgList"
    v-else
  />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ImageList from "@/components/ImageList.vue";
import { ImgRes, Image } from "@/utils/data";
import { getSelfUpload } from "./service";

export default defineComponent({
  components: {
    ImageList,
  },
  setup() {
    const ImgList = ref<Image[]>([]);
    onMounted(() => {
      getSelfUpload().then((res: ImgRes) => {
        ImgList.value = res.ImageList;
      });
    });
    return {
      ImgList,
    };
  },
});
</script>
<style lang="scss" scoped>
.title {
  margin-left: 30px;
  font-weight: 600;
  font-size: 20px;
}
.el-empty {
  height: 100%;
}
</style>
