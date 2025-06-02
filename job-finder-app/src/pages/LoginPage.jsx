import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const validateForm = () => {
    setGeneralError("");
    setPasswordError("");
    setUsernameError("");

    if (!username) {
      setUsernameError("Username filed is required");
      return false;
    }
    if (!password) {
      setUsernameError("Password error is required");
      return false;
    } else if (password.length < 4) {
      setPasswordError("Password must be at least 4 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });

      if (response.data === "Fail") {
        alert("Invalid credentials");
      } else {
        login(response.data);
        console.log(
          "---------JWT TOKEN IS : ",
          localStorage.getItem("jwtToken")
        );

        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto p-4 border rounded mt-10 shadow"
      >
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        {usernameError && (
          <p className="text-red-600 text-sm mb-3">{usernameError}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        {passwordError && (
          <p className="text-red-600 text-sm mb-3">{passwordError}</p>
        )}
        {generalError && (
          <p className="text-red-600 text-sm mb-3">{generalError}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-800"
        >
          Login
        </button>
      </form>
      <div className="max-w-sm mx-auto mt-4 text-center">
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
