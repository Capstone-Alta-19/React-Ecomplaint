import HomePage from "../pages/HomePage/abi/HomePage4";
import PengaturanPage from "../pages/pengaturan/pengaturanPage";

import DetailKomplain from "../pages/detailKomplain/detailKomplain";

import React, { Suspense, useEffect } from "react";
import LoadingComponent from "../components/loadingComponent/LoadingComponent.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";

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
      {/* <LayoutComponent>*/}
        {/* <Routes>
          <Route path="/homePage" element={<HomePage />}></Route>
        </Routes> */}
      {/*</LayoutComponent> */}

      <Suspense fallback={LoadingComponent}>
        {!token ? (
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        ) : (
          <LayoutComponentAdmin>
            <Routes>
              <Route path="/dashboard-overview" element={<DetailKomplain />} />
              <Route path="/pengaturan" element={<PengaturanPage />} />

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
