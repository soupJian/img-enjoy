import request from '@/utils/axios'
import {uploadRes} from './data'

export const postUpload = async(data:FormData):Promise<uploadRes> =>{
  const res = await request({
    url: '/upload',
    method: 'POST',
    data,
    headers: {"content-type": "multipart/form-data"}
  })
  return res as uploadRes
}