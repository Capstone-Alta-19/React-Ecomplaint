import { Suspense } from "react";
// import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/abi/HomePage4";
import Laporan from "../pages/laporanAdmin/LaporanAdmin";

const RouteManagement = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/laporan" element={<Laporan />} />
    </Routes>
  );
};

export default RouteManagement;
