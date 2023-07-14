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
    avatar_frame_src?: string
    avatar_frame_size?: number
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
const frameSize = computed(() => {
  return props.avatar_frame_size || size.value
})
/**
 * todo：
 * 头像徽章（不同方位
 */
</script>

<template>
  <div class="b-avatar">
    <div class="b-avatar_inner">
      <slot>
        <b-image
          class="b-avatar_image"
          v-if="src"
          :src="src"
          :fit="fit"
          @error="(e) => $emit('error', e)"
        ></b-image>
        <slot v-else name="error">FAILED</slot>
      </slot>
    </div>
    <slot name="frame">
      <b-image v-if="avatar_frame_src" class="b-image_frame" :src="avatar_frame_src" />
    </slot>
  </div>
</template>

<style lang="less" scoped>
.b-avatar {
  width: v-bind('size+"px"');
  height: v-bind('size+"px"');
  position: relative;
  .b-avatar_inner {
    width: 100%;
    height: 100%;
    border-radius: v-bind('radius + "%"');
    background-color: #d4d4d4aa;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
    .b-avatar_image {
      width: 100%;
      height: 100%;
    }
  }
  .b-image_frame {
    position: absolute;
    inset: 0;
    margin: auto;
    width: v-bind('frameSize+"px"');
    height: v-bind('frameSize+"px"');
  }
}
</style>
