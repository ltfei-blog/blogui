<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'BImage'
})
defineProps<{
  src: string
  alt?: string
  fit?: '' | 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}>()
const emit = defineEmits(['error', 'load'])

const error = ref(false)
const onError = (err: Event) => {
  emit('error', err)
  error.value = true
}

defineSlots()
</script>

<template>
  <div class="b-image">
    <div class="b-image_error" v-if="error">
      <slot name="error">FAILED</slot>
    </div>
    <img
      class="b-image_inner"
      :src="src"
      :alt="alt"
      @error="onError"
      @load="$emit('load')"
      v-else
    />
  </div>
</template>

<style lang="less" scoped>
.b-image {
  overflow: hidden;
  .b-image_inner {
    width: 100%;
    height: 100%;
    object-fit: v-bind('$props.fit');
  }
}
</style>
