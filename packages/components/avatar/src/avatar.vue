<script setup lang="ts">
import { HTMLAttributes, computed } from 'vue'
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
    avatar_badge_placement?:
      | 'left-top'
      | 'right-top'
      | 'left-bottom'
      | 'right-bottom'
      | {
          left?: string
          right?: string
          bottom?: string
          top?: string
        }
  }>(),
  {
    size: 'default',
    shape: 'circle',
    fit: 'cover',
    avatar_badge_placement: 'right-bottom'
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
  // else default
  return 50
})
const frameSize = computed(() => {
  return props.avatar_frame_size || size.value
})
const placementStyle = computed((): HTMLAttributes['style'] => {
  if (typeof props.avatar_badge_placement == 'object') {
    return props.avatar_badge_placement
  }
  if (props.avatar_badge_placement == 'left-top') {
    return {
      left: 0,
      top: 0
    }
  } else if (props.avatar_badge_placement == 'right-top') {
    return {
      top: 0,
      right: 0
    }
  } else if (props.avatar_badge_placement == 'left-bottom') {
    return {
      bottom: 0,
      left: 0
    }
  } else if (props.avatar_badge_placement == 'right-bottom') {
    return {
      bottom: 0,
      right: 0
    }
  }
  // else default
  return {
    left: 0,
    top: 0
  }
})
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
    <div class="b-image_badge" :style="placementStyle">
      <slot name="badge"></slot>
    </div>
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
  .b-image_badge {
    display: inline-block;
    position: absolute;
  }
}
</style>
