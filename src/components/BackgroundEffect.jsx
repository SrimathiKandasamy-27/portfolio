import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Gradient Blob 1 - Top Left */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Animated Gradient Blob 2 - Middle Right */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Animated Gradient Blob 3 - Bottom Left */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 -left-20 w-[28rem] h-[28rem] bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none"
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
      />
    </div>
  );
};

export default BackgroundEffect;
