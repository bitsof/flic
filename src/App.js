import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from "./views/About"
import Home from "./views/Home"
import Users from "./views/Users"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
    </Router>
  );
}

export default App;