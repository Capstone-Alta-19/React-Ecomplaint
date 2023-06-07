
import React  from "react";
import { Route, Routes,  } from "react-router-dom";
import HomePage3 from "../pages/homePage/ziqo/HomePage3";
import DetailKomplain from "../pages/detail komplain/detailKomplain";
   
        
     
import React, { Suspense, useEffect } from "react";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LayoutComponent from "../components/layouts/LayoutComponent";
import DashboardAdmin from "../pages/dashboardAdmin/DashboardAdmin";
import AdminPage from "../pages/adminPage/AdminPage";
import LayoutComponentAdmin from "../components/layouts/LayoutComponentAdmin";
import LaporanAdmin from "../pages/laporanAdmin/LaporanAdmin";
import BeritaAdmin from "../pages/beritaAdmin/BeritaAdmin";
import TambahAdmin from "../pages/tambahAdmin/TambahAdmin";
import PengaturanAdmin from "../pages/pengaturanAdmin/PengaturanAdmin";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, [token]);

  return (
    <>
      <Suspense fallback={LoadingComponent}>
        {/* <LayoutComponent> */}
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes> */}
        {/* </LayoutComponent> */}

        {!token ? (
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        ) : (
          <LayoutComponentAdmin>
            <Routes>
            
            <Route path="/dashboard-overview" element={<DetailKomplain />} />
            
        
              <Route path="/dashboard" element={<DashboardAdmin />} />
              <Route path="/laporan" element={<LaporanAdmin />} />
              <Route path="/berita" element={<BeritaAdmin />} />
              <Route path="/tambahadmin" element={<TambahAdmin />} />
              <Route path="/pengaturan" element={<PengaturanAdmin />} />
            </Routes>
          </LayoutComponentAdmin>
        )}
      </Suspense>
    </>

  );
};

export default RouteManagement;
