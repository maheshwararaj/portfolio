import React from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Goup from '../../components/Goup/Goup'
import './Home.css'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Goup/>
    </div>
  )
}

export default Home