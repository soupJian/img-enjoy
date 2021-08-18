<template>
  <div class="image-wrap">
    <div
      class="item"
      v-for="item of imgList"
      :key="item.id"
    >
      <el-image
        :src="item.src"
        alt=""
        lazy
      />
      <div class="des">
        {{item.des}}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const imgList = ref<any>([
      {
        id: 1,
        src: "https://cdn.pixabay.com/photo/2019/03/07/13/00/clouds-4040132__340.jpg",
        des: "123",
      },
      {
        id: 2,
        src: "https://cdn.pixabay.com/photo/2021/06/07/22/42/tulips-6319208__340.jpg",
        des: "234",
      },
      {
        id: 3,
        src: "https://cdn.pixabay.com/photo/2021/07/29/20/47/church-6508068__340.jpg",
        des: "米搜狐",
      },
      {
        id: 3,
        src: "https://cdn.pixabay.com/photo/2021/08/04/15/38/mountains-6522018__340.jpg",
        des: "hhh",
      },
      {
        id: 4,
        src: "https://cdn.pixabay.com/photo/2021/07/25/12/04/monkey-6491669__340.jpg",
        des: "d",
      },
      {
        id: 5,
        src: "//icon.qiantucdn.com/static/images/logo-new.png",
        des: "ashd",
      },
    ]);
    return {
      imgList,
    };
  },
});
</script>
<style lang="scss" scoped>
.image-wrap {
  padding: 0 20px 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  .item {
    position: relative;
    margin-left: 10px;
    margin-bottom: 10px;
    &:hover {
      .des {
        opacity: 1;
      }
    }
    img {
      width: 100%;
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
