import React from 'react';
import './Home.css';

interface HomeProps {
  title?: string;
  subtitle?: string;
}

const Home: React.FC<HomeProps> = ({ 
  title = 'Dream Wedding Planning', 
  subtitle = 'Creating magical moments that last forever' 
}) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="hero-section">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-buttons">
            <button className="hero-button primary">Start Planning</button>
            <button className="hero-button secondary">View Gallery</button>
          </div>
        </div>

        <div className="features-section">
          <h2 className="section-title">Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💒</div>
              <h3>Venue Selection</h3>
              <p>Find the perfect location for your special day with our curated venue options.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Design & Décor</h3>
              <p>Create your dream wedding aesthetic with our expert design team.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Catering & Cake</h3>
              <p>Delicious cuisine and stunning wedding cakes for your celebration.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>Photography</h3>
              <p>Capture every precious moment with our professional photographers.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">Ready to plan your dream wedding?</h2>
          <p className="cta-text">Let us help you create the perfect celebration of your love story.</p>
          <button className="cta-button">Book Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
