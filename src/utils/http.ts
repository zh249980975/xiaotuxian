import axios from "axios";
import useLoginStore from "@/stores/loginStore";
import { ElMessage } from "element-plus";
import router from "@/router";

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios实例的请求拦截器
instance.interceptors.request.use(function (config) {
  // 获取token
  const store = useLoginStore()
  const token = store.userInfo?.token
  // 如果token存在将token拼接到header中
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
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
  ElMessage({
    type: 'warning',
    message: error.response.data.message
  })
  // 401token失效处理
  const store = useLoginStore()
  if (error.response.status == 401) {
    store.logout()
    router.push('/login')
  }
  return Promise.reject(error)
})
export default instance