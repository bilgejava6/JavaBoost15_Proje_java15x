import React from 'react'
import LeftButtons from '../atoms/LeftButtons'

function LeftMenuComponent() {
  return (
    <div className="row justify-content-center">
        <div className="col-5">
            <div className="row mb-2">
                <LeftButtons iconType='Home' name='Anasayfa' path='/home' />
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Search' name='Keşfet' path='/home'  />
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Notifications' name='Bildirimler' path='/home'  />
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Profile' name='Profil' path='/home'  />
            </div>
                    
        </div>
    </div>
  )
}

export default LeftMenuComponent