import React from 'react';
import axios from "axios";
import {urls} from "../constants";
import {axiosService} from "./axios.service";

export const commentsService ={
    getByPostId: (id)=>axiosService().get(`${urls.posts}/${id}/comments`)
}