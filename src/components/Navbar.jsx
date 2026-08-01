import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },

  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section active detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-indigo-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white group"
          >
            <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/30">
              <FaCode className="text-white text-base" />
            </div>
            <span className="font-extrabold tracking-wide">
              Srimathi Kandhasamy
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -z-10 shadow-md shadow-indigo-500/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Hire Me CTA Button */}
          <div className="hidden xl:block">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-full group bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 group-hover:from-indigo-500 group-hover:to-cyan-500 hover:text-white shadow-lg shadow-indigo-500/25 transition-transform duration-200 hover:scale-105"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#090d16] rounded-full group-hover:bg-opacity-0">
                Hire Me
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#0c1221]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/30"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
