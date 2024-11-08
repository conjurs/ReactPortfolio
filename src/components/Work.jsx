import React from 'react';
import { projectData } from '../data/data';

const Work = () => {
  return (
    <div className='font-dos text-retro-green'>
      <div className='mb-8'>
        <p className='mb-2'>{`>`} SCANNING PROJECT DATABASE...</p>
        <p className='mb-4'>{`>`} {projectData.length} PROJECTS FOUND</p>
      </div>

      <div className='grid gap-4'>
        {projectData.map((project) => (
          <div key={project.id} className='border border-retro-green/50 p-4'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2'>
              <div>
                <h3 className='text-xl'>{project.name}</h3>
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
    </div>
  );
};

export default Work;