<script setup lang="ts">
const placements = ['left-top', 'right-top', 'left-bottom', 'right-bottom']
</script>

<template>
  <div class="demo-badge">
    <div class="block" v-for="i in placements">
      <span>{{ i }}</span>
      <b-avatar :avatar_badge_placement="i">
        User
        <template #badge>
          <div class="icon">V</div>
        </template>
      </b-avatar>
    </div>
    <div class="block">
      <span>自定义位置</span>
      <b-avatar
        :avatar_badge_placement="{
          top: '0',
          left: '-15px'
        }"
      >
        User
        <template #badge>
          <div class="icon">V</div>
        </template>
      </b-avatar>
    </div>
  </div>
</template>

<style lang="less" scoped>
.icon {
  background-color: #ffcc00;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  line-height: 17px;
  color: #fff;
  border: 2px #fff solid;
  box-sizing: border-box;
  margin-right: 0;
  display: inline-block;
}
.demo-badge {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
