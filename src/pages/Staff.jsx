import React from 'react';
import Navbar from '../components/Navbar';
import Footnote from '../components/Footnote';
import './Staff.css';

const Staff = () => {
  return (
    <>
        <Navbar />

        
        <h1 className="staff-heading">Our Dedicated Staff</h1>
        <img src='./picture/Staff-mainphoto.jpg' alt="Staff" className="staff-image"/>
        <p className="staffintro">At Future Stars Academy, our team of qualified and passionate 
        educators is committed to guiding students with care, knowledge, and inspiration. 
        Supported by our staff, they create a positive and engaging learning environment where
        every child can grow and succeed.</p>

        <div className='PrimaryStaff'>
          <h2>Our Dedicated Primary Teachers</h2>
          </div>

        
    </>
  );
};

export default Staff;