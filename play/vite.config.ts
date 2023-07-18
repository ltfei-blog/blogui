import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import './vite.init'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [vue(), Inspect()]
})
