import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import NewAppealModal from "../Modal/NewAppealModal";
import { Button } from "react-bootstrap";
import DeleteModal from "../Modal/DeleteModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OnlineAppeals() {
  const localData = JSON.parse(localStorage.getItem("Appeal"));
  let emptyDataMessage;

  if (!localData) {
    emptyDataMessage = () => {
      return <div style={{ textAlign: "center" }}>No appeal</div>;
    };
  }

  const formatDeleteWithIcon = (cell, row) => {
    return (
      <span className="table-delete">
        <MdDelete />
      </span>
    );
  };

  const formatStatusWithIcon = (cell, row) => {
    return <span style={{ textAlign: "right" }}>Processed</span>;
  };

  const [rowind, setRowind] = useState();

  const columns = [
    {
      dataField: "id",
      text: "ID",
      style: {
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
        width: "50px",
      },
    },
    {
      dataField: "choice.label",
      text: "Type",
      headerStyle: {
        width: "200px",
      },
    },
    {
      dataField: "date",
      text: "Date and time",
      style: {
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
        width: "200px",
      },
    },
    {
      dataField: "status",
      text: "Status",
      formatter: formatStatusWithIcon,
      style: {
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
        width: "120px",
      },
    },
    {
      dataField: "text",
      text: "Note",
      style: {
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
        width: "80px",
      },
    },
    {
      dataField: "delete",
      text: "Delete",
      formatter: formatDeleteWithIcon,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          setRowind(rowIndex);
          setModalShowDelete(true);
        },
      },
      style: {
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
        width: "80px",
      },
    },
  ];

  const [modalShowNew, setModalShowNew] = useState(false);
  const [modalShowDelete, setModalShowDelete] = useState(false);

  const options = [
    { value: "1", label: "Reference" },
    { value: "2", label: "Copy of diploma" },
    { value: "3", label: "Academic transcript" },
    { value: "4", label: "Student's individual curriculum" },
    { value: "5", label: "Other" },
  ];

  return (
    <div className="online-appeals">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <div className="head">
        <span>Online appeals</span>
        <span>
          <IoMdNotifications />
        </span>
      </div>
      <div className="newAppeal-buttonDiv">
        <Button className="green-button" onClick={() => setModalShowNew(true)}>
          New appeal{" "}
          <span>
            <FaPen />
          </span>
        </Button>
      </div>
      <BootstrapTable
        keyField="id"
        data={localData || ""}
        columns={columns}
        noDataIndication={emptyDataMessage}
        headerClasses="appeals-header"
        hovered
        condensed
        striped
      />
      <DeleteModal
        show={modalShowDelete}
        onHide={() => setModalShowDelete(false)}
        rowind={rowind}
      />
      <NewAppealModal
        show={modalShowNew}
        onHide={() => setModalShowNew(false)}
        options={options}
      />
    </div>
  );
}

export default OnlineAppeals;
