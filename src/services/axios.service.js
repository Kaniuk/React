import axios from "axios";
import baseURL from "../configs/urls";


const axiosService = axios.create({
    baseURL,
    params: {
        api_key: '0c35735ca8a114c1af40d09cc8b12df1',
    }
});

export default axiosService;