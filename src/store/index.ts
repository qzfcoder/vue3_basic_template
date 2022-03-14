import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: '123'
    }
  }
})

export default store
