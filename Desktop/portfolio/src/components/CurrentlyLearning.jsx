import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function CurrentlyLearning() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const topics = [
    "Frontend Development",
    "Web Development",
    "Programming",
    "UI/UX Design",
    "PC Hardware"
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 text-electric-blue font-medium uppercase tracking-widest text-sm">
            <Sparkles size={16} />
            <span>Currently Learning</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-6">
            Exploring & Expanding
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm continuously learning through school projects, personal experiments, and hands-on exploration.
          </motion.p>

          <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-4">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="px-6 py-3 bg-dark-panel border border-dark-panel-border rounded-full text-white font-medium shadow-sm hover:border-electric-blue/50 hover:bg-dark-bg transition-colors"
              >
                {topic}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
