import React,{useState} from 'react'
import './SearchInput.css'
function SearchInput() {
  const [focus, setfocus] = useState({})
  return (
    <div className="col">
        <div className="row x-search-input align-items-center">
            <div className="col-1">
                <i className="fa-solid fa-magnifying-glass" style={{color: 'rgb(113, 113, 113)'}}></i>
            </div>
            <div className="col">
                <input className='x-search-text' type="text" placeholder='Ara'/>
            </div>
        </div>
    </div>
  )
}

export default SearchInput