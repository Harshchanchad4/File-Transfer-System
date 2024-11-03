
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Admin from './pages/Admin';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import About from "./pages/About"
import User from './pages/User';

function App() {
 

  return (
   
    <Router>
   <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
    </Routes>
  </Router>
  );
}

export default App;
