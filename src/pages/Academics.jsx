import React from 'react';
import Navbar from '../components/Navbar';
import './Academics.css';

const Academics = () => {
  return (
    <>
      <div className="mainphoto">
        <Navbar />
        <h1 className="l1">Academics</h1>
      </div>
      
      <div className="mainbody">
        <div className="content-section">
          <h2>Academic Excellence</h2>
          <p>
            At Future Stars Academy, we provide a comprehensive academic program 
            designed to challenge and inspire our students. Our curriculum is carefully 
            crafted to meet international standards while incorporating local cultural values.
          </p>
          
          <div className="academic-features">
            <div className="feature">
              <h3>Primary Education</h3>
              <p>Foundation learning with focus on core subjects and creative development.</p>
            </div>
            <div className="feature">
              <h3>Secondary Education</h3>
              <p>Advanced curriculum preparing students for higher education and beyond.</p>
            </div>
            <div className="feature">
              <h3>Special Programs</h3>
              <p>Extra-curricular activities, sports, and skill development programs.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Academics;
