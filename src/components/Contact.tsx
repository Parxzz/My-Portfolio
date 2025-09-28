
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Mail, Phone, MapPin, Send, Github, Linkedin, Twitter} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'paras35777@gmail.com',
      href: 'mailto:paras35777@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9993047137',
      href: 'tel:+919993047137'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jabalpur, MP',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Parxzz',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/paras-soni-067506347/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Let's Build Something Great Together
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-lg max-w-2xl mx-auto"
            >
              Ready to start your next project? Let's discuss how we can bring your ideas to life.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="space-y-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:border-purple-400 focus:outline-none transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                  <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                      formData.name || focusedField === 'name'
                        ? '-top-2 text-sm bg-black px-2 text-purple-400'
                        : 'top-4 text-white/60'
                    }`}
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:border-purple-400 focus:outline-none transition-all duration-300"
                    placeholder="Your Email"
                    required
                  />
                  <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                      formData.email || focusedField === 'email'
                        ? '-top-2 text-sm bg-black px-2 text-purple-400'
                        : 'top-4 text-white/60'
                    }`}
                  >
                    Your Email
                  </label>
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:border-purple-400 focus:outline-none transition-all duration-300"
                    placeholder="Subject"
                    required
                  />
                  <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                      formData.subject || focusedField === 'subject'
                        ? '-top-2 text-sm bg-black px-2 text-purple-400'
                        : 'top-4 text-white/60'
                    }`}
                  >
                    Subject
                  </label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:border-purple-400 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Your Message"
                    required
                  />
                  <label
                    className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                      formData.message || focusedField === 'message'
                        ? '-top-2 text-sm bg-black px-2 text-purple-400'
                        : 'top-4 text-white/60'
                    }`}
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-400/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.label}</h4>
                      <p className="text-white/70">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 }}
                className="pt-8"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-purple-400 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
