import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

function MainNavBar() {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav
      className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-4 
    dark:bg-gray-200/10 dark:text-gray-100 dark:bg-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className=" cursor-pointer flex items-center gap-6">
          <Link to="/" className="font-bold text-xl">
            JobFinder
          </Link>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>

        <div className=" flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded bg-white text-black dark:bg-gray-700 dark:text-white hover:opacity-80 transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className=" cursor-pointer hover:underline"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar;
