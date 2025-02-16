// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <p>
          Whether you have a project in mind, a collaboration opportunity, or just
          want to say hi, feel free to get in touch.
        </p>
        <p>
          Email: <a href="mailto:eric.ramirez@example.com">eric.ramirez@example.com</a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/eric-i-ramirez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eric I Ramirez
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
