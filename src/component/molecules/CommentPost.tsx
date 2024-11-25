import React, { useState } from 'react'
import UserAvatar from '../atoms/UserAvatar'
import './CommentPost.css'
interface ICommentPostProps{
    postId: number | undefined
}
function CommentPost(props: ICommentPostProps) {
  const {postId} = props;
  const [comment,setComment] = useState('');  
  const doComment = ()=>{
    /**
     * yorum: 
     * - hangi post a yorum yapıyorsun? - postId
     * - kim yorum yapıyor? - token
     * - yorumu nedir? - comment
     */

  }  
  return (
    <div>
        <div className="row border p-2">
            <div className="col-2 text-center mt-1 align-self-start">
                <UserAvatar userAvatarUrl='https://picsum.photos/100/100'/>
            </div>
            <div className="col-7">
                <textarea value={comment} onChange={evt=>setComment(evt.target.value)} className='x-new-comment' rows={2} placeholder='Yanıt ver?' ></textarea>
            </div>
            <div className="col-3 align-self-end text-end">
                <input type="button" value="Yanıtla" className='x-new-comment-btn-send' onClick={doComment} />
            </div>
        </div>
    </div>
  )
}

export default CommentPost