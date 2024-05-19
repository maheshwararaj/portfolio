import React from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Goup from '../../components/Goup/Goup'
import './Home.css'
import Projects from '../../components/Projects/Projects'

const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <About/>
        <Projects/>
        <Goup/>
    </div>
  )
}

export default Home