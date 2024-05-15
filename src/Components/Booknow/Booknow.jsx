import React, { useState, useEffect, useRef } from 'react';
import "./Booknow.css";

const Booknow = () => {
    const [isAnimating, setIsAnimating] = useState(true);
    const buttonRef = useRef(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsAnimating((prevState) => !prevState);
      }, 800);
  
      const handleMouseEnter = () => {
        setIsAnimating(false);
      };
  
      const handleMouseLeave = () => {
        setIsAnimating(true);
      };
  
      const buttonElement = buttonRef.current;
      if (buttonElement) {
        buttonElement.addEventListener('mouseenter', handleMouseEnter);
        buttonElement.addEventListener('mouseleave', handleMouseLeave);
      }
  
      return () => {
        clearInterval(interval);
        if (buttonElement) {
          buttonElement.removeEventListener('mouseenter', handleMouseEnter);
          buttonElement.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }, []);

    return (
        <div className="book-contaniner" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="flex-container">
            <h2> BOOK YOUR CONSULTATION NOW</h2>
            <button ref={buttonRef} className={`button ${isAnimating ? 'animate' : ''}`}>SCHEDULE NOW</button>

            </div>
        </div>
    );
};

export default Booknow;