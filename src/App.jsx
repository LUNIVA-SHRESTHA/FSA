import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Values from './pages/Values';
import Faculty from './pages/Faculty';
import Facilities from './pages/Facilities';
import Navbar from './components/Navbar';
import Footnote from './components/Footnote';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about-us/mission" element={<Mission />} />
          <Route path="/about-us/vision" element={<Vision />} />
          <Route path="/about-us/values" element={<Values />} />
          <Route path="/about-us/faculty" element={<Faculty />} />
          <Route path="/about-us/facilities" element={<Facilities />} />
      
    
        </Routes>
      </div>
      <Footnote />
    </Router>
  );
}

export default App;
