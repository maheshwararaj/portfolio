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
                 <p>I am well-versed in HTML, CSS and JavaScript , and other cutting edge
                    frameworks and libraries,which allows me to implement interactive features.
                    Additionally, I have experirence working with content management systems (CMS) like
                    WordPress.
                 </p>
                 <div class="about-btn">
                     <button class="button">Download CV</button>
                 </div>
             </div>
         </div>
         <div class="flex col skill-container" style={{alignItems:"flex-start"}}>
             <div class="skills-box">
                 <div class="skills-header">
                     <h3>Frontend</h3>
                 </div>
                 <div class="skills-list">
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>Bootstrap</span>
                     <span>JavaScript</span>
                     <span>Vue</span>
                     <span>React</span>
                     <span>Angular</span>
                 </div>
             </div>
             <div class="skills-box">
                 <div class="skills-header">
                     <h3>Backend</h3>
                 </div>
                 <div class="skills-list">
                     <span>PHP</span>
                     <span>JAVA</span>
                     <span>Python</span>
                     <span>C++</span>
                 </div>
             </div>
             <div class="skills-box">
                 <div class="skills-header">
                     <h3>Database</h3>
                 </div>
                 <div class="skills-list">
                     <span>MySQL</span>
                     <span>PostgreSQL</span>
                     <span>MongoDB</span>
                 </div>
             </div>
         </div>
       </div>
    </section>
  )
}

export default About