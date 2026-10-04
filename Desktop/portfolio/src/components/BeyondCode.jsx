import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Monitor } from 'lucide-react';

export default function BeyondCode() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const interests = [
    {
      title: "PC Building",
      icon: <HardDrive className="text-electric-blue" size={32} />,
      desc: "I enjoy exploring computer components and learning how different parts work together."
    },
    {
      title: "Hardware",
      icon: <Cpu className="text-electric-blue" size={32} />,
      desc: "I'm interested in computer hardware, components, troubleshooting, and understanding systems beyond the software layer."
    },
    {
      title: "Technology & Gaming",
      icon: <Monitor className="text-electric-blue" size={32} />,
      desc: "Gaming and technology are some of the things that keep me curious about computers and what they can do."
    }
  ];

  return (
    <section id="beyond" className="py-24 relative bg-dark-bg">
      {/* Abstract Hardware Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Beyond the Code</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Technology isn't only about writing code. I'm also interested in understanding the hardware and systems that make the technology we use possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative bg-dark-panel border border-dark-panel-border p-8 rounded-xl overflow-hidden group hover:border-electric-blue/30 transition-all duration-300"
              >
                {/* Circuit-like decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0V50H100" stroke="#0ea5e9" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="4" fill="#0ea5e9"/>
                  </svg>
                </div>

                <div className="mb-6 bg-dark-bg w-16 h-16 rounded-lg flex items-center justify-center border border-dark-panel-border group-hover:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-shadow duration-300">
                  {interest.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{interest.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {interest.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
