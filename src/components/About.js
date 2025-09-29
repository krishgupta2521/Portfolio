import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaRocket, FaBrain, FaTerminal, FaLock } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me', icon: FaCode },
    { id: 'mission', label: 'Mission', icon: FaRocket },
    { id: 'values', label: 'Values', icon: FaShieldAlt }
  ];

  const skills = [
    { name: 'Frontend Development', level: 90, icon: FaCode },
    { name: 'Backend Development', level: 85, icon: FaTerminal },
    { name: 'Cybersecurity', level: 80, icon: FaShieldAlt },
    { name: 'Machine Learning', level: 75, icon: FaBrain },
    { name: 'DevOps', level: 70, icon: FaRocket },
    { name: 'Blockchain', level: 65, icon: FaLock }
  ];

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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <motion.div
            className="tab-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-text">
              <p>
                I'm a passionate developer with a deep love for technology and innovation. 
                My journey began with curiosity about how things work, which led me to 
                explore the fascinating world of programming and cybersecurity.
              </p>
              <p>
                With over 3 years of experience in full-stack development, I've worked on 
                diverse projects ranging from web applications to security tools. I believe 
                in writing clean, efficient code and constantly learning new technologies 
                to stay ahead of the curve.
              </p>
              <p>
                When I'm not coding, you'll find me exploring cybersecurity challenges, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <div>
                  <h4>Innovation Driven</h4>
                  <p>Always exploring cutting-edge technologies</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔒</span>
                <div>
                  <h4>Security Focused</h4>
                  <p>Building secure and robust applications</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤝</span>
                <div>
                  <h4>Team Player</h4>
                  <p>Collaborative approach to problem-solving</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'mission':
        return (
          <motion.div
            className="tab-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mission-content">
              <h3>My Mission</h3>
              <p>
                To create innovative solutions that make a positive impact on society 
                while maintaining the highest standards of security and code quality.
              </p>
              <div className="mission-goals">
                <div className="goal-item">
                  <FaRocket className="goal-icon" />
                  <h4>Innovate</h4>
                  <p>Develop cutting-edge solutions using the latest technologies</p>
                </div>
                <div className="goal-item">
                  <FaShieldAlt className="goal-icon" />
                  <h4>Secure</h4>
                  <p>Build applications with security as a core principle</p>
                </div>
                <div className="goal-item">
                  <FaBrain className="goal-icon" />
                  <h4>Learn</h4>
                  <p>Continuously expand knowledge and share with the community</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'values':
        return (
          <motion.div
            className="tab-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="values-content">
              <h3>Core Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <h4>Excellence</h4>
                  <p>Striving for the highest quality in everything I do</p>
                </div>
                <div className="value-item">
                  <h4>Integrity</h4>
                  <p>Honest, transparent, and ethical in all interactions</p>
                </div>
                <div className="value-item">
                  <h4>Growth</h4>
                  <p>Continuous learning and personal development</p>
                </div>
                <div className="value-item">
                  <h4>Collaboration</h4>
                  <p>Working together to achieve common goals</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-tabs"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="tab-buttons">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon />
                  {tab.label}
                </motion.button>
              ))}
            </div>
            {renderTabContent()}
          </motion.div>

          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-header">
                    <skill.icon className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
