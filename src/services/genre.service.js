import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const genreService = {
    getAll: () => axiosService.get(`${urls.genres}`).then(value => value.data),
    getMovieById: (id) => axiosService(`${urls.genres}/${id}`)
};