import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DigitalHub</h3>
            <p>Digital solutions that drive real growth for forward-thinking businesses.</p>
            <div className="social-links">
              <a href="#twitter" className="social-link">Twitter</a>
              <a href="#linkedin" className="social-link">LinkedIn</a>
              <a href="#instagram" className="social-link">Instagram</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#brand">Brand Strategy</a></li>
              <li><a href="#web">Web Development</a></li>
              <li><a href="#marketing">Digital Marketing</a></li>
              <li><a href="#seo">SEO & Analytics</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: hello@digitalhub.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Business St, Tech City, TC 12345</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 DigitalHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
