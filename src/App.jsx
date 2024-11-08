import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import useInView from './hooks/useInView';
import NotFound from './components/NotFound';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isLoaded ? 'auto' : 'hidden';
    document.body.classList.add('crt');
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('crt');
    };
  }, [isLoaded]);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={
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
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

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