import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

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
    async (postId: string)=>{
        const token = localStorage.getItem('token');
        return await fetch('',{
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
    async (postId:string)=>{
        const token = localStorage.getItem('token');
        return await fetch('',{
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

    }
})

export default likeSlice.reducer;