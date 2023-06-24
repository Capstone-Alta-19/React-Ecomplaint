import React, { Suspense } from "react";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import DashboardAdmin from "../pages/dashboardAdmin/DashboardAdmin";
import AdminPage from "../pages/adminPage/AdminPage";
import LayoutComponentAdmin from "../components/layouts/LayoutComponentAdmin";
import LaporanAdmin from "../pages/laporanAdmin/LaporanAdmin";
import BeritaAdmin from "../pages/beritaAdmin/BeritaAdmin";
import TambahAdmin from "../pages/tambahAdmin/TambahAdmin";
import PengaturanAdmin from "../pages/pengaturanAdmin/PengaturanAdmin";
import HomePageBantuan from "../pages/homePageBantuan/HomePageBantuan";

import DetailKomplain from "../pages/detail komplain/detailKomplain";
import TambahBerita from "../pages/beritaAdmin/tambahBerita/TambahBerita";

import Cookies from "js-cookie";


const RouteManagement = () => {
  const token = Cookies.get("token");
  const pathname = window.location.pathname;

  return (
    <>
      <Suspense fallback={LoadingComponent}>
        {!token && pathname !== "/admin" ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homepagebantuan" element={<HomePageBantuan />} />
          </Routes>
        ) : !token ? (
          <Routes>

            <Route path="/admin" element={<AdminPage />} />

          </Routes>
        ) : (
          <LayoutComponentAdmin>
            <Routes>
              <Route path="/dashboard" element={<DashboardAdmin />} />
               <Route path="/dashboard-overview/:type" element={<DetailKomplain />} /> 
                  <Route path="/berita" element={<BeritaAdmin />} />
            <Route path="/tambah-berita" element={<TambahBerita />} />
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
