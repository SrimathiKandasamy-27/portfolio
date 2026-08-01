import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaCertificate, FaExternalLinkAlt, FaCheckCircle, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider"
          >
            <FaCertificate className="text-sm" />
            Verified Skills
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Certifications & <span className="text-gradient">Credentials</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Professional development, domain specializations, and certified expertise.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md">
                    <FaCertificate className="text-2xl" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1">
                    <FaCheckCircle /> Verified
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {cert.title}
                </h3>

                <div className="space-y-2 text-xs text-slate-300">
                  <p className="flex items-center gap-2">
                    <FaBuilding className="text-purple-400" /> {cert.organization}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-indigo-400" /> Issued: {cert.date}
                  </p>
                  {cert.credentialId && (
                    <p className="font-mono text-slate-400 text-[11px]">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-purple-600 text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-300 border border-white/10"
              >
                <FaExternalLinkAlt /> Verify Credential
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
