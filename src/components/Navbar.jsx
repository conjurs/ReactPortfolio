import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed top-0 w-full h-16 flex justify-between items-center px-8 bg-gradient-to-b from-black via-black to-transparent z-[999] border-b border-retro-green/30'>
      <div className='terminal-window px-4 py-2'>
        <span className='animate-terminal-blink text-retro-green'>{`>`}</span>
        <span className='text-retro-green font-dos'> AXEL.EXE</span>
      </div>

      <ul className='hidden md:flex items-center gap-4'>
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className='group'>
            <Link 
              to={item} 
              smooth={true} 
              duration={500}
              className='terminal-window px-4 py-2 text-retro-green font-dos
                         hover:border-retro-green hover:bg-black/50 
                         transition-all duration-300 backdrop-blur-sm
                         flex items-center gap-2'
            >
              <span className='opacity-50'>{'>'}</span>
              {item.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={handleClick} 
           className='md:hidden terminal-window px-4 py-2 text-retro-green font-dos cursor-pointer'>
        {!nav ? '> MENU' : '> CLOSE'}
      </div>

      {nav && (
        <div className='absolute top-16 left-0 w-full bg-black border-b border-retro-green/30'>
          <ul className='w-full'>
            {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
              <li key={item} className='border-b border-retro-green/10 last:border-0'>
                <Link 
                  onClick={handleClick} 
                  to={item} 
                  smooth={true} 
                  duration={500}
                  className='block px-8 py-4 text-retro-green font-dos
                           hover:bg-retro-green/5 transition-all duration-300'
                >
                  <span className='opacity-50'>{`>`}</span> {item.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
