import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p>
        Whether you have a project idea, collaboration opportunity, or just want to say hello, feel free to reach out!
      </p>
      <ul>
        <li>Email: <a href="mailto:ericiramirez25@gmail.com">ericiramirez25@gmail.com</a></li>
        <li>Phone: (530) 744-4588</li>
        <li>
          LinkedIn: <a href="https://www.linkedin.com/in/eric-i-ramirez/" target="_blank" rel="noopener noreferrer">Eric I Ramirez</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/eiramirez" target="_blank" rel="noopener noreferrer">eiramirez</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
