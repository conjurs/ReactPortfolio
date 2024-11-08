import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  return (
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
  );
};

export default About;
