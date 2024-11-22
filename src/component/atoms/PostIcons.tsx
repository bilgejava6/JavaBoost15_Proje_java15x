import React,{useState} from 'react'
import './PostIcons.css'
import swal from 'sweetalert'
import { useDispatch } from 'react-redux'
import { XDispatch } from '../../store'
import { fetchAddLike, fetchUnLike } from '../../store/feature/likeSlice'
import { fetchGetAllPosts } from '../../store/feature/postSlice'
interface IPostIconsProps{
    type: 'Comment' | 'Retweet' | 'Like' | 'Views',
    count: number,
    postId: number,
    isLike?: boolean
}
function PostIcons(props: IPostIconsProps) {
    const {type,count,postId, isLike} = props
    const [onFocus, setonFocus] = useState(false)
    const dispatch = useDispatch<XDispatch>();
    const getIcon = ()=>{
        switch(type){
            case 'Comment': return <i className="fa-regular fa-comment fa-sm m-1" style={onFocus? {color: '#1da1f2'}: {color: 'white'}}></i>;
            case 'Retweet': return <i className="fa-solid fa-retweet"  style={onFocus? {color: '#1da1f2'}: {color: 'white'}}></i>;
            case 'Like': return <i className="fa-solid fa-heart"  style={onFocus || isLike? {color: '#1da1f2'}: {color: 'white'}}></i>;
            case 'Views': return <i className="fa-solid fa-chart-simple"  style={onFocus? {color: '#1da1f2'}: {color: 'white'}}></i>;
            default: return null;
        }
    }
    const onComment = ()=>{}
    const onReteweet = ()=>{}
    const onLike = ()=>{
        if(isLike){ // eğer like undefined değil ve true ise
               // unlike 
            dispatch(fetchUnLike(postId)).then(data=>{
                dispatch(fetchGetAllPosts());
               })
        }else{
            // like
            dispatch(fetchAddLike(postId)).then(data=>{
                dispatch(fetchGetAllPosts());
            })
        }

    }
    const onViews = ()=>{}
    
    const onClickIcon = ()=>{
        switch(type){
            case 'Comment': onComment(); break;
            case 'Retweet': onReteweet(); break;
            case 'Like': onLike(); break;
            case 'Views': onViews(); break;            
        }
    }
  return (
    <div onClick={onClickIcon} className='x-post-icons-body' onMouseEnter={()=> setonFocus(true)} onMouseLeave={()=>setonFocus(false)}>
        <div className="row">
            <div className="col align-items-center" >
                {getIcon()}
                <span style={
                    onFocus ? 
                      {fontSize: '13px', color: '#1da1f2', marginLeft: '3px'}
                    : {fontSize: '13px', color: 'white', marginLeft: '3px'}
                    }>{count}</span>
            </div>
        </div>
    </div>
  )
}

export default PostIcons