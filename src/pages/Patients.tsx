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
      setPatients(newPatients);
    };
    fetchPatients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addNewPatient = (newPatient: Patient) => {
    setPatients(patients.concat(newPatient));
  };
  return (
    <>
      <div className="patient-content">
        <PatientTable patientList={patients} addNewPatient={addNewPatient} />
      </div>
    </>
  );
};

export default Patients;
