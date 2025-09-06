import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(event.target) && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="./picture/logo.png" alt="Future Stars Academy Logo" className="logo-image" />
          Future Stars Academy
        </Link>
        
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about-us" className="nav-link">About</Link></li>
          <li><Link to="/academics" className="nav-link">Programs</Link></li>
          <li><Link to="/admissions" className="nav-link">Admissions</Link></li>
          <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
          <li><Link to="/staff" className="nav-link">Staff</Link></li>
        </ul>
        
        <div className="nav-spacer"></div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-menu">
          <li><Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about-us" className="mobile-nav-link" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/academics" className="mobile-nav-link" onClick={closeMobileMenu}>Programs</Link></li>
          <li><Link to="/admissions" className="mobile-nav-link" onClick={closeMobileMenu}>Admissions</Link></li>
          <li><Link to="/gallery" className="mobile-nav-link" onClick={closeMobileMenu}>Gallery</Link></li>
          <li><Link to="/staff" className="mobile-nav-link" onClick={closeMobileMenu}>Staff</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
