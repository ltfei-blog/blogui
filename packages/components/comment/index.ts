import comment from './src/comment.vue'
import CommentItem from './src/CommentItem.vue'
import CommentFooterItem from './src/CommentFooterItem.vue'
import CommentReply from './src/CommentReply.vue'
import { withInstall } from '@ltfei-blog/blogui-utils/vue/install'

export const BCommentItem = withInstall(CommentItem)
export const BCommentFooterItem = withInstall(CommentFooterItem)
export const BCommentReply = withInstall(CommentReply)
export const BComment = withInstall(comment)

export type { Comment, CommentContent, CommentReply, CommentReplyEvent } from './src/types'

export default BComment
