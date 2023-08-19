<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAutoSize } from './utils'
import { InputExpose } from './types'

defineOptions({
  name: 'BInput'
})

const props = withDefaults(
  defineProps<{
    modelValue?: string
    value?: string
    placeholder?: string
    type?: 'text' | 'textarea'
    rows?: number
    autosize?:
      | boolean
      | {
          minRows: number
          maxRows: number
        }
    name?: string
  }>(),
  {
    type: 'text',
    rows: 2
  }
)
const emit = defineEmits(['update:modelValue'])
const textarea = ref<HTMLTextAreaElement>()
const inputRef = ref<HTMLInputElement>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
onMounted(() => {
  if (!textarea.value) {
    return
  }
  if (props.autosize) {
    if (typeof props.autosize == 'boolean') {
      useAutoSize(textarea.value)
    } else {
      useAutoSize(textarea.value, props.autosize.minRows, props.autosize.maxRows)
    }
  }
})

/**
 * 清除 input 值
 */
const clear = () => {
  emit('update:modelValue', '')
}
/**
 * 使 input 失去焦点
 */
const blur = () => {
  textarea.value && textarea.value.blur()
  inputRef.value && inputRef.value.blur()
}
/**
 * 使 input 获取焦点
 */
const focus = () => {
  textarea.value && textarea.value.focus()
  inputRef.value && inputRef.value.focus()
}

defineExpose(<InputExpose>{
  clear,
  blur,
  focus,
  input: inputRef,
  textarea: textarea,
  ref: inputRef || textarea
})
</script>

<template>
  <div class="b-input">
    <input
      v-if="type == 'text'"
      ref="inputRef"
      class="b-input_inner"
      type="text"
      :value="modelValue || value"
      @input="onInput"
      :placeholder="placeholder"
      :name="name"
    />
    <textarea
      v-else-if="type == 'textarea'"
      class="b-input_textarea"
      ref="textarea"
      :value="modelValue || value"
      @input="onInput"
      :rows="rows"
      :placeholder="placeholder"
      :name="name"
    ></textarea>
  </div>
</template>

<style lang="less" scoped>
@import url(../../../theme/var.less);
.b-input {
  --line-height: 14px;
  border-radius: 5px;
  margin: 5px 0;
  .b-input_inner,
  .b-input_textarea {
    width: 100%;
    outline: none;
    border: none;
    padding: 6px 8px;
    box-sizing: border-box;
    background-color: #0000;
    transition: box-shadow 0.3s;
    // transition: all 0.3s;
    box-shadow: 0 0 0 1px #aaaa;
    border-radius: 5px;
    line-height: var(--line-height);
    &::placeholder {
      color: #aaa;
      font-size: 14px;
      font-weight: 500;
    }
    &:hover {
      box-shadow: 0 0 0 1px #9e9e9e;
    }
    &:focus {
      box-shadow: 0 0 0 1px @primary;
    }
  }
}
</style>
