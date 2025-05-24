import Favorites from "./pages/Favorites";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavBar from "./components/MainNavBar";

function App() {
  return (
    <Router>
      <MainNavBar></MainNavBar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
