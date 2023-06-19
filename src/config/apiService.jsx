import axios from "axios";

import { BASE_URL } from "../utils";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJyb2xlIjoiU3VwZXIgQWRtaW4iLCJ1c2VySWQiOjF9.U5iQ3u6K6ugj4J_z7oARDvosIXzEOjIMiaxKnfu2H0c";

export const baseAPI = axios.create({
  baseURL: BASE_URL.API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
