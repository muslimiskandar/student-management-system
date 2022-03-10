import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { IoMdNotifications } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { attendance } from "../Data";
import { FaCheck } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";

function Subject(props) {
  const { state } = useLocation();

  const dailyFormatter = (cell, row) => {
    console.log(row.isAttend);
    return (
      <span>
        {row.isAttend == true ? (
          row.mark == "" ? (
            <span className="active-attendance">
              <FaCheck />
            </span>
          ) : (
            <span className="mark-attendance">{row.mark}</span>
          )
        ) : (
          <span className="no-attendance">
            <VscChromeClose />
          </span>
        )}
      </span>
    );
  };

  const columns = [
    {
      dataField: "date",
      text: "Date",
      sort: true,
      style: {
        fontStyle: "italic",
        backgroundColor: "#f7e8fa",
        paddingLeft: "22px",
      },
      headerStyle: (colum, colIndex) => {
        return { width: "100px", textAlign: "center" };
      },
    },
    {
      dataField: "",
      text: "Daily",
      formatter: dailyFormatter,
      style: {
        width: "10vh",
        textAlign: "center",
      },
      headerStyle: (colum, colIndex) => {
        return { width: "80px", textAlign: "center" };
      },
    },
    {
      dataField: "lesson",
      text: "Lesson",
      headerStyle: {
        textAlign: "center",
      },
      style: {
        textAlign: "center",
      },
    },
  ];

  return (
    <div>
      <div className="head">
        <span>Attendance</span>
        <span style={{ fontSize: "18px", fontWeight: "bold", color: "purple" }}>
          {state}
        </span>
        <span>
          <IoMdNotifications />
        </span>
      </div>
      <BootstrapTable
        keyField="date"
        data={attendance}
        columns={columns}
        hovered
        condensed
        bootstrap4
        bordered={true}
        pagination={paginationFactory()}
      />
    </div>
  );
}

export default Subject;
