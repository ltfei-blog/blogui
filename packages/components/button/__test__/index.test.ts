import { createApp } from 'vue'
import { expect, it } from 'vitest'
import Button from '..'
// import BButton from '../src/button.vue'
// import { mount } from '@vue/test-utils'

it('test button plugin', () => {
  const app = createApp({}).use(Button)
  expect(app.component(Button.name)).toBeTruthy()
})
