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

  // Validation schema using Joi
  const schema = Joi.object({
    password: Joi.string().min(4).required().messages({
      "string.empty": "Lösenord krävs",
      "string.min": "Lösenordet måste bestå av minst 4 tecken",
    }),
  });

  // Handle form submission
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
      setSuccess("Inloggning lyckades! Omdirigerar...");
      localStorage.setItem("isLoggedIn", "true");

      setTimeout(() => {
        navigate("/menu");
      }, 1500);
    } else {
      setError("Fel lösenord. Försök igen.");
      setSuccess("");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Ange lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}
        <button type="submit" className="login-btn">
          Logga in
        </button>
      </form>
    </div>
  );
}

export default Login;

