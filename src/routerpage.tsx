import React from 'react'
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import {HomePage} from './page/Home'
import Login from './page/Login/LoginPage'
import Register from './page/Register/RegisterPage'
import { XUseSelector } from './store'
function RouterPage() {
  const isLogin = XUseSelector(state=> state.auth.isAuth);
  return (
    <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
    }}
    >
        <Routes>
            <Route path='/' element={isLogin ?  <HomePage /> : <Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPage