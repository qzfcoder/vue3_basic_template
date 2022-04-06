// const BASE_URL = 'http://development'
// 更具process.env.NODE_ENV
// 开发环境 development
// 生产环境 production
// 测试环境 test
let BASE_URL = ''
let BASE_NAME = ''

if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'production'
  BASE_NAME = 'production'
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'development'
  BASE_NAME = 'development'
} else {
  BASE_URL = 'test'
  BASE_NAME = 'test'
}

export { BASE_URL, BASE_NAME }
