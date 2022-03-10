import React from "react";
import { examResults } from "../Data";
import { IoMdNotifications } from "react-icons/io";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

function ExamResults() {
  const columns = [
    {
      dataField: "id",
      text: "",
      headerStyle: (colum, colIndex) => {
        return { width: "40px", textAlign: "center" };
      },
    },
    {
      dataField: "name",
      text: "Subject",
      style: {
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
        width: "150px",
      },
    },
    {
      dataField: "semPoint",
      text: "Semester point",
      sort: true,
      style: {
        textAlign: "center",
        width: "100px",
      },
      headerStyle: {
        textAlign: "center",
        width: "150px",
      },
    },
    {
      dataField: "examPoint",
      text: "Exam point",
      sort: true,
      style: {
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
        width: "150px",
      },
    },
    {
      dataField: "totalPoint",
      text: "Total point",
      sort: true,
      style: {
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
        width: "150px",
      },
    },
  ];

  let creditSum = 0;
  let s = 0;
  for (let n = 0; n < examResults.length; n++) {
    s = s + examResults[n].totalPoint * examResults[n].credit;
    creditSum = creditSum + examResults[n].credit;
  }
  let gpa = Math.round((s / creditSum) * 10000) / 10000;

  return (
    <div className="exam-results">
      <div className="head">
        <span>Exam results</span>
        <span>
          <IoMdNotifications />
        </span>
      </div>
      <BootstrapTable
        keyField="id"
        data={examResults}
        columns={columns}
        hovered
        striped
        condensed
        bootstrap4
        bordered={true}
      />
      <br />
      <div className="gpa-container">
        <span>
          <b>GPA: {gpa}</b>
        </span>
      </div>
    </div>
  );
}

export default ExamResults;
