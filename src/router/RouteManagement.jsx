



import PengaturanPage from "../pages/pengaturan/pengaturanPage";





        
     

import React, { Suspense } from "react";

import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Routes, Route, redirect } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";

import LayoutComponent from "../components/layouts/LayoutComponent";





import DetailKomplain from "../pages/detail komplain/detailKomplain";
   

import DashboardAdmin from "../pages/dashboardAdmin/DashboardAdmin";
import AdminPage from "../pages/adminPage/AdminPage";
import LayoutComponentAdmin from "../components/layouts/LayoutComponentAdmin";
import LaporanAdmin from "../pages/laporanAdmin/LaporanAdmin";
import BeritaAdmin from "../pages/beritaAdmin/BeritaAdmin";
import TambahAdmin from "../pages/tambahAdmin/TambahAdmin";
import PengaturanAdmin from "../pages/pengaturanAdmin/PengaturanAdmin";

import HomePage2 from "../pages/homePage/syafi/HomePage2";
import Syafibantuan from "../pages/homePage/syafibantuan/syafibantuan";

import HomePageBantuan from "../pages/homePageBantuan/HomePageBantuan";



const RouteManagement = () => {
  const token = localStorage.getItem("token");

  const pathname = window.location.pathname;


  return (
    <>
      <Suspense fallback={LoadingComponent}>



        {/* {!token && pathname !== "/admin" ? (
          <>
            <LayoutComponent>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </LayoutComponent>
          </>
        ) : !token && pathname === "/admin" ? (

          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            
          </Routes>
        ) : (
          <LayoutComponentAdmin>
            <Routes>

             
              <Route path="/homepage" element={<HomePage2 />} />


             <Route path="/pengaturan" element={<PengaturanPage />} /> 

          
            <Route path="/dashboard-overview/:type" element={<DetailKomplain />} />

        

              <Route path="/dashboard" element={<DashboardAdmin />} />
              <Route path="/laporan" element={<LaporanAdmin />} />
              <Route path="/berita" element={<BeritaAdmin />} />
              <Route path="/tambahadmin" element={<TambahAdmin />} />
              <Route path="/pengaturan" element={<PengaturanAdmin />} />
              <Route path="/syafibantuan" element={<Syafibantuan />} />
            </Routes>
          </LayoutComponentAdmin>
        )} */}

        {!token && pathname !== "/admin" ? (
          <LayoutComponent>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/homepagebantuan" element={<HomePageBantuan />} />
            </Routes>
          </LayoutComponent>
        ) : (
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        )}

        <LayoutComponentAdmin>
          <Routes>
            <Route path="/dashboard" element={<DashboardAdmin />} />
            <Route path="/laporan" element={<LaporanAdmin />} />
            <Route path="/berita" element={<BeritaAdmin />} />
            <Route path="/tambahadmin" element={<TambahAdmin />} />
            <Route path="/pengaturan" element={<PengaturanAdmin />} />
          </Routes>
        </LayoutComponentAdmin>
      </Suspense>
    </>
  );
};

export default RouteManagement;
