import request from '@/utils/axios'
import {uploadRes,hotImgRes} from './data'

export const postUpload = async(data:FormData):Promise<uploadRes> =>{
  const res = await request({
    url: '/upload',
    method: 'POST',
    data,
    headers: {"content-type": "multipart/form-data"}
  })
  return res as uploadRes
}
export const getHotImg = async():Promise<hotImgRes>=>{
  const res = await request({
    url: '/hot_img',
    method:'GET'
  })
  return res as hotImgRes
}