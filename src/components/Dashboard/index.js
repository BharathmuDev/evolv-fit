import React from "react";
import "./index.css";
import Users from "../../components/Dashboard/Users";
import Schedules from "../../components/Dashboard/Schedules";
import Steps from "../../components/Dashboard/Steps";
import Calories from "../../components/Dashboard/Calories";
import Notification from "../../components/Dashboard/Notification";
import { Data } from "./Data";


const Dashboard = () => {
  return Data.map((User) => (
    <div className="dashboard__container">
      <div>
        <Users name={User.name} email={User.email}/>
      </div>
      <div>
        <Steps steps={User.steps}/>
      </div>
      <div>
        <Schedules />
      </div>
      <div>
        <Calories calories={User.calories}/>
      </div>
      <div>
        <Notification />
      </div>
    </div>
  ));
};

export default Dashboard;
