import React  from "react";
import { Route, Routes,  } from "react-router-dom";


import CardLanding from "../components/Card Landing Page/cardLanding";

const RouteManagement = () => {

  return (
   
          <Routes>
            <Route path="/" element={<CardLanding />} />
            
          </Routes>
     
  );
};

export default RouteManagement;
