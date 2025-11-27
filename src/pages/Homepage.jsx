import React, { useEffect, useRef, useState } from 'react';
import './Homepage.css'; // Import the CSS file
import Navbar from '../components/Navbar'; // Import the Navbar component
import useScrollToTop from '../hooks/useScrollToTop'; // Import the custom hook


const Homepage = () => {
  const videoRef = useRef(null);
  const fourthPartRef = useRef(null);
  const fifthPartRef = useRef(null);
  const [fifthPartVisible, setFifthPartVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Add scroll animation for fourth part images
  useEffect(() => {
    const fourthPart = fourthPartRef.current;
    if (!fourthPart) return;

    const imageContainers = fourthPart.querySelectorAll('.image-container');

    const handleScrollAnimation = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 150); // Stagger animation by 150ms
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });

    imageContainers.forEach((container) => {
      observer.observe(container);
    });

    return () => {
      imageContainers.forEach((container) => {
        observer.unobserve(container);
      });
    };
  }, []);

  // Add overlay scroll effect for fifth part
  useEffect(() => {
    const handleScroll = () => {
      const fifthPart = fifthPartRef.current;
      if (!fifthPart) return;

      const rect = fifthPart.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when fifth part starts entering viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calculate progress (0 to 1)
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
        setScrollProgress(progress);
        
        if (progress > 0.1) {
          setFifthPartVisible(true);
        } else {
          setFifthPartVisible(false);
        }
      } else {
        setScrollProgress(0);
        setFifthPartVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
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
          {/* <p className="tour-description">
            Explore our beautiful campus, modern facilities, and vibrant learning environment 
            through this virtual tour of Future Stars Academy.
          </p> */}
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
          <div className='TPH1'>
          <h1>Yellow day</h1>
          </div>
          <div className='TPH2'>
          <p className='TPH2_text' style={{fontSize:'17px'}}>
            At Future Stars, we believe that festivals are a reflection of our rich cultural
            heritage and an opportunity to instill values of unity, respect, and joy among students. 
            Throughout the year, our school celebrates a variety of festivals such as Dashain, Tihar, Holi, 
            Christmas, and many more, bringing together students from different backgrounds in a spirit 
            of harmony. These celebrations include cultural programs, art and craft activities, music, dance, 
            and sharing of traditional foods. By observing festivals together, we teach our students to 
            appreciate diversity, strengthen social bonds, and create cherished memories that enrich their 
            learning experience.
          </p>
          <div className="festival-image-container">
            <img 
              src="./picture/festival.png" 
              width="650" 
              alt="Festival celebration"
            />
            <div className='YFH'>
              <h3>Staff celebrating *Yellow Day* by wearing bright yellow outfits to represent joy, positivity, and sunshine.</h3>
            </div>
          </div>
          </div>
        </div>
        
        <div className="fourthpart" ref={fourthPartRef}>
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
        
        {/* Fifth part overlay trigger */}
        <div className="fifth-part-trigger" ref={fifthPartRef}></div>
      </div>

      {/* Fifth part as overlay */}
      <div 
        className={`fifthpart-overlay ${fifthPartVisible ? 'active' : ''}`}
        style={{
          transform: `translateY(${(1 - scrollProgress) * 100}%)`,
          opacity: scrollProgress
        }}
      >
        <div className="fifthpart-content">
          {/* Animated background elements */}
          <div className="stats-bg-animation">
            <div className="stats-circle stats-circle-1"></div>
            <div className="stats-circle stats-circle-2"></div>
            <div className="stats-circle stats-circle-3"></div>
          </div>

          {/* Floating particles */}
          <div className="stats-particle"></div>
          <div className="stats-particle"></div>
          <div className="stats-particle"></div>
          <div className="stats-particle"></div>
          <div className="stats-particle"></div>
          
          {/* Stats cards with icons */}
          <div className="stats-container">
            <div className="stat-card">
              <h2 className='stat-number'>40+</h2>
              <p className='stat-label'>Expert Teachers</p>
            </div>
            
            <div className="stat-card">
              <h2 className='stat-number'>500+</h2>
              <p className='stat-label'>Happy Students</p>
            </div>
            
            <div className="stat-card">
              <h2 className='stat-number'>24+</h2>
              <p className='stat-label'>Years of Trust</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;