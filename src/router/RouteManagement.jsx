import { Suspense } from "react";
// import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const RouteManagement = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RouteManagement;
