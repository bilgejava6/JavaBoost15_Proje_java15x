import React from 'react'
import './ProfileSettings.css'
import { useDispatch } from 'react-redux';
import { XDispatch } from '../../store';
import { userLogout } from '../../store/feature/authSlice';
function ProfileSettings() {
    // DİKKAT!!!! react-redux ın reducer, fetch işlemlerinmi tetiklemek için yani redux e bilfirmek için useDispatch();
    const dispatch = useDispatch<XDispatch>();
    const logout = async ()=>{
        await localStorage.removeItem('token');
        dispatch(userLogout());
    }
  return (
    <div className="row align-items-center">
                <div className="col-2">
                    <img className='x-profile-setting-img' src="https://picsum.photos/50/50"/>
                </div>
                <div className="col-7 ">
                    <div className="row">
                         <label className='x-profile-setting-name'>muhammet hoca</label>
                         <label className='x-profile-setting-user-name'>@muhammed</label>
                    </div>                   
                </div>
                <div className="col-3">
                <i onClick={logout} className="fa-solid fa-arrow-right-from-bracket fa-xl" style={{color: '#e41111'}}></i>
                </div>
    </div>
  )
}

export default ProfileSettings