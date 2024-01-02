<script setup lang="ts">
import { Comment, CommentContent, CommentReply, CommentReplyEvent } from './types'
import { FooterIconItemClickEvent } from '../../footer-icon-item/'
import CommentItem from './CommentItem.vue'
defineOptions({
  name: 'BComment'
})
defineProps<{
  data: Comment[]
}>()
const emit = defineEmits<{
  (event: 'like', data: FooterIconItemClickEvent): void
  (event: 'unLike', data: FooterIconItemClickEvent): void
  (event: 'clickLike', value: FooterIconItemClickEvent): void
  (event: 'reply', value: CommentReplyEvent): void
}>()
const defineBinds = (data: Comment | CommentReply): CommentContent => {
  const { content, date, userId, avatar, username, likeCount, isAuthor, id, liked } = data
  return {
    content,
    date,
    userId,
    avatar,
    username,
    likeCount,
    isAuthor,
    id,
    liked
  }
}
const defineEvents = () => {
  return {
    like: (e: FooterIconItemClickEvent) => emit('like', e),
    unLike: (e: FooterIconItemClickEvent) => emit('unLike', e),
    clickLike: (e: FooterIconItemClickEvent) => emit('clickLike', e),
    reply: (value: CommentReplyEvent) => emit('reply', value)
  }
}
</script>

<template>
  <div class="b-comment">
    <template v-for="item in data" :key="item.id">
      <comment-item v-bind="defineBinds(item)" v-on="defineEvents()">
        <template #avatar="data">
          <slot name="avatar" :data="data" :row="item"></slot>
        </template>
        <template #footer>
          <slot name="footer" :row="item"></slot>
        </template>
        <template #likeIcon>
          <slot name="likeIcon" :row="item"></slot>
        </template>
      </comment-item>
      <comment-item
        v-for="reply in item.reply"
        :key="reply.id"
        v-bind="defineBinds(reply)"
        v-on="defineEvents()"
        is-child
      >
        <template #avatar="data">
          <slot name="avatar" :data="data" :row="reply"></slot>
        </template>
        <template #footer>
          <slot name="footer" :row="reply"></slot>
        </template>
        <template #likeIcon>
          <slot name="likeIcon" :row="reply"></slot>
        </template>
      </comment-item>
    </template>
  </div>
</template>

<style lang="less" scoped></style>
