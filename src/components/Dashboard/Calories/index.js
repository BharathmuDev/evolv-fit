import React from "react";
import "./index.css";
import chartImage from "../../../assets/chartImage.png";
import NegativeIcon from "../../Icons/NegativeIcon.js";
import PlusIcon from "../../Icons/PlusIcon.js";

const Calories = () => {
  return (
    <div className="Calories__container">
      <duv>
        <img src={chartImage} alt="chart" height={"100px"} width={"100px"} />
      </duv>
      <div className="calories__info">
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
  );
};

export default Calories;
