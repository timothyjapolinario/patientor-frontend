import { Patient } from "../types";
interface PatientInfoProps {
  patient: Patient;
}

const PatientInfo = (props: PatientInfoProps) => {
  return (
    <>
      <tr>
        <td>
          <span>{props.patient.name}</span>
        </td>
        <td>
          <span>{props.patient.gender}</span>
        </td>
        <td>
          <span>{props.patient.occupation}</span>
        </td>
      </tr>
    </>
  );
};

export default PatientInfo;
