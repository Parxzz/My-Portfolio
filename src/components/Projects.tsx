import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  const projects = [
    {
      id: 1,
      title: '🛍️ Shree Fashion E-Commerce',
      description: 'Built a fully responsive clothing e-commerce platform using React.js (TypeScript), TailwindCSS, Redux Toolkit, GSAP animations, and a Node.js (TypeScript) backend. Features elegant UI with smooth GSAP animations, product filtering by categories, cart & checkout flow, user authentication, and mobile-first responsive design.',
      image: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1600',
      tech: ['React.js', 'TypeScript', 'TailwindCSS', 'Redux Toolkit', 'GSAP', 'Node.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Parxzz/Shree-Fashion'
    },
    {
      id: 2,
      title: 'Invoice Processing System',
      description: 'A full-stack web application for managing invoices with real-time updates. Features include add, view, and delete invoices, status tracking, and persistent storage in SQL. Built with React.js (MUI) frontend, Spring Boot backend with Hibernate, and MySQL database for secure invoice storage.',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1600',
      tech: ['React.js', 'Material-UI', 'Spring Boot', 'MySQL', 'Hibernate'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Parxzz/Invoice-Processing-System'
    },
    {
      id: 3,
      title: 'Power BI Sales Dashboard',
      description: 'Incorporated data analysis specification in time series analysis to deliver valuable insights, accurate sales forecasting, and interactive dashboard creation for business success. Features comprehensive data visualization and analytics capabilities.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1600',
      tech: ['Microsoft Power BI', 'Data Analysis', 'Sales Forecasting'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Parxzz/Sales-Dashboard-Power-BI'
    },
    {
      id: 4,
      title: '🤖 Jarvis Voice Assistant',
      description: 'Built a voice assistant using JavaScript and Python that can perform tasks like searching, playing music/videos, opening requested sites, fetching system information, and accessing data from Gemini API. Features real-time voice recognition, natural language processing, and task automation.',
      image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1600',
      tech: ['JavaScript', 'HTML', 'CSS', 'Voice Recognition'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Parxzz/Jarvis-Voice-Assistant'
    },
    {
      id: 5,
      title: 'UI/UX Design Projects',
      description: 'A collection of modern UI/UX design projects including Gaming Ninja Website, Modern Educational Web Platform, and Modern Shoe Website. These projects showcase creative design thinking, user experience optimization, and modern interface design principles.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600',
      tech: ['UI/UX Design', 'Figma', 'Adobe XD', 'Web Design', 'User Experience'],
      liveUrl: '#',
      linkedinUrl: 'https://www.linkedin.com/in/paras-soni-067506347/details/projects/'
    }
  ];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"
          />
        </div>

        {/* Main Project Display */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] md:h-[600px] sm:h-[500px] rounded-3xl overflow-hidden group"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Glassmorphic Card Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 md:p-8 max-w-2xl w-full text-center shadow-2xl max-h-[450px] md:max-h-none overflow-y-auto md:overflow-visible scrollbar-none"
                  style={{
                    WebkitScrollbar: 'none',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none'
                  } as React.CSSProperties}
                >
                  {/* Project Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight"
                  >
                    {projects[currentProject].title}
                  </motion.h3>

                  {/* Project Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/90 text-sm md:text-lg leading-relaxed mb-4 md:mb-8"
                  >
                    {projects[currentProject].description}
                  </motion.p>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-8"
                  >
                    {projects[currentProject].tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                        }}
                        className="relative px-2 md:px-4 py-1 md:py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs md:text-sm text-white font-medium cursor-pointer transition-all duration-300 group/tech
                                  hover:bg-white/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/20"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/tech:opacity-100 group-hover/tech:animate-pulse transition-opacity duration-300" />
                        <div className="absolute inset-0 rounded-full border border-purple-400/0 group-hover/tech:border-purple-400/60 transition-all duration-300" />
                        <span className="relative z-10">{tech}</span>
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Button with Dynamic Icon */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex justify-center"
                  >
<motion.a
  href={projects[currentProject].id === 5 
        ? projects[currentProject].linkedinUrl 
        : projects[currentProject].githubUrl}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-4 md:px-8 py-2 md:py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
>
  {projects[currentProject].id === 5 ? (
    <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
  ) : (
    <Github size={16} className="md:w-[18px] md:h-[18px]" />
  )}
  <span>{projects[currentProject].id === 5 ? 'View Design' : 'View Code'}</span>
</motion.a>

                  </motion.div>
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/10 via-indigo-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center mt-8 md:mt-12 space-x-3">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToProject(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentProject === index
                  ? 'bg-gradient-to-r from-purple-400 to-blue-400 scale-125 shadow-lg shadow-purple-400/30'
                  : 'bg-white/30 hover:bg-white/50 hover:shadow-md hover:shadow-white/20'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-6 md:mt-8">
          <span className="text-white/50 text-sm block mb-2">
            {currentProject + 1} / {projects.length}
          </span>
          <span className="text-white/40 text-xs">
            Use dots to navigate • Explore Paras Soni's featured projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
