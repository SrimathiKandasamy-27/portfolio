import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaBullseye, FaLightbulb, FaHeart, FaLayerGroup, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider"
          >
            <FaBullseye className="text-sm" />
            Discover My Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Driven by curiosity and a commitment to engineering high-performance Web, Mobile, and AI solutions.
          </motion.p>
        </div>

        {/* Top Key Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {about.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-2xl text-center border border-white/10"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">
                {stat.value}
                <span className="text-sm font-normal text-indigo-400 ml-1">{stat.suffix}</span>
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Objective Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400">
                  <FaBullseye className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Career Objective & Vision</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-base">
                {about.objective}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                <FaCheckCircle /> Highlights & Accomplishments
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {about.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Strengths Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-3xl border border-white/10 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400">
                  <FaLightbulb className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-white">Core Strengths</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.strengths.map((strength, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-white/10 text-xs font-medium text-slate-200 hover:border-indigo-500/40 transition-colors"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Areas of Interest Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 rounded-3xl border border-white/10 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400">
                  <FaHeart className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-white">Areas of Interest</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/20 text-xs font-semibold text-indigo-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
