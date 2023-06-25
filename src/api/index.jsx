import { baseAPI, newBaseAPI} from "../config/apiService";

export const api = {
  //API
  //Admin Login
  login: (body) => {
    return baseAPI
      .post("/login/admin", body)

  },
  dashboard: (sort, type, search, page, limit) => {
    return baseAPI.get(
      `/dashboard/complaint?sort=${sort}&type=${type}&search=${search}&page=${page}&limit=${limit}`
    )
    ;
    
  },
  dashboardUpdate: (id, body) => {
    return baseAPI.put(
      `/dashboard/complaint/${id}`, body
    )
    ;
  },
  dashboardDelete: (id) => {
    return baseAPI.delete(
      `/dashboard/complaint/${id}`
    )
    ;
  },
  getCSVData: (sort, type, search, limit) => {
    return baseAPI.get(
      `/dashboard/complaint/export?sort=${sort}&type=${type}&search=${search}&limit=${limit}`
    )
    ;
  },
  newsGet: () => {
    return baseAPI.get(`/news`);
  },
  postBerita: (body) => {
    return baseAPI.post(`/dashboard/news`,body)
  },
  uploader: (body) => {
    return newBaseAPI.post("/upload", body);
  },

};
