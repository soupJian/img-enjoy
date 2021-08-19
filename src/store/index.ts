import { createStore } from 'vuex'
import {user,stateType} from './data'
const getUser = ():user =>{
  const localUserStr:string|null =localStorage.getItem("user")
  let user:user = {
    id:null,
    name: null
  }
  if(localUserStr){
    user = JSON.parse(localUserStr)
  }
  return user
}

export default createStore<stateType>({
  state: {
    showUpload: false, // 是否展示上传面板
    previewImage: '', // 预览图片
    user: getUser()
  },
  mutations: {
    toggleShowUpload(state:stateType){
      state.showUpload = !state.showUpload
    },
    handlePreviewImage(state:stateType,src:string){
      state.previewImage = src
    },
    setUser(state:stateType,user:user){
      if(user.id){
        localStorage.setItem("user", JSON.stringify(user));
      }
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
