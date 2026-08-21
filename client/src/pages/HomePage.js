import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/HomePage.css';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
    </div>
  );
}

export default HomePage;
