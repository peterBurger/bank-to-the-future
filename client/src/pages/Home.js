import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import '../styles/global.css';

const Home = () => {
    return (
        <div className="home-container">
            <HeroSection />
            <FeaturesSection />
            <Footer />
        </div>
    );
};

export default Home;
