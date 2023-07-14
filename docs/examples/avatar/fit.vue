<script setup lang="ts">
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url =
  '//static-1259453062.cos.ap-shanghai.myqcloud.com/user1/20230712193053-4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<template>
  <div class="demo-avatar">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="demonstration">{{ fit }}</span>
      <b-avatar style="width: 100px; height: 100px" :src="url" :fit="fit" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.demo-avatar {
  display: flex;
  justify-content: space-around;
  .block {
    text-align: center;
  }
}
</style>
