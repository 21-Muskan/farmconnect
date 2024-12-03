import React, { useEffect } from "react";
import "../css/login.css"; 
import logImg from '../assests/log.svg';
import registerImg from '../assests/register.svg';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import '@fortawesome/fontawesome-free/css/all.min.css';
 
const SignInSignUp = () => {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
    
    // Cleanup the event listeners on unmount
    return () => {
      sign_up_btn.removeEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });
      sign_in_btn.removeEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    };
  }, []);

  return (
    <div className="auth-page">
      <Navbar/>
    <div className="container">
       {/* Include the Language Selector here */}
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <Link to="/dashboard">
            <input type="submit" value="Login" className="btn solid" />
            </Link>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          {/* Sign Up Form */}
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign Up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
            Sign up to unlock more features like personalized farm insights, real-time weather updates, crop health monitoring, and market trend analysis. Access expert advice, new schemes, and join a community of farmers to grow your farm efficiently
            </p>
            <button className="btn transparent" id="sign-up-btn">
            Sign Up
            </button>
          </div>
          <img src={logImg} className="image" alt="Sign in illustration" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
            Sign in for personalized updates on your farm's progress, weather forecasts, crop health, and market trends. Access expert advice, new farming schemes, and community discussions. Stay informed with real-time insights tailored to your farm.
            </p>
            <br />
            <button className="btn transparent" id="sign-in-btn">
            Sign In
            </button>
          </div>
          <img src={registerImg} className="image" alt="Sign up illustration" />
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default SignInSignUp;
