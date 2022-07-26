import React from 'react';
import ".//index.css";
import stepsImage from "../../../assets/stepsImage.png";
import NegativeIcon from "../../Icons/NegativeIcon.js";
import PlusIcon from "../../Icons/PlusIcon.js";

const Steps = () => {
  return (
    <div className='Steps__container'>
        <div>
            <img src={stepsImage} alt="steps" height={"50px"} width={"50px"} />
        </div>
        <div className="Steps__info">
        <div className="Icon">
          <PlusIcon />
        </div>
        <div className="number">2.5K</div>
        <div className="target">target</div>
        <div className="Icon">
          <NegativeIcon />
        </div>
      </div>
    </div>
  )
}

export default Steps;