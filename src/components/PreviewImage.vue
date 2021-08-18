<template>
  <div
    class="previewImg"
    v-show="previewImg != ''"
    @click="closePreviewImage"
  >
    <el-image
      :src="previewImg"
      alt=""
      lazy
    />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const previewImg = computed(() => store.state.previewImage);
    const closePreviewImage = () => {
      store.commit("handlePreviewImage", "");
    };
    return {
      previewImg,
      closePreviewImage,
    };
  },
});
</script>
<style lang="scss" scoped>
.previewImg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
}
</style>
