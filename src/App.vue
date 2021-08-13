<template>
  <el-container>
    <el-header>
      <el-button type="text">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      <el-button
        type="text"
        @click="handleToLogin"
      >登录</el-button>
      <el-button type="primary">
        <router-link to="/register">注册账号</router-link>
      </el-button>
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
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const handleToLogin = () => {
      router.push("/login");
    };
    return {
      handleToLogin,
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
