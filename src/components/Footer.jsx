import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaCode, FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaChevronUp } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060911] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 - Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 text-xl font-bold text-white">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600">
                <FaCode className="text-white text-base" />
              </div>
              <span className="font-extrabold tracking-wide">
                Srimathi<span className="text-indigo-400">.K</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Full-Stack Web & Mobile Developer specializing in React.js, React Native, Firebase, and AI/Machine Learning models. Building seamless, intuitive digital experiences.
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <a href="#about" className="hover:text-indigo-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
              <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
              <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-indigo-400 transition-colors">Certifications</a>
              <a href="#achievements" className="hover:text-indigo-400 transition-colors">Achievements</a>
              <a href="#resume" className="hover:text-indigo-400 transition-colors">Resume</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Col 3 - Socials & Back to top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Follow Me</h4>
            <div className="flex items-center gap-3">
              <a
                href={personal.socials.github.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-all"
                title="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={personal.socials.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all"
                title="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={personal.socials.leetcode.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-amber-600 text-slate-300 hover:text-white transition-all"
                title="LeetCode"
              >
                <SiLeetcode className="text-lg" />
              </a>
              <a
                href={personal.socials.hackerrank.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white transition-all"
                title="HackerRank"
              >
                <SiHackerrank className="text-lg" />
              </a>
              <a
                href={personal.socials.email}
                className="p-3 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition-all"
                title="Email"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-indigo-400 transition-colors pt-2"
            >
              Back to Top <FaChevronUp className="text-xs" />
            </button>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Srimathi K. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FaHeart className="text-rose-500 text-xs inline" /> using React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
