import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isLoaded ? 'auto' : 'hidden';
    document.body.classList.add('crt');
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
            <div className="bg-retro-black">
              <div className="h-screen relative">
                <Navbar />
                <div className="h-full flex items-center justify-center p-4">
                  <div className="terminal-window w-full max-w-4xl p-4">
                    <div className="terminal-header flex items-center gap-2 mb-4 border-b border-retro-green/30 pb-2">
                      <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                      <div className="font-vt323 text-retro-green">main.exe</div>
                    </div>
                    <Home setIsLoaded={setIsLoaded} />
                  </div>
                </div>
              </div>

              {isLoaded && (
                <div className="container mx-auto px-4 py-20 flex flex-col gap-8">
                  <div id="about-section" className="terminal-window p-4">
                    <div className="terminal-header flex items-center gap-2 mb-4 border-b border-retro-green/30 pb-2">
                      <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                      <div className="font-vt323 text-retro-green">about.txt</div>
                    </div>
                    <About />
                  </div>

                  <div id="skills-section" className="terminal-window p-4">
                    <div className="terminal-header flex items-center gap-2 mb-4 border-b border-retro-green/30 pb-2">
                      <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                      <div className="font-vt323 text-retro-green">skills.exe</div>
                    </div>
                    <Skills />
                  </div>

                  <div id="work-section" className="terminal-window p-4">
                    <div className="terminal-header flex items-center gap-2 mb-4 border-b border-retro-green/30 pb-2">
                      <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                      <div className="font-vt323 text-retro-green">projects.exe</div>
                    </div>
                    <Work />
                  </div>

                  <div id="contact-section" className="terminal-window p-4">
                    <div className="terminal-header flex items-center gap-2 mb-4 border-b border-retro-green/30 pb-2">
                      <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                      <div className="font-vt323 text-retro-green">contact.exe</div>
                    </div>
                    <Contact />
                  </div>
                </div>
              )}
            </div>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;