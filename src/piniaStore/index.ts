// cnpm install pinia --save
// cnpm i pinia-plugin-persist --save 辅助实现数据持久化
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()

store.use(piniaPluginPersist) // 数据持久化

export default store
