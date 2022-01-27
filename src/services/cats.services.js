import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const catsServices = {
    getCatsImg: () => axiosService.get(urls.cats).then(value => value.data)
        .then(value => value.request.URL)

};
