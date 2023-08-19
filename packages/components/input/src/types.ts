import { Ref } from 'vue'

export interface InputExpose {
  clear: () => void
  blur: () => void
  focus: () => void
  input: Ref<HTMLInputElement | undefined>
  textarea: Ref<HTMLTextAreaElement | undefined>
  ref: Ref<HTMLTextAreaElement | HTMLInputElement | undefined>
}
