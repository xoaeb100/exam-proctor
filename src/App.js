import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import UserProfile from "./components/Login/UserProfile";
// import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/sidebar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Registration />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
