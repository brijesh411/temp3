import React, { useState } from "react";

import "../../styles/auth/auth.css";
import Auth1 from "../../assets/auth1.svg";
import Auth2 from "../../assets/auth2.svg";
import SignUp from "../../components/auth/SignUp";
import Login from "../../components/auth/Login";

const AuthPage = () => {
  const [mode, setMode] = useState("sign-in-mode");

  const modeChangeHandler = (mode) => {
    setMode(mode);
  };
  return (
    <div className={"Container " + mode}>
      <div className="forms-container">
        <div className="signin-signup">
          <Login />
          <SignUp />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 style={{ textAlign: 'center', color: 'pink' }}>Welcome To SocioSphere</h3>
            <p>
              Be a part of making SocioSphere India's most active community of creators,
              performers, writers and artists across geographies and languages.
              Write your pieces, garner thousands of followers and make your
              work timeless
            </p>
            <button
              onClick={() => modeChangeHandler("sign-up-mode")}
              className="btn transparent"
              id="sign-up-btn"
            >
              Sign up
            </button>
          </div>
          <img src={Auth1} className="image" alt="Auth1" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 style={{ textAlign: 'center', color: 'orange' }}>JOIN OUR COMMUNITY</h3>
            <p>
            Join SocioSphere and connect with a vibrant community of like-minded individuals. Experience the power of social networking and discover new opportunities. Share your thoughts, interests, and moments with friends and family.  Login Now and get
              started with your writing journey.
            </p>
            <button
              onClick={() => modeChangeHandler("sign-in-mode")}
              className="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <img src={Auth2} className="image" alt="Auth2" />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
