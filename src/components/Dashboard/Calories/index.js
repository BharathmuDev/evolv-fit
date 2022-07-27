import React, { useState } from "react";
import "./index.css";
import chartImage from "../../../assets/chartImage.png";
import NegativeIcon from "../../Icons/NegativeIcon.js";
import PlusIcon from "../../Icons/PlusIcon.js";

const Calories = () => {
  const [calories, setCalories] = useState(2.5);

  function incrementCalories() {
    setCalories((prevCount) => prevCount + 0.5);
  }

  function decrementCalories() {
    setCalories((prevCount) => prevCount - 0.5);
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
    </div>
  );
};

export default Calories;
