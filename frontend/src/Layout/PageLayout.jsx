import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = () => {
  return (
    <div className="bg-gradient-to-tr from-slate-200 to-slate-100 relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
