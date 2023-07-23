<script setup lang="ts">
defineOptions({
  name: 'BTransitionZoomY'
})
const onLeval = (el: Element) => {
  const { clientHeight } = el
  ;(el as HTMLElement).style.setProperty('--leave-from-height', clientHeight + 'px')
}
</script>

<template>
  <transition name="b-transition-zoom-y" @leave="onLeval">
    <slot></slot>
  </transition>
</template>

<style lang="less" scoped>
.b-transition-zoom-y-enter-active {
  transition: all 0.3s;
  transform-origin: center top;
}

.b-transition-zoom-y-leave-active {
  transition: all 0.3s;
  transform-origin: center top;
}

.b-transition-zoom-y-enter-from {
  opacity: 0;
  transform: scaleY(0);
}
.b-transition-zoom-y-enter-to {
  opacity: 1;
  transform: scaleY(1);
}
.b-transition-zoom-y-leave-from {
  opacity: 1;
  height: var(--leave-from-height);
  transform: scaleY(1);
}
.b-transition-zoom-y-leave-to {
  opacity: 0;
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  transform: scaleY(0);
}
</style>
