import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/sections/Pricing.css';

function Pricing() {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    axios.get('/api/pricing')
      .then(res => setPricing(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Pricing Plans</h2>
          <p>Flexible pricing for businesses of all sizes</p>
        </div>

        <div className="pricing-grid">
          {pricing.map(plan => (
            <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <p className="pricing-description">{plan.description}</p>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-pricing">
                {plan.period === 'pricing' ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
