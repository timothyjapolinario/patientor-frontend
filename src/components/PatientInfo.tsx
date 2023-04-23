import { Patient } from "../types";

interface PatientInfoProps {
  patient: Patient;
}

const PatientInfo = (props: PatientInfoProps) => {
  return (
    <>
      <h3>name: {props.patient.name}</h3>
      <h3>gender: {props.patient.gender}</h3>
      <h3>occupation: {props.patient.occupation}</h3>
    </>
  );
};

export default PatientInfo;
