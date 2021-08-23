import request from '@/utils/axios'
import {uploadRes} from './data'

export const postUpload = async(data:FormData):Promise<uploadRes> =>{
  return await request<uploadRes>({
    url: '/upload',
    method: 'POST',
    data,
    headers: {"content-type": "multipart/form-data"}
  })
}
