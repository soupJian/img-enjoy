<template>
  <el-container>
    <el-header>

      <el-button type="text">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      <el-button type="text">登录</el-button>
      <el-button type="primary">注册账户</el-button>

    </el-header>
    <el-main>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </el-main>
  </el-container>

</template>

<style lang="scss">
body,
#app {
  width: 100%;
  height: 100%;
}
.el-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  color: #fff;
}
.el-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .el-button {
    color: #fff;
  }
  .el-button--primary {
    padding: 0 5px;
    min-height: 25px !important;
  }
}
</style>
