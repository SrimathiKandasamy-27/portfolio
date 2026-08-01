import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaFilePdf, FaDownload, FaExternalLinkAlt, FaCheckCircle, FaEye } from 'react-icons/fa';

const Resume = () => {
  const { personal } = portfolioData;

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider"
          >
            <FaFilePdf className="text-sm" />
            Curriculum Vitae
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            My <span className="text-gradient">Resume</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Preview and download my full official resume document.
          </motion.p>
        </div>

        {/* Resume Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 max-w-4xl mx-auto space-y-8 shadow-2xl"
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-rose-600 to-indigo-600 text-white shadow-lg shadow-rose-600/30">
                <FaFilePdf className="text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Srimathi_K_Resume.pdf</h3>
                <p className="text-xs text-slate-400 flex items-center gap-2 mt-1">
                  <FaCheckCircle className="text-emerald-400" /> Official Document • B.Tech AI & ML Graduate
                </p>
              </div>
            </div>

            {/* Top Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                <FaExternalLinkAlt /> Open PDF
              </a>

              <a
                href={personal.resumeUrl}
                download="Srimathi_K_Resume.pdf"
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 transition-all"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>

          {/* Interactive PDF Preview Box */}
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-inner group">
            <iframe
              src={`${personal.resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Srimathi K Resume PDF Preview"
              className="w-full h-full rounded-2xl border-none"
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
              <span className="px-5 py-2.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold border border-white/20 flex items-center gap-2 shadow-2xl">
                <FaEye className="text-indigo-400" /> Interactive PDF Viewer
              </span>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs text-slate-400">
            <p>Need a direct copy emailed to you? Feel free to contact me below.</p>
            <div className="flex items-center gap-3">
              <a
                href={personal.resumeUrl}
                download="Srimathi_K_Resume.pdf"
                className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1.5"
              >
                <FaDownload /> Download Copy (.pdf)
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
