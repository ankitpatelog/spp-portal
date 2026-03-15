import { useState } from 'react'
import './assets/css/style.css'
import Main from './components/Main'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import AuthProvider from './authProvider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() {

  return (
    <>
    <AuthProvider> // now it will use isloggedin for overall app 
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
          <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </AuthProvider>
      
    </>
  )
}

export default App
