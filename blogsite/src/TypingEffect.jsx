import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'

export const TypingEffect = () => {
    const names = ['Events...', 'Freelancing...','Service...'];
    const [currentName, setCurrentName] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
  
    useEffect(() => {
      let typingInterval;
  
      if (isTyping) {
        typingInterval = setInterval(() => {
          setCurrentName((prev) => {
            const nextChar = names[currentIndex].slice(0, prev.length + 1);
            if (nextChar === names[currentIndex]) {
              clearInterval(typingInterval);
              setTimeout(() => setIsTyping(false), 1000); // Pause before erasing
            }
            return nextChar;
          });
        }, 150); // Typing speed
      } else {
        typingInterval = setInterval(() => {
          setCurrentName((prev) => {
            if (prev === '') {
              clearInterval(typingInterval);
              setIsTyping(true);
              setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length); // Move to next name
            }
            return prev.slice(0, -1);
          });
        }, 100); // Erasing speed
      }
  
      return () => clearInterval(typingInterval);
    }, [isTyping, currentIndex, names]);
  
    return (
      <div>
        <span>{currentName}</span>
        <span className={styles.cursor}></span>
      </div>
    );
  };