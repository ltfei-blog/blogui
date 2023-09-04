<script setup lang="ts">
import { BAvatar } from '../../avatar/'
import { BImage } from '../../image/'
import { formatDate } from '@ltfei-blog/blogui-utils/dayjs'
import { useMunuClick } from './card'

defineOptions({
  name: 'BCardOne'
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
    to?: string
    target?: '_self' | '_blank' | '_parent' | '_top'
    router?: boolean
  }>(),
  {
    viewUser: true
  }
)

const { handleClick } = useMunuClick(props.to, props.router)
</script>

<template>
  <a :href="to" :target="target" @click="handleClick" class="b-card">
    <div class="content">
      <div class="title">
        {{ title }}
      </div>
      <div class="desc">
        {{ desc }}
      </div>
      <footer class="footer">
        <div class="user" v-if="viewUser">
          <div class="avatar">
            <slot name="avatar">
              <b-avatar :src="avatar" fit="cover" />
            </slot>
          </div>
          <div class="username">User</div>
        </div>
        <div class="date">{{ formatDate(date) }}</div>
        <slot name="footer"></slot>
      </footer>
    </div>
    <div class="cover" v-if="cover">
      <b-image :src="cover" fit="cover" />
    </div>
  </a>
</template>

<style lang="less" scoped>
.b-card {
  background-color: #fff;
  padding: 15px;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #000;
  text-decoration: none;
  .content {
    flex: 1;
    width: 0;
    .title {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0px;
      line-height: 28.96px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .desc {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 27px;
    }
    .footer {
      display: flex;
      align-items: center;
      .user {
        display: flex;
        align-items: center;
        margin-right: 20px;
        .avatar {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          .b-avatar {
            width: 100%;
            height: 100%;
          }
        }
        .username {
          font-size: 12px;
        }
      }
      .date {
        margin-right: 20px;
        font-size: 14px;
        color: #666;
      }
    }
  }
  .cover {
    width: 122px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 15px;
    overflow: hidden;
    .b-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
