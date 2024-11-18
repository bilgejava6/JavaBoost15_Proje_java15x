import React from 'react'
import FollowListCard from '../atoms/FollowListCard'

function FollowSuggestionList() {
  return (
    <div className='col'>
        <div className="row ">
            <h6 style={{color:'white', marginTop: '10px', marginBottom: '10px'}}>Bunları beğenebilirsin</h6>
        </div>
        <div className="row">
            <FollowListCard userId='001' userName='muhammed' name='Muhammet Hoca' avatar='https://picsum.photos/100/100'/>
            <FollowListCard userId='001' userName='muhammed' name='Muhammet Hoca' avatar='https://picsum.photos/100/100'/>
            <FollowListCard userId='001' userName='muhammed' name='Muhammet Hoca' avatar='https://picsum.photos/100/100'/>
                        
        </div>
        <div className="row p-2">
            <span style={{color: '#1da1f2',fontSize: '12px'}}>Daha fazla göster</span>
        </div>
    </div>
  )
}

export default FollowSuggestionList