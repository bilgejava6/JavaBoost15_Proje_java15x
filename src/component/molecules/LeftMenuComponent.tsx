import React from 'react'
import LeftButtons from '../atoms/LeftButtons'

function LeftMenuComponent() {
  return (
    <div className="row justify-content-center">
        <div className="col-5">
            <div className="row mb-2">
                <LeftButtons />
            </div>
            <div className="row mb-2">
                <LeftButtons />
            </div>
            <div className="row mb-2">
                <LeftButtons />
            </div>
            <div className="row mb-2">
                <LeftButtons />
            </div>
                    
        </div>
    </div>
  )
}

export default LeftMenuComponent