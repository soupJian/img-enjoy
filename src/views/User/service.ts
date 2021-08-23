import request from '@/utils/axios'
import {registerData,loginData} from './data'
import {ImgRes} from '@/utils/data'

// 注册
export const getRegister = async (data:{name:string,password:string}):Promise<registerData> =>{
  return await request<registerData>({
    url: '/register',
    method: 'POST',
    data,
  })
}
// 登录
export const getLogin = async (data:{name:string,password:string}):Promise<loginData> =>{
  return await request<loginData>({
    url: '/login',
    method: 'POST',
    data,
  })
}
export const getSelfUpload = async():Promise<ImgRes> => {
  return await request<ImgRes>({
    url: '/self_upload'
  })
}
export const getSelfLove = async():Promise<ImgRes> => {
  return await request<ImgRes>({
    url: '/self_love'
  })
}