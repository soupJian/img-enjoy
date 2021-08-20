<template>
  <div class="image-wrap">
    <div
      class="item"
      v-for="item of ImgList"
      :key="item.url"
      :style="{ flexShrink: `${item.proportion}`, flexGrow: `${item.proportion}`,
      maxWidth: `${380*item.proportion}px`,flexBasis: `${220*item.proportion}px` }"
    >
      <el-image
        :src="item.url"
        alt=""
        lazy
        @click="handlePreviewImage(item.url)"
      />
      <div class="des">
        {{item.description}}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { Image } from "@/utils/data";

export default defineComponent({
  props: {
    ImgList: {
      type: Array,
      default: () => [] as Image[],
    },
  },
  setup() {
    const store = useStore();
    const handlePreviewImage = (src: string) => {
      store.commit("handlePreviewImage", src);
    };
    return {
      handlePreviewImage,
    };
  },
});
</script>
<style lang="scss" scoped>
.image-wrap {
  max-width: 1800px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
  .item {
    position: relative;
    margin-left: 10px;
    margin-bottom: 10px;
    &:hover {
      .des {
        opacity: 1;
      }
    }
    .el-image {
      width: 100%;
      height: 100%;
    }
    .des {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px 10px 8px 6px;
      color: #fff;
      opacity: 0;
      transition: 0.25s;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0, transparent);
    }
  }
}
</style>
