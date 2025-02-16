import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <h2>Projects</h2>
      <div className="project">
        <h3>DC Motor Project</h3>
        <p>
          Engineered a custom DC motor by upscaling a factory model by 350% using a 3D-printed shaft, commutator, and housing. Redesigned the coil winding for continuous rotation at 3000RPM.
        </p>
      </div>
      <div className="project">
        <h3>Custom PC Builds</h3>
        <p>
          Created over 10 custom PC builds by analyzing budgets from $400 to $2,600. This involved systematic component selection, technical troubleshooting for BIOS and hardware integration, and ensuring optimal system performance.
        </p>
      </div>
      <p>More projects, photos, and videos coming soon!</p>
    </div>
  );
};

export default Projects;
