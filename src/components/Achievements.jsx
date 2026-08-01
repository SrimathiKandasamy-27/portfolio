import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaTrophy, FaMedal, FaCalendarAlt, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const Achievements = () => {
  const { achievements, personal } = portfolioData;

  const codingProfiles = [
    { name: 'LeetCode', icon: <SiLeetcode />, url: personal.socials.leetcode.url, color: 'hover:text-amber-400 border-amber-500/20' },
    { name: 'HackerRank', icon: <SiHackerrank />, url: personal.socials.hackerrank.url, color: 'hover:text-emerald-400 border-emerald-500/20' },
    { name: 'CodeChef', icon: <SiCodechef />, url: personal.socials.codechef.url, color: 'hover:text-yellow-400 border-yellow-500/20' },
    { name: 'GeeksforGeeks', icon: <SiGeeksforgeeks />, url: personal.socials.geeksforgeeks.url, color: 'hover:text-green-400 border-green-500/20' },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider"
          >
            <FaTrophy className="text-sm" />
            Honors & Awards
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Achievements & <span className="text-gradient">Hackathons</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Hackathon prizes, coding competition accolades, and algorithmic profiles.
          </motion.p>
        </div>

        {/* Hackathon Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Background Accent Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30">
                    <FaMedal className="text-2xl" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 flex items-center gap-1.5">
                    <FaCalendarAlt /> {item.date}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-indigo-400 mt-1">
                    {item.event}
                  </h4>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Verified Winner</span>
                <span className="text-amber-400 font-bold">Awarded</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl border border-white/10 space-y-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 text-2xl">
                <FaCode />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Competitive Coding Profiles</h3>
                <p className="text-xs text-slate-400">Active profiles across major algorithmic platforms</p>
              </div>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-slate-800 text-xs font-mono font-semibold text-indigo-300 border border-white/10">
              Handle: SRIMATHIKANDASAMY
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {codingProfiles.map((platform, pIdx) => (
              <a
                key={pIdx}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-2xl bg-slate-900/60 border border-white/5 ${platform.color} hover:bg-white/5 text-slate-300 transition-all duration-300 flex items-center justify-between group`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{platform.icon}</span>
                  <span className="text-xs font-semibold">{platform.name}</span>
                </div>
                <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
