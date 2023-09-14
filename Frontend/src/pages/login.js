import React, { useState } from "react";
import "../styles/loginPage.css";

function Login() {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterActive(true);
  };

  const handleLoginClick = () => {
    setIsRegisterActive(false);
  };

  return (
    <div className="login-page">
      <div
        className={`container ${isRegisterActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container register-container">
          <form action="#">
            <h1>Register here.</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
            <span>or use your account</span>
            <div class="social-container">
              <a href="#" class="social">
                <i class="lni lni-facebook-fill"></i>
              </a>
              <a href="#" class="social">
                <i class="lni lni-google"></i>
              </a>
              <a href="#" class="social">
                <i class="lni lni-linkedin-original"></i>
              </a>
            </div>
          </form>
        </div>

        <div className="form-container login-container">
          <form action="#">
            <h1>Login hire.</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div class="content">
              <div class="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label>Remember me</label>
              </div>
              <div class="pass-link">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <button>Login</button>
            <span>or use your account</span>
            <div class="social-container">
              <a href="#" class="social">
                <i class="lni lni-facebook-fill"></i>
              </a>
              <a href="#" class="social">
                <i class="lni lni-google"></i>
              </a>
              <a href="#" class="social">
                <i class="lni lni-linkedin-original"></i>
              </a>
            </div>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div
              className={`overlay-panel overlay-left ${
                isRegisterActive ? "active" : ""
              }`}
            >
              <h1 className="title">
                Hello <br /> friends
              </h1>
              <p>if you have an account, login here and have fun</p>
              <button className="ghost" id="login" onClick={handleLoginClick}>
                Login
                <i className="lni lni-arrow-left login"></i>
              </button>
            </div>
            <div
              className={`overlay-panel overlay-right ${
                isRegisterActive ? "" : "active"
              }`}
            >
              <h1 className="title">
                Start your <br /> journey now
              </h1>
              <p>
                if you don't have an account yet, join us and start your
                journey.
              </p>
              <button
                className="ghost"
                id="register"
                onClick={handleRegisterClick}
              >
                Register
                <i className="lni lni-arrow-right register"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
