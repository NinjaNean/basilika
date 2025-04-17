import React, { useState } from "react";
import "./Login.css";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router"; // ✅ Import navigate hook

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ Initialize navigate

  const validate = () => {
    if (!password.trim()) {
      setError("Password is required");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // ✅ Mock login success
      alert("Login successful (mock)");
      navigate("/menu"); // ✅ Redirect to Menu page
    }
  };

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <h2>Employee Access</h2>
      <p className="subtext">Shared Login for Employees</p>

      <div className="input-group">
        <FaLock className="icon" />
        <input
          type="password"
          placeholder="Enter shared password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error">{error}</p>}

      <button type="submit" className="login-btn">
        Log In
      </button>
    </form>
  );
}

export default Login;
