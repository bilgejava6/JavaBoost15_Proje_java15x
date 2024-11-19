import React from 'react'
import './Post.css'
import UserAvatar from '../atoms/UserAvatar'
function Post() {
  return (
    <div className="row x-post-body">
        <div className="col-2 text-end">
            <UserAvatar userAvatarUrl='https://picsum.photos/100/100'/>
        </div>
        <div className="col-10">
            <div className="row">

            </div>
            <div className="row">

            </div>
            <div className="row">

            </div>
            <div className="row">

            </div>
        </div>
    </div>
  )
}

export default Post