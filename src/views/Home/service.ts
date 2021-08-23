import request from '@/utils/axios'
import {ImgRes} from '@/utils/data'
import {info} from './data'
export const getHotImg = async():Promise<ImgRes>=>{
  return await request<ImgRes>({
    url: '/hot_img',
    method:'GET'
  })
}
export const getInfo = async():Promise<info> =>{
  return await request<info>({
    url: '/info',
    method:'GET'
  })
}