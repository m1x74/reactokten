import {axiosService} from "./axios.services";
import {urls} from "../constants";


export const usersService = {
    getAll:() => axiosService.get(urls.users)
}