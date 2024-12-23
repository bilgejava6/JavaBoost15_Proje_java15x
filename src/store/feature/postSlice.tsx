import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import apis from "../../config/RestApis"
import { INewPostRequest } from "../../models/INewPostRequest";
import { IBaseResponse } from "../../models/IBaseResponse";
import { IPostResponse } from '../../models/IPostResponse'
import state from "sweetalert/typings/modules/state";
interface IPostState{
    post: IPostResponse | null,
    isLodingPost: boolean,
    postList: IPostResponse[],
    isLoadingPostList: boolean,
    myPostList: IPostResponse[],
    isLoadingMyPostList: boolean,
    isNewPostLoading: boolean
}
const initialPostState: IPostState = {
    post: null,
    isLodingPost: false,
    postList: [],
    isLoadingPostList: false,
    myPostList: [],
    isLoadingMyPostList: false,
    isNewPostLoading: false
}

// fetch
export const fetchGetAllMyPosts= createAsyncThunk(
    'post/fetchGetAllMyPosts',
    async()=>{
      const token = localStorage.getItem('token');  
      return await  fetch(apis.postService+'/get-all-my-posts?token='+token).then(data=>data.json())
    }
)

export const fetchGetAllPosts= createAsyncThunk(
    'post/fetchGetAllPosts',
    async()=>{
        const token = localStorage.getItem('token'); 
      return await  fetch(apis.postService+'/get-all-posts?token='+ token).then(data=>data.json())
    }
)

export const fetchNewPost= createAsyncThunk(
    'post/fetchNewPost',
    async(payload: INewPostRequest)=>{       
      return await  fetch(apis.postService+'/new-post',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(data=>data.json())
    }
)

export const fetchPostGetById = createAsyncThunk(
    'post/fetchPostGetById',
    async (postId: number)=>{
        const token = localStorage.getItem('token');
        const reqUrl = apis.postService+`/get-post-by-id?token=${token}&postId=${postId}`;
        console.log('reqUrl...: ', reqUrl);
        const response = await fetch(reqUrl)
                    .then(data=>data.json())
        return response;
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState: initialPostState,
    reducers: {

    },
    extraReducers: (build)=>{
        build.addCase(fetchGetAllMyPosts.pending,(state)=>{state.isLoadingMyPostList = true})
        build.addCase(fetchGetAllMyPosts.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isLoadingMyPostList = false;
            if(action.payload.code === 200){
                state.myPostList = action.payload.data;
            }
        })
        build.addCase(fetchGetAllPosts.pending,(state)=>{state.isLoadingPostList = true})
        build.addCase(fetchGetAllPosts.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isLoadingPostList = false;
            if(action.payload.code === 200){
                state.postList = action.payload.data;
            
            }
        })
        build.addCase(fetchNewPost.pending,(state)=>{state.isNewPostLoading = true})
        build.addCase(fetchNewPost.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isNewPostLoading = false
        })
        build.addCase(fetchPostGetById.pending,(state)=>{
            state.isLodingPost= true;
        })      
        build.addCase(fetchPostGetById.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isLodingPost = false;
            if(action.payload.code === 200){
                state.post = action.payload.data;
            }
        })      
        
    }
})


export default postSlice.reducer;