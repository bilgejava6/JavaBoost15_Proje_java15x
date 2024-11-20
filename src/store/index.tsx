import { configureStore } from "@reduxjs/toolkit";

import {
    authSlice,
    userSlice
} from './feature'
import { useSelector } from "react-redux";


const store = configureStore({
    reducer:  {
        auth: authSlice,
        user: userSlice
    }
})
export type XDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const XUseSelector = useSelector.withTypes<RootState>();
export default store;