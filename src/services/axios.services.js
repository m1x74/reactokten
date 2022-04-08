import axios from "axios";

import proectURL from "../constants/links";

export const axiosService = axios.create({baseURL:proectURL});