import React from 'react';
import { Link } from 'react-router-dom';
import { features } from '../utils/seedData';
import '../styles/global.css';
import hoverboardImage from '../assets/hoverboard.jpg';


const FeaturesSection = () => {
  return (
    <>
      <div className="features-section">
        {features.map((feature, index) => (
          <div key={index} className="feature-tile">
            <div className="emoji">{feature.emoji}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <Link to="/application" className="feature-link">{feature.linkText}</Link>
          </div>
        ))}
      </div>
      <div className="features-highlight-section">
        <div className="features-highlight-image">
          <img src={hoverboardImage} alt="Hoverboard" />
        </div>
        <div className="features-highlight-content">
          <h2>HoverPay®</h2>
          <p>Experience the future of banking with our innovative Hoverboard Transaction platform. Fly through your finances effortlessly and securely.</p>
          <Link to="/application" className="primary-button">Sign Up Now</Link>
        </div>
      </div>
    </>

  );
};

export default FeaturesSection;
