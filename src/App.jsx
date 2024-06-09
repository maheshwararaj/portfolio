import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import './App.css'
import Footer from './components/Footer/Footer'

const App = () => {
  const [showNav,setShowNav] = useState(true)

 
  return (

  
    <div  className='app'>
      <Navbar showNav = {showNav} setShowNav = {setShowNav}/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    
    </div>
  )
}

export default App