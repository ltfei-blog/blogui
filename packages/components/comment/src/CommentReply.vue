<script setup lang="ts">
import { BInput, InputExpose } from '../../input/'
import { BButton } from '../../button/'
import { nextTick, ref } from 'vue'
defineOptions({
  name: 'BCommentReply'
})

defineEmits<{
  (e: 'reply', value: string): void
}>()

const content = ref('')
const input = ref<InputExpose>()

const focus = () => {
  nextTick(() => {
    input.value && input.value.focus()
  })
}

defineExpose({
  focus
})
</script>

<template>
  <div class="b-comment-reply">
    <b-input
      ref="input"
      type="textarea"
      v-model="content"
      autosize
      placeholder="发一条友善的评论"
    ></b-input>
    <footer class="footer">
      <div class="left"></div>
      <div class="right">
        <b-button type="primary" @click="$emit('reply', content)">发 送</b-button>
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
    button {
      line-height: normal;
    }
  }
}
</style>
