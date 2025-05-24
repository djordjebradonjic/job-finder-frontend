import Favorites from "./pages/Favorites";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavBar from "./components/MainNavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <MainNavBar></MainNavBar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
