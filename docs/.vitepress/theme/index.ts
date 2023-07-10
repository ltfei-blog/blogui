// https://vitepress.dev/guide/custom-theme
// 先用默认主题
import theme from 'vitepress/theme'
// import Layout from './Layout.vue'
import './style.css'
import Demo from '../components/Demo.vue'
import '../theme/vars.css'

export default {
  // Layout,
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo)
  }
}
