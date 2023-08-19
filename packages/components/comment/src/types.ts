type ID = number | string

export interface CommentContent {
  id: ID
  content: string
  date: Date | string
  userId: ID
  avatar: string
  username: string
  likeCount: number
  liked: boolean
  isAuthor?: boolean
  [key: string]: any
}

export interface CommentReply extends CommentContent {
  // 回复的主评论的id
  replyCommentId: ID
  // 在回复里面回复的评论的id
  replyToReplyId: ID
  // 回复数量
  replyCount: number
}

export interface Comment extends CommentContent {
  reply: CommentReply[]
}

export interface CommentReplyEvent {
  id: number | string
  content: string
}
