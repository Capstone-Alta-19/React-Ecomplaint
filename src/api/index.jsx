import { baseAPI, newBaseAPIwithToken } from "../config/apiService";

export const api = {
  //API
  //Admin Login
  login: (body) => {
    return baseAPI.post("/login/admin", body);
  },

  updateAdmin: (body) => {
    return newBaseAPIwithToken.put(`/dashboard/admin`, body);
  },

  createAdmin: (body) => {
    return newBaseAPIwithToken.post(`dashboard/admin`, body);
  },

  getAdmin: () => {
    return newBaseAPIwithToken.get(`/dashboard/admin`);
  },
};
