/* src/components/Footer.js */
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Me</h4>
          <ul>
            <li>Email: ericiramirez25@gmail.com</li>
            <li>Phone: (530) 744-4588</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Me</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/eric-i-ramirez/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/eiramirez" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-credits">&copy; {new Date().getFullYear()} Eric I Ramirez. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
