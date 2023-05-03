import axios from "../../node_modules/axios/index";
import { Patient, PatientFormValue } from "../types";
import { apiDeployedBaseUrl, apiBaseUrl } from "../../constants";

const MODE = process.env.NODE_ENV;
const baseUrl = MODE === "production" ? apiDeployedBaseUrl : apiBaseUrl;

export async function getAll() {
  const { data } = await axios.get<Patient[]>(`${baseUrl}/patients`);
  return data;
}

export async function uploadPatient(patient: PatientFormValue) {
  const result = await axios
    .post<Patient>(`${baseUrl}/patients`, patient)
    .catch((error) => {
      console.log("Error uploading patient info", error);
    });

  if (result) {
    return result.data;
  }
  return;
}
