import React from "react";
import "./index.css";
import Person from "../../Icons/Person.js";
import Calendar from "../../Icons/Calendar.js";
import Arrow from "../../Icons/Arrow";

const index = (props) => {
  return (
    <div className="schedules_container">
      <div className="Scheddule_events">
        <div className="Todays_event">
          <div>
            <Person />
          </div>
          <div className="date">15 Oct</div>
        </div>
        <div className="Upcoming_events">
          <div>
            <Calendar />
          </div>
          <div className="date">22 Oct</div>
        </div>
      </div>
      <div className="Schedules_arrowbox">
        <div>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default index;
