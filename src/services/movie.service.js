import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const movieService = {
    getAll: (page, genres) => axiosService.get(`${urls.movies}`, {
        params: {
            page,
            with_genres: genres?.join(),
        }
    }).then(value => value.data),
    getMovieById: (id) => axiosService.get(`${urls.movie}/${id}`).then(value => value.data)
};