import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBookOpen, FaAward } from 'react-icons/fa';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <FaGraduationCap className="text-sm" />
            Academic Background
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Education & <span className="text-gradient">Qualifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Academic degree, specialization in AI & Machine Learning, and coursework.
          </motion.p>
        </div>

        {/* Education Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Institution Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-slate-800 border border-white/10 text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
                    <FaCalendarAlt /> {edu.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <FaMapMarkerAlt /> {edu.location}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-between">
                  <span className="text-sm font-bold text-indigo-300">{edu.degree}</span>
                  <span className="px-3 py-1 rounded-xl bg-indigo-600 text-white font-mono font-bold text-xs shadow-md">
                    {edu.cgpa || edu.percentage}
                  </span>
                </div>
              </div>

              {/* Coursework & Badges */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <FaBookOpen className="text-indigo-400" /> Relevant Coursework & Focus:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-xs text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                {edu.highlights && (
                  <p className="text-xs text-slate-400 pt-2 flex items-center gap-1.5 font-medium">
                    <FaAward className="text-amber-400 shrink-0 text-sm" />
                    <span>{edu.highlights}</span>
                  </p>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
