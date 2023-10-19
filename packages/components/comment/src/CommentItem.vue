<script setup lang="ts">
import { BAvatar } from '../../avatar/'
import { BTransitionZoomY } from '../../transition/'
import { BFooterIconItem, FooterIconItemClickEvent } from '../../footer-icon-item/'
import { CommentContent, CommentReplyEvent } from './types'
import CommentReply from './CommentReply.vue'
import { nextTick, ref } from 'vue'
import * as eventBus from './eventBus'
import { formatDate } from '@ltfei-blog/blogui-utils/dayjs'

defineOptions({
  name: 'BCommentItem'
})
interface Props extends CommentContent {
  isChild?: boolean
  // todo: 展开
  maxRow?: number
}
defineProps<Props>()
const emit = defineEmits<{
  (event: 'like', data: FooterIconItemClickEvent): void
  (event: 'unLike', data: FooterIconItemClickEvent): void
  (event: 'clickLike', value: FooterIconItemClickEvent): void
  (event: 'reply', data: CommentReplyEvent): void
}>()

const showReply = ref(false)

const onClickLike = (e: FooterIconItemClickEvent) => {
  emit('clickLike', e)
  if (!e.value) {
    emit('like', e)
  } else {
    emit('unLike', e)
  }
}

eventBus.on('closeAllReply', () => {
  showReply.value = false
})

const onClickShowReply = () => {
  // 已打开 关闭
  if (showReply.value) {
    return (showReply.value = false)
  }
  // 触发关闭所有的事件
  eventBus.emit('closeAllReply')
  // 打开当前的回复
  showReply.value = true

  nextTick(() => {
    replyRef.value && replyRef.value.focus()
  })
}

const replyRef = ref()
</script>

<template>
  <div class="b-comment-item" :class="isChild ? 'b-comment-child-item' : ''">
    <div class="b-comment-item_content">
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
          <div class="date">{{ formatDate(date) }}</div>
          <!-- todo: icon -->
          <b-footer-icon-item
            :text="likeCount.toString()"
            :model-value="liked"
            :id="id"
            @click="onClickLike"
          >
            <template #icon>
              <slot name="likeIcon"></slot>
            </template>
          </b-footer-icon-item>
          <div class="reply" @click="onClickShowReply">回复</div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <b-transition-zoom-y>
      <comment-reply
        v-show="showReply"
        class="b-comment-item_reply"
        @reply="(content) => emit('reply', { id, content })"
        ref="replyRef"
      />
    </b-transition-zoom-y>
  </div>
</template>

<style lang="less" scoped>
.b-comment-item {
  .b-comment-item_content {
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
        user-select: none;
        .date,
        .reply {
          margin-right: 20px;
        }
        .reply {
          cursor: pointer;
        }
      }
    }
  }
  .b-comment-item_reply {
    margin-left: 60px;
  }
}

.b-comment-child-item {
  margin-left: 52px;

  .b-comment-item_content {
    .avatar {
      width: 30px;
      height: 30px;
    }
  }
  .b-comment-item_reply {
    margin-left: 47px;
  }
}
</style>
