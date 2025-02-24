import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import logo from '../assets/bttf-logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <Link to="/"><img src={logo} alt="logo"/></Link>
        </div>
        <div className="navbar-right">
            <Link to="#" className="navbar-button">Log In</Link>
            <Link to="/application" className="primary-button">Get Started</Link>
        </div>
    </nav>
  );
};

export default NavBar;
