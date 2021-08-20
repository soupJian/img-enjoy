import request from '@/utils/axios'
import {ImgRes} from '@/utils/data'
export const getHotImg = async():Promise<ImgRes>=>{
  const res = await request({
    url: '/hot_img',
    method:'GET'
  })
  return res as ImgRes
}