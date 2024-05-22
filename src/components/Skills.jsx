import React, { useEffect, useState } from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Typescript from '../assets/typescript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/python.png';
import MySQL from  '../assets/mysql.png';

const skillsData = [
  { src: HTML, name: 'HTML' },
  { src: CSS, name: 'CSS' },
  { src: JavaScript, name: 'JavaScript' },
  { src: Typescript, name: 'Typescript' },
  { src: ReactImg, name: 'React' },
  { src: Node, name: 'Node JS' },
  { src: FireBase, name: 'FireBase' },
  { src: GitHub, name: 'GitHub' },
  { src: Tailwind, name: 'Tailwind' },
  { src: Mongo, name: 'Mongo DB' },
  { src: Python, name: 'Python' },
  { src: MySQL, name: 'MySQL' }
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % skillsData.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`shadow-md shadow-[#040c16] duration-500 transform ${
                activeIndex === index ? 'scale-110' : ''
              }`}
            >
              <img className='w-20 mx-auto' src={skill.src} alt={`${skill.name} icon`} />
              <p className='my-4'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;