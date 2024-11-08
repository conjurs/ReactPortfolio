import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'main', label: 'HOME' },
    { id: 'about-section', label: 'ABOUT' },
    { id: 'skills-section', label: 'SKILLS' },
    { id: 'work-section', label: 'WORK' },
    { id: 'contact-section', label: 'CONTACT' }
  ];

  return (
    <div className='fixed top-0 w-full h-16 flex justify-between items-center px-8 z-[999] 
      bg-gradient-to-b from-black via-black to-transparent border-b border-retro-green/30'>
      <div className='px-4 py-2 w-[120px]'>
        <span className='text-retro-green font-dos'>
          {blink ? 'Axel.exe' : ' '}
        </span>
      </div>

      <ul className='hidden md:flex'>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              offset={item.id === 'main' ? 0 : -64}
              duration={500}
              className='px-4 text-retro-green font-dos hover:text-retro-green/70 
                       transition-colors duration-300 cursor-pointer'
              onClick={() => {
                if (item.id === 'main') {
                  window.location.reload();
                }
              }}
            >
              <span className='opacity-50'>{`>`}</span> {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {nav && (
        <div className='fixed top-0 left-0 w-full h-screen bg-retro-black/95 flex flex-col justify-center items-center'>
          <ul className='w-full'>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  onClick={handleClick}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className='block px-8 py-4 text-retro-green font-dos
                           hover:bg-retro-green/5 transition-all duration-300'
                >
                  <span className='opacity-50'>{`>`}</span> {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <a 
        href="https://github.com/conjurs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-retro-green hover:text-retro-green/70 transition-colors duration-300 ml-4"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
    </div>
  );
}

export default Navbar;
