import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
const Navbar = ({showNav}) => {
  return (
    <div className='navbar' >
        <h1 className='title'>M<span>.</span></h1>
        {showNav ? <div className='nav-right'>
          <nav className='nav-links'>
            <li><a href="#">Home</a></li>
            <li ><a href="#about">About</a></li>
            <li><a href="#MyPortfolio">Projects</a></li>
            <li>Connect</li>
          </nav>
            <button><a href="https://drive.google.com/file/d/1TC86o_W3Tm78R5oMEjkySu-u8hir29yG/view?usp=sharing" download>Download CV</a> </button>
        </div> : <></>}
        
        
    </div>
  )
}

export default Navbar