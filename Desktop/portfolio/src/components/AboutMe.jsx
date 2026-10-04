import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Code2, Cpu, Tv, Music } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const interests = [
    { name: 'Gaming', icon: <Gamepad2 size={18} /> },
    { name: 'Programming', icon: <Code2 size={18} /> },
    { name: 'PC Building', icon: <Cpu size={18} /> },
    { name: 'Anime', icon: <Tv size={18} /> },
    { name: 'Music', icon: <Music size={18} /> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* About Text */}
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
              About Me
              <div className="h-px bg-dark-panel-border flex-1"></div>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a 3rd-year Bachelor of Science in Information Technology student at National College of Science and Technology. I'm interested in both software and hardware, especially frontend development, programming, and PC technology.
              </p>
              <p>
                I'm still growing as a developer, but I enjoy learning by building projects, experimenting with different technologies, and understanding how things work. My goal is to continue improving my technical skills while creating useful and meaningful digital experiences.
              </p>
            </motion.div>
          </div>

          {/* Beyond the Screen */}
          <div className="bg-dark-panel border border-dark-panel-border p-8 rounded-2xl">
            <motion.h3 variants={itemVariants} className="text-xl font-semibold text-white mb-6">
              Beyond the Screen
            </motion.h3>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-dark-bg border border-dark-panel-border rounded-lg text-gray-300 hover:text-electric-blue hover:border-electric-blue/50 transition-all duration-300"
                >
                  <span className="text-electric-blue">{interest.icon}</span>
                  <span className="font-medium text-sm">{interest.name}</span>
                </div>
              ))}
            </motion.div>
            
            {/* Decorative circuit line */}
            <motion.div variants={itemVariants} className="mt-12 opacity-20">
              <svg width="100%" height="40" viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20H50L70 5H120L140 35H180L200 20H400" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="50" cy="20" r="3" fill="currentColor"/>
                <circle cx="120" cy="5" r="3" fill="currentColor"/>
                <circle cx="180" cy="35" r="3" fill="currentColor"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
