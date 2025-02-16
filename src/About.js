import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <p>
        I am an aspiring Embedded Systems Engineer and Engineering Intern with a passion for low-level programming and hardware-software integration. Currently pursuing my Bachelor's degree in Computer Engineering at California State University, Chico, I blend practical, hands-on experience with a strong academic foundation.
      </p>
      <p>
        My projects range from engineering a custom DC motor—upscaling a factory model by 350% using 3D-printed components—to assembling custom PCs by carefully analyzing budgets and selecting components for optimal performance. These experiences have sharpened my problem-solving, design, and integration skills.
      </p>
      <p>
        Proficient in technologies such as React, JavaScript, embedded systems programming (Assembly &amp; C), and tools like Autodesk Fusion, LTSpice, MATLAB, and more, I am always eager to drive innovative solutions. I am bilingual in English and Spanish.
      </p>
      <p>
        Connect with me on <a href="https://www.linkedin.com/in/eric-i-ramirez/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my work on <a href="https://github.com/eiramirez" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </div>
  );
};

export default About;
