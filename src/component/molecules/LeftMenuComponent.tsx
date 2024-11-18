import React from 'react'
import LeftButtons from '../atoms/LeftButtons'

function LeftMenuComponent() {
  return (
    <div className="row justify-content-end mt-5">
        <div className="col-7">
            <div className="row mb-2">
                <LeftButtons iconType='Home' name='Anasayfa' path='/home' isActive={true} />
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Search' name='Keşfet' path='/search'  />
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Notifications' name='Bildirimler' path='/notification'  />
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Lists' name='Listeler' path='/lists'  />
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='Locations' name='Yer İşaretleri' path='/locations'  />
            </div>    
            <div className="row mb-2">
                <LeftButtons iconType='Profile' name='Profil' path='/profile'  />
            </div>
            <div className="row mb-2">
                <LeftButtons iconType='More' name='Daha fazla' path='/more'  />
            </div>            
        </div>
    </div>
  )
}

export default LeftMenuComponent