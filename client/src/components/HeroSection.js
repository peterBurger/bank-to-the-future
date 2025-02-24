import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h1>Your Future. Your Money. Your Bank.</h1>
        <p>Bringing you a future where banking is secure, fast, and fraud-free—<em>no flux capacitor needed!</em></p>
        <div className="hero-buttons">
          <Link to="/application" className="primary-button">Activate Your Future</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
