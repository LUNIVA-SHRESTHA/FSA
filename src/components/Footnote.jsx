import React from 'react';
import { Link } from 'react-router-dom';
import './Footnote.css';

const Footnote = () => {
  return (
   
    <div className='footnote' >
        <img src='./picture/logo.png' alt=''style={{height:'100px', width:'100px'}}/>

        <div className='contact-info'>
        <h2>  Contact Information    </h2>
        <p>Lubhoo, Lalitpur </p>
        <p>9841529303</p>
        <p>123@gmail.com</p>
        </div>

        <div className='contact-info'>
        <h2>  Quick Lines   </h2>
        <Link to="/admissions" className="QL">Admissions</Link>
        <Link to="/work" className="QL">Work with FSA</Link>
        <Link to="/calendar" className="QL">Calender/Events</Link>
        <Link to="/exam" className="QL">Exam Portal</Link>
        </div>

         <div className='contact-info'>
        <h2>  Follow us  </h2>
        <a href='https://www.facebook.com/futurestars.acdmy'>Facebook</a>
        </div>
    
        </div>
        
         
  );
};

export default Footnote;
