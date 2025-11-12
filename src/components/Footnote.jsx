import React from 'react';
import { Link } from 'react-router-dom';
import './Footnote.css';

const Footnote = () => {
  return (
    <footer className='footnote'>
      <div className='footer-container'>
        <div className='footer-section logo-section'>
          <img src='./picture/logo.png' alt='Future Stars Academy Logo' className='footer-logo'/>
          <h3 className='footer-brand'>Future Stars Academy</h3>
          <p className='footer-tagline'>Nurturing Excellence, Building Futures</p>
        </div>

        <div className='footer-section'>
          <h2 className='footer-heading'>Contact Information</h2>
          <div className='footer-links'>
            <p className='footer-item'><span className='footer-icon'>📍</span> Lubhoo, Lalitpur</p>
            <p className='footer-item'><span className='footer-icon'>📞</span> 9841529303</p>
            <p className='footer-item'><span className='footer-icon'>✉️</span> info@futurestars.edu.np</p>
          </div>
        </div>

        <div className='footer-section'>
          <h2 className='footer-heading'>Quick Links</h2>
          <div className='footer-links'>
            <Link to="/admissions" className="footer-link">Admissions</Link>
            <Link to="/academics" className="footer-link">Academics</Link>
            <Link to="/work" className="footer-link">Work with FSA</Link>
            <Link to="/calendar" className="footer-link">Calendar/Events</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>
        </div>

        <div className='footer-section'>
          <h2 className='footer-heading'>Follow Us</h2>
          <div className='footer-links'>
            <a href='https://www.facebook.com/futurestars.acdmy' target='_blank' rel='noopener noreferrer' className="footer-link social-link">
              <span className='footer-icon'>📘</span> Facebook
            </a>
            <a href='#' className="footer-link social-link">
              <span className='footer-icon'>📸</span> Instagram
            </a>
            <a href='#' className="footer-link social-link">
              <span className='footer-icon'>🐦</span> Twitter
            </a>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; 2025 Future Stars Academy. All Rights Reserved.</p>
        <p className='footer-credits'>Designed with ❤️ for Education</p>
      </div>
    </footer>
  );
};

export default Footnote;
