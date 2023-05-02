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
  const { data } = await axios.post<Patient>(`${baseUrl}/patients`, patient);
  return data;
}
