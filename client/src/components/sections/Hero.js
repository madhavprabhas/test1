import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sections/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">DIGITAL SOLUTIONS THAT DRIVE REAL GROWTH</span>
            <h1>We Build Brands That <span className="highlight">Inspire</span></h1>
            <p>DigitalHub is your digital growth partner for forward-thinking businesses. We blend strategy, creativity, and technology to deliver measurable success.</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">Explore Services</Link>
              <Link to="/portfolio" className="btn btn-secondary">See Our Work</Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-text">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-text">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-placeholder">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
