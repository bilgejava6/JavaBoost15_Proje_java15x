import React from 'react'
import './Post.css'
import UserAvatar from '../atoms/UserAvatar'
import PostTitle from '../atoms/PostTitle'
import PostIcons from '../atoms/PostIcons'
function Post() {
  return (
    <div className="row x-post-body">
        <div className="col-2 text-end">
            <UserAvatar userAvatarUrl='https://picsum.photos/100/100'/>
        </div>
        <div className="col-10">
            <div className="row">
                <PostTitle userName='muhammed' name='MHMMT' sharedTime={15} isPremium={true} />
            </div>
            <div className="row">
                <label className='x-post-comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus labore ea incidunt reprehenderit? Fugit, at? Nam, ducimus ullam aliquid, placeat repudiandae provident nostrum cumque incidunt atque consequuntur iure enim.</label>
            </div>
            <div className="row">
                <img className='x-post-image' src="https://picsum.photos/200/200" />
            </div>
            <div className="row">
                    <div className="col-3">
                        <PostIcons postId='1' type='Comment' count={12}/>
                    </div>
                    <div className="col-3">
                    <PostIcons postId='1' type='Retweet' count={12}/>
                    </div>
                    <div className="col-3">
                    <PostIcons postId='1' type='Like' count={12}/>
                    </div>
                    <div className="col-3">
                    <PostIcons postId='1' type='Views' count={12}/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Post