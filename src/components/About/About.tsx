import React from 'react';
import './About.css';

interface AboutProps {
  title?: string;
  description?: string;
}

const About: React.FC<AboutProps> = ({ 
  title = 'About Us', 
  description = 'Learn more about our company and mission.' 
}) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">{title}</h1>
        <p className="about-description">{description}</p>
        
        <div className="about-sections">
          <section className="about-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              We are dedicated to creating innovative solutions that empower businesses 
              and individuals to achieve their goals through cutting-edge technology.
            </p>
          </section>
          
          <section className="about-section">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Constantly pushing boundaries and exploring new possibilities</p>
              </div>
              <div className="value-item">
                <h3>Quality</h3>
                <p>Delivering excellence in everything we do</p>
              </div>
              <div className="value-item">
                <h3>Integrity</h3>
                <p>Maintaining the highest ethical standards</p>
              </div>
              <div className="value-item">
                <h3>Collaboration</h3>
                <p>Working together to achieve common goals</p>
              </div>
            </div>
          </section>
          
          <section className="about-section">
            <h2 className="section-title">Our Team</h2>
            <p className="section-text">
              Our diverse team of experts brings together years of experience 
              in technology, design, and business strategy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
