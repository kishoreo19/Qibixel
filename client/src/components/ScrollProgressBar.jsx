import React, { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      backgroundColor: 'transparent',
      zIndex: 1000,
      pointerEvents: 'none'
    }}>
      <div style={{
        height: '100%',
        width: `${scrollProgress}%`,
        backgroundColor: 'var(--accent-copper)',
        boxShadow: '0 0 8px rgba(181, 106, 69, 0.8)',
        transition: 'width 100ms ease-out'
      }}></div>
    </div>
  );
}
