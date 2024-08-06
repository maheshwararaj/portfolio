import React from 'react'
import data from '../../index.json'
import { assets } from '../../assets/assets'

const Projects = () => {
  return (
    <section  className="portfolio-section section-pad" id="profiles">
      <div className="portfolio-container-box">
        <div className="portfolio-container">
         
          <h2 className="section--heading">Profiles</h2>
        </div>
        
      </div>
     
      <div className="portfolio-section-container">
        {data?.profiles?.map((item, index) => (
          <div key={index} className="portfolio-section-card">
            <div className="portfolio-section-img" >
              <img src={assets.profiles[index]} style={{objectFit:"cover",height:"100%"}} alt="Placeholder" />
            </div>
            <div className="portfolio-section-card-content">
              <div className='portfolio-section-details'>
                <h3 className="portfolio-section-title" style={{textAlign:"center"}}>{item.title}</h3>
              </div>
              
                
              
            </div>
            <a href={item.link}>
            <div className="link">
              <p >Have A Look !! </p>
            </div>
            </a>
          </div>
         ))} 
        
      </div>
   
    </section>
  )
}

export default Projects;
