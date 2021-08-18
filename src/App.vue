<template>
  <el-container>
    <el-header>
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
      <el-dropdown>
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
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
    <el-main>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </el-main>
    <el-footer>
      <p>本站已托管 100,00.00 张图片</p>
      <p>访客：123</p>
    </el-footer>
  </el-container>

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
    return {
      user,
      handleToLogin,
      handleShowUpload,
    };
  },
});
</script>

<style lang="scss">
.el-dropdown-menu__item:not(.is-disabled):hover,
.el-dropdown-menu__item:focus {
  background: #409eff !important;
  color: #fff !important;
}
body,
#app {
  width: 100%;
  height: 100%;
  background: url("./assets/background.jpg") no-repeat;
  background-position: 100% 100%;
  background-size: cover;
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
