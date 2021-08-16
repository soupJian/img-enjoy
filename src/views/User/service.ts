import request from '@/utils/axios'
import {registerData} from './data'


// 注册
export const getRegister = async (data:{name:string,password:string}) =>{
  const {data:res} = await request({
    url: '/register',
    method: 'POST',
    data,
  })
  return res as registerData
}