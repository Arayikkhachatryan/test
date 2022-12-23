import React from "react";
import { useState } from "react";
import AdminPanel from "./AdminPanel";
import LoginPage from "./LoginPage";

const AdminPanelPage = () => {
  let token = localStorage.getItem("accessToken");
  return <>{token ? <AdminPanel /> : <LoginPage />}</>;
};

export default AdminPanelPage;
