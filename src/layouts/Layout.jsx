import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";
import Navbar from "../components/dashboard/Navbar/Navbar";
import Footer from "../components/dashboard/Footer/Footer";

const DashboardLayout = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.Main === 'function') {
      window.Main();
    }
  }, [])
  return (
    <div className="layout-wrapper layout-content-navbar gradient_background">
      <div className="layout-container d-flex">
        <Sidebar />
        <div className="layout-page d-flex flex-column flex-grow-1">
          <Navbar />
          <main className="flex-grow-1">
            <div className="container py-3">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
