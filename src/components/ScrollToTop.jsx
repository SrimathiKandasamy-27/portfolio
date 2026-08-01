import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-2xl shadow-indigo-600/40 hover:scale-110 active:scale-95 transition-transform duration-300 group focus:outline-none"
          aria-label="Scroll to top"
        >
          {/* Circular Progress Ring */}
          <svg className="w-10 h-10 -rotate-90 pointer-events-none absolute -inset-0.5">
            <circle
              cx="22"
              cy="22"
              r="18"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/20"
              fill="transparent"
            />
            <circle
              cx="22"
              cy="22"
              r="18"
              stroke="currentColor"
              strokeWidth="2"
              className="text-cyan-400"
              fill="transparent"
              strokeDasharray="113.097"
              strokeDashoffset={113.097 - (113.097 * scrollProgress) / 100}
              strokeLinecap="round"
            />
          </svg>

          <FaArrowUp className="text-base group-hover:-translate-y-0.5 transition-transform relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
