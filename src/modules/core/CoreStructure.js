import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import NewHeader from "../../components/NewHeader";
function AdminLayout() {
  return <Outlet />;
}

export const CoreStructure = () => {
  return (
    <>
      <NewHeader />
      <Outlet />
      <Footer />
    </>
  );
};
