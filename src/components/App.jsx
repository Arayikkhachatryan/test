import React from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./common/Footer";
import Header from "./common/Header";

function Layout({ children }) {
  return (
    <>
      {/* all child componnet under the layout */}
      <Header />
      {children}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Layout;
