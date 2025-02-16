// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'DC Motor From Scratch',
    description:
      'A detailed project on designing and building a DC motor from the ground up. This project highlights my ability to merge theoretical knowledge with practical engineering skills.',
    image: 'https://source.unsplash.com/featured/?motor,engineering',
    link: 'https://github.com/yourusername/dc-motor-project' // Update with your actual project URL
  },
  {
    id: 2,
    title: 'Smart Home Dashboard',
    description:
      'A modern web application that allows users to control and monitor smart home devices with ease. Built with React and integrated with IoT devices.',
    image: 'https://source.unsplash.com/featured/?smart,home',
    link: 'https://github.com/yourusername/smart-home-dashboard'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A professional portfolio website to showcase my work, skills, and experience. Featuring smooth animations and a responsive design.',
    image: 'https://source.unsplash.com/featured/?portfolio,design',
    link: 'https://github.com/yourusername/portfolio-website'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="project-btn"
              >
                View Details
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
