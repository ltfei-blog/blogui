<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')
const input1 = ref('')
</script>

<template>
  <b-input
    v-model="input1"
    placeholder="请输入"
    type="textarea"
    :autosize="{
      maxRows: 5,
      minRows: 1
    }"
  />
  <b-input v-model="input" placeholder="请输入" type="textarea" autosize />
</template>
