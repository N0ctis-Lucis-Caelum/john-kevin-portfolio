import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

// Custom SVG components for brand icons since they were removed from lucide-react
const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-dark-panel/30 border-t border-dark-panel-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-dark-bg border border-dark-panel-border rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <MessageSquare className="text-electric-blue" size={28} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Have a project, idea, or just want to connect? Feel free to reach out through my social channels.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://www.facebook.com/ikeepitmelo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-dark-bg border border-dark-panel-border rounded-xl text-white font-medium hover:border-electric-blue hover:text-electric-blue transition-all duration-300 group"
              aria-label="Facebook Profile"
            >
              <FacebookIcon size={20} className="group-hover:scale-110 transition-transform" />
              <span>Facebook</span>
            </a>
            
            <a 
              href="https://www.instagram.com/jhnkvnclbs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-dark-bg border border-dark-panel-border rounded-xl text-white font-medium hover:border-electric-blue hover:text-electric-blue transition-all duration-300 group"
              aria-label="Instagram Profile"
            >
              <InstagramIcon size={20} className="group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
