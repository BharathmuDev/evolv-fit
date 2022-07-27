import React, { useState } from "react";
import "./index.css";
import chartImage from "../../../assets/chartImage.png";
import NegativeIcon from "../../Icons/NegativeIcon.js";
import PlusIcon from "../../Icons/PlusIcon.js";
import Arrow from "../../Icons/Arrow";
import { PieChart } from 'react-minimal-pie-chart';

const Calories = (props) => {
  const [calories, setCalories] = useState(2.5);

  function incrementCalories() {
    console.log(calories + 0.5);
    setCalories((prevCount) => parseFloat(Math.abs(prevCount + 0.1).toFixed(1)));
  }

  function decrementCalories() {
    setCalories((prevCount) => prevCount === 0 ? prevCount : parseFloat(Math.abs((prevCount - 0.1)).toFixed(1)));
  }

  return (
    <div className="Calories__container">
      <duv>
        <img src={chartImage} alt="chart" height={"100px"} width={"100px"} />
      </duv>
      <div className="calories__info">
        <button className="button" onClick={incrementCalories}>
          <PlusIcon />
        </button>
        <div className="number">{calories}K</div>
        <div className="target">target</div>
        <button className="button" onClick={decrementCalories}>
          <NegativeIcon />
        </button>
      </div>
      <div className="calories_arrowbox">
        <div>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Calories;
