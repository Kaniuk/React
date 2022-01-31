import axios from "axios";
import baseURL from "../components/urls/urls";
import baseUserURL from "../components/urls/usersUrls";

export const axiosService = axios.create({baseURL});
export const userAxiosService = axios.create({baseURL: baseUserURL});