import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Home = ({ setIsLoaded }) => {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const fullText = `
> INITIALIZING SYSTEM...
> LOADING PERSONAL DATA...
> NAME: AXEL PÄRNOJA
> JR FULL STACK DEVELOPER
> SYSTEM READY...
`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoaded(true);
          const aboutSection = document.getElementById('about-section');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [setIsLoaded]);

  return (
    <div className="font-vt323 text-lg whitespace-pre-line">
      {text}
      <span className="animate-terminal-blink">_</span>
    </div>
  );
};

export default Home;