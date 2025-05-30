import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./pages/Layout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
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
  );
}

export default App;
