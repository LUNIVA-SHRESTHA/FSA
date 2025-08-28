import React from 'react';
import Navbar from '../components/Navbar';
import './Academics.css';

const Academics = () => {
  return (
    <>
      <Navbar />
      
      
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
              <h3>Pre-primary/ Early Childhood </h3>
              <img src='./picture/preprimary.jpg' alt="Junior Class" className="feature-image" 
              width={'270px'} height={'200px'} style={{borderRadius:"5px"}}/>
              <p>Early childhood development focusing on basic skills and 
                social interaction. Children are introduced to play-based learning, 
                storytelling, music, art, and motor skill development to build a strong foundation
                for lifelong learning.</p>
              <ul className="feature-list">
                <li>🌱 Development of social and emotional skills through play</li>
                <li>🎨 Exposure to arts, music, and creative activities</li>
                <li>📚 Introduction to letters, numbers, shapes, and colors in a fun way</li>
              </ul>
            </div>
            <div className="feature">
              <h3>Primary/ Elementary</h3>
              <img src='./picture/junior.jpg' alt="Junior Class" className="feature-image" 
              width={'270px'} height={'200px'} style={{borderRadius:"5px", marginTop:"30px"}} padding top='4px'/>
              <p>
                Foundation learning with focus on core subjects and creative development.The 
                curriculum emphasizes literacy, numeracy, critical thinking, and problem-solving, 
                while encouraging teamwork, curiosity, and creativity through projects and activities.
              </p>
              <ul className="feature-list">
                <li>✏️ Strong foundation in Mathematics, English, and Science.</li>
                <li>🤝 Focus on teamwork and interactive learning.</li>
                <li>💡 Encouragement of curiosity, innovation, and creativity.</li>
              </ul>
            </div>
            <div className="feature">
              <h3>Secondary Education</h3>
              <img src='./picture/secondary.jpg' alt="Junior Class" className="feature-image" 
              width={'270px'} height={'200px'} style={{borderRadius:"5px" , marginTop:"30px"}}/>
              <p>
                Advanced curriculum preparing students for higher education and beyond.Students are 
                guided through in-depth subject knowledge, leadership skills, digital literacy, and 
                extracurricular opportunities to prepare them for future academic and professional 
                challenges.</p>
                <ul className="feature-list">
                <li>🎓 Preparation for board exams and higher education.</li>
                <li>💻 Training in digital skills and technology use.</li>
                <li>🌍 Opportunities for leadership, debate, sports, and community service.</li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Academics;
