import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <nav className="bg-darkBlue p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <motion.a
            href="#about"
            className="text-warmBeige hover:text-mauvePink transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            About Me
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#projects"
            className="text-warmBeige hover:text-mauvePink transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Projects
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#contact"
            className="text-warmBeige hover:text-mauvePink transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
