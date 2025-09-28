
import React from 'react';
import { motion } from 'framer-motion';
import {Github, Linkedin, Twitter, Mail, ArrowUp} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Parxzz', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/paras-soni-067506347/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Gradient Wave Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400"></div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Paras Soni
            </h3>
            <p className="text-white/70 leading-relaxed">
              Passionate software developer creating innovative solutions that make a difference. 
              Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={href === '#contact' ? (e) => { e.preventDefault(); scrollToSection('#contact'); } : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon size={18} className="text-white/70 group-hover:text-purple-400 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5 }}
                  className="text-white/70 hover:text-purple-400 transition-colors duration-300 text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3 text-white/70">
              <p>paras35777@gmail.com</p>
              <p>+91 9993047137</p>
              <p>Jabalpur, MP</p>
            </div>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <ArrowUp size={18} />
              <span>Back to Top</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60">
              © 2025 Paras Soni. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <motion.button
                whileHover={{ color: '#a855f7' }}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Privacy Policy
              </motion.button>
              <motion.button
                whileHover={{ color: '#a855f7' }}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Terms of Service
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-t from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-t from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
