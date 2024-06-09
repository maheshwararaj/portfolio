import React from 'react'
import './About.css'
const About = () => {
  return (
   
    <section class="section section-pad" id="about">
       <div class="portfolio--container">
       <p className="sub--title">About Me</p>
        <h2 className="section--heading">My Skillset</h2>
       </div>
       <div class="flex about-container" >
         <div class="col">
             <div class="about-info">
                 <h3>My introduction</h3>
                 <p>I'm Maheshwara Raj, an MCA student at Anna University, Guindy, deeply passionate about software development. Problem-solving fuels my enthusiasm, and I'm constantly exploring new avenues to craft innovative solutions. With a knack for coding and a drive for excellence, I'm excited to make my mark in the world of software development.
                 </p>
                 <div class="about-btn">
                     <button class="button">Download CV</button>
                 </div>
             </div>
         </div>
         <div class="flex col skill-container" style={{alignItems:"flex-start"}}>
             <div class="skills-box">
                 <div class="skills-header">
                     <h3>Languages</h3>
                 </div>
                 <div class="skills-list">
                     <span>JAVA</span>
                     <span>PYTHON</span>
                     <span>C</span>
                 </div>
             </div>
             <div class="skills-box">
                 <div class="skills-header">
                     <h3>WEB DEV</h3>
                 </div>
                 <div class="skills-list">
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>REACT</span>
                     <span>NODE</span>
                     <span>EXPRESS</span>
                   
                 </div>
             </div>
             <div class="skills-box">
                 <div class="skills-header">
                     <h3>OTHERS</h3>
                 </div>
                 <div class="skills-list">
                     <span>DSA</span>
                     <span>POSTGRESQL</span>
                     <span>MongoDB</span>
                 </div>
             </div>
         </div>
       </div>
    </section>
  )
}

export default About