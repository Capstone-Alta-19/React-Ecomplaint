import React  from "react";
import { Route, Routes,  } from "react-router-dom";
import HomePage3 from "../pages/homePage/ziqo/HomePage3";




const RouteManagement = () => {

  return (
   
          <Routes>
            <Route path="/" element={<HomePage3 />} />
            
          </Routes>
     
  );
};

export default RouteManagement;
