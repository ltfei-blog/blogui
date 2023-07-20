<script setup lang="ts">
import { Comment, CommentContent, CommentReply } from './types'
import CommentItem from './CommentItem.vue'
defineOptions({
  name: 'BComment'
})
defineProps<{
  data: Comment[]
}>()

const defineBinds = (data: Comment | CommentReply): CommentContent => {
  const { content, date, userId, avatar, username, likeCount, isAuthor } = data
  return {
    content,
    date,
    userId,
    avatar,
    username,
    likeCount,
    isAuthor
  }
}
</script>

<template>
  <div class="b-comment">
    <template v-for="item in data">
      <comment-item v-bind="defineBinds(item)">
        <template #avatar="data">
          <slot name="avatar" :data="data" :row="item"></slot>
        </template>
        <template #footer>
          <slot name="footer" :row="item"></slot>
        </template>
      </comment-item>
      <comment-item v-for="reply in item.reply" v-bind="defineBinds(reply)" is-child>
        <template #avatar="data">
          <slot name="avatar" :data="data" :row="reply"></slot>
        </template>
        <template #footer>
          <slot name="footer" :row="reply"></slot>
        </template>
      </comment-item>
    </template>
  </div>
</template>

<style lang="less" scoped></style>
