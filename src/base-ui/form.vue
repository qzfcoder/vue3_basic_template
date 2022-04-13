<template>
  <el-form :label-width="labelWidth">
    <el-row>
      <template v-for="item in formItems" :key="item.label">
        <el-col v-bind="colLayout">
          <el-form-item
            v-if="!item.isHidden"
            :style="itemstyle"
            :label="item.label"
            :rules="item.rules"
          >
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
                v-model="formData[`${item.field}`]"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select
                :placeholder="item.placeholder"
                v-model="formData[`${item.field}`]"
              >
                <el-option
                  v-for="option in item.options"
                  :value="option.value"
                  :key="option.value"
                  >{{ option.title }}</el-option
                >
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker
                style="width: 100%"
                v-bind="item.otherOptions"
                v-model="formData[`${item.field}`]"
              ></el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, watch } from 'vue'
import { IFormItem } from './type'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemstyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newVal) => {
        emit('update:modelValue', newVal)
      },
      { deep: true }
    )
    console.log(props.formItems)
    return {
      formData
    }
  }
})
</script>

<style lang="scss" scoped></style>
