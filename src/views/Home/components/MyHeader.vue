<template>
  <el-button
    type="text"
    @click="handleShowUpload"
  ><i class="el-icon-upload el-icon--right"></i>上传</el-button>
  <el-button
    type="text"
    @click="handleToLogin"
    v-if="!user.id"
  >登录</el-button>
  <el-button
    type="primary"
    v-if="!user.id"
  >
    <router-link to="/register">注册账号</router-link>
  </el-button>
  <el-dropdown v-if="user.id">
    <span
      class="el-dropdown-link"
      style="margin-left: 5px;"
    >
      <i class="el-icon-user-solid"></i>
      {{user.name}}
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <router-link to="/">首页</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/self_upload">我的上传</router-link>
        </el-dropdown-item>
        <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

interface user {
  id: null | number;
  name: null | string;
}
export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const user = computed(() => store.state.user as user);
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

<style lang="scss" scoped>
.el-button,
.el-dropdown-link {
  color: #fff;
}
</style>
