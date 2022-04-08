import {axiosService} from "./axios.services";
import {urls} from "../constants";

export const postsService = {
    getAll: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
}