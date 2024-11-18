import React from 'react'
import LeftMenuComponent from '../component/molecules/LeftMenuComponent'
import './HomePage.css'
import SearchInput from '../component/atoms/SearchInput'
function HomePage() {
  return (
    <div className="container">
      <div className="row" style={{minHeight: '200px'}}>
        <div className="col-3">
           <LeftMenuComponent />
        </div>
        <div className="col-5 border-start border-end">

        </div>
        <div className="col-4">
          <div className="row mt-3">
              <SearchInput />
          </div>
          <div className="row rounded-3 m-2 x-rigth-section">

          </div>
          <div className="row rounded-3 m-2 x-rigth-section">
          
          </div>            
        </div>
      </div>
    </div>
  )
}

export default HomePage