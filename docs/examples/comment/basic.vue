<script setup lang="ts">
import { ref } from 'vue'
import { Comment, CommentReply, FooterIconItemClickEvent } from '@ltfei-blog/blogui'
import { GoodTwo as IconGoodTwo } from '@icon-park/vue-next'

const comments = ref<Comment[]>([
  {
    id: '1',
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/qNuBAn7WLCxgqheUHPPFSlxof70yo9jWnZPPv8BiaMcxBzekOfQp2uwUOyjzL5DwdCkeawmaUf41sfF1ibgeGoIw/132',
    content: '评论1',
    date: '2023-7-20',
    likeCount: 813,
    userId: 0,
    username: 'XING',
    isAuthor: false,
    data1: 1,
    liked: false,
    reply: [
      {
        id: '2',
        replyCommentId: 1,
        replyCount: 0,
        replyToReplyId: 0,
        avatar: 'https://www.alongw.cn/icon/logo.jpg',
        content: '评论1 的回复',
        date: '2023-7-20',
        likeCount: 813,
        userId: 0,
        username: 'alongw',
        isAuthor: false,
        liked: false
      },
      {
        id: '3',
        replyCommentId: 0,
        replyCount: 0,
        replyToReplyId: 0,
        avatar:
          'https://thirdwx.qlogo.cn/mmopen/vi_32/qNuBAn7WLCxgqheUHPPFSlxof70yo9jWnZPPv8BiaMcxBzekOfQp2uwUOyjzL5DwdCkeawmaUf41sfF1ibgeGoIw/132',
        content: '评论1 的回复的回复',
        date: '2023-7-20',
        likeCount: 337,
        userId: 0,
        username: 'XING',
        isAuthor: false,
        liked: true
      }
    ]
  },
  {
    id: '4',
    avatar: 'https://www.alongw.cn/icon/logo.jpg',
    content: '这个组件库真好用',
    date: '2023-7-20',
    likeCount: 814,
    userId: 0,
    username: 'alongw',
    isAuthor: false,
    data1: 1,
    liked: true,
    reply: [
      {
        id: '5',
        replyCommentId: 0,
        replyCount: 0,
        replyToReplyId: 0,
        avatar:
          'https://thirdwx.qlogo.cn/mmopen/vi_32/qNuBAn7WLCxgqheUHPPFSlxof70yo9jWnZPPv8BiaMcxBzekOfQp2uwUOyjzL5DwdCkeawmaUf41sfF1ibgeGoIw/132',
        content: '你别说， 还真是',
        date: '2023-7-20',
        likeCount: 716,
        userId: 0,
        username: 'XING',
        isAuthor: false,
        liked: false
      }
    ]
  }
])

const onLike = (e: FooterIconItemClickEvent) => {
  const comments = remap()
  const data = comments.find((data) => {
    return data.id == e.id
  })
  if (!data) {
    return alert('点赞失败')
  }
  data.liked = !e.value
  !e.value ? data.likeCount++ : data.likeCount--
}

const remap = () => {
  const res: (Comment | CommentReply)[] = []
  comments.value.forEach((e) => {
    res.push(e)
    if (e.reply) {
      res.push(...e.reply)
    }
  })
  return res
}
</script>

<template>
  <b-comment :data="comments" @click-like="onLike">
    <template #likeIcon="{ row }">
      <icon-good-two v-show="row.liked" theme="filled" />
      <icon-good-two v-show="!row.liked" />
    </template>
  </b-comment>
</template>

<style lang="less" scoped></style>
