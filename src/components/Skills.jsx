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
        'HELP - Show this help message'
      ]);
    } else if (cmd === 'list') {
      addToHistory(cmd, skillsData.map(skill => skill.name));
    } else if (cmd === 'clear') {
      setCommandHistory([]);
    } else {
      addToHistory(cmd, [`Command not found: ${cmd}`]);
    }
    
    setCurrentCommand('');
  };

  return (
    <div name='skills' className='w-full min-h-screen bg-retro-black p-8 pt-24 pb-24'>
      <div className='terminal-window max-w-[1000px] mx-auto p-4'>
        <div className='terminal-header flex items-center gap-2 mb-4 border-b border-[#8B5CF6]/30 pb-2'>
          <div className='w-3 h-3 rounded-full bg-[#8B5CF6]'></div>
          <div className='font-vt323 text-[#8B5CF6]'>skills.exe</div>
        </div>

        <div className='font-dos text-[#8B5CF6] mb-4'>
          <p>Skills Terminal v1.0</p>
          <p>Type 'HELP' for available commands</p>
        </div>

        <div 
          ref={terminalRef}
          className='font-mono text-[#8B5CF6] mb-4 h-[400px] overflow-y-auto'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {commandHistory.map((entry, i) => (
            <div key={i} className='mb-2'>
              <div className='flex'>
                <span className='text-[#8B5CF6]/70'>{`>`}</span>
                <span className='ml-2'>{entry.command}</span>
              </div>
              {Array.isArray(entry.response) ? (
                entry.response.map((line, j) => (
                  <div key={j} className='ml-4 text-[#8B5CF6]/90'>{line}</div>
                ))
              ) : (
                <div className='ml-4 text-[#8B5CF6]/90'>{entry.response}</div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleCommand} className='flex items-center gap-2'>
          <span className='text-[#8B5CF6]'>{`>`}</span>
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            className='flex-1 bg-transparent border-none outline-none text-[#8B5CF6] font-mono'
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default Skills;