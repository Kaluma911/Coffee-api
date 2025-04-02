import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Foooter";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="bg-slate-600">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
