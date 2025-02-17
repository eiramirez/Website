import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const timelineData = [
  {
    date: 'Nov 2023 - Dec 2023',
    title: 'DC Motor Project',
    location: 'Chico, CA, USA',
    description: 'Upscaled a factory DC motor by 350% using 3D-printed components, achieving continuous rotation at 3000RPM.',
  },
  {
    date: 'Oct 2021 - Mar 2024',
    title: 'In-N-Out Burger (Associate / Clean-Up Crew)',
    location: 'Redding, CA',
    description: 'Maintained kitchen equipment and troubleshot fryer screen malfunctions applying engineering skills.',
  },
  {
    date: 'Apr 2019 - Present',
    title: 'Custom PC Builds',
    location: 'Various',
    description: 'Assembled over 10 custom PCs, analyzing budgets and troubleshooting hardware for optimal performance.',
  },
  {
    date: 'Aug 2023 - Present',
    title: "Bachelor's in Computer Engineering",
    location: 'California State University, Chico',
    description: 'Focusing on embedded systems, low-level programming, and hardware-software integration.',
  },
  {
    date: 'Aug 2021 - May 2023',
    title: 'Computer Engineering Program',
    location: 'Shasta College, Redding, CA',
    description: 'Built a strong foundation in electronics, programming, and system design.',
  },
];

const skills = [
  { name: 'React', proficiency: '90%' },
  { name: 'JavaScript', proficiency: '85%' },
  { name: 'CSS/HTML', proficiency: '80%' },
  { name: 'Embedded C', proficiency: '75%' },
  { name: 'Assembly', proficiency: '70%' },
  { name: 'LTSpice', proficiency: '65%' },
  { name: 'MATLAB', proficiency: '60%' },
];

const About = () => {
  return (
    <div className="about-page">
      <section className="intro-section">
        <h2>About Me</h2>
        <p>
          I’m Eric I Ramirez—an aspiring Embedded Systems Engineer and Developer. I’ve worked on custom
          DC motors, assembled numerous PCs, and tackled diverse engineering tasks. My passion lies in
          bridging hardware and software, turning technical ideas into real-world solutions.
        </p>
      </section>

      <section className="skills-section">
        <h3>Key Skills</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4>{skill.name}</h4>
              <div className="progress-bar">
                <motion.div
                  className="progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.proficiency }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              </div>
              <p>{skill.proficiency} proficient</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h3>My Journey</h3>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h4 className="timeline-title">{item.title}</h4>
                <h5 className="timeline-location">{item.location}</h5>
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
