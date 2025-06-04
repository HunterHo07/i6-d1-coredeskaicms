'use client';

import { useState, useEffect } from 'react';

const TypeWriter = ({ 
  text, 
  speed = 100,
  delay = 0,
  cursor = true,
  cursorChar = '|',
  onComplete,
  className = '',
  ...props 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  useEffect(() => {
    if (cursor) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);

      return () => clearInterval(cursorInterval);
    }
  }, [cursor]);

  return (
    <span className={className} {...props}>
      {displayText}
      {cursor && (
        <span 
          className={`inline-block transition-opacity duration-100 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default TypeWriter;
