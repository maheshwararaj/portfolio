import React from 'react'
import './Awards.css'
import data from '../../index.json'
import img from '../../assets/sampleimg.jpg'
import decor from '../../assets/decor.png'
const Awards = () => {
  return (

    
    <div className="awards section-pad">
        <h2 className="section--heading">Achievements</h2>
        <div className="awards-container">
        
        <div className="awards-img-container">
            <img src={img} alt="" />
        </div>
        <div className="awards-list flex">
            {
                data.awards.map((award,index)=>{
                    return (
                        <div className="award-box flex" key={index}>
                            <h3>{award.name}</h3>
                            <p><b>{award.position}</b></p>
                            <p>{award.college}</p>
                            <img className='decor decor-left' src={decor} alt="" />
                            <img className='decor decor-right' src={decor} alt="" />
                        </div>
                    )
                })
            }
        </div>
            
        </div>
    </div>

  )
}

export default Awards