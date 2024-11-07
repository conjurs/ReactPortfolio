import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const skillsData = [
  { icon: 'logos:html-5', name: 'HTML' },
  { icon: 'logos:css-3', name: 'CSS' },
  { icon: 'logos:python', name: 'Python' },
  { icon: 'logos:javascript', name: 'JavaScript' },
  { icon: 'logos:typescript-icon', name: 'Typescript' },
  { icon: 'logos:lua', name: 'Lua' },
  { icon: 'logos:tailwindcss-icon', name: 'Tailwind' },
  { icon: 'logos:react', name: 'React' },
  { icon: 'logos:laravel', name: 'Laravel' },
  { icon: 'mdi:github', name: 'GitHub', className: 'text-white' },
  { icon: 'logos:mysql', name: 'MySQL' },
  { icon: 'logos:php', name: 'PHP' }
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * skillsData.length));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div name='skills' className='w-full min-h-screen py-20 bg-primary'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-text inline-block border-b-4 border-accent'>
            Technologies
          </h2>
          <p className='text-textDark mt-4'>My technical toolkit</p>
        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl bg-surface/50 backdrop-blur-sm 
                         border border-accent/10 transition-all duration-300 transform 
                         ${activeIndex === index ? '-translate-y-2 shadow-lg' : ''}`}
            >
              <div className='h-16 flex items-center justify-center mb-4'>
                <Icon 
                  icon={skill.icon} 
                  className={`text-5xl transition-transform duration-300 
                    ${skill.className || 'text-black'} 
                    ${activeIndex === index ? 'group-hover:text-white group-hover:scale-110' : ''}`} 
                />
              </div>
              <p className={`text-center text-text transition-colors 
                ${activeIndex === index ? 'group-hover:text-accent' : ''}`}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;