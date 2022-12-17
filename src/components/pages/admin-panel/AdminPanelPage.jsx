import React, { useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import AdminPanel from "./AdminPanel";
import LoginPage from "./LoginPage";

const AdminPanelPage = () => {
  const { auth } = useContext(AuthContext);

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
