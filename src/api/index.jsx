import { baseAPI } from "../config/apiService";

export const api = {
  //API
  //Admin Login
  login: (body) => {
    return baseAPI.post("/login/admin", body);
  },

  updateAdmin: (body) => {
    return baseAPI.get(`/dashboard/admin`);
  },

  createAdmin: (body) => {
    return baseAPI.get(`/178.128.210.192:8080/dashboard/admin`);
  },

  getAdmin: () => {
    return baseAPI.get(`/dashboard/admin`);
  },
};
