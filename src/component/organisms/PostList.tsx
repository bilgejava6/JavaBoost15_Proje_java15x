import React, { useEffect } from 'react'
import Post from '../molecules/Post'
import { XDispatch, XUseSelector } from '../../store'
import { useDispatch } from 'react-redux';
import { fetchGetAllPosts } from '../../store/feature/postSlice';
import { getFormattedElapsedTime } from '../../utils/Tools';

function PostList() {
  const postList = XUseSelector(state => state.post.postList);
  const dispatch = useDispatch<XDispatch>();
  useEffect(()=>{
    dispatch(fetchGetAllPosts());
  },[])

  return (
    <div className="col">
      {
        postList.map((post,index)=>{
          return <Post key={index} userAvatar={post.avatar}
                userId={1} userName={post.userName} name={post.name}
                isPremium={true} sharedTime={post.date} comment={post.comment}
                postImageUrl={post.imageUrl}
                postId= {post.id}
                commentCount={post.commentCount}
                likeCount={post.likeCount}
                reteweetCount={0}
                viewsCount={post.viewCount}
                isLike= {post.isLike}                
                />
        })
      }
        
   
        
    </div>
  )
}

export default PostList