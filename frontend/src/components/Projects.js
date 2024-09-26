import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from backend API
    fetch('http://localhost:5000/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="py-20 bg-grayPurple text-center">
      <h2 className="text-3xl mb-8 font-semibold text-warmBeige">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-mauvePink h-48 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

