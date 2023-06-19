import { baseAPI } from "../config/apiService";

export const api = {
  //API
  //Admin Login
  login: (body) => {
    return baseAPI.post("/login/admin", body)

   .then((data) => {
     
      console.log(data);
     
    }
    
   );
  },
  dashboard: (sort, type, search, page, limit) => {
    return baseAPI.get(
      `/dashboard/complaint?sort=${sort}&type=${type}&search=${search}&page=${page}&limit=${limit}`,
    ).then(
    
    );

  },
};
