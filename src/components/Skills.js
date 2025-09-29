import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDocker, FaAws, FaLinux, FaShieldAlt, FaDatabase,
  FaCode, FaTerminal, FaRocket, FaBrain, FaLock, FaServer
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: FaCode },
    { id: 'backend', label: 'Backend', icon: FaServer },
    { id: 'tools', label: 'Tools & DevOps', icon: FaTerminal },
    { id: 'security', label: 'Security', icon: FaShieldAlt }
  ];

  const skills = {
    frontend: [
      { name: 'React', level: 95, icon: FaReact, color: '#61DAFB' },
      { name: 'JavaScript', level: 90, icon: FaJs, color: '#F7DF1E' },
      { name: 'HTML5', level: 95, icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', level: 90, icon: FaCss3Alt, color: '#1572B6' },
      { name: 'TypeScript', level: 85, icon: FaCode, color: '#3178C6' },
      { name: 'Vue.js', level: 80, icon: FaCode, color: '#4FC08D' }
    ],
    backend: [
      { name: 'Node.js', level: 90, icon: FaNodeJs, color: '#339933' },
      { name: 'Python', level: 85, icon: FaPython, color: '#3776AB' },
      { name: 'Express.js', level: 88, icon: FaCode, color: '#000000' },
      { name: 'MongoDB', level: 80, icon: FaDatabase, color: '#47A248' },
      { name: 'PostgreSQL', level: 75, icon: FaDatabase, color: '#336791' },
      { name: 'REST APIs', level: 90, icon: FaCode, color: '#FF6B6B' }
    ],
    tools: [
      { name: 'Git', level: 95, icon: FaGitAlt, color: '#F05032' },
      { name: 'Docker', level: 80, icon: FaDocker, color: '#2496ED' },
      { name: 'AWS', level: 75, icon: FaAws, color: '#FF9900' },
      { name: 'Linux', level: 85, icon: FaLinux, color: '#FCC624' },
      { name: 'CI/CD', level: 70, icon: FaRocket, color: '#00D4AA' },
      { name: 'Kubernetes', level: 65, icon: FaCode, color: '#326CE5' }
    ],
    security: [
      { name: 'Ethical Hacking', level: 85, icon: FaShieldAlt, color: '#00FF00' },
      { name: 'Penetration Testing', level: 80, icon: FaLock, color: '#FF0000' },
      { name: 'Cryptography', level: 75, icon: FaBrain, color: '#8A2BE2' },
      { name: 'Network Security', level: 82, icon: FaShieldAlt, color: '#00BFFF' },
      { name: 'OWASP', level: 88, icon: FaShieldAlt, color: '#FFA500' },
      { name: 'Security Auditing', level: 78, icon: FaLock, color: '#DC143C' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="skill-categories"
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
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeCategory}
        >
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-header">
                <div className="skill-icon" style={{ color: skill.color }}>
                  <skill.icon />
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
              
              <div className="skill-progress-container">
                <div className="skill-progress-bar">
                  <motion.div
                    className="skill-progress-fill"
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      boxShadow: `0 0 20px ${skill.color}40`
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              <div className="skill-description">
                {getSkillDescription(skill.name, activeCategory)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Skills Overview</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-icon">
                <FaCode />
              </div>
              <div className="summary-content">
                <h4>Full-Stack Development</h4>
                <p>Proficient in both frontend and backend technologies with 3+ years of experience</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">
                <FaShieldAlt />
              </div>
              <div className="summary-content">
                <h4>Cybersecurity</h4>
                <p>Specialized in ethical hacking, penetration testing, and security auditing</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">
                <FaRocket />
              </div>
              <div className="summary-content">
                <h4>DevOps & Cloud</h4>
                <p>Experience with containerization, CI/CD pipelines, and cloud platforms</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">
                <FaBrain />
              </div>
              <div className="summary-content">
                <h4>Problem Solving</h4>
                <p>Strong analytical skills and ability to tackle complex technical challenges</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const getSkillDescription = (skillName, category) => {
  const descriptions = {
    frontend: {
      'React': 'Building dynamic user interfaces with modern React patterns and hooks',
      'JavaScript': 'Advanced ES6+ features, async programming, and modern frameworks',
      'HTML5': 'Semantic markup, accessibility, and modern web standards',
      'CSS3': 'Advanced styling, animations, and responsive design principles',
      'TypeScript': 'Type-safe development with enhanced IDE support and better maintainability',
      'Vue.js': 'Progressive framework for building user interfaces with reactive components'
    },
    backend: {
      'Node.js': 'Server-side JavaScript development with Express and other frameworks',
      'Python': 'Versatile programming for web development, automation, and data analysis',
      'Express.js': 'Fast, unopinionated web framework for Node.js applications',
      'MongoDB': 'NoSQL database design and management with Mongoose ODM',
      'PostgreSQL': 'Relational database design, optimization, and complex queries',
      'REST APIs': 'Designing and implementing RESTful web services and APIs'
    },
    tools: {
      'Git': 'Version control, branching strategies, and collaborative development',
      'Docker': 'Containerization and microservices architecture',
      'AWS': 'Cloud computing services and infrastructure management',
      'Linux': 'System administration and command-line proficiency',
      'CI/CD': 'Automated testing, building, and deployment pipelines',
      'Kubernetes': 'Container orchestration and scalable application deployment'
    },
    security: {
      'Ethical Hacking': 'Authorized penetration testing and vulnerability assessment',
      'Penetration Testing': 'Systematic security testing and vulnerability identification',
      'Cryptography': 'Encryption algorithms, digital signatures, and secure communications',
      'Network Security': 'Firewall configuration, intrusion detection, and network monitoring',
      'OWASP': 'Web application security standards and best practices',
      'Security Auditing': 'Comprehensive security assessment and compliance verification'
    }
  };

  return descriptions[category]?.[skillName] || 'Advanced proficiency in this technology';
};

export default Skills;
