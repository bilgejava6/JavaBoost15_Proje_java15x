import React from 'react'
interface IPostIconsProps{
    type: 'Comment' | 'Retweet' | 'Like' | 'Views',
    count: number,
    postId: string
}
function PostIcons(props: IPostIconsProps) {
    const {type,count,postId} = props
    const getIcon = ()=>{
        switch(type){
            case 'Comment': return <i className="fa-regular fa-comment fa-sm m-1" style={{color: 'white'}}></i>;
            case 'Retweet': return <i className="fa-solid fa-retweet"  style={{color: 'white'}}></i>;
            case 'Like': return <i className="fa-solid fa-heart"  style={{color: 'white'}}></i>;
            case 'Views': return <i className="fa-solid fa-chart-simple"  style={{color: 'white'}}></i>;
            default: return null;
        }
    }
  return (
    <div>
        <div className="row">
            <div className="col align-items-center">
                {getIcon()}
                <span style={{fontSize: '13px', color: 'white', marginLeft: '3px'}}>{count}</span>
            </div>
        </div>
    </div>
  )
}

export default PostIcons