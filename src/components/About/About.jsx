import React from 'react'
import './About.css'
const About = () => {
  return (
   
    <section className="section section-pad" id="about">
       <div className="portfolio--container">
       <p classNameName="sub--title">About Me</p>
        <h2 classNameName="section--heading">My Skillset</h2>
       </div>
       <div className="flex about-container" >
         <div className="col">
             <div className="about-info">
                 <h3>My introduction</h3>
                 <p>I'm Maheshwara Raj, an MCA student at Anna University, Guindy, deeply passionate about software development. Problem-solving fuels my enthusiasm, and I'm constantly exploring new avenues to craft innovative solutions. With a knack for coding and a drive for excellence, I'm excited to make my mark in the world of software development.
                 </p>
                 <div className="about-btn">
                     <button className="button">Download CV</button>
                 </div>
             </div>
         </div>
         <div className="flex col skill-container" style={{alignItems:"flex-start"}}>
             <div className="skills-box">
                 <div className="skills-header">
                     <h3>Languages</h3>
                 </div>
                 <div className="skills-list">
                     <span>JAVA</span>
                     <span>PYTHON</span>
                     <span>C</span>
                 </div>
             </div>
             <div className="skills-box">
                 <div className="skills-header">
                     <h3>WEB DEV</h3>
                 </div>
                 <div className="skills-list">
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>REACT</span>
                     <span>NODE</span>
                     <span>EXPRESS</span>
                   
                 </div>
             </div>
             <div className="skills-box">
                 <div className="skills-header">
                     <h3>OTHERS</h3>
                 </div>
                 <div className="skills-list">
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