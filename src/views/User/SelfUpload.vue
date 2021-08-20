<template>
  <div class="self">
    <div class="header">
      <span @click="goBack">
        <i class="el-icon-arrow-left"></i>
        返回
      </span>
      <span class="title">我的上传</span>
    </div>
    <el-scrollbar wrap-class="scrollbar">
      <el-empty
        description="空空如也"
        v-if="ImgList.length === 0"
      ></el-empty>
      <ImageList
        :ImgList="ImgList"
        v-else
      />
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { defineComponent, onActivated, ref } from "vue";
import ImageList from "@/components/ImageList.vue";
import { ImgRes, Image } from "@/utils/data";
import { getSelfUpload } from "./service";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    ImageList,
  },
  setup() {
    const ImgList = ref<Image[]>([]);
    const router = useRouter();
    onActivated(() => {
      getSelfUpload().then((res: ImgRes) => {
        ImgList.value = res.ImageList;
      });
    });
    const goBack = () => {
      router.back();
    };
    return {
      ImgList,
      goBack,
    };
  },
});
</script>
<style lang="scss" scoped>
.self {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-bottom: 20px;
  .scrollbar {
    height: calc(100% - 40px);
  }
}
.el-empty {
  height: 100%;
}
.header {
  padding-top: 10px;
  padding-left: 10px;
  color: #fff;
  margin-bottom: 10px;
  .title {
    margin-left: 10px;
    font-weight: 600;
    font-size: 20px;
  }
}
</style>
