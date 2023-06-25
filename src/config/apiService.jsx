import axios from "axios";
import Cookies from "js-cookie";

import { BASE_URL } from "../utils";

const token = Cookies.get("token");

export const baseAPI = axios.create({
  baseURL: BASE_URL.API,
  headers: {
    "Content-Type": "application/json",
  },
});
export const newBaseAPIwithToken = axios.create({
  baseURL: BASE_URL.API,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
