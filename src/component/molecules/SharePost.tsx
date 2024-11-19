import React from 'react'
import './SharePost.css'
function NewPost() {
  return (
    <div>
      <div className="row border mt-5 p-2">
        <div className="col-2 text-center mt-1">
          <img className='x-new-post-avatar' src="https://picsum.photos/100/100" alt="" />
        </div>
        <div className="col-10">
          <div className="row">
              <textarea className='x-new-post-comment' rows={5}placeholder='Neler oluyor?' ></textarea>
          </div>
          <div className="row">
            <hr className='x-new-post-bottom-line'/>
          </div>
          <div className="row">
              <div className="col-8">
                <i className="fa-regular fa-image" style={{color: '#1da1f2'}}></i>
                <i className="fa-solid fa-list-ul" style={{color: '#1da1f2'}}></i>
                <i className="fa-regular fa-face-smile"  style={{color: '#1da1f2'}}></i>
                <i className="fa-regular fa-clock"  style={{color: '#1da1f2'}}></i>
                <i className="fa-solid fa-location-dot"  style={{color: '#1da1f2'}}></i>
                <i className="fa-solid fa-bold"  style={{color: '#1da1f2'}}></i>
                <i className="fa-solid fa-italic"  style={{color: '#1da1f2'}}></i>
              </div>
              <div className="col-4 text-end">
                  <input type="button" value="Gönder" className='x-new-post-btn-send' />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPost