import React from 'react'

import Home from './components/HOMEPAGE/Home'
import Login from './components/LOGIN/Login'
import Sinup from './components/SINUP/Sinup'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
import Profile from './components/PROFILE/Profile'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/Login'element={<Login />}/>
      <Route path='/Sinup'element={<Sinup />}/>
      <Route path='/profile'element={<Profile/>}/>
     </Routes>
     </BrowserRouter>
     

    </div>
  )
}

export default App
