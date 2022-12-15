import React from "react";
import { useEffect } from "react";
import AdminPanel from "./AdminPanel";
import LoginPage from "./LoginPage";

const AdminPanelPage = () => {
  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
  });

  return (
    <>{localStorage.getItem("accessToken") ? <AdminPanel /> : <LoginPage />}</>
  );
};

export default AdminPanelPage;
