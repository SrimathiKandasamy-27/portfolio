import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaRocket, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaExclamationTriangle, FaTrophy } from 'react-icons/fa';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mobile & Web App', 'E-Commerce Web', 'AgriTech Mobile App', 'AI / Computer Vision'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider"
          >
            <FaRocket className="text-sm" />
            Featured Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Portfolio <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Full-stack web applications, cross-platform mobile apps, and deep learning computer vision models.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group shadow-xl hover:border-indigo-500/50 hover:shadow-indigo-500/20"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-xs font-semibold text-indigo-300 border border-white/10">
                      {project.category} ({project.year})
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features Bullet List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <FaCheckCircle className="text-indigo-400" /> Key Features:
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-300">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenge & Outcome */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900/80 border border-white/5 text-xs">
                      <div>
                        <span className="font-semibold text-amber-400 flex items-center gap-1 mb-1">
                          <FaExclamationTriangle /> Challenge
                        </span>
                        <p className="text-slate-400">{project.challenges}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-emerald-400 flex items-center gap-1 mb-1">
                          <FaTrophy /> Outcome
                        </span>
                        <p className="text-slate-400">{project.outcome}</p>
                      </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="px-6 pb-6 pt-0 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
                  >
                    <FaGithub className="text-base" /> GitHub Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
