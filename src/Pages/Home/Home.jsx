import React from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Goup from '../../components/Goup/Goup'
import './Home.css'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Routine from '../../components/Routine/Routine'
import Profiles from '../../components/Profiles/Profiles'
import Awards from '../../components/Awards/Awards'

const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <Routine/>
        <About/>
        <Projects/>
        <Profiles/>
        <Awards/>
        <Contact/>
        <Goup/>
        
    </div>
  )
}

export default Home