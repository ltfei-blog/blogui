<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
defineOptions({
  name: 'BIcon'
})

const props = defineProps<{
  size?: number | string
  color?: string
}>()

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    fontSize: typeof size == 'string' ? size : size + 'px',
    color: color
  }
})
</script>

<template>
  <i class="b-icon" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>
