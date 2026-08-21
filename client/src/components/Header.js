import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <span className="logo-icon">◆</span>
              <span className="logo-text">DigitalHub</span>
            </Link>
          </div>

          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/portfolio" className="nav-link">Work</Link>
            <a href="#testimonials" className="nav-link">About</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <Link to="/contact" className="nav-link contact-btn">Get In Touch</Link>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
