import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundPositionY: offsetY * 0.5 }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">HEY, I'M ERIC I RAMIREZ</h1>
        <p className="hero-subtext">
          Embedded Systems Engineer &amp; Developer <br />
          Making hardware and software come together seamlessly.
        </p>
        <motion.button
          className="hero-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: 2 }}
        >
          <Link to="/projects" className="hero-link">
            Explore My Work
          </Link>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
