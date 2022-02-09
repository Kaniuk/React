import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const movieService = {
    getAll: (page) => axiosService.get(`${urls.movies}`, {params: {page}}).then(value => value.data),
    getMovieById: (id) => axiosService.get(`${urls.movie}/${id}`).then(value => value.data)
};