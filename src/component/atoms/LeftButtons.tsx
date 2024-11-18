import React from 'react'
interface ILeftButtonsProps{
    iconType: 'Home' | 'Search' | 'Notifications' | 'Message'
     | 'Profile' | 'Lists' | 'Locations' | 'More',
    name: string,
    path: string, // hangi url adresine (syfaya) yönlenecek
    isActive?: boolean // ? işareti bir değişken tanımını zorun olmadığını opsiyonel olduğunu belirtir.
}
function LeftButtons(props: ILeftButtonsProps) {
    const {iconType,name,path, isActive} = props;
    const icons = ()=>{
    switch(iconType){
        // <i class="fa-solid fa-magnifying-glass"></i>
            case 'Home': return <i className="fa-solid fa-house" style={{color: '#1da1f2'}}></i>
            case 'Search': return <i className="fa-solid fa-magnifying-glass" style={{color: '#1da1f2'}}></i>
            case 'Notifications': return <i className="fa-solid fa-bell" style={{color: '#1da1f2'}}></i>
            case 'Profile': return <i className="fa-regular fa-user" style={{color: '#1da1f2'}}></i>
            case 'Message': return <i className="fa-regular fa-envelope" style={{color: '#1da1f2'}}></i>            
            case 'Lists': return <i className="fa-solid fa-list" style={{color: '#1da1f2'}}></i>            
            case 'Locations': return <i className="fa-regular fa-bookmark" style={{color: '#1da1f2'}}></i>            
            case 'More': return <i className="fa-solid fa-ellipsis" style={{color: '#1da1f2'}}></i>            
          
            default: return <></>;
        }
    }
  return (
    <div className='row'>
        <div className="col-2">
            {
                icons()
            }
        </div>
        <div className="col-10">
            <label className='form-label' style={isActive ? {fontWeight: 'bold'} : {}}>{name}</label>
        </div>
    </div>
  )
}
export default LeftButtons