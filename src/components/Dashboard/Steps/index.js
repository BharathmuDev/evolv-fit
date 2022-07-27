import React, { useState } from 'react';
import ".//index.css";
import stepsImage from "../../../assets/stepsImage.png";
import NegativeIcon from "../../Icons/NegativeIcon.js";
import PlusIcon from "../../Icons/PlusIcon.js";

const Steps = () => {
  const [counter, setCounter] = useState(4);

  function incrementCount() {
    setCounter(prevCount => prevCount + 1);
    };
  
  function decrementCount() {
    setCounter(prevCount => prevCount - 1);
  };

  return (
    <div className='Steps__container'>
        <div>
            <img src={stepsImage} alt="steps" height={"50px"} width={"50px"} />
        </div>
        <div className="Steps__info">
        <button className="button" onClick={incrementCount}>
          <PlusIcon />
        </button>
        <div className="number">{counter}K</div>
        <div className="target">target</div>
        <button className="button" onClick={decrementCount}>
          <NegativeIcon />
        </button>
      </div>
    </div>
  )
}

export default Steps;