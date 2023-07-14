<template>
  <div class="demo-error">
    <b-image src="https://localhost"></b-image>
    <b-image src="https://localhost">
      <template #error> 自定义加载失败内容 </template>
    </b-image>
  </div>
</template>

<style lang="less" scoped>
.demo-error {
  display: flex;
  justify-content: space-around;
}
</style>
