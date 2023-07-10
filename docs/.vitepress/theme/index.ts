// https://vitepress.dev/guide/custom-theme
// 先用默认主题
import theme from 'vitepress/theme'
// import Layout from './Layout.vue'
import './style.css'
import Demo from '../components/Demo.vue'
import '../theme/vars.css'
import * as components from '../../../packages/components'
import { Component } from 'vue'

export default {
  // Layout,
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo)
    Object.keys(components).forEach((e) => {
      app.component((components[e] as Component).name, components[e])
    })
  }
}
