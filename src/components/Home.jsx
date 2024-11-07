import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-primary'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='backdrop-blur-sm bg-surface/30 p-12 rounded-2xl border border-accent/10
                     hover:border-accent/30 transition-all duration-500 shadow-lg shadow-accent/5
                     opacity-0 animate-slideUp'>
          <div className='text-accent/80 font-mono text-sm tracking-wider mb-4 animate-fadeIn'>
            Hi, I'm
          </div>
          <h1 className='text-6xl sm:text-8xl font-bold text-text mb-4 tracking-tight animate-slideUp'>
            Axel Pärnoja
          </h1>
          <div className='overflow-hidden'>
            <h2 className='text-3xl sm:text-5xl font-bold text-text/50 mb-6 animate-slideUp'>
              Full Stack Developer
            </h2>
          </div>
          <p className='text-textDark text-lg max-w-[600px] leading-relaxed mb-8 animate-fadeIn'>
            Crafting digital experiences through elegant code. 
            Specializing in full-stack development with a focus on 
            creating intuitive and performant web applications.
          </p>
          <div className='flex gap-4'>
            <Link to='work' smooth={true} duration={500}>
              <button className='group px-8 py-4 bg-accent/10 border border-accent/50 rounded-lg 
                               text-accent hover:bg-accent hover:text-white transition-all duration-300 
                               flex items-center gap-3 hover:gap-5'>
                View My Work
                <HiArrowNarrowRight className='transition-all duration-300 group-hover:rotate-90' />
              </button>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
              <button className='px-8 py-4 bg-accent text-white rounded-lg 
                               hover:bg-accent/80 transition-all duration-300'>
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;