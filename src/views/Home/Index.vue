<template>
  <el-scrollbar>
    <header>
      <my-header />
    </header>
    <Description
      :totalImg="totalImg"
      :totalAccess="totalAccess"
    />
    <ImageList :ImgList="hotImgList" />
    <!-- <footer class="footer">
      <p>本站已托管 {{totalImg}} 张图片</p>
      <p>访客：{{totalAccess}} </p>
    </footer> -->
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive, toRefs } from "vue";
import Description from "./components/Description.vue";
import ImageList from "@/components/ImageList.vue";
import MyHeader from "./components/MyHeader.vue";
import { ImgRes, Image } from "@/utils/data";
import { info } from "./data";
import { getHotImg, getInfo } from "./service";

export default defineComponent({
  name: "Home",
  components: {
    Description,
    ImageList,
    MyHeader,
  },
  setup() {
    const hotImgList = ref<Image[]>([]);
    const state: info = reactive({
      totalAccess: 0,
      totalImg: 0,
    });
    const getHotImage = () => {
      getHotImg().then((res: ImgRes) => {
        hotImgList.value = res.ImageList;
      });
    };
    const getAccessInfo = () => {
      getInfo().then((res: info) => {
        state.totalAccess = res.totalAccess;
        state.totalImg = res.totalImg;
      });
    };
    onMounted(() => {
      getHotImage();
      getAccessInfo();
    });
    return {
      ...toRefs(state),
      hotImgList,
    };
  },
});
</script>
<style scoped lang="scss">
:deep(.el-scrollbar__view) {
  height: 100%;
  padding: 0 20px;
}
</style>
