import { createStore } from 'vuex'
import {stateType} from './data'

export default createStore<stateType>({
  state: {
    showUpload: false, // 是否展示上传面板
    previewImage: '' // 预览图片
  },
  mutations: {
    toggleShowUpload(state:stateType){
      state.showUpload = !state.showUpload
    },
    handlePreviewImage(state:stateType,src){
      state.previewImage = src
    }
  },
  actions: {
  },
  modules: {
  }
})
