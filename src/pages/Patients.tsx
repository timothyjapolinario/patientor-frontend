import { useEffect, useState } from "react";
import PatientInfo from "../components/PatientInfo";
import { Patient } from "../types";
import patientService from "../utils/patientService";
const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  useEffect(() => {
    const fetchPatients = async () => {
      const newPatients = await patientService.getAll();
      console.log(patients);
      setPatients(newPatients);
    };
    fetchPatients();
  }, []);
  return (
    <>
      <h1>Patient List</h1>
      {patients.length > 0 &&
        patients.map((patient) => {
          return <PatientInfo patient={patient} />;
        })}
    </>
  );
};

export default Patients;
