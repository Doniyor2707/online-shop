import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/authValidate/header/Header";

const MainAuth = () => {
  return (
    <div className="cotainer">
      {/* header */}
      <Header />

      <Outlet />
    </div>
  );
};

export default MainAuth;
