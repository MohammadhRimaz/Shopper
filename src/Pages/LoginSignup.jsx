import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./CSS/LoginSignup.css";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const { signup, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      login(email, password, navigate);
    } else {
      signup(name, email, password, navigate);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLoginMode ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleSubmit} className="loginsignup-fields">
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLoginMode ? "Login" : "Sign Up"}</button>
        </form>
        <p className="loginsignup-login">
          {isLoginMode ? (
            <>
              Don't have an account?{" "}
              <span onClick={() => setIsLoginMode(false)}>Sign up here</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLoginMode(true)}>Login here</span>
            </>
          )}
        </p>
        {!isLoginMode && (
          <div className="loginsignup-agree">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms & privacy policy</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
