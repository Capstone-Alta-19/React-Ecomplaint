import { newBaseAPI } from "../config/apiService";

export const api = {
  //API
  //Admin Login
  login: (body) => {
    return newBaseAPI.post(`/login/admin`, body);
  },
  dashboard: (sort, type, search, page, limit) => {
    return newBaseAPI.get(
      `/admin/complaint?sort=${sort}&type=${type}&search=${search}&page=${page}&limit=${limit}`,
     
    );
  },
};
