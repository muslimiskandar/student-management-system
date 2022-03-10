import React from "react";
import { IoMdNotifications } from "react-icons/io";
import {subjects} from '../Data'
import {useNavigate} from 'react-router-dom'

function Resources() {
    let navigate = useNavigate();

  return (
    <div>
      <div className="head">
        <span>Resources</span>
        <span>
          <IoMdNotifications />
        </span>
      </div>
      <div className="subject-container">
        {subjects.map((x) => (
          <div
            key={x.id}
            onClick={() =>
              navigate(`./${x.name.toLowerCase()}`, { state: x.name })
            }
            className="one-subject"
          >
            {x.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
