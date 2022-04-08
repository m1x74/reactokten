import {axiosService} from "./axios.services";
import {urls} from "../constants/links";

export const postsService={
    getAll: ()=> axiosService.get(urls.posts)
}