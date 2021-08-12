<template>
  <div class="home">
    <h1 class="title">免费图片上传</h1>
    <div class="des">
      <p>免费稳定的图片上传和赏析服务</p>
      <p>全球CDN加速, 支持外链,支持多图上传，原图保存，最大单张10MB</p>
    </div>
    <div class="upload">
      <el-button
        type="primary"
        round
        size="medium"
      >开始上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
    <p class="unable">禁止上传<span class="mention">色情黑产等</span>违法图片</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
<style scoped lang="scss">
.home {
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
