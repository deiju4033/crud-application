
import React from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserCreate from './components/UserCreate'
import UserUpdate from './components/UserUpdate'


function App() {
  return (
    <BrowserRouter>
    <Routes>

   <Route path='/' element={<Home/>}  />
   <Route path='/usercreate' element={<UserCreate/>}  />
   <Route path='/edit/:id' element={<UserUpdate/>}  />
    </Routes>
    </BrowserRouter>


    
    
  )
}

export default App
