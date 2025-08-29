import React from 'react';
import Navbar from '../components/Navbar';
import './AboutUs.css';

const AboutUs = () => {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const extraContents = {
    'Our Mission': (
      <div className="card-extra-details">
        <h3>More About Our Mission</h3>
        <p>
          We strive to foster a love for learning and personal growth in every student. Our programs are designed to challenge and support students at every stage, ensuring they develop the skills and values needed for success in life.
        </p>
      </div>
    ),
    'Our Vision': (
      <div className="card-extra-details">
        <h3>More About Our Vision</h3>
        <p>
          Our vision is to create a community of learners who are prepared to lead and innovate in a rapidly changing world. We emphasize global citizenship, creativity, and responsibility in all our activities.
        </p>
      </div>
    )
  };
  return (
    <>
      <div className="mainphoto">
        <Navbar />
        <h1 className="l1">About Us</h1>
      </div>
      <div className="mainbody">
        <div className="content-section">
          <h2>Our Story</h2>
          <p>
            Future Stars Academy was founded with a vision to provide quality education 
            that nurtures not just academic excellence but also character development. 
            Since our inception, we have been committed to creating an environment where 
            every child can discover their potential and shine like a star.
          </p>
          <div className="about-sections">
            <div className="about-row">
              { [
                {
                  title: 'Our Mission',
                  front: 'Empowering students to become lifelong learners and responsible citizens.',
                  back: 'We nurture curiosity, build character, and inspire every student to reach their full potential in a safe, inclusive, and supportive environment.',
                  link: '/about-us/mission'
                },
                {
                  title: 'Our Vision',
                  front: 'Preparing future leaders for a rapidly changing world.',
                  back: 'We aim to be a leading institution recognized for developing compassionate, innovative, and globally-minded individuals who make a positive impact.',
                  link: '/about-us/vision'
                },
                {
                  title: 'Our Values',
                  front: (
                    <>
                      <ul>
                        <li>Excellence</li>
                        <li>Integrity</li>
                        <li>Respect</li>
                        <li>Innovation</li>
                        <li>Collaboration</li>
                      </ul>
                    </>
                  ),
                  back: 'We uphold excellence, integrity, respect, innovation, and collaboration in every aspect of our school community.',
                  link: '/about-us/values'
                }
              ].map((card, idx) => (
                <div className="about-flip-card" key={idx}>
                  <div className="about-flip-card-inner">
                    <div className="about-flip-card-front">
                      <h3>{card.title}</h3>
                      {typeof card.front === 'string' ? <p>{card.front}</p> : card.front}
                    </div>
                    <div className="about-flip-card-back">
                      <h3>{card.title}</h3>
                      <p>{card.back}</p>
                      <a className="view-more-btn" href={card.link}>View More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-row">
              { [
                {
                  title: 'Our Faculty',
                  front: 'Meet our passionate and experienced educators.',
                  back: 'Our faculty is dedicated to guiding, mentoring, and inspiring students to achieve academic and personal success.',
                  link: '/about-us/faculty'
                },
                {
                  title: 'Our Facilities',
                  front: 'Modern spaces for learning, creativity, and growth.',
                  back: 'Our campus features state-of-the-art classrooms, labs, library, sports facilities, and technology resources for a comprehensive learning experience.',
                  link: '/about-us/facilities'
                }
              ].map((card, idx) => (
                <div className="about-flip-card" key={idx}>
                  <div className="about-flip-card-inner">
                    <div className="about-flip-card-front">
                      <h3>{card.title}</h3>
                      <p>{card.front}</p>
                    </div>
                    <div className="about-flip-card-back">
                      <h3>{card.title}</h3>
                      <p>{card.back}</p>
                      <a className="view-more-btn" href={card.link}>View More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {selectedCard && extraContents[selectedCard] && (
          <div className="about-extra-content">
            {extraContents[selectedCard]}
            <button className="close-extra-btn" onClick={() => setSelectedCard(null)}>Close</button>
          </div>
        )}
      </div>
    </>
  );
};

export default AboutUs;
