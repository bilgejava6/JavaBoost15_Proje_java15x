import React from 'react'
import TrendCard from '../atoms/TrendCard'

function TrendList() {
  return (
    <div className='col'>
        <div className="row ">
            <h6 style={{color:'white', marginTop: '10px', marginBottom: '10px'}}>İlginç gündemler</h6>
        </div>
        <div className="row">
            <TrendCard />
            <TrendCard />
            <TrendCard />
            <TrendCard />
            <TrendCard />
            <TrendCard />
            <TrendCard />
            <TrendCard />
                            
        </div>
        <div className="row p-2">
            <span style={{color: '#1da1f2',fontSize: '12px'}}>Daha fazla göster</span>
        </div>
    </div>
  )
}

export default TrendList