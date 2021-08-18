import { createStore } from 'vuex'
import {stateType} from './data'

export default createStore<stateType>({
  state: {
    showUpload: false // 是否展示上传面板
  },
  mutations: {
    toggleShowUpload(state:stateType){
      state.showUpload = !state.showUpload
    }
  },
  actions: {
  },
  modules: {
  }
})
