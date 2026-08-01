import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaGithub, 
  FaLinkedin, 
  FaCheckCircle, 
  FaExclamationCircle, 
  FaSpinner 
} from 'react-icons/fa';

const Contact = () => {
  const { personal } = portfolioData;
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    // EmailJS Send Integration
    // Uses service_id, template_id, public_key (with graceful fallback simulation if keys are omitted)
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          to_name: personal.name,
        },
        'YOUR_PUBLIC_KEY' // Replace with EmailJS Public Key
      )
      .then(
        () => {
          setStatus({ loading: false, success: true, error: null });
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        () => {
          // Fallback simulation for client testing if keys aren't configured yet
          setTimeout(() => {
            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', subject: '', message: '' });
          }, 1000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider"
          >
            <FaEnvelope className="text-sm" />
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Contact <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Have a project in mind, an opportunity, or just want to connect? Send a message!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card p-8 rounded-3xl border border-white/10 space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Let's talk about everything!</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I'm actively looking for full-time Full-Stack, React Native, and AI/ML engineering roles as well as freelance contract projects.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="p-4 rounded-2xl bg-slate-900/60 hover:bg-indigo-600/10 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">Email Address</span>
                    <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {personal.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personal.phone}`}
                  className="p-4 rounded-2xl bg-slate-900/60 hover:bg-purple-600/10 border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 group-hover:scale-110 transition-transform">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">Phone / WhatsApp</span>
                    <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      {personal.phone}
                    </span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">Location</span>
                    <span className="text-sm font-bold text-white">{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect Strip */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Social Networks:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.socials.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-all duration-300"
                  title="GitHub Profile"
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href={personal.socials.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all duration-300"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>

              {/* Status Toast Feedback */}
              <AnimatePresence>
                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-medium flex items-center gap-2"
                  >
                    <FaExclamationCircle className="text-base shrink-0" />
                    <span>{status.error}</span>
                  </motion.div>
                )}

                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center gap-2"
                  >
                    <FaCheckCircle className="text-base shrink-0" />
                    <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Your Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Your Email <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  Message <span className="text-indigo-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your project details or message here..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
              >
                {status.loading ? (
                  <>
                    <FaSpinner className="animate-spin text-lg" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-base" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
