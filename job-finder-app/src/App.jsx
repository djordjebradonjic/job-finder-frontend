import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./pages/Layout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-200 min-h-screen transition-colors duration-300">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />

            <Route element={<PrivateRoute />}>
              <Route index element={<HomePage />} />
              <Route path="favorites" element={<FavoritesPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
