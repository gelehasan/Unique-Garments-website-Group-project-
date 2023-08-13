import React from "react";
import "./style.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="heading-sign-in">Sign in</div>
      <div className="div-content">
        <div className="form">
          <div className="div">
            <div className="label-email-address">Email address</div>
            <div className="input" />
          </div>
          <div className="div-validatedfield">
            <div className="label-password">Password</div>
            <div className="div-passwordinput">
              <div className="input" />
            </div>
          </div>
          <div className="link-forgot-your">Forgot your password?</div>
          <div className="button">
            <div className="text-wrapper">Sign In</div>
          </div>
          <footer className="footer">
            <div className="don-t-have-an">Don&#39;t have an account?</div>
            <div className="link">
              <div className="text-wrapper-2">Create Account</div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
