import { Stack, Table } from "react-bootstrap";
import { Patient, PatientFormValue } from "../types";
import { uploadPatient } from "../utils/patientService";
import PatientForm from "./PatientForm";
import PatientInfo from "./PatientInfo";
import "./PatientTable.scss";
interface PatientTableProps {
  patientList: Patient[];
  addNewPatient: (patient: Patient) => void;
}
const PatientTable = (props: PatientTableProps) => {
  const handleSubmit = async (patient: PatientFormValue): Promise<void> => {
    const { name, dateOfBirth, gender, occupation } = patient;
    console.log(patient);
    if (name && dateOfBirth && gender && occupation) {
      const result = await uploadPatient(patient);
      if (result !== undefined) {
        props.addNewPatient(result);
      }
      return;
    }
    console.log("Incomplete Form");
  };
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <h1>Patient List</h1>
        <PatientForm handleSubmit={handleSubmit} />
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
