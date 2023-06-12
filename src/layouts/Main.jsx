import React from "react";
import Navbar from "../pages/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-448px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Main;
