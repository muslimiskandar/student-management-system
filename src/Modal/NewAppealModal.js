import React, { useState } from "react";
import { Modal, Button, Form, FloatingLabel, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Select from "react-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import "moment/locale/az";

function NewAppealModal(props) {
  const { onHide, options } = props;
  const [input, setInput] = useState();
  var defaultSelect = {
    value: "1",
    label: "Reference",
  };
  const [select, setSelect] = useState(defaultSelect);

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const selectChange = (value) => {
    setSelect(value);
  };

  let x;
  const sendAppeal = () => {
    moment.locale("az");
    const localData = JSON.parse(localStorage.getItem("Appeal"));
    if (!localData) {
      x = 1;
    } else {
      x = localData[localData.length - 1].id + 1;
    }

    const data = {
      id: x,
      text: input,
      choice: select,
      date: moment().format("LLL"),
    };

    var arr = [];
    arr = JSON.parse(localStorage.getItem("Appeal")) || [];
    arr.push(data);
    localStorage.setItem("Appeal", JSON.stringify(arr));
    setInput("");
    setSelect(defaultSelect);

    toast.success("Success! You applied", {
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Submit your application online
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Col className="mb-3">
          <Form.Label>Type of your appeal:</Form.Label>
          <Select
            options={options}
            onChange={selectChange}
            placeholder="Sənəd növünü seçin:"
            defaultValue={select}
          />
        </Col>
        <Col className="mb-3">
          <FloatingLabel controlId="floatingTextarea2" label="Note:">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              onChange={inputChange}
              value={input}
            />
          </FloatingLabel>
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button className="green-button" onClick={sendAppeal}>
          Send
        </Button>
        <Button onClick={onHide} variant="secondary">
          back
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewAppealModal;
