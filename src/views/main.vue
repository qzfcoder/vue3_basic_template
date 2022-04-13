<template>
  <div>main</div>
  <el-button>按钮test</el-button>
  <t-form v-bind="Config" v-model="formData"></t-form>
  <up-img></up-img>
  <!-- <div>{{ $store.state.name }}</div>
  <div>{{ asd }}</div> -->
</template>

<script lang="ts">
import upImg from '@/components/upImg.vue'
import { defineComponent, ref } from 'vue'
// import { useStore } from 'vuex'
import tForm from '@/base-ui/form.vue'
import { Config } from './config'
export default defineComponent({
  components: {
    upImg,
    tForm
  },
  setup(props) {
    const formItems = Config?.formItems ?? []
    const formOringData: any = {}
    for (const item of formItems) {
      formOringData[item.field] = ''
    }
    const formData = ref(formOringData)
    // const store = useStore()
    // const asd = computed(() => store.state.name)
    return { Config, formData }
  }
})
</script>

<style scoped></style>
