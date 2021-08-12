<template>
  <div class="home">
    <h1 class="title">免费图片上传</h1>
    <div class="des">
      <p>soup图床-免费稳定的图片上传和赏析服务</p>
      <p>全球CDN加速, 支持外链,支持多图上传，原图保存，最大单张10MB</p>
      <p>来自soup的<span class="mention">愤怒</span>，禁止上传<span class="mention">色情黑产等</span>违法图片</p>
    </div>
    <div class="upload">
      <el-button
        type="primary"
        round
        size="medium"
      >开始上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
    <div class="des mt">
      <p>本站已托管100,00.00张图片</p>
      <p>访客：123</p>
    </div>
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
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 100px 0 60px;
  background: url("../../assets/background.jpg") no-repeat;
  background-position: 100% 100%;
  background-size: cover;
  color: #fff;
  .title {
    font-size: 36px;
    text-align: center;
    font-weight: 600;
  }
  .des {
    margin: 20px;
    text-align: center;
    p {
      font-size: 22px;
      font-weight: 100;
      line-height: 30px;
      .mention {
        color: #00a7da;
      }
    }
  }
  .mt {
    margin-top: 100px;
  }
  .upload {
    margin-top: 60px;
    text-align: center;
  }
}
</style>
