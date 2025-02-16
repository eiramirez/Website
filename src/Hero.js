// src/components/Hero.js
import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <Parallax
      bgImage="https://t3.ftcdn.net/jpg/07/29/85/10/360_F_729851093_bwU7QR7BKIvGc0ovOzDGv0KFFM6EOBjv.jpg"
      strength={500}  // Adjust strength for a more or less pronounced effect
    >
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Hello, I'm Eric I Ramirez</h1>
          <p>Mechanical Engineer & Developer | Building innovative projects</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hero-btn"
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </div>
    </Parallax>
  );
};

export default Hero;
