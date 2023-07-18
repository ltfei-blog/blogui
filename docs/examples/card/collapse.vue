<script setup lang="ts">
import { GoodTwo as IconGoodTwo, Comment as IconComment } from '@icon-park/vue-next'
import { ref } from 'vue'

const good = ref(0)
const comment = ref(0)
const data = {
  avatar: 'https://img.js.design/assets/smartFill/img333164da748e08.jpg',
  username: 'User',
  title: '可以折叠左边距',
  desc: '设置 collapse 为 true 折叠内容区域左边距,也可设置 auto-collapse 自动折叠',
  cover:
    'https://static-1259453062.cos.ap-shanghai.myqcloud.com/user1/20230609105316-%7BEED195D8-5E49-450a-958E-13D931C6F0A4%7D.png'
}
</script>

<template>
  <h3>折叠</h3>
  <b-card v-bind="data" :collapse="true">
    <template #footer>
      <b-card-footer-item text="10">
        <template #icon>
          <icon-good-two size="16" />
        </template>
      </b-card-footer-item>
      <b-card-footer-item text="10">
        <template #icon>
          <icon-comment size="16" />
        </template>
      </b-card-footer-item>
    </template>
  </b-card>
  <h3>宽度小于500时自动折叠</h3>
  <b-card v-bind="data" :auto-collapse="500">
    <template #footer>
      <b-card-footer-item text="10">
        <template #icon>
          <icon-good-two size="16" />
        </template>
      </b-card-footer-item>
      <b-card-footer-item text="10">
        <template #icon>
          <icon-comment size="16" />
        </template>
      </b-card-footer-item>
    </template>
  </b-card>
</template>

<style>
.b-card {
  border: 1px solid #aaa;
}
</style>
