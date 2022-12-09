import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, Redirect } from "react-router-dom";
import InputField from "../../common/InputField";
import AdminPanelPage from "./AdminPanelPage";
import axios from "../../../api/axios";
import { useEffect } from "react";
const LOGIN_URL = "/login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  // useEffect(() => {
  //   // console.log("email", email);
  //   // console.log("password", password);
  //   console.log("errMsg", errMsg);
  // });

  const loginSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(LOGIN_URL, JSON.stringify({ email, password }))
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // });
    //   try {
    //     const response = await axios.post(LOGIN_URL, {
    //       email: email,
    //       password: password,
    //     });
    //     // console.log(JSON.stringify(response?.data));
    //     console.log(response.data);
    //     setEmail("");
    //     setPassword("");
    //     setSuccess(true);
    //   } catch (err) {
    //     if (!err?.response) {
    //       setErrMsg("Serveric cha Response");
    //     }
    //   }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <form className="login-form" onSubmit={loginSubmit}>
          <span>Welcome</span>
          <FaUserCircle />
          <input
            type="email"
            placeholder="Email"
            className="login-field"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <InputField /> */}
          <input
            type="password"
            placeholder="Password"
            className="login-field"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <InputField /> */}
          <div className="login-btn">
            <div className="login-bg-btn"></div>
            <button>Login</button>
          </div>
          {/* <div className="sign-up-text">
            <span>Don’t have an account?</span>
            <Link to={"/signup"}>Sign Up</Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
