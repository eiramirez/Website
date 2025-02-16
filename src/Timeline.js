import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const timelineData = [
  {
    date: 'Nov 2023 - Dec 2023',
    title: 'DC Motor Project',
    location: 'Chico, CA, USA',
    description: 'Engineered a custom DC motor by upscaling a factory model by 350% with a 3D-printed shaft, commutator, and housing. Redesigned coil winding for continuous rotation at 3000RPM.',
  },
  {
    date: 'Oct 2021 - Mar 2024',
    title: 'Associate / Clean-Up Crew at In-N-Out Burger',
    location: 'Redding, CA',
    description: 'Diagnosed and repaired fryer screen malfunctions; assembled and maintained kitchen equipment, applying engineering skills to resolve mechanical and electrical issues.',
  },
  {
    date: 'April 2019 - Present',
    title: 'Custom PC Builds',
    location: 'Various',
    description: 'Created over 10 custom PC builds by analyzing budgets, selecting components, and troubleshooting BIOS/hardware integration for optimal performance.',
  },
  {
    date: 'Aug 2023 - Present',
    title: "Bachelor's in Computer Engineering",
    location: 'California State University, Chico',
    description: 'Pursuing a degree focusing on embedded systems, low-level programming, and hardware-software integration.',
  },
  {
    date: 'Aug 2021 - May 2023',
    title: 'Computer Engineering Program',
    location: 'Shasta College, Redding, CA',
    description: 'Studied core computer engineering principles, building a foundation in electronics, programming, and system design.',
  },
];

const Timeline = () => {
  return (
    <div className="timeline-page">
      <h2>My Journey</h2>
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
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-location">{item.location}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
