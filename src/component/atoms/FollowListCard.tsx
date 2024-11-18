import React from 'react'
import './FollowListCard.css'
function FollowListCard() {
  return (
    <div>
      <div className="row align-items-center x-list">
        <div className="col-3">
              <img className='x-img-avatar' src="https://picsum.photos/100/100" />
        </div>
        <div className="col-5">
            <div className="row aling-items-bottom">
                <label className='x-follow-text-name'>Muhammet HOCA</label>
            </div>
            <div className="row align-items-top">
                <label className='x-follow-text-user-name'>@muhammedhoca</label>
            </div>
        </div>
        <div className="col-4">
              <input className='x-btn-follow' type="button" value="Takip et" />
        </div>
      </div>
    </div>
  )
}

export default FollowListCard