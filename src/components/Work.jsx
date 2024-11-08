import React, { useState, useEffect } from 'react';
import { projectData } from '../data/data';
import { useTheme } from '../context/ThemeContext';

const Work = () => {
  const { theme } = useTheme();
  const [loadingText, setLoadingText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const text = 'LOADING PROJECT DATABASE...';
    let index = 0;
    const timer = setInterval(() => {
      setLoadingText(text.substring(0, index));
      index++;
      if (index > text.length) {
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id='work' className='w-full min-h-screen bg-retro-black p-4 md:p-8'>
      <div className='terminal-window max-w-[1000px] mx-auto p-4'>
        <div className='terminal-header flex items-center gap-2 mb-4 border-b border-retro-green/30 pb-2'>
          <div className='w-3 h-3 rounded-full bg-retro-green'></div>
          <div className='font-vt323 text-retro-green'>projects.exe</div>
        </div>

        {isLoading ? (
          <div className='font-dos text-retro-green animate-pulse'>
            <p>{loadingText}<span className='animate-terminal-blink'>_</span></p>
          </div>
        ) : (
          <>
            <div className='font-dos text-retro-green mb-8'>
              <p className='mb-2'>{`>`} SCANNING PROJECT DATABASE...</p>
              <p className='mb-4'>{`>`} ${projectData.length} PROJECTS FOUND</p>
            </div>

            <div className='grid gap-4'>
              {projectData.map((project) => (
                <div key={project.id} className='border border-retro-green/50 p-4'>
                  <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2'>
                    <div>
                      <h3 className='text-xl font-vt323'>{project.name}</h3>
                      <p className='text-retro-green/70'>{project.type}</p>
                    </div>
                    <div className='flex gap-4'>
                      <a href={project.github} target="_blank" rel="noreferrer" 
                         className='hover:text-retro-green'>[ GITHUB ]</a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" 
                           className='hover:text-retro-green'>[ LIVE ]</a>
                      )}
                    </div>
                  </div>
                  <p className='text-retro-green/80'>{project.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Work;