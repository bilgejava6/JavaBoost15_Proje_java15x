import React from 'react'
import './UserAvatar.css'
interface IUserAcatarPros{
    userAvatarUrl: string
}
function UserAvatar(props: IUserAcatarPros) {
    const url = props.userAvatarUrl;
  return (
    <>
          <img className='user-avatar' src={url} />
    </>
  )
}

export default React.memo(UserAvatar)