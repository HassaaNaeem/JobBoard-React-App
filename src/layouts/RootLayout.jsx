import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
