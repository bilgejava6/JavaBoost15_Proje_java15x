import React from 'react'
interface ILeftButtonsProps{
    iconType: 'Home' | 'Search' | 'Notifications' | 'Message' | 'Profile',
    name: string,
    path: string // hangi url adresine (syfaya) yönlenecek
}
function LeftButtons(props: ILeftButtonsProps) {
    const {iconType,name,path} = props;
    const icons = ()=>{
    switch(iconType){
            case 'Home': return <i className="fa-solid fa-house" style={{color: '#1da1f2'}}></i>
            default: return <></>;
        }
    }
  return (
    <>
        <div className="col-2">
            {
                icons()
            }
        </div>
        <div className="col-8">
            <label className='form-label'>{name}</label>
        </div>
    </>
  )
}
export default LeftButtons