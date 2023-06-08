import React from "react";
import Navbar from "../pages/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-420px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
