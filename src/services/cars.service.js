import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const carsService={
    getAll:()=> axiosService.get(urls.cars),
    getById:(id)=> axiosService.get(`${urls.cars}/${id}`),
    postNew:(car)=> axiosService.post(urls.cars,car),
    updateById:(id,newInfo)=>axiosService.put(`${urls.cars}/${id}`,newInfo),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}