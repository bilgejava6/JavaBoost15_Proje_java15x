import React from 'react'
import './PostPage.css'
import LeftMenuComponent from '../../component/molecules/LeftMenuComponent'
import SearchInput from '../../component/atoms/SearchInput'
import FollowSuggestionList from '../../component/molecules/FollowSuggestionList'
import TrendList from '../../component/molecules/TrendList'
import { useNavigate, useParams } from 'react-router-dom'
function PostPage(props: any) {
    const {
        userName, postId
    } = useParams();

    document.body.style.backgroundColor = '#02131e';
    return (
      <div className="container">
        <div className="row" style={{minHeight: '200px'}}>
          <div className="col-3">
             <LeftMenuComponent />
          </div>
          <div className="col-5 border-start border-end">
              <div className="row">
                  
              </div>
              <div className="row">
                 
              </div>
          </div>
          <div className="col-4">
            <div className="row mt-3">
                <SearchInput />
            </div>
            <div className="row rounded-3 m-2 x-rigth-section">
                <FollowSuggestionList />
            </div>
            <div className="row rounded-3 m-2 x-rigth-section">
                <TrendList />
            </div>            
          </div>
        </div>
      </div>
    )

}

export default PostPage