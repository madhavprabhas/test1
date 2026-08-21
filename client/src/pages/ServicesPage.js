import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ServicesPage.css';

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/services')
      .then(res => {
        setServices(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions tailored to your business needs</p>
        </div>
      </div>

      <div className="services-grid">
        <div className="container">
          <div className="grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#learn-more" className="learn-more">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
