import React from 'react';
import Navbar from '../components/Navbar';
import Footnote from '../components/Footnote';
import './Work.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Work = () => {
  // Use the custom hook to scroll to top
  useScrollToTop();
  
  return (
    <>
        <Navbar />
        <div className='mainbody'>
        <h1 className="work-heading">Work With Us </h1>
        <p className='work-para'>Our Work at FSA page highlights current opportunities to join our team of educators and 
        staff who are committed to providing quality education and a nurturing environment for every 
        student. Whether you are an experienced teacher or a professional eager to contribute to school 
        life, we invite you to explore our vacancies and become part of the FSA family.</p>
        <div className='work-images'>
          <img src='./picture/vacancy.jpg' alt=''/>
          <img src='./picture/vacancy1.jpg' alt=''/>
          <img src='./picture/vacancy2.jpg' alt=''/>
          <img src='./picture/vacancy3.jpg' alt=''/>


        </div>
        </div>
        
    </>
  );
};

export default Work;