import React from 'react';
import { Link } from 'react-router-dom';
import './Footnote.css';

const Footnote = () => {
  return (
    <footer className='footnote'>
      <div className="footer-logo">
        <img src='./picture/logo.png' alt='Future Stars Academy Logo' />
        <h3>Future Stars Academy</h3>
        <p>Nurturing tomorrow's leaders</p>
      </div>

      <div className='contact-info'>
        <h2>Contact Information</h2>
        <div className="info-item">
          <span className="icon">📍</span>
          <p>Lubhoo, Lalitpur</p>
        </div>
        <div className="info-item">
          <span className="icon">📞</span>
          <p>9841529303</p>
        </div>
        <div className="info-item">
          <span className="icon">✉️</span>
          <p>info@futurestars.edu.np</p>
        </div>
      </div>

      <div className='contact-info'>
        <h2>Quick Links</h2>
        <Link to="/admissions" className="footer-link">Admissions</Link>
        <Link to="/academics" className="footer-link">Academics</Link>
        <Link to="/gallery" className="footer-link">Gallery</Link>
        <Link to="/about-us" className="footer-link">About Us</Link>
      </div>

      <div className='contact-info'>
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href='https://www.facebook.com/futurestars.acdmy' className="social-link" target="_blank" rel="noopener noreferrer">
            <span className="icon">📘</span>
            Facebook
          </a>
          <a href='#' className="social-link">
            <span className="icon">📷</span>
            Instagram
          </a>
          <a href='#' className="social-link">
            <span className="icon">🐦</span>
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footnote;
