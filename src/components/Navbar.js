import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar()
{
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/about">About Me</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
