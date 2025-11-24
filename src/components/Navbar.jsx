import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navbarRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const navbar = navbarRef.current;
    if (navbar) {
      navbar.addEventListener('mousemove', handleMouseMove);
      return () => navbar.removeEventListener('mousemove', handleMouseMove);
    }
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
    <nav 
      ref={navbarRef}
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'animate-in' : ''}`} 
      id="navbar"
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      }}
    >
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      
      {/* Animated Background Gradient */}
      <div className="navbar-bg-gradient"></div>
      
      {/* Floating Particles */}
      <div className="navbar-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="particle" style={{ '--particle-delay': `${i * 0.5}s` }}></div>
        ))}
      </div>

      <div className="nav-container">
        <Link to="/" className="nav-logo" data-text="Future Stars Academy">
          <div className="logo-wrapper">
            <img src="./picture/logo.png" alt="Future Stars Academy Logo" className="logo-image" />
            <div className="logo-glow"></div>
          </div>
          <span className="logo-text">
            <span className="logo-text-main">Future Stars Academy</span>
            <span className="logo-text-shadow">Future Stars Academy</span>
          </span>
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link" data-text="Home">
              <span className="nav-link-text">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/academics" className="nav-link" data-text="Academics">
              <span className="nav-link-text">Academics</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/introduction" className="nav-link" data-text="Introduction">
              <span className="nav-link-text">Introduction</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" data-text="Gallery">
              <span className="nav-link-text">Gallery</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link" data-text="About">
              <span className="nav-link-text">About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" data-text="Contact">
              <span className="nav-link-text">Contact</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admissions" className="nav-link nav-link-cta" data-text="Enroll Now">
              <span className="nav-link-text">Enroll Now</span>
              <span className="nav-link-shine"></span>
            </Link>
          </li>
        </ul>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-menu">
          <li><Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </Link></li>
          <li><Link to="/about-us" className="mobile-nav-link" onClick={closeMobileMenu}>
            About
          </Link></li>
          <li><Link to="/academics" className="mobile-nav-link" onClick={closeMobileMenu}>
            Programs
          </Link></li>
          <li><Link to="/admissions" className="mobile-nav-link" onClick={closeMobileMenu}>
            Admissions
          </Link></li>
          <li><Link to="/gallery" className="mobile-nav-link" onClick={closeMobileMenu}>
            Gallery
          </Link></li>
          <li><Link to="/staff" className="mobile-nav-link" onClick={closeMobileMenu}>
            Staff
          </Link></li>
          <li><Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            Contact
          </Link></li>
          <li><Link to="/admissions" className="mobile-nav-link mobile-nav-cta" onClick={closeMobileMenu}>
            Enroll Now
          </Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
