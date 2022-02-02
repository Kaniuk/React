import {axiosService} from "./axios.service";

export const catsServices = {
    getRandomImgUrl: (imgType) => axiosService.get(`/${imgType}`).then(res => res.request.responseURL),
};
