<script setup lang="ts">
import { computed } from 'vue'
import BImage from '../../image/'
defineOptions({
  name: 'BAvatar'
})

const props = withDefaults(
  defineProps<{
    src?: string
    fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
    alt?: string
    shape?: 'circle' | 'square'
    size?: number | 'large' | 'default' | 'small'
  }>(),
  {
    size: 'default',
    shape: 'circle',
    fit: 'cover'
  }
)
defineEmits(['error'])

const radius = computed(() => {
  return props.shape == 'circle' ? 50 : 10
})
const size = computed(() => {
  if (typeof props.size == 'number') {
    return props.size
  }
  if (props.size == 'default') {
    return 50
  } else if (props.size == 'large') {
    return 60
  } else if (props.size == 'small') {
    return 40
  }
})
/**
 * todo：
 * 头像框
 * 头像徽章（不同方位
 */
</script>

<template>
  <div class="b-avatar">
    <slot>
      <b-image
        class="b-avatar_inner"
        v-if="src"
        :src="src"
        :fit="fit"
        @error="(e) => $emit('error', e)"
      ></b-image>
      <slot v-else name="error">FAILED</slot>
    </slot>
  </div>
</template>

<style lang="less" scoped>
.b-avatar {
  width: v-bind('size+"px"');
  height: v-bind('size+"px"');
  border-radius: v-bind('radius + "%"');
  background-color: #d4d4d4aa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  .b-avatar_inner {
    width: 100%;
    height: 100%;
  }
}
</style>
