import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar.js";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
