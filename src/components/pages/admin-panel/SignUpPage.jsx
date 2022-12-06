import React from "react";
import { Link } from "react-router-dom";
import InputField from "../../common/InputField";

const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-box">
        <form className="sign-up-form">
          <span>Sign Up</span>
          <InputField placeholder="Email" className="sign-up-field" />
          <InputField placeholder="Password" className="sign-up-field" />
          <div className="sign-up-btn">
            <div className="sign-up-bg-btn"></div>
            <button>Sign Up</button>
          </div>
          <div className="sign-up-text">
            <span>Already have an account?</span>
            <Link to={"/login"}>Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
