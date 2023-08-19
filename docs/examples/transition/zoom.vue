<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <b-button @click="show = !show">show {{ show }}</b-button>
  <b-transition-zoom-y>
    <b-card-one
      v-show="show"
      avatar="https://img.js.design/assets/smartFill/img333164da748e08.jpg"
      username="XING"
      title="【产品经验】第一次做APP时容易范的错误"
      desc="作为用户和产品之间的桥梁，社交分享在产品的发展过程中扮演了重要的角色。下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。尤其是刚上线的产品，很难通过产品的内部体系来实现快速的用户很难通过产品的内部体系来实现快速的用户"
      cover="//static-1259453062.cos.ap-shanghai.myqcloud.com/user1/20230719201957-%E5%9B%BE%E5%B1%82%200.png"
    ></b-card-one>
  </b-transition-zoom-y>
</template>

<style lang="less" scoped></style>
