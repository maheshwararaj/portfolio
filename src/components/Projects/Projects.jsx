import React from 'react'
import data from '../../index.json'
import './Projects.css'
import { assets } from '../../assets/assets'

const Projects = () => {
  return (
    <section  className="portfolio-section section-pad" id="MyPortfolio">
      <div className="portfolio-container-box">
        <div className="portfolio-container">
         
          <h2 className="section--heading">Projects</h2>
        </div>
        <div>
          <button className="button">
            Visit My GitHub
          </button>
        </div>
      </div>
     
      <div className="portfolio-section-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio-section-card">
            <div className="portfolio-section-img">
              <img src={assets.projects[index]} alt="Placeholder" />
            </div>
            <div className="portfolio-section-card-content">
              <div className='portfolio-section-details'>
                <h3 className="portfolio-section-title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
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
