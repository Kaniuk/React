import {usersUrls} from "../components/urls/usersUrls";
import {userAxiosService} from "./axios.service";


export const usersService = {
    getAll: () => userAxiosService.get(usersUrls.users).then(value => value.data),
    getAllPosts: () => userAxiosService.get(usersUrls.posts).then(value => value.data),
    getAllComments: () => userAxiosService.get(usersUrls.comments).then(value => value.data),

};