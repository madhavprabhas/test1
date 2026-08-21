import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/sections/Portfolio.css';

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios.get('/api/portfolio')
      .then(res => setPortfolio(res.data.slice(0, 3)))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our Work</h2>
          <p>Real Projects. Real Impact.</p>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((project, idx) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <div className="image-placeholder">{project.title}</div>
              </div>
              <div className="portfolio-info">
                <span className="project-number">0{idx + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-footer">
          <Link to="/portfolio" className="btn btn-outline">View All Projects</Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
