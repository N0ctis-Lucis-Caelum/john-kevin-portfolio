import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const skillCategories = [
    {
      title: "PROGRAMMING",
      skills: ["Java", "Python", "C++", "JavaScript", "PHP"]
    },
    {
      title: "WEB",
      skills: ["HTML", "CSS", "Bootstrap"]
    },
    {
      title: "DATABASE",
      skills: ["SQL", "MySQL"]
    },
    {
      title: "TOOLS",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Canva"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-dark-panel/30 border-y border-dark-panel-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
            <p className="text-gray-400 text-lg">Technologies and tools I've worked with throughout my studies and projects.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-dark-bg border border-dark-panel-border p-6 rounded-xl hover:border-electric-blue/30 transition-colors duration-300"
              >
                <h3 className="text-xs font-mono tracking-widest text-electric-blue mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex} 
                      className="px-3 py-1 bg-dark-panel text-gray-300 text-sm font-medium rounded-md border border-dark-panel-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-sm font-medium text-gray-500 inline-flex items-center gap-2 bg-dark-panel px-4 py-2 rounded-full border border-dark-panel-border">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
              Currently learning and continuously improving.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
