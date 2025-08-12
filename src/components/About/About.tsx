import React from 'react';
import './About.css';

interface AboutProps {
  title?: string;
  description?: string;
}

const About: React.FC<AboutProps> = ({
  title = 'Our Services',
  description = 'Comprehensive wedding planning services to make your dream day perfect'
}) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">{title}</h1>
        <p className="about-description">{description}</p>

        <div className="about-sections">
          <section className="about-section">
            <h2 className="section-title">Full-Service Planning</h2>
            <p className="section-text">
              From the initial consultation to the final farewell, we handle every detail
              of your wedding day. Our comprehensive approach ensures a stress-free
              experience while creating the celebration of your dreams.
            </p>
          </section>

          <section className="about-section">
            <h2 className="section-title">Our Expertise</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Venue Selection</h3>
                <p>Finding the perfect location that matches your vision and budget</p>
              </div>
              <div className="value-item">
                <h3>Design & Décor</h3>
                <p>Creating stunning visual aesthetics that reflect your style</p>
              </div>
              <div className="value-item">
                <h3>Vendor Coordination</h3>
                <p>Managing all suppliers to ensure seamless execution</p>
              </div>
              <div className="value-item">
                <h3>Timeline Management</h3>
                <p>Keeping your special day perfectly orchestrated</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-text">
              With years of experience in the wedding industry, we understand that every
              couple is unique. We take the time to learn your story and create a
              personalized experience that celebrates your love in the most beautiful way.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
