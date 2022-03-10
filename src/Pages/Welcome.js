import React from "react";
import { personalInfo } from "../Data";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-head">
        <p>
          Welcome, <i>{personalInfo.name}!</i>
        </p>
        <p>It is your university online system</p>
      </div>
      <b>Features of this system:</b>
      <ul>
        <li>
          Timetable -{" "}
          <i>You can check from this page which lessons you have every day;</i>
        </li>
        <li>
          Attendance -{" "}
          <i>
            You can check your marks and participation in the lessons according
            to your attendance;
          </i>
        </li>
        <li>
          Resources -{" "}
          <i>
            One of the great features is the resources page. You can look at
            your online books and download them instantly;
          </i>
        </li>
        <li>
          Exam results -{" "}
          <i>
            On this page, you'll see your results for each exam. You can also
            see your total GPA;
          </i>
        </li>
        <li>
          Online applies -{" "}
          <i>
            This page is the best way to send applications online. You can apply
            for an academic transcript, reference, and other documents;
          </i>
        </li>
        <li>
          Personal information -{" "}
          <i>
            You can look at your personal details for the university. Who are
            you?
          </i>
        </li>
      </ul>
      <small>Tap to burger menu to go to other pages</small>
    </div>
  );
}

export default Welcome;
