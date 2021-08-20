import request from '@/utils/axios'
import {ImgRes} from '@/utils/data'
import {info} from './data'
export const getHotImg = async():Promise<ImgRes>=>{
  const res = await request({
    url: '/hot_img',
    method:'GET'
  })
  return res as ImgRes
}
export const getInfo = async():Promise<info> =>{
  const res = await request({
    url: '/info',
    method:'GET'
  })
  return res as info
}