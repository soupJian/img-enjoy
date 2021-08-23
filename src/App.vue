<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <PreviewImage />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import PreviewImage from "@/components/PreviewImage.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { stateType } from "@/store/data";

export default defineComponent({
  components: {
    PreviewImage,
  },
  setup() {
    const router = useRouter();
    const store = useStore<stateType>();
    const user = computed(() => store.state.user);
    const handleToLogin = () => {
      router.push("/login");
    };
    const handleShowUpload = () => {
      store.commit("toggleShowUpload");
    };
    const loginOut = () => {
      localStorage.clear();
      store.commit("setUser", { id: null, name: null });
    };
    return {
      user,
      handleToLogin,
      handleShowUpload,
      loginOut,
    };
  },
});
</script>

<style lang="scss">
body,
#app {
  width: 100%;
  height: 100%;
  background: url("./assets/background.jpg") no-repeat;
  background-position: 100% 100%;
  background-size: cover;
}
.el-dropdown-menu__item:not(.is-disabled):hover,
.el-dropdown-menu__item:focus {
  background: #409eff !important;
  color: #fff !important;
  a {
    color: #fff;
  }
}
</style>
