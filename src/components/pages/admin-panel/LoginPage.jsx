import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import InputField from "../../common/InputField";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <form className="login-form">
          <span>Welcome</span>
          <FaUserCircle />
          <InputField placeholder="Email" className="login-field" />
          <InputField placeholder="Password" className="login-field" />
          <div className="login-btn">
            <div className="login-bg-btn"></div>
            <button>Login</button>
          </div>
          <div className="sign-up-text">
            <span>Don’t have an account?</span>
            <Link to={"/signup"}>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
