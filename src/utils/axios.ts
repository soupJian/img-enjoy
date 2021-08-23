import axios,{ AxiosRequestConfig } from 'axios';
import { ElMessage } from "element-plus";

// eslint-disable-next-line
const request = (data: AxiosRequestConfig):any => {
  const baseUrl= '/api'
  const url:string = baseUrl + data.url
  // 请求头
  const userStr:string | null = localStorage.getItem("user")
  let id: number | null = null
  if(userStr){
    id = JSON.parse(userStr).id
  }
  return new Promise((resolve,reject) => {
    axios({
      url,
      method:data.method,
      data: data.data ? data.data: null,
      params: data.params ? data.params : null,
      headers: {"id": id}
    }).then((res:{data:{code:number,message:string}})=>{
      if(res.data.code === 0){
        ElMessage({
          message: res.data.message,
          type: "error",
          center: true,
        });
      }else{
        resolve(res.data)
      }
    })
    .catch(err=>{
      ElMessage({
        message: err,
        type: "error",
        center: true,
      });
      reject(err)
    })
  })
  
}

export default request;