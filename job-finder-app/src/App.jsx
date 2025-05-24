import Favorites from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavBar from "./components/MainNavBar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <MainNavBar></MainNavBar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
