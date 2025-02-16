import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: "React", proficiency: "90%" },
  { name: "JavaScript", proficiency: "85%" },
  { name: "CSS/HTML", proficiency: "80%" },
  { name: "Embedded C", proficiency: "75%" },
  { name: "Assembly", proficiency: "70%" },
  { name: "LTSpice", proficiency: "65%" },
  { name: "MATLAB", proficiency: "60%" },
];

const Skills = () => {
  return (
    <div className="skills-page">
      <h2>My Skills</h2>
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
            <h3>{skill.name}</h3>
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
    </div>
  );
};

export default Skills;
