import { useState, useEffect } from 'react';

const safelyGetWindowWidth = () => (typeof window !== `undefined` ? window.innerWidth : 0);

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(safelyGetWindowWidth());

  setTimeout(() => setWindowWidth(safelyGetWindowWidth()), 10);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(safelyGetWindowWidth());
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);
    window.addEventListener('load', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}
