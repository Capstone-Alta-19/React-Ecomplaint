import React  from "react";
import { Route, Routes,  } from "react-router-dom";
import HomePage3 from "../pages/homePage/ziqo/HomePage3";
import DetailKomplain from "../pages/detail komplain/detailKomplain";




const RouteManagement = () => {

  return (
   
          <Routes>
            <Route path="/" element={<DetailKomplain />} />
            
          </Routes>
     
  );
};

export default RouteManagement;
