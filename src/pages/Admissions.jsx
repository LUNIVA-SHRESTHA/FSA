import React from 'react';
import Navbar from '../components/Navbar';
import './Admissions.css';

const Admissions = () => {
  return (
    <>
      <div className="mainphoto">
        <Navbar />
        <h1 className="l1">Admissions</h1>
      </div>
      
      <div className="mainbody">
        <div className="content-section">
          <h2>Join Our School Family</h2>
          <p>
            We welcome applications from students who are eager to learn and grow. 
            Our admission process is designed to identify students who will thrive 
            in our nurturing and challenging academic environment.
          </p>
          
          <div className="admission-info">
            <div className="info-card">
              <h3>Application Process</h3>
              <ul>
                <li>Submit application form</li>
                <li>Entrance examination</li>
                <li>Interview with parents and student</li>
                <li>Document verification</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Required Documents</h3>
              <ul>
                <li>Birth certificate</li>
                <li>Previous school records</li>
                <li>Medical certificate</li>
                <li>Passport-sized photographs</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Important Dates</h3>
              <ul>
                <li>Application opens: January 1</li>
                <li>Application deadline: March 31</li>
                <li>Entrance exam: April 15</li>
                <li>Results announced: May 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admissions;
