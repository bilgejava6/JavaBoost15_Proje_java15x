import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";

interface ILikeState{
    isLikeLoading: boolean,
    isUnLikeLoding: boolean
}

const initialLikeState: ILikeState = {
    isLikeLoading: false,
    isUnLikeLoding: false
}

// fetch
export const fetchAddLike = createAsyncThunk(
    'like/fetchAddLike',
    async (postId: number)=>{
        const token = localStorage.getItem('token');
        return await fetch(apis.likeService+ '/add-like',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                } ,
                body: JSON.stringify({token,postId})
        }).then(data=>data.json())
    }
)

export const fetchUnLike = createAsyncThunk(
    'like/fetchUnLike',
    async (postId:number)=>{
        const token = localStorage.getItem('token');
        return await fetch(apis.likeService+ '/un-like',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            } ,
            body: JSON.stringify({token,postId})
        }).then(data=>data.json())
    }
)

const likeSlice = createSlice({
    name: 'like',
    initialState: initialLikeState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(fetchAddLike.pending,(state)=>{state.isLikeLoading = true;})
        build.addCase(fetchAddLike.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{state.isLikeLoading = false})
        build.addCase(fetchUnLike.pending,(state)=>{state.isUnLikeLoding = true})
        build.addCase(fetchUnLike.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{state.isUnLikeLoding= false}) 
    }
})

export default likeSlice.reducer;