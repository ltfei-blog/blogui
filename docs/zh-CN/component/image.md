---
title: Image 图片
lang: zh-CN
---

# Image 图片

图片容器，在保留原生 img 的特性下，自定义占位、加载失败等

由于该组件仅用于封装 Avatar 组件，因此暂不支持懒加载、图片预览等功能

## 基础用法

:::demo 可通过`fit`确定图片如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

image/basic

:::

## 加载失败

可通过 slot = error 可自定义加载失败内容
:::demo

image/error

:::
