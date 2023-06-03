import React from "react";
// import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/homePage";
import PengaturanPage from "../pages/pengaturan/pengaturanPage";

const RouteManagement = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pengaturan" element={<PengaturanPage />} />
      </Routes>
    </>
  );
};

export default RouteManagement;
