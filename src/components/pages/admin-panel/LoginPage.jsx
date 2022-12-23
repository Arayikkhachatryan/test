import React, { useState, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { api } from "../../../api/api";
const LOGIN_URL = "/login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef(null);

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(LOGIN_URL, { email, password });
      const token = res?.data?.token;

      localStorage.setItem("accessToken", token);
      window.location.reload(true);
      console.log(res);

      setEmail("");
      setPassword("");
    } catch (err) {
      if (err?.res) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 422) {
        setErrMsg("Invalid Email or Password");
      } else if (err.response?.status === 403) {
        setErrMsg("Invalid Email or Password");
      } else {
        setErrMsg("Login Faild");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <form className="login-form" onSubmit={loginSubmit}>
          <span>Welcome</span>
          <FaUserCircle />
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
            {errMsg}
          </p>
          <div className="login-field">
            <input
              type="email"
              placeholder="Email"
              className="login-field"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-field">
            <input
              type="password"
              placeholder="Password"
              className="login-field"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-btn">
            <div className="login-bg-btn"></div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
