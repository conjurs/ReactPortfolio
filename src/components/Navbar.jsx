import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-8 bg-primary/80 backdrop-blur-md border-b border-accent/10 z-50'>
      {/* Brand */}
      <div className='text-xl font-bold text-text'>
        <span className='text-accent'></span>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-8'>
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className='text-text/70 hover:text-accent transition-colors'>
            <Link to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleClick} className='md:hidden z-10 text-accent'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul className={`${!nav ? 'hidden' : 'flex'} absolute top-0 left-0 w-full h-screen 
                      bg-primary flex-col justify-center items-center gap-8`}>
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className='text-3xl text-text/70 hover:text-accent transition-colors'>
            <Link onClick={handleClick} to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
