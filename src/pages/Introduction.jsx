import React from 'react';
import Navbar from '../components/Navbar';
import './Introduction.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Introduction = () => {
  useScrollToTop();
  
  return (
    <>
      <Navbar />
      <div className="introduction-page">
        <div className="intro-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Welcome to Future Stars Academy</h1>
            <p>Nurturing Excellence Since Establishment</p>
          </div>
        </div>

        <div className="intro-container">
          <section className="intro-section">
            <div className="section-content">
              <h2 className="section-title">About Our School</h2>
              <div className="content-with-image">
                <div className="text-content">
                  <p className="intro-text">
                    Future Stars Academy stands as a beacon of educational excellence, 
                    dedicated to shaping the minds and hearts of tomorrow's leaders. 
                    Established with a vision to provide world-class education rooted in 
                    cultural values, we have grown into one of the most trusted institutions 
                    in the region.
                  </p>
                  <p className="intro-text">
                    Our journey began with a simple yet powerful mission: to create an 
                    environment where every child can discover their potential and flourish. 
                    Today, we are proud to be home to hundreds of students who are not just 
                    learning academic subjects but are developing into well-rounded individuals 
                    prepared for the challenges of tomorrow.
                  </p>
                </div>
                <div className="image-container">
                  <img src="./picture/logo.png" alt="School Logo" className="intro-image" />
                </div>
              </div>
            </div>
          </section>

          <section className="intro-section highlight-section">
            <h2 className="section-title">Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎓</div>
                <h3>Academic Excellence</h3>
                <p>Comprehensive curriculum designed to meet international standards while maintaining local relevance.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👨‍🏫</div>
                <h3>Expert Faculty</h3>
                <p>Highly qualified and passionate teachers dedicated to student success and holistic development.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏢</div>
                <h3>Modern Facilities</h3>
                <p>State-of-the-art infrastructure including well-equipped classrooms, labs, and sports facilities.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌱</div>
                <h3>Holistic Development</h3>
                <p>Focus on overall growth through academics, sports, arts, and character-building activities.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3>Community Focus</h3>
                <p>Strong emphasis on values, ethics, and social responsibility to create responsible citizens.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌟</div>
                <h3>Individual Attention</h3>
                <p>Small class sizes ensuring personalized attention and support for every student.</p>
              </div>
            </div>
          </section>

          <section className="intro-section stats-section">
            <h2 className="section-title">Our Impact in Numbers</h2>
            <div className="stats-container">
              <div className="stat-box">
                <div className="stat-number">500+</div>
                <div className="stat-label">Students</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">50+</div>
                <div className="stat-label">Qualified Teachers</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
            </div>
          </section>

          <section className="intro-section approach-section">
            <h2 className="section-title">Our Educational Approach</h2>
            <div className="approach-content">
              <div className="approach-item">
                <div className="approach-number">01</div>
                <div className="approach-details">
                  <h3>Student-Centered Learning</h3>
                  <p>We believe in placing students at the heart of the learning process, 
                     encouraging active participation, critical thinking, and creativity in 
                     every lesson.</p>
                </div>
              </div>
              <div className="approach-item">
                <div className="approach-number">02</div>
                <div className="approach-details">
                  <h3>Innovative Teaching Methods</h3>
                  <p>Our teachers employ modern pedagogical techniques, integrating technology 
                     and hands-on activities to make learning engaging and effective.</p>
                </div>
              </div>
              <div className="approach-item">
                <div className="approach-number">03</div>
                <div className="approach-details">
                  <h3>Character Development</h3>
                  <p>Beyond academics, we focus on building strong moral values, leadership 
                     qualities, and social skills essential for success in life.</p>
                </div>
              </div>
              <div className="approach-item">
                <div className="approach-number">04</div>
                <div className="approach-details">
                  <h3>Continuous Assessment</h3>
                  <p>Regular evaluations and feedback help us track progress and provide 
                     targeted support to ensure every student reaches their full potential.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="intro-section cta-section">
            <div className="cta-content">
              <h2>Join Our Community</h2>
              <p>Be part of an institution that values excellence, integrity, and innovation. 
                 Together, we can build a brighter future for your child.</p>
              <div className="cta-buttons">
                <a href="/admissions" className="cta-btn primary">Apply Now</a>
                <a href="/contact" className="cta-btn secondary">Contact Us</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Introduction;