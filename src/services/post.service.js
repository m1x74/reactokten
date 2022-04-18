import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: ()=>axiosService.get(urls.posts),
    getByUserId: (id)=>axiosService.get(`${urls.users}/${id}/posts`),
    getById: (id)=>axiosService.get(urls.posts+'/'+id)
}

export default postService;