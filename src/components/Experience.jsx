import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaProjectDiagram } from 'react-icons/fa';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider"
          >
            <FaBriefcase className="text-sm" />
            Professional Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Freelance project leadership, full-stack application development, and client delivery.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2" />

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12 md:mb-16"
            >
              {/* Timeline Center Dot Icon */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/40 z-10 border-4 border-[#090d16]">
                <FaBriefcase className="text-sm" />
              </div>

              {/* Card Container */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:odd:ml-auto md:odd:pl-12 md:odd:pr-0">
                <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 relative group">
                  
                  {/* Company & Role Header */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30 flex items-center gap-1.5">
                        <FaCalendarAlt /> {exp.duration}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <FaMapMarkerAlt /> {exp.location} ({exp.type})
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-purple-400 flex items-center gap-2">
                      <FaProjectDiagram /> {exp.company}
                    </h4>
                  </div>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Key Responsibilities & Achievements:
                    </h5>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <FaCheckCircle className="text-indigo-400 text-base shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.skillsUsed.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg bg-slate-800/90 text-xs font-medium text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
