
import React from 'react';
import { motion } from 'framer-motion';
import {Github, Linkedin, Mail} from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Spotlight */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 font-light"
          >
            Hi, I'm Paras Soni —
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Building immersive, modern, and high-performance applications with cutting-edge technologies
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 63, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
            >
              View My Work
            </motion.button>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: 'https://github.com/Parxzz', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/paras-soni-067506347/', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email', onClick: scrollToContact }
              ].map(({ icon: Icon, href, label, onClick }) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full border border-white/20 hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center text-white/60"
            >
              
              
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
