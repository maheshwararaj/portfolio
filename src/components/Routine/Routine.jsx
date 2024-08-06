import React from "react";
import "./Routine.css";
import { assets } from "../../assets/assets";

const Routine = () => {
  return (
    <div className="routine">
        <div className="routine-container">

        
        <div className="routine-line">

        </div>
       <div className="routine-box">
        <div className="routine-img-container">
         <img src={assets.learn} alt="" />
        </div>
       <p>Learn</p>
      </div>
      <div className="routine-box">
        <div className="routine-img-container">
          <img src={assets.implement} alt="" />
        </div>
        <p>Solve Problems</p>
      </div>
      <div className="routine-box">
        <div className="routine-img-container">
          <img src={assets.learn} alt="" />
        </div>
        <p>Develop Projects</p>
        
      </div>
      <div className="routine-box">
        <div className="routine-img-container">
          <img src={assets.repeat} alt="" />
        </div>
        <p>Repeat</p>
      </div>
      </div>
    </div>
  );
};

export default Routine;
