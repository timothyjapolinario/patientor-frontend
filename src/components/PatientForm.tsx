import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./PatientForm.scss";
const PatientForm = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button onClick={handleOpen}>Add Patient</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Patient Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="patient-form">
            <Form.Group controlId="formBasicInput">
              <Form.Label>Name</Form.Label>
              <Form.Control type="input"></Form.Control>
              <Form.Text className="text-muted">
                First name and last name
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicRadio">
              <Form.Label>Gender</Form.Label>
              <Form.Check type="radio" label="Male" name="gender" />
              <Form.Check type="radio" label="Female" name="gender" />
            </Form.Group>
            <Form.Group controlId="formBasicOccupation">
              <Form.Label>Occupation</Form.Label>
              <Form.Control type="input"></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button type="submit">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PatientForm;
