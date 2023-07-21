<script setup lang="ts">
import { Comment } from '@ltfei-blog/blogui'
import { GoodTwo as IconGoodTwo, Comment as IconComment } from '@icon-park/vue-next'

const comments: Comment[] = [
  {
    id: '0',
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/qNuBAn7WLCxgqheUHPPFSlxof70yo9jWnZPPv8BiaMcxBzekOfQp2uwUOyjzL5DwdCkeawmaUf41sfF1ibgeGoIw/132',
    content: '评论1',
    date: '2023-7-20',
    likeCount: 200,
    userId: 0,
    username: 'XING',
    isAuthor: false,
    data1: 1,
    reply: [
      {
        id: '0',
        replyCommentId: 0,
        replyCount: 0,
        replyToReplyId: 0,
        avatar: 'https://www.alongw.cn/icon/logo.jpg',
        content: '评论1 的回复',
        date: '2023-7-20',
        likeCount: 200,
        userId: 0,
        username: 'alongw',
        isAuthor: false
      },
      {
        id: '0',
        replyCommentId: 0,
        replyCount: 0,
        replyToReplyId: 0,
        avatar:
          'https://thirdwx.qlogo.cn/mmopen/vi_32/qNuBAn7WLCxgqheUHPPFSlxof70yo9jWnZPPv8BiaMcxBzekOfQp2uwUOyjzL5DwdCkeawmaUf41sfF1ibgeGoIw/132',
        content: '评论1 的回复的回复',
        date: '2023-7-20',
        likeCount: 200,
        userId: 0,
        username: 'XING',
        isAuthor: false
      }
    ]
  },
  {
    id: '0',
    avatar: 'https://www.alongw.cn/icon/logo.jpg',
    content: '这个组件库真好用',
    date: '2023-7-20',
    likeCount: 200,
    userId: 0,
    username: 'alongw',
    isAuthor: false,
    data1: 1,
    reply: [
      {
        id: '0',
        replyCommentId: 0,
        replyCount: 0,
        replyToReplyId: 0,
        avatar:
          'https://thirdwx.qlogo.cn/mmopen/vi_32/qNuBAn7WLCxgqheUHPPFSlxof70yo9jWnZPPv8BiaMcxBzekOfQp2uwUOyjzL5DwdCkeawmaUf41sfF1ibgeGoIw/132',
        content: '你别说， 还真是',
        date: '2023-7-20',
        likeCount: 200,
        userId: 0,
        username: 'XING',
        isAuthor: false
      }
    ]
  }
]
</script>

<template>
  <b-comment :data="comments">
    <template #footer>
      <b-comment-footer-item text="10">
        <template #icon>
          <icon-good-two size="16" />
        </template>
      </b-comment-footer-item>
      <b-comment-footer-item text="10">
        <template #icon>
          <icon-comment size="16" />
        </template>
      </b-comment-footer-item>
    </template>
  </b-comment>
</template>

<style lang="less" scoped></style>
