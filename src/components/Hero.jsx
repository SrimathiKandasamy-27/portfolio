import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaDownload, 
  FaBriefcase, 
  FaRocket, 
  FaGraduationCap
} from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const Hero = () => {
  const { personal } = portfolioData;

  // Custom Typing Effect
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = personal.typingTitles[textIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 2200; // Pause at end of word
      const timer = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % personal.typingTitles.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, personal.typingTitles]);

  const displayedText = personal.typingTitles[textIndex].substring(0, charIndex);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Full-Time & Freelance Roles
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-medium text-slate-400">
                Hello World, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                <span className="text-gradient">Srimathi Kandhasamy</span>
              </h1>
            </div>

            {/* Typewriter Title */}
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl font-semibold text-slate-300">
                I am a{' '}
                <span className="text-cyan-400 font-mono border-b-2 border-indigo-500 pb-0.5">
                  {displayedText}
                </span>
                <span className="animate-pulse text-indigo-400 ml-1">|</span>
              </span>
            </div>

            {/* Resume Summary / Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={personal.resumeUrl}
                download="Srimathi_K_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 transition-all duration-300"
              >
                <FaDownload className="text-base" />
                Download Resume
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:text-white hover:border-indigo-500/50 hover:scale-105 transition-all duration-300"
              >
                <FaRocket className="text-base text-indigo-400" />
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm hover:scale-105 transition-all duration-300"
              >
                <FaBriefcase className="text-base text-purple-400" />
                Hire Me
              </a>
            </div>

            {/* Social Icons Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Connect With Me:
              </span>
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <a
                  href="https://github.com/SrimathiKandasamy-27"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-800/60 hover:bg-indigo-600/20 text-slate-300 hover:text-indigo-400 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:scale-110"
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/srimathi-kandhasamy-395ba2281/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-800/60 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="text-xl" />
                </a>

                <a
                  href="https://leetcode.com/u/SRIMATHIKANDASAMY/"
                  target="_blank"
                  rel="noreferrer"
                  title="LeetCode Profile"
                  className="p-3 rounded-xl bg-slate-800/60 hover:bg-amber-600/20 text-slate-300 hover:text-amber-400 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:scale-110"
                >
                  <SiLeetcode className="text-xl" />
                </a>

                <a
                  href="https://www.hackerrank.com/profile/23ALR103"
                  target="_blank"
                  rel="noreferrer"
                  title="HackerRank Profile"
                  className="p-3 rounded-xl bg-slate-800/60 hover:bg-emerald-600/20 text-slate-300 hover:text-emerald-400 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:scale-110"
                >
                  <SiHackerrank className="text-xl" />
                </a>

                <a
                  href="mailto:srimathik273@gmail.com"
                  title="Direct Email"
                  className="p-3 rounded-xl bg-slate-800/60 hover:bg-rose-600/20 text-slate-300 hover:text-rose-400 border border-white/5 hover:border-rose-500/30 transition-all duration-300 hover:scale-110"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Image & Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 blur-2xl opacity-60 animate-pulse-slow" />
              
              {/* Main Avatar Container */}
              <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-2xl overflow-hidden glass-card">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover rounded-[22px] transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>

              {/* Floating Badge 1 - B.Tech CGPA */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="p-3 rounded-xl bg-indigo-600/30 text-indigo-400">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Kongu Eng College</p>
                  <p className="text-sm font-bold text-white">8.26 CGPA (AI & ML)</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Projects Delivered */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="p-3 rounded-xl bg-purple-600/30 text-purple-400">
                  <FaBriefcase className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Outliers United</p>
                  <p className="text-sm font-bold text-white">3+ Client Projects</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
