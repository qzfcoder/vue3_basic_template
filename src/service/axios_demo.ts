import axios from 'axios'
// (method) Axios.get<any, AxiosResponse<any, any>, any>(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'qzf'
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'qzf'
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// axios的配置选项
axios.defaults.baseURL = 'http://httpbin.org/'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}
axios
  .get('/get', {
    timeout: 2000, // 可以单独设置
    params: {
      name: 'qzf'
    }
  })
  .then((res) => {
    console.log(res)
  })

axios
  .post('post', {
    data: {
      name: 'qzf'
    }
  })
  .then((res) => {
    console.log(res)
  })

// axios.all
axios
  .all([
    axios.get('/get', { params: { name: '1' } }),
    axios.get('/get', { params: { name: '2' } })
  ])
  .then((res) => {
    console.log(res)
  })
// axios的拦截操作
// fn1请求发送成功，fn2请求发送失败的时候使用的函数
axios.interceptors.request.use(
  (config) => {
    // 做自己想做的操作
    // 例如：添加token，加载动画
    return config
  },
  (err) => {
    console.log(err)
    return err
  }
)
// fn1数据想要成功
axios.interceptors.response.use(
  (res) => {
    // 做自己想做的操作
    // 例如：添加token，加载动画
    return res
  },
  (err) => {
    console.log(err)
    return err
  }
)
