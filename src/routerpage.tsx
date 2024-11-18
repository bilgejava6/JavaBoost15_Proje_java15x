import React from 'react'
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import HomePage from './page/HomePage'
function RouterPage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPage