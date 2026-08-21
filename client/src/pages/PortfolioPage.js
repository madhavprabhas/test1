import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/PortfolioPage.css';

function PortfolioPage() {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/portfolio')
      .then(res => {
        setPortfolio(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p>Real projects. Real impact. Real results.</p>
        </div>
      </div>

      <div className="portfolio-grid">
        <div className="container">
          <div className="grid">
            {portfolio.map(project => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-image">
                  <div className="image-placeholder">{project.title}</div>
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-number">0{project.id}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
