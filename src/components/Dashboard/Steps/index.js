import React, { useState } from "react";
import ".//index.css";
import NegativeIcon from "../../Icons/NegativeIcon.js";
import PlusIcon from "../../Icons/PlusIcon.js";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Steps = (props) => {
  const [counter, setCounter] = useState(4);
  

  function incrementCount() {
    setCounter((prevCount) => prevCount + 0.5);
  }

  function decrementCount() {
    setCounter((prevCount) => (prevCount === 0 ? prevCount : prevCount - 0.5));
  }

  return (
    <div className="Steps__container">
      <div style={{ height: "60px", width: "60px" }}>
        <CircularProgressbarWithChildren
          value="60"
          styles={buildStyles({
            pathColor: "#7FD18C",
          })}
        >
          <h6 className="steps_number">{props.steps}</h6>
          <small className="steps_texts">Walked</small>
        </CircularProgressbarWithChildren>
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
  );
};

export default Steps;
