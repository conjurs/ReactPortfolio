import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Axel Pärnoja, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>At just 17 years old, I'm diving headfirst into the world of software development as a full-stack junior developer. Coding isn't just a hobby for me—it's a passion. I love the challenge of solving problems and the satisfaction of seeing my code come to life. Whether I'm working on front-end interfaces or back-end systems, I'm always eager to learn and grow as a developer.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
