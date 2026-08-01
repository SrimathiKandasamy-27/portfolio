import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaLaptopCode, FaCode, FaMobileAlt, FaBrain, FaDatabase, FaTools, FaUserCheck, FaJava } from 'react-icons/fa';
import { 
  SiJavascript, 
  SiPython, 
  SiC, 
  SiReact, 
  SiTailwindcss, 
  SiHtml5, 
  SiNodedotjs, 
  SiFirebase, 
  SiMysql, 
  SiTensorflow, 
  SiOpencv, 
  SiNumpy, 
  SiGithub, 
  SiFigma 
} from 'react-icons/si';

const iconMap = {
  SiJava: <FaJava />,
  SiJavascript: <SiJavascript />,
  SiPython: <SiPython />,
  SiC: <SiC />,
  SiReact: <SiReact />,
  SiTailwindcss: <SiTailwindcss />,
  SiHtml5: <SiHtml5 />,
  SiNodedotjs: <SiNodedotjs />,
  SiFirebase: <SiFirebase />,
  SiMysql: <SiMysql />,
  SiTensorflow: <SiTensorflow />,
  SiOpencv: <SiOpencv />,
  SiNumpy: <SiNumpy />,
  SiGithub: <SiGithub />,
  SiVisualstudiocode: <FaCode />,
  SiFigma: <SiFigma />
};

const categoryIcons = {
  languages: <FaCode />,
  web: <FaLaptopCode />,
  mobile: <FaMobileAlt />,
  aiml: <FaBrain />,
  database: <FaDatabase />,
  tools: <FaTools />,
  soft: <FaUserCheck />
};

const Skills = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const displayedCategories = activeTab === 'all'
    ? skills.categories
    : skills.categories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider"
          >
            <FaLaptopCode className="text-sm" />
            Technical Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Categorized technical stack, frameworks, machine learning libraries, and core concepts.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            All Categories
          </button>
          {skills.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-indigo-400">{categoryIcons[cat.id]}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedCategories.map((category) => (
              <div
                key={category.id}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 text-xl">
                      {categoryIcons[category.id] || <FaCode />}
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Category Items */}
                  <div className="space-y-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                          <span className="flex items-center gap-2 text-slate-200">
                            <span className="text-base" style={{ color: item.color || '#6366f1' }}>
                              {iconMap[item.icon] || <FaCode />}
                            </span>
                            {item.name}
                          </span>
                          <span className="text-indigo-400 font-mono font-semibold">{item.level}%</span>
                        </div>

                        {/* Animated Progress Bar */}
                        <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-sm"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Skills;
