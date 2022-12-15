import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import AuthContext from "../../../context/AuthProvider";
import AdminPanel from "./AdminPanel";
import LoginPage from "./LoginPage";

const AdminPanelPage = () => {
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
  });

  return (
    <>
      {localStorage.getItem("accessToken") && auth ? (
        <AdminPanel />
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default AdminPanelPage;
