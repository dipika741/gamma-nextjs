"use client";
import React from "react";
import Topbar from "./Topbar";
import Menubar from "./Menubar";

const Header = () => {
  return (
    <header className="header">
      <Topbar />
      <Menubar />
    </header>
  );
};

export default Header;
