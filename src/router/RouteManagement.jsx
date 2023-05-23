import React, { Suspense } from "react";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LayoutComponent from "../components/layouts/LayoutComponent";

const RouteManagement = () => {
  return (
    <>
      <Suspense fallback={LoadingComponent}>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </LayoutComponent>
      </Suspense>
    </>
  );
};

export default RouteManagement;
