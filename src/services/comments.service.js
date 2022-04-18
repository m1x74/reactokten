import {urls} from "../constants";
import {axiosService} from "./axios.service";

const commentsService ={
    getByPostId: (id)=>axiosService.get(`${urls.posts}/${id}/comments`)
}
export default commentsService