import request from '@/utils/axios'
import {registerData,loginData} from './data'

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