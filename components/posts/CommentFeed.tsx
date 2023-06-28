import React from 'react'
import CommentItem from './CommentItem';
interface CommentFeedProps {
    comments?: Record<string,any>[];
}

const CommentFeed:React.FC<CommentFeedProps> = ({ comments }) => {
  return (
    <>
        {comments?.map((comments) => (
            <CommentItem key={comments.id} data={comments}/>
        ))}
    </>
  )
}

export default CommentFeed;