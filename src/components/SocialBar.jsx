import React from 'react';
import { FaGithub} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialBar = () => {
  const socials = [
    {
      name: 'Github',
      icon: <FaGithub size={20} />,
      href: 'https://github.com/conjurs',
      color: 'hover:text-[#333]'
    },
    {
      name: 'Email',
      icon: <HiOutlineMail size={20} />,
      href: 'mailto:parnoja.axel@gmail.com',
      color: 'hover:text-accent'
    }
  ];

  return (
    <div className='fixed left-6 bottom-0 z-50 opacity-0 animate-fadeIn'>
      <div className='flex flex-col items-center gap-4'>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className={`p-3 bg-surface/50 backdrop-blur-sm rounded-full border border-accent/10 
                       text-text/70 ${social.color} transition-all duration-300
                       hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5
                       hover:scale-110 hover:-translate-y-1`}
          >
            {social.icon}
          </a>
        ))}
        <div className='w-[1px] h-24 bg-accent/20'></div>
      </div>
    </div>
  );
};

export default SocialBar;