import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeTable from "./Pages/TimeTable";
import Attendance from "./Pages/Attendance";
import Resources from "./Pages/Resources";
import ExamResults from "./Pages/ExamResults";
import OnlineAppeals from "./Pages/OnlineAppeals";
import PersonalInformation from "./Pages/PersonalInformation";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Subject from "./Pages/Subject";
import SubjectResources from "./Pages/SubjectResources";
import Welcome from "./Pages/Welcome";

function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <Sidebar />
      </div>
      <div className="centered-main">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:subject" element={<SubjectResources />} />
          <Route path="/exam-results" element={<ExamResults />} />
          <Route path="/online-applies" element={<OnlineAppeals />} />
          <Route
            path="/personal-information"
            element={<PersonalInformation />}
          />
          <Route path="/attendance/:subject" element={<Subject />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
