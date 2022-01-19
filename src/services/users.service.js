import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const usersService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getById:(id) =>axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getUserPosts:(id) => axiosService.get(`${urls.users}/${id}/posts`),
    getUserAlbums:(id) =>axiosService.get(`${urls.users}/${id}/albums`)

}