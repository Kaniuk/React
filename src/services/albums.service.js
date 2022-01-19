import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

 export const albumsService = {
    getAlbumsPhotos:(id)=>axiosService.get(`${urls.albums}/${id}/photos`)
}