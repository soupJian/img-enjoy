<template>
  <div class="user">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>登录</span>
          <el-button
            class="button"
            type="text"
            @click="handleBack"
          >返回</el-button>
        </div>
      </template>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="login"
        class="loginForm"
      >
        <el-form-item
          label="账号"
          prop="name"
        >
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleSubmitForm()"
          >登录</el-button>
          <el-button @click="handleResetForm()">重置</el-button>
        </el-form-item>
        <div class="loginAction">
          <el-button
            type="text"
            @click="handleToRegister"
          >注册</el-button>
          <el-button
            type="text"
            @click="handleToForget"
          >忘记密码</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();
    const login = ref<null | HTMLFormElement>(null);
    const state = reactive({
      loginForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { max: 6, message: "账号名限制六个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    });
    // const loginForm = ref(null);
    const handleSubmitForm = () => {
      if (login.value && login.value.validate) {
        login.value.validate((valid: boolean) => {
          if (valid) {
            // 如果表单都校验通过
            console.log(state.loginForm);
          } else {
            // 校验失败
            ElMessage({
              message: "请完善表单信息",
              type: "warning",
              center: true,
            });
            return false;
          }
        });
      }
    };

    const handleResetForm = () => {
      if (login.value) {
        login.value.resetFields();
      }
    };

    const handleBack = () => {
      router.replace("/");
    };
    const handleToRegister = () => {
      console.log("注册");
    };
    const handleToForget = () => {
      console.log("注册");
    };
    return {
      login,
      ...toRefs(state),
      handleSubmitForm,
      handleResetForm,
      handleBack,
      handleToRegister,
      handleToForget,
    };
  },
});
</script>
<style lang="scss" scoped>
.user {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .box-card {
    width: 50%;
    min-width: 300px;
    margin: 0 auto;
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .loginForm {
      text-align: center;
      .loginAction {
        display: flex;
        justify-content: space-between;
        .el-button {
          padding: 0;
        }
      }
    }
  }
}
</style>