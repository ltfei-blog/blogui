import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vitest.setup'

export default mergeConfig(viteConfig, defineConfig({}))
