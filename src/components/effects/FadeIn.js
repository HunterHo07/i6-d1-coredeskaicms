'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FadeIn = ({ 
  children, 
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 50,
  className = '',
  triggerOnce = true,
  ...props 
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Set initial state
    const initialState = {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    };

    gsap.set(element, initialState);

    // Create animation
    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power2.out',
    });

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      animation,
      toggleActions: triggerOnce ? 'play none none none' : 'play none none reverse',
    });

    return () => {
      trigger.kill();
      animation.kill();
    };
  }, [direction, delay, duration, distance, triggerOnce]);

  return (
    <div ref={elementRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default FadeIn;
