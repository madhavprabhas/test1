import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/sections/Services.css';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>What We Do</h2>
          <p>End-to-End Digital Solutions for Your Business</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
