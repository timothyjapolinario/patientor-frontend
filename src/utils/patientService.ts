import axios from "../../node_modules/axios/index";
import { Patient } from "../types";
import { apiBaseUrl } from "../../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);
  return data;
};

export default { getAll };
