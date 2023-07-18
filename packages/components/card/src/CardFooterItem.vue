<script setup lang="ts">
defineOptions({
  name: 'BCardFooterItem'
})
defineProps<{
  icon?: string
  text?: string
}>()
defineEmits(['click'])
</script>

<template>
  <div class="b-card-footer-item" @click="(e) => $emit('click', e)">
    <slot name="icon">
      <div class="icon">{{ icon }}</div>
    </slot>
    <slot name="text">
      <div class="text">{{ text }}</div>
    </slot>
  </div>
</template>

<style lang="less" scoped>
.b-card-footer-item {
  margin-right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .icon {
    margin-right: 8px;
  }
}
</style>
