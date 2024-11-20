import React from 'react'
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import {HomePage} from './page/Home'
import Login from './page/Login/LoginPage'
import Register from './page/Register/RegisterPage'
function RouterPage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPage