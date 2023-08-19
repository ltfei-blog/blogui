import { EventBus } from '@ltfei-blog/blogui-utils/eventBus'

export const { emit, off, on } = EventBus<{
  closeAllReply: []
}>()
