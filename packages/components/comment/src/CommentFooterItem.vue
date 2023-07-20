<script setup lang="ts">
// todo: 考虑和CardFooterItem合并成一个组件
defineOptions({
  name: 'BCommentFooterItem'
})
defineProps<{
  icon?: string | object
  text?: string
}>()
defineEmits(['click'])
</script>

<template>
  <div class="b-comment-footer-item">
    <slot name="icon">
      <template v-if="icon">
        <div class="icon" v-if="typeof icon == 'string'">{{ icon }}</div>
        <div class="icon" v-else>
          <component :is="icon" />
        </div>
      </template>
    </slot>
    <slot name="text">
      <div class="text">{{ text }}</div>
    </slot>
  </div>
</template>

<style lang="less" scoped>
.b-comment-footer-item {
  margin-right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .icon {
    margin-right: 8px;
  }
}
</style>
