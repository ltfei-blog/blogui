<script setup lang="ts">
import { computed, ref } from 'vue'
import { Code as IconCode, UpOne as IconUpOne } from '@icon-park/vue-next'

defineOptions({
  name: 'demo'
})

interface Props {
  demos: object
  source: string
  path: string
  rawSource: string
  description: string
}
const props = defineProps<Props>()
const decodeProps = computed<Props>(() => {
  const resultProps = {} as Props
  Object.keys(props).forEach((e) => {
    resultProps[e] = decodeURIComponent(props[e])
  })
  return resultProps
})

const example = ref<HTMLDivElement>()
let show = false
const showExample = () => {
  if (!example.value) {
    return
  }
  if (show) {
    example.value.style.height = '0'
  } else {
    example.value.style.height = example.value.scrollHeight + 'px'
  }
  show = !show
}

const basePath = '../../examples/:path.vue'
const demo = () => {
  console.log(basePath.replace(':path', decodeProps.value.path))

  return props.demos[basePath.replace(':path', decodeProps.value.path)].default
}
</script>

<template>
  <ClientOnly>
    <div class="demo">
      <div v-html="decodeProps.description"></div>
      <div class="example">
        <div class="example_component">
          <component :is="demo()"></component>
        </div>
        <div class="buttons">
          <icon-code size="20" @click="showExample" />
        </div>
        <div class="example_source" ref="example">
          <div v-html="decodeProps.source" class="example-source language-"></div>
          <div @click="showExample" class="hidden_button"><icon-up-one /> 隐藏源代码</div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="less" scoped>
.demo {
  .example {
    border: 1px solid #aaaa;
    border-radius: 5px;
    .example_component {
      padding: 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #aaaa;
    }
    .buttons {
      height: 30px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 20px;
      cursor: pointer;
    }
    .example_source {
      transition: all 1s;
      height: 0;
      overflow: hidden;
      .example-source {
        margin: 0;
      }
      .hidden_button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 0;
        cursor: pointer;
      }
    }
  }
}
</style>
