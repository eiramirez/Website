// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          {/* Profile Picture & Name */}
          <img
            src="/id pic.png"
            alt="Eric I Ramirez"
            className="navbar-profile-pic"
          />
          <h1 className="navbar-logo">Eric I Ramirez</h1>
        </div>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
