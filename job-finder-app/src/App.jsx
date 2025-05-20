import Favorites from "/.pages/Favorites"
import HomePage from "./pages/HomePage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
return ( 
  <Router>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
    </Routes>
  </Router>
  
  )
}

export default App
