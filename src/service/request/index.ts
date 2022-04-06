// 导入axios使用
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestInterceptors, RequestConfig } from './type'

class TsRequest {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  // config:基本配置
  constructor(config: RequestConfig) {
    // axios.create来创建axios实例
    this.instance = axios.create(config)
    // 保存interceptors
    this.interceptors = config.interceptors
    // 在拦截器中使用传过来的拦截操作 (实例的拦截器)
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
  }
  // 通过传来的类型决定返回的类型
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
          console.log(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default TsRequest
