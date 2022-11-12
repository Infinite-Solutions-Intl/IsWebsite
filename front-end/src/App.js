import React from "react";
import Home from "./home/Home";
import AOS from "aos";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./contact";

export default function App() {
  AOS.init();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    </Router>
  );
}
