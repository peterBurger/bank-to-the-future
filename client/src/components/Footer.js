import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/#">Terms & Conditions</Link>
        <Link to="/#">Privacy Policy</Link>
        <Link to="/#">Legal</Link>
        <Link to="/#">Contact Us</Link>
      </div>
      <div className="footer-disclaimer">
        <p>Investment and Insurance Products are:</p>
        <p>Not Insured by the FDIC or Any Federal Government Agency</p>
        <p>Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiate</p>
        <p>Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested</p>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-pinterest"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
