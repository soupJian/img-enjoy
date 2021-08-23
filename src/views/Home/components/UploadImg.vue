<template>
  <el-collapse-transition>
    <div>
      <el-upload
        v-show="showUpload"
        class="upload"
        drag
        accept="image/*"
        multiple
        action="/api/upload"
        :auto-upload="false"
        :show-file-list="false"
        :on-change="handleSelectImg"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div
          class="close"
          @click.stop="handCloseUpload"
        >
          <i class="el-icon-close"></i>
          关闭
        </div>
        <div class="imgPrew">
          <div
            class="item"
            @click.stop
            v-for="(item,index) of previewImageList"
            :key="index"
          >
            <el-image
              :src="item"
              alt=""
              lazy
            />
            <div class="layout">
              <i
                class="el-icon-zoom-in"
                @click="handlePreviewImage(item)"
              ></i>
              <i
                class="el-icon-delete"
                @click="handleRemove(index)"
              ></i>
            </div>
          </div>
        </div>
        <el-button
          type="primary"
          round
          size="medium"
          @click.stop="handleUpload"
        >开始上传</el-button>
        <div
          class="uploadAddress"
          @click.stop
          :model="uploadAddress"
        >
          <div
            class="item"
            v-for="(item,index) of uploadAddress"
            :key="item"
          >
            <el-image
              :src="item"
              @click="handlePreviewImage(item)"
              lazy
            >
              <template #placeholder>
                <div class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </template>
            </el-image>

            <el-input
              v-model="uploadAddress[index]"
              readonly
            >
              <template #append><span @click="handleCopy(item)">复制</span></template>
            </el-input>
          </div>
        </div>
        <input
          type="text"
          v-model="copydata"
          ref="copy"
          class="copy"
        >
      </el-upload>
    </div>
  </el-collapse-transition>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { stateType } from "@/store/data";
import { computed, defineComponent, reactive, toRefs, ref } from "vue";
import { ElMessage, ElLoading } from "element-plus";
import { postUpload } from "./service";
import { uploadRes } from "./data";

interface state {
  showUpload: boolean;
  uploadList: Blob[];
  previewImageList: string[];
  previewImg: string;
  uploadAddress: string[];
  copydata: string;
}

export default defineComponent({
  props: {
    fileList: {
      type: Array,
      default: () => [],
    },
  },
  emit: ["handleSelectImg", "handleRemove", "clearUpload"],
  setup(props, { emit }) {
    const store = useStore<stateType>();
    const copy = ref<HTMLInputElement | null>(null);
    const state: state = reactive({
      showUpload: computed(() => store.state.showUpload),
      uploadList: computed(() => props.fileList as Blob[]),
      previewImageList: computed(() => {
        let arr: string[] = [];
        state.uploadList.forEach((item: Blob) => {
          arr.push(window.URL.createObjectURL(item));
        });
        return arr as string[];
      }),
      previewImg: "",
      uploadAddress: [],
      copydata: "",
    });
    const handCloseUpload = () => {
      store.commit("toggleShowUpload");
      emit("clearUpload");
      state.uploadAddress = [];
      state.copydata = "";
    };
    const handleSelectImg = (file: { name: string; raw: Blob }): boolean => {
      const index = file.name.lastIndexOf(".");
      //获取后缀 判断文件格式
      const ext = file.name.substr(index + 1);
      if (ext !== "jpg" && ext !== "png" && ext !== "webp" && ext !== "jpeg") {
        ElMessage.warning("暂不自持此类型文件");
        return false;
      }
      emit("handleSelectImg", file);
      return true;
    };
    const handlePreviewImage = (item: string) => {
      store.commit("handlePreviewImage", item);
    };
    const handleRemove = (index: number) => {
      emit("handleRemove", index);
    };
    const handleUpload = () => {
      if (state.uploadList.length === 0) {
        return false;
      }
      if (state.uploadList.length > 9) {
        ElMessage.warning("一次最大上传9张,请删除部分图片");
        return false;
      }
      const formData = new FormData();
      for (let i = 0; i < state.uploadList.length; i++) {
        formData.append("file", state.uploadList[i]);
      }
      const loadingInstance = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      postUpload(formData).then((res: uploadRes) => {
        loadingInstance.close();
        ElMessage.success(res.message);
        emit("clearUpload");
        state.uploadAddress = state.uploadAddress.concat(res.address);
      });
    };
    const handleCopy = (item: string) => {
      state.copydata = item;
      setTimeout(() => {
        if (copy.value) {
          copy.value.select();
          document.execCommand("Copy");
          ElMessage.success("复制成功");
        }
      }, 60);
    };
    return {
      ...toRefs(state),
      copy,
      handCloseUpload,
      handleUpload,
      handleSelectImg,
      handlePreviewImage,
      handleRemove,
      handleCopy,
    };
  },
});
</script>
<style lang="scss" scoped>
.upload {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.6);
  :deep(.el-upload) {
    width: 100% !important;
    height: auto !important;
    max-width: 100%;
    .el-upload-dragger {
      padding-bottom: 20px;
      width: 100% !important;
      height: auto !important;
      overflow: initial;
      border-radius: 0;
    }
  }
  .close {
    color: #000;
    position: fixed;
    top: 10px;
    right: 20px;
  }
  .imgPrew {
    margin: 20px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .item {
      width: 100px;
      height: 100px;
      margin: 0 10px 10px;
      position: relative;
      cursor: default;
      .el-image {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .layout {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: #fff;
        font-size: 16px;
        i {
          cursor: pointer;
        }
      }
    }
  }
  .uploadAddress {
    padding-top: 10px;
    max-width: 600px;
    margin: 0 auto;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      margin-bottom: 10px;
      .el-image {
        width: 100px;
        min-width: 100px;
        margin-right: 10px;
      }
    }
  }
  .copy {
    height: 0;
  }
}
</style>
