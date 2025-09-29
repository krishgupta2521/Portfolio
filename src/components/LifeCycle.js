import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaCode, FaShieldAlt, FaRocket, FaAward, FaLaptop, FaGamepad } from 'react-icons/fa';
import './LifeCycle.css';

const LifeCycle = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: FaCode },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'career', label: 'Career', icon: FaLaptop },
    { id: 'achievements', label: 'Achievements', icon: FaTrophy },
    { id: 'projects', label: 'Projects', icon: FaRocket }
  ];

  const timelineEvents = [
    {
      id: 1,
      category: 'education',
      year: '2020',
      title: 'Started Computer Science Journey',
      description: 'Began my formal education in Computer Science, learning the fundamentals of programming and algorithms.',
      icon: FaGraduationCap,
      achievements: ['First programming course completed', 'Discovered passion for coding'],
      tags: ['Education', 'Programming', 'Algorithms']
    },
    {
      id: 2,
      category: 'projects',
      year: '2021',
      title: 'First Web Development Project',
      description: 'Built my first full-stack web application using HTML, CSS, JavaScript, and Node.js.',
      icon: FaCode,
      achievements: ['Learned full-stack development', 'Deployed first application'],
      tags: ['Web Development', 'JavaScript', 'Node.js']
    },
    {
      id: 3,
      category: 'achievements',
      year: '2021',
      title: 'Hackathon Winner',
      description: 'Won first place in a local hackathon with an innovative cybersecurity tool.',
      icon: FaTrophy,
      achievements: ['First place in hackathon', 'Cybersecurity expertise recognized'],
      tags: ['Hackathon', 'Cybersecurity', 'Innovation']
    },
    {
      id: 4,
      category: 'education',
      year: '2022',
      title: 'Advanced Programming Concepts',
      description: 'Mastered advanced programming concepts including data structures, algorithms, and software engineering principles.',
      icon: FaGraduationCap,
      achievements: ['Advanced algorithms certification', 'Software engineering principles'],
      tags: ['Algorithms', 'Data Structures', 'Software Engineering']
    },
    {
      id: 5,
      category: 'career',
      year: '2022',
      title: 'First Internship',
      description: 'Started my first software development internship, working on real-world projects and learning industry practices.',
      icon: FaLaptop,
      achievements: ['Real-world project experience', 'Industry best practices learned'],
      tags: ['Internship', 'Industry Experience', 'Team Collaboration']
    },
    {
      id: 6,
      category: 'projects',
      year: '2022',
      title: 'Open Source Contributions',
      description: 'Started contributing to open source projects, building a strong portfolio and community presence.',
      icon: FaRocket,
      achievements: ['Multiple open source contributions', 'Community recognition'],
      tags: ['Open Source', 'Community', 'GitHub']
    },
    {
      id: 7,
      category: 'achievements',
      year: '2023',
      title: 'Cybersecurity Certification',
      description: 'Earned professional certification in cybersecurity, specializing in ethical hacking and security analysis.',
      icon: FaShieldAlt,
      achievements: ['Professional certification earned', 'Ethical hacking expertise'],
      tags: ['Cybersecurity', 'Certification', 'Ethical Hacking']
    },
    {
      id: 8,
      category: 'career',
      year: '2023',
      title: 'Full-Stack Developer Role',
      description: 'Landed my first full-time position as a full-stack developer, working on enterprise-level applications.',
      icon: FaLaptop,
      achievements: ['Full-time developer position', 'Enterprise application development'],
      tags: ['Full-Stack', 'Enterprise', 'Career Growth']
    },
    {
      id: 9,
      category: 'projects',
      year: '2023',
      title: 'AI/ML Project Launch',
      description: 'Developed and launched a machine learning application that gained significant user adoption.',
      icon: FaRocket,
      achievements: ['ML application developed', 'Significant user adoption'],
      tags: ['Machine Learning', 'AI', 'User Adoption']
    },
    {
      id: 10,
      category: 'achievements',
      year: '2024',
      title: 'Tech Conference Speaker',
      description: 'Invited to speak at a major tech conference about cybersecurity best practices and modern development techniques.',
      icon: FaAward,
      achievements: ['Conference speaking opportunity', 'Industry recognition'],
      tags: ['Speaking', 'Conference', 'Industry Recognition']
    }
  ];

  const filteredEvents = activeCategory === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="lifecycle" className="lifecycle">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Life Cycle & Journey
        </motion.h2>

        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  <event.icon />
                </div>
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
                
                <div className="timeline-achievements">
                  <h4>Achievements:</h4>
                  <ul>
                    {event.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="timeline-tags">
                  {event.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Journey Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <FaCode />
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FaTrophy />
              </div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Awards & Certifications</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FaShieldAlt />
              </div>
              <div className="stat-number">3+</div>
              <div className="stat-label">Years in Cybersecurity</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FaRocket />
              </div>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Lines of Code Written</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LifeCycle;
