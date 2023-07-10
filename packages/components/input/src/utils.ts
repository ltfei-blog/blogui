import { onUnmounted } from 'vue'

export const useAutoSize = (el: HTMLElement, min = 2, max?: number) => {
  const rowHeight = (row: number) => {
    const { lineHeight, paddingTop, paddingBottom } = getComputedStyle(el)
    return parseFloat(lineHeight) * row + parseFloat(paddingTop) + parseFloat(paddingBottom)
  }

  const initHeight = rowHeight(min)

  el.style.height = initHeight + 'px'
  if (max) {
    el.style.maxHeight = rowHeight(max) + 'px'
  }
  const resize = () => {
    el.style.height = initHeight + 'px'
    el.style.height = el.scrollHeight + 'px'
  }
  resize()
  el.addEventListener('input', resize)
  onUnmounted(() => {
    el.removeEventListener('input', resize)
  })
}
