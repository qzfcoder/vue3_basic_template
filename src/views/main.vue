<template>
  <div>main</div>
  <up-img></up-img>
  <!-- <div>{{ $store.state.name }}</div>
  <div>{{ asd }}</div> -->
</template>

<script lang="ts">
import upImg from '@/components/upImg.vue'
import { computed, defineComponent } from 'vue'
// import { useStore } from 'vuex'
export default defineComponent({
  components: {
    upImg
  },
  setup() {
    // const store = useStore()
    // const asd = computed(() => store.state.name)
    // return { asd }
  }
})
</script>

<style scoped></style>
