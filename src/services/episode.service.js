import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const episodeService = {
    getAll: (page = 1) => axiosService.get(urls.episode, {params: {page}}).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.episode}/${id}`).then(value => value.data)
};