import React from 'react';
import Navbar from '../components/Navbar';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <div className="mainphoto">
        <Navbar />
        <h1 className="l1">About Us</h1>
      </div>
      
      <div className="mainbody">
        <div className="content-section">
          <h2>Our Story</h2>
          <p>
            Future Stars Academy was founded with a vision to provide quality education 
            that nurtures not just academic excellence but also character development. 
            Since our inception, we have been committed to creating an environment where 
            every child can discover their potential and shine like a star.
          </p>
          
          <div className="about-sections">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To provide a safe, inclusive, and supportive learning environment that 
                encourages curiosity, builds character, and inspires lifelong learning 
                in every student.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To be recognized as a leading educational institution that prepares 
                students to become responsible, compassionate, and innovative global citizens.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Our Values</h3>
              <ul>
                <li>Excellence in Education</li>
                <li>Integrity and Honesty</li>
                <li>Respect and Diversity</li>
                <li>Innovation and Creativity</li>
                <li>Community and Collaboration</li>
              </ul>
            </div>
            
            <div className="about-card">
              <h3>Our Faculty</h3>
              <p>
                Our dedicated team of qualified and experienced teachers are passionate 
                about education and committed to helping each student reach their full potential.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Our Facilities</h3>
              <p>
                We provide modern classrooms, well-equipped laboratories, library, 
                sports facilities, and technology resources to support comprehensive learning.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Contact Information</h3>
              <p>
                <strong>Address:</strong> Future Stars Academy, Education Street<br/>
                <strong>Phone:</strong> +977-1-XXXXXXX<br/>
                <strong>Email:</strong> info@futurestarsacademy.edu.np<br/>
                <strong>Website:</strong> www.futurestarsacademy.edu.np
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
