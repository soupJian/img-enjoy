import request from '@/utils/axios'
import {registerData,loginData} from './data'
import {ImgRes} from '@/utils/data'

// 注册
export const getRegister = async (data:{name:string,password:string}):Promise<registerData> =>{
  const res = await request({
    url: '/register',
    method: 'POST',
    data,
  })
  return res as registerData
}
// 登录
export const getLogin = async (data:{name:string,password:string}):Promise<loginData> =>{
  const res = await request({
    url: '/login',
    method: 'POST',
    data,
  })
  return res as loginData
}
export const getSelfUpload = async():Promise<ImgRes> => {
  const res = await request({
    url: '/self_upload'
  })
  return res as ImgRes
}
export const getSelfLove = async():Promise<ImgRes> => {
  const res = await request({
    url: '/self_love'
  })
  return res as ImgRes
}