<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'
import { BAvatar } from '../../avatar/'
import { BImage } from '../../image/'
defineOptions({
  name: 'BCard'
})
const props = defineProps<{
  avatar: string
  username: string
  title: string
  desc: string
  cover?: string
  // todo: autoCollapse
  collapse?: boolean
  autoCollapse?: number
}>()

/**
 * 监听resize的折叠选项
 */
const collapse = ref(false)
const onResize = () => {
  if (!props.autoCollapse) {
    return
  }
  collapse.value = document.body.clientWidth < props.autoCollapse
}
const autoCollapse = () => {
  window.addEventListener('resize', onResize)
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
}
if (props.autoCollapse) {
  autoCollapse()
}

/**
 * props.collapse 和 autoCollapse 综合的折叠选项
 */
const isCollapse = computed(() => {
  return props.collapse || collapse.value
})
</script>

<template>
  <div class="b-card" :class="isCollapse ? 'b-card_collapse' : ''">
    <header class="b-card_header">
      <!-- todo: 插槽 -->
      <b-avatar class="b-card_avatar" :src="avatar" :size="38"></b-avatar>
      <div class="right">
        <div class="username">{{ username }}</div>
        <!-- todo: 封装formatDate formatUsername -->
        <div class="date">date</div>
      </div>
    </header>
    <div class="b-card_content">
      <div class="info">
        <div class="title">{{ title }}</div>
        <div class="desc">{{ desc }}</div>
      </div>
      <div class="cover" v-if="cover">
        <b-image :src="cover" fit="cover"></b-image>
      </div>
    </div>
    <footer class="b-card_footer">
      <!-- todo: 按钮图标 -->
      <div class="b-card_footer_item">73</div>
      <div class="b-card_footer_item">73</div>
      <div class="b-card_footer_item">73</div>
    </footer>
  </div>
</template>

<style lang="less" scoped>
.b-card {
  padding: 20px;
  border-radius: 25px;
  background-color: #fff;
  --min: 500px;
}
.b-card_header {
  display: flex;

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    .username {
      font-size: 14px;
      font-weight: 500;
    }
    .date {
      font-size: 12px;
      font-weight: 400;
      color: rgba(92, 92, 92, 1);
    }
  }
}
.b-card_content {
  height: 115px;
  display: flex;
  margin-left: 48px;
  align-items: center;
  .info {
    flex: 1;
    width: 0;
    .title {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      height: 62px;
    }
    // margin-right: 22px;
    padding-right: 22px;
    box-sizing: border-box;
  }
  .cover {
    width: 138px;
    height: 102px;
    flex-shrink: 0;
    // margin-left: 22px;
    .b-image {
      width: 100%;
      height: 100%;
    }
  }
}
.b-card_footer {
  margin-left: 48px;
  display: flex;
  align-items: center;
  .b-card_footer_item {
    margin-right: 20px;
  }
}
// 折叠相关样式
.b-card {
  .b-card_content,
  .b-card_footer {
    transition: margin 0.3s;
  }
}

.b-card_collapse {
  .b-card_content,
  .b-card_footer {
    transition: margin 0.3s;
    margin-left: 0;
  }
}
</style>
