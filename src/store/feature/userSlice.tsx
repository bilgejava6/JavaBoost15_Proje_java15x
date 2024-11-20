import { createSlice } from "@reduxjs/toolkit"

const initialUserState = {
    profile: {},
    searchUsers: [],
    followerList: [],
    followingList: [],
    isProfileLoading: false,
    isSearchLading: false,
    isFollowerLoding: false,
    isFollowingLoading: false
}

// fetch

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers : {},
    extraReducers: (build)=>{}

})

export default userSlice.reducer;