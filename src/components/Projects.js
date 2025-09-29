import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaShieldAlt, FaRocket, FaBrain, FaGamepad, FaMobile } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', icon: FaCode },
    { id: 'web', label: 'Web Apps', icon: FaCode },
    { id: 'security', label: 'Security', icon: FaShieldAlt },
    { id: 'mobile', label: 'Mobile', icon: FaMobile },
    { id: 'ai', label: 'AI/ML', icon: FaBrain },
    { id: 'game', label: 'Games', icon: FaGamepad }
  ];

  const projects = [
    {
      id: 1,
      title: 'SecureChat Pro',
      category: 'security',
      description: 'End-to-end encrypted messaging application with advanced security features including perfect forward secrecy and zero-knowledge architecture.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'WebRTC', 'Crypto.js', 'MongoDB'],
      features: ['End-to-end encryption', 'Perfect forward secrecy', 'Zero-knowledge architecture', 'Real-time messaging'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'completed',
      year: '2024'
    },
    {
      id: 2,
      title: 'AI Code Reviewer',
      category: 'ai',
      description: 'Machine learning-powered code review tool that automatically detects bugs, security vulnerabilities, and suggests improvements.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      features: ['Automated bug detection', 'Security vulnerability scanning', 'Code quality metrics', 'Integration with Git'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'in-progress',
      year: '2024'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Modern, responsive portfolio website with hacker/coder aesthetic, featuring interactive animations and terminal-style UI.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript'],
      features: ['Responsive design', 'Interactive animations', 'Terminal UI', 'Matrix rain effect'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'completed',
      year: '2024'
    },
    {
      id: 4,
      title: 'Blockchain Voting System',
      category: 'security',
      description: 'Decentralized voting platform built on blockchain technology ensuring transparency, immutability, and voter privacy.',
      image: '/api/placeholder/400/300',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      features: ['Blockchain-based voting', 'Voter anonymity', 'Transparent results', 'Smart contracts'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'completed',
      year: '2023'
    },
    {
      id: 5,
      title: 'Fitness Tracker Mobile App',
      category: 'mobile',
      description: 'Cross-platform mobile application for tracking fitness activities with AI-powered workout recommendations.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow Lite'],
      features: ['Activity tracking', 'AI recommendations', 'Social features', 'Progress analytics'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'completed',
      year: '2023'
    },
    {
      id: 6,
      title: 'Cyber Defense Simulator',
      category: 'game',
      description: 'Educational game that teaches cybersecurity concepts through interactive scenarios and real-world attack simulations.',
      image: '/api/placeholder/400/300',
      technologies: ['Unity', 'C#', 'WebGL', 'Photon'],
      features: ['Interactive scenarios', 'Real-time multiplayer', 'Educational content', 'Progress tracking'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'in-progress',
      year: '2024'
    },
    {
      id: 7,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with advanced features including AI-powered recommendations and secure payment processing.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      features: ['AI recommendations', 'Secure payments', 'Inventory management', 'Analytics dashboard'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'completed',
      year: '2023'
    },
    {
      id: 8,
      title: 'Network Security Scanner',
      category: 'security',
      description: 'Comprehensive network security assessment tool that identifies vulnerabilities and provides detailed security reports.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'Nmap', 'Django', 'PostgreSQL', 'Celery'],
      features: ['Vulnerability scanning', 'Network mapping', 'Security reports', 'Automated assessments'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'completed',
      year: '2023'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <filter.icon />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeFilter}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <FaCode className="placeholder-icon" />
                  <span>{project.title}</span>
                </div>
                <div className="project-status">
                  <span className={`status-badge ${project.status}`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Interested in collaborating?</h3>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket />
            Let's Build Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
