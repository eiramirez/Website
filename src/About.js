// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I am a passionate Mechanical Engineer and Developer with a strong
          background in designing and building innovative projects. I combine
          my hands-on engineering skills with modern software development
          techniques to create practical and efficient solutions.
        </p>
        <p>
          Over the years, I’ve worked on diverse projects ranging from
          electronics and mechanical designs to full-stack web applications.
          Check out my work on{' '}
          <a
            href="https://www.linkedin.com/in/eric-i-ramirez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </motion.div>
    </section>
  );
};

export default About;
