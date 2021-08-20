<template>
  <el-container>
    <el-header>
      <my-header />
    </el-header>
    <el-main>
      <el-scrollbar wrap-class="scrollbar">
        <Description />
        <ImageList :ImgList="hotImgList" />
      </el-scrollbar>
    </el-main>
    <el-footer>
      <p>本站已托管 100,00.00 张图片</p>
      <p>访客：123</p>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Description from "./components/Description.vue";
import ImageList from "@/components/ImageList.vue";
import MyHeader from "./components/MyHeader.vue";
import { ImgRes, Image } from "@/utils/data";
import { getHotImg } from "./service";

export default defineComponent({
  name: "Home",
  components: {
    Description,
    ImageList,
    MyHeader,
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
.el-main {
  top: 60px;
  bottom: 50px;
  padding: 0 !important;
  overflow: auto;
}
.el-header,
.el-footer,
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
.el-footer {
  bottom: 0;
  height: 40px !important;
  text-align: center;
  p {
    line-height: 20px;
  }
}
</style>
