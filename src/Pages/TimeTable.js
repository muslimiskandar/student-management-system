import React from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import ReactToPdf from "react-to-pdf";
import { HiDownload } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { personalInfo, timetableData } from "../Data";


function TimeTable() {
  const ref = React.createRef();

  
  const columns = [
    {
      dataField: "hours",
      text: "",
      headerStyle: {
        backgroundColor: "#f7e8fa",
        textAlign: "center",
        height: "20px"
      },
      style: {
        fontStyle: "italic",
        backgroundColor: "#f7e8fa",
      },
    },
    {
      dataField: "monday",
      text: "Monday",
    },
    {
      dataField: "tuesday",
      text: "Tuesday",
    },
    {
      dataField: "wednesday",
      text: "Wednesday",
    },
    {
      dataField: "thursday",
      text: "Thursday",
    },
    {
      dataField: "friday",
      text: "Friday",
    },
  ];

  const options = {
    orientation: "landscape",
    unit: "in",
  };
  return (
    <div className="time-table">
      <div ref={ref}>
        <div className="head">
          <span>Timetable</span>
          <span>
            <IoMdNotifications />
          </span>
        </div>
        <div className="timetable-head">
          <h5>{personalInfo.university}</h5>
          <p>Student: {personalInfo.name}</p>
          <p>Group: {personalInfo.group}</p>
        </div>

        <div className="table-timetable-center">
          <BootstrapTable
            keyField="id"
            data={timetableData}
            columns={columns}
            hovered
            condensed
            bordered={true}
            headerClasses="table-header"
            rowStyle={{
              height: "100px",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          />
        </div>
      </div>
      <div className="download">
        <ReactToPdf
          targetRef={ref}
          filename="Timetable.pdf"
          options={options}
          x={0.5}
          y={0.7}
        >
          {({ toPdf }) => (
            <button onClick={toPdf} className="download-button">
              Download{" "}
              <span>
                <HiDownload />
              </span>
            </button>
          )}
        </ReactToPdf>
      </div>
    </div>
  );
}

export default TimeTable;
