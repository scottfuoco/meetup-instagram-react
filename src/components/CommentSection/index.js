import React from 'react'
import { CardText } from 'material-ui/Card'

import Comment from '../Comment';



const CommentSection = ({ post, username }) => {
  return (
    <CardText>
      <div>
        Likes: { post.likes }
      </div>
      <div>
        {
          post.comments.map((comment, i) => (
            <Comment key={i} comment={comment} username={username} />
            )
          )}
      </div>
    </CardText>
  )
}

export default CommentSection