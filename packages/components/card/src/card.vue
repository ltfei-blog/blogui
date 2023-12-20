<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { BAvatar } from '../../avatar/'
import { BImage } from '../../image/'
import { formatDate } from '@ltfei-blog/blogui-utils/dayjs'
import { useMunuClick } from './card'

defineOptions({
  name: 'BCard'
})

const props = withDefaults(
  defineProps<{
    avatar?: string
    username?: string
    date?: string | Date | number
    title: string
    desc: string
    viewUser?: boolean
    cover?: string
    collapse?: boolean
    autoCollapse?: number
    to?: string
    target?: '_self' | '_blank' | '_parent' | '_top'
    router?: boolean
  }>(),
  {
    viewUser: true
  }
)

const { handleClick } = useMunuClick(props.to, props.router)

/**
 * 监听resize的折叠选项
 */
const widthCollapse = ref(false)
const onResize = () => {
  if (!props.autoCollapse) {
    return
  }
  widthCollapse.value = document.body.clientWidth < props.autoCollapse
}
const useAutoCollapse = () => {
  window.addEventListener('resize', onResize)
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
}

onMounted(() => {
  if (props.autoCollapse) {
    useAutoCollapse()
  }
})

/**
 * props.collapse 和 autoCollapse 综合的折叠选项
 * 优先级 viewUser > collapse > autoCollapse
 */
const isCollapse = computed(() => {
  return !props.viewUser || props.collapse || widthCollapse.value
})
</script>

<template>
  <a
    class="b-card"
    :href="to"
    :target="target"
    @click="handleClick"
    :class="isCollapse ? 'b-card_collapse' : ''"
  >
    <header class="b-card_header" v-if="viewUser">
      <slot name="avatar" :avatar="avatar">
        <b-avatar class="b-card_avatar" :src="avatar" :size="38"></b-avatar>
      </slot>
      <div class="right">
        <div class="username">{{ username }}</div>
        <div class="date">{{ formatDate(date) }}</div>
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
      <!-- 隐藏用户信息时 日期在底部展示 -->
      <div class="date" v-if="!viewUser">2021-1-1</div>
      <slot name="footer"> </slot>
    </footer>
  </a>
</template>

<style lang="less" scoped>
.b-card {
  padding: 20px;
  border-radius: 25px;
  background-color: #fff;
  line-height: 1.3;
  color: #000;
  text-decoration: none;
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
      word-wrap: break-word;
    }
    // margin-right: 22px;
    padding-right: 22px;
    box-sizing: border-box;
  }
  .cover {
    width: 138px;
    height: 102px;
    flex-shrink: 0;
    border-radius: 15px;
    overflow: hidden;
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
  .date {
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
