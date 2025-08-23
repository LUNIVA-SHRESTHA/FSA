import React from 'react';
import './Homepage.css'; // Import the CSS file
import Navbar from '../components/Navbar'; // Import the Navbar component

const Homepage = () => {
  return (
    <>
      <div className="mainphoto">
        <Navbar />
        <h1 className="l1">"Where Every Child's Potential is Celebrated."</h1>
      </div>

      <div className="mainbody">
        <div className="secondpart">
          <img 
            src="./picture/herophoto.png" 
            height="550" 
            width="700" 
            alt="Students in classroom"
          />
          <div>
            <div className="text">
              <h1>Welcome to</h1>
              <h2>Future Stars Academy</h2>
              <p>
                We are delighted to have you visit our school's online home. At Future Stars Academy, 
                we believe that education goes beyond textbooks—it is about nurturing curiosity, building 
                character, and inspiring lifelong learning. For over 2001, we have been committed to 
                providing a safe, inclusive, and supportive environment where every student can discover 
                their potential and grow with confidence. Together with our dedicated teachers, supportive parents,
                and vibrant community, we strive to prepare our students not only for academic success but also for 
                life as responsible, compassionate, and innovative citizens of tomorrow.
              </p>
            </div>
          </div>
        </div>

        <div className="thirdpart">
          <p>
            At Future Stars, we believe that festivals are a reflection of our rich cultural
            heritage and an opportunity to instill values of unity, respect, and joy among students. 
            Throughout the year, our school celebrates a variety of festivals such as Dashain, Tihar, Holi, 
            Christmas, and many more, bringing together students from different backgrounds in a spirit 
            of harmony. These celebrations include cultural programs, art and craft activities, music, dance, 
            and sharing of traditional foods. By observing festivals together, we teach our students to 
            appreciate diversity, strengthen social bonds, and create cherished memories that enrich their 
            learning experience.
          </p>
          <img 
            src="./picture/festival.png" 
            width="650" 
            alt="Festival celebration"
          />
        </div>
        
        <div className="fourthpart">
          <div className="image-container">
            <img src="./picture/quiz.png" alt="Quiz competition" />
            <div className="caption">
              Our school organizes quiz competitions to encourage curiosity, critical thinking, and teamwork among students.
            </div>
          </div>
          <div className="image-container">
            <img src="./picture/environmentday.png" alt="Environment Day" />
            <div className="caption">
              We celebrate Environment Day by tree planting, with students' participation to promote a greener and healthier future.
            </div>
          </div>
          <div className="image-container">
            <img src="./picture/kindergardenGraduation.png" alt="Kindergarten Graduation" />
            <div className="caption">
              Our Kindergarten Graduation celebrates the young learners as they proudly transition from early childhood education.
            </div>
          </div>
          <div className="image-container">
            <img src="./picture/kids.png" alt="Junior student activities" />
            <div className="caption">
              Our junior students engage in fun and educational extra curricular activities that help them explore talents.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;