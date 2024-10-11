import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import hammenu from '../../assets/hammenu.png'
import './Navbar.css'
const Navbar = ({showNav,setShowNav}) => {
  
  useEffect(()=>{
    const links = document.querySelectorAll(".link")
    links.forEach(element => {
        element.addEventListener("click",()=>{
          setShowNav(false)
        })
    });
  },[showNav])
  
  return (
    <div className='navbar' >
        <h1 className='title'>M<span>.</span></h1>
        <div className='nav-right'>
        
          <nav className='nav-links'>
            <li ><a href="#">Home</a></li>
            <li  ><a href="#about">About</a></li>
            <li ><a href="#MyPortfolio">Projects</a></li>
            <li><a href="#profiles">Profiles</a></li>
            <li ><a href="#contact">Connect</a></li>
          </nav>
         {showNav ?
          <nav className='mobile-nav'>
            <li className='link'><a href="#">Home</a></li>
            <li className='link' ><a href="#about">About</a></li>
            <li className='link'><a href="#MyPortfolio">Projects</a></li>
            <li className='link'><a href="#profiles">Profiles</a></li>
            <li className='link'><a href="#contact">Connect</a></li>
            <p className='close' onClick={()=>setShowNav(false)} >X</p>
          </nav>
            
         : <></>}
         <button><a href="" download>Download CV</a> </button>

        <img src={hammenu} className='menu' onClick={()=>setShowNav(true)} />
         
         
       </div>
        
        
    </div>
  )
}

export default Navbar
