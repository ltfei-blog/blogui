import { getCurrentInstance } from 'vue'
import type { Router } from 'vue-router'

export const useMunuClick = (to: string | undefined, isRouter: boolean | undefined) => {
  const instance = getCurrentInstance()!
  const router = instance.appContext.config.globalProperties.$router as Router

  const handleClick = (e: MouseEvent) => {
    if (!to) {
      return
    }
    if (isRouter) {
      e.preventDefault()
      router.push(to)
    }
  }

  return {
    handleClick
  }
}
