
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, Coffee, Users, Calendar, Mail, MapPin, GraduationCap, ExternalLink } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1
  });

  const personalInfo = [
  {
    icon: Calendar,
    label: 'Birthday',
    value: '20/08/2004 (Age 21)'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'paras35777@gmail.com'
  },
  {
    icon: GraduationCap,
    label: 'Degree',
    value: 'B.Tech (IT)'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Jabalpur, India'
  }];


  const virtualInternships = [
  {
    company: 'Deloitte Australia',
    role: 'Data Analytics Virtual Experience',
    description: 'Completed a comprehensive data analysis simulation involving real-world business scenarios.',
    achievements: [
    'Completed a Deloitte job simulation involving data analysis',
    'Created a data dashboard using Tableau',
    'Used Excel to classify data and draw business conclusions'],

    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7345800088943812608/',
    logo: '📊'
  },
  {
    company: 'J.P. Morgan',
    role: 'Software Engineering Virtual Experience',
    description: 'Gained hands-on experience with backend systems and modern development practices.',
    achievements: [
    'Use Kafka to receive transactions',
    'Work with Spring Boot and Java 17',
    'Connect to a database (H2) and save data',
    'Call an external API and handle the response',
    'Build a REST API to check user balances'],

    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7342515858918764544/',
    logo: '💼'
  }];


  const highlights = [
  {
    icon: Code,
    title: 'Fresher',
    // value: '2+ Years',
    description: 'Software Engineer'
  },
  {
    icon: Coffee,
    title: 'Technologies',
    // value: '10+',
    description: 'Modern Tech Engineer'
  },
  {
    icon: Users,
    title: 'Specialties',
   // value: 'Full-Stack',
    description: 'Application Development'
  },
  {
    icon: Award,
    title: 'Achievements',
    // value: 'Top Performer',
    description: 'Quality Focused'
  }];


  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}>

          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4">

              About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '4rem' } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full">
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex justify-center lg:justify-start">

              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 via-indigo-400 to-blue-400 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src="https://static.lumi.new/7f/7f0217b5f2379324a6a983b86dc179cf.webp"
                      alt="Paras Soni"
                      className="w-72 h-72 rounded-full object-cover" />

                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/30 via-indigo-400/30 to-blue-400/30 blur-xl -z-10"></div>
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="space-y-6">

              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Passionate Software Developer
              </h3>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>💻 Hi! I'm a software engineer who loves turning ideas into real, user-friendly applications. 🚀 I enjoy working in teams, solving challenges, and building projects that actually make a difference. Always curious, always learning — I keep exploring new tech to sharpen my skills and deliver better solutions every day.



                </p>
                




                



              </div>
            </motion.div>
          </div>

          {/* Personal Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {personalInfo.map((info, index) =>
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">

                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <span className="text-white/60 text-sm font-medium">{info.label}</span>
                </div>
                <p className="text-white font-semibold">{info.value}</p>
              </motion.div>
            )}
          </div>

          {/* Virtual Internships Section */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0 }}
              className="text-2xl md:text-3xl font-bold text-center mb-8">

              Virtual <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Internships</span>
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {virtualInternships.map((internship, index) =>
              <motion.div
                key={internship.company}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + 0.2 * index }}
                className="group relative">

                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-purple-400/50 transition-all duration-500">
                    {/* Gradient Glow Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                    
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl">{internship.logo}</div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{internship.company}</h4>
                        <p className="text-purple-400 font-medium">{internship.role}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {internship.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      {internship.achievements.map((achievement, achievementIndex) =>
                    <div key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 flex-shrink-0"></div>
                          <span className="text-white/60 text-sm">{achievement}</span>
                        </div>
                    )}
                    </div>

                    {/* Link */}
                    {internship.link !== '#' &&
                  <motion.a
                    href={internship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-blue-400 transition-colors duration-300">

                        <span className="text-sm font-medium">Check out the simulation</span>
                        <ExternalLink size={16} />
                      </motion.a>
                  }
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
  const IconComponent = item.icon; // TSX needs component references
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 * index, duration: 0.6 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300"
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className="p-2 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg">
          <IconComponent size={20} className="text-white" />
        </div>
        <span className="text-white/60 text-sm font-medium">{item.title}</span>
      </div>
      <p className="text-white font-semibold">{/* item.value */}</p>  
      <p className="text-white/70 text-sm">{item.description}</p>
    </motion.div>
  );
})}

          </div>
        </motion.div>
      </div>
    </section>);

};

export default About;