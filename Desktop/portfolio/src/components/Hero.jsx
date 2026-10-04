import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-electric-blue opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-electric-blue opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4 text-electric-blue">
            <Terminal size={16} />
            <span className="text-sm font-mono tracking-wider uppercase">System Initialized</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            John Kevin <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Cebrian Calibuso
            </span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-lg md:text-xl text-electric-blue font-medium mb-6 tracking-wide">
            BSIT Student &middot; Frontend Developer &middot; PC &amp; Hardware Enthusiast
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            I'm a 3rd-year BSIT student exploring web development, programming, and computer hardware. I enjoy turning ideas into functional digital experiences while learning how technology works from both the software and hardware side.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-electric-blue text-dark-bg font-medium rounded hover:bg-blue-400 transition-colors flex items-center gap-2"
            >
              View My Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-dark-panel-border text-white font-medium rounded hover:bg-dark-panel transition-colors"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          {/* Decorative frame */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 border border-dark-panel-border rounded-2xl transform rotate-3 scale-105 transition-transform duration-500 hover:rotate-6"></div>
            <div className="absolute inset-0 border border-electric-blue/30 rounded-2xl transform -rotate-3 scale-105 transition-transform duration-500 hover:-rotate-6"></div>
            
            <div className="absolute inset-0 bg-dark-panel rounded-2xl overflow-hidden z-10 flex items-center justify-center">
              <img
                src="/images/profile.jpg"
                alt="John Kevin Cebrian Calibuso"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%234b5563" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>';
                  e.target.className = "w-full h-full object-cover p-12 opacity-20";
                }}
              />
            </div>

            {/* Futuristic Tech Labels */}
            <div className="absolute -right-4 top-10 bg-dark-bg border border-dark-panel-border px-3 py-1 rounded text-xs font-mono text-gray-500 z-20 flex items-center gap-2 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse"></span>
              DEV_MODE: ACTIVE
            </div>
            <div className="absolute -left-4 bottom-10 bg-dark-bg border border-dark-panel-border px-3 py-1 rounded text-xs font-mono text-gray-500 z-20 shadow-lg">
              ID: JKC-01
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
