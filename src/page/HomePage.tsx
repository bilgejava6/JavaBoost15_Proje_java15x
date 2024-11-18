import React from 'react'
import LeftMenuComponent from '../component/molecules/LeftMenuComponent'

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

        </div>
      </div>
    </div>
  )
}

export default HomePage