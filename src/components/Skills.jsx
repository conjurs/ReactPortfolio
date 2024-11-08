import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const skillsData = [
  { icon: 'logos:html-5', name: 'HTML' },
  { icon: 'logos:css-3', name: 'CSS' },
  { icon: 'logos:python', name: 'Python' },
  { icon: 'logos:javascript', name: 'JavaScript' },
  { icon: 'logos:typescript-icon', name: 'TypeScript' },
  { icon: 'logos:lua', name: 'Lua' },
  { icon: 'logos:tailwindcss-icon', name: 'Tailwind' },
  { icon: 'logos:react', name: 'React' },
  { icon: 'logos:laravel', name: 'Laravel' },
  { icon: 'mdi:github', name: 'GitHub' },
  { icon: 'logos:mysql', name: 'MySQL' },
  { icon: 'logos:php', name: 'PHP' }
].map(skill => ({
  ...skill,
  className: 'text-[#8B5CF6] w-12 h-12'
}));

const Skills = () => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const addToHistory = (command, response) => {
    setCommandHistory(prev => [...prev, { command, response }]);
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = currentCommand.toLowerCase().trim();
    
    if (cmd === 'help') {
      addToHistory(cmd, [
        'Available commands:',
        'LIST - Show all skills',
        'CLEAR - Clear terminal',
        'HELP - Show this help message',
        'START SYSTEM32 - Fun command :)'
      ]);
    } else if (cmd === 'list') {
      addToHistory(cmd, skillsData.map(skill => skill.name));
    } else if (cmd === 'clear') {
      setCommandHistory([]);
    } else if (cmd === 'start system32') {
      addToHistory(cmd, ['Initializing System32...']);
      setTimeout(() => {
        window.location.href = '/404';
      }, 1500);
    } else {
      addToHistory(cmd, [`Command not found: ${cmd}`]);
    }
    
    setCurrentCommand('');
  };

  return (
    <div className='font-dos text-retro-green'>
      <div className='mb-4'>
        <p>Skills Terminal v1.0</p>
        <p>Type 'HELP' for available commands</p>
      </div>

      <div 
        ref={terminalRef}
        className='mb-4 h-[400px] overflow-y-auto'
      >
        {commandHistory.map((entry, i) => (
          <div key={i} className='mb-2'>
            <div className='flex'>
              <span className='text-retro-green/70'>{`>`}</span>
              <span className='ml-2'>{entry.command}</span>
            </div>
            {Array.isArray(entry.response) ? (
              entry.response.map((line, j) => (
                <div key={j} className='ml-4 text-retro-green/90'>{line}</div>
              ))
            ) : (
              <div className='ml-4 text-retro-green/90'>{entry.response}</div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleCommand} className='flex items-center gap-2'>
        <span className='text-retro-green'>{`>`}</span>
        <input
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          className='flex-1 bg-transparent border-none outline-none text-retro-green'
          autoFocus
        />
      </form>
    </div>
  );
};

export default Skills;