import React from "react";
import "./index.css";
import Picture from "../../../assets/picture.png";
import { Data } from "../Data.js";

const Users = (props) => {
  
  return (
    <div className="user_container">
      <div>
        <div>
          <img src={Picture} alt="user" height={"40px"} width={"40px"} />
        </div>
      </div>

      <div className="user_info">
        <div>
          <div className="user__name">{props.name}</div>
          <div className="user__email">{props.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Users;
