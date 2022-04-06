// service的统一的出口
import TsRequest from './request'
const tsRequest = new TsRequest({
  baseURL: '11',
  // 可以创建不同实例,不同的拦截器
  interceptors: {
    requestInterceptors: (config) => {
      // 可以增加拦截操作,增加token
      return config
    }
  }
})
export default tsRequest
