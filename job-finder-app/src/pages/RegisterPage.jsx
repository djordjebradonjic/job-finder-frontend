import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!/^[A-Za-z]+$/.test(name)) {
      newErrors.name = "Name must contain only letters.";
    }

    if (!/^[A-Za-z]+$/.test(surname)) {
      newErrors.surname = "Surname must contain only letters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:8080/register", {
        username,
        password,
        name,
        surname,
      });

      if (response.data) {
        alert("Registration successful! You can now login.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };
  return (
    <div>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl mb-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border p-2 rounded"
          />
          {errors.username && (
            <p className="text-red-600 text-sm">{errors.username}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 rounded"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            className="border p-2 rounded"
          />
          {errors.surname && (
            <p className="text-red-600 text-sm">{errors.surname}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
      <div className="max-w-sm mx-auto mt-4 text-center">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
export default RegisterPage;
