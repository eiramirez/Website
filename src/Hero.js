import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const navigationCards = [
  { title: "About", path: "/about", description: "Discover my background" },
  { title: "Projects", path: "/projects", description: "View my work" },
  { title: "Skills", path: "/skills", description: "My technical abilities" },
  { title: "Timeline", path: "/timeline", description: "My journey so far" },
  { title: "Contact", path: "/contact", description: "Get in touch" },
];

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Hello, I'm Eric I Ramirez</h1>
          <p>Computer Engineer & Developer | Building innovative projects</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hero-btn"
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </section>
      <section className="nav-cards-section">
        <h2>Explore More</h2>
        <div className="cards-container">
          {navigationCards.map((card, index) => (
            <motion.div
              key={index}
              className="nav-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link to={card.path} className="card-link">Go</Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
