import React from "react";
import "./index.css";
import Person from "../../Icons/Person.js";
import Calendar from "../../Icons/Calendar.js";
import Arrow from "../../Icons/Arrow";

const index = () => {
  return (
    <div className="schedules_container">
      <div className="Scheddule_events">
        <div className="Todays_event">
          <div>
            <Person />
          </div>
          <div>15 Oct</div>
        </div>
        <div className="Upcoming_events">
          <div>
            <Calendar />
          </div>
          <div>22 Oct</div>
        </div>
      </div>

      <div className="Schedules_arrow">
        <div>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default index;
