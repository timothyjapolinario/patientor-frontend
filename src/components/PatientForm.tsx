import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Gender, PatientFormValue, ReactChangeEvent } from "../types";
import "./PatientForm.scss";

interface PatientFormProps {
  handleSubmit: (patient: PatientFormValue) => Promise<void>;
}

const PatientForm = (props: PatientFormProps) => {
  const [patientForm, setPatientForm] = useState<PatientFormValue>({
    name: "",
    dateOfBirth: "",
    gender: Gender.Male,
    occupation: "",
    ssn: "",
  });

  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChangeName = (e: ReactChangeEvent) => {
    const name = e.target.value;
    setPatientForm({ ...patientForm, name });
  };

  const handleChangeSSN = (e: ReactChangeEvent) => {
    const ssn = e.target.value;
    setPatientForm({ ...patientForm, ssn });
  };

  const handleChangeGender = (e: ReactChangeEvent) => {
    const gender = e.target.value === "male" ? Gender.Male : Gender.Female;
    setPatientForm({ ...patientForm, gender });
  };

  const handleChangeOccupation = (e: ReactChangeEvent) => {
    const occupation = e.target.value;
    setPatientForm({ ...patientForm, occupation });
  };

  const handleChangeBirthday = (e: ReactChangeEvent) => {
    const dateOfBirth = e.target.value;
    setPatientForm({ ...patientForm, dateOfBirth });
  };

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
              <Form.Control
                type="input"
                onChange={(e: ReactChangeEvent) => {
                  handleChangeName(e);
                }}
              ></Form.Control>
              <Form.Text className="text-muted">
                First name and last name
              </Form.Text>
            </Form.Group>
            <Form.Group
              controlId="formBasicRadio"
              onChange={(e: ReactChangeEvent) => {
                handleChangeGender(e);
              }}
            >
              <Form.Label>Gender</Form.Label>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="male"
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="female"
              />
            </Form.Group>
            <Form.Group controlId="formBasicOccupation">
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="input"
                onChange={(e: ReactChangeEvent) => {
                  handleChangeOccupation(e);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicSSN">
              <Form.Label>SSN</Form.Label>
              <Form.Control
                type="input"
                onChange={(e: ReactChangeEvent) => {
                  handleChangeSSN(e);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicBirthday  ">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="date"
                onChange={(e: ReactChangeEvent) => {
                  handleChangeBirthday(e);
                }}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close Form</Button>
          <Button
            type="submit"
            onClick={() => {
              props.handleSubmit(patientForm);
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PatientForm;
