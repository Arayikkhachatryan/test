import React, { useContext } from "react";
import { useEffect } from "react";
import AuthContext from "../../../context/AuthProvider";
import AdminPanel from "./AdminPanel";
import LoginPage from "./LoginPage";

const AdminPanelPage = () => {
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    console.log(auth);
  });

  return <>{auth.token ? <AdminPanel /> : <LoginPage />}</>;
};

export default AdminPanelPage;
