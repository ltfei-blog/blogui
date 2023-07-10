<script setup lang="ts">
defineOptions({
  name: 'BButton'
})

withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
    disabled?: boolean
  }>(),
  {
    type: 'default'
  }
)
</script>

<template>
  <button class="b-button" :class="`b-button_${type}`" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
@import url(./button.less);
</style>
