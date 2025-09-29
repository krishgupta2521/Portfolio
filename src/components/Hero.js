import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTerminal } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Full Stack Developer',
    'Cybersecurity Enthusiast',
    'Problem Solver',
    'Tech Innovator',
    'Code Hacker'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < texts.length) {
        const currentTextToType = texts[currentIndex];
        if (currentText.length < currentTextToType.length) {
          setCurrentText(currentTextToType.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

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
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="code-rain">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="code-line"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <span key={j} className="code-char">
                  {Math.random() > 0.5 ? '0' : '1'}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-greeting" variants={itemVariants}>
            <span className="terminal-prompt">$</span>
            <span className="greeting-text">Hello, World!</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            I'm a{' '}
            <span className="typing-text">
              {currentText}
              <span className="cursor">|</span>
            </span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Passionate about creating innovative solutions, exploring cybersecurity,
            and pushing the boundaries of technology. Welcome to my digital space
            where code meets creativity.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode />
              View My Work
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTerminal />
              Download CV
            </motion.button>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Learning Mode</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn red"></span>
                <span className="btn yellow"></span>
                <span className="btn green"></span>
              </div>
              <span className="terminal-title">portfolio@terminal:~$</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">whoami</span>
              </div>
              <div className="terminal-output">developer@portfolio</div>
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">cat skills.txt</span>
              </div>
              <div className="terminal-output">
                JavaScript, Python, React, Node.js<br/>
                Cybersecurity, Linux, Docker<br/>
                Machine Learning, Blockchain
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">ls achievements/</span>
              </div>
              <div className="terminal-output">
                hackathon-winner/  open-source-contributor/<br/>
                security-certified/  tech-speaker/
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command typing">
                  <span className="cursor">█</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
