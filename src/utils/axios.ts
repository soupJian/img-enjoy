import axios,{ AxiosPromise, AxiosRequestConfig } from 'axios';
import { ElMessage } from "element-plus";


const request = (data: AxiosRequestConfig) => {
  const baseUrl= '/api'
  const url:string = baseUrl + data.url
  return new Promise((resolve,reject) => {
    axios({
      url,
      method:data.method,
      data: data.data ? data.data: null,
      params: data.params ? data.params : null
    }).then((res:{data:any})=>{
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
      reject(err)
    })
  })
  
}

export default request;