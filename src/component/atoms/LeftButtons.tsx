import React from 'react'
import './LeftButtons.css'
import { useNavigate } from 'react-router-dom';
interface ILeftButtonsProps{
    iconType: 'Home' | 'Search' | 'Notifications' | 'Message'
     | 'Profile' | 'Lists' | 'Locations' | 'More',
    name: string,
    path: string, // hangi url adresine (syfaya) yönlenecek
    isActive?: boolean // ? işareti bir değişken tanımını zorun olmadığını opsiyonel olduğunu belirtir.
}
function LeftButtons(props: ILeftButtonsProps) {
    const navigate = useNavigate();
    const {iconType,name,path, isActive} = props;
    const icons = ()=>{
    switch(iconType){       
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
    const goToPath = ()=>{
        navigate(path);
    }
    const getStyleName = ()=>{
       return isActive ?  {fontWeight: 'bold'} :  {}
    } 
  return (
    <div onClick={goToPath} className='row x-btn-hover align-items-center'>
        <div className="col-2">
            {
                icons()
            }
        </div>
        <div className="col-10 ">
            <span style={getStyleName()}>{name}</span>
        </div>
    </div>
  )
}
// Eğer bir component e state değiştikçe durumu değişmiyor ise memo kullanın. (useStete, useSelector yok ise )
export default React.memo(LeftButtons);