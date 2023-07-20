<script setup lang="ts">
import { BAvatar } from '../../avatar/index'
import { CommentContent } from './types'
defineOptions({
  name: 'BCommentItem'
})
interface Props extends CommentContent {
  isChild?: boolean
  // todo: 展开
  maxRow?: number
}
defineProps<Props>()
</script>

<template>
  <div class="b-comment-item" :class="isChild ? 'b-comment-child-item' : ''">
    <div class="avatar">
      <slot name="avatar" :src="avatar">
        <b-avatar :src="avatar"></b-avatar>
      </slot>
    </div>
    <div class="b-comment-item_content">
      <div class="username">{{ username }}</div>
      <div class="content">
        {{ content }}
      </div>
      <div class="footer">
        <div class="date">{{ date }}</div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.b-comment-item {
  display: flex;
  min-height: 70px;
  padding: 5px;
  box-sizing: border-box;
  .avatar {
    width: 43px;
    height: 43px;
    margin-right: 12px;
    .b-avatar {
      width: 100%;
      height: 100%;
    }
  }
  .b-comment-item_content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .username {
      font-size: 16px;
      font-weight: 400;
      color: rgb(146, 146, 146);
    }
    .content {
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: v-bind('$props.maxRow');
    }
    .footer {
      font-size: 12px;
      display: flex;
      align-items: center;
      .date {
        margin-right: 20px;
      }
    }
  }
}

.b-comment-child-item {
  margin-left: 52px;
  .avatar {
    width: 30px;
    height: 30px;
  }
}
</style>
