import React from "react";
import "./signUp.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="heading-register">Register</div>
      <div className="div-content">
        <div className="form">
          <div className="div">
            <div className="label-email-address">Email address</div>
            <div className="input" />
          </div>
          <div className="div-2">
            <div className="div-validatedfield">
              <div className="label-password">Password</div>
              <div className="div-passwordinput">
                <div className="input" />
              </div>
            </div>
            <div className="div-3">
              <div className="label-last-name">Last name</div>
              <div className="input" />
            </div>
            <div className="div-4">
              <div className="label-last-name">First name</div>
              <div className="input" />
            </div>
            <div className="button">
              <div className="text-wrapper">Create Account</div>
            </div>
            <footer className="footer">
              <div className="text-wrapper-2">Already have an account</div>
              <div className="link">
                <div className="text-wrapper-3">Sign In</div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
