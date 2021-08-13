import axios,{ AxiosPromise, AxiosRequestConfig } from 'axios';



const request = (data: AxiosRequestConfig):AxiosPromise  => {
  const baseUrl= '/api'
  const url:string = baseUrl + data.url
  return new Promise((resolve, reject) => {
    return axios({
      url,
      method:data.method,
      data: data.data ? data.data: null,
      params: data.params ? data.params : null
    })
  })
}

export default request;