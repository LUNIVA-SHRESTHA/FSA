import React from 'react';
import Navbar from '../components/Navbar';
import './Gallery.css';

const Gallery = () => {
  return (
    <>
      <div className="mainphoto">
        <Navbar />
        <h1 className="l1">Gallery</h1>
      </div>
      
      <div className="mainbody">
        <div className="content-section">
          <h2>School Life in Pictures</h2>
          <p>
            Explore the vibrant life at Future Stars Academy through our photo gallery. 
            From classroom activities to special events, these images capture the joy 
            and learning that happens every day at our school.
          </p>
          
          <div className="gallery-grid">
            <div className="gallery-category">
              <h3>Classroom Activities</h3>
              <div className="image-grid">
                <img src="./picture/gallery1.jpg" alt="Students in class" />
                <img src="./picture/gallery2.jpg" alt="Science experiment" />
                <img src="./picture/gallery3.jpg" alt="Art class" />
                <img src="./picture/gallery4.jpg" alt="Reading session" />
              </div>
            </div>
            
            <div className="gallery-category">
              <h3>Sports & Activities</h3>
              <div className="image-grid">
                <img src="./picture/sports1.jpg" alt="Football match" />
                <img src="./picture/sports2.jpg" alt="Basketball game" />
                <img src="./picture/sports3.jpg" alt="Track and field" />
                <img src="./picture/sports4.jpg" alt="Swimming competition" />
              </div>
            </div>
            
            <div className="gallery-category">
              <h3>Events & Celebrations</h3>
              <div className="image-grid">
                <img src="./picture/event1.jpg" alt="Annual day celebration" />
                <img src="./picture/event2.jpg" alt="Cultural program" />
                <img src="./picture/event3.jpg" alt="Science fair" />
                <img src="./picture/event4.jpg" alt="Graduation ceremony" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
