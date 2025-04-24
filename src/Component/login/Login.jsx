/*import React, { useState } from "react";
import "./Login.css";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.trim() === "") {
      setError("Password is required");
      setSuccess("");
      return;
    }

    if (password === "mums") {
      setError("");
      setSuccess("Login successful! Redirecting...");
      localStorage.setItem("isLoggedIn", "true"); 
      setTimeout(() => {
        navigate("/menu"); // redirects after 1.5 seconds
      }, 1500);
    } else {
      setError("Incorrect password. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="login-container">
      <h2>Employee Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
    </div>
  );
}
export default Login;
*/

import React, { useState } from "react";
import "./Login.css";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router";
import Joi from "joi";

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const schema = Joi.object({
    password: Joi.string().min(4).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 4 characters",
    }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = schema.validate({ password });

    if (error) {
      setError(error.details[0].message);
      setSuccess("");
      return;
    }

    if (password === "mums") {
      setError("");
      setSuccess("Login successful! Redirecting...");
      localStorage.setItem("isLoggedIn", "true");

      setTimeout(() => {
        navigate("/menu");
      }, 1500);
    } else {
      setError("Incorrect password. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="login-container">
      <h2>Employee Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}
        <button type="submit" className="login-btn">Log In</button>
      </form>
    </div>
  );
}

export default Login;
