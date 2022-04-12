import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: 'qzf',
      age: '24',
      height: '1.78'
    }
  },
  actions: {
    updatedName(name: string) {
      this.name = name
    },
    async getDetail(account: string, pwd: number) {
      setTimeout(() => {
        console.log(account + '_' + pwd)
      }, 1000)
      return 'asd'
    }
  },
  getters: {
    fullName: (state) => {
      return state.name + '丰'
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    // 可以自定义设置key
    strategies: [
      {
        key: 'my_user',
        storage: localStorage,
        paths: ['name', 'age'] // 默认是全部缓存，我们可以通过paths指定要持久化的字段
      }
    ]
  }
})
