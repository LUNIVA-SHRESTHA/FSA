import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-bar" aria-label="Main Navigation">
      <Link to="/academics" className="nav">Academics</Link>
      <Link to="/admissions" className="nav">Admissions</Link>
      <Link to="/">
        <img 
          src="./picture/logo.png" 
          width="70" 
          height="70" 
          alt="Future Stars Academy Logo" 
          style={{verticalAlign: 'middle'}}
        />
      </Link>
      <Link to="/gallery" className="nav">Gallery</Link>
      <Link to="/about-us" className="nav">About Us</Link>
    </nav>
  );
};

export default Navbar;
