import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/login'
import './App.css'
import { BrowserRouter,Links,Link, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
