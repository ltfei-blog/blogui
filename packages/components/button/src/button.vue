<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'BButton'
})

// const classString = ['default']
const disabled = ref(false)
</script>

<template>
  <button :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
