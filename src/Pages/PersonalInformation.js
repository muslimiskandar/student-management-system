import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { personalInfo } from "../Data";

function PersonalInformation() {
  console.log(personalInfo);

  return (
    <div>
      <div className="head">
        <span>Personal information</span>
        <span>
          <IoMdNotifications />
        </span>
      </div>
      <div className="personalInfo">
        <img
          src={personalInfo.photoUrl}
          alt="Student"
          width="180px"
          height="180px"
        />
        <div>
          <p>{personalInfo.name}</p>
          <p>Gender: {personalInfo.gender}</p>
          <p>ID: {personalInfo.studentId}</p>
          <p>Course: {personalInfo.course}</p>
          <p>Faculty: {personalInfo.faculty}</p>
          <b>{personalInfo.university}</b>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
