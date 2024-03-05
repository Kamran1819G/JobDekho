import React from "react";
import "./login.scss";
import loginImg from "../../assets/login-img-1.webp";

function Login() {
  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
      }}
    >
      <div className="row">
        <div className="illustration">
          <img src={loginImg} alt="illustration" className="login-page-img" />
        </div>
        <div className="login-form">
          <h1>JobDekho | Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="space-y"></div>
            <div className="form-group">
              <div className="button login-btn">Login</div>
            </div>
            <div>
              <div className="button">Don't have account? signup</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
