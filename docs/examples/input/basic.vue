<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <b-input v-model="input" placeholder="请输入" />
</template>
