import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h2 className="text-white text-2xl font-bold">FileShare</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          ☰
        </button>
        <div className={`md:flex items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link to="/" className="text-white hover:text-blue-300">Home</Link>
          <Link to="/admin" className="text-white hover:text-blue-300">Upload File</Link>
          <Link to="/user" className="text-white hover:text-blue-300">Fetch File</Link>
          <Link to="/about" className="text-white hover:text-blue-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
