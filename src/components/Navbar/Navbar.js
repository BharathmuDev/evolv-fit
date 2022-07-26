import React from "react";
import "./Navbar.css";
import Vector from "..//Icons/vector.js";
import Nutrition from "..//Icons/Nutrition.js";
// import { CgGym } from 'react-icons/cg';

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="steps_container">
        <div className="steps__icon">
          <Vector />
        </div>
        <div className="navbar__text">Steps</div>
      </div>
      <div className="workout_container">
        <div> </div>
        <div className="navbar__text"> Workout</div>
      </div>
      <div className="nutrition_container">
        <div>
          <Nutrition />
        </div>
        <div className="navbar__text"> Nutrition</div>
      </div>
    </div>
  );
};

export default Navbar;
