import React from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-500 selection:text-white font-sans overflow-hidden">
      {/* Dynamic Animated Ambient Background */}
      <BackgroundEffect />

      {/* Main Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          
          <Achievements />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
