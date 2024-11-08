import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <div id='about' className='w-full min-h-screen bg-retro-black p-8'>
      <div className='terminal-window max-w-[1000px] mx-auto p-4'>
        <div className='terminal-header flex items-center gap-2 mb-4 border-b border-retro-green/30 pb-2'>
          <div className='w-3 h-3 rounded-full bg-retro-green'></div>
          <div className='font-vt323 text-retro-green'>about.txt</div>
        </div>

        <div className='font-dos text-retro-green'>
          <p className='mb-4'>{`>`} TYPE C:\ABOUT\README.TXT</p>
          
          <div className='border border-retro-green/50 p-4 mb-4'>
            <p className='text-2xl mb-4'>SYSTEM INFORMATION</p>
            <p>Name: Axel Pärnoja</p>
            <p>Age: 18</p>
            <p>Jr Full Stack Developer</p>
          </div>

          <p className='mb-4'>{`>`} MORE C:\ABOUT\DESCRIPTION.TXT</p>
          
          <div className='border border-retro-green/50 p-4'>
            <p className='leading-relaxed'> 
              I love the challenge of solving problems and the satisfaction of seeing my code come to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
