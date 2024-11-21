import React, { useEffect,useState } from 'react'
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import {HomePage} from './page/Home'
import Login from './page/Login/LoginPage'
import Register from './page/Register/RegisterPage'
import { XDispatch, XUseSelector } from './store'
import { useDispatch } from 'react-redux'
import { userLogin } from './store/feature/authSlice'
function RouterPage() {
  const dispatch = useDispatch<XDispatch>();
  const isLogin = XUseSelector(state=> state.auth.isAuth);
  /**
   * accessToken -> uygulama içinde istekleri atmak için ve oturumu yönetmek için kullanılır
   * geçicidir. genellikle belli süresi vardır 5dk gibi, geçerliliği bitince login sayfasına
   * dönüş olur.
   * refreshToken -> genellikle uzun süreli ya da süresiz token dır. temel amacı her oturum için 
   * ya da süresi dolan oturumlar için tekrar accessToken almak için kullanılır. 
   */
  useEffect(()=>{
    const token =  localStorage.getItem('token');
    if(token)
      dispatch(userLogin())
  },[]);
  return (
    <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
    }}
    >
        <Routes>
            <Route path='/' element={isLogin  ?  <HomePage /> : <Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPage