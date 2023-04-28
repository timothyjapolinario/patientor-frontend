import axios from "../../node_modules/axios/index";
import { Patient } from "../types";
import { apiDeployedBaseUrl, apiBaseUrl } from "../../constants";

const MODE = process.env.NODE_ENV;
const baseUrl = MODE === "production" ? apiDeployedBaseUrl : apiBaseUrl;

export async function getAll() {
  console.log(process.env.NODE_ENV);
  const { data } = await axios.get<Patient[]>(`${baseUrl}/patients`);
  console.log(data);
  return data;
}
