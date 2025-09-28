
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Globe, Smartphone, Palette, Database} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Creating responsive, modern websites and web applications using the latest technologies like React, Node.js, and modern frameworks.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Modern UI/UX'],
    },
    {
      icon: Smartphone,
      title: 'Application Development',
      description: 'Building robust desktop and mobile applications with clean architecture, scalable solutions, and user-friendly interfaces.',
      features: ['Cross-Platform', 'Native Performance', 'Offline Support', 'Push Notifications'],
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Crafting visually appealing designs, logos, and brand identities that communicate your message effectively and leave lasting impressions.',
      features: ['Brand Identity', 'Logo Design', 'UI/UX Design', 'Print Design'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Developing secure, scalable backend systems with robust APIs, database design, and cloud integration for enterprise-level applications.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Security Implementation'],
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
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
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '4rem' } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-white/70 mt-4 max-w-2xl mx-auto"
            >
              Comprehensive solutions tailored to bring your ideas to life with cutting-edge technology
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Glassmorphic Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-purple-400/50 transition-all duration-500">
                  {/* Gradient Glow Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                        <span className="text-white/60 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/5 via-indigo-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
