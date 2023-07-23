<script setup lang="ts">
import { BInput } from '../../input/'
import { BButton } from '../../button/'
defineOptions({
  name: 'BCommentReply'
})
</script>

<template>
  <div class="b-comment-reply">
    <b-input type="textarea" autosize placeholder="发一条友善的评论"></b-input>
    <footer class="footer">
      <div class="left"></div>
      <div class="right">
        <b-button type="primary">发送</b-button>
      </div>
    </footer>
  </div>
</template>

<style lang="less" scoped>
.b-comment-reply {
  display: flex;
  flex-direction: column;
  .footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
