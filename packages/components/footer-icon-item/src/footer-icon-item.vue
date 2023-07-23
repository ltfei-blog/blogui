<script setup lang="ts">
import { BIcon } from '../../icon/'
import { FooterIconItemClickEvent } from './types'
defineOptions({
  name: 'BFooterIconItem'
})
withDefaults(
  defineProps<{
    icon?: object
    iconActive?: object
    text?: string
    iconSize?: number
    modelValue?: boolean
    // id 用于在评论组件中区分是哪个评论的数据
    id?: string | number
  }>(),
  {
    iconSize: 16
  }
)
const emit = defineEmits<{
  (event: 'click', data: FooterIconItemClickEvent): void
}>()
</script>

<template>
  <div
    class="b-footer-icon-item"
    :class="modelValue ? 'b-footer-icon-item_active' : ''"
    @click="emit('click', { value: modelValue || false, id })"
  >
    <slot name="icon">
      <template v-if="icon || iconActive">
        <b-icon class="icon" :size="iconSize">
          <component v-if="icon && !modelValue" :is="icon" />
          <component v-if="iconActive && modelValue" :is="iconActive" />
        </b-icon>
      </template>
    </slot>
    <slot name="text">
      <div class="text">{{ text }}</div>
    </slot>
  </div>
</template>

<style lang="less" scoped>
// todo: 统一定义主题色
@import url(../../../theme/var.less);
.b-footer-icon-item {
  margin-right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  .icon {
    margin-right: 8px;
  }
  &.b-footer-icon-item_active,
  &:hover {
    color: @primary;
  }
}
</style>
