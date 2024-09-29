"use client";

import React from "react";
import "./HomePage.css";
import Header from "@/components/Header1";
import Sidebar from "@/components/Sidebar";

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <Header />

      <div className="middle-content">
        <Sidebar />
        <div className="main-content"></div>
      </div>
    </div>
  );
};

export default HomePage;
