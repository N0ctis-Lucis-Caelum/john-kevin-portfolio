import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-dark-panel/30 border-y border-dark-panel-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>

          <div className="bg-dark-bg border border-dark-panel-border rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Subtle glow on the side */}
            <div className="absolute top-0 left-0 w-1 h-full bg-electric-blue rounded-l-2xl"></div>
            
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 relative z-10">
              <div className="bg-dark-panel p-4 rounded-xl border border-dark-panel-border shrink-0">
                <GraduationCap className="text-electric-blue" size={32} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-bold text-white">National College of Science and Technology</h3>
                  <span className="inline-block px-3 py-1 bg-electric-blue/10 text-electric-blue text-sm font-semibold rounded-full border border-electric-blue/20 whitespace-nowrap">
                    3rd Year
                  </span>
                </div>
                
                <h4 className="text-lg text-gray-300 font-medium mb-4">Bachelor of Science in Information Technology</h4>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                  <MapPin size={16} />
                  <span>Philippines</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
