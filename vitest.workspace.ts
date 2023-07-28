import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  // 'packages/utils',
  'packages/components',
  {
    extends: './vitest.config.ts'
  }
])
