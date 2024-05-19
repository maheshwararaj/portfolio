import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h3>Hello, I'm</h3>
            <h1>MAHESHWARARAJ</h1>
            <h4>Aspiring Software Developer</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, assumenda </p>
            <div className="hero-links">
                <button  className='button'>About</button>
                <div className="links">
                    <li className='link'><a href=""><img src={assets.github} alt="" /></a></li>
                    <li className='link'><a href=""><img src={assets.linkedin} alt="" /></a></li>
                    <li className='link'><a href=""><img src={assets.insta} alt="" /></a></li>
                </div>
            </div>
        </div>
        <div className="hero-right" >
          <div className="container">
             <img id='background' src={assets.background} alt="" />
            
            </div>
        </div>  
    </div>
  )
}

export default Hero