<template>
  <el-scrollbar>
    <header>
      <my-header />
    </header>
    <Description />
    <ImageList :ImgList="hotImgList" />
    <footer class="footer">
      <p>本站已托管 {{totalImg}} 张图片</p>
      <p>访客：{{totalAccess}} </p>
    </footer>
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
.el-main {
  top: 0;
  bottom: 0;
  padding: 0 !important;
  overflow: auto;
}
.el-main {
  position: fixed;
  left: 0;
  right: 0;
  color: #fff;
}
.el-header {
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .el-button {
    color: #fff;
    a {
      color: #fff;
    }
  }
  .el-button--primary {
    padding: 0 5px;
    min-height: 25px !important;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    font-size: 14px;
    margin-bottom: 20px;
  }
}
.footer {
  bottom: 0;
  height: 40px !important;
  text-align: center;
  p {
    line-height: 20px;
  }
}
</style>
