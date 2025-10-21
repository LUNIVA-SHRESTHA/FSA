import React from 'react';
import Footnote from '../components/Footnote';
import './Introduction.css';
import useScrollToTop from '../hooks/useScrollToTop';

const Introduction = () => {
  // Use the custom hook to scroll to top
  useScrollToTop();
  
  return (
    <>
        <Navbar />
        
    </>
  );
};

export default Introduction;