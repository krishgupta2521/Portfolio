import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import LifeCycle from './components/LifeCycle';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MatrixRain from './components/MatrixRain';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for terminal effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="terminal-loader">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="btn red"></span>
              <span className="btn yellow"></span>
              <span className="btn green"></span>
            </div>
            <span className="terminal-title">Portfolio Terminal</span>
          </div>
          <div className="terminal-body">
            <div className="loading-text">
              <span className="prompt">$</span>
              <span className="command">Initializing portfolio...</span>
              <span className="cursor">█</span>
            </div>
            <div className="loading-text">
              <span className="prompt">$</span>
              <span className="command">Loading components...</span>
              <span className="cursor">█</span>
            </div>
            <div className="loading-text">
              <span className="prompt">$</span>
              <span className="command">Ready to hack!</span>
              <span className="cursor">█</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <MatrixRain />
      <Header />
      <main>
        <Hero />
        <About />
        <LifeCycle />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
