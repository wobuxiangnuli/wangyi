//二次封装axios
import axios from "axios";


const service = axios.create({
    baseURL: '',
    timeout: 5000,
  });


  service.interceptors.request.use((config)=>{
    return config;
  }, (err)=> {
    // 对请求错误做些什么
    return Promise.reject(err);
  });

// 添加响应拦截器
service.interceptors.response.use(function (res) {
    
    return res;
  }, function (err) {
   
    return Promise.reject(err);
  });   

  export default service