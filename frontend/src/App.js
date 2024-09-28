import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header section with navigation buttons */}
      <Header />

      {/* About section */}
      <About />

      {/* "Check Out My Work" button */}
      <motion.div whileHover={{ scale: 1.1 }} className="my-8">
        <a href="#projects" className="text-lg bg-mauvePink py-2 px-4 rounded-lg">
          Check Out My Work
        </a>
      </motion.div>

      {/* Projects section */}
      <Projects />

      {/* Contact section */}
      <Contact />
    </div>
  );
}

export default App;
