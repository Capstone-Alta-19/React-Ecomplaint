import { newBaseAPI } from "../config/apiService";

export const api = {
  //API
  //Admin Login
  login: (body) => {
    return newBaseAPI.post("/login/admin", body);
  },
};
