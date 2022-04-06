import type { AxiosRequestConfig, AxiosResponse } from 'axios'
// 请求拦截器接口,
export interface RequestInterceptors<T = AxiosResponse> {
  // 拦截器的类型就是AxiosRequestConfig
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 继承AxiosRequestConfig,在扩展出来一个interceptors
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}
