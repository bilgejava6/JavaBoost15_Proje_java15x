import React, { useEffect } from 'react'
import './PostPage.css'
import LeftMenuComponent from '../../component/molecules/LeftMenuComponent'
import SearchInput from '../../component/atoms/SearchInput'
import FollowSuggestionList from '../../component/molecules/FollowSuggestionList'
import TrendList from '../../component/molecules/TrendList'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { XDispatch, XUseSelector } from '../../store'
import state from 'sweetalert/typings/modules/state'
import { fetchPostGetById } from '../../store/feature/postSlice'
import Post from '../../component/molecules/Post'
import CommentPost from '../../component/molecules/CommentPost'

function PostPage(props: any) {
    const dispatch = useDispatch<XDispatch>();
    const navigate = useNavigate();
    const post = XUseSelector(state => state.post.post); // global state içindeki post bilgisini alacak.
    const {
        userName, postId
    } = useParams();
    useEffect(()=>{       
             dispatch(fetchPostGetById(parseInt(postId ? postId : '0')));                 
    },[]);// boş constructor gibi çalışıyordu.
    document.body.style.backgroundColor = '#02131e';
    const goToHomePage = ()=>{
        navigate('/');
    }
    /**
     * key: ''  empty
     * key:     null
     *          undefined 
     */
    return (
      <div className="container">
        <div className="row" style={{minHeight: '200px'}}>
          <div className="col-3">
             <LeftMenuComponent />
          </div>
          <div className="col-5 border-start border-end">
              <div className="row p-3 mb-1">
                <div className="col x-back-content-button" onClick={goToHomePage}>
                    <i className="fa-solid fa-arrow-left x-back-button " style={{color:'white'}}></i>
                    <span className='ms-3 text-white'> Gönderiler</span>
                </div>                
              </div>
              <div className="row">
                <div className="col">
                    {
                    post &&
                   <Post userAvatar={post?.avatar} userName={post.userName} name={post.name}
                   isPremium= {true} sharedTime={post.date} userId={0} comment={post.comment}
                   postImageUrl={post.imageUrl} postId={post.id} commentCount={post.commentCount}
                   reteweetCount={0} likeCount={post.likeCount} viewsCount={post.viewCount}
                   isLike={post.isLike}  /> 
                }
                </div>
              </div>
              <div className="row">
                 <CommentPost  postId={post?.id}/>
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