import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJyb2xlIjoiU3VwZXIgQWRtaW4iLCJ1c2VySWQiOjF9.U5iQ3u6K6ugj4J_z7oARDvosIXzEOjIMiaxKnfu2H0c";

export const newBaseAPI = axios.create({
  baseURL: "http://178.128.210.192:8080",
  headers: {
    Authorization: `Bearer ${token}`,
  }
});
