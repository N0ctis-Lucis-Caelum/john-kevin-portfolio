import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users, User } from 'lucide-react';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const projects = [
    {
      name: "K's AI",
      type: "Individual Project · UI/UX Design",
      icon: <User size={14} />,
      description: "K's AI is an AI chat interface concept designed in Figma, inspired by modern conversational AI experiences. The project focuses on interface design, layout, and user experience rather than implementing an actual AI backend.",
      technologies: ["Figma"],
      linkText: "View Design",
      linkUrl: "#", // Placeholder
      note: "Design Concept Only"
    },
    {
      name: "Chess Game",
      type: "Group Project",
      icon: <Users size={14} />,
      description: "A group project involving the development of a chess game using Java, CSS, and MySQL. Displayed here as a collaborative learning experience from my coursework.",
      technologies: ["Java", "CSS", "MySQL"],
      linkText: null,
      linkUrl: null,
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
              Featured Projects
              <div className="h-px bg-dark-panel-border flex-1"></div>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">A selection of projects I've worked on while learning and exploring technology.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative bg-dark-panel border border-dark-panel-border rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300 flex flex-col h-full"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                
                <div className="flex items-center gap-2 mb-2 text-electric-blue text-sm font-medium">
                  {project.icon}
                  <span>{project.type}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span key={tIndex} className="text-xs font-mono text-gray-500 bg-dark-bg px-2 py-1 rounded border border-dark-panel-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.linkText && (
                    <a 
                      href={project.linkUrl}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-electric-blue transition-colors"
                      onClick={(e) => { if (project.linkUrl === '#') e.preventDefault(); }}
                    >
                      {project.linkText}
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                
                {project.note && (
                  <div className="absolute top-0 right-0 bg-dark-bg border-b border-l border-dark-panel-border px-3 py-1 rounded-bl-lg rounded-tr-xl text-xs font-mono text-gray-500">
                    {project.note}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
