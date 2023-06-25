import axios from "axios";

import { BASE_URL } from "../utils";
import Cookies from "js-cookie";


export const baseAPI = axios.create({
  baseURL: BASE_URL.API,
  headers: {
    "Content-Type": "application/json",
    
    Authorization: "Bearer " + Cookies.get("token")
  },
});
export const newBaseAPI = axios.create({
  baseURL: BASE_URL.API,
  headers: {
    "Content-Type": "multipart/form-data",
    
    Authorization: "Bearer " + Cookies.get("token")
  },
});
