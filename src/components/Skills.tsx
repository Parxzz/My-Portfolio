
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: 'Java', icon: '☕' },
    { name: 'Data Structures & Algorithms', icon: '🧮' },
    { name: 'OOPs', icon: '🏗️' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'Power BI', icon: '📊' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '💨' }
  ];

  const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.1 * index, duration: 0.6 }}
        whileHover={{ 
          scale: 1.1, 
          y: -10,
          transition: { duration: 0.2 }
        }}
        className="group relative"
      >
        <div className="relative flex flex-col items-center space-y-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-400/50 transition-all duration-300 h-full">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/20 via-indigo-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          
          {/* Icon with Animation */}
          <motion.div
            whileHover={{ 
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 group-hover:bg-gradient-to-br group-hover:from-purple-400/40 group-hover:to-blue-400/40 transition-all duration-300"
          >
            <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
          </motion.div>

          {/* Skill Name */}
          <h3 className="text-center font-semibold text-white text-sm leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
            {skill.name}
          </h3>

          {/* Animated Border */}
          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Spotlight */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      
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
              My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
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
              A comprehensive overview of my technical expertise and technologies I work with
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Floating Animation Elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-indigo-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
