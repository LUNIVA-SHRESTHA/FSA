import React, { useEffect, useRef } from 'react';
import './Homepage.css'; // Import the CSS file
import Navbar from '../components/Navbar'; // Import the Navbar component
import useScrollToTop from '../hooks/useScrollToTop'; // Import the custom hook


const Homepage = () => {
  const videoRef = useRef(null);

  // Use the custom hook to scroll to top
  useScrollToTop();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch((error) => {
            console.log('Video autoplay failed:', error);
            // Fallback: show controls if autoplay fails
            video.setAttribute('controls', 'true');
          });
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    });

    observer.observe(video);

    // Also try to play when video is loaded
    video.addEventListener('loadedmetadata', () => {
      if (video.offsetParent !== null) { // Check if visible
        video.play().catch(() => {
          video.setAttribute('controls', 'true');
        });
      }
    });

    return () => {
      observer.unobserve(video);
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="mainphoto">
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
              <p style={{fontSize:'21px'}}>
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

        <div className="video-tour-section">
          <h2 className="tour-heading">Virtual Tour of Our School</h2>
          <p className="tour-description">
            Explore our beautiful campus, modern facilities, and vibrant learning environment 
            through this virtual tour of Future Stars Academy.
          </p>
          <div className="video-container">
            <video 
              ref={videoRef}
              className="tour-video" 
              muted
              loop
              playsInline
              poster="./picture/mainphoto.png"
              preload="auto"
            >
              <source src="./video/Tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="thirdpart">
          <p style={{fontSize:'17px'}}>
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
              Our school organizes quiz competitions to encourage curiosity, critical thinking, and 
              teamwork among students.
            </div>
          </div>
          <div className="image-container">
            <img src="./picture/environmentday.png" alt="Environment Day" />
            <div className="caption">
              We celebrate Environment Day by tree planting, with students' participation to promote a 
              greener and healthier future.
            </div>
          </div>
          <div className="image-container">
            <img src="./picture/kindergardenGraduation.png" alt="Kindergarten Graduation" />
            <div className="caption">
              Our Kindergarten Graduation celebrates the young learners as they proudly transition from 
              early childhood education.
            </div>
          </div>
          <div className="image-container">
            <img src="./picture/kids.png" alt="Junior student activities" />
            <div className="caption">
              Our junior students engage in fun and educational extra curricular activities that help them 
              explore talents.
            </div>
          </div>
        </div>
        <div className="fifthpart">
          
          <h2 className='l2'> 40+<br/> Proffesers</h2>
          <h2 className='l2'> 500+ <br/> Students</h2>
          <h2 className='l2'> 24+ <br/> Years of Trust</h2>
         

      </div>
      </div>
    </>
  );
};

export default Homepage;