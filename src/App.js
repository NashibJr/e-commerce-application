import React from "react";
import Links from "./pages/links";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Links />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
