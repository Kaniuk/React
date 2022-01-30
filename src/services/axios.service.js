import axios from "axios";
import baseURL from "../components/urls/urls";


export const axiosService = axios.create({baseURL});