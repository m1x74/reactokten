import React from 'react';
import axios from "axios";
import {urls} from "../constants";

export const commentsService ={
    getByPostId: (id)=>axios.get(`${urls.posts}/${id}/comments`)
}