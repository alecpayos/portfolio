'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';

const ScrollContext = createContext({
  x: 0,
  y: 0,
});

export const ScrollContextProvider = ({ children } : { children: ReactNode }) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={scrollPosition}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
