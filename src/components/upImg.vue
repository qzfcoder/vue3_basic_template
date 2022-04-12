<template>
  <vue-picture-cropper
    :boxStyle="{
      width: '100%',
      height: '100%',
      backgroundColor: '#f8f8f8',
      margin: 'auto'
    }"
    :img="pic"
    :options="{
      viewMode: 1,
      dragMode: 'crop',
      aspectRatio: 16 / 9,
      preview: preview
    }"
    @ready="ready"
  />
</template>

<script>
import { defineComponent } from 'vue'
import VuePictureCropper, { cropper } from 'vue-picture-cropper'
export default defineComponent({
  components: {
    VuePictureCropper
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
