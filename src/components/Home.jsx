import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        setTimeout(() => setIsLoaded(true), 1000);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [setIsLoaded]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4">
      <div className="terminal-window w-full max-w-2xl p-6 mt-20">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-retro-green"></div>
          <div className="w-3 h-3 rounded-full bg-retro-green opacity-50"></div>
          <div className="w-3 h-3 rounded-full bg-retro-green opacity-50"></div>
        </div>
        <pre className="font-vt323 text-lg whitespace-pre-line">
          {text}
          <span className="animate-terminal-blink">_</span>
        </pre>
      </div>
    </div>
  );
};

export default Home;