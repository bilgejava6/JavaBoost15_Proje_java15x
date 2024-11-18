import React from 'react'
import './TrendCard.css'
function TrendCard() {
  return (
    <div>
        <div className="row x-list">
            <div className="col-9">                
                <div className='align-items-center'>
                        <span className='x-trend-title'>Haberler</span> 
                        <span className='x-trend-title'> . </span>
                        <span className='x-trend-title'> 2 saat önce</span>
                </div>        
                <div className="row">
                    <label className='x-form-label'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. totam quas dolore excepturi sint nesciunt.
                    </label>
                </div>
            </div>
            <div className="col-3 align-content-center justfy-content-center">
                <img className='x-trend-img' src="https://picsum.photos/100/100"/>
            </div>
        </div>
    </div>
  )
}

export default TrendCard