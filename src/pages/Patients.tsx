import { useEffect, useState } from "react";
import PatientTable from "../components/PatientTable";
import { Patient } from "../types";
import { getAll } from "../utils/patientService";
import "./Patients.scss";
const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  useEffect(() => {
    const fetchPatients = async () => {
      const newPatients = await getAll();
      console.log(patients);
      setPatients(newPatients);
    };
    fetchPatients();
  }, []);
  return (
    <>
      <div className="patient-content">
        <PatientTable patientList={patients} />
      </div>
    </>
  );
};

export default Patients;
