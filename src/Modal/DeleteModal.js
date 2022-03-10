import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteModal(props) {
  const { rowind, onHide } = props;

  const deleteConfirm = () => {
    let localData = JSON.parse(localStorage.getItem("Appeal"));
    localData.splice(rowind, 1);
    localStorage.setItem("Appeal", JSON.stringify(localData));
    if (localData.length < 1) {
      localStorage.clear();
    }
    onHide();
    toast.success("Success! Appeal deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Do you want to delete your appeal?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <i>*You will not be able to restore your appeal after delete it</i>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={deleteConfirm}>
          Yes
        </Button>
        <Button onClick={onHide} className="green-button">
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
