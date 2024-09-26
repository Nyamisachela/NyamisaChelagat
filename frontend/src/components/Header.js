import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="py-20 bg-grayPurple text-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-4xl font-bold"
      >
        Hi, I'm <span className="text-warmBeige">Nyamisa Chelagat</span>
      </motion.h1>
    </header>
  );
};

export default Header;
