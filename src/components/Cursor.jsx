import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      setIsPointer(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.role === 'button'
      );
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div
      className={`fixed w-2 h-2 pointer-events-none z-50 transition-transform duration-100 
                 ${isPointer ? 'scale-75' : 'scale-100'}`}
      style={{
        left: `${position.x - 4}px`,
        top: `${position.y - 4}px`,
        backgroundImage: `url(${require('../assets/8.png')})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

export default Cursor; 