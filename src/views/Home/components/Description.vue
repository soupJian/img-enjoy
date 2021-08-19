<template>
  <div class="description">
    <h1 class="title">免费图片上传</h1>
    <div class="des">
      <p>免费稳定的图片上传和赏析服务</p>
      <p>全球CDN加速, 支持外链,支持多图上传，原图保存，最大单张10MB</p>
    </div>
    <div class="upload">
      <el-upload
        class="upload-demo"
        ref="upload"
        accept=".jpg,.png,.jpeg,.webp"
        multiple
        :limit="9"
        action="/api/upload"
        :file-list="fileList"
        :auto-upload="false"
        :show-file-list="false"
        :on-change="handleSelectImg"
        :on-exceed="handleExceed"
      >
        <el-button
          type="primary"
          round
          size="medium"
        >开始上传<i class="el-icon-upload el-icon--right"></i></el-button>
      </el-upload>
    </div>
    <p class="unable">禁止上传<span class="mention">色情黑产等</span>违法图片</p>
  </div>
  <UploadImg
    :fileList="fileList"
    @handleSelectImg="handleSelectImg"
    @handleRemove="handleRemove"
    @clearUpload="clearUpload"
    @handleExceed="handleExceed"
  />
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { defineComponent, reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";
import UploadImg from "./UploadImg.vue";

interface stateType {
  fileList: Blob[];
}
export default defineComponent({
  name: "Description",
  components: {
    UploadImg,
  },
  setup() {
    const store = useStore();
    const state: stateType = reactive({
      fileList: [],
    });
    const upload = ref(null);
    const handleSelectImg = (file: { name: string; raw: Blob }) => {
      state.fileList = [...state.fileList, file.raw];
      if (!store.state.showUpload) {
        store.commit("toggleShowUpload");
      }
    };
    const handleRemove = (index: number) => {
      state.fileList.splice(index, 1);
    };
    const clearUpload = () => {
      state.fileList = [];
    };
    const handleExceed = () => {
      ElMessage.error("选择图片已超过限制，最多上传9张图片");
    };

    return {
      ...toRefs(state),
      upload,
      handleSelectImg,
      handleRemove,
      clearUpload,
      handleExceed,
    };
  },
});
</script>
<style scoped lang="scss">
.description {
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .title {
    font-size: 36px;
    text-align: center;
    font-weight: 600;
  }
  p {
    font-size: 22px;
    font-weight: 100;
    line-height: 30px;
  }
  @media screen and (max-width: 900px) {
    .des {
      display: none;
    }
  }
  @media screen and (min-width: 900px) {
    .des {
      margin: 20px;
      text-align: center;
    }
  }
  .mt {
    margin-top: 100px;
  }
  .upload {
    margin-top: 60px;
    text-align: center;
  }
  .unable {
    margin-top: 20px;
    text-align: center;
    .mention {
      color: #00a7da;
    }
  }
}
</style>
