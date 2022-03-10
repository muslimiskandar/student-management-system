import React from "react";
import {subjects} from '../Data.js'
import { IoMdNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Attendance() {
  let navigate = useNavigate();
  
  return (
    <div>
      <div className="head">
        <span>Attendance</span>
        <span>
          <IoMdNotifications />
        </span>
      </div>
      <div className="subject-container">
        {subjects.map((x) => (
          <div
            key={x.id}
            onClick={() => navigate(`./${x.name.toLowerCase()}`, {state: x.name})}
            className="one-subject"
          >
            {x.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;
