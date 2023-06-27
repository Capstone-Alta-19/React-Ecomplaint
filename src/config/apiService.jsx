import axios from "axios";

import { BASE_URL } from "../utils";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const baseAPI = axios.create({
  baseURL: BASE_URL.API,
  headers: {
    "Content-Type": "application/json",

    Authorization: "Bearer " + Cookies.get("token"),
  },
});

export const newBaseAPI = axios.create({
  baseURL: BASE_URL.API,
  headers: {
    Authorization: "Bearer " + Cookies.get("token"),
  },
});
