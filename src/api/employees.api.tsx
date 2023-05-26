import axios from "axios";

const URL = process.env.REACT_APP_URL;

const employeesApi = axios.create({
  baseURL: `${URL}/employees`,
});

export const getAllEmployees = () => employeesApi.get("");
export const getEmployee = (id: number) => employeesApi.get(`/${id}`);