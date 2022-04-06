import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './service/axios_demo'
createApp(App).use(store).use(router).mount('#app')
console.log(process.env.VUE_APP_BASE_URL)
