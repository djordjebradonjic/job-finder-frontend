import { Link, useNavigate } from "react-router-dom";

function MainNavBar() {
  const isLoggedIn = !!localStorage.getItem("jwtToken");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className=" cursor-pointer flex items-center gap-6">
          <Link to="/" className="font-bold text-xl">
            JobFinder
          </Link>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>

        <div className=" flex items-center gap-4">
          {isLoggedIn ? (
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
