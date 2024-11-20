import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = {
    isAuth: false, // login oldu mu?
    isLoginLoading: false,
    isRegisterLoding: false,
    user: {}
}

// fetch işlemleri

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {},
    extraReducers: (build)=>{}
})

export default authSlice.reducer;