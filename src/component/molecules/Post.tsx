import React from 'react'
import './Post.css'
import UserAvatar from '../atoms/UserAvatar'
import PostTitle from '../atoms/PostTitle'
import PostIcons from '../atoms/PostIcons'
import { useNavigate } from 'react-router-dom'
interface IPostProps{
    userAvatar: string,
    userName: string,
    name: string,
    isPremium: boolean,
    sharedTime: number,
    userId: number,
    comment: string,
    postImageUrl: string,
    postId: number,
    commentCount: number,
    reteweetCount: number,
    likeCount: number,
    viewsCount: number,
    isLike: boolean,
}
function Post(props: IPostProps) {
    const navigate = useNavigate();
    const {
        userAvatar,userName,name,isPremium,sharedTime,
        userId,comment,postImageUrl,postId,commentCount,reteweetCount,
        likeCount,viewsCount, isLike
    } = props;

    const goToPost = ()=>{        
        navigate('/post/'+userName+'/'+postId)
    }
  return (
    <div className="row x-post-body" onClick={goToPost}>
        <div className="col-2 text-end">
            <UserAvatar userAvatarUrl={userAvatar}/>
        </div>
        <div className="col-10">
            <div className="row">
                <PostTitle userName={userName} name={name} sharedTime={sharedTime} isPremium={isPremium} />
            </div>
            <div className="row">
                <label className='x-post-comment'>
                    {comment}
                </label>
            </div>
            <div className="row">
                <img className='x-post-image' src={postImageUrl} />
            </div>
            <div className="row">
                    <div className="col-3">
                        <PostIcons postId={postId} type='Comment' count={commentCount}/>
                    </div>
                    <div className="col-3">
                        <PostIcons postId={postId} type='Retweet' count={reteweetCount}/>
                    </div>
                    <div className="col-3">
                        <PostIcons postId={postId} type='Like' count={likeCount} isLike={isLike}/>
                    </div>
                    <div className="col-3">
                        <PostIcons postId={postId} type='Views' count={viewsCount}/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Post)