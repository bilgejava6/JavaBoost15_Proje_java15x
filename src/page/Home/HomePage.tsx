import React from 'react'
import LeftMenuComponent from '../../component/molecules/LeftMenuComponent'
import './HomePage.css'
import SearchInput from '../../component/atoms/SearchInput'
import FollowSuggestionList from '../../component/molecules/FollowSuggestionList'
import TrendList from '../../component/molecules/TrendList'
import NewPost from '../../component/molecules/SharePost'
import PostList from '../../component/organisms/PostList'
function HomePage() {
  return (
    <div className="container">
      <div className="row" style={{minHeight: '200px'}}>
        <div className="col-3">
           <LeftMenuComponent />
        </div>
        <div className="col-5 border-start border-end">
            <div className="row">
                <NewPost />
            </div>
            <div className="row">
                <PostList />
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

export default HomePage