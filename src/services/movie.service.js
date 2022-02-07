import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const movieService = {
    getAll: (page) => axiosService.get(`${urls.movies}${urls.key}`, {params: {page}}).then(value => value.data),
    getMovieById: (id) => axiosService.get(`${urls.movies}/${id}${urls.key}`).then(value => value.data)
};