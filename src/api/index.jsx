import { baseAPI } from "../config/apiService";

export const api = {
  //API
  //Admin Login
  login: (body) => {

    return baseAPI.post("/login/admin", body);
  },
  dashboard: (sort, type, search, page, limit) => {
    return BaseAPI.get(
      `/admin/complaint?sort=${sort}&type=${type}&search=${search}&page=${page}&limit=${limit}`,
     
    );

  },
};
