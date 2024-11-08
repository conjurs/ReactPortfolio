import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import useInView from './hooks/useInView';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Lock scroll during initial load
    document.body.style.overflow = isLoaded ? 'auto' : 'hidden';
    
    // Add CRT effect
    document.body.classList.add('crt');
    
    // Force scroll to top
    window.scrollTo(0, 0);
    
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('crt');
    };
  }, [isLoaded]);

  return (
    <div className="min-h-screen bg-retro-black relative">
      <div className="scanline" />
      <div className="noise" />
      <Navbar />
      <div className="flex flex-col">
        <Home setIsLoaded={setIsLoaded} />
        {isLoaded && (
          <>
            <LoadingSection Component={About} />
            <LoadingSection Component={Skills} />
            <LoadingSection Component={Work} />
            <LoadingSection Component={Contact} isLast={true} />
          </>
        )}
      </div>
    </div>
  );
};

// Loading section wrapper component
const LoadingSection = ({ Component, isLast }) => {
  const [ref, isInView] = useInView({
    threshold: 0.4,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref} 
      className={`section-container ${isInView ? 'section-visible' : ''}`}
    >
      <div className="terminal-wrapper">
        <Component />
      </div>
    </div>
  );
};

export default App; 