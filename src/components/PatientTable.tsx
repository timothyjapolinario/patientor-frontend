import { Button, Stack, Table } from "react-bootstrap";
import { Patient } from "../types";
import PatientInfo from "./PatientInfo";
import "./PatientTable.scss";
interface PatientTableProps {
  patientList: Patient[];
}
const PatientTable = (props: PatientTableProps) => {
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <h1>Patient List</h1>
        <Button>Add Patient</Button>
      </Stack>
      <Table className="patient-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {props.patientList.length > 0 &&
            props.patientList.map((patient, index) => {
              return (
                <PatientInfo patient={patient} key={patient.name + index} />
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default PatientTable;
