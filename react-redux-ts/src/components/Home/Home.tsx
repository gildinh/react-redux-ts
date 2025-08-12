import React from 'react';
import './Home.css';

interface HomeProps {
  title?: string;
  subtitle?: string;
}

const Home: React.FC<HomeProps> = ({ 
  title = 'Welcome to React Redux TS', 
  subtitle = 'A modern, scalable application built with React, Redux, and TypeScript' 
}) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="hero-section">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-buttons">
            <button className="hero-button primary">Get Started</button>
            <button className="hero-button secondary">Learn More</button>
          </div>
        </div>

        <div className="features-section">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚛️</div>
              <h3>React 18</h3>
              <p>Built with the latest React features including hooks, concurrent rendering, and suspense.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Redux Toolkit</h3>
              <p>Modern Redux with simplified state management and built-in best practices.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📘</div>
              <h3>TypeScript</h3>
              <p>Full type safety and enhanced developer experience with static type checking.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Modern UI</h3>
              <p>Beautiful, responsive design with CSS Grid, Flexbox, and modern animations.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-text">Join thousands of developers building amazing applications with our stack.</p>
          <button className="cta-button">Start Building Today</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
