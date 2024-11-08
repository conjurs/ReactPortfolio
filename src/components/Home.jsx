import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ setIsLoaded }) => {
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
      
      {/* Power Button at bottom */}
      <Link 
        to="/404"
        className="flex items-center gap-2 px-6 py-3 mb-8
                   bg-gradient-to-b from-[#4CC218] to-[#2D8C0D] 
                   hover:from-[#3DA213] hover:to-[#246F0A]
                   text-white font-['MS_Sans_Serif'] text-sm
                   rounded-md shadow-lg border border-[#43B216]
                   transition-all duration-200 group power-button-glow"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
        </svg>
        Turn On PC
      </Link>
    </div>
  );
};

export default Home;