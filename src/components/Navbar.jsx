import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
      <Link to="/home" className="nav">Home</Link>
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
      <Link to="/about-us" className="nav">AboutUs</Link>
      <Link to="/message" className="nav">Message</Link>
      <Link to="/staff" className="nav">Staff</Link>
    </nav>
  );
};

export default Navbar;
