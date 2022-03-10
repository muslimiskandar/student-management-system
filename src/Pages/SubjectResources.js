import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { IoMdNotifications } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { resources } from "../Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { HiDownload } from "react-icons/hi";

function SubjectResources(props) {
  const { state } = useLocation();

  const downloadFormat = (cell, row) => {
    return (
      <a href={cell} download className="download-resource">
        <HiDownload />
        <br />
      </a>
    );
  };

  const columns = [
    {
      dataField: "id",
      text: "",
      style: {
        backgroundColor: "#f7e8fa",
        textAlign: "center",
      },
      headerStyle: (colum, colIndex) => {
        return { width: "40px", textAlign: "center" };
      },
    },
    {
      dataField: "name",
      text: "Book name",
      style: {
        textAlign: "center",
      },
      headerStyle: (colum, colIndex) => {
        return { textAlign: "center" };
      },
    },
    {
      dataField: "url",
      text: "Download",
      formatter: downloadFormat,
      headerStyle: {
        textAlign: "center",
        width: "100px",
      },
      style: {
        textAlign: "center",
      },
    },
  ];

  return (
    <div>
      <div className="head">
        <span>Resources</span>
        <span style={{ fontSize: "18px", fontWeight: "bold", color: "purple" }}>
          {state}
        </span>
        <span>
          <IoMdNotifications />
        </span>
      </div>
      <BootstrapTable
        keyField="id"
        data={resources}
        columns={columns}
        hovered
        condensed
        bootstrap4
        bordered={true}
      />
    </div>
  );
}

export default SubjectResources;
