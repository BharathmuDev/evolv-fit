import React, { useState } from "react";
import "./index.css";
import NegativeIcon from "../../Icons/NegativeIcon.js";
import PlusIcon from "../../Icons/PlusIcon.js";
import Arrow from "../../Icons/Arrow";
import { PieChart } from "react-minimal-pie-chart";

const Calories = (props) => {
  const [calories, setCalories] = useState(2.5);

  function incrementCalories() {
    console.log(calories + 0.5);
    setCalories((prevCount) =>
      parseFloat(Math.abs(prevCount + 0.1).toFixed(1))
    );
  }

  function decrementCalories() {
    setCalories((prevCount) =>
      prevCount === 0
        ? prevCount
        : parseFloat(Math.abs(prevCount - 0.1).toFixed(1))
    );
  }

  return (
    <div className="Calories__container">
      <duv style={{ height: "60px", width: "60px", position: "relative" }}>
        <PieChart
          data={[
            { title: "protien", value: 75, color: "#F45C84" },
            { title: "fat", value: 55, color: "#03C7FC" },
            { title: "carbs", value: 45, color: "#F5C90F" },
          ]}
          lineWidth={20}
          label={({ dataEntry }) => 2154}
          labelStyle={{
            fontSize: "20px",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fill: "#fff",
          }}
          labelPosition={0}
        />
      </duv>
      <div className="calories__info">
        <button className="button" onClick={incrementCalories}>
          <PlusIcon />
        </button>
        <div className="number">{props.calories}K</div>
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
