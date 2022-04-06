<template>
  <div>login</div>
  <div>piniaStore:{{ userStore.name }}--------{{ name }}</div>
  <button @click="changeStroeName">点击</button>
  <button @click="getMsg">获取信息</button>
  <div>{{ counterStore.count }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/piniaStore/user'
// import { useCounterStore } from '@/piniaStore/counter'
import { useCounterStore } from '@/piniaStore/counter_setup'
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const counterStore = useCounterStore()
    //state 也可以使用解构，但使用解构会使其失去响应式，这时候可以用 pinia 的 storeToRefs。
    const { name } = storeToRefs(userStore)
    const changeStroeName = () => {
      userStore.updatedName('qzf' + Math.floor(Math.random() * 10))
      console.log(userStore.fullName)
    }
    const getMsg = () => {
      const data = userStore.getDetail('qzf', 2)
      console.log(data)
    }
    // counter
    counterStore.count++
    // counterStore.$patch({ count: counterStore.count + 1 })
    // counterStore.increment()
    return {
      userStore,
      name,
      changeStroeName,
      getMsg,
      counterStore
    }
  }
})
</script>

<style scoped></style>
