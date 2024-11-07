import React from 'react';
import { data } from "../data/data.js";
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { Icon } from '@iconify/react';

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen py-20 bg-primary'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-text inline-block border-b-4 border-accent'>
            Projects
          </h2>
          <p className='text-textDark mt-4'>Recent work & experiments</p>
        </div>
        
        <div className='grid md:grid-cols-2 gap-6'>
          {data.map((project, index) => (
            <div key={index} 
                 className='group relative overflow-hidden rounded-xl bg-surface/50 backdrop-blur-sm
                            border border-accent/10 hover:border-accent/30 transition-all duration-300'>
              <div className='aspect-video w-full overflow-hidden bg-surface/80 flex items-center justify-center'>
                {project.isImageGrid ? (
                    <div className='grid grid-cols-2 gap-2 w-full h-full p-2'>
                        {project.images.map((img, imgIndex) => (
                            <div key={imgIndex} className='relative overflow-hidden rounded-lg'>
                                <img
                                    src={img}
                                    alt={`${project.name} preview ${imgIndex + 1}`}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                />
                            </div>
                        ))}
                    </div>
                ) : project.isIcon ? (
                    <Icon 
                        icon={project.iconName} 
                        className={`text-8xl transition-transform duration-500 group-hover:scale-110 ${project.iconClass || ''}`}
                    />
                ) : (
                    <img
                        src={project.image}
                        alt={project.name}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                )}
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-text mb-4'>{project.name}</h3>
                {project.description && (
                    <p className='text-textDark text-sm mb-4'>{project.description}</p>
                )}
                <div className='flex gap-4'>
                  <a href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex-1 py-3 px-4 rounded-lg bg-accent/10 hover:bg-accent 
                            text-accent hover:text-white transition-all duration-300 
                            flex items-center justify-center gap-2'>
                    <FaGithub />
                    View Code
                  </a>
                  {project.live && (
                    <a href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex-1 py-3 px-4 rounded-lg bg-accent 
                                text-white hover:bg-accent/80 transition-all duration-300 
                                flex items-center justify-center gap-2'>
                      <HiExternalLink />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;