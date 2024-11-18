import React from 'react'
import './FollowListCard.css'
interface IFollowListCardProps{
  userName: string,
  name: string,
  avatar: string,
  userId: string
}
function FollowListCard(props: IFollowListCardProps) {
  const {userId, userName, name,avatar} = props;
  return (
    <div>
      <div className="row align-items-center x-list">
        <div className="col-3">
              <img className='x-img-avatar' src={avatar} />
        </div>
        <div className="col-5">
            <div className="row aling-items-bottom">
                <label className='x-follow-text-name'>{name}</label>
            </div>
            <div className="row align-items-top">
                <label className='x-follow-text-user-name'>@{userName}</label>
            </div>
        </div>
        <div className="col-4">
              <input className='x-btn-follow' type="button" value="Takip et" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(FollowListCard)