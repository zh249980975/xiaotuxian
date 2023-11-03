import axios from "axios";

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios实例的请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求前做的事
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
})

// axios实例的响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx的状态码都会触发该函数，对响应数据做些什么
  return response
}, function (error) {
  // 2xx外的状态码会触发该函数，对响应错误做些什么
  return Promise.reject(error)
})
export default instance